import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ChevronLeft} from 'lucide-react';
import type {Metadata} from 'next';

import {forumThreads} from '@/lib/mock-data';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';

type Props = {
  params: {id: string};
};

export async function generateStaticParams() {
  return forumThreads.map(thread => ({
    id: thread.id,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const thread = forumThreads.find(t => t.id === params.id);
  if (!thread) {
    return {title: 'Topic not found'};
  }
  return {
    title: `${thread.title} - Community Forum`,
  };
}

export default function ForumThreadPage({params}: {params: {id:string}}) {
  const thread = forumThreads.find(t => t.id === params.id);

  if (!thread) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/forum"
          className="mb-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Voltar para a Comunidade
        </Link>
        <h1 className="font-headline text-3xl font-bold">{thread.title}</h1>
      </div>

      {/* Original Post */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={thread.avatarUrl} alt={thread.author} />
              <AvatarFallback>{thread.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{thread.author}</p>
                <p className="text-xs text-muted-foreground">
                  {thread.createdAt}
                </p>
              </div>
              <p className="mt-4 text-foreground/90">{thread.content}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Replies */}
      <div className="space-y-6">
        <h2 className="font-headline text-2xl font-semibold">
          {thread.replies.length} Respostas
        </h2>
        {thread.replies.map(reply => (
          <Card key={reply.id} className="bg-secondary/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={reply.avatarUrl} alt={reply.author} />
                  <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{reply.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {reply.createdAt}
                    </p>
                  </div>
                  <p className="mt-4 text-foreground/90">{reply.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Reply Form */}
      <div className="space-y-4 pt-4">
        <h3 className="font-headline text-xl font-semibold">Sua Resposta</h3>
        <Textarea placeholder="Escreva sua resposta aqui..." rows={5} />
        <Button>Publicar Resposta</Button>
      </div>
    </div>
  );
}
