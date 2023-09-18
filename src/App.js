import "./index.css";

function App() {
  return (
    <div className="w-[912px] h-[1250px] border-2 border-sky-600 m-auto">
      {/* Inner whole div */}
      <div className="ml-8 mt-5 mr-5">
        {/* 1st row whole div */}
        <div className="flex items-center text-black justify-between">
          <div>
            <div className="w-[176px] h-[30px] text-[25px] font-normal">
              Name
            </div>
            <div className="font-normal text-[15px] mt-2">Expertise</div>
            <div className="font-normal text-[15px] my-1">Location</div>
          </div>

          <div className="text-black text-[15px]">
            <div className="font-normal">name@gmail.com</div>
            <div className="font-normal">+91 432 2222 322</div>
            <div className="font-normal w-[100px] h-[12px]">
              Link of your profile
            </div>
          </div>
        </div>

        {/* 2nd row started */}
        <div className="mt-2">
          <div className="text-[22px] text-black font-normal flex items-center">
            Impact I Create
          </div>
          <hr className="w-full h-[2px] rounded-xl bg-sky-500 mt-1" />
          <div className="text-[15px] mt-2 font-normal text-gray-600">
            Conducted user research and analyzed data to identify design
            opportunities and inform design decisions. Collaborated with
            cross-functional teams to create wireframes, prototypes, and
            high-fidelity mockups hsbdnhsnhds hsjhcaljc;osj;oj kidshlkahsd
            jbdsbdskbcbds jkbsckjsdbcb bkjjbcab
          </div>
        </div>

        {/* 3rd column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">
            Professional Experience
          </div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />

          <div className="flex items-center justify-between font-normal text-[17px]">
            <div className="space-y-2  text-black mt-2">
              <div className="">ABC Company</div>
              <div className="">UX Design Intern</div>
            </div>

            <div className="space-y-2 text-gray-600 mt-2 mr-6">
              <div className="flex justify-end">Delhi, India</div>
              <div className="">Jan 2023 - Present</div>
            </div>
          </div>
          <div className="text-[8px] w-full font-normal text-gray-600 space-y-1">
            <p className="mt-4 text-[15px]">
              Conducted user research and analyzed data to identify design
              opportunities and inform design decisions followed by bjddi hrb
              rjrjr udud udbbd drrvrd
            </p>
            <ul className="space-y-1 text-[15px]">
              <li>
                Collaborated with cross-functional teams to create wireframes,
                prototypes, and high-fidelity mockups{" "}
              </li>
              <li>Maintained High Standard work</li>
            </ul>
          </div>
          {/* ---same below--- */}
          <div className="mt-1">
            <div className="flex items-center justify-between font-normal text-[17px]">
              <div className="space-y-2  text-black mt-2">
                <div className="">ABC Company</div>
                <div className="">UX Design Intern</div>
              </div>

              <div className="space-y-2 text-gray-600 mt-2 mr-6">
                <div className="flex justify-end">Delhi, India</div>
                <div className="">Jan 2023 - Present</div>
              </div>
            </div>
            <div className="text-[8px] w-full font-normal text-gray-600 space-y-1">
              <p className="mt-4 text-[15px]">
                Conducted user research and analyzed data to identify design
                opportunities and inform design decisions followed by bjddi hrb
                rjrjr udud udbbd drrvrd
              </p>
              <ul className="space-y-1 text-[15px]">
                <li>
                  Collaborated with cross-functional teams to create wireframes,
                  prototypes, and high-fidelity mockups{" "}
                </li>
                <li>Maintained High Standard work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Projects</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />
          <div className="mt-1">
            <div className="flex items-center justify-between font-normal text-[17px]">
              <div className="space-y-2  text-black mt-2">
                <div className="">XYZ Project</div>
                <div className="">Organization Name</div>
              </div>

              <div className="space-y-2 text-gray-600 mt-2 mr-6">
                <div className="flex justify-end">Freelance Designer</div>
                <div className="">Jan 2022 - Dec 2022</div>
              </div>
            </div>
            <div className="text-[8px] w-full font-normal text-gray-600 space-y-1">
              <ul className="space-y-1 text-[15px]">
                <li>
                  Designed wireframes, prototypes, and visual designs for mobile
                  and web-based products hrbkjfrn drbjdrhrh duidr3uhbdr
                  deiudr3bgd3riodrb dud3rhdrhr dwe
                </li>
                <li>
                  Conducted usability testing and iterated on design solutions
                  based on user feedback{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Education</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />
          <div className="mt-1">
            <div className="flex items-center justify-between font-normal text-[17px]">
              <div className="space-y-2  text-black mt-2">
                <div className="">School of Design</div>
                <div className="">YX Design Bootcamp</div>
              </div>

              <div className="space-y-2 text-gray-600 mt-2 mr-6">
                <div className="flex justify-end">Delhi, India</div>
                <div className="">Jan 2023 - Feb 2023</div>
              </div>
            </div>
            <div className="text-[8px] w-full font-normal text-gray-600 space-y-1">
              <p className="font-normal text-[15px] mt-1">Specialization</p>
              <ul className="space-y-1 text-[15px]">
                <li>
                  Intensive, full-time program that provided hands-on training
                  in user-centered design, prototyping, and visual design
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Skills</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />
          <ul className="flex space-x-11 pt-1">
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
          </ul>
        </div>

        {/* 7th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Tools</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />
          <ul className="flex space-x-11 pt-1">
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
            <li>Sketch</li>
          </ul>
        </div>

        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Achievements</div>
          <p className="text-[15px]">
            Digital Marketing Certification by Google
          </p>
          <p className="text-[15px]">
            dbveb ebdbdbd bedbbe bdehd djudedeb eddbde jdee djndnbde bebefbbfe
            jebebfe bffgfrgf efbhefbfeiu dehjbdebefce dehjcebfe
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
