
interface props {
    label: string;
    state: string;
}

const SimpleButton = ({ label, state }: props) => {
    return (
        <button className={`${state === 'active' ? "gradient-button-active" : "gradient-button-inactive"} font-Montserrat-SemiBold text-[18px] py-2 px-6 rounded-xl`}>
            <span className={`${state === 'active' ? "text-white-500" : "gradient-text"}`}>
                {label}
            </span>
        </button>
    )
}

export default SimpleButton;