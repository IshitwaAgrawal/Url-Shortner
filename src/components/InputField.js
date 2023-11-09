const InputField = ({ label, changeHandler, value, type }) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="username"
    >
      {label}
    </label>
    <input
      type={type || "text"}
      id="username"
      name="username"
      className="border rounded w-full py-2 px-3"
      onChange={changeHandler}
      value={value}
    />
  </div>
);

export default InputField;
