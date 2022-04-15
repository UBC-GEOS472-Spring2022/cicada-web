// this code uses the Mapbox template to structure the map into chapters
// each chapter has text, opacity settings for making layers visible/invisible, and sometimes an image
// this code uses the Mapbox template to structure the map into chapters, each with text and layers set to turn opaque
var config = {
  style: "mapbox://styles/bugbuddies/cl1ckfosb002116s9fvciy3wg",
  accessToken:
    "pk.eyJ1IjoiYnVnYnVkZGllcyIsImEiOiJjbDB2amE5cTIwMjltM2VycHR6eXVvbzR1In0.bZJBTwMV6omlkgfOTcIHkA",
  showMarkers: false,
  //markerColor: '#3FB1CE',
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
  title: "",
  subtitle: "Periodical cicada emergences by county",
  byline: "",
  footer:
    'Cicada predictions were sourced from <a href="https://data.fs.usda.gov/geodata/edw/edw_resources/meta/S_USA.Periodical_Cicada_Brood.xml" target="_blank">U.S. Forest Service</a>; temperature data from <a href="https://www.ncdc.noaa.gov/cag/county/mapping" target="_blank">NOAA</a>; cicada sounds from <a href="https://commons.wikimedia.org/wiki/File:A_Magicicada_chorus_containing_M._septendecim,_M._cassini,_and_M._septendecula_-_pone.0000892.s004.oga" target="_blank">Fontaine, K., Cooley, J., and Simon, C.</a> (CC BY 2.5); and brood aliases from <a href="https://cicadas.uconn.edu/broods/" target="_blank">University of Connecticut</a>.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "all-years",
      alignment: "left",
      hidden: false,
      title: "Predicted cicada emergences for U.S. counties, 2014-2030",
      //image: './path/to/image/source.png',
      description:"This map shows the next cicada emergence for each county as predicted in 2013, based on over a century of historical data (Liebhold et al., 2013). The number of cicada emergences per county is represented by point size and the volume of sound from clicking on that point.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{layer: "cicada-county-all",
          opacity: 0.75,
          stroke_opacity: 1,
          duration: 2000}],
      onChapterExit: [],
    },
    
    
    {
      id: "history",
      alignment: "left",
      hidden: false,
      title: "Mapping cicadas through history",
      description:"The robust historical record of cicada monitoring by non-expert citizens enables predictions about when and where cicadas will emerge across the country in any given year. From the beginning, this historical record has relied on crowdsourced data, even before it was recognized as “citizen science.” The first set of maps of periodical cicada brood emergence was compiled in 1898 by Christopher Marlatt based on reports collected from weather reporters, postmasters, and both amateur and professional entomologists (Cooley et al., 2015). These maps were updated by Marlatt in 1907 and by Simon et al. in 1988 using more crowdsourced data, forming the basis for the county-level predictions seen here (Liebhold et al., 2013).",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{layer: "cicada-county-all",
          opacity: 0.75,
          stroke_opacity: 1,
          duration: 2000}],
      onChapterExit: [],
    },
    
    
    {
      id: "about-emergences",
      alignment: "left",
      hidden: false,
      title: "Emergences and broods",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/2004May21-Cicada_%286%29.JPG",
      caption: "Cicadas emerging in masses (Greg Hume, CC BY-SA 3.0).",
      description: "Each emergence is a synchronized group of cicadas that reaches adulthood at the same time, and emergences are classed into broods based on the year in which they reach adulthood and their life cycle length (Koenig & Liebhold, 2013). Broods up to XVII live for 17 years, while broods XVIII and above live for 13 years (Cooley, n.d.) The density of cicadas in an emergence has been estimated at between 8,355 and 3,700,000 insects per hectare (Marshall, 2001). The chorus of thousands of cicadas calling simultaneously is an obvious auditory phenomenon for humans living nearby. Yet the counties where one can hear periodical cicadas change significantly from year to year.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{layer: "cicada-county-all",
          opacity: 0.75,
          stroke_opacity: 1,
          duration: 2000}],
      onChapterExit: [],
    },
    
    {
      id: "2014",
      alignment: "left",
      hidden: false,
      title: "2014",
      //image: "./path/to/image/source.png",
      description: "56 counties contained cicadas from Brood III or Brood XXII, known respectively as the Iowan Brood and the Baton-Rouge Brood.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {layer: "cicada-county-all",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000},
        {
          layer: "cicada-county-2014",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2014",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2015",
      alignment: "left",
      hidden: false,
      title: "2015",
      //image: "./path/to/image/source.png",
      description: "Brood IV and Brood XXIII emergences were widely spread along two north-south corridors in 167 counties.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2015",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {
          layer: "cicada-county-2016",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2015",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2016",
      alignment: "left",
      hidden: false,
      title: "2016",
      //image: "./path/to/image/source.png",
      description: "Brood V was centered in Ohio across 79 counties. Notably, 2016 crowdsourced data submitted to Magicicada.org and Cleveland Metroparks was used by researchers to map this brood in detail across its range (Cooley et al., 2018).",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2016",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
      ],
    },
    
    {
      id: "2016-zoom",
      alignment: "left",
      hidden: false,
      title: "New-to-science population discovered in 2016",
      //image: "./path/to/image/source.png",
      description: "After receiving an unusually large number of citizen scientist reports from Carbon County, Pennsylvania (shown in purple), researchers investigated and published the first scientific record of a small Brood V population, only previously recorded in archived newspaper reports and museum collections (Cooley et al., 2018). This population was not shown in the county-level predictions. ",
      location: {
        center: [-81.4, 40.37319],
        zoom: 6,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2016",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {
          layer: "carbon-county-polygon",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {
          layer: "carbon-county-label",
          opacity: 1,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: "carbon-county-polygon",
          opacity: 0,
          stroke_opacity:0,
          duration: 2000
        },
        {
          layer: "carbon-county-label",
          opacity: 0,
          stroke_opacity:0,
          duration: 2000
        }
      ],
    },
    {
      id: "2017",
      alignment: "left",
      hidden: false,
      title: "2017",
      //image: "./path/to/image/source.png",
      description: "Periodical cicada emergences this year occurred in 9 counties in North Carolina, South Carolina, and Georgia, representing Brood VI.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2017",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {
          layer: "cicada-county-2016",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2017",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2018",
      alignment: "left",
      hidden: false,
      title: "2018",
      //image: "./path/to/image/source.png",
      description: "Only 3 counties in New York were filled with the hum of periodical cicadas in 2018. These were from Brood VII, known as the Onondaga Brood because of the relationship through history between the people of the Onondaga Nation and the cicadas who live on their territory (Onondaga Nation, 2018).",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2018",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2018",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2019",
      alignment: "left",
      hidden: false,
      title: "2019",
      //image: "./path/to/image/source.png",
      description: "This year saw emergences of Brood VIII in 15 counties.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2019",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2019",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2020",
      alignment: "left",
      hidden: false,
      title: "2020",
      //image: "./path/to/image/source.png",
      description: "Periodical cicadas from Brood IV emerged in 22 counties. Users of citizen science app Cicada Safari nearly doubled from 2019 to a record of 10,000 (Graber-Stiel, 2021).",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2020",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {layer: "cicada-county-2021",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2020",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
    {
      id: "2021",
      alignment: "left",
      hidden: false,
      title: "2021",
      //image: "./path/to/image/source.png",
      description: "Brood X is the most geographically widespread group of cicadas (Cooley et al., 2009), observed in 182 counties. Citizen science rose to meet the demand for cicada monitoring during this time, with public contributions to the Cicada Safari app breaking their 2020 record by far, reaching 156,000 users (Graber-Stiehl, 2021). ",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2021",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
        }
      ],
    },
    {
      id: "2021-temp",
      alignment: "left",
      hidden: false,
      title: "Temperature and cicadas",
      //image: "./path/to/image/source.png",
      description: "Temperature lies at the intersection of cicada biology and human activity. Cicada nymphs emerge to become adults when soil temperatures rise to a threshold of around 18°C, resulting in differences in emergence dates across the country, generally between late April and early June. However, temperature anomalies induced by human activity may disrupt historical schedules. This map shows anomalies in May average temperatures from the 1901-2000 baseline for the year 2021. ",
      location: {
        center: [-85.13961, 39.30208],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2021",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {
          layer: "temp-diff-may-2021",
          opacity: 0.25,
          duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: "temp-diff-may-2021",
          opacity: 0,
          duration: 2000
        }
      ],
    },
    
    {
      id: "2024",
      alignment: "left",
      hidden: false,
      title: "2024",
      //image: "./path/to/image/source.png",
      description: "No periodical cicada broods are set to emerge in 2022 or 2023, but 2024 will see another large set of emergences across 293 counties from Brood XIII and Brood XIX. Coordination of citizen scientists will be key to collect as much data as possible, especially considering concerns about disruptions of cicada emergences in the context of climate change.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2024",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
        {layer: "cicada-county-2021",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        }
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2024",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    {
      id: "2030",
      alignment: "left",
      hidden: false,
      title: "2030",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cicada_Brood_II.gif",
      description: "Skipping ahead to 2030, the map on the right is where Brood II, the East Coast Brood, is predicted to emerge in 82 counties. Compare this to the map below, an early map of Brood II emergences published by Marlatt in 1898. Little has changed in our predictions for periodical cicada emergences in over a century of monitoring, but only time will tell whether cicadas remain so reliable in the future.",
      location: {
        center: [-92.85645, 38.47549],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "cicada-county-2030",
          opacity: 0.75,
          stroke_opacity:1,
          duration: 2000
        },
      ],
      onChapterExit: [
        {
          layer: "cicada-county-2030",
          opacity: 0,
          stroke_opacity: 0,
          duration: 2000,
        },
      ],
    },
    
]};

