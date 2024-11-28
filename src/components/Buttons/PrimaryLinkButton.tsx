import { Link } from "react-router";
import { TNavLinkTypes } from "../../types/types";


const PrimaryLinkButton: React.FC<TNavLinkTypes> = ({ url, linkName }) => {
  return (
    <>
      <Link to={url} className={`bg-orange-500 py-2 px-4 rounded text-white `}>
        {linkName}
      </Link>
    </>
  );
};

export default PrimaryLinkButton;
