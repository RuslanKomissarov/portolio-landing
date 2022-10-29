import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Header() {
    return(
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-sans font-black'>PORTFOLIO</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8 text-xl' href='#'>Download CV</a></li>
            </ul>
        </nav>
    )
}
