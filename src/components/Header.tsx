import { HeaderButton } from "./HeaderButton";
import { Bars3Icon } from "@heroicons/react/16/solid";

export const Header = () => {
  return (
    <header className="w-full h-16 p-2 flex items-center justify-between bg-bg-secondary">
      <div className="flex items-center gap-2 text-primary-500">
        <HeaderButton />
        <h1 className="text-text-primary text-2xl font-bold">FitTrack</h1>
      </div>
      <div>
        <Bars3Icon className="size-6 text-text-primary" />
      </div>
    </header>
  );
};
