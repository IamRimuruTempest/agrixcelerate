import Image from "next/image";
export default function Organizer() {
  return (
    <>
      <section id="organizer">
        <div className="relative px-8">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <p className="text-center">Organized by:</p>
            <div className="flex align-center justify-center gap-5 mt-5">
              {" "}
              <Image
                height={100}
                width={100}
                src="/organizer/TTBDD.png"
                alt="BizNEST"
                sizes="(max-width: 768px) 100vw"
              />
              <Image
                height={100}
                width={100}
                src="/organizer/BizNEST.png"
                alt="BizNEST"
                sizes="(max-width: 768px) 100vw"
              />
              <Image
                height={100}
                width={100}
                src="/organizer/CVLTBI.png"
                alt="CVLTBI"
                sizes="(max-width: 768px) 100vw"
              />
              <Image
                height={100}
                width={100}
                src="/organizer/CSU.png"
                alt="CVLTBI"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
