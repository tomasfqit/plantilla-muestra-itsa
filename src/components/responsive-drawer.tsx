"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useWindowWidth } from "./useWindowWidth"

interface ResponsiveDrawerProps {
    isOpen: boolean
    onClose: () => void
    size?: "small" | "medium" | "large"
    children: React.ReactNode
    title?: string
    footer?: React.ReactNode
}

const sizeClasses = {
    small: "w-[36rem]", // Era w-80 sm:w-96, ahora más grande
    medium: "w-[36rem] sm:w-[48rem]", // Era w-96 sm:w-[32rem], ahora más grande
    large: "w-[48rem] sm:w-[85rem]", // Era w-[32rem] sm:w-[40rem], ahora más grande
}

export function ResponsiveDrawer({ isOpen, onClose, size = "medium", children, title, footer }: ResponsiveDrawerProps) {
    const width = useWindowWidth();
    // Cerrar con Escape
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    if (!isOpen) return null
    console.log('width =>', width);
    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full bg-background  shadow-lg z-50",
                    "transform transition-transform duration-300 ease-in-out",
                    "flex flex-col",
                    // En móvil ocupa todo el ancho, en desktop usa el tamaño especificado
                    sizeClasses[size],
                    !isOpen && "translate-x-full",
                    isOpen && "translate-x-0",
                )}
                style={{
                    maxWidth: width,
                }}
            >
                {/* Header */}
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-28 bg-brand-red"></div>
                    <div className="flex flex-col w-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            {title && <h2 className="text-lg font-semibold">{title}</h2>}
                            <Button variant="ghost" size="icon" onClick={onClose} className="ml-auto">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Cerrar</span>
                            </Button>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col h-[92.5vh] overflow-y-auto">
                            {children}
                            {footer && <div className="border-t bg-background p-4 ">{footer}</div>}
                        </div>

                        {/* Footer */}
                        
                    </div>
                   
                </div>

                {/* Content */}
            </div>
        </>
    )
}
