import { useEffect, useState } from "react";
import Filter from "../main-page/components/Filter";
import { useGetProductsQuery } from "../slices/apiSlice";
import CardProduct from "./components/CardProduct";
import { Product } from "../types/products.interface";
import { categories } from "./constants/categories";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Element } from "react-scroll";


const Catalog = () => {

    const { data, isSuccess } = useGetProductsQuery();
    const [active, setActive] = useState<number>();
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState<Product[]>()

    const buttons = [
        { id: 1, label: "Most Recent", state: 'inactive' },
        { id: 2, label: "Lowest Price", state: 'inactive' },
        { id: 3, label: "Highest Price", state: 'inactive' },
    ]

    //Paginations variables
    let [currentPage, setCurrentPage] = useState<number>(1)
    let [productsPerPage, setRecordsPerPage] = useState<number>(16)
    let [totalPage, setTotalPage] = useState<number>(0);

    //Setting products to display
    useEffect(() => {
        if (data && isSuccess) {
            let temp = data.slice(0, productsPerPage);
            setProducts(temp);
            setTotalPage(Math.ceil(data.length / productsPerPage))
        }
    }, [data, isSuccess])


    //On filter change
    useEffect(() => {
        setActive(undefined);
        if (data && data.length > 0) {
            filterProducts(data, filter);
        }
    }, [filter])

    //Filter Method
    const filterProducts = async (data: Product[], filterWord: string) => {
        setCurrentPage(1)
        if (filterWord === "All Products") {
            setProducts(data.slice(0, productsPerPage))
            setTotalPage(Math.ceil(data?.length! / productsPerPage))
        } else {
            setProducts(data.filter(dt => dt.category === filterWord))
            setTotalPage(Math.ceil(products?.length! / productsPerPage))
        }
    }

    //Sort Methods
    const sortLow = async (products: Product[]) => {
        const arr = [...products];
        setProducts(arr.sort(
            function (a, b) {
                return a.cost - b.cost;
            }
        ));
    }

    const sortHigh = async (products: Product[]) => {
        const arr = [...products];
        setProducts(arr.sort(
            function (a, b) {
                return b.cost - a.cost;
            }
        ));
    }

    const sortRecent = async (products: Product[]) => {
        const arr = [...products];
        setProducts(arr.sort(
            function (a, b) {
                return a.name.localeCompare(b.name);
            }
        ));
    }

    //Sort Events
    useEffect(() => {
        switch (active) {
            case 1:
                sortRecent(products!);
                break;
            case 2:
                sortLow(products!);
                break;
            case 3:
                sortHigh(products!);
                break;
            default:
                break;
        }
    }, [active])

    //Pagination Methods
    const prevPage = () => {
        if (currentPage > 1) {
            const temp = currentPage - 1
            setCurrentPage(temp);
            changePage(temp);
        }
    }

    const nextPage = () => {
        if (currentPage < numPages() && currentPage < totalPage) {
            const temp = currentPage + 1
            setCurrentPage(temp);
            changePage(temp);
        }
    }

    const numPages = () => {
        return Math.ceil(data!.length / productsPerPage)
    }

    const changePage = (page: number) => {
        if (page <= 1) page = 1;
        if (page > numPages()) page = numPages();

        let temp: Product[] = []
        for (var i = (page - 1) * productsPerPage; i < (page * productsPerPage); i++) {
            temp.push(data![i]);
        }
        setProducts(temp);
    }

    return (
        <div className="relative max-w-[1464px] px-[1rem]" style={{ margin: "0 auto" }}>
            <div className="flex space-x-3 h-[38px] mb-[40px] md:mb-[60px] mt-[100px] md:mt-[160px]">
                <h2 className="font-Montserrat-Black text-[32px] text-[#176FEB]">TECH</h2>
                <h2 className="font-Montserrat-Black text-[32px] text-slate-800">PRODUCTS</h2>
                <Element name="productsElement"></Element>

            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full lg:w-[500px] md:border-r-2 md:border-slate-200 z-400">
                    <div className="flex flex-row space-x-1 items-center">
                        <p className="hidden lg:flex font-Montserrat-SemiBold text-slate-400 text-[16px] pr-2">Filter by: </p>
                        <Filter values={categories} setActive={setFilter} />
                    </div>
                </div>
                <div className="w-full lg:grow flex flex-row items-center justify-between text-[18px]">
                    <div className="w-full overflow-x-scroll lg:overflow-hidden mt-[10px] lg:mt-0" >
                        <div className="flex flex-row w-fit  space-x-3 items-center h-[64px]">
                            <p className="hidden lg:flex font-Montserrat-SemiBold text-[16px] text-slate-400 pl-4">Sort by: </p>
                            {
                                buttons.map(btn => (
                                    <div key={btn.id} className='h-[43px] w-[165px]'>
                                        <button
                                            className={`${active === btn.id ? "gradient-button-active" : "gradient-button-inactive"} w-full p-2 font-Montserrat-SemiBold rounded-xl`}
                                            onClick={() => {
                                                active === btn.id ? setActive(undefined) : setActive(btn.id)
                                            }}
                                        >
                                            <span className={`${active === btn.id ? "text-white" : "gradient-text"}`}>
                                                {btn.label}
                                            </span>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hidden lg:flex" >
                        <div className="border rounded-2xl border-slate-200 h-[64px] flex flex-wrap items-center justify-between px-[16px] w-[259px]">
                            <button onClick={prevPage}><ChevronLeftIcon className={`h-[40px] w-[40px] bg-[#E6EDF7] rounded-lg text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`} aria-hidden="true" /></button>
                            <div>
                                <span className="font-Montserrat-SemiBold text-slate-400">Page&nbsp;</span>
                                <span className="font-Montserrat-SemiBold gradient-text">{currentPage} of {totalPage} </span>
                            </div>

                            <button onClick={nextPage}><ChevronRightIcon className={`h-[40px] w-[40px] bg-[#E6EDF7] rounded-lg text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`} aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row box-border flex-wrap mt-10">
                {
                    isSuccess && products &&
                    products.map(prod => (
                        <CardProduct key={prod._id} className={`lg:basis-1/4 md:basis-1/3 sm:basis-1/1 md:pr-6 mb-[80px]`} product={prod} />
                    ))
                }
            </div>

            <div className=" h-[64px] flex flex-row items-center text-[18px] mb-[160px]">
                <div className="w-full flex justify-center">
                    <span className="font-Montserrat-SemiBold gradient-text">
                        {products?.length! * currentPage}
                        &nbsp;of&nbsp;
                        {totalPage === 1 ? products?.length : data?.length}
                    </span>
                    <span className="font-Montserrat-SemiBold text-slate-500">
                        &nbsp;products
                    </span>
                </div>
                <div>
                    <div className="border rounded-2xl border-slate-200 h-[64px] flex flex-wrap items-center justify-between px-[16px] w-[259px]">
                        <button onClick={prevPage}><ChevronLeftIcon className={`h-[40px] w-[40px] bg-[#E6EDF7] rounded-lg text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`} aria-hidden="true" /></button>
                        <div>
                            <span className="font-Montserrat-SemiBold text-slate-400">Page&nbsp;</span>
                            <span className="font-Montserrat-SemiBold gradient-text">{currentPage} of {totalPage} </span>
                        </div>

                        <button onClick={nextPage}><ChevronRightIcon className={`h-[40px] w-[40px] bg-[#E6EDF7] rounded-lg text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`} aria-hidden="true" /></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Catalog;