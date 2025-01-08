import React from 'react';
import { Circle, ArrowDown,  UnfoldVertical } from 'lucide-react';
const timelineItems = [
    {
      title: "Travail d'equipe",
    //   icon: <Rocket className="w-4 h-4 text-white" />
    },
    { 
        title: "Réactivité",
        // icon: <Rocket className="w-4 h-4 text-white" />
      },
      {
        title: "Professionnalisme",
        // icon: <Rocket className="w-4 h-4 text-white" />
      },
      {
        title: "Éthique",
        // icon: <Rocket className="w-4 h-4 text-white" />
      },
   
  ];


export function Timeline() {
  return (
    <div className="min-h-screen mt-16 sm:mt-0">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Nos Valeurs</h1>
        </div>
        <div className="relative container mx-auto px-6 py-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <div className="absolute h-[50rem] md:h-full w-0.5 bg-gray-200"></div>
      </div>
      
      {timelineItems.map((item, index) => (
        <div key={index} className="relative mb-12">
          <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-center`}>
            {/* Content */}
            <div className={`w-[30rem] sm:w-[30rem] md:w-11/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md">
                {/* <span className="block text-sm font-semibold text-indigo-600 mb-2">{item.date}</span> */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                {/* <p className="text-gray-600">{item.description}</p> */}
              </div>
            </div>

            {/* Timeline node */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                {item.icon || <Circle className="w-4 h-4 text-white" />}
              </div>
            </div> */}
          </div>

          {/* Connector arrow for all except last item */}
          {index !== timelineItems.length - 1 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-1">
              {/* <UnfoldVertical className="w-4 h-4 text-gray-400" /> */}
            </div>
          )}
        </div>
      ))}
    </div>
      </div>
    </div>





    
  );
}

