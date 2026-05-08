import React, { useState } from "react";
import { motion } from "framer-motion";


export default function WeddingWebsite() {
  const [rsvp, setRsvp] = useState({ name: "", attending: "", guests: "",  message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace these with your actual Google Form submit URL and entry IDs.
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSefKojcWST73rg21p4gTiJo-vBQmi9ONoTZHiLm3PzSYESe2A/formResponse";
  const GOOGLE_FORM_FIELDS = {
    name: "entry.1808892157",
    attending: "entry.1387884638",
    guests: "entry.136059766",
    message: "entry.1399768232",
  };

  const handleRsvpSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(GOOGLE_FORM_FIELDS.name, rsvp.name);
    formData.append(GOOGLE_FORM_FIELDS.attending, rsvp.attending);
    formData.append(GOOGLE_FORM_FIELDS.guests, rsvp.guests);
    formData.append(GOOGLE_FORM_FIELDS.meal, rsvp.meal);
    formData.append(GOOGLE_FORM_FIELDS.message, rsvp.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
      setRsvp({ name: "", attending: "", guests: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  const wedding = {
    couple: "Karuna Timilsina & Dijesh Shrestha ",
    date: "[06/27/2026]",
    hashtag: "#KarunaDijeshWedding",
    ceremonyTime: "[10 AM ET]",
    ceremonyVenue: "[ISKCON Temple, Subha Laxmi Hall]",
    ceremonyAddress: "[10310 Oaklyn Dr, Potomac, MD 20854]",
    recepitonDate: "[06/28/2026]",
    receptionTime: "[5 PM ET]",
    receptionVenue: "[Triveni Banquet & Event Center]",
    receptionAddress: "[43090 Peacock Market Plaza Suite 190B, South Riding, VA 20152]",
    rsvpDate: "[ASAP please]",
    email: "[405-697-9736]",
  };

  const schedule = [
    { time: "[June 26, Friday 5 PM ET]", title: "Mehendi" },
    { time: "[June 27, Saturday 10 AM ET]", title: "Wedding Ceremony" },
    { time: "[June 28, Sunday 5 PM ET]", title: "Reception" }
  ];

  const galleryPhotos = [
  {
    src: "/images/IMG_3163.jpg",
    alt: "Dijesh and Karuna photo 1",
  },
  {
    src: "/images/IMG_3947.jpg",
    alt: "Dijesh and Karuna photo 2",
  },
  {
    src: "/images/IMG_3167.jpg",
    alt: "Dijesh and Karuna photo 3",
  },
];

  return (
    <div className="min-h-screen bg-[#fbf7f0] text-[#2f2a25]">
        <nav className="sticky top-0 z-50 bg-[#fbf7f0]/90 backdrop-blur border-b border-[#dfc7a8]/40">
          <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
            <div className="font-serif text-xl tracking-wide">{wedding.couple}</div>
          
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest">
              <a href="#details" className="hover:text-[#a57942]">Details</a>
              <a href="#schedule" className="hover:text-[#a57942]">Schedule</a>
              <a href="#rsvp" className="hover:text-[#a57942]">RSVP</a>
              <a href="#travel" className="hover:text-[#a57942]">Travel</a>
            </div>
          
            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-[#3b3028]"></span>
              <span className="w-6 h-0.5 bg-[#3b3028]"></span>
              <span className="w-6 h-0.5 bg-[#3b3028]"></span>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden px-5 pb-5 flex flex-col gap-4 text-sm uppercase tracking-widest bg-[#fbf7f0] border-t border-[#dfc7a8]/40">
              <a href="#details" onClick={() => setMenuOpen(false)} className="hover:text-[#a57942]">Details</a>
              <a href="#schedule" onClick={() => setMenuOpen(false)} className="hover:text-[#a57942]">Schedule</a>
              <a href="#rsvp" onClick={() => setMenuOpen(false)} className="hover:text-[#a57942]">RSVP</a>
              <a href="#travel" onClick={() => setMenuOpen(false)} className="hover:text-[#a57942]">Travel</a>
            </div>
          )}
        </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7eadb] via-[#fbf7f0] to-[#fbf7f0]" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#e8c7bc]/40 blur-3xl" />
        <div className="absolute top-32 -right-20 h-80 w-80 rounded-full bg-[#d8b889]/30 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-5 py-24 md:py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="uppercase tracking-[0.35em] text-sm text-[#8a6a44] mb-5">Together with our families</p>
            <p className="text-sm md:text-base text-[#6b5a4d] mb-6">Son of Ram Chandra Shrestha & Rita Shrestha • Daughter of Rita Timilsina</p>
            <h1 className="font-serif text-5xl md:text-8xl leading-tight text-[#3b3028]">{wedding.couple}</h1>
            <div className="flex items-center justify-center gap-4 my-8 text-[#b08a55]">
              <span className="h-px w-20 bg-[#b08a55]" />
              <span className="text-[#b08a55] text-xl">♥</span>
              <span className="h-px w-20 bg-[#b08a55]" />
            </div>
            <p className="text-xl md:text-2xl font-light">We joyfully invite you to celebrate our wedding ceremony and reception.</p>
            <p className="mt-5 text-lg uppercase tracking-[0.25em] text-[#8a6a44]">[06/26/2026 - 06/28/2026]</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#rsvp" className="rounded-full bg-[#3b3028] text-white px-8 py-3 shadow-lg hover:bg-[#5b493c] transition">RSVP Now</a>
              <a href="#details" className="rounded-full border border-[#b08a55] px-8 py-3 hover:bg-[#f4eadb] transition">View Details</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 text-center">
        <div className="mx-auto text-3xl text-[#b08a55] mb-5">✦</div>
        <h2 className="font-serif text-4xl mb-5">Our Story</h2>
        <p className="text-lg leading-8 text-[#5d5148] max-w-3xl mx-auto">
          With joyful hearts, we invite you to celebrate the beginning of their forever. Surrounded by the love and blessings of our families, we look forward to sharing this special day with the people who mean the most to us.
        </p>
      </section>

      <section id="details" className="bg-white/60 border-y border-[#dfc7a8]/40">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-serif text-4xl text-center mb-12">Wedding Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-[#fbf7f0] p-8 shadow-sm border border-[#dfc7a8]/50">
              <div className="text-3xl text-[#b08a55] mb-4">📅</div>
              <h3 className="font-serif text-3xl mb-3">Wedding Ceremony</h3>
              <p className="text-lg font-medium">{wedding.date} at {wedding.ceremonyTime}</p>
              <p className="mt-4 font-semibold">{wedding.ceremonyVenue}</p>
              <p className="text-[#5d5148]">{wedding.ceremonyAddress}</p>
            </div>
            <div className="rounded-3xl bg-[#fbf7f0] p-8 shadow-sm border border-[#dfc7a8]/50">
              <div className="text-3xl text-[#b08a55] mb-4">🥂</div>
              <h3 className="font-serif text-3xl mb-3">Reception</h3>
              <p className="text-lg font-medium">{wedding.recepitonDate} at {wedding.receptionTime}</p>
              <p className="mt-4 font-semibold">{wedding.receptionVenue}</p>
              <p className="text-[#5d5148]">{wedding.receptionAddress}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-4xl text-center mb-12">Schedule</h2>
        <div className="space-y-5">
          {schedule.map((item, index) => (
            <div key={index} className="rounded-3xl bg-white/70 p-6 border border-[#dfc7a8]/40 flex gap-5 items-start shadow-sm">
              <div className="rounded-full bg-[#f1e0c8] p-3 text-[#8a6a44]">⏰</div>
              <div>
                <p className="text-sm uppercase tracking-widest text-[#8a6a44]">{item.time}</p>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="text-[#5d5148] mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rsvp" className="bg-[#3b3028] text-white">
        <div className="max-w-4xl mx-auto px-5 py-16 text-center">
          <div className="mx-auto text-3xl text-[#d8b889] mb-5">✉️</div>
          <h2 className="font-serif text-4xl mb-4">Kindly RSVP</h2>
          <p className="text-white/75 mb-8">Please respond by {wedding.rsvpDate}. We can’t wait to celebrate with you.</p>
          <form onSubmit={handleRsvpSubmit} className="bg-white text-[#2f2a25] rounded-3xl p-6 md:p-8 text-left shadow-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="rounded-2xl border border-[#dfc7a8] px-4 py-3" placeholder="Your full name" value={rsvp.name} onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })} />
              <select className="rounded-2xl border border-[#dfc7a8] px-4 py-3" value={rsvp.attending} onChange={(e) => setRsvp({ ...rsvp, attending: e.target.value })}>
                <option value="">Will you attend?</option>
                <option>Joyfully accepts</option>
                <option>Regretfully declines</option>
              </select>
              <input className="rounded-2xl border border-[#dfc7a8] px-4 py-3" placeholder="Number of guests" value={rsvp.guests} onChange={(e) => setRsvp({ ...rsvp, guests: e.target.value })} />
            </div>
            <textarea className="mt-4 w-full rounded-2xl border border-[#dfc7a8] px-4 py-3 min-h-28" placeholder="Leave us a message" value={rsvp.message} onChange={(e) => setRsvp({ ...rsvp, message: e.target.value })} />
            <button type="submit" className="mt-5 w-full rounded-full bg-[#3b3028] text-white px-8 py-3 hover:bg-[#5b493c] transition">Submit RSVP</button>
            {submitted && <p className="text-center text-green-700 font-medium mt-4">Thank you! Your RSVP has been submitted.</p>}
            <p className="text-xs text-[#6b5a4d] mt-4 text-center">Your RSVP will be saved to our Google Form response sheet.</p>
          </form>
        </div>
      </section>

      <section className="bg-white/60 border-y border-[#dfc7a8]/40">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="text-center mb-10">
            <div className="mx-auto text-3xl text-[#b08a55] mb-5">📷</div>
            <h2 className="font-serif text-4xl">Gallery</h2>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden border border-[#dfc7a8]/40 shadow-md bg-[#f8efe5]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

            <section id="travel" className="max-w-5xl mx-auto px-5 py-16 text-center">
        <div className="mx-auto text-3xl text-[#b08a55] mb-5">✈️</div>
        <h2 className="font-serif text-4xl mb-5">Travel Information</h2>
        <p className="text-lg leading-8 text-[#5d5148] max-w-3xl mx-auto">
          For guests traveling from out of state, the nearby airports are:
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5 text-left">
          <div className="rounded-3xl bg-white/70 p-6 border border-[#dfc7a8]/40 shadow-sm">
            <h3 className="font-serif text-2xl mb-2">Washington Dulles International Airport</h3>
            <p className="text-[#5d5148]">IAD — Dulles, VA</p>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 border border-[#dfc7a8]/40 shadow-sm">
            <h3 className="font-serif text-2xl mb-2">Ronald Reagan Washington National Airport</h3>
            <p className="text-[#5d5148]">DCA — Arlington, VA</p>
          </div>

          <div className="rounded-3xl bg-white/70 p-6 border border-[#dfc7a8]/40 shadow-sm">
            <h3 className="font-serif text-2xl mb-2">Baltimore/Washington International Airport</h3>
            <p className="text-[#5d5148]">BWI — Baltimore, MD</p>
          </div>
        </div>
      </section>

      <footer className="text-center px-5 py-12 bg-[#2f2a25] text-white"></footer>

      <footer className="text-center px-5 py-12 bg-[#2f2a25] text-white">
        <p className="font-serif text-3xl mb-3">{wedding.couple}</p>
        <p className="text-white/70">[06-26-2026 to 06-28-2026] • {wedding.hashtag}</p>
      </footer>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white/70 p-6 border border-[#dfc7a8]/40 shadow-sm">
      <div className="text-3xl text-[#b08a55] mb-4">{icon}</div>
      <h3 className="font-serif text-2xl mb-2">{title}</h3>
      <p className="text-[#5d5148] leading-7">{text}</p>
    </div>
  );
}
