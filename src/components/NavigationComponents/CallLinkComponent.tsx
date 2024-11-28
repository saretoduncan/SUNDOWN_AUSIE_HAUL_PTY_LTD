import useChangeOfYAxisHook from "../../customHooks/useChangeOfYAxisHook";
import { PHONENUMBER } from "../../utils/NavigationData";
import { FiPhoneCall } from "react-icons/fi";
const CallLinkComponent = () => {
  const {isYAxisChange} = useChangeOfYAxisHook();
  return (
    <>
      <a
        href={`tel:${PHONENUMBER}`}
        className="px-2 py-1 rounded-md flex items-center space-x-2 bg-orange-500 text-white lg:bg-inherit"
      >
        <div className="rounded-full p-1 bg-orange-100">
          <div className="p-1 rounded-full bg-orange-300 lg:bg-orange-500">
            <FiPhoneCall className="text-sm lg:text-white" />
          </div>
        </div>

        <p className={`${isYAxisChange?"lg:text-shadow-none lg:text-gray-950":""} font-bold text-shadow shadow-gray-700 transition-all ease-in-out duration-700`}>{PHONENUMBER}</p>
      </a>
    </>
  );
};

export default CallLinkComponent;
