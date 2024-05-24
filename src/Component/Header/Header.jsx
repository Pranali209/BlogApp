import React from 'react'
import { Img } from './Img'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../Logo'
import LogoImage from "../../assets/LogoImage.png"

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: authStatus
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    }

  ]



  return (

    <header className='flex p-4 h-auto gap-5  shadow bg-gradient-to-r from-purple-500 to-blue-500 text-white max-md:flex-col items-center'>
     <Logo width='20%' />
    <div  className='flex gap-5 w-full  justify-end p-2 max-md:flex-col items-center'>
     <ul className='flex gap-5 w-full  justify-end p-2 max-md:flex-col items-center'>
     {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <Link
                to={item.slug}>
                <div className="flex justify-end ">
                  <p size="md" as="p"
                    className={`cursor-pointer !font-opensans inline-bock px-6 py-2  duration-200 hover:bg-blue-100 rounded-full text-black text-xl`}>
                   {item.name}
                  </p>
                </div>
              
              </Link>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}



     </ul>
    </div>

    </header>
  )
}

export default Header