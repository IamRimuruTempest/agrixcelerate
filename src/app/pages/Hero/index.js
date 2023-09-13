import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section id="organizer">
        <div className="relative h-screen  overflow-hidden  ">
          {/* <div className="max-w-screen-xl mx-auto py-20 md:py-24"> */}
          <div className=" mx-auto py-20 md:py-24">
            <div className="absolute z-30">
              <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
                <div className="w-1/2  mx-auto my-12 md:mt-18 lg:mt-20 ">
                  <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                    <p className="font-bold text-white text-sm text-center uppercase">
                      About AgriXcelerate
                    </p>
                    <h2 className="font-display text-[#FFCA08] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-4 lg:leading-tight">
                      Accelerating Digital Innovation for Agriculture
                    </h2>
                    <p className="text-center text-white">
                      <span>
                        The AgriXcelerate Bootcamp is a cutting-edge program
                        hosted by CSU-TBIs (BisNEST and CVLTBI) that focuses on
                        accelerating digital innovations in agriculture. As a
                        leading institution in promoting entrepreneurship and
                        technology-driven solutions, CSU-TBIs brings together
                        experts, industry leaders, and passionate individuals to
                        drive impactful change in the agricultural sector.
                      </span>
                    </p>
                    <br></br>
                    <p className="text-center text-white">
                      <span>
                        The AgriXcelerate is designed for young entrepreneurs,
                        startups, researchers, and enthusiasts who are
                        passionate about leveraging digital innovations to
                        revolutionize agriculture. This bootcamp will give them
                        the opportunity to be at the forefront of this
                        transformation, equipping them with the knowledge,
                        skills, and network needed to drive digital innovations
                        that will shape the future of agriculture.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Image
              className="absolute z-0"
              src="/bg drone.jpg"
              alt="background"
              layout="fill"
              objectFit="cover"
            /> */}

            <Image
              src="/bg drone.jpg"
              alt="background"
              fill
              className="object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"
              quality="100"
              unoptimized={true}
            />

            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
