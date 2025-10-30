import { useMemo, useState } from 'react';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

function ScoreRing({ score }) {
  const gradient = useMemo(() => {
    const clamped = Math.max(0, Math.min(score, 100));
    return `conic-gradient(#14b8a6 ${clamped * 3.6}deg, #e2e8f0 0deg)`;
  }, [score]);

  return (
    <div className="relative h-28 w-28">
      <div
        className="h-28 w-28 rounded-full"
        style={{ backgroundImage: gradient }}
        aria-hidden
      />
      <div className="absolute inset-2 rounded-full bg-white grid place-items-center shadow-sm">
        <span className="font-semibold text-slate-800">{score}%</span>
      </div>
    </div>
  );
}

function FakeChart({ improved }) {
  return (
    <div className="grid grid-cols-12 gap-2 h-24">
      {[...Array(12)].map((_, i) => {
        const height = (Math.sin(i / 2) + 1) * 30 + 10;
        const isRed = i % 3 === 0;
        const baseColor = isRed ? (improved ? '#ef4444' : '#ef4444') : (improved ? '#0ea5e9' : '#22c55e');
        const opacity = improved ? 1 : isRed ? 0.6 : 0.6;
        const border = improved && isRed ? '2px dashed rgba(2,132,199,0.6)' : 'none';
        return (
          <div
            key={i}
            className="rounded-md"
            style={{
              height,
              background: `linear-gradient(to top, ${baseColor}, rgba(255,255,255,0.8))`,
              opacity,
              border,
            }}
          />
        );
      })}
    </div>
  );
}

export default function DeveloperMode() {
  const [analyzing, setAnalyzing] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [score, setScore] = useState(72);

  const issues = [
    { id: 1, text: 'Low contrast detected', fixed: fixed },
    { id: 2, text: 'Add texture to red/green indicators', fixed: fixed },
    { id: 3, text: 'Increase text size to 18px minimum', fixed: fixed },
    { id: 4, text: 'Avoid red/green-only chart encoding', fixed: fixed },
  ];

  const runFix = async () => {
    setAnalyzing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setFixed(true);
    setScore(94);
    setAnalyzing(false);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Developer Mode</h2>
        <div className="inline-flex items-center gap-2 text-sm text-slate-600">
          {analyzing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-sky-600" />
              <span>AI Analyzing…</span>
            </>
          ) : (
            <>
              <span className="inline-block h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Ready</span>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Before/After UI */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="font-semibold text-slate-800 mb-4">
            {fixed ? 'After Fix – Improved Contrast & Clarity' : 'Before Fix – Low Contrast & Confusing Colors'}
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-2xl p-4 border text-sm"
                  style={{
                    background: fixed
                      ? 'linear-gradient(135deg, rgba(125,211,252,0.15), rgba(45,212,191,0.15))'
                      : 'linear-gradient(135deg, rgba(255,0,0,0.04), rgba(0,255,0,0.04))',
                    borderColor: fixed ? 'rgba(14,165,233,0.3)' : 'rgba(203,213,225,1)',
                    color: fixed ? '#0f172a' : '#64748b',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Card {n}</span>
                    {fixed ? (
                      <span className="inline-flex items-center text-teal-600 gap-1 text-xs">
                        <CheckCircle className="h-4 w-4" /> Fixed
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-amber-600 gap-1 text-xs">
                        <AlertCircle className="h-4 w-4" /> Low Contrast
                      </span>
                    )}
                  </div>
                  <p>
                    {fixed
                      ? 'Accessible colors and larger text for readability.'
                      : 'Muted text on tinted backgrounds reduces readability.'}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <FakeChart improved={fixed} />
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-red-500" /> Red
                <span className="h-2 w-2 rounded-full bg-green-500" /> Green
                {fixed && <span className="h-2 w-2 rounded-full bg-sky-500" />} {fixed && 'Accessible Blue with dashed pattern for red'}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <ScoreRing score={score} />
              <div>
                <p className="text-sm text-slate-500">Inclusivity Score</p>
                <p className="text-2xl font-bold text-slate-900">{score}%</p>
              </div>
            </div>

            <button
              onClick={runFix}
              disabled={analyzing || fixed}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold shadow hover:opacity-95 disabled:opacity-60 transition-all"
              aria-live="polite"
            >
              {analyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Applying…
                </>
              ) : fixed ? (
                <>
                  <CheckCircle className="h-5 w-5" /> Applied
                </>
              ) : (
                'Apply Fix'
              )}
            </button>
          </div>
        </div>

        {/* Right: AI Suggestions */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="font-semibold text-slate-800 mb-4">AI Suggestions</p>
          <ul className="space-y-3">
            {issues.map((issue) => (
              <li
                key={issue.id}
                className={`flex items-center gap-3 p-3 rounded-2xl border ${
                  issue.fixed ? 'border-teal-200 bg-teal-50/60' : 'border-slate-200 bg-slate-50'
                }`}
              >
                {issue.fixed ? (
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                )}
                <span className="text-slate-700 text-sm">{issue.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-teal-50 p-4">
            <p className="text-sm text-slate-600">
              Tip: Use patterns and textures in addition to color. Increase minimum text size and maintain WCAG AA contrast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
