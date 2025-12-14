import {
  HandCoins,
  Hourglass,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";
import { TEXTS } from "./texts";

export const dataFeature = [
  {
    icon: Hourglass,
    text: TEXTS.home.delivery,
    bg: "bg-slate-100",
    delay: 1,
  },
  {
    icon: MessageCircleQuestion,
    text: TEXTS.home.support,
    bg: "bg-indigo-100",
    delay: 1.2,
  },
  {
    icon: ShieldCheck,
    text: TEXTS.home.secure,
    bg: "bg-indigo-100",
    delay: 1.3,
  },
  {
    icon: HandCoins,
    text: TEXTS.home.bestPrice,
    bg: "bg-indigo-100",
    delay: 1.5,
  },
];
