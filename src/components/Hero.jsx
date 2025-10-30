import Spline from '@splinetool/react-spline';
import { Code2, Eye } from 'lucide-react';

export default function Hero({ onSelect }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              AI For All – Empowering Colorblind and Visually Impaired Users.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
              Dual-mode AI accessibility assistant for designers and users.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onSelect('developer')}
                className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-6 text-left shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-sky-100/80 via-teal-100/60 to-transparent" />
                <div className="relative flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white grid place-items-center shadow">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-slate-900">Developer Mode</p>
                    <p className="text-sm text-slate-600">Analyze and auto-fix contrast, color, and sizing.</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => onSelect('user')}
                className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-6 text-left shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-100/80 via-sky-100/60 to-transparent" />
                <div className="relative flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white grid place-items-center shadow">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-slate-900">User Mode</p>
                    <p className="text-sm text-slate-600">Adaptive overlays and voice guidance for clarity.</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  );
}
