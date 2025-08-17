import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div style={{ padding: "64px 80px", minHeight: "calc(100vh - 4rem)" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
