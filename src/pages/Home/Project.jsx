import data from '../../data.json'
export default function Project() {
    return (
        <div className='px-8 md:px-28 pt-8 md:pt-28  pb-10 font-display'>
            <h2 className="text-white text-lg md:text-2xl font-semibold text-center font-sans">Projects</h2>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center pt-6 md:pt-12'>
                {data.projects.map((project, index) => (
                    <ul  className='flex flex-col items-center gap-1 md:gap-3 bg-[#172631] px-4 py-4 rounded-md w-full md:w-fit'>
                    <li key={index}>
                        <img src={project.img} alt="" className='w-34 h-34 md:w-98 md:h-68 rounded-md' />
                    </li>
                        <li className='text-white'>{project.name}</li>
                        <li className='text-orange-400 hover:border-b hover:border-b-orange-400'><a href={project.link}>Live Url</a></li>
                        <li className='text-orange-400 hover:border-b hover:border-b-orange-400'><a href={project.url}>Github Repo</a></li>
                        </ul>
                ))}
            </div>
            <div className='flex items-center justify-center pt-4 md:pt-8'>
                <a href='/projects' className='font-sans bg-[#172631] px-4 py-2 text-white rounded-md hover:text-orange-400'>View More Projects</a>
                </div>
        </div>
    )
}