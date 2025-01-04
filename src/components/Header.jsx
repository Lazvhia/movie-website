import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
          <MenuItem address="/" title="Home" Icon={AiFillHome} />
          <MenuItem address="/about" title="About" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-purple-300 text-white py-1 px-2 rounded-lg'>
            Flick
          </span>
          <span className='text-xl text-purple-600 hidden sm:inline'>Facts</span>
        </Link>
      </div>
    </div>
  );
}
