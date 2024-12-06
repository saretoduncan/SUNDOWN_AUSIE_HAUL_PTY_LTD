import truck_two from "../assets/trucks_two.webp";
type TServicePreviewCardProps = {
  backgroundImage: string;
  cardTitle: string;
  cardCaption: string;
};
const ServicePreviewCardComponent: React.FC<TServicePreviewCardProps> = ({
  backgroundImage,
  cardCaption,
  cardTitle,
}) => {
  return (
    <>
      <div className="relative  h-[300px] mx-auto rounded overflow-hidden">
        <div
          className="absolute  inset-0 rounded bg-cover bg-center bg-no-repeat hover:scale-110 transition-transform duration-500 "
          style={{
            backgroundImage: "url(" + "'" + backgroundImage + "'" + ")",
          }}
        >
          <div className="h-full w-full bg-black rounded bg-opacity-60 px-4 flex flex-col justify-center text-white text-shadow shadow-gray-800 ">
            <p className=" text-center text-xl font-bold uppercase">
              {cardTitle}
            </p>
            <small className="text-center">{cardCaption}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePreviewCardComponent;
