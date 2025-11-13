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
  authors: [
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
      name: "Sitt Min Oo",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://data.knows.idlab.ugent.be/person/minoo/#me",
      orcid: "0000-0001-9157-7507",
      companyURL: "https://knows.idlab.ugent.be/"
    }
  ],
  edDraftURI: "https://w3id.org/rml/io-registry/csvw/spec",
  editors: [
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
      name: "Sitt Min Oo",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://data.knows.idlab.ugent.be/person/minoo/#me",
      orcid: "0000-0001-9157-7507",
      companyURL: "https://knows.idlab.ugent.be/"
    }
  ],
  formerEditors: [
    {
      name: "Dylan Van Assche",
      company: "Ghent University &ndash; imec &ndash; IDLab",
      url: "https://dylanvanassche.be",
      orcid: "0000-0002-7195-9935",
      companyURL: "https://knows.idlab.ugent.be/"
    }
  ],
  github: "https://github.com/kg-construct/rml-io-registry",
  license: "w3c-software-doc",
  localBiblio: {
    "Metadata-Tabular":{
      title: "Metadata Vocabulary for Tabular Data",
      href: "https://www.w3.org/TR/tabular-metadata/",
      status: "W3C Recommendation",
      publisher: "W3C",
      date: "17 December 2015",
    }, 
    "Turtle": {
      title: "RDF 1.1 Turtle",
      href: "https://www.w3.org/TR/turtle/",
      status: "W3C Recommendation",
      publisher: "W3C",
      date: "25 February 2014",
    },
    "CSVW-Namespace": {
      title: "CSVW Namespace Vocabulary Terms",
      href: "https://www.w3.org/ns/csvw",
      status: "W3C Document",
      publisher: "W3C",
      date: "06 June 2017",
    },
    "CSV": {
      title: "Common Format and MIME Type for Comma-Separated Values (CSV) Files",
      href: "https://www.ietf.org/rfc/rfc4180.txt",
      status: "Internet Standard",
      publisher: "IETF",
      date: "October 2005",
    },
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
  otherLinks: [],
  shortName: "RML-IO-Registry",
  specStatus: "CG-DRAFT",
  // W3C config
  copyrightStart: "2024",
  doJsonLd: true,
  group: "kg-construct",
};
