import Image from 'next/image';
import {notFound} from 'next/navigation';
import {ChevronLeft, DollarSign, CookingPot} from 'lucide-react';
import Link from 'next/link';
import type {Metadata} from 'next';

import {recipes} from '@/lib/mock-data';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';

type Props = {
  params: {slug: string};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const recipe = recipes.find(r => r.slug === params.slug);

  if (!recipe) {
    return {
      title: 'Recipe not found',
    };
  }

  return {
    title: `${recipe.name} - Brownie Boost`,
    description: recipe.description,
  };
}

export default function RecipeDetailPage({params}: {params: {slug: string}}) {
  const recipe = recipes.find(r => r.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === recipe.imageId);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/recipes"
          className="mb-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Voltar para Receitas
        </Link>
        <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="mt-4">
          <Badge variant="secondary">{recipe.category}</Badge>
          <h1 className="mt-2 font-headline text-3xl font-bold md:text-4xl">
            {recipe.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {recipe.description}
          </p>
        </div>
      </div>

      <Separator />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <DollarSign className="h-5 w-5" />
                <span>Custo e Lucro</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Custo por unidade:</strong> R${' '}
                {recipe.costPerBrownie.toFixed(2).replace('.', ',')}
              </p>
              <p>
                <strong>Preço de venda sugerido:</strong> R$ 4,00 - R$ 5,00
              </p>
              <p className="text-sm text-green-700 dark:text-green-400">
                <strong>Lucro potencial:</strong> até 460% por unidade!
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-headline text-2xl font-semibold">Ingredientes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="font-headline text-2xl font-semibold">
          Modo de Preparo
        </h2>
        <div className="mt-4 space-y-4">
          {recipe.instructions.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {index + 1}
              </div>
              <p className="pt-1 text-foreground/90">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
