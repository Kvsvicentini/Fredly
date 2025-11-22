/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavigationHeader } from "@/components/navigation-header"
import Image from "next/image"

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-[#C8E4F5]">
      <NavigationHeader showSignIn />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl font-bold text-[#003D82] leading-tight">Cadastra-se grátis!</h1>

            <form className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Informe seu nome completo"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Informe seu e-mail"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Informe o CPF ou CNPJ"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
                <Input
                  type="tel"
                  placeholder="Insira seu DDD + Telefone"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Crie uma senha de acesso"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Confirme sua senha"
                  className="h-14 bg-white border-2 border-[#003D82] rounded-2xl text-gray-600 placeholder:text-gray-400"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full max-w-xs mx-auto block bg-[#003D82] hover:bg-[#002A5C] text-white h-14 rounded-full text-lg"
              >
                Comece agora!
              </Button>
            </form>
          </div>

          <div className="relative">
            <img
              src="/fredly.png"
              alt="Ilustração de gestão de eventos"
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
