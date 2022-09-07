import { MinusIcon } from "@heroicons/react/24/outline";
import imgproduct from '../assets/img-product.png';
import imgproduct1 from '../assets/img-product1.png';
import imgproduct2 from '../assets/img-product2.png';
import imgproduct3 from '../assets/img-product3.png';
import imgproduct4 from '../assets/img-product4.png';

export default () => {
    return <>
    
    <div className="container mx-auto lg:px-20 px-4 ">
            <div className="grid justify-center my-20"> 
                <p className="flex items-center text-yellow-400 font-semibold lg:text-lg lg:justify-center"><span className="mr-2"><MinusIcon className="w-4"/></span> Product</p>
                <h1 className="text-3xl tracking-wide font-bold my-6 lg:text-center lg:text-5xl lg:leading-snug">Our product we've created before</h1>
                <div className="grid lg:grid-cols-2 lg:my-10">
                    <div className="hidden lg:inline-block">
                        <img className="w-full" src={imgproduct} alt="" />
                    </div>
                    <div className="flex flex-wrap gap-6 my-6 justify-center lg:justify-end lg:my-0 ">
                        <div className="w-64 border-b-2 pb-4 lg:border-none lg:pb-0">
                            <img src={imgproduct1} alt="" />
                            <h1 className="font-bold text-lg py-6 lg:text-xl">Fashion Landing Page</h1>
                            <p className="font-medium text-slate-400 text-sm lg:text-lg">We make this landing page for fashion marketplace we called fesyen.</p>
                        </div>
                        <div className="w-64 border-b-2 pb-4 lg:border-none lg:pb-0">
                            <img src={imgproduct2} alt="" />
                            <h1 className="font-bold text-lg py-6 lg:text-xl">Insurance Landing Page</h1>
                            <p className="font-medium text-slate-400 text-sm lg:text-lg">Secure.In is company who will help you stay safety with her services.</p>

                        </div>
                        <div className="w-64 border-b-2 pb-4 lg:border-none lg:pb-0">
                            <img src={imgproduct3} alt="" />
                            <h1 className="font-bold text-lg py-6 lg:text-xl">NFT Dashboard</h1>
                            <p className="font-medium text-slate-400 text-sm lg:text-lg">As the current trend we make nft dashboard project to sell your art here.</p>
                        </div>
                        <div className="w-64 border-b-2 pb-4 lg:border-none lg:pb-0">
                            <img src={imgproduct4} alt="" />
                            <h1 className="font-bold text-lg py-6 lg:text-xl">Donation Mobile App</h1>
                            <p className="font-medium text-slate-400 text-sm lg:text-lg">Donari is a donation mobile app in inazuma, he have vision to help other.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}