import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Cliente {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    empresa: string;
}

// Generar 100 clientes de ejemplo
const generarClientes = (): Cliente[] => {
    const empresas = ['TechCorp', 'InnovateLab', 'DigitalSolutions', 'FutureTech', 'SmartSystems'];
    const nombres = ['Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Sofia', 'Diego', 'Valentina', 'Andrés', 'Camila'];
    const apellidos = ['García', 'Rodríguez', 'López', 'Martínez', 'González', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores'];

    return Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        nombre: `${nombres[Math.floor(Math.random() * nombres.length)]} ${apellidos[Math.floor(Math.random() * apellidos.length)]}`,
        email: `cliente${index + 1}@ejemplo.com`,
        telefono: `+57 ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 9000) + 1000}`,
        empresa: empresas[Math.floor(Math.random() * empresas.length)]
    }));
};

interface ClientesModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCliente: (cliente: Cliente) => void;
}

export default function ClientesModal({ isOpen, onClose, onSelectCliente }: ClientesModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const clientes = generarClientes();

    const filteredClientes = clientes.filter(cliente =>
        cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cliente.empresa.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>Seleccionar Cliente</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                    <div className="relative">
                        <Input
                            placeholder="Buscar cliente por nombre, email o empresa..."
                            value={searchTerm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto border rounded-md">
                        <table className="w-full">
                            <thead className="bg-gray-50 sticky top-0">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Teléfono</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Empresa</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredClientes.map((cliente) => (
                                    <tr key={cliente.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-2 text-sm text-gray-900">{cliente.id}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{cliente.nombre}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{cliente.email}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{cliente.telefono}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{cliente.empresa}</td>
                                        <td className="px-4 py-2">
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    onSelectCliente(cliente);
                                                    onClose();
                                                }}
                                            >
                                                Seleccionar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Total: {filteredClientes.length} clientes</span>
                        <Button variant="outline" onClick={onClose}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
} 