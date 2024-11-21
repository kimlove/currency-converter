interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className="my-6 p-4">
    <h1 className="sm:text-2xl font-bold text-center">{children}</h1>
  </header>
);
