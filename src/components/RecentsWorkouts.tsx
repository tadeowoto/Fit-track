import WorkoutCard from "./WorkoutCard";
import { workoutsLogs } from "../mock/WorkoutsData";
import type { Workout } from "../types/WorkoutsTypes";

export const RecentWorkouts = () => {
  return (
    <section className="w-full min-h-screen p-2 mt-10">
      <h2 className="text-highlight-green text-2xl font-bold">Recientes.</h2>
      <div className="w-full h-fit flex flex-col gap-3 mt-6">
        {workoutsLogs.map((workout: Workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};
