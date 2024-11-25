import { NavLink } from "react-router";
import { useLocation } from "react-router";
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
  return (
    <>
      <NavLink
        to={linkUrl}
        className={({ isActive }) =>
          (isActive ? "text-orange-500" : "text-gray-800") +
          ` font-bold px-2 rounded transition-all ease-in-out duration-500  ${classes}`
        }
      >
        <div>{linkName}</div>

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