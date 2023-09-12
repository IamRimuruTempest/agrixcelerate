import Image from "next/image";
import Timer from "./Timer";
import About from "./About";
import Goals from "./Goals";
import Mechanics from "./Mechanics";
import Flowchart from "./Flowchart";

import Header from "./components/Header";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Timer />
        <About />
        <Goals />
        <Mechanics />
        <Flowchart />

        {/* <div className="relative px-8 bg-[#2B2B2B]">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20 ">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full text-white">
                <p className="font-bold text-sm text-center uppercase">
                  Remember
                </p>
                <h2 className="font-display text-[#35A448] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-4 lg:leading-tight">
                  Challenge Mechanics
                </h2>

                <h2 className="font-display uppercase text-2xl font-black text-secondary-500 md:text-2xl lg:text-2xl tracking-wide text-center mt-4 mb-3 lg:leading-tight">
                  Who Can Join?
                </h2>
                <p className="text-center mb-6">
                  <span>
                    The iDeaTech Challenge is open to{" "}
                    <span className="font-bold text-[#35A448]">
                      {" "}
                      students, graduates, faculty, innovators, technopreneurs,{" "}
                    </span>
                    and{" "}
                    <span className="font-bold text-[#35A448]">
                      {" "}
                      researchers{" "}
                    </span>{" "}
                    from various universities, colleges, and institutions in the
                    Cagayan Valley Region. Region.
                  </span>
                </p>

                <h2 className="font-display uppercase text-2xl font-black text-secondary-500 md:text-2xl lg:text-2xl tracking-wide text-center mt-4 mb-3 lg:leading-tight">
                  Team Criteria
                </h2>

                <ul className="text-center">
                  <li>
                    Every team should comprise a minimum of{" "}
                    <span className="font-bold text-[#35A448]">
                      three members
                    </span>{" "}
                    and a maximum of{" "}
                    <span className="font-bold text-[#35A448]">
                      five members
                    </span>{" "}
                    .
                  </li>
                  <li>
                    Team members should possess expertise in five members{" "}
                    <span className="font-bold text-[#35A448]">
                      Information Technology
                    </span>{" "}
                    ,{" "}
                    <span className="font-bold text-[#35A448]">
                      Engineering
                    </span>
                    , and{" "}
                    <span className="font-bold text-[#35A448]">
                      Entrepreneurship
                    </span>
                    .
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a
                    title="Download Full Mechanics"
                    target="_self"
                    className="inline-block uppercase mt-8 md:mt-8 px-8 py-3 border border-white hover:border-[#35A448] text-base  leading-6 font-medium rounded-full bg-primary-500 hover:bg-primary-700 hover:text-[#35A448] focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo  transition ease-in-out duration-150"
                    href=""
                  >
                    Download Full Mechanics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="relative px-8 ">
          <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
            <div className="md:w-6/12 flex-shrink-0 relative ">
              <Image
                className="mb-5"
                height={500}
                width={500}
                src="/agrixcelerate.png"
                alt="logo"
                sizes="(max-width: 768px) 100vw"
                objectFit="none"
              />
            </div>
            <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
              <div className="g:py-8 text-center md:text-left">
                <span className="font-bold text-white text-sm text-center md:text-left uppercase">
                  About AgriXcelerate
                </span>
                <h2 className="font-display text-[#FFCA08] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
                  Accelerating Digital Innovation for Agriculture
                </h2>
                <p className="mt-4 text-white text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
                  The AgriXcelerate Bootcamp is a cutting-edge program hosted by
                  CSU-TBIs (BisNEST and CVLTBI) that focuses on accelerating
                  digital innovations in agriculture. As a leading institution
                  in promoting entrepreneurship and technology-driven solutions,
                  CSU-TBIs brings together experts, industry leaders, and
                  passionate individuals to drive impactful change in the
                  agricultural sector.
                  <br></br>
                  <br></br>
                  The AgriXcelerate is designed for young entrepreneurs,
                  startups, researchers, and enthusiasts who are passionate
                  about leveraging digital innovations to revolutionize
                  agriculture. This bootcamp will give them the opportunity to
                  be at the forefront of this transformation, equipping them
                  with the knowledge, skills, and network needed to drive
                  digital innovations that will shape the future of agriculture.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
