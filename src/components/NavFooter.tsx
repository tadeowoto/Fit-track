import { DashboardIcon } from "../icons/DashboardIcon";
import { CalendarIcon } from "../icons/Calendar";
import { TimerIcon } from "../icons/Timer";
import { WeightIcon } from "../icons/Weight";
import { FooterItem } from "./FooterItem";

export const NavFooter = () => {
  // TODO COMPONETIZAR EL FOOTER
  return (
    <footer className="w-full h-20 bg-bg-secondary fixed bottom-0 border-t border-border">
      <nav className="h-full flex items-center">
        <ul className="flex items-center justify-evenly w-full">
          <FooterItem title="Dashboard">
            <DashboardIcon />
          </FooterItem>
          <FooterItem title="Calendario">
            <CalendarIcon />
          </FooterItem>
          <FooterItem title="Rutinas">
            <TimerIcon />
          </FooterItem>
          <FooterItem title="Perfil">
            <WeightIcon />
          </FooterItem>
        </ul>
      </nav>
    </footer>
  );
};
