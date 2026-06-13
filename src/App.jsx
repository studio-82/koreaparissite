import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import ritaLogo from "./assets/rita-logo-header.png";
import {
  aboutOverview,
  archiveItems,
  bookingSteps,
  contactSlides,
  contactDetails,
  coursePartner,
  coursePillars,
  faqItems,
  galleryGroups,
  heroImages,
  itinerary,
  motionProof,
  navItems,
  paymentOptions,
  packageFacts,
  pricing,
  storyCards,
} from "./siteData";

const REGISTRATION_DEADLINE = "2026-10-01T00:00:00-04:00";

function getCountdownParts() {
  const difference = new Date(REGISTRATION_DEADLINE).getTime() - Date.now();
  const isClosed = difference <= 0;
  const totalHours = Math.max(0, Math.floor(difference / (1000 * 60 * 60)));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const weeks = Math.floor(days / 7);
  return { days, hours, isClosed, weeks };
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HeroCollage({ images }) {
  return (
    <div className="hero-collage" aria-hidden="true">
      <div className="hero-orb hero-orb-large">
        <img src={images[0].src} alt="" />
      </div>
      <div className="hero-orb hero-orb-small">
        <img src={images[1].src} alt="" />
      </div>
      <div className="hero-orb hero-orb-tall">
        <img src={images[3].src} alt="" />
      </div>
      <div className="hero-orb hero-orb-edge">
        <img src={images[2].src} alt="" />
      </div>
    </div>
  );
}

function StoryCard({ card }) {
  return (
    <article className="story-card">
      <img src={card.media.src} alt={card.media.title} />
      <div className="story-copy">
        <p>{card.eyebrow}</p>
        <h3>{card.title}</h3>
        <span>{card.description}</span>
      </div>
    </article>
  );
}

function AutoSlideshow({ slides, label, frameClassName = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSlideshow = slides.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [slides]);

  useEffect(() => {
    if (!isSlideshow) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isSlideshow, slides.length]);

  if (!isSlideshow) {
    return (
      <img
        className={frameClassName}
        src={slides[0].src}
        alt={slides[0].title}
      />
    );
  }

  return (
    <div className="timeline-visual">
      <div className={`timeline-slideshow ${frameClassName}`.trim()} aria-label={label}>
        {slides.map((slide, index) => (
          <img
            key={slide.file}
            className={index === activeIndex ? "is-active" : ""}
            src={slide.src}
            alt={slide.title}
          />
        ))}
      </div>
      <div className="timeline-dots" aria-hidden="true">
        {slides.map((slide, index) => (
          <span
            key={slide.file}
            className={index === activeIndex ? "is-active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineVisual({ item }) {
  const slides = item.mediaGallery?.length ? item.mediaGallery : [item.media];

  return <AutoSlideshow slides={slides} label={`${item.title} slideshow`} />;
}

function TimelineItem({ item }) {
  return (
    <article className="timeline-card">
      <div className="timeline-copy">
        <p>{item.day}</p>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
      </div>
      <TimelineVisual item={item} />
    </article>
  );
}

function CourseCard({ pillar }) {
  return (
    <article className="course-card">
      <div className="course-card-copy">
        <h3>{pillar.title}</h3>
        <p>{pillar.copy}</p>
      </div>
      <img src={pillar.media.src} alt={pillar.media.title} />
    </article>
  );
}

function MediaCard({ item, onSelect }) {
  return (
    <article className="media-card">
      {item.kind === "video" ? (
        <video
          src={item.src}
          poster={item.posterSrc}
          controls
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <button
          className="media-card-button"
          type="button"
          onClick={() => onSelect(item)}
        >
          <img src={item.src} alt={item.title} />
        </button>
      )}
      <div className="media-card-copy">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </div>
    </article>
  );
}

function PaymentCard({ option }) {
  return (
    <article className="payment-card">
      <p>{option.platform}</p>
      <h3>{option.title}</h3>
      <span>{option.subtitle}</span>
      <a
        className="payment-qr-link"
        href={option.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${option.platform} payment page`}
      >
        <img src={option.qr.src} alt={option.qr.title} />
      </a>
      <p className="payment-note">{option.note}</p>
      <a
        className="payment-link-button"
        href={option.url}
        target="_blank"
        rel="noreferrer"
      >
        Open {option.platform}
      </a>
    </article>
  );
}

function ContactShowcase() {
  return (
    <article className="contact-card contact-showcase-card">
      <div className="contact-showcase-copy">
        <p>Contact</p>
        <h3>Ray of Sunshine Travel Group</h3>
        <span>
          Reach Dave Ray directly to confirm space, request the brochure, or
          ask which package fits you before sending payment.
        </span>
        <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
        <a href={contactDetails.site} target="_blank" rel="noreferrer">
          www.parissouthkoreatrips.com
        </a>
        <span>{contactDetails.address}</span>
      </div>
      <div className="contact-showcase-visual">
        <AutoSlideshow
          slides={contactSlides}
          label="Dave Ray contact slideshow"
          frameClassName="contact-slideshow-frame"
        />
        <span className="contact-showcase-caption">
          A few travel moments from the South Korea experience you can ask Dave
          Ray about directly.
        </span>
      </div>
    </article>
  );
}

function Lightbox({ item, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div className="lightbox" role="presentation" onClick={onClose}>
      <div
        className="lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="lightbox-close"
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
        >
          Close
        </button>
        <img src={item.src} alt={item.title} />
        <div className="lightbox-copy">
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

function StickyBar() {
  return (
    <div className="sticky-mobile-cta">
      <Link to="/contact">Reserve Your Spot</Link>
      <a href={`mailto:${contactDetails.email}?subject=South%20Korea%20Package%20Inquiry`}>
        Request Brochure
      </a>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand-lockup" to="/">
        <span className="brand-mark" aria-hidden="true">
          <img src={ritaLogo} alt="" />
        </span>
        <span className="brand-copy">
          <span>RITA</span>
          <small>Restoration Institute of Trichology Advancements</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/contact">
        Book Now
      </Link>
    </header>
  );
}

function renderPricingFeature(feature) {
  if (feature === "Airfare excluded") {
    return <strong>{feature}</strong>;
  }

  return feature;
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Visit South Korea with RITA</strong>
        <p>
          A hosted travel and training experience for guests who want guided
          sightseeing, premium scalp-wellness exposure, and direct booking
          details in one place.
        </p>
      </div>
      <div>
        <strong>Quick links</strong>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <strong>Important note</strong>
        <p>
          Airfare is excluded. Travelers remain responsible for passports,
          visas, and personal travel readiness requirements.
        </p>
      </div>
    </footer>
  );
}

function HomePage({ countdown }) {
  const previewDays = itinerary.slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-kicker">November 30 - December 7, 2026 departure</p>
          <h1>Visit South Korea with RITA</h1>
          <p className="hero-summary">
            Hosted by New York-based Restoration Institute of Trichology
            Advancements (RITA), this South Korea trip blends guided
            sightseeing, premium head-spa access, and an optional Trichology
            course for guests who want more than a standard tour.
          </p>
          <div className="hero-cta-row">
            <Link to="/contact">Reserve Your Spot</Link>
            <Link to="/about">See Trip Details</Link>
            <a href={`mailto:${contactDetails.email}?subject=South%20Korea%20Course%20Question`}>
              Ask About the Course
            </a>
          </div>
          <div className="hero-meta-row">
            <div className="hero-countdown-card">
              <span>Registration countdown</span>
              {countdown.isClosed ? (
                <>
                  <strong>Registration deadline has passed</strong>
                  <p>
                    Registration closed on September 30, 2026. Contact Dave
                    Ray directly to see what can still be arranged.
                  </p>
                </>
              ) : (
                <>
                  <strong>{countdown.days} days left</strong>
                  <p>
                    {countdown.weeks} weeks and {countdown.hours} hours until
                    registration closes on September 30, 2026.
                  </p>
                </>
              )}
            </div>
            <div className="hero-note-card">
              <p>Hosted departure</p>
              <strong>Nov 30 - Dec 7, 2026</strong>
              <span>Seoul, Incheon, and Daejeon</span>
            </div>
          </div>
        </div>

        <HeroCollage images={heroImages} />
      </section>

      <section className="facts-strip" aria-label="Package highlights">
        {packageFacts.map((fact) => (
          <article key={fact.label} className="fact-card">
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </article>
        ))}
      </section>

      <section className="story-section">
        <SectionHeading
          eyebrow="What the trip includes"
          title="Travel, Trichology, Wellness and Guided Tour"
          description="The South Korea package is designed for guests who want a beautiful trip, clear structure, and a stronger beauty-and-wellness angle than a typical tour."
        />
        <div className="story-grid">
          {storyCards.map((card) => (
            <StoryCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="itinerary-section">
        <SectionHeading
          eyebrow="Week preview"
          title="What the first part of your week looks like"
          description="Before you get into the full schedule, here is the rhythm of the opening days of the trip."
        />
        <div className="timeline-grid">
          {previewDays.map((item) => (
            <TimelineItem key={item.day} item={item} />
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="section-eyebrow">Full details</p>
          <h3>See the full itinerary, course breakdown, and Korea-side media</h3>
          <p>
            The About page explains the full week, the training option, and the
            kind of spaces guests will enter during the trip.
          </p>
        </div>
        <Link to="/about">Go to About</Link>
      </section>

      <section className="pricing-section">
        <SectionHeading
          eyebrow="Packages"
          title="Choose the travel package or the full Travel + Trichology package"
          description="You can join for the hosted travel experience at $950, or choose the $2,500 Travel + Trichology package, which already includes the full travel package plus the course."
        />
        <div className="pricing-grid">
          {pricing.map((item) => (
            <article key={item.title} className="pricing-card">
              <p>{item.title}</p>
              <h3>{item.price}</h3>
              <span>{item.note}</span>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{renderPricingFeature(feature)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage({ onSelect }) {
  const [activeGallery, setActiveGallery] = useState(galleryGroups[0].id);

  const activeGroup = useMemo(
    () => galleryGroups.find((group) => group.id === activeGallery) ?? galleryGroups[0],
    [activeGallery],
  );

  return (
    <>
      <section className="page-intro-section">
        <SectionHeading
          eyebrow={aboutOverview.eyebrow}
          title={aboutOverview.title}
          description={aboutOverview.description}
        />
        <div className="page-intro-grid">
          <article className="page-intro-card">
            <h3>What guests can expect</h3>
            <ul>
              {aboutOverview.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <figure className="page-intro-media">
            <img src={aboutOverview.image.src} alt={aboutOverview.image.title} />
            <figcaption>{aboutOverview.image.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="itinerary-section">
        <SectionHeading
          eyebrow="Full itinerary"
          title="How the seven-day experience unfolds"
          description="This is the fuller trip rhythm for guests who want to understand how the sightseeing, wellness, and training moments fit together."
        />
        <div className="timeline-grid">
          {itinerary.map((item) => (
            <TimelineItem key={item.day} item={item} />
          ))}
        </div>
      </section>

      <section className="course-section">
        <SectionHeading
          eyebrow="Training option"
          title="What happens inside the Trichology portion"
          description="The Travel + Trichology package is for guests who want professional learning layered into the South Korea trip rather than treated as a separate classroom event."
        />
        <article className="course-partner-card">
          <div className="course-partner-copy">
            <p>{coursePartner.eyebrow}</p>
            <h3>{coursePartner.title}</h3>
            <span>{coursePartner.description}</span>
            <ul>
              {coursePartner.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="course-partner-logo-shell">
            <img src={coursePartner.logo.src} alt={coursePartner.logo.alt} />
          </div>
        </article>
        <div className="course-layout">
          <div className="course-stack">
            {coursePillars.map((pillar) => (
              <CourseCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
          <aside className="course-sidebar">
            <img src={aboutOverview.image.src} alt={aboutOverview.image.title} />
            <h3>Who this suits best</h3>
            <ul>
              <li>Beauty professionals who want stronger scalp-care language</li>
              <li>Salon owners exploring head-spa-inspired services</li>
              <li>Scalp-care learners who want guided exposure in Korea</li>
              <li>Travelers who want both sightseeing and professional growth</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="motion-section">
        <SectionHeading
          eyebrow="Facility preview"
          title="What guests will see during the Korea-side visit"
          description="These clips are here to show the environments you will actually enter during the facility and product portion of the trip."
        />
        <div className="video-grid">
          {motionProof.map((item) => (
            <MediaCard key={item.file} item={item} onSelect={onSelect} />
          ))}
        </div>
      </section>

      <section className="media-section">
        <SectionHeading
          eyebrow="Photo gallery"
          title="Travel moments, training spaces, and product environments"
          description="Browse by category to see the different sides of the week before you decide whether the trip is the right fit for you."
        />
        <div className="gallery-tabs" role="tablist" aria-label="Media categories">
          {galleryGroups.map((group) => (
            <button
              key={group.id}
              className={group.id === activeGroup.id ? "is-active" : ""}
              type="button"
              onClick={() => setActiveGallery(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>
        <div className="gallery-intro">
          <p>{activeGroup.intro}</p>
        </div>
        <div className="gallery-grid">
          {activeGroup.items.map((item) => (
            <MediaCard key={item.file} item={item} onSelect={onSelect} />
          ))}
        </div>

        <details className="archive-shell">
          <summary>View more photos and videos from the trip</summary>
          <p>
            Open this section for a wider look at the travel, head spa,
            facility, and product imagery connected to the South Korea
            experience.
          </p>
          <h3>More from the South Korea experience</h3>
          <div className="archive-grid">
            {archiveItems.map((item) => (
              <MediaCard key={item.file} item={item} onSelect={onSelect} />
            ))}
          </div>
        </details>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-intro-section">
        <SectionHeading
          eyebrow="Reserve your place"
          title="Booking, payment, and contact details"
          description="When you are ready to ask questions, request the brochure, or secure your place, this is the page to use."
        />
      </section>

      <section className="pricing-section">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the experience that fits you"
          description="Confirm whether you want the $950 hosted travel package or the $2,500 Travel + Trichology package, which already includes the travel package plus the course. Partial payments and payment plans are possible, but all balances must be completed by September 30, 2026."
        />
        <div className="pricing-grid">
          {pricing.map((item) => (
            <article key={item.title} className="pricing-card">
              <p>{item.title}</p>
              <h3>{item.price}</h3>
              <span>{item.note}</span>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{renderPricingFeature(feature)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="booking-card">
          <div>
            <p className="section-eyebrow">How to pay</p>
            <h3>Choose PayPal, Cash App, or Zelle</h3>
            <p>
              After your seat is confirmed, use one of the payment options
              below to secure your package and receive the next travel details.
            </p>
            <p className="payment-plan-note">
              Partial payments and payment plans are possible, but the balance
              must be fully paid by September 30, 2026.
            </p>
          </div>
          <ol>
            {bookingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="booking-actions">
            <a href={`mailto:${contactDetails.email}?subject=Reserve%20My%20South%20Korea%20Spot`}>
              Email to reserve
            </a>
            <a href={contactDetails.phoneHref}>Call now</a>
          </div>
        </article>

        <div className="payment-grid">
          {paymentOptions.map((option) => (
            <PaymentCard key={option.platform} option={option} />
          ))}
        </div>
      </section>

      <section className="faq-section">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before you book"
          description="Use these answers to understand what is included, how payment works, and what you need to prepare on your side."
        />
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <SectionHeading
          eyebrow="Contact"
          title="Ask questions or confirm your place"
          description="Reach out directly to request the brochure, hold your seat, or confirm the package you want."
        />
        <div className="contact-grid">
          <ContactShowcase />
          <article className="contact-card contact-request-card">
            <p>Quick requests</p>
            <h3>Start with the option that fits you</h3>
            <ul>
              <li>Request the brochure</li>
              <li>Hold my seat for Nov 30 - Dec 7, 2026</li>
              <li>Send me the course details</li>
            </ul>
            <div className="contact-actions">
              <a href={`mailto:${contactDetails.email}?subject=Send%20Me%20The%20South%20Korea%20Brochure`}>
                Get brochure
              </a>
              <a href={`mailto:${contactDetails.email}?subject=I%20Want%20Course%20Details`}>
                Ask about course
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function App() {
  const [countdown, setCountdown] = useState(getCountdownParts);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItem]);

  return (
    <>
      <ScrollToTop />
      <div className="page-shell">
        <SiteHeader />

        <main>
          <Routes>
            <Route path="/" element={<HomePage countdown={countdown} />} />
            <Route path="/about" element={<AboutPage onSelect={setSelectedItem} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage countdown={countdown} />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>

      <StickyBar />
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

export default App;
