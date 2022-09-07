import { ComputerDesktopIcon, CodeBracketSquareIcon, ClipboardDocumentListIcon, PencilSquareIcon, VideoCameraIcon,ViewColumnsIcon, MinusIcon } from "@heroicons/react/24/outline";

export default () => {
    const servicesList = [
        {id: 1, img:<ComputerDesktopIcon className="w-8" />, tittle:"UI/UX Design", desc:"Create Landing Page, Mobile App, Dashboard, Prototyping, Wireframing"},
        {id: 2, img:<CodeBracketSquareIcon className="w-8" />, tittle:"Development", desc:"Create Website and Responsive Website by HTML/CSS, React, Webflow"},
        {id: 3, img:<ClipboardDocumentListIcon className="w-8" />, tittle:"Content Writing", desc:"Cretae beautiful word for your website that will attract customers"},
        {id: 4, img:<ViewColumnsIcon className="w-8" />, tittle:"Branding", desc:"Cretae visual identity and maketing materials for your company"},
        {id: 5, img:<PencilSquareIcon className="w-8" />, tittle:"Illustration", desc:"Create character kit, empty state illustration for your design"},
        {id: 6, img:<VideoCameraIcon className="w-8" />, tittle:"Motion Graphic", desc:"Create motion graphic with smooth and high quality"}
    ];
    return <>
    <div className="container mx-auto lg:px-20 lg:mt-20 px-4">
            <p className="flex items-center text-yellow-400 font-semibold lg:text-lg"><span className="mr-2"><MinusIcon className="w-4"/></span> Services</p>
            <div className="grid lg:grid-cols-2 mt-6">
                <div>
                    <h1 className="text-3xl tracking-wide font-bold lg:text-5xl lg:leading-snug">Our service we can <br className="hidden lg:block"/>help you</h1>
                </div>
                <div>
                    <p className="font-medium text-gray-400 text-sm lg:pt-3 pt-6 grid lg:justify-items-end lg:text-lg lg:leading-relaxed">We have many interesting services with <br className="hidden lg:block"/> profesional team, that will help your work to <br className="hidden lg:block" /> be better</p>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3 my-20 text-center">
                {servicesList.map((service) =>
                [
                <div className="px-4 py-8 border border-slate-100 rounded-sm hover:shadow-[10px_-20px_90px_-30px_rgba(0,0,0,0.1)] hover:border-white" key={service.id}>
                    <p className="font-bold bg-slate-100 inline-block rounded-full w-fit p-6 text-yellow-400" >{service.img}</p>
                    <p className="font-bold text-xl my-4 lg:text-2xl">{service.tittle}</p>
                    <p className="font-medium text-slate-400 text-sm lg:text-lg tracking-normal">{service.desc}</p>
                </div>
                ]
                )}
            </div>
        </div>
    </>
}