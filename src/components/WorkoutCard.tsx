import type { Workout } from "../types/types";

type Props = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: Props) => {
  const { date, entries, notes } = workout;

  return (
    <article>
      <h2>{date}</h2>
      <p>{notes}</p>
    </article>
  );
};

export default WorkoutCard;
