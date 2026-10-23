import { site } from "@/lib/content";
import CopyEmailButton from "./CopyEmailButton";

export default function Contact() {
  return (
    <section id="contact" className="contact-wrap">
      <div className="mat contact">
        <h2 className="contact__title display">Have a project in mind?</h2>
        <p className="contact__lead">
          I&apos;m taking on new work. Send a few lines about what you&apos;re building and when you need it live.
        </p>
        <div className="contact__actions">
          <a id="contact-email" href={`mailto:${site.email}`} className="contact__email display">
            {site.email}
          </a>
          <CopyEmailButton email={site.email} />
        </div>
        <div className="contact__sticker display" aria-hidden="true">Available now</div>
      </div>
    </section>
  );
}
