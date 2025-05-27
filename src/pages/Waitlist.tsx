
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-[rgba(7,7,7,1)] min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-white text-5xl md:text-6xl font-normal tracking-[-0.96px] mb-8">
            Join Our Waitlist
          </h1>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new collections, exclusive events, and limited releases from Eclypse.
          </p>

          {isSubmitted ? (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-white text-xl font-medium mb-4">Thank You!</h3>
              <p className="text-gray-300">
                You've been added to our waitlist. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          )}

          <div className="mt-16 space-y-8">
            <h2 className="text-white text-2xl font-normal tracking-[-0.4px]">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Early Access</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get first access to new collections before they're available to the public.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Exclusive Events</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Invitations to private showings and special events in select cities.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Limited Editions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access to limited edition pieces and collaborative collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Waitlist;
