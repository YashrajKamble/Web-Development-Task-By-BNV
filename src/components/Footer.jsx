import { useRef, useState } from "react";
import { CONTACT_US } from "../../utils/config.js";
import { Modal } from "../hooks/PopUpModal";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [remoteResponse, setRemoteResponse] = useState(null);

  const confirmRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.trim())) e.email = "Enter a valid email";
    }
    if (!message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setModalOpen(true);
      setTimeout(() => confirmRef.current?.focus(), 40);
    }
  };

  const sendMessage = async () => {
    setIsSubmitting(true);
    setRemoteResponse(null);
    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    console.log("Contact payload:", payload);

    try {
      const resp = await fetch(CONTACT_US, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();

      setRemoteResponse({ success: true, data });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});

      console.log("Server response:", data);
    } catch (err) {
      console.error("Send error:", err);
      setRemoteResponse({
        success: false,
        message: err.message || "Send failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#121212] flex items-end" id="contact">
      <footer className="bg-[#191919] text-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20">
            <div className="w-full md:max-w-[480px]">
              <h2 className="text-2xl md:text-2xl font-bold mb-4 tracking-wide">
                ECOMMERCE
              </h2>
              <p className="text-sm md:text-sm text-gray-400 mb-6 leading-relaxed md:mr-36 mr-0">
                Ecommerce is a free UI Kit from Paperpillar that you can use for
                your personal or commercial project.
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-[#0b1113] p-5 md:p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

                <label className="block mb-3 text-sm">
                  <span className="text-gray-300">Name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3 py-2 mt-1 rounded-md bg-transparent border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } placeholder-gray-400 text-white focus:outline-none`}
                    placeholder="Your full name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </label>

                <label className="block mb-3 text-sm">
                  <span className="text-gray-300">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 mt-1 rounded-md bg-transparent border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } placeholder-gray-400 text-white focus:outline-none`}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </label>

                <label className="block mb-4 text-sm">
                  <span className="text-gray-300">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-3 py-2 mt-1 rounded-md bg-transparent border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } placeholder-gray-400 text-white focus:outline-none h-28 resize-y`}
                    placeholder="Write your message"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-5 md:px-7 py-2 text-sm bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200"
                    aria-disabled={isSubmitting}
                  >
                    Send Message
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setMessage("");
                      setErrors({});
                      setRemoteResponse(null);
                    }}
                    className="px-4 py-2 text-sm border border-gray-700 rounded-full hover:bg-gray-800 transition-colors duration-200"
                  >
                    Reset
                  </button>
                </div>

                <div className="mt-3 text-sm">
                  {remoteResponse?.success && (
                    <span className="text-green-400">
                      Message sent successfully.
                    </span>
                  )}
                  {remoteResponse?.success === false && (
                    <span className="text-red-400">
                      Error sending message: {remoteResponse.message}
                    </span>
                  )}
                </div>
              </form>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0">
              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  POPULAR
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Jackets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Hat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  MENU
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      All Category
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Special Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 text-white">
                  OTHER
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Tracking Package
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        open={modalOpen}
        title={
          remoteResponse?.success
            ? "Sent"
            : remoteResponse?.success === false
            ? "Failed"
            : "Confirm message"
        }
        onClose={() => {
          if (isSubmitting) return;
          setModalOpen(false);
          setRemoteResponse(null);
        }}
      >
        {remoteResponse ? (
          remoteResponse.success ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-300">
                Your message was sent successfully.
              </p>
              <pre className="text-xs text-gray-400 bg-gray-900 p-2 rounded">
                {JSON.stringify(remoteResponse.data, null, 2)}
              </pre>
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setRemoteResponse(null);
                  }}
                  className="px-4 py-2 rounded-full bg-white text-black font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-red-400">
                There was an error sending your message:{" "}
                {remoteResponse.message}
              </p>
              <div className="flex justify-end mt-3 gap-2">
                <button
                  onClick={() => setRemoteResponse(null)}
                  className="px-4 py-2 rounded-full border border-gray-700"
                >
                  Back
                </button>
                <button
                  onClick={sendMessage}
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-full bg-white text-black font-medium disabled:opacity-50"
                >
                  Retry
                </button>
              </div>
            </div>
          )
        ) : (
          <div>
            <p className="text-sm text-gray-300">
              Please confirm the details below before sending.
            </p>

            <div className="mt-3 bg-[#071015] p-3 rounded">
              <p className="text-xs text-gray-400">
                <strong>Name:</strong> {name}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <strong>Email:</strong> {email}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                <strong>Message:</strong>
              </p>
              <div className="text-xs text-gray-300 mt-1 whitespace-pre-wrap">
                {message}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-full border border-gray-700"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                ref={confirmRef}
                onClick={sendMessage}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-full bg-white text-black font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Confirm & Send"}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
