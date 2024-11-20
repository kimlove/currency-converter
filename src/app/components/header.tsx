interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className="p-4">
    <h1 className="text-2xl font-bold">{children}</h1>
  </header>
);
