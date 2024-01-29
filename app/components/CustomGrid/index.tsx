const CustomGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        {/* Home */}
        <div className="flex justify-center items-center min-h-[100vh] pt-10 pb-10">
          {/* Frame */}
          <div className="bg-black bg-opacity-75 h-4/5 w-4/5 p-14 max-w-screen-xl rounded shadow shadow-purple-800 text-white border border-white border-opacity-50">
            <h1>Hey, my name is Elian</h1>
            <span>____</span>
            <p>
              I&apos;m front-end developer! I&apos;ve been learning HTML5, CSS,
              TypeScript, and NextJS, and I&apos;m ready to show what I can do!
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
          <div className="bg-black bg-opacity-75 h-4/5 w-4/5 p-14 max-w-screen-xl rounded shadow shadow-purple-800 text-white border border-white border-opacity-50"></div>
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
