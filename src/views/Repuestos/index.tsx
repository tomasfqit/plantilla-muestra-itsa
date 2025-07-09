import { useState } from 'react';

interface Repuesto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    modelo: string;
    stock: number;
    imagen: string;
    codigo: string;
}

const repuestosData: Repuesto[] = [
    {
        id: 1,
        nombre: "Filtro de Aceite",
        descripcion: "Filtro de aceite de alta calidad para motores Toyota",
        precio: 25.99,
        categoria: "Filtros",
        modelo: "Corolla, Camry, RAV4",
        stock: 45,
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
        codigo: "TOY-FIL-001"
    },
    {
        id: 2,
        nombre: "Pastillas de Freno",
        descripcion: "Pastillas de freno cerámicas para mejor rendimiento",
        precio: 89.99,
        categoria: "Frenos",
        modelo: "Corolla, Camry, Highlander",
        stock: 32,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        codigo: "TOY-BRK-002"
    },
    {
        id: 3,
        nombre: "Batería 12V",
        descripcion: "Batería de 12V con garantía de 24 meses",
        precio: 149.99,
        categoria: "Eléctrico",
        modelo: "Todos los modelos",
        stock: 18,
        imagen: "https://images.unsplash.com/photo-1621012904886-419379ce6824?w=300&h=200&fit=crop",
        codigo: "TOY-BAT-003"
    },
    {
        id: 4,
        nombre: "Aceite de Motor 5W-30",
        descripcion: "Aceite sintético de alto rendimiento",
        precio: 34.99,
        categoria: "Lubricantes",
        modelo: "Corolla, Camry, RAV4, Highlander",
        stock: 67,
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
        codigo: "TOY-OIL-004"
    },
    {
        id: 5,
        nombre: "Radiador",
        descripcion: "Radiador de aluminio para mejor disipación de calor",
        precio: 299.99,
        categoria: "Sistema de Refrigeración",
        modelo: "Camry, Highlander",
        stock: 12,
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
        codigo: "TOY-RAD-005"
    },
    {
        id: 6,
        nombre: "Amortiguadores Delanteros",
        descripcion: "Amortiguadores de gas para mejor estabilidad",
        precio: 189.99,
        categoria: "Suspensión",
        modelo: "Corolla, Camry, RAV4",
        stock: 24,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        codigo: "TOY-SUS-006"
    },
    {
        id: 7,
        nombre: "Filtro de Aire",
        descripcion: "Filtro de aire de alto flujo para mejor rendimiento",
        precio: 19.99,
        categoria: "Filtros",
        modelo: "Todos los modelos",
        stock: 89,
        imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
        codigo: "TOY-AIR-007"
    },
    {
        id: 8,
        nombre: "Bujías de Encendido",
        descripcion: "Bujías de iridio para mejor combustión",
        precio: 45.99,
        categoria: "Motor",
        modelo: "Corolla, Camry, RAV4, Highlander",
        stock: 56,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        codigo: "TOY-SPK-008"
    }
];

export const Repuestos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(repuestosData.map(repuesto => repuesto.categoria))];

    const filteredRepuestos = repuestosData.filter(repuesto => {
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

                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-gray-600">
                        Mostrando {filteredRepuestos.length} de {repuestosData.length} repuestos
                    </p>
                </div>

                {/* Repuestos Grid */}
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

                {/* Empty State */}
                {filteredRepuestos.length === 0 && (
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