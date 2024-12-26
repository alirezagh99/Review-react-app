import React from "react";

function Card(props) {
  const { id, text, name, job, image } = props.data;
  return (
    <div className="w-1/2 m-auto shadow-2xl p-5 flex mt-16 flex-col items-center">
      <img
        className="rounded-full h-[150px] w-[150px] mb-3"
        src={image}
        alt={name}
      />

      <div className="text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="text-[rgba(0,0,0,0.7)] text-sm mb-4">{job}</div>
        <p className="text-[rgba(0,0,0,0.75)] mb-4 text-sm">{text}</p>
      </div>
      <div className="mb-4">
        <button
          onClick={() => {
            props.handlePrev();
          }}
          className="border-2 hover:bg-black hover:text-white transition-all duration-500 rounded px-2 m-3"
        >
          prev
        </button>
        <button
          onClick={() => {
            props.handleNext();
          }}
          className="border-2 hover:bg-black hover:text-white transition-all duration-500 rounded px-2 m-3"
        >
          next
        </button>
      </div>
      <button
        onClick={() => props.handleSurprise()}
        className="border hover:bg-black hover:text-white transition-all duration-500 px-3 text-sm bg-gray-200 text-blue-500"
      >
        Surprise me
      </button>
    </div>
  );
}

export default Card;
