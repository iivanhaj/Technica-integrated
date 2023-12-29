import google from "../imageForWebsite/google.webp";
function Sponsor() {
  return (
    <div className="font-Michroma mb-72 md:mb-96 min-h-screen ">
      <div className="relative bg h-screen mt-10">
        <p className="text-center mb-8">
          <span className="heading heading1">SPO</span>
          <span className="heading heading2">NSORS</span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-y-10 justify-items-center">
          <h2 className="text-white col-span-4 md:text-5xl"> Title Sponsor </h2>
          <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center ">
            <div className="h-28 w-28 md:h-52 md:w-52 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
          <h2 className="text-white md:text-3xl col-span-4 md:mt-8 ">Community Sponsors</h2>
          <div className="md:col-span-1 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Rosenfeld
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Echo 3D
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Echo 3D
              </p>
            </div>
          </div>
          <h2 className="text-white md:text-3xl col-span-4 md:mt-8 ">Outreach Partners</h2>
          <div className="md:col-span-2 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col items-center justify-center ">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                className="rounded-full border-8 border-blue-500"
                src={google}
                alt="Google Logo"
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
              <p className="text-white text-2xl max-md:text-sm text-center whitespace-nowrap">
                Value Creed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
