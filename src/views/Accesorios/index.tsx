import { accesoriosData, type Accesorio } from '@/constants';
import { useEffect, useState } from 'react';


export const Accesorios = () => {
    const [accesorios, setAccesorios] = useState<Accesorio[]>([]);
    const [loading, setLoading] = useState(true);

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

                {/* Filtros por categoría */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Todos
                        </button>
                        {categorias.map((categoria) => (
                            <button
                                key={categoria}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
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

                {/* Grid de accesorios */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {accesorios.map((accesorio) => (
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
                                <div className="text-3xl font-bold text-blue-600">{accesorios.length}</div>
                                <div className="text-gray-600">Total Accesorios</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">{categorias.length}</div>
                                <div className="text-gray-600">Categorías</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">
                                    ${accesorios.reduce((sum, acc) => sum + acc.precio, 0).toFixed(2)}
                                </div>
                                <div className="text-gray-600">Valor Total</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">
                                    ${(accesorios.reduce((sum, acc) => sum + acc.precio, 0) / accesorios.length).toFixed(2)}
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
