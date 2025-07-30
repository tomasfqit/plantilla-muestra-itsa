
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DrawerDemo from "@/components/drawer-demo";

export default function Dashboard() {
    return (
        <div className="flex-1 w-full p-6 gap-2 overflow-y-auto">
            <div className="h-10 bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                <p className="font-public-sans text-[16px]">Para validar el funcionamiento de un CRUD y funcionamiento de una tabla acceder a: <strong>Análisis de Ventas Detallado</strong> en el menú.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col bg-white gap-2 rounded-lg shadow-sm border border-gray-200 p-2">
                    <div className="flex flex-row gap-2 h-3/4">
                        <div className="bg-[#FFFFFF] w-1/4 h-full border border-gray-400 rounded-md">

                        </div>
                        <div className="bg-[#C9C9C9] w-1/4 h-full border border-gray-400 rounded-md">

                        </div>
                        <div className="bg-[#2A2727] w-1/4 h-full border border-gray-400 rounded-md">
                        </div>
                        <div className="bg-[#A0090A] w-1/4 h-full border border-gray-400 rounded-md">
                        </div>
                    </div>
                    <div className="font-public-sans text-gray-800">
                        Tener en cuenta el espaciado <strong>gap-2</strong>
                    </div>

                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <h2 className="text-2xl font-public-sans font-bold text-gray-800 mb-4">Font Families</h2>
                    <div className="space-y-3">
                        <div className="font-public-sans text-gray-800">
                            <strong>font-public-sans:</strong> Bienvenido a la plataforma empresarial
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-md">
                        <span className="text-[20px] font-public-sans font-bold">
                            <strong>font-public-sans:</strong>
                        </span>
                        <p className="text-[16px] font-public-sans">
                            No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-2 gap-4">
                    <div className="flex flex-row gap-2">
                        <Input type="text" placeholder="Buscar input h-42px" className="h-[42px]" />
                        <Button variant={"default"} className="h-[40px]">BUSCAR h-40px</Button>
                    </div>
                    <Input type="text" placeholder="Buscar input h-42px " className="h-[42px]" />
                    <Input type="text" placeholder="Buscar input" className="h-[42px]" />

                    <p>Alto input: <strong>42px</strong>;  Acho responsive</p>

                </div>
                <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 gap-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <Button className="h-[40px] bg-[#A0090A] text-white hover:bg-[#A0090A]/80">
                            Primario
                        </Button>
                        <Button variant={"default"} className="h-[40px]">
                            Secundario
                        </Button>
                        <Button variant={"outline"} className="h-[40px]">
                            Terciario
                        </Button>
                        <Button variant={"destructive"} className="h-[40px]">
                            Danger
                        </Button>
                    </div>
                    <p>Alto button: <strong>40px</strong>;  Acho responsive</p>
                    <div className="flex flex-row gap-2">
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">
                                MD
                            </div>
                            <p className="text-caption-sm text-center">rounded-md</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2 bg-muted p-4 rounded-lg">
                                <div className="w-8 h-8 bg-primary rounded"></div>
                                <div className="w-8 h-8 bg-primary rounded"></div>
                                <div className="w-8 h-8 bg-primary rounded"></div>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">gap-2 (8px)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-2 rounded-lg shadow-sm border border-gray-200 p-6 gap-2">
                    <div className="flex flex-col gap-2 w-1/3 justify-center items-center border border-gray-200 p-2">
                        <p className="font-public-sans text-[36px] font-bold">Título 1</p>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(36px)</p>
                        <h1 className="font-public-sans text-[32px] font-bold">Título 2</h1>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(32px)</p>
                        <h2 className="font-public-sans text-[28px] font-bold">Título 3</h2>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(28px)</p>
                        <h3 className="font-public-sans text-[24px] font-bold">Título 4</h3>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(26px)</p>
                    </div>
                    <div className="flex flex-col w-1/3 gap-2 items-center border border-gray-200 p-2">

                        <h4 className="font-public-sans text-[20px] font-bold">Sub Título 4</h4>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(20px)</p>
                    </div>
                    <div className="flex flex-col w-1/3 gap-2 items-center border border-gray-200 p-2">
                        <p className="font-public-sans text-[16px]">Contenido general</p>
                        <p className="text-caption-sm caption-sm text-muted-foreground">(16px)</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 gap-2">
                    <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                            <p className="text-body-sm body-sm">
                                <strong>Breakpoints:</strong> xs (475px) | sm (640px) | md (768px) | lg (1024px) | xl (1280px) | 2xl (1536px) | 3xl (1920px)
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="card p-4 text-center">
                                <p className="text-caption-sm caption-sm">Mobile</p>
                                <p className="text-body-xs body-xs text-muted-foreground">1 columna</p>
                            </div>
                            <div className="card p-4 text-center">
                                <p className="text-caption-sm caption-sm">Tablet</p>
                                <p className="text-body-xs body-xs text-muted-foreground">2 columnas</p>
                            </div>
                            <div className="card p-4 text-center sm:col-span-2 lg:col-span-1">
                                <p className="text-caption-sm caption-sm">Desktop</p>
                                <p className="text-body-xs body-xs text-muted-foreground">4 columnas</p>
                            </div>
                            <div className="card p-4 text-center">
                                <p className="text-caption-sm caption-sm">Large</p>
                                <p className="text-body-xs body-xs text-muted-foreground">4 columnas</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-4"></div>
            <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 p-6 gap-2">
                <DrawerDemo />
            </div>
        </div>
    )
}