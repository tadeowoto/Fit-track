export type Workout = {
  id: string;
  userId: string;
  date: string;
  notes: string;
  entries: Entry[];
};

export type Entry = {
  id: string;
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string;
};
