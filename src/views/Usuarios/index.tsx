'use client';
import React, { useState, useMemo, useRef } from "react";
import { AllCommunityModule, ModuleRegistry, type ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface CarData {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}

export default function Usuarios() {
    // Referencia al grid para acceder a la API
    const gridRef = useRef<AgGridReact>(null);
    
    // Filtro global
    const [globalFilter, setGlobalFilter] = useState('');

    // Row Data: The data to be displayed.
    const [rowData] = useState<CarData[]>([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Mercedes", model: "EQA", price: 48890, electric: true },
        { make: "Fiat", model: "500", price: 15774, electric: false },
        { make: "Nissan", model: "Juke", price: 20675, electric: false },
        { make: "Nissan", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 2", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 3", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 4", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 5", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 6", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 7", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 8", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 9", model: "Juke", price: 20675, electric: false },   
        { make: "Nissan 10", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 11", model: "Juke", price: 20675, electric: false },
        { make: "Nissan 12", model: "Juke", price: 20675, electric: false },
    ]);

    // Filtros
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        priceRange: "",
        electric: "all"
    });

    // Datos filtrados
    const filteredData = useMemo(() => {
        return rowData.filter(car => {
            const makeMatch = car.make.toLowerCase().includes(filters.make.toLowerCase());
            const modelMatch = car.model.toLowerCase().includes(filters.model.toLowerCase());
            const electricMatch = filters.electric === "all" || 
                (filters.electric === "true" && car.electric) || 
                (filters.electric === "false" && !car.electric);
            
            let priceMatch = true;
            if (filters.priceRange) {
                const [min, max] = filters.priceRange.split('-').map(Number);
                if (max) {
                    priceMatch = car.price >= min && car.price <= max;
                } else {
                    priceMatch = car.price >= min;
                }
            }

            return makeMatch && modelMatch && electricMatch && priceMatch;
        });
    }, [rowData, filters]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs] = useState<ColDef<CarData>[]>([
        { field: "make", headerName: "Marca", sortable: true, filter: true },
        { field: "model", headerName: "Modelo", sortable: true, filter: true },
        { field: "price", headerName: "Precio", sortable: true, filter: true }
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
            electric: "all"
        });
    };


    return (
        <div className="flex flex-col gap-4 w-full h-full bg-white rounded-md shadow p-4">
            {/* Filtro Global */}

            {/* Filtros */}
            <div className="flex flex-col gap-4 bg-gray-50">
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

                    {/* Tipo */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Tipo</label>
                        <select
                            value={filters.electric}
                            onChange={(e) => handleFilterChange('electric', e.target.value)}
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="all">Todos</option>
                            <option value="true">Eléctricos</option>
                            <option value="false">No eléctricos</option>
                        </select>
                    </div>

                    {/* Botón Limpiar - ocupa toda la fila en móviles */}
                    <div className="flex flex-col justify-end">
                        <button
                            onClick={handleClearFilters}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Limpiar filtros
                        </button>
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
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Nuevo usuario</button>
                    </div>
                </div>
            </div>
          


            {/* Tabla */}
            <div className="ag-theme-alpine w-full h-2/3">
                
                <AgGridReact<CarData>
                    ref={gridRef}
                    rowData={filteredData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    quickFilterText={globalFilter}  
                />
            </div>
        </div>
    );
};