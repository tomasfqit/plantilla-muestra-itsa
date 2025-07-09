import React from 'react';

interface Accesorio {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
}

const accesoriosData: Accesorio[] = [
    {
        id: 1,
        nombre: "Alfombras de Goma",
        descripcion: "Alfombras resistentes al agua y fácil limpieza",
        precio: 45.99,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        categoria: "Interior"
    },
    {
        id: 2,
        nombre: "Cubre Volante",
        descripcion: "Cubre volante de cuero sintético con costuras",
        precio: 29.99,
        imagen: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop",
        categoria: "Interior"
    },
    {
        id: 3,
        nombre: "Organizador de Maletero",
        descripcion: "Organizador plegable para mantener orden en el maletero",
        precio: 39.99,
        imagen: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
        categoria: "Organización"
    },
    {
        id: 4,
        nombre: "Cargador USB",
        descripcion: "Cargador rápido USB-C y USB-A para encendedor",
        precio: 19.99,
        imagen: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=300&h=200&fit=crop",
        categoria: "Electrónica"
    },
    {
        id: 5,
        nombre: "Soporte para Teléfono",
        descripcion: "Soporte ajustable para teléfono con ventosa",
        precio: 15.99,
        imagen: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
        categoria: "Electrónica"
    },
    {
        id: 6,
        nombre: "Cubre Asientos",
        descripcion: "Cubre asientos transpirable y lavable",
        precio: 89.99,
        imagen: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
        categoria: "Interior"
    },
    {
        id: 7,
        nombre: "Limpiaparabrisas",
        descripcion: "Juego de limpiaparabrisas de alta calidad",
        precio: 24.99,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        categoria: "Exterior"
    },
    {
        id: 8,
        nombre: "Aromatizante",
        descripcion: "Aromatizante de coche con fragancia duradera",
        precio: 12.99,
        imagen: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
        categoria: "Interior"
    },
    {
        id: 9,
        nombre: "Cable de Emergencia",
        descripcion: "Cables de emergencia para batería de coche",
        precio: 34.99,
        imagen: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=300&h=200&fit=crop",
        categoria: "Emergencia"
    },
    {
        id: 10,
        nombre: "Kit de Limpieza",
        descripcion: "Kit completo de limpieza para interior y exterior",
        precio: 49.99,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        categoria: "Mantenimiento"
    },
    {
        id: 11,
        nombre: "Cubre Espejos",
        descripcion: "Cubre espejos retrovisores plegables",
        precio: 18.99,
        imagen: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
        categoria: "Exterior"
    },
    {
        id: 12,
        nombre: "Porta Vasos",
        descripcion: "Porta vasos extraíble para consola central",
        precio: 9.99,
        imagen: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
        categoria: "Interior"
    }
];

export const Accesorios = () => {
    const categorias = [...new Set(accesoriosData.map(accesorio => accesorio.categoria))];

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

                {/* Grid de accesorios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {accesoriosData.map((accesorio) => (
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

                {/* Estadísticas */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Resumen de Accesorios Automotrices</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">{accesoriosData.length}</div>
                            <div className="text-gray-600">Total Accesorios</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">{categorias.length}</div>
                            <div className="text-gray-600">Categorías</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">
                                ${accesoriosData.reduce((sum, acc) => sum + acc.precio, 0).toFixed(2)}
                            </div>
                            <div className="text-gray-600">Valor Total</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600">
                                ${(accesoriosData.reduce((sum, acc) => sum + acc.precio, 0) / accesoriosData.length).toFixed(2)}
                            </div>
                            <div className="text-gray-600">Precio Promedio</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
