import trapezium from "../assets/trapezium.svg";
import { TWrapperType } from "../types/types";

type TServiceCardProp = {
  cardImg: string;
  animate: React.FC<TWrapperType>;
};
const ServiceImgCard: React.FC<TServiceCardProp> = ({
  cardImg,
  animate: Animate,
}) => {
  return (
    <>
      <div className="h-fit">
        <div className="relative lg:pe-10 ">
          <div className="absolute left-0 top-10  lg:top-6 lg:left-2 xl:left-0">
            <img
              src={trapezium}
              className="w-[300px] rounded lg:w-[300px] xl:w-[420px] "
              alt="trapezium svg"
            />
          </div>
          <div className="overflow-hidden">
            <Animate>
              <div
                className="relative bg-cover bg-no-repeat bg-center size-[300px] lg:w-full xl:h-[400px] left-6 top-4 rounded"
                style={{
                  backgroundImage: "url(" + "'" + cardImg + "'" + ")",
                }}
              ></div>
            </Animate>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ServiceImgCard;
