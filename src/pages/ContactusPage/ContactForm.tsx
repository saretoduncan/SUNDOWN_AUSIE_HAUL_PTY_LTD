import { SubmitHandler, useForm } from "react-hook-form";
import { TContactFormData } from "../../types/types";
import { useEffect, useState } from "react";
import FormErrorsComponent from "../../components/FormErrorsComponent";
import { useApiContext } from "../../context";
import toast from "react-hot-toast";
import { FaArrowsRotate } from "react-icons/fa6";
const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { data: resData, error, loading, postData } = useApiContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
  } = useForm<TContactFormData>({
    mode:"onSubmit"
  });
  const onSubmit: SubmitHandler<TContactFormData> = async (data) => {
    
    await postData("/api/send_mail", data);
  };

  useEffect(()=>{
     if(loading){
    setIsDisabled(true);
  }else setIsDisabled(false)

  if (resData) {
    toast.success(resData);
  }
  
  if (error) {
    toast.error(error);
  }
  },[loading,error, resData])
 
 
  useEffect(() => {
   ( async()=>{await trigger()})
   
  }, [trigger]);
  
  return (
    <>
      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid">
            <label htmlFor="name" className="text-gray-400">
              Full Name
            </label>
            <input
              {...register("customer_name", {
                required: "Full name is required",
                minLength: 3,
              })}
              type="text"
              className="border rounded"
              id="name"
              aria-invalid={errors.customer_name?"true":"false"}
            />
            {errors.customer_name && (
              <FormErrorsComponent err_message={errors.customer_name.message} />
            )}
          </div>
          <div className="grid">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              {...register("customer_email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              className="border rounded"
              id="email"
            />
            {errors.customer_email && (
              <FormErrorsComponent
                err_message={errors.customer_email.message}
              />
            )}
          </div>
          <div className="grid">
            <label htmlFor="address" className="text-gray-400">
              Address
            </label>
            <input
              {...register("customer_address", {
                required: "Address is required",
                minLength: 1,
              })}
              type="text"
              className="border rounded"
              id="address"
            
            />
            {errors.customer_address && (
              <FormErrorsComponent
                err_message={errors.customer_address.message}
              />
            )}
          </div>
          <div className="grid">
            <label htmlFor="phone_number" className="text-gray-400">
              Phone Number
            </label>
            <input
              {...register("customer_phone_number", {
                required: "Phone number is required",
                min: 1,
               
              })}
              type="number"
              className="border rounded"
              id="phone_number"
            />
            {errors.customer_phone_number && (
              <FormErrorsComponent
                err_message={errors.customer_phone_number.message}
              />
            )}
          </div>
          <div className="grid">
            <label htmlFor="Subject" className="text-gray-400">
              Subject
            </label>
            <input
              {...register("message_subject", {
                required: "Subject is required",
                minLength: 1,
              })}
              type="text"
              className="border rounded"
              id="phone_number"
            />
            {errors.message_subject && (
              <FormErrorsComponent
                err_message={errors.message_subject.message}
              />
            )}
          </div>
          <div>
            <label htmlFor="phone_number" className="text-gray-400">
              Message
            </label>
            <textarea
              {...register("message_content", {
                required: "Message is required",
                minLength: 1,
              })}
              id=""
              cols={20}
              rows={4}
              className="w-full border rounded"
            ></textarea>
            {errors.message_content && (
              <FormErrorsComponent
                err_message={errors.message_content.message}
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className={`${
                isDisabled ? "bg-gray-200" : "bg-orange-500"
              }  px-4 py-2 rounded-md text-white font-bold flex space-x-2`}
              disabled={isDisabled}
            >
              <span>Submit</span>
              {loading && (
                <span className="self-center text-orange-500">
                  <FaArrowsRotate className="animate-spin" />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
