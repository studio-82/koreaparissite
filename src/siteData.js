const rawAssets = import.meta.glob(
  ["../*.{jpg,jpeg,png,webp,mp4,mov,webm,m4v}", "!../278653.jpg"],
  {
    eager: true,
  },
);

const assetMap = Object.fromEntries(
  Object.entries(rawAssets).map(([path, module]) => [
    path.split("/").at(-1),
    module.default,
  ]),
);

const mediaItem = (file, title, caption, kind = "image", extra = {}) => ({
  file,
  title,
  caption,
  kind,
  src: assetMap[file],
  ...extra,
});

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroImages = [
  mediaItem(
    "278598.jpg",
    "Korea landscape",
    "A calm, cinematic opening to the trip.",
  ),
  mediaItem(
    "278599.jpg",
    "Night river lights",
    "After-dark city moments that feel lifted from a K-drama scene.",
  ),
  mediaItem(
    "278600.jpg",
    "Neon street",
    "A lively city scene for the Seoul side of the trip.",
  ),
  mediaItem(
    "278636.jpg",
    "Cherry blossom avenue",
    "A blossom-lined Korea moment that adds romance to the journey.",
  ),
];

export const packageFacts = [
  { label: "Dates", value: "Nov 30 - Dec 7, 2026" },
  { label: "Duration", value: "7 days / 6 nights" },
  { label: "Route", value: "Seoul - Incheon - Daejeon" },
  { label: "Stay", value: "5-star hotel accommodation" },
  { label: "Included", value: "Hotel meals, transport, guide, photographer" },
  { label: "Important", value: "Airfare is not included" },
];

export const aboutOverview = {
  eyebrow: "About RITA",
  title: "A hosted South Korea trip built around beauty, scalp wellness, and guided access",
  description:
    "RITA combines the excitement of traveling through South Korea with an optional trichology training experience. Guests spend the week moving between sightseeing, wellness spaces, product environments, and guided group moments designed to feel both inspiring and professionally useful.",
  points: [
    "Guided travel through Seoul, Incheon, and Daejeon",
    "A separate course option for guests who want trichology exposure",
    "Visits that connect head spa culture, scalp care, and product operations",
  ],
  image: mediaItem(
    "278635.jpg",
    "Head Spa K entrance",
    "A polished arrival point for the wellness and training side of the trip.",
  ),
};

export const storyCards = [
  {
    eyebrow: "Seoul and beyond",
    title: "Spend the week inside the Korea people dream about",
    description:
      "Expect skyline views, cherry-blossom walks, evening city lights, group photo stops, and the kind of guided sightseeing that makes the trip feel memorable from the first day.",
    media: mediaItem(
      "278636.jpg",
      "Cherry blossoms in Seoul",
      "A romantic spring-style Korea moment that reflects the sightseeing side of the trip.",
    ),
  },
  {
    eyebrow: "Head spa immersion",
    title: "Step into treatment rooms, not just classrooms",
    description:
      "Guests see how premium Korean scalp-care spaces are set up, how services flow from consultation to treatment, and why the head spa experience feels so elevated in person.",
    media: mediaItem(
      "278637.jpg",
      "Head spa room",
      "A treatment room similar to the spaces guests will explore during the wellness portion.",
    ),
  },
  {
    eyebrow: "Training and access",
    title: "See where the product and training side comes to life",
    description:
      "For guests joining the course, the trip extends into campus visits, facility walk-throughs, and product conversations that give real-world context to scalp-care education.",
    media: mediaItem(
      "278633.jpg",
      "Ecobio campus",
      "A campus setting connected to the educational side of the trip.",
    ),
  },
];

export const itinerary = [
  {
    day: "Day 1",
    title: "Arrival, hotel check-in, and welcome to Seoul",
    description:
      "Arrive in South Korea, settle into the hotel, and meet the rest of the group before the week begins.",
    media: mediaItem(
      "278598.jpg",
      "Arrival visual",
      "The kind of wide scenic view that sets the tone for the trip.",
    ),
  },
  {
    day: "Day 2",
    title: "Guided city touring and photo-ready Seoul moments",
    description:
      "Spend the day moving through the city, enjoying landmark views, shopping streets, and the polished nighttime atmosphere Seoul is known for.",
    media: mediaItem(
      "278599.jpg",
      "Night touring",
      "A preview of the evening skyline and city-light moments guests can expect.",
    ),
  },
  {
    day: "Day 3",
    title: "Head spa and premium scalp-wellness experience",
    description:
      "Step into Korean treatment spaces, learn how the experience is structured, and enjoy a closer look at the wellness side of the trip.",
    media: mediaItem(
      "278618.jpg",
      "Head spa stations",
      "Treatment chairs and care spaces connected to the scalp-wellness experience.",
    ),
  },
  {
    day: "Day 4",
    title: "Trichology training and scalp-care learning day",
    description:
      "Guests who join the course spend the day studying scalp concerns, treatment logic, product categories, and service positioning in a guided training setting.",
    media: mediaItem(
      "278616.jpg",
      "Hands-on scalp care",
      "A hands-on moment that reflects the practical side of the course option.",
    ),
  },
  {
    day: "Day 5",
    title: "Facility walk-through and manufacturing visit",
    description:
      "Walk through the campus and production environments to see how the scalp-care and beauty products connected to the training are made at scale.",
    media: mediaItem(
      "278621.jpg",
      "Facility tour group",
      "A group visit that reflects the guided walk-through experience.",
    ),
  },
  {
    day: "Day 6",
    title: "Product sessions, networking, and final Korea moments",
    description:
      "Use the final full day for product discussions, photos, networking, and last sightseeing moments before departure.",
    media: mediaItem(
      "278634.jpg",
      "Ecobio exterior",
      "A clean campus exterior tied to the training and product side of the trip.",
    ),
  },
  {
    day: "Day 7",
    title: "Departure day",
    description:
      "Check out, transfer out, and leave with both travel memories and a clearer understanding of the scalp-care experience you came to see.",
    media: mediaItem(
      "278600.jpg",
      "Final city scene",
      "A bold city visual that matches the energy of the trip's close.",
    ),
  },
];

export const coursePillars = [
  {
    title: "Scalp concerns and treatment pathways",
    copy:
      "Guests in the course are introduced to how Korean scalp-care professionals think about repair, sensitivity, oil balance, and support for thinning concerns.",
    media: mediaItem(
      "278645.jpg",
      "Dry and sensitive scalp line",
      "One of the product categories used to explain different scalp-care needs.",
    ),
  },
  {
    title: "Product families used inside the training",
    copy:
      "The course connects real product lines to real use cases, helping guests understand why specific routines are recommended for different scalp conditions.",
    media: mediaItem(
      "278643.jpg",
      "Hair repair line",
      "A repair-focused product line discussed as part of the training experience.",
    ),
  },
  {
    title: "Professional positioning for beauty specialists",
    copy:
      "The training also speaks to salon owners, scalp therapists, and beauty professionals who want to add stronger scalp-care language to their services.",
    media: mediaItem(
      "278644.jpg",
      "DP line",
      "A product board tied to scalp support and thinning-related conversations.",
    ),
  },
  {
    title: "How routines move from treatment room to take-home care",
    copy:
      "Guests see how product routines are structured from in-room service steps through to at-home maintenance recommendations.",
    media: mediaItem(
      "278647.jpg",
      "Routine chart",
      "A routine chart that helps explain the order and purpose of each step.",
    ),
  },
];

export const pricing = [
  {
    title: "Travel package",
    price: "$950",
    note: "per person",
    features: [
      "7 days / 6 nights in Seoul, Incheon, and Daejeon",
      "Hotel accommodation included",
      "Meals at the hotel included",
      "Transportation, tour guide, and photographer included",
      "Airfare excluded",
    ],
  },
  {
    title: "Trichology course",
    price: "$2,500",
    note: "per person",
    features: [
      "Separate course option connected to the South Korea trip",
      "Scalp-care, head spa, and product-category learning",
      "Campus and facility access tied to the educational experience",
      "Best for beauty professionals and scalp-care learners",
      "Confirm availability before sending payment",
    ],
  },
];

export const galleryGroups = [
  {
    id: "travel",
    label: "Travel",
    intro:
      "This is the sightseeing side of the week: city lights, scenic overlooks, cherry blossoms, and the Korea moments guests usually want captured on camera.",
    items: [
      mediaItem("278598.jpg", "Landscape view", "A scenic arrival-style view from the Korea side of the journey."),
      mediaItem("278599.jpg", "Night reflections", "The kind of polished evening city atmosphere Seoul is known for."),
      mediaItem("278600.jpg", "Neon streets", "A high-energy night scene for the city portion of the trip."),
      mediaItem("278636.jpg", "Cherry blossoms", "One of the softer, photo-ready moments guests can expect."),
    ],
  },
  {
    id: "spa",
    label: "Head spa",
    intro:
      "These spaces reflect the premium scalp-wellness environment guests will step into during the head spa and course portions of the trip.",
    items: [
      mediaItem("278601.jpg", "Relax day visual", "A soothing wellness image that matches the calmer side of the itinerary."),
      mediaItem("278616.jpg", "Scalp treatment", "A hands-on treatment moment tied to the training day."),
      mediaItem("278617.jpg", "Product shelf", "Products that support the scalp-care routines discussed during the trip."),
      mediaItem("278618.jpg", "Head spa stations", "The type of treatment-room setup guests will be introduced to."),
      mediaItem("278619.jpg", "Wash station", "A closer look at the care spaces used in premium head spa experiences."),
      mediaItem("278637.jpg", "Treatment room", "A polished room that reflects the comfort and atmosphere of the wellness visit."),
      mediaItem("278638.jpg", "Head Spa K", "Branding connected to the Korean head spa side of the trip."),
    ],
  },
  {
    id: "facility",
    label: "Facility",
    intro:
      "Guests joining the training side of the trip also tour campus and facility environments to see the product operation behind the education.",
    items: [
      mediaItem("278620.jpg", "Group walkthrough", "A guided group visit on the facility side of the trip."),
      mediaItem("278621.jpg", "Facility explanation", "An on-site explanation during the walk-through."),
      mediaItem("278622.jpg", "Tour floor", "Guests moving through the production visit together."),
      mediaItem("278624.jpg", "Camera on site", "A documented moment from the on-site group experience."),
      mediaItem("278626.jpg", "Process room", "A closer look at the rooms and equipment guests will see."),
      mediaItem("278632.jpg", "Campus aerial", "The wider campus setting connected to the training visit."),
      mediaItem("278633.jpg", "Campus in blossom season", "A campus exterior that combines the educational and travel feel of the week."),
      mediaItem("278634.jpg", "Front entrance", "A clear arrival view for the building guests visit."),
      mediaItem("278635.jpg", "Head Spa K entrance", "A reception-style entrance tied to the wellness and training experience."),
      mediaItem("IMG-20260514-WA0032.jpg", "Production room", "One of the larger equipment spaces on the facility side."),
      mediaItem("IMG-20260514-WA0033.jpg", "Tank corridor", "A walk-through view of the stainless process rooms."),
      mediaItem("IMG-20260514-WA0035.jpg", "Filling hopper", "Part of the machinery guests see during the production visit."),
      mediaItem("IMG-20260514-WA0036.jpg", "Valve system", "More of the industrial detail tied to the manufacturing environment."),
      mediaItem("IMG-20260514-WA0038.jpg", "Clean-room doorway", "An access point into the production side of the visit."),
      mediaItem("IMG-20260514-WA0039.jpg", "Bottling line", "The kind of packaging floor guests will watch in operation."),
      mediaItem("IMG-20260514-WA0040.jpg", "Lab instrument", "A lab-side detail connected to the product environment."),
      mediaItem("IMG-20260514-WA0041.jpg", "Production line", "A wider view of the rooms and equipment used in the visit."),
      mediaItem("IMG-20260514-WA0049.jpg", "Upper platform", "An elevated view across the facility floor."),
      mediaItem("IMG-20260514-WA0050.jpg", "Tank detail", "A closer look at the scale of the production rooms."),
    ],
  },
  {
    id: "products",
    label: "Products",
    intro:
      "These product families are part of the course conversation, helping guests connect scalp concerns to routines, treatment logic, and recommendations.",
    items: [
      mediaItem("278631.jpg", "Product basket", "A display of the product families connected to the training."),
      mediaItem("278643.jpg", "HRC line", "A repair-focused line discussed in the course."),
      mediaItem("278644.jpg", "DP line", "A scalp-support line tied to thinning-related conversations."),
      mediaItem("278645.jpg", "DS line", "A line used when discussing dry and sensitive scalp concerns."),
      mediaItem("278646.jpg", "OC line", "A line tied to oily and combination scalp routines."),
      mediaItem("278647.jpg", "Recommended routines", "A chart showing how routines are structured across product categories."),
    ],
  },
];

export const motionProof = [
  mediaItem(
    "278639.mp4",
    "See the Korea-side campus before the group goes inside",
    "This clip previews the exterior grounds and arrival feel of the facility visit included in the educational side of the trip.",
    "video",
    { posterSrc: assetMap["278632.jpg"] },
  ),
  mediaItem(
    "VID-20260514-WA0051.mp4",
    "Watch the bottling floor guests will tour",
    "Part of the Daejeon visit includes seeing real packaging lines in motion so the training is connected to an active product environment.",
    "video",
    { posterSrc: assetMap["IMG-20260514-WA0039.jpg"] },
  ),
  mediaItem(
    "VID-20260514-WA0052.mp4",
    "Walk past the large stainless process rooms",
    "Guests on the facility visit move through these industrial spaces to understand the scale behind the scalp-care products discussed during training.",
    "video",
    { posterSrc: assetMap["IMG-20260514-WA0033.jpg"] },
  ),
  mediaItem(
    "VID-20260514-WA0053.mp4",
    "Arrive at the campus building used for the visit",
    "This exterior gives travelers a better sense of where the educational and facility portion of the week takes place.",
    "video",
    { posterSrc: assetMap["278634.jpg"] },
  ),
  mediaItem(
    "VID-20260527-WA0008.mp4",
    "See more of the production floor the group explores",
    "The longer walk-through shows the wider rooms, machines, and working spaces guests will move through during the Korea facility visit.",
    "video",
    { posterSrc: assetMap["IMG-20260514-WA0041.jpg"] },
  ),
];

export const faqItems = [
  {
    question: "What is included in the $950 travel package?",
    answer:
      "Your travel package includes hotel accommodation, meals at the hotel, transportation, a tour guide, and a photographer. Airfare is specifically excluded.",
  },
  {
    question: "Is the trichology course separate from the trip cost?",
    answer:
      "Yes. The travel package is listed at $950 per person, while the trichology course is listed separately at $2,500 per person.",
  },
  {
    question: "How do travelers pay?",
    answer:
      "Guests should confirm availability first and then pay Dave Ray through PayPal, Cash App, or Zelle before emailing proof of payment.",
  },
  {
    question: "Who is this experience for?",
    answer:
      "It is best suited to beauty professionals, scalp-care specialists, salon owners, and learners who want both South Korea travel and exposure to trichology-adjacent spaces.",
  },
  {
    question: "What should travelers plan for separately?",
    answer:
      "Travelers should plan for airfare and handle their own passport, visa, and personal travel readiness requirements.",
  },
];

export const bookingSteps = [
  "Confirm your seat and preferred package by phone or email.",
  "Open PayPal, Cash App, or Zelle and send your payment to Dave Ray.",
  "Email your payment confirmation to receive the next travel and training details.",
];

export const contactDetails = {
  site: "https://www.parissouthkoreatrips.com",
  email: "rayofsunshinetravelgroup@gmail.com",
  phoneDisplay: "1 (347) 934-8494",
  phoneHref: "tel:+13479348494",
  address: "Dave Ray Enterprises, 252 W 29th St, Ste 6A, New York, NY 10001",
};

export const paymentOptions = [
  {
    platform: "Cash App",
    title: "Pay Dave Ray on Cash App",
    subtitle: "$DaveRay",
    note: "Tap the code to open Cash App, then enter your amount and include your full name and package in the note.",
    url: "https://cash.app/$DaveRay?qr=1",
    qr: mediaItem(
      "Cashapp QR code.png",
      "Cash App QR code",
      "Cash App QR code for Dave Ray.",
    ),
  },
  {
    platform: "PayPal",
    title: "Pay Dave Ray on PayPal",
    subtitle: "PayPal QR checkout",
    note: "Tap the code to open PayPal, then enter your amount and include your full name and package in the message.",
    url: "https://www.paypal.com/qrcodes/managed/8e1b12a6-e126-489c-b92e-0ceff2183f08?utm_source=hawk_quick_link",
    qr: mediaItem(
      "Paypal QR code.png",
      "PayPal QR code",
      "PayPal QR code for Dave Ray.",
    ),
  },
  {
    platform: "Zelle",
    title: "Pay Dave Ray on Zelle",
    subtitle: "Zelle payment QR",
    note: "Tap the code to open Zelle, then enter your amount and include your full name and package details with the payment.",
    url: "https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiRGF2ZSIsInRva2VuIjoiMTM0NzkzNDg0OTQifQ==",
    qr: mediaItem(
      "Zelle QR Code.png",
      "Zelle QR code",
      "Zelle QR code for Dave Ray.",
    ),
  },
];

export const archiveItems = [
  ...galleryGroups.flatMap((group) => group.items),
  ...motionProof,
].filter((item, index, list) => list.findIndex((entry) => entry.file === item.file) === index);
