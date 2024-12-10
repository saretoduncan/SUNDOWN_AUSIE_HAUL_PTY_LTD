import { PHONENUMBER } from "../../utils/Constants";

const ContactDetails = () => {
  return (
    <>
      <div className="text-gray-600 grid gap-4">
        <section className="px-4 grid gap-2">
          <h4 className="text-orange-500 font-bold text-xl lg:text-2xl">Get In Touch</h4>
          <p>
            For inquiries, quotes, or more information, feel free to reach out.
            Our team is here to assist you with all your transport and logistics
            needs.
          </p>
        </section>
        <section className="px-4 grid gap-4">
          <div>
            <p className="text-lg  font-bold lg:text-2xl">Call us on</p>
            <p className="lg:text-xl">{PHONENUMBER}</p>
          </div>

          <div>
            <p className="text-lg  font-bold lg:text-2xl">Email</p>
            <p className="lg:text-xl">info@sundownhaul.com.au</p>
          </div>
          <div>
            <p className="text-lg  font-bold lg:text-2xl">Address</p>
            <p className="lg:text-xl">
              47D Station Street Cannington WA, Perth, Australia, 6107
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactDetails;
