"use client";

import { useEffect, useRef, useState } from "react";

type TestPhase = "idle" | "testing" | "complete";

const testSteps = ["Finding the nearest server", "Measuring download", "Measuring upload"];

const results = {
  download: 742.8,
  upload: 118.4,
  ping: 8,
};

export default function SpeedTest() {
  const [phase, setPhase] = useState<TestPhase>("idle");
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const runTest = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setPhase("testing");
    setStep(0);
    setProgress(0);
    setSpeed(0);

    let nextProgress = 0;
    intervalRef.current = setInterval(() => {
      nextProgress += 2;
      setProgress(nextProgress);
      setStep(Math.min(Math.floor(nextProgress / 34), testSteps.length - 1));
      setSpeed(Math.min(results.download, Math.round((results.download * nextProgress) / 100)));

      if (nextProgress >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setSpeed(results.download);
        setPhase("complete");
      }
    }, 42);
  };

  const isTesting = phase === "testing";
  const showResults = phase === "complete";

  return (
    <main className="speed-page">
      <section className="speed-shell" aria-labelledby="speed-title">
        <header className="topbar">
          <div className="brand" aria-label="Nexa speed test">
            <span className="brand-mark" aria-hidden="true">↗</span>
            <span>NEXA</span>
          </div>
          <span className="demo-badge">DEMO MODE</span>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">NETWORK DIAGNOSTICS</p>
          <h1 id="speed-title">See what your connection can do.</h1>
          <p className="lede">A quick, visual check of your connection performance.</p>
        </div>

        <section className="test-card" aria-label="Connection speed test">
          <div className="test-status">
            <span className={`status-dot ${isTesting ? "is-active" : ""}`} aria-hidden="true" />
            <span>{isTesting ? testSteps[step] : showResults ? "Test complete" : "Ready when you are"}</span>
          </div>

          <div className="meter" aria-live="polite">
            <svg viewBox="0 0 240 132" role="img" aria-label={`Download speed ${speed} megabits per second`}>
              <path className="meter-track" d="M 24 116 A 98 98 0 0 1 216 116" />
              <path className="meter-progress" d="M 24 116 A 98 98 0 0 1 216 116" pathLength="100" style={{ strokeDasharray: "100", strokeDashoffset: 100 - progress }} />
            </svg>
            <div className="meter-readout">
              <strong>{speed.toFixed(speed > 100 ? 0 : 1)}</strong>
              <span>Mbps</span>
            </div>
          </div>

          <p className="measurement-label">DOWNLOAD SPEED</p>
          <button className="start-button" onClick={runTest} disabled={isTesting} type="button">
            {isTesting ? `Testing ${progress}%` : showResults ? "Run again" : "Start speed test"}
            <span aria-hidden="true">→</span>
          </button>
          <p className="demo-note">Uses a simulated measurement in this preview.</p>
        </section>

        <section className="result-grid" aria-label="Connection results">
          <article><span>DOWNLOAD</span><strong>{showResults ? results.download.toFixed(1) : "—"}</strong><em>Mbps</em></article>
          <article><span>UPLOAD</span><strong>{showResults ? results.upload.toFixed(1) : "—"}</strong><em>Mbps</em></article>
          <article><span>PING</span><strong>{showResults ? results.ping : "—"}</strong><em>ms</em></article>
        </section>

        <footer>
          <span>SERVER</span><strong>San Francisco, CA</strong><span className="secure-connection">● Secure connection</span>
        </footer>
      </section>
    </main>
  );
}
