type Props = {
  title: string;
  children: React.ReactNode;
};

export const FooterItem = ({ title, children }: Props) => {
  // TODO: implementar react router
  return (
    <li className="flex flex-col items-center gap-2">
      {children}
      <h2 className="text-text-primary text-xs">{title}</h2>
    </li>
  );
};
