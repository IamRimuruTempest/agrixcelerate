import Image from "next/image";
export default function Main() {
  return (
    <>
      <section id="main">
        <div className="relative min-h-screen overflow-hidden ">
          <div className="mx-auto py-20 md:py-5">
            <div className="absolute z-30">
              <div className="w-screen h-screen mx-auto py-2 md:py-24">
                <div className="flex justify-center align-center mx-12  sm:mx-auto gap-3">
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

                <div className="max-w-screen-xl mx-5 md:mx-auto lg:mx-auto mt-4 ">
                  <div className="lg:w-1/2 md:w-1/2 mx-auto ">
                    <div className=" max-w-full">
                      <p className="text-center text-white text-sm md:text-base lg:text-base">
                        The AgriXcelerate Innovation Challenge is a cutting-edge
                        program hosted by CSU-TBIs (BisNEST and CVLTBI) that
                        focuses on accelerating digital innovations in
                        agriculture. As a leading institution in promoting
                        entrepreneurship and technology-driven solutions,
                        CSU-TBIs brings together experts, industry leaders, and
                        passionate individuals to drive impactful change in the
                        agricultural sector.
                      </p>
                      <br></br>
                      <p className="text-center text-white text-sm md:text-base lg:text-base hidden md:hidden sm:hidden lg:block xl:block">
                        The AgriXcelerate is designed for students, graduates,
                        young entrepreneurs, and enthusiasts who are passionate
                        about leveraging digital innovations to revolutionize
                        agriculture. This competition will give them the
                        opportunity to be at the forefront of this
                        transformation, equipping them with the knowledge,
                        skills, and network needed to drive digital innovations
                        that will shape the future of agriculture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center align-center mx-12 gap-3  my-3 lg:my-10">
                  <a
                    title="Read our blog"
                    target="_blank"
                    className="uppercase inline-block  px-4 py-3 border border-transparent text-base  sm:text-sm  text-white leading-6 font-medium rounded-md bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo bg-[#35A448] transition ease-in-out duration-150"
                    href="https://rb.gy/jcheb"
                  >
                    Register
                  </a>
                  <a
                    title="Read our blog"
                    target="_blank"
                    className="uppercase inline-block  px-4 py-3 border border-white text-base sm:text-sm text-white leading-6 font-medium rounded-md bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo bg-tranparent transition ease-in-out duration-150"
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
              className="object-cover w-screen h-screen bg-[linear-gradient(0deg,rgba(0,0,0,1)_6.82%,rgba(0,0,0,0.00)_81.44%)]"
              priority
            />

            <div className="absolute w-screen h-screen bg-[linear-gradient(0deg,rgba(0,0,0,1)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
