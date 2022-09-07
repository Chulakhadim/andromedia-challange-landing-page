import logoDorry from '../assets/logo-dorry.png';

export default () => {
    let k = 0;
    const Companys = ["Our Work", "Services", "Community", "Carrer"];
    const Resources = ["Help Center", "Blog", "Term & Conditions"];
    const Links = ["Pricing", "About", "Learn", "Corporate", "News"];
    const FollowUs = ["Dribbble", "Instagaram", "Twitter"];
    return <>
    <div>
            <div className="w-full h-full bg-[#16403f] pb-10">
                <div className="container mx-auto lg:p-20 px-4">
                    <div className="grid lg:grid-cols-2 items-center pt-16">
                        <h1 className="text-3xl tracking-wide text-white font-bold lg:text-4xl lg:leading-snug">Are you interested to work<br className="hidden lg:block"/> with us?</h1>
                        <div className="flex lg:justify-end font-medium text-sm lg:text-lg mt-8 w-full">
                            <button className="border rounded-full py-3 px-8 lg:px-10 mr-6 bg-white hover:bg-slate-200">Let's Chat</button>
                            <button className="border border-white rounded-full py-3 px-8 lg:px-10 text-white hover:bg-[#236664] ">Schedule Meet</button>
                        </div>
                    </div>
                    <hr className="my-14" />
                    <div className="grid lg:grid-cols-2">
                        <div className="mb-12">
                            <div className="flex items-center mb-8">
                                <img src={logoDorry} alt="logo" className="h-8"/>
                                <p className="text-md font-normal text-white pl-2 lg:text-xl ">Dorry</p>
                            </div>
                            <p className="font-medium text-gray-400">Nibh ut lacus egestas orci, dolor. Eu eros, <br /> laoreet euismod tortor nibh purus</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4">
                            <ul>
                                <li className="text-white font-medium text-xl mb-4">Company</li>
                                <div className="font-medium text-gray-400 grid gap-y-4">
                                    {Companys.map((i) => [
                                    <li className="hover:text-white" key={k=k+1}>{i}</li>
                                    ])}
                                </div>
                            </ul>
                            <ul>
                                <li className="text-white font-medium text-xl mb-4 ">Resources</li>
                                <div className="font-medium text-gray-400 grid gap-y-4">
                                    {Resources.map((i) => [
                                    <li className="hover:text-white" key={k=k+1}><a href=""></a>{i}</li>
                                    ])}
                                </div>
                            </ul>
                            <ul>
                                <li className="text-white font-medium text-xl mb-4">Links</li>
                                <div className="font-medium text-gray-400 grid gap-y-4">
                                    {Links.map((i) => [
                                    <li className="hover:text-white" key={k=k+1}>{i}</li>
                                    ])}
                                </div>
                            </ul>
                            <ul>
                                <li className="text-white font-medium text-xl mb-4">Follow Us</li>
                                <div className="font-medium text-gray-400 grid gap-y-4">
                                    {FollowUs.map((i) => [
                                    <li className="hover:text-white" key={k=k+1}>{i}</li>
                                    ])}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}