import React, { useState, useEffect } from 'react';
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

interface EditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: CarData | null;
    onSave: (updatedData: CarData) => void;
}

export default function EditUserModal({ isOpen, onClose, data, onSave }: EditUserModalProps) {
    const [formData, setFormData] = useState<CarData>({
        make: '',
        model: '',
        price: 0
    });

    // Actualizar el formulario cuando cambie la data
    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleInputChange = (field: keyof CarData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    const handleCancel = () => {
        // Restaurar los datos originales
        if (data) {
            setFormData(data);
        }
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Editar Usuario</DialogTitle>
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
                            />
                        </div>
                    </div>
                    
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            Guardar
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
} 