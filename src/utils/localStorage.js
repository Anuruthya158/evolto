const SKILLS_KEY = "evolto_skills";

export const getSkills = () => {
  const stored = localStorage.getItem(SKILLS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveSkill = (skill) => {
  const skills = getSkills();
  const newSkill = {
    ...skill,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  skills.push(newSkill);
  localStorage.setItem(SKILLS_KEY, JSON.stringify(skills));
  return newSkill;
};

export const deleteSkill = (id) => {
  const skills = getSkills();
  const filtered = skills.filter((skill) => skill.id !== id);
  localStorage.setItem(SKILLS_KEY, JSON.stringify(filtered));
};

export const updateSkill = (id, updates) => {
  const skills = getSkills();
  const updated = skills.map((skill) =>
    skill.id === id ? { ...skill, ...updates } : skill
  );
  localStorage.setItem(SKILLS_KEY, JSON.stringify(updated));
};
