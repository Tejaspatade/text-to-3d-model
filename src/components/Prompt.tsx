import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const Prompt = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [isValidPrompt, setIsValidPrompt] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);

    // Reset validation when user starts typing
    setIsValidPrompt(true);
  };

  const makeRequest = async (promptData: {prompt: string, time: string}) => {
    setIsLoading(true);
    const response = await fetch('https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify(promptData.prompt),
    })
    const data = await response.blob();

    const url = URL.createObjectURL(data);
    setImg(url);
    setIsLoading(false);
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

      // Prompt goes to API
      makeRequest(promptData);
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

      {isLoading ? (
        <div className="flex justify-center items-center h-64 font-semibold text-2xl text-gray-400 select-none">Loading...</div>
      ) : img ? (
        <div className="flex justify-center items-center">
          <img src={img} alt="Generated image" />
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 font-semibold text-2xl text-gray-400 select-none">Your generated image shows here</div>
      )}
    </section>
  )
}

export default Prompt
