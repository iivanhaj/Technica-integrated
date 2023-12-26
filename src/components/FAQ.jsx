import "../index.css";
import FAQList from "./FAQList";
import Wireframe from "../imageForWebsite/Wireframe.png";

export default function FAQ() {
  return (
    <div className="font-Michroma bg-cover bg-center flex flex-col md:grid md:grid-cols-3 max-md:flex-col mb-10">
      <div className="flex-grow flex flex-col justify-center items-center text-center py-10 md:col-span-2">
        <h1 className='text-white mb-8 text-8xl md:pl-96 md:ml-36 md:pb-24 max-md:text-4xl'>FAQs</h1>
        <FAQList />
        <div className="flex items-start justify-start text-center pt-8">
          <a
            href="https://drive.google.com/file/d/1mBNDdQdZjdECvB5jtT9Od40kfTQVJJp9/view?usp=sharing"
            className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
          >
            CODE OF CONDUCT
          </a>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:items-end md:justify-end h-screen">
      </div>
    </div>
  );
}
