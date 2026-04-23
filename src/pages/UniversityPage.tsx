import { useParams, useNavigate } from "react-router-dom"
import { universities } from "@/data/universities"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export default function UniversityPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const uni = universities.find((u) => u.id === id)

  if (!uni) {
    navigate("/")
    return null
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden" style={{ background: "var(--pffp-bg)" }}>
      <CustomCursor />
      <GrainOverlay />

      {/* Fixed gradient bg */}
      <div className="fixed inset-0 z-0" style={{ background: "var(--pffp-bg)" }} />

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 backdrop-blur-sm md:px-12"
        style={{ background: "rgba(240,248,255,0.85)", borderBottom: "1px solid rgba(0,100,200,0.1)" }}>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #1a73e8, #0d9e6e)" }}>
            <span className="font-sans text-xl font-bold text-white">P</span>
          </div>
          <span className="font-sans text-xl font-bold" style={{ color: "#0d2d6b" }}>PFFP</span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #1a73e8, #0d9e6e)", color: "white" }}
        >
          <Icon name="ArrowLeft" size={16} />
          Все вузы
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-12 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-start gap-6">
            {/* Rank badge */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${uni.color}, ${uni.color}99)` }}>
              <div className="text-center">
                <div className="text-xs font-mono opacity-80">ТОП</div>
                <div className="text-3xl font-bold leading-none">{uni.rank}</div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-1 font-mono text-sm" style={{ color: "#1a73e8" }}>
                {uni.city} · Основан в {uni.founded} году
              </div>
              <h1 className="mb-2 font-sans text-2xl font-light leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#0d2d6b" }}>
                {uni.name}
              </h1>
              <div className="inline-block rounded-full px-3 py-1 text-sm font-semibold"
                style={{ background: `${uni.color}15`, color: uni.color }}>
                {uni.shortName}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {uni.stats.map((stat, i) => (
              <div key={i} className="rounded-2xl p-5 text-center shadow-sm"
                style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(26,115,232,0.15)" }}>
                <div className="text-3xl font-light mb-1" style={{ color: uni.color }}>{stat.value}</div>
                <div className="font-mono text-xs" style={{ color: "#4a6b8a" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 py-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl p-8 shadow-sm"
              style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(26,115,232,0.12)" }}>
              <h2 className="mb-4 font-sans text-2xl font-light" style={{ color: "#0d2d6b" }}>О университете</h2>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: "#2d4a6b" }}>{uni.description}</p>
            </div>
            <div className="rounded-3xl p-8 shadow-sm"
              style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", border: "1px solid rgba(13,158,110,0.15)" }}>
              <h2 className="mb-4 font-sans text-2xl font-light" style={{ color: "#0d2d6b" }}>Миссия</h2>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: "#2d4a6b" }}>{uni.mission}</p>
              <div className="mt-6 flex items-center gap-2" style={{ color: "#4a6b8a" }}>
                <Icon name="MapPin" size={14} />
                <span className="text-sm">{uni.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="relative z-10 py-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-sans text-3xl font-light" style={{ color: "#0d2d6b" }}>
            Факультеты и специальности
          </h2>
          <div className="space-y-5">
            {uni.programs.map((prog, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-sm"
                style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(26,115,232,0.12)" }}>
                <div className="flex items-center gap-3 px-8 py-5 border-b"
                  style={{ borderColor: "rgba(26,115,232,0.1)", background: `linear-gradient(135deg, ${uni.color}08, transparent)` }}>
                  <Icon name="GraduationCap" size={20} style={{ color: uni.color }} />
                  <h3 className="font-sans text-lg font-medium" style={{ color: "#0d2d6b" }}>{prog.faculty}</h3>
                </div>
                <div className="px-8 py-6 grid gap-6 md:grid-cols-3">
                  {/* Specialties */}
                  <div className="md:col-span-1">
                    <div className="font-mono text-xs mb-3" style={{ color: "#4a6b8a" }}>СПЕЦИАЛЬНОСТИ</div>
                    <ul className="space-y-2">
                      {prog.specialties.map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "#2d4a6b" }}>
                          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: uni.color }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Tuition */}
                  <div>
                    <div className="font-mono text-xs mb-3" style={{ color: "#4a6b8a" }}>СТОИМОСТЬ / ГОД</div>
                    <div className="text-2xl font-light" style={{ color: uni.color }}>
                      {prog.tuitionMin.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="text-sm mt-1" style={{ color: "#6b8aaa" }}>
                      до {prog.tuitionMax.toLocaleString("ru-RU")} ₽
                    </div>
                    <div className="mt-3 text-sm" style={{ color: "#2d4a6b" }}>
                      <span className="font-mono text-xs" style={{ color: "#4a6b8a" }}>БЮДЖЕТ · </span>
                      {prog.budgetPlaces} мест
                    </div>
                  </div>
                  {/* Passing score */}
                  <div>
                    <div className="font-mono text-xs mb-3" style={{ color: "#4a6b8a" }}>ПРОХОДНОЙ БАЛЛ</div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-light" style={{ color: "#0d2d6b" }}>{prog.passingScore}</span>
                      <span className="text-sm mb-1" style={{ color: "#6b8aaa" }}>/ 400</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ background: "rgba(26,115,232,0.1)" }}>
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${(prog.passingScore / 400) * 100}%`, background: `linear-gradient(90deg, #1a73e8, ${uni.color})` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="relative z-10 py-10 px-6 md:px-12 lg:px-20 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl p-8 shadow-sm"
            style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(26,115,232,0.12)" }}>
            <h2 className="mb-6 font-sans text-3xl font-light" style={{ color: "#0d2d6b" }}>Контакты</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a href={uni.contacts.website} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 group transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{ background: `${uni.color}15` }}>
                  <Icon name="Globe" size={18} style={{ color: uni.color }} />
                </div>
                <div>
                  <div className="font-mono text-xs mb-0.5" style={{ color: "#4a6b8a" }}>Сайт</div>
                  <div className="text-sm font-medium" style={{ color: "#1a73e8" }}>{uni.contacts.website.replace("https://", "")}</div>
                </div>
              </a>
              <a href={`tel:${uni.contacts.phone}`}
                className="flex items-center gap-3 group transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{ background: `${uni.color}15` }}>
                  <Icon name="Phone" size={18} style={{ color: uni.color }} />
                </div>
                <div>
                  <div className="font-mono text-xs mb-0.5" style={{ color: "#4a6b8a" }}>Телефон</div>
                  <div className="text-sm font-medium" style={{ color: "#0d2d6b" }}>{uni.contacts.phone}</div>
                </div>
              </a>
              <a href={`mailto:${uni.contacts.email}`}
                className="flex items-center gap-3 group transition-transform hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{ background: `${uni.color}15` }}>
                  <Icon name="Mail" size={18} style={{ color: uni.color }} />
                </div>
                <div>
                  <div className="font-mono text-xs mb-0.5" style={{ color: "#4a6b8a" }}>Email</div>
                  <div className="text-sm font-medium" style={{ color: "#0d2d6b" }}>{uni.contacts.email}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton variant="primary" onClick={() => navigate("/")}>
          <Icon name="ArrowLeft" size={16} />
          <span>Все вузы</span>
        </MagneticButton>
      </div>
    </main>
  )
}
