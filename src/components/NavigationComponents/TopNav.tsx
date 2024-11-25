import { FaBarsProgress } from "react-icons/fa6";
import logo from "../../assets/logo_sundown.svg";
const TopNav = () => {
  return (
    <>
      <nav className="flex w-full justify-between  px-4 py-1">
        <section>
          <img src={logo} alt="sundown haul logo" className="w-[100px]" />
        </section>{" "}
        <section className="self-center">
          <FaBarsProgress className="text-3xl text-gray-800" />
        </section>
      </nav>
    </>
  );
};

export default TopNav;
