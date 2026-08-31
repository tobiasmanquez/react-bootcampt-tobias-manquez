import { create } from 'zustand'
import { persist } from 'zustand/middleware';


interface LoginFormProps {
    password: string;
    name: string;
    setPasswordInput: (password: string) => void;
    setNameInput: (name: string) => void;
}

export const useLoginForm = create<LoginFormProps>()(

    persist(
    (set) => ({
        password: '',
        name: '',
        setPasswordInput: (password) => set({ password }),
        setNameInput: (name) => set({ name }),   
        logout: () => set({ password: '', name: '' }),
    }), { name: 'clave'}
    )
  )