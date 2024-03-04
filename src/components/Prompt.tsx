import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


const Prompt = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    console.log(prompt);
  };

  return (
    <section className="bg-[#fafaf7] mt-4 mx-4 p-16">
      <h1 className="text-xl font-semibold mb-4">Explain how you would like the house to look</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md h-9 px-4 py-2 mb-4 w-screen"
          placeholder="Describe what you're looking for..."
          />
        <button
          onClick={handleSubmit}
          className="bg-[#fc6650] hover:bg-[#fc553d] text-white h-9 font-semibold py-2 px-4 rounded mb-4 sm:mr-4"
          >
          <FaArrowUp />
        </button>
      </div>
    </section>
  )
}

export default Prompt
