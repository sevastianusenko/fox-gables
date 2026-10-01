export type Project = {
  slug: string;
  title: string;
  short: string;
  town: string;
  county: string;
  services: string[]; // service paths
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string; caption?: string }[];
  before?: { src: string; alt: string };
  after?: { src: string; alt: string };
  facts: { label: string; value: string }[];
  body: string[]; // paragraphs
  quote?: { text: string; name: string };
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "womelsdorf-laundromat-porch-exterior",
    title: "New front porch, soffit, gutters and windows for a laundromat",
    short: "A commercial storefront in Womelsdorf got a new covered porch, soffit, gutters and two new windows.",
    town: "Womelsdorf",
    county: "Berks County",
    services: ["/decks-porches/porch-construction/", "/gutters/", "/windows/", "/commercial/"],
    cover: { src: "/photos/jobs/laundromat-porch-3.jpg", alt: "Front of the Womelsdorf laundromat with the new covered porch and railing" },
    gallery: [
      { src: "/photos/jobs/laundromat-porch-1.jpg", alt: "New porch framing and roof along the laundromat storefront", caption: "Porch roof framed and tied into the existing wall" },
      { src: "/photos/jobs/laundromat-porch-2.jpg", alt: "Laundromat entrance under the new porch roof with fresh soffit", caption: "New soffit and fascia under the porch roof" },
      { src: "/photos/jobs/laundromat-porch-3.jpg", alt: "Street view of the finished porch with black railing", caption: "Finished porch with railing, seen from the parking lot" },
      { src: "/photos/jobs/laundromat-porch-4.jpg", alt: "Side view of the building showing new windows and gutters", caption: "Two new energy-efficient windows and new gutters" },
    ],
    facts: [
      { label: "Where", value: "Womelsdorf, Berks County" },
      { label: "Building", value: "Single-story commercial, laundromat" },
      { label: "Work", value: "Covered front porch, soffit and fascia, seamless gutters, two new windows, one window closed in" },
      { label: "Schedule", value: "Finished on the agreed date, business stayed open" },
    ],
    body: [
      "The owner of the Womelsdorf laundromat wanted customers to be able to get in and out of the building without standing in the rain, and wanted the front of the building to look cared for. The old entrance had no cover, the soffit was tired, and the gutters were dumping water next to the foundation.",
      "Josh built a covered porch across the storefront with a shed roof tied into the existing wall, posts set on proper footings, and a railing along the open side. The porch roof got new soffit and fascia so the underside is sealed against moisture and insects, and the whole building got new seamless gutters with downspouts routed away from the slab.",
      "On the side elevation, two old windows were replaced with new energy-efficient units and one unnecessary window was framed in and sided over, which cleaned up the exterior and cut a draft inside. The building stayed open through the job. Work was scheduled around the busiest hours so customers were never blocked from the door.",
    ],
    metaDescription:
      "Commercial porch construction in Womelsdorf, PA: covered storefront porch, new soffit and fascia, seamless gutters and replacement windows for a laundromat, by Fox Gables Construction.",
  },
  {
    slug: "bathroom-remodel-jet-tub-tile",
    title: "Full bathroom remodel with a jetted tub and tiled walls",
    short: "An outdated bathroom taken down to the studs and rebuilt with a jetted tub, subway tile walls, new fixtures and slip-resistant floor.",
    town: "Ephrata area",
    county: "Lancaster County",
    services: ["/remodeling/bathroom-remodeling/", "/remodeling/"],
    cover: { src: "/photos/jobs/bathroom-subway-tile-1.jpg", alt: "Finished bathroom with white subway tile walls and new tub" },
    before: { src: "/photos/jobs/bathroom-before.jpg", alt: "The old bathroom before the remodel, with dated wall covering and fixtures" },
    after: { src: "/photos/jobs/bathroom-subway-tile-2.jpg", alt: "The same bathroom after the remodel, with subway tile and new vanity" },
    gallery: [
      { src: "/photos/jobs/bathroom-before.jpg", alt: "Old bathroom before demolition", caption: "Before: original wall covering, tub and vanity" },
      { src: "/photos/jobs/bathroom-framing.jpg", alt: "Bathroom opened to the studs with new framing for the tub deck", caption: "Down to the studs, framing the tub platform" },
      { src: "/photos/jobs/bathroom-rough-in.jpg", alt: "New tub set in place with plumbing rough-in visible", caption: "Jetted tub set, plumbing roughed in" },
      { src: "/photos/jobs/bathroom-waterproofing.jpg", alt: "Walls around the tub covered with orange waterproofing membrane", caption: "Waterproofing membrane before tile" },
      { src: "/photos/jobs/jet-tub-install.jpg", alt: "Jetted tub installed with cement board walls ready for tile", caption: "Cement board and tub ready for tile" },
      { src: "/photos/jobs/bathroom-subway-tile-1.jpg", alt: "Finished tub surround in white subway tile with a shelf niche", caption: "After: subway tile to the ceiling, built-in shelf" },
      { src: "/photos/jobs/bathroom-subway-tile-2.jpg", alt: "Finished bathroom vanity and tile", caption: "After: new vanity, lighting and floor" },
    ],
    facts: [
      { label: "Where", value: "Ephrata area, Lancaster County" },
      { label: "Scope", value: "Full gut, jetted tub, tiled surround, vanity, fixtures, LED lighting, slip-resistant floor" },
      { label: "Waterproofing", value: "Sheet membrane behind all tile, not just paint-on" },
      { label: "Timeline", value: "About two weeks start to finish" },
    ],
    body: [
      "This bathroom had the usual problems of a house from the 1970s: a cast tub that had lost its finish, wall covering that had been patched a few times, and a vanity that was too small for the room. The owners wanted a tub they could actually soak in and walls that would not need attention again for a long time.",
      "Josh took the room back to the studs. That made it possible to frame a proper deck for the jetted tub, re-route the supply and drain for the new location, and bring the electrical for the pump and the new lighting up to code. The walls around the tub were sheeted in cement board and covered with a sheet waterproofing membrane before a single tile went on, which is the part that keeps a tiled bathroom from leaking into the floor five years later.",
      "The surround is white subway tile run up to the ceiling with a recessed shelf for bottles. The floor is a textured porcelain tile chosen for grip when wet. New fixtures, a wider vanity with storage, and LED lighting finished the room. The whole job took about two weeks, including a couple of days of cure time the tile and membrane need.",
    ],
    metaDescription:
      "Bathroom remodel in Lancaster County, PA: full gut, jetted tub, waterproofed subway tile surround, new vanity and lighting. See before and after photos from Fox Gables Construction.",
  },
  {
    slug: "full-house-remodel-reading-pa",
    title: "Whole-house interior remodel in Reading",
    short: "New drywall throughout, a new kitchen, new flooring, lighting, trim and a rebuilt staircase railing in a Reading home.",
    town: "Reading",
    county: "Berks County",
    services: ["/remodeling/", "/remodeling/kitchen-remodeling/", "/home-repair/"],
    cover: { src: "/photos/jobs/kitchen-white-shaker-1.jpg", alt: "New white shaker kitchen with stainless appliances and wood-look floor" },
    gallery: [
      { src: "/photos/jobs/kitchen-white-shaker-1.jpg", alt: "White shaker kitchen cabinets with granite countertop and new flooring", caption: "New kitchen: white shaker cabinets, granite, stainless appliances" },
      { src: "/photos/jobs/kitchen-white-shaker-2.jpg", alt: "Kitchen seen from the dining side with new range and microwave", caption: "Kitchen from the dining room side" },
      { src: "/photos/jobs/living-room-floors.jpg", alt: "Living room with new wood-look flooring and fresh drywall", caption: "New floors and drywall through the first floor" },
      { src: "/photos/jobs/hallway-trim.jpg", alt: "Hallway with new door casing, baseboard and paint", caption: "New casing, baseboard and doors" },
      { src: "/photos/jobs/stair-railing.jpg", alt: "Rebuilt staircase with wood handrail and black metal balusters", caption: "Rebuilt stair railing with metal balusters" },
    ],
    facts: [
      { label: "Where", value: "Reading, Berks County" },
      { label: "Scope", value: "Drywall throughout, kitchen, flooring, lighting, trim and doors, stair railing" },
      { label: "Kitchen", value: "White shaker cabinets, granite counters, new layout" },
      { label: "Floors", value: "Wood-look plank through the first floor" },
    ],
    body: [
      "The owners of this Reading home bought a house with good bones and tired everything else: cracked plaster, a kitchen that had been closed off from the rest of the house, worn floors and old two-prong wiring in several rooms. Rather than fix one room at a time, they asked Josh to take the whole interior in one pass.",
      "The plaster came out and new drywall went up in every room, which also gave access to update wiring and add recessed lighting where the old ceiling fixtures had been. The kitchen was opened up, re-plumbed for the new layout, and finished with white shaker cabinets, granite countertops and stainless appliances. New plank flooring runs through the first floor so the rooms read as one space.",
      "Trim work included new door casings, baseboard and interior doors, and the staircase got a rebuilt handrail with black metal balusters. The owners wrote afterward that the project reinforced the importance of working with skilled professionals. It is the kind of job that goes well when one person is responsible for all of it and the trades are sequenced right.",
    ],
    metaDescription:
      "Whole-house remodel in Reading, PA by Fox Gables Construction: new drywall, kitchen with white shaker cabinets, flooring, lighting, trim and staircase railing.",
  },
  {
    slug: "metal-roof-farmhouse",
    title: "Metal roofing on a Lancaster County farmhouse and outbuilding",
    short: "Dark ribbed metal panels on a two-story farmhouse, plus a large metal roof on an agricultural building.",
    town: "Lancaster County",
    county: "Lancaster County",
    services: ["/roofing/metal-roofing/", "/roofing/", "/commercial/"],
    cover: { src: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Two-story farmhouse with a new dark metal roof" },
    gallery: [
      { src: "/photos/jobs/metal-roof-farmhouse.jpg", alt: "Farmhouse with new charcoal metal roof and white siding", caption: "Farmhouse with new charcoal ribbed metal roof" },
      { src: "/photos/jobs/metal-roof-commercial.jpg", alt: "Long agricultural building with a new metal roof against a blue sky", caption: "Long-span metal roof on an agricultural building" },
      { src: "/photos/jobs/roofer-silhouette.jpg", alt: "Roofer kneeling on a roof at sunrise", caption: "Josh on a roof at the start of a day" },
    ],
    facts: [
      { label: "Where", value: "Lancaster County" },
      { label: "Roof", value: "Ribbed metal panels, charcoal, with matching trim and ridge" },
      { label: "Why metal", value: "Fifty-year service life, sheds snow, no granule loss" },
      { label: "Also", value: "Long-span metal roof on an agricultural building nearby" },
    ],
    body: [
      "Metal is the right roof for a lot of Lancaster County houses, and farmhouses especially. The roofs are simple, the pitches are decent, and the owners plan to be there a long time. This two-story farmhouse got dark ribbed metal panels over new underlayment, with matching drip edge, gable trim and a vented ridge cap.",
      "Panel roofing is unforgiving of sloppy layout. The panels have to be square to the eave or the ribs drift and the last panel ends up cut at an angle. Josh snaps lines, checks the first panel twice and fastens on the flats with screws and sealing washers at the manufacturer's spacing. Every penetration gets a proper boot, not a blob of caulk.",
      "The same approach works at a bigger scale. The long agricultural building in the second photo got a new metal roof on purlins, which is a day on the ground laying out and a few days on the roof. The owners of barns, sheds and shops across the county call for this work because a metal roof on an outbuilding is the one repair they can make once and forget.",
    ],
    metaDescription:
      "Metal roofing in Lancaster County by Fox Gables Construction: charcoal ribbed metal panels on a farmhouse and a long-span metal roof on an agricultural building.",
  },
  {
    slug: "shingle-roof-replacement-cape-cod",
    title: "Shingle roof replacement on a Cape Cod with dormers",
    short: "Full tear-off and new architectural shingles on a Cape Cod with two front dormers, including new decking where the old boards had gone soft.",
    town: "Northern Lancaster County",
    county: "Lancaster County",
    services: ["/roofing/roof-replacement/", "/roofing/asphalt-shingle-roofing/", "/roofing/"],
    cover: { src: "/photos/jobs/shingle-roof-cape-cod.jpg", alt: "Cape Cod house with two dormers and a new grey shingle roof" },
    gallery: [
      { src: "/photos/jobs/shingle-roof-cape-cod.jpg", alt: "Cape Cod with new architectural shingles and dormers, ladder still against the eave", caption: "New architectural shingles, dormers flashed and sided" },
      { src: "/photos/jobs/roof-decking-rafters.jpg", alt: "Roof opened to the rafters with new plywood decking being installed", caption: "Rotted boards replaced with new plywood before shingling" },
      { src: "/photos/jobs/shingle-roof-chimney.jpg", alt: "Red shingle roof with a brick chimney and new step flashing", caption: "On another job: new step flashing and counter-flashing at a chimney" },
    ],
    facts: [
      { label: "Where", value: "Northern Lancaster County" },
      { label: "Roof", value: "Architectural shingles, synthetic underlayment, ice and water shield at eaves and valleys" },
      { label: "Decking", value: "Soft boards cut out and replaced with new plywood" },
      { label: "Dormers", value: "Re-flashed, new siding and trim on the cheeks" },
    ],
    body: [
      "Cape Cods are common across Ephrata, Akron and Lititz, and the dormers are where they leak. This one had two front dormers with flashing that had been tarred over more than once, and the roof deck under the valleys had gone soft from years of slow seepage.",
      "The job started with a full tear-off down to the deck. Josh cut out the rotted sections and sistered in new plywood so the shingles would have something solid to hold. Ice and water shield went on at the eaves, in the valleys and around the dormers, with synthetic underlayment over the rest of the deck. New step flashing was woven into the dormer cheeks, and the dormer siding and trim were replaced while the roof was open, which is the cheap time to do it.",
      "Architectural shingles in a mid-grey finished the roof, with a ridge vent to move air out of the attic. The third photo is from a different house, a chimney that had been leaking through old flashing. The fix is the same every time: cut a reglet into the mortar joint, install new step flashing and counter-flashing, and stop relying on caulk.",
    ],
    metaDescription:
      "Shingle roof replacement in Lancaster County: full tear-off, new decking, ice and water shield, re-flashed dormers and architectural shingles on a Cape Cod by Fox Gables Construction.",
  },
  {
    slug: "entry-door-replacement",
    title: "Entry doors, a patio door and a bulkhead door",
    short: "Decorative glass entry doors with sidelights, a sliding patio door in a brick wall, and a steel bulkhead cellar door.",
    town: "Ephrata and Akron area",
    county: "Lancaster County",
    services: ["/doors/", "/home-repair/"],
    cover: { src: "/photos/jobs/entry-door-sidelights.jpg", alt: "New fiberglass entry door with decorative glass and matching sidelights" },
    gallery: [
      { src: "/photos/jobs/entry-door-sidelights.jpg", alt: "Entry door with decorative oval glass and two sidelights in a brick front", caption: "Entry door with sidelights, woodgrain fiberglass" },
      { src: "/photos/jobs/entry-door-sidelights-detail.jpg", alt: "Close view of the decorative glass and brass hardware on a new entry door", caption: "Decorative glass and hardware detail" },
      { src: "/photos/jobs/entry-door-oval-glass.jpg", alt: "Entry door with an oval decorative glass insert", caption: "Oval-glass entry door on another home" },
      { src: "/photos/jobs/patio-door-brick.jpg", alt: "New sliding patio door installed in a brick wall", caption: "Sliding patio door set into a brick opening" },
      { src: "/photos/jobs/bulkhead-door.jpg", alt: "New white steel bulkhead cellar door against a house foundation", caption: "Steel bulkhead door over basement stairs" },
    ],
    facts: [
      { label: "Where", value: "Ephrata and Akron area" },
      { label: "Entry doors", value: "Pre-hung fiberglass with decorative glass and sidelights" },
      { label: "Patio door", value: "Vinyl sliding door, low-E glass, set into brick" },
      { label: "Bulkhead", value: "Steel cellar door on a new curb, sealed to the foundation" },
    ],
    body: [
      "Doors are a job homeowners put off because the old one still technically works. Then the draft gets worse, the threshold rots, the lock sticks, and a sales rep from a big door company quotes a number with a comma in a surprising place. Josh does these as straightforward carpentry: measure the rough opening, order the right unit, and set it plumb, level and square so it closes with one finger for the next twenty years.",
      "The entry door in the first photos is a woodgrain fiberglass unit with decorative glass and two matching sidelights, replacing an original steel door and plain sidelights. The opening was shimmed, foamed and flashed, and the exterior brick mold was wrapped in aluminum so it never needs paint.",
      "The sliding patio door was set into a brick wall, which means careful work at the sill so water runs out, not in. The bulkhead door is a steel unit on a new curb over an existing set of basement stairs, sealed to the foundation and painted to match the trim. Different doors, same standard.",
    ],
    metaDescription:
      "Door installation in Lancaster County by Fox Gables Construction: fiberglass entry doors with sidelights, a sliding patio door in brick, and a steel bulkhead cellar door.",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
