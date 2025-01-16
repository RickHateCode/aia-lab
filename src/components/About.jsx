
import {a_propos} from '../constants/index'

// import { textVariant,fadeIn,zoomIn } from "../lib/motion";


export default function About({headTitle, more,  children}) {
    return (
      <div id="a-propos" className="relative isolate overflow-hidde px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mx-auto mt-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="40%"
                y={9}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-[#08c1dc]">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-20">
              <div className="lg:max-w-lg">
                
                <h1 className="text-4xl md:text-6xl font-bold text-white text-left md:text-center lg:text-left">{headTitle}</h1>
                
              </div>
            </div>
            
          </div>
          <div className="-ml-12 mt-10 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
               alt=""
               src={a_propos.history_image}
               className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:w-[44rem]"
              />
          </div>
          <div className="mt-0 lg:mt-10 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-lg text-base leading-7 text-gray-700 lg:max-w-lg space-y-8">
                <p className="text-lg text-white max-w-2xl mx-auto lg:mx-0 text-left md:text-center lg:text-left">{a_propos.history}</p>
                <p className="text-lg text-white max-w-2xl mx-auto lg:mx-0 text-left md:text-center lg:text-left">{a_propos.expertise}</p>
                <p className="text-lg text-white max-w-2xl mx-auto lg:mx-0 text-left md:text-center lg:text-left">{a_propos.more}</p>
                {/* <div className="w-full flex items-center justify-center">
                <button className="bg-red-900 cursor-pointer items-center w-60"> <p className="font-bold text-white">En savoir plus...</p></button>
                </div> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  