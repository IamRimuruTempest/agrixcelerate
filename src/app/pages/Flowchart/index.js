import { GiBugleCall, GiPodiumWinner } from "react-icons/gi";
import { MdPersonSearch } from "react-icons/md";
import { FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export default function Flowchart() {
  const timelines = [
    {
      id: 1,
      title: "Call for Applicants",
      description:
        "The challenge is officially announced and an open call for students and/or graduates to submit their innovative solutions related to digital agriculture. The call for participants outlines the criteria, guidelines, and timelines for participation.",
      date: "09/18/2023",
      icon: <GiBugleCall />,
    },
    {
      id: 2,
      title: "Screening of Entries",
      description:
        "The TBI team evaluates the submitted solutions based on predefined criteria such as innovation, impact, scalability, feasibility, and alignment with the challenge themes. The screening process may include a review of written documents of the solution.",
      date: "09/22/2023",
      icon: <MdPersonSearch />,
    },
    {
      id: 3,
      title: "Shortlisting of Participants",
      description:
        "Based on the screening, a select number of participants are shortlisted. These participants are invited to participate in the AgriXcelerate Pitching Competition.",
      date: "09/22/2023",
      icon: <FaClipboardList />,
    },
    {
      id: 4,
      title: "Announcement of Shortlisted Participants",
      description:
        "The TBI team announces the qualified participants for the AgriXcelerate Pitching Competition.",
      date: "09/22/2023",
      icon: <GiBugleCall />,
    },
    {
      id: 5,
      title: "Deadline for Pitch Deck Submission",
      description:
        "The TBI team will collect all the picth deck of participants until September 27, 2023 with Business Model Canvas and Value Proposition Canvas.",
      date: "09/27/2023",
      icon: <BsPersonWorkspace />,
    },
    // {
    //   id: 5,
    //   title: "Bootcamp",
    //   description:
    //     "The AgriXcelerate Bootcamp is a focused program designed to provide participants with intensive training, workshops, and mentoring sessions to refine and develop their solutions, business models, and pitches. The mentorship program connects them with experienced mentors and industry experts who provide guidance and support throughout the bootcamp.",
    //   date: "08/06/2023",
    //   icon: <BsPersonWorkspace />,
    // },
    {
      id: 6,
      title: "AgriXcelerate Pitching Competition",
      description:
        "The competition culminates in a pitch competition where the participants present their solutions to a panel of judges, potential investors, and industry leaders. This pitching competition provides an opportunity for them to showcase their innovations, demonstrate their viability, and highlight their potential impact on the agriculture sector.",
      date: "09/29/2023",
      icon: <FaChalkboardTeacher />,
    },
    // {
    //   id: 6,
    //   title:
    //     "Pitch Competition (Digital Agriculture Innovation Challenge 2023)",
    //   description:
    //     "The Bootcamp culminates in a pitch competition where the participants present their solutions to a panel of judges, potential investors, and industry leaders. This pitching competition provides an opportunity for them to showcase their innovations, demonstrate their viability, and highlight their potential impact on the agriculture sector.",
    //   date: "08/06/2023",
    //   icon: <FaChalkboardTeacher />,
    // },
    {
      id: 7,
      title: "Winner Selection and Awards",
      description:
        "The judging panel evaluates the pitches and selects the winners based on predefined criteria. Awards and prizes are presented to the winners to acknowledge their achievements and support the further development of their solutions.",
      date: "09/30/2023",
      icon: <GiPodiumWinner />,
    },
    // {
    //   id: 7,
    //   title: "Winner Selection and Awards",
    //   description:
    //     "The judging panel evaluates the pitches and selects the winners based on predefined criteria. Awards and prizes are presented to the winners to acknowledge their achievements and support the further development of their solutions.",
    //   date: "08/06/2023",
    //   icon: <GiPodiumWinner />,
    // },
    {
      id: 8,
      title: "Post-Bootcamp Support",
      description:
        "After the competition, winners and other participants may have access to post-bootcamp support, which can include access to 6-month free incubation/acceleration programs, continued mentorship, networking opportunities, or industry partnership to help scale their solutions and bring them to the market. The TBI also provides free access to office space with free internet and telephone services.",
      date: "10/02/2023",
      icon: <BiSupport />,
    },
  ];
  return (
    <>
      <section id="timeline">
        <div className="relative px-8">
          <div className=" max-w-screen-xl mx-auto py-20 md:py-24">
            <p className="font-bold text-sm text-center uppercase">
              agrixcelerate timeline
            </p>
            <h2 className="font-display text-[#35A448] uppercase text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 mb-12 lg:leading-tight">
              Process Flowchart
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-500 before:to-transparent">
              {timelines.map((timeline) => (
                <div
                  key={timeline.id}
                  className="relative  flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active "
                >
                  <div className="text-white flex items-center justify-center w-10 h-10 rounded-full border border-[#2B2B2B] bg-slate-300 group-[.is-active]:bg-[#35A448] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {timeline.icon}
                  </div>

                  <div className=" w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white hover:border-[#35A448] hover:text-white  p-4 rounded border border-slate-200 shadow ">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900 ">
                        <p>{timeline.title}</p>
                      </div>
                      <time className="font-caveat text-sm text-slate-900 font-bold ">
                        {timeline.date}
                      </time>
                    </div>
                    {/* <div className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </div> */}
                    <div className="text-slate-500 ">
                      {timeline.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
