import "./index.css";

function App() {
  return (
    <div className="w-[912px] h-[1200px] border-2 border-sky-600 m-auto">
      {/* Inner whole div */}
      <div className="ml-8 mt-5 mr-5">
        {/* 1st row whole div */}
        <div className="flex-col text-black">
          <div className="font-normal flex items-center justify-center text-[25px]">
            Name
          </div>

          <div className="flex items-center justify-center text-[15px] space-x-9">
            <div>Expertise</div>
            <div>Location</div>
          </div>

          <div className="flex items-center justify-center text-[15px] space-x-8">
            <div>name@gmail.com</div>
            <div>+91 4322222322</div>
            <div>Link of your profile</div>
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
          <div className="text-black font-normal text-[22px]">Experience</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />

          <div className="flex justify-between mt-1">
            <div className="w-1/4 text-[15px]">Jan 2023 - Present</div>

            <div className="w-96 -ml-64">
              <div className="font-medium">ABC Company</div>
              <div className="font-medium">UX Design Intern</div>
            </div>

            <div className="h-1/2 w-1/6">Delhi, India</div>
          </div>
        </div>
        <div className="text-[13px] text-gray-600 mt-2 ml-36">
          <p>
            Conducted user research and analyzed data to identify design
            opportunities and inform design decisions followed by bjddi hrb
            rjrjr udud udbbd drrvrd
          </p>

          <ul>
            <li>
              Collaborated with cross-functional teams to create wireframes,
              prototypes, and high-fidelity mockups
            </li>
            <li>Maintained High Standard work</li>
          </ul>
        </div>

        {/* same below 2nd try */}

        <div>
          <div className="flex justify-between mt-1">
            <div className="w-1/4 text-[15px]">Jan 2023 - Present</div>

            <div className="w-96 -ml-64">
              <div className="font-medium">ABC Company</div>
              <div className="font-medium">UX Design Intern</div>
            </div>

            <div className="h-1/2 w-1/6">Delhi, India</div>
          </div>
        </div>

        <div className="text-[13px] text-gray-600 mt-2 ml-36">
          <p>
            Conducted user research and analyzed data to identify design
            opportunities and inform design decisions followed by bjddi hrb
            rjrjr udud udbbd drrvrd
          </p>

          <ul>
            <li>
              Collaborated with cross-functional teams to create wireframes,
              prototypes, and high-fidelity mockups
            </li>
            <li>Maintained High Standard work</li>
          </ul>
        </div>

        {/* 4th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Projects</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />

          <div className="flex justify-between mt-1">
            <div className="w-1/4 text-[15px]">Jan 2022 - Dec 2022</div>

            <div className="w-96 -ml-64 space-y-2">
              <div className="font-medium">XYZ Project</div>
              <div className="text-blue-600">https://zealyug.com</div>
            </div>

            <div className="w-1/6 h-1/2">Remote</div>
          </div>
        </div>

        <div className="text-[13px] mt-2 ml-36">
          <div className="text-[15px]">Organization Name</div>

          <ul className="text-gray-600 w-full">
            <li className="mt-1">
              Designed wireframes, prototypes, and visual designs for mobile and
              web-based products hrbkjfrn drbjdrhrh duidr3uhbdr
              deiudr3bgd3riodrb dud3rhdrhr dwe
            </li>
            <li className="mt-1">
              Conducted usability testing and iterated on design solutions based
              on user feedback{" "}
            </li>
          </ul>
        </div>

        {/* 5th column */}
        <div className="mt-2">
          <div className="text-black font-normal text-[22px]">Education</div>
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />

          {/* <div className="flex justify-between  mt-1">
            <div className="w-1/4 text-[15px]">Jan 2023 - Feb 2023</div>

            <div className="border-2 border-red-600 w-96 -ml-60 space-y-2">
              <div className="font-medium">School of Design</div>
              <div>UX Design BootCamp</div>
            </div>

            <div className="w-1/3 h-1/2 border-2 flex items-center justify-end border-green-500 flex-col">
              <div className="">Remote</div>
              <div className="">Performance: 88%</div>
            </div>
          </div> */}

          <div className="flex justify-between mt-1">
            <div className="w-1/4 text-[15px]">Jan 2022 - Dec 2022</div>

            <div className="w-96 -ml-64 space-y-2">
              <div className="font-medium">School of Design</div>
              <div>UX Design Bootcamp</div>
            </div>

            <div className="w-1/6  flex-col flex items-center h-1/2">
              <div className="ml-10">Remote</div>
              <div>Performance: 88%</div>
            </div>
          </div>
        </div>

        <div className="text-[13px] ml-36 mt-2">
          <div className="text-[15px]">Specialization</div>

          <ul className="text-gray-600">
            <li className="mt-1 w-full">
              Intensive, full-time program that provided hands-on training in
              user-centered design, prototyping, and visual design
            </li>
          </ul>
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
          <hr className="w-full h-[2px] bg-sky-500 mt-1" />

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
