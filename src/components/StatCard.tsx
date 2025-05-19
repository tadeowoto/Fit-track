import { WeightIcon } from "../icons/Weight";
import { CaloriesIcon } from "../icons/Calories";
import { TimerIcon } from "../icons/Timer";
import { CalendarIcon } from "../icons/Calendar";

type Props = {
  title: string;
  typeOfCard: "weight" | "calories" | "workoutTime" | "days";
  value: number;
};

export const StatCard = ({ title, typeOfCard, value }: Props) => {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-5 bg-bg-secondary w-36 h-32 p-4 rounded-lg border border-border`}
    >
      <div className={`flex items-start gap-2`}>
        {typeOfCard === "weight" ? (
          <WeightIcon className={`size-6`} />
        ) : typeOfCard === "calories" ? (
          <CaloriesIcon className={`size-6`} />
        ) : typeOfCard === "workoutTime" ? (
          <TimerIcon className={`size-6`} />
        ) : (
          <CalendarIcon className={`size-6`} />
        )}
        <h2 className="text-text-secondary text-xs">{title}</h2>
      </div>
      <p className="text-text-primary text-2xl font-bold">
        {typeOfCard === "weight"
          ? value + " kg"
          : typeOfCard === "calories"
          ? value + " cal"
          : typeOfCard === "workoutTime"
          ? value + " min"
          : value + " días"}
      </p>
    </article>
  );
};
