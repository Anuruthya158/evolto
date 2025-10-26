import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { getSkills, deleteSkill, Skill } from "@/utils/localStorage";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(getSkills());
  }, []);

  const handleDelete = (id: string) => {
    deleteSkill(id);
    setSkills(getSkills());
    toast.success("Skill removed successfully");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Skills Dashboard</h1>
            <p className="text-muted-foreground">Track and manage your learning journey</p>
          </div>
          
          <Link to="/add-skill">
            <Button className="rounded-full gradient-primary text-primary-foreground hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </Link>
        </div>

        {skills.length === 0 ? (
          <div className="text-center py-16">
            <div className="gradient-card rounded-2xl p-12 max-w-md mx-auto border border-border/50">
              <h3 className="text-2xl font-semibold mb-4">No skills yet</h3>
              <p className="text-muted-foreground mb-6">
                Start your journey by adding your first skill!
              </p>
              <Link to="/add-skill">
                <Button className="rounded-full gradient-primary text-primary-foreground hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Skill
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                id={skill.id}
                name={skill.name}
                level={skill.level}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
