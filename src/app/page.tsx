import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Award,
  Users,
  Gift,
  ShieldCheck,
  Star,
  BookOpen,
  Calculator,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';

import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {BrownieIcon} from '@/components/icons';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-brownie');
const authorImage = PlaceHolderImages.find(img => img.id === 'author-pic');
const socialProofImage1 = PlaceHolderImages.find(
  img => img.id === 'social-proof-1'
);
const checkoutUrl = 'https://go.paradisepagbr.com/pm1rffnciq';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-xl"
          >
            <BrownieIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Brownie Boost</span>
          </Link>
          <Button asChild>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Comece a Lucrar
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-8 py-12 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-headline text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Transforme sua paixão por brownies em R$2.000 a mais todo mês com
              nosso PDF.
            </h1>
            <p className="max-w-xl text-lg text-foreground/80">
              Com o e-book Brownie Supreme, você aprende um passo a passo de 3
              etapas, testado e comprovado, para criar brownies irresistíveis
              que custam menos de R$1 para fazer e vendem por até R$5.
            </p>
            <Button size="lg" asChild className="mt-4">
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Quero Começar Agora
              </a>
            </Button>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl md:h-[400px]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Tudo que você precisa para faturar alto com brownies
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Mesmo que você seja iniciante, não tenha muito dinheiro para
                investir ou ache que confeitaria não é para você.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl">
                      Receitas Lucrativas
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Acesso a receitas variadas e validadas, incluindo opções sem
                  glúten/lactose, que garantem sabor e alta margem de lucro.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl">
                      Custo e Preço no Controle
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Use nossa calculadora de custos e planilhas para precificar
                  seu produto corretamente e maximizar seus ganhos desde o
                  início.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl">
                      Suporte de Especialistas
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Nunca se sinta perdida. Tenha suporte de confeiteiros
                  profissionais para tirar suas dúvidas sempre que precisar.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Milhares de alunas comuns já estão tendo resultados
            </h2>
          </div>
          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
              {socialProofImage1 && (
                <Image
                  src={socialProofImage1.imageUrl}
                  alt={socialProofImage1.description}
                  data-ai-hint={socialProofImage1.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-4 rounded-lg bg-secondary p-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-lg">
                  “Eu nunca imaginei que fosse possível. Em uma semana, seguindo
                  as estratégias de venda, eu vendi 1.300 reais em brownies! O
                  investimento já se pagou várias vezes.”
                </blockquote>
                <p className="font-semibold">— Joana S., ex-dona de casa</p>
              </div>
              <div className="flex flex-col items-start gap-4 rounded-lg bg-secondary p-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-lg">
                  “O suporte é incrível! Tive uma dúvida sobre um ingrediente e
                  me responderam na hora. Isso me deu a segurança que eu
                  precisava para começar.”
                </blockquote>
                <p className="font-semibold">— Mariana P., iniciante</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Compre hoje e receba 5 bônus exclusivos
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Além do método completo, você leva um pacote de ferramentas para
              acelerar seus resultados.
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 text-left md:grid-cols-2">
              <div className="flex items-start gap-4">
                <Gift className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    Fotos Profissionais (FoodPorn)
                  </h3>
                  <p className="text-primary-foreground/80">
                    Um acervo de imagens de alta qualidade para você usar nas
                    suas redes sociais e divulgar seus brownies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    Fichas de Custo e Planilhas
                  </h3>
                  <p className="text-primary-foreground/80">
                    Controle total sobre seus custos e lucros com nossas
                    ferramentas financeiras prontas para usar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    Estratégias de Venda e Marketing
                  </h3>
                  <p className="text-primary-foreground/80">
                    Aprenda a divulgar, criar embalagens atraentes e vender
                    seus brownies todos os dias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-headline text-xl font-semibold">
                    Acesso à Comunidade VIP
                  </h3>
                  <p className="text-primary-foreground/80">
                    Troque experiências, tire dúvidas e faça networking com
                    outras confeiteiras de sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              O que você vai aprender no PDF Brownie Supreme
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Um guia completo, passo a passo, para você dominar a arte de
              fazer e vender brownies.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    1. INTRODUÇÃO AO MUNDO DO BROWNIE
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Origens do Brownie Americano</p>
                  <p>Os ingredientes chave para um Brownie de sucesso</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    2. SEGREDO DOS BROWNIES PERFEITOS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Proportões certas: a matemática do brownie delicioso</p>
                  <p>Erros comuns e como evitá-los</p>
                  <p>O papel crucial do forno: tempo e temperatura</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    3. MISTURAS CAMPEÃS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Variações de ingredientes para brownies irresistíveis</p>
                  <p>Técnicas de combinação de sabores</p>
                  <p>Brownies que custam centavos e vendem muito!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    4. BROWNIES VARIADOS E VICIANTES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Introdução à diversidade de brownies</p>
                  <p>7 massas base: desde o clássico ao inovador</p>
                  <p>12 recheios saborosos e 13 combinações arrasadoras</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    5. FINALIZAÇÕES E COBERTURAS DELICIOSAS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Texturas e camadas: como potencializar seu brownie</p>
                  <p>Coberturas que encantam o paladar e os olhos</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    6. NEGÓCIOS LUCRATIVOS COM BROWNIES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Precificação inteligente: como definir o valor ideal</p>
                  <p>Estratégias de venda para o brownie supreme</p>
                  <p>Dicas de marketing e apresentação para atrair mais clientes</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    Bônus: 7. GUIA PRÁTICO PARA INICIANTES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Passo a passo para quem está começando na confeitaria</p>
                  <p>Suporte exclusivo com a Professora Eloisa Cola</p>
                  <p>Metodologia descomplicada: receitas econômicas e saborosas</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    Bônus: 8. AMPLIE SEU CARDÁPIO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Receitas testadas e aprovadas para todos os paladares</p>
                  <p>Brownies inclusivos: opções sem glúten e lactose</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    Bônus: 9. SE DESTAQUE NA CONFEITARIA COM BROWNIES
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-foreground/80">
                  <p>Técnicas avançadas para ser referência no mercado</p>
                  <p>
                    Acompanhamento e feedback contínuo para aprimorar seus
                    resultados
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="container py-16 text-center md:py-24">
          <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">
            Sua Satisfação ou seu Dinheiro de Volta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Você tem 7 dias para testar tudo sem compromisso. Se por qualquer
            motivo você não gostar ou não se adaptar, basta um e-mail para ter
            100% do seu investimento de volta. Risco zero para você.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Pronta para criar sua nova fonte de renda?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/80">
              Clique no botão abaixo e garanta seu acesso ao método Brownie
              Supreme com todos os bônus inclusos. A oportunidade de mudar sua
              vida financeira está a um clique de distância.
            </p>
            <Button size="lg" asChild className="mt-8">
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Sim, Quero Lucrar com Brownies!
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between text-sm text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Brownie Boost. All rights
            reserved.
          </p>
          <p>Feito com ❤️ para confeiteiras de sucesso.</p>
        </div>
      </footer>
    </div>
  );
}
