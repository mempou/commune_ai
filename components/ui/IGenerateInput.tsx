"use client"


import React, { useState } from 'react';
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler } from "react-hook-form";


type FormValues = {
  example: string;
};

interface GenerationFormProps {
  register?: UseFormRegister<FormValues>;
  handleSubmit?: UseFormHandleSubmit<FormValues>;
  onSubmit?: SubmitHandler<FormValues>;
  result?: string,
  loading?: any
}

const GenerationForm: React.FC<GenerationFormProps> = ({ register, handleSubmit, onSubmit, result, loading }) => {

  const [showFullText, setShowFullText] = useState(false);

  const handleToggle = () => {
    setShowFullText(!showFullText);
  };

  
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result).then(() => {
        alert("Text copied to clipboard!");
      }).catch(err => {
        alert("Failed to copy text.");
      });
    }
  };

  const getShortText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const wordLimit = 25;

  return (
    <form 
      //onSubmit={handleSubmit(onSubmit)}
    >
      <label className="text-sm font-normal text-white whitespace-nowrap">{ result ? 'Votre text est pret' : 'Entrez votre thème, texte ou URL '}</label>
      
      <div className="mt-1 bg-white rounded-md">
        {result ? (
          <div className="px-3 py-1 text-black">
            <p>{showFullText ? result : getShortText(result, wordLimit)}</p>
            {result.split(" ").length > wordLimit && (
              <button
                type="button"
                onClick={handleToggle}
                className="text-blue-500 text-sm"
              >
                {showFullText ? "Voir moins" : "Voir plus"}
              </button>
            )}
            <button
              type="button"
              onClick={handleCopy}
              className="text-blue-500 text-sm ml-4"
            >
              Copier
            </button>
          </div>
        ) : (
          <input
            type="text"
            className="text-slate-600 w-full p-2"
            placeholder="Enter your text"
            //{...register("example")}
          />
        )}
      </div>
        
       
      <button type="submit" disabled={loading} className="text-white whitespace-nowrap mt-6 bg-red-1 px-[38.5px] py-2">{loading ?  'Loading ...' : 'Générer le post'}</button>
    </form>
  );
}

export default GenerationForm;
