function button({ type, title, onClick }) {
  return (
    <button
      type={type}
      className="bg-yellow-50 hover:bg-yellow-100 font-bold py-2 px-4 border-[1px] rounded border-black"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default button;
