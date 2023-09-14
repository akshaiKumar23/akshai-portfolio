import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hii, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Akshai Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I Love to Code
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto
          nostrum velit distinctio iure ea tempora ipsa cum quasi odio eveniet,
          obcaecati, porro eligendi atque. Quasi labore doloremque quo quas!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="border-2 px-6 group text-white py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
