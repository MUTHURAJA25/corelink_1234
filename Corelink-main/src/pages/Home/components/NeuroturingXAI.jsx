import React from "react";

const NeuroturingXAI = () => {
  const features = [
    {
      number: "01",
      title: "Merchant Lifecycle Management",
      description: "Automated onboarding and lifecycle control",
    },
    {
      number: "02",
      title: "API Banking Enablement",
      description: "Seamless bank API integration",
    },
    {
      number: "03",
      title: "Operational Automation",
      description: "Intelligent workflow automation",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden lg:px-0 px-5 py-14 text-white">
      {/* Bottom-left glow */}
      {/* <img
        src={bg}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto min-h-full w-full object-cover object-left-bottom"
      /> */}

      <div className="relative mx-auto grid w-full max-w-[1820px] items-start gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:gap-[70px] xl:gap-[100px]">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[760px]">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 fade-up">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>INTRODUCING</span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[40px]
              font-bold
              leading-[1.1]
              tracking-[-0.48px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[48px]
              fade-up
            "
          >
            Connected{" "}
            <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">
            Banking Platform
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-[10px]
              max-w-[720px]
              text-[16px]
              font-normal
              tracking-[-0.2px]
              text-[#B3B3B3]
              sm:text-[17px]
              md:text-[19px]
              lg:text-[18px]
              fade-up
            "
          >
            One intelligent platform for merchant onboarding, payment
            orchestration, API banking, transaction monitoring, and programme
            management.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex w-full flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                flex
                
                w-full
                items-center
                gap-4
                rounded-[20px]
                border
                border-[#FFFFFF1A]
                px-4
                py-5
                
                sm:gap-5
                sm:rounded-[22px]
                sm:px-6
                
                md:gap-6
                md:px-7
                lg:gap-7
                lg:rounded-[20px]
                lg:px-4
                lg:py-3
                fade-left
              "
            >
              {/* Number */}
              <div
                className="
    flex
    h-[20px]
    w-[20px]
    md:h-[24px]
    md:w-[24px]
    shrink-0
    items-center
    justify-center
    rounded-full
    bg-white
    text-black
  "
              >
                <span className=" text-[11px] font-bold sm:text-[12px] md:text-[14px]">
                  {feature.number}
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3
                  className="
                    text-[16px]
                    font-bold
                    leading-[24px]
                    tracking-[-0.2px]
                    sm:text-[19px]
                    sm:leading-[27px]
                    md:text-[21px]
                    md:leading-[29px]
                    lg:text-[20px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    
                    text-[13px]
                    leading-[20px]
                    text-[#8F8F8F]
                    sm:text-[14px]
                    sm:leading-[22px]
                    md:text-[16px]
                    md:leading-[24px]
                    lg:text-[16px]
                    
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeuroturingXAI;
