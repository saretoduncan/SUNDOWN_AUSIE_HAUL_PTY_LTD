import { PHONENUMBER } from "../../utils/NavigationData";
import { FiPhoneCall } from "react-icons/fi";
const CallLinkComponent = () => {
  return (
    <>
      <a
        href={`tel:${PHONENUMBER}`}
        className="px-2 py-1 rounded-md flex items-center space-x-2 bg-orange-500 text-white"
      >
        <div className="rounded-full p-1 bg-orange-100">
          <div className="p-1 rounded-full bg-orange-300">
            <FiPhoneCall className="text-sm" />
          </div>
        </div>

        <p className="font-bold">{PHONENUMBER}</p>
      </a>
    </>
  );
};

export default CallLinkComponent;
