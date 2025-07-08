const Input = (props) => {
  const { type, placeholder, labelName, value } = props;
  return (
    <div>
      <label className="text-gray-500 block mb-2">{labelName}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className="bg-[#f0f0eb] w-full md:w-[90%] py-1.5 px-2 rounded-sm outline-none cursor-not-allowed text-[#272a4b]"
        readOnly
      />
    </div>
  );
};

export default Input;
