import Spongebob from "../img/spongebob.jpg";
import Patrick from "../img/patrick.jpg";
import Squidward from "../img/squidward.jpg";
import Krabs from "../img/krabs.jpg";
import Plankton from "../img/plankton.jpg";
import Sandy from "../img/sandy.jpg";
import Gary from "../img/gary.jpg";
import Karen from "../img/karen.jpg";
import Pearl from "../img/pearl.jpg";
import Puff from "../img/puff.jpg";
import { v4 as uuidv4 } from "uuid";

const characters = [
  {
    id: uuidv4(),
    name: "Spongebob",
    src: { Spongebob },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Patrick",
    src: { Patrick },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Squidward",
    src: { Squidward },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Krabs",
    src: { Krabs },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Plankton",
    src: { Plankton },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Sandy",
    src: { Sandy },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Gary",
    src: { Gary },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Karen",
    src: { Karen },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Pearl",
    src: { Pearl },
    clicked: false,
  },
  {
    id: uuidv4(),
    name: "Puff",
    src: { Puff },
    clicked: false,
  },
];

export default characters;
