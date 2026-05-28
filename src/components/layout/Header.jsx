const Header = () => {

  return (

    <header
      className="
      bg-[#f5f7fb]
      border-b
      border-gray-300
      py-5
      "
    >

      <div className="flex flex-col items-center justify-center">

        {/* Main Heading */}
        <h1
          className="
          text-[48px]
          font-bold
          text-[#003399]
          leading-tight
          "
        >
          Bharat Heavy Electrical Limited
        </h1>

        {/* Sub Heading */}
        <p
          className="
          text-[28px]
          text-[#003399]
          mt-2
          "
        >
          Inventory Management System
        </p>

      </div>

    </header>

  )
}

export default Header