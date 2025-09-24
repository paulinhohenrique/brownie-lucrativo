'use client';

import {useState, useTransition} from 'react';
import {Sparkles, Loader2, Wand2} from 'lucide-react';
import type {
  PersonalizedRecipeRecommendationsInput,
  PersonalizedRecipeRecommendationsOutput,
} from '@/ai/flows/personalized-recipe-recommendations';
import {useToast} from '@/hooks/use-toast';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

type RecommendationFormProps = {
  getRecommendations: (
    input: PersonalizedRecipeRecommendationsInput
  ) => Promise<PersonalizedRecipeRecommendationsOutput>;
};

export function RecommendationForm({getRecommendations}: RecommendationFormProps) {
  const [isPending, startTransition] = useTransition();
  const {toast} = useToast();
  const [formData, setFormData] = useState<PersonalizedRecipeRecommendationsInput>({
    dietaryRestrictions: '',
    brownieTypePreferences: '',
  });
  const [result, setResult] =
    useState<PersonalizedRecipeRecommendationsOutput | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    startTransition(async () => {
      try {
        const recommendation = await getRecommendations(formData);
        setResult(recommendation);
      } catch (error) {
        console.error('Failed to get recommendations:', error);
        toast({
          title: 'Erro ao gerar receita',
          description:
            'Não foi possível obter uma recomendação. Tente novamente.',
          variant: 'destructive',
        });
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">
            Crie sua Receita Personalizada
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions">
                Você tem alguma restrição alimentar?
              </Label>
              <Input
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                placeholder="Ex: sem glúten, sem lactose, alergia a nozes"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brownieTypePreferences">
                Que tipo de brownie você mais gosta?
              </Label>
              <Textarea
                id="brownieTypePreferences"
                name="brownieTypePreferences"
                value={formData.brownieTypePreferences}
                onChange={handleInputChange}
                placeholder="Ex: bem chocolatudo, com caramelo, mais fofinho, com pedaços de chocolate branco..."
                rows={4}
              />
            </div>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Gerar Receita com IA
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="lg:col-span-1">
        {isPending && (
          <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed">
            <div className="text-center text-muted-foreground">
              <Sparkles className="mx-auto h-12 w-12 animate-pulse" />
              <p className="mt-4 font-semibold">
                Criando uma receita especial para você...
              </p>
            </div>
          </div>
        )}
        {result && (
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">
                {result.recipeName}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Por que essa receita é para você:
                </h3>
                <p className="text-sm text-foreground/80">{result.reasoning}</p>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Ingredientes:
                </h3>
                <p className="whitespace-pre-wrap text-sm text-foreground/80">
                  {result.ingredients}
                </p>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold">
                  Modo de Preparo:
                </h3>
                <p className="whitespace-pre-wrap text-sm text-foreground/80">
                  {result.instructions}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
