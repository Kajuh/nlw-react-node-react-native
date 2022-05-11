import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import otherImgUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedBackContentStep";

export const feedbackTypes = {
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
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pelo Kajuzinho
      </footer>
    </div>
  );
}
