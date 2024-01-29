const Cards = ({ id, children }) => {
  return (
    <div id="Cards" className="">
      <div id={id} className=" w-full h-96 bg-cyan-300/40">
        {children}
      </div>
    </div>
  );
};

export default Cards;
