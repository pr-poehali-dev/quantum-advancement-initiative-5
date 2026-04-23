export interface University {
  id: string
  rank: number
  name: string
  shortName: string
  city: string
  address: string
  founded: number
  students: number
  faculties: number
  description: string
  mission: string
  programs: Program[]
  stats: Stat[]
  contacts: Contact
  color: string
}

export interface Program {
  faculty: string
  specialties: string[]
  budgetPlaces: number
  tuitionMin: number
  tuitionMax: number
  passingScore: number
}

export interface Stat {
  value: string
  label: string
}

export interface Contact {
  website: string
  phone: string
  email: string
}

export const universities: University[] = [
  {
    id: "mgu",
    rank: 1,
    name: "Московский государственный университет имени М.В. Ломоносова",
    shortName: "МГУ",
    city: "Москва",
    address: "Ленинские горы, 1, Москва, 119991",
    founded: 1755,
    students: 47000,
    faculties: 43,
    description:
      "Крупнейший классический университет России и ведущий научно-образовательный центр страны. МГУ занимает лидирующие позиции в мировых рейтингах и является символом отечественного образования.",
    mission:
      "Подготовка высококвалифицированных специалистов, развитие фундаментальной и прикладной науки, сохранение и приумножение интеллектуального потенциала страны.",
    programs: [
      {
        faculty: "Факультет ВМК",
        specialties: ["Прикладная математика и информатика", "Математика", "Информационные технологии"],
        budgetPlaces: 220,
        tuitionMin: 390000,
        tuitionMax: 450000,
        passingScore: 380,
      },
      {
        faculty: "Юридический факультет",
        specialties: ["Юриспруденция", "Международное право"],
        budgetPlaces: 100,
        tuitionMin: 450000,
        tuitionMax: 550000,
        passingScore: 370,
      },
      {
        faculty: "Экономический факультет",
        specialties: ["Экономика", "Менеджмент", "Финансы и кредит"],
        budgetPlaces: 180,
        tuitionMin: 430000,
        tuitionMax: 500000,
        passingScore: 365,
      },
      {
        faculty: "Физический факультет",
        specialties: ["Физика", "Астрофизика", "Теоретическая физика"],
        budgetPlaces: 260,
        tuitionMin: 350000,
        tuitionMax: 400000,
        passingScore: 340,
      },
    ],
    stats: [
      { value: "1755", label: "Год основания" },
      { value: "47 000", label: "Студентов" },
      { value: "43", label: "Факультета" },
      { value: "300+", label: "Специальностей" },
    ],
    contacts: {
      website: "https://www.msu.ru",
      phone: "+7 (495) 939-10-00",
      email: "info@msu.ru",
    },
    color: "#003087",
  },
  {
    id: "spbgu",
    rank: 2,
    name: "Санкт-Петербургский государственный университет",
    shortName: "СПбГУ",
    city: "Санкт-Петербург",
    address: "Университетская набережная, 7–9, Санкт-Петербург, 199034",
    founded: 1724,
    students: 30000,
    faculties: 24,
    description:
      "Один из старейших и крупнейших университетов России, основанный по указу Петра I. Alma mater нескольких президентов России и множества лауреатов Нобелевской премии.",
    mission:
      "Создание и распространение знаний в интересах России и мирового сообщества путём проведения исследований и реализации образовательных программ.",
    programs: [
      {
        faculty: "Факультет математики и компьютерных наук",
        specialties: ["Математика", "Прикладная математика", "Компьютерные науки"],
        budgetPlaces: 160,
        tuitionMin: 320000,
        tuitionMax: 420000,
        passingScore: 360,
      },
      {
        faculty: "Юридический факультет",
        specialties: ["Юриспруденция", "Государственное и муниципальное управление"],
        budgetPlaces: 120,
        tuitionMin: 380000,
        tuitionMax: 480000,
        passingScore: 355,
      },
      {
        faculty: "Медицинский факультет",
        specialties: ["Лечебное дело", "Стоматология", "Педиатрия"],
        budgetPlaces: 200,
        tuitionMin: 350000,
        tuitionMax: 450000,
        passingScore: 345,
      },
    ],
    stats: [
      { value: "1724", label: "Год основания" },
      { value: "30 000", label: "Студентов" },
      { value: "24", label: "Факультета" },
      { value: "400+", label: "Программ" },
    ],
    contacts: {
      website: "https://spbu.ru",
      phone: "+7 (812) 328-20-00",
      email: "pr@spbu.ru",
    },
    color: "#C00000",
  },
  {
    id: "mfti",
    rank: 3,
    name: "Московский физико-технический институт",
    shortName: "МФТИ (Физтех)",
    city: "Долгопрудный (Москва)",
    address: "Институтский переулок, 9, Долгопрудный, 141701",
    founded: 1951,
    students: 7500,
    faculties: 10,
    description:
      "Ведущий технический вуз России, специализирующийся на подготовке специалистов в области физики, математики и информационных технологий. Занимает высшие позиции среди технических университетов страны.",
    mission:
      "Подготовка физиков, математиков и IT-специалистов мирового уровня, способных решать прорывные задачи в науке и технологиях.",
    programs: [
      {
        faculty: "Факультет аэрофизики и космических исследований",
        specialties: ["Аэрофизика", "Авиастроение", "Космические технологии"],
        budgetPlaces: 80,
        tuitionMin: 280000,
        tuitionMax: 350000,
        passingScore: 385,
      },
      {
        faculty: "Факультет управления и прикладной математики",
        specialties: ["Прикладная математика и физика", "Математическое моделирование"],
        budgetPlaces: 120,
        tuitionMin: 280000,
        tuitionMax: 360000,
        passingScore: 390,
      },
      {
        faculty: "Школа прикладной математики и информатики",
        specialties: ["Информатика и вычислительная техника", "Кибербезопасность"],
        budgetPlaces: 100,
        tuitionMin: 290000,
        tuitionMax: 370000,
        passingScore: 388,
      },
    ],
    stats: [
      { value: "1951", label: "Год основания" },
      { value: "7 500", label: "Студентов" },
      { value: "10", label: "Факультетов" },
      { value: "75%", label: "Трудоустройство" },
    ],
    contacts: {
      website: "https://mipt.ru",
      phone: "+7 (495) 408-57-00",
      email: "info@mipt.ru",
    },
    color: "#1B3A6B",
  },
  {
    id: "hse",
    rank: 4,
    name: "Национальный исследовательский университет «Высшая школа экономики»",
    shortName: "НИУ ВШЭ",
    city: "Москва",
    address: "Мясницкая ул., 20, Москва, 101000",
    founded: 1992,
    students: 45000,
    faculties: 12,
    description:
      "Один из ведущих исследовательских университетов России в области экономики, социологии, политологии и IT. Известен инновационными программами и тесным сотрудничеством с бизнесом.",
    mission:
      "Формирование нового поколения российских экономистов, управленцев и социологов, способных работать в условиях глобальной конкурентной экономики.",
    programs: [
      {
        faculty: "Факультет экономических наук",
        specialties: ["Экономика", "Финансы", "Мировая экономика"],
        budgetPlaces: 250,
        tuitionMin: 420000,
        tuitionMax: 580000,
        passingScore: 350,
      },
      {
        faculty: "Факультет бизнеса и менеджмента",
        specialties: ["Менеджмент", "Маркетинг", "Бизнес-информатика"],
        budgetPlaces: 200,
        tuitionMin: 430000,
        tuitionMax: 600000,
        passingScore: 340,
      },
      {
        faculty: "Факультет компьютерных наук",
        specialties: ["Программная инженерия", "Наука о данных", "Искусственный интеллект"],
        budgetPlaces: 180,
        tuitionMin: 450000,
        tuitionMax: 620000,
        passingScore: 365,
      },
    ],
    stats: [
      { value: "1992", label: "Год основания" },
      { value: "45 000", label: "Студентов" },
      { value: "12", label: "Факультетов" },
      { value: "4", label: "Кампуса" },
    ],
    contacts: {
      website: "https://hse.ru",
      phone: "+7 (495) 772-95-90",
      email: "info@hse.ru",
    },
    color: "#FF6200",
  },
  {
    id: "miet",
    rank: 5,
    name: "Национальный исследовательский ядерный университет «МИФИ»",
    shortName: "НИЯУ МИФИ",
    city: "Москва",
    address: "Каширское шоссе, 31, Москва, 115409",
    founded: 1942,
    students: 12000,
    faculties: 12,
    description:
      "Ведущий технический университет страны в области ядерных технологий, физики и кибербезопасности. Готовит специалистов для атомной отрасли и оборонно-промышленного комплекса.",
    mission:
      "Подготовка высококвалифицированных специалистов для атомной отрасли и смежных высокотехнологичных секторов экономики России.",
    programs: [
      {
        faculty: "Институт ядерной физики и технологий",
        specialties: ["Ядерная физика", "Ядерные реакторы и установки", "Радиационная безопасность"],
        budgetPlaces: 150,
        tuitionMin: 260000,
        tuitionMax: 330000,
        passingScore: 260,
      },
      {
        faculty: "Институт кибербезопасности и цифровых технологий",
        specialties: ["Информационная безопасность", "Компьютерная безопасность"],
        budgetPlaces: 120,
        tuitionMin: 270000,
        tuitionMax: 340000,
        passingScore: 255,
      },
    ],
    stats: [
      { value: "1942", label: "Год основания" },
      { value: "12 000", label: "Студентов" },
      { value: "12", label: "Институтов" },
      { value: "85%", label: "Трудоустройство" },
    ],
    contacts: {
      website: "https://mephi.ru",
      phone: "+7 (495) 788-56-99",
      email: "pk@mephi.ru",
    },
    color: "#006400",
  },
  {
    id: "nstu",
    rank: 6,
    name: "Новосибирский государственный университет",
    shortName: "НГУ",
    city: "Новосибирск",
    address: "ул. Пирогова, 2, Новосибирск, 630090",
    founded: 1959,
    students: 7700,
    faculties: 13,
    description:
      "Университет при Академгородке — уникальное научно-образовательное пространство, где студенты с первого курса погружаются в реальную научную среду. Один из лучших региональных университетов страны.",
    mission:
      "Подготовка элиты российской науки в условиях непосредственной близости к исследовательским институтам Сибирского отделения РАН.",
    programs: [
      {
        faculty: "Механико-математический факультет",
        specialties: ["Математика", "Механика", "Прикладная математика"],
        budgetPlaces: 100,
        tuitionMin: 200000,
        tuitionMax: 280000,
        passingScore: 285,
      },
      {
        faculty: "Факультет информационных технологий",
        specialties: ["Информатика и вычислительная техника", "Программирование"],
        budgetPlaces: 120,
        tuitionMin: 210000,
        tuitionMax: 290000,
        passingScore: 290,
      },
      {
        faculty: "Факультет естественных наук",
        specialties: ["Химия", "Биология", "Физика"],
        budgetPlaces: 150,
        tuitionMin: 190000,
        tuitionMax: 260000,
        passingScore: 275,
      },
    ],
    stats: [
      { value: "1959", label: "Год основания" },
      { value: "7 700", label: "Студентов" },
      { value: "13", label: "Факультетов" },
      { value: "30+", label: "Институтов СО РАН" },
    ],
    contacts: {
      website: "https://nsu.ru",
      phone: "+7 (383) 363-40-00",
      email: "ngs@nsu.ru",
    },
    color: "#800020",
  },
  {
    id: "urfu",
    rank: 7,
    name: "Уральский федеральный университет имени первого Президента России Б.Н. Ельцина",
    shortName: "УрФУ",
    city: "Екатеринбург",
    address: "ул. Мира, 19, Екатеринбург, 620002",
    founded: 1920,
    students: 34000,
    faculties: 20,
    description:
      "Один из крупнейших федеральных университетов России, опорный вуз Уральского региона. Располагает мощной технической и гуманитарной базой, тесно связан с промышленными предприятиями Урала.",
    mission:
      "Развитие интеллектуального и промышленного потенциала Урала путём подготовки востребованных специалистов мирового уровня.",
    programs: [
      {
        faculty: "Институт радиоэлектроники и информационных технологий",
        specialties: ["Радиотехника", "Информационные системы", "Электроника"],
        budgetPlaces: 200,
        tuitionMin: 180000,
        tuitionMax: 260000,
        passingScore: 245,
      },
      {
        faculty: "Институт экономики и управления",
        specialties: ["Экономика", "Менеджмент", "Финансы"],
        budgetPlaces: 180,
        tuitionMin: 190000,
        tuitionMax: 270000,
        passingScore: 240,
      },
      {
        faculty: "Институт математики и компьютерных наук",
        specialties: ["Математика", "Информатика", "Статистика"],
        budgetPlaces: 150,
        tuitionMin: 185000,
        tuitionMax: 255000,
        passingScore: 250,
      },
    ],
    stats: [
      { value: "1920", label: "Год основания" },
      { value: "34 000", label: "Студентов" },
      { value: "20", label: "Институтов" },
      { value: "100+", label: "Партнёров" },
    ],
    contacts: {
      website: "https://urfu.ru",
      phone: "+7 (343) 375-44-00",
      email: "info@urfu.ru",
    },
    color: "#003F72",
  },
  {
    id: "tomsk",
    rank: 8,
    name: "Национальный исследовательский Томский государственный университет",
    shortName: "ТГУ",
    city: "Томск",
    address: "пр. Ленина, 36, Томск, 634050",
    founded: 1878,
    students: 23000,
    faculties: 23,
    description:
      "Первый университет в азиатской части России, входящий в топ мировых рейтингов. Томск — студенческая столица Сибири, а ТГУ — её главный научно-образовательный центр.",
    mission:
      "Создание и трансфер новых знаний, технологий и практик для социально-экономического развития России.",
    programs: [
      {
        faculty: "Институт прикладной математики и компьютерных наук",
        specialties: ["Прикладная математика", "Информационные технологии"],
        budgetPlaces: 130,
        tuitionMin: 175000,
        tuitionMax: 250000,
        passingScore: 255,
      },
      {
        faculty: "Физический факультет",
        specialties: ["Физика", "Оптика и оптоэлектроника"],
        budgetPlaces: 100,
        tuitionMin: 165000,
        tuitionMax: 240000,
        passingScore: 248,
      },
      {
        faculty: "Юридический институт",
        specialties: ["Юриспруденция", "Правоохранительная деятельность"],
        budgetPlaces: 90,
        tuitionMin: 170000,
        tuitionMax: 245000,
        passingScore: 252,
      },
    ],
    stats: [
      { value: "1878", label: "Год основания" },
      { value: "23 000", label: "Студентов" },
      { value: "23", label: "Факультета" },
      { value: "5", label: "Музеев" },
    ],
    contacts: {
      website: "https://tsu.ru",
      phone: "+7 (3822) 52-98-00",
      email: "rector@tsu.ru",
    },
    color: "#1A4B8C",
  },
  {
    id: "itmo",
    rank: 9,
    name: "Национальный исследовательский университет ИТМО",
    shortName: "ИТМО",
    city: "Санкт-Петербург",
    address: "Кронверкский пр., 49, Санкт-Петербург, 197101",
    founded: 1900,
    students: 16000,
    faculties: 10,
    description:
      "Один из ведущих IT-университетов России и мира, чемпион мира по спортивному программированию. ИТМО известен инновационной средой, стартап-экосистемой и сильнейшей командой по программированию.",
    mission:
      "Формирование технологического предпринимательства и подготовка IT-специалистов, способных изменить мир.",
    programs: [
      {
        faculty: "Факультет программной инженерии и компьютерной техники",
        specialties: ["Программная инженерия", "Информатика и вычислительная техника"],
        budgetPlaces: 200,
        tuitionMin: 290000,
        tuitionMax: 400000,
        passingScore: 335,
      },
      {
        faculty: "Факультет систем управления и робототехники",
        specialties: ["Роботехника", "Автоматизация", "Мехатроника"],
        budgetPlaces: 150,
        tuitionMin: 280000,
        tuitionMax: 380000,
        passingScore: 320,
      },
      {
        faculty: "Факультет технологического менеджмента и инноваций",
        specialties: ["Управление инновациями", "Технологическое предпринимательство"],
        budgetPlaces: 100,
        tuitionMin: 300000,
        tuitionMax: 420000,
        passingScore: 310,
      },
    ],
    stats: [
      { value: "1900", label: "Год основания" },
      { value: "16 000", label: "Студентов" },
      { value: "10", label: "Факультетов" },
      { value: "7×", label: "Чемпионы мира ICPC" },
    ],
    contacts: {
      website: "https://itmo.ru",
      phone: "+7 (812) 232-67-96",
      email: "pr@itmo.ru",
    },
    color: "#0066CC",
  },
  {
    id: "mgtu",
    rank: 10,
    name: "Московский государственный технический университет имени Н.Э. Баумана",
    shortName: "МГТУ им. Баумана",
    city: "Москва",
    address: "2-я Бауманская ул., 5, Москва, 105005",
    founded: 1830,
    students: 23000,
    faculties: 18,
    description:
      "Старейший и один из самых престижных технических университетов России. «Бауманка» — кузница инженерных кадров для оборонно-промышленного комплекса, космической и авиационной отраслей.",
    mission:
      "Подготовка инженеров-исследователей мирового уровня, способных решать важнейшие технические задачи страны.",
    programs: [
      {
        faculty: "Факультет ракетно-космической техники",
        specialties: ["Ракетные комплексы", "Космические аппараты", "Двигатели"],
        budgetPlaces: 160,
        tuitionMin: 240000,
        tuitionMax: 320000,
        passingScore: 285,
      },
      {
        faculty: "Факультет информатики и систем управления",
        specialties: ["Программная инженерия", "Автоматизированные системы", "Компьютерная безопасность"],
        budgetPlaces: 200,
        tuitionMin: 250000,
        tuitionMax: 330000,
        passingScore: 292,
      },
      {
        faculty: "Факультет машиностроительных технологий",
        specialties: ["Технология машиностроения", "Материаловедение"],
        budgetPlaces: 180,
        tuitionMin: 220000,
        tuitionMax: 300000,
        passingScore: 270,
      },
    ],
    stats: [
      { value: "1830", label: "Год основания" },
      { value: "23 000", label: "Студентов" },
      { value: "18", label: "Факультетов" },
      { value: "200+", label: "Лет традиций" },
    ],
    contacts: {
      website: "https://bmstu.ru",
      phone: "+7 (499) 263-60-60",
      email: "info@bmstu.ru",
    },
    color: "#8B0000",
  },
]
