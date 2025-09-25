import Link from 'next/link';

const checkoutUrl = 'https://go.paradisepagbr.com/pm1rffnciq';

export function OfferCard() {
  return (
    <div className="mx-auto mt-8 max-w-md">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-8 text-center text-foreground shadow-lg dark:from-amber-900/50 dark:to-orange-900/50">
        <p className="font-headline text-5xl font-bold">R$ 19,90</p>
        <p className="mt-1 font-semibold">no PIX</p>
        
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-lg font-bold uppercase text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          Me inscrever agora e ganhar +2 mil
        </a>
      </div>
    </div>
  );
}
