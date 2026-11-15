import { BOOKING_LINK_PROPS, TRUST_LINE } from "@/content/site";

type IntroCallButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  "aria-describedby"?: string;
};

export function IntroCallButton({ variant = "primary", className, ...rest }: IntroCallButtonProps) {
  const classes = ["btn-avatar", variant === "secondary" ? "btn-avatar--secondary" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...BOOKING_LINK_PROPS} {...rest}>
      <picture>
        <source type="image/webp" srcSet="/images/avatar-32.webp 1x, /images/avatar-64.webp 2x" />
        {/* Pre-cropped 1x/2x webp/jpeg, so a picture element instead of next/image. */}
        <img
          src="/images/avatar-32.jpg"
          srcSet="/images/avatar-32.jpg 1x, /images/avatar-64.jpg 2x"
          width={32}
          height={32}
          alt=""
          decoding="async"
        />
      </picture>
      Book an intro call
    </a>
  );
}

export function TrustLine({ className }: { className?: string } = {}) {
  return <p className={["trust-line", className].filter(Boolean).join(" ")}>{TRUST_LINE}</p>;
}
