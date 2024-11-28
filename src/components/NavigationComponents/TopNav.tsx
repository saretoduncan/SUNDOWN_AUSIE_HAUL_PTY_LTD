import { FaBarsProgress } from "react-icons/fa6";
import logo from "../../assets/logo_sundown.svg";
import { useContext } from "react";
import { NavBarContext } from "../../context";

const TopNav: React.FC = () => {
  const openNav = useContext(NavBarContext);
  return (
    <>
      <nav className="flex w-full justify-between  px-4 py-1">
        <section>
          <img src={logo} alt="sundown haul logo" className="w-[100px]" />
        </section>{" "}
        <section className="self-center">
          <FaBarsProgress
            className="text-3xl text-gray-800"
            onClick={() => openNav?.setSideNavOpen(!openNav?.isSideNavopen)}
          />
        </section>
      </nav>
    </>
  );
};

export default TopNav;
