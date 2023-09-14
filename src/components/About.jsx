const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-2 border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold px-4">
            <p>
              Hii I am Akshai , nice to meet you . Please take a look around
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            libero consequatur aliquid nihil adipisci fugit iusto eveniet
            voluptatibus. Velit possimus quidem nulla accusantium minus
            voluptates culpa sunt natus sapiente dolorum!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
