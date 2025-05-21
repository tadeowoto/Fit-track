// este es un contexto para las estadisticas del usuario
import type { Stats } from "../types/StatsTypes";
import { createContext, useContext } from "react";

const defaultStats: Stats = {
  totalWeight: 0,
  totalMinutes: 0,
  totalCalories: 0,
  totalDaysTrained: 0,
  recentPRs: [],
};

//creamos el contexto
const StatsContext = createContext<Stats>(defaultStats);

//creamos el hook para usar el contexto mas facil
export const useStats = () => useContext(StatsContext);

//creamos el provider para envolver la app
export const StatsProvider = ({ children }: { children: React.ReactNode }) => {
  //todo: esto se deberia cargar cuando se agreguen entrenamientos

  return (
    <StatsContext.Provider value={defaultStats}>
      {children}
    </StatsContext.Provider>
  );
};
