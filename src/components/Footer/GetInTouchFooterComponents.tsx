import { IconType } from "react-icons";
type TGetInTouchTypes = {
  customIcon: IconType;
  textContent: string;
};
const GetInTouchFooterComponents: React.FC<TGetInTouchTypes> = ({
  customIcon: CustomIcon,
  textContent,
}) => {
  return (
    <>
      <div className="flex space-x-1 text-sm font-bold lg:text-base">
        <div className="text-xl">
          <CustomIcon className=" text-orange-500" />
        </div>
        <div>
          <p className="">{textContent}</p>
        </div>
      </div>
    </>
  );
};

export default GetInTouchFooterComponents;
