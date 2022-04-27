import React, { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'

export function classNames(...classes: (false | null | undefined | string)[]): string {
    return classes.filter(Boolean).join(' ')
}

interface FilterValue {
    id?: string;
    label?: string;
}

interface props {
    values: FilterValue[];
    setActive: React.Dispatch<React.SetStateAction<string>>;
}


const Filter = ({ values, setActive }: props) => {
    let [active, setActivePerson] = useState(values[0]?.label!);

    return (
        <div className='w-full md:w-[256px] h-[59px]' >
            <div className="w-full mr-2">
                <div className="space-y-1">
                    <Listbox
                        value={active}
                        onChange={(value) => {
                            console.log('value:', value)
                            setActivePerson(value);
                            //setActive(values.find(el => el.label === value)?.id!);
                            setActive(value);
                        }}
                    >
                        <div className="relative">
                            <span className="inline-block w-full rounded-2xl shadow-sm">
                                <Listbox.Button className="focus:shadow-outline-blue relative w-full cursor-default rounded-2xl border border-slate-300 bg-white py-4 pl-3 pr-10 text-left transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5">
                                    <span className="block truncate font-Montserrat-SemiBold text-[18px] text-slate-400">{active || "Select Category"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                            </span>

                            <div className="absolute mt-2 w-full rounded-2xl bg-white shadow-lg">
                                <Listbox.Options className="shadow-xs h-[271px] overflow-auto rounded-2xl border border-slate-200 py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                                    {values.map((opt, index) => (
                                        <Listbox.Option
                                            key={index}
                                            value={opt.label}
                                            className={({ active }) => {
                                                return classNames(
                                                    'relative cursor-default select-none py-4 pl-3 pr-9 focus:outline-none',
                                                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-900'
                                                )
                                            }}
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span
                                                        className={classNames(
                                                            'block truncate font-Montserrat-SemiBold text-[18px] text-slate-400',
                                                            selected ? 'font-semibold' : 'font-normal'
                                                        )}
                                                    >
                                                        {opt.label}
                                                    </span>
                                                    {selected && (
                                                        <span
                                                            className={classNames(
                                                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                active ? 'text-gray-900' : 'text-indigo-600'
                                                            )}
                                                        >
                                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </div>
                    </Listbox>
                </div>
            </div>
        </div>
    )
}

export default Filter;