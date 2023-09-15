import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section id="organizer">
        <div className="relative h-screen  overflow-hidden  ">
          {/* <div className="max-w-screen-xl mx-auto py-20 md:py-24"> */}
          <div className=" mx-auto py-20 md:py-24">
            {/* <div className="absolute z-30">
              <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
                <div className="w-1/2  mx-auto my-12 md:mt-18 lg:mt-20 ">
                 
                  <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                    <p className="font-bold text-white text-sm text-center uppercase">
                      About AgriXcelerate
                    </p>
                    <h2 className="font-display text-[#35A448] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-4 lg:leading-tight">
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
            </div> */}

            {/* <Image
              className="absolute z-0"
              src="/bg drone.jpg"
              alt="background"
              layout="fill"
              objectFit="cover"
            /> */}

            <div className="absolute z-30">
              <div className="w-screen flex flex-col justify-center align-center mx-auto py-2 md:py-24">
                <div className="flex justify-center align-center mx-12  gap-3">
                  <Image
                    height={50}
                    width={50}
                    src="/organizer/TTBDD.png"
                    alt="logo"
                    objectFit="none"
                  />
                  <Image
                    height={50}
                    width={50}
                    src="/organizer/BizNEST.png"
                    alt="logo"
                    objectFit="none"
                  />
                  <Image
                    height={50}
                    width={50}
                    src="/organizer/CVLTBI.png"
                    alt="logo"
                    objectFit="none"
                  />
                </div>
                <div className="flex justify-center align-center mx-12">
                  {" "}
                  <Image
                    height={600}
                    width={600}
                    src="/agrixcelerate.png"
                    alt="logo"
                    objectFit="none"
                  />
                </div>

                <div className="max-w-screen-xl mx-12 md:mx-auto lg:mx-auto ">
                  <div className="lg:w-1/2 md:w-1/2  mx-auto my-12 md:mt-6 lg:mt-8 ">
                    <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                      <p className="text-center text-white text-sm md:text-base lg:text-base">
                        <span>
                          The AgriXcelerate Bootcamp is a cutting-edge program
                          hosted by CSU-TBIs (BisNEST and CVLTBI) that focuses
                          on accelerating digital innovations in agriculture. As
                          a leading institution in promoting entrepreneurship
                          and technology-driven solutions, CSU-TBIs brings
                          together experts, industry leaders, and passionate
                          individuals to drive impactful change in the
                          agricultural sector.
                        </span>
                      </p>
                      <br></br>
                      <p className="text-center text-white text-sm md:text-base lg:text-base">
                        <span>
                          The AgriXcelerate is designed for students, graduates,
                          young entrepreneurs, startups, researchers, and
                          enthusiasts who are passionate about leveraging
                          digital innovations to revolutionize agriculture. This
                          bootcamp will give them the opportunity to be at the
                          forefront of this transformation, equipping them with
                          the knowledge, skills, and network needed to drive
                          digital innovations that will shape the future of
                          agriculture.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center align-center mx-12 gap-3">
                  <a
                    title="Read our blog"
                    target="_blank"
                    className="uppercase inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base text-white leading-6 font-medium rounded-md bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo bg-[#35A448] transition ease-in-out duration-150"
                    href="https://rb.gy/jcheb"
                  >
                    Register
                  </a>
                  <a
                    title="Read our blog"
                    target="_blank"
                    className="uppercase inline-block mt-8 md:mt-8 px-8 py-3 border border-white text-base text-white leading-6 font-medium rounded-md bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo bg-tranparent transition ease-in-out duration-150"
                    href="https://csu-ttbdd.com/"
                  >
                    Visit TTBDD
                  </a>
                </div>
              </div>
            </div>

            <Image
              src="/bg-drone-v2-transformed.jpeg"
              alt="background"
              fill
              className="object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,1)_6.82%,rgba(0,0,0,0.00)_81.44%)]"
              priority
            />

            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,1)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
