import {
  ArrowUpRight,
  Boxes,
  ChartNoAxesCombined,
  FileCheck2,
  Gauge,
} from 'lucide-react';
import Link from 'next/link';
import { CodeShowcase } from './code-showcase';
import { Reveal } from './reveal';

function WireVisual({
  type,
}: {
  type: 'stack' | 'flow' | 'chart';
}) {
  if (type === 'stack') {
    return (
      <div className="relative mx-auto h-64 w-full max-w-md float-slow">
        <div className="absolute left-1/2 top-8 h-24 w-44 -translate-x-1/2 rotate-[-8deg] rounded-2xl border border-[#72C261]/25 bg-[#111711] shadow-2xl" />
        <div className="absolute left-1/2 top-20 h-24 w-44 -translate-x-1/2 rotate-[4deg] rounded-2xl border border-white/10 bg-[#0e130f]" />
        <div className="absolute left-1/2 top-32 h-24 w-44 -translate-x-1/2 rotate-[-2deg] rounded-2xl border border-white/10 bg-[#0b0f0c]" />
        <div className="absolute left-1/2 top-2 h-16 w-32 -translate-x-1/2 rounded-xl border border-[#72C261]/35 bg-[#101710] p-4 shadow-[0_0_60px_rgba(114,194,97,.08)]">
          <div className="h-1.5 w-12 rounded-full bg-[#72C261]/60" />
          <div className="mt-3 h-1.5 w-20 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (type === 'flow') {
    return (
      <div className="relative mx-auto h-64 w-full max-w-md">
        <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3">
          {['Ventas', 'Odoo', 'DTE'].map((x) => (
            <div
              key={x}
              className="panel flex h-24 flex-col items-center justify-center gap-3 text-[10px] text-[#aab5ab]"
            >
              <div className="h-2 w-2 rounded-full bg-[#72C261] pulse-dot" />
              {x}
            </div>
          ))}
        </div>
        <div className="absolute left-[28%] right-[28%] top-[80px] h-px bg-gradient-to-r from-transparent via-[#72C261]/60 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-xl border border-[#72C261]/20 bg-[#72C261]/5 px-8 py-4 text-xs text-[#c1ccc2]">
          Informacion conectada
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f0c] p-5">
      <div className="flex justify-between text-[10px] text-[#69756c]">
        <span>Rendimiento operativo</span>
        <span>Ultimo ciclo</span>
      </div>
      <div className="mt-7 flex h-40 items-end gap-2">
        {[18, 30, 26, 42, 37, 56, 48, 67, 59, 74, 70, 88, 82].map(
          (h, i) => (
            <div
              key={i}
              style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
              className="bar-grow flex-1 rounded-t-sm bg-gradient-to-t from-[#31552d] to-[#72C261]/80"
            />
          ),
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0b0f0c] to-transparent" />
    </div>
  );
}

export function FeatureSections() {
  const processMetrics = [
    ['Ventas', 92],
    ['Inventario', 78],
    ['Facturacion', 86],
    ['Automatizaciones', 64],
  ] as const;

  return (
    <div className="space-y-0">
      <section className="section container">
        <Reveal>
          <div className="grid gap-16 md:grid-cols-3">
            {[
              {
                n: 'FIG 01',
                title: 'Construido para tu operacion',
                desc: 'Disenamos tecnologia alrededor de como trabaja realmente tu empresa.',
                type: 'stack' as const,
              },
              {
                n: 'FIG 02',
                title: 'Conectado por diseno',
                desc: 'Odoo, facturacion, inventario y herramientas externas trabajando como un solo sistema.',
                type: 'flow' as const,
              },
              {
                n: 'FIG 03',
                title: 'Disenado para avanzar',
                desc: 'Menos ruido operativo. Mas visibilidad, control y velocidad para tu equipo.',
                type: 'chart' as const,
              },
            ].map((v) => (
              <article
                key={v.n}
                className="border-l border-white/10 pl-7 first:border-l-0 first:pl-0"
              >
                <div className="text-[10px] tracking-[.18em] text-[#4d584f]">
                  {v.n}
                </div>
                <WireVisual type={v.type} />
                <h3 className="mt-3 text-lg font-semibold text-[#e7ece8]">
                  {v.title}
                </h3>
                <p className="text-muted mt-3 max-w-sm text-sm leading-7">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="rule" />

      <section className="section container">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Entrada e integracion</span>
              <h2 className="section-heading mt-6">
                Convierte procesos dispersos en{' '}
                <span className="text-[#72C261]">flujos accionables.</span>
              </h2>
              <p className="text-muted mt-6 max-w-md leading-8">
                Centralizamos la informacion de clientes, ventas, inventario y documentos para que cada area reciba lo que necesita en el momento correcto.
              </p>
              <Link
                href="/soluciones"
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#72C261]"
              >
                Ver soluciones <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="showcase-glow rounded-3xl">
              <div className="panel relative overflow-hidden p-3 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(114,194,97,.08),transparent_35%)]" />
                <div className="relative grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0f0c] p-5">
                    <div className="text-[10px] text-[#657168]">CONVERSACION</div>
                    <div className="mt-5 rounded-xl border border-white/10 bg-[#111612] p-4 text-xs leading-6 text-[#aeb8af]">
                      “Necesitamos saber que pedidos estan listos y cuales ya fueron facturados.”
                    </div>
                    <div className="mt-3 rounded-xl border border-[#72C261]/15 bg-[#72C261]/5 p-4 text-xs leading-6 text-[#c5d1c6]">
                      VELATEK → detecta pedidos, consulta inventario y prepara el flujo de facturacion.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0b0f0c] p-5">
                    <div className="text-[10px] text-[#657168]">FLUJO</div>
                    <div className="mt-6 space-y-3">
                      {[
                        'Pedido recibido',
                        'Stock validado',
                        'DTE preparado',
                        'Equipo notificado',
                      ].map((x, i) => (
                        <div
                          key={x}
                          className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.025] p-3 text-xs text-[#bdc8bf]"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#72C261]/10 text-[#72C261]">
                            {i + 1}
                          </span>
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section border-y border-white/10 bg-[#090d0a]">
        <Reveal>
          <div className="container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div className="order-2 lg:order-1">
              <CodeShowcase />
            </div>
            <div className="order-1 lg:order-2">
              <span className="eyebrow">Ingenieria + Odoo</span>
              <h2 className="section-heading mt-6">
                Codigo que convierte la operacion en{' '}
                <span className="text-[#72C261]">automatizacion.</span>
              </h2>
              <p className="text-muted mt-6 max-w-md leading-8">
                Mostramos la ingenieria detras de nuestras soluciones: modelos, automatizaciones e integraciones Python/Odoo pensadas para procesos empresariales reales.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ['Modelos Odoo', Boxes],
                  ['DTE y documentos', FileCheck2],
                  ['Metricas', ChartNoAxesCombined],
                  ['Seguridad', Gauge],
                ].map(([x, Icon]) => {
                  const I = Icon as typeof Boxes;
                  return (
                    <div
                      key={x as string}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.02] p-4 text-xs text-[#b4c0b6]"
                    >
                      <I size={17} className="text-[#72C261]" />
                      {x as string}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow">Planificacion y monitoreo</span>
              <h2 className="section-heading mt-6">
                De la idea al resultado,{' '}
                <span className="text-[#72C261]">sin perder visibilidad.</span>
              </h2>
              <p className="text-muted mt-6 max-w-md leading-8">
                Construimos indicadores y tableros que ayudan a entender que esta pasando, que requiere atencion y donde se puede mejorar.
              </p>
            </div>
            <div className="panel overflow-hidden p-5 sm:p-7">
              <div className="flex items-center justify-between text-xs text-[#7f8c81]">
                <span>Velatek Operations</span>
                <span className="text-[#72C261]">● Live</span>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-[1fr_.9fr]">
                <div className="rounded-xl border border-white/10 p-5">
                  <div className="text-xs text-[#859087]">Procesos activos</div>
                  <div className="mt-6 space-y-5">
                    {processMetrics.map(([x, value]) => (
                      <div key={x}>
                        <div className="mb-2 flex justify-between text-[10px] text-[#758177]">
                          <span>{x}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/8">
                          <div
                            style={{ width: `${value}%` }}
                            className="h-1 rounded-full bg-[#72C261]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 p-5">
                  <div className="text-xs text-[#859087]">Ciclo operativo</div>
                  <div className="mt-5 flex h-40 items-end gap-1.5">
                    {[35, 46, 40, 59, 52, 71, 64, 82, 74, 88].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 rounded-t bg-[#72C261]/60 transition-all"
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-[10px] text-[#657067]">
                    Visualizacion conceptual
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
