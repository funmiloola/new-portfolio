import data from '../../data.json'
export default function AboutMe() {
    return (
        <div className='font-sans px-8 md:px-48 pt-14 md:pt-12'>
             <h2 className='text-white text-center text-xl md:text-2xl font-semibold pb-10'>About me</h2>
            <div className='flex flex-col items-center justify-center gap-12'>
                 <div>
                <img src="/cropped image.png" alt="" className="w-68 h-75 md:w-60 md:h-60 object-fill border border-[#172631] rounded-full" />
                </div>
            <div>
           
            <p className='text-white text-center py-5 md:py-10 bg-[#172631] border border-[#172631] px-2 md:px-10 rounded-md md:font-medium md:text-base'>{data.about}</p>
            </div>
           
                </div>
        </div>
    )
}