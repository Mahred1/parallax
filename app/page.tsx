import Experties from "./_components/Experties";
import Project from "./_components/Project";

export default function Page() {
  return (
    <main className="">
      {/* Hero section */}
      <section className="relative flex-center h-screen text-off-white hero-bg">
        <div className="flex-center-col gap-6 md:gap-10 lg:gap-16">
          {/* headings */}
          <div className="flex-center-col gap-1">
            <h5 className="uppercase">PARALLAX CUSTOME HOMES</h5>
            <h1 className="w-[90%] md:w-[500px] lg:w-[750px] phone:w-[80%] lg:text-[80px] text-4xl md:text-5xl text-center tracking-tight lg:">
              You’re Unique. Your home should be, too
            </h1>
          </div>

          {/* cta */}
          <div className="flex items-center gap-2 bg-off-black px-6 md:px-8 max-w-fit h-15 md:h-18 lg:h-20 font-bold text-off-white">
            <button>Get a Quote</button>
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.06 5.283L20.717 10.94C20.9979 11.2213 21.1557 11.6025 21.1557 12C21.1557 12.3975 20.9979 12.7788 20.717 13.06L15.061 18.718C14.7796 18.9994 14.398 19.1575 14 19.1575C13.602 19.1575 13.2204 18.9994 12.939 18.718C12.6576 18.4366 12.4995 18.055 12.4995 17.657C12.4995 17.2591 12.6576 16.8774 12.939 16.596L16.035 13.5H4.5C4.10218 13.5 3.72064 13.342 3.43934 13.0607C3.15804 12.7794 3 12.3978 3 12C3 11.6022 3.15804 11.2206 3.43934 10.9393C3.72064 10.658 4.10218 10.5 4.5 10.5H16.035L12.94 7.404C12.6587 7.12261 12.5008 6.74101 12.5009 6.34315C12.501 5.94529 12.6591 5.56377 12.9405 5.2825C13.2219 5.00124 13.6035 4.84328 14.0014 4.84338C14.3992 4.84347 14.7807 5.00161 15.062 5.283H15.06Z"
                fill="#F4F6F8"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* floating card section */}
      <section className="top-[92%] right-0 absolute md:items-center md:grid grid-cols-2 bg-off-white md:p-5 px-10 py-7 w-[80%] md:w-[90%] overflow-x-hidden">
        <h3 className="w-[90%] md:w-[300px] phone:w-[98%] font-normal sm:font-medium text-2xl phone:text-3xl">
          Custom homes built by humans, for humans
        </h3>
        <p className="hidden md:flex">
          We work hard to understand your requirements and share your
          aspirations and aim to build a strong, trusting relationship as we
          guide you through the design and construction process.
        </p>
      </section>

      {/* Experties Section */}
      <section className="flex-center bg-off-grey pt-30 pb-15 md:pt-50 md:pb-25">
        <div className="w-[80%]">
          <h4 className="mb-8 sm:mb-9 md:mb-10 lg:mb-12 font-medium sm:text-4xl md:text-5xl ">
            Our Experties
          </h4>
          {/* experties */}
          <ul>
            <Experties details={{ title: "Home", position: 1 }} />
            <Experties details={{ title: "Multi Residential", position: 2 }} />
            <Experties details={{ title: "Education", position: 3 }} />
            <Experties details={{ title: "Commercial/Public", position: 1 }} />
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative text-white bg-off-black pt-10 sm:pb-16 pb-10 ">
        {/* white overlay */}
        <div className="bg-off-white  absolute right-0 bottom-0 h-[106%] md:h-[108%] w-[50%] lg:w-[35%] sm:w-[25%] sm:block hidden "></div>
        <div className="bg-off-black  absolute left-0 bottom-0 h-[100%] w-[60%] lg:w-[75%] sm:w-[80%] sm:block hidden  "></div>

        {/* Container */}
        <div className="w-[95%] relative z-10 md:w-[90%] ml-auto flex flex-col mt-5 md:mt-15  overflow-x-hidden">
          {/* heading */}
          <div className="flex-center phone:justify-start ">
            <h4 className="border-b-2 pb-2 phone:w-[50%]  md:w-[50%] lg:w-[40%] sm:pb-4 sm:w-[60%] phone:w-[53 %] sm:text-4xl phone:text-2xl phone:pb-3 ">
              Previous Projects
            </h4>
          </div>

          {/* Projects container */}
          <div className=" mt-10 md:mt-25 flex gap-16 overflow-x-scroll no-scrollbar ">
            <Project
              name="Le Grand Hotel"
              location="Bordeaux, France"
              src="/res1.jpg"
            />
            <Project
              name="casa del sol"
              location="Alcalá de Henares, Spain"
              src="/hero.avif"
            />
            <Project
              name="Jessamine"
              location="Dhaka, bangladesh"
              src="/res2.jpg"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-off-grey flex-center py-16 px-3 md:py-24 lg:py-27">
        <div className="flex-center-col gap-8 md:gap-10 lg:gap-13 ">
          <div className="flex-center-col md:gap-1  lg:gap-3  ">
            <h5 className="md:text-xl" >ready to get started?</h5>
            <h4 className="sm:text-3xl md:text-4xl lg:text-5xl">Let’s make your dream a reality</h4>
          </div>
          {/* cta */}
          <div className="flex items-center gap-2 bg-off-black px-6 md:px-9 max-w-fit h-15 md:h-15 lg:h-15 font-bold text-off-white">
            <button>Get a Quote</button>
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.06 5.283L20.717 10.94C20.9979 11.2213 21.1557 11.6025 21.1557 12C21.1557 12.3975 20.9979 12.7788 20.717 13.06L15.061 18.718C14.7796 18.9994 14.398 19.1575 14 19.1575C13.602 19.1575 13.2204 18.9994 12.939 18.718C12.6576 18.4366 12.4995 18.055 12.4995 17.657C12.4995 17.2591 12.6576 16.8774 12.939 16.596L16.035 13.5H4.5C4.10218 13.5 3.72064 13.342 3.43934 13.0607C3.15804 12.7794 3 12.3978 3 12C3 11.6022 3.15804 11.2206 3.43934 10.9393C3.72064 10.658 4.10218 10.5 4.5 10.5H16.035L12.94 7.404C12.6587 7.12261 12.5008 6.74101 12.5009 6.34315C12.501 5.94529 12.6591 5.56377 12.9405 5.2825C13.2219 5.00124 13.6035 4.84328 14.0014 4.84338C14.3992 4.84347 14.7807 5.00161 15.062 5.283H15.06Z"
                fill="#F4F6F8"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
