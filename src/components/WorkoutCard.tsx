import type { Workout } from "../types/types";
import { format } from "date-fns";

type Props = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: Props) => {
  const { date, entries, notes } = workout;

  const formattedDate = format(new Date(date), "dd MMM yyyy, HH:mm");

  return (
    <article className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800 transition hover:shadow-xl">
      <div className="flex items-center flex-col justify-between mb-2">
        <h2 className="text-xl font-semibold text-white">{formattedDate}</h2>
        {notes && (
          <span className="text-sm text-zinc-400 italic max-w-xs truncate">
            {notes}
          </span>
        )}
      </div>

      <ul className="space-y-4 mt-4">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="bg-zinc-800 rounded-xl p-4 border border-zinc-700"
          >
            <h3 className="text-lg font-medium text-white">
              {entry.exerciseName}
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              {entry.sets} sets × {entry.reps} reps × {entry.weight} kg
            </p>
            {entry.notes && (
              <p className="text-zinc-500 text-xs mt-2 italic">{entry.notes}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WorkoutCard;
