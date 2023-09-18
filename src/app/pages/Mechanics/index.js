export default function Mechanics() {
  return (
    <>
      <section id="mechanics">
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
                    The AgriXcelerate Innovation Challenge is open to
                    <span className="font-bold text-[#FFCA08]"> students</span>,
                    <span className="font-bold text-[#FFCA08]"> graduates</span>
                    <span className="font-bold text-[#FFCA08]">innovators</span>
                    , and
                    <span className="font-bold text-[#FFCA08]">
                      technopreneurs
                    </span>
                    {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#FFCA08] relative inline-block">
                      <span class="relative font-bold text-[#142D58]">
                        researchers
                      </span>
                    </span> */}
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
                    target="_blank"
                    className="inline-block uppercase mt-8 md:mt-8 px-8 py-3 border border-white hover:border-[#FFCA08] text-base  leading-6 font-medium rounded-full bg-primary-500 hover:bg-primary-700 hover:text-[#FFCA08] focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo  transition ease-in-out duration-150"
                    href="/Digital Agriculture Innovation Challenge Guidelines.pdf"
                  >
                    Download Full Mechanics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
