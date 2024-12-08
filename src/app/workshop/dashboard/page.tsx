"use client";

import React from "react";

import { ChevronDown } from "lucide-react";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";

import { menuGroups } from "@/app/dashboard/_data/menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function WorkshopDashboard() {
  // <button className="jun-sidebarMenuButton">
  //   <Icon className="jun-sidebarIcon" />
  //   {/* In case we need big icons */}
  //   {/* <Icon className="jun-sidebarIcon jun-sidebarIcon-shrink-size-6" /> */}
  //   <span className="jun-sidebarText">{menu.label}</span>

  //   {/* In case we have multiple lines of text */}
  //   {/* <div className="jun-sidebarGroupText">
  //   <div>
  //     <span className="jun-sidebarText block">{menu.label}</span>
  //     <span className="jun-sidebarText block">Description</span>
  //   </div>
  // </div> */}
  // </button>;

  const [sidebar, setSidebar] = React.useState<Element | null>(null);

  React.useEffect(() => {
    setSidebar(document.querySelector(".jun-edgeSidebar"));
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="jun-layout">
        <header className="jun-header">
          <button className="jun-edgeDrawerTrigger" onClick={() => triggerEdgeDrawer()}>
            Toggle
          </button>
          <button
            className="jun-edgeCollapseTrigger"
            onClick={(event) => triggerEdgeCollapse({ event })}
          >
            Collapse
          </button>
          Header
        </header>
        {/* <aside
        className="
        jun-edgeSidebar
        jun-edgeSidebar-w-[200px]
        jun-edgeSidebar-drawer
        sm:jun-edgeSidebar-permanent
        sm:jun-edgeSidebar-collapsed-w-[48px]
        sm:jun-edgeSidebar-permanent-hoverUncollapse
        jun-edgeSidebar-permanent-autoCollapse-lg
        "
        >
        <div className="jun-edgeContent">Sidebar content</div>
        </aside> */}
        <aside
          className="
        jun-edgeSidebar
        jun-edgeSidebar-w-[200px]
        jun-edgeSidebar-permanent
        jun-edgeSidebar-collapsed-w-[48px]
        jun-edgeSidebar-permanent-autoCollapse-lg
        "
        >
          <div className="jun-edgeContent ">
            <div className="jun-sidebarContainer">
              {menuGroups.map((group) => (
                <div key={group.label} className="jun-sidebarGroup ">
                  <div className="jun-sidebarGroupLabel">{group.label}</div>
                  <ul className="jun-sidebarMenu">
                    {group.items.map((menu) => {
                      const Icon = menu.icon;
                      return (
                        <li key={menu.label} className="jun-sidebarMenuItem">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <label className="jun-sidebarMenuButton jun-collapsibleTrigger">
                                <Icon className="jun-sidebarIcon" />
                                <span className="jun-sidebarText">{menu.label}</span>
                                <ChevronDown className="size-4 jun-collapsibleIcon-rotate-180" />
                                <input className="sr-only" type="checkbox" />
                              </label>
                            </TooltipTrigger>
                            <TooltipContent
                              side="right"
                              className="jun-sidebarTooltip"
                              container={sidebar}
                            >
                              {menu.label}
                            </TooltipContent>
                          </Tooltip>

                          {/* More actions */}
                          {/* <button
                          aria-label="More actions"
                          className="jun-sidebarMenuAction jun-sidebarMenuAction-hoverAppear"
                          >
                          <MoreHorizontal />
                          </button> */}

                          {/* Sub Menu */}
                          {!!menu.menus && (
                            <div className="jun-sidebarGroupText jun-collapsibleContent">
                              <div>
                                <ul className="jun-sidebarMenu jun-sidebarMenu-nested">
                                  {menu.menus.map((subMenu) => (
                                    <li key={subMenu.title} className="jun-sidebarMenuItem">
                                      <button className="jun-sidebarMenuButton">
                                        <span className="jun-sidebarText">{subMenu.title}</span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="jun-content">Content</main>
        <footer className="jun-footer">Footer</footer>
      </div>
    </TooltipProvider>
  );
}
