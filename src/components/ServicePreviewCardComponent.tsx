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
      <div className="relative  h-[300px] mx-auto rounded overflow-hidden group">
        <div
          className="absolute  inset-0 rounded bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500 "
          style={{
            backgroundImage: "url(" + "'" + backgroundImage + "'" + ")",
          }}
        ></div>
        <div className="h-full w-full relative  bg-black rounded bg-opacity-60 px-4 flex flex-col justify-center text-white  ">
          <p className=" text-center text-xl font-bold uppercase md:text-2xl text-orange-500 text-shadow shadow-gray-800">
            {cardTitle}
          </p>
          <p className="text-center text-sm md:text-base text-shadow shadow-gray-800">{cardCaption}</p>
        </div>
      </div>
    </>
  );
};

export default ServicePreviewCardComponent;
