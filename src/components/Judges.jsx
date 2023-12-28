import google from "../imageForWebsite/google.webp";
function Judges() {
  return (
    <div>
      <h1 className="text-white md:text-7xl text-4xl md:mb-5 font-Michroma ">
        JU<span className="text-[#27A5EF]">DGES</span>
      </h1>
      {/* <div className="flex-cols p-10 ">
        <div className=" md:flex md:justify-center justify-center items-center  flex-cols md:gap-36">
          <div className="md:mt-5 ml-24 mt-12 max-h-80 max-w-56 md:max-h-96 md:max-w-96 h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
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
          <div className="md:mt-5 ml-24 mt-12 max-h-80 max-w-56 md:max-h-96 md:max-w-96 h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
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
          <div className="md:mt-5 ml-24 mt-12 max-h-80 max-w-56 md:max-h-96 md:max-w-96  h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
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
          <div className="md:mt-5 ml-24 mt-12 max-h-80 max-w-56 md:max-h-96 md:max-w-96  h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
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
          <div className="md:mt-5 ml-24 mt-12 max-h-80 max-w-56 md:max-h-96 md:max-w-96  h-full backdrop-blur p-6 rounded-md shadow-white mb-4">
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
      </div> */}
    <div className="min-h-screen bg-black flex flex-col justify-center py-6 sm:py-12">
      <div className="p-6 container mx-auto">
        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">

          <article className="text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a href="#1" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
            <div className="relative mb-4 rounded-2xl">
              <img className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <a className="flex justify-center items-center bg-blue-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold">Lorem <span className = "text-blue-500">Ipsum</span></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500">
                  Occupation
                  {/* give some sort of icon here representing the occupation */}
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a href="#2" className="block relative group-hover:text-blue-500 transition-colors duration-200">
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                {/* this is some line about the speaker or the designation */}
              </a>
            </h3>
          </article>
          <article className="text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a href="#1" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
            <div className="relative mb-4 rounded-2xl">
              <img className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <a className="flex justify-center items-center bg-blue-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold">Lorem <span className = "text-blue-500">Ipsum</span></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500">
                  Occupation
                  {/* give some sort of icon here representing the occupation */}
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a href="#2" className="block relative group-hover:text-blue-500 transition-colors duration-200">
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                {/* this is some line about the speaker or the designation */}
              </a>
            </h3>
          </article>
          <article className="text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a href="#1" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
            <div className="relative mb-4 rounded-2xl">
              <img className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <a className="flex justify-center items-center bg-blue-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold">Lorem <span className = "text-blue-500">Ipsum</span></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500">
                  Occupation
                  {/* give some sort of icon here representing the occupation */}
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a href="#2" className="block relative group-hover:text-blue-500 transition-colors duration-200">
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                {/* this is some line about the speaker or the designation */}
              </a>
            </h3>
          </article>
          <article className="text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a href="#1" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
            <div className="relative mb-4 rounded-2xl">
              <img className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <a className="flex justify-center items-center bg-blue-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold">Lorem <span className = "text-blue-500">Ipsum</span></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500">
                  Occupation
                  {/* give some sort of icon here representing the occupation */}
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a href="#2" className="block relative group-hover:text-blue-500 transition-colors duration-200">
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                {/* this is some line about the speaker or the designation */}
              </a>
            </h3>
          </article>
          <article className="text-white p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a href="#1" className="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
            <div className="relative mb-4 rounded-2xl">
              <img className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <a className="flex justify-center items-center bg-blue-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                Read article <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="flex flex-1">
                  <div>
                    <p className="text-sm font-semibold">Lorem <span className = "text-blue-500">Ipsum</span></p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-sm flex items-center text-gray-500">
                  Occupation
                  {/* give some sort of icon here representing the occupation */}
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a href="#2" className="block relative group-hover:text-blue-500 transition-colors duration-200">
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                {/* this is some line about the speaker or the designation */}
              </a>
            </h3>
          </article>
          
        </div>

        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* More articles */}
        </div>

      </div>
    </div>
      
    </div>
  );
}

export default Judges;
