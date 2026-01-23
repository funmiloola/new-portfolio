import data from "../../data.json"
export default function Contact() {
    return (<div className="font-sans px-8 w-full max-w-6xl mx-auto pt-20 md:pt-28 ">
            <h2 className="text-[#172631] dark:text-white text-xl md:text-2xl font-semibold text-center pb-2 ">Contact Me</h2>
        <p className="text-[#172631] dark:text-white text-xl text-center pb-8">I'm open to collaborations and new oppurtunities.</p>
       
            <div className="border border-[#172631] dark:border-[#1A1A1A] bg-[#172631] dark:bg-[#1A1A1A] w-full  pt-3 pb-8 rounded-md mx-auto ">
                <div className="flex flex-col gap-2 pb-4">
                {data.contacts.map((contact) => (
                    <a href="mailto:funmilolaadebiyi52@gmail.com">
                        <div className="flex gap-2 items-center justify-center pt-5">
                            <img src={contact.icn} alt="" className="w-4 h-4 md:w-8 md:h-8"/>
                            <span className="text-white md:text-2xl">{ contact.name}</span>
                        </div> 
                        </a>
                    ))}
            </div> 
             <div className="flex gap-2 items-center justify-center pb-5">
            <span className="border-b border-gray-300 w-15 md:w-30 "></span>
            <span className= "text-white text-xs md:text-sm">OR</span>
            <span className="border-b border-gray-300 w-15 md:w-30"></span>
        </div>
                <div className="flex items-center justify-center gap-5  pb-3">
                    {data.socials.map((social, index) => (
                        <a href={social.link}>
                            <img src={social.logo} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}