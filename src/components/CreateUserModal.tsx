import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    isOpen: boolean;
    onClose: () => void;
    onSave: (newData: CarData) => void;
}

export default function CreateUserModal({ isOpen, onClose, onSave }: CreateUserModalProps) {
    const [formData, setFormData] = useState<CarData>({
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
        onClose();
    };

    const handleCancel = () => {
        // Limpiar el formulario al cancelar
        setFormData({
            make: '',
            model: '',
            price: 0
        });
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="w-[90vw] max-w-4xl max-h-[90vh] flex flex-col p-0 border-none">
                <DialogHeader className="shrink-0 p-6 pb-4">
                    <DialogTitle>Crear Nuevo Usuario</DialogTitle>
                </DialogHeader>
                
                <form  className="flex-1 overflow-y-auto px-6 space-y-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="make" className="text-right">
                                Marca
                            </label>
                            <input
                                id="make"
                                type="text"
                                value={formData.make}
                                onChange={(e) => handleInputChange('make', e.target.value)}
                                className="col-span-3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                placeholder="Ingrese la marca"
                            />
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="model" className="text-right">
                                Modelo
                            </label>
                            <input
                                id="model"
                                type="text"
                                value={formData.model}
                                onChange={(e) => handleInputChange('model', e.target.value)}
                                className="col-span-3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                placeholder="Ingrese el modelo"
                            />
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="price" className="text-right">
                                Precio
                            </label>
                            <input
                                id="price"
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', Number(e.target.value))}
                                className="col-span-3 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4 py-4">
                        {/* Tus campos existentes... */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <DialogFooter className="shrink-0 p-6 pt-4 border-t">
                    <Button type="button" variant="outline" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit" onClick={handleSubmit}>
                        Crear
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
} 