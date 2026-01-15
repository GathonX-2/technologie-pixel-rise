import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Apropos from './pages/Apropos.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Contact from './pages/Contact.jsx';
import Price from './pages/Price.jsx';
import Quote from './pages/Quote.jsx';
import Team from './pages/Team.jsx';
import Feature from './pages/Feature.jsx';
import Testimonial from './pages/Testimonial.jsx';

function App() {
  return (
    <div className="min-h-screen bg-night text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-[160px]" />
      </div>
      <Navbar />
      <main className="relative mx-auto max-w-6xl px-4 pt-24 pb-32 space-y-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
