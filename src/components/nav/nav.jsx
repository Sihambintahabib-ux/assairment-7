
const Nav = () => {
    return (
      <div>
        {/* <h1>nav</h1> */}
        <div className="bg-white ">
          <nav className="flex items-center justify-between container m-auto md:flex-row flex-col | my-3 p-3">
            <div className="text-2xl mb-1">CS — Ticket System</div>
            <div>
              <ul className=" flex items-center gap-1 md:gap-10  md:flex-row flex-col ">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Content</a>
                </li>
                <li>
                  <a href="">Cartoon</a>
                </li>
                <li>
                  <a href="">Download</a>
                </li>

                <div>
                  <li>
                    <a href="">
                      <button className=" py-3 px-6 bg-purple-500 font-semibold text-white">
                        + Click me
                      </button>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Nav;