import {
  MOVE_MENU_RIGHT,
  MOVE_MENU_LEFT,
  UPDATE_DISPLAY,
} from '../actions/actions'

const initialState = {
  projectIndex: 0,
  projects: [
    {title: "LearnVenture",
    description: "Create your own Choose your own adventures at Learnventure.org!",
    appPhotoLink: "...",
    coolFeatures: ["Anyone can access a Learn Venture created by anyone else without even logging in!", "After registering you can create your own Learn Ventures!"],
    techStack: ["Node.Js", "MongoDB", "Mongoose", "Express.js", "Morgan", "Bcrypt", "Passport", "React", "Redux", "Redux-Thunk", "React Router", "React-D3-Graph", "D-3", "Jest", "Enzyme"],
    extraInfo: "Worked as a Team of 5 to create this project within 3 weeks",
    gitHubLink: "https://github.com/thinkful-ei27/client-5NodeBodies",
    liveAppLink: "https://www.learnventure.org",
    },
    {title: "Learn Spanish!",
    description: "A language learning app that uses a spaced repitition algorithm to help you native English speakers learn Spanish!",
    appPhotoLink: "...",
    coolFeatures: ["Learn Spanish keeps track of every right or wrong answer you make allowing you to view your progress!",
                    "We also have a chatroom where anyone (logged in) can play! The first person the guess the correct english traslation wins!"],
    techStack: ["Node.Js", "MongoDB", "Mongoose", "Bcrypt", "Passport", "socketIO", "Axios", "React"],
    extraInfo: "Worked in a group of two to create this project within a week",
    gitHubLink: "https://github.com/thinkful-ei27/david-john-spaced-rep",
    liveAppLink: "https://lucid-khorana-3b111c.netlify.com/",
    }
  ],
  display: "coolFeatures"
};

export function reducer(state = initialState, action) {
    switch (action.type) {
      case MOVE_MENU_RIGHT: {
        return Object.assign({}, state, {
          projectIndex : (state.projectIndex + 1) % state.projects.length,
        });
      }
      case MOVE_MENU_LEFT: {
        return Object.assign({}, state, {
          projectIndex : state.projectIndex <= 0 ?  (state.projects.length - 1): (state.projectIndex - 1) % state.projects.length,
        });
      }
      case UPDATE_DISPLAY: {
        if (action.display === "coolFeatures") {
          return Object.assign({}, state, {
            display : "coolFeatures",
          });
        } else if (action.display === "techStack") {
          return Object.assign({}, state, {
            display : "techStack",
          });
        } else if (action.display === "extraInfo") {
          return Object.assign({}, state, {
            display : "extraInfo",
          });
        }
      }
        default:
          return state
    }
}