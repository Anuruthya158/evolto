import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { TrendingUp, Target, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Evolto</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your skill development with beautiful visual progress bars and level tracking.
              </p>
            </div>
            
            <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Set Goals</h3>
              <p className="text-muted-foreground">
                Define your skill levels and watch yourself improve day by day with clear milestones.
              </p>
            </div>
            
            <div className="gradient-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Celebrate Growth</h3>
              <p className="text-muted-foreground">
                Acknowledge your achievements and stay motivated with a clean, inspiring dashboard.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button size="lg" className="rounded-full px-8 gradient-primary text-primary-foreground hover:opacity-90">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
