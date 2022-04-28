import MainLogo from '../../../assets/icons/aerolab-logo-1.svg';
import SecondLogo from '../../../assets/icons/aerolab-logo-2.svg';
import Aeropay from '../../aeropay';

const Navbar = () => {
    return (
        <nav className='flex h-[128px] items-center justify-between max-w-[1464px] px-[2rem]' style={{margin: '0 auto'}}>
            <img className='hidden lg:flex h-[48px]' src={MainLogo} alt="Aerolab" />
            <img className='lg:hidden h-[48px]' src={SecondLogo} alt="Aerolab" />
            <Aeropay />
        </nav>
    )
}

export default Navbar;