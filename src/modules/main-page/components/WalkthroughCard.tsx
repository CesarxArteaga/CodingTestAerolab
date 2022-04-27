
interface props {
    source: string;
    title: string;
    info: string;
    icon: string;
}

const WalkthroughCard = ({ source, title, info, icon }: props) => {
    return (
        <div className="border border-slate-200 rounded-3xl p-[12px] bg-white h-[676px]">
            <div className="border border-slate-200 rounded-3xl h-full bg-white" style={{ overflow: "hidden" }}>
                <div className="h-[410px] md:h-[498px]" style={styles.imgCard}>
                    <img src={source} alt="alt" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex items-center px-4 py-2">
                    <span className="p-1 rounded-md bg-slate-100 mr-3"> <img src={icon} alt="icon" className="h-[29px]" /></span>
                    <h2 className="uppercase font-Montserrat-Black gradient-text text-[32px] pr2">{title}</h2>
                </div>
                <div className="px-4">
                    <p className="font-Montserrat-SemiBold text-slate-400 text-[18px] md:w-[90%] lg:w-[75%]">{info}</p>
                </div>
            </div>
        </div>
    )
}

const styles = {
    imgCard: {
        width: "100%",
        background: "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
    }
}

export default WalkthroughCard;