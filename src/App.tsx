import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
} from "react";
import {
  Heart,
  Menu,
  MapPin,
  ChevronDown,
  Sparkles,
  CalendarHeart,
  Camera,
  Mail,
  Phone,
  Send,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Map,
  Facebook,
  Instagram,
} from "lucide-react";
import "./App.css";

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary-light/20 transition-shadow ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 text-primary">
            <Heart className="w-6 h-6 animate-heartbeat" />
            <span className="font-heading text-xl font-semibold">P & A</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="nav-link relative py-2 font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#story"
              onClick={(e) => handleNavClick(e, "#story")}
              className="nav-link relative py-2 font-medium hover:text-primary transition-colors"
            >
              Our Story
            </a>
            <a
              href="#events"
              onClick={(e) => handleNavClick(e, "#events")}
              className="nav-link relative py-2 font-medium hover:text-primary transition-colors"
            >
              Events
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="nav-link relative py-2 font-medium hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#rsvp"
              onClick={(e) => handleNavClick(e, "#rsvp")}
              className="inline-flex items-center gap-2 py-2 px-5 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
            >
              RSVP
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-background border-t border-primary-light/20`}
      >
        <div className="px-4 py-4 space-y-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="block py-2 hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#story"
            onClick={(e) => handleNavClick(e, "#story")}
            className="block py-2 hover:text-primary transition-colors"
          >
            Our Story
          </a>
          <a
            href="#events"
            onClick={(e) => handleNavClick(e, "#events")}
            className="block py-2 hover:text-primary transition-colors"
          >
            Events
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, "#gallery")}
            className="block py-2 hover:text-primary transition-colors"
          >
            Gallery
          </a>
          <a
            href="#rsvp"
            onClick={(e) => handleNavClick(e, "#rsvp")}
            className="block py-2 text-center bg-gradient-to-r from-primary to-primary-dark text-white rounded-full"
          >
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const diff =
        new Date("December 28, 2024 10:00:00").getTime() - Date.now();
      if (diff > 0) {
        setCountdown({
          days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
          hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(
            2,
            "0"
          ),
          minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(253,248,243,0.95), rgba(245,235,224,0.95)), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80') center/cover fixed",
      }}
    >
      {/* Decorative Corners */}
      <div className="absolute top-24 left-4 md:left-8 text-primary opacity-30">
        <svg
          className="w-16 h-16 md:w-24 md:h-24"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0 0 Q50 0, 50 50 Q50 0, 100 0 L100 10 Q55 10, 50 55 Q45 10, 0 10 Z" />
        </svg>
      </div>
      <div className="absolute top-24 right-4 md:right-8 text-primary opacity-30 scale-x-[-1]">
        <svg
          className="w-16 h-16 md:w-24 md:h-24"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M0 0 Q50 0, 50 50 Q50 0, 100 0 L100 10 Q55 10, 50 55 Q45 10, 0 10 Z" />
        </svg>
      </div>

      <div className="text-center px-4 max-w-4xl mx-auto">
        <p
          className="font-script text-2xl md:text-3xl text-primary mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          ✦ We're Getting Married ✦
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          Priya <span className="text-primary">&</span> Arjun
        </h1>

        <div
          className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          <Heart className="w-5 h-5 text-primary" />
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
        </div>

        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <p className="text-xl md:text-2xl font-heading mb-2">
            December 28, 2024
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Mumbai, India
          </p>
        </div>

        {/* Countdown */}
        <div
          className="mt-12 opacity-0 animate-scale-in"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Counting Down To The Big Day
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <div className="bg-gradient-to-br from-white to-background border-2 border-primary-light rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
              <span className="block text-3xl md:text-4xl font-heading font-bold text-primary">
                {countdown.days}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                Days
              </span>
            </div>
            <span className="text-2xl text-primary animate-pulse">:</span>
            <div className="bg-gradient-to-br from-white to-background border-2 border-primary-light rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
              <span className="block text-3xl md:text-4xl font-heading font-bold text-primary">
                {countdown.hours}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                Hours
              </span>
            </div>
            <span className="text-2xl text-primary animate-pulse">:</span>
            <div className="bg-gradient-to-br from-white to-background border-2 border-primary-light rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg">
              <span className="block text-3xl md:text-4xl font-heading font-bold text-primary">
                {countdown.minutes}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                Min
              </span>
            </div>
            <span className="text-2xl text-primary animate-pulse hidden sm:block">
              :
            </span>
            <div className="bg-gradient-to-br from-white to-background border-2 border-primary-light rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-lg hidden sm:block">
              <span className="block text-3xl md:text-4xl font-heading font-bold text-primary">
                {countdown.seconds}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                Sec
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#story"
            onClick={handleScrollDown}
            className="text-primary opacity-60 hover:opacity-100 transition-opacity"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Animated Section Wrapper
function AnimatedSection({
  children,
  animation,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animated animate-${animation}` : "animate-on-scroll"
      }`}
      style={{ animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}

// Our Story Section
function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <p className="font-script text-xl text-primary mb-2">
            How It All Began
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">
            Our Love Story
          </h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mt-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection animation="fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                alt="Priya & Arjun"
                className="relative rounded-2xl shadow-xl w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-2xl"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right">
            <blockquote className="font-script text-2xl md:text-3xl text-primary mb-6 leading-relaxed">
              "Every love story is beautiful, but ours is my favorite..."
            </blockquote>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                It all started on a rainy evening in Mumbai, when two souls
                destined to be together crossed paths at a friend's wedding.
                Little did we know that a simple conversation over chai would
                turn into a lifetime of memories.
              </p>
              <p>
                Three years of laughter, adventures, and countless cups of
                coffee later, Arjun proposed under the starlit sky of Udaipur,
                and Priya said yes with tears of joy.
              </p>
              <p>
                Now, we invite you to witness the beginning of our forever. Your
                presence would make our special day even more memorable.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8 text-center">
              <div>
                <p className="text-3xl font-heading font-semibold text-primary">
                  2021
                </p>
                <p className="text-sm text-muted-foreground">First Met</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-accent to-primary"></div>
              <div>
                <p className="text-3xl font-heading font-semibold text-primary">
                  2023
                </p>
                <p className="text-sm text-muted-foreground">Got Engaged</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-accent to-primary"></div>
              <div>
                <p className="text-3xl font-heading font-semibold text-primary">
                  2024
                </p>
                <p className="text-sm text-muted-foreground">Forever Begins</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Event Card Component
function EventCard({
  emoji,
  title,
  date,
  time,
  venue,
  bgClass,
  borderClass,
  textClass,
  delay,
}: {
  emoji: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  delay: number;
}) {
  return (
    <AnimatedSection
      animation="fade-in-up"
      delay={delay}
      className={`${bgClass} ${textClass} rounded-2xl p-8 shadow-lg ${borderClass} hover:-translate-y-2 transition-transform duration-300`}
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-2">{title}</h3>
        <div
          className={`h-px w-16 mx-auto ${
            title === "Wedding Ceremony" ? "bg-white/30" : "bg-foreground/20"
          } my-4`}
        ></div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </p>
          <p className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            {time}
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            {venue}
          </p>
        </div>
        <a
          href="#"
          className={`inline-flex items-center gap-2 mt-6 py-2 px-4 border-2 ${
            title === "Wedding Ceremony"
              ? "border-white text-white hover:bg-white hover:text-secondary"
              : "border-foreground text-foreground hover:bg-foreground hover:text-accent"
          } rounded-full text-sm font-medium transition-colors`}
        >
          <Map className="w-4 h-4" />
          View Map
        </a>
      </div>
    </AnimatedSection>
  );
}

// Events Section
function EventsSection() {
  return (
    <section id="events" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <p className="font-script text-xl text-primary mb-2">Join Us For</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mt-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            <CalendarHeart className="w-5 h-5 text-primary" />
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <EventCard
            emoji="🎨"
            title="Mehndi"
            date="December 26, 2024"
            time="5:00 PM Onwards"
            venue="Grand Celebration Hall"
            bgClass="bg-gradient-to-br from-accent to-accent-light"
            borderClass="border border-accent/50"
            textClass="text-foreground"
            delay={0}
          />
          <EventCard
            emoji="🪔"
            title="Sangeet"
            date="December 27, 2024"
            time="7:00 PM Onwards"
            venue="Taj Ballroom"
            bgClass="bg-gradient-to-br from-primary-light to-primary/30"
            borderClass="border border-primary-light/50"
            textClass="text-foreground"
            delay={150}
          />
          <EventCard
            emoji="💍"
            title="Wedding Ceremony"
            date="December 28, 2024"
            time="10:00 AM Onwards"
            venue="Royal Garden Venue"
            bgClass="bg-gradient-to-br from-secondary to-secondary-light"
            borderClass="border border-secondary/50"
            textClass="text-white"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&q=80",
      alt: "Gallery 1",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
      alt: "Gallery 2",
      span: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
      alt: "Gallery 3",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400&q=80",
      alt: "Gallery 4",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=400&q=80",
      alt: "Gallery 5",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80",
      alt: "Gallery 6",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80",
      alt: "Gallery 7",
      span: "",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <p className="font-script text-xl text-primary mb-2">
            Captured Moments
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">
            Our Gallery
          </h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mt-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            <Camera className="w-5 h-5 text-primary" />
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <AnimatedSection
              key={i}
              animation="scale-in"
              delay={i * 100}
              className={`rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:z-10 transition-transform duration-300 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full ${
                  img.span
                    ? "h-full min-h-[300px] md:min-h-[420px]"
                    : "h-48 md:h-64"
                } object-cover`}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// RSVP Section
function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 2000);
  };

  return (
    <section
      id="rsvp"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <p className="font-script text-xl text-primary mb-2">
            Are You Attending?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mt-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            <Mail className="w-5 h-5 text-primary" />
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </div>
          <p className="text-muted-foreground mt-4">
            Kindly respond by December 15, 2024
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-primary-light/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-primary-light/30 rounded-xl transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-primary-light/30 rounded-xl transition-colors"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-4">
                Will you be attending? *
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    className="w-5 h-5"
                  />
                  <span className="group-hover:text-primary transition-colors">
                    <CheckCircle className="w-5 h-5 inline mr-1" />
                    Joyfully Accept
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    className="w-5 h-5"
                  />
                  <span className="group-hover:text-primary transition-colors">
                    <XCircle className="w-5 h-5 inline mr-1" />
                    Regretfully Decline
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="guests"
                className="block text-sm font-medium mb-2"
              >
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                className="w-full px-4 py-3 border-2 border-primary-light/30 rounded-xl transition-colors"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Wishes for the Couple (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your blessings and wishes..."
                className="w-full px-4 py-3 border-2 border-primary-light/30 rounded-xl resize-none transition-colors"
              ></textarea>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`inline-flex items-center gap-2 py-3 px-8 ${
                  isSubmitted
                    ? "bg-green-600"
                    : "bg-gradient-to-r from-primary to-primary-dark"
                } text-white font-medium rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform disabled:opacity-80`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    RSVP Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send RSVP
                  </>
                )}
              </button>
            </div>
          </form>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-in-up"
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="mb-4">For any queries, please contact:</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <a
              href="mailto:priya.arjun2024@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              priya.arjun2024@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// WhatsApp Icon
function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
          Priya <span className="text-primary-light">&</span> Arjun
        </h3>
        <p className="font-script text-xl text-primary-light mb-8">
          #PriyaWedsArjun
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <WhatsAppIcon />
          </a>
        </div>
        <p className="text-white/60 text-sm">
          Made with{" "}
          <Heart className="w-4 h-4 inline text-red-400 animate-heartbeat" />{" "}
          for our special day
        </p>
        <p className="text-white/40 text-xs mt-4">
          © 2024 Priya & Arjun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StorySection />
      <EventsSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </div>
  );
}

export default App;
