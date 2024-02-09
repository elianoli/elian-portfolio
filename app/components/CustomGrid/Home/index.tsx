const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh] pt-10 pb-10">
      {/* Frame */}
      <div className="bg-black bg-opacity-75 h-4/5 w-4/5 p-14 max-w-screen-xl rounded shadow-lg shadow-purple-800 text-white border-2 border-purple-500 flex flex-col justify-between items-start">
        {/* Name */}
        <h1 className="text-5xl">Hey, my name is Elian!</h1>
        <div className="w-3/4 h-0 border-t-[1px] borde-white self-center"></div>

        {/* Quick bio */}
        <p>
          I&apos;m front-end developer! I&apos;ve been learning HTML5, CSS,
          TypeScript, and NextJS, and I&apos;m ready to show what I can do!
        </p>
        <div className="w-3/4 h-0 border-t-[1px]  borde-white self-center"></div>

        {/* Quick objective */}
        <p>
          I&apos;m currently looking for a job, so..., Take a look at my
          project, and my skills, I&apos;d love to show them on an interview :3
        </p>
        <div className="w-3/4 h-0 border-t-[1px]  borde-white self-center"></div>
      </div>
    </div>
  );
};

export default Home;
