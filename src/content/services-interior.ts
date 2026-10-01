import type { Service } from "./service-types";

export const interiorServices: Service[] = [
  {
    slug: "remodeling",
    path: "/remodeling/",
    group: "interior",
    name: "Remodeling",
    short: "Kitchens, bathrooms, basements and whole-house interiors by one licensed general contractor.",
    eyebrow: "Interior remodeling",
    title: "Home Remodeling Contractor in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Kitchen, bathroom, basement and whole-home remodeling in Lancaster and Lebanon counties by a licensed general contractor. One point of contact from estimate to walkthrough. Fox Gables Construction.",
    h1: "Interior remodeling with one person responsible for all of it",
    lede:
      "A remodel goes wrong when nobody owns the whole job: the plumber blames the tile guy, the tile guy blames the framer, and you are the one on the phone. Josh is the general contractor and the carpenter. He plans the job, sequences the trades, does the carpentry himself, and is the one person you call.",
    hero: { src: "/photos/jobs/kitchen-white-shaker-1.jpg", alt: "Remodeled kitchen with white shaker cabinets, granite counters and new floor", ratio: "4/5" },
    intro: [
      "Fox Gables Construction does interior remodeling across Lancaster and Lebanon counties: kitchens, bathrooms, finished basements, and whole-house interiors like the Reading home on the projects page that got new drywall, a new kitchen, floors, lighting, trim and a rebuilt staircase in one job.",
      "The approach is the same as on the exterior work. Josh looks at the space, talks through what you want and what the house can do, writes an estimate with the materials named, and does the work with licensed plumbers and electricians brought in for their parts. You get one schedule and one person to ask.",
    ],
    sections: [
      {
        heading: "What Fox Gables remodels",
        body: ["Each has its own page with scope, options and price ranges."],
        bullets: [
          "Kitchens: cabinets, countertops, layout changes, flooring, lighting, opening walls to the dining room",
          "Bathrooms: full gut and rebuild, tub-to-shower conversions, tile, vanities, fixtures, waterproofing done right",
          "Basements: framing, insulation, drywall, flooring, lighting, egress windows, bathrooms",
          "Whole-house interiors: drywall, flooring, trim, doors, stairs, lighting through the house",
          "Home repairs and carpentry: trim, molding, built-ins, the smaller jobs that do not need a full remodel",
        ],
      },
      {
        heading: "How a remodel with Josh goes",
        body: ["Remodels are the jobs where process matters most, because you are living in the house while it happens."],
        bullets: [
          "Walkthrough and measure. Josh looks at the space, the plumbing and electrical, and the structure, and talks through what is realistic.",
          "Written estimate with the scope and materials named, and a schedule showing which week each part happens.",
          "Selections. Cabinets, tile, fixtures and finishes picked with lead times in mind so nothing holds up the job.",
          "Demolition and rough-in. The room is sealed off from the rest of the house with plastic and a zipper door; dust is controlled.",
          "Inspections where required, then finishes: drywall, tile, cabinets, floors, trim, paint-ready.",
          "Walkthrough with you, punch list done, final payment when you are satisfied.",
        ],
      },
      {
        heading: "Houses in Lancaster County",
        body: [
          "The housing stock here shapes the work. Brick rows in Lancaster, Lebanon and Reading have narrow kitchens and bathrooms stacked on the same plumbing wall, and remodeling them is about making the most of a small footprint. Ranches and split-levels from the 1950s to 1970s in Ephrata, Lititz and Manheim Township have kitchens closed off from the living room and single bathrooms that need a second one; opening a wall and adding a bath are the common jobs. Newer colonials have builder-grade kitchens and baths that owners replace around year fifteen.",
          "Older houses also bring surprises: plaster and lath, knob-and-tube wiring, galvanized pipe, floors that are not level. Josh's estimates carry allowances for what is likely behind the walls on a house of that age, and he tells you what he found as soon as the wall is open.",
        ],
      },
    ],
    pricing: {
      intro: "Rough ranges for interior remodeling in Lancaster and Lebanon counties, 2026. Each project page has more detail.",
      rows: [
        ["Kitchen, full remodel, mid-range", "$30,000 to $65,000"],
        ["Kitchen, cabinets and counters only", "$16,000 to $32,000"],
        ["Hall bathroom, full remodel", "$16,000 to $32,000"],
        ["Primary bathroom, full remodel", "$30,000 to $55,000"],
        ["Basement finish, 600 to 900 sq ft", "$25,000 to $55,000"],
        ["Whole-house interior, drywall through trim", "$60,000 and up, by scope"],
      ],
      outro: "Material selections drive the range more than anything else. Josh will show where money matters and where it does not.",
    },
    faqs: [
      { q: "Are you a general contractor?", a: "Yes. Fox Gables Construction is registered as a Pennsylvania Home Improvement Contractor, PA125031, and Josh acts as the general contractor on remodels, bringing in licensed plumbers and electricians for their parts." },
      { q: "Can we live in the house during the remodel?", a: "Almost always. Josh seals off the work area, keeps a path clear, and schedules so you are never without a working bathroom or a way to cook." },
      { q: "How far out are you booking remodels?", a: "Kitchens and whole-house jobs a few months out; single bathrooms sooner. Call for the current schedule." },
      { q: "Do you handle the design?", a: "Josh works out the layout with you and can recommend a kitchen designer for cabinet drawings when the job calls for it." },
      { q: "Do you do the plumbing and electrical?", a: "Licensed plumbers and electricians Josh has worked with for years do their parts, on his schedule, under his permit." },
    ],
    related: ["/remodeling/kitchen-remodeling/", "/remodeling/bathroom-remodeling/", "/remodeling/basement-finishing/"],
    projects: ["full-house-remodel-reading-pa", "bathroom-remodel-jet-tub-tile"],
    gallery: [
      { src: "/photos/jobs/living-room-floors.jpg", alt: "Living room with new flooring and fresh drywall", caption: "New floors and drywall, Reading" },
      { src: "/photos/jobs/stair-railing.jpg", alt: "Rebuilt staircase with wood handrail and metal balusters", caption: "Rebuilt stair railing" },
      { src: "/photos/jobs/bathroom-subway-tile-2.jpg", alt: "Finished bathroom with subway tile", caption: "Bathroom after a full gut and rebuild" },
    ],
    schemaType: "Home remodeling",
    jobType: "Kitchen",
  },
  {
    slug: "remodeling/kitchen-remodeling",
    path: "/remodeling/kitchen-remodeling/",
    parent: "remodeling",
    group: "interior",
    name: "Kitchen remodeling",
    short: "Cabinets, countertops, layout changes, flooring and lighting, with the wall opened up if that is what the house needs.",
    eyebrow: "Kitchen remodeling",
    title: "Kitchen Remodeling in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Kitchen remodels in Lancaster and Lebanon counties: cabinets, countertops, layout changes, flooring and lighting by a licensed contractor. Clear quotes, on-schedule work. Fox Gables Construction, Akron PA.",
    h1: "Kitchen remodeling, planned so you are not eating takeout for three months",
    lede:
      "A kitchen remodel is the most disruptive thing you can do to a house, and it goes well or badly depending on planning. Josh sequences the job so demolition starts only when the cabinets are on the ground, and the kitchen is out of service for weeks, not months.",
    hero: { src: "/photos/jobs/kitchen-white-shaker-2.jpg", alt: "Remodeled kitchen with white shaker cabinets, stainless range and microwave", ratio: "4/5" },
    intro: [
      "The kitchen in the Reading house on the projects page is the typical Fox Gables kitchen: a closed-off room opened to the dining area, white shaker cabinets, granite countertops, stainless appliances, new plank flooring and recessed lighting. It is the kitchen most people in Lancaster County want, and it is a good kitchen, because the materials are durable and the layout works.",
      "Josh handles the kitchen as general contractor and carpenter: demolition, any wall changes, framing, drywall, cabinet installation, countertop templating with the fabricator, trim, flooring and the coordination of the plumber and electrician. The result is one schedule and one person to call.",
    ],
    sections: [
      {
        heading: "Scope: what a kitchen remodel can include",
        body: ["Kitchens range from a cabinet-and-counter swap to a full gut with a new layout. Josh prices the scope you want."],
        bullets: [
          "Cabinets: stock, semi-custom or custom; shaker, flat-panel or raised-panel; painted or stained",
          "Countertops: granite, quartz, butcher block, laminate; templated and installed by the fabricator on Josh's schedule",
          "Layout changes: removing a wall to the dining or living room, adding an island or peninsula, relocating the sink or range",
          "Flooring: plank vinyl, tile or hardwood, run under the cabinets or up to them depending on the plan",
          "Lighting: recessed cans, under-cabinet lighting, pendants over the island, on new circuits",
          "Plumbing and electrical updates to current code, including dedicated appliance circuits and GFCI",
          "Backsplash tile, trim, crown molding on the cabinets, and paint-ready walls",
          "Appliance installation and venting for the range hood",
        ],
      },
      {
        heading: "Opening the wall",
        body: [
          "The most common structural change in a Lancaster County kitchen remodel is removing the wall between the kitchen and the dining room on a 1950s to 1970s ranch or split-level. Whether that wall carries load depends on the house; many do. Josh identifies it, and if it is bearing, installs a beam sized for the span, usually an LVL, with proper posts to the foundation. It is a day of work and a permit, and it changes the whole house.",
        ],
      },
      {
        heading: "Cabinets: where the money goes",
        body: [
          "Cabinets are a third to a half of a kitchen budget. Stock cabinets in standard sizes are the economical choice and fine for a straightforward layout. Semi-custom lines add sizes, finishes and interior options. Custom cabinets from a local shop, and there are good ones in Lancaster County, make sense for odd spaces and specific looks. Josh installs all three and will tell you where each makes sense.",
          "Plywood boxes last longer than particleboard, soft-close hinges and drawer glides are worth it, and a full-overlay shaker door in a painted finish is the choice that will not look dated in ten years.",
        ],
        table: {
          caption: "Kitchen remodel pricing, Lancaster County 2026",
          head: ["Scope", "Typical range", "Kitchen out of service"],
          rows: [
            ["Cabinets, counters and backsplash only, same layout", "$16,000 to $32,000", "1 to 2 weeks"],
            ["Full remodel, same layout, mid-range materials", "$30,000 to $50,000", "3 to 4 weeks"],
            ["Full remodel with wall removal and new layout", "$45,000 to $75,000", "4 to 6 weeks"],
            ["Full remodel, custom cabinets and premium finishes", "$70,000 and up", "5 to 8 weeks"],
          ],
        },
      },
      {
        heading: "Sequencing so the kitchen is down for weeks, not months",
        body: [
          "Cabinets take four to eight weeks to arrive. Countertops are templated after cabinets are in and take another one to two weeks. The kitchen that is down for three months is the one where demolition started the day the contract was signed. Josh does not start demolition until the cabinets are delivered. Then the order is: demo, rough plumbing and electrical, inspection, drywall, paint-ready, flooring, cabinets, template, finish plumbing and electrical, countertops, backsplash, trim, appliances. Each step is scheduled before the first hammer swings.",
        ],
      },
    ],
    faqs: [
      { q: "How long is the kitchen unusable?", a: "Two to six weeks depending on scope, counted from demolition, which does not start until cabinets are on site. Josh sets up a temporary sink and a place for the microwave." },
      { q: "Can you remove the wall to the dining room?", a: "Usually. If it is load-bearing Josh installs a beam and posts. It is a permitted structural change he does regularly." },
      { q: "Where do you get cabinets?", a: "Stock and semi-custom lines through local suppliers, and custom cabinets from Lancaster County shops. Josh will show you options at each price level." },
      { q: "Granite or quartz?", a: "Both are durable. Quartz is uniform and needs no sealing; granite is natural stone and needs sealing every few years. Prices overlap." },
      { q: "Do I need a permit for a kitchen remodel?", a: "For plumbing, electrical and structural changes, yes, in most municipalities. Josh pulls the permits and schedules inspections." },
      { q: "Can you do a kitchen in a Lancaster row home?", a: "Yes. Narrow kitchens are a layout puzzle Josh enjoys. Galley layouts with tall cabinets and good lighting work well." },
    ],
    related: ["/remodeling/bathroom-remodeling/", "/remodeling/", "/home-repair/"],
    projects: ["full-house-remodel-reading-pa"],
    gallery: [
      { src: "/photos/stock/kitchen-island.jpg", alt: "White kitchen with an island and pendant lights", caption: "Island with pendants, a common request" },
      { src: "/photos/stock/kitchen-window.jpg", alt: "Kitchen sink under a window with white cabinets", caption: "Sink under the window, apron front" },
    ],
    schemaType: "Kitchen remodeling",
    jobType: "Kitchen",
  },
  {
    slug: "remodeling/bathroom-remodeling",
    path: "/remodeling/bathroom-remodeling/",
    parent: "remodeling",
    group: "interior",
    name: "Bathroom remodeling",
    short: "Full gut and rebuild, tub-to-shower conversions, tile surrounds with real waterproofing, vanities and fixtures.",
    eyebrow: "Bathroom remodeling",
    title: "Bathroom Remodeling in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Full bathroom remodels in Lancaster and Lebanon counties: tile showers, jetted tubs, vanities, flooring, waterproofing done right. See before and after photos. Free estimate from Fox Gables Construction.",
    h1: "Bathroom remodeling with waterproofing you will never see and never regret",
    lede:
      "A bathroom is the most likely room in the house to be done wrong, because the mistakes are behind the tile. Josh rebuilds bathrooms from the studs out, with a sheet membrane behind every tiled wall and a shower pan that is tested before tile goes on.",
    hero: { src: "/photos/jobs/bathroom-subway-tile-1.jpg", alt: "Finished bathroom with white subway tile to the ceiling and a built-in niche", ratio: "4/5" },
    intro: [
      "The bathroom on the projects page shows the whole process: a 1970s bathroom with dated wall covering and a worn tub, taken to the studs, re-framed for a jetted tub, plumbing and electrical updated, cement board and a sheet waterproofing membrane on the walls, then white subway tile to the ceiling, a textured porcelain floor, a wider vanity and LED lighting. Two weeks, including cure time.",
      "That is the standard Fox Gables bathroom. The look can be anything from subway tile and a pedestal sink in a Lancaster row home to a large-format tile walk-in shower in a Lititz primary suite. The construction underneath is the same.",
    ],
    sections: [
      {
        heading: "Scope options",
        body: ["Bathrooms run from a fixture swap to a full gut. The common jobs:"],
        bullets: [
          "Full remodel: everything out, new framing as needed, new plumbing and electrical, tile, fixtures, vanity, lighting, floor, exhaust fan",
          "Tub-to-shower conversion: the tub comes out and a tiled or solid-surface walk-in shower goes in, often with a curbless entry for aging in place",
          "Tub surround replacement: new tiled surround on a new or existing tub, with proper waterproofing",
          "Second bathroom: adding a half or full bath in a closet, under stairs or in a basement",
          "Fixture and vanity update: new vanity, toilet, faucet, lighting and floor without touching the tile",
        ],
      },
      {
        heading: "Waterproofing, the part that matters",
        body: [
          "Tile is not waterproof. Grout is not waterproof. The waterproofing is whatever is behind the tile, and on most older bathrooms it was nothing, or drywall, or a coat of paint-on membrane applied too thin. Josh uses cement board with a bonded sheet membrane (Schluter Kerdi or similar) on every tiled wall, a pre-sloped foam shower pan or a mortar bed with a sheet membrane, sealed corners and pipe penetrations, and a flood test of the pan before any tile goes on.",
          "That adds a day and a few hundred dollars to the job. It is the difference between a bathroom that lasts thirty years and one that leaks into the kitchen ceiling in five.",
        ],
      },
      {
        heading: "Ventilation, electrical and the small things",
        body: [
          "A bathroom without a working exhaust fan grows mold, and most older bathrooms in the county have either no fan or one that vents into the attic. Every Fox Gables bathroom gets a properly sized fan vented through the roof or wall. Electrical is brought to code with GFCI protection, a dedicated circuit for a jetted tub or heated floor, and lighting at the mirror that does not make everyone look tired. Floors get a textured tile that is not slippery wet; heated floors are an easy add while the floor is open.",
        ],
        table: {
          caption: "Bathroom remodel pricing, Lancaster County 2026",
          head: ["Scope", "Typical range", "Bathroom out of service"],
          rows: [
            ["Vanity, toilet, lighting and floor update", "$5,000 to $11,000", "2 to 4 days"],
            ["Tub surround replacement, tiled", "$6,500 to $12,000", "4 to 6 days"],
            ["Tub-to-shower conversion, tiled", "$10,000 to $20,000", "1 to 2 weeks"],
            ["Hall bathroom, full remodel", "$16,000 to $32,000", "2 to 3 weeks"],
            ["Primary bathroom, full remodel", "$30,000 to $55,000", "3 to 5 weeks"],
            ["New half bath added", "$9,000 to $18,000", "n/a"],
          ],
        },
      },
    ],
    faqs: [
      { q: "How long is the bathroom out of service?", a: "Two to three weeks for a full remodel of a hall bath, including the cure times the membrane, pan and grout need. Josh schedules so a one-bathroom house is not without a toilet overnight." },
      { q: "Tile or a solid-surface shower?", a: "Tile for looks and flexibility, solid-surface panels for a faster, lower-maintenance install. Both get proper waterproofing underneath." },
      { q: "Can you make the shower curbless for a walker or wheelchair?", a: "Yes. A curbless entry needs the floor recessed or a linear drain and is best planned from the start." },
      { q: "Do you do bathrooms in Lancaster row homes?", a: "Yes. Row-home bathrooms are small and stacked on one plumbing wall, which keeps costs reasonable." },
      { q: "Is a jetted tub worth it?", a: "If you will use it. It needs a dedicated circuit and an access panel for the pump. The bathroom on the projects page has one and the owners love it." },
      { q: "Do you handle the permit?", a: "Yes. Plumbing and electrical changes are permitted in most municipalities and Josh files and schedules inspections." },
    ],
    related: ["/remodeling/kitchen-remodeling/", "/remodeling/basement-finishing/", "/remodeling/"],
    projects: ["bathroom-remodel-jet-tub-tile"],
    gallery: [
      { src: "/photos/jobs/bathroom-waterproofing.jpg", alt: "Orange sheet waterproofing membrane on bathroom walls before tile", caption: "Sheet membrane on every tiled wall" },
      { src: "/photos/jobs/jet-tub-install.jpg", alt: "Jetted tub installed with cement board walls ready for tile", caption: "Jetted tub set, cement board up" },
      { src: "/photos/jobs/bathroom-before.jpg", alt: "The old bathroom before remodeling", caption: "Before" },
    ],
    schemaType: "Bathroom remodeling",
    jobType: "Bathroom",
  },
  {
    slug: "remodeling/basement-finishing",
    path: "/remodeling/basement-finishing/",
    parent: "remodeling",
    group: "interior",
    name: "Basement finishing",
    short: "Framing, insulation, drywall, floors, lighting, egress windows and bathrooms to turn a basement into living space.",
    eyebrow: "Basement finishing",
    title: "Basement Finishing in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Turn an unfinished basement into living space in Lancaster and Lebanon counties: framing, insulation, drywall, flooring, lighting, egress windows and bathrooms. Licensed general contractor Fox Gables.",
    h1: "Basement finishing: the cheapest square footage you can add",
    lede:
      "Finishing a basement costs a fraction of an addition and adds a family room, an office, a bedroom or an in-law space. Josh does the whole job: moisture check, framing, insulation, drywall, floors, lighting, egress window, and a bathroom if you want one.",
    hero: { src: "/photos/jobs/egress-window-well.jpg", alt: "New egress window and well cut into a basement wall with a paver walkway", ratio: "4/5" },
    intro: [
      "Most houses in Lancaster County built since the 1950s have a full basement with eight-foot ceilings, poured or block walls and a floor drain, which is a good starting point. The ones built since the 1990s often have a rough-in for a bathroom already in the slab. Finishing that space is the most cost-effective way to add a room.",
      "The job has to start with water. A basement that gets damp in spring is not ready to finish, and a finished basement that floods is an expensive demolition. Josh checks the walls, the grading outside, the gutters and downspouts, and the sump before quoting, and will tell you what needs fixing first. That is also why gutters and downspouts are on this site: they are the first line of basement waterproofing.",
    ],
    sections: [
      {
        heading: "What a finished basement includes",
        body: ["The typical scope, each item named in the estimate."],
        bullets: [
          "Moisture check and any needed sealing, drainage or sump work before framing",
          "Steel or pressure-treated bottom plates and wood framing set off the walls for an air gap",
          "Rigid foam insulation against the foundation walls, then batts in the stud bays; no fiberglass against bare concrete",
          "Electrical: outlets to code, recessed lighting, dedicated circuits, smoke and CO detectors",
          "Drywall, taped and ready for paint; drop ceilings or drywall ceilings with access panels at shutoffs",
          "Flooring: vinyl plank over a subfloor system or directly on the slab, or carpet tiles",
          "Egress window cut into the foundation wall for any bedroom, and for safety in general",
          "Bathroom: full or half, on the existing rough-in or with a new ejector pump",
          "Stairs rebuilt or finished, railings to code",
          "Doors, trim and closets",
        ],
      },
      {
        heading: "Egress windows",
        body: [
          "A basement bedroom is not legal, and not safe, without an egress window: an opening big enough to climb out of, with a well outside and a ladder if the well is deep. Cutting one into a block or poured wall is a day with a concrete saw, a new steel or wood buck, a window, a well and drainage at the bottom of the well. Josh does these as part of a basement finish or on their own. They also bring real daylight into the space, which changes how it feels.",
        ],
      },
      {
        heading: "Ceilings, ducts and the low spots",
        body: [
          "Basements are full of pipes, ducts and beams. Josh boxes them in with soffits where they run in a line, and uses a drop ceiling with access panels where there are many shutoffs and junctions that need to stay reachable. Where the ceiling is high enough, a drywall ceiling looks best. Older houses with seven-foot basements are workable but need the layout planned around the low spots.",
        ],
        table: {
          caption: "Basement finishing pricing, Lancaster County 2026",
          head: ["Scope", "Typical range"],
          rows: [
            ["Family room, 400 to 600 sq ft, no bathroom", "$18,000 to $32,000"],
            ["Family room and bedroom with egress, 600 to 900 sq ft", "$32,000 to $55,000"],
            ["Full finish with full bathroom, 800 to 1,200 sq ft", "$50,000 to $85,000"],
            ["Egress window on its own", "$4,500 to $8,500"],
            ["Half bathroom added on existing rough-in", "$7,000 to $14,000"],
            ["Full bathroom with ejector pump", "$14,000 to $26,000"],
          ],
        },
      },
    ],
    faqs: [
      { q: "My basement gets a little damp. Can it be finished?", a: "After the water problem is fixed, yes. Josh checks gutters, grading, the sump and the walls, and recommends what to do first. He will not frame over a wet wall." },
      { q: "Do I need a permit?", a: "Yes, in nearly every municipality, with electrical, plumbing and framing inspections. Josh handles it." },
      { q: "How long does a basement take?", a: "Four to eight weeks for a typical finish, longer with a bathroom. Inspections set the pace." },
      { q: "Drop ceiling or drywall?", a: "Drywall looks better; a drop ceiling keeps pipes and valves reachable. Josh often does drywall with a few access panels at the shutoffs." },
      { q: "What flooring works on a slab?", a: "Vinyl plank is the most popular: waterproof, warm enough, and it survives a minor water event. A subfloor system underneath adds comfort." },
    ],
    related: ["/remodeling/bathroom-remodeling/", "/windows/", "/gutters/"],
    projects: ["full-house-remodel-reading-pa"],
    gallery: [
      { src: "/photos/stock/brick-living.jpg", alt: "Finished lower-level living room with a brick wall and sofa", caption: "A finished lower level with the original brick kept exposed" },
    ],
    schemaType: "Basement finishing",
    jobType: "Basement",
  },
  {
    slug: "home-repair",
    path: "/home-repair/",
    group: "interior",
    name: "Home repair and carpentry",
    short: "Trim and molding, drywall, built-ins, rot repair and the small jobs big companies will not take.",
    eyebrow: "Home repair and carpentry",
    title: "Home Repair & Carpentry in Lancaster, PA | Fox Gables Construction",
    metaDescription:
      "Structural and cosmetic home repairs, trim and molding, drywall, custom carpentry in Lancaster and Lebanon counties. The jobs too small for big companies, done right by a licensed contractor.",
    h1: "Repairs and carpentry: the jobs that need a carpenter, not a company",
    lede:
      "Rotted porch posts, a door that drags, a wall that needs trim, a built-in bookcase, a soft spot in the floor. These are not jobs for a handyman app or a company with a sales team. They are carpentry, and Josh does them between the bigger jobs.",
    hero: { src: "/photos/stock/carpenter.jpg", alt: "Carpenter with a tool belt and hammer working on a wood wall", ratio: "4/5" },
    intro: [
      "A lot of what keeps a house in good shape is small: the rotted bottom of a door jamb, the window sill that needs rebuilding, the baseboard that was never finished after the floor went in, the closet that needs shelves, the railing that is loose. Fox Gables takes these jobs, usually grouped by area so a morning in Lititz covers three of them.",
      "Josh is a carpenter first. The trim work, custom woodwork and repairs are the part of the business he came up doing, and they are the reason the bigger jobs come out looking finished.",
    ],
    sections: [
      {
        heading: "Repairs",
        body: ["The repair calls Josh takes most often."],
        bullets: [
          "Rot repair: door jambs, window sills, porch posts and columns, rim joists, deck ledgers, fascia",
          "Doors that drag, will not latch, or have a broken jamb",
          "Drywall and plaster repair, including water-damaged ceilings after a roof leak is fixed",
          "Floor repair: soft spots, squeaks, subfloor replacement, transitions",
          "Stair repair: treads, risers, railings and balusters to code",
          "Siding, soffit and trim repair after wind or impact",
          "Screen and storm door repair, weatherstripping, thresholds",
          "Small structural repairs: sistered joists, posts, headers",
        ],
      },
      {
        heading: "Trim and molding",
        body: [
          "New trim is the finishing touch most remodels skip and most houses from the 1960s to 1990s never had. Josh installs baseboard, door and window casing, crown molding, chair rail, wainscoting and window stools in poplar, pine or MDF, coped at the inside corners, nailed and filled, ready for paint. The hallway on the Reading project shows new casing and baseboard through the house.",
        ],
      },
      {
        heading: "Custom carpentry and built-ins",
        body: [
          "Bookcases, window seats, mudroom benches with cubbies, closet systems, mantels, built-in cabinets around a fireplace, laundry room counters. Josh builds these in the shop or on site from plywood and hardwood, sized to the space, finished or paint-ready. They are the kind of job where the measurement matters more than anything and where a carpenter beats a catalog.",
        ],
        table: {
          caption: "Repair and carpentry pricing, Lancaster County 2026",
          head: ["Job", "Typical range"],
          rows: [
            ["Service call for small repairs, half day", "$350 to $550"],
            ["Door jamb or sill rot repair, each", "$300 to $900"],
            ["Porch post or column replacement, each", "$450 to $1,200"],
            ["Ceiling drywall repair after a leak", "$400 to $1,200"],
            ["Baseboard and casing, per room", "$600 to $1,500"],
            ["Crown molding, per room", "$700 to $1,800"],
            ["Built-in bookcase or window seat", "$1,800 to $6,000"],
            ["Mudroom bench with cubbies and hooks", "$1,500 to $4,500"],
          ],
        },
      },
    ],
    faqs: [
      { q: "Do you really take small jobs?", a: "Yes. Josh groups them by area and schedules them between larger jobs. A half day of small repairs is a normal entry on the calendar." },
      { q: "Is there a minimum?", a: "A half-day service call is the practical minimum. Josh will tell you on the phone if a job is better suited to a handyman service." },
      { q: "Can you fix the ceiling after you fix the roof leak?", a: "Yes. Roof repair and the drywall repair under it are often done as one job." },
      { q: "Do you paint?", a: "Josh leaves work paint-ready, filled and caulked. He can recommend painters." },
      { q: "Do you build custom cabinets?", a: "Built-ins, benches, bookcases and simple cabinets, yes. For a full kitchen of custom cabinets Josh works with local cabinet shops." },
    ],
    related: ["/doors/", "/remodeling/", "/decks-porches/porch-construction/"],
    projects: ["full-house-remodel-reading-pa", "entry-door-replacement"],
    gallery: [
      { src: "/photos/jobs/hallway-trim.jpg", alt: "New door casing and baseboard in a hallway", caption: "New casing and baseboard" },
      { src: "/photos/jobs/stair-railing.jpg", alt: "Rebuilt staircase railing with metal balusters", caption: "Staircase railing rebuilt to code" },
      { src: "/photos/stock/level.jpg", alt: "Hands holding a red level on a surface", caption: "Measured twice" },
    ],
    schemaType: "Home repair and carpentry",
    jobType: "Repair or carpentry",
  },
];
