import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default () => {
    return <>
    <div className="h-full w-full bg-hero grid items-center pb-14">
            <div className="container mx-auto px-4 lg:px-20 lg:pt-40 lg:pb-80">
                <h1 className="text-white font-bold text-3xl text-center leading-normal mt-10 tracking-wider lg:text-6xl lg:leading-normal">We create digital product <br className="hidden md:block"/> and solve your problem</h1>
                    <p className="text-sm text-gray-400 text-center my-6 lg:text-lg">A fully integrated digital agency that will help you create beautiful website and <br className="hidden md:block" />solve your problem in your company</p>
                <div className="flex justify-center py-6 text-sm lg:text-lg">
                    <button className="bg-white rounded-full py-3 px-8 text-[#16403f] font-semibold flex items-center mr-2 hover:bg-slate-200">Get Started <span className="pl-2"><ArrowRightIcon className="w-4"/></span></button>
                    <button className="rounded-full py-3 px-8 text-white font-medium ml-2 hover:text-slate-200">Learn More</button>
                </div>
            </div>
        </div>
    </>

}
