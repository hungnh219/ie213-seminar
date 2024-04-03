function DelButton({ type, title, onClick }) {
  return (
    <button
      type={type}
      className="bg-red-500 hover:bg-red-700 py-2 px-4 border-[1px] rounded border-black font-bold"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default DelButton;
