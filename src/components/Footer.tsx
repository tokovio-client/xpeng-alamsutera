import { StoreInfo } from "@/lib/tokovio";

const models = ["Xpeng G6", "Xpeng X9", "P7 Wing Edition", "Future Tech"];
const links = ["Privacy Policy", "Terms of Service", "Press", "Investors", "Careers"];

interface FooterProps {
  store?: StoreInfo | null;
}

export default function Footer({ store }: FooterProps) {
  let instagramLink = "https://instagram.com/xpengindonesia.official";
  if (store?.theme_config) {
    try {
      const parsed = JSON.parse(store.theme_config);
      if (parsed.footer?.socialLinks?.instagram) {
        instagramLink = parsed.footer.socialLinks.instagram;
      }
    } catch {}
  }

  const brandName = store?.name || "XPENG";
  const brandDescription = store?.description || "Leading the way in intelligent mobility with cutting-edge EV technology and autonomous systems.";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest w-full py-20 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-8">
            {brandName}
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {brandDescription}
          </p>
        </div>

        {/* Models */}
        <div className="col-span-1 md:ml-auto">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">
            MODELS
          </h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            {models.map((model) => (
              <li key={model}>
                <a href="#" className="hover:text-primary transition-colors">
                  {model}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="col-span-1 md:ml-auto">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">
            LINKS
          </h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="col-span-1 md:ml-auto">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">
            FOLLOW US
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 border border-outline-variant/30 rounded-full flex items-center justify-center hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              href={instagramLink}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-outline-variant/30 rounded-full flex items-center justify-center hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl">camera</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-label-caps text-label-caps text-outline">
          © {currentYear} {brandName} Motors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
