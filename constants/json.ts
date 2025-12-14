import { Calendar, Car, Heart } from "lucide-react";

const WIDTH = 80;
const HEIGHT = 80;
const ALT = "Logo Drive Plus";
const LOGO = "/logo.svg";
const TITLE = "Drive plus";
const TITLE2 = "GENERAL";
const TITLE_ADMID = "ADMIN";
const TITLE_LIST_CARDS = "List of cars";
const FOOTER_COPY = " 2025. All rights reserved Softgenix.LLC";

// 🔹 Variables para la primera ruta
const LOGO_INIT = "/";

const HREF = "/dashboard";
const LABEL = "Cars";
const ICON = Car;

// 🔹 Variables para la segunda ruta
const RESERVES_HREF = "/reserves";
const RESERVES_LABEL = "Cars Reserves";
const RESERVES_ICON = Calendar;

// 🔹 Variables para la tercera ruta
const LOVE_HREF = "/love-cars";
const LOVE_LABEL = "Love Cars";
const LOVE_ICON = Heart;

export const JSON = {
  WIDTH,
  HEIGHT,
  ALT,
  LOGO,
};

export const TEXT = {
  TITLE,
  TITLE2,
  TITLE_LIST_CARDS,
  TITLE_ADMID,
  FOOTER_COPY,
};

export const REDIRED = {
  LOGO_INIT,
};

export const ROUTES = {
  DASHBOARD: {
    icon: ICON,
    label: LABEL,
    href: HREF,
  },
  RESERVES: {
    icon: RESERVES_ICON,
    label: RESERVES_LABEL,
    href: RESERVES_HREF,
  },
  LOVE: {
    icon: LOVE_ICON,
    label: LOVE_LABEL,
    href: LOVE_HREF,
  },
};
