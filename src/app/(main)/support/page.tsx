import type {Metadata} from 'next';
import {Send} from 'lucide-react';

import {expertChatMessages} from '@/lib/mock-data';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {cn} from '@/lib/utils';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Expert Support - Brownie Lucrativo',
};

export default function SupportPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          Suporte com Especialistas
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Converse com nossos chefs e tire suas dúvidas em tempo real.
        </p>
      </div>

      <Card className="flex flex-1 flex-col">
        <CardHeader className="flex flex-row items-center gap-3 border-b">
          <Avatar>
            <AvatarImage
              src="https://i.pravatar.cc/150?u=a042581f4e29026705d"
              alt="Chef Ricardo"
            />
            <AvatarFallback>CR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Chef Ricardo</p>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full px-6 py-4">
            <div className="space-y-6">
              {expertChatMessages.map(message => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-end gap-3',
                    message.sender === 'user' && 'justify-end'
                  )}
                >
                  {message.sender === 'expert' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatarUrl} />
                      <AvatarFallback>
                        {message.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-xs rounded-lg px-4 py-2 md:max-w-md',
                      message.sender === 'user'
                        ? 'rounded-br-none bg-primary text-primary-foreground'
                        : 'rounded-bl-none bg-secondary'
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={cn(
                        'mt-1 text-right text-xs',
                        message.sender === 'user'
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      )}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatarUrl} />
                      <AvatarFallback>
                        {message.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex w-full items-center gap-2">
            <Input
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1"
            />
            <Button>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
