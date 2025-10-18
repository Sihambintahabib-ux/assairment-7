// import React from 'react';

const Footer = () => {
    return (
      <div
        className=" p-10 mt-30 w-full  bg-black text-white
         "
      >
        <div className="container mx-auto  | flex p-5 items-center flex-col gap-2  ">
          <div className="w-full flex md:flex-row flex-col   items-center gap-20 ">
            <div className=" flex-2  ">
              <h1 className="text-lg font-bold mb-2 ">CS — Ticket System</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" flex-3 |   flex flex-col md:flex-row justify-between items-center gap-20 ">
              <div className="  ">
                <h1 className="text-lg font-bold mb-2 ">Company</h1>
                <ul>
                  <li>About Us</li>
                  <li>Our Mission</li>
                  <li>Contact Saled</li>
                </ul>
              </div>
              <div className="  ">
                <h1 className="text-lg font-bold mb-2 ">Services</h1>
                <ul>
                  <li>Products & Services</li>
                  <li>Customer Stories</li>
                  <li>Download Apps</li>
                </ul>
              </div>
              <div className=" ">
                <h1 className="text-lg font-bold mb-2 ">Information</h1>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Join Us</li>
                </ul>
              </div>
            </div>
            <div className=" flex-1    ">
              <h1 className="text-lg font-bold mb-2 ">Social Links</h1>
              <ul>
                <li>@CS — Ticket System</li>
                <li>@CS — Ticket System</li>
                <li>@CS — Ticket System</li>
                <li>support@cst.com</li>
              </ul>
            </div>
          </div>
          <div className="">
            © 2025 CS — Ticket System. All rights reserved.
          </div>
        </div>
      </div>
    );
};

export default Footer;