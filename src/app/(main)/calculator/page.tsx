import type {Metadata} from 'next';
import {CalculatorClient} from './calculator-client';

export const metadata: Metadata = {
  title: 'Cost Calculator - Brownie Lucrativo',
};

export default function CalculatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Calculadora de Custos
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Calcule o custo exato de suas receitas para garantir a máxima
          lucratividade.
        </p>
      </div>
      <CalculatorClient />
    </div>
  );
}
