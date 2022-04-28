import heroIllustration_desk from "../../../assets/illustrations/hero-desktop.png";
import WalkthroughCard from "../../main-page/components/WalkthroughCard";
import imgCard1 from '../../../assets/illustrations/walkthroug-1-desktop.png'
import imgCard2 from '../../../assets/illustrations/walkthroug-2-desktop.png'
import imgCard3 from '../../../assets/illustrations/walkthroug-3-desktop.png'
import iconCard1 from '../../../assets/icons/walkthrough-1.svg';
import iconCard2 from '../../../assets/icons/walkthrough-2.svg';
import iconCard3 from '../../../assets/icons/walkthrough-3.svg';
import { ArrowNarrowDownIcon } from '@heroicons/react/solid';
import Background from '../../../assets/illustrations/single-wave-pattern.svg';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Hero = () => {
    return (
        <div style={styles.background}>
            <div className="px-[2rem] max-w-[1464px]  h-full lg:h-[840px] flex flex-col items-center lg:flex-row md:flex-col" style={{ margin: '0 auto' }}>
                <div className=" z-[500] lg:basis-1/2 md:basis-1/1 sm:basis-1/1 h-fit lg:h-[577px]">
                    <h6 className="text-[16px] lg:text-[18px] text-center lg:text-left leading-[27px] tracking-[.25em] uppercase font-Montserrat-SemiBold text-slate-400 mb-[8px]">EXPLORE THE</h6>
                    <h1 className="text-[96px] text-center lg:text-left lg:text-[200px] font-Montserrat-Black leading-[80px] lg:leading-[160px] gradient-text gradient-text-animation">TECH</h1>
                    <h1 className="text-[96px] text-center lg:text-left lg:text-[200px] font-Montserrat-Black leading-[80px] lg:leading-[160px] text-slate-800">ZONE</h1>
                    <p className="text-[18px] text-center lg:text-left leading-[27px] font-Montserrat-SemiBold text-slate-400 mt-[24px]">Here you'll be able to exchange all of your hard-earned <br /> Aeropoints and exchange them for cool tech.</p>
                    <Link to="productsElement" smooth={true} duration={500}>
                        <button
                            className="w-full lg:w-[318px] mt-[60px]  h-[80px] gradient-button-active rounded-3xl flex items-center justify-center hover:shadow-lg transition duration-200 hover:shadow-indigo-500/50">
                            <div className="flex space-x-2">
                                <span className="text-white font-Montserrat-SemiBold text-[18px]">VIEW ALL PRODUCTS</span>
                                <span>
                                    <ArrowNarrowDownIcon className="transition duration-0 animate-bounce h-[28px] text-white" />
                                </span>
                            </div>
                        </button>
                    </Link>

                </div>
                <div className="hidden lg:flex md:relative basis-1/2 lg:h-[577px] ">
                    <div className="lg:absolute right-0 bottom-0 rounded-[104px] w-[722px] h-[700px]" style={{ mixBlendMode: "unset", overflow: "hidden" }}>
                        <img src={heroIllustration_desk} alt="hero" className="lg:absolute lg:flex md:hidden sm:hidden bottom-0 scale-125 z-[100]" />
                    </div>
                    <div className="lg:absolute lg:flex md:hidden sm:hidden right-0 bottom-0 rounded-[104px] w-[722px] h-[600px]" style={{ background: "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)", mixBlendMode: "multiply" }}>
                    </div>
                </div>
                <div className="mx-[-2rem] lg:relative lg:basis-1/2 md:basis-1/1 h-fit lg:h-[577px] overflow-hidden lg:hidden">
                    <img className="scale-150 mt-5" src={heroIllustration_desk} alt="hero" style={{ objectFit: "cover" }}  />
                </div>
            </div>
            <div className="relative py-[12px] md:pb-[40px] md:pt-[100px] flex flex-col space-x-1 h-fit lg:h-[721px] md:items-center md:justify-center">
                <div className="right-0 top-0 lg:right-auto lg:top-auto absolute w-full h-full lg:h-[528px]" style={{ background: "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)", mixBlendMode: "multiply" }}></div>
                <div className="max-w-[1464px] px-[1rem] flex flex-col lg:flex-row space-y-4" style={{ margin: '0 auto' }}>
                    <div className="z-10 basis-1/1 lg:basis-1/3 lg:rotate-[-5deg] lg:translate-x-10 lg:hover:-translate-y-6 ease-in-out duration-300 hover:z-40">
                        <WalkthroughCard icon={iconCard1} source={imgCard1} title="1—Browse" info="Browse our tech catalog with more than 20 top tech products" />
                    </div>
                    <div className="z-20 basis-1/1 lg:basis-1/3 lg:-translate-y-[40px] lg:hover:-translate-y-[55px] ease-in-out duration-300 hover:z-40">
                        <WalkthroughCard icon={iconCard3} source={imgCard2} title="2—Choose" info="Exchange your hard earned AeroPoints for the item you want" />
                    </div>
                    <div className="z-30 basis-1/1 lg:basis-1/3 lg:rotate-[5deg] lg:-translate-x-10 lg:hover:-translate-y-6 ease-in-out duration-300">
                        <WalkthroughCard icon={iconCard2} source={imgCard3} title="3—Enjoy!" info="All done, you can relax! We'll take care of delivery of your tech item!" />
                    </div>
                </div>
            </div>

        </div>

    )
}

const styles = {
    background: {
        backgroundImage: "url(" + Background + ")",
        margin: "0 auto",
    }
}

export default Hero;