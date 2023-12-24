import '../index.css';
import FAQList from '../components/FAQList';
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function FAQ() {
  return (
    <div className="bg-cover bg-center h-screen bg-fixed overflow-y-auto flex flex-col md:grid md:grid-cols-3 bg max-md:flex-col">
      <div className="flex-grow flex flex-col justify-center items-center text-center py-10 md:col-span-2">
        <h1 className='text-white mb-8 text-8xl md:pl-96 md:ml-36 md:pb-24 max-md:text-4xl'>FAQs</h1>
        <FAQList />
        <div className='flex items-start justify-start text-center pt-8'>
          <a href='/' className='text-black text-b bg-blue-600 p-2'>CODE OF CONDUCT</a>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:items-end md:justify-end h-screen">
      </div>
      <div className="flex justify-end items-end p-8 md:p-4 md:col-start-3 md:col-end-4 md:pr-10 md:pb-10">
        <div className="flex gap-5">
          <a href='YOUR_DISCORD_LINK_HERE' className="text-white text-3xl md:text-5xl"><FaDiscord /></a>
          <a href='YOUR_INSTAGRAM_LINK_HERE' className="text-white text-3xl md:text-5xl"><FaInstagram /></a>
          <a href='YOUR_YOUTUBE_LINK_HERE' className="text-white text-3xl md:text-5xl"><FaYoutube /></a>
          <a href='YOUR_LINKEDIN_LINK_HERE' className="text-white text-3xl md:text-5xl"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}