
import { ArrowRight } from 'lucide-react'
import { Hero } from "../constants"
const HeroSection = ()=> {
    return(
    <div id="Acceuil">
       <div className=" w-full  relative md:relative  mx-auto" >
            <div ><img src="/images/bgNoirT.jpg" height = {500} alt="" className=""/></div>'
            <div className="absolute inset-0  bg-black opacity-85 mx-auto"/>
            <div className="absolute inset-0 flex items-center justify-center ">
            <img src="/images/aiapng.png"  alt="" className=" w-full max-w-56 sm:max-w-72 md:max-w-80 lg:max-w-[24rem] xl:max-w-[30rem]"/>
            </div>
        </div>
        <div className=" flex mt-0 md:mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-left md:text-center lg:text-left">
              {Hero.title}
              <span className="text-[#08c1dc]"> numeriques</span>
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto lg:mx-0 text-left md:text-center lg:text-left">
              {Hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-[#08c1dc] text-white rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group">
              Démarrer
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-[#08c1dc] text-[#08c1dc] rounded-full font-medium hover:bg-indigo-50 transition-colors">
                Nos Realisation
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/Keyboard.jpg"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    
    </div>  
    )
}
export default HeroSection