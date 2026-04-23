import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { universities } from "@/data/universities"
import Icon from "@/components/ui/icon"

export default function Index() {
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }
    if (checkShaderReady()) return
    const intervalId = setInterval(() => { if (checkShaderReady()) clearInterval(intervalId) }, 100)
    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500)
    return () => { clearInterval(intervalId); clearTimeout(fallbackTimer) }
  }, [])

  return (
    <main className="relative w-full" style={{ background: "var(--pffp-bg)" }}>
      <CustomCursor />
      <GrainOverlay />

      {/* WebGL Hero */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict", height: "100vh" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1a73e8"
            colorB="#0d9e6e"
            speed={0.5}
            detail={0.7}
            blend={60}
            coarseX={30}
            coarseY={30}
            mediumX={30}
            mediumY={30}
            fineX={30}
            fineY={30}
          />
          <ChromaFlow
            baseColor="#1a5fd4"
            upColor="#0d9e6e"
            downColor="#e8f4ff"
            leftColor="#0d9e6e"
            rightColor="#1a73e8"
            intensity={0.85}
            radius={1.6}
            momentum={20}
            maskType="alpha"
            opacity={0.92}
          />
        </Shader>
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Nav */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-opacity duration-700 md:px-12 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ backdropFilter: "blur(12px)", background: "rgba(240,248,255,0.15)" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #1a73e8, #0d9e6e)" }}>
            <span className="font-sans text-xl font-bold text-white">P</span>
          </div>
          <span className="font-sans text-xl font-bold text-white tracking-tight">PFFP</span>
        </div>
        <div className="font-mono text-xs text-white/70 hidden md:block">
          Платформа для выбора вуза
        </div>
        <a href="#universities">
          <MagneticButton variant="secondary">
            Все вузы
          </MagneticButton>
        </a>
      </nav>

      {/* Hero Section — 100vh */}
      <section className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-mono text-white/80"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            Топ-10 лучших университетов России
          </div>
          <h1 className="mb-6 font-sans font-light leading-[1.1] tracking-tight text-white text-4xl md:text-6xl lg:text-7xl">
            Помощь школьникам
            <br />
            <span className="font-semibold">в выборе</span>
            <br />
            <span style={{ color: "#a8d8b0" }}>будущего места обучения</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/80 md:text-lg leading-relaxed">
            Полная информация о лучших вузах страны — специальности, стоимость, проходные баллы и многое другое.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#universities">
              <MagneticButton variant="primary" size="lg">
                Выбрать вуз
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono text-xs">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* Universities Grid */}
      <section
        id="universities"
        className="relative z-10 px-6 py-20 md:px-12 lg:px-16"
        style={{ background: "var(--pffp-bg)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-sans text-4xl font-light md:text-5xl" style={{ color: "#0d2d6b" }}>
              Топ-10 вузов России
            </h2>
            <p className="font-mono text-sm" style={{ color: "#4a6b8a" }}>
              / Выберите университет чтобы узнать подробнее
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((uni, i) => (
              <button
                key={uni.id}
                onClick={() => navigate(`/university/${uni.id}`)}
                className="group text-left rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(26,115,232,0.12)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {/* Color band */}
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${uni.color}, ${uni.color}88)` }} />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${uni.color}, ${uni.color}bb)` }}>
                      <div className="text-center">
                        <div className="text-[9px] font-mono opacity-80">ТОП</div>
                        <div className="text-xl font-bold leading-none">{uni.rank}</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono mb-1" style={{ color: "#4a6b8a" }}>{uni.city}</div>
                      <h3 className="font-sans text-base font-medium leading-tight line-clamp-2"
                        style={{ color: "#0d2d6b" }}>
                        {uni.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: `${uni.color}12`, color: uni.color }}>
                    {uni.shortName}
                  </div>

                  <p className="text-sm leading-relaxed line-clamp-3 mb-5" style={{ color: "#3d5a7a" }}>
                    {uni.description}
                  </p>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="rounded-xl p-2 text-center" style={{ background: `${uni.color}08` }}>
                      <div className="text-xs font-mono" style={{ color: "#4a6b8a" }}>Студентов</div>
                      <div className="text-sm font-semibold" style={{ color: "#0d2d6b" }}>
                        {uni.students >= 10000
                          ? `${Math.round(uni.students / 1000)}K`
                          : uni.students.toLocaleString("ru-RU")}
                      </div>
                    </div>
                    <div className="rounded-xl p-2 text-center" style={{ background: `${uni.color}08` }}>
                      <div className="text-xs font-mono" style={{ color: "#4a6b8a" }}>Факультетов</div>
                      <div className="text-sm font-semibold" style={{ color: "#0d2d6b" }}>{uni.faculties}</div>
                    </div>
                    <div className="rounded-xl p-2 text-center" style={{ background: `${uni.color}08` }}>
                      <div className="text-xs font-mono" style={{ color: "#4a6b8a" }}>Основан</div>
                      <div className="text-sm font-semibold" style={{ color: "#0d2d6b" }}>{uni.founded}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs" style={{ color: "#4a6b8a" }}>
                      от {uni.programs[0]?.tuitionMin.toLocaleString("ru-RU")} ₽/год
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                      style={{ color: "#1a73e8" }}>
                      Подробнее
                      <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 text-center" style={{ background: "rgba(13,45,107,0.05)", borderTop: "1px solid rgba(26,115,232,0.1)" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #1a73e8, #0d9e6e)" }}>
            <span className="font-sans text-sm font-bold text-white">P</span>
          </div>
          <span className="font-sans text-lg font-bold" style={{ color: "#0d2d6b" }}>PFFP</span>
        </div>
        <p className="font-mono text-xs" style={{ color: "#6b8aaa" }}>
          Путеводитель в мир высшего образования России
        </p>
      </footer>
    </main>
  )
}
