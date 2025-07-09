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
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear Nuevo Usuario</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
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
                        
                        <div className="grid grid-cols-4 items-center gap-4">
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
                        
                        <div className="grid grid-cols-4 items-center gap-4">
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
                    
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Crear
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 