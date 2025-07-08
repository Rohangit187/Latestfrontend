import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className='bg-grey-50 text-black'>
     <div className="flex justify-around gap-8  md:hidden text-xs cursor-pointer ">
  <nav className='cursor-pointer'>
    <h1 className="text-lg font-black">Company</h1>
    <div className="flex flex-col gap-2 ">
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
    </div>
  </nav>

  <nav>
    <h1 className="text-lg font-black">Legal</h1>
    <div className="flex flex-col gap-2">
    <Link to="/Influencer/Aboutus">About-Us</Link>    
    <a
          href="https://www.instagram.com/nav__sankalp?igsh=cjh3amhxMHVjMnRj"
         target="_blank"
            rel="noopener noreferrer"
           className="link link-hover">
              Instagram
            </a>
           <a
           href="https://www.facebook.com/share/1CT2wb5Be1/"
          target="_blank"
           rel="noopener noreferrer"
           className="link link-hover"
            >
        Facebook</a>
    </div>
  </nav>

  <nav>
    <h1 className="text-lg font-black">Social</h1>
    <div className="flex flex-col gap-2">
    <a className="link link-hover">Terms of use</a>
    <Link to="/privacy/policy">Privacy policy</Link>    
    <a className="link link-hover">Cookie policy</a>
    </div>
  </nav>
</div>
</div>
 <div>
    <div className="w-full h-60 hidden md:flex bg-gray-200 ">
    <footer className="footer sm:footer-horizontal  flex-row px-6 py-6 text-black text-lg font-sans">
  <nav>
    <h6 className="footer-title font-black  text-lg">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title font-black">Company</h6>
    <Link to="/Influencer/Aboutus">About-Us</Link>    
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>   
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title font-black">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <Link to="/privacy/policy">Privacy policy</Link>    
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title font-black">Social</h6>
    <a className="link link-hover">Twitter</a>
    <a
          href="https://www.instagram.com/nav__sankalp?igsh=cjh3amhxMHVjMnRj"
         target="_blank"
            rel="noopener noreferrer"
           className="link link-hover">
              Instagram
            </a>
           <a
           href="https://www.facebook.com/share/1CT2wb5Be1/"
          target="_blank"
           rel="noopener noreferrer"
           className="link link-hover"
            >
            Facebook</a>
  </nav>
  <nav>
    <h6 className="footer-title font-black">Explore</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav>
  <nav>
    <h6 className="footer-title font-black">Apps</h6>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>

     </div>
     <footer className="footer sm:footer-horizontal footer-center bg-grey-50 text-base-content p-4 font-bold text-lg text-black">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by RVK GROUP Ltd</p>
  </aside>
</footer>

     </div>
    </>
  )
}

export default Footer
