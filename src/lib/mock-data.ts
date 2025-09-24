export type Recipe = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: 'Classic' | 'Gluten-Free' | 'Lactose-Free' | 'Special';
  imageId: string;
  ingredients: string[];
  instructions: string[];
  costPerBrownie: number;
};

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'classic-fudge-brownies',
    name: 'Classic Fudge Brownies',
    description:
      'The ultimate rich and gooey chocolate fudge brownies. A timeless classic that everyone loves.',
    category: 'Classic',
    imageId: 'classic-fudge-brownie',
    costPerBrownie: 0.89,
    ingredients: [
      '1/2 cup unsalted butter, melted',
      '1 cup granulated sugar',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1/2 cup all-purpose flour',
      '1/3 cup unsweetened cocoa powder',
      '1/4 teaspoon baking powder',
      '1/4 teaspoon salt',
      '1/2 cup chocolate chips',
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour an 8-inch square pan.',
      'In a large bowl, mix together the melted butter and sugar until well combined.',
      'Beat in the eggs one at a time, then stir in the vanilla.',
      'In a separate bowl, combine flour, cocoa powder, baking powder, and salt. Gradually add to the egg mixture until just combined.',
      'Fold in the chocolate chips.',
      'Spread the batter evenly into the prepared pan.',
      'Bake for 20 to 25 minutes, or until a toothpick inserted into the center comes out with moist crumbs.',
      'Let cool completely before cutting into squares.',
    ],
  },
  {
    id: '2',
    slug: 'gluten-free-avocado-brownies',
    name: 'Gluten-Free Avocado Brownies',
    description:
      'A surprisingly delicious and healthy twist, using avocado for a creamy texture.',
    category: 'Gluten-Free',
    imageId: 'gluten-free-brownie',
    costPerBrownie: 1.15,
    ingredients: [
      '1 large avocado, mashed',
      '1/2 cup maple syrup',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1/2 cup almond flour',
      '1/3 cup unsweetened cocoa powder',
      '1/4 teaspoon baking soda',
      '1/4 teaspoon salt',
      '1/2 cup dark chocolate chips',
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line an 8-inch square pan with parchment paper.',
      'In a large bowl, whisk together the mashed avocado and maple syrup.',
      'Beat in the eggs and vanilla extract.',
      'In a separate bowl, combine almond flour, cocoa powder, baking soda, and salt. Add to the wet ingredients.',
      'Fold in the dark chocolate chips.',
      'Pour batter into the pan and smooth the top.',
      'Bake for 25-30 minutes. Let cool before serving.',
    ],
  },
  {
    id: '3',
    slug: 'lactose-free-dark-chocolate-brownies',
    name: 'Lactose-Free Dark Chocolate Brownies',
    description: 'Intensely chocolatey and completely dairy-free for everyone to enjoy.',
    category: 'Lactose-Free',
    imageId: 'lactose-free-brownie',
    costPerBrownie: 0.95,
    ingredients: [
      '1/2 cup coconut oil, melted',
      '1 cup coconut sugar',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1/2 cup all-purpose flour',
      '1/3 cup dark cocoa powder',
      '1/4 teaspoon baking powder',
      '1/4 teaspoon salt',
      '1/2 cup dairy-free chocolate chips',
    ],
    instructions: [
      'Preheat oven to 350°F (175°C) and prepare an 8-inch square pan.',
      'Combine melted coconut oil and coconut sugar in a large bowl.',
      'Whisk in eggs and vanilla.',
      'Mix in dry ingredients: flour, cocoa powder, baking powder, and salt.',
      'Stir in dairy-free chocolate chips.',
      'Bake for 22-26 minutes. Cool completely.',
    ],
  },
  {
    id: '4',
    slug: 'caramel-swirl-brownies',
    name: 'Caramel Swirl Brownies',
    description:
      'A decadent brownie with a beautiful and delicious caramel swirl on top.',
    category: 'Special',
    imageId: 'caramel-swirl-brownie',
    costPerBrownie: 1.25,
    ingredients: [
      '1 batch of Classic Fudge Brownie batter',
      '1/2 cup caramel sauce',
      '1/4 teaspoon sea salt for sprinkling',
    ],
    instructions: [
      'Prepare the Classic Fudge Brownie batter as directed.',
      'Pour the batter into the prepared pan.',
      'Drizzle the caramel sauce over the top of the batter.',
      'Use a knife to gently swirl the caramel into the brownie batter.',
      'Sprinkle with sea salt.',
      'Bake for 25-30 minutes, or until a toothpick comes out with moist crumbs.',
      'Allow to cool fully to let the caramel set.',
    ],
  },
];

export type ForumReply = {
  id: string;
  author: string;
  avatarUrl: string;
  createdAt: string;
  content: string;
};

export type ForumThread = {
  id: string;
  title: string;
  author: string;
  avatarUrl: string;
  createdAt: string;
  replyCount: number;
  content: string;
  replies: ForumReply[];
};

export const forumThreads: ForumThread[] = [
  {
    id: '1',
    title: 'Qual a melhor embalagem para vender na rua?',
    author: 'Ana Confeiteira',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    createdAt: '2 dias atrás',
    replyCount: 5,
    content:
      'Olá pessoal! Estou começando a vender meus brownies na faculdade e queria saber qual tipo de embalagem vocês recomendam. Pensei em saquinhos plásticos, mas talvez uma caixinha passe mais profissionalismo. O que acham?',
    replies: [
      {
        id: 'r1',
        author: 'Chef Ricardo',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
        createdAt: '2 dias atrás',
        content:
          'Ótima pergunta, Ana! Uma caixinha de papel com seu logo (mesmo que seja um carimbo) agrega muito valor. O custo é um pouco maior, mas você pode cobrar mais e o cliente percebe como um produto premium.',
      },
      {
        id: 'r2',
        author: 'Maria Doceira',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
        createdAt: '1 dia atrás',
        content:
          'Eu comecei com saquinhos de celofane e uma fita bonita. É barato e charmoso! Depois que comecei a lucrar mais, investi nas caixinhas que o Chef Ricardo mencionou.',
      },
    ],
  },
  {
    id: '2',
    title: 'Meu brownie está ficando seco. O que pode ser?',
    author: 'Lucas Mendes',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    createdAt: '5 dias atrás',
    replyCount: 3,
    content:
      'Estou seguindo a receita clássica à risca, mas meus brownies estão saindo um pouco secos e quebradiços. Alguma dica? Será o tempo de forno?',
    replies: [
      {
        id: 'r3',
        author: 'Chef Ricardo',
        avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
        createdAt: '5 dias atrás',
        content:
          'Lucas, 90% das vezes isso é tempo de forno. Tente tirar 3-5 minutos antes do tempo indicado. O brownie continua assando um pouco fora do forno e o segredo da umidade é tirá-lo quando o palito ainda sai com migalhas úmidas, não totalmente limpo.',
      },
    ],
  },
];

export type ChatMessage = {
  id: string;
  sender: 'user' | 'expert';
  avatarUrl: string;
  content: string;
  timestamp: string;
};

export const expertChatMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'expert',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    content:
      'Olá! Sou o Chef Ricardo, seu assistente de confeitaria. Como posso ajudar você hoje?',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    sender: 'user',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708e',
    content:
      'Oi, Chef! Estou fazendo a receita sem lactose e queria saber se posso usar óleo de girassol no lugar do óleo de coco.',
    timestamp: '10:31 AM',
  },
  {
    id: '3',
    sender: 'expert',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    content:
      'Pode sim! O óleo de girassol é um ótimo substituto. Ele tem um sabor mais neutro, então o gosto de chocolate do brownie vai ficar ainda mais em evidência. Mantenha a mesma quantidade da receita.',
    timestamp: '10:32 AM',
  },
  {
    id: '4',
    sender: 'user',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708e',
    content: 'Perfeito, muito obrigado!',
    timestamp: '10:32 AM',
  },
];
