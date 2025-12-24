import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { FiArrowLeft } from "react-icons/fi";

const CSAEPolicy = () => {
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

      {/* Content */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-18 py-10 flex-1">
        {/* Page Title */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <FiArrowLeft />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Unyfer Child Safety & CSAE Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed mt-16">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Our Commitment to Child Safety
          </h2>

          <p>
            At Unyfer, we are committed to providing a safe, respectful, and
            secure platform for all users. We maintain a zero-tolerance policy
            toward Child Sexual Abuse and Exploitation (CSAE) and take active
            steps to prevent, detect, and remove any content or behavior that
            may harm minors.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Prohibited Content and Behavior
          </h2>

          <p>The following activities are strictly prohibited on Unyfer:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Child sexual abuse material (CSAM) in any form</li>
            <li>
              Sexualized content involving minors, including images, videos,
              text, audio, or links
            </li>
            <li>Grooming, solicitation, or exploitation of minors</li>
            <li>
              Requests for or attempts to create, distribute, or access
              CSAE-related content
            </li>
            <li>Any account behavior that endangers or targets minors</li>
          </ul>

          <p>
            Any violation will result in immediate removal of content, account
            suspension or termination, and reporting to relevant authorities
            where legally required.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Content Moderation &amp; Enforcement
          </h2>

          <p>Unyfer uses a combination of:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Automated content moderation tools</li>
            <li>User reporting systems</li>
            <li>Manual review by our moderation team</li>
          </ul>

          <p>
            Flagged content is reviewed promptly, and appropriate enforcement
            action is taken to protect users and maintain platform safety.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Reporting Child Safety Concerns
          </h2>

          <p>
            Users can report suspected CSAE content or behavior directly through
            in-app reporting tools or by contacting us at:
          </p>

          <p className="font-medium">📧 Help@unyfer.com</p>

          <p>
            All reports are handled urgently, confidentially, and in accordance
            with applicable laws.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Cooperation With Authorities
          </h2>

          <p>
            Unyfer cooperates fully with law enforcement agencies and complies
            with all applicable child protection laws and regulations. When
            required by law, we may report CSAE-related activity to the
            appropriate authorities.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Compliance With Google Play Child Safety Standards
          </h2>

          <p>Unyfer complies with:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Google Play’s Child Safety and CSAE requirements</li>
            <li>
              All applicable local and international laws related to child
              protection and online safety
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CSAEPolicy;
