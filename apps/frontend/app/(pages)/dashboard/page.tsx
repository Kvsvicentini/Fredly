import { DashboardLayout } from "@/components/dashboard-layout"
import {Card, CardContent} from "../../../components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ImageIcon, ArrowRight, DollarSign } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div className="bg-gray-200 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#1A4A6E] rounded-full mb-4">
            <ImageIcon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#003D82] mb-2">Olá, Fulano!</h2>
          <p className="text-[#003D82] text-lg">
            O Fredly deseja boas-vindas a você e ao seu negócio, conte com a gente!
          </p>
        </div>

        <Card className="bg-[#1A4A6E] text-white border-none">
          <CardContent className="p-8 space-y-6">
            <div>
              <p className="text-sm text-white/80 mb-2">Comece aqui:</p>
              <h3 className="text-3xl font-bold mb-4">Crie seu primeiro evento!</h3>
              <p className="text-white/90 text-lg">
                Organize seu evento com Fredly e conte com o seu melhor amigo na gestão de eventos
              </p>
            </div>

            <div className="space-y-3">
              <Button
                variant="secondary"
                className="w-full bg-[#2A5A7E] hover:bg-[#3A6A8E] text-white h-14 text-lg justify-between group"
              >
                Crie um evento agora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                className="w-full bg-[#2A5A7E] hover:bg-[#3A6A8E] text-white h-14 text-lg justify-between group"
              >
                Veja alguns de nossos templates
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-bold text-[#003D82] mb-6">Ferramentas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#1A4A6E] text-white border-none hover:bg-[#234F73] transition-colors cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A5A7E] rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Minha Equipe</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A4A6E] text-white border-none hover:bg-[#234F73] transition-colors cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A5A7E] rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Meus Clientes</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A4A6E] text-white border-none hover:bg-[#234F73] transition-colors cursor-pointer md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A5A7E] rounded-full flex items-center justify-center">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold">Controle Financeiro</h4>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
