type HomeProps = {
  setPage: (page: string) => void
}

const Home = ({ setPage }: HomeProps) => {
  // Change the page to "prompt" when the user clicks the "Get Started" button
  const handleGetStarted = () => {
    setPage("prompt")
  }

  return (
    <section className="bg-[#fafaf7] mt-4 mx-4 p-16">
      <div className="flex flex-col items-center my-36">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">AI-Powered House Modelling from Text</h1>
        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8">Bridging Language & Architecture</p>
        {/* Action Buttons */}
        <div className="flex">
          <button className="bg-[#fc6650] hover:bg-[#fc553d] text-white font-semibold py-2 px-4 rounded mb-4 sm:mr-4" onClick={handleGetStarted}>
            Get Started
          </button>
          {/* <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mb-4 sm:mr-4">
            Sign Up
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default Home
