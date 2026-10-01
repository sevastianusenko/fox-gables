export type Review = {
  quote: string;
  name: string;
  town?: string;
  job: string;
  source: "HomeAdvisor" | "Nextdoor" | "Direct";
  url?: string;
  rating?: 5;
};

/** Real reviews only. Every quote here exists on the named platform. */
export const reviews: Review[] = [
  {
    quote:
      "Very friendly, excellent workmanship. Cleaned up all debris and repaired the yard where the delivery truck went off the driveway.",
    name: "HomeAdvisor customer",
    job: "Roof replacement",
    source: "HomeAdvisor",
    url: "https://www.homeadvisor.com/rated.FoxGablesConstruction.41574845.html",
    rating: 5,
  },
  {
    quote: "Josh is prompt, courteous and highly competent. Did a great job replacing a sliding glass door.",
    name: "HomeAdvisor customer",
    job: "Sliding glass door replacement",
    source: "HomeAdvisor",
    url: "https://www.homeadvisor.com/rated.FoxGablesConstruction.41574845.html",
    rating: 5,
  },
  {
    quote:
      "Kept us informed as the job progressed. The sun room was totally undisturbed and clean when they left. They were on time and on budget.",
    name: "HomeAdvisor customer",
    job: "Sunporch roof replacement",
    source: "HomeAdvisor",
    url: "https://www.homeadvisor.com/rated.FoxGablesConstruction.41574845.html",
    rating: 5,
  },
  {
    quote:
      "Fox Gables replaced sixteen interior doors and six closet sliding doors in my house. Josh Fox is a professional, neat and courteous contractor. I recommended him to our neighbors for roofing repairs and they are very satisfied with his work. I plan to hire Josh for other home improvement projects in the near future.",
    name: "Mikhail Z.",
    job: "Interior and closet doors, 22 in total",
    source: "Direct",
    rating: 5,
  },
  {
    quote:
      "I would stay clear of window companies unless you want to spend a fortune. Look for a small contractor that can do the same job. We had Fox Gables replace ours and wrap the outside wood with aluminum, and they did a wonderful job. Highly recommend.",
    name: "D. B.",
    town: "Ephrata",
    job: "Replacement windows with aluminum trim wrap",
    source: "Nextdoor",
    url: "https://nextdoor.com/pages/fox-gables-construction-ephrata-pa/",
  },
];
