import { useParams, useNavigate } from "react-router-dom"
import { universities } from "@/data/universities"

export default function UniversityPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const uni = universities.find((u) => u.id === id)

  if (!uni) {
    navigate("/")
    return null
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f5f7fa" }}>

      {/* Шапка */}
      <div style={{ background: "#1a73e8", padding: "15px 30px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", color: "white", fontSize: "24px", fontWeight: "bold", cursor: "pointer" }}
        >
          PFFP
        </button>
        <button
          onClick={() => navigate("/")}
          style={{ background: "white", color: "#1a73e8", border: "none", padding: "8px 18px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}
        >
          ← Назад
        </button>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px 20px" }}>

        {/* Заголовок вуза */}
        <div style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", marginBottom: "20px" }}>
          <div style={{ height: "8px", background: uni.color }} />
          <div style={{ padding: "25px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{
              background: uni.color,
              color: "white",
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <div style={{ fontSize: "10px", opacity: 0.8 }}>ТОП</div>
              <div style={{ fontSize: "26px", fontWeight: "bold", lineHeight: 1 }}>{uni.rank}</div>
            </div>
            <div>
              <div style={{ color: "#888", fontSize: "13px", marginBottom: "5px" }}>{uni.city} · Основан в {uni.founded} году</div>
              <h1 style={{ color: "#222", fontSize: "22px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.3 }}>
                {uni.name}
              </h1>
              <span style={{ background: `${uni.color}20`, color: uni.color, padding: "3px 12px", borderRadius: "4px", fontSize: "13px", fontWeight: "bold" }}>
                {uni.shortName}
              </span>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
          {uni.stats.map((stat, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "15px", textAlign: "center" }}>
              <div style={{ color: uni.color, fontSize: "22px", fontWeight: "bold" }}>{stat.value}</div>
              <div style={{ color: "#888", fontSize: "12px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* О вузе + адрес */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "20px" }}>
          <div style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
            <h2 style={{ color: "#222", fontSize: "18px", marginBottom: "12px" }}>О университете</h2>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>{uni.description}</p>
          </div>
          <div style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
            <h2 style={{ color: "#222", fontSize: "18px", marginBottom: "12px" }}>Миссия</h2>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>{uni.mission}</p>
            <div style={{ marginTop: "15px", color: "#888", fontSize: "13px" }}>
              📍 {uni.address}
            </div>
          </div>
        </div>

        {/* Факультеты */}
        <h2 style={{ color: "#222", fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
          Факультеты и специальности
        </h2>

        {uni.programs.map((prog, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "15px", overflow: "hidden" }}>
            <div style={{ background: `${uni.color}10`, borderBottom: "1px solid #eee", padding: "15px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span>🎓</span>
              <h3 style={{ color: "#222", fontSize: "16px", fontWeight: "bold" }}>{prog.faculty}</h3>
            </div>
            <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
              {/* Специальности */}
              <div>
                <div style={{ color: "#888", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase" }}>Специальности</div>
                <ul style={{ paddingLeft: "0", listStyle: "none", margin: 0 }}>
                  {prog.specialties.map((s, j) => (
                    <li key={j} style={{ color: "#333", fontSize: "14px", marginBottom: "6px", display: "flex", gap: "8px" }}>
                      <span style={{ color: uni.color }}>•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Стоимость */}
              <div>
                <div style={{ color: "#888", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase" }}>Стоимость / год</div>
                <div style={{ color: uni.color, fontSize: "22px", fontWeight: "bold" }}>
                  {prog.tuitionMin.toLocaleString("ru-RU")} ₽
                </div>
                <div style={{ color: "#888", fontSize: "13px", marginTop: "4px" }}>
                  до {prog.tuitionMax.toLocaleString("ru-RU")} ₽
                </div>
                <div style={{ color: "#333", fontSize: "13px", marginTop: "10px" }}>
                  Бюджет: <strong>{prog.budgetPlaces} мест</strong>
                </div>
              </div>
              {/* Проходной балл */}
              <div>
                <div style={{ color: "#888", fontSize: "12px", marginBottom: "10px", textTransform: "uppercase" }}>Проходной балл</div>
                <div style={{ color: "#222", fontSize: "32px", fontWeight: "bold" }}>{prog.passingScore}</div>
                <div style={{ color: "#aaa", fontSize: "12px" }}>из 400</div>
                <div style={{ marginTop: "10px", background: "#eee", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(prog.passingScore / 400) * 100}%`, background: uni.color, borderRadius: "4px" }} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Контакты */}
        <div style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
          <h2 style={{ color: "#222", fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Контакты</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
            <div>
              <div style={{ color: "#888", fontSize: "12px", marginBottom: "5px" }}>Сайт</div>
              <a href={uni.contacts.website} target="_blank" rel="noreferrer"
                style={{ color: "#1a73e8", fontSize: "14px", textDecoration: "none" }}>
                {uni.contacts.website.replace("https://", "")}
              </a>
            </div>
            <div>
              <div style={{ color: "#888", fontSize: "12px", marginBottom: "5px" }}>Телефон</div>
              <a href={`tel:${uni.contacts.phone}`} style={{ color: "#222", fontSize: "14px", textDecoration: "none" }}>
                {uni.contacts.phone}
              </a>
            </div>
            <div>
              <div style={{ color: "#888", fontSize: "12px", marginBottom: "5px" }}>Email</div>
              <a href={`mailto:${uni.contacts.email}`} style={{ color: "#222", fontSize: "14px", textDecoration: "none" }}>
                {uni.contacts.email}
              </a>
            </div>
          </div>
        </div>

        {/* Назад */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{ background: "#1a73e8", color: "white", border: "none", padding: "12px 30px", borderRadius: "6px", cursor: "pointer", fontSize: "15px", fontWeight: "bold" }}
          >
            ← Вернуться к списку вузов
          </button>
        </div>
      </div>

      {/* Подвал */}
      <div style={{ background: "#0d2d6b", color: "white", textAlign: "center", padding: "20px", marginTop: "40px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "4px" }}>PFFP</div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Путеводитель в мир высшего образования России</div>
      </div>
    </div>
  )
}
