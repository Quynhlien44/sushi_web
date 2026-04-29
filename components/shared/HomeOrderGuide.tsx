"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Point = {
  id: string;
  title: string;
  eyebrow: string;
  highlight: string;
  detailLines: string[];
};

type TabItem = {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  defaultPointId: string;
  points: Point[];
};

const tabItems: TabItem[] = [
  {
    id: "ordering",
    label: "Ordering",
    eyebrow: "Before the order begins",
    heading: "Designed for ordering.",
    intro:
      "A quieter way to order, shaped around timing, care, and cleaner delivery.",
    primaryCta: {
      label: "View Menu",
      href: "/menu",
    },
    secondaryCta: {
      label: "Explore Signature Orders",
      href: "/signature-orders",
    },
    defaultPointId: "order-hours",
    points: [
      {
        id: "order-hours",
        title: "Order hours",
        eyebrow: "Ordering schedule",
        highlight: "Weekly order windows",
        detailLines: [
          "Monday to Thursday: 11:00–20:00",
          "Friday: 11:00–22:00",
          "Saturday: 14:00–22:00",
        ],
      },
      {
        id: "before-you-order",
        title: "Before you order",
        eyebrow: "Order notes",
        highlight: "Details matter early",
        detailLines: [
          "Share allergies, small adjustments, and important requests before checkout.",
          "A few clear notes help us prepare each order with more care.",
        ],
      },
      {
        id: "delivery-pickup",
        title: "Delivery & pickup",
        eyebrow: "How it arrives",
        highlight: "Prepared to travel calmly",
        detailLines: [
          "Available for delivery or pickup.",
          "Each order is packed to stay composed from kitchen to table.",
        ],
      },
    ],
  },
  {
    id: "assistance",
    label: "Assistance",
    eyebrow: "Before anything reaches the table",
    heading: "Support, kept clear.",
    intro:
      "Support should feel as considered as the food itself, with room for clarity before anything reaches the table.",
    primaryCta: {
      label: "Order with Notes",
      href: "/menu",
    },
    secondaryCta: {
      label: "Read Ordering Guide",
      href: "/concept",
    },
    defaultPointId: "allergy-care",
    points: [
      {
        id: "allergy-care",
        title: "Allergy care",
        eyebrow: "Dietary clarity",
        highlight: "Notes that guide preparation",
        detailLines: [
          "Ingredient sensitivities and allergy notes can be added before checkout.",
          "Clear details help the order be handled with more care from the start.",
        ],
      },
      {
        id: "small-requests",
        title: "Small requests",
        eyebrow: "Small adjustments",
        highlight: "Prepared with your preferences",
        detailLines: [
          "Less rice, no wasabi, extra ginger, or cleaner separation can be noted when ordering.",
          "Smaller requests are easier to honour when they are shared early.",
        ],
      },
      {
        id: "preparation-clarity",
        title: "Preparation clarity",
        eyebrow: "How sets may change",
        highlight: "Balance comes before routine",
        detailLines: [
          "If a request affects balance, timing, or composition, the set may be prepared slightly differently.",
          "The aim is for the order to still arrive calm, composed, and complete.",
        ],
      },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    eyebrow: "For a different kind of order",
    heading: "Prepared beyond the standard.",
    intro:
      "Some orders belong to a different rhythm — designed more like prepared pieces than standard menu items.",
    primaryCta: {
      label: "Explore Signature Orders",
      href: "/signature-orders",
    },
    secondaryCta: {
      label: "View Menu",
      href: "/menu",
    },
    defaultPointId: "sushi-bouquets",
    points: [
      {
        id: "sushi-bouquets",
        title: "Sushi bouquets",
        eyebrow: "Presentational orders",
        highlight: "Arranged for first sight",
        detailLines: [
          "Bouquet pieces are composed to feel striking from the moment the box is opened.",
          "They are still prepared to hold structure in travel and on the table.",
        ],
      },
      {
        id: "celebration-pieces",
        title: "Celebration pieces",
        eyebrow: "Shared occasions",
        highlight: "Made for gifting and gathering",
        detailLines: [
          "Birthday sushi cakes and special sets are prepared with more planning and finish.",
          "The result should feel polished, stable, and ready for sharing.",
        ],
      },
      {
        id: "advance-notice",
        title: "Advance notice",
        eyebrow: "Timing matters here",
        highlight: "Earlier notice changes everything",
        detailLines: [
          "For signature and celebration orders, earlier notice is strongly recommended.",
          "More time allows each piece to be prepared with the right level of care.",
        ],
      },
    ],
  },
];

type LeftViewMode = "tab" | "point";

export default function HomeOrderGuide() {
  const [activeTabId, setActiveTabId] = useState<TabItem["id"] | null>(null);
  const [activePointId, setActivePointId] = useState<string | null>(null);
  const [leftViewMode, setLeftViewMode] = useState<LeftViewMode>("tab");

  const activeTab = useMemo(() => {
    if (!activeTabId) return null;
    return tabItems.find((tab) => tab.id === activeTabId) ?? null;
  }, [activeTabId]);

  const activePoint = useMemo(() => {
    if (!activeTab || !activePointId) return null;
    return activeTab.points.find((point) => point.id === activePointId) ?? null;
  }, [activeTab, activePointId]);

  const handleTabChange = (tabId: TabItem["id"]) => {
    const nextTab = tabItems.find((tab) => tab.id === tabId);
    if (!nextTab) return;

    setActiveTabId(nextTab.id);
    setActivePointId(null);
    setLeftViewMode("tab");
  };

  const handlePointChange = (pointId: string) => {
    setActivePointId(pointId);
    setLeftViewMode("point");
  };

  return (
    <section className="home-order-tabs">
        <div className="container-shell">
        <div className="home-order-tabs-inner">
          <div
            className="home-order-tabs-nav"
            role="tablist"
            aria-label="Ordering information"
          >
            {tabItems.map((tab) => {
              const isActive = activeTab?.id === tab.id;
              const tabDomId = `home-order-tab-${tab.id}`;
              const panelDomId = `home-order-panel-${tab.id}`;

              return (
                <button
                  key={tab.id}
                  id={tabDomId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelDomId}
                  tabIndex={0}
                  className={`home-order-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab && (
            <div
              id={`home-order-panel-${activeTab.id}`}
              className="home-order-tabs-panel"
              role="tabpanel"
              aria-labelledby={`home-order-tab-${activeTab.id}`}
            >
              <div className="home-order-tabs-detail">
                {leftViewMode === "tab" ? (
                  <div className="home-order-left-content">
                    <div className="home-order-eyebrow-row">
                      <span className="home-order-eyebrow-line" />
                      <p className="home-order-eyebrow-text">
                        {activeTab.eyebrow}
                      </p>
                    </div>

                    <h2 className="home-order-heading">{activeTab.heading}</h2>

                    <p className="home-order-intro">{activeTab.intro}</p>
                  </div>
                ) : activePoint ? (
                  <div className="home-order-left-content">
                    <div className="home-order-eyebrow-row">
                      <span className="home-order-eyebrow-line" />
                      <p className="home-order-eyebrow-text">
                        {activePoint.eyebrow}
                      </p>
                    </div>

                    <h2 className="home-order-heading">{activePoint.title}</h2>

                    <p className="home-order-intro">{activePoint.highlight}</p>

                    <ul className="home-order-point-list">
                      {activePoint.detailLines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="home-order-ctas">
                  <Link
                    href={activeTab.primaryCta.href}
                    className="home-order-cta home-order-cta-primary"
                  >
                    {activeTab.primaryCta.label}
                  </Link>
                  <Link
                    href={activeTab.secondaryCta.href}
                    className="home-order-cta home-order-cta-secondary"
                  >
                    {activeTab.secondaryCta.label}
                  </Link>
                </div>
              </div>

              <div className="home-order-tabs-points" aria-label="Detail topics">
                {activeTab.points.map((point) => {
                  const isPointActive =
                    leftViewMode === "point" && activePoint?.id === point.id;

                  return (
                    <button
                      key={point.id}
                      type="button"
                      className={`home-order-point ${
                        isPointActive ? "is-active" : ""
                      }`}
                      onClick={() => handlePointChange(point.id)}
                      aria-pressed={isPointActive}
                    >
                      <div className="home-order-point-main">
                        <span className="home-order-point-arrow" aria-hidden="true">
                          <svg viewBox="0 0 20 20" fill="none">
                            <path
                              d="M7 4.5L12.5 10L7 15.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <div className="home-order-point-text">
                          <span className="home-order-point-line-title">
                            {point.title}
                          </span>
                          <span className="home-order-point-line-sub">
                            {point.highlight}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}