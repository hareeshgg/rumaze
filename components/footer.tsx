const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-4 lg:py-8">
      <div className="flex flex-col items-center justify-center gap-12 lg:grid lg:grid-cols-4 lg:items-start">
        <div>Logo</div>
        <div className="flex flex-col gap-2 mx-auto text-center lg:text-left">
          <h1 className="font-semibold mb-2 md:mb-4">OUR ADDRESS</h1>
          <p>
            Kelly Hoppen Interiors Ltd <br /> Unit 5 Vencourt Place,
            <br /> London, W6 9NU
          </p>
          <p>
            ruman@gmail.com
            <br />
            +91 996 750 7241
          </p>
        </div>
        <div className="flex flex-col gap-2 mx-auto text-center lg:text-left">
          <h1 className="font-semibold mb-2 md:mb-4">HOURS</h1>
          <p>
            Mon - Fri: 9am - 6pm <br />
            Sat & Sun: Closed
          </p>
        </div>
        <div className="flex flex-col gap-2 mx-auto text-center lg:text-left">
          <h1 className="font-semibold mb-2 md:mb-4">FOLLOW US</h1>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 1 }}
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 1 }}
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 1 }}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
