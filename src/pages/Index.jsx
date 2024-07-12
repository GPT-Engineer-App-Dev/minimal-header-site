import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">
          <NavLink to="/" className="hover:text-gray-400">SiteName</NavLink>
        </div>
        <nav className="space-x-4">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <h1 className="text-3xl text-center mb-4">Welcome to Our Website</h1>
        <p className="text-center">This is a placeholder text for the main content area.</p>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>© 2023 SiteName. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;