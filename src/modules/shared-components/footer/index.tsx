import GitIcon from "../../../assets/icons/github-default.svg";

const Footer = () => {
    return (
        <div className="h-[200px] flex justify-center items-center">
            <a href="" className="flex flex-row space-x-2 items-center h-fit">
                <img src={GitIcon} alt="git" className="w-[27.97px]"/>
                <span className="font-Montserrat-SemiBold text-slate-500 text-[18px]">View this repository</span>
            </a>
        </div>
    )
}

export default Footer;