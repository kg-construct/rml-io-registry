async function loadTurtle() {
  //this is the function you call in 'preProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });
  const action = "highlight-load-lang";
  const langURL =
    "https://cdn.jsdelivr.net/gh/redmer/highlightjs-turtle/src/languages/turtle.js";
  const propName = "hljsDefineTurtle"; // This funtion is defined in the highlighter being loaded
  const lang = "turtle"; // this is the class you use to identify the language
  worker.postMessage({ action, langURL, propName, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

var respecConfig = {
  // check https://respec.org/docs/ for the meaning of these keys
  preProcess: [loadTurtle],
  otherLinks: [],
  shortName: "RML-Ref-JSON-Path",
  specStatus: "CG-DRAFT",
  // W3C config
  copyrightStart: "2024",
  doJsonLd: true,
  group: "kg-construct",
  github: "https://github.com/kg-construct/rml-io-registry",
  license: "w3c-software-doc",
  edDraftURI: "https://w3id.org/rml/io-registry/json-path/spec",
  authors: [
    {
      name: "Sitt Min Oo",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://data.knows.idlab.ugent.be/person/minoo/#me",
      orcid: "0000-0001-9157-7507",
      companyURL: "https://knows.idlab.ugent.be/"
    },
    {
      name: "Ben De Meester",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://ben.de-meester.org/#me",
      orcid: "0000-0003-0248-0987",
      companyURL: "https://knows.idlab.ugent.be/"
    },
    {
      name: "Pano Maria",
      company: "Skemu",
      url: "https://skemu.com",
      orcid: "0009-0000-2598-1894",
      companyURL: "https://skemu.com"
    },
    {
      name: "Dylan Van Assche",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://dylanvanassche.be",
      orcid: "0000-0002-7195-9935",
      companyURL: "https://knows.idlab.ugent.be/"
    },
  ],
  editors: [
    {
      name: "Sitt Min Oo",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://data.knows.idlab.ugent.be/person/minoo/#me",
      orcid: "0000-0001-9157-7507",
      companyURL: "https://knows.idlab.ugent.be/"
    },
    {
      name: "Ben De Meester",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://ben.de-meester.org/#me",
      orcid: "0000-0003-0248-0987",
      companyURL: "https://knows.idlab.ugent.be/"
    },
    {
      name: "Pano Maria",
      company: "Skemu",
      url: "https://skemu.com",
      orcid: "0009-0000-2598-1894",
      companyURL: "https://skemu.com"
    },
  ],
  formerEditors: [
    {
      name: "Dylan Van Assche",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://dylanvanassche.be",
      orcid: "0000-0002-7195-9935",
      companyURL: "https://knows.idlab.ugent.be/"
    },
  ],
  localBiblio: {
    "RML-Core": {
      title: "RML-Core",
      href: "https://w3id.org/rml/core/spec",
      status: "Draft Community Group Report",
      publisher: "W3C",
      date: "07 August 2024",
    },
    "RML-IO": {
      title: "RML-IO",
      href: "https://w3id.org/rml/io/spec",
      status: "Draft Community Group Report",
      publisher: "W3C",
      date: "12 March 2024",
    },
  },
};
