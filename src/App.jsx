import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popup from "./components/Popup";
import FollowUs from "./components/FollowUs";

// Lazy-load components that are below the fold
const Aboutus = lazy(() => import("./components/Aboutus"));
const SpeakerSection = lazy(() => import("./components/SpeakerSection"));
const Timeline = lazy(() => import("./components/Timeline"));
const SponsorsSection = lazy(() => import("./components/SponsorsSection"));
const FAQs = lazy(() => import("./components/FAQs"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [heroKey, setHeroKey] = useState(1);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setHeroKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <AnimatePresence>
        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </AnimatePresence>

      <header>
        <Navbar />
      </header>

      <Suspense fallback={null}>
        <main>
          <Hero key={heroKey} />
          <Aboutus />
          <SpeakerSection />
          <Timeline />
          <SponsorsSection />
          <FAQs />
          <FollowUs />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
