/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavigationHeader } from "@/components/navigation-header"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#C8E4F5]">
      <NavigationHeader showSignIn />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-[#003D82] leading-tight">Sistema de Gerenciamento de Eventos</h1>

            <div className="space-y-4">
              <p className="text-lg text-gray-900 font-semibold">
                Transforme seus eventos em experiências inesquecíveis!
              </p>
              <p className="text-gray-700 leading-relaxed">
                Seja uma festa, conferência, casamento ou evento corporativo — nós te ajudamos a planejar, organizar e
                gerenciar cada detalhe. Com nossa plataforma intuitiva, você tem controle total do seu evento em um só
                lugar: convidados, cronograma, orçamento, fornecedores e muito mais.
              </p>
              <p className="text-gray-900 font-semibold">Comece agora e torne seu próximo evento um sucesso.</p>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-[#003D82] hover:bg-[#002A5C] text-white px-8">
                <Link href="/cadastro">Comece agora!</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-[#005BAA] hover:bg-[#004A8F] text-white">
                <Link href="/login">Entrar</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/fredly.png"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}


