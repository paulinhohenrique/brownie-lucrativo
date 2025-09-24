import Link from 'next/link';
import {MessageSquare, PlusCircle} from 'lucide-react';
import type {Metadata} from 'next';

import {forumThreads} from '@/lib/mock-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Community Forum - Brownie Lucrativo',
};

export default function ForumPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-headline text-3xl font-bold md:text-4xl">
            Comunidade
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Troque experiências, tire dúvidas e aprenda com outras
            confeiteiras.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Criar Novo Tópico
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <ul className="divide-y">
            {forumThreads.map(thread => (
              <li key={thread.id} className="p-6 transition-colors hover:bg-secondary/50">
                <Link href={`/forum/${thread.id}`} className="block">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={thread.avatarUrl} alt={thread.author} />
                      <AvatarFallback>
                        {thread.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{thread.author}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>{thread.replyCount} respostas</span>
                        </div>
                      </div>
                      <h2 className="mt-1 font-headline text-lg font-semibold text-primary">
                        {thread.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {thread.content}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {thread.createdAt}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
