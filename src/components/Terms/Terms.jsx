import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { FiArrowLeft } from "react-icons/fi";

const Terms = () => {
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
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed mt-16">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Unyfer Payout Terms & Conditions
          </h1>

          <p>
            These terms govern the process and conditions for creator payouts on
            the Unyfer platform.
          </p>

          <h2 className="font-semibold text-gray-900">
            1. Minimum Payout Threshold
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Creators must reach a minimum balance of $30 USD before a payout
              can be issued.
            </li>
            <li>
              Any earnings below this amount will roll over to the next cycle.
            </li>
          </ul>

          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">
              2. Payout Processing &amp; Timing
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-black border-collapse text-sm sm:text-base">
                <thead>
                  <tr>
                    <th className="border border-black px-4 py-3 text-left font-semibold">
                      Payout Type
                    </th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">
                      Estimated Processing Time
                    </th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-black px-4 py-4 font-semibold">
                      First Payout
                    </td>
                    <td className="border border-black px-4 py-4">7–14 days</td>
                    <td className="border border-black px-4 py-4">
                      Standard processing time for new accounts.
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-black px-4 py-4 font-semibold">
                      Subsequent Payouts
                    </td>
                    <td className="border border-black px-4 py-4">
                      2–7 business days
                    </td>
                    <td className="border border-black px-4 py-4">
                      Depends on the creator&apos;s country and bank.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6">
              <li>
                Payouts are handled securely through Unyfer’s payment system.
              </li>
            </ul>
          </div>

          <h2 className="font-semibold text-gray-900">3. Payout Schedule</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Payouts are automatically sent on a regular schedule (weekly, or
              monthly), based on your account settings.
            </li>
            <li>
              You can update your payout schedule inside your Unyfer account
              dashboard.
            </li>
          </ul>

          <h2 className="font-semibold text-gray-900">4. Commission</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Unyfer charges a 15%–20% commission on all creator earnings.
            </li>
            <li>
              The exact commission rate may vary depending on the creator’s plan
              or agreement.
            </li>
          </ul>

          <h2 className="font-semibold text-gray-900">5. Currency</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Payouts are primarily available in USD, CAD, and INR.</li>
            <li>
              Important: If your bank requires a different currency, standard
              conversion fees may apply.
            </li>
          </ul>

          <h2 className="font-semibold text-gray-900">
            6. Account Verification (KYC)
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              To receive payouts, creators must complete identity verification
              (KYC) as required by law.
            </li>
            <li>Failure to verify your account may delay or block payouts.</li>
          </ul>

          <h2 className="font-semibold text-gray-900">7. Fraud & Violations</h2>
          <p>
            Unyfer reserves the right to withhold payments for the following:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Earnings resulting from fraudulent activity, chargebacks, or
              violations of Unyfer’s policies.
            </li>
            <li>
              Unyfer may suspend or withhold payouts while investigating
              suspicious activity.
            </li>
          </ul>

          <h2 className="font-semibold text-gray-900">8. Updates to Terms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>These payout terms may be updated at any time.</li>
            <li>
              We will notify you of any significant changes before they take
              effect.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
