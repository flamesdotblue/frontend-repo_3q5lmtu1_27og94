import { useState } from 'react';
import { AlertTriangle, Mic } from 'lucide-react';

function OverlayLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
      <div className="flex items-center gap-2">
        <span className="h-3 w-6 bg-[repeating-linear-gradient(45deg,rgba(239,68,68,0.9)_0_6px,rgba(239,68,68,0.2)_6px_12px)] rounded" />
        <span>Stripes = Red</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-6 bg-[radial-gradient(circle,rgba(16,185,129,0.9)_2px,rgba(16,185,129,0.15)_2px)] [background-size:10px_10px] rounded" />
        <span>Dots = Green</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-6 bg-slate-300 rounded" />
        <span>Solid = Alerts</span>
      </div>
    </div>
  );
}

export default function UserMode() {
  const [overlaysOn, setOverlaysOn] = useState(true);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">User Mode</h2>
        <div className="flex items-center gap-3 text-sm">
          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
            overlaysOn ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-600'
          }`}>
            AI Voice Guidance Active – Pattern Mode: {overlaysOn ? 'ON' : 'OFF'}
          </span>
          <label className="inline-flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              className="sr-only"
              checked={overlaysOn}
              onChange={(e) => setOverlaysOn(e.target.checked)}
              aria-label="Toggle overlays"
            />
            <span className={`w-12 h-7 flex items-center p-1 rounded-full transition-colors ${
              overlaysOn ? 'bg-teal-500' : 'bg-slate-300'
            }`}>
              <span className={`h-5 w-5 bg-white rounded-full transition-transform ${
                overlaysOn ? 'translate-x-5' : ''
              }`} />
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
          <div className="mx-auto max-w-xs">
            {/* Phone Shell */}
            <div className="relative rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-inner p-3">
              <div className="mx-auto h-[520px] w-[260px] rounded-[1.6rem] bg-white border border-slate-200 overflow-hidden relative">
                {/* Status bar */}
                <div className="h-10 bg-gradient-to-r from-sky-50 to-teal-50 border-b border-slate-200 flex items-center justify-center text-xs text-slate-500">
                  AI For All — Dashboard
                </div>

                {/* Content */}
                <div className="p-3 space-y-3">
                  <div className="rounded-xl p-3 bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100">
                    <p className="text-xs text-slate-600">Environment Status</p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {['Safe', 'Warning', 'Alert'].map((label, idx) => (
                        <div
                          key={label}
                          className="rounded-lg p-2 text-center text-xs font-medium relative overflow-hidden"
                          style={{
                            background:
                              label === 'Safe'
                                ? 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))'
                                : label === 'Warning'
                                ? 'linear-gradient(135deg, rgba(234,179,8,0.15), rgba(251,191,36,0.15))'
                                : 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(248,113,113,0.15))',
                            border: '1px solid rgba(2,132,199,0.15)'
                          }}
                        >
                          <span>{label}</span>
                          {overlaysOn && label === 'Safe' && (
                            <span className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(14,165,233,0.25)_2px,transparent_2px)] [background-size:10px_10px]" />
                          )}
                          {overlaysOn && label === 'Warning' && (
                            <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(234,179,8,0.35)_0_8px,transparent_8px_16px)]" />
                          )}
                          {overlaysOn && label === 'Alert' && (
                            <span className="absolute inset-0 pointer-events-none bg-slate-300/50" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-3 border border-slate-200">
                    <p className="text-xs text-slate-600 mb-2">Sensors</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[36.4, 38.0, 37.1].map((val, i) => (
                        <div key={i} className="rounded-lg p-2 border border-slate-200 relative overflow-hidden">
                          <p className="text-[10px] text-slate-500">Temp</p>
                          <p className="text-lg font-semibold text-slate-900">{val}°C</p>
                          {overlaysOn && val >= 38 && (
                            <span className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(135deg,rgba(239,68,68,0.3)_0_10px,transparent_10px_20px)]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-3 border border-slate-200">
                    <p className="text-xs text-slate-600 mb-2">Weekly Activity</p>
                    <div className="h-20 grid grid-cols-7 gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded bg-gradient-to-t from-sky-400 to-sky-200"
                          style={{ height: `${20 + Math.sin(i) * 20 + 20}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Voice bubble */}
                <div className="absolute left-3 right-3 bottom-16">
                  <div className="rounded-2xl bg-white border border-slate-200 p-2 shadow-sm flex items-center gap-2 text-xs">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Warning: High temperature detected – 38°C.</span>
                  </div>
                </div>

                {/* Mic */}
                <button
                  aria-label="Voice Assistant"
                  className="absolute bottom-3 right-3 h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white grid place-items-center shadow-lg relative overflow-hidden"
                >
                  <Mic className="h-5 w-5" />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-sky-300/40 animate-ping" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-slate-800">Adaptive Overlay Settings</p>
            <OverlayLegend />
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Color-to-pattern mapping</span>
              <span className="px-2 py-1 rounded-full bg-sky-100 text-sky-700">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Voice hints for warnings</span>
              <span className="px-2 py-1 rounded-full bg-teal-100 text-teal-700">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Minimum text size</span>
              <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">18px</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Contrast mode</span>
              <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">High</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
