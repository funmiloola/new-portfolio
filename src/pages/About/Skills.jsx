import data from '../../data.json'
export default function Skills() {
    return (
        <div className='px-8 md:px-24 pt-10 md:pt-16 font-sans pb-10'>
            <h2 className="text-white text-lg md:text-xl text-center font-semibold">Skills</h2>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center justify-center gap-6 md:gap-22 pt-12 md:border-b md:border-b-[#172631]  md:pb-4 '>
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