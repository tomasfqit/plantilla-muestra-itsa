"use client"

import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    childrenSidebar?: React.ReactNode;
    showCloseButton?: boolean;
    className?: string;
}

interface ModalHeaderProps {
    title?: string;
    subtitle?: string;
    showCloseButton?: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

interface ModalContentProps {
    children: React.ReactNode;
    className?: string;
}

interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function ModalHeader({ title, subtitle, showCloseButton = true, onClose, children }: ModalHeaderProps) {
    if (!title && !subtitle && !showCloseButton && !children) return null;

    return (
        <div className="flex flex-row items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 ">
            {(title || subtitle) && (
                <div>
                    {title && <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>}
                    {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
                </div>
            )}
            {children}
            {showCloseButton && (
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cerrar</span>
                </Button>
            )}
        </div>
    )
}

export function ModalContent({ children, className = "" }: ModalContentProps) {
    return (
        <div className={`flex-1 overflow-y-auto ${className}`}>
            {children}
        </div>
    )
}

export function ModalFooter({ children, className = "" }: ModalFooterProps) {
    return (
        <div className={`border-t border-gray-200 dark:border-gray-700 p-6 ${className}`}>
            {children}
        </div>
    )
}

interface ModalSidebarProps {
    children: React.ReactNode;
    className?: string;
}

export function ModalSidebar({ children, className = "" }: ModalSidebarProps) {
    return (
        <div className={`bg-gray-200 w-[150px] flex flex-col gap-2 items-center pt-5 p-2 ${className}`}>
            {children}
        </div>
    )
}

export function Modal({
    isOpen,
    onClose,
    title,
    subtitle,
    children,
    childrenSidebar,
    showCloseButton = true,
    className = ""
}: ModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const modal = (
        <>
            {/* Overlay */}
            <div
                className={`flex flex-row fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} `}
                onClick={onClose}
                tabIndex={0}
            />

            <div
                className={`fixed inset-y-0 right-0 z-50 flex transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className={`w-screen max-w-full sm:max-w-/3 lg:max-w-/3 xl:max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl flex flex-row h-full ${className} bg-red-500`}>
                   <ModalSidebar>
                    {childrenSidebar}
                   </ModalSidebar>
                    <div className="flex-1 flex flex-col min-h-0">
                        <ModalHeader
                            title={title}
                            subtitle={subtitle}
                            showCloseButton={showCloseButton}
                            onClose={onClose}
                        />
                        <div className="flex-1 flex flex-col min-h-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    if (!mounted) return null
    return createPortal(modal, document.body)
} 