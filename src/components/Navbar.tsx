type NavbarProps = {
  page: string
  setPage: (page: string) => void
}

const Navbar = ({page, setPage} : NavbarProps) => {  
  const handleGoBack = () => {
    setPage("home");
  }

  return (
    <nav className="bg-[#f7f6f1] p-2 mt-4 mx-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Brand Logo" className="h-16 mr-2" />
        <span className="font-bold text-lg select-none">Floorigami</span>
      </div>

      {
        page === "prompt" && 
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mr-4" onClick={handleGoBack}>
            Go Back
        </button>
      }
    </nav>
  )
}

export default Navbar
