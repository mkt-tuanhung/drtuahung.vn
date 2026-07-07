import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-display text-xs uppercase tracking-widest2 text-gold/80 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="gold-text mt-4 font-serif text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
