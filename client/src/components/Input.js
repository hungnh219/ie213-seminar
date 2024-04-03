function Input({ lable, type, placeholder, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="font-bold leading-[44px]">{lable}:</label>
      <input className="rounded border-2 border-black my-2 w-3/4 text-sm ouline-none" type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default Input;
