import type { Faq } from "@/lib/site";

export type Town = {
  slug: string;
  name: string;
  county: "Lancaster County" | "Lebanon County" | "Berks County";
  lat: number;
  lng: number;
  miles: number; // approximate road miles from the shop in Akron
  minutes: number; // approximate drive time
  photo?: string; // key in town-photo-credits / /photos/towns/{key}.jpg
  photoAlt?: string;
  page: boolean; // has its own page
  title: string;
  metaDescription: string;
  h1: string;
  lede: string;
  intro: string[];
  housing: string[]; // what the homes are like and what that means for the work
  popular: { service: string; path: string; why: string }[];
  permits: string;
  projects: string[]; // project slugs
  faqs: Faq[];
};

const serviceLinks = {
  roofing: "/roofing/",
  roofRepair: "/roofing/roof-repair/",
  roofReplacement: "/roofing/roof-replacement/",
  metal: "/roofing/metal-roofing/",
  siding: "/siding/",
  windows: "/windows/",
  doors: "/doors/",
  gutters: "/gutters/",
  decks: "/decks-porches/",
  porch: "/decks-porches/porch-construction/",
  remodeling: "/remodeling/",
  kitchen: "/remodeling/kitchen-remodeling/",
  bath: "/remodeling/bathroom-remodeling/",
  basement: "/remodeling/basement-finishing/",
  repair: "/home-repair/",
  commercial: "/commercial/",
};

export const towns: Town[] = [
  {
    slug: "akron-pa",
    name: "Akron",
    county: "Lancaster County",
    lat: 40.1565,
    lng: -76.203,
    miles: 0,
    minutes: 0,
    photo: "akron",
    photoAlt: "A residential street in Akron, Pennsylvania",
    page: true,
    title: "Contractor in Akron, PA | Roofing, Windows, Decks | Fox Gables",
    metaDescription:
      "Fox Gables Construction is based on Bomberger Road in Akron, PA. Roofing, siding, windows, doors, decks and remodeling for Akron homeowners by a licensed owner-operator. Free estimates.",
    h1: "Your contractor in Akron is actually in Akron",
    lede:
      "Fox Gables Construction works out of Bomberger Road. If you live in the borough or the surrounding part of Ephrata Township, Josh can be at your house in a few minutes to look at a roof, a window or a porch.",
    intro: [
      "Akron is a small borough of about four thousand people wedged between Ephrata and Lititz, and it is home for Fox Gables Construction. Josh Fox has lived and worked here for years, which means most jobs in the borough are a short drive, estimates happen quickly, and if a problem comes up after the work is done, the fix is not a scheduling ordeal.",
      "The work in Akron is the full range: roof replacements on the brick twins along Main Street, window and door replacements in the post-war ranches, decks and porches on the newer homes north of town, and the kitchens and bathrooms that all of them eventually need.",
    ],
    housing: [
      "Akron's housing stock splits roughly into three groups. Along Main Street and the older grid you have brick twins and singles from the early 1900s, many with slate or old shingle roofs, original wood windows and porches that have been rebuilt at least once. These houses reward careful work: proper flashing at the party walls, aluminum-wrapped trim so the wood stops rotting, and porch columns set on real footings.",
      "The mid-century neighborhoods have ranches, split-levels and Cape Cods built from the 1950s through the 1970s. Those are where most of the roof replacements, replacement windows and siding jobs happen, because the original materials have reached the end of their life all at once. The developments built since the 1990s mostly need decks, porches, basement finishing and the occasional storm repair.",
    ],
    popular: [
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "The 1960s and 1970s houses are on their second or third roof and the decking often needs attention." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Original aluminum and early vinyl windows in the ranches have failed seals and sticky sashes." },
      { service: "Decks and porches", path: serviceLinks.decks, why: "Older porches need rebuilding and newer homes want outdoor space." },
      { service: "Bathroom remodeling", path: serviceLinks.bath, why: "One-bathroom houses get a second bath or a full rebuild of the first." },
    ],
    permits: "Akron Borough handles its own permits for structural work like porches, decks and additions. Roof replacements and window swaps generally do not need one. Josh files what is needed and schedules inspections.",
    projects: ["entry-door-replacement", "shingle-roof-replacement-cape-cod"],
    faqs: [
      { q: "How fast can you come out for an estimate in Akron?", a: "Usually within a day or two, often the same day if Josh is already working in town. Estimates are free and he does them himself." },
      { q: "Do you handle the small jobs too?", a: "Yes. A rotted porch post, a leaking skylight, a door that will not latch. Being local makes small jobs practical." },
      { q: "Where exactly is the shop?", a: "210 Bomberger Road, Akron, PA 17501. There is no showroom; samples come to your house." },
    ],
  },
  {
    slug: "ephrata-pa",
    name: "Ephrata",
    county: "Lancaster County",
    lat: 40.1798,
    lng: -76.1789,
    miles: 2,
    minutes: 6,
    photo: "ephrata",
    photoAlt: "The historic Ephrata Cloister buildings on a spring day",
    page: true,
    title: "Contractor in Ephrata, PA | Roofing, Windows, Remodeling | Fox Gables",
    metaDescription:
      "Fox Gables Construction is based 2 miles from Ephrata. Roofing, siding, windows, doors, decks and remodeling for Ephrata, PA homeowners by a licensed owner-operator. Free estimates.",
    h1: "Roofing, windows and remodeling in Ephrata, PA",
    lede:
      "Ephrata is the closest town to the shop and where a large share of Fox Gables work happens. From the borough grid to the newer developments in Ephrata Township and West Earl, Josh has worked on most kinds of houses here.",
    intro: [
      "Ephrata is a working town of about fourteen thousand people with a real downtown, a lot of brick, and neighborhoods that span two hundred years of building. Fox Gables Construction is two miles away in Akron, so Ephrata jobs get the attention a local contractor can give: quick estimates, materials picked up from the suppliers on Route 322, and a crew that goes home at night instead of to a hotel.",
      "A homeowner on Nextdoor put it plainly after Josh replaced their windows and wrapped the exterior wood trim in aluminum: a small contractor can do the same job as the big window companies without the big price. That is the business in one sentence.",
    ],
    housing: [
      "Downtown Ephrata and the streets off State and Main are mostly brick rows and twins from the late 1800s through the 1920s. Many still have slate roofs, box gutters and original wood windows. The common jobs here are replacing failed slate with architectural shingles or metal, rebuilding box gutters into modern seamless gutters, replacing wood windows with insulated vinyl units and wrapping the trim so it never needs paint again.",
      "The ring of neighborhoods built from the 1950s to the 1980s, Lincoln Heights, the streets off Pleasant Valley Road, the developments toward Akron and Reamstown, is ranches, split-levels and Cape Cods. These are the roof, siding and window replacement houses. Newer subdivisions in Ephrata Township and West Earl mostly call for decks, porches, basements and kitchen updates.",
    ],
    popular: [
      { service: "Roof repair and replacement", path: serviceLinks.roofing, why: "Slate on the old rows, worn shingles on the mid-century houses, both ready for replacement." },
      { service: "Replacement windows with aluminum trim wrap", path: serviceLinks.windows, why: "The job Ephrata neighbors already recommend Josh for." },
      { service: "Siding and trim", path: serviceLinks.siding, why: "Aluminum and early vinyl siding from the 1970s is faded and brittle." },
      { service: "Bathroom remodeling", path: serviceLinks.bath, why: "Original bathrooms in the mid-century homes are being gutted and rebuilt." },
    ],
    permits: "Ephrata Borough, Ephrata Township and West Earl Township each issue their own building permits for decks, porches, additions and structural work. Roofing and window replacement usually do not require one. Josh handles the paperwork and inspections where they apply.",
    projects: ["bathroom-remodel-jet-tub-tile", "entry-door-replacement"],
    faqs: [
      { q: "Do you replace slate roofs in downtown Ephrata?", a: "Yes. The usual path is a full tear-off and replacement with architectural shingles or metal. Repairing slate piecemeal is possible but rarely worth it once the nails and underlayment have aged out." },
      { q: "Can you match the siding on a twin where the neighbor's half is staying?", a: "Usually. Josh will bring samples to match color and profile as closely as current products allow, and he handles the flashing at the shared wall so water does not end up on either side." },
      { q: "How far out are you booking?", a: "It changes with the season. Roofs in spring and fall book a few weeks out; repairs and small jobs fit in sooner. Call for the current schedule." },
    ],
  },
  {
    slug: "lititz-pa",
    name: "Lititz",
    county: "Lancaster County",
    lat: 40.1573,
    lng: -76.3069,
    miles: 7,
    minutes: 14,
    photo: "lititz",
    photoAlt: "A Victorian home with a wraparound porch in Lititz, Pennsylvania",
    page: true,
    title: "Contractor in Lititz, PA | Roofing, Windows, Porches | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, porches and remodeling in Lititz and Warwick Township, PA by Fox Gables Construction, a licensed owner-operator based 7 miles away in Akron. Free estimates.",
    h1: "Roofing, porches and remodeling in Lititz, PA",
    lede:
      "Lititz has some of the best-kept old houses in the county and some of the newest neighborhoods. Josh works on both, from re-roofing a stone house off Main Street to building a deck on a ten-year-old home in Warwick Township.",
    intro: [
      "Lititz is fifteen minutes west of the shop in Akron. The borough's historic district, with its 18th-century stone and brick houses and deep front porches, draws people who care about how work looks, and the newer developments around it draw families who need practical things done on schedule. Fox Gables Construction has done both kinds of work here for years.",
      "Lititz homeowners tend to be careful about who they hire, and they tend to ask about the license. Fox Gables is registered with the Pennsylvania Attorney General as PA125031 and carries insurance. Josh quotes the job himself and does the work himself, with help as the job requires.",
    ],
    housing: [
      "Inside the borough, the houses along Main, Broad and the side streets are stone, brick and frame homes from the 1750s through the 1920s. Porches are a defining feature. Rebuilding a sagging porch floor, replacing rotted columns with structural fiberglass or wrapped wood, and re-roofing the porch with standing seam metal are regular Lititz jobs. Slate roofs are common and most are at the end of their life.",
      "Warwick Township surrounds the borough with neighborhoods from every decade since the 1950s. The 1960s to 1980s houses off Route 501 and Newport Road are due for roofs, siding and windows. The 1990s and 2000s subdivisions mostly want decks, screened porches, finished basements and kitchen refreshes.",
    ],
    popular: [
      { service: "Porch construction and repair", path: serviceLinks.porch, why: "Historic porches that need structural rebuilding, and porch roofs in metal." },
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Slate in the borough, aging shingles in the township." },
      { service: "Decks", path: serviceLinks.decks, why: "Composite decks on the newer homes in Warwick Township." },
      { service: "Kitchen remodeling", path: serviceLinks.kitchen, why: "1990s kitchens being opened up and updated." },
    ],
    permits: "Lititz Borough and Warwick Township both require permits for decks, porches and structural changes, and the borough's historic district has review for visible exterior changes on contributing buildings. Josh has worked through that process and can advise before you commit to a design.",
    projects: ["shingle-roof-replacement-cape-cod", "metal-roof-farmhouse"],
    faqs: [
      { q: "Can you work on a house in the Lititz historic district?", a: "Yes. Exterior changes visible from the street may need historical review in the borough. Josh will tell you what applies and help choose materials that pass." },
      { q: "Do you build screened porches?", a: "Yes, both new screened porches and screening in an existing covered porch. See the porch construction page for options." },
      { q: "Will you give a price for just the roof over the porch?", a: "Yes. Porch roofs are a common stand-alone job, often done in standing seam metal because the low pitch sheds water better in metal than in shingles." },
    ],
  },
  {
    slug: "denver-pa",
    name: "Denver",
    county: "Lancaster County",
    lat: 40.2329,
    lng: -76.1372,
    miles: 6,
    minutes: 12,
    photo: "denver",
    photoAlt: "A red covered bridge near Denver, Pennsylvania",
    page: true,
    title: "Contractor in Denver, PA | Roofing, Siding, Decks | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, decks and remodeling in Denver, Reamstown, Stevens and East Cocalico Township, PA by Fox Gables Construction, a licensed owner-operator 6 miles away in Akron.",
    h1: "Roofing, siding and decks in Denver, PA",
    lede:
      "Denver, Reamstown, Stevens and the rest of the Cocalico area are a short drive north of the shop. Josh does the full range of exterior and interior work here, from roofs on the borough's brick homes to decks on the newer houses off Route 272.",
    intro: [
      "Denver sits at the northern end of Lancaster County, right off the turnpike interchange, with Reamstown and Stevens next door and East Cocalico Township around them. It is twelve minutes from Akron, which puts it squarely in Fox Gables territory. Josh has done roofs, siding, windows, decks and interior work throughout the Cocalico school district.",
      "A lot of homes here sit on open ground with the wind coming across the fields, which matters for roofing. Shingles need to be rated and installed for wind, flashing has to be done right, and a storm repair should not be an annual event.",
    ],
    housing: [
      "The borough has brick and frame homes from the late 1800s to the 1930s along Main and the cross streets, many with front porches and some with slate. Around it, East Cocalico Township developed in waves: 1960s and 1970s ranches and split-levels, then larger subdivisions in the 1990s and 2000s, plus farms and rural properties with barns and outbuildings.",
      "That mix means Josh sees everything from a leaking porch roof on a 1910 twin to a composite deck on a house built in 2008 to a new metal roof on a pole barn. The rural properties are where a lot of the metal roofing and agricultural work comes from.",
    ],
    popular: [
      { service: "Metal roofing", path: serviceLinks.metal, why: "Farmhouses, barns and outbuildings across East Cocalico." },
      { service: "Storm damage roof repair", path: "/roofing/storm-damage-roof-repair/", why: "Open ground and wind mean more blown shingles and fallen limbs." },
      { service: "Siding", path: serviceLinks.siding, why: "Faded aluminum and vinyl on the mid-century homes." },
      { service: "Decks", path: serviceLinks.decks, why: "New and replacement decks in the subdivisions." },
    ],
    permits: "Denver Borough and East Cocalico Township issue permits for decks, porches, additions and structural work. Agricultural buildings have their own rules. Josh handles the applications and inspections.",
    projects: ["metal-roof-farmhouse", "shingle-roof-replacement-cape-cod"],
    faqs: [
      { q: "Do you put metal roofs on barns and sheds in the Denver area?", a: "Yes. Metal on purlins for pole barns and outbuildings, and metal over solid decking for houses. See the commercial and agricultural page." },
      { q: "My shingles blew off in a storm. How fast can you get here?", a: "For active leaks Josh will get a tarp on quickly, usually the same or next day, then schedule the permanent repair and help with insurance photos." },
      { q: "Do you work in Reamstown and Stevens too?", a: "Yes, and Reinholds, Schoeneck and the rest of the Cocalico area." },
    ],
  },
  {
    slug: "manheim-pa",
    name: "Manheim",
    county: "Lancaster County",
    lat: 40.1634,
    lng: -76.395,
    miles: 12,
    minutes: 22,
    photo: "manheim",
    photoAlt: "A brick home with a white porch on a street in Manheim, Pennsylvania",
    page: true,
    title: "Contractor in Manheim, PA | Roofing, Windows, Remodeling | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Manheim, Penn Township and Rapho Township, PA by Fox Gables Construction, a licensed owner-operator based in Akron.",
    h1: "Roofing, windows and remodeling in Manheim, PA",
    lede:
      "Manheim is about twenty minutes west of the shop. The borough's brick homes and the farms and newer neighborhoods in Penn and Rapho townships keep Josh busy with roofs, windows, siding and porches.",
    intro: [
      "Manheim is a borough of about five thousand with a classic Lancaster County main street, brick twins and singles, and a wide ring of farmland and newer housing in Penn Township and Rapho Township. Fox Gables Construction covers the whole area from Akron, with the same owner-operated approach: Josh looks at the job, prices it, and does it.",
      "Manheim homeowners call about the usual exterior work, and about porches in particular. Many of the borough's houses have full-width front porches that have been patched for decades and are ready for a proper rebuild.",
    ],
    housing: [
      "The borough is mostly brick from the 1880s to the 1930s, with slate and standing seam metal roofs that are now very old, front porches with turned posts, and wood windows that have been painted shut. Replacing slate with shingles or new metal, rebuilding porch floors and railings, and swapping wood windows for insulated units with wrapped trim are the common jobs.",
      "Penn Township and Rapho Township are a mix of working farms, 1970s ranches, and subdivisions from the 1990s on. The farms bring metal roofing and outbuilding work; the subdivisions bring decks, screened porches and basement finishing.",
    ],
    popular: [
      { service: "Porch rebuilding", path: serviceLinks.porch, why: "Full-width front porches on the borough's brick homes." },
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Slate and old metal in the borough, shingles in the township." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Wood windows in the older homes, failed vinyl in the newer ones." },
      { service: "Metal roofing", path: serviceLinks.metal, why: "Farmhouses and outbuildings in Rapho and Penn townships." },
    ],
    permits: "Manheim Borough, Penn Township and Rapho Township each issue permits for decks, porches and structural work. Josh will tell you what your project needs and handle it.",
    projects: ["metal-roof-farmhouse", "entry-door-replacement"],
    faqs: [
      { q: "Can you replace just the porch roof on my Manheim house?", a: "Yes. Porch roofs are often low-pitch, so Josh usually recommends standing seam metal or a membrane rather than shingles." },
      { q: "Is Manheim too far for a small repair?", a: "No. Josh groups small jobs by area, so a Manheim repair gets scheduled with other work on that side of the county." },
      { q: "Do you do siding repair, not just full replacement?", a: "Yes. Matching a few damaged panels is often possible; when it is not, Josh will say so and show the options." },
    ],
  },
  {
    slug: "new-holland-pa",
    name: "New Holland",
    county: "Lancaster County",
    lat: 40.1018,
    lng: -76.0852,
    miles: 9,
    minutes: 17,
    photo: "new-holland",
    photoAlt: "A white farmhouse and red barn near New Holland, Pennsylvania",
    page: true,
    title: "Contractor in New Holland, PA | Roofing, Siding, Decks | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in New Holland and Earl Township, PA by Fox Gables Construction, a licensed owner-operator based 9 miles away in Akron.",
    h1: "Roofing, siding and decks in New Holland, PA",
    lede:
      "New Holland is about fifteen minutes southeast of the shop. Josh works on the borough's brick homes and the farms and newer neighborhoods in Earl and East Earl townships.",
    intro: [
      "New Holland is a town built around agriculture and the equipment plant, with a tight borough of brick homes and a surrounding township of farms, newer subdivisions and a lot of outbuildings. It is close enough to Akron that Fox Gables treats it as home territory. Roofs, siding, windows, decks and the occasional barn roof are the regular work here.",
      "New Holland has several large exterior contractors in and around it. Homeowners call Fox Gables when they want the owner on the job, a plain price and no sales presentation.",
    ],
    housing: [
      "The borough's housing is brick rows and twins from around 1900 through the 1930s, with newer sections of ranches and Cape Cods from the post-war decades. Roof replacement, replacement windows and aluminum trim wrap are the common jobs; porch rebuilding comes up often on the older rows.",
      "Earl and East Earl townships are a patchwork of farms and developments. Farmhouses need metal roofs and siding; the subdivisions from the 1990s onward need decks, porches, basement finishing and kitchen work.",
    ],
    popular: [
      { service: "Roofing", path: serviceLinks.roofing, why: "Replacements in the borough, metal on the farms." },
      { service: "Siding and trim wrap", path: serviceLinks.siding, why: "Aluminum capping of wood trim is a favorite in this area." },
      { service: "Decks and porches", path: serviceLinks.decks, why: "New decks on the newer homes, porch repair on the old ones." },
      { service: "Commercial and agricultural", path: serviceLinks.commercial, why: "Barn and shop roofs, storefront work in town." },
    ],
    permits: "New Holland Borough, Earl Township and East Earl Township handle permits for decks, porches, additions and structural work. Josh files and schedules inspections as needed.",
    projects: ["metal-roof-farmhouse", "womelsdorf-laundromat-porch-exterior"],
    faqs: [
      { q: "Do you take on barn and outbuilding roofs near New Holland?", a: "Yes. Metal roofing on pole barns, sheds and shops is regular work. See the commercial and agricultural page." },
      { q: "Can you quote a deck with a roof over part of it?", a: "Yes. A covered section is a common add-on and is priced as part of the same job." },
      { q: "Do you serve Blue Ball, Goodville and Terre Hill?", a: "Yes, the whole eastern end of the county." },
    ],
  },
  {
    slug: "lancaster-pa",
    name: "Lancaster",
    county: "Lancaster County",
    lat: 40.0379,
    lng: -76.3055,
    miles: 12,
    minutes: 25,
    photo: "lancaster",
    photoAlt: "Downtown Lancaster, Pennsylvania skyline with the Griest Building",
    page: true,
    title: "Roofing & Remodeling Contractor in Lancaster, PA | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Lancaster city and the surrounding townships by Fox Gables Construction, a licensed owner-operator based in Akron. Free estimates.",
    h1: "Roofing and remodeling in Lancaster, PA, from a contractor who answers his own phone",
    lede:
      "Lancaster city and the townships around it have a lot of contractors to choose from. Fox Gables is the small one: Josh Fox quotes the job, does the job, and is the person you talk to from the first call to the last walkthrough.",
    intro: [
      "Lancaster is the county seat and the center of the market, about twenty-five minutes from the shop in Akron. Fox Gables Construction works in the city and in Manheim Township, Lancaster Township, East Hempfield, East Lampeter and the other townships around it. The work is roofs, siding, windows, doors, decks, porches and interior remodeling.",
      "The big exterior companies in Lancaster run sales teams and crews you never meet before the job. Fox Gables runs the other way. You meet Josh at the estimate and he is the one on the ladder. For a lot of homeowners that is the whole reason to call.",
    ],
    housing: [
      "The city is mostly brick row homes from the 1880s to the 1930s. Many have flat or very low-slope rear roofs that need rubber membrane rather than shingles, slate or tin on the front slopes, box gutters, and party walls that need careful flashing. Replacing an old flat roof, re-roofing a front slope in shingles or metal, and replacing wood windows with insulated units are regular city jobs.",
      "The townships are everything from 1950s ranches to 2020s subdivisions. Manheim Township and East Hempfield have a lot of 1970s to 1990s housing now due for roofs, siding and windows. The newer developments want decks, porches, basements and kitchens.",
    ],
    popular: [
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Flat rear roofs and slate fronts in the city, shingles in the townships." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Row-home windows replaced without a sales pitch." },
      { service: "Kitchen and bathroom remodeling", path: serviceLinks.remodeling, why: "Row homes and 1970s suburban homes alike." },
      { service: "Decks", path: serviceLinks.decks, why: "Composite decks in the townships." },
    ],
    permits: "Lancaster city and each township issue their own permits for decks, porches, additions and structural changes. The city also has historic district rules for exterior changes in parts of downtown. Josh handles permits and inspections.",
    projects: ["bathroom-remodel-jet-tub-tile", "full-house-remodel-reading-pa"],
    faqs: [
      { q: "Do you replace flat roofs on Lancaster row homes?", a: "Yes. The usual answer is EPDM rubber or TPO membrane over new insulation board, with proper terminations at the parapets and party walls." },
      { q: "Will you work on a row home where the neighbor's roof is attached?", a: "Yes. Josh flashes and terminates at the party wall so the new roof does not depend on the neighbor's old one." },
      { q: "Is Lancaster city too far for you?", a: "No. Twenty-five minutes. Josh schedules city jobs together to keep the drive efficient." },
    ],
  },
  {
    slug: "elizabethtown-pa",
    name: "Elizabethtown",
    county: "Lancaster County",
    lat: 40.1529,
    lng: -76.6027,
    miles: 22,
    minutes: 35,
    photo: "elizabethtown",
    photoAlt: "A brick building with a long front porch in Elizabethtown, Pennsylvania",
    page: true,
    title: "Contractor in Elizabethtown, PA | Roofing, Windows, Decks | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Elizabethtown, Mount Joy Township and West Donegal, PA by Fox Gables Construction, a licensed owner-operator from Akron.",
    h1: "Roofing, windows and decks in Elizabethtown, PA",
    lede:
      "Elizabethtown is at the western edge of the Fox Gables service area, about thirty-five minutes from the shop. Josh takes on full roofs, siding, windows and decks here and schedules them to make the drive worthwhile for both sides.",
    intro: [
      "Elizabethtown is a college town of about twelve thousand with a compact brick downtown and a lot of newer housing in Mount Joy Township and West Donegal Township. It is the farthest regular stop west for Fox Gables Construction, and the work tends to be the bigger jobs: roof replacements, full siding, window packages and decks.",
      "Because of the drive, Josh is honest about what makes sense. A full roof or a deck is worth the trip. A single stuck window probably is not, unless he is already working nearby, and he will tell you that on the phone.",
    ],
    housing: [
      "Downtown Elizabethtown has brick twins and singles from the late 1800s and early 1900s with porches, slate and old windows. The neighborhoods built from the 1950s through the 1980s around the college and along Route 743 are the roof, siding and window replacement houses. The developments since the 1990s in Mount Joy and West Donegal townships want decks, porches and basements.",
      "Many of the older roofs in town are slate or old asphalt over slate, which changes the tear-off and the price. Josh checks the attic before quoting so there are no surprises on the day.",
    ],
    popular: [
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Slate and layered asphalt in town, worn shingles in the townships." },
      { service: "Siding", path: serviceLinks.siding, why: "Full siding and trim packages on the mid-century homes." },
      { service: "Decks", path: serviceLinks.decks, why: "Composite decks on newer homes." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Whole-house window packages." },
    ],
    permits: "Elizabethtown Borough, Mount Joy Township and West Donegal Township issue permits for decks, porches and structural work. Josh handles applications and inspections.",
    projects: ["shingle-roof-replacement-cape-cod", "entry-door-replacement"],
    faqs: [
      { q: "Is Elizabethtown really in your service area?", a: "Yes for roofs, siding, windows and decks. For small repairs it depends on the schedule; Josh will say so when you call." },
      { q: "Do you remove old slate before installing a new roof?", a: "Yes. New shingles over slate is not an acceptable installation. Slate comes off, the deck is inspected and repaired, and the new roof goes on a clean surface." },
      { q: "Can you quote from photos first?", a: "Josh can give a rough range from photos and a satellite view, then confirm the number in person before anything is ordered." },
    ],
  },
  {
    slug: "mount-joy-pa",
    name: "Mount Joy",
    county: "Lancaster County",
    lat: 40.1098,
    lng: -76.5033,
    miles: 18,
    minutes: 30,
    photo: "mount-joy",
    photoAlt: "A stone house with a red roof in Mount Joy, Pennsylvania",
    page: true,
    title: "Contractor in Mount Joy, PA | Roofing, Siding, Decks | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Mount Joy, Rapho Township and East Donegal, PA by Fox Gables Construction, a licensed owner-operator based in Akron.",
    h1: "Roofing, siding and decks in Mount Joy, PA",
    lede:
      "Mount Joy is about half an hour west of the shop. Josh does roofs, siding, windows and decks on the borough's older homes and the newer houses in Rapho and East Donegal townships.",
    intro: [
      "Mount Joy is a borough of about eight thousand that has grown quickly, with a brick downtown and large newer neighborhoods on all sides. Fox Gables Construction covers it from Akron for the full range of exterior and interior work, with the bigger jobs scheduled so the drive makes sense.",
      "The growth means two kinds of customers: owners of 1900s brick homes dealing with slate, porches and wood windows, and owners of 2000s homes whose builder-grade roofs, decks and windows are wearing out early.",
    ],
    housing: [
      "The borough core is brick rows, twins and singles with porches, built from the 1880s to the 1930s. Slate and old shingle roofs, box gutters and wood windows are the common issues. The post-war neighborhoods have ranches and split-levels due for roofs and siding.",
      "The newer subdivisions in Rapho and East Donegal townships were built with twenty-year shingles, pressure-treated decks and builder-grade windows, many of which are failing earlier than owners expected. Replacing a fifteen-year-old roof or a rotting deck on a house built in 2005 is a common Mount Joy call.",
    ],
    popular: [
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Builder-grade shingles from the 2000s and slate from the 1900s." },
      { service: "Deck replacement", path: "/decks-porches/deck-builders/", why: "Rotted pressure-treated decks replaced in composite." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Failed builder-grade windows and old wood sashes alike." },
      { service: "Siding", path: serviceLinks.siding, why: "Full siding and trim replacement." },
    ],
    permits: "Mount Joy Borough, Rapho Township and East Donegal Township issue permits for decks, porches and structural work. Josh handles them.",
    projects: ["shingle-roof-replacement-cape-cod", "metal-roof-farmhouse"],
    faqs: [
      { q: "My deck from 2006 is rotting. Can you rebuild it on the same footprint?", a: "Usually, and often on the same footings if they are sound. Josh will check them before quoting." },
      { q: "Do you replace roofs on townhouses in Mount Joy?", a: "Yes, with proper termination at the shared walls so your roof does not depend on the neighbor's." },
      { q: "How long does a roof take?", a: "Most houses are one to two days once materials are on site." },
    ],
  },
  {
    slug: "lebanon-pa",
    name: "Lebanon",
    county: "Lebanon County",
    lat: 40.3409,
    lng: -76.4113,
    miles: 20,
    minutes: 30,
    photo: "lebanon",
    photoAlt: "A historic brick building in Lebanon, Pennsylvania",
    page: true,
    title: "Roofers & General Contractor in Lebanon, PA | Fox Gables Construction",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Lebanon, PA and Lebanon County by Fox Gables Construction, a licensed owner-operator based 20 miles away in Akron. Free estimates.",
    h1: "Roofing, siding and remodeling in Lebanon, PA",
    lede:
      "Lebanon has been part of the Fox Gables service area from the start. The city's brick rows and the farms and neighborhoods of North and South Lebanon townships get the same owner-operated work as Lancaster County.",
    intro: [
      "Lebanon is a city of about twenty-six thousand and the seat of Lebanon County, half an hour north of the shop in Akron. Fox Gables Construction has worked in Lebanon County for years: roof replacements and repairs on the city's row homes, siding and windows in the townships, and metal roofs on the farms along Route 422 and 72.",
      "Lebanon homeowners often call after getting a quote from a larger company and wanting a second opinion. Josh looks at the roof himself, says what it actually needs, and prices that.",
    ],
    housing: [
      "The city is dense brick row housing from the late 1800s through the 1920s. Low-slope rear roofs that need rubber membrane, slate or tin on the front slopes, box gutters and old wood windows are the typical conditions. The neighborhoods around the city from the 1950s through the 1980s are ranches and split-levels due for roofs, siding and windows.",
      "North Lebanon, South Lebanon, North Cornwall and the other townships are a mix of farms, older rural homes and subdivisions. The rural properties bring metal roofing, siding and outbuilding work; the subdivisions bring decks, porches and basements.",
    ],
    popular: [
      { service: "Roof repair and replacement", path: serviceLinks.roofing, why: "Flat rear roofs and slate fronts in the city, shingles in the townships." },
      { service: "Siding", path: serviceLinks.siding, why: "Aluminum and vinyl from the 1970s on the suburban homes." },
      { service: "Metal roofing", path: serviceLinks.metal, why: "Farmhouses and outbuildings across the county." },
      { service: "Kitchen and bathroom remodeling", path: serviceLinks.remodeling, why: "Row homes and ranches alike." },
    ],
    permits: "The City of Lebanon and each township issue their own permits for decks, porches, additions and structural work. Josh handles the filings and inspections.",
    projects: ["metal-roof-farmhouse", "full-house-remodel-reading-pa"],
    faqs: [
      { q: "Do you replace rubber roofs on Lebanon row homes?", a: "Yes. EPDM or TPO membrane over new insulation board, with proper terminations at parapets and party walls." },
      { q: "Do you cover Annville, Palmyra and Myerstown too?", a: "Yes, all of Lebanon County. Myerstown and Palmyra have their own pages." },
      { q: "Is the drive from Akron a problem for small jobs?", a: "Josh groups Lebanon County work by area. Small repairs are scheduled alongside other jobs on that side." },
    ],
  },
  {
    slug: "myerstown-pa",
    name: "Myerstown",
    county: "Lebanon County",
    lat: 40.3743,
    lng: -76.3027,
    miles: 17,
    minutes: 26,
    photo: "myerstown",
    photoAlt: "An 18th-century stone house in Myerstown, Pennsylvania",
    page: true,
    title: "Contractor in Myerstown, PA | Roofing, Siding, Metal Roofs | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Myerstown, Jackson Township and Schaefferstown, PA by Fox Gables Construction, a licensed owner-operator based in Akron.",
    h1: "Roofing, siding and metal roofs in Myerstown, PA",
    lede:
      "Myerstown and Schaefferstown sit between the shop and Lebanon, under half an hour away. Farmhouses, brick borough homes and outbuildings make this a metal roofing and exterior area for Josh.",
    intro: [
      "Myerstown is a borough of about three thousand on Route 422 in eastern Lebanon County, with Jackson Township and the farms around it. Schaefferstown is just south. Fox Gables Construction reaches it from Akron up Route 501 in about twenty-five minutes, so it is regular territory for roofs, siding, windows and the outbuilding work that comes with farm country.",
      "Metal roofing is a big part of the work here. Farmhouses, barns, sheds and shops all get it, and Josh installs it on purlins or over solid decking depending on the building.",
    ],
    housing: [
      "The borough has brick and stone homes from the 1700s and 1800s, with newer sections of 1950s to 1980s ranches. Old roofs, porches and wood windows are the common jobs. Around the borough, Jackson Township is farmland and rural homes with a lot of outbuildings.",
      "Rural properties bring a particular set of work: metal roofs on houses and barns, siding on farmhouses that have been patched for decades, replacement windows and doors, and the occasional porch rebuild.",
    ],
    popular: [
      { service: "Metal roofing", path: serviceLinks.metal, why: "Farmhouses, barns and shops." },
      { service: "Siding", path: serviceLinks.siding, why: "Farmhouse siding and trim." },
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Shingles on the borough and township homes." },
      { service: "Commercial and agricultural", path: serviceLinks.commercial, why: "Barn and outbuilding roofs." },
    ],
    permits: "Myerstown Borough and Jackson Township issue permits for decks, porches and structural work. Agricultural buildings have separate rules. Josh handles it.",
    projects: ["metal-roof-farmhouse", "shingle-roof-replacement-cape-cod"],
    faqs: [
      { q: "Can you put metal on a barn that has an old metal roof already?", a: "Sometimes new panels can go over old on purlins if the structure is sound. Josh will inspect and tell you whether it is a good idea for your building." },
      { q: "Do you serve Schaefferstown and Richland?", a: "Yes, and Newmanstown and the rest of the eastern end of Lebanon County." },
      { q: "Do you do farmhouse siding?", a: "Yes, vinyl or fiber cement with aluminum-wrapped trim so the house never needs paint." },
    ],
  },
  {
    slug: "palmyra-pa",
    name: "Palmyra",
    county: "Lebanon County",
    lat: 40.309,
    lng: -76.5933,
    miles: 26,
    minutes: 40,
    photo: "palmyra",
    photoAlt: "The blue Palmyra, Pennsylvania historical marker sign under a tree",
    page: true,
    title: "Contractor in Palmyra, PA | Roofing, Windows, Decks | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Palmyra, Annville and North Londonderry Township, PA by Fox Gables Construction, a licensed owner-operator based in Akron.",
    h1: "Roofing, windows and decks in Palmyra, PA",
    lede:
      "Palmyra and Annville are at the western edge of the Lebanon County service area, about forty minutes from the shop. Josh takes on full roofs, siding, window packages and decks here.",
    intro: [
      "Palmyra is a borough of about seven thousand just east of Hershey, with Annville a few miles east and North Londonderry Township around it. It is a bit of a drive from Akron, so Fox Gables Construction focuses on the bigger jobs in this area: roof replacements, full siding, whole-house windows and decks.",
      "Josh is straightforward about the distance. If the job is worth a day or more, Palmyra works fine. If it is a one-hour repair, he will say so and may suggest a closer contractor, unless he is already scheduled nearby.",
    ],
    housing: [
      "Palmyra has a brick downtown from the 1800s and early 1900s and large neighborhoods from the 1950s through the 2010s. The older homes have slate, porches and wood windows. The 1960s to 1990s homes are at roof, siding and window replacement age. The newer subdivisions in North Londonderry Township want decks, porches and basements.",
      "Many Palmyra and Annville homes have asphalt roofs installed in the 1990s and 2000s that are reaching the end of their life at the same time, which is why roof replacement is the most common call from this area.",
    ],
    popular: [
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "1990s and 2000s shingles reaching end of life." },
      { service: "Siding", path: serviceLinks.siding, why: "Full siding and trim packages." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Whole-house window replacement." },
      { service: "Decks", path: serviceLinks.decks, why: "Composite decks on newer homes." },
    ],
    permits: "Palmyra Borough, Annville Township and North Londonderry Township issue permits for decks, porches and structural work. Josh handles applications and inspections.",
    projects: ["shingle-roof-replacement-cape-cod", "entry-door-replacement"],
    faqs: [
      { q: "Do you really come to Palmyra from Akron?", a: "For full roofs, siding, windows and decks, yes. For small repairs it depends on the schedule." },
      { q: "Can you handle a roof and gutters together?", a: "Yes, and it is the efficient way to do it. New drip edge, gutters and downspouts go on right after the roof." },
      { q: "Do you serve Annville and Hershey?", a: "Annville yes. Hershey is in Dauphin County and is case by case; call and ask." },
    ],
  },
  {
    slug: "reading-pa",
    name: "Reading",
    county: "Berks County",
    lat: 40.3356,
    lng: -75.9269,
    miles: 22,
    minutes: 35,
    photo: "reading",
    photoAlt: "The Reading, Pennsylvania skyline seen from Mount Penn",
    page: true,
    title: "Roofing & Remodeling in Reading, PA | Fox Gables Construction",
    metaDescription:
      "Roofing, siding, windows, doors, decks and remodeling in Reading, Wyomissing, Sinking Spring and western Berks County by Fox Gables Construction, a licensed owner-operator from Akron, PA.",
    h1: "Roofing and remodeling in Reading, PA",
    lede:
      "Reading and the towns on its west side, Wyomissing, Sinking Spring, Shillington, are about thirty-five minutes from the shop. Josh has done full interior remodels and exterior work in Reading and takes on the bigger jobs here.",
    intro: [
      "Reading is the largest city in the Fox Gables service area, with about ninety-five thousand people and block after block of brick row homes. Fox Gables Construction has worked in Reading on everything from a whole-house interior remodel to roofs and windows, and covers the west-side suburbs along Route 422 and 222.",
      "Because of the drive from Akron, Josh focuses on substantial jobs in Berks County: roof replacements, full siding, window packages, decks and interior remodeling. Small repairs are scheduled when he is already in the area.",
    ],
    housing: [
      "Reading is row-home country: brick two- and three-story rows from the 1880s to the 1930s with flat or low-slope rear roofs, slate or tin on the front, box gutters, and wood windows. Replacing a flat roof with membrane, re-roofing the front slope, replacing windows and gutting and rebuilding interiors are the typical city jobs.",
      "West of the city, Wyomissing, Sinking Spring, Shillington and Spring Township have 1920s to 1990s single-family homes. These are roof, siding, window and deck replacement houses.",
    ],
    popular: [
      { service: "Interior remodeling", path: serviceLinks.remodeling, why: "Whole-house and kitchen remodels in row homes." },
      { service: "Roof replacement", path: serviceLinks.roofReplacement, why: "Flat rear roofs and front slopes on rows, shingles in the suburbs." },
      { service: "Replacement windows", path: serviceLinks.windows, why: "Whole-house window packages for row homes." },
      { service: "Decks", path: serviceLinks.decks, why: "Composite decks in the west-side suburbs." },
    ],
    permits: "The City of Reading and each surrounding borough and township issue their own permits for structural and interior work. The city requires permits for most remodeling. Josh handles the filings and inspections.",
    projects: ["full-house-remodel-reading-pa", "womelsdorf-laundromat-porch-exterior"],
    faqs: [
      { q: "You did a full house remodel in Reading. Do you do that often?", a: "Interior remodels are a regular part of the business. Whole-house jobs are scheduled a few months out; single rooms sooner." },
      { q: "Do you replace rubber roofs on Reading row homes?", a: "Yes. Membrane over new insulation board with proper terminations at parapets and party walls." },
      { q: "Do you serve Wyomissing and Sinking Spring?", a: "Yes, and Shillington, West Lawn and Spring Township. Western Berks is the practical limit." },
    ],
  },
  {
    slug: "womelsdorf-pa",
    name: "Womelsdorf",
    county: "Berks County",
    lat: 40.3618,
    lng: -76.1844,
    miles: 16,
    minutes: 25,
    photo: "womelsdorf",
    photoAlt: "A red brick home with a porch in Womelsdorf, Pennsylvania",
    page: true,
    title: "Contractor in Womelsdorf, PA | Porches, Roofing, Windows | Fox Gables",
    metaDescription:
      "Roofing, siding, windows, doors, porches and commercial exterior work in Womelsdorf, Robesonia and western Berks County, PA by Fox Gables Construction, a licensed owner-operator from Akron.",
    h1: "Porches, roofing and windows in Womelsdorf, PA",
    lede:
      "Womelsdorf is twenty-five minutes north of the shop on Route 419. Josh built the new covered porch, soffit, gutters and windows on the laundromat in town, and does residential work in the borough and the farms around it.",
    intro: [
      "Womelsdorf is a borough of about twenty-eight hundred on Route 422 in western Berks County, with Robesonia next door and farmland in every direction. It is close to Akron by the back roads through Schaefferstown, which makes it part of the regular Fox Gables service area even though it is in a different county.",
      "The laundromat project on this site is a Womelsdorf job: a new covered porch across the storefront, new soffit and fascia, seamless gutters and replacement windows, done while the business stayed open.",
    ],
    housing: [
      "The borough is brick and frame homes from the 1800s and early 1900s with porches, slate roofs and wood windows, plus post-war sections of ranches. Porch rebuilding, roof replacement and window replacement with aluminum trim wrap are the usual jobs.",
      "Outside the borough, Heidelberg and Marion townships are farms and rural homes. Metal roofing on farmhouses and outbuildings, siding and doors are the common work.",
    ],
    popular: [
      { service: "Porch construction", path: serviceLinks.porch, why: "Residential porches and commercial storefront porches." },
      { service: "Roofing", path: serviceLinks.roofing, why: "Slate replacement in the borough, metal on the farms." },
      { service: "Gutters, soffit and fascia", path: serviceLinks.gutters, why: "Often done together with porch and roof work." },
      { service: "Commercial exterior work", path: serviceLinks.commercial, why: "Storefronts and small commercial buildings." },
    ],
    permits: "Womelsdorf Borough and the surrounding townships issue permits for porches, decks and structural work. Commercial work has its own requirements. Josh handles the applications.",
    projects: ["womelsdorf-laundromat-porch-exterior", "metal-roof-farmhouse"],
    faqs: [
      { q: "Do you do commercial work in Womelsdorf?", a: "Yes. The laundromat porch, soffit, gutter and window job in town is on the projects page." },
      { q: "Do you serve Robesonia and Rehrersburg?", a: "Yes, and Newmanstown and Myerstown just across the county line." },
      { q: "Can you rebuild a porch and replace the porch roof at the same time?", a: "Yes, that is the most efficient way to do it." },
    ],
  },
];

/** Towns without their own page, listed on the service areas hub and footer. */
export const moreTowns: { name: string; county: string; lat: number; lng: number }[] = [
  { name: "Leola", county: "Lancaster County", lat: 40.0879, lng: -76.1856 },
  { name: "Brownstown", county: "Lancaster County", lat: 40.1215, lng: -76.2176 },
  { name: "Reinholds", county: "Lancaster County", lat: 40.2648, lng: -76.1163 },
  { name: "Reamstown", county: "Lancaster County", lat: 40.2115, lng: -76.1197 },
  { name: "Schaefferstown", county: "Lebanon County", lat: 40.2962, lng: -76.2958 },
  { name: "Annville", county: "Lebanon County", lat: 40.3295, lng: -76.5155 },
  { name: "Columbia", county: "Lancaster County", lat: 40.0337, lng: -76.5044 },
  { name: "Millersville", county: "Lancaster County", lat: 40.0001, lng: -76.3544 },
  { name: "Strasburg", county: "Lancaster County", lat: 39.9832, lng: -76.1844 },
  { name: "Robesonia", county: "Berks County", lat: 40.3515, lng: -76.1347 },
  { name: "Wyomissing", county: "Berks County", lat: 40.3295, lng: -75.9652 },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);

/** Straight-line distance in miles between two points. */
export function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 3958.8;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
