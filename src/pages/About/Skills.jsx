import data from '../../data.json'
export default function Skills() {
    return (
        <div className='max-w-6xl w-full px-8 mx-auto pt-10 md:pt-20 font-sans pb-8'>
            <h2 className="text-white text-lg md:text-2xl text-center font-semibold pb-4">Skills</h2>
            <p className='text-white text-center text-lg pb-2 '>These are the technologies and tools I've been working with to build beautiful and functional web experiences.</p>
            <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center justify-center gap-6 md:gap-10 pt-12 md:pb-2 mx-auto '>
                {data.skills.map((skill, index) => (
                    <a href={skill.link} target='_blank'>
                    <li key={index} className='flex flex-col items-center gap-2 px-6 py-2.5 hover:bg-[#172631] hover:rounded-sm'>
                        <img src={skill.img} alt="" />
                      <span className='text-white'>{skill.name}</span>
                    </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}