import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full mx-auto bg-[#e6e8ee] ">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <Image
                height={200}
                width={200}
                src="/agrixcelerate.png"
                alt="logo"
                sizes="(max-width: 768px) 100vw"
                objectFit="none"
              />
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"></button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                href="/home"
              >
                Home
              </a>
              <a
                className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-base leading-6 font-medium text-secondary-500 hover:text-primary-500 border-transparent border-b-2 hover:border-primary-500 hover:border-b-primary hover:border-b-2 focus:outline-none focus:text-primary-500 transition duration-300"
                href="/about"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="relative h-screen">
          <div className="flex flex-col justify-items-center items-center text-center max-w-screen-xl  mx-auto py-20 md:py-24">
            <p className="text-[#35A448] text-4xl font-semibold mb-5 mt-20">
              {" "}
              Submision Deadline of Proposal
            </p>

            <div className="text-[#142D59] flex gap-5 flex-center items-center mb-5">
              <div className="text-center ">
                <h1 className="text-6xl font-extrabold">11</h1>
                <span>Days</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="text-6xl font-extrabold">23</h1>
                <span>Hours</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="text-6xl font-extrabold">53</h1>
                <span>Minutes</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="text-6xl font-extrabold">32</h1>
                <span>Seconds</span>
              </div>
            </div>

            <h1 className="text-[#142D59] text-3xl mb-5">Open for Students</h1>

            <h1 className="text-[#35A448]  text-2xl uppercase font-semibold">
              Digital Agriculture Innovation Challenge 2023
            </h1>
            <p className="text-[#142D59]">
              Fostering Smart and Sustainable Innovations: Igniting Startup
              Economy using Smart City Technologies
            </p>

            <a
              title="Read our blog"
              target="_self"
              className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base text-white leading-6 font-medium rounded-md bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo bg-[#142D59] transition ease-in-out duration-150"
              href="/blog"
            >
              REGISTER
            </a>
          </div>

          {/* <Image
            absolute
            bottom-0
            src="/bg.png"
            objectFit="contain"
            layout="fill"
            alt="background"
          /> */}
          <div className="absolute bottom-0">
            <Image
              height={2000}
              width={2000}
              src="/bg.png"
              alt="background"
              sizes="(max-width: 768px) 100vw"
              objectFit="none"
            />
          </div>
        </div>

        <div className="relative px-8 bg-[#2B2B2B]">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20 ">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                <p className="font-bold text-white text-sm text-center uppercase">
                  About AgriXcelerate
                </p>
                <h2 className="font-display text-[#FFCA08] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-4 lg:leading-tight">
                  Accelerating Digital Innovation for Agriculture
                </h2>
                <p className="text-center text-white">
                  <span>
                    The AgriXcelerate Bootcamp is a cutting-edge program hosted
                    by CSU-TBIs (BisNEST and CVLTBI) that focuses on
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
                    startups, researchers, and enthusiasts who are passionate
                    about leveraging digital innovations to revolutionize
                    agriculture. This bootcamp will give them the opportunity to
                    be at the forefront of this transformation, equipping them
                    with the knowledge, skills, and network needed to drive
                    digital innovations that will shape the future of
                    agriculture.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-8 ">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20 ">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                <p className="font-bold text-sm text-center uppercase">
                  AgriXcelerate
                </p>
                <h2 className="font-display text-[#35A448] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-4 lg:leading-tight">
                  Our Goal
                </h2>

                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
                  <div className="rounded-lg shadow-sm bg-[#2B2B2B]">
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold leading-6 text-white">
                        Enhance Agricultural Productivity
                      </h2>
                      <p className="mt-4 text-zinc-300">
                        Foster innovations that increase crop yields, livestock
                        production, and overall agricultural productivity
                        through the use of digital technologies.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm  bg-[#2B2B2B]">
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold leading-6 text-white">
                        Sustainable Farming Practices
                      </h2>
                      <p className="mt-4 text-zinc-300">
                        Promote the development of digital solutions that
                        support sustainable farming practices, including
                        precision agriculture, organic farming, and reduced
                        resource usage.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm  bg-[#2B2B2B]">
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold leading-6 text-white">
                        Access to Information
                      </h2>
                      <p className="mt-4 text-zinc-300">
                        Improve access to critical agricultural information for
                        farmers, such as weather forecasts, market prices, pest
                        and disease management strategies, and best practices.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-sm divide-y  bg-[#2B2B2B]">
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold leading-6 text-white">
                        Market Access
                      </h2>
                      <p className="mt-4 text-zinc-300">
                        Facilitate the creation of platforms or tools that
                        connect farmers with markets, buyers, and supply chain
                        partners, reducing post-harvest losses and ensuring fair
                        prices for agricultural products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-8 bg-[#2B2B2B]">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20 ">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full text-white">
                <p className="font-bold text-sm text-center uppercase">
                  Remember
                </p>
                <h2 className="font-display text-[#FFCA08] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-12 lg:leading-tight">
                  Challenge Mechanics
                </h2>

                <h2 className="font-display uppercase text-2xl font-black text-secondary-500 md:text-2xl lg:text-2xl tracking-wide text-center mt-16 mb-3 lg:leading-tight">
                  Who Can Join?
                </h2>
                <p className="text-center mb-6">
                  <span>
                    The iDeaTech Challenge is open to{" "}
                    <span className="font-bold text-[#FFCA08]">
                      {" "}
                      students, graduates, faculty, innovators, technopreneurs,{" "}
                    </span>
                    and{" "}
                    <span className="font-bold text-[#FFCA08]">
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
                    <span className="font-bold text-[#FFCA08]">
                      three members
                    </span>{" "}
                    and a maximum of{" "}
                    <span className="font-bold text-[#FFCA08]">
                      five members
                    </span>{" "}
                    .
                  </li>
                  <li>
                    Team members should possess expertise in five members{" "}
                    <span className="font-bold text-[#FFCA08]">
                      Information Technology
                    </span>{" "}
                    ,{" "}
                    <span className="font-bold text-[#FFCA08]">
                      Engineering
                    </span>
                    , and{" "}
                    <span className="font-bold text-[#FFCA08]">
                      Entrepreneurship
                    </span>
                    .
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <a
                    title="Download Full Mechanics"
                    target="_self"
                    className="inline-block uppercase mt-8 md:mt-8 px-8 py-3 border border-white hover:border-[#FFCA08] text-base  leading-6 font-medium rounded-full bg-primary-500 hover:bg-primary-700 hover:text-[#FFCA08] focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo  transition ease-in-out duration-150"
                    href=""
                  >
                    Download Full Mechanics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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

        <div className="relative px-8">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Announcement and Call for Applicants</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The challenge is officially announced and an open call is
                    made for CSU students and/or graduates to submit their
                    innovative solutions related to digital agriculture. The
                    call for participants outlines the criteria, guidelines, and
                    timelines for participation.
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Screening of Entries</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The TBI team evaluates the submitted solutions based on
                    predefined criteria such as innovation, impact, scalability,
                    feasibility, and alignment with the challenge themes. The
                    screening process may include a review of written documents
                    of the solution.
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Shortlisting of Participants</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    Based on the screening, a select number of participants are
                    shortlisted. These participants are invited to participate
                    in the AgriXcelerate Bootcamp.
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>
                        Announcement of Shortlisted Participants for the
                        BOOTCAMP
                      </p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The TBI team announces the qualified participants for the
                    AgriXcelerate Bootcamp.
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Bootcamp</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The AgriXcelerate Bootcamp is a focused program designed to
                    provide participants with intensive training, workshops, and
                    mentoring sessions to refine and develop their solutions,
                    business models, and pitches. The mentorship program
                    connects them with experienced mentors and industry experts
                    who provide guidance and support throughout the bootcamp.
                    <ol>
                      <li>Orientation</li>
                      <li>Bootcamp Proper</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>
                        Pitch Competition (Digital Agriculture Innovation
                        Challenge 2023)
                      </p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The Bootcamp culminates in a pitch competition where the
                    participants present their solutions to a panel of judges,
                    potential investors, and industry leaders. This pitching
                    competition provides an opportunity for them to showcase
                    their innovations, demonstrate their viability, and
                    highlight their potential impact on the agriculture sector.
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Winner Selection and Awards</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    The judging panel evaluates the pitches and selects the
                    winners based on predefined criteria. Awards and prizes are
                    presented to the winners to acknowledge their achievements
                    and support the further development of their solutions.
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                  >
                    <path
                      fillRule="nonzero"
                      d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                    />
                  </svg>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      <p>Post-Bootcamp Support</p>
                    </div>
                    <time className="font-caveat text-sm text-indigo-500">
                      08/06/2023
                    </time>
                  </div>
                  {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                  <div className="text-slate-500">
                    After the bootcamp, winners and other participants may have
                    access to post-bootcamp support, which can include access to
                    6-month free incubation/acceleration programs, continued
                    mentorship, networking opportunities, or industry
                    partnership to help scale their solutions and bring them to
                    the market. The TBI also provides free access to office
                    space with free internet and telephone services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
