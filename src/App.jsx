import Pricing from './Components/Pricing/Pricing.jsx'
import FAQ from './Components/FAQ/FAQ.jsx'
import Features from './Components/Features/Features.jsx'
import Users from './Components/Users/Users.jsx'
import Contact from './Components/Contact/Contact.jsx'



const App = () => (
  <div className = 'w-[97%] bg-white flex flex-col items-center mx-auto rounded-sm shadow-2xl' > 
    <Pricing />
    <FAQ />
    <Features />
    <Users />
    <Contact />
  </div>
)

export default App