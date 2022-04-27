import { Fragment, useEffect, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import aeroPay1 from "../../assets/icons/aeropay-1.svg"
import aeroPay2 from "../../assets/icons/aeropay-2.svg"
import aeroPay3 from "../../assets/icons/aeropay-3.svg"
import { useAddPointsMutation } from '../slices/apiSlice'
import { setRefresh } from '../slices/slice'
import Drawer from '../shared-components/drawer'

const opts = [
    { id: 1, label: "1000", value: 1000 },
    { id: 2, label: "5000", value: 5000 },
    { id: 3, label: "7500", value: 7500 },
]

const Aeropay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const referenceElement = useRef();
    const popperElement = useRef();
    const [active, setActive] = useState<number>();
    let { styles, attributes } = usePopper(referenceElement.current, popperElement.current)

    const { user } = useAppSelector(state => state.appSlice);

    const [addPoints, { isLoading, isSuccess }] = useAddPointsMutation();
    const dispatch = useAppDispatch();

    const handleClick = async () => {
        await addPoints({
            amount: opts.find(opt => opt.id === active)?.value!
        })
    }

    const handleOpen = () =>{
        setIsOpen(true)
    }
    useEffect(() => {
        isSuccess ? dispatch(setRefresh(true)) : dispatch(setRefresh(false))
        setActive(undefined)
    }, [isSuccess])


    return (
        <div className='relative w-[312px] z-[500]'>
            <Popover>
                {({ open }) => (
                    <>
                        <div className='w-full flex flex-row justify-end'>
                            <div>
                                <Popover.Button ref={referenceElement.current}
                                    className={`${open ? '' : 'text-opacity-90'} h-[48px] border border-slate-300 group px-3 py-2 rounded-2xl inline-flex items-center text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <span className='mr-2 h-[32px]'><img className='h-full' src={aeroPay1} alt="icon" /></span>
                                    <span className='gradient-text font-Montserrat-SemiBold text-[18px]'>{user?.points}</span>
                                    {
                                        open ?
                                            <ChevronUpIcon
                                                className={`${open ? '' : 'text-opacity-70'} ml-2 h-9 w-9 text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                                aria-hidden="true"
                                            />
                                            :
                                            <ChevronDownIcon
                                                className={`${open ? '' : 'text-opacity-70'} ml-2 h-9 w-9 text-slate-400 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                                aria-hidden="true"
                                            />
                                    }
                                </Popover.Button>
                            </div>
                        </div>



                        <Popover.Panel
                            ref={popperElement.current}
                            style={styles.popper}
                            {...attributes.popper}
                            className="z-10 h-[404px] w-[312px] translate-y-[55px] "
                        >
                            <Transition appear={true} show={open}>
                                <Transition.Child
                                    className="h-[404px] bg-white border border-slate-300 rounded-2xl px-4 sm:px-0 lg:max-w-3xl overflow-hidden"
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <div className="bg-gray-50 h-full w-full overflow-hidden">
                                        <div className='border-b-[1px] border-slate-300 h-[59px] flex items-center justify-between px-[24px]'>
                                            <h3 className='font-Montserrat-SemiBold text-[18px]'>Add Balance</h3>
                                            
                                        </div>
                                        <div className='pl-[24px] pr-[24px]'>
                                            <div className='mt-[23px] flex flex-col justify-between bg-slate-800 w-full h-[148px] rounded-xl font-Montserrat-Regular text-white p-4'>
                                                <div>
                                                    <p className='text-[18px]'>Aerocard</p>
                                                </div>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='text-[16px]'>{user?.name}</p>
                                                    <p className='text-[14px]'>{(new Date(user?.createDate!).getMonth()) + "/" + (new Date(user?.createDate!).getFullYear().toString().substring(2))}</p>
                                                </div>
                                            </div>
                                            <div className='flex space-x-1 mt-[40px]'>
                                                {
                                                    opts.map(opt => (
                                                        <div key={opt.id} className='basis-1/3 md:basis-1/3'>
                                                            <button
                                                                className={`${active === opt.id ? "gradient-button-active" : "gradient-button-inactive"} w-full p-2 font-Montserrat-SemiBold rounded-2xl`}
                                                                onClick={() => {
                                                                    active === opt.id ? setActive(undefined) : setActive(opt.id)
                                                                }}
                                                            >
                                                                <span className={`${active === opt.id ? "text-white" : "gradient-text"}`}>
                                                                    {opt.label}
                                                                </span>
                                                            </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='mt-[24px]'>
                                                <button
                                                    className={`flex flex-row space-x-2 w-full items-center justify-center h-[51px] rounded-2xl ${active ? "gradient-button-active" : "gradient-button-inactive"}`}
                                                    disabled={!active}
                                                    onClick={handleClick}
                                                >
                                                    <span>
                                                        {
                                                            active ?
                                                                <img src={aeroPay3} alt="icon" /> :
                                                                <img src={aeroPay2} alt="icon" className='opacity-50' />
                                                        }
                                                    </span>
                                                    <span className={`${active ? "text-white" : "text-slate-400"} font-Montserrat-SemiBold`} >
                                                        Add Points
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </Transition.Child>
                            </Transition>
                        </Popover.Panel>

                    </>
                )}
            </Popover>

        </div >
    )
}


export default Aeropay;