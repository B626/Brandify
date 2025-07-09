"use client"

import { useRef } from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperCore from "swiper";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";
import bg from "@/assets/bg.png";
import arrowDown from "@/assets/icons/arrow-down.svg";
import rightAngleArrow from "@/assets/icons/right-angle-arrow.svg";
import intro1 from "@/assets/intro/1.png";
import intro2 from "@/assets/intro/2.png";
import topRightWordBlur from "@/assets/intro/top-right-word-blur.png";
import bottomLeftAreaBlur from "@/assets/intro/bottom-left-area-blur.png";
import resultsTitleBlur from "@/assets/results/blur.png";
import rightAngle from "@/assets/icons/right-angle.svg";
import rightAnglePurple from "@/assets/icons/right-angle-puple.svg";
import acuteAngleArrow from "@/assets/icons/acute-angle-arrow.svg";
// import acuteAngleArrowPurple from "@/assets/icons/acute-angle-arrow-purple.svg";
import results1 from "@/assets/results/case1.jpg";
import img from "@/assets/contact/did.png";

import team1 from "@/assets/team/1.jpg";
import team2 from "@/assets/team/2.jpg";
import team3 from "@/assets/team/3.jpg";
import team4 from "@/assets/team/4.jpg";


export default function Home() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const sectionRef = useRef();
  const casesRef = useRef([]);
  const containerRef = useRef();

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      // Pin the section while scrolling through cases
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${containerRef.current.scrollHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      // Create ScrollTriggers for each case
      gsap.utils.toArray(".case-result").forEach((caseEl, index) => {
        ScrollTrigger.create({
          trigger: caseEl,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveCase(index),
          onEnterBack: () => setActiveCase(index),
          markers: true, // Remove in production
        });

        // Animation for each case
        gsap.from(caseEl, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: caseEl,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef }
  ); // scope ensures all selectors are within sectionRef

  const scrollToCase = (index) => {
    const caseElement = casesRef.current[index];
    if (caseElement) {
      gsap.to(containerRef.current, {
        scrollTo: { y: caseElement.offsetTop - 100 },
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  };
  return (
    <>
      <div className="bg-[#000] text-[#fff] min-h-[100vh] font-['almarai'] font-[400] leading-[110%] overflow-hidden relative">
        <div>
          <header
            className={`p-[42px_0] fixed top-0 right-0 w-[100%] transition-[0.2s] duration-[ease] z-[2] bg-[#000]  ${
              isScrolled ? `border-b-[1px] border-[#292929]` : `border-b-[0]`
            }`}
          >
            <div className="max-w-[1400px] mx-auto my-0 relative flex justify-between items-center">
              <p className="text-[#6448FF] text-[20px] font-[700] uppercase">
                Brandify
              </p>
              <nav className="text-[#787878] text-[16px] flex gap-[84px] items-center">
                <Link href="/">What we offer</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Reviews</Link>
                <Link href="/">How we work</Link>
                <Link href="/">Contacts</Link>
              </nav>
              <Link href="/" className="tracking-[10px] text-[#6448FF]">
                [DISCOVER]
              </Link>
              <div className="flex items-center cursor-pointer">
                <p>EN</p>
                <Image
                  src={arrowDown}
                  alt="change lang"
                  width={19}
                  height={19}
                />
              </div>
            </div>
          </header>
          <main className="relative z-[1]">
            <section className="p-[150px_0_105px]">
              <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
                <div className="flex justify-between">
                  <h1 className="intro-h1 font-['aurora'] text-[250px] uppercase leading-[100%]">
                    Brand
                  </h1>
                  <div className="flex flex-col justify-around text-[#A0A0A0] text-[16px]">
                    <p>
                      We create innovative marketing strategies that connect
                      brands with their audiences. From dynamic digital
                      campaigns to targeted solutions, our expertise ensures
                      your business stands out in a crowded marketplace.
                    </p>
                    <p>
                      Blending creativity with data, we deliver campaigns that
                      inspire and perform.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-['aurora'] text-[250px] uppercase leading-[100%]">
                      Ify
                    </h1>
                    <Image
                      src={topRightWordBlur}
                      alt="blur"
                      className="absolute top-[8px] right-[-140px] pointer-events-none"
                      width={400}
                      height={225}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col justify-between flex-[0_1_400px] h-[355px] relative">
                    <p className="text-[16px] pt-[25px]">
                      Let us help you redefine possibilities and unlock your
                      brand’s full potential with tailored marketing strategies
                      designed to drive growth and engagement.
                    </p>
                    <Link
                      href={"/"}
                      className="anim-circle-btn overflow-hidden relative flex self-start p-[20px] rounded-[42px] border-[#6448FF] border-[4px] tracking-[2px] pb-[25px] leading-[100%]"
                    >
                      <span className="z-2">Discover right now</span>
                    </Link>
                    <Image
                      src={bottomLeftAreaBlur}
                      alt="blur"
                      className="absolute top-[8px] left-[-140px] pointer-events-none h-[355px]"
                      width={448}
                      height={355}
                    />
                  </div>
                  <div className="flex gap-[24px]">
                    <Image
                      src={intro1}
                      alt="change lang"
                      width={265}
                      height={355}
                    />
                    <Image
                      src={intro2}
                      alt="change lang"
                      width={655}
                      height={355}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="p-[105px_0]">
              <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
                <div className="flex flex-col justify-center gap-[13px]">
                  <div className="flex gap-[14px] items-end">
                    <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%]">
                      Empowering
                    </h2>
                    <p className="text-[#A0A0A0] text-[16px] max-w-[270px] leading-[140%]">
                      See how we’ve helped businesses like yours achieve
                      remarkable success through tailored marketing strategies.
                    </p>
                  </div>
                  <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%] text-center">
                    Brands Through
                  </h2>
                  <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%] text-end">
                    Innovation
                  </h2>
                </div>
                <div className="flex">
                  <div className="flex gap-[20px] justify-between w-[100%]">
                    <div className="relative top-[-200px] flex flex-col gap-[20px]">
                      <div className="w-[293px] h-[293px] flex items-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118595,#43139695,#4a15a795,#5217b995,#5a19cb95)] rounded-[15px]">
                        <div>
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute top-[22px] left-[22px]"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute top-[22px] right-[22px] rotate-90"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute bottom-[22px] right-[22px] rotate-180"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute bottom-[22px] left-[22px] rotate-270"
                            alt="arrow"
                          />
                        </div>
                        <h4 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                          Data-Driven <br /> Strategies
                        </h4>
                      </div>
                      <p className="text-[#A0A0A0] max-w-[293px]">
                        We combine creativity with analytics to ensure
                        measurable success for every initiative.
                      </p>
                    </div>
                    <Link
                      href={"/"}
                      className="w-[149px] h-[149px] flex items-center justify-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118530,#43139630,#4a15a730,#5217b930,#5a19cb30)] rounded-[15px]"
                    >
                      <div>
                        <Image
                          src={rightAnglePurple}
                          width={12}
                          height={11.5}
                          className="absolute top-[-15px] left-[-15px]"
                          alt="arrow"
                        />
                        <Image
                          src={rightAnglePurple}
                          width={12}
                          height={11.5}
                          className="absolute top-[-15px] right-[-15px] rotate-90"
                          alt="arrow"
                        />
                        <Image
                          src={rightAnglePurple}
                          width={12}
                          height={11.5}
                          className="absolute bottom-[-15px] right-[-15px] rotate-180"
                          alt="arrow"
                        />
                        <Image
                          src={rightAnglePurple}
                          width={12}
                          height={11.5}
                          className="absolute bottom-[-15px] left-[-15px] rotate-270"
                          alt="arrow"
                        />
                      </div>
                      <h4 className="font-[700] text-[25px] uppercase leading-[100%]">
                        Submit a <br /> Request
                      </h4>
                    </Link>
                    <div className="relative top-[-30px] flex">
                      <p className="text-[#A0A0A0] max-w-[260px] absolute bottom-[25px] left-[-280px] z-1">
                        Our team crafts visually stunning and emotionally
                        resonant campaigns tailored to your audience.
                      </p>
                      <div className="w-[359px] h-[359px] flex items-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118595,#43139695,#4a15a795,#5217b995,#5a19cb95)] rounded-[15px]">
                        <h4 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                          Creative <br /> Campaigns That <br /> Inspire
                        </h4>
                      </div>
                    </div>
                    <div className="relative top-[75px] flex flex-col gap-[20px] items-end">
                      <div className="w-[293px] h-[293px] flex items-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118595,#43139695,#4a15a795,#5217b995,#5a19cb95)] rounded-[15px]">
                        <div>
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute top-[22px] left-[22px]"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute top-[22px] right-[22px] rotate-90"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute bottom-[22px] right-[22px] rotate-180"
                            alt="arrow"
                          />
                          <Image
                            src={rightAngle}
                            width={12}
                            height={11.5}
                            className="absolute bottom-[22px] left-[22px] rotate-270"
                            alt="arrow"
                          />
                        </div>
                        <h4 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                          Seamless <br /> Execution
                        </h4>
                      </div>
                      <p className="text-[#A0A0A0] max-w-[260px] text-right">
                        From concept to delivery, we handle every detail so you
                        can focus on results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-[105px_0]" ref={sectionRef}>
              <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
                <div className="flex gap-[20px] mb-[200px]">
                  <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%] whitespace-nowrap">
                    <span className="text-[#6448FF]">Real </span>Results,
                  </h2>
                  <div className="flex flex-row-reverse items-center relative top-[130px]">
                    <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%] whitespace-nowrap">
                      <span className="text-[#6448FF]">Real </span>Impact
                    </h2>
                    <div className="absolute left-[-300px]">
                      <p className="text-right max-w-[270px]">
                        See how we’ve helped businesses like yours achieve
                        remarkable success through tailored marketing
                        strategies.
                      </p>
                      <Image
                        src={resultsTitleBlur}
                        width={420}
                        height={98}
                        className="absolute h-[98px] top-[-25px] right-[-35px]"
                        alt="blur"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-[37px]">
                    {/* <div
                      className="results-nav-item w-[62px] h-[62px] flex justify-center items-center cursor-pointer
                    rounded-[100%] border-[1px] border-[#6448FF] text-[#6448FF] font-['aurora'] font-[700] text-[30px]"
                    >
                      1
                    </div>
                    <div
                      className="results-nav-item w-[62px] h-[62px] flex justify-center items-center cursor-pointer
                    rounded-[100%] border-[1px] border-[#6448FF] text-[#6448FF] font-['aurora'] font-[700] text-[30px]"
                    >
                      2
                    </div>
                    <div
                      className="results-nav-item w-[62px] h-[62px] flex justify-center items-center cursor-pointer
                    rounded-[100%] border-[1px] border-[#6448FF] text-[#6448FF] font-['aurora'] font-[700] text-[30px]"
                    >
                      3
                    </div> */}
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className={`results-nav-item w-[62px] h-[62px] flex justify-center items-center cursor-pointer
                  rounded-[100%] border-[1px] ${
                    activeCase === index
                      ? "bg-[#6448FF] text-white"
                      : "border-[#6448FF] text-[#6448FF]"
                  } 
                  font-['aurora'] font-[700] text-[30px] transition-colors duration-300`}
                        onClick={() => scrollToCase(index)}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex flex-col gap-[160px] overflow-y-auto snap-y snap-mandatory"
                    ref={containerRef}
                  >
                    <div
                      className="case-result flex justify-between snap-start"
                      ref={(el) => (casesRef.current[0] = el)}
                    >
                      <div>
                        <h3 className="font-['aurora'] text-[45px] font-[700] uppercase max-w-[646px] leading-[115%] mb-[40px]">
                          Revolutionizing Social Engagement for{" "}
                          <span className="text-[#6448FF]">XFashion 1</span>
                        </h3>
                        <div className="flex flex-col gap-[55px] mb-[55px]">
                          <div className="flex gap-[14px] max-w-[395px] items-start">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              XFashion struggled to connect with their audience
                              on social media and needed a strategy to boost
                              engagement.
                            </p>
                          </div>
                          <div className="flex gap-[14px] max-w-[395px] items-start ml-[30px]">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              We developed a content calendar featuring
                              interactive posts, influencer collaborations, and
                              targeted ad campaigns.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h6 className="uppercase text-[#6448FF] font-['aurora'] font-[700] text-[20px]">
                            Result
                          </h6>
                          <p className="max-w-[395px] leading-[110%]">
                            Social media engagement increased by 150%, with a
                            20% rise in follower count and higher customer
                            interaction rates.
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src={results1}
                          width={405}
                          height={512}
                          className=""
                          alt="Xfashion"
                        />
                      </div>
                    </div>
                    <div
                      className="case-result flex justify-between snap-start"
                      ref={(el) => (casesRef.current[0] = el)}
                    >
                      <div>
                        <h3 className="font-['aurora'] text-[45px] font-[700] uppercase max-w-[646px] leading-[115%] mb-[40px]">
                          Revolutionizing Social Engagement for{" "}
                          <span className="text-[#6448FF]">XFashion 2</span>
                        </h3>
                        <div className="flex flex-col gap-[55px] mb-[55px]">
                          <div className="flex gap-[14px] max-w-[395px] items-start">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              XFashion struggled to connect with their audience
                              on social media and needed a strategy to boost
                              engagement.
                            </p>
                          </div>
                          <div className="flex gap-[14px] max-w-[395px] items-start ml-[30px]">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              We developed a content calendar featuring
                              interactive posts, influencer collaborations, and
                              targeted ad campaigns.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h6 className="uppercase text-[#6448FF] font-['aurora'] font-[700] text-[20px]">
                            Result
                          </h6>
                          <p className="max-w-[395px] leading-[110%]">
                            Social media engagement increased by 150%, with a
                            20% rise in follower count and higher customer
                            interaction rates.
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src={results1}
                          width={405}
                          height={512}
                          className=""
                          alt="Xfashion"
                        />
                      </div>
                    </div>
                    <div
                      className="case-result flex justify-between snap-start"
                      ref={(el) => (casesRef.current[0] = el)}
                    >
                      <div>
                        <h3 className="font-['aurora'] text-[45px] font-[700] uppercase max-w-[646px] leading-[115%] mb-[40px]">
                          Revolutionizing Social Engagement for{" "}
                          <span className="text-[#6448FF]">XFashion 3</span>
                        </h3>
                        <div className="flex flex-col gap-[55px] mb-[55px]">
                          <div className="flex gap-[14px] max-w-[395px] items-start">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              XFashion struggled to connect with their audience
                              on social media and needed a strategy to boost
                              engagement.
                            </p>
                          </div>
                          <div className="flex gap-[14px] max-w-[395px] items-start ml-[30px]">
                            <Image
                              src={rightAngleArrow}
                              width={14}
                              height={14}
                              className=""
                              alt="arrow"
                            />
                            <p className="text-[#A0A0A0]">
                              We developed a content calendar featuring
                              interactive posts, influencer collaborations, and
                              targeted ad campaigns.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h6 className="uppercase text-[#6448FF] font-['aurora'] font-[700] text-[20px]">
                            Result
                          </h6>
                          <p className="max-w-[395px] leading-[110%]">
                            Social media engagement increased by 150%, with a
                            20% rise in follower count and higher customer
                            interaction rates.
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src={results1}
                          width={405}
                          height={512}
                          className=""
                          alt="Xfashion"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-[105px_0]">
              <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
                <h2 className="font-['aurora'] text-[50px] font-[700] uppercase leading-[110%] mb-[90px]">
                  Stories of <span className="text-[#6448FF]">success</span>,{" "}
                  <span className="text-[#6448FF]">satisfaction</span>, and
                  <span className="text-[#6448FF]"> trust</span> from our valued
                  partners.
                </h2>
                <div className="flex justify-between">
                  <p className="max-w-[137px] text-[#A0A0A0] lowercase">
                    Why Our Clients Love Working With Us
                  </p>
                  <div className="grid grid-cols-2 grid-rows-2 max-w-[1045px] min-h-[520px]">
                    <div className="p-[29px] flex gap-[28px] border-x-[1px] border-y-[1px] border-[#292929]">
                      <span className="text-[80px] font-['aurora'] font-[700] leading-[110%]">
                        200+
                      </span>
                      <p className="max-w-[150px] pt-[24px]">
                        successful projects completed
                      </p>
                    </div>
                    <div className="p-[29px] flex gap-[28px] border-y-[1px] border-r-[1px] border-[#292929]">
                      <span className="text-[80px] font-['aurora'] font-[700] leading-[110%]">
                        98%
                      </span>
                      <p className="max-w-[150px] pt-[24px]">
                        positive feedback on your services
                      </p>
                    </div>
                    <div className="p-[29px] flex gap-[28px] border-x-[1px] border-b-[1px] border-[#292929]">
                      <span className="text-[80px] font-['aurora'] font-[700] leading-[110%]">
                        5
                      </span>
                      <p className="max-w-[150px] pt-[24px]">
                        stars on major review platforms
                      </p>
                    </div>
                    <div className="p-[29px] flex flex-col gap-[28px] border-x-[1px] border-b-[1px] border-[#292929]">
                      <span className="text-[80px] text-[#6448FF] uppercase font-['aurora'] font-[700] leading-[110%]">
                        Your result
                      </span>
                      <div className="flex justify-between items-center">
                        <p className="max-w-[120px]">Might be the next</p>
                        <div className="flex items-center gap-[6px]">
                          <Link className="underline" href={"/"}>
                            Start the project
                          </Link>
                          <Image
                            src={rightAngleArrow}
                            width={10}
                            height={10}
                            className=""
                            alt="arrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-[105px_0]">
              <div className="max-w-[1400px] mx-auto my-0 relative">
                <div className="flex justify-between items-end mb-[55px]">
                  <div>
                    <h2 className="font-['aurora'] text-[80px] uppercase leading-[100%] mb-[10px]">
                      Team & leadership
                    </h2>
                    <p className="text-[#A0A0A0] max-w-[530px]">
                      We’re specialists from all across the world driven by bold
                      ideas and diverse perspectives in one place for you
                    </p>
                  </div>
                  <div className="flex gap-[18px]">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      className="team-nav-btn w-[62px] h-[62px] flex justify-center transition-[0.2s] duration-[ease]
                          items-center rounded-[100%] border-[1px] border-[#A0A0A0] cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <Image
                        src={acuteAngleArrow}
                        width={14}
                        height={14}
                        className=""
                        alt="<"
                      />
                    </button>
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      className="team-nav-btn w-[62px] h-[62px] flex justify-center transition-[0.2s] duration-[ease]
                        items-center rounded-[100%] border-[1px] border-[#A0A0A0] cursor-pointer"
                      aria-label="Next slide"
                    >
                      <Image
                        src={acuteAngleArrow}
                        width={14}
                        height={14}
                        className="rotate-180"
                        alt=">"
                      />
                    </button>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation]}
                  className="flex flex-row justify-between mb-[90px]"
                  navigation
                  spaceBetween={12}
                  slidesPerView={4}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  <SwiperSlide>
                    <Image
                      src={team1}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Isabella Lee"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Isabella Lee</h6>
                      <p className="text-[#A0A0A0]">Marketing Strategist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team2}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Sophia Carter"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Sophia Carter</h6>
                      <p className="text-[#A0A0A0]">Content Specialist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team3}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Ethan Miller"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Ethan Miller</h6>
                      <p className="text-[#A0A0A0]">Creative Director</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team4}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="James Thompson"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">James Thompson</h6>
                      <p className="text-[#A0A0A0]">Data Analyst</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team1}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Isabella Lee"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Isabella Lee</h6>
                      <p className="text-[#A0A0A0]">Marketing Strategist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team2}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Sophia Carter"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Sophia Carter</h6>
                      <p className="text-[#A0A0A0]">Content Specialist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team3}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="Ethan Miller"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">Ethan Miller</h6>
                      <p className="text-[#A0A0A0]">Creative Director</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={team4}
                      width={350}
                      height={434}
                      className="mb-[18px]"
                      alt="James Thompson"
                    />
                    <div className="flex flex-col gap-[3px]">
                      <h6 className="text-[18px]">James Thompson</h6>
                      <p className="text-[#A0A0A0]">Data Analyst</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="flex justify-between items-end">
                  <p className="text-[#A0A0A0] max-w-[270px]">
                    For each project, we form a team of a project manager,
                    marketing specialist, and a designer. You get a marketing
                    department for the price of one employee in-house.
                  </p>
                  <div className="flex items-center gap-[250px]">
                    <Link className="uppercase tracking-[5px]" href={"/"}>
                      [Instagram]
                    </Link>
                    <Link className="uppercase tracking-[5px]" href={"/"}>
                      [All team]
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-[105px_0] relative">
              <div className="max-w-[1400px] mx-auto my-0 relative">
                <h2 className="font-['aurora'] text-[110px] uppercase leading-[100%] mb-[80px]">
                  Let’s get in <br />{" "}
                  <span className="text-[#6448FF]">contact</span> with
                  <span className="text-[#6448FF]"> us</span>
                </h2>
                <div className="w-[530px] flex flex-col gap-[50px] ml-[140px] mb-[60px]">
                  <div className="grid grid-cols-2 grid-rows-2 gap-[50px]">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="text-[16px] font-['almarai'] h-[40px] border-b-[1px] border-[#545454] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Your email"
                      className="text-[16px] font-['almarai'] h-[40px] border-b-[1px] border-[#545454] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Your brand's revenue a month"
                      className="text-[16px] font-['almarai'] h-[40px] border-b-[1px] border-[#545454] outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Brands link on social media"
                      className="text-[16px] font-['almarai'] h-[40px] border-b-[1px] border-[#545454] outline-none"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-[100%] text-[16px] font-['almarai'] h-[40px] resize-none overflow-hidden outline-none border-b-[1px] border-[#545454]"
                  ></textarea>
                </div>
                <Link
                  href={"/"}
                  className="tracking-[5px] text-[18px] font-['almarai'] text-center w-[100%] flex justify-center"
                >
                  [SUBMIT]
                </Link>
              </div>
              <Image
                src={img}
                width={516}
                height={525}
                className="absolute bottom-[0] right-[0]"
                alt="not a role model, my bad"
              />
            </section>
          </main>
          <footer className="relative z-[1] bg-[#6448FF] p-[30px_0_45px]">
            <div className="max-w-[1400px] mx-auto my-0 relative">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="uppercase tracking-[5px] text-[#fff] mb-[25px]">
                    Social network
                  </h4>
                  <div className="flex flex-col gap-[6px]">
                    <Link href={"/"}>Facebook</Link>
                    <Link href={"/"}>Instagram</Link>
                    <Link href={"/"}>Youtube</Link>
                  </div>
                </div>
                <div>
                  <h4 className="uppercase tracking-[5px] text-[#fff] mb-[25px]">
                    Contacts
                  </h4>
                  <div className="flex flex-col gap-[6px]">
                    <Link href={"/"}>contact@brandify.com</Link>
                    <Link href={"/"}>+38 099 112 22 33</Link>
                  </div>
                </div>
                <span className="font-['aurora'] text-[50px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] uppercase">
                  Brandify
                </span>
              </div>
            </div>
          </footer>
        </div>
        <div className="absolute top-[0] left-[0] w-[100vw] z-[0]">
          <Image
            src={bg}
            width={1440}
            height={2500}
            className="w-[100vw] z-[0]"
            alt="background"
          />
          <Image
            src={bg}
            width={1440}
            height={2500}
            className="w-[100vw] z-[0]"
            alt="background"
          />
          <Image
            src={bg}
            width={1440}
            height={2500}
            className="w-[100vw] z-[0]"
            alt="background"
          />
        </div>
      </div>
    </>
  );
}
