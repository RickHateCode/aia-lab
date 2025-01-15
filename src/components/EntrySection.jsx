const EntrySection = ({text, children, style})=> {
    return(
        <div className="bg-black w-full">
               <div className=" bg-cover h-[25vh] md:h-[30vh] lg:h-[45vh] xl:h-[55vh] 2xl:h-[70vh] relative" style={{ backgroundImage: 'url(/aia-lab/images/us2.jpg)' }}>
                   <div className="absolute inset-0  bg-black opacity-70 mx-auto " />
                   <div className="absolute inset-0 flex items-center justify-center ">
                      <img src="/aia-lab/images/embleme.svg" alt=""  className='max-w-40 md:max-w-60'/>
                   </div>
                   <h1 className={` ${style} absolute inset-0 flex justify-center items-center font-bold text-white text-2xl lg:text-4xl xl:text-5xl pt-48 md:pt-80`}>{text}</h1>
                   {/* <h1 className={` ${style} absolute inset-0 flex justify-center items-center text-2xl md:text-4xl font-bold text-white `}>{text}</h1> */}
                   {children}
                </div>
               {/* 
               <div className="absolute inset-0 flex items-center justify-center "><h1 className='text-white text-3xl font-bold'>qui sommes-nous?</h1></div> */}
         </div>
    )
}
export default EntrySection;