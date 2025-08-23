import Button from "./_components/Button";
import Experties from "./_components/Experties";
import Headline from "./_components/Headline";
import Loader from "./_components/Loader";
import Project from "./_components/Project";

export default function Page() {
  return (
    <>
      <main className="">
        {/* Hero section */}
        <Loader />
        <section className="relative flex-center h-screen text-off-white hero-bg">
          <div className="flex-center-col gap-6 md:gap-10 lg:gap-16">
            {/* headings */}
            <Headline />

            {/* cta */}
            <Button/>
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
            <ul >
              <Experties details={{ title: "Home", position: 1 ,src:"res1.jpg" }} />
              <Experties
                details={{ title: "Multi Residential", position: 2,src:"res2.jpg" }}
              />
              <Experties details={{ title: "Education", position: 3,src:"home.avif" }} />
              <Experties
                details={{ title: "Commercial/Public", position: 4,src:"res1.jpg" }}
              />
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
              <h5 className="md:text-xl">ready to get started?</h5>
              <h4 className="sm:text-3xl md:text-4xl lg:text-5xl">
                Let’s make your dream a reality
              </h4>
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
      {/* Footer ASection */}
      <footer className="bg-off-white py-32 px-3 sm:px-8 md:px-11 flex flex-col md:flex-row justify-between items-start flex-wrap gap-8">
        <div className="flex flex-col md:flex-row flex-wrap items-start gap-6 md:gap-8 lg:gap-16">
          {" "}
          <div className="place-content-center grid  mt-1 max-w-fit min-h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="19"
              viewBox="0 0 93 19"
              fill="none"
            >
              <g clipPath="url(#clip0_1_3)">
                <path
                  d="M8.288 1.44H0.799999V18H3.08V12.408H8.288C11.48 12.408 13.904 10.056 13.904 6.936C13.904 3.792 11.48 1.44 8.288 1.44ZM8.216 9.48H3.08V4.368H8.216C10.208 4.368 11.552 5.4 11.552 6.936C11.552 8.448 10.208 9.48 8.216 9.48ZM25.8543 5.76V8.64C24.9423 6.72 23.1903 5.472 20.9823 5.472C17.5263 5.472 14.9583 8.232 14.9583 11.88C14.9583 15.528 17.5263 18.288 20.9823 18.288C23.1903 18.288 24.9423 17.04 25.8543 15.12V18H27.9663V5.76H25.8543ZM21.5103 15.456C19.0143 15.456 17.1423 13.92 17.1423 11.88C17.1423 9.84 19.0143 8.304 21.5103 8.304C23.9823 8.304 25.8543 9.84 25.8543 11.88C25.8543 13.92 23.9823 15.456 21.5103 15.456ZM33.3059 8.856V5.76H31.1699V18H33.3059V12.48C33.3059 10.296 34.9859 9.024 37.9619 9.024V5.568C35.8739 5.568 34.2179 6.84 33.3059 8.856ZM49.9481 5.76V8.64C49.0361 6.72 47.2841 5.472 45.0761 5.472C41.6201 5.472 39.0521 8.232 39.0521 11.88C39.0521 15.528 41.6201 18.288 45.0761 18.288C47.2841 18.288 49.0361 17.04 49.9481 15.12V18H52.0601V5.76H49.9481ZM45.6041 15.456C43.1081 15.456 41.2361 13.92 41.2361 11.88C41.2361 9.84 43.1081 8.304 45.6041 8.304C48.0761 8.304 49.9481 9.84 49.9481 11.88C49.9481 13.92 48.0761 15.456 45.6041 15.456ZM55.2637 18H57.3997V0.719997H55.2637V18ZM60.5606 18H62.6966V0.719997H60.5606V18ZM76.0574 5.76V8.64C75.1454 6.72 73.3934 5.472 71.1854 5.472C67.7294 5.472 65.1614 8.232 65.1614 11.88C65.1614 15.528 67.7294 18.288 71.1854 18.288C73.3934 18.288 75.1454 17.04 76.0574 15.12V18H78.1694V5.76H76.0574ZM71.7134 15.456C69.2174 15.456 67.3454 13.92 67.3454 11.88C67.3454 9.84 69.2174 8.304 71.7134 8.304C74.1854 8.304 76.0574 9.84 76.0574 11.88C76.0574 13.92 74.1854 15.456 71.7134 15.456ZM92.6531 5.76H89.9651L86.6771 10.08H86.1731L82.8611 5.76H80.3891L84.6851 11.784L80.2211 18H82.9091L86.2451 13.68H86.7731L90.1331 18H92.6291L88.2371 11.904L92.6531 5.76Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3">
                  <rect width="93" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex-col items-start flex gap-4 md:gap-6">
            <h5 className=" text-xl md:text-2xl font-medium">HELP</h5>
            <ul className="flex-col flex items-start  gap-2 sm:gap-3 md:gap-4">
              <li className="text-[#7575758f] text-lg md:text-xl">HOME</li>
              <li className="text-[#7575758f] text-lg md:text-xl">ABOUT</li>
              <li className="text-[#7575758f] text-lg md:text-xl">PRESS</li>
              <li className="text-[#7575758f] text-lg md:text-xl">BLOG</li>
            </ul>
          </div>
          <div className="flex-col flex items-start gap-4 md:gap-6">
            <h5 className="md:text-2xl text-xl font-medium">SOCIAL</h5>
            <ul className="flex-col items-start flex gap-4">
              <li className="text-[#7575758f] text-lg md:text-xl">FACEBOOK</li>
              <li className="text-[#7575758f] text-lg md:text-xl">INSTAGRAM</li>
              <li className="text-[#7575758f] text-lg md:text-xl">TWITTER</li>
            </ul>
          </div>
        </div>
        <div className="flex-center-col items-start mt-10 md:mt-0 gap-6 md:gap-16 w-[75%] md:w-[35%]">
          <h4>NEWSLETTER</h4>
          <div className="flex justify-between border-b-1 w-full pb-3">
            <h4 className="text-xl">EMAIL</h4>
            <div className="flex gap-1">
              <h5 className="text-xl">SUBMIT</h5>
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
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
