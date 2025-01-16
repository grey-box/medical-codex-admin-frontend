import Navbar from "@/components/Navbar";
interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="w-full h-full">{children}</div>
    </>
  );
}
