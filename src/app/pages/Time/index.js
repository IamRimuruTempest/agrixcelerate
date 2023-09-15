"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Openfor from "@/app/components/Openfor";
import { motion } from "framer-motion";
export default function Time() {
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
      <section id="home">
        <motion.div
          className="relative bg-[#2B2B2B]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <div className=" text-[#FFCA08] flex flex-col justify-items-center items-center text-center max-w-screen-xl  mx-auto py-20 md:py-24">
            <div className=" flex gap-2 lg:gap-5  flex-center items-center">
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

            <p className="uppercase text-base text-2xl lg:text-xl font-bold mt-4">
              {" "}
              Submision Deadline of Proposal
            </p>
            <p className="text-base text-2xl lg:text-xl mb-5">
              {" "}
              on March 29, 2023
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
