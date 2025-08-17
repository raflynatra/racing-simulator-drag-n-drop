import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isActive = (href: string) => (pathname === href ? "active" : "");

  const navList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "F1 Simulator",
      href: "/f1",
    },
    {
      label: "Drag & Drop",
      href: "/drag-drop",
    },
  ];

  return (
    <header
      style={{
        backgroundColor: "#162456",
        color: "white",
        padding: "16px",
      }}
    >
      <nav>
        {navList.map(({ label, href }) => (
          <Link
            className={`hover:text-amber-300 ${
              isActive(href) ? "text-amber-300" : "text-white"
            }`}
            key={label}
            to={href}
            style={{
              textDecoration: "none",
              marginRight: "16px",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
