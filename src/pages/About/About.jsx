import data from '../../data.json'
export default function AboutMe() {
    return (
        <div className='font-sans px-8 md:px-24 pt-14 md:pt-20'>
            <h2 className='text-white text-center text-xl md:text-2xl font-semibold pb-6'>About me</h2>
            <p className='text-white text-center py-5 md:py-10 bg-[#172631] border border-[#172631] px-5 md:px-10 rounded-md'>{data.about}</p>
        </div>
    )
}