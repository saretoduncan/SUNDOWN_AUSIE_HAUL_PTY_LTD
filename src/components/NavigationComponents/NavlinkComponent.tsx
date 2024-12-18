import { useContext } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
import { NavBarContext } from "../../context";
import { scrollUp } from "../../utils/NavigationData";
type TNavLinkProps = {
  linkName: string;
  linkUrl: string;
  classes?: string;
};
const NavlinkComponent: React.FC<TNavLinkProps> = ({
  linkName,
  linkUrl,
  classes,
}) => {
  const currentPath = useLocation().pathname;
  const openNav = useContext(NavBarContext);

  return (
    <>
      <NavLink
        to={linkUrl}
        className={({ isActive }) =>
          (isActive ? "text-orange-500" : "") +
          ` font-bold px-2 rounded transition-all ease-in-out duration-500  ${classes}`
        }
        onClick={() => {
          openNav?.isSideNavopen && openNav?.setSideNavOpen(false);
          scrollUp();
        }}
      >
        <p>{linkName}</p>

        <div
          className={` h-[2px] bg-orange-500 ${
            currentPath === linkUrl ? "w-full" : "w-0"
          } transition-all ease-in-out duration-700`}
        ></div>
      </NavLink>
    </>
  );
};

export default NavlinkComponent;
