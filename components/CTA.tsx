"use client";

const CTA = () => {

  const openWhatsApp = (
    message: string
  ) => {
    const phoneNumber = "917900092268";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Example
  const handleMessage = () => {
    openWhatsApp("Hi Rumaze, I'd like to discuss a project.");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Book a call with Rumaze Design Studio"
      className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-10 group cursor-pointer"
      onClick={handleMessage}

    >
      <div
        className="relative h-18 w-18 lg:h-24 lg:w-24 xl:h-32 xl:w-32 flex items-center justify-center bg-white rounded-full shadow-2xl"
      >
        {/* Circular Text */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full p-2"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[10px] lg:text-[11px] xl:text-[12px] font-thin uppercase tracking-[0.2em] fill-black">
            <textPath href="#circlePath" startOffset="0%">
              Message on Whatsapp •
            </textPath>
          </text>
        </svg>

        {/* Center Icon (Custom Asterisk) */}
        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-10">
          <svg
            className="w-6 h-6 fill-current shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.679-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.123 3.242 5.144 4.547.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9-.12.581-.355 1.781-.728 2.032-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zm-5.467 7.618a9.92 9.92 0 0 1-5.06-1.391l-.363-.215-3.76.986 1.003-3.664-.236-.375a9.92 9.92 0 0 1-1.519-5.266c0-5.487 4.464-9.951 9.955-9.951a9.907 9.907 0 0 1 7.037 2.916 9.912 9.912 0 0 1 2.914 7.039c0 5.489-4.464 9.951-9.971 9.951zm8.44-18.396A11.832 11.832 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.112.551 4.175 1.6 5.99L0 24l6.177-1.62a11.96 11.96 0 0 0 5.828 1.505h.005c6.619 0 12.004-5.385 12.004-12.005 0-3.208-1.25-6.223-3.569-8.504z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CTA;
