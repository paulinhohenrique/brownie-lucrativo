import Link from 'next/link';
import { Lock } from 'lucide-react';

import { BrownieIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  const paymentUrl = 'https://go.paradisepagbr.com/pm1rffnciq';

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-xl"
          >
            <BrownieIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Brownie Lucrativo</span>
          </Link>
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>Pagamento Seguro</span>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-card p-8 text-center text-card-foreground shadow-xl">
            <h1 className="font-headline text-2xl font-bold">
              Finalize sua Inscrição
            </h1>
            <p className="mt-2 text-muted-foreground">
              Acesso imediato a todo o material por um preço especial.
            </p>
            <div className="my-8">
              <p className="font-headline text-6xl font-bold">R$ 19,90</p>
              <p className="mt-1 font-semibold text-muted-foreground">no PIX</p>
            </div>
            <Button
              asChild
              className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-6 text-lg font-bold uppercase text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                ME INSCREVER AGORA E GANHAR +2 MIL
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Garantia de 7 dias. Compra 100% segura.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
