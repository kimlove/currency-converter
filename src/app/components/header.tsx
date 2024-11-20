interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className="my-6 p-4">
    <h1 className="text-2xl font-bold">{children}</h1>
  </header>
);
