import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  /** The trailing words rendered in the brand gradient. */
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  accent,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex flex-col ${alignment}`}>
        <span className="kicker">
          <span className="h-px w-8 bg-teal-soft/60" />
          {kicker}
        </span>
        <h2 className="heading mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h2>
        {description && (
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-mist-dim ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
