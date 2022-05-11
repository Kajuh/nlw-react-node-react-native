import { CloseButton } from "../../CloseButton";

export function FeedbackContentStep() {
  return (
    <div>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </div>
  );
}
