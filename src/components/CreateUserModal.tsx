"use client"

import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { X, Plus } from "lucide-react"


interface CarData {
    make: string;
    model: string;
    price: number;
    year?: number;
    color?: string;
    transmission?: string;
    fuelType?: string;
    mileage?: number;
    vin?: string;
    doors?: number;
    description?: string;
}

interface CreateUserModalProps {
    onSave: (newData: CarData) => void;
}
export function CreateUserModal({ onSave }: CreateUserModalProps) {
    const [isOpen, setIsOpen] = useState(false)
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
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleClose = () => setIsOpen(false)



    const [formData, setFormData] = React.useState<CarData>({
        make: '',
        model: '',
        price: 0
    });

    const handleInputChange = (field: keyof CarData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onSave(formData);
        // Limpiar el formulario después de guardar
        setFormData({
            make: '',
            model: '',
            price: 0
        });
        //onClose();
    };

    const handleCancel = () => {
        // Limpiar el formulario al cancelar
        setFormData({
            make: '',
            model: '',
            price: 0
        });
        //onClose();
    };

    const modal = (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={handleClose}
                tabIndex={0}
            />

            {/* Modal */}
            <div
                className={`fixed inset-y-0 right-0 z-50 flex transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="w-screen max-w-full sm:max-w-/3 lg:max-w-/3 xl:max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menú Principal</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Accede a todas las funciones</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Cerrar</span>
                        </Button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <form className="flex-1 overflow-y-auto px-6 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="flex flex-col items-start">
                                    <label htmlFor="make" className="text-right">
                                        Marca
                                    </label>
                                    <input
                                        id="make"
                                        type="text"
                                        value={formData.make}
                                        onChange={(e) => handleInputChange('make', e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                                        required
                                        placeholder="Ingrese la marca"
                                    />
                                </div>

                                <div className="flex flex-col items-start">
                                    <label htmlFor="model" className="text-right">
                                        Modelo
                                    </label>
                                    <input
                                        id="model"
                                        type="text"
                                        value={formData.model}
                                        onChange={(e) => handleInputChange('model', e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                                        required
                                        placeholder="Ingrese el modelo"
                                    />
                                </div>

                                <div className="flex flex-col items-start">
                                    <label htmlFor="price" className="text-right">
                                        Precio
                                    </label>
                                    <input
                                        id="price"
                                        type="number"
                                        value={formData.price}
                                        onChange={(e) => handleInputChange('price', Number(e.target.value))}
                                        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                        min="0"
                                        step="0.01"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2 py-4">
                                {/* Tus campos existentes... */}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {/* Año */}
                                    <div className="flex flex-col">
                                        <label htmlFor="year" className="mb-1 font-medium text-sm text-gray-700">Año</label>
                                        <input
                                            id="year"
                                            type="number"
                                            // value={formData.year}
                                            onChange={(e) => handleInputChange('year', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ej. 2022"
                                        />
                                    </div>

                                    {/* Color */}
                                    <div className="flex flex-col">
                                        <label htmlFor="color" className="mb-1 font-medium text-sm text-gray-700">Color</label>
                                        <input
                                            id="color"
                                            type="text"
                                            // value={formData.color}
                                            onChange={(e) => handleInputChange('color', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ej. Rojo"
                                        />
                                    </div>

                                    {/* Transmisión */}
                                    <div className="flex flex-col">
                                        <label htmlFor="transmission" className="mb-1 font-medium text-sm text-gray-700">Transmisión</label>
                                        <input
                                            id="transmission"
                                            type="text"
                                            // value={formData.transmission}
                                            onChange={(e) => handleInputChange('transmission', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Manual / Automática"
                                        />
                                    </div>

                                    {/* Combustible */}
                                    <div className="flex flex-col">
                                        <label htmlFor="fuelType" className="mb-1 font-medium text-sm text-gray-700">Combustible</label>
                                        <input
                                            id="fuelType"
                                            type="text"
                                            // value={formData.fuelType}
                                            onChange={(e) => handleInputChange('fuelType', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Gasolina / Diesel / Eléctrico"
                                        />
                                    </div>

                                    {/* Kilometraje */}
                                    <div className="flex flex-col">
                                        <label htmlFor="mileage" className="mb-1 font-medium text-sm text-gray-700">Kilometraje</label>
                                        <input
                                            id="mileage"
                                            type="number"
                                            // value={formData.mileage}
                                            onChange={(e) => handleInputChange('mileage', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ej. 50000"
                                        />
                                    </div>

                                    {/* VIN */}
                                    <div className="flex flex-col">
                                        <label htmlFor="vin" className="mb-1 font-medium text-sm text-gray-700">Número VIN</label>
                                        <input
                                            id="vin"
                                            type="text"
                                            // value={formData.vin}
                                            onChange={(e) => handleInputChange('vin', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Número de serie del vehículo"
                                        />
                                    </div>

                                    {/* Puertas */}
                                    <div className="flex flex-col">
                                        <label htmlFor="doors" className="mb-1 font-medium text-sm text-gray-700">Número de Puertas</label>
                                        <input
                                            id="doors"
                                            type="number"
                                            // value={formData.doors}
                                            onChange={(e) => handleInputChange('doors', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ej. 4"
                                        />
                                    </div>

                                    {/* Descripción */}
                                    <div className="flex flex-col sm:col-span-2">
                                        <label htmlFor="description" className="mb-1 font-medium text-sm text-gray-700">Descripción</label>
                                        <textarea
                                            id="description"
                                            rows={3}
                                            value={formData.description}
                                            onChange={(e) => handleInputChange('description', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            placeholder="Observaciones o detalles adicionales"
                                        />
                                    </div>
                                </div>
                            </div>



                        </form>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-2 border-t border-gray-200 dark:border-gray-700 p-6">
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="submit" onClick={handleSubmit}>
                            Crear
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
    if (!mounted) return null
    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="default" className="bg-blue-500 text-white hover:bg-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Vehículo
            </Button>

            {createPortal(modal, document.body)}
        </>
    )
}
