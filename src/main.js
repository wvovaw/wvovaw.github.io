// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import colorscheme from "./plugins/colorscheme";
import VueMobileDetection from "vue-mobile-detection";

// Icons
import IBulma from "./components/icons/IBulma.vue";
import ICPP from "./components/icons/ICPP.vue";
import IC from "./components/icons/IC.vue";
import IDaisyui from "./components/icons/IDaisyui.vue";
import IDiscord from "./components/icons/IDiscord.vue";
import IExpress from "./components/icons/IExpress.vue";
import IGridsome from "./components/icons/IGridsome.vue";
import IJquery from "./components/icons/IJquery.vue";
import IMD from "./components/icons/IMD.vue";
import INodejs from "./components/icons/INodejs.vue";
import INuxt from "./components/icons/INuxt.vue";
import IPython from "./components/icons/IPython.vue";
import IQT from "./components/icons/IQT.vue";
import ISocketIO from "./components/icons/ISocketIO.vue";
import ITailwind from "./components/icons/ITailwind.vue";
import IVue from "./components/icons/IVue.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueMobileDetection);
  Vue.use(colorscheme, {
    schemes: ["gruvbox-dark", "nord-dark", "solarized-dark"],
  });

  // Set default layout and iconst as a global components
  Vue.component("Layout", DefaultLayout);
  Vue.component("IBulma", IBulma);
  Vue.component("ICPP", ICPP);
  Vue.component("IC", IC);
  Vue.component("IDaisyui", IDaisyui);
  Vue.component("IDiscord", IDiscord);
  Vue.component("IExpress", IExpress);
  Vue.component("IGridsome", IGridsome);
  Vue.component("IJquery", IJquery);
  Vue.component("IMD", IMD);
  Vue.component("INodejs", INodejs);
  Vue.component("INuxt", INuxt);
  Vue.component("IPython", IPython);
  Vue.component("IQT", IQT);
  Vue.component("ISocketIO", ISocketIO);
  Vue.component("ITailwind", ITailwind);
  Vue.component("IVue", IVue);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap",
  });
}

import "~/assets/styles/solarized.css";
import "~/assets/styles/gruvbox.css";
import "~/assets/styles/nord.css";
