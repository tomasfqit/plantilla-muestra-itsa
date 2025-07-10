"use client"

import type React from "react"
import { useState, useMemo } from "react"
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Search,
    Home,
    Settings,
    Users,
    FileText,
    Database,
    Shield,
    Globe,
    Mail,
    Calendar,
    BarChart3,
    Package,
    CreditCard,
    User,
    MapPin,
    Bell,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { notificacionesData, type Notificacion } from "@/constants"
import Usuarios from "../Usuarios"

interface MenuItem {
    id: string
    title: string
    icon: React.ComponentType<any>
    children?: MenuItem[]
}

const menuData: MenuItem[] = [
    {
        id: "dashboard",
        title: "Inicio",
        icon: Home,
    },
    {
        id: "dashboard",
        title: "Panel de Control Principal",
        icon: Home,
        children: [
            {
                id: "analytics",
                title: "Análisis y Métricas Avanzadas",
                icon: BarChart3,
                children: [
                    { id: "sales-analytics", title: "Análisis de Ventas Detallado", icon: CreditCard },
                    { id: "user-analytics", title: "Comportamiento de Usuarios", icon: Users },
                    { id: "performance-metrics", title: "Métricas de Rendimiento", icon: BarChart3 },
                ],
            },
            {
                id: "reports",
                title: "Reportes y Documentación",
                icon: FileText,
                children: [
                    { id: "monthly-reports", title: "Reportes Mensuales Ejecutivos", icon: Calendar },
                    { id: "custom-reports", title: "Reportes Personalizados", icon: FileText },
                    { id: "export-data", title: "Exportación de Datos", icon: Database },
                ],
            },
        ],
    },
    {
        id: "users",
        title: "Gestión de Usuarios y Permisos",
        icon: Users,
        children: [
            {
                id: "user-management",
                title: "Administración de Usuarios",
                icon: Users,
                children: [
                    { id: "create-user", title: "Crear Nuevos Usuarios", icon: Users },
                    { id: "edit-users", title: "Editar Perfiles de Usuario", icon: Settings },
                    { id: "user-permissions", title: "Configurar Permisos", icon: Shield },
                ],
            },
            {
                id: "roles",
                title: "Roles y Privilegios del Sistema",
                icon: Shield,
                children: [
                    { id: "admin-roles", title: "Roles de Administrador", icon: Shield },
                    { id: "user-roles", title: "Roles de Usuario Final", icon: Users },
                    { id: "custom-roles", title: "Roles Personalizados", icon: Settings },
                ],
            },
        ],
    },
    {
        id: "products",
        title: "Catálogo de Productos y Servicios",
        icon: Package,
        children: [
            {
                id: "inventory",
                title: "Control de Inventario Avanzado",
                icon: Database,
                children: [
                    { id: "stock-management", title: "Gestión de Stock en Tiempo Real", icon: Package },
                    { id: "suppliers", title: "Proveedores y Suministros", icon: Globe },
                    { id: "warehouse", title: "Administración de Almacenes", icon: Database },
                ],
            },
            {
                id: "categories",
                title: "Categorías y Clasificaciones",
                icon: FileText,
                children: [
                    { id: "main-categories", title: "Categorías Principales", icon: FileText },
                    { id: "subcategories", title: "Subcategorías Detalladas", icon: FileText },
                    { id: "tags", title: "Etiquetas y Metadatos", icon: Settings },
                ],
            },
        ],
    },
    {
        id: "communications",
        title: "Centro de Comunicaciones",
        icon: Mail,
        children: [
            {
                id: "email-campaigns",
                title: "Campañas de Email Marketing",
                icon: Mail,
                children: [
                    { id: "create-campaign", title: "Crear Nueva Campaña", icon: Mail },
                    { id: "templates", title: "Plantillas de Email", icon: FileText },
                    { id: "analytics-email", title: "Análisis de Campañas", icon: BarChart3 },
                ],
            },
            {
                id: "notifications",
                title: "Sistema de Notificaciones",
                icon: Settings,
                children: [
                    { id: "push-notifications", title: "Notificaciones Push", icon: Settings },
                    { id: "sms-notifications", title: "Mensajes SMS", icon: Mail },
                    { id: "in-app-notifications", title: "Notificaciones en App", icon: Settings },
                ],
            },
        ],
    },
]

export default function ThreeLevelSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
    const [searchTerm, setSearchTerm] = useState("")
    const [activeItem, setActiveItem] = useState("Dashboard")
    const [currentLocation, setCurrentLocation] = useState("Cuenca")

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    const toggleExpanded = (itemId: string) => {
        const newExpanded = new Set(expandedItems)
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId)
        } else {
            newExpanded.add(itemId)
        }
        setExpandedItems(newExpanded)
    }

    const filterMenuItems = (items: MenuItem[], searchTerm: string): MenuItem[] => {
        if (!searchTerm) return items

        return items.reduce((filtered: MenuItem[], item) => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
            const filteredChildren = item.children ? filterMenuItems(item.children, searchTerm) : []

            if (matchesSearch || filteredChildren.length > 0) {
                filtered.push({
                    ...item,
                    children: filteredChildren.length > 0 ? filteredChildren : item.children,
                })
            }

            return filtered
        }, [])
    }

    const filteredMenuData = useMemo(() => filterMenuItems(menuData, searchTerm), [searchTerm])

    const renderMenuItem = (item: MenuItem, level = 0) => {
        const hasChildren = item.children && item.children.length > 0
        const isExpanded = expandedItems.has(item.id)
        const Icon = item.icon

        const paddingClass = level === 0 ? "pl-4" : level === 1 ? "pl-8" : "pl-12"
        const textSize = level === 0 ? "text-sm font-medium" : level === 1 ? "text-sm" : "text-xs"

        return (
            <div key={item.id} className="w-full">
                <div
                    className={`
    flex items-center justify-between w-full px-2 py-2 text-left text-gray-700 
    hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors duration-200
    ${paddingClass} ${textSize} ${!hasChildren ? "cursor-pointer" : "cursor-default"}
  `}
                    onClick={() => {
                        if (hasChildren) {
                            toggleExpanded(item.id)
                        } else {
                            // Console log para el último nivel del menú
                            setActiveItem(item.title)
                            console.log("Elemento seleccionado:", {
                                id: item.id,
                                title: item.title,
                                level: level,
                                timestamp: new Date().toISOString(),
                            })
                        }
                    }}
                >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{item.title}</span>
                    </div>
                    {hasChildren && (
                        <div className="flex-shrink-0 ml-2">
                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </div>
                    )}
                </div>

                {hasChildren && isExpanded && (
                    <div className="mt-1 space-y-1">{item.children!.map((child) => renderMenuItem(child, level + 1))}</div>
                )}
            </div>
        )
    }

    const renderContent = () => {
        switch (activeItem) {
            case "Inicio":
                return <div className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contenido Principal</h2>
                            <p className="text-gray-600 mb-6">
                                Este es el área de contenido principal que se adapta automáticamente al ancho disponible cuando el
                                sidebar se abre o se cierra.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contenido Principal</h2>
                            <p className="text-gray-600 mb-6">
                                Este es el área de contenido principal que se adapta automáticamente al ancho disponible cuando el
                                sidebar se abre o se cierra.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contenido Principal</h2>
                            <p className="text-gray-600 mb-6">
                                Este es el área de contenido principal que se adapta automáticamente al ancho disponible cuando el
                                sidebar se abre o se cierra.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ejemplo numero 1</h2>
                            <p className="text-gray-600 mb-6">
                                Crud y tabla, acceder al menu item: <strong>Análisis de Ventas Detallado</strong>
                            </p>
                        </div>
                    </div>
                   <div className="pt-4">
                        <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nota</h2>
                            <p className="text-gray-600 mb-6">
                                No tener en cuenta fallos de funcionameinto de la plantilla, solo es un ejemplo de como se puede usar el componente. En todo caso mejor y optimizar el fallo de funcionamiento.
                            </p>
                        </div>
                   </div>
                </div>
            case "Análisis de Ventas Detallado":
                return <Usuarios />
            default:
                return null
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div
                className={`
    ${sidebarOpen ? "w-80" : "w-0"} 
    lg:${sidebarOpen ? "w-80" : "w-0"}
    md:${sidebarOpen ? "w-full" : "w-0"}
    sm:${sidebarOpen ? "w-full" : "w-0"}
    transition-all duration-300 ease-in-out
    bg-white shadow-lg border-r border-gray-200
    fixed lg:relative z-30 h-full
    overflow-hidden
    ${sidebarOpen ? "block" : "hidden lg:block"}
  `}
            >
                <div
                    className={`flex flex-col h-full ${sidebarOpen ? "opacity-100" : "opacity-0 lg:opacity-0"} transition-opacity duration-300`}
                >
                    {/* Header */}
                    <div className="bg-black flex items-center justify-between p-4 border-b border-gray-200  flex-shrink-0 h-[69px]">
                        <h2 className="text-lg font-semibold text-white">ITSA</h2>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden flex-shrink-0"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Search Filter */}
                    <div className="p-4 border-b border-gray-200 flex-shrink-0">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar en el menú..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {filteredMenuData.map((item) => renderMenuItem(item))}
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={toggleSidebar} />}

            {/* Main Content */}
            <div
                className={`
        flex-1 flex flex-col transition-all duration-300 ease-in-out
        ${sidebarOpen ? "lg:ml-0" : "lg:ml-0"}
      `}
            >
                {/* Top Bar */}
                <div className="bg-brand-red  shadow-sm border-b border-gray-200 p-4 max-h-[69px]">
                    <header className="">
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
                </div>

                {/* Main Content Area */}
                {renderContent()}

            </div>
        </div>
    )
}
