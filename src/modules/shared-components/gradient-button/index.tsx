
interface props {
    title: string;
}

const GradientButton = ({title}:props) =>{

    return (
        <button style={styles.button}>
            {title}
        </button>
    )
}

const styles = {
    button: {
        background: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        borderRadius: "1.2rem",
        border: "none",
        padding: "24px 40px",
        cursor: "pointer",
        color: "#fff",
        fontFamily: "Montserrat-Regular",
        fontSize: "1.1em"
    }
}

export default GradientButton;