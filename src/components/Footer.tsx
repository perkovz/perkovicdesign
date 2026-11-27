import Link from "next/link";
import { EMAIL, EMAIL_HREF, FOOTER, PRIVACY_HREF, SITE_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="wrap footer" data-reveal="">
      <div className="footer-l">
        <p className="logo flogo">Perkovic</p>
        <p className="footer-c">
          <span>{FOOTER.line1}</span>
          <span>{FOOTER.line2}</span>
        </p>
      </div>
      <div className="footer-c footer-r">
        <a className="link" href={SITE_URL}>
          {FOOTER.site}
        </a>
        <a className="link" href={EMAIL_HREF}>
          {EMAIL}
        </a>
        <Link className="link" href={PRIVACY_HREF}>
          {FOOTER.privacy}
        </Link>
        <span>{FOOTER.copyright}</span>
      </div>
    </footer>
  );
}
