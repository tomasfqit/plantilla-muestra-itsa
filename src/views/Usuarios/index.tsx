'use client';
import React, { useState, useMemo, useRef } from "react";
import { AllCommunityModule, ModuleRegistry, type ICellRendererParams, type ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import EditUserModal from "@/components/EditUserModal";
import { CreateUserModal } from "@/components/CreateUserModal";
ModuleRegistry.registerModules([AllCommunityModule]);

interface CarData {
    make: string;
    model: string;
    price: number;
    actions?: React.ReactNode;
}

export default function Usuarios() {
    // Referencia al grid para acceder a la API
    const gridRef = useRef<AgGridReact>(null);

    // Filtro global
    const [globalFilter, setGlobalFilter] = useState('');

    // Estado para el modal de edición
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingData, setEditingData] = useState<CarData | null>(null);

    // // Estado para el modal de creación
    // const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    // Estado para paginación
    const [paginationPageSize, setPaginationPageSize] = useState(10);

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<CarData[]>([
        { make: "Tesla", model: "Model Y", price: 64950 },
        { make: "Ford", model: "F-Series", price: 33850 },
        { make: "Toyota", model: "Corolla", price: 29600 },
        { make: "Mercedes", model: "EQA", price: 48890 },
        { make: "Fiat", model: "500", price: 15774 },
        { make: "Nissan", model: "Juke", price: 20675 },
        { make: "Nissan", model: "Juke", price: 20675 },
        { make: "Nissan 2", model: "Juke", price: 20675 },
        { make: "Nissan 3", model: "Juke", price: 20675 },
        { make: "Nissan 4", model: "Juke", price: 20675 },
        { make: "Nissan 5", model: "Juke", price: 20675 },
        { make: "Nissan 6", model: "Juke", price: 20675 },
        { make: "Nissan 7", model: "Juke", price: 20675 },
        { make: "Nissan 8", model: "Juke", price: 20675 },
        { make: "Nissan 9", model: "Juke", price: 20675 },
        { make: "Nissan 10", model: "Juke", price: 20675 },
        { make: "Nissan 11", model: "Juke", price: 20675 },
        { make: "Nissan 12", model: "Juke", price: 20675 },
    ]);

    // Filtros
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        priceRange: "",
    });

    // Datos filtrados
    const filteredData = useMemo(() => {
        return rowData.filter(car => {
            const makeMatch = car.make.toLowerCase().includes(filters.make.toLowerCase());
            const modelMatch = car.model.toLowerCase().includes(filters.model.toLowerCase());

            let priceMatch = true;
            if (filters.priceRange) {
                const [min, max] = filters.priceRange.split('-').map(Number);
                if (max) {
                    priceMatch = car.price >= min && car.price <= max;
                } else {
                    priceMatch = car.price >= min;
                }
            }

            return makeMatch && modelMatch && priceMatch;
        });
    }, [rowData, filters]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs] = useState<ColDef<CarData>[]>([
        { field: "make", headerName: "Marca", sortable: true, filter: true },
        { field: "model", headerName: "Nombre y Apellido / Razón Social", sortable: true, filter: true },
        { field: "price", headerName: "Precio", sortable: true, filter: true },
        {
            field: "actions", headerName: "Acciones",
            maxWidth: 90,
            cellRenderer: (params: ICellRendererParams<CarData>) => {
                return <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="size-8">
                            <EllipsisVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleEdit(params.data!)}>
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>Eliminar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        }
    ]);

    const defaultColDef = {
        flex: 1,
    };

    const handleFilterChange = (field: keyof typeof filters, value: string) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    // Función para aplicar filtro global usando la API de AG Grid
    const onGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setGlobalFilter(value);

        if (gridRef.current) {
            gridRef.current.api.setFilterModel({
                quickFilter: {
                    filter: value
                }
            });
        }
    };

    const handleClearFilters = () => {
        setGlobalFilter('');
        setFilters({
            make: "",
            model: "",
            priceRange: "",
        });
    };

    // Función para abrir el modal de edición
    const handleEdit = (data: CarData) => {
        setEditingData(data);
        setIsEditModalOpen(true);
    };

    // Función para guardar los cambios
    const handleSaveEdit = (updatedData: CarData) => {
        setRowData(prevData =>
            prevData.map(item =>
                item.make === editingData?.make &&
                    item.model === editingData?.model &&
                    item.price === editingData?.price
                    ? updatedData
                    : item
            )
        );
        setIsEditModalOpen(false);
        setEditingData(null);
    };

    // Función para cerrar el modal
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditingData(null);
    };

    // Función para abrir el modal de creación
    const handleCreateNew = () => {
        setIsCreateModalOpen(true);
    };

    // Función para guardar el nuevo usuario
    const handleSaveCreate = (newData: CarData) => {
        setRowData(prevData => [...prevData, newData]);
        setIsCreateModalOpen(false);
    };

    // Función para cerrar el modal de creación
    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    // Función para cambiar el tamaño de página
    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = Number(event.target.value);
        setPaginationPageSize(newPageSize);

        if (gridRef.current) {
            //gridRef.current.api.paginationSetPageSize(newPageSize);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full h-full flex-1 bg-white rounded-md shadow p-4 overflow-auto">

            {/* Filtro Global */}

            {/* Filtros */}
            <div className="flex flex-col gap-4 bg-gray-200 rounded-lg shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-2 rounded-lg">
                    {/* Marca */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Marca</label>
                        <input
                            type="text"
                            placeholder="Buscar marca..."
                            value={filters.make}
                            onChange={(e) => handleFilterChange('make', e.target.value)}
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:border-transparent"
                        />
                    </div>

                    {/* Modelo */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Modelo</label>
                        <input
                            type="text"
                            placeholder="Buscar modelo..."
                            value={filters.model}
                            onChange={(e) => handleFilterChange('model', e.target.value)}
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:border-transparent"
                        />
                    </div>

                    {/* Rango de Precio */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Rango de Precio</label>
                        <select
                            value={filters.priceRange}
                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Todos los precios</option>
                            <option value="0-20000">Menos de $20,000</option>
                            <option value="20000-40000">$20,000 - $40,000</option>
                            <option value="40000-60000">$40,000 - $60,000</option>
                            <option value="60000-">Más de $60,000</option>
                        </select>
                    </div>



                    {/* Botón Limpiar - ocupa toda la fila en móviles */}
                    <div className="flex flex-col justify-end pb-1">
                        <Button
                            onClick={handleClearFilters}
                            variant="outline"
                            className="border border-gray-400 bg-white"
                        >
                            Limpiar filtros
                        </Button>
                    </div>

                </div>

                <div className="flex flex-row gap-4 items-end p-2 w-full">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Buscar en todas las columnas..."
                            value={globalFilter}
                            onChange={onGlobalFilterChange}
                            className="w-full p-2 rounded-md border border-gray-300"
                        />
                    </div>
                    <div className="flex justify-end">
                        <CreateUserModal onSave={handleSaveCreate} />
                    </div>
                </div>
            </div>

            {/* Tabla */}
            <div className="ag-theme-alpine w-full flex-1 min-h-[300px]">
                <AgGridReact<CarData>
                    ref={gridRef}
                    rowData={filteredData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    quickFilterText={globalFilter}
                    pagination={true}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={[5, 10, 20, 50, 100]}
                    paginationAutoPageSize={false}
                    domLayout="normal"
                />
            </div>

            {/* Modal de Edición */}
            <EditUserModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                data={editingData}
                onSave={handleSaveEdit}
            />

            {/* Modal de Creación */}

        </div>
    );
};



{/* Controles de paginación */ }
{/* <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">Mostrar:</label>
                    <select
                        value={paginationPageSize}
                        onChange={handlePageSizeChange}
                        className="p-1 border border-gray-300 rounded text-sm"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span className="text-sm text-gray-600">elementos por página</span>
                </div>
                
                <div className="text-sm text-gray-600">
                    Mostrando <span className="font-medium">{filteredData.length}</span> de <span className="font-medium">{rowData.length}</span> elementos
                </div>
            </div> */}