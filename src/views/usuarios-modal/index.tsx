import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function UsuariosModal() {
    const [isOpenSmall, setIsOpenSmall] = useState(false);
    const [isOpenMedium, setIsOpenMedium] = useState(false);
    const [isOpenLarge, setIsOpenLarge] = useState(false);
    const [isOpenXLarge, setIsOpenXLarge] = useState(false);
    return (
        <div>
            <h1>Ejemplos de drawer</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button onClick={() => setIsOpenSmall(true)}>Abrir drawer Small</Button>
                <Button onClick={() => setIsOpenMedium(true)}>Abrir drawer Medium</Button>
                <Button onClick={() => setIsOpenLarge(true)}>Abrir drawer Large</Button>
                <Button onClick={() => setIsOpenXLarge(true)}>Abrir drawer XLarge + sidebar</Button>
            </div>

           {isOpenSmall && <Modal isOpen={isOpenSmall} onClose={() => setIsOpenSmall(false)} title="Nuevo usuario" subtitle="Creación de nuevo usuario" size="sm">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-2">
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre" className="h-[42px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Apellido</Label>
                        <Input type="text" placeholder="Apellido" className="h-[42px]" />
                    </div>
                </div>
            </Modal>}

            {isOpenMedium && <Modal isOpen={isOpenMedium} onClose={() => setIsOpenMedium(false)} title="Nuevo usuario" subtitle="Creación de nuevo usuario" size="md">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-2">
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre" className="h-[42px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Apellido</Label>
                        <Input type="text" placeholder="Apellido" className="h-[42px]" />
                    </div>
                </div>
            </Modal>}

            {isOpenLarge && <Modal isOpen={isOpenLarge} onClose={() => setIsOpenLarge(false)} title="Nuevo usuario" subtitle="Creación de nuevo usuario" size="lg">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-2">
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre" className="h-[42px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Apellido</Label>
                        <Input type="text" placeholder="Apellido" className="h-[42px]" />
                    </div>
                </div>
            </Modal>}

            {isOpenXLarge && <Modal isOpen={isOpenXLarge} onClose={() => setIsOpenXLarge(false)} title="Nuevo usuario" subtitle="Creación de nuevo usuario" size="xl" sidebar={true}>
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-2">
                        <Label>Nombre</Label>
                        <Input type="text" placeholder="Nombre" className="h-[42px]" />
                    </div>
                </div>
            </Modal>}
        </div>
    )
}