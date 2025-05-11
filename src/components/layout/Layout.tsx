
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex flex-1">
        {showSidebar && (
          <aside className="hidden md:block w-64 py-6 shrink-0">
            <Sidebar />
          </aside>
        )}
        
        <main className="flex-1 py-6">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
