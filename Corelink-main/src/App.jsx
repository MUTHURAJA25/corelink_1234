import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Product Pages
import Product from "./pages/Product/product";

// Other Pages
import Solutions from "./pages/solutions/Solutions";
import Services from "./pages/services/Services";
import Industries from "./pages/industries/Industries";
import FAQ from "./pages/Support/FAQ";

// Legal Pages
import TermsAndConditions from "./pages/Legal/TermsAndConditions";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import CookiePolicy from "./pages/Legal/CookiePolicy";
import Disclaimer from "./pages/Legal/Disclaimer";
import AIStatement from "./pages/Legal/AIStatement";

// Components
import ScrollToTop from "./components/ScrollToTop";
import InitialLoader from "./components/InitialLoader";
import MainLayout from "./pages/MainLayout";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Initial Loader */}
      {loading && (
        <InitialLoader
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Application */}
      {!loading && (
        <div className="min-h-screen text-textMain">
          <ScrollToTop />

          <Routes>
            <Route element={<MainLayout />}>
              <Route  path="/" element={<Home />}/>
              <Route path="/company" element={<About />} />
              <Route path="/contact"element={<Contact />} />
              <Route path="product/contact"element={<Contact />} />
              <Route path="company/contact"element={<Contact />} />
              <Route path="/product"element={<Product />} />
              <Route path="/solutions"element={<Solutions />} />
              <Route path="/services"element={<Services />} />
              <Route  path="/industries"element={<Industries />}/>
              <Route  path="/faq" element={<FAQ />}/>
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route  path="/disclaimer" element={<Disclaimer />}/>
              <Route  path="/ai-statement" element={<AIStatement />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;