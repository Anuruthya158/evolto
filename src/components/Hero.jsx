import logo from "@/assets/logo.png";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative gradient-hero py-20 overflow-hidden">
      {/* Watermark logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img 
          src={logo} 
          alt="" 
          className="w-96 h-96 animate-float"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Welcome to Evolto
            </h1>
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Track your progress, celebrate your growth, and evolve your skills beautifully
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">🌱 Keep Evolving</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="text-sm font-medium text-secondary">✨ Stay Motivated</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent">💪 Build Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
