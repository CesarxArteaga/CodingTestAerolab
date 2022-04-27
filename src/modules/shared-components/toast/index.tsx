
import SuccessIcon from "../../../assets/icons/system-success.svg";
import ErrorIcon from "../../../assets/icons/system-error.svg";
import CrossIcon from "../../../assets/icons/cross-active.svg";
import React, { useRef } from "react";


interface props {
    productName?: string;
    type: "success" | "error";
    close: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Toast = ({ type, productName, close }: props) => {

    let icon = "";
    let borderColor = "";
    let message = "";
    switch (type) {
        case "success":
            icon = SuccessIcon
            borderColor = "border-green-400"
            message = "redeemed successfully"
            break;
        case "error":
            icon = ErrorIcon
            borderColor = "border-orange-400"
            message = "There was a problem with the transaction"
            break;
        default:
            icon = ""
            borderColor = ""
            message = ""
            break;
    }

    return (
        <div className={`rounded-xl bg-white border ${borderColor} h-[80px] w-[532px] border-2 px-[27px] flex flex-row space-x-2 items-center justify-between`}>
            <div className="flex flex-row space-x-2 items-center">
                <span className="h-[26px]">
                    <img src={icon} alt="success" className="h-[26px]" />
                </span>
                <span>
                    {
                        type === "success" &&
                        <p className="font-Montserrat-SemiBold text-black-800">{productName} <span className="text-slate-400">{message}</span></p>
                    }
                    {
                        type === "error" &&
                        <p className="font-Montserrat-SemiBold text-slate-400">{message}</p>
                    }
                </span>
            </div>
            <button onClick={close} className="">
                <img src={CrossIcon} alt="close" />
            </button>
        </div>
    )
}

export default Toast;