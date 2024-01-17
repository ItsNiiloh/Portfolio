const NavBar = () => {
    return ( 
        <div className="spacer h-32">
            <nav className='flex justify-between items-center w-[92%] h-24 mx-auto  bg-white bg-opacity-0'>
                <div className=''>
                    <a href="#">
                        <img className="justify-center absolute rounded-xl top-3 w-16 h-16 sm:w-20 sm:h-20 sm:left-3 lg:left-10" src="/logo.svg" alt="" />
                    </a>
                </div>
                    <div className="navinha duration-500 z-10 md:static absolute md:min-h-fit md:bg-transparent rounded-3xl bg-white min-h-[30vh] right-0 top-[-100%] md:w-auto w-1/2 flex items-center px-5">
                        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 pt-3 pb-3'>
                            <li type='button' className='font-bold p-4 hover:bg-white rounded-full cursor-pointer text-xl text-black uppercase'>Home</li>
                            <li type='button' className='font-bold p-4 hover:bg-white rounded-full cursor-pointer text-xl text-black uppercase'>About</li>
                            <li type='button' className='font-bold p-4 hover:bg-white rounded-full cursor-pointer text-xl text-black uppercase'>Projects</li>
                            <li type='button' className='font-bold p-4 hover:bg-white rounded-full cursor-pointer text-xl text-black uppercase'>Contact</li>
                        </ul>
                    </div>
                    <div  className="flex items-center cursor-pointer absolute right-4 text-white text-6xl h-14 w-14 bg-black bg-opacity-70 rounded-xl md:hidden">
                        <ion-icon onclick="onButtonClick(this)" name="menu"></ion-icon>
                    </div>
                </nav>
            </div>
        );
};

export default NavBar;