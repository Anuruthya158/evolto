export interface Skill {
  id: string;
  name: string;
  level: number;
  createdAt: string;
}

const SKILLS_KEY = "evolto_skills";

export const getSkills = (): Skill[] => {
  const stored = localStorage.getItem(SKILLS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveSkill = (skill: Omit<Skill, "id" | "createdAt">): Skill => {
  const skills = getSkills();
  const newSkill: Skill = {
    ...skill,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  skills.push(newSkill);
  localStorage.setItem(SKILLS_KEY, JSON.stringify(skills));
  return newSkill;
};

export const deleteSkill = (id: string): void => {
  const skills = getSkills();
  const filtered = skills.filter((skill) => skill.id !== id);
  localStorage.setItem(SKILLS_KEY, JSON.stringify(filtered));
};

export const updateSkill = (id: string, updates: Partial<Skill>): void => {
  const skills = getSkills();
  const updated = skills.map((skill) =>
    skill.id === id ? { ...skill, ...updates } : skill
  );
  localStorage.setItem(SKILLS_KEY, JSON.stringify(updated));
};
