const CardChoose = ({ data }: any) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start text-center lg:text-start items-center gap-4 bg-[#F3F5F9] hover:bg-white duration-300 transition-all p-8 rounded-lg my-8 hover:shadow-xl">
      <div className="bg-[#7455F11A] p-4 rounded-full text-purple-600">
        <data.Icon />
      </div>
      <h4 className="font-bold lg:text-lg">{data.title}</h4>
    </div>
  );
};

export default CardChoose;