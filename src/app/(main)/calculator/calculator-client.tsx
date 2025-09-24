'use client';

import {useState} from 'react';
import {Trash2, PlusCircle, DollarSign, PieChart, Info} from 'lucide-react';

import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

type Ingredient = {
  id: number;
  name: string;
  packageSize: number; // in grams or ml
  packageCost: number;
  amountUsed: number; // in grams or ml
};

export function CalculatorClient() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: Date.now(),
      name: 'Farinha de Trigo',
      packageSize: 1000,
      packageCost: 5.0,
      amountUsed: 120,
    },
  ]);
  const [otherCosts, setOtherCosts] = useState(2.0); // e.g., electricity, gas, packaging
  const [yields, setYields] = useState(12); // number of brownies

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        id: Date.now(),
        name: '',
        packageSize: 0,
        packageCost: 0,
        amountUsed: 0,
      },
    ]);
  };

  const updateIngredient = (id: number, field: keyof Ingredient, value: string) => {
    setIngredients(
      ingredients.map(ing =>
        ing.id === id ? {...ing, [field]: parseFloat(value) || 0} : ing
      )
    );
  };
  
  const updateIngredientName = (id: number, value: string) => {
    setIngredients(
      ingredients.map(ing => (ing.id === id ? {...ing, name: value} : ing))
    );
  };

  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const totalIngredientsCost = ingredients.reduce((acc, ing) => {
    if (ing.packageSize === 0) return acc;
    const costPerUnit = ing.packageCost / ing.packageSize;
    return acc + costPerUnit * ing.amountUsed;
  }, 0);

  const totalRecipeCost = totalIngredientsCost + otherCosts;
  const costPerBrownie = yields > 0 ? totalRecipeCost / yields : 0;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Ingredientes e Custos</CardTitle>
          <CardDescription>
            Adicione os ingredientes da sua receita e seus respectivos custos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ingrediente</TableHead>
                  <TableHead>Tam. Pacote (g/ml)</TableHead>
                  <TableHead>Custo Pacote (R$)</TableHead>
                  <TableHead>Qtd. Usada (g/ml)</TableHead>
                  <TableHead>Custo (R$)</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ingredients.map(ing => {
                  const costPerUnit =
                    ing.packageSize > 0 ? ing.packageCost / ing.packageSize : 0;
                  const ingredientCost = costPerUnit * ing.amountUsed;
                  return (
                    <TableRow key={ing.id}>
                      <TableCell>
                        <Input
                          value={ing.name}
                          onChange={e =>
                            updateIngredientName(ing.id, e.target.value)
                          }
                          placeholder="Ex: Chocolate em pó"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={ing.packageSize || ''}
                          onChange={e =>
                            updateIngredient(ing.id, 'packageSize', e.target.value)
                          }
                          placeholder="1000"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={ing.packageCost || ''}
                          onChange={e =>
                            updateIngredient(ing.id, 'packageCost', e.target.value)
                          }
                          placeholder="15.50"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={ing.amountUsed || ''}
                          onChange={e =>
                            updateIngredient(ing.id, 'amountUsed', e.target.value)
                          }
                          placeholder="200"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {ingredientCost.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeIngredient(ing.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Button onClick={addIngredient} variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Ingrediente
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="other-costs">Outros Custos (R$)</Label>
              <Input
                id="other-costs"
                type="number"
                value={otherCosts || ''}
                onChange={e => setOtherCosts(parseFloat(e.target.value) || 0)}
                placeholder="Ex: Embalagem, gás"
              />
            </div>
            <div>
              <Label htmlFor="yields">Rendimento (unidades)</Label>
              <Input
                id="yields"
                type="number"
                value={yields || ''}
                onChange={e => setYields(parseInt(e.target.value, 10) || 0)}
                placeholder="12"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Resumo de Custos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Custo Ingredientes:</span>
              <span className="font-bold">
                R$ {totalIngredientsCost.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Outros Custos:</span>
              <span className="font-bold">R$ {otherCosts.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-muted-foreground">Custo Total:</span>
              <span className="font-bold">R$ {totalRecipeCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl text-primary">
              <span className="font-headline">Custo por Brownie:</span>
              <span className="font-bold">R$ {costPerBrownie.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Dica de Preço!</AlertTitle>
              <AlertDescription>
                Recomendamos vender cada brownie por 3 a 4 vezes o custo de
                produção. Preço sugerido: R${' '}
                {(costPerBrownie * 3).toFixed(2)} a R${' '}
                {(costPerBrownie * 4).toFixed(2)}.
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
