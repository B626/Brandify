import Link from "next/link";
import Image from "next/image";
import bg from "@/assets/bg.png";
import arrowDown from "@/assets/icons/arrow-down.svg"
import intro1 from "@/assets/intro/1.png";
import intro2 from "@/assets/intro/2.png";
import topRightWordBlur from "@/assets/intro/top-right-word-blur.png"
import bottomLeftAreaBlur from "@/assets/intro/bottom-left-area-blur.png";
import resultsTitleBlur from "@/assets/results/blur.png";
import rightAngle from "@/assets/icons/right-angle.svg"
import rightAnglePurple from "@/assets/icons/right-angle-puple.svg";

export default function Home() {
  return (
    <div className="bg-[#000] text-[#fff] min-h-[100vh] font-['almarai'] font-[400] overflow-hidden relative">
      <div>
        <header className="p-[42px_0] relative z-[1]">
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
              <Image src={arrowDown} alt="change lang" width={19} height={19} />
            </div>
          </div>
        </header>
        <main className="relative z-[1]">
          <section className="p-[50px_0_105px]">
            <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
              <div className="flex justify-between">
                <h1 className="font-['aurora'] text-[250px] uppercase leading-[100%]">
                  Brand
                </h1>
                <div className="flex flex-col justify-around text-[#A0A0A0] text-[16px]">
                  <p>
                    We create innovative marketing strategies that connect
                    brands with their audiences. From dynamic digital campaigns
                    to targeted solutions, our expertise ensures your business
                    stands out in a crowded marketplace.
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
                    className="flex self-start p-[20px] rounded-[42px] border-[#6448FF] border-[4px] tracking-[2px] pb-[25px]"
                  >
                    Discover right now
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
                      <h3 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                        Data-Driven <br /> Strategies
                      </h3>
                    </div>
                    <p className="text-[#A0A0A0] max-w-[293px]">
                      We combine creativity with analytics to ensure measurable
                      success for every initiative.
                    </p>
                  </div>
                  <div className="w-[149px] h-[149px] flex items-center justify-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118530,#43139630,#4a15a730,#5217b930,#5a19cb30)] rounded-[15px]">
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
                    <h3 className="font-[700] text-[25px] uppercase leading-[100%]">
                      Submit a <br /> Request
                    </h3>
                  </div>
                  <div className="relative top-[-30px] flex">
                    <p className="text-[#A0A0A0] max-w-[260px] absolute bottom-[25px] left-[-280px] z-1">
                      Our team crafts visually stunning and emotionally resonant
                      campaigns tailored to your audience.
                    </p>
                    <div className="w-[359px] h-[359px] flex items-center relative backdrop-blur-[10px] bg-[linear-gradient(to_right_bottom,#3b118595,#43139695,#4a15a795,#5217b995,#5a19cb95)] rounded-[15px]">
                      <h3 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                        Creative <br /> Campaigns That <br /> Inspire
                      </h3>
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
                      <h3 className="ml-[22px] font-[700] text-[25px] uppercase leading-[100%]">
                        Seamless <br /> Execution
                      </h3>
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
          <section className="p-[105px_0]">
            <div className="max-w-[1400px] mx-auto my-0 relative flex flex-col justify-between">
              <div className="flex gap-[20px] mb-[120px]">
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
                      remarkable success through tailored marketing strategies.
                    </p>
                    <Image
                      src={resultsTitleBlur}
                      width={420}
                      height={98}
                      className="absolute h-[98px] top-[-15px] right-[-35px]"
                      alt="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="relative z-[1]"></footer>
      </div>
      <Image
        src={bg}
        width={1440}
        height={2500}
        className="absolute top-[0] left-[0] w-[100vw] z-[0]"
        alt="background"
      />
    </div>
  );
}
