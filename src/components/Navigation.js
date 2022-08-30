import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "New Comment", to: "/new-comment" },
  ];
  return (
    <header>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={(NavData) =>
                    NavData.isActive ? "activeLink" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
