// import axios from "axios";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

import Results from "./Results";

const Prompt = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isValidPrompt, setIsValidPrompt] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);

    // Reset validation when user starts typing
    setIsValidPrompt(true);
  };

  const handleSubmit = () => {
    if (prompt.trim() === "") {
      // If input value is empty, set isValid to false
      setIsValidPrompt(false);
    } else {
      // Forming the prompt data
      const promptData = {
        prompt: prompt,
        time: new Date().toISOString()
      }
      console.log(promptData);

      // Clearing Prompt after submission
      setPrompt("");

      // Prompt goes to backend
      // axios.post("http://localhost:5000/prompt", promptData)
    }
  };

  return (
    <section className="bg-[#fafaf7] mt-4 mx-4 p-16">
      <h1 className="text-xl font-semibold mb-4">Explain how you would like the House Plan to look</h1>
      {!isValidPrompt && <p className="text-red-500 text-xs">Please enter a valid prompt</p>}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={prompt}
          onChange={handleInputChange}
          className={` border ${isValidPrompt ? "border-gray-300" : "border-red-500"} rounded-md h-9 px-4 py-2 mb-4 w-screen`}
          placeholder="Describe what you're looking for..."
          />
        <button
          onClick={handleSubmit}
          className="bg-[#fc6650] hover:bg-[#fc553d] text-white h-9 font-semibold py-2 px-4 rounded mb-4 sm:mr-4"
          >
          <FaArrowDown />
        </button>
      </div>

      <Results />
    </section>
  )
}

export default Prompt
