export interface Repuesto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  modelo: string;
  stock: number;
  imagen: string;
  codigo: string;
}

export const repuestosData: Repuesto[] = [
  {
    id: 1,
    nombre: "Filtro de Aceite",
    descripcion: "Filtro de aceite de alta calidad para motores Toyota",
    precio: 25.99,
    categoria: "Filtros",
    modelo: "Corolla, Camry, RAV4",
    stock: 45,
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
    codigo: "TOY-FIL-001",
  },
  {
    id: 2,
    nombre: "Pastillas de Freno",
    descripcion: "Pastillas de freno cerámicas para mejor rendimiento",
    precio: 89.99,
    categoria: "Frenos",
    modelo: "Corolla, Camry, Highlander",
    stock: 32,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    codigo: "TOY-BRK-002",
  },
  {
    id: 3,
    nombre: "Batería 12V",
    descripcion: "Batería de 12V con garantía de 24 meses",
    precio: 149.99,
    categoria: "Eléctrico",
    modelo: "Todos los modelos",
    stock: 18,
    imagen:
      "https://images.unsplash.com/photo-1621012904886-419379ce6824?w=300&h=200&fit=crop",
    codigo: "TOY-BAT-003",
  },
  {
    id: 4,
    nombre: "Aceite de Motor 5W-30",
    descripcion: "Aceite sintético de alto rendimiento",
    precio: 34.99,
    categoria: "Lubricantes",
    modelo: "Corolla, Camry, RAV4, Highlander",
    stock: 67,
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
    codigo: "TOY-OIL-004",
  },
  {
    id: 5,
    nombre: "Radiador",
    descripcion: "Radiador de aluminio para mejor disipación de calor",
    precio: 299.99,
    categoria: "Sistema de Refrigeración",
    modelo: "Camry, Highlander",
    stock: 12,
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
    codigo: "TOY-RAD-005",
  },
  {
    id: 6,
    nombre: "Amortiguadores Delanteros",
    descripcion: "Amortiguadores de gas para mejor estabilidad",
    precio: 189.99,
    categoria: "Suspensión",
    modelo: "Corolla, Camry, RAV4",
    stock: 24,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    codigo: "TOY-SUS-006",
  },
  {
    id: 7,
    nombre: "Filtro de Aire",
    descripcion: "Filtro de aire de alto flujo para mejor rendimiento",
    precio: 19.99,
    categoria: "Filtros",
    modelo: "Todos los modelos",
    stock: 89,
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
    codigo: "TOY-AIR-007",
  },
  {
    id: 8,
    nombre: "Bujías de Encendido",
    descripcion: "Bujías de iridio para mejor combustión",
    precio: 45.99,
    categoria: "Motor",
    modelo: "Corolla, Camry, RAV4, Highlander",
    stock: 56,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    codigo: "TOY-SPK-008",
  },
];


export interface Accesorio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

export const accesoriosData: Accesorio[] = [
  {
    id: 1,
    nombre: "Alfombras de Goma",
    descripcion: "Alfombras resistentes al agua y fácil limpieza",
    precio: 45.99,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    categoria: "Interior",
  },
  {
    id: 2,
    nombre: "Cubre Volante",
    descripcion: "Cubre volante de cuero sintético con costuras",
    precio: 29.99,
    imagen:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop",
    categoria: "Interior",
  },
  {
    id: 3,
    nombre: "Organizador de Maletero",
    descripcion: "Organizador plegable para mantener orden en el maletero",
    precio: 39.99,
    imagen:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
    categoria: "Organización",
  },
  {
    id: 4,
    nombre: "Cargador USB",
    descripcion: "Cargador rápido USB-C y USB-A para encendedor",
    precio: 19.99,
    imagen:
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=300&h=200&fit=crop",
    categoria: "Electrónica",
  },
  {
    id: 5,
    nombre: "Soporte para Teléfono",
    descripcion: "Soporte ajustable para teléfono con ventosa",
    precio: 15.99,
    imagen:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    categoria: "Electrónica",
  },
  {
    id: 6,
    nombre: "Cubre Asientos",
    descripcion: "Cubre asientos transpirable y lavable",
    precio: 89.99,
    imagen:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
    categoria: "Interior",
  },
  {
    id: 7,
    nombre: "Limpiaparabrisas",
    descripcion: "Juego de limpiaparabrisas de alta calidad",
    precio: 24.99,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    categoria: "Exterior",
  },
  {
    id: 8,
    nombre: "Aromatizante",
    descripcion: "Aromatizante de coche con fragancia duradera",
    precio: 12.99,
    imagen:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
    categoria: "Interior",
  },
  {
    id: 9,
    nombre: "Cable de Emergencia",
    descripcion: "Cables de emergencia para batería de coche",
    precio: 34.99,
    imagen:
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=300&h=200&fit=crop",
    categoria: "Emergencia",
  },
  {
    id: 10,
    nombre: "Kit de Limpieza",
    descripcion: "Kit completo de limpieza para interior y exterior",
    precio: 49.99,
    imagen:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    categoria: "Mantenimiento",
  },
  {
    id: 11,
    nombre: "Cubre Espejos",
    descripcion: "Cubre espejos retrovisores plegables",
    precio: 18.99,
    imagen:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop",
    categoria: "Exterior",
  },
  {
    id: 12,
    nombre: "Porta Vasos",
    descripcion: "Porta vasos extraíble para consola central",
    precio: 9.99,
    imagen:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    categoria: "Interior",
  },
];


export interface Notificacion {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  leido: boolean;
}

export const notificacionesData: Notificacion[] = [
  {
    id: 1,
    titulo: "Notificación de Repuestos",
    descripcion: "Se ha agregado un nuevo repuesto a la lista de repuestos",
    fecha: "2025-01-01",
    leido: false,
  },
  {
    id: 2,
    titulo: "Notificación de Accesorios",
    descripcion: "Se ha agregado un nuevo accesorio a la lista de accesorios",
    fecha: "2025-01-01", 
    leido: false,
  },
];