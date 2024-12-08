"use client";
import { ChatList } from "@/components/chat/ChatList";
import { Input } from "@/components/chat/Input";
import { createMockChats } from "@/app/chat/_data/mock-chats";
import { createMockMessages } from "@/app/chat/_data/mock-messages";
import { createMockSettings } from "@/app/chat/_data/mock-settings";
import { Conversation } from "@/components/chat/Conversation";
import { ChatSetting } from "@/components/chat/ChatSetting";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  MoreVertical,
  PanelLeftClose,
  PanelRightClose,
  SquareMenu,
  X
} from "lucide-react";
import {
  triggerEdgeCollapse,
  triggerEdgeCollapseRight,
  triggerEdgeDrawer,
  triggerEdgeDrawerRight
} from "tailwindcss-jun-layout";
import { TooltipProvider } from "@/components/ui/tooltip";

// Create mock data once
const mockChats = createMockChats();
const mockMessages = createMockMessages();
const mockSettings = createMockSettings();

export default function ChatPage() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="jun-layout jun-layout-standalone">
        <header className="jun-header flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="jun-edgeCollapseTrigger"
              onClick={(event) => triggerEdgeCollapse({ event })}
            >
              <PanelLeftClose className="h-5 w-5 jun-edgeUncollapsed-visible" />
              <PanelRightClose className="h-5 w-5 jun-edgeCollapsed-visible" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="jun-edgeDrawerTrigger"
              onClick={() => triggerEdgeDrawer()}
            >
              <SquareMenu className="h-5 w-5 jun-edgeUncollapsed-visible" />
            </Button>

            <h1 className="text-lg font-semibold">Messages</h1>
            <span className="text-sm text-muted-foreground">{mockChats.length} conversations</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <UserPlus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="jun-edgeCollapseTriggerR"
              onClick={(event) => triggerEdgeCollapseRight({ event })}
            >
              <MoreVertical className="h-5 w-5 jun-edgeCollapsed-visible" />
              <PanelRightClose className="h-5 w-5 jun-edgeUncollapsed-visible" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="jun-edgeDrawerTriggerR"
              onClick={() => triggerEdgeDrawerRight()}
            >
              <MoreVertical className="h-5 w-5 jun-edgeUncollapsed-visible" />
            </Button>
          </div>
        </header>

        <aside
          className="
          jun-edgeSidebar
          jun-edgeSidebar-collapsed-w-[80px]
          jun-edgeSidebar-drawer
          jun-edgeSidebar-permanent-autoCollapse-2xl
          md:jun-edgeSidebar-permanent
          "
        >
          <button
            aria-label="toggle sidebar"
            className="jun-sidebarRail jun-edgeCollapseTrigger"
            onClick={(event) => triggerEdgeCollapse({ event })}
          />
          <div className="jun-edgeContent">
            <ChatList chats={mockChats} onSelect={(id) => console.log("Selected chat:", id)} />
          </div>
        </aside>

        <main className="jun-content">
          <Conversation messages={mockMessages} />
        </main>

        <aside
          className="
          jun-edgeSidebarR
          jun-edgeSidebarR-w-[100%]
          jun-edgeSidebarR-drawer
          jun-edgeSidebarR-permanent-autoCollapse-2xl
          md:jun-edgeSidebarR-permanent
          md:jun-edgeSidebarR-w-[300px]
          xl:jun-edgeSidebarR-w-[400px]
          "
        >
          <div className="jun-edgeContent">
            <Button variant="ghost" size="icon" className="jun-edgeDrawerClose">
              <X className="w-6 h-6" />
            </Button>
            <ChatSetting
              participant={mockSettings.participant}
              sharedMedia={mockSettings.sharedMedia}
            />
          </div>
        </aside>

        <footer className="jun-footer">
          <Input onSend={(message) => console.log("Sent message:", message)} />
        </footer>
      </div>
    </TooltipProvider>
  );
}
