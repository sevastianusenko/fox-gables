export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: "Roofing",
    href: "/roofing/",
    children: [
      { label: "Roofing overview", href: "/roofing/", note: "Shingle and metal, repair and replacement" },
      { label: "Roof replacement", href: "/roofing/roof-replacement/", note: "Full tear-off and new roof" },
      { label: "Roof repair", href: "/roofing/roof-repair/", note: "Leaks, flashing, missing shingles" },
      { label: "Metal roofing", href: "/roofing/metal-roofing/", note: "Standing seam and ribbed panels" },
      { label: "Asphalt shingle roofing", href: "/roofing/asphalt-shingle-roofing/", note: "Architectural shingles" },
      { label: "Storm damage", href: "/roofing/storm-damage-roof-repair/", note: "Wind, hail, fallen limbs" },
    ],
  },
  {
    label: "Exteriors",
    href: "/siding/",
    children: [
      { label: "Siding", href: "/siding/", note: "Vinyl, fiber cement, aluminum trim wrap" },
      { label: "Windows", href: "/windows/", note: "Replacement windows, installed by the owner" },
      { label: "Doors", href: "/doors/", note: "Entry, patio, storm and interior doors" },
      { label: "Gutters, soffit and fascia", href: "/gutters/", note: "Seamless gutters and trim" },
      { label: "Commercial and agricultural", href: "/commercial/", note: "Barns, shops, storefronts" },
    ],
  },
  {
    label: "Decks & porches",
    href: "/decks-porches/",
    children: [
      { label: "Decks and porches overview", href: "/decks-porches/" },
      { label: "Deck building", href: "/decks-porches/deck-builders/", note: "Wood and composite" },
      { label: "Porch construction", href: "/decks-porches/porch-construction/", note: "Front porches, porch roofs, screened porches" },
    ],
  },
  {
    label: "Remodeling",
    href: "/remodeling/",
    children: [
      { label: "Remodeling overview", href: "/remodeling/" },
      { label: "Kitchen remodeling", href: "/remodeling/kitchen-remodeling/" },
      { label: "Bathroom remodeling", href: "/remodeling/bathroom-remodeling/" },
      { label: "Basement finishing", href: "/remodeling/basement-finishing/" },
      { label: "Home repair and carpentry", href: "/home-repair/", note: "Trim, drywall, the small jobs" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "About Josh Fox", href: "/about/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Service areas", href: "/service-areas/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
