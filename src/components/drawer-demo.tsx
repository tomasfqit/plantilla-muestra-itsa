"use client"

import * as React from "react"
import { Menu, Settings, User, Bell, X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { ResponsiveDrawer } from "./responsive-drawer";

export default function DrawerDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [drawerSize, setDrawerSize] = React.useState<"small" | "medium" | "large">("medium");

    const footer = (
        <div className="flex flex-row w-full justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
                <span>Cerrar</span>
            </Button>
            <Button variant="default" onClick={() => setIsOpen(false)}>
                <Save className="h-4 w-4" />
                <span>Guardar</span>
            </Button>
        </div>
    )

    return (
        <div className="min-h-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Demo Drawer Responsive</h1>
                    <Button onClick={() => setIsOpen(true)} className="gap-2">
                        <Menu className="h-4 w-4" />
                        Abrir Drawer
                    </Button>
                </div>

                {/* Controles de tamaño */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Controles de Tamaño</CardTitle>
                        <CardDescription>Selecciona el tamaño del drawer antes de abrirlo</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <span className="font-public-sans body-xs">
                            Este es solo un ejemplo visual. No define tamaños específicos ni el método de apertura.
                             Su propósito es únicamente ilustrativo para dar una idea general. Dejamos a su experiencia el manejo de tamaños y métodos de apertura.
                             En este caso ya tenemos tres tamaños definidos pequeño, mediano y grande lo cual nos permite manejar el tamaño según como sea la necesidad.
                        </span>

                        <div className="flex gap-2 flex-wrap">
                            {(["small", "medium", "large"] as const).map((size) => (
                                <Button
                                    key={size}
                                    variant={drawerSize === size ? "default" : "outline"}
                                    onClick={() => setDrawerSize(size)}
                                    className="capitalize"
                                >
                                    {size === "small" && "Pequeño"}
                                    {size === "medium" && "Mediano"}
                                    {size === "large" && "Grande"}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Contenido de ejemplo */}
                {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Perfil
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Gestiona tu información personal y preferencias de cuenta.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings className="h-5 w-5" />
                                Configuración
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Ajusta las configuraciones de la aplicación según tus necesidades.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5" />
                                Notificaciones
                                <Badge variant="secondary">3</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Revisa tus notificaciones y alertas pendientes.</p>
                        </CardContent>
                    </Card>
                </div> */}
            </div>

            {/* Drawer */}
            <ResponsiveDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} size={drawerSize} title="Panel Lateral" footer={footer}>
                <div className="w-full overflow-y-auto h-[92.5vh]">
                    <div className="w-full p-2">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Información del Drawer</h3>
                            <div className="space-y-2 text-sm">
                                <p>
                                    <strong>Tamaño actual:</strong> {drawerSize}
                                </p>
                                <p>
                                    <strong>Responsive:</strong> En móvil ocupa todo el ancho
                                </p>
                                <p>
                                    <strong>Animación:</strong> Desliza de derecha a izquierda
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Opciones de Navegación</h3>

                            <div className="space-y-2">
                                {[
                                    { icon: User, label: "Mi Perfil", badge: null },
                                    { icon: Settings, label: "Configuración", badge: null },
                                    { icon: Bell, label: "Notificaciones", badge: "3" },
                                ].map((item, index) => (
                                    <Button key={index} variant="ghost" className="w-full justify-start gap-3 h-12">
                                        <item.icon className="h-5 w-5" />
                                        <span className="flex-1 text-left">{item.label}</span>
                                        {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Contenido de Ejemplo</h3>
                            <div className="space-y-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Card key={i}>
                                        <CardContent className="p-4">
                                            <h4 className="font-medium mb-2">Elemento {i + 1}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Este es contenido de ejemplo para mostrar cómo se ve el drawer con diferentes cantidades de
                                                contenido.
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ResponsiveDrawer>
        </div>
    )
}
