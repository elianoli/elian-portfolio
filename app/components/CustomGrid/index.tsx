const CustomGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        {/* Home */}
        <div className="flex justify-center items-center min-h-[100vh] pt-10 pb-10">
          {/* Frame */}
          <div className="bg-black bg-opacity-95 h-4/5 w-4/5 p-14 max-w-screen-xl rounded shadow shadow-purple-800 text-white">
            <h1>Hey, my name is Elian</h1>
            <span>____</span>
            <p>
              I&apos;m a junior dev looking for a job! I&apos;ve been learning
              HTML5, CSS, TypeScript, and NextJS, and I&apos;m ready to show
              what I can do!
            </p>
            <span>____</span>
          </div>
        </div>

        {/* About me */}
        <div
          id="about"
          className="flex justify-center items-center min-h-[110vh] bg-black text-white shadow shadow-purple-800"
        >
          about me
        </div>

        {/* Projects */}
        <div
          id="projects"
          className="flex justify-center items-center min-h-[110vh] backdrop-blur-sm"
        >
          {/* Frame */}
          <div className="bg-black bg-opacity-95 h-4/5 w-4/5 rounded shadow shadow-purple-800"></div>
        </div>

        {/* Footer */}
        <div
          id="contact"
          className="flex justify-center items-center min-h-[30vh] bg-black text-white shadow shadow-purple-800"
        >
          footer
        </div>
      </div>
    </>
  );
};

export default CustomGrid;
