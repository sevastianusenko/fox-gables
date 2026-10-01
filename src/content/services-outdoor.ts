import type { Service } from "./service-types";

export const outdoorServices: Service[] = [
  {
    slug: "decks-porches",
    path: "/decks-porches/",
    group: "outdoor",
    name: "Decks and porches",
    short: "Wood and composite decks, front porches, porch roofs and screened porches, built to code with permits handled.",
    eyebrow: "Decks and porches",
    title: "Deck & Porch Builders in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Custom wood and composite decks, front porches, porch roofs and screened porches in Lancaster and Lebanon counties. Permits handled, licensed and insured. Free design estimate from Fox Gables.",
    h1: "Decks and porches built to last longer than the house's next owner",
    lede:
      "A deck or porch is the one project where you see the structure. Footings below frost, joists sized right, ledger flashed and bolted, railings that do not wobble. Josh builds decks in pressure-treated and composite, and porches with real roofs, across Lancaster and Lebanon counties.",
    hero: { src: "/photos/stock/deck-portrait.jpg", alt: "Composite deck with wicker chairs and a wood railing overlooking a yard", ratio: "4/5" },
    intro: [
      "Decks and porches fail at the same three places: the ledger board where the deck attaches to the house, the footings, and the railings. A ledger that was nailed instead of bolted and never flashed rots the rim joist of the house and eventually drops the deck. Footings that were not dug below the frost line heave every winter. Railings attached with lag screws into end grain wobble within a year.",
      "Fox Gables builds decks and porches the way the code and common sense require: footings dug and inspected, ledger through-bolted and flashed, joists at 12 or 16 inches on center for the decking, railings with blocking and through-bolts, and stairs with stringers that are not going to crack. Then the decking and railing in whatever material and style you want.",
    ],
    sections: [
      {
        heading: "Decks",
        body: [
          "Pressure-treated decks are the economical choice and still the majority of new decks in the county. Composite decking (Trex, TimberTech, Fiberon and similar) costs more up front, never needs sealing, does not splinter, and is what most homeowners choose when they plan to be in the house a while. Either way the frame underneath is pressure-treated lumber, built the same. See the deck building page for sizes, materials and prices.",
        ],
      },
      {
        heading: "Porches",
        body: [
          "A porch is a deck with a roof, which makes it a bigger job: posts that carry roof load, beams sized for the span, and a roof tied into the house with flashing that will not leak into the room below. Front porches on the brick homes in Ephrata, Lititz, Manheim and Lebanon are the common rebuild. Porch roofs over existing patios and decks, and screened porches, are the common new build. See the porch construction page.",
        ],
      },
      {
        heading: "Permits and inspections",
        body: [
          "Nearly every township and borough in Lancaster and Lebanon counties requires a building permit for a deck or porch attached to the house or more than 30 inches off the ground, with inspections of the footings and the framing before the decking goes on. Josh prepares the drawing, files the permit, schedules the inspections and is on site for them. It is part of the price.",
          "Decks on properties with a homeowners association may also need HOA approval. Josh can provide the drawing and material list the HOA asks for.",
        ],
      },
      {
        heading: "What a Fox Gables deck or porch includes",
        body: ["Every deck and porch estimate lists these by name."],
        bullets: [
          "Footings dug below the 36-inch frost line, inspected, with concrete piers and post bases",
          "Pressure-treated frame with joist hangers, hurricane ties and proper fasteners",
          "Ledger board through-bolted to the house rim joist with flashing above and below",
          "Decking and railing in the material you choose, with hidden fasteners on composite",
          "Stairs with cut stringers at 16 inches on center and a landing pad",
          "Railings at 36 inches with balusters at less than 4 inches, blocked and through-bolted",
          "Permit, drawing and inspections handled",
          "Debris removed and the yard raked",
        ],
      },
    ],
    pricing: {
      intro: "Typical ranges for decks and porches in Lancaster and Lebanon counties, 2026, including permits. Exact numbers after Josh looks at the site.",
      rows: [
        ["Pressure-treated deck, 12 by 16 feet with stairs and railing", "$9,000 to $13,000"],
        ["Composite deck, 12 by 16 feet with stairs and railing", "$15,000 to $22,000"],
        ["Composite deck, 16 by 20 feet, two levels", "$26,000 to $40,000"],
        ["Deck rebuild on existing sound footings", "20 to 30 percent less"],
        ["Covered front porch, 8 by 20 feet, new", "$20,000 to $38,000"],
        ["Porch roof over an existing deck or patio, 12 by 14", "$8,000 to $16,000"],
        ["Screened porch, 12 by 14 feet", "$28,000 to $48,000"],
      ],
      outro: "Height off the ground, sloped yards, hard digging and roof tie-ins are what move a job within a range.",
    },
    faqs: [
      { q: "Do I need a permit for a deck in Lancaster County?", a: "In nearly every municipality, yes, if the deck is attached to the house or more than 30 inches off the ground. Josh handles it." },
      { q: "Pressure-treated or composite?", a: "Pressure-treated costs about 40 percent less and needs sealing every couple of years. Composite costs more and needs nothing. Most people who plan to stay choose composite." },
      { q: "Can you rebuild my old deck on the same footings?", a: "If the footings are below frost and sound, yes, and it saves a good share of the cost. Josh digs next to one to check." },
      { q: "How long does a deck take?", a: "A week to ten days for a typical deck including the inspection waits. Porches with roofs take two to three weeks." },
      { q: "Do you build porches on old brick houses?", a: "Yes. Rebuilding sagging front porches on the brick twins and singles in Ephrata, Lititz and Lebanon is a regular job." },
    ],
    related: ["/decks-porches/deck-builders/", "/decks-porches/porch-construction/", "/roofing/metal-roofing/"],
    projects: ["womelsdorf-laundromat-porch-exterior"],
    gallery: [
      { src: "/photos/stock/deck-chairs.jpg", alt: "Composite deck with railing and outdoor chairs", caption: "Composite decking with a matching railing" },
      { src: "/photos/jobs/laundromat-porch-1.jpg", alt: "Porch roof framed along a storefront", caption: "Porch roof framing tied into the building" },
    ],
    schemaType: "Deck and porch construction",
    jobType: "Deck or porch",
  },
  {
    slug: "decks-porches/deck-builders",
    path: "/decks-porches/deck-builders/",
    parent: "decks-porches",
    group: "outdoor",
    name: "Deck building",
    short: "Composite and pressure-treated decks built to code, plus replacement of rotted decks on sound footings.",
    eyebrow: "Deck building",
    title: "Deck Builder in Lancaster County, PA | Wood & Composite | Fox Gables",
    metaDescription:
      "Composite and pressure-treated decks built to code in Lancaster and Lebanon counties. Replacement of rotted decks, railings and stairs. Permits handled. Free estimate from Fox Gables Construction.",
    h1: "Deck building in Lancaster County, from footings to the last fastener",
    lede:
      "Josh builds new decks and replaces old ones in pressure-treated lumber and composite. The frame is the same either way: footings below frost, a bolted and flashed ledger, and joists sized for the decking. The surface is your choice.",
    hero: { src: "/photos/stock/deck-boards.jpg", alt: "Grey composite deck boards with fall leaves", ratio: "4/5" },
    intro: [
      "A lot of the decks in the subdivisions around Lititz, Manheim Township, Mount Joy and Lebanon were built in the 1990s and 2000s with pressure-treated lumber and a few too many shortcuts. Twenty years on, the boards are splintered, the railings wobble, and the ledger is a question mark. Replacing those decks is a big part of the deck work Fox Gables does. New decks on newer houses and on older homes that never had one are the rest.",
      "Josh builds the frame to the current code, which is stricter than it was in 2005: through-bolted ledgers with flashing, lateral ties, post bases above the concrete, and joist spacing that suits the decking.",
    ],
    sections: [
      {
        heading: "Decking materials",
        body: ["The frame is pressure-treated southern pine in every case. The decking and railing are where the choice is."],
        table: {
          caption: "Decking options, installed cost per square foot of deck, Lancaster County 2026",
          head: ["Decking", "Installed, per sq ft", "Maintenance", "Life"],
          rows: [
            ["Pressure-treated pine", "$40 to $55", "Seal every 2 to 3 years", "15 to 20 years"],
            ["Composite, standard line", "$60 to $80", "Wash", "25 years and more"],
            ["Composite, premium capped", "$75 to $95", "Wash", "30 years and more"],
            ["PVC decking", "$80 to $105", "Wash", "30 years and more"],
          ],
        },
      },
      {
        heading: "Railings",
        body: [
          "Railings are a quarter of a deck's cost and most of what people touch. Options run from pressure-treated 2x2 balusters at the low end, through black aluminum balusters in a wood or composite top rail, to full aluminum or composite railing systems and cable rail. Josh blocks and through-bolts every post so the railing does not move when you lean on it, which is the thing cheap decks get wrong first.",
        ],
      },
      {
        heading: "Stairs, landings and the ground",
        body: [
          "Stairs get cut stringers at 16 inches on center, not two stringers with a lot of flex, and a concrete or paver landing at the bottom. Decks more than a couple of feet off the ground get lattice or horizontal skirting. Under the deck, Josh lays landscape fabric and stone so you are not mowing under there.",
        ],
      },
      {
        heading: "Deck replacement",
        body: [
          "When an old deck comes out, Josh checks the footings before quoting. If they are below the frost line and the concrete is sound, the new deck can go on them, which saves the digging and a fair amount of money. If they are shallow pads, which many 1990s decks were set on, new footings get dug. The ledger area on the house gets inspected for rot, and the rim joist is repaired if the old ledger let water in.",
        ],
      },
    ],
    pricing: {
      intro: "Typical new-deck prices in Lancaster and Lebanon counties, 2026, including footings, frame, decking, railing, one set of stairs, permit and cleanup.",
      rows: [
        ["Pressure-treated, 10 by 12 feet", "$7,000 to $9,500"],
        ["Pressure-treated, 12 by 16 feet", "$9,000 to $13,000"],
        ["Composite, 12 by 16 feet", "$15,000 to $22,000"],
        ["Composite, 16 by 20 feet", "$22,000 to $32,000"],
        ["Composite, two-level, 400 sq ft", "$28,000 to $42,000"],
        ["Aluminum railing system, added over wood", "$45 to $80 per linear foot"],
        ["Replacement on sound existing footings", "Deduct 15 to 25 percent"],
      ],
      outro: "Decks more than 6 feet off the ground, hard clay or rock digging, and sloped yards push a job up the range.",
    },
    faqs: [
      { q: "How much does a deck cost in Lancaster County?", a: "Most new decks land between $9,000 and $25,000 depending on size and whether the decking is wood or composite. The table above gives ranges by size." },
      { q: "Which composite brand is best?", a: "Trex, TimberTech and Fiberon all make good capped composite. The differences are color ranges and warranty terms. Josh brings samples and recommends based on what you want it to look like." },
      { q: "How long before I can use a pressure-treated deck?", a: "Right away for use. Wait a few months before sealing so the wood dries out." },
      { q: "Can you add a deck to a second-story door?", a: "Yes. Elevated decks need bigger posts and bracing and a longer stair run, and Josh builds them regularly." },
      { q: "Do you build free-standing decks?", a: "Yes. A free-standing deck avoids the ledger entirely, which is sometimes the right answer on a house with a cantilevered floor or a stone wall." },
    ],
    related: ["/decks-porches/porch-construction/", "/decks-porches/", "/home-repair/"],
    projects: ["womelsdorf-laundromat-porch-exterior"],
    schemaType: "Deck construction",
    jobType: "Deck or porch",
  },
  {
    slug: "decks-porches/porch-construction",
    path: "/decks-porches/porch-construction/",
    parent: "decks-porches",
    group: "outdoor",
    name: "Porch construction",
    short: "Front porches, porch roofs over patios and decks, and screened porches, residential and storefront.",
    eyebrow: "Porch construction",
    title: "Porch Construction in Lancaster, PA | Front & Screened Porches | Fox Gables",
    metaDescription:
      "Front porch construction, porch roofs and screened-in porches in Lancaster and Lebanon counties, including commercial storefront porches. Licensed contractor Fox Gables Construction, Akron PA.",
    h1: "Front porches, porch roofs and screened porches",
    lede:
      "A porch is where a house meets the street, and in Lancaster County that matters. Josh rebuilds the sagging front porches on old brick homes, adds covered porches to houses that never had one, builds screened porches for the bugs in July, and builds storefront porches for small businesses.",
    hero: { src: "/photos/jobs/laundromat-porch-3.jpg", alt: "New covered porch with railing across a storefront in Womelsdorf", ratio: "4/5" },
    intro: [
      "The brick twins and singles that fill Ephrata, Lititz, Manheim, Mount Joy and Lebanon were almost all built with full-width front porches. A century later the floors sag, the columns sit on rotted bases, the roof leaks where it meets the house, and the railings are a code problem. Rebuilding those porches properly is a steady part of Fox Gables work.",
      "The other half is new porches: a roof over an existing patio or deck so it can be used in the rain, a screened porch for summer evenings, or a covered entry on a house whose front door opens onto nothing. The laundromat porch on the projects page is the commercial version of the same thing.",
    ],
    sections: [
      {
        heading: "Rebuilding an old porch",
        body: [
          "An old porch rebuild starts with what is under it. Josh checks the footings under the columns and the floor framing; most need new piers below frost and new pressure-treated joists. The floor goes back as tongue-and-groove porch flooring, pressure-treated, composite, or in some cases fir painted to match the original. Columns are replaced with structural fiberglass or wrapped wood on new bases that will not rot. Railings are rebuilt to code height with balusters at the right spacing, in a style that suits the house.",
          "The porch roof is usually the last part. Most old porch roofs are low-pitch and were shingled when they should have been metal. Josh re-roofs them in standing seam metal or a membrane and re-flashes the wall connection, which is where the leak into the living room was coming from.",
        ],
      },
      {
        heading: "New covered porches and porch roofs",
        body: [
          "A new porch roof is a structural addition: posts on footings, a beam sized for the span, rafters tied into the house with a ledger and flashed into the siding or brick, and a roof in metal or shingles depending on pitch. Josh designs it so the roofline looks like it belongs on the house, which usually means matching the main roof's material and trim.",
          "Over an existing patio or deck, the footings for the posts may need to go through the slab or alongside the deck frame. Josh will tell you what the existing structure can carry.",
        ],
      },
      {
        heading: "Screened porches",
        body: [
          "A screened porch is a covered porch with knee walls or a floor-to-ceiling screen system, a screen door, and usually a ceiling fan and lighting. Screen systems with removable panels make cleaning and repair simple. Floors are tongue-and-groove or composite with tight gaps so mosquitoes cannot come up through. Some homeowners add roll-down vinyl panels to extend the season into fall.",
        ],
      },
      {
        heading: "Storefront and commercial porches",
        body: [
          "A covered porch across a storefront is the same construction on a commercial scale: posts on engineered footings, a railing along the open side, a shed roof with soffit, fascia and gutters, and work scheduled around business hours. See the Womelsdorf laundromat project and the commercial page.",
        ],
        table: {
          caption: "Porch pricing, Lancaster and Lebanon counties 2026",
          head: ["Porch", "Typical range", "Notes"],
          rows: [
            ["Front porch rebuild, 8 by 24 feet, new floor, columns, railing", "$14,000 to $26,000", "Roof extra if needed"],
            ["Porch roof replacement, metal, 8 by 24", "$5,500 to $12,000", "Standing seam"],
            ["New covered porch, 8 by 20 feet", "$20,000 to $38,000", "Footings through roof"],
            ["Porch roof over existing deck or patio, 12 by 14", "$8,000 to $16,000", ""],
            ["Screened porch, 12 by 14 feet, new", "$28,000 to $48,000", "Includes screen system and door"],
            ["Screen in an existing covered porch", "$5,000 to $12,000", ""],
            ["Storefront porch, 8 by 30 feet", "$14,000 to $28,000", ""],
          ],
        },
      },
    ],
    faqs: [
      { q: "Can you rebuild my porch to look like the original?", a: "Yes. Turned columns, spindle railings and tongue-and-groove floors are all available in materials that will not rot. In historic districts Josh works within the review rules." },
      { q: "Does a porch need a permit?", a: "Yes, nearly everywhere in Lancaster and Lebanon counties, with footing and framing inspections. Josh handles it." },
      { q: "Metal or shingles on a porch roof?", a: "Metal on anything under about 4-in-12 pitch, which is most porch roofs. Shingles on steeper porch roofs that match the main roof." },
      { q: "Can a screened porch be converted to a sunroom later?", a: "If it is built with that in mind, with a proper foundation and framing sized for windows, yes. Josh can design it that way from the start." },
      { q: "How long does a porch take?", a: "A rebuild runs one to two weeks. A new covered or screened porch two to four weeks including permit and inspection waits." },
    ],
    related: ["/decks-porches/deck-builders/", "/roofing/metal-roofing/", "/commercial/"],
    projects: ["womelsdorf-laundromat-porch-exterior"],
    gallery: [
      { src: "/photos/jobs/laundromat-porch-1.jpg", alt: "Porch roof framing along the laundromat storefront", caption: "Porch roof framed and tied into the wall" },
      { src: "/photos/stock/farmhouse-porch.jpg", alt: "White farmhouse with a green metal roof and front porch", caption: "A farmhouse porch with a metal roof" },
    ],
    schemaType: "Porch construction",
    jobType: "Deck or porch",
  },
];
