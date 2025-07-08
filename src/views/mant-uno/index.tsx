"use client"

import { useState } from "react"
import {
    Menu,
    X,
    Home,
    Users,
    Settings,
    FileText,
    BarChart,
    Mail,
    Calendar,
    Folder,
    Search,
    Bell,
    User,
} from "lucide-react"

const menuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: Users, label: "Usuarios", href: "#" },
    { icon: FileText, label: "Documentos", href: "#" },
    { icon: BarChart, label: "Reportes", href: "#" },
    { icon: Mail, label: "Mensajes", href: "#" },
    { icon: Calendar, label: "Calendario", href: "#" },
    { icon: Folder, label: "Proyectos", href: "#" },
    { icon: Search, label: "Búsqueda", href: "#" },
    { icon: Settings, label: "Configuración", href: "#" },
]

// Elementos adicionales para demostrar el scroll
const additionalItems = [
    { icon: Bell, label: "Notificaciones", href: "#" },
    { icon: User, label: "Perfil", href: "#" },
    { icon: FileText, label: "Archivos", href: "#" },
    { icon: BarChart, label: "Analytics", href: "#" },
    { icon: Mail, label: "Correos", href: "#" },
    { icon: Calendar, label: "Eventos", href: "#" },
    { icon: Folder, label: "Carpetas", href: "#" },
    { icon: Search, label: "Explorar", href: "#" },
]

export default function SidebarLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [activeItem, setActiveItem] = useState("Dashboard")

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const allMenuItems = [...menuItems, ...additionalItems]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${sidebarOpen ? "w-64" : "w-0"} transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-lg`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800">Mi App</h2>
                    </div>

                    {/* Menu Items with Scroll */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <ul className="space-y-1 px-3">
                            {allMenuItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <li key={index}>
                                        <button
                                            onClick={() => setActiveItem(item.label)}
                                            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${activeItem === item.label
                                                    ? "bg-blue-100 text-blue-700 border-r-2 border-blue-700"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5 mr-3" />
                                            {item.label}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700">Usuario</p>
                                <p className="text-xs text-gray-500">usuario@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Sidebar Toggle Button */}
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                            >
                                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>

                            <h1 className="ml-4 text-xl font-semibold text-gray-800">{activeItem}</h1>
                        </div>

                        {/* Header Actions */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                                <User className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto">
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
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido de {activeItem}</h2>
                                <div className="space-y-4">
                                    <p className="text-gray-600">
                                        Este es el contenido principal de la sección {activeItem}. El sidebar se puede abrir y cerrar usando
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
                </main>
            </div>
        </div>
    )
}
