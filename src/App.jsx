import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation"
import HeroSection from "./components/hero-srction"
import EntrySection from './components/EntrySection';
import About from './components/About';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Clients from './components/clients';
import Contact from './components/contact';
import './App.css'
import Footer from './components/footer';
import Valeurs from './components/valeurs';
import { Timeline } from './components/TimeLine';

function App() {
  const navigation = [
    { name: 'Acceuil', id: 'Acceuil',},
    { name: 'Nos services',id: 'services',},
    { name: 'Qui somme-nous?', id: 'a-propos', },
    { name: 'Contact', id: 'contact',},
  ]
  return(
    <BrowserRouter>
      <div className=''>
        <Navigation routes={navigation}/>
        <HeroSection/>
        <About  headTitle="apropos de AIA lab">
            <div className="w-full flex items-center justify-center">
               <button className="bg-[#08c1dc] cursor-pointer items-center w-60"> <p className="font-bold text-white">En savoir plus...</p></button>
            </div> 
       </About>
       <div className='mt-0 md:flex flex-col xl:justify-center mx-auto md:flex-row gap-x-10 lg:gap-x-8 xl:gap-x-20 space-y-0'>
         <Timeline/>
         <Valeurs/>
       </div>
        <EntrySection  style={"text-center"} bgImg={"bg-bgEntry my-32"}>
        </EntrySection>
        <Services/>
        <Portfolio/>
        <Clients/>
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
