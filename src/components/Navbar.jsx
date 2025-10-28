import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Evolto Logo" 
              className="w-10 h-10 rounded-full transition-transform group-hover:scale-110"
            />
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Evolto
              </h1>
              <p className="text-xs text-muted-foreground">Evolve your skills beautifully</p>
            </div>
          </Link>
          
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/add-skill" 
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive("/add-skill") ? "text-secondary" : "text-foreground"
              }`}
            >
              Add Skill
            </Link>
            <Link 
              to="/profile" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/profile") ? "text-accent" : "text-foreground"
              }`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
