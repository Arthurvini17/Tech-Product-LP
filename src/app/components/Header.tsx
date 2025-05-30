import React from "react";
import { HeaderProps } from "./HeaderProps";

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <header className="p-2">
        <nav>
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">{title}</h1>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
