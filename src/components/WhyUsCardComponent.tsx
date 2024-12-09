

type TWhyUSCardProp = {
  img: string;
  title: string;
  content: string;
};
const WhyUsCardComponent: React.FC<TWhyUSCardProp> = ({
  img,
  title,
  content,
}) => {
  return (
    <>
      <div>
        <section>
          <div>
            <img src={img} alt="" className="w-[90px] mx-auto" />
          </div>
        </section>
        <section>
          <div>
            <h6 className="font-bold text-center ">{title}</h6>
          </div>
          <div>
            <p className="text-center">{content}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyUsCardComponent;
