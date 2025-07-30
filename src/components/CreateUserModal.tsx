"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal, ModalContent, ModalFooter, ModalSidebar } from "@/components/ui/modal"
import { Car, Plus, Wrench } from "lucide-react"
import { Repuestos } from "@/views/Repuestos"
import { Accesorios } from "@/views/Accesorios"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { accesoriosData, repuestosData, type Accesorio, type Repuesto } from "@/constants"

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
    const [listaMostrarSidebar, setListaMostrarSidebar] = useState<"Nuevo Vehículo" | "Repuestos" | "Accesorios">("Nuevo Vehículo");
    const [repuestoSeleccionado, setRepuestoSeleccionado] = useState<Repuesto | null>(null);
    const [accesorioSeleccionado, setAccesorioSeleccionado] = useState<Accesorio | null>(null);
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = React.useState<CarData>({
        make: '',
        model: '',
        price: 0
    });

    // Estados para los filtros
    const [filtroRepuestos, setFiltroRepuestos] = useState<string>("");
    const [filtroAccesorios, setFiltroAccesorios] = useState<string>("");

     // Filtrar datos según la categoría seleccionada
    const repuestosFiltrados = filtroRepuestos 
        ? repuestosData.filter(r => r.categoria === filtroRepuestos)
        : repuestosData;

    const accesoriosFiltrados = filtroAccesorios 
        ? accesoriosData.filter(a => a.categoria === filtroAccesorios)
        : accesoriosData;

    // Función para resetear completamente el formulario
    const resetForm = () => {
        setFormData({
            make: '',
            model: '',
            price: 0
        });
        setListaMostrarSidebar("Nuevo Vehículo");
        setRepuestoSeleccionado(null);
        setAccesorioSeleccionado(null);
        setFiltroRepuestos("");
        setFiltroAccesorios("");
    };

    // Función para manejar el cierre del modal
    const handleCloseModal = () => {
        resetForm();
        setIsOpen(false);
    };

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
        handleCloseModal();
    };

    const handleCancel = () => {
        handleCloseModal();
    };

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="default" >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Vehículo
            </Button>

            <Modal
                size="xl"
                sidebar={true}
                isOpen={isOpen}
                onClose={handleCloseModal}
                title="Nuevo Vehículo"
                subtitle="Crea un nuevo vehículo"
                childrenSidebar={
                    <ModalSidebar>
                        <Button variant="secondary" className="flex flex-row w-full items-center justify-center" onClick={() => setListaMostrarSidebar("Nuevo Vehículo")} disabled={listaMostrarSidebar === "Nuevo Vehículo"}>
                            <Plus className="size-6" />
                            <span className="text-sm">Nuevo Vehículo</span>
                        </Button>
                        <Button variant="secondary" className="flex flex-row w-full items-center justify-center" onClick={() => setListaMostrarSidebar("Repuestos")} disabled={listaMostrarSidebar === "Repuestos"}>
                            <Wrench className="size-6" />
                            <span className="text-sm">Repuestos</span>
                        </Button>
                        <Button variant="secondary" className="flex flex-row w-full items-center justify-center" onClick={() => setListaMostrarSidebar("Accesorios")} disabled={listaMostrarSidebar === "Accesorios"}>
                            <Car className="size-6" />
                            <span className="text-sm">Accesorios</span>
                        </Button>
                    </ModalSidebar>
                }
            >
                <ModalContent className="p-6">
                    {listaMostrarSidebar === "Nuevo Vehículo" && (
                        <form className="space-y-4">
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {/* Año */}
                                    <div className="flex flex-col">
                                        <label htmlFor="year" className="mb-1 font-medium text-sm text-gray-700">Año</label>
                                        <input
                                            id="year"
                                            type="number"
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
                                            onChange={(e) => handleInputChange('doors', e.target.value)}
                                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ej. 4"
                                        />
                                    </div>

                                    {/* Repuestos con Filtro */}
                                    <div className="flex w-full sm:col-span-2 space-x-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="secondary" className="flex flex-row w-full items-center justify-center">
                                                    <Wrench className="size-6" />
                                                    <span className="text-sm">{repuestoSeleccionado ? repuestoSeleccionado.nombre : "Repuestos"}</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {repuestosFiltrados.map((repuesto: Repuesto) => (
                                                    <DropdownMenuItem key={repuesto.id} onClick={() => setRepuestoSeleccionado(repuesto)}>
                                                        <div className="flex flex-col">
                                                            <span className="font-medium">{repuesto.nombre}</span>
                                                            <span className="text-xs text-gray-500">{repuesto.categoria} - ${repuesto.precio}</span>
                                                        </div>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    {/* Accesorios con Filtro */}
                                    <div className="flex w-full sm:col-span-2 space-x-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="secondary" className="flex flex-row w-full items-center justify-center">
                                                    <Car className="size-6" />
                                                    <span className="text-sm">{accesorioSeleccionado ? accesorioSeleccionado.nombre : "Accesorios"}</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {accesoriosFiltrados.map((accesorio: Accesorio) => (
                                                    <DropdownMenuItem key={accesorio.id} onClick={() => setAccesorioSeleccionado(accesorio)}>
                                                        <div className="flex flex-col">
                                                            <span className="font-medium">{accesorio.nombre}</span>
                                                            <span className="text-xs text-gray-500">{accesorio.categoria} - ${accesorio.precio}</span>
                                                        </div>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
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
                    )}

                    {listaMostrarSidebar === "Repuestos" && (
                        <Repuestos />
                    )}

                    {listaMostrarSidebar === "Accesorios" && (
                        <Accesorios />
                    )}
                </ModalContent>

                <ModalFooter>
                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="submit" onClick={handleSubmit}>
                            Crear
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}
