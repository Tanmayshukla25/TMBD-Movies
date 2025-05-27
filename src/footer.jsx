import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {

    return(
        <>

      <div className="grid place-content-center bg-cyan-950 p-10">
          <div className="text-center text-white">
            <ul className="flex items-center justify-center gap-8 text-[12px] md:text-xl">
                <li><h1>Terms of Use</h1></li>
                <li><h1>Privacy-policy</h1></li>
                <li><h1>About</h1></li>
                <li><h1>Blog</h1></li>
                <li><h1>FAQ</h1></li>
            </ul>
            <div>
             <span>
                   <p className="w-[400px] md:w-[900px] text-[10px] md:text-xl m-auto  p-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestiae rem assumenda ex asperiores quo recusandae sed eos nam, illo totam nesciunt dolore fuga alias impedit velit doloribus quas numquam? Odio voluptate perferendis, eligendi aperiam cumque recusandae officia perspiciatis commodi?</p>
             </span>
            </div>

            <div  className="flex text-center items-center justify-center gap-4 text-[20px] md:text-3xl ">
                <span className="bg-cyan-900 p-3 rounded-[50%] hover:bg-blue-700"><FaFacebookF /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%] hover:bg-pink-700"><FaInstagram /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%] hover:bg-blue-500"><FaTwitter /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%] hover:bg-blue-800"><FaLinkedin /></span>
            </div>
        </div>

      </div>
        </>
    )
    
}
export default Footer;