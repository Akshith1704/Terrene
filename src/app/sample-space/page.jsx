"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="Arcade Residence Lisbon" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Arcade Residence</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Sample Living Brief / Lisbon, Portugal</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Living Brief Output</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Arcade Residence is an exemplary living brief generated through
                      Terrene OS, defining colonnade rhythmic light filtration and vaulted
                      spatial thresholds before schematic drafting began.
                    </h3>
                    <h3>
                      By standardizing the client's sensory priorities during guided intake,
                      the design team resolved material taxonomy, daylight wells, and
                      circulation volumes in under 48 hours.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Brief Status</p>
                        <p>Approved & Handed Off</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Taxonomy Preset</p>
                        <p>Monolithic Stone</p>
                        <p>Vaulted Flow</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Studio Partner</p>
                        <p>Atelier Forma</p>
                        <p>LX Stoneworks</p>
                        <p>Studio Maré</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Documentation</p>
                        <p>Terrene Brief OS</p>
                        <p>Inês Almeida</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Brief Directives</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  Directive 01 — Sequence of rhythmic arches calibrated to filter
                  daylight progressively from courtyard threshold to interior living spaces.
                </h3>

                <h3>
                  Directive 02 — Tactile permanence prioritized: pale limestone,
                  breathable lime plaster, and warm timber inlays chosen to patina naturally with time.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Calibrated Parameters</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Acoustics & Light</p>
                      <p>Softened acoustics</p>
                      <p>Filtered morning light</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Circulation</p>
                      <p>Vaulted passages</p>
                      <p>Rhythmic progression</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Material Ratios</p>
                      <p>60% Lime plaster</p>
                      <p>30% Honed limestone</p>
                      <p>10% Natural timber</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Environmental</p>
                      <p>Courtyard microclimate</p>
                      <p>Passive cross-breeze</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Arcade Residence interiors and light"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Every spatial directive was defined with quantified tactile and
                  lighting requirements. The outcome is absolute clarity between client expectations and construction drawings.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Next Brief Study"
          callout="Built for stillness and clarity"
          description="A study in restraint and resonance. Explore how structured parameters turn intuition into executable architecture."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
