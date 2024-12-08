import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type TCardProp = {
  question: string;
  answer: string;
};

const FaqsCardComponents: React.FC<TCardProp> = ({
  question: title,
  answer: content,
}) => {
  const [isAnsOpen, setAnsOpen] = useState(false);

  const handleAnsState = () => setAnsOpen(() => !isAnsOpen);

  return (
    <>
      <div>
        <div className="grid relative gap-4 ">
          <section className="flex overflow-hidden relative cursor-pointer" onClick={() => handleAnsState()}>
        
              <div
                className={`absolute top-1 left-0 transition-all duration-75 ease-in-out  ${
                  isAnsOpen
                    ? "opacity-100 origin-center rotate-0 "
                    : "origin-center rotate-45 opacity-0"
                }`}
              >
                <FaMinus />
              </div>{" "}
              <div
                className={`absolute top-1 transition-all duration-100 ease-in-out  ${
                  isAnsOpen
                    ? "origin-center rotate-45 opacity-0  "
                    : "opacity-100  rotate-0"
                }`}
              >
                <FaPlus className="" />
              </div>
        
            {""}
            <div className="ps-6">
                  <h5 className="font-bold ">{title}</h5> 
            </div>
         
          </section>
          <section>
            <div className={` ${isAnsOpen ? "block" : "hidden"}  `}>
              <p className="text-sm">
                {/* Sundown Haul specializes in long haulage, short haulage, and
                iron ore haulage. We also provide blue rock haulage services
                across Western Australia. Our team is dedicated to ensuring safe
                and efficient transport for all your needs. */}
                {content}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FaqsCardComponents;
