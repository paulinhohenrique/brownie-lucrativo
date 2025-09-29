import type {NextApiRequest, NextApiResponse} from 'next';
import {
  getPersonalizedRecipeRecommendations,
  PersonalizedRecipeRecommendationsInputSchema,
} from '@/ai/flows/personalized-recipe-recommendations';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const input = PersonalizedRecipeRecommendationsInputSchema.parse(req.body);
    const result = await getPersonalizedRecipeRecommendations(input);
    return res.status(200).json(result);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({error: e.message});
  }
}
