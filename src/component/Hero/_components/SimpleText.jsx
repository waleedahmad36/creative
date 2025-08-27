import React from 'react'

const SimpleText = () => {
  return (
    <>
    <div className='w-full max-w-4xl mx-auto px-10 py-20'  >
        <p className='text-4xl md:text-5xl lg:text-6xl font-semibold shadow-xl text-balance' >
        We do creative business with impactful brands. People who have something to say. Humans who want to get heard. This is where we can help, using bespoke branding and crafting extraordinary digital experiences.
        </p>
    </div>



    <div  className='w-full h-[70vh]  flex justify-center items-center fankaus' >
        <div className='flex flex-col justify-center items-center gap-4'  >
            <h1 className='text-7xl font-semibold shadow-xl'  >Have an</h1>
            <p className='text-3xl font-semibold shadow-xl SoalR'  >Idea?</p>
            <button className='px-10 py-3 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300'  >Let's Talk</button>
        </div>
    </div>



    

    </>
  )
}

export default SimpleText