import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import ContactUsForm from "./ContactUsForm.jsx";
import FindUs from "./FindUs.jsx";


const ContactUs = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-0 py-0">
      <div className="w-full max-w-[90vw] text-left">
        <Link to="/" aria-label="Go to home">
          <img
            className="h-20 sm:h-28"
            src="https://ik.imagekit.io/b9tt0xvd7/unfyer/Untitled%20design%20(20).png?updatedAt=1755160725166"
            alt="Logo"
          />
        </Link>
      </div>

     <ContactUsForm />

     <FindUs/>

      <Footer />
    </div>
  )
}

export default ContactUs