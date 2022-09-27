import logo from './Assets/logo-no-background.png';

const Header = () => {
  return (
    <div>
        <img src={logo} alt="logo" width="150px" height="150px"/>
        <h1 className='text-white text-lg font-normal'>Welcome to Dev-link!</h1>
    </div>
  )
}

export default Header