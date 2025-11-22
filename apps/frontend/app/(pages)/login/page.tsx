/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavigationHeader } from "@/components/navigation-header"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#C8E4F5]">
      <NavigationHeader showSignUp />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl font-bold text-[#003D82] leading-tight">Seus eventos em um passe de mágica!</h1>

            <form className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Digite seu E-mail"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Digite sua Senha"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full max-w-xs mx-auto block bg-[#003D82] hover:bg-[#002A5C] text-white h-14 rounded-full text-lg"
              >
                Entrar
              </Button>
            </form>
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
