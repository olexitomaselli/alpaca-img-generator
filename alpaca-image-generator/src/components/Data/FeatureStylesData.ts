import { FeaturesStyleData } from "../Types/Index";

export const FeaturesStyle: FeaturesStyleData[] = [
  {
    type: "backgrounds",
    path: "img/alpaca/backgrounds/",
    styles: [
      "blue50",
      "blue60",
      "blue70",
      "darkblue30",
      "darkblue50",
      "darkblue70",
      "green50",
      "green60",
      "green70",
    ],
    activeStyle: "darkblue70",
  },

  {
    type: "hair",
    path: "img/alpaca/hair/",
    styles: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
    activeStyle: "default",
  },

  {
    type: "ears",
    path: "img/alpaca/ears/",
    styles: ["default", "tilt-backward", "tilt-forward"],
    activeStyle: "default",
  },

  {
    type: "neck",
    path: "img/alpaca/neck/",
    styles: ["default", "bend-backward", "bend-forward", "thick"],
    activeStyle: "default",
  },

  {
    type: "leg",
    path: "img/alpaca/leg/",
    styles: [
      "default",
      "bubble-tea",
      "cookie",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
    activeStyle: "default",
  },

  {
    type: "accessories",
    path: "img/alpaca/accessories/",
    styles: ["earings", "flower", "glasses", "headphone"],
    activeStyle: "headphone",
  },

  {
    type: "eyes",
    path: "img/alpaca/eyes/",
    styles: ["default", "angry", "naughty", "panda", "smart", "star"],
    activeStyle: "default",
  },

  {
    type: "mouth",
    path: "img/alpaca/mouth/",
    styles: ["default", "astonished", "eating", "laugh", "tongue"],
    activeStyle: "default",
  },
];
