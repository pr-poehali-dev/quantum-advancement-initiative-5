import { useNavigate } from "react-router-dom"
import { universities } from "@/data/universities"

export default function Index() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "linear-gradient(180deg, #e8f4ff 0%, #f0fff8 100%)" }}>

      {/* Шапка */}
      <div style={{ background: "#1a73e8", padding: "15px 30px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>PFFP</div>
        <div style={{ color: "white", fontSize: "14px" }}>Помощь в выборе вуза</div>
      </div>

      {/* Главный баннер */}
      <div style={{ textAlign: "center", padding: "60px 20px 40px", background: "linear-gradient(135deg, #1a73e8, #0d9e6e)" }}>
        <h1 style={{ color: "white", fontSize: "32px", marginBottom: "15px", fontWeight: "bold" }}>
          Помощь школьникам в выборе своего будущего места обучения
        </h1>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", maxWidth: "600px", margin: "0 auto 25px" }}>
          Здесь вы найдёте всю информацию о лучших университетах России — специальности, стоимость, проходные баллы и контакты.
        </p>
        <a href="#universities" style={{ background: "white", color: "#1a73e8", padding: "12px 30px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "16px" }}>
          Смотреть вузы ↓
        </a>
      </div>

      {/* Список вузов */}
      <div id="universities" style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ color: "#0d2d6b", fontSize: "26px", marginBottom: "30px", textAlign: "center" }}>
          Топ-10 вузов России
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          {universities.map((uni) => (
            <div
              key={uni.id}
              onClick={() => navigate(`/university/${uni.id}`)}
              style={{
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              {/* Цветная полоска */}
              <div style={{ height: "5px", background: uni.color }} />

              <div style={{ padding: "20px" }}>
                {/* Номер и аббревиатура */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div style={{
                    background: uni.color,
                    color: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}>
                    {uni.rank}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: uni.color, fontSize: "14px" }}>{uni.shortName}</div>
                    <div style={{ color: "#666", fontSize: "12px" }}>{uni.city}</div>
                  </div>
                </div>

                {/* Название */}
                <h3 style={{ color: "#222", fontSize: "15px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.4" }}>
                  {uni.name}
                </h3>

                {/* Краткое описание */}
                <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.5", marginBottom: "15px" }}>
                  {uni.description.slice(0, 120)}...
                </p>

                {/* Мини-факты */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
                  <span style={{ background: "#f0f4ff", color: "#1a73e8", padding: "4px 10px", borderRadius: "4px", fontSize: "12px" }}>
                    👨‍🎓 {uni.students.toLocaleString("ru-RU")} студентов
                  </span>
                  <span style={{ background: "#f0fff8", color: "#0d9e6e", padding: "4px 10px", borderRadius: "4px", fontSize: "12px" }}>
                    📚 {uni.faculties} факультетов
                  </span>
                  <span style={{ background: "#fff8f0", color: "#e8820d", padding: "4px 10px", borderRadius: "4px", fontSize: "12px" }}>
                    🏛️ с {uni.founded} года
                  </span>
                </div>

                {/* Стоимость */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee", paddingTop: "12px" }}>
                  <span style={{ color: "#888", fontSize: "12px" }}>
                    от <strong style={{ color: "#222" }}>{uni.programs[0]?.tuitionMin.toLocaleString("ru-RU")} ₽</strong>/год
                  </span>
                  <span style={{ color: "#1a73e8", fontSize: "13px", fontWeight: "bold" }}>
                    Подробнее →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Подвал */}
      <div style={{ background: "#0d2d6b", color: "white", textAlign: "center", padding: "25px", marginTop: "40px" }}>
        <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>PFFP</div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Путеводитель в мир высшего образования России</div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "8px" }}>Создано Владимировым Денисом</div>
      </div>
    </div>
  )
}