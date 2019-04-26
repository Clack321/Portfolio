import {
  MOVE_MENU_RIGHT,
  MOVE_MENU_LEFT,
  UPDATE_DISPLAY,
  TOGGLE_SLIDESHOW,
  NEXT_PICTURE
} from '../actions/actions'

const initialState = {
  showSlideShow: true,
  projectIndex: 0,
  pictureIndex: 0,
  projects: [
    {title: "LearnVenture",
    description: "Create your own Choose your own adventures at Learnventure.org!",
    appPhotoLinks: ["LearnVenture1.PNG", "LearnVenture2.PNG", "LearnVenture3.PNG", "LearnVenture4.PNG"],
    coolFeatures: ["Anyone can access a Learn Venture created by anyone else without even logging in!", "After registering you can create your own Learn Ventures!"],
    techStack: ["Node.Js", "MongoDB", "Mongoose", "Express.js", "Morgan", "Bcrypt", "Passport", "React", "Redux", "Redux-Thunk", "React Router", "React-D3-Graph", "D-3", "Jest", "Enzyme"],
    extraInfo: "Worked as a Team of 5 to create this project within 3 weeks",
    gitHubLink: "https://github.com/thinkful-ei27/client-5NodeBodies",
    liveAppLink: "https://www.learnventure.org",
    },
    {title: "Learn Spanish!",
    description: "A language learning app that uses a spaced repitition algorithm to help you native English speakers learn Spanish!",
    appPhotoLinks: ["LearnSpanish1.PNG", "LearnSpanish2.PNG", "LearnSpanish3.PNG"],
    coolFeatures: ["Learn Spanish keeps track of every right or wrong answer you make allowing you to view your progress!",
                    "We also have a chatroom where anyone (logged in) can play! The first person the guess the correct english traslation wins!"],
    techStack: ["Node.Js", "MongoDB", "Mongoose", "Bcrypt", "Passport", "socketIO", "Axios", "React"],
    extraInfo: "Worked in a group of two to create this project within a week \n I worked with an Excellent software develop John Young. He can be reached at: https://jyoung.dev/",
    gitHubLink: "https://github.com/thinkful-ei27/david-john-spaced-rep",
    liveAppLink: "https://lucid-khorana-3b111c.netlify.com/",
    }, 
    {title: "Curly Telegram",
    description: "An oldschool chatroom web app with cool commands such as /help, /color, weather!",
    appPhotoLinks: ["CurlyTelegram1.PNG", "CurlyTelegram2.PNG"],
    coolFeatures: ["A simple chatroom where anyone can join without even logging in!"],
    techStack: ["Python", "Flask", "Flask-SocketIO", "Gunicorn", "Eventlet", "Jquery"],
    extraInfo: "Worked alone for this project, it was built in 5 days",
    gitHubLink: "https://github.com/Clack321/curly-telegram",
    liveAppLink: "https://curly-telegram.herokuapp.com/",
    },    
    {title: "D&D Character Creator",
    description: "Create Dungeons and Dragons charaters up to date with D&D 5th edition",
    appPhotoLinks: ["DnDApp1.PNG", "DnDApp2.PNG"],
    coolFeatures: ["Create a character with your choice of one of 12 classes, 36 races, or don't pick, and it's automatically random!",
                    "All attributes are randomly calculated mimicking dice roles",
                    "Update any attribute, or level on any character you've created",
                    "Delete any character you've created"],
    techStack: ["Node.Js", "MongoDB", "Mongoose", "Express.js", "Morgan", "Bcrypt", "Passport", "React", "Redux", "Redux-Thunk", "React Router", "Jest", "Enzyme"],
    extraInfo: "Worked alone for this project, it was built in 5 days",
    gitHubLink: "https://github.com/thinkful-ei27/David-DnD-App-Frontend/tree/master/David-dnd-app-frontend",
    liveAppLink: "https://dnd-app-frontend.herokuapp.com/",
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
      case TOGGLE_SLIDESHOW: {
        return Object.assign({}, state, {
          showSlideShow : !state.showSlideShow,
        });
      } 
      case NEXT_PICTURE: {
        return Object.assign({}, state, {
          pictureIndex: (state.pictureIndex + 1) % state.projects[state.projectIndex].appPhotoLinks.length
        });
      } 
      default:
        return state
    }
}