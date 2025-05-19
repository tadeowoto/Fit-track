import { Header } from "../components/Header";
import { NavFooter } from "../components/NavFooter";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <NavFooter />
    </div>
  );
};
