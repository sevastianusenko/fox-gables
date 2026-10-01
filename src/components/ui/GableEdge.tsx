/**
 * A roofline cut between two sections. Place as the first child of the lower
 * section and give it the lower section's color; it overlaps the section above.
 */
export function GableEdge({ className = "text-paper" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`gable-edge ${className}`}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <polygon points="0,10 50,0 100,10" />
    </svg>
  );
}
