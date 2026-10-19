
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import NotFound from "./Components/404Notfound";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-black font-sans text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-3 bg-gray-950">
        {/* Global navigation */}
        <Navbar />

        {/* Page content */}
        <main className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />

            {/* Unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
