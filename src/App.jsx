import BestSellers from "./components/sections/BestSellers"
import Community from "./components/sections/Community";
import HeroSection from "./components/sections/HeroSection"
import OurCraft from "./components/sections/OurCraft";
import Services from "./components/sections/Services";


function App() {
  return (
<section className="min-h-162.5 md:min-h-187.5 lg:min-h-212.5 w-full">
<div className="relative">
  <HeroSection/>
</div>
<div className="bg-amber-50 w-full">
  <Services/>
</div>
  <BestSellers/>
  <OurCraft/>
  <Community/>
</section>
  )
}

export default App;
