// Definiciones de tipos para el Sistema de Diseño

declare module 'tailwindcss' {
  interface Config {
    theme: {
      extend: {
        borderRadius: {
          'none': string;
          'xs': string;
          'sm': string;
          'md': string;
          'lg': string;
          'xl': string;
          '2xl': string;
          '3xl': string;
          'full': string;
        };
        spacing: {
          '0': string;
          'px': string;
          '0.5': string;
          '1': string;
          '1.5': string;
          '2': string;
          '2.5': string;
          '3': string;
          '3.5': string;
          '4': string;
          '5': string;
          '6': string;
          '7': string;
          '8': string;
          '9': string;
          '10': string;
          '11': string;
          '12': string;
          '14': string;
          '16': string;
          '20': string;
          '24': string;
          '28': string;
          '32': string;
          '36': string;
          '40': string;
          '44': string;
          '48': string;
          '52': string;
          '56': string;
          '60': string;
          '64': string;
          '72': string;
          '80': string;
          '96': string;
        };
        colors: {
          brand: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
          };
          neutral: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
          };
          success: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
          };
          warning: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
          };
          info: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
          };
          background: string;
          foreground: string;
          card: {
            DEFAULT: string;
            foreground: string;
          };
          popover: {
            DEFAULT: string;
            foreground: string;
          };
          primary: {
            DEFAULT: string;
            foreground: string;
          };
          secondary: {
            DEFAULT: string;
            foreground: string;
          };
          muted: {
            DEFAULT: string;
            foreground: string;
          };
          accent: {
            DEFAULT: string;
            foreground: string;
          };
          destructive: {
            DEFAULT: string;
            foreground: string;
          };
          border: string;
          input: string;
          ring: string;
          chart: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
          };
          'brand-red': string;
          'brand-red-hex': string;
        };
        screens: {
          'xs': string;
          'sm': string;
          'md': string;
          'lg': string;
          'xl': string;
          '2xl': string;
          '3xl': string;
        };
        fontFamily: {
          'sans': string[];
          'serif': string[];
          'mono': string[];
          'display': string[];
        };
        fontSize: {
          'display-2xl': [string, { lineHeight: string; letterSpacing: string }];
          'display-xl': [string, { lineHeight: string; letterSpacing: string }];
          'display-lg': [string, { lineHeight: string; letterSpacing: string }];
          'display-md': [string, { lineHeight: string; letterSpacing: string }];
          'display-sm': [string, { lineHeight: string; letterSpacing: string }];
          'h1': [string, { lineHeight: string; letterSpacing: string }];
          'h2': [string, { lineHeight: string; letterSpacing: string }];
          'h3': [string, { lineHeight: string; letterSpacing: string }];
          'h4': [string, { lineHeight: string; letterSpacing: string }];
          'h5': [string, { lineHeight: string; letterSpacing: string }];
          'h6': [string, { lineHeight: string; letterSpacing: string }];
          'body-xl': [string, { lineHeight: string; letterSpacing: string }];
          'body-lg': [string, { lineHeight: string; letterSpacing: string }];
          'body-md': [string, { lineHeight: string; letterSpacing: string }];
          'body-sm': [string, { lineHeight: string; letterSpacing: string }];
          'body-xs': [string, { lineHeight: string; letterSpacing: string }];
          'caption-lg': [string, { lineHeight: string; letterSpacing: string }];
          'caption-md': [string, { lineHeight: string; letterSpacing: string }];
          'caption-sm': [string, { lineHeight: string; letterSpacing: string }];
        };
        fontWeight: {
          'thin': string;
          'extralight': string;
          'light': string;
          'normal': string;
          'medium': string;
          'semibold': string;
          'bold': string;
          'extrabold': string;
          'black': string;
        };
        lineHeight: {
          'none': string;
          'tight': string;
          'snug': string;
          'normal': string;
          'relaxed': string;
          'loose': string;
        };
        letterSpacing: {
          'tighter': string;
          'tight': string;
          'normal': string;
          'wide': string;
          'wider': string;
          'widest': string;
        };
        boxShadow: {
          'xs': string;
          'sm': string;
          'md': string;
          'lg': string;
          'xl': string;
          '2xl': string;
          'inner': string;
          'none': string;
        };
        zIndex: {
          'hide': string;
          'auto': string;
          'base': string;
          'dock': string;
          'dropdown': string;
          'sticky': string;
          'banner': string;
          'overlay': string;
          'modal': string;
          'popover': string;
          'skipLink': string;
          'toast': string;
          'tooltip': string;
        };
      };
    };
  }
}

// Tipos para componentes del sistema de diseño
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

export interface TypographyProps {
  variant: 'display-2xl' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' |
           'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
           'body-xl' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs' |
           'caption-lg' | 'caption-md' | 'caption-sm';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Tipos para colores del sistema
export type BrandColor = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type NeutralColor = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type SuccessColor = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type WarningColor = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type InfoColor = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

// Tipos para border radius
export type BorderRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

// Tipos para espaciado
export type Spacing = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

// Tipos para breakpoints
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// Tipos para fuentes
export type FontFamily = 'sans' | 'serif' | 'mono' | 'display';
export type FontWeight = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

// Tipos para sombras
export type Shadow = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none';

// Tipos para z-index
export type ZIndex = 'hide' | 'auto' | 'base' | 'dock' | 'dropdown' | 'sticky' | 'banner' | 'overlay' | 'modal' | 'popover' | 'skipLink' | 'toast' | 'tooltip';

// Tipos para animaciones
export type Animation = 'fade-in' | 'fade-out' | 'scale-in' | 'scale-out' | 'slide-in-right' | 'slide-out-right';

// Constantes del sistema de diseño
export const DESIGN_SYSTEM = {
  // Border Radius
  BORDER_RADIUS: {
    NONE: 'none',
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl',
    '3XL': '3xl',
    FULL: 'full',
  } as const,

  // Spacing
  SPACING: {
    0: 0,
    0.5: 0.5,
    1: 1,
    1.5: 1.5,
    2: 2,
    2.5: 2.5,
    3: 3,
    3.5: 3.5,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
    36: 36,
    40: 40,
    44: 44,
    48: 48,
    52: 52,
    56: 56,
    60: 60,
    64: 64,
    72: 72,
    80: 80,
    96: 96,
  } as const,

  // Breakpoints
  BREAKPOINTS: {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl',
    '3XL': '3xl',
  } as const,

  // Font Families
  FONT_FAMILIES: {
    SANS: 'sans',
    SERIF: 'serif',
    MONO: 'mono',
    DISPLAY: 'display',
  } as const,

  // Font Weights
  FONT_WEIGHTS: {
    THIN: 'thin',
    EXTRALIGHT: 'extralight',
    LIGHT: 'light',
    NORMAL: 'normal',
    MEDIUM: 'medium',
    SEMIBOLD: 'semibold',
    BOLD: 'bold',
    EXTRABOLD: 'extrabold',
    BLACK: 'black',
  } as const,

  // Shadows
  SHADOWS: {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl',
    '2XL': '2xl',
    INNER: 'inner',
    NONE: 'none',
  } as const,

  // Z-Index
  Z_INDEX: {
    HIDE: 'hide',
    AUTO: 'auto',
    BASE: 'base',
    DOCK: 'dock',
    DROPDOWN: 'dropdown',
    STICKY: 'sticky',
    BANNER: 'banner',
    OVERLAY: 'overlay',
    MODAL: 'modal',
    POPOVER: 'popover',
    SKIP_LINK: 'skipLink',
    TOAST: 'toast',
    TOOLTIP: 'tooltip',
  } as const,

  // Animations
  ANIMATIONS: {
    FADE_IN: 'fade-in',
    FADE_OUT: 'fade-out',
    SCALE_IN: 'scale-in',
    SCALE_OUT: 'scale-out',
    SLIDE_IN_RIGHT: 'slide-in-right',
    SLIDE_OUT_RIGHT: 'slide-out-right',
  } as const,
} as const;

// Utilidades para generar clases de Tailwind
export const createTailwindClass = {
  // Border Radius
  borderRadius: (radius: BorderRadius) => `rounded-${radius}`,
  
  // Spacing
  gap: (spacing: Spacing) => `gap-${spacing}`,
  padding: (spacing: Spacing) => `p-${spacing}`,
  paddingX: (spacing: Spacing) => `px-${spacing}`,
  paddingY: (spacing: Spacing) => `py-${spacing}`,
  margin: (spacing: Spacing) => `m-${spacing}`,
  marginX: (spacing: Spacing) => `mx-${spacing}`,
  marginY: (spacing: Spacing) => `my-${spacing}`,
  
  // Colors
  brandColor: (shade: BrandColor) => `bg-brand-${shade}`,
  neutralColor: (shade: NeutralColor) => `bg-neutral-${shade}`,
  successColor: (shade: SuccessColor) => `bg-success-${shade}`,
  warningColor: (shade: WarningColor) => `bg-warning-${shade}`,
  infoColor: (shade: InfoColor) => `bg-info-${shade}`,
  
  // Typography
  fontSize: (size: TypographyProps['variant']) => `text-${size}`,
  fontFamily: (family: FontFamily) => `font-${family}`,
  fontWeight: (weight: FontWeight) => `font-${weight}`,
  
  // Shadows
  shadow: (shadow: Shadow) => `shadow-${shadow}`,
  
  // Z-Index
  zIndex: (z: ZIndex) => `z-${z}`,
  
  // Animations
  animation: (animation: Animation) => `animate-${animation}`,
  
  // Responsive
  responsive: (breakpoint: Breakpoint, className: string) => `${breakpoint}:${className}`,
} as const; 