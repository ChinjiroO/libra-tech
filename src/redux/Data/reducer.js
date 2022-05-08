import * as actionTypes from "./types";

const INITIAL_STATE = {
  courses: [
    {
      id: 1,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 2,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
    {
      id: 3,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 4,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
    {
      id: 5,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 6,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
  ],
  jobs: [
    {
      id: 1,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
    {
      id: 3,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
    {
      id: 5,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. Ut laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8am9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Sed ut perspiciatis unde omnis",
      detail:
        "Ex ullamco consequat tempor dolore velit. UtIncididunt occaecat aliquip cillum irure nisi laborum deserunt in voluptate in.Reprehenderit culpa elit sit ea ad et laborum aliqua sit cupidatat proident. laboris sit minim voluptate eiusmod ex Lorem commodo do. Irure nulla esse irure velit voluptate eu laborum ullamco incididunt id aute.",
      img: "",
    },
  ],
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      return {};
    default:
      return state;
  }
};

export default dataReducer;
