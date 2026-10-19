
import { useState, useEffect } from "react";
import {
  BrainCircuit,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Gauge,
  ScanText,
  Target,
  Cpu,
  Activity,
  BookOpen,
  Sparkles,
  Check,
  ChevronRight,
  LockKeyhole,
  Layers3,
  TrendingUp,
  GraduationCap,
  CircleHelp,
  Network,
  FileText,
  ChartNoAxesCombined,
} from "lucide-react";
import "./App.css";

const metrics = [
  { icon: Gauge, value: "8.4s", label: "EVALUATION LATENCY", description: "Target response time", color: "violet" },
  { icon: ShieldCheck, value: "99.8%", label: "RUBRIC CONFORMANCE", description: "Evaluation consistency target", color: "blue" },
  { icon: ScanText, value: "98.6%", label: "HANDWRITING OCR", description: "Illustrative recognition target", color: "cyan" },
  { icon: Target, value: "360°", label: "SYLLABUS COVERAGE", description: "Integrated preparation", color: "amber" },
];

const comparisonRows = [
  ["Handwriting recognition", "AI-assisted", "Manual review", "Limited"],
  ["Structured rubric feedback", "Included", "Variable", "Basic"],
  ["Performance tracking", "Integrated", "Manual", "Limited"],
  ["Syllabus mapping", "Integrated", "Separate tools", "Partial"],
  ["Instant practice feedback", "Designed for", "No", "Varies"],
];

const architecture = [
  {
    icon: FileText,
    number: "01",
    title: "Input Intelligence",
    description: "Capture typed answers and prepare handwritten answer images for processing.",
    tag: "INPUT LAYER",
  },
  {
    icon: ScanText,
    number: "02",
    title: "OCR & Processing",
    description: "Extract answer text, clean formatting and organize the submission for analysis.",
    tag: "PROCESSING LAYER",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Evaluation Engine",
    description: "Compare answer relevance, structure, evidence and rubric criteria using an AI service.",
    tag: "REASONING LAYER",
  },
  {
    icon: ChartNoAxesCombined,
    number: "04",
    title: "Insights & Analytics",
    description: "Present feedback, improvement priorities and progress in a clear student dashboard.",
    tag: "INSIGHTS LAYER",
  },
];

const testimonials = [
  {
    quote: "A structured practice workflow can make it easier to identify gaps and improve answer writing consistently.",
    name: "Mains Practice",
    role: "Illustrative use case",
    initials: "MP",
  },
  {
    quote: "Connecting answer feedback with syllabus topics helps aspirants decide what to revise next.",
    name: "Syllabus Intelligence",
    role: "Illustrative use case",
    initials: "SI",
  },
  {
    quote: "A single workspace for practice and progress can make daily preparation easier to organize.",
    name: "Preparation Analytics",
    role: "Illustrative use case",
    initials: "PA",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentScore, setCurrentScore] = useState(65);
  const [targetScore, setTargetScore] = useState(85);
  const [visibleReviews, setVisibleReviews] = useState(0);

  // Scroll animations: the hook must stay inside App().
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    // Show sections immediately if IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    ["Live Evaluator", "#evaluator"],
    ["Architecture", "#architecture"],
    ["Benchmarks", "#benchmarks"],
    ["Syllabus", "#syllabus"],
    ["Reviews", "#reviews"],
  ];

  const wordCount = answer.trim()
    ? answer.trim().split(/\s+/).length
    : 0;

  const scoreDifference = Math.max(0, targetScore - currentScore);

  function handleEvaluate(event) {
    event.preventDefault();

    if (!answer.trim()) {
      alert("Please write your practice answer first.");
      return;
    }

    setSubmitted(true);
  }

  function showNextReview() {
    setVisibleReviews((current) => (current + 1) % testimonials.length);
  }

  function showPreviousReview() {
    setVisibleReviews(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <div className="website">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="UPSC ZONE AI home">
          <span className="brand-icon"><BrainCircuit size={25} /></span>
          <span className="brand-copy">
            <strong>Upsc Zone <span>AI</span></strong>
            <small>SOVEREIGN INTELLIGENCE</small>
          </span>
        </a>

        <div className="system-status">
          <span className="status-dot" />
          CIVIL SERVICES AI WORKSPACE
        </div>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#evaluator">
          Launch AI Sandbox <ArrowUpRight size={17} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy reveal">
            <div className="hero-badges">
              <span className="badge-primary">
                <Sparkles size={14} /> NEXT-GEN CIVIL SERVICES AI
              </span>
              <span className="badge-secondary">UPSC CSE PREPARATION</span>
            </div>

            <h1>
              The Intelligence Engine Built for the{" "}
              <span>UPSC CSE</span> Standard.
            </h1>

            <p className="hero-description">
              Move beyond ordinary study tools. Explore AI-assisted Mains
              answer review, syllabus intelligence, structured practice and
              personalized preparation insights in one connected workspace.
            </p>

            <div className="hero-actions">
              <a href="#evaluator" className="button-primary">
                <Zap size={18} /> Try Live GS Mains Evaluation
                <ArrowRight size={17} />
              </a>
              <a href="#architecture" className="button-secondary">
                <Layers3 size={18} /> Explore the Architecture
              </a>
            </div>

            <div className="trust-line">
              <ShieldCheck size={19} />
              Built for focused, structured civil services preparation
            </div>

            <div className="hero-mini-stats">
              <div><strong>GS I–IV</strong><span>Mains practice</span></div>
              <div><strong>AI + Rubrics</strong><span>Evaluation workflow</span></div>
              <div><strong>360°</strong><span>Preparation workspace</span></div>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="console-top">
              <div>
                <span className="eyebrow">INTELLIGENCE CORE</span>
                <h3>AI Performance Console</h3>
              </div>
              <span className="live-status">
                <span className="status-dot" /> DEMO MODE
              </span>
            </div>

            <div className="neural-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <span className="orbit-node node-one"><BookOpen size={21} /></span>
              <span className="orbit-node node-two"><Target size={21} /></span>
              <span className="orbit-node node-three"><Activity size={21} /></span>
              <span className="orbit-node node-four"><Cpu size={21} /></span>
              <div className="neural-core">
                <BrainCircuit size={59} strokeWidth={1.4} />
                <span>AI CORE</span>
              </div>
            </div>

            <div className="console-bottom">
              <div>
                <span>Processing pipeline</span>
                <strong>Ready for practice</strong>
              </div>
              <div className="console-bars">
                {Array.from({ length: 19 }, (_, index) => (
                  <span key={index} style={{ height: `${12 + ((index * 19) % 34)}px` }} />
                ))}
              </div>
            </div>

            <div className="console-caption">
              <span><Check size={14} /> Input ready</span>
              <span><Check size={14} /> Rubric workflow</span>
              <span><Check size={14} /> Feedback interface</span>
            </div>
          </div>

          <div className="metrics-grid reveal" id="benchmarks">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article className="metric-card" key={metric.label}>
                  <div className="metric-heading">
                    <span>{metric.label}</span>
                    <span className={`metric-icon ${metric.color}`}>
                      <Icon size={20} />
                    </span>
                  </div>
                  <strong className="metric-value">{metric.value}</strong>
                  <p>{metric.description}</p>
                </article>
              );
            })}
            <p className="metrics-note">
              Illustrative targets only. Actual accuracy and response times
              require implementation, testing and independent validation.
            </p>
          </div>
        </section>

        <section className="framework-section" id="syllabus">
          <div className="section-container">
            <div className="section-heading reveal">
              <span className="section-kicker">THE INTELLIGENCE FRAMEWORK</span>
              <h2>Preparation with <span>more precision.</span></h2>
              <p>
                Connect answer practice, syllabus awareness and progress
                tracking through a unified preparation workflow.
              </p>
            </div>

            <div className="framework-grid">
              <article className="framework-card reveal">
                <span className="framework-icon violet"><BrainCircuit size={25} /></span>
                <span className="card-index">01 / PRACTICE</span>
                <h3>Live Answer Evaluator</h3>
                <p>Organize practice answers and review feedback on relevance, structure, examples and clarity.</p>
                <a href="#evaluator">Explore evaluator <ArrowRight size={16} /></a>
              </article>

              <article className="framework-card reveal reveal-delay-1">
                <span className="framework-icon cyan"><BookOpen size={25} /></span>
                <span className="card-index">02 / LEARNING</span>
                <h3>Syllabus Intelligence</h3>
                <p>Connect study topics, revision priorities and previous-year question practice.</p>
                <a href="#architecture">Explore workflow <ArrowRight size={16} /></a>
              </article>

              <article className="framework-card reveal reveal-delay-2">
                <span className="framework-icon amber"><TrendingUp size={25} /></span>
                <span className="card-index">03 / PROGRESS</span>
                <h3>Performance Analytics</h3>
                <p>Build a consistent routine and identify the areas where more practice may be useful.</p>
                <a href="#score-planner">Explore score planner <ArrowRight size={16} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="evaluator-section" id="evaluator">
          <div className="section-container evaluator-layout">
            <div className="evaluator-intro reveal reveal-left">
              <span className="section-kicker">INTERACTIVE WORKSPACE</span>
              <h2>Every answer is a chance to <span>improve.</span></h2>
              <p>
                Practice writing a UPSC Mains response in a structured
                workspace designed to support a future AI evaluation service.
              </p>

              <div className="evaluator-points">
                <div>
                  <ShieldCheck size={20} />
                  <span><strong>Rubric-based feedback</strong><small>Structure your evaluation criteria</small></span>
                </div>
                <div>
                  <Target size={20} />
                  <span><strong>Answer improvement</strong><small>Identify strengths and gaps</small></span>
                </div>
                <div>
                  <Activity size={20} />
                  <span><strong>Progress insights</strong><small>Connect practice with learning goals</small></span>
                </div>
              </div>
            </div>

            <form className="evaluator-card reveal reveal-right" onSubmit={handleEvaluate}>
              <div className="evaluator-card-header">
                <span className="evaluator-heading-icon"><BrainCircuit size={24} /></span>
                <div>
                  <h3>GS Mains Answer Evaluator</h3>
                  <p>Practice workspace · Frontend demo</p>
                </div>
              </div>

              <label htmlFor="practice-question">PRACTICE QUESTION</label>
              <div className="question-box" id="practice-question">
                Discuss the role of technology in improving governance and
                public service delivery in India.
              </div>

              <label htmlFor="practice-answer">YOUR ANSWER</label>
              <textarea
                id="practice-answer"
                value={answer}
                onChange={(event) => {
                  setAnswer(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Begin writing your answer here..."
                rows={7}
              />

              <div className="answer-footer">
                <span>{wordCount} words</span>
                <span>Suggested length: 150 words</span>
              </div>

              <button type="submit" className="evaluate-button">
                <Zap size={18} /> Submit Practice Answer <ArrowRight size={18} />
              </button>

              {submitted && (
                <div className="demo-feedback">
                  <strong><Check size={17} /> Practice answer captured</strong>
                  <p>
                    Your text is ready for the next stage. This frontend demo
                    does not calculate marks or generate AI feedback yet; that
                    requires connecting an evaluation backend.
                  </p>
                </div>
              )}

              <div className="privacy-note">
                <LockKeyhole size={14} /> Demo only — no AI assessment is performed yet.
              </div>
            </form>
          </div>
        </section>

        <section className="comparison-section">
          <div className="section-container">
            <div className="section-heading reveal">
              <span className="section-kicker">THE COMPARISON MATRIX</span>
              <h2>A more <span>connected approach.</span></h2>
              <p>See how a unified digital preparation workflow can organize key study activities.</p>
            </div>

            <div className="comparison-table-wrap reveal">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>CAPABILITY</th>
                    <th className="highlight-column"><BrainCircuit size={18} /> Upsc Zone AI</th>
                    <th>MANUAL WORKFLOW</th>
                    <th>BASIC DIGITAL TOOLS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className="highlight-column"><Check size={17} /> {row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="comparison-note">
              Conceptual feature comparison, not an independently benchmarked product study.
            </p>
          </div>
        </section>
        
{/* PREMIUM PRICING COMPARISON */}
<section className="pricing-section" id="pricing">
  <div className="section-container">

    <div className="section-heading reveal">
      <span className="section-kicker">SIMPLE, TRANSPARENT PRICING</span>
      <h2>Choose your path to <span>success.</span></h2>
      <p>
        Start for free and upgrade to unlock a more structured
        UPSC preparation experience.
      </p>
    </div>

    <div className="pricing-grid">

      {/* FREE PLAN */}
      <article className="pricing-card reveal">
        <span className="pricing-plan">STARTER</span>
        <h3>Free</h3>
        <p className="pricing-description">
          Explore your preparation workspace.
        </p>

        <div className="pricing-price">
          <strong>₹0</strong>
          <span>/ forever</span>
        </div>

        <a href="#evaluator" className="pricing-button pricing-button-light">
          Get Started <ArrowRight size={17} />
        </a>

        <div className="pricing-divider" />
        <p className="pricing-features-title">WHAT'S INCLUDED</p>

        <ul className="pricing-features">
          <li><Check size={17} /> Basic practice workspace</li>
          <li><Check size={17} /> Sample evaluation workflow</li>
          <li><Check size={17} /> Syllabus overview</li>
          <li><Check size={17} /> Basic progress planning</li>
        </ul>
      </article>

      {/* PRO PLAN */}
      <article className="pricing-card pricing-card-featured reveal reveal-delay-1">
        <span className="pricing-popular">RECOMMENDED</span>
        <span className="pricing-plan">SERIOUS ASPIRANTS</span>
        <h3>Pro</h3>
        <p className="pricing-description">
          Build consistency with advanced preparation tools.
        </p>

        <div className="pricing-price">
          <strong>₹499</strong>
          <span>/ month</span>
        </div>

        <a href="#evaluator" className="pricing-button pricing-button-primary">
          Choose Pro <ArrowRight size={17} />
        </a>

        <div className="pricing-divider" />
        <p className="pricing-features-title">EVERYTHING IN FREE, PLUS</p>

        <ul className="pricing-features">
          <li><Check size={17} /> Advanced answer practice</li>
          <li><Check size={17} /> Detailed feedback, when connected</li>
          <li><Check size={17} /> Personalized revision planning</li>
          <li><Check size={17} /> Performance analytics</li>
          <li><Check size={17} /> Practice history</li>
        </ul>
      </article>

      {/* PREMIUM PLAN */}
      <article className="pricing-card reveal reveal-delay-2">
        <span className="pricing-plan">COMPLETE WORKSPACE</span>
        <h3>Premium</h3>
        <p className="pricing-description">
          A comprehensive toolkit for focused preparation.
        </p>

        <div className="pricing-price">
          <strong>₹999</strong>
          <span>/ month</span>
        </div>

        <a href="#evaluator" className="pricing-button pricing-button-light">
          Choose Premium <ArrowRight size={17} />
        </a>

        <div className="pricing-divider" />
        <p className="pricing-features-title">EVERYTHING IN PRO, PLUS</p>

        <ul className="pricing-features">
          <li><Check size={17} /> Expanded practice tools</li>
          <li><Check size={17} /> Advanced progress insights</li>
          <li><Check size={17} /> Structured revision roadmap</li>
          <li><Check size={17} /> Priority support, if offered</li>
          <li><Check size={17} /> Additional learning resources</li>
        </ul>
      </article>

    </div>

    <p className="pricing-disclaimer">
      Illustrative pricing and proposed features. Paid plans, AI evaluation,
      account access and payment processing require backend implementation.
    </p>

  </div>
</section>


        <section className="architecture-section" id="architecture">
          <div className="section-container">
            <div className="section-heading reveal">
              <span className="section-kicker">INSIDE THE SOVEREIGN ENGINE</span>
              <h2>From answer input to <span>actionable insights.</span></h2>
              <p>A modular architecture for building an AI-assisted answer evaluation platform.</p>
            </div>

            <div className="architecture-grid">
              {architecture.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className={`architecture-card reveal reveal-delay-${Math.min(index + 1, 4)}`} key={item.number}>
                    <div className="architecture-card-top">
                      <span className="architecture-icon"><Icon size={25} /></span>
                      <span>{item.number}</span>
                    </div>
                    <span className="architecture-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="architecture-status"><span className="status-dot" /> Proposed component</div>
                  </article>
                );
              })}
            </div>

            <div className="pipeline-banner reveal">
              <Network size={26} />
              <div>
                <strong>A modular, testable evaluation pipeline</strong>
                <p>Each stage can be developed, verified and connected independently.</p>
              </div>
              <ArrowRight size={22} />
            </div>
          </div>
        </section>

        <section className="score-section" id="score-planner">
          <div className="section-container score-layout">
            <div className="score-intro reveal reveal-left">
              <span className="section-kicker">YOUR PREPARATION ROADMAP</span>
              <h2>Turn goals into a <span>clearer plan.</span></h2>
              <p>
                Explore the difference between your current practice score and
                your target. This calculator is illustrative and does not
                predict actual UPSC results.
              </p>
            </div>

            <div className="score-card reveal reveal-right">
              <div className="score-card-header">
                <span className="framework-icon violet"><GraduationCap size={24} /></span>
                <div><h3>Score Goal Planner</h3><p>Adjust your practice goals</p></div>
              </div>

              <div className="score-control">
                <div className="score-label">
                  <label htmlFor="current-score">Current practice score</label>
                  <strong>{currentScore}/100</strong>
                </div>
                <input id="current-score" type="range" min="0" max="100" value={currentScore}
                  onChange={(event) => setCurrentScore(Number(event.target.value))} />
              </div>

              <div className="score-control">
                <div className="score-label">
                  <label htmlFor="target-score">Target practice score</label>
                  <strong>{targetScore}/100</strong>
                </div>
                <input id="target-score" type="range" min="0" max="100" value={targetScore}
                  onChange={(event) => setTargetScore(Number(event.target.value))} />
              </div>

              <div className="score-result">
                <span>YOUR TARGET GAP</span>
                <strong>{scoreDifference} points</strong>
                <p>
                  {scoreDifference === 0
                    ? "Your current score matches your target."
                    : "Use this gap to organize your next practice goals."}
                </p>
              </div>
            </div>
          </div>
        </section>

      
<section className="testimonial-section premium-reviews" id="reviews">
  <div className="review-glow review-glow-one" />
  <div className="review-glow review-glow-two" />

  <div className="section-container review-container">
    <div className="premium-review-heading reveal">
      <span className="review-eyebrow">
        <Sparkles size={15} /> THE ASPIRANT EXPERIENCE
      </span>

      <h2>
        Your journey. Your effort.
        <br />
        <span>A smarter way to prepare.</span>
      </h2>

      <p>
        Discover how a connected preparation workspace can help you
        practice consistently, organize revision, and work toward your goals.
      </p>

      <div className="review-summary">
        <div className="summary-icon">
          <GraduationCap size={25} />
        </div>
        <div>
          <strong>Designed for UPSC aspirants</strong>
          <span>Practice · Analyze · Improve</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-stars">
          <span>★★★★★</span>
          <small>Review showcase</small>
        </div>
      </div>
    </div>

    <div className="premium-review-grid">
      {testimonials.map((item, index) => (
        <article
          className={`premium-review-card reveal reveal-delay-${index + 1}`}
          key={item.name}
          style={{ "--review-index": index }}
        >
          <div className="review-card-top">
            <div className="review-quote-icon">“</div>
            <span className="review-card-number">
              0{index + 1}
            </span>
          </div>

          <div className="premium-stars" aria-label="Decorative five-star rating">
            ★★★★★
          </div>

          <p className="premium-review-quote">
            {item.quote}
          </p>

          <div className="review-card-divider" />

          <div className="premium-review-author">
            <div className={`premium-avatar avatar-${index + 1}`}>
              {item.initials}
            </div>

            <div className="review-author-info">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>

            <div className="review-author-mark">
              <ShieldCheck size={19} />
            </div>
          </div>

          <div className="review-sample-label">
            <Sparkles size={12} />
            ILLUSTRATIVE EXAMPLE
          </div>
        </article>
      ))}
    </div>

    <div className="premium-review-bottom reveal">
      <div className="review-bottom-copy">
        <span className="review-bottom-icon">
          <BrainCircuit size={22} />
        </span>
        <div>
          <strong>Your preparation deserves a clear direction.</strong>
          <p>Take the next step with the practice workspace.</p>
        </div>
      </div>

      <a href="#evaluator" className="review-explore-button">
        Explore the workspace <ArrowRight size={17} />
      </a>
    </div>
  </div>
</section>

{/* FAQ SECTION */}
<section className="faq-section" id="faq">
  <div className="section-container">

    <div className="section-heading reveal">
      <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
      <h2>Questions? We've got <span>answers.</span></h2>
      <p>
        Everything you need to know about the UPSC ZONE AI preparation workspace.
      </p>
    </div>

    <div className="faq-list reveal">
      {[
        {
          question: "What is UPSC ZONE AI?",
          answer:
            "UPSC ZONE AI is an AI-assisted civil services preparation workspace concept designed to bring answer practice, syllabus planning, and performance insights together."
        },
        {
          question: "Can I practice UPSC Mains answer writing?",
          answer:
            "Yes. You can use the practice workspace to write and submit sample answers. In the current frontend demo, answers are captured, but automated evaluation is not yet connected."
        },
        {
          question: "Does the platform automatically evaluate my answers?",
          answer:
            "Automated marks and AI-generated feedback require a connected evaluation backend. The current demo does not independently score answers."
        },
        {
          question: "Can I track my preparation progress?",
          answer:
            "The concept includes progress planning and analytics features. Persistent tracking across sessions will require the appropriate backend and database integration."
        },
        {
          question: "Is the syllabus and revision planning feature available?",
          answer:
            "The website presents a syllabus intelligence concept for organizing topics and revision priorities. Full personalized planning depends on the features implemented in the live application."
        },
        {
          question: "What pricing plans are available?",
          answer:
            "The proposed plans are Free, Pro, and Premium. Displayed prices are illustrative until the plans, payment system, and subscription access are implemented."
        },
        {
          question: "Can beginners use UPSC ZONE AI?",
          answer:
            "Yes. The proposed workspace is intended to support aspirants at different preparation stages with structured practice, revision planning, and learning goals."
        },
        {
          question: "How do I get started?",
          answer:
            "Open the practice workspace, read the sample question, and write your answer. You can start exploring the interface without purchasing a plan."
        }
      ].map((item, index) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span className="faq-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="faq-question">{item.question}</span>
            <span className="faq-toggle">
              <span className="faq-plus">+</span>
            </span>
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>

    <div className="faq-contact reveal">
      <div>
        <strong>Still have questions?</strong>
        <p>Explore the practice workspace to learn more about the platform.</p>
      </div>
      <a href="#evaluator" className="faq-cta">
        Try the workspace <ArrowRight size={17} />
      </a>
    </div>

  </div>
</section>



        <section className="final-cta reveal">
          <div className="cta-orb cta-orb-one" />
          <div className="cta-orb cta-orb-two" />
          <div className="section-container final-cta-inner">
            <span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Prepare with purpose.<br /><span>Practice with intelligence.</span></h2>
            <p>Start with one answer. Build a stronger preparation routine one practice session at a time.</p>
            <a href="#evaluator" className="cta-button">
              Open Practice Workspace <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-container footer-main">
          <a href="#home" className="brand">
            <span className="brand-icon"><BrainCircuit size={24} /></span>
            <span className="brand-copy">
              <strong>UPSC ZONE <span>AI</span></strong>
              <small>SOVEREIGN INTELLIGENCE</small>
            </span>
          </a>
          <p>An AI-assisted preparation workspace concept for civil services aspirants.</p>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
        <div className="section-container footer-bottom">
          <span>© 2026 UPSC ZONE AI</span>
          <span>Practice · Learn · Improve</span>
          <a href="#evaluator">Start practicing <ChevronRight size={15} /></a>
        </div>
      </footer>

      <a href="#home" className="floating-help" aria-label="Back to top">
        <CircleHelp size={21} />
      </a>
    </div>
  );
}

export default App;
