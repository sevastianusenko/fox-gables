import type { Service } from "./service-types";

export const roofingServices: Service[] = [
  {
    slug: "roofing",
    path: "/roofing/",
    group: "roofing",
    name: "Roofing",
    short: "Shingle and metal roofs, repairs and full replacements, done by the owner.",
    eyebrow: "Roofing in Lancaster and Lebanon counties",
    title: "Roofers in Lancaster, PA | Shingle & Metal Roofing | Fox Gables",
    metaDescription:
      "Licensed roofer serving Lancaster and Lebanon counties. Asphalt shingle and metal roofs, repairs and replacements by the owner himself. PA HIC #PA125031. Free roof inspection.",
    h1: "A roofing contractor who is on the roof, not in a sales office",
    lede:
      "Fox Gables Construction replaces and repairs roofs across Lancaster County and Lebanon County from a shop in Akron. Josh Fox inspects the roof, writes the estimate and installs the roof. Architectural shingles, standing seam and ribbed metal, flat roofs on row homes, and the repairs that keep an older roof going a few more years.",
    hero: { src: "/photos/jobs/shingle-roof-cape-cod.jpg", alt: "Cape Cod home in Lancaster County with a new architectural shingle roof", ratio: "4/5" },
    intro: [
      "A roof in this part of Pennsylvania takes a beating: wet springs, humid summers, ice at the eaves in February, and wind coming across open farmland most of the year. A roof that is installed right handles all of that for twenty-five to fifty years depending on the material. A roof that is installed fast and cheap starts leaking at the flashing in five.",
      "Fox Gables is a small, owner-operated company. That is a deliberate choice. Josh does not run a sales team or subcontract crews he has never met. He climbs the roof, looks in the attic, tells you whether you need a repair or a replacement, and prices exactly that. If a repair will get you five more years, he will say so, even when a replacement would be a bigger invoice.",
      "The company is registered with the Pennsylvania Attorney General as a Home Improvement Contractor, number PA125031, and carries liability insurance. Every job over five hundred dollars gets a written contract, as Pennsylvania law requires.",
    ],
    sections: [
      {
        heading: "What Fox Gables does on roofs",
        body: ["The roofing work breaks down into a few kinds of job. Each has its own page with more detail, materials and price ranges."],
        bullets: [
          "Roof replacement: full tear-off, deck repair, underlayment, ice and water shield, new shingles or metal, ridge vent, flashing and trim.",
          "Roof repair: leaks, missing or lifted shingles, chimney and skylight flashing, pipe boots, valleys, sunporch and porch roofs.",
          "Metal roofing: standing seam and ribbed panel roofs on houses, farmhouses, barns, sheds and shops.",
          "Asphalt shingle roofing: architectural shingles from the major manufacturers, installed to the spec that keeps the warranty valid.",
          "Storm damage: emergency tarping, repair or replacement after wind, hail or fallen limbs, and documentation for an insurance claim.",
          "Flat and low-slope roofs: EPDM and TPO membrane on row-home rear roofs, porch roofs and additions.",
        ],
      },
      {
        heading: "Shingles or metal: which roof for which house",
        body: [
          "Architectural asphalt shingles are the right answer for most houses in Lancaster County. They cost the least, look right on everything from a Cape Cod in Ephrata to a colonial in Manheim Township, and a properly installed shingle roof lasts twenty-five to thirty years here. Josh installs shingles from GAF, Owens Corning and CertainTeed depending on color and what the supplier has in stock.",
          "Metal makes sense when you plan to own the house a long time, when the roof is simple enough that panel layout is clean, on farmhouses and rural properties, and on any barn, shed or shop. A metal roof costs roughly twice what shingles do and lasts roughly twice as long. It sheds snow, never loses granules, and is what most people in the county grew up seeing on the farm.",
          "Flat and low-slope roofs on row homes in Lancaster, Lebanon and Reading and on many porches and additions need a membrane, not shingles. Shingles on a roof under about a 2-in-12 pitch will leak. Josh uses EPDM rubber or TPO over insulation board with proper terminations at parapets and party walls.",
        ],
        table: {
          caption: "Roofing materials Josh installs, compared",
          head: ["Material", "Typical life", "Installed cost per square (100 sq ft)", "Best for"],
          rows: [
            ["Architectural asphalt shingles", "25 to 30 years", "$450 to $650", "Most houses"],
            ["Ribbed metal panels", "40 to 50 years", "$750 to $1,100", "Farmhouses, barns, simple roofs"],
            ["Standing seam metal", "50 years and more", "$1,000 to $1,500", "Houses where appearance matters, porch roofs"],
            ["EPDM or TPO membrane", "20 to 25 years", "$600 to $900", "Flat and low-slope roofs"],
          ],
        },
      },
      {
        heading: "What a good installation includes",
        body: [
          "The difference between a roof that lasts and one that does not is mostly in things you cannot see from the street. Josh's standard on every roof replacement includes a full tear-off to the deck, replacement of any soft or rotted decking, ice and water shield at the eaves, in the valleys and around every penetration, synthetic underlayment over the rest of the deck, new drip edge, new pipe boots, new step flashing and counter-flashing at walls and chimneys, and a ridge vent sized for the attic.",
          "Shingles are nailed at the manufacturer's pattern, six nails per shingle in high-wind applications, which is most of the county. Metal panels are fastened on the flats with sealing-washer screws at the spec spacing. Nothing is sealed with a tube of caulk that should be flashed with metal.",
          "The yard is tarped and magnet-swept for nails every day, and the roofing debris goes in a dumpster, not on the lawn. One HomeAdvisor customer noted the crew repaired a spot in the yard where the delivery truck went off the driveway. That is the standard.",
        ],
      },
    ],
    pricing: {
      intro: "Every roof is priced after Josh has measured it and looked at the deck and attic. These are the ranges most Lancaster and Lebanon county homes land in as of 2026, so you have a sense of scale before the visit.",
      rows: [
        ["Asphalt shingle replacement, typical 1,600 to 2,400 sq ft house", "$9,500 to $18,500"],
        ["Metal roof replacement, same house", "$18,000 to $38,000"],
        ["Flat roof membrane, row-home rear roof", "$4,500 to $9,000"],
        ["Leak or flashing repair", "$350 to $1,500"],
        ["Decking replacement, per sheet", "$90 to $130"],
        ["Emergency tarp", "$250 to $500, credited toward the repair"],
      ],
      outro: "Steep pitches, multiple layers to tear off, slate removal, many penetrations and hard access all push a job toward the top of a range. A simple ranch with one layer and easy access sits near the bottom.",
    },
    signs: {
      heading: "Signs it is time to call about the roof",
      items: [
        "Water stains on a ceiling or at the top of a wall",
        "Shingles missing, lifted, cracked or curling at the edges",
        "Granules piling up in the gutters or at the downspout outlet",
        "Daylight visible in the attic, or damp insulation",
        "A roof over 20 years old with no record of replacement",
        "Flashing at the chimney that has been tarred over",
        "Moss or algae streaks that have been there for years",
        "Ice dams at the eaves every winter",
      ],
    },
    faqs: [
      { q: "Do you do free roof inspections?", a: "Yes. Josh comes out, gets on the roof, looks in the attic and tells you what he found and what it needs. There is no charge and no obligation." },
      { q: "Will you tell me if I only need a repair?", a: "Yes. If a repair will buy you years, that is the recommendation. If the roof is at the end of its life and a repair is throwing money away, he will say that too and show you why." },
      { q: "How long does a roof replacement take?", a: "Most houses are one to two days once the materials are delivered. Metal roofs and houses with a lot of decking to replace can run three or four." },
      { q: "Do you handle the permit?", a: "Most roof replacements in Lancaster and Lebanon counties do not require a building permit, but some municipalities want one for structural decking work. Josh checks with your township and handles it if needed." },
      { q: "What warranty comes with a new roof?", a: "Manufacturer warranties on the materials, which run 25 to 50 years depending on the product and the installation level, plus Josh's own workmanship warranty on the installation. The written estimate spells both out." },
      { q: "Are you licensed and insured?", a: "Fox Gables Construction is registered with the Pennsylvania Attorney General as Home Improvement Contractor PA125031 and carries liability insurance through Frederick Mutual. You can verify the registration on the Attorney General's search site." },
    ],
    related: ["/gutters/", "/siding/", "/roofing/storm-damage-roof-repair/"],
    projects: ["shingle-roof-replacement-cape-cod", "metal-roof-farmhouse"],
    gallery: [
      { src: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Farmhouse with a new charcoal metal roof", caption: "Ribbed metal on a farmhouse" },
      { src: "/photos/jobs/roof-decking-rafters.jpg", alt: "New plywood decking being installed on a roof", caption: "Rotted decking replaced before shingling" },
      { src: "/photos/jobs/shingle-roof-chimney.jpg", alt: "Brick chimney with new step flashing on a shingle roof", caption: "New step and counter-flashing at a chimney" },
      { src: "/photos/jobs/metal-roof-commercial.jpg", alt: "Long metal roof on an agricultural building", caption: "Long-span metal on an agricultural building" },
    ],
    schemaType: "Roofing",
    jobType: "Roof replacement",
  },
  {
    slug: "roofing/roof-replacement",
    path: "/roofing/roof-replacement/",
    parent: "roofing",
    group: "roofing",
    name: "Roof replacement",
    short: "Full tear-off, deck repair, new underlayment and a new roof with a real warranty.",
    eyebrow: "Roof replacement",
    title: "Roof Replacement in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Full roof replacement in Lancaster and Lebanon counties with architectural shingles or metal. Tear-off, deck repair, ice and water shield, ridge vent. Straight pricing, clean job site, workmanship warranty.",
    h1: "Roof replacement, done the way the warranty requires",
    lede:
      "When a roof is at the end of its life, patching it is money down the drain. Josh tears the old roof off, fixes the deck, and installs a new shingle or metal roof to the manufacturer's specification, so the warranty actually means something.",
    hero: { src: "/photos/jobs/roof-decking-rafters.jpg", alt: "Roof deck opened to the rafters with new plywood going on during a replacement", ratio: "4/5" },
    intro: [
      "Most roofs in Lancaster County that get replaced are twenty to thirty years old. The shingles have lost their granules, the seal strips have let go, the flashing has been tarred over at least once, and there is probably a soft spot in the deck near a valley or a chimney. A replacement is the chance to fix all of that at once and start the clock over.",
      "Fox Gables does full replacements, which means the old roof comes off down to the wood. Josh does not shingle over an existing layer. It hides rotted decking, voids most manufacturer warranties, adds weight the rafters were not designed for, and is not permitted in many municipalities. It is cheaper for a reason.",
    ],
    sections: [
      {
        heading: "What is included in a Fox Gables roof replacement",
        body: ["The written estimate lists every item below by name and brand, so you can compare it line by line with any other quote."],
        bullets: [
          "Tear-off of all existing roofing down to the deck, with debris in a dumpster and the yard tarped",
          "Inspection of the deck and replacement of any soft, delaminated or rotted sheathing",
          "Ice and water shield along all eaves, in every valley, and around chimneys, skylights and pipes",
          "Synthetic underlayment over the remaining deck",
          "New aluminum drip edge at eaves and rakes",
          "New pipe boots, new step flashing and counter-flashing at every wall and chimney",
          "Starter strip, shingles nailed at the high-wind pattern, hip and ridge cap",
          "Ridge vent, and intake vents at the soffit if the attic does not have them",
          "Magnet sweep for nails and a final walkthrough with you",
        ],
      },
      {
        heading: "Decking: the part nobody budgets for",
        body: [
          "Older houses in Ephrata, Lititz and Lebanon often have plank decking with gaps, and a lot of 1970s houses were built with thin sheathing that has sagged between rafters. When the shingles come off, that is when you find out. Josh looks in the attic before quoting, which catches most of it, and the estimate carries a per-sheet price for any additional decking so a surprise does not turn into an argument.",
          "On the Cape Cod on the projects page, the valleys under the dormers had leaked for years and the deck had gone soft. The rotted sections were cut out and new plywood sistered in before any underlayment went on. That roof will outlast the shingles.",
        ],
      },
      {
        heading: "Shingle choices",
        body: [
          "Josh installs architectural (dimensional) shingles from GAF, Owens Corning and CertainTeed. Three-tab shingles are not worth the small savings; they are thinner, rated for less wind, and look dated. Architectural shingles come in dozens of colors, and the mid-greys, weathered wood and charcoal tones are the most common choices around here because they suit brick and the light siding colors on most houses.",
          "Each manufacturer offers an upgraded warranty when the whole system, underlayment, starter, ridge cap and ventilation, comes from the same brand and is installed by a contractor to their spec. Josh will explain what that costs and whether it is worth it for your roof.",
        ],
      },
      {
        heading: "Ventilation, ice dams and the attic",
        body: [
          "A roof is not only shingles. If the attic is not ventilated, heat builds up in summer and cooks the shingles from below, and in winter it melts snow that refreezes at the eaves as an ice dam. Ice dams are the number one cause of the ceiling stains people see in February in this part of Pennsylvania.",
          "Every replacement includes a ridge vent and a check of the soffit intake. If the soffits are solid wood or blocked with insulation, Josh will recommend adding intake vents, usually at the same time as new soffit and fascia. Ice and water shield at the eaves is the backup that keeps a dam from getting into the house even when one forms.",
        ],
      },
    ],
    pricing: {
      intro: "Ranges most Lancaster and Lebanon county houses land in for a full replacement, as of 2026. The written estimate is exact and itemized.",
      rows: [
        ["Architectural shingles, ranch or Cape Cod, 16 to 24 squares", "$9,500 to $15,000"],
        ["Architectural shingles, two-story colonial, 24 to 34 squares", "$14,000 to $21,000"],
        ["Ribbed metal, same houses", "$18,000 to $32,000"],
        ["Standing seam metal, same houses", "$26,000 to $45,000"],
        ["Slate or second-layer tear-off, added", "$1,500 to $4,000"],
        ["Decking, per 4x8 sheet installed", "$90 to $130"],
      ],
      outro: "A square is 100 square feet of roof. Steep pitches, many dormers and valleys, slate removal, and houses that cannot be reached by truck push a job up the range.",
    },
    signs: {
      heading: "When a replacement makes more sense than a repair",
      items: [
        "The roof is more than 20 years old and leaking in more than one place",
        "Granules have worn off and the mat is showing through on the south side",
        "Shingles are brittle and crack when lifted",
        "There are already two layers on the roof",
        "The deck feels spongy underfoot",
        "You are planning to sell within a few years and the roof will come up on inspection",
      ],
    },
    faqs: [
      { q: "How long does a roof replacement take?", a: "One to two days for most houses once the materials are delivered. Josh orders a day or two ahead and tears off only what he can dry in that day." },
      { q: "Do I need to be home?", a: "Not during the work. Josh needs access to the attic for the inspection beforehand and to the driveway for the dumpster and delivery." },
      { q: "Will you replace the roof over the same deck without shingling over?", a: "Yes. Full tear-off, always. A second layer is not something Fox Gables does." },
      { q: "What about the gutters?", a: "The old gutters are protected during tear-off. If they are worn, replacing them at the same time is the cheapest moment to do it. See the gutters page." },
      { q: "Can you replace the roof in winter?", a: "Shingles need to be above about 40 degrees to seal properly. Josh roofs from March to early December in a normal year and does emergency repairs year round." },
      { q: "What is the workmanship warranty?", a: "Josh stands behind his installation. The written estimate states the workmanship warranty term alongside the manufacturer's material warranty." },
    ],
    related: ["/roofing/asphalt-shingle-roofing/", "/roofing/metal-roofing/", "/gutters/"],
    projects: ["shingle-roof-replacement-cape-cod", "metal-roof-farmhouse"],
    schemaType: "Roof replacement",
    jobType: "Roof replacement",
  },
  {
    slug: "roofing/roof-repair",
    path: "/roofing/roof-repair/",
    parent: "roofing",
    group: "roofing",
    name: "Roof repair",
    short: "Leaks, flashing, missing shingles, porch and sunroom roofs. Fixed right, not tarred over.",
    eyebrow: "Roof repair",
    title: "Roof Repair in Lancaster, PA | Leaks, Flashing, Shingles | Fox Gables",
    metaDescription:
      "Roof leak and storm damage repair in Lancaster and Lebanon counties. Missing shingles, chimney and skylight flashing, pipe boots, valleys, sunporch roofs. Owner-operated, licensed, fast response.",
    h1: "Roof repair that finds the leak, not just the stain",
    lede:
      "Water rarely comes in where it shows up on the ceiling. Josh traces the leak to its source on the roof, fixes the actual problem with flashing and new material, and tells you honestly how much life the rest of the roof has left.",
    hero: { src: "/photos/jobs/shingle-roof-chimney.jpg", alt: "Brick chimney on a shingle roof with new step flashing and counter-flashing", ratio: "4/5" },
    intro: [
      "Most roof leaks in Lancaster County are not shingle failures. They are flashing failures: the chimney, a skylight, a plumbing vent, a wall where a porch roof meets the house, a valley that was cut wrong. The previous repair was usually a tube of roof cement that worked for a year. The right repair is metal flashing installed the way it should have been the first time.",
      "Josh does repairs on roofs of every age and material, including roofs he will eventually replace. A repair that gets you five more years out of a sound roof is a good deal. A repair on a roof that is finished is not, and he will tell you which one you have.",
    ],
    sections: [
      {
        heading: "Repairs Josh does most often",
        body: ["Nearly every repair call is one of these."],
        bullets: [
          "Chimney flashing: new step flashing woven into the shingles and new counter-flashing let into the mortar joint, replacing tar that has cracked",
          "Pipe boots: the rubber collar around plumbing vents splits after 10 to 15 years in the sun and is the single most common leak",
          "Missing or lifted shingles after wind, matched as closely as current colors allow",
          "Skylight flashing and reseating, or replacement of the skylight with a new flashed unit",
          "Valley repairs where the shingles have worn through or the valley metal has rusted",
          "Wall flashing where a lower roof meets siding, including the sunporch and porch roofs that leak into the room below",
          "Ridge cap and hip shingles that have blown off",
          "Soft decking cut out and replaced in a small area",
          "Flat roof patches and seam repairs on EPDM and TPO membranes",
        ],
      },
      {
        heading: "How Josh finds a leak",
        body: [
          "The stain on the ceiling is downhill from the leak, sometimes a long way downhill because water runs along rafters and the top of the drywall before it drops. Josh starts in the attic if there is one, with a flashlight, looking for the water trail on the underside of the deck. Then he goes on the roof and checks every penetration and transition above that point. On a clear day he may run a hose on sections of the roof while someone watches inside.",
          "That takes an hour. It also means the repair is the right repair. A contractor who quotes a leak from the driveway is guessing.",
        ],
      },
      {
        heading: "Sunporch and porch roofs",
        body: [
          "A lot of houses in Ephrata, Lititz and Lebanon have a sunroom or enclosed porch on the back with a low-slope roof that was shingled when it should have been membrane or metal. Those leak at the wall where they meet the house and along the low edge. The fix is usually a new roof on that section only, in standing seam metal or EPDM, with new flashing let into the siding.",
          "One HomeAdvisor customer's sunporch roof replacement was done with the room below kept clean and undisturbed, on time and on budget. That is the normal outcome when the job is planned right.",
        ],
      },
    ],
    pricing: {
      intro: "Typical ranges for repairs in Lancaster and Lebanon counties, as of 2026. Josh quotes the exact number after seeing the roof.",
      rows: [
        ["Pipe boot replacement", "$250 to $450"],
        ["Missing or wind-damaged shingles, one area", "$350 to $900"],
        ["Chimney re-flashing", "$650 to $1,600"],
        ["Skylight re-flash or replacement", "$600 to $2,800"],
        ["Valley repair", "$700 to $1,800"],
        ["Sunporch or porch roof, new membrane or metal", "$2,500 to $7,500"],
        ["Decking repair, small area", "$400 to $1,200"],
      ],
      outro: "Steep or hard-to-reach roofs add to the labor. If a repair is going to cost more than a third of a replacement on an old roof, Josh will say so and show you the numbers both ways.",
    },
    signs: {
      heading: "Call before the next storm if you see any of these",
      items: [
        "A new stain on the ceiling or a stain that grows after rain",
        "Shingles in the yard after wind",
        "Cracked rubber on a plumbing vent boot",
        "Tar smeared around the chimney or a skylight",
        "A dip or sag in one section of the roof",
        "Water in the sunroom or porch when it rains hard",
      ],
    },
    faqs: [
      { q: "How fast can you get here for a leak?", a: "Active leaks get priority. Josh usually gets a tarp or a temporary fix on within a day and schedules the permanent repair right after." },
      { q: "Can you match my shingle color?", a: "Close, usually. Shingles fade and manufacturers change colors, so an exact match on a 15-year-old roof is rare. Josh brings samples and picks the nearest." },
      { q: "Is it worth repairing a 20-year-old roof?", a: "If it is one problem on an otherwise sound roof, yes. If it is the third leak in two years, the money is better spent on a replacement, and Josh will tell you." },
      { q: "Do you repair metal roofs?", a: "Yes. Loose fasteners, failed sealant at laps and penetrations, rusted panels and bent trim are all repairable." },
      { q: "Do you repair flat rubber roofs on row homes?", a: "Yes. Seam repairs, patches and new terminations at parapets, or a full new membrane if the old one is shot." },
    ],
    related: ["/roofing/storm-damage-roof-repair/", "/roofing/roof-replacement/", "/gutters/"],
    projects: ["shingle-roof-replacement-cape-cod"],
    schemaType: "Roof repair",
    jobType: "Roof repair or leak",
  },
  {
    slug: "roofing/metal-roofing",
    path: "/roofing/metal-roofing/",
    parent: "roofing",
    group: "roofing",
    name: "Metal roofing",
    short: "Standing seam and ribbed metal for houses, farmhouses, barns and shops. Fifty-year roofs.",
    eyebrow: "Metal roofing",
    title: "Metal Roofing in Lancaster & Lebanon, PA | Fox Gables Construction",
    metaDescription:
      "Standing seam and ribbed metal roofs for homes, farmhouses, barns and commercial buildings in Lancaster and Lebanon counties. Fifty-year roofs installed by a licensed contractor. Free estimate.",
    h1: "Metal roofing for houses, farmhouses and barns",
    lede:
      "A metal roof is the one you install once. Josh puts standing seam and ribbed panel roofs on houses across Lancaster and Lebanon counties, and on the barns, sheds and shops that come with farm country.",
    hero: { src: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Two-story white farmhouse with a new charcoal ribbed metal roof", ratio: "4/5" },
    intro: [
      "Metal roofing has been the roof of choice on Lancaster County farms for a century, and it is now common on houses in town too. It lasts two to three times as long as shingles, sheds snow before ice dams can form, never loses granules, and does not care about moss. The trade-off is cost: a metal roof runs roughly double a shingle roof on the same house.",
      "Fox Gables installs two kinds. Ribbed (exposed-fastener) panels are the economical choice and what you see on most farmhouses and nearly all outbuildings. Standing seam panels hide the fasteners under a raised seam and are the choice when the roof is a big part of how the house looks, and on low-slope porch roofs where shingles would fail.",
    ],
    sections: [
      {
        heading: "Ribbed panels versus standing seam",
        body: ["Both are 26- or 24-gauge steel with a baked-on finish that carries a 40-year paint warranty. The differences are in how they are fastened and what they cost."],
        table: {
          head: ["", "Ribbed (exposed fastener)", "Standing seam"],
          rows: [
            ["Fasteners", "Screws with sealing washers through the panel face, replaced every 20 to 25 years", "Hidden clips under the seam, no exposed screws"],
            ["Panel widths", "36 inches, 3/4 inch ribs", "12 to 18 inches, 1 to 2 inch seams"],
            ["Look", "Agricultural, traditional", "Clean, architectural"],
            ["Minimum pitch", "3-in-12", "1-in-12 with mechanical seams"],
            ["Installed cost per square", "$750 to $1,100", "$1,000 to $1,500"],
            ["Best on", "Farmhouses, barns, sheds, shops, additions", "Houses, porch roofs, bay windows, low-slope sections"],
          ],
        },
      },
      {
        heading: "How Josh installs a metal roof on a house",
        body: [
          "On a house, the old roof comes off and the deck is inspected and repaired the same as for a shingle replacement. Synthetic underlayment with a high-temperature rating goes over the deck, ice and water shield at the eaves and valleys. Then the trim: eave trim, gable trim and valley metal before the panels. Panels are laid out so the ribs or seams are square to the eave, which matters more than anything else on a metal roof. A roof that starts out of square ends out of square, and the last panel shows it.",
          "Ribbed panels are fastened on the flats with screws and sealing washers at the manufacturer's spacing, never in the ribs. Standing seam panels are clipped to the deck and the seams are locked or mechanically seamed. Every pipe gets a proper pipe boot flashed into the panel. The ridge gets a vented closure so the attic breathes.",
        ],
      },
      {
        heading: "Barns, sheds and outbuildings",
        body: [
          "Outbuildings are different. Most have purlins rather than a solid deck, and the panels fasten straight to the purlins. If the existing metal is sound but the fasteners and sealant have failed, Josh can sometimes install new panels over the old on new furring. If the purlins are rotted, they get replaced first. Long-span buildings like the agricultural roof on the projects page are mostly a layout problem: get the first panel square and the rest follow.",
          "See the commercial and agricultural page for more on barn and shop roofs.",
        ],
      },
      {
        heading: "Colors and noise",
        body: [
          "Standard colors include charcoal, black, dark bronze, slate grey, forest green, burgundy, barn red, white and galvalume. Charcoal and dark bronze are the most common on houses because they suit brick and light siding. Barn red and green are the farm classics.",
          "Rain on a metal roof over a solid deck with underlayment and an insulated attic is no louder than on shingles. The noise people remember is from a bare metal roof on purlins over an open barn.",
        ],
      },
    ],
    pricing: {
      intro: "Typical ranges in Lancaster and Lebanon counties, 2026. The estimate is exact after Josh measures.",
      rows: [
        ["Ribbed metal, ranch or Cape Cod house", "$18,000 to $28,000"],
        ["Ribbed metal, two-story colonial", "$24,000 to $38,000"],
        ["Standing seam, ranch or Cape Cod", "$26,000 to $36,000"],
        ["Standing seam, two-story colonial", "$34,000 to $50,000"],
        ["Standing seam porch roof only", "$4,500 to $12,000"],
        ["Ribbed metal on a barn or shop, per square", "$400 to $700 on existing purlins"],
      ],
      outro: "Complex roofs with many hips, valleys and dormers cost more in standing seam because each panel is custom cut. Simple gable roofs are where metal is most cost-effective.",
    },
    faqs: [
      { q: "How long does a metal roof last?", a: "Forty to fifty years for ribbed panels, with fasteners replaced once around year 20 to 25. Fifty years and more for standing seam. The paint finish carries a 40-year warranty." },
      { q: "Can you put metal over my existing shingles?", a: "Some manufacturers allow it over one layer on furring strips. Josh generally recommends a tear-off so the deck can be inspected and the underlayment is new. He will show you both prices." },
      { q: "Does a metal roof raise my insurance or lower it?", a: "Several insurers offer a discount for metal because of its fire and hail rating. Check with your agent; Josh can provide the product data sheets." },
      { q: "Is metal loud in the rain?", a: "Not over a solid deck with underlayment and an insulated attic. It sounds about like shingles." },
      { q: "Does snow slide off?", a: "Yes, which is the point for ice dams, but it also means snow guards above doors, walkways and lower roofs. Josh includes them where needed." },
      { q: "Will it rust?", a: "Galvalume and painted steel panels are warranted against rust-through for decades. Cut edges are sealed and trim covers the vulnerable spots." },
    ],
    related: ["/commercial/", "/roofing/roof-replacement/", "/decks-porches/porch-construction/"],
    projects: ["metal-roof-farmhouse"],
    gallery: [
      { src: "/photos/jobs/metal-roof-commercial.jpg", alt: "Long-span metal roof on an agricultural building with fields behind", caption: "Long-span ribbed metal on an agricultural building" },
      { src: "/photos/stock/metal-panels.jpg", alt: "Close view of standing seam metal roof panels", caption: "Standing seam panels: the fasteners are hidden under the seams" },
    ],
    schemaType: "Metal roofing",
    jobType: "Metal roof",
  },
  {
    slug: "roofing/asphalt-shingle-roofing",
    path: "/roofing/asphalt-shingle-roofing/",
    parent: "roofing",
    group: "roofing",
    name: "Asphalt shingle roofing",
    short: "Architectural shingles from GAF, Owens Corning and CertainTeed, installed to the spec that keeps the warranty.",
    eyebrow: "Asphalt shingle roofing",
    title: "Asphalt Shingle Roofing in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Architectural shingle roofs installed in Lancaster and Lebanon counties. Proper underlayment, ice and water shield, ridge venting, six-nail pattern. Free on-site estimate from the owner.",
    h1: "Asphalt shingle roofs, installed to the spec on the bundle",
    lede:
      "Shingles are the right roof for most houses. The difference between a shingle roof that lasts thirty years and one that fails in twelve is almost entirely in the installation. Josh installs them the way the manufacturer's spec sheet says to, every time.",
    hero: { src: "/photos/stock/house-dusk.jpg", alt: "Craftsman style house with an architectural shingle roof at dusk", ratio: "4/5" },
    intro: [
      "Asphalt shingles cover about four out of five houses in Lancaster County. They are the most economical roof, they come in every color, and a properly installed architectural shingle roof will last twenty-five to thirty years here. Josh installs architectural shingles from GAF, Owens Corning and CertainTeed, the three manufacturers whose products are stocked by the suppliers in Ephrata and Lancaster.",
      "Josh does not install three-tab shingles. They are rated for less wind, they are thinner, they look flat, and the savings are small. Architectural shingles are the standard.",
    ],
    sections: [
      {
        heading: "What makes a shingle roof last",
        body: ["Shingle manufacturers publish an installation specification. Most roof failures come from a contractor ignoring it to save time. Josh's installation follows it."],
        bullets: [
          "Full tear-off, no second layer",
          "Ice and water shield at eaves, valleys and penetrations: a self-sealing membrane that stops water that gets under the shingles",
          "Synthetic underlayment, not felt, over the rest of the deck",
          "Drip edge under the underlayment at the eaves and over it at the rakes",
          "Starter strip with the adhesive at the eave edge, not cut-up shingles",
          "Six nails per shingle in the nail zone, driven flush, not overdriven. Four nails is the minimum and is not enough in Lancaster County wind",
          "Shingles offset at the manufacturer's pattern so joints never line up",
          "Open or closed-cut valleys done correctly, never woven on architectural shingles",
          "Step flashing at every wall, counter-flashing at chimneys, new boots at every pipe",
          "Ridge vent and matching ridge cap shingles, not cut-up field shingles",
        ],
      },
      {
        heading: "Choosing a shingle",
        body: [
          "The three brands are more alike than different. Each has a standard architectural line and a heavier premium line, and each offers an upgraded warranty when their underlayment, starter, ridge cap and ventilation are installed together by a credentialed contractor. Josh will walk through the lines and what the upgrade actually buys you.",
          "Color is the real decision. Josh brings full-size sample boards, not a brochure, and lays them against the siding and brick. Mid-greys, weathered wood, charcoal and brown are the common choices in the county. Algae-resistant shingles, which have copper granules mixed in, are worth the small premium on north-facing roofs under trees, where the black streaks show up.",
        ],
        table: {
          caption: "Shingle lines Josh installs, as of 2026",
          head: ["Manufacturer", "Standard architectural", "Premium", "Material warranty"],
          rows: [
            ["GAF", "Timberline HDZ", "Timberline UHDZ, Grand Sequoia", "Lifetime limited"],
            ["Owens Corning", "Duration", "Duration Premium, Woodcrest", "Lifetime limited"],
            ["CertainTeed", "Landmark", "Landmark Pro, Presidential", "Lifetime limited"],
          ],
        },
      },
      {
        heading: "Roofs in this county",
        body: [
          "Lancaster County roofs are mostly 6-in-12 to 9-in-12 pitches on colonials, Cape Cods and ranches, with dormers, chimneys and the occasional skylight. Cape Cods, which are everywhere from Akron to Elizabethtown, are the hardest to do right because of the dormer flashing and the short valleys. Ranches are the easiest. Two-story colonials need staging and a day longer.",
          "Open ground means wind. Six nails per shingle and a proper starter strip are what keep shingles on the roof when a storm comes across the fields.",
        ],
      },
    ],
    pricing: {
      intro: "Typical shingle roof replacement ranges in Lancaster and Lebanon counties, 2026. Exact numbers after Josh measures.",
      rows: [
        ["Ranch, 16 to 20 squares", "$9,000 to $13,500"],
        ["Cape Cod with dormers, 18 to 24 squares", "$11,000 to $17,000"],
        ["Two-story colonial, 24 to 34 squares", "$14,000 to $21,000"],
        ["Premium shingle line, added", "$80 to $150 per square"],
        ["Upgraded system warranty, added", "$400 to $900"],
      ],
      outro: "A square is 100 square feet. Prices include tear-off, disposal, underlayment, ice and water shield, flashing, ridge vent and cleanup.",
    },
    faqs: [
      { q: "Which shingle brand is best?", a: "GAF, Owens Corning and CertainTeed all make good architectural shingles. Installation matters more than the brand. Josh usually recommends whichever has the color you want in stock." },
      { q: "What is the difference between a lifetime warranty and a 30-year warranty?", a: "A lifetime limited warranty covers manufacturing defects for as long as you own the house, with full coverage for the first 10 years and prorated after. It does not cover installation errors, which is why the workmanship warranty matters." },
      { q: "Do you install algae-resistant shingles?", a: "Yes, and Josh recommends them on shaded or north-facing roofs where the black streaks show." },
      { q: "How many nails per shingle?", a: "Six. Four is the minimum in the spec and is not enough for the wind in open parts of the county." },
      { q: "Can you match the shingles on an addition to the existing roof?", a: "If the existing roof is recent, usually yes. If it is more than a few years old the color will have faded and a close match is the best anyone can do." },
    ],
    related: ["/roofing/roof-replacement/", "/roofing/roof-repair/", "/roofing/storm-damage-roof-repair/"],
    projects: ["shingle-roof-replacement-cape-cod"],
    schemaType: "Asphalt shingle roofing",
    jobType: "Roof replacement",
  },
  {
    slug: "roofing/storm-damage-roof-repair",
    path: "/roofing/storm-damage-roof-repair/",
    parent: "roofing",
    group: "roofing",
    name: "Storm damage roof repair",
    short: "Tarping, repair or replacement after wind, hail or fallen limbs, and help documenting the claim.",
    eyebrow: "Storm damage",
    title: "Storm Damage Roof Repair in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Wind, hail and fallen-limb roof damage in Lancaster and Lebanon counties. Emergency tarping, repair or full replacement, and help documenting your insurance claim. Licensed owner-operator.",
    h1: "Storm damage: get it covered, get it documented, get it fixed",
    lede:
      "After a storm the order matters: stop the water, photograph everything, call your insurer, then repair. Josh handles the first and last and helps with the middle two, without the storm-chaser pressure.",
    hero: { src: "/photos/stock/barn-storm.jpg", alt: "Red barn in an open field under dark storm clouds", ratio: "4/5" },
    intro: [
      "Lancaster and Lebanon counties get a few serious wind events a year and the occasional hail storm, and the open farmland means the wind has a long run at the roof. The damage is usually lifted or missing shingles along the ridge and edges, a limb through the deck, or hail bruising that is hard to see from the ground but shows up as leaks a year later.",
      "After every big storm, out-of-state roofing crews show up knocking on doors in Ephrata and Lititz offering free inspections and a new roof for your deductible. Some are fine. Some will be gone when the roof leaks. Fox Gables is in Akron and has been for years. Josh will be here next year.",
    ],
    sections: [
      {
        heading: "What to do in the first 24 hours",
        body: ["Do these in order."],
        bullets: [
          "If water is coming in, put a bucket under it and move anything that matters. Do not go on the roof.",
          "Photograph the damage from the ground and inside: ceiling stains, wet insulation, shingles in the yard, the limb.",
          "Call Josh for a tarp. Emergency tarping is usually same or next day and the cost is credited toward the repair.",
          "Call your insurance company and open a claim. Ask whether they want their adjuster to see the roof before repairs begin.",
          "Keep the receipts for the tarp and any emergency work; most policies reimburse them.",
        ],
      },
      {
        heading: "Working with your insurance claim",
        body: [
          "Josh does not negotiate with insurers on your behalf and does not promise to waive deductibles; both are illegal for contractors in Pennsylvania. What he does is inspect the roof, write a detailed repair or replacement estimate with photos, and meet the adjuster on site if you want him there so the scope is agreed in person. If the adjuster's estimate misses something, Josh's documentation is what you use to ask for a supplement.",
          "Most storm claims in this area come out one of two ways. Either the damage is limited and the insurer pays for a repair of the affected slopes, or the damage is widespread, the roof was old, and the insurer pays actual cash value toward a full replacement. Josh will tell you which one your roof looks like before you file.",
        ],
      },
      {
        heading: "Repair or replace after a storm",
        body: [
          "A storm does not automatically mean a new roof. A sound roof that lost a strip of shingles along the ridge needs those shingles replaced and the ridge cap renewed. A fifteen-year-old roof with hail bruising across every slope is a replacement, and the insurer will usually agree once the damage is documented. Josh matches shingles as closely as current colors allow for repairs and tells you plainly when a repair will stand out.",
          "Fallen limbs are the other common call. A limb through the deck means cutting out the broken sheathing, sistering the rafter if it cracked, new plywood, and new shingles over the patch. That is a day's work and well within what insurance covers.",
        ],
      },
    ],
    pricing: {
      intro: "Typical ranges for storm work in Lancaster and Lebanon counties, 2026. Insurance usually covers most of it beyond your deductible.",
      rows: [
        ["Emergency tarp", "$250 to $500, credited toward the repair"],
        ["Wind-damaged shingles, one or two areas", "$400 to $1,200"],
        ["Ridge cap replacement", "$350 to $800"],
        ["Limb through the deck: sheathing, rafter sister, shingles", "$900 to $2,800"],
        ["Full replacement after widespread hail or wind damage", "See roof replacement"],
      ],
      outro: "Josh's estimate is written to insurance-industry line items so the adjuster can read it directly.",
    },
    faqs: [
      { q: "Should I sign the paper the door-to-door roofer left?", a: "Read it first. Many are assignment-of-benefits or contingency agreements that lock you to that contractor if the claim is approved. You do not need to sign anything to get an inspection from Josh." },
      { q: "Can you waive my deductible?", a: "No. That is insurance fraud in Pennsylvania and a contractor who offers it is telling you something about how they do business." },
      { q: "Will you meet the adjuster?", a: "Yes, if you want. It is the best way to make sure the scope is agreed before any work starts." },
      { q: "How do I know if hail damaged my roof?", a: "Hail bruises show as soft dark spots where granules were knocked loose, along with dents in gutters, downspouts and soft metal. Josh can inspect and photograph them." },
      { q: "Do you do emergency work on weekends?", a: "For active leaks after a storm, yes. Call the number at the top of the page." },
    ],
    related: ["/roofing/roof-repair/", "/roofing/roof-replacement/", "/gutters/"],
    projects: ["shingle-roof-replacement-cape-cod"],
    schemaType: "Storm damage roof repair",
    jobType: "Roof repair or leak",
  },
];
