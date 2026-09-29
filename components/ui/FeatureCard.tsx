import { IconType } from "react-icons";

type FeatureCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="flex flex-col items-center px-8 text-center">

      <Icon className="mb-6 h-10 w-10 text-gold" />

      <h3 className="font-subtitle text-sm uppercase tracking-[0.25em] text-gold">
        {title}
      </h3>

      <p className="mt-4 font-body leading-7 text-cream">
        {description}
      </p>

    </article>
  );
}