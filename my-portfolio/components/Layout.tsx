import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-text-off-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-10 lg:px-20 pb-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
