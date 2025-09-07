const FooterBottom = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {currentYear}. All rights reserved by George Kasmiro
      </p>
    </div>
  );
};

export default FooterBottom;
