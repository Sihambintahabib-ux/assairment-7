
const Nav = () => {
    return (
        <div>
            {/* <h1>nav</h1> */}
            <div className='bg-white '>
                <nav className='flex items-center justify-between container m-auto | my-3 p-3'>
                    <div className='text-2xl'>CS — Ticket System</div>
                    <div>
                        <ul className=' flex items-center gap-10 '>
                            <li><a href="">home</a></li>
                            <li><a href="">faq</a></li>
                            <li><a href="">blg</a></li>
                            <li><a href="">content</a></li>
                            <li><a href="">cartoon</a></li>
                            <li><a href="">download</a></li>
                            <li><a href=""><button className=' py-3 px-6 bg-purple-500 font-semibold text-white' >+ click me</button></a></li>
                        </ul>

                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Nav;