import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Showcase = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024)' });
  useGSAP(() => {
    if(!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        }
      });
      timeline
      .to('.mask img', {
        transform: 'scale(01)'
          }).to('.content', {opacity: 1, y: 0, ease: 'power1.in'})
        }
      }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/showcase.mp4" loop muted autoPlay playsInline />
        <div className ="mask">
            <img src="/mask-image.png" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
            <div className="lg:max-w-md">
                <h2>Experience the Thrill of Driving</h2>
                <div className="space-y-6 mt-7 pe-10">
                    <p>
                        INTRODUCING {" "}
                        <span className="text-white">
                            the perfect blend of power, performance, and style with our latest Mustang models. Engineered for those who crave excitement on the road.
                        </span>
                    </p>
                    <p>
                      Boss Mustang was heavily modified for racing. Though not formally known as the 
                      <span className="text-white"> "Boss 429 engine" </span>
                         by Ford the way the Boss 302 engine was, it acquired that informal designation from its introduction in the 1969 Boss 429 Mustang.                    </p>
                  <p className="text-primary font-semibold">Learn more about the Beast →</p>
                </div >
                </div>
                <div className="max-w-2xs space-y-14">
                  <div className="space-y-5">
                  <h2>BOSS Technical Information</h2>
                  <p>Manufacturer: <span className="text-white">Ford</span></p>
                  <p>Production: <span className="text-white">1969-1970</span></p>
                  <p>Assembly: <span className="text-white">Dearborn, Michigan</span></p>
                  <p>Class: <span className="text-white">Muscle car</span></p>
                  <p>Body style: <span className="text-white">2-door coupe</span></p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Showcase
