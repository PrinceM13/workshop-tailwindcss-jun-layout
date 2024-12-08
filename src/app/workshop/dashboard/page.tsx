"use client";

import { menuGroups } from "@/app/dashboard/_data/menu";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";

export default function WorkshopDashboard() {
  return (
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
      <aside
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
      </aside>
      <main className="jun-content">Content</main>
      <footer className="jun-footer">Footer</footer>
    </div>
  );
}
