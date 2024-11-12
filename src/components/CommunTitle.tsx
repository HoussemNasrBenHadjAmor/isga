const CommunTitle = ({ title }: any) => {
  return (
    <div className="my-20 flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-4xl pb-5">{title}</h1>
      <div className="max-w-[200px] w-full border-b-4 border-[#424267]" />
    </div>
  );
};

export default CommunTitle;
