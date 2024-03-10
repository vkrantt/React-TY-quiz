/// <reference types="vite/client" />
interface Answer {
  option: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}
