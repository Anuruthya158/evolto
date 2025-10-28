import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { saveSkill } from "@/utils/localStorage";
import { toast } from "sonner";

const AddSkill = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [level, setLevel] = useState([50]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter a skill name");
      return;
    }

    saveSkill({ name, level: level[0] });
    toast.success("Skill added successfully! 🎉");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-2">Add New Skill</h1>
          <p className="text-muted-foreground mb-8">Track your learning progress beautifully</p>

          <form onSubmit={handleSubmit} className="gradient-card rounded-2xl p-8 border border-border/50 shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="skillName">Skill Name</Label>
                <Input
                  id="skillName"
                  placeholder="e.g., React, Python, Photography..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Current Level</Label>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {level[0]}
                  </span>
                </div>
                <Slider
                  value={level}
                  onValueChange={setLevel}
                  max={100}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="flex-1 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 rounded-xl gradient-primary text-primary-foreground hover:opacity-90"
                >
                  Add Skill
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
