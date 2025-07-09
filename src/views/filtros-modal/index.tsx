import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import ClientesModal from '../../components/ClientesModal';
import RepuestosModal from '../../components/RepuestosModal';

interface Cliente {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    empresa: string;
}

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

export default function FiltrosModal() {
    const [isClientesModalOpen, setIsClientesModalOpen] = useState(false);
    const [isRepuestosModalOpen, setIsRepuestosModalOpen] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
    const [selectedRepuesto, setSelectedRepuesto] = useState<Repuesto | null>(null);

    const handleSelectCliente = (cliente: Cliente) => {
        setSelectedCliente(cliente);
    };

    const handleSelectRepuesto = (repuesto: Repuesto) => {
        setSelectedRepuesto(repuesto);
    };

    return (
        <div className="flex flex-col gap-4 w-full h-full flex-1 bg-white rounded-md shadow p-4 overflow-auto">
            <h1 className="text-2xl font-bold">Filtros</h1>
            
            <div className='flex flex-row gap-4 w-full'>
                <div className="space-y-4 w-1/2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Seleccionar Cliente
                        </label>
                        <div className="relative">
                            <Input
                                placeholder="Haz clic para seleccionar un cliente..."
                                value={selectedCliente ? `${selectedCliente.nombre} - ${selectedCliente.empresa}` : ''}
                                readOnly
                                className="cursor-pointer"
                                onClick={() => setIsClientesModalOpen(true)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        {selectedCliente && (
                            <div className="mt-2 text-sm text-gray-600">
                                <p>Email: {selectedCliente.email}</p>
                                <p>Teléfono: {selectedCliente.telefono}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={() => setIsClientesModalOpen(true)}
                            variant="outline"
                        >
                            Cambiar Cliente
                        </Button>
                        {selectedCliente && (
                            <Button
                                onClick={() => setSelectedCliente(null)}
                                variant="outline"
                            >
                                Limpiar Selección
                            </Button>
                        )}
                    </div>
                </div>

                <div className="space-y-4 w-1/2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Seleccionar Repuesto
                        </label>
                        <div className="relative">
                            <Input
                                placeholder="Haz clic para seleccionar un repuesto..."
                                value={selectedRepuesto ? `${selectedRepuesto.codigo} - ${selectedRepuesto.nombre}` : ''}
                                readOnly
                                className="cursor-pointer"
                                onClick={() => setIsRepuestosModalOpen(true)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        {selectedRepuesto && (
                            <div className="mt-2 text-sm text-gray-600">
                                <p>Marca: {selectedRepuesto.marca}</p>
                                <p>Modelo: {selectedRepuesto.modelo}</p>
                                <p>Categoría: {selectedRepuesto.categoria}</p>
                                <p>Precio: ${selectedRepuesto.precio.toFixed(2)}</p>
                                <p>Stock: {selectedRepuesto.stock}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={() => setIsRepuestosModalOpen(true)}
                            variant="outline"
                        >
                            Cambiar Repuesto
                        </Button>
                        {selectedRepuesto && (
                            <Button
                                onClick={() => setSelectedRepuesto(null)}
                                variant="outline"
                            >
                                Limpiar Selección
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <ClientesModal
                isOpen={isClientesModalOpen}
                onClose={() => setIsClientesModalOpen(false)}
                onSelectCliente={handleSelectCliente}
            />

            <RepuestosModal
                isOpen={isRepuestosModalOpen}
                onClose={() => setIsRepuestosModalOpen(false)}
                onSelectRepuesto={handleSelectRepuesto}
            />
        </div>
    );
}