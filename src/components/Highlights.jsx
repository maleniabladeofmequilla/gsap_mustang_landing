import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Racing History of Boss.</h2>
            <h3 className="hover-red-glow">Born to Race . Built to Rule</h3>


            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/ford-mustang.png " alt="mustang" className="h-40 w-auto" />
                        <p className=" mt-10" >Boss 302</p>
                    </div>
                    <div>
                        <img src="/speed.svg" alt="speed" className="h-10 -mt-20 ml-5" />
                        <p className="-mt-20">Boss 429</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="yellow-gradient"><p>The Boss 302 most commonly refers to a high performance Ford Mustang model, produced in the <br />
                            <span>late 1960s and 1970s</span> for SCCA <span>Trans-Am racing homologation.</span></p>
                    </div>
                    <div>
                        <p>The Boss 429 is a high performance variant of the Ford Mustang produced in 1969 and 1970,notable for its race designed 429 cubic-inch
                            <span className="red-gradient">{' '}(7.0 L){' '}</span>
                            semi hemispherical head V8 engine
                            <span className="red-gradient">{' '}(built for NASCAR homologation.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights