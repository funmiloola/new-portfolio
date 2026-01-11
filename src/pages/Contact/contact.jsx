import data from "../../data.json"
export default function Contact() {
    return (
        <div className="font-sans px-8 md:px-24 pt-20 md:pt-28 ">
            <h2 className="text-white text-xl md:text-2xl font-semibold text-center pb-2 ">Contact Me</h2>
            <p className="text-white text-base text-center pb-12">I'm open to collaborations and new oppurtunities.</p>
            <div className="border border-[#172631] bg-[#172631] w-full sm:w-fit pl-4 pr-20 pt-3 pb-8 rounded-md mx-auto ">
                <div className="flex flex-col gap-2">
                    {data.contacts.map((contact) => (
                        <div className="flex gap-2 items-center ">
                            <img src={contact.icn} alt="" className="w-4 h-4"/>
                            <span className="text-white">{ contact.name}</span>
                        </div> 
                    ))}
                </div> 
                <div className="flex items-center gap-5 pt-18 ">
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