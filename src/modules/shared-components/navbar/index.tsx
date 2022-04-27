import MainLogo from '../../../assets/icons/aerolab-logo-1.svg';
import Aeropay from '../../aeropay';

const Navbar = () => {
    return (
        <nav className='flex h-[128px] items-center justify-between max-w-[1464px]' style={{margin: '0 auto'}}>
            <img className='h-[48px]' src={MainLogo} alt="Aerolab" />
            <Aeropay />
        </nav>
    )
}

export default Navbar;