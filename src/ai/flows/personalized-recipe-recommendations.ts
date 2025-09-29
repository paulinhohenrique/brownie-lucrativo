/**
 * @fileOverview A personalized brownie recipe recommendation AI agent.
 *
 * - getPersonalizedRecipeRecommendations - A function that provides personalized recipe recommendations based on dietary restrictions.
 * - PersonalizedRecipeRecommendationsInput - The input type for the getPersonalizedRecipeRecommendations function.
 * - PersonalizedRecipeRecommendationsOutput - The return type for the getPersonalizedRecipeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const PersonalizedRecipeRecommendationsInputSchema = z.object({
  dietaryRestrictions: z
    .string()
    .describe(
      'A comma separated list of dietary restrictions the user may have, such as gluten-free, lactose-free, nut allergy, etc.'
    ),
  brownieTypePreferences: z
    .string()
    .describe(
      'A description of brownie types the user likes, such as chocolate, caramel, etc.'
    ),
});
export type PersonalizedRecipeRecommendationsInput = z.infer<
  typeof PersonalizedRecipeRecommendationsInputSchema
>;

const PersonalizedRecipeRecommendationsOutputSchema = z.object({
  recipeName: z.string().describe('The recommended recipe name.'),
  ingredients: z.string().describe('The ingredients required for the recipe.'),
  instructions: z.string().describe('The instructions to make the recipe.'),
  reasoning: z
    .string()
    .describe(
      'Explanation of why this recipe suits the user based on their restrictions and preferences.'
    ),
});
export type PersonalizedRecipeRecommendationsOutput = z.infer<
  typeof PersonalizedRecipeRecommendationsOutputSchema
>;

export async function getPersonalizedRecipeRecommendations(
  input: PersonalizedRecipeRecommendationsInput
): Promise<PersonalizedRecipeRecommendationsOutput> {
  return personalizedRecipeRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecipeRecommendationsPrompt',
  input: {schema: PersonalizedRecipeRecommendationsInputSchema},
  output: {schema: PersonalizedRecipeRecommendationsOutputSchema},
  prompt: `You are an expert brownie recipe recommender. Given the user's dietary restrictions and brownie type preferences, you will recommend a specific brownie recipe that aligns with their needs. Explain why the recommended recipe is a good fit for the user.

Dietary Restrictions: {{{dietaryRestrictions}}}
Brownie Type Preferences: {{{brownieTypePreferences}}}

Respond in the following format:
Recipe Name: [recipe name]
Ingredients: [list of ingredients]
Instructions: [step-by-step instructions]
Reasoning: [why this recipe suits the user]`,
});

const personalizedRecipeRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecipeRecommendationsFlow',
    inputSchema: PersonalizedRecipeRecommendationsInputSchema,
    outputSchema: PersonalizedRecipeRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
