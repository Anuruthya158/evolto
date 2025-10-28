import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SkillCard = ({ id, name, level, onDelete }) => {
  return (
    <div className="gradient-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(id)}
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Level</span>
          <span className="font-medium text-primary">{level}/100</span>
        </div>
        
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full gradient-primary rounded-full transition-all duration-500"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
