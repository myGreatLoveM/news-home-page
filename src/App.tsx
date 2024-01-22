import Navbar from './components/Navbar'
import deskImg from '/images/image-web-3-desktop.jpg'
import cardImg1 from '/images/image-retro-pcs.jpg'
import cardImg2 from '/images/image-top-laptops.jpg'
import cardImg3 from '/images/image-gaming-growth.jpg'
import Card from './components/Card'

export default function App() {
  return (
    <main className='min-h-screen w-full pt-5 pb-20'>
      <div className='max-w-6xl mx-auto px-3 py-3 flex flex-col gap-8'>
        <Navbar />
        <section className='flex gap-6 flex-col sm:flex-row'>
          <div className='w-full sm:w-[60%] flex flex-col gap-4'>
            <img
              src={deskImg}
              alt='desktop-img'
              className='w-full rounded-sm overflow-hidden'
            />
            <div className='w-full flex flex-col sm:flex-row gap-10 py-3'>
              <h2 className='w-full text-3xl sm:w-1/2 sm:text-4xl md:text-5xl font-bold '>
                The Bright Future of Web 3.0 ?
              </h2>
              <div className='w-full sm:w-1/2 h-full flex flex-col gap-5 items-start'>
                <p className='text-gray-400 text-base'>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className='bg-orange-700 text-white px-4 py-2 tracking-widest text-sm rounded-sm'>
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className=' sm:w-[40%] bg-slate-900 text-white px-4 py-4 rounded-sm flex flex-col gap-8'>
            <h3 className='text-3xl text-yellow-300 font-bold'>New</h3>
            <article className='flex flex-col gap-5 flex-1'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>
                  Hydrogen VS Electric Cars
                </h4>
                <p className='text-gray-500 font-medium'>
                  Will hydrogen-fueled cars ever catch up to EVs
                </p>
                <hr className='h-1 text-gray-400' />
              </div>
              <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>
                  The Downsides of AI Artistry
                </h4>
                <p className='text-gray-500 font-medium'>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
                <hr className='h-1' />
              </div>
              <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>
                  Is VC Funding Drying Up?
                </h4>
                <p className='text-gray-500 font-medium'>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className='grid gap-4 md:grid-cols-3'>
          <Card
            src={cardImg2}
            num='01'
            title='Reviving Retro PCs'
            para='Private funding by VC firms is down 50% YOY. We take a look at what that means'
          />
          <Card
            src={cardImg3}
            num='02'
            title='Top 10 Laptops of 2022'
            para='Our best picks for various needs and budgets.'
          />
          <Card
            src={cardImg1}
            num='03'
            title='The Growth of Gaming'
            para='How the pandemic has sparked fresh opportunities.'
          />
        </section>
      </div>
    </main>
  )
}
