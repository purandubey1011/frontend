import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import { FiArrowLeft } from "react-icons/fi";

const DeleteAccount = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-0 py-0">
      {/* Logo */}
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
            Account Deletion & Data Removal Policy
          </h1>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed mt-16">
          {/* 1. Overview */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Overview
          </h2>
          <p>
            Unyfer allows users to permanently delete their account and
            associated personal data directly from within the app. Once an
            account is deleted, this action is irreversible.
          </p>
          <p>
            This policy explains the steps to delete an account, required
            verification details, processing timelines, and what data is removed
            or retained.
          </p>

          {/* 2. In-App Deletion */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            In-App Account Deletion – Step by Step
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Open the Unyfer App</li>
            <li>Go to Profile → Settings → Account</li>
            {/* First Screenshot – Profile / Settings Flow */}
          <div className="mt-6 flex justify-left">
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/unfyer/profilesectionunyfer.jpeg"
              alt="Unyfer profile and account settings screen"
              className="w-42 md:w-44 rounded-xl border border-gray-200 shadow-sm"
            />
          </div>
            <li>Tap Delete Account</li>
            
            <li>Review the confirmation notice</li>
            <li>Enter verification details (listed below)</li>
            <li>Tap Confirm & Delete</li>
            {/* Second Screenshot – Delete Confirmation */}
          <div className="mt-6 flex justify-left">
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/unfyer/deleteunyfer.jpeg"
              alt="Unyfer delete account confirmation screen"
              className="w-42 md:w-44 rounded-xl border border-gray-200 shadow-sm"
            />
          </div>
          </ol>

          

          <p className="mt-6">
            Once confirmed, the account enters permanent deletion.
          </p>

          

          <p className="mt-6">
            If the user cannot access their account, they may request account
            deletion via email as described in the support option below.
          </p>

          {/* 3. Identity Verification */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Identity Verification Requirements
          </h2>
          <p>
            To protect user privacy, Unyfer verifies identity before deletion.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Username or Unyfer ID (e.g., @123456)</li>
            <li>Registered email address or phone number</li>
            <li>Approximate last login date</li>
            <li>Reason for deletion (optional)</li>
            <li>One-time verification code sent to email or phone</li>
          </ul>

          <p>
            Account deletion is processed only after successful identity
            verification.
          </p>

          {/* 4. Data Deletion Scope */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Data Deletion Scope
          </h2>
          <p>
            When an Unyfer account is deleted, the following data is permanently
            removed:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Profile information (name, username, bio, profile photo)</li>
            <li>Content (posts, videos, sessions, saved items)</li>
            <li>Social connections (followers, following)</li>
            <li>Linked social accounts</li>
            <li>Messages and activity history</li>
            <li>Analytics associated with the account</li>
          </ul>

          <p>
            Data is deleted from active systems within <strong>30 days</strong>,
            and from backups within <strong>90 days</strong>.
          </p>

          {/* 5. Support Option */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Alternative Account Deletion Request (Support Option)
          </h2>
          <p>If a user cannot delete their account in-app, they may email:</p>

          <p className="font-medium">📧 support@unyfer.com</p>
          <p className="font-medium">
            Subject: Account Deletion Request — Unyfer
          </p>

          <p>Users must include the following details:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Username or Unyfer ID</li>
            <li>Registered email address or phone number</li>
            <li>Country or region</li>
            <li>
              Confirmation statement:
              <br />
              <em>
                “I confirm that I want to permanently delete my Unyfer account
                and all associated data.”
              </em>
            </li>
          </ul>

          <p>
            Support will verify identity and complete the deletion request.
            Processing time is <strong>7–10 business days</strong>.
          </p>

          {/* 6. Data Retention */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Data Retention Exceptions (Legal Compliance)
          </h2>
          <p>Certain data may be retained where legally required, including:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fraud prevention records</li>
            <li>Transaction or tax records (where applicable)</li>
            <li>Security audit logs</li>
          </ul>

          <p>
            All retained data is restricted and not used for product features or
            personalization.
          </p>

          {/* 7. Reactivation */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Re-Activation Policy
          </h2>
          <p>
            Once deleted, an account cannot be restored. Users must create a new
            account if they wish to return to Unyfer.
          </p>

          {/* 8. Compliance */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            Compliance Statement
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Apple App Store Guidelines — Account Deletion</li>
            <li>GDPR (Right to Erasure)</li>
            <li>CCPA Data Deletion Requirements</li>
          </ul>

          <p>Users maintain full control over their personal data.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
