import bgImg from '../assets/img-hero.png';
import video from '../assets/hero.mp4';
import ReactPlayer from "react-player";


export default () => {
    const feats = [
        {id: 1, tittle:"2.5K+", desc:"Job Done Successfully"},
        {id: 2, tittle:"2.2K+", desc:"Happy Client"},
        {id: 3, tittle:"94%", desc:"Daily Aktive Engagement"},
        {id: 4, tittle:"58+", desc:"Trusted by Company"}
    ];

    return <>
        <div className=" w-full h-3/2 flex flex-wrap justify-center md:container md:mx-auto md:px-20 px-6">
            <div className="hidden absolute z-10 lg:-translate-y-64 lg:block">
                <ReactPlayer
                    url={video} 
                    playing
                    controls 
                    width="100%"
                    height="550px"
                    className="lg:container lg:mx-auto lg:px-20"
                    playIcon={<button className="w-[980px]"></button>}
                    light={bgImg}
                    progressInterval={2000}/>
            </div>
                {/* <img className="hidden absolute z-10 lg:-translate-y-64 lg:block md:container md:mx-auto md:px-20" src={bgImg} alt="" /> */}
            <div className="w-full flex flex-wrap justify-center mb:20 lg:mb-80 lg:translate-y-80">
                {feats.map((feat)=> (
                [
                    <div className="w-60 m-2 text-center py-10" key={feat.id}>
                        <p className="font-bold text-2xl lg:text-4xl">{feat.tittle}</p>,
                        <p className="font-medium text-slate-400 text-sm lg:text-xl">{feat.desc}</p>
                    </div>
                ]
                ))}
            </div>
        </div>
    </>
}