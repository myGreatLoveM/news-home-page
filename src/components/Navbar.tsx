import { Link } from 'react-router-dom'
import logo from '/images/logo.svg'
import { GrClose } from 'react-icons/gr'
import { IoMdMenu } from 'react-icons/io'
import { useState } from 'react'

const links = [
  {
    href: '#',
    title: 'Home',
  },
  {
    href: '#',
    title: 'New',
  },
  {
    href: '#',
    title: 'Popular',
  },
  {
    href: '#',
    title: 'Trending',
  },
  {
    href: '#',
    title: 'Categories',
  },
]

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <nav  className='flex justify-between py-4'>
      <img src={logo} alt='logo' />
      <div className='hidden sm:flex items-center gap-6'>
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.href}
            className='md:text-lg text-gray-600 font-medium hover:text-orange-300 transition-all '
          >
            {link.title}
          </Link>
        ))}
      </div>
      {sidebar && <MobileNavbar sidebar={sidebar} setSidebar={setSidebar} />}
      <button className='sm:hidden' onClick={() => setSidebar(!sidebar)}>
        <IoMdMenu className='text-3xl ' />
      </button>
    </nav>
  )
}

function MobileNavbar({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className='fixed flex justify-end h-screen top-0 left-0 bg-black/50 w-full sm:hidden transition-all'>
      <div className='flex flex-col gap-4 bg-white h-full w-[60%] min-w-[250px] max-w-[300px] px-5 py-6 '>
        <button onClick={() => setSidebar(!sidebar)}>
          <GrClose className='ml-auto text-4xl' />
        </button>
        <div className='flex flex-col gap-8 flex-1 mt-16'>
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className='text-xl hover:text-orange-300 transition-all'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
