interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <div className="w-full h-full">{children}</div>
    </>
  );
}
