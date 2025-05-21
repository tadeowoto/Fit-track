export type PersonalRecord = {
  exercise: string;
  weight: number;
};

export type Stats = {
  totalWeight: number;
  totalMinutes: number;
  totalCalories: number;
  totalDaysTrained: number;
  recentPRs: PersonalRecord[];
};
