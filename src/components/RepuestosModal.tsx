import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Repuesto {
    id: number;
    codigo: string;
    nombre: string;
    marca: string;
    modelo: string;
    categoria: string;
    precio: number;
    stock: number;
}

interface RepuestosModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectRepuesto: (repuesto: Repuesto) => void;
}

export default function RepuestosModal({ isOpen, onClose, onSelectRepuesto }: RepuestosModalProps) {
    const [repuestos, setRepuestos] = useState<Repuesto[]>([]);
    const [filteredRepuestos, setFilteredRepuestos] = useState<Repuesto[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    // Datos de ejemplo - en un caso real esto vendría de una API
    const mockRepuestos: Repuesto[] = [
        {
            id: 1,
            codigo: "R001",
            nombre: "Filtro de Aceite",
            marca: "Toyota",
            modelo: "Corolla 2020-2023",
            categoria: "Filtros",
            precio: 25.50,
            stock: 15
        },
        {
            id: 2,
            codigo: "R002",
            nombre: "Pastillas de Freno",
            marca: "Honda",
            modelo: "Civic 2019-2022",
            categoria: "Frenos",
            precio: 45.80,
            stock: 8
        },
        {
            id: 3,
            codigo: "R003",
            nombre: "Batería 12V",
            marca: "Ford",
            modelo: "Focus 2018-2021",
            categoria: "Baterías",
            precio: 120.00,
            stock: 12
        },
        {
            id: 4,
            codigo: "R004",
            nombre: "Aceite de Motor 5W-30",
            marca: "Chevrolet",
            modelo: "Cruze 2020-2023",
            categoria: "Lubricantes",
            precio: 35.90,
            stock: 25
        },
        {
            id: 5,
            codigo: "R005",
            nombre: "Amortiguador Delantero",
            marca: "Nissan",
            modelo: "Sentra 2019-2022",
            categoria: "Suspensión",
            precio: 85.60,
            stock: 6
        },
        {
            id: 6,
            codigo: "R006",
            nombre: "Radiador",
            marca: "Mazda",
            modelo: "3 2020-2023",
            categoria: "Sistema de Refrigeración",
            precio: 180.00,
            stock: 4
        },
        {
            id: 7,
            codigo: "R007",
            nombre: "Bujías",
            marca: "Hyundai",
            modelo: "Elantra 2019-2022",
            categoria: "Sistema de Encendido",
            precio: 12.50,
            stock: 30
        },
        {
            id: 8,
            codigo: "R008",
            nombre: "Correa de Distribución",
            marca: "Kia",
            modelo: "Forte 2020-2023",
            categoria: "Motor",
            precio: 65.00,
            stock: 10
        }
    ];

    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            // Simular carga de datos
            setTimeout(() => {
                setRepuestos(mockRepuestos);
                setFilteredRepuestos(mockRepuestos);
                setLoading(false);
            }, 500);
        }
    }, [isOpen]);

    useEffect(() => {
        const filtered = repuestos.filter(repuesto =>
            repuesto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repuesto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repuesto.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repuesto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepuestos(filtered);
    }, [searchTerm, repuestos]);

    const handleSelectRepuesto = (repuesto: Repuesto) => {
        onSelectRepuesto(repuesto);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle>Seleccionar Repuesto</DialogTitle>
                </DialogHeader>
                
                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    <div className="flex gap-2">
                        <Input
                            placeholder="Buscar por código, nombre, marca o categoría..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1"
                        />
                    </div>

                    <div className="flex-1 overflow-auto">
                        {loading ? (
                            <div className="flex items-center justify-center h-32">
                                <div className="text-gray-500">Cargando repuestos...</div>
                            </div>
                        ) : filteredRepuestos.length === 0 ? (
                            <div className="text-center text-gray-500 py-8">
                                {searchTerm ? 'No se encontraron repuestos con ese criterio' : 'No hay repuestos disponibles'}
                            </div>
                        ) : (
                            <div className="grid gap-2">
                                {filteredRepuestos.map((repuesto) => (
                                    <div
                                        key={repuesto.id}
                                        className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => handleSelectRepuesto(repuesto)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-blue-600">{repuesto.codigo}</span>
                                                    <span className="text-sm text-gray-500">•</span>
                                                    <span className="font-medium">{repuesto.nombre}</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">
                                                    <span className="font-medium">{repuesto.marca}</span>
                                                    <span className="mx-1">•</span>
                                                    <span>{repuesto.modelo}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span>Categoría: {repuesto.categoria}</span>
                                                    <span>Stock: {repuesto.stock}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-semibold text-green-600">
                                                    ${repuesto.precio.toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button variant="outline" onClick={onClose}>
                        Cancelar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
} 