import { repuestosData, type Repuesto } from '@/constants';
import { useState, useEffect } from 'react';




export const Repuestos = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [repuestos, setRepuestos] = useState<Repuesto[]>([]);
    const [loading, setLoading] = useState(true);

    // Simular carga asíncrona de datos
    useEffect(() => {
        const loadRepuestos = async () => {
            setLoading(true);
            // Simular delay de red
            await new Promise(resolve => setTimeout(resolve, 1500));
            setRepuestos(repuestosData);
            setLoading(false);
        };

        loadRepuestos();
    }, []);

    const categories = [...new Set(repuestos.map(repuesto => repuesto.categoria))];

    const filteredRepuestos = repuestos.filter(repuesto => {
        const matchesSearch = repuesto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            repuesto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            repuesto.codigo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '' || repuesto.categoria === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Repuestos Toyota</h1>
                    <p className="text-gray-600">Catálogo completo de repuestos originales y de alta calidad</p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                                Buscar repuesto
                            </label>
                            <input
                                type="text"
                                id="search"
                                placeholder="Buscar por nombre, descripción o código..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Categoría
                            </label>
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Todas las categorías</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Cargando repuestos...</p>
                    </div>
                )}

                {/* Results Count */}
                {!loading && (
                    <div className="mb-4">
                        <p className="text-gray-600">
                            Mostrando {filteredRepuestos.length} de {repuestos.length} repuestos
                        </p>
                    </div>
                )}

                {/* Repuestos Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRepuestos.map((repuesto) => (
                            <div key={repuesto.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={repuesto.imagen}
                                        alt={repuesto.nombre}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop';
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                            {repuesto.nombre}
                                        </h3>
                                        <span className="text-sm text-gray-500">{repuesto.codigo}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {repuesto.descripcion}
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Categoría:</span>
                                            <span className="font-medium">{repuesto.categoria}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Modelo:</span>
                                            <span className="font-medium">{repuesto.modelo}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Stock:</span>
                                            <span className={`font-medium ${repuesto.stock > 20 ? 'text-green-600' : repuesto.stock > 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                {repuesto.stock} unidades
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-blue-600">
                                            ${repuesto.precio.toFixed(2)}
                                        </span>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && filteredRepuestos.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron repuestos</h3>
                        <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
                    </div>
                )}
            </div>
        </div>
    );
};