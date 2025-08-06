import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section id="socials" className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Divider Line */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms & Privacy */}
      <div className="flex gap-2">
        <a href="/terms" className="hover:text-white transition-colors duration-200">
          Terms and Conditions
        </a>
        <span>|</span>
        <a href="/privacy" className="hover:text-white transition-colors duration-200">
          Privacy Policy
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              className="w-5 h-5 object-contain"
              alt={social.name}
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="w-full text-center md:w-auto">
        © {new Date().getFullYear()} Ansh. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
