import { Options } from "material-table";
import { Dispatch, SetStateAction } from "react";

//? SET To LocalStorage
export const saveToLocalStorage = (key: any, value: any) => {
  if (typeof window !== "undefined") localStorage.setItem(key, value);
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: any) =>
  typeof window !== "undefined" ? localStorage.getItem(key) ?? null : null;

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: any) => {
  if (typeof window !== "undefined") localStorage.removeItem(key);
};

//? get discount
export const getDiscountValue = (MRP: number, salePrice: number) =>
  (((MRP - salePrice) / MRP) * 100).toFixed(0);

//? currency formatter
export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat("ar-AE", {
    style: "currency",
    currency: "AED",
  }).format(value);
};

export const missingCountries = [
  { name: "Singapore", latLng: [1.3521, 103.8198] },
  { name: "BouvetIsland", latLng: [54.4208, 3.3464] },
  { name: "Bermuda", latLng: [32.3078, 64.7505] },
  { name: "Andorra", latLng: [42.5063, 1.5218] },
  { name: "AmericanSamoa", latLng: [14.271, 170.1322] },
  { name: "ÅlandIslands", latLng: [60.1785, 19.9156] },
];

//? Country Array
export const COUNTRIES = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  { code: "AU", label: "Australia", phone: "61", suggested: true },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  { code: "CA", label: "Canada", phone: "1", suggested: true },
  { code: "CC", label: "Cocos (Keeling) Islands", phone: "61" },
  { code: "CD", label: "Congo, Democratic Republic of the", phone: "243" },
  { code: "CF", label: "Central African Republic", phone: "236" },
  { code: "CG", label: "Congo, Republic of the", phone: "242" },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  { code: "DE", label: "Germany", phone: "49", suggested: true },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  { code: "DO", label: "Dominican Republic", phone: "1-809" },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  { code: "FK", label: "Falkland Islands (Malvinas)", phone: "500" },
  { code: "FM", label: "Micronesia, Federated States of", phone: "691" },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  { code: "FR", label: "France", phone: "33", suggested: true },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  { code: "HM", label: "Heard Island and McDonald Islands", phone: "672" },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  { code: "IO", label: "British Indian Ocean Territory", phone: "246" },
  { code: "IQ", label: "Iraq", phone: "964" },
  { code: "IR", label: "Iran, Islamic Republic of", phone: "98" },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  { code: "JP", label: "Japan", phone: "81", suggested: true },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  { code: "KN", label: "Saint Kitts and Nevis", phone: "1-869" },
  { code: "KP", label: "Korea, Democratic People's Republic of", phone: "850" },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  { code: "LA", label: "Lao People's Democratic Republic", phone: "856" },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  { code: "MD", label: "Moldova, Republic of", phone: "373" },
  { code: "ME", label: "Montenegro", phone: "382" },
  { code: "MF", label: "Saint Martin (French part)", phone: "590" },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  { code: "MP", label: "Northern Mariana Islands", phone: "1-670" },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  { code: "PM", label: "Saint Pierre and Miquelon", phone: "508" },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  { code: "PS", label: "Palestine, State of", phone: "970" },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russia", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  { code: "SJ", label: "Svalbard and Jan Mayen", phone: "47" },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  { code: "ST", label: "Sao Tome and Principe", phone: "239" },
  { code: "SV", label: "El Salvador", phone: "503" },
  { code: "SX", label: "Sint Maarten (Dutch part)", phone: "1-721" },
  { code: "SY", label: "Syrian Arab Republic", phone: "963" },
  { code: "SZ", label: "Swaziland", phone: "268" },
  { code: "TC", label: "Turks and Caicos Islands", phone: "1-649" },
  { code: "TD", label: "Chad", phone: "235" },
  { code: "TF", label: "French Southern Territories", phone: "262" },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  { code: "TT", label: "Trinidad and Tobago", phone: "1-868" },
  { code: "TV", label: "Tuvalu", phone: "688" },
  { code: "TW", label: "Taiwan, Province of China", phone: "886" },
  { code: "TZ", label: "United Republic of Tanzania", phone: "255" },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  { code: "US", label: "United States", phone: "1", suggested: true },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  { code: "VA", label: "Holy See (Vatican City State)", phone: "379" },
  { code: "VC", label: "Saint Vincent and the Grenadines", phone: "1-784" },
  { code: "VE", label: "Venezuela", phone: "58" },
  { code: "VG", label: "British Virgin Islands", phone: "1-284" },
  { code: "VI", label: "US Virgin Islands", phone: "1-340" },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export const sliceSentence = (sentence: string, maxWords: number) => {
  const words = sentence?.split(" ");
  const truncated = words?.slice(0, maxWords);
  const truncatedSentence = `${truncated?.join(" ")}`;

  if (words && words.length > maxWords) {
    return `${truncatedSentence} ...`;
  }

  return truncatedSentence;
};

// it full slide from left
export const leftAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "-100%", // Slide in from the left
  },
  visible: {
    opacity: 1,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from right
export const rightAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "100%", // Slide in from the right
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from top
export const topAsideVariants = {
  hidden: {
    opacity: 0,
    translateY: "-100%", // Slide in from the top
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

// it full slide from button
export const bottomAsideVariants = {
  hidden: {
    opacity: 0,
    translateY: "100%", // Slide in from the bottom
  },
  visible: {
    opacity: 1,
    translateY: "0%", // Slide to the center
    transition: {
      duration: 1, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

// rotating the element
export const blobVariants = {
  hidden: {
    scale: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

//sudden come and stop and x-y move
export const trailVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
    },
  },
};

//it comes from button some distance smoothly
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const scrollRevealLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const scrollRevealRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

//it show just like fade in
export const staggeredFadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3,
      delayChildren: 0.3, // Adds a delay between children
      staggerChildren: 0.2, // Stagger effect
    },
  },
};

// it rotate 90 degree
export const rotateVariants = {
  hidden: {
    rotate: -90, // Rotate by -45 degrees
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
};

// scale up variant 0 to 1
export const scaleUpVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

//it start from one point w-0 to w-full (use for image)
export const splitVariants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

//it start from middle and take full width
export const splitFromMiddleVariants = {
  hidden: {
    scaleX: 0, // Start with no width (hidden)
    originX: 0.5, // Set the transform origin to the middle horizontally
  },
  visible: {
    scaleX: 1, // Scale to full width
    originX: 0.5, // Keep the transform origin in the middle horizontally
    transition: {
      duration: 1.4, // Animation duration
      ease: "easeInOut", // Easing function
    },
  },
};

export const bounceVariants = {
  hidden: {
    y: -50, // Move up by 50 pixels
  },
  visible: {
    y: 0,
    transition: {
      type: "spring", // Spring animation
      damping: 2, // Controls bounciness
      stiffness: 100, // Controls how tight the spring is
    },
  },
};

// its a zooming effect 0.5 to 1
export const pulseVariants = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,
    transition: {
      yoyo: Infinity, // Repeats indefinitely
      duration: 2,
    },
  },
};

// it look like it text and typed
export const typingVariants = {
  hidden: { width: "0" },
  visible: {
    width: "100%",
    transition: {
      delayChildren: 0.1, // Delay each letter
      staggerChildren: 0.05, // Delay between each letter
    },
  },
};

// Define a variant for each letter
export const letterVariants = {
  hidden: { opacity: 0, x: -10 }, // Move each letter slightly to the left
  visible: { opacity: 1, x: 0 },
};

export const MuiTblOptions = () => {
  const options: Options<any> = {
    headerStyle: {
      whiteSpace: "nowrap",
      backgroundColor: "#f1ede9",
      color: "#000",
      fontWeight: "semibold",
      fontSize: "1.1rem",
      fontFamily: "inherit",
    },
    rowStyle: { backgroundColor: "#fff", color: "#2e2929", fontSize: "1rem" },
    actionsColumnIndex: -1,
    addRowPosition: "first",
    pageSize: 7,
    detailPanelColumnAlignment: "right",
    exportAllData: true,
    headerSelectionProps: { color: "secondary" },
    selectionProps: () => ({
      color: "secondary",
    }),
    // exportMenu: [
    //   {
    //     label: "Export All Data In CSV",
    //     exportFunc: (cols: any, data: any) => ExportCsv(cols, data, "AllData"),
    //   },
    //   {
    //     label: "Export All Data In PDF",
    //     exportFunc: (cols: any, data: any) => ExportPdf(cols, data, "AllData"),
    //   },
    // ],
  };
  return options;
};

export const toggleFullScreen = (
  isFullScreen: boolean,
  setIsFullScreen: Dispatch<SetStateAction<boolean>>
) => {
  const element = document.documentElement as any;
  const newDoc = document as any;
  if (!isFullScreen) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  } else {
    if (newDoc.exitFullscreen) newDoc.exitFullscreen();
    else if (newDoc.mozCancelFullScreen) newDoc.mozCancelFullScreen();
    else if (newDoc.webkitExitFullscreen) newDoc.webkitExitFullscreen();
    else if (newDoc.msExitFullscreen) newDoc.msExitFullscreen();
  }
  setIsFullScreen(!isFullScreen);
};

export const sweetAlertStyles = {
  container: "...",
  popup: "swal-container",
  title: "swal-title",
  closeButton: "...",
  icon: "...",
  image: "...",
  htmlContainer: "...",
  input: "...",
  inputLabel: "...",
  validationMessage: "...",
  actions: "...",
  confirmButton: `swal-confirm-button`,
  denyButton: "...",
  cancelButton: `swal-cancel-button`,
  loader: "...",
  footer: "...",
  timerProgressBar: "...",
};

export const sweetAlertCustomStyles =
  "rgba(76, 78, 100, 0.2) 0px 6px 6px -3px, rgba(76, 78, 100, 0.14) 0px 10px 14px 1px, rgba(76, 78, 100, 0.12) 0px 4px 18px 3px;";

export const convertObj = (
  type: "date" | "id",
  value: { $oid?: string; $date?: string }
) => {
  if (type === "date") return value?.["$date"];
  else if (type === "id") return value?.["$oid"];
};

export const getRandomColor = (a: number) => {
  const getRandomChannelValue = () => Math.floor(Math.random() * 216);
  const r = getRandomChannelValue();
  const g = getRandomChannelValue();
  const b = getRandomChannelValue();
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
