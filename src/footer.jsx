import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {

    return(
        <>

      <div className="flex items-center justify-center bg-cyan-950 p-10">
          <div className="text-center text-white">
            <ul className="flex items-center justify-center gap-8 text-xl">
                <li><h1>Terms of Use</h1></li>
                <li><h1>Privacy-policy</h1></li>
                <li><h1>About</h1></li>
                <li><h1>Blog</h1></li>
                <li><h1>FAQ</h1></li>
            </ul>
            <div>
             <span>
                   <p className="w-[900px] m-auto  p-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestiae rem assumenda ex asperiores quo recusandae sed eos nam, illo totam nesciunt dolore fuga alias impedit velit doloribus quas numquam? Odio voluptate perferendis, eligendi aperiam cumque recusandae officia perspiciatis commodi?</p>
             </span>
            </div>

            <div  className="flex text-center items-center justify-center gap-4 text-3xl ">
                <span className="bg-cyan-900 p-3 rounded-[50%]"><FaFacebookF /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%]"><FaInstagram /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%]"><FaTwitter /></span>
                <span className="bg-cyan-900 p-3 rounded-[50%]"><FaLinkedin /></span>
            </div>
        </div>

      </div>
        </>
    )
    
}
export default Footer;