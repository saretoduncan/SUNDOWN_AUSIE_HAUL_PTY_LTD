import { Link } from "react-router";
import { TNavLinkTypes } from "../../types/types";
import { scrollUp } from "../../utils/NavigationData";

const PrimaryLinkButton: React.FC<TNavLinkTypes> = ({ url, linkName }) => {
  return (
    <>
      <Link
        to={url}
        className={`bg-orange-500 py-2 px-4 rounded text-white `}
        onClick={() => scrollUp()}
      >
        {linkName}
      </Link>
    </>
  );
};

export default PrimaryLinkButton;
