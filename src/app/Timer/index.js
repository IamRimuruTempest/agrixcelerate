"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Openfor from "../components/Openfor";

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    const target = new Date("09/23/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      // days
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      // hours
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      //minutes
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      //seconds
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setStopTimer(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="relative h-screen">
          <div className="flex flex-col justify-items-center items-center text-center max-w-screen-xl  mx-auto py-20 md:py-24">
            <p className="text-[#35A448] text:2xl lg:text-4xl font-semibold mb-5 mt-20 ">
              {" "}
              Submision Deadline of Proposal
            </p>

            <div className="text-[#142D59] flex gap-2 lg:gap-5  flex-center items-center mb-5">
              <div className="text-center ">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {stopTimer ? 0 : days}
                </h1>
                <span>Days</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {stopTimer ? 0 : hours}
                </h1>
                <span>Hours</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {stopTimer ? 0 : minutes}
                </h1>
                <span>Minutes</span>
              </div>
              <span className="font-extrabold">:</span>
              <div className="text-center">
                <h1 className="lg:text-6xl text-4xl font-extrabold">
                  {stopTimer ? 0 : seconds}
                </h1>
                <span>Seconds</span>
              </div>
            </div>

            <Openfor />

            <div className="mx-2">
              <h1 className="text-[#35A448] text-2xl lg:text-3xl uppercase font-semibold">
                Digital Agriculture Innovation Challenge 2023
              </h1>
              <p className="text-[#142D59] text-md lg:text-lg">
                AgriXcelerate: Accelerating Digital Innovation for Agriculture
              </p>
            </div>

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
      </section>
    </>
  );
}
