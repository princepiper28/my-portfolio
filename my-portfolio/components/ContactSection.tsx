import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // ✅ Import all icons used
import { Button } from "@/components/Button"; // ✅ Import Button (if you're using shadcn/ui or similar)

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-dark font-poppins text-3xl font-semibold mb-4">
                Contact Me
              </h2>
              <p className="text-dark/80 font-inter text-lg leading-relaxed max-w-md">
                Let's work together on your next project. Get in touch and let's
                create something amazing.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-dark" size={24} />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-dark/80 text-base font-inter">
                    princepiper28@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-dark" size={24} />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-dark/80 text-base font-inter">
                    +2348147101818
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-dark" size={24} />
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-dark/80 text-base font-inter">
                    Lagos, Nigeria. 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-dark rounded-2xl p-8 shadow-xl space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full h-12 px-4 bg-dark-gray text-white rounded-lg border-2 border-dark-gray focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all font-inter text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full h-12 px-4 bg-dark-gray text-white rounded-lg border-2 border-dark-gray focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all font-inter text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-gray text-white rounded-lg border-2 border-dark-gray focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none font-inter text-base"
                />
              </div>

              <Button
                type="submit"
                variant="outline"
                className="w-full border-dark text-dark font-semibold hover:bg-dark hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
