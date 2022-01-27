export const formQuestions = [
    {
      question:
        "What would you say that are the best features of your rubber duck?",
      name: "bestFeatures",
      type: "checkboxes",
      options: [
        { content: "It's yellow!", value: "colour" },
        { content: "It squeaks!", value: "sound" },
        { content: "It has a logo!", value: "logo" },
        { content: "Its big!", value: "size" },
      ]
    },
    {
      question: "What would you say that are the worst bits of your rubber duck?",
      name: "worstFeatures",
      type: "checkboxes",
      options: [
        { content: "It's yellow!", value: "colour" },
        { content: "It squeaks!", value: "sound" },
        { content: "It has a logo!", value: "logo" },
        { content: "Its big!", value: "size" },
      ]
    },
    {
      question: "How do you rate your rubber duck consistency?",
      name: "consistency",
      type: "radiogroup",
      options: [
        { content: 1, value: 1 },
        { content: 2, value: 2 },
        { content: 3, value: 3 },
        { content: 4, value: 4 },
      ]
    },
    {
      question: "How do you rate your rubber duck colour?",
      name: "colour",
      type: "radiogroup",
      options: [
        { content: 1, value: 1 },
        { content: 2, value: 2 },
        { content: 3, value: 3 },
        { content: 4, value: 4 },
      ]
    },
    {
      question: "How do you rate your rubber duck logo?",
      name: "logo",
      type: "radiogroup",
      options: [
        { content: 1, value: 1 },
        { content: 2, value: 2 },
        { content: 3, value: 3 },
        { content: 4, value: 4 },
      ]
    },
    {
      question: "How do you like to spend time with your rubber duck?",
      name: "timeSpent",
      type: "checkboxes",
      options: [
        { content: "Swimming", value: "Swimming" },
        { content: "Bathing", value: "Bathing" },
        { content: "Chatting", value: "Chatting" },
        { content: "I dont like to spent time with it", value: "noTime" },
      ]
    },
    {
      question: "What else have you got to say about your rubber duck?",
      name: "review",
      type: "textarea",
    },
    {
      question: "Put your name here (if you feel like it):",
      name: "username",
      type: "input",
      kind: 'text'
    },
    {
      question: "Leave us your email pretty please??",
      name: "email",
      type: "input",
      kind: "email"
    }
  ];