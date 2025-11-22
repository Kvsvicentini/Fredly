"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Home, Calendar, Users, Bell, Menu, X, User, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "./ui/avatar"


interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)

  return (
    <div className="min-h-screen bg-[#C8E4F5]">
      <header className="bg-[#003D82] text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <div className="flex items-center gap-2">

              <span className="text-xl font-bold text-white">FREDLY</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={cn(
            "bg-[#1A4A6E] text-white flex flex-col py-6 transition-all duration-300",
            sidebarExpanded ? "w-64" : "w-16",
          )}
        >
          <div className="flex flex-col space-y-2 px-3">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg transition-colors",
                sidebarExpanded ? "justify-start" : "justify-center",
              )}
            >
              <Home className="h-6 w-6 flex-shrink-0" />
              {sidebarExpanded && <span className="text-lg font-medium">Início</span>}
            </Link>
            <Link
              href="/eventos"
              className={cn(
                "flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg transition-colors",
                sidebarExpanded ? "justify-start" : "justify-center",
              )}
            >
              <Calendar className="h-6 w-6 flex-shrink-0" />
              {sidebarExpanded && <span className="text-lg font-medium">Eventos</span>}
            </Link>
            <Link
              href="/clientes"
              className={cn(
                "flex items-center gap-4 p-3 hover:bg-white/10 rounded-lg transition-colors",
                sidebarExpanded ? "justify-start" : "justify-center",
              )}
            >
              <Users className="h-6 w-6 flex-shrink-0" />
              {sidebarExpanded && <span className="text-lg font-medium">Clientes</span>}
            </Link>
          </div>

          <div className="flex-1" />

          <div className="px-3">
            <div className={cn("flex items-center gap-3 py-4", sidebarExpanded ? "" : "justify-center")}>
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarFallback className="bg-[#4A90E2] text-white">F</AvatarFallback>
              </Avatar>
              {sidebarExpanded && <span className="font-semibold">Fulano</span>}
            </div>
          </div>
        </aside>

        {/* Menu lateral direito */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 bg-[#1A4A6E] text-white z-50 transform transition-transform duration-300 ease-in-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-white/20">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-[#4A90E2] text-white text-xl">F</AvatarFallback>
                </Avatar>
                <span className="text-xl font-semibold">Fulano</span>
              </div>

              <Link
                href="/perfil"
                className="flex items-center gap-3 py-4 px-3 hover:bg-white/10 rounded-lg transition-colors border-b border-white/10"
              >
                <User className="h-6 w-6" />
                <span className="text-lg">Informações Pessoais</span>
              </Link>

              <Link
                href="/notificacoes"
                className="flex items-center gap-3 py-4 px-3 hover:bg-white/10 rounded-lg transition-colors border-b border-white/10"
              >
                <Bell className="h-6 w-6" />
                <span className="text-lg">Notificações</span>
              </Link>

              <Link
                href="/equipe"
                className="flex items-center gap-3 py-4 px-3 hover:bg-white/10 rounded-lg transition-colors border-b border-white/10"
              >
                <Users className="h-6 w-6" />
                <span className="text-lg">Minha Equipe</span>
              </Link>

              <Link
                href="/ajuda"
                className="flex items-center gap-3 py-4 px-3 hover:bg-white/10 rounded-lg transition-colors border-b border-white/10"
              >
                <HelpCircle className="h-6 w-6" />
                <span className="text-lg">Ajuda</span>
              </Link>

              <button className="flex items-center gap-3 py-4 px-3 hover:bg-white/10 rounded-lg transition-colors w-full text-left border-b border-white/10">
                <LogOut className="h-6 w-6" />
                <span className="text-lg">Sair</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)} />}

        {/* Conteúdo principal */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
