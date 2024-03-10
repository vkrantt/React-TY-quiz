const data: Question[] = [
  {
    question: "What is JSX in React?",
    answers: [
      { option: "JavaScript XML", isCorrect: true },
      { option: "JavaScript Extension", isCorrect: false },
      { option: "JavaScript Syntax Extension", isCorrect: false },
      { option: "JavaScript XML Syntax", isCorrect: false },
    ],
  },
  {
    question: "What is a state in React?",
    answers: [
      {
        option: "A function that modifies component behavior",
        isCorrect: false,
      },
      {
        option: "An object that stores properties for a component",
        isCorrect: true,
      },
      { option: "A variable declared within a function", isCorrect: false },
      { option: "A lifecycle method in React", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the componentDidMount lifecycle method?",
    answers: [
      { option: "To update the component's state", isCorrect: false },
      { option: "To handle user interactions", isCorrect: false },
      {
        option: "To perform actions after the component is mounted",
        isCorrect: true,
      },
      { option: "To remove the component from the DOM", isCorrect: false },
    ],
  },
  {
    question: "What is the significance of keys in React lists?",
    answers: [
      {
        option: "Keys are used to encrypt sensitive data in React components",
        isCorrect: false,
      },
      {
        option: "Keys are used for styling in React components",
        isCorrect: false,
      },
      { option: "Keys are not necessary in React lists", isCorrect: false },
      {
        option:
          "Keys help React identify which items have changed, are added, or are removed",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    answers: [
      { option: "A component with more advanced features", isCorrect: false },
      {
        option: "A component with a higher render priority",
        isCorrect: false,
      },
      {
        option: "A component that renders other components",
        isCorrect: false,
      },
      {
        option: "A function that takes a component and returns a new component",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What is the purpose of PropTypes in React?",
    answers: [
      {
        option: "To validate the types of props passed to a component",
        isCorrect: true,
      },
      {
        option: "To define the initial state of a component",
        isCorrect: false,
      },
      { option: "To handle component lifecycle methods", isCorrect: false },
      {
        option: "To declare the structure of a React component",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What are controlled components in React?",
    answers: [
      {
        option: "Components that maintain their own state",
        isCorrect: false,
      },
      {
        option:
          "Components that receive data through props and notify changes through callbacks",
        isCorrect: true,
      },
      {
        option: "Components that manage state using Redux",
        isCorrect: false,
      },
      {
        option: "Components that handle events directly in the DOM",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the purpose of React Router?",
    answers: [
      { option: "To manage state in React applications", isCorrect: false },
      {
        option: "To handle AJAX requests in React applications",
        isCorrect: false,
      },
      {
        option: "To provide routing capabilities in single-page applications",
        isCorrect: true,
      },
      {
        option: "To manage form submissions in React applications",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What is the significance of shouldComponentUpdate method in React?",
    answers: [
      {
        option:
          "It forces a component to re-render regardless of state changes",
        isCorrect: false,
      },
      {
        option: "It allows a component to decide whether or not to re-render",
        isCorrect: true,
      },

      {
        option: "It is used to handle component initialization",
        isCorrect: false,
      },
      {
        option: "It is deprecated in newer versions of React",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the purpose of React.Fragment?",
    answers: [
      {
        option: "To define fragments of JavaScript code in React components",
        isCorrect: false,
      },
      { option: "To create reusable component templates", isCorrect: false },
      {
        option:
          "To group multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
      },
      {
        option: "To encapsulate state and behavior within a component",
        isCorrect: false,
      },
    ],
  },
];

export default data;
