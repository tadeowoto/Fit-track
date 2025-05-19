import { StatCard } from "./StatCard";

export const Main = () => {
  return (
    <main className="w-full min-h-screen p-2 bg-bg-default">
      <h1 className="text-text-primary text-2xl font-bold">Dashboard</h1>
      <section className="w-full h-fit  grid grid-cols-2 gap-2 place-items-center mt-10">
        <StatCard title="Peso" typeOfCard="weight" value={70} />
        <StatCard title="Calorías" typeOfCard="calories" value={2000} />
        <StatCard
          title="Tiempo de entrenamiento"
          typeOfCard="workoutTime"
          value={120}
        />
        <StatCard title="Días" typeOfCard="days" value={30} />
      </section>
    </main>
  );
};
