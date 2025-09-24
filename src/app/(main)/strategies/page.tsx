import type {Metadata} from 'next';
import {Package, Megaphone, ShoppingCart, Users} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Sales Strategies - Brownie Lucrativo',
};

const strategies = [
  {
    id: 'packaging',
    icon: Package,
    title: 'Embalagem que Vende',
    content: `A primeira impressão é a que fica! Invista em embalagens que protejam o brownie e que sejam visualmente atraentes. Use etiquetas com sua marca e informações de contato. Caixinhas individuais, saquinhos de celofane com fitas coloridas ou embalagens personalizadas agregam valor e justificam um preço maior.`,
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Digital para Confeiteiras',
    content: `Use o poder das redes sociais! Crie um perfil no Instagram e Facebook exclusivo para seus brownies. Poste fotos de alta qualidade (use a luz do dia!), grave vídeos do processo de produção e dos brownies sendo cortados. Interaja com seus seguidores, crie enquetes e anuncie promoções. O WhatsApp Business também é uma ferramenta poderosa para gerenciar pedidos.`,
  },
  {
    id: 'channels',
    icon: ShoppingCart,
    title: 'Canais de Venda',
    content: `Não se limite a um único canal. Venda para amigos, família e colegas de trabalho. Ofereça em comércios locais, como cafés e escritórios. Crie combos promocionais (ex: "Compre 4, Leve 5"). Considere vender por aplicativos de entrega como iFood ou Rappi para alcançar mais clientes na sua região.`,
  },
  {
    id: 'customer',
    icon: Users,
    title: 'Fidelização de Clientes',
    content: `Um cliente satisfeito sempre volta e indica! Crie um programa de fidelidade simples: a cada 10 brownies comprados, o próximo é grátis. Peça feedback, trate seus clientes pelo nome e ofereça um atendimento excepcional. Um pequeno bilhete de agradecimento junto com o pedido pode fazer toda a diferença.`,
  },
];

export default function StrategiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Estratégias de Venda
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Aprenda a apresentar, divulgar e vender seus brownies como uma
          profissional.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {strategies.map(strategy => (
          <AccordionItem key={strategy.id} value={strategy.id}>
            <AccordionTrigger className="font-headline text-xl">
              <div className="flex items-center gap-3">
                <strategy.icon className="h-6 w-6 text-primary" />
                <span>{strategy.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80">
              {strategy.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
