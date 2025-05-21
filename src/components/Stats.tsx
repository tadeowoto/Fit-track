import { useStats } from "../context/StatsContext";

export const Stats = () => {
  const stats = useStats();

  const { totalWeight, totalMinutes, totalCalories, totalDaysTrained } = stats;

  return (
    <section className="w-full min-h-screen mt-10 p-2">
      <h2 className="text-text-primary text-2xl font-bold">Estadísticas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-neutral-900 p-4 rounded-2xl col-span-1 flex flex-col items-center text-white">
          <p className="text-sm text-neutral-400">Peso</p>
          <h2 className="text-2xl font-bold mt-1">{totalWeight} kg</h2>
        </div>

        <div className="bg-neutral-900 p-4 rounded-2xl col-span-1 flex flex-col items-center text-white">
          <p className="text-sm text-neutral-400">Calorías</p>
          <h2 className="text-2xl font-bold mt-1">{totalCalories} cal</h2>
        </div>
        <div className="bg-neutral-900 p-4 rounded-2xl col-span-2 md:col-span-2 flex flex-col items-center text-white">
          <p className="text-sm text-neutral-400">Tiempo de entrenamiento</p>
          <h2 className="text-2xl font-bold mt-1">{totalMinutes} min</h2>
        </div>

        <div className="bg-neutral-900 p-4 rounded-2xl col-span-2 md:col-span-1 flex flex-col items-center text-white">
          <p className="text-sm text-neutral-400">Días entrenados</p>
          <h2 className="text-2xl font-bold mt-1">{totalDaysTrained} días</h2>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl col-span-2 md:col-span-3 text-white flex flex-col justify-between">
          <div>
            <p className="text-sm text-neutral-400">Resumen del mes</p>
            <h3 className="text-xl font-semibold mt-2">
              ¡Gran progreso este mes! 🔥
            </h3>
          </div>
          <p className="text-sm text-green-400 mt-4">
            +12% mejora respecto al mes anterior
          </p>
        </div>
      </div>
    </section>
  );
};
