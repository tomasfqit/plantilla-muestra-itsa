"use client"

import { useState } from "react"
import {
    Menu,
    X,
    Home,
    Settings,
    FileText,
    BarChart,
    Mail,
    Calendar,
    Folder,
    Search,
    Bell,
    User,
    Car,
    MapPin,
    ChevronDown,
} from "lucide-react"
import Dashboard from "../Dashboard"
import Usuarios from "../Usuarios"
import FiltrosModal from "../filtros-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { notificacionesData, type Notificacion } from "@/constants"
import { Button } from "@/components/ui/button"

const menuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: Car, label: "Vehiculos", href: "#" },
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
    { icon: Bell, label: "tabla1", href: "#" },
    { icon: User, label: "Perfil", href: "#" },
    { icon: FileText, label: "Archivos", href: "#" },
    { icon: BarChart, label: "Analytics", href: "#" },
    { icon: Mail, label: "Correos", href: "#" },
    { icon: Calendar, label: "Eventos", href: "#" },
    { icon: Folder, label: "Carpetas", href: "#" },
    { icon: Search, label: "Explorar 1", href: "#" },
    { icon: Search, label: "Explorar 2", href: "#" },
    { icon: Search, label: "Explorar 3", href: "#" },
    { icon: Search, label: "Explorar 4", href: "#" },
    { icon: Search, label: "Explorar 5", href: "#" },
    { icon: Search, label: "Explorar 6", href: "#" },
    { icon: Search, label: "Explorar 7", href: "#" },
    { icon: Search, label: "Explorar 8", href: "#" },
    { icon: Search, label: "Explorar 9", href: "#" },
    { icon: Search, label: "Explorar 10", href: "#" },
    { icon: Search, label: "Explorar 11", href: "#" },
    { icon: Search, label: "Explorar 12", href: "#" },

]

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [activeItem, setActiveItem] = useState("Dashboard")
    const [currentLocation, setCurrentLocation] = useState("Cuenca")
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
                    <div className="bg-brand-red flex items-center justify-between p-4 border-b border-gray-200 h-[69px]">
                        <h2 className="text-xl font-semibold text-white">{sidebarOpen && "ITSA"}</h2>
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
                    {/* <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700">Usuario</p>
                                <p className="text-xs text-gray-500">usuario@email.com</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-brand-red shadow-sm border-b border-gray-200 px-6 py-4 ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Sidebar Toggle Button */}
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-lg text-white hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                            >
                                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                            <h1 className="ml-4 text-xl font-semibold text-white">{activeItem}</h1>
                        </div>

                        <div className="flex items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                                        <MapPin className="w-5 h-5" />
                                        {`Agencia - ${currentLocation}`}
                                        <ChevronDown className="w-5 h-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => setCurrentLocation("Cuenca")}>
                                        <span className="text-sm">Cuenca</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setCurrentLocation("Quito")}>
                                        <span className="text-sm">Quito</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Header Actions */}
                        <div className="flex items-center space-x-4">

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                                        <Bell className="w-5 h-5" color="white" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {notificacionesData.map((notificacion: Notificacion) => (
                                        <DropdownMenuItem key={notificacion.id}>
                                            {notificacion.titulo}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                                        <User className="w-5 h-5" color="white" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <span className="text-sm">Configuración</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span className="text-sm">Cerrar sesión</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>
                {/* Main Content */}
                <main className="flex-1 bg-gray-200 overflow-y-auto p-2">
                
                   {activeItem === "Dashboard" && <Dashboard />}
                   {activeItem === "Vehiculos" && <Usuarios />}
                   {activeItem === "Documentos" && <FiltrosModal />}
                   
                </main>
            </div>
        </div>
    )
}
