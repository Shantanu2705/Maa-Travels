import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-gold rounded-full" style={{ left: centered ? "50%" : "0", transform: centered ? "translateX(-50%)" : "none" }}></span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-gray-600 max-w-2xl text-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
