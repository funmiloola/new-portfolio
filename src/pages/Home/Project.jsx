import data from '../../data.json'
export default function Project() {
    return (
        <div className='px-8 md:px-24 pt-12 md:pt-18  pb-10 font-display'>
            <h2 className="text-white text-lg md:text-2xl font-semibold text-center font-sans">Projects</h2>
            <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center pt-8 md:pt-12'>
                {data.projects.map((project, index) => (
                    <ul  className='flex flex-col items-center gap-3 '>
                    <li key={index}>
                        <img src={project.img} alt="" className='w-34 h-34 md:w-68 md:h-68' />
                    </li>
                        <li className='text-white'>{project.name}</li>
                        <li className='text-orange-400 hover:border-b hover:border-b-orange-400'><a href={project.link}>Live Url</a></li>
                        <li className='text-orange-400 hover:border-b hover:border-b-orange-400'><a href={project.url}>Github Repo</a></li>
                        </ul>
                ))}
            </div>
        </div>
    )
}