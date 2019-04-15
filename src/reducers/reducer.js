import {
    TOGGLE_MENU_CLICK
} from '../actions/actions'

const initialState = {
    projects : [
      {title: "Learn Spanish!",
      description: "A language learning app that uses a spaced repitition algorithm to help you native English speakers learn Spanish!",
      appPhotoLink: "...",
      coolFeatures: ["Learn Spanish keeps track of every right or wrong answer you make allowing you to view your progress!",
                      "We also have a chatroom where anyone (logged in) can play! The first person the guess the correct english traslation wins!"],
      techStack: ["Node.Js", "MongoDB", "Mongoose", "Bcrypt", "Passport", "socketIO", "Axios", "React"],
      extraInfo: "Me and a Friend created this project, you can check him out on linkIn at: ",
      gitHubLink: "https://github.com/thinkful-ei27/david-john-spaced-rep"
      }
    ]
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU_CLICK: {
            return Object.assign({}, state, {
                menuClicked : !this.state.menuClicked,
            });
        }
        default:
            return state
    }
}