type CardType = {
  src: string
  num: string
  title: string
  para: string
}

export default function Card({ src, num, title, para }: CardType) {
  return (
    <div className='flex gap-4 md:h-[150px]'>
      <img src={src} alt='card-img' className='w-[100px] h-full object-cover' />
      <div className='flex flex-col gap-2'>
        <h4 className='text-3xl text-gray-400 font-semibold'>{num}</h4>
        <h5 className='text-xl font-medium hover:text-orange-900 cursor-pointer'>{title}</h5>
        <p className='text-gray-400'>{para}</p>
      </div>
    </div>
  )
}
