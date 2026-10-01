import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * A photo cut as a gable. The ratio decides the frame, the rise (per 12 of run)
 * decides the roof pitch. 6/12 is the default, the most common residential pitch
 * in Lancaster County; wide frames use a shallower 3/12 so the cut does not eat the photo.
 */
export function HouseFrame({
  src,
  alt,
  ratio = "4/5",
  rise,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className = "",
  children,
  imgClassName = "",
}: {
  src: string;
  alt: string;
  ratio?: "4/5" | "1/1" | "3/2" | "16/10" | "5/4" | "3/4";
  rise?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}) {
  const [w, h] = ratio.split("/").map(Number);
  const r = rise ?? (w > h ? 3 : 6);
  // gable height as a share of frame height: (w/2 * r/12) / h
  const gh = ((w / 2) * (r / 12)) / h;
  const style = { "--gh": `${(gh * 100).toFixed(2)}%`, aspectRatio: `${w} / ${h}` } as CSSProperties;
  return (
    <div className={`house ${className}`} style={style}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} />
      {children}
    </div>
  );
}
