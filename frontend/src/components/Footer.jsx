import React from "react";

function Footer() {
  return (
    <footer className="bg-black">
      {/* Container for small screens with column layout */}
      <div className="flex flex-col gap-5 items-center py-8 px-4 md:hidden">
        <h1 className="text-2xl text-white font-Montserrat">Bookstore</h1>

        <div className="text-center">
          <h3 className="text-lg text-white font-Montserrat">
            The perfect place for telling & sharing <br />
            all the stories that truly matter.
          </h3>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-xl text-white hover:text-orange-200">Fb.</a>
          <a href="#" className="text-xl text-white hover:text-orange-200">In.</a>
          <a href="#" className="text-xl text-white hover:text-orange-200">Tw.</a>
        </div>
      </div>

      {/* Footer text for mobile screens */}
      <div className="p-4 text-center md:hidden">
        <p className="text-white font-Montserrat">Written with heart</p>
        <p className="text-white font-Montserrat">Copyright 2024 @aminhafis</p>
      </div>

      {/* Container for large screens with the original layout (hidden on mobile) */}
      <div className="hidden md:flex md:flex-col gap-5 justify-center items-center py-16">
        <h1 className="text-2xl text-white font-Montserrat">Bookstore</h1>
        <div className="flex justify-center items-start py-4">
          <h3 className="text-xl text-white font-Montserrat">
            The perfect place for telling & sharing <br />
            all the stories that truly matter.
          </h3>
        </div>
        <div className="flex justify-center items-start gap-4">
          <a href="#" className="text-xl text-white hover:text-orange-200">Fb.</a>
          <a href="#" className="text-xl text-white hover:text-orange-200">In.</a>
          <a href="#" className="text-xl text-white hover:text-orange-200">Tw.</a>
        </div>
      </div>
      <div className="hidden md:block p-8">
        <p className="text-white font-Montserrat text-start">Written with heart</p>
        <p className="text-white font-Montserrat text-end">Copyright 2024 @aminhafis</p>
      </div>
    </footer>
  );
}

export default Footer;
