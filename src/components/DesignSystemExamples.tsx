import React from 'react';

const DesignSystemExamples: React.FC = () => {
    return (
        <div className="flex-1 p-6 overflow-y-auto">
            <div className="min-h-screen bg-background p-6 space-y-12">
                {/* Header */}
                <header className="text-center space-y-4">
                    <h1 className="text-display-lg display-lg">Sistema de Diseño</h1>
                    <p className="text-body-lg body-lg text-muted-foreground max-w-2xl mx-auto">
                        Ejemplos de todos los componentes y utilidades del sistema de diseño implementado
                    </p>
                </header>

                {/* Border Radius Examples */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Border Radius</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4">
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-none flex items-center justify-center text-primary-foreground text-xs">
                                None
                            </div>
                            <p className="text-caption-sm text-center">rounded-none</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-xs flex items-center justify-center text-primary-foreground text-xs">
                                XS
                            </div>
                            <p className="text-caption-sm text-center">rounded-xs</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-xs">
                                SM
                            </div>
                            <p className="text-caption-sm text-center">rounded-sm</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">
                                MD
                            </div>
                            <p className="text-caption-sm text-center">rounded-md</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">
                                LG
                            </div>
                            <p className="text-caption-sm text-center">rounded-lg</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-xs">
                                XL
                            </div>
                            <p className="text-caption-sm text-center">rounded-xl</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground text-xs">
                                2XL
                            </div>
                            <p className="text-caption-sm text-center">rounded-2xl</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-3xl flex items-center justify-center text-primary-foreground text-xs">
                                3XL
                            </div>
                            <p className="text-caption-sm text-center">rounded-3xl</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                                Full
                            </div>
                            <p className="text-caption-sm text-center">rounded-full</p>
                        </div>
                    </div>
                </section>

                {/* Color Palette */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Paleta de Colores</h2>

                    {/* Brand Colors */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Brand Colors</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                <div key={shade} className="space-y-2">
                                    <div
                                        className={`h-16 bg-brand-${shade} rounded-lg border border-border flex items-center justify-center text-xs font-medium`}
                                        style={{ backgroundColor: `var(--brand-${shade})` }}
                                    >
                                        {shade}
                                    </div>
                                    <p className="text-caption-sm text-center">brand-{shade}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Semantic Colors */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Colores Semánticos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <div className="h-16 bg-success-500 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                                    Success
                                </div>
                                <p className="text-caption-sm text-center">success-500</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-16 bg-warning-500 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                                    Warning
                                </div>
                                <p className="text-caption-sm text-center">warning-500</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-16 bg-info-500 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                                    Info
                                </div>
                                <p className="text-caption-sm text-center">info-500</p>
                            </div>
                            <div className="space-y-2">
                                <div className="h-16 bg-destructive rounded-lg flex items-center justify-center text-destructive-foreground text-xs font-medium">
                                    Destructive
                                </div>
                                <p className="text-caption-sm text-center">destructive</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Tipografía</h2>

                    {/* Display Text */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Display Text</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-display-2xl display-2xl">Display 2XL - Título más grande</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-display-2xl (72px)</p>
                            </div>
                            <div>
                                <p className="text-display-xl display-xl">Display XL - Título grande</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-display-xl (60px)</p>
                            </div>
                            <div>
                                <p className="text-display-lg display-lg">Display LG - Título mediano</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-display-lg (48px)</p>
                            </div>
                            <div>
                                <p className="text-display-md display-md">Display MD - Título pequeño</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-display-md (36px)</p>
                            </div>
                            <div>
                                <p className="text-display-sm display-sm">Display SM - Título extra pequeño</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-display-sm (30px)</p>
                            </div>
                        </div>
                    </div>

                    {/* Headings */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Headings</h3>
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-h1 heading-1">Heading 1 - Título principal</h1>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h1 (32px)</p>
                            </div>
                            <div>
                                <h2 className="text-h2 heading-2">Heading 2 - Subtítulo</h2>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h2 (28px)</p>
                            </div>
                            <div>
                                <h3 className="text-h3 heading-3">Heading 3 - Sección</h3>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h3 (24px)</p>
                            </div>
                            <div>
                                <h4 className="text-h4 heading-4">Heading 4 - Subsección</h4>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h4 (20px)</p>
                            </div>
                            <div>
                                <h5 className="text-h5 heading-5">Heading 5 - Grupo</h5>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h5 (18px)</p>
                            </div>
                            <div>
                                <h6 className="text-h6 heading-6">Heading 6 - Elemento</h6>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-h6 (16px)</p>
                            </div>
                        </div>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Body Text</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-body-xl body-xl">Body XL - Texto grande para contenido importante</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-body-xl (20px)</p>
                            </div>
                            <div>
                                <p className="text-body-lg body-lg">Body LG - Texto mediano para contenido principal</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-body-lg (18px)</p>
                            </div>
                            <div>
                                <p className="text-body-md body-md">Body MD - Texto base para contenido general</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-body-md (16px)</p>
                            </div>
                            <div>
                                <p className="text-body-sm body-sm">Body SM - Texto pequeño para contenido secundario</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-body-sm (14px)</p>
                            </div>
                            <div>
                                <p className="text-body-xs body-xs">Body XS - Texto extra pequeño para detalles</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-body-xs (12px)</p>
                            </div>
                        </div>
                    </div>

                    {/* Caption Text */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Caption Text</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-caption-lg caption-lg">Caption LG - Pie de texto grande</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-caption-lg (14px)</p>
                            </div>
                            <div>
                                <p className="text-caption-md caption-md">Caption MD - Pie de texto mediano</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-caption-md (12px)</p>
                            </div>
                            <div>
                                <p className="text-caption-sm caption-sm">Caption SM - Pie de texto pequeño</p>
                                <p className="text-caption-sm caption-sm text-muted-foreground">text-caption-sm (11px)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Botones</h2>

                    {/* Button Variants */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Variantes</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary btn-md">Primary</button>
                            <button className="btn btn-secondary btn-md">Secondary</button>
                            <button className="btn btn-destructive btn-md">Destructive</button>
                            <button className="btn btn-outline btn-md">Outline</button>
                            <button className="btn btn-ghost btn-md">Ghost</button>
                            <button className="btn btn-link btn-md">Link</button>
                        </div>
                    </div>

                    {/* Button Sizes */}
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Tamaños</h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="btn btn-primary btn-sm">Small</button>
                            <button className="btn btn-primary btn-md">Medium</button>
                            <button className="btn btn-primary btn-lg">Large</button>
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card p-6 space-y-4">
                            <h3 className="text-h4 heading-4">Card Básica</h3>
                            <p className="text-body-sm body-sm text-muted-foreground">
                                Esta es una card básica con contenido de ejemplo.
                            </p>
                            <button className="btn btn-primary btn-sm">Acción</button>
                        </div>

                        <div className="card p-6 space-y-4 shadow-md">
                            <h3 className="text-h4 heading-4">Card con Sombra</h3>
                            <p className="text-body-sm body-sm text-muted-foreground">
                                Card con sombra media para mayor elevación.
                            </p>
                            <button className="btn btn-outline btn-sm">Acción</button>
                        </div>

                        <div className="card p-6 space-y-4 shadow-lg">
                            <h3 className="text-h4 heading-4">Card Elevada</h3>
                            <p className="text-body-sm body-sm text-muted-foreground">
                                Card con sombra grande para máxima elevación.
                            </p>
                            <button className="btn btn-secondary btn-sm">Acción</button>
                        </div>
                    </div>
                </section>

                {/* Inputs */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                        <div className="space-y-2">
                            <label className="text-body-sm body-sm font-medium">Input Básico</label>
                            <input type="text" className="input" placeholder="Escribe algo..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-body-sm body-sm font-medium">Input con Label</label>
                            <input type="email" className="input" placeholder="email@ejemplo.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-body-sm body-sm font-medium">Input Deshabilitado</label>
                            <input type="text" className="input" placeholder="Deshabilitado" disabled />
                        </div>

                        <div className="space-y-2">
                            <label className="text-body-sm body-sm font-medium">Input con Error</label>
                            <input type="text" className="input border-destructive" placeholder="Con error" />
                        </div>
                    </div>
                </section>

                {/* Spacing Examples */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Espaciado</h2>
                    <div className="space-y-4">
                        <h3 className="text-h4 heading-4">Gap Examples</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="flex gap-2 bg-muted p-4 rounded-lg">
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                </div>
                                <p className="text-caption-sm caption-sm text-center">gap-2 (8px)</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex gap-4 bg-muted p-4 rounded-lg">
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                </div>
                                <p className="text-caption-sm caption-sm text-center">gap-4 (16px)</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex gap-6 bg-muted p-4 rounded-lg">
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                    <div className="w-8 h-8 bg-primary rounded"></div>
                                </div>
                                <p className="text-caption-sm caption-sm text-center">gap-6 (24px)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shadows */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Sombras</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-xs rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm">XS</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-xs</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-sm rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm caption-sm">SM</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-sm</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-md rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm caption-sm">MD</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-md</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-lg rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm caption-sm">LG</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-lg</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-xl rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm caption-sm">XL</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-xl</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-card shadow-2xl rounded-lg flex items-center justify-center">
                                <p className="text-caption-sm caption-sm">2XL</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">shadow-2xl</p>
                        </div>
                    </div>
                </section>

                {/* Animations */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Animaciones</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="h-24 bg-primary rounded-lg flex items-center justify-center animate-fade-in">
                                <p className="text-primary-foreground text-caption-sm">Fade In</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">animate-fade-in</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-primary rounded-lg flex items-center justify-center animate-scale-in">
                                <p className="text-primary-foreground text-caption-sm caption-sm">Scale In</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">animate-scale-in</p>
                        </div>

                        <div className="space-y-2">
                            <div className="h-24 bg-primary rounded-lg flex items-center justify-center animate-slide-in-right">
                                <p className="text-primary-foreground text-caption-sm caption-sm">Slide In</p>
                            </div>
                            <p className="text-caption-sm caption-sm text-center">animate-slide-in-right</p>
                        </div>
                    </div>
                </section>

                {/* Responsive Example */}
                <section className="space-y-6">
                    <h2 className="text-h2 heading-2">Responsive Design</h2>
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
                </section>
            </div>
        </div>

    );
};

export default DesignSystemExamples; 