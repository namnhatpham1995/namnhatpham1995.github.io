import type { CvContent } from './types';

export const vi: CvContent = {
  meta: {
    title: "Nam Nhat Pham — Kỹ sư phần mềm",
    description: "Kỹ sư backend với hơn 5 năm làm Java/Spring Boot, IoT B2B, công cụ triển khai và chuyển đổi API. Hiện ở Sindelfingen, Đức."
  },
  nav: {
    intro: "giới thiệu",
    skills: "kỹ năng",
    experience: "kinh nghiệm",
    education: "học vấn",
    projects: "dự án",
    certificates: "chứng chỉ",
    languages: "ngôn ngữ",
    hobbies: "sở thích"
  },
  hero: {
    name: "Nam Nhat Pham",
    role: "Kỹ sư phần mềm",
    location: "Sindelfingen, Đức",
    email: "nam95.pn@gmail.com",
    linkedin: "https://www.linkedin.com/in/namnhatpham1995",
    github: "https://github.com/namnhatpham1995",
    summary: [
      {
        text: "Hơn 5 năm",
        strong: true
      },
      {
        text: " xây dựng backend "
      },
      {
        text: "Java/Spring Boot",
        strong: true
      },
      {
        text: " cho nền tảng IoT B2B. "
      },
      {
        text: "microservice-deployer",
        strong: true
      },
      {
        text: " được nhiều nhóm dùng như sản phẩm nội bộ. Chuyển "
      },
      {
        text: "gần một nửa REST API của OEE",
        strong: true
      },
      {
        text: " từ Python sang Java."
      }
    ]
  },
  workLocation: {
    base: "Sindelfingen, Đức",
    remote: {
      available: true,
      maximumDistanceKm: null,
      rule: "Làm việc từ xa: có, trên toàn thế giới, bao gồm cả Việt Nam. Làm việc từ bất kỳ thành phố nào ở Việt Nam là khả thi nhưng cần trao đổi thêm với Nam và không mặc nhiên được chấp thuận.",
      vietnam: {
        possible: true,
        automatic: false,
        requiresFurtherDiscussion: true,
        examples: [
          "Hà Nội",
          "Thành phố Hồ Chí Minh"
        ],
        rule: "Làm việc từ xa tại bất kỳ thành phố nào ở Việt Nam, bao gồm Hà Nội và Thành phố Hồ Chí Minh, là khả thi nhưng cần trao đổi thêm với Nam và không được tự động chấp thuận."
      }
    },
    hybrid: {
      available: true,
      maximumDistanceKm: null,
      rule: "Làm việc hybrid: có, không giới hạn khoảng cách. Nam sẵn sàng chuyển nơi ở, trong nước Đức hoặc ra nước ngoài."
    },
    onSite: {
      available: true,
      maximumDistanceKm: null,
      rule: "Làm việc tại văn phòng: có, không giới hạn khoảng cách. Nam sẵn sàng chuyển nơi ở, trong nước Đức hoặc ra nước ngoài."
    },
    guidance: "Nam sống tại Sindelfingen, Đức, sẵn sàng chuyển nơi ở và làm việc từ xa trên toàn thế giới, nên các vị trí hybrid hoặc tại văn phòng không bị giới hạn trong bán kính quanh Sindelfingen. Nam có thẻ thường trú tại Đức, chỉ có hiệu lực cho việc làm tại Đức: với vị trí ngoài nước Đức, hãy nói rằng giấy phép lao động cần được xác nhận với nhà tuyển dụng thay vì mặc định là đã có. Với việc làm từ xa tại Việt Nam, hãy trả lời rằng có thể làm việc từ bất kỳ thành phố nào nhưng cần trao đổi thêm với Nam và không mặc nhiên được chấp thuận."
  },
  skills: {
    heading: "ls skills/",
    groups: [
      {
        title: "Ngôn ngữ lập trình",
        items: [
          "Java",
          "Python",
          "TypeScript",
          "JavaScript",
          "Go",
          "Bash"
        ]
      },
      {
        title: "Backend & Frontend",
        items: [
          "Spring Boot",
          "Spring Security",
          "REST APIs",
          "OpenAPI/Swagger",
          "Next.js",
          "React",
          "Angular",
          "Tailwind CSS",
          "TanStack Query",
          "Flask"
        ]
      },
      {
        title: "Cloud, DevOps & Công cụ",
        items: [
          "AWS",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "Linux",
          "Helm",
          "Chef"
        ]
      },
      {
        title: "Kiểm thử",
        items: [
          "JUnit",
          "Mockito",
          "Testcontainers",
          "Cypress",
          "Kiểm thử Python"
        ]
      },
      {
        title: "Cơ sở dữ liệu",
        items: [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Flyway"
        ]
      },
      {
        title: "Dữ liệu & Machine Learning",
        items: [
          "pandas",
          "NumPy",
          "scikit-learn",
          "TensorFlow",
          "Keras",
          "PCA",
          "K-Means"
        ]
      },
      {
        title: "Phương pháp làm việc",
        items: [
          "Agile/Scrum",
          "CI/CD",
          "Domain-Driven Design (DDD)",
          "Spec-Driven Development (SDD)"
        ]
      }
    ]
  },
  experience: {
    heading: "git log --experience",
    entries: [
      {
        role: "Kỹ sư phần mềm tại bộ phận R&D",
        company: "Cumulocity GmbH (trước đây là Software AG) — Đội Digital Twin Management",
        dates: "Tháng 10 năm 2022 - tháng 9 năm 2026",
        bullets: [
          "Xây dựng microservice-deployer bằng Bash; được nhiều nhóm tại Cumulocity dùng như công cụ triển khai nội bộ chính thức.",
          "Chuyển gần một nửa REST API của OEE từ Python sang Java/Spring Boot.",
          "Đưa thay đổi backend lên môi trường tiền sản xuất, với unit test, kiểm thử tích hợp Cypress và CI/CD bằng GitHub Actions.",
          "Sửa luồng phân trang và chuyển đổi bằng Builder, Factory Method và Template Method để giảm mã trùng lặp, dễ kiểm thử hơn.",
          "Cùng đồng nghiệp thống nhất yêu cầu B2B, schema và API; sửa lỗi tích hợp Angular sau thay đổi backend.",
          "Tự động tạo tài liệu Swagger/OpenAPI mỗi lần build; viết mô phỏng Python cho kiểm thử áp lực và tích hợp.",
          "Kiểm tra tích hợp microservice với Cumulocity và chuẩn bị demo cho khách hàng doanh nghiệp.",
          "Dùng GitHub Copilot và Claude Code để phân tích, lập trình, gỡ lỗi và kiểm thử."
        ],
        emphasis: [
          "microservice-deployer",
          "nhiều nhóm",
          "gần một nửa",
          "Java/Spring Boot",
          "tiền sản xuất"
        ]
      },
      {
        role: "Kỹ sư phần mềm tại bộ phận R&D",
        company: "Software AG — Đội Cumulocity Platform Core",
        dates: "Tháng 10 năm 2021 - tháng 10 năm 2022",
        bullets: [
          "Khôi phục việc tạo cụm Kubernetes sau bản cập nhật Cumulocity core; nguyên nhân là xung đột cấu hình.",
          "Duy trì tự động hóa bằng Chef và Helm cho các cụm Cumulocity trên Linux.",
          "Tự động tạo cụm AWS bằng Bash và AWS CLI, giảm thiết lập thủ công.",
          "Điều tra lỗi khởi tạo và vận hành trên nền tảng lõi Cumulocity."
        ],
        emphasis: [
          "Kubernetes",
          "cụm AWS"
        ]
      },
      {
        role: "Lập trình viên phần mềm / Trưởng nhóm",
        company: "Câu lạc bộ Forex Đại học Việt-Đức (VGU)",
        dates: "Tháng 4 năm 2018 - tháng 3 năm 2019",
        bullets: [
          "Viết Expert Advisor và chỉ báo cho MetaTrader 4/5 từ chiến lược giao dịch thủ công; kiểm thử bằng dữ liệu lịch sử.",
          "Phân công và hướng dẫn nhóm từ phân tích yêu cầu đến kiểm thử, bàn giao công cụ giao dịch."
        ],
        emphasis: [
          "MetaTrader 4/5",
          "Phân công và hướng dẫn nhóm"
        ]
      }
    ]
  },
  education: {
    heading: "cat education.md",
    entries: [
      {
        degree: "Thạc sĩ Khoa học | High Integrity Systems",
        institution: "Đại học Khoa học Ứng dụng Frankfurt",
        dates: "Th4 2019 – Th9 2021",
        description: "Hệ thống an toàn cao, kiểm chứng hình thức, hệ thống phân tán."
      },
      {
        degree: "Cử nhân Kỹ thuật | Kỹ thuật Điện và Công nghệ Thông tin",
        institution: "Đại học Khoa học Ứng dụng Frankfurt & Đại học Việt-Đức (VGU)",
        dates: "Th10 2013 – Th7 2018",
        description: "Chương trình song bằng: hệ thống nhúng, phát triển phần mềm, xử lý tín hiệu."
      }
    ]
  },
  projects: {
    heading: "ls projects/",
    entries: [
      // TODO: native review
      {
        title: "Global Trade Network (GTN)",
        dates: "Th9 2026 – hiện tại",
        description: [
          "Nền tảng kết nối doanh nghiệp xuyên biên giới cho TradeComply, đang chạy production, có trang tiếng Anh, tiếng Đức và tiếng Việt.",
          "Công cụ matching xếp hạng mức phù hợp giữa nhu cầu và đề xuất của người tham dự sự kiện, kèm giải thích cho từng kết quả.",
          "Monorepo TypeScript gồm Next.js 16/React 19, API Hono với RPC có kiểu và PostgreSQL qua Drizzle (40+ bảng, 100+ migration).",
          "Lớp LLM không phụ thuộc mô hình, các mô hình thay thế được cho nhau, phân loại đề xuất và nhu cầu; dữ liệu cá nhân được loại bỏ trước mỗi lần gọi mô hình.",
          "Better Auth, mỗi API route khai báo đúng một mức truy cập; bảo vệ quyền riêng tư từ khâu thiết kế: xóa toàn bộ dữ liệu tài khoản, thống kê ẩn danh và job dọn dữ liệu định kỳ.",
          "Vitest trên PostgreSQL thật, kiểm thử end-to-end bằng Playwright, GitHub Actions, triển khai trên Railway với backup hằng đêm."
        ],
        tech: [
          "TypeScript",
          "Next.js",
          "Hono",
          "PostgreSQL",
          "React",
          "Drizzle ORM",
          "Better Auth",
          "Zod",
          "Vitest",
          "Playwright",
          "GitHub Actions",
          "Railway",
          "LLM APIs"
        ],
        links: [
          {
            label: "Bản xem trước",
            url: "https://frontend-pre-prod-3a07.up.railway.app/en" // TODO: swap pre-prod preview for production URL
          }
        ],
        emphasis: [
          "đang chạy production",
          "Công cụ matching"
        ],
        roleNote: "Dự án khách hàng cho TradeComply; tính năng được triển khai qua đề xuất OpenSpec, do AI coding agent (Claude Code, Codex) thực hiện dưới sự chỉ đạo và review của tôi."
      },
      {
        title: "Trợ lý AI của portfolio",
        dates: "Th9 2026 – hiện tại",
        description: [
          "Xây dựng trợ lý giọng nói và văn bản trên trang này bằng FastAPI, Gemini Live và WebSockets.",
          "Dùng dữ liệu portfolio và câu trả lời duyệt sẵn cho câu hỏi về lương, thời gian có thể đi làm.",
          "Google ADK xử lý âm thanh hai chiều, lời chào, tiếp tục phiên và tự kết nối lại.",
          "Bộ nhớ đệm embedding và hai API key dự phòng giúp giảm gọi lặp, hạn chế gián đoạn khi hết hạn mức.",
          "Phiên 10 phút, hạn mức mỗi ngày, kiểm tra origin, rate limit, che PII và xóa log sau 90 ngày. Chạy trên Railway, kiểm thử bằng pytest."
        ],
        tech: [
          "Python",
          "FastAPI",
          "Gemini Live API",
          "WebSockets",
          "Google ADK",
          "Gemini API",
          "PostgreSQL",
          "Railway",
          "pytest"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/portfolio-voice-agent"
          }
        ],
        emphasis: [
          "trợ lý giọng nói và văn bản",
          "câu trả lời duyệt sẵn"
        ]
      },
      {
        title: "FinTrack — Quản lý tài chính cá nhân",
        dates: "Th6 2026 – hiện tại",
        description: [
          "Ứng dụng tài chính với API Java 21/Spring Boot và giao diện Next.js.",
          "Tài khoản, ngân sách, giao dịch và phân tích; xác thực JWT với refresh token luân phiên.",
          "Thiết kế kiến trúc, định hướng sản phẩm và điều phối Claude Code triển khai theo bounded context.",
          "PostgreSQL tách dữ liệu theo người dùng, Flyway quản lý schema, hỗ trợ giao dịch định kỳ.",
          "Biểu đồ Recharts, kiểm thử JUnit 5/Mockito, Docker Compose và CI/CD qua GitHub Actions."
        ],
        tech: [
          "Java 21",
          "Spring Boot 3",
          "PostgreSQL",
          "Next.js",
          "TypeScript",
          "Flyway",
          "Docker",
          "GitHub Actions"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/personal-financial-management"
          },
          {
            label: "Demo trực tiếp",
            url: "https://fintrack-three-wine.vercel.app/"
          }
        ],
        emphasis: [
          "Java 21/Spring Boot",
          "xác thực JWT"
        ],
        roleNote: "Thiết kế kiến trúc và định hướng sản phẩm; triển khai bằng Claude Code."
      },
      {
        title: "Storyboard — Bảng dự án OpenSpec",
        dates: "Th7 2026 – hiện tại",
        description: [
          "Hiển thị đề xuất OpenSpec từ file markdown lên bảng dự án, với backend Go và frontend React.",
          "Đóng gói thành một file thực thi cho Windows, macOS và Linux.",
          "Dùng net/http và fsnotify để chia file thành Nháp, Đang làm, Hoàn tất và Lưu trữ.",
          "Ghi file atomic, giữ nguyên byte; kiểm tra thời gian sửa và SHA-256 để từ chối bản ghi cũ.",
          "Nhúng frontend TypeScript/Vite/TanStack Query vào file Go bằng go:embed."
        ],
        tech: [
          "Go",
          "React",
          "TypeScript",
          "TanStack Query",
          "net/http",
          "fsnotify",
          "Vite"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Openspec-storyboard"
          }
        ],
        emphasis: [
          "bảng dự án",
          "một file thực thi"
        ],
        roleNote: "Dự án cá nhân để học Go."
      },
      {
        title: "Hootden — Không gian làm việc chung",
        dates: "Th8 2026 – hiện tại",
        description: [
          "Ghi chú, lên kế hoạch một mình hoặc trong không gian làm việc chung, với Go, Next.js và PostgreSQL.",
          "Đăng nhập bằng email/mật khẩu hoặc Google OAuth, dùng session token HttpOnly.",
          "Backend Go 1.26 chia package theo miền nghiệp vụ; truy cập PostgreSQL qua pgx.",
          "COOKIE_DOMAIN chia sẻ cookie giữa domain chính và subdomain API trên Railway và Vercel.",
          "Lập kế hoạch bằng OpenSpec, triển khai với trợ lý lập trình AI; kiểm tra bằng Go test và kiểm thử end-to-end trên GitHub Actions."
        ],
        tech: [
          "Go",
          "Next.js",
          "PostgreSQL",
          "TypeScript",
          "pgx",
          "goose",
          "OAuth2",
          "Docker",
          "GitHub Actions"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Hootden"
          }
        ],
        emphasis: [
          "không gian làm việc chung",
          "session token HttpOnly"
        ],
        roleNote: "Dự án Go cá nhân; triển khai với trợ lý lập trình AI."
      },
      {
        title: "Luận văn thạc sĩ — Điều khiển máy tính qua trình duyệt",
        dates: "Th2 – Th8 2021",
        description: [
          "Mở rộng RemotePy để điều khiển máy tính từ xa qua trình duyệt.",
          "Thêm truyền hình ảnh màn hình trực tiếp và điều khiển chuột, bàn phím, cảm ứng.",
          "Backend Python/Flask với Werkzeug/Gunicorn, CLI riêng để cấu hình worker và thread.",
          "Frontend HTML/CSS/JavaScript, xác thực MySQL và máy chủ Docker/Apache."
        ],
        tech: [
          "Python",
          "Flask",
          "Docker",
          "MySQL",
          "Werkzeug",
          "Gunicorn",
          "HTML",
          "CSS",
          "JavaScript"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Master-Thesis"
          },
          {
            label: "Module RemotePy",
            url: "https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy"
          }
        ],
        emphasis: [
          "qua trình duyệt",
          "truyền hình ảnh màn hình trực tiếp"
        ]
      },
      {
        title: "Udacity — Các dự án học máy",
        dates: "2020",
        description: [
          "So sánh ba mô hình phân loại trên 45.000 bản ghi điều tra dân số Hoa Kỳ.",
          "Huấn luyện MobileNet nhận diện 102 loài hoa; độ chính xác kiểm thử 71%.",
          "Dự đoán thu nhập bằng Random Forest, Gaussian Naive Bayes và AdaBoost; log-transform, MinMax và one-hot encoding.",
          "Phân khúc khách hàng trên khoảng 891.000 bản ghi, 85 đặc trưng; PCA còn 28 thành phần, giải thích khoảng 87% phương sai, rồi phân cụm K-Means.",
          "Phân loại hoa bằng TensorFlow/Keras và transfer learning trên Oxford Flowers; đóng gói thành CLI Python."
        ],
        tech: [
          "Python",
          "TensorFlow",
          "scikit-learn",
          "pandas",
          "NumPy",
          "Keras",
          "TensorFlow Hub",
          "Matplotlib",
          "Seaborn"
        ],
        links: [
          {
            label: "Finding Donors for CharityML",
            url: "https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML"
          },
          {
            label: "Creating Customer Segments with Arvato",
            url: "https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato"
          },
          {
            label: "Image Classifier with Deep Learning",
            url: "https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow"
          },
          {
            label: "Xác nhận hoàn thành",
            url: "https://confirm.udacity.com/G9GHDGQU"
          }
        ],
        emphasis: [
          "45.000",
          "102 loài hoa",
          "71%"
        ]
      }
    ]
  },
  certificates: {
    heading: "ls certificates/",
    entries: [
      {
        title: "Software AG Leadership Essentials Professional",
        date: "Th11 2023"
      },
      {
        title: "AWS Certified Developer – Associate",
        date: "Th8 2023",
        issuer: "AWS"
      },
      {
        title: "AWS Certified Cloud Practitioner",
        date: "Th8 2023",
        issuer: "AWS"
      },
      {
        title: "Lean Six Sigma White Belt",
        date: "Th3 2022"
      },
      {
        title: "Building Scalable Java Microservices with Spring Boot & Spring Cloud",
        date: "Th9 2021",
        issuer: "Coursera"
      },
      {
        title: "Intro to Machine Learning with TensorFlow",
        date: "Th6 2020",
        issuer: "Udacity Nanodegree Program"
      }
    ]
  },
  languages: {
    heading: "locale -a",
    entries: [
      {
        name: "Tiếng Việt",
        level: "Bản ngữ"
      },
      {
        name: "Tiếng Anh",
        level: "Thành thạo (C1)"
      },
      {
        name: "Tiếng Đức",
        level: "Trung cấp (B1)"
      }
    ]
  },
  hobbies: {
    heading: "cat hobbies.txt",
    items: [
      "Tập luyện thể thao",
      "Du lịch & leo núi",
      "Nấu ăn",
      "Chơi game hoặc đi chơi với bạn bè"
    ]
  }
};
