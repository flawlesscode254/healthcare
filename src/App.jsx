import {
  Navbar,
  Home,
  About,
  Financial,
  Contact,
  Reasons,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Reasons />
      <Financial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
