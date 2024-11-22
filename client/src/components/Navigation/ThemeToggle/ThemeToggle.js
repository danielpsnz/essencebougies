import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 bg-transparent border-0"
        >
            <IoSunnyOutline size={20} />
            <span>Cambiar Tema</span>
        </button>
    );
};

export default ThemeToggle;