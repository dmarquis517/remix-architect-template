var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(void 0, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/tailwind.css
var tailwind_default = "/_static/build/_assets/tailwind-DPTHHE4Y.css";

// app/components/Header.jsx
var import_react = __toModule(require("@headlessui/react"));
var import_outline = __toModule(require("@heroicons/react/outline"));
function Header() {
  const activeNavLink = "border-indigo-500 border-b-2 text-gray-900 h-full pt-5";
  const defaultNavLink = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const activeMobileLink = "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
  const defaultMobileLink = "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6";
  return /* @__PURE__ */ React.createElement(import_react.Disclosure, {
    as: "nav",
    className: "bg-white shadow"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-ml-2 mr-2 flex items-center md:hidden"
  }, /* @__PURE__ */ React.createElement(import_react.Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(import_outline.XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline.MenuIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center"
  }, /* @__PURE__ */ React.createElement("strong", null, "CRAFTD ")), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:ml-6 md:flex items-center md:space-x-8"
  }, /* @__PURE__ */ React.createElement(void 0, {
    to: "/",
    className: ({ isActive }) => isActive ? activeNavLink : defaultNavLink
  }, "Home"), /* @__PURE__ */ React.createElement(void 0, {
    to: "/services",
    className: ({ isActive }) => isActive ? activeNavLink : defaultNavLink
  }, "Services"), /* @__PURE__ */ React.createElement(void 0, {
    to: "/portfolio",
    className: ({ isActive }) => isActive ? activeNavLink : defaultNavLink
  }, "Portfolio"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/contact"
  }, "Contact")))))), /* @__PURE__ */ React.createElement(import_react.Disclosure.Panel, {
    className: "md:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 pb-3 space-y-1"
  }, /* @__PURE__ */ React.createElement(void 0, {
    to: "/",
    className: ({ isActive }) => isActive ? activeMobileLink : defaultMobileLink
  }, "Home"), /* @__PURE__ */ React.createElement(void 0, {
    to: "/services",
    className: ({ isActive }) => isActive ? activeMobileLink : defaultMobileLink
  }, "Services"), /* @__PURE__ */ React.createElement(void 0, {
    to: "/portfolio",
    className: ({ isActive }) => isActive ? activeMobileLink : defaultMobileLink
  }, "Portfolio")))));
}

// app/components/Footer.jsx
var navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React.createElement("path", {
        fillRule: "evenodd",
        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React.createElement("path", {
        fillRule: "evenodd",
        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React.createElement("path", {
        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      }))
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React.createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      }))
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "-mx-5 -my-2 flex flex-wrap justify-center",
    "aria-label": "Footer"
  }, navigation.main.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.name,
    className: "px-5 py-2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: "text-base text-gray-500 hover:text-gray-900"
  }, item.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex justify-center space-x-6"
  }, navigation.social.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, item.name), /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8 text-center text-base text-gray-400"
  }, "\xA9 2022 Craftd, LLC. All rights reserved.")));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/root.jsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }, { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }];
}
var meta = () => {
  return {
    title: "Craftd Technology",
    description: "Building a modern technology footprint for your business"
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(void 0, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Whoops! We've encountered an error, please refresh and we'll be right back!"))));
}
function CatchBoundary() {
  let caught = (void 0)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement(Footer, null));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/portfolio/index.jsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => Porfolio
});

// app/components/PortfolioBanner.jsx
function PortfolioBanner() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-base font-semibold text-indigo-600 tracking-wide uppercase"
  }, "Portfolio"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
  }, "See our previous projects"), /* @__PURE__ */ React.createElement("p", {
    className: "max-w-xl mt-5 mx-auto text-xl text-gray-500"
  }, "Don't just take our word for it, check out some of our fantastic prior clients and projects!"))));
}

// app/components/Portfolio.jsx
var import_solid = __toModule(require("@heroicons/react/solid"));
var features = [
  {
    name: "Enfance Design",
    description: "A custom web site built on the Shopify platform, allowing for a beautiful site along with all the tools and storefront provided by Shopify",
    imageSrc: "/_static/images/EnfanceDesign.png",
    imageAlt: "Preview image of Enfance Design home page",
    url: "https://www.enfancedesign.com"
  },
  {
    name: "Woof Gang Grooming CT",
    description: "A slightly more involved business website for a local pet bakery and groomer, this site includes some more complex user experiences including a spa menu, contact form, and testimonials (coming soon!)",
    imageSrc: "/_static/images/WoofGang.png",
    imageAlt: "Preview image of Woof Gang Grooming home page",
    url: "https://woofgangct.com"
  },
  {
    name: "JWP Handyman",
    description: "A simple business website for a local handyman, a fantastic example of the quickest and easiest type of site to get up and running for your business!",
    imageSrc: "/_static/images/JWP.png",
    imageAlt: "Preview image of JWP Handyman home page",
    url: "https://jwphandyman.com"
  },
  {
    name: "Personal Site",
    description: "An example of how you can bring your resume to life as a website to wow potential employers or anyone looking to view your experience and background!",
    imageSrc: "/_static/images/PersonalSite.png",
    imageAlt: "Preview image of personal site main page",
    url: "https://danmarquis.com"
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Portfolio() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-2xl mx-auto pb-24 px-4 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-16"
  }, features.map((feature, featureIdx) => /* @__PURE__ */ React.createElement("div", {
    key: feature.name,
    className: "flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames(featureIdx % 2 === 0 ? "lg:col-start-1" : "lg:col-start-8 xl:col-start-9", "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4")
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg font-medium text-gray-900"
  }, feature.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm text-gray-500"
  }, feature.description), /* @__PURE__ */ React.createElement("a", {
    href: feature.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center my-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Check it out", /* @__PURE__ */ React.createElement(import_solid.ArrowRightIcon, {
    className: "ml-2 -mr-1 h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: classNames(featureIdx % 2 === 0 ? "lg:col-start-6 xl:col-start-5" : "lg:col-start-1", "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    src: feature.imageSrc,
    alt: feature.imageAlt,
    className: "object-center object-cover"
  }))))))));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/portfolio/index.jsx
function Porfolio() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen"
  }, /* @__PURE__ */ React.createElement(PortfolioBanner, null), /* @__PURE__ */ React.createElement(Portfolio, null));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/services/index.jsx
var services_exports = {};
__export(services_exports, {
  default: () => Services
});

// app/components/ServiceDetails.jsx
var import_outline2 = __toModule(require("@heroicons/react/outline"));
var professionalSiteFeatures = [
  {
    id: 1,
    name: "Key business information",
    description: "Business hours, services, locations and more all at the fingertips for customers around the globe, 24/7.",
    icon: import_outline2.GlobeAltIcon
  },
  {
    id: 2,
    name: "Digital point of contact",
    description: "Customers are online almost around the clock, a professional website can give them easy ways to contact you via email, chat, etc. at a time that works best for them.",
    icon: import_outline2.ScaleIcon
  },
  {
    id: 3,
    name: "Modern and fast",
    description: "Make a fantastic first impression with a beautiful digital space that loads in a snap!",
    icon: import_outline2.LightningBoltIcon
  }
];
var storefrontFeatures = [
  {
    id: 1,
    name: "Manage your products",
    description: "Using popular sites like Shopify you can manage your products, prices, sales, and more yourself while also building the experience you want",
    icon: import_outline2.AnnotationIcon
  },
  {
    id: 2,
    name: "Manage your content",
    description: "We'll work together to build a site with all the content you're looking for and also ",
    icon: import_outline2.MailIcon
  },
  {
    id: 3,
    name: "Customized for your business",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: import_outline2.MailIcon
  }
];
function ServiceDetails() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-16 bg-gray-50 overflow-hidden lg:py-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4",
    width: 404,
    height: 784,
    fill: "none",
    viewBox: "0 0 404 784",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "b1e6e422-73f8-40a6-b5d9-c8586e37e0e7",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 404,
    height: 784,
    fill: "url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "Our Services"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500"
  }, "No matter the experience you're looking to create, we're here to help from design to build to maintain.")), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
  }, "Represent your business with a professional website"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-lg text-gray-500"
  }, "A sleek, fast website can provide key information about your business to current and potential customers alike. In a digital world you need a digital presence!"), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-10 space-y-10"
  }, professionalSiteFeatures.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.id,
    className: "relative"
  }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ml-16 text-lg leading-6 font-medium text-gray-900"
  }, item.name)), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-2 ml-16 text-base text-gray-500"
  }, item.description))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 -mx-4 relative lg:mt-0",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",
    width: 784,
    height: 404,
    fill: "none",
    viewBox: "0 0 784 404"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "ca9667ae-9f92-4be7-abcb-9e3d727f2941",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 784,
    height: 404,
    fill: "url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
  })), /* @__PURE__ */ React.createElement("img", {
    className: "relative mx-auto",
    width: 490,
    src: "https://tailwindui.com/img/features/feature-example-1.png",
    alt: ""
  }))), /* @__PURE__ */ React.createElement("svg", {
    className: "hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12",
    width: 404,
    height: 784,
    fill: "none",
    viewBox: "0 0 404 784",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 404,
    height: 784,
    fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-12 sm:mt-16 lg:mt-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:col-start-2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
  }, "Digital Storefront"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-lg text-gray-500"
  }, "Online shopping continues to skyrocket, let's build a digital store that can keep up with you and your customers."), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-10 space-y-10"
  }, storefrontFeatures.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.id,
    className: "relative"
  }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ml-16 text-lg leading-6 font-medium text-gray-900"
  }, item.name)), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-2 ml-16 text-base text-gray-500"
  }, item.description))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 -mx-4 relative lg:mt-0 lg:col-start-1"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",
    width: 784,
    height: 404,
    fill: "none",
    viewBox: "0 0 784 404",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "e80155a9-dfde-425a-b5ea-1f6fadd20131",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 784,
    height: 404,
    fill: "url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
  })), /* @__PURE__ */ React.createElement("img", {
    className: "relative mx-auto",
    width: 490,
    src: "https://tailwindui.com/img/features/feature-example-2.png",
    alt: ""
  }))))));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/services/index.jsx
function Services() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen"
  }, /* @__PURE__ */ React.createElement(ServiceDetails, null));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/contact/index.jsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => Contact
});

// app/utils/sendEmail.js
var sendEmail = async (email) => {
  const request = new Request("https://6rugc1r7c6.execute-api.us-east-1.amazonaws.com/prod/email-dev", { method: "POST", body: email });
  const res = await fetch(request);
  if (res.status === 200) {
    return res;
  } else {
    throw new Error("Error sending email, please try again later!");
  }
};

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/contact/index.jsx
var action = async ({ request }) => {
  const body = await request.formData();
  const email = {
    name: body.get("first-name") + " " + body.get("last-name"),
    email: body.get("email"),
    message: body.get("message"),
    company: body.get("company"),
    phone: body.get("phone-number")
  };
  const result = await sendEmail(JSON.stringify(email));
  if (result) {
    return (void 0)("/contact?status=success");
  } else {
    return null;
  }
};
function Contact() {
  const data = (void 0)();
  const transition = (void 0)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative max-w-xl mx-auto"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute left-full transform translate-x-1/2",
    width: 404,
    height: 404,
    fill: "none",
    viewBox: "0 0 404 404",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "85737c0e-0916-41d7-917f-596dc7edfa27",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 404,
    height: 404,
    fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "absolute right-full bottom-0 transform -translate-x-1/2",
    width: 404,
    height: 404,
    fill: "none",
    viewBox: "0 0 404 404",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "85737c0e-0916-41d7-917f-596dc7edfa27",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: 404,
    height: 404,
    fill: "url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "Let's chat"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg leading-6 text-gray-500"
  }, "Whether you're ready to jump into a project or you just have a few questions about your digital footprint, send me a message and I'll see how I can help.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement(void 0, {
    method: "post",
    className: "grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "first-name",
    className: "block text-sm font-medium text-gray-700"
  }, "First name"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "first-name",
    id: "first-name",
    autoComplete: "given-name",
    className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "last-name",
    className: "block text-sm font-medium text-gray-700"
  }, "Last name"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "last-name",
    id: "last-name",
    autoComplete: "family-name",
    className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "company",
    className: "block text-sm font-medium text-gray-700"
  }, "Company"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "company",
    id: "company",
    autoComplete: "organization",
    className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "phone-number",
    className: "block text-sm font-medium text-gray-700"
  }, "Phone Number"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 relative rounded-md shadow-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "country",
    className: "sr-only"
  }, "Country"), /* @__PURE__ */ React.createElement("select", {
    id: "country",
    name: "country",
    className: "h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
  }, /* @__PURE__ */ React.createElement("option", null, "US"), /* @__PURE__ */ React.createElement("option", null, "CA"), /* @__PURE__ */ React.createElement("option", null, "EU"))), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "phone-number",
    id: "phone-number",
    autoComplete: "tel",
    className: "py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",
    placeholder: "+1 (555) 987-6543"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "message",
    className: "block text-sm font-medium text-gray-700"
  }, "Message"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("textarea", {
    id: "message",
    name: "message",
    rows: 4,
    className: "py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md",
    defaultValue: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, transition.state === "submitting" ? "Submitting..." : "Let's talk"))))));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Banner.jsx
var Banner = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-gray-900"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg",
    alt: "",
    className: "w-screen h-full object-center object-cover"
  })), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 bg-gray-900 opacity-50"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative w-screen mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-48 lg:px-0"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-white lg:text-6xl"
  }, "Craftd Technologies")));
};
var Banner_default = Banner;

// app/components/Intro.jsx
var import_outline3 = __toModule(require("@heroicons/react/outline"));
var features2 = [
  { name: "Professional Websites", icon: import_outline3.BriefcaseIcon, description: "Meet your customers, introduce yourself, and provide all the basic information about your business with a fast, professional website." },
  { name: "Digital Storefronts", icon: import_outline3.ShoppingCartIcon, description: "Need to sell and manage products? We can create a digital storefront that best represents you and your business." },
  { name: "Personal Sites", icon: import_outline3.DocumentTextIcon, description: "On the job front or looking to share your background in this digital world? A personal website can do all of that and more." }
];
function Intro() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-white py-16 sm:py-24 lg:py-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-base font-semibold tracking-wider text-indigo-600 uppercase"
  }, "Building your digital footprint can seem complicated"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
  }, "Let me make it easy for you"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 max-w-prose mx-auto text-xl text-gray-500"
  }, "From network setup to websites and mobile applications we can bring it to life"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
  }, features2.map((feature) => /* @__PURE__ */ React.createElement("div", {
    key: feature.name,
    className: "pt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flow-root bg-gray-50 rounded-lg px-6 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-mt-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg"
  }, /* @__PURE__ */ React.createElement(feature.icon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-8 text-lg font-medium text-gray-900 tracking-tight"
  }, feature.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 text-base text-gray-500"
  }, feature.description)))))))));
}

// app/components/About.jsx
var people = [
  {
    name: "Dan Marquis",
    role: "Founder",
    imageUrl: "https://danmarquis.com/img/profile.jpg",
    bio: "With 10 years of experience building everything from simple websites to complex software platforms, I'm ready to help you design and build your digital footprint large or small!",
    linkedinUrl: "https://www.linkedin.com/in/daniel-marquis/"
  }
];
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-5 sm:space-y-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight sm:text-4xl"
  }, "About Me"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-gray-500"
  }, "The experience to bring your digital project to life")), /* @__PURE__ */ React.createElement("div", {
    className: "lg:col-span-2"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
  }, people.map((person) => /* @__PURE__ */ React.createElement("li", {
    key: person.name,
    className: "sm:py-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "object-cover shadow-lg rounded-lg",
    src: person.imageUrl,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg leading-6 font-medium space-y-1"
  }, /* @__PURE__ */ React.createElement("h3", null, person.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-600"
  }, person.role)), /* @__PURE__ */ React.createElement("div", {
    className: "text-lg"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500"
  }, person.bio)), /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "flex space-x-5"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: person.linkedinUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "LinkedIn"), /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z",
    clipRule: "evenodd"
  })))))))))))))));
}

// app/components/ProjectsPromo.jsx
function ProjectsPromo() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative rounded-lg overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg",
    alt: "",
    className: "w-full h-full object-center object-cover"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative max-w-3xl mx-auto flex flex-col items-center text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block sm:inline"
  }, "Check out "), /* @__PURE__ */ React.createElement("span", {
    className: "block sm:inline"
  }, "our projects")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-xl text-white"
  }, "Our portfolio of previous projects and clients showcases all levels of complexity we can take on. Take a look at some of the fantastic clients we've worked with and the digital experiences we've created!"), /* @__PURE__ */ React.createElement("a", {
    href: "/portfolio",
    className: "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
  }, "Previous Projects"))))));
}

// app/components/ContactPromo.jsx
function ContactPromo() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block"
  }, "Ready to get started?"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600"
  }, "Let's chat")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex lg:mt-0 lg:flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/contact",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  }, "Contact me")))));
}

// route-module:/Users/danmarquis/Projects/craftd-remix-2/app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen scroll-smooth"
  }, /* @__PURE__ */ React.createElement(Banner_default, null), /* @__PURE__ */ React.createElement(Intro, null), /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(ProjectsPromo, null), /* @__PURE__ */ React.createElement(ContactPromo, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/portfolio/index": {
    id: "routes/portfolio/index",
    parentId: "root",
    path: "portfolio",
    index: true,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/services/index": {
    id: "routes/services/index",
    parentId: "root",
    path: "services",
    index: true,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5tYXJxdWlzL1Byb2plY3RzL2NyYWZ0ZC1yZW1peC0yL2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5tYXJxdWlzL1Byb2plY3RzL2NyYWZ0ZC1yZW1peC0yL2FwcC9yb3V0ZXMvcG9ydGZvbGlvL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Qb3J0Zm9saW9CYW5uZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1BvcnRmb2xpby5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kYW5tYXJxdWlzL1Byb2plY3RzL2NyYWZ0ZC1yZW1peC0yL2FwcC9yb3V0ZXMvc2VydmljZXMvaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NlcnZpY2VEZXRhaWxzLmpzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2Rhbm1hcnF1aXMvUHJvamVjdHMvY3JhZnRkLXJlbWl4LTIvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LmpzeCIsICIuLi9hcHAvdXRpbHMvc2VuZEVtYWlsLmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZGFubWFycXVpcy9Qcm9qZWN0cy9jcmFmdGQtcmVtaXgtMi9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYW5uZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ludHJvLmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BYm91dC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvamVjdHNQcm9tby5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFByb21vLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2Rhbm1hcnF1aXMvUHJvamVjdHMvY3JhZnRkLXJlbWl4LTIvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2Rhbm1hcnF1aXMvUHJvamVjdHMvY3JhZnRkLXJlbWl4LTIvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9kYW5tYXJxdWlzL1Byb2plY3RzL2NyYWZ0ZC1yZW1peC0yL2FwcC9yb3V0ZXMvcG9ydGZvbGlvL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZGFubWFycXVpcy9Qcm9qZWN0cy9jcmFmdGQtcmVtaXgtMi9hcHAvcm91dGVzL3NlcnZpY2VzL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGFubWFycXVpcy9Qcm9qZWN0cy9jcmFmdGQtcmVtaXgtMi9hcHAvcm91dGVzL2NvbnRhY3QvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kYW5tYXJxdWlzL1Byb2plY3RzL2NyYWZ0ZC1yZW1peC0yL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9wb3J0Zm9saW8vaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9wb3J0Zm9saW8vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJwb3J0Zm9saW9cIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfVxufTsiLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmssXG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSwgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiAnaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzcyd9XTtcbn1cblxuZXhwb3J0IGxldCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNyYWZ0ZCBUZWNobm9sb2d5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnVpbGRpbmcgYSBtb2Rlcm4gdGVjaG5vbG9neSBmb290cHJpbnQgZm9yIHlvdXIgYnVzaW5lc3NcIlxuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2RlZmF1bHQtZXhwb3J0XG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjcm91dGUtZmlsZW5hbWVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjZXJyb3Jib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaG9vcHMhIFdlJ3ZlIGVuY291bnRlcmVkIGFuIGVycm9yLCBwbGVhc2UgcmVmcmVzaCBhbmQgd2UnbGwgYmUgcmlnaHQgYmFjayFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjY2F0Y2hib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGxldCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlblwiPlxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlbWl4LWFwcF9fbWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBSZW1peExvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDY1OSAxNjVcIlxuICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cInJlbWl4LXJ1bi1sb2dvLXRpdGxlXCJcbiAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgd2lkdGg9XCIxMDZcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHRpdGxlIGlkPVwicmVtaXgtcnVuLWxvZ28tdGl0bGVcIj5SZW1peCBMb2dvPC90aXRsZT5cbiAgICAgIDxwYXRoIGQ9XCJNMCAxNjFWMTM2SDQ1LjU0MTZDNTMuMTQ4NiAxMzYgNTQuODAwMyAxNDEuNjM4IDU0LjgwMDMgMTQ1VjE2MUgwWiBNMTMzLjg1IDEyNC4xNkMxMzUuMyAxNDIuNzYyIDEzNS4zIDE1MS40ODIgMTM1LjMgMTYxSDkyLjIyODNDOTIuMjI4MyAxNTguOTI3IDkyLjI2NTMgMTU3LjAzIDkyLjMwMjggMTU1LjEwN0M5Mi40MTk1IDE0OS4xMjggOTIuNTQxMSAxNDIuODk0IDkxLjU3MTcgMTMwLjMwNEM5MC4yOTA1IDExMS44NzIgODIuMzQ3MyAxMDcuNzc2IDY3Ljc0MTkgMTA3Ljc3Nkg1NC44MDIxSDBWNzQuMjRINjkuNzkxOEM4OC4yNDA3IDc0LjI0IDk3LjQ2NTEgNjguNjMyIDk3LjQ2NTEgNTMuNzg0Qzk3LjQ2NTEgNDAuNzI4IDg4LjI0MDcgMzIuODE2IDY5Ljc5MTggMzIuODE2SDBWMEg3Ny40Nzg4QzExOS4yNDUgMCAxNDAgMTkuNzEyIDE0MCA1MS4yQzE0MCA3NC43NTIgMTI1LjM5NSA5MC4xMTIgMTA1LjY2NSA5Mi42NzJDMTIyLjMyIDk2IDEzMi4wNTcgMTA1LjQ3MiAxMzMuODUgMTI0LjE2WlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTIyOS40MyAxMjAuNTc2QzIyNS41OSAxMjkuNTM2IDIxOC40MjIgMTMzLjM3NiAyMDcuMTU4IDEzMy4zNzZDMTk0LjYxNCAxMzMuMzc2IDE4NC4zNzQgMTI2LjcyIDE4My4zNSAxMTIuNjRIMjYzLjQ3OFYxMDEuMTJDMjYzLjQ3OCA3MC4xNDM3IDI0My4yNTQgNDQuMDMxNyAyMDUuMTEgNDQuMDMxN0MxNjkuNTI2IDQ0LjAzMTcgMTQyLjkwMiA2OS44ODc3IDE0Mi45MDIgMTA1Ljk4NEMxNDIuOTAyIDE0Mi4zMzYgMTY5LjAxNCAxNjQuMzUyIDIwNS42MjIgMTY0LjM1MkMyMzUuODMgMTY0LjM1MiAyNTYuODIyIDE0OS43NiAyNjIuNzEgMTIzLjY0OEwyMjkuNDMgMTIwLjU3NlpNMTgzLjg2MiA5Mi42NzE3QzE4NS4zOTggODEuOTE5NyAxOTEuMjg2IDczLjcyNzcgMjA0LjU5OCA3My43Mjc3QzIxNi44ODYgNzMuNzI3NyAyMjMuNTQyIDgyLjQzMTcgMjI0LjA1NCA5Mi42NzE3SDE4My44NjJaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzg1LjI1NiA2Ni41NTk3QzM4MC4zOTIgNTMuMjQ3NyAzNjkuODk2IDQ0LjAzMTcgMzQ5LjY3MiA0NC4wMzE3QzMzMi41MiA0NC4wMzE3IDMyMC4yMzIgNTEuNzExNyAzMTQuMDg4IDY0LjI1NTdWNDcuMTAzN0gyNzIuNjE2VjE2MS4yOEgzMTQuMDg4VjEwNS4yMTZDMzE0LjA4OCA4OC4wNjM4IDMxOC45NTIgNzYuNzk5NyAzMzIuNTIgNzYuNzk5N0MzNDUuMDY0IDc2Ljc5OTcgMzQ4LjEzNiA4NC45OTE3IDM0OC4xMzYgMTAwLjYwOFYxNjEuMjhIMzg5LjYwOFYxMDUuMjE2QzM4OS42MDggODguMDYzOCAzOTQuMjE2IDc2Ljc5OTcgNDA4LjA0IDc2Ljc5OTdDNDIwLjU4NCA3Ni43OTk3IDQyMy40IDg0Ljk5MTcgNDIzLjQgMTAwLjYwOFYxNjEuMjhINDY0Ljg3MlY4OS41OTk3QzQ2NC44NzIgNjUuNzkxNyA0NTUuNjU2IDQ0LjAzMTcgNDI0LjE2OCA0NC4wMzE3QzQwNC45NjggNDQuMDMxNyAzOTEuNCA1My43NTk3IDM4NS4yNTYgNjYuNTU5N1pcIiAvPlxuICAgICAgPHBhdGggZD1cIk00NzguNDM2IDQ3LjEwNFYxNjEuMjhINTE5LjkwOFY0Ny4xMDRINDc4LjQzNlpNNDc4LjE4IDM2LjM1Mkg1MjAuMTY0VjBINDc4LjE4VjM2LjM1MlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk02NTQuNTQgNDcuMTAzNUg2MTEuNzg4TDU5Mi4zMzIgNzQuMjM5NUw1NzMuMzg4IDQ3LjEwMzVINTI3LjU2NEw1NjguNzggMTAzLjE2OEw1MjMuOTggMTYxLjI4SDU2Ni43MzJMNTg5LjUxNiAxMzAuMzA0TDYxMi4zIDE2MS4yOEg2NTguMTI0TDYxMy4wNjggMTAxLjM3Nkw2NTQuNTQgNDcuMTAzNVpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImltcG9ydCB7IERpc2Nsb3N1cmUgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IE1lbnVJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZW1peCc7XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgYWN0aXZlTmF2TGluayA9ICdib3JkZXItaW5kaWdvLTUwMCBib3JkZXItYi0yIHRleHQtZ3JheS05MDAgaC1mdWxsIHB0LTUnO1xuICBjb25zdCBkZWZhdWx0TmF2TGluayA9ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6dGV4dC1ncmF5LTcwMCc7XG4gIGNvbnN0IGFjdGl2ZU1vYmlsZUxpbmsgPSAnYmctaW5kaWdvLTUwIGJvcmRlci1pbmRpZ28tNTAwIHRleHQtaW5kaWdvLTcwMCBibG9jayBwbC0zIHByLTQgcHktMiBib3JkZXItbC00IHRleHQtYmFzZSBmb250LW1lZGl1bSBzbTpwbC01IHNtOnByLTYnO1xuICBjb25zdCBkZWZhdWx0TW9iaWxlTGluayA9ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGJsb2NrIHBsLTMgcHItNCBweS0yIGJvcmRlci1sLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHNtOnBsLTUgc206cHItNic7XG5cbiAgcmV0dXJuIChcbiAgICA8RGlzY2xvc3VyZSBhcz1cIm5hdlwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvd1wiPlxuICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tbC0yIG1yLTIgZmxleCBpdGVtcy1jZW50ZXIgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgPERpc2Nsb3N1cmUuQnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DUkFGVEQgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6bWwtNiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBtZDpzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIFxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBhY3RpdmVOYXZMaW5rIDogZGVmYXVsdE5hdkxpbmt9ICAgICBcbiAgICAgICAgICAgICAgICAgID5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3NlcnZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gYWN0aXZlTmF2TGluayA6IGRlZmF1bHROYXZMaW5rfSAgICAgXG4gICAgICAgICAgICAgICAgICA+U2VydmljZXM8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gYWN0aXZlTmF2TGluayA6IGRlZmF1bHROYXZMaW5rfSAgICAgXG4gICAgICAgICAgICAgICAgICA+UG9ydGZvbGlvPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxEaXNjbG9zdXJlLlBhbmVsIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTMgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIHsvKiBDdXJyZW50OiBcImJnLWluZGlnby01MCBib3JkZXItaW5kaWdvLTUwMCB0ZXh0LWluZGlnby03MDBcIiwgRGVmYXVsdDogXCJib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCIgKi99XG4gICAgICAgICAgICAgIDxOYXZMaW5rIFxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBhY3RpdmVNb2JpbGVMaW5rIDogZGVmYXVsdE1vYmlsZUxpbmt9ICAgICBcbiAgICAgICAgICAgICAgICAgID5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3NlcnZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gYWN0aXZlTW9iaWxlTGluayA6IGRlZmF1bHRNb2JpbGVMaW5rfSAgICAgXG4gICAgICAgICAgICAgICAgICA+U2VydmljZXM8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvcG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gYWN0aXZlTW9iaWxlTGluayA6IGRlZmF1bHRNb2JpbGVMaW5rfSAgICAgXG4gICAgICAgICAgICAgICAgICA+UG9ydGZvbGlvPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9EaXNjbG9zdXJlPlxuICApXG59XG4iLCAiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xuY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICBtYWluOiBbXG4gICAgICB7IG5hbWU6ICdIb21lJywgaHJlZjogJy8nIH0sXG4gICAgICB7IG5hbWU6ICdBYm91dCcsIGhyZWY6ICcvYWJvdXQnIH0sXG4gICAgICB7IG5hbWU6ICdTZXJ2aWNlcycsIGhyZWY6ICcvc2VydmljZXMnIH0sXG4gICAgICB7IG5hbWU6ICdQb3J0Zm9saW8nLCBocmVmOiAnL3BvcnRmb2xpbycgfSxcbiAgICAgIHsgbmFtZTogJ0NvbnRhY3QnLCBocmVmOiAnL2NvbnRhY3QnIH1cbiAgICBdLFxuICAgIHNvY2lhbDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRmFjZWJvb2snLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0yMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMmgyLjU0VjkuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTJoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxOC4zNDMgMjEuMTI4IDIyIDE2Ljk5MSAyMiAxMnpcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJbnN0YWdyYW0nLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMi4zMTUgMmMyLjQzIDAgMi43ODQuMDEzIDMuODA4LjA2IDEuMDY0LjA0OSAxLjc5MS4yMTggMi40MjcuNDY1YTQuOTAyIDQuOTAyIDAgMDExLjc3MiAxLjE1MyA0LjkwMiA0LjkwMiAwIDAxMS4xNTMgMS43NzJjLjI0Ny42MzYuNDE2IDEuMzYzLjQ2NSAyLjQyNy4wNDggMS4wNjcuMDYgMS40MDcuMDYgNC4xMjN2LjA4YzAgMi42NDMtLjAxMiAyLjk4Ny0uMDYgNC4wNDMtLjA0OSAxLjA2NC0uMjE4IDEuNzkxLS40NjUgMi40MjdhNC45MDIgNC45MDIgMCAwMS0xLjE1MyAxLjc3MiA0LjkwMiA0LjkwMiAwIDAxLTEuNzcyIDEuMTUzYy0uNjM2LjI0Ny0xLjM2My40MTYtMi40MjcuNDY1LTEuMDY3LjA0OC0xLjQwNy4wNi00LjEyMy4wNmgtLjA4Yy0yLjY0MyAwLTIuOTg3LS4wMTItNC4wNDMtLjA2LTEuMDY0LS4wNDktMS43OTEtLjIxOC0yLjQyNy0uNDY1YTQuOTAyIDQuOTAyIDAgMDEtMS43NzItMS4xNTMgNC45MDIgNC45MDIgMCAwMS0xLjE1My0xLjc3MmMtLjI0Ny0uNjM2LS40MTYtMS4zNjMtLjQ2NS0yLjQyNy0uMDQ3LTEuMDI0LS4wNi0xLjM3OS0uMDYtMy44MDh2LS42M2MwLTIuNDMuMDEzLTIuNzg0LjA2LTMuODA4LjA0OS0xLjA2NC4yMTgtMS43OTEuNDY1LTIuNDI3YTQuOTAyIDQuOTAyIDAgMDExLjE1My0xLjc3MkE0LjkwMiA0LjkwMiAwIDAxNS40NSAyLjUyNWMuNjM2LS4yNDcgMS4zNjMtLjQxNiAyLjQyNy0uNDY1QzguOTAxIDIuMDEzIDkuMjU2IDIgMTEuNjg1IDJoLjYzem0tLjA4MSAxLjgwMmgtLjQ2OGMtMi40NTYgMC0yLjc4NC4wMTEtMy44MDcuMDU4LS45NzUuMDQ1LTEuNTA0LjIwNy0xLjg1Ny4zNDQtLjQ2Ny4xODItLjguMzk4LTEuMTUuNzQ4LS4zNS4zNS0uNTY2LjY4My0uNzQ4IDEuMTUtLjEzNy4zNTMtLjMuODgyLS4zNDQgMS44NTctLjA0NyAxLjAyMy0uMDU4IDEuMzUxLS4wNTggMy44MDd2LjQ2OGMwIDIuNDU2LjAxMSAyLjc4NC4wNTggMy44MDcuMDQ1Ljk3NS4yMDcgMS41MDQuMzQ0IDEuODU3LjE4Mi40NjYuMzk5LjguNzQ4IDEuMTUuMzUuMzUuNjgzLjU2NiAxLjE1Ljc0OC4zNTMuMTM3Ljg4Mi4zIDEuODU3LjM0NCAxLjA1NC4wNDggMS4zNy4wNTggNC4wNDEuMDU4aC4wOGMyLjU5NyAwIDIuOTE3LS4wMSAzLjk2LS4wNTguOTc2LS4wNDUgMS41MDUtLjIwNyAxLjg1OC0uMzQ0LjQ2Ni0uMTgyLjgtLjM5OCAxLjE1LS43NDguMzUtLjM1LjU2Ni0uNjgzLjc0OC0xLjE1LjEzNy0uMzUzLjMtLjg4Mi4zNDQtMS44NTcuMDQ4LTEuMDU1LjA1OC0xLjM3LjA1OC00LjA0MXYtLjA4YzAtMi41OTctLjAxLTIuOTE3LS4wNTgtMy45Ni0uMDQ1LS45NzYtLjIwNy0xLjUwNS0uMzQ0LTEuODU4YTMuMDk3IDMuMDk3IDAgMDAtLjc0OC0xLjE1IDMuMDk4IDMuMDk4IDAgMDAtMS4xNS0uNzQ4Yy0uMzUzLS4xMzctLjg4Mi0uMy0xLjg1Ny0uMzQ0LTEuMDIzLS4wNDctMS4zNTEtLjA1OC0zLjgwNy0uMDU4ek0xMiA2Ljg2NWE1LjEzNSA1LjEzNSAwIDExMCAxMC4yNyA1LjEzNSA1LjEzNSAwIDAxMC0xMC4yN3ptMCAxLjgwMmEzLjMzMyAzLjMzMyAwIDEwMCA2LjY2NiAzLjMzMyAzLjMzMyAwIDAwMC02LjY2NnptNS4zMzgtMy4yMDVhMS4yIDEuMiAwIDExMCAyLjQgMS4yIDEuMiAwIDAxMC0yLjR6XCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHdpdHRlcicsXG4gICAgICAgIGhyZWY6ICcjJyxcbiAgICAgICAgaWNvbjogKHByb3BzKSA9PiAoXG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTguMjkgMjAuMjUxYzcuNTQ3IDAgMTEuNjc1LTYuMjUzIDExLjY3NS0xMS42NzUgMC0uMTc4IDAtLjM1NS0uMDEyLS41M0E4LjM0OCA4LjM0OCAwIDAwMjIgNS45MmE4LjE5IDguMTkgMCAwMS0yLjM1Ny42NDYgNC4xMTggNC4xMTggMCAwMDEuODA0LTIuMjcgOC4yMjQgOC4yMjQgMCAwMS0yLjYwNS45OTYgNC4xMDcgNC4xMDcgMCAwMC02Ljk5MyAzLjc0MyAxMS42NSAxMS42NSAwIDAxLTguNDU3LTQuMjg3IDQuMTA2IDQuMTA2IDAgMDAxLjI3IDUuNDc3QTQuMDcyIDQuMDcyIDAgMDEyLjggOS43MTN2LjA1MmE0LjEwNSA0LjEwNSAwIDAwMy4yOTIgNC4wMjIgNC4wOTUgNC4wOTUgMCAwMS0xLjg1My4wNyA0LjEwOCA0LjEwOCAwIDAwMy44MzQgMi44NUE4LjIzMyA4LjIzMyAwIDAxMiAxOC40MDdhMTEuNjE2IDExLjYxNiAwIDAwNi4yOSAxLjg0XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaXRIdWInLFxuICAgICAgICBocmVmOiAnIycsXG4gICAgICAgIGljb246IChwcm9wcykgPT4gKFxuICAgICAgICAgIDxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyQzYuNDc3IDIgMiA2LjQ4NCAyIDEyLjAxN2MwIDQuNDI1IDIuODY1IDguMTggNi44MzkgOS41MDQuNS4wOTIuNjgyLS4yMTcuNjgyLS40ODMgMC0uMjM3LS4wMDgtLjg2OC0uMDEzLTEuNzAzLTIuNzgyLjYwNS0zLjM2OS0xLjM0My0zLjM2OS0xLjM0My0uNDU0LTEuMTU4LTEuMTEtMS40NjYtMS4xMS0xLjQ2Ni0uOTA4LS42Mi4wNjktLjYwOC4wNjktLjYwOCAxLjAwMy4wNyAxLjUzMSAxLjAzMiAxLjUzMSAxLjAzMi44OTIgMS41MyAyLjM0MSAxLjA4OCAyLjkxLjgzMi4wOTItLjY0Ny4zNS0xLjA4OC42MzYtMS4zMzgtMi4yMi0uMjUzLTQuNTU1LTEuMTEzLTQuNTU1LTQuOTUxIDAtMS4wOTMuMzktMS45ODggMS4wMjktMi42ODgtLjEwMy0uMjUzLS40NDYtMS4yNzIuMDk4LTIuNjUgMCAwIC44NC0uMjcgMi43NSAxLjAyNkE5LjU2NCA5LjU2NCAwIDAxMTIgNi44NDRjLjg1LjAwNCAxLjcwNS4xMTUgMi41MDQuMzM3IDEuOTA5LTEuMjk2IDIuNzQ3LTEuMDI3IDIuNzQ3LTEuMDI3LjU0NiAxLjM3OS4yMDIgMi4zOTguMSAyLjY1MS42NC43IDEuMDI4IDEuNTk1IDEuMDI4IDIuNjg4IDAgMy44NDgtMi4zMzkgNC42OTUtNC41NjYgNC45NDMuMzU5LjMwOS42NzguOTIuNjc4IDEuODU1IDAgMS4zMzgtLjAxMiAyLjQxOS0uMDEyIDIuNzQ3IDAgLjI2OC4xOC41OC42ODguNDgyQTEwLjAxOSAxMC4wMTkgMCAwMDIyIDEyLjAxN0MyMiA2LjQ4NCAxNy41MjIgMiAxMiAyelwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApLFxuICAgICAgfVxuICAgIF0sXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTEyIHB4LTQgb3ZlcmZsb3ctaGlkZGVuIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiLW14LTUgLW15LTIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIiBhcmlhLWxhYmVsPVwiRm9vdGVyXCI+XG4gICAgICAgICAgICB7bmF2aWdhdGlvbi5tYWluLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNlwiPlxuICAgICAgICAgICAge25hdmlnYXRpb24uc29jaWFsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2l0ZW0ubmFtZX0gaHJlZj17aXRlbS5ocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgdGV4dC1ncmF5LTQwMFwiPiZjb3B5OyAyMDIyIENyYWZ0ZCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbiAgIiwgImltcG9ydCBQb3J0Zm9saW9CYW5uZXIgZnJvbSBcIn4vY29tcG9uZW50cy9Qb3J0Zm9saW9CYW5uZXJcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIn4vY29tcG9uZW50cy9Qb3J0Zm9saW9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9yZm9saW8oKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuXCI+XG4gICAgICAgICAgPFBvcnRmb2xpb0Jhbm5lcj48L1BvcnRmb2xpb0Jhbm5lcj5cbiAgICAgICAgICA8UG9ydGZvbGlvPjwvUG9ydGZvbGlvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb0Jhbm5lcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCB0cmFja2luZy13aWRlIHVwcGVyY2FzZVwiPlBvcnRmb2xpbzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgc206dGV4dC01eGwgc206dHJhY2tpbmctdGlnaHQgbGc6dGV4dC02eGxcIj5cbiAgICAgICAgICAgICAgU2VlIG91ciBwcmV2aW91cyBwcm9qZWN0c1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXcteGwgbXQtNSBteC1hdXRvIHRleHQteGwgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBEb24ndCBqdXN0IHRha2Ugb3VyIHdvcmQgZm9yIGl0LCBjaGVjayBvdXQgc29tZSBvZiBvdXIgZmFudGFzdGljIHByaW9yIGNsaWVudHMgYW5kIHByb2plY3RzIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICAiLCAiaW1wb3J0IHsgQXJyb3dSaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuXG5jb25zdCBmZWF0dXJlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnRW5mYW5jZSBEZXNpZ24nLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBIGN1c3RvbSB3ZWIgc2l0ZSBidWlsdCBvbiB0aGUgU2hvcGlmeSBwbGF0Zm9ybSwgYWxsb3dpbmcgZm9yIGEgYmVhdXRpZnVsIHNpdGUgYWxvbmcgd2l0aCBhbGwgdGhlIHRvb2xzIGFuZCBzdG9yZWZyb250IHByb3ZpZGVkIGJ5IFNob3BpZnknLFxuICAgICAgaW1hZ2VTcmM6ICcvX3N0YXRpYy9pbWFnZXMvRW5mYW5jZURlc2lnbi5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICdQcmV2aWV3IGltYWdlIG9mIEVuZmFuY2UgRGVzaWduIGhvbWUgcGFnZScsXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5lbmZhbmNlZGVzaWduLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXb29mIEdhbmcgR3Jvb21pbmcgQ1QnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBIHNsaWdodGx5IG1vcmUgaW52b2x2ZWQgYnVzaW5lc3Mgd2Vic2l0ZSBmb3IgYSBsb2NhbCBwZXQgYmFrZXJ5IGFuZCBncm9vbWVyLCB0aGlzIHNpdGUgaW5jbHVkZXMgc29tZSBtb3JlIGNvbXBsZXggdXNlciBleHBlcmllbmNlcyBpbmNsdWRpbmcgYSBzcGEgbWVudSwgY29udGFjdCBmb3JtLCBhbmQgdGVzdGltb25pYWxzIChjb21pbmcgc29vbiEpJyxcbiAgICAgIGltYWdlU3JjOiAnL19zdGF0aWMvaW1hZ2VzL1dvb2ZHYW5nLnBuZycsXG4gICAgICBpbWFnZUFsdDogJ1ByZXZpZXcgaW1hZ2Ugb2YgV29vZiBHYW5nIEdyb29taW5nIGhvbWUgcGFnZScsXG4gICAgICB1cmw6ICdodHRwczovL3dvb2ZnYW5nY3QuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSldQIEhhbmR5bWFuJyxcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgJ0Egc2ltcGxlIGJ1c2luZXNzIHdlYnNpdGUgZm9yIGEgbG9jYWwgaGFuZHltYW4sIGEgZmFudGFzdGljIGV4YW1wbGUgb2YgdGhlIHF1aWNrZXN0IGFuZCBlYXNpZXN0IHR5cGUgb2Ygc2l0ZSB0byBnZXQgdXAgYW5kIHJ1bm5pbmcgZm9yIHlvdXIgYnVzaW5lc3MhJyxcbiAgICAgICAgaW1hZ2VTcmM6ICcvX3N0YXRpYy9pbWFnZXMvSldQLnBuZycsXG4gICAgICAgIGltYWdlQWx0OiAnUHJldmlldyBpbWFnZSBvZiBKV1AgSGFuZHltYW4gaG9tZSBwYWdlJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9qd3BoYW5keW1hbi5jb20nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUGVyc29uYWwgU2l0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICdBbiBleGFtcGxlIG9mIGhvdyB5b3UgY2FuIGJyaW5nIHlvdXIgcmVzdW1lIHRvIGxpZmUgYXMgYSB3ZWJzaXRlIHRvIHdvdyBwb3RlbnRpYWwgZW1wbG95ZXJzIG9yIGFueW9uZSBsb29raW5nIHRvIHZpZXcgeW91ciBleHBlcmllbmNlIGFuZCBiYWNrZ3JvdW5kIScsXG4gICAgICAgIGltYWdlU3JjOiAnL19zdGF0aWMvaW1hZ2VzL1BlcnNvbmFsU2l0ZS5wbmcnLFxuICAgICAgICBpbWFnZUFsdDogJ1ByZXZpZXcgaW1hZ2Ugb2YgcGVyc29uYWwgc2l0ZSBtYWluIHBhZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL2Rhbm1hcnF1aXMuY29tJ1xuICAgICAgfSxcbiAgXVxuICBcbiAgZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBwYi0yNCBweC00IHNtOnB4LTYgc206cGItMzIgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTZcIj5cbiAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGZlYXR1cmVJZHgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17ZmVhdHVyZS5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBsZzpncmlkIGxnOmdyaWQtY29scy0xMiBsZzpnYXAteC04IGxnOml0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVJZHggJSAyID09PSAwID8gJ2xnOmNvbC1zdGFydC0xJyA6ICdsZzpjb2wtc3RhcnQtOCB4bDpjb2wtc3RhcnQtOScsXG4gICAgICAgICAgICAgICAgICAgICdtdC02IGxnOm10LTAgbGc6cm93LXN0YXJ0LTEgbGc6Y29sLXNwYW4tNSB4bDpjb2wtc3Bhbi00J1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2ZlYXR1cmUubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZmVhdHVyZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbXktNCBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDaGVjayBpdCBvdXRcbiAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLTIgLW1yLTEgaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlSWR4ICUgMiA9PT0gMCA/ICdsZzpjb2wtc3RhcnQtNiB4bDpjb2wtc3RhcnQtNScgOiAnbGc6Y29sLXN0YXJ0LTEnLFxuICAgICAgICAgICAgICAgICAgICAnZmxleC1hdXRvIGxnOnJvdy1zdGFydC0xIGxnOmNvbC1zcGFuLTcgeGw6Y29sLXNwYW4tOCdcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy01IGFzcGVjdC1oLTIgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZlYXR1cmUuaW1hZ2VTcmN9IGFsdD17ZmVhdHVyZS5pbWFnZUFsdH0gY2xhc3NOYW1lPVwib2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gICIsICJpbXBvcnQgU2VydmljZURldGFpbHMgZnJvbSBcIn4vY29tcG9uZW50cy9TZXJ2aWNlRGV0YWlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW5cIj5cbiAgICAgICAgPFNlcnZpY2VEZXRhaWxzPjwvU2VydmljZURldGFpbHM+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IiwgIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cbmltcG9ydCB7IEFubm90YXRpb25JY29uLCBHbG9iZUFsdEljb24sIExpZ2h0bmluZ0JvbHRJY29uLCBNYWlsSWNvbiwgU2NhbGVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuXG5jb25zdCBwcm9mZXNzaW9uYWxTaXRlRmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnS2V5IGJ1c2luZXNzIGluZm9ybWF0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCdXNpbmVzcyBob3Vycywgc2VydmljZXMsIGxvY2F0aW9ucyBhbmQgbW9yZSBhbGwgYXQgdGhlIGZpbmdlcnRpcHMgZm9yIGN1c3RvbWVycyBhcm91bmQgdGhlIGdsb2JlLCAyNC83LicsXG4gICAgaWNvbjogR2xvYmVBbHRJY29uLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ0RpZ2l0YWwgcG9pbnQgb2YgY29udGFjdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQ3VzdG9tZXJzIGFyZSBvbmxpbmUgYWxtb3N0IGFyb3VuZCB0aGUgY2xvY2ssIGEgcHJvZmVzc2lvbmFsIHdlYnNpdGUgY2FuIGdpdmUgdGhlbSBlYXN5IHdheXMgdG8gY29udGFjdCB5b3UgdmlhIGVtYWlsLCBjaGF0LCBldGMuIGF0IGEgdGltZSB0aGF0IHdvcmtzIGJlc3QgZm9yIHRoZW0uJyxcbiAgICBpY29uOiBTY2FsZUljb24sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnTW9kZXJuIGFuZCBmYXN0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdNYWtlIGEgZmFudGFzdGljIGZpcnN0IGltcHJlc3Npb24gd2l0aCBhIGJlYXV0aWZ1bCBkaWdpdGFsIHNwYWNlIHRoYXQgbG9hZHMgaW4gYSBzbmFwIScsXG4gICAgaWNvbjogTGlnaHRuaW5nQm9sdEljb24sXG4gIH0sXG5dXG5jb25zdCBzdG9yZWZyb250RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnTWFuYWdlIHlvdXIgcHJvZHVjdHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1VzaW5nIHBvcHVsYXIgc2l0ZXMgbGlrZSBTaG9waWZ5IHlvdSBjYW4gbWFuYWdlIHlvdXIgcHJvZHVjdHMsIHByaWNlcywgc2FsZXMsIGFuZCBtb3JlIHlvdXJzZWxmIHdoaWxlIGFsc28gYnVpbGRpbmcgdGhlIGV4cGVyaWVuY2UgeW91IHdhbnQnLFxuICAgIGljb246IEFubm90YXRpb25JY29uLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ01hbmFnZSB5b3VyIGNvbnRlbnQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1dlXFwnbGwgd29yayB0b2dldGhlciB0byBidWlsZCBhIHNpdGUgd2l0aCBhbGwgdGhlIGNvbnRlbnQgeW91XFwncmUgbG9va2luZyBmb3IgYW5kIGFsc28gJyxcbiAgICBpY29uOiBNYWlsSWNvbixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6ICdDdXN0b21pemVkIGZvciB5b3VyIGJ1c2luZXNzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWFpb3JlcyBpbXBlZGl0IHBlcmZlcmVuZGlzIHN1c2NpcGl0IGVhcXVlLCBpc3RlIGRvbG9yIGN1cGlkaXRhdGUgYmxhbmRpdGlpcyByYXRpb25lLicsXG4gICAgaWNvbjogTWFpbEljb24sXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VEZXRhaWxzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgYmctZ3JheS01MCBvdmVyZmxvdy1oaWRkZW4gbGc6cHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXcteGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOCBsZzptYXgtdy03eGxcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSBsZWZ0LWZ1bGwgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvNFwiXG4gICAgICAgICAgd2lkdGg9ezQwNH1cbiAgICAgICAgICBoZWlnaHQ9ezc4NH1cbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgNzg0XCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cGF0dGVyblxuICAgICAgICAgICAgICBpZD1cImIxZTZlNDIyLTczZjgtNDBhNi1iNWQ5LWM4NTg2ZTM3ZTBlN1wiXG4gICAgICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgICAgIHk9ezB9XG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8L3BhdHRlcm4+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPXs0MDR9IGhlaWdodD17Nzg0fSBmaWxsPVwidXJsKCNiMWU2ZTQyMi03M2Y4LTQwYTYtYjVkOS1jODU4NmUzN2UwZTcpXCIgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBsZWFkaW5nLTggZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgT3VyIFNlcnZpY2VzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIHRleHQteGwgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgTm8gbWF0dGVyIHRoZSBleHBlcmllbmNlIHlvdSdyZSBsb29raW5nIHRvIGNyZWF0ZSwgd2UncmUgaGVyZSB0byBoZWxwIGZyb20gZGVzaWduIHRvIGJ1aWxkIHRvIG1haW50YWluLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xMiBsZzptdC0yNCBsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOmdhcC04IGxnOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtM3hsXCI+XG4gICAgICAgICAgICAgIFJlcHJlc2VudCB5b3VyIGJ1c2luZXNzIHdpdGggYSBwcm9mZXNzaW9uYWwgd2Vic2l0ZVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1sZyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIEEgc2xlZWssIGZhc3Qgd2Vic2l0ZSBjYW4gcHJvdmlkZSBrZXkgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidXNpbmVzcyB0byBjdXJyZW50IGFuZCBwb3RlbnRpYWwgY3VzdG9tZXJzIGFsaWtlLiBJbiBhIGRpZ2l0YWwgd29ybGQgeW91IG5lZWQgYSBkaWdpdGFsIHByZXNlbmNlIVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibXQtMTAgc3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICB7cHJvZmVzc2lvbmFsU2l0ZUZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPGR0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLW1kIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xNiB0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm10LTIgbWwtMTYgdGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj57aXRlbS5kZXNjcmlwdGlvbn08L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIC1teC00IHJlbGF0aXZlIGxnOm10LTBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdHJhbnNsYXRlLXktMTYgbGc6aGlkZGVuXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezc4NH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MDR9XG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA3ODQgNDA0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgIGlkPVwiY2E5NjY3YWUtOWY5Mi00YmU3LWFiY2ItOWUzZDcyN2YyOTQxXCJcbiAgICAgICAgICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgICAgICAgICB5PXswfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICAgIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxuICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXs3ODR9IGhlaWdodD17NDA0fSBmaWxsPVwidXJsKCNjYTk2NjdhZS05ZjkyLTRiZTctYWJjYi05ZTNkNzI3ZjI5NDEpXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezQ5MH1cbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZmVhdHVyZXMvZmVhdHVyZS1leGFtcGxlLTEucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYWJzb2x1dGUgcmlnaHQtZnVsbCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXgtMS8yIHRyYW5zbGF0ZS15LTEyXCJcbiAgICAgICAgICB3aWR0aD17NDA0fVxuICAgICAgICAgIGhlaWdodD17Nzg0fVxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQwNCA3ODRcIlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxwYXR0ZXJuXG4gICAgICAgICAgICAgIGlkPVwiNjRlNjQzYWQtMjE3Ni00Zjg2LWIzZDctZjJjNWRhM2I2YTZkXCJcbiAgICAgICAgICAgICAgeD17MH1cbiAgICAgICAgICAgICAgeT17MH1cbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9ezQwNH0gaGVpZ2h0PXs3ODR9IGZpbGw9XCJ1cmwoIzY0ZTY0M2FkLTIxNzYtNGY4Ni1iM2Q3LWYyYzVkYTNiNmE2ZClcIiAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTEyIHNtOm10LTE2IGxnOm10LTI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpncmlkIGxnOmdyaWQtZmxvdy1yb3ctZGVuc2UgbGc6Z3JpZC1jb2xzLTIgbGc6Z2FwLTggbGc6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zdGFydC0yXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtM3hsXCI+RGlnaXRhbCBTdG9yZWZyb250PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxnIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBPbmxpbmUgc2hvcHBpbmcgY29udGludWVzIHRvIHNreXJvY2tldCwgbGV0J3MgYnVpbGQgYSBkaWdpdGFsIHN0b3JlIHRoYXQgY2FuIGtlZXAgdXAgd2l0aCB5b3UgYW5kIHlvdXIgY3VzdG9tZXJzLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTEwIHNwYWNlLXktMTBcIj5cbiAgICAgICAgICAgICAgICB7c3RvcmVmcm9udEZlYXR1cmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTIgdy0xMiByb3VuZGVkLW1kIGJnLWluZGlnby01MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xNiB0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0yIG1sLTE2IHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9kZD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgLW14LTQgcmVsYXRpdmUgbGc6bXQtMCBsZzpjb2wtc3RhcnQtMVwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdHJhbnNsYXRlLXktMTYgbGc6aGlkZGVuXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17Nzg0fVxuICAgICAgICAgICAgICAgIGhlaWdodD17NDA0fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDc4NCA0MDRcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZTgwMTU1YTktZGZkZS00MjVhLWI1ZWEtMWY2ZmFkZDIwMTMxXCJcbiAgICAgICAgICAgICAgICAgICAgeD17MH1cbiAgICAgICAgICAgICAgICAgICAgeT17MH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXs0fSBoZWlnaHQ9ezR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9ezc4NH0gaGVpZ2h0PXs0MDR9IGZpbGw9XCJ1cmwoI2U4MDE1NWE5LWRmZGUtNDI1YS1iNWVhLTFmNmZhZGQyMDEzMSlcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG9cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXs0OTB9XG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZmVhdHVyZXMvZmVhdHVyZS1leGFtcGxlLTIucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCBGb3JtLCB1c2VUcmFuc2l0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tIFwifi91dGlscy9zZW5kRW1haWxcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBlbWFpbCA9IHtcbiAgICBuYW1lOiBib2R5LmdldCgnZmlyc3QtbmFtZScpICsgJyAnICsgYm9keS5nZXQoJ2xhc3QtbmFtZScpLFxuICAgIGVtYWlsOiBib2R5LmdldCgnZW1haWwnKSxcbiAgICBtZXNzYWdlOiBib2R5LmdldCgnbWVzc2FnZScpLFxuICAgIGNvbXBhbnk6IGJvZHkuZ2V0KCdjb21wYW55JyksXG4gICAgcGhvbmU6IGJvZHkuZ2V0KCdwaG9uZS1udW1iZXInKVxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRFbWFpbChKU09OLnN0cmluZ2lmeShlbWFpbCkpO1xuXG4gIGlmKHJlc3VsdCkge1xuICAgIHJldHVybiByZWRpcmVjdCgnL2NvbnRhY3Q/c3RhdHVzPXN1Y2Nlc3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCBkYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0xNiBweC00IG92ZXJmbG93LWhpZGRlbiBzbTpweC02IGxnOnB4LTggbGc6cHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1mdWxsIHRyYW5zZm9ybSB0cmFuc2xhdGUteC0xLzJcIlxuICAgICAgICAgIHdpZHRoPXs0MDR9XG4gICAgICAgICAgaGVpZ2h0PXs0MDR9XG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDA0IDQwNFwiXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPHBhdHRlcm5cbiAgICAgICAgICAgICAgaWQ9XCI4NTczN2MwZS0wOTE2LTQxZDctOTE3Zi01OTZkYzdlZGZhMjdcIlxuICAgICAgICAgICAgICB4PXswfVxuICAgICAgICAgICAgICB5PXswfVxuICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9ezR9IGhlaWdodD17NH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgPC9wYXR0ZXJuPlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD17NDA0fSBoZWlnaHQ9ezQwNH0gZmlsbD1cInVybCgjODU3MzdjMGUtMDkxNi00MWQ3LTkxN2YtNTk2ZGM3ZWRmYTI3KVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtZnVsbCBib3R0b20tMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiXG4gICAgICAgICAgd2lkdGg9ezQwNH1cbiAgICAgICAgICBoZWlnaHQ9ezQwNH1cbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA0MDQgNDA0XCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8cGF0dGVyblxuICAgICAgICAgICAgICBpZD1cIjg1NzM3YzBlLTA5MTYtNDFkNy05MTdmLTU5NmRjN2VkZmEyN1wiXG4gICAgICAgICAgICAgIHg9ezB9XG4gICAgICAgICAgICAgIHk9ezB9XG4gICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17NH0gaGVpZ2h0PXs0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8L3BhdHRlcm4+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPXs0MDR9IGhlaWdodD17NDA0fSBmaWxsPVwidXJsKCM4NTczN2MwZS0wOTE2LTQxZDctOTE3Zi01OTZkYzdlZGZhMjcpXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPkxldCdzIGNoYXQ8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1sZyBsZWFkaW5nLTYgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgV2hldGhlciB5b3UncmUgcmVhZHkgdG8ganVtcCBpbnRvIGEgcHJvamVjdCBvciB5b3UganVzdCBoYXZlIGEgZmV3IHF1ZXN0aW9ucyBhYm91dCB5b3VyIGRpZ2l0YWwgZm9vdHByaW50LCBzZW5kIG1lIGEgbWVzc2FnZSBhbmQgSSdsbCBzZWUgaG93IEkgY2FuIGhlbHAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTYgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtOFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdC1uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgRmlyc3QgbmFtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJnaXZlbi1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBibG9jayB3LWZ1bGwgc2hhZG93LXNtIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdC1uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgTGFzdCBuYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cImxhc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYW1pbHktbmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTQgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wYW55XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgQ29tcGFueVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvcmdhbml6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IGJsb2NrIHctZnVsbCBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTQgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZS1udW1iZXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHJlbGF0aXZlIHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgIENvdW50cnlcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHB5LTAgcGwtNCBwci04IGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RVU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBob25lLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IGJsb2NrIHctZnVsbCBwbC0yMCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrMSAoNTU1KSA5ODctNjU0M1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTQgYmxvY2sgdy1mdWxsIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Jyd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJyA/ICdTdWJtaXR0aW5nLi4uJyA6ICdMZXRcXCdzIHRhbGsnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSBhc3luYyBlbWFpbCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwczovLzZydWdjMXI3YzYuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vcHJvZC9lbWFpbC1kZXYnLCB7bWV0aG9kOiAnUE9TVCcsIGJvZHk6IGVtYWlsfSk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcblxuICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciEnKTtcbiAgICB9XG59OyIsICJpbXBvcnQgQmFubmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvQmFubmVyXCI7XG5pbXBvcnQgSW50cm8gZnJvbSBcIn4vY29tcG9uZW50cy9JbnRyb1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvQWJvdXRcIjtcbmltcG9ydCBQcm9qZWN0c1Byb21vIGZyb20gXCJ+L2NvbXBvbmVudHMvUHJvamVjdHNQcm9tb1wiO1xuaW1wb3J0IENvbnRhY3RQcm9tbyBmcm9tIFwifi9jb21wb25lbnRzL0NvbnRhY3RQcm9tb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gc2Nyb2xsLXNtb290aFwiPlxuICAgICAgPEJhbm5lcj48L0Jhbm5lcj5cbiAgICAgIDxJbnRybz48L0ludHJvPlxuICAgICAgPEFib3V0PjwvQWJvdXQ+XG4gICAgICA8UHJvamVjdHNQcm9tbz48L1Byb2plY3RzUHJvbW8+XG4gICAgICA8Q29udGFjdFByb21vPjwvQ29udGFjdFByb21vPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9ob21lLXBhZ2UtMDEtaGVyby1mdWxsLXdpZHRoLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLWZ1bGwgb2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktOTAwIG9wYWNpdHktNTBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LXNjcmVlbiBteC1hdXRvIHB5LTMyIHB4LTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgc206cHktNDggbGc6cHgtMFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlIGxnOnRleHQtNnhsXCI+Q3JhZnRkIFRlY2hub2xvZ2llczwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjsiLCAiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xuaW1wb3J0IHtcbiAgICBCcmllZmNhc2VJY29uLFxuICAgIFNob3BwaW5nQ2FydEljb24sXG4gICAgRG9jdW1lbnRUZXh0SWNvblxuICB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbiAgXG4gIGNvbnN0IGZlYXR1cmVzID0gW1xuICAgIHsgbmFtZTogJ1Byb2Zlc3Npb25hbCBXZWJzaXRlcycsIGljb246IEJyaWVmY2FzZUljb24sIGRlc2NyaXB0aW9uOiAnTWVldCB5b3VyIGN1c3RvbWVycywgaW50cm9kdWNlIHlvdXJzZWxmLCBhbmQgcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgYnVzaW5lc3Mgd2l0aCBhIGZhc3QsIHByb2Zlc3Npb25hbCB3ZWJzaXRlLicgfSxcbiAgICB7IG5hbWU6ICdEaWdpdGFsIFN0b3JlZnJvbnRzJywgaWNvbjogU2hvcHBpbmdDYXJ0SWNvbiwgZGVzY3JpcHRpb246ICdOZWVkIHRvIHNlbGwgYW5kIG1hbmFnZSBwcm9kdWN0cz8gV2UgY2FuIGNyZWF0ZSBhIGRpZ2l0YWwgc3RvcmVmcm9udCB0aGF0IGJlc3QgcmVwcmVzZW50cyB5b3UgYW5kIHlvdXIgYnVzaW5lc3MuJyB9LFxuICAgIHsgbmFtZTogJ1BlcnNvbmFsIFNpdGVzJywgaWNvbjogRG9jdW1lbnRUZXh0SWNvbiwgZGVzY3JpcHRpb246ICdPbiB0aGUgam9iIGZyb250IG9yIGxvb2tpbmcgdG8gc2hhcmUgeW91ciBiYWNrZ3JvdW5kIGluIHRoaXMgZGlnaXRhbCB3b3JsZD8gQSBwZXJzb25hbCB3ZWJzaXRlIGNhbiBkbyBhbGwgb2YgdGhhdCBhbmQgbW9yZS4nIH1cbiAgXVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgcHktMTYgc206cHktMjQgbGc6cHktMzJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LW1kIHB4LTQgdGV4dC1jZW50ZXIgc206bWF4LXctM3hsIHNtOnB4LTYgbGc6cHgtOCBsZzptYXgtdy03eGxcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1pbmRpZ28tNjAwIHVwcGVyY2FzZVwiPkJ1aWxkaW5nIHlvdXIgZGlnaXRhbCBmb290cHJpbnQgY2FuIHNlZW0gY29tcGxpY2F0ZWQ8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgTGV0IG1lIG1ha2UgaXQgZWFzeSBmb3IgeW91XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbWF4LXctcHJvc2UgbXgtYXV0byB0ZXh0LXhsIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICBGcm9tIG5ldHdvcmsgc2V0dXAgdG8gd2Vic2l0ZXMgYW5kIG1vYmlsZSBhcHBsaWNhdGlvbnMgd2UgY2FuIGJyaW5nIGl0IHRvIGxpZmVcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC04IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmVhdHVyZS5uYW1lfSBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb3ctcm9vdCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgcHgtNiBwYi04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyBiZy1pbmRpZ28tNTAwIHJvdW5kZWQtbWQgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxmZWF0dXJlLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJhY2tpbmctdGlnaHRcIj57ZmVhdHVyZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICAiLCAiY29uc3QgcGVvcGxlID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdEYW4gTWFycXVpcycsXG4gICAgICByb2xlOiAnRm91bmRlcicsXG4gICAgICBpbWFnZVVybDpcbiAgICAgICAgJ2h0dHBzOi8vZGFubWFycXVpcy5jb20vaW1nL3Byb2ZpbGUuanBnJyxcbiAgICAgIGJpbzpcbiAgICAgICAgJ1dpdGggMTAgeWVhcnMgb2YgZXhwZXJpZW5jZSBidWlsZGluZyBldmVyeXRoaW5nIGZyb20gc2ltcGxlIHdlYnNpdGVzIHRvIGNvbXBsZXggc29mdHdhcmUgcGxhdGZvcm1zLCBJXFwnbSByZWFkeSB0byBoZWxwIHlvdSBkZXNpZ24gYW5kIGJ1aWxkIHlvdXIgZGlnaXRhbCBmb290cHJpbnQgbGFyZ2Ugb3Igc21hbGwhJyxcbiAgICAgIGxpbmtlZGluVXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhbmllbC1tYXJxdWlzLycsXG4gICAgfSxcbiAgXVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHB5LTEyIHB4LTQgbWF4LXctN3hsIHNtOnB4LTYgbGc6cHgtOCBsZzpweS0yNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMiBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmdhcC04IGxnOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTUgc206c3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTR4bFwiPkFib3V0IE1lPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgVGhlIGV4cGVyaWVuY2UgdG8gYnJpbmcgeW91ciBkaWdpdGFsIHByb2plY3QgdG8gbGlmZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICByb2xlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS0xMiBzbTpkaXZpZGUteSBzbTpkaXZpZGUtZ3JheS0yMDAgc206c3BhY2UteS0wIHNtOi1tdC04IGxnOmdhcC14LTggbGc6c3BhY2UteS0wXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwZW9wbGUubWFwKChwZXJzb24pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BlcnNvbi5uYW1lfSBjbGFzc05hbWU9XCJzbTpweS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHNtOmdyaWQgc206Z3JpZC1jb2xzLTMgc206aXRlbXMtc3RhcnQgc206Z2FwLTYgc206c3BhY2UteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0zIGFzcGVjdC1oLTIgc206YXNwZWN0LXctMyBzbTphc3BlY3QtaC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBzaGFkb3ctbGcgcm91bmRlZC1sZ1wiIHNyYz17cGVyc29uLmltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwXCI+e3BlcnNvbi5yb2xlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57cGVyc29uLmJpb308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BlcnNvbi5saW5rZWRpblVybH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5MaW5rZWRJbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYuMzM4IDE2LjMzOEgxMy42N1YxMi4xNmMwLS45OTUtLjAxNy0yLjI3Ny0xLjM4Ny0yLjI3Ny0xLjM5IDAtMS42MDEgMS4wODYtMS42MDEgMi4yMDd2NC4yNDhIOC4wMTR2LTguNTloMi41NTl2MS4xNzRoLjAzN2MuMzU2LS42NzUgMS4yMjctMS4zODcgMi41MjYtMS4zODcgMi43MDMgMCAzLjIwMyAxLjc3OCAzLjIwMyA0LjA5MnY0LjcxMXpNNS4wMDUgNi41NzVhMS41NDggMS41NDggMCAxMS0uMDAzLTMuMDk2IDEuNTQ4IDEuNTQ4IDAgMDEuMDAzIDMuMDk2em0tMS4zMzcgOS43NjNINi4zNHYtOC41OUgzLjY2N3Y4LjU5ek0xNy42NjggMUgyLjMyOEMxLjU5NSAxIDEgMS41ODEgMSAyLjI5OHYxNS40MDNDMSAxOC40MTggMS41OTUgMTkgMi4zMjggMTloMTUuMzRjLjczNCAwIDEuMzMyLS41ODIgMS4zMzItMS4yOTlWMi4yOThDMTkgMS41ODEgMTguNDAyIDEgMTcuNjY4IDF6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzUHJvbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9pbWcvZWNvbW1lcmNlLWltYWdlcy9ob21lLXBhZ2UtMDEtZmVhdHVyZS1zZWN0aW9uLTAxLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jZW50ZXIgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTc1IHB5LTMyIHB4LTYgc206cHktNDAgc206cHgtMTIgbGc6cHgtMTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy0zeGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBzbTppbmxpbmVcIj5DaGVjayBvdXQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgc206aW5saW5lXCI+b3VyIHByb2plY3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LXhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIE91ciBwb3J0Zm9saW8gb2YgcHJldmlvdXMgcHJvamVjdHMgYW5kIGNsaWVudHMgc2hvd2Nhc2VzIGFsbCBsZXZlbHMgb2YgY29tcGxleGl0eSB3ZSBjYW4gdGFrZSBvbi4gVGFrZSBhIGxvb2sgYXQgc29tZSBvZiB0aGUgZmFudGFzdGljIGNsaWVudHMgd2UndmUgd29ya2VkIHdpdGggYW5kIHRoZSBkaWdpdGFsIGV4cGVyaWVuY2VzIHdlJ3ZlIGNyZWF0ZWQhXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBibG9jayBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgcHktMyBweC04IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktMTAwIHNtOnctYXV0b1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJldmlvdXMgUHJvamVjdHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gICIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0UHJvbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHktMTIgcHgtNCBzbTpweC02IGxnOnB5LTI0IGxnOnB4LTggbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbWQ6dGV4dC00eGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCI+UmVhZHkgdG8gZ2V0IHN0YXJ0ZWQ/PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1pbmRpZ28tNjAwXCI+TGV0J3MgY2hhdDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGxnOm10LTAgbGc6ZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCByb3VuZGVkLW1kIHNoYWRvd1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTUgcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbnRhY3QgbWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gICJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFlBQXVCOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFHaEIsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNqQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FDQUEsbUJBQTJCO0FBQzNCLHFCQUFnQztBQU9qQixrQkFBa0I7QUFDL0IsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxtQkFBbUI7QUFDekIsUUFBTSxvQkFBb0I7QUFFMUIsU0FDRSxvQ0FBQyx5QkFBRDtBQUFBLElBQVksSUFBRztBQUFBLElBQU0sV0FBVTtBQUFBLEtBQzVCLENBQUMsRUFBRSxXQUNGLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUViLG9DQUFDLHdCQUFXLFFBQVo7QUFBQSxJQUFtQixXQUFVO0FBQUEsS0FDM0Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVUsbUJB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
