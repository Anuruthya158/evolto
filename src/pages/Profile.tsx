import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getSkills, Skill } from "@/utils/localStorage";
import { Award, TrendingUp, Target } from "lucide-react";

const motivationalQuotes = [
  "Keep Evolving 🌱",
  "Progress over perfection ✨",
  "Every expert was once a beginner 💫",
  "Small steps lead to big changes 🚀",
  "Your future self will thank you 🎯",
];

const Profile = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [quote] = useState(() => 
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  useEffect(() => {
    setSkills(getSkills());
  }, []);

  const totalSkills = skills.length;
  const averageLevel = totalSkills > 0
    ? Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills)
    : 0;
  const expertSkills = skills.filter(skill => skill.level >= 80).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
          <p className="text-muted-foreground mb-8">Your skill evolution journey</p>

          {/* Motivational Quote */}
          <div className="gradient-primary rounded-2xl p-8 mb-8 text-center shadow-lg">
            <p className="text-2xl font-semibold text-primary-foreground">
              {quote}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="gradient-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Total Skills</span>
              </div>
              <p className="text-3xl font-bold">{totalSkills}</p>
            </div>

            <div className="gradient-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">Average Level</span>
              </div>
              <p className="text-3xl font-bold">{averageLevel}</p>
            </div>

            <div className="gradient-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Expert Skills</span>
              </div>
              <p className="text-3xl font-bold">{expertSkills}</p>
            </div>
          </div>

          {/* Skills List */}
          {skills.length > 0 && (
            <div className="gradient-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Your Skills</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground w-12 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
