const CustomGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        {/* Home */}
        <div className="flex justify-center items-center min-h-[100vh]">
          home
        </div>

        {/* About me */}
        <div className="flex justify-center items-center min-h-[110vh] bg-black text-white">
          about me
        </div>

        {/* Projects */}
        <div className="flex justify-center items-center min-h-[110vh] backdrop-blur">
          projects
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center min-h-[30vh] bg-black text-white">
          footer
        </div>
      </div>
    </>
  );
};

export default CustomGrid;
