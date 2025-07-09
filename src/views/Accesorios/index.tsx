import { accesoriosData, type Accesorio } from '@/constants';
import { useEffect, useState } from 'react';


export const Accesorios = () => {
    const [accesorios, setAccesorios] = useState<Accesorio[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Simular carga asíncrona de datos
    useEffect(() => {
        const loadAccesorios = async () => {
            setLoading(true);
            // Simular delay de red
            await new Promise(resolve => setTimeout(resolve, 1500));
            setAccesorios(accesoriosData);
            setLoading(false);
        };

        loadAccesorios();
    }, []);

    const categorias = [...new Set(accesorios.map(accesorio => accesorio.categoria))];

    // Filtrar accesorios por búsqueda y categoría
    const filteredAccesorios = accesorios.filter((accesorio) => {
        const matchesSearch = accesorio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             accesorio.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || accesorio.categoria === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">🚗 Accesorios Automotrices</h1>
                    <p className="text-lg text-gray-600">Catálogo completo de accesorios para tu vehículo</p>
                    <div className="mt-4 flex justify-center items-center gap-4 text-sm text-gray-500">
                        <span>🏎️ Interior</span>
                        <span>🔧 Exterior</span>
                        <span>⚡ Electrónica</span>
                        <span>🛠️ Mantenimiento</span>
                    </div>
                </div>

                {/* Input de búsqueda */}
                <div className="mb-6">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="🔍 Buscar accesorios..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filtros por categoría */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button 
                            onClick={() => setSelectedCategory('Todos')}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                selectedCategory === 'Todos' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            Todos
                        </button>
                        {categorias.map((categoria) => (
                            <button
                                key={categoria}
                                onClick={() => setSelectedCategory(categoria)}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === categoria 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Cargando accesorios...</p>
                    </div>
                )}

                {/* Mensaje cuando no hay resultados */}
                {!loading && filteredAccesorios.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
                        <p className="text-gray-600">
                            {searchTerm 
                                ? `No hay accesorios que coincidan con "${searchTerm}"`
                                : 'No hay accesorios en esta categoría'
                            }
                        </p>
                    </div>
                )}

                {/* Grid de accesorios */}
                {!loading && filteredAccesorios.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        
                        {filteredAccesorios.map((accesorio) => (
                            <div
                                key={accesorio.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={accesorio.imagen}
                                        alt={accesorio.nombre}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            {accesorio.categoria}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {accesorio.nombre}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {accesorio.descripcion}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-green-600">
                                            ${accesorio.precio}
                                        </span>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Estadísticas */}
                {!loading && (
                    <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Resumen de Accesorios Automotrices</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">{filteredAccesorios.length}</div>
                                <div className="text-gray-600">Accesorios Mostrados</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">{categorias.length}</div>
                                <div className="text-gray-600">Categorías</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">
                                    ${filteredAccesorios.reduce((sum, acc) => sum + acc.precio, 0).toFixed(2)}
                                </div>
                                <div className="text-gray-600">Valor Total</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">
                                    ${filteredAccesorios.length > 0 ? (filteredAccesorios.reduce((sum, acc) => sum + acc.precio, 0) / filteredAccesorios.length).toFixed(2) : '0.00'}
                                </div>
                                <div className="text-gray-600">Precio Promedio</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
