const ContactForm = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="px-4">
        <form onSubmit={(e) => handleFormSubmit(e)} className="grid gap-4">
          <div className="grid">
            <label htmlFor="name" className="text-gray-400">
              Full Name
            </label>
            <input
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
              name=""
              id=""
              cols={20}
              rows={4}
              className="w-full border rounded"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-md text-white font-bold"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
