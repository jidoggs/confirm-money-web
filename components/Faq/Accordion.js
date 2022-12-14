import React, { useId, useState } from "react";

function Accordion({ question, answer }) {
  const [state, setState] = useState(false);
  const id = useId();
  return (
    <article
      className={`border-b border-grey_5 border-solid sm:pt-2.5 ${
        state ? "pb-2" : ""
      }`}
    >
      <button
        className="py-[15px] sm:pt-5 sm:pb-6  grid grid-cols-[min-max(1fr_max-content)_1fr_max-content] w-full"
        id={`${id}-controller`}
        type="button"
        onClick={() => setState((prev) => !prev)}
      >
        <h6 className="text-black_2 text-base font-semibold text-left lg:text-[20px] lg:leading-[30px]">
          {question}
        </h6>
        <span
          className={`w-6 h-6 bg-accordionimg ${
            state ? "rotate-180 " : ""
          } bg-no-repeat block col-start-3 col-end-4 justify-self-end self-center transition-transform duration-500`}
        ></span>
      </button>
      {state && (
        <div className="pb-2" aria-hidden={!state.toString()}>
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
}

export default Accordion;
