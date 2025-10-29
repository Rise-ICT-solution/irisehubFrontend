import { HiArrowSmRight } from "react-icons/hi";

function RiseIntro() {
  return (
    <div className="mt-20 px-5 md:px-16 lg:px-28">
      {/* Video Section */}
      <div className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/xnxYZPR-Omc?autoplay=1&mute=1&loop=1&playlist=xnxYZPR-Omc&controls=0&modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Section */}
      <div className="mt-14 md:text-left md:px-10 lg:px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-gray-900">
          The Next Generation of Tech Software in Somalia
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto md:mx-0">
          Through market-aligned skills training, we help learners build new career possibilities with greater confidence and capability.
        </p>

        <a href="https://wa.me/252617216218">
          <button className="primaryBtn bg-black mt-6 text-white group text-sm sm:text-base px-14 pl-3 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
            Register Now
            <div className="primaryBtnArrayIcon w-8 h-8 flex items-center justify-center border-2 border-white rounded-full group-hover:text-white text-white group-hover:bg-transparent transition-all">
              <HiArrowSmRight />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default RiseIntro;
