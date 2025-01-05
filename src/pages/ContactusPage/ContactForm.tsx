import { SubmitHandler, useForm } from "react-hook-form";
import { TContactFormData } from "../../types/types";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleSubmit, register } = useForm<TContactFormData>();
  const onSubmit: SubmitHandler<TContactFormData> = async (data) => {
    console.table(data);
    setIsDisabled(() => true);
    try {
      const response = await fetch("/api/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid">
            <label htmlFor="name" className="text-gray-400">
              Full Name
            </label>
            <input
              {...register("full_name")}
              type="text"
              className="border rounded"
              id="name"
              name="full_name"
            />
          </div>
          <div className="grid">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="border rounded"
              id="email"
              name="email"
            />
          </div>
          <div className="grid">
            <label htmlFor="address" className="text-gray-400">
              Address
            </label>
            <input
              {...register("address")}
              type="text"
              className="border rounded"
              id="address"
              name="address"
            />
          </div>
          <div className="grid">
            <label htmlFor="phone_number" className="text-gray-400">
              Phone Number
            </label>
            <input
              {...register("phone_number")}
              type="number"
              className="border rounded"
              id="phone_number"
              name="phone_number"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="text-gray-400">
              Message
            </label>
            <textarea
              {...register("message")}
              name="message"
              id=""
              cols={20}
              rows={4}
              className="w-full border rounded"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              className={`${
                isDisabled ? "bg-gray-200" : "bg-orange-500"
              }  px-4 py-2 rounded-md text-white font-bold`}
              disabled={isDisabled}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
