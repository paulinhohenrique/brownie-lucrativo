'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  BookOpen,
  Calculator,
  Goal,
  Users,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import type {ReactNode} from 'react';

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {BrownieIcon} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

const navItems = [
  {href: '/recipes', icon: BookOpen, label: 'Recipes'},
  {href: '/calculator', icon: Calculator, label: 'Cost Calculator'},
  {href: '/strategies', icon: Goal, label: 'Sales Strategies'},
  {href: '/forum', icon: Users, label: 'Community Forum'},
  {
    href: '/recommendations',
    icon: Sparkles,
    label: 'AI Recommendations',
  },
  {href: '/support', icon: MessageCircle, label: 'Expert Support'},
];

export default function MainLayout({children}: {children: ReactNode}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Link
              href="/recipes"
              className={cn(
                'flex items-center gap-2 font-headline text-xl',
                'group-data-[collapsible=icon]:hidden'
              )}
            >
              <BrownieIcon className="h-6 w-6 text-primary" />
              <span className="font-bold">Brownie Lucrativo</span>
            </Link>
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map(item => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={
                    pathname === item.href ||
                    (item.href !== '/recipes' && pathname.startsWith(item.href))
                  }
                  tooltip={{
                    children: item.label,
                    className: 'font-body',
                  }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://i.pravatar.cc/150?u=a042581f4e29026708e"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold">Usuário</span>
              <span className="text-xs text-muted-foreground">
                Plano Pro
              </span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
