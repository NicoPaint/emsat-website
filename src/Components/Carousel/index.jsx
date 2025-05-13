//Este componente es el carusel de los testimonios.
//React
import { useState } from "react";
//Components
import { StarList } from "../StarList";
//Third-party
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = ({ testimonialInfo }) => {

    const activeStyle = "bg-red-emsat";

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 === testimonialInfo.length ? 0 : prevIndex + 1);
    }
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? testimonialInfo.length - 1 : prevIndex - 1);
    }
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div>
            <div className="flex md:hidden flex-col justify-center">
                <StarList numberOfStars={testimonialInfo[currentIndex]?.stars}/>
                <p className="h-32 pt-5 text-xl xl:text-3xl font-bold">{testimonialInfo[currentIndex]?.review}</p>
                <div>
                    <img 
                        src={testimonialInfo[currentIndex]?.image} 
                        alt={`profile picture of ${testimonialInfo[currentIndex]?.name}`}
                        className="size-16 rounded-full"
                    />
                    <p className="font-bold">{testimonialInfo[currentIndex]?.name}</p>
                    <div className="flex gap-1">
                        <p>{`${testimonialInfo[currentIndex]?.position},`}</p>
                        <p>{testimonialInfo[currentIndex]?.company}</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center">
                    <StarList numberOfStars={testimonialInfo[currentIndex]?.stars}/>
                    <p className="h-32 pt-5 text-xl xl:text-3xl font-bold">{testimonialInfo[currentIndex]?.review}</p>
                    <div>
                        <img 
                            src={testimonialInfo[currentIndex]?.image} 
                            alt={`profile picture of ${testimonialInfo[currentIndex]?.name}`}
                            className="size-16 rounded-full"
                        />
                        <p className="font-bold">{testimonialInfo[currentIndex]?.name}</p>
                        <div className="flex gap-1">
                            <p>{`${testimonialInfo[currentIndex]?.position},`}</p>
                            <p>{testimonialInfo[currentIndex]?.company}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <StarList numberOfStars={testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.stars}/>
                    <p className="h-32 pt-5 text-xl xl:text-3xl font-bold">{testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.review}</p>
                    <div>
                        <img 
                            src={testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.image} 
                            alt={`profile picture of ${testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.name}`}
                            className="size-16 rounded-full"
                        />
                        <p className="font-bold">{testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.name}</p>
                        <div className="flex gap-1">
                            <p>{`${testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.position},`}</p>
                            <p>{testimonialInfo[currentIndex + 1 === testimonialInfo.length ? 0 : currentIndex + 1]?.company}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-5">
                <div className="flex items-center gap-2">
                    {testimonialInfo?.map((_, index) => (
                        <div
                            key={index}
                            className={`size-5 rounded-full bg-gray-emsat ${currentIndex === index ? activeStyle : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <div onClick={handlePrevious} className="size-10 border-2 border-red-emsat p-1 rounded-full">
                        <ChevronLeftIcon/>
                    </div>
                    <div onClick={handleNext} className="size-10 border-2 border-red-emsat p-1 rounded-full">
                        <ChevronRightIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Carousel }