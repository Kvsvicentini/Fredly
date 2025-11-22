/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavigationHeaderProps {
  showSignUp?: boolean
  showSignIn?: boolean
}

export function NavigationHeader({ showSignUp = false, showSignIn = false }: NavigationHeaderProps) {
  return (
    <header className="bg-[#003D82] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">

            <span className="text-xl font-bold text-white">FREDLY</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {showSignUp && (
            <>
              <span className="text-white/80">Não tem conta?</span>
              <Button asChild variant="secondary" className="bg-[#005BAA] hover:bg-[#004A8F] text-white border-none">
                <Link href="/cadastro">Comece agora!</Link>
              </Button>
            </>
          )}
          {showSignIn && (
            <>
              <span className="text-white/80">Já tem conta?</span>
              <Button asChild variant="secondary" className="bg-[#005BAA] hover:bg-[#004A8F] text-white border-none">
                <Link href="/login">Entrar</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
