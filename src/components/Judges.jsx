import google from "../imageForWebsite/google.png";
function Judges() {
  return (
    <div>
      <h1 className="text-white md:text-7xl text-4xl md:mb-5 font-Michroma ">
        JU<span className="text-[#27A5EF]">DGES</span>
      </h1>
      <div className="flex-cols p-10 ">
        <div className=" md:flex md:justify-center justify-center  flex-cols md:gap-36">
          <div className="md:mt-5 ml-12 mt-12 max-w-xs  md:max-w-md  h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
            <div className="mb-4">
              <img
                src={google}
                alt="1st Judges"
                className="border border-white rounded-full w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold text-[#27A5EF]">
                Harsh Kumar Sinha
              </h2>
              <p className="text-white">His Designation or Work Background</p>
            </div>
          </div>
          <div className="md:mt-5 ml-12 mt-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
            <div className="mb-4">
              <img
                src={google}
                alt="1st Judges"
                className="border border-white rounded-full w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold text-[#27A5EF]">Judge Name</h2>
              <p className="text-white">His Designation or Work Background</p>
            </div>
          </div>
          <div className="md:mt-5 ml-12 mt-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
            <div className="mb-4">
              <img
                src={google}
                alt="1st Judges"
                className="border border-white rounded-full w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold text-[#27A5EF]">Judge Name</h2>
              <p className="text-white">His Designation or Work Background</p>
            </div>
          </div>
        </div>
        <div className=" md:flex md:justify-center justify-center  flex-cols md:gap-36">
          <div className="md:mt-5 ml-12 mt-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
            <div className="mb-4">
              <img
                src={google}
                alt="1st Judges"
                className="border border-white rounded-full  w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold text-[#27A5EF]">Judge Name</h2>
              <p className="text-white">His Designation or Work Background</p>
            </div>
          </div>
          <div className="md:mt-5 ml-12 mt-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
            <div className="mb-4">
              <img
                src={google}
                alt="1st Judges"
                className="border border-white rounded-full w-full h-auto mb-4"
              />
              <h2 className="text-xl font-bold text-[#27A5EF]">Judge Name</h2>
              <p className="text-white">His Designation or Work Background</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Judges;
