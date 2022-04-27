import Icon from "../../../assets/icons/aeropay-3.svg";
import IconDisbale from "../../../assets/icons/aeropay-2.svg";

interface props {
    type: "reedem" | "disable";
    processing: boolean;
    points?: string | number;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const ButtonProduct = ({ type, points, processing, onClick }: props) => {

    if (type === "reedem") {
        return (
            <>
                {
                    processing ?
                        <button className="w-full rounded-2xl p-4 gradient-button-active font-Montserrat-Medium text-[18px] opacity-70" disabled>
                            < div className="flex flex-row space-x-1 justify-center items-center" >
                                <span className="text-white">Processing</span>
                                <span>
                                    <span className="loader">
                                        <span className="dot dot-1"></span>
                                        <span className="dot dot-2"></span>
                                        <span className="dot dot-3"></span>
                                    </span>
                                </span>
                            </div >
                        </button >
                        :
                        <button
                            className="w-full rounded-2xl p-4 gradient-button-active font-Montserrat-Medium text-[18px] opacity-75 hover:shadow-lg transition duration-300 hover:shadow-indigo-500/50 hover:opacity-100"
                            onClick={onClick}
                        >
                            <div className="flex flex-row space-x-2 justify-center">
                                <span className="text-white">Redeem for</span> <img src={Icon} alt="Icon" /> <span className="text-white">{points}</span>
                            </div>
                        </button>
                }
            </>
        )
    } else if (type === "disable") {
        return (
            <button disabled className="w-full rounded-2xl p-4 shadow-sm bg-[#E6EDF7] font-Montserrat-Medium text-[18px]">
                <div className="flex flex-row space-x-2 justify-center">
                    <span className="text-slate-500">You need</span> <img src={IconDisbale} alt="Icon" className="text-slate" /> <span className="text-slate-500">{points}</span>
                </div>
            </button>
        )
    } else {
        return (
            <>
            </>
        )
    }


}

export default ButtonProduct;