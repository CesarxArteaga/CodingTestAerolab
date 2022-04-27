import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Toast from "../../shared-components/toast";
import { useRedeemMutation } from "../../slices/apiSlice";
import { setRefresh } from "../../slices/slice";
import { Product } from "../../types/products.interface";
import ButtonProduct from "./ButtonProduct";

interface props {
    product?: Product;
    className?: string;
    show?: boolean;
}

const CardProduct = ({ product, className, show }: props) => {

    const { user } = useAppSelector(state => state.appSlice);
    const dispatch = useAppDispatch();

    const [redeem, { isLoading, isSuccess, isError }] = useRedeemMutation();

    const handleRedeem = async () => {
        await redeem({
            productId: product?._id!
        });
    }

    useEffect(() => {
        if (isSuccess) {
            // toast.success(`${product?.name} redeemed successfully`)
            toast((t) => (
                <Toast type="success" productName={product?.name} close={() => toast.dismiss(t.id)} />
            ));
            dispatch(setRefresh(true))
        } else {
            dispatch(setRefresh(false))
        }

        if (isError) {
            toast((t) => (
                <Toast type="error" close={() => toast.dismiss(t.id)} />
            ));
        }

    }, [isSuccess, isError])


    return (
        <div className={className}>
            <div className="border rounded-2xl border-slate-200 h-[431px] transition duration-300 hover:shadow-2xl">
                <div className="h-[344px] border-b-[1px] border-slate-200 flex items-center justify-center">
                    <img className="h-[204px]" style={{objectFit: "contain"}} src={product?.img.hdUrl} alt="product" />
                </div>
                <div className="p-4 flex items-center">
                    <div>
                        <h3 className="font-Montserrat-Medium text-[18px]">{product?.name || "Product Name"}</h3>
                        <p className="font-Montserrat-Medium uppercase text-slate-400 text-[14px]">{product?.category || "Product Type"}</p>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <ButtonProduct
                    type={`${user?.points! >= product?.cost! ? "reedem" : "disable"}`}
                    processing={isLoading}
                    points={product?.cost}
                    onClick={handleRedeem}
                />
            </div>
        </div>
    )
}

export default CardProduct;