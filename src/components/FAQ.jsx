import FAQList from "./FAQList"; // Assuming this imports the FAQ list component

export default function FAQ() {
  return (
    <div className="font-Michroma bg-cover bg-center flex flex-col max-md:flex-col mb-10 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
      <h1 className='text-white mb-8 text-8xl md:mt-12 md:mb-12 max-md:text-4xl'>FAQs</h1>
      <div className="flex-grow flex flex-col justify-center items-center text-center py-10 ">
        <div className="max-md:grid max-md:grid-cols-1  md:gap-20">
          {/* Displaying FAQ items in two columns for desktop view */}
          <FAQList />
        </div>
        <div className="flex items-start justify-start text-center pt-12">
          <a
            href="https://drive.google.com/file/d/1mBNDdQdZjdECvB5jtT9Od40kfTQVJJp9/view?usp=sharing"
            className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
          >
            CODE OF CONDUCT
          </a>
        </div>
      </div>
    </div>
  );
}
