import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeProps { 
    TemaOscuro: boolean
    CambioTema: () => void
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [TemaOscuro, setTemaOscuro] = useState(true)
    const CambioTema = () => setTemaOscuro((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ TemaOscuro, CambioTema }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const contexto = useContext(ThemeContext)
    if (!contexto) {
        throw new Error('useTheme debe usarse dentro de un ThemeContext.Provider')
    }
    return contexto
}