import type {Metadata} from 'next';
import {getPersonalizedRecipeRecommendations} from '@/ai/flows/personalized-recipe-recommendations';
import {RecommendationForm} from './recommendation-form';

export const metadata: Metadata = {
  title: 'AI Recommendations - Brownie Lucrativo',
};

export default function RecommendationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Recomendações com IA
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Não sabe qual brownie fazer? Descreva suas preferências e restrições
          alimentares, e nossa IA criará uma receita exclusiva para você.
        </p>
      </div>
      <RecommendationForm
        getRecommendations={getPersonalizedRecipeRecommendations}
      />
    </div>
  );
}
