"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Chat } from "./ChatList";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";

interface ChatItemProps {
  chat: Chat;
  selected?: boolean;
  onClick?: () => void;
}

export function ChatItem({ chat, selected, onClick }: ChatItemProps) {
  const [sidebar, setSidebar] = React.useState<Element | null>(null);

  React.useEffect(() => {
    setSidebar(document.querySelector(".jun-edgeSidebar"));
  }, []);

  return (
    <li className="jun-sidebarMenuItem">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              "flex items-center gap-3 w-full p-3 rounded-lg text-left",
              "hover:bg-accent jun-sidebarMenuButton jun-sidebarMenuButton-spacing-3",
              selected && "bg-accent"
            )}
          >
            <div className="relative">
              <Avatar className="jun-sidebarIcon">
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1 overflow-hidden jun-sidebarText">
              <div className="flex items-center justify-between">
                <span className="font-medium">{chat.name}</span>
                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground truncate">{chat.lastMessage}</span>
                {chat.unread && (
                  <Badge variant="default" className="ml-auto">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" className="jun-sidebarTooltip" container={sidebar}>
          {chat.name}
        </TooltipContent>
      </Tooltip>
    </li>
  );
}
