import { CloseButton } from "./CloseButton";

import bugImgUrl from "../assets/bug.svg";
import ideaImgUrl from "../assets/idea.svg";
import otherImgUrl from "../assets/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "1",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: "2",
    },
  },
  OTHERS: {
    title: "Outro",
    image: {
      source: otherImgUrl,
      alt: "3",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixa seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-purple-500  focus:border-purple-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pelo Kajuzinho
      </footer>
    </div>
  );
}
