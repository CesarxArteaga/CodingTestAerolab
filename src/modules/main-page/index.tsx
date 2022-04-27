import Navbar from "../shared-components/navbar";
import Hero from "../shared-components/hero";
import Catalog from "../catalog";
import { useGetUserQuery } from "../slices/apiSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setRefresh, setUser } from "../slices/slice";
import Footer from "../shared-components/footer";

const Landing = () => {

    const { refresh } = useAppSelector(state => state.appSlice);
    const dispatch = useAppDispatch();
    const { data, isSuccess, refetch } = useGetUserQuery();

    //Save the userInfo to Store
    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setUser(data));
        }
    }, [data, isSuccess])

    //When add or remove points refetch userInfo
    useEffect(() => {
        if (refresh) {
            refetch();
            dispatch(setRefresh(false));
        }
    }, [refresh])

    return (
        <div className="">
            <Navbar />
            <Hero />
            <Catalog />
            <Footer />
        </div>
    )
}

export default Landing;