export default function Dashboard() {
    return (
        <div className="flex flex-col gap-1 w-full">
            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Estadística 1</h3>
                    <p className="text-3xl font-bold text-blue-600">1,234</p>
                    <p className="text-sm text-gray-500">+12% desde el mes pasado</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Estadística 2</h3>
                    <p className="text-3xl font-bold text-green-600">5,678</p>
                    <p className="text-sm text-gray-500">+8% desde el mes pasado</p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Estadística 3</h3>
                    <p className="text-3xl font-bold text-purple-600">9,012</p>
                    <p className="text-sm text-gray-500">+15% desde el mes pasado</p>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido de </h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Este es el contenido principal de la sección . El sidebar se puede abrir y cerrar usando
                            el botón en el header.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 1</h4>
                                <p className="text-sm text-gray-600">
                                    El sidebar tiene un ancho fijo y se colapsa completamente cuando se cierra.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 2</h4>
                                <p className="text-sm text-gray-600">
                                    El menú tiene scroll automático cuando hay muchos elementos.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 3</h4>
                                <p className="text-sm text-gray-600">
                                    El contenido principal se ajusta automáticamente al ancho disponible.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 4</h4>
                                <p className="text-sm text-gray-600">Transiciones suaves al abrir y cerrar el sidebar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2"></div>
            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido de </h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Este es el contenido principal de la sección . El sidebar se puede abrir y cerrar usando
                            el botón en el header.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 1</h4>
                                <p className="text-sm text-gray-600">
                                    El sidebar tiene un ancho fijo y se colapsa completamente cuando se cierra.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 2</h4>
                                <p className="text-sm text-gray-600">
                                    El menú tiene scroll automático cuando hay muchos elementos.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 3</h4>
                                <p className="text-sm text-gray-600">
                                    El contenido principal se ajusta automáticamente al ancho disponible.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 4</h4>
                                <p className="text-sm text-gray-600">Transiciones suaves al abrir y cerrar el sidebar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-2"></div>
            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido de </h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Este es el contenido principal de la sección . El sidebar se puede abrir y cerrar usando
                            el botón en el header.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 1</h4>
                                <p className="text-sm text-gray-600">
                                    El sidebar tiene un ancho fijo y se colapsa completamente cuando se cierra.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 2</h4>
                                <p className="text-sm text-gray-600">
                                    El menú tiene scroll automático cuando hay muchos elementos.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 3</h4>
                                <p className="text-sm text-gray-600">
                                    El contenido principal se ajusta automáticamente al ancho disponible.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Característica 4</h4>
                                <p className="text-sm text-gray-600">Transiciones suaves al abrir y cerrar el sidebar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}