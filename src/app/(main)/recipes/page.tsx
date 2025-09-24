import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Metadata} from 'next';

import {recipes} from '@/lib/mock-data';
import {PlaceHolderImages} from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Recipes - Brownie Lucrativo',
};

export default function RecipesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Nossas Receitas
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore receitas testadas e aprovadas para maximizar seu lucro e
          encantar seus clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map(recipe => {
          const image = PlaceHolderImages.find(img => img.id === recipe.imageId);
          return (
            <Card key={recipe.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
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
                <div className="p-6 pb-2">
                  <Badge variant="secondary">{recipe.category}</Badge>
                  <CardTitle className="mt-2 font-headline text-xl">
                    {recipe.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{recipe.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/recipes/${recipe.slug}`}
                  className="flex items-center font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Ver Receita <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
