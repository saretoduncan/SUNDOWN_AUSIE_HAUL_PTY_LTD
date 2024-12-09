type TServiceContentProp = {
  title: string;
  content: string;
};
const ServiceCardContent: React.FC<TServiceContentProp> = ({
  title,
  content,
}) => {
  return (
    <>
      <div className="grid gap-2">
        <h6 className="text-orange-500 text-xl font-bold">{title}</h6>
        <p>{content}</p>
      </div>
    </>
  );
};

export default ServiceCardContent;
