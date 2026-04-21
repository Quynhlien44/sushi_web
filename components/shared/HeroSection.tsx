interface HeroSectionProps {
  backgroundImage?: string;
  backgroundVideo?: string;
}

const leftNav = [
  { label: "MENU", href: "/menu" },
  { label: "SIGNATURE", href: "/signature" },
  { label: "CONCEPT", href: "/concept" },
  { label: "PROJECT", href: "/project" },
];

const rightNav = [
  { label: "GALLERY", href: "/gallery" },
  { label: "ACCOUNT", href: "/account" },
  { label: "CART (0)", href: "/cart" },
];

export default function HeroSection({
  backgroundImage,
  backgroundVideo = "https://rr2---sn-ovgq0oxu-5goe.googlevideo.com/videoplayback?expire=1776798664&ei=aHfnaamBMMSOi9oPjda6iQI&ip=41.98.166.84&id=o-ABgpzpb_BETnPe7zjRWDYyldMRPfj2mqIySlvnMuZAhe&itag=401&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUUZDGL6kaLxP_x9T6yi71B15ew7JYzUEWj2eVPsI3bjc1-F2viAyTD3r0gr0FW3qq1OehKC8yLGXM6R&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=32724907&dur=51.240&lmt=1724531152317448&keepalive=yes&fexp=51565115,51565682&c=ANDROID_VR&txp=543C434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRQIhAKC5Yc2jpJpOO2e0G_tS4iyNiVG1zvhrwAwVj0b8j8cHAiBRL4Lps9nIkoOjdWfeYKmLlWmu4RaFiFhXZj1eOz7zXg%3D%3D&redirect_counter=1&rm=sn-o09sk7z&rrc=104&req_id=d7b4b43a023aa3ee&cms_redirect=yes&cmsv=e&cps=0&ipbypass=yes&met=1776777087,&mh=kU&mip=86.50.140.92&mm=31&mn=sn-ovgq0oxu-5goe&ms=au&mt=1776776597&mv=u&mvi=2&pl=17&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgQck1zfOSJ_2W6QcQue3pxCRQAlvZl9jcUYKqKFmpGXYCIEKUYbPhi4xR06JBte11zBAf8BedpOsaaGqOVPp25ZTS",
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <div className="hero-media">
          <div className="hero-media-layer">
            {backgroundVideo ? (
              <video
                className="hero-media-el"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            ) : (
              <img src={backgroundImage} alt="Hero" className="hero-media-el" />
            )}

            <div className="hero-media-dim" />
          </div>

          <header className="hero-header">
            <div className="hero-header-grid">
              <nav className="hero-nav hero-nav-left">
                {leftNav.map((item) => (
                  <a key={item.label} href={item.href} className="nav-hover-chip">
                    {item.label}
                  </a>
                ))}
              </nav>

              <a href="/" className="hero-brand">
                NOIRUMI Studio
              </a>

              <nav className="hero-nav hero-nav-right">
                {rightNav.map((item) => (
                  <a key={item.label} href={item.href} className="nav-hover-chip">
                    {item.label}
                  </a>
                ))}
              </nav>

              <button className="hero-mobile-menu" aria-label="Open menu">
                Menu
              </button>
            </div>
          </header>

          <div className="hero-watermark">NOIRUMI Studio</div>

          <a href="/menu" className="hero-floating-cta">
            MENU
          </a>
        </div>
      </div>
    </section>
  );
}