const Contact = () => {
  return (
    <div className="text-center font-serif mt-8 font-bold text-xl">
      <h3>Contact Us</h3>
      <form className=" mt-2">
        <input
          className=" border border-black p-2 m-2 outline-none"
          type="text"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 outline-none"
          placeholder="message"
        />
        <button className="p-2 m-2 rounded-lg bg-orange-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
