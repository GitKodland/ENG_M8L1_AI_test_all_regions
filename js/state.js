export const state = {
  step: 1
};

export const steps = {
  1: {
    title: "First examples",
    stage: "AI training",
    bitik: "We are teaching the AI to recognise backpacks!",
    ai: "Ready to learn!",
    aiStatus: "Waiting for examples…",

    aiAfter: "Remembered the first examples!",
    aiStatusAfter: "Now I know what a backpack looks like."
  },

  2: {
    title: "AI error",
    stage: "Text check",
    bitik: "Checking the text",
    ai: "This is not a backpack!",
    aiStatus: "I am confused…",

    aiAfter: "Now I understand why I've made a mistake!",
    aiStatusAfter: "I need more examples!"
  },

  3: {
    title: "Additional training",
    stage: "AI training",
    bitik: "Let's add more examples!",
    ai: "Training…",
    aiStatus: "My understanding improved!",

    aiAfter: "Now I have many different examples!",
    aiStatusAfter: "I'm certain I'll do a better job!"
  },

  4: {
    title: "AI succeeds",
    stage: "Checking",
    bitik: "Checking again",
    ai: "This is a backpack!",
    aiStatus: "Now I understand!",

    aiAfter: "Yes! Now I can recognise with confidence!",
    aiStatusAfter: "The training works!"
  },

  5: {
    title: "Deception",
    stage: "A difficult check",
    bitik: "Is this a backpack or not?",
    ai: "Hm… it looks like one…",
    aiStatus: "But I could be wrong",

    aiAfter: "Now I see the differences!",
    aiStatusAfter: "Not everything round is a backpack!"
  }
};
