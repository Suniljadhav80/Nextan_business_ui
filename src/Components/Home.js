import { Carousel } from "flowbite-react";
import man from "../Assets/Images/man-working-with-computer-desk_18660-760.avif";



const Home = () => {
    return (
        <>
            <div className="px-4 lg:px-14 max-w-full mx-auto min-h-screen h-screen">
                <Carousel className="mt-[-5%]">
                    {/* 1st Carousel */}
                    <div className="my-28  md:my-8 md:overflow-hidden py-12 flex flex-col md:flex-row-reverse md:h-96 items-center justify-between gap-9">
                        <div>
                            <img src={man} alt="working man" className="ml-10 h-96" />
                        </div>
                        {/* text */}
                        <div className="md:w-1/2 text-justify">
                            <h1 className="text-5xl font-semibold mb-4 text-neutral-300 md:w-3/4 leading-snug">Lessons and insights<span className="text-sky-400 leading-snug text-5xl"> From 8 years</span>
                            </h1>
                            <p>Where to grow your business as a photographer: site or social media?</p>
                            <a href="#register" class="btn-primary">Register</a>
                        </div>
                    </div>
                    {/* 2nd Carousel */}
                    <div className="my-28 md:my-8 md:overflow-hidden py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-9">
                        <div>
                            <img src={man} alt="working man" className="ml-10 h-96" />
                        </div>
                        {/* text */}
                        <div className="md:w-1/2 text-justify">
                            <h1 className=" text-5xl font-semibold mb-4 text-neutral-300 md:w-3/4 leading-snug">Learn and Earn Money<span className="text-sky-400 leading-snug text-5xl"> in 4 Months</span>
                            </h1>
                            <p>Where to grow your business as a photographer: site or social media?</p>
                            <a href="#register" class="btn-primary">Register</a>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}
export default Home;