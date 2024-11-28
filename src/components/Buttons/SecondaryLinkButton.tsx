import { Link } from "react-router";
import { TNavLinkTypes } from "../../types/types";
import { scrollUp } from "../../utils/NavigationData";

const SecondaryLinkButton: React.FC<TNavLinkTypes> = ({ url, linkName }) => {
  return (
    <>
      <Link
        to={url}
        className="text-orange-500  py-2 px-4 bg-white rounded"
        onClick={() => scrollUp()}
      >
        {linkName}
      </Link>
    </>
  );
};

export default SecondaryLinkButton;
