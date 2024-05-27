const AutLayout = (props) => {
  const {title, children, description} = props
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="bg-white w-[40%] rounded-xl shadow-md p-5">
          <h1 className="text-2xl font-bold text-center pb-2">{title}</h1>
          <h2 className="text-xl text-center mb-2">{description}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default AutLayout;
