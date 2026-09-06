import type { CvContent } from './types';

// Vietnamese strings ported from the legacy assets/js/translations.js dictionary (key "vn")
// where still valid; content covering the new CV (updated dates, FinTrack, skills) is newly
// translated and flagged below for native review.
export const vi: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Kỹ sư phần mềm',
    description:
      'Kỹ sư phần mềm với hơn 5 năm phát triển dịch vụ backend production, REST API và microservice trên nền tảng IoT doanh nghiệp kết nối hàng triệu tài sản và thiết bị.',
  },
  nav: {
    intro: 'giới thiệu',
    skills: 'kỹ năng',
    experience: 'kinh nghiệm',
    education: 'học vấn',
    projects: 'dự án',
    certificates: 'chứng chỉ',
    languages: 'ngôn ngữ',
    hobbies: 'sở thích',
  },
  hero: {
    name: 'Nam Nhat Pham',
    role: 'Kỹ sư phần mềm',
    location: 'Sindelfingen, Đức',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    // Updated to match the 2026 general CV summary
    // TODO: native review - CV summary refreshed on 2026-08-31
    summary: [
      { text: "Kỹ sư phần mềm với " },
      { text: "hơn 5 năm", strong: true },
      { text: " kinh nghiệm, tập trung vào dịch vụ backend " },
      { text: "Java/Spring Boot", strong: true },
      { text: ", REST API và microservice cho khách hàng B2B trên nền tảng IoT kết nối hàng triệu tài sản và thiết bị. Xây dựng " },
      { text: "microservice-deployer", strong: true },
      { text: ", được các nhóm trong công ty sử dụng như một sản phẩm nội bộ chính thức, và tham gia chuyển đổi OEE từ Python sang Spring Boot. Có kinh nghiệm về " },
      { text: "tự động hóa CI/CD", strong: true },
      { text: ", kiểm thử tích hợp, Docker và Kubernetes." },
    ],
  },
  skills: {
    heading: 'ls skills/',
    // Expanded from 6 to 7 groups per the 2026-09 CV refresh
    groups: [
      { title: 'Ngôn ngữ lập trình', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Go', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'OpenAPI/Swagger', 'Next.js', 'React', 'Angular', 'Tailwind CSS', 'TanStack Query', 'Flask'],
      },
      { title: 'Cloud, DevOps & Công cụ', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Linux', 'Helm', 'Chef'] },
      { title: 'Kiểm thử', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress', 'Kiểm thử Python'] },
      { title: 'Cơ sở dữ liệu', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Flyway'] },
      { title: 'Dữ liệu & Machine Learning', items: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'PCA', 'K-Means'] },
      { title: 'Phương pháp làm việc', items: ['Agile/Scrum', 'CI/CD', 'Domain-Driven Design (DDD)', 'Spec-Driven Development (SDD)'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    // Dates and bullets updated to match 2026 CV (Cumulocity: Oct 2022–present,
    // Software AG: Oct 2021–Oct 2022; legacy translations.js had different dates/role split)
    entries: [
      {
        role: 'Kỹ sư phần mềm tại bộ phận R&D',
        company: 'Cumulocity GmbH (trước đây là Software AG) — Đội Digital Twin Management',
        dates: "Tháng 10 năm 2022 - hiện tại",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Xây dựng microservice-deployer để giải quyết xung đột phiên bản và vấn đề đặt tên gói trong quá trình triển khai lên Cumulocity. Được viết bằng Bash dựa trên c8y-cli, công cụ phát triển từ tiện ích của một nhóm thành sản phẩm nội bộ chính thức được nhiều nhóm trong công ty sử dụng.",
          "Chuyển gần một nửa REST API của OEE từ Python sang Java/Spring Boot, góp phần hoàn tất quá trình chuyển đổi của nhóm. Tái cấu trúc các quy trình dùng chung về phân trang và chuyển đổi bằng các mẫu Builder, Factory Method và Template Method, qua đó giảm mã trùng lặp và cải thiện khả năng kiểm thử. Phân tích logic hiện có và cải tiến hoặc bổ sung logic khi cần.",
          "Cùng các đồng nghiệp có kinh nghiệm trong nhóm ghi nhận yêu cầu B2B và thống nhất thay đổi về schema, model, REST API cũng như các lỗi cần sửa trong microservice Digital Twin Management.",
          "Chịu trách nhiệm từ triển khai mã đến đưa lên môi trường tiền sản xuất: phát triển các thay đổi Java/Spring Boot đã thống nhất, viết kiểm thử đơn vị và kiểm thử tích hợp bằng Cypress, đồng thời cải tiến CI/CD trên GitHub Actions để tự động kiểm tra thay đổi và phát hiện lỗi hồi quy. Kiểm tra tương tác giữa microservice và nền tảng Cumulocity, rồi triển khai chức năng cho các buổi demo với khách hàng doanh nghiệp.",
          "Hỗ trợ cập nhật giao diện Angular sau các thay đổi API backend, gỡ lỗi và khắc phục vấn đề tích hợp để frontend và backend hoạt động nhất quán.",
          "Tự động tạo tài liệu API qua cấu hình Swagger/OpenAPI trong mỗi lần build microservice, giúp đặc tả luôn được cập nhật với ít thao tác thủ công.",
          "Phát triển các kịch bản mô phỏng bằng Python để kiểm thử áp lực và kiểm thử tích hợp cho ứng dụng OEE.",
          "Sử dụng GitHub Copilot và Claude Code trong toàn bộ vòng đời ticket, từ phân tích yêu cầu và triển khai đến gỡ lỗi và kiểm thử.",
        ],
      },
      {
        role: 'Kỹ sư phần mềm tại bộ phận R&D',
        company: 'Software AG — Đội Cumulocity Platform Core',
        dates: "Tháng 10 năm 2021 - tháng 10 năm 2022",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Khôi phục khả năng tạo cụm Kubernetes bằng cách phân tích log và xác định xung đột cấu hình sau các bản cập nhật Cumulocity core. Báo cáo vấn đề và cập nhật các thiết lập liên quan.",
          "Điều tra và hỗ trợ khắc phục lỗi cụm Kubernetes trong quá trình khởi tạo và vận hành, phân tích nguyên nhân trên nền tảng lõi Cumulocity.",
          "Duy trì và cải tiến Chef cookbooks cùng quy trình tự động hóa Kubernetes dựa trên Helm cho các môi trường Cumulocity chạy Linux, đóng góp các bản sửa lỗi cho điểm nghẽn trong quá trình cấp phát.",
          "Tự động hóa việc cấp phát cụm AWS bằng Bash và các script AWS CLI, giảm thao tác thiết lập thủ công và rút ngắn thời gian cấp phát.",
        ],
      },
      {
        role: 'Lập trình viên phần mềm / Trưởng nhóm',
        company: 'Câu lạc bộ Forex Đại học Việt-Đức (VGU)',
        dates: "Tháng 4 năm 2018 - tháng 3 năm 2019",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Chuyển các chiến lược giao dịch thủ công thành Expert Advisor và chỉ báo tùy chỉnh cho MetaTrader 4 và 5, sau đó kiểm thử trên dữ liệu thị trường lịch sử.",
          "Dẫn dắt nhóm phát triển thông qua phân công nhiệm vụ và hướng dẫn thành viên. Giúp thành viên có thể tự phân tích nhu cầu khách hàng, xác định yêu cầu, lập kế hoạch phát triển, triển khai, kiểm thử và bàn giao công cụ giao dịch MetaTrader.",
        ],
      },
    ],
  },
  education: {
    heading: 'cat education.md',
    entries: [
      {
        degree: 'Thạc sĩ Khoa học | High Integrity Systems',
        institution: 'Đại học Khoa học Ứng dụng Frankfurt',
        dates: 'Th4 2019 – Th9 2021',
        description: 'Hệ thống an toàn cao, kiểm chứng hình thức, hệ thống phân tán.',
      },
      {
        degree: 'Cử nhân Kỹ thuật | Kỹ thuật Điện và Công nghệ Thông tin',
        institution: 'Đại học Khoa học Ứng dụng Frankfurt & Đại học Việt-Đức (VGU)',
        dates: 'Th10 2013 – Th7 2018',
        description: 'Chương trình song bằng: hệ thống nhúng, phát triển phần mềm, xử lý tín hiệu.',
      },
    ],
  },
  projects: {
    heading: 'ls projects/',
    entries: [
      {
        title: 'Trợ lý AI của Portfolio — Backend Chat Văn bản & Giọng nói Bám sát Dữ liệu Thật',
        dates: 'Th9 2026 – hiện tại',
        // TODO: native review
        description: [
          'Vận hành trợ lý AI ngay trên trang này: backend FastAPI phục vụ cả endpoint chat văn bản dạng streaming lẫn cuộc gọi thoại trực tiếp qua WebSocket, bám sát tuyệt đối dữ liệu tiểu sử của chính portfolio này để không bịa thông tin.',
          'Chế độ giọng nói dùng Agent Development Kit (ADK) của Google kết hợp Gemini Live API để truyền âm thanh hai chiều theo thời gian thực, có lời chào bằng giọng nói khi kết nối, cơ chế resumption và tự động kết nối lại khi rớt kết nối, cùng giới hạn 10 phút/phiên và hạn mức cuộc gọi mỗi ngày.',
          'Các câu hỏi nhạy cảm (lương, thời gian báo trước nghỉ việc,...) được chặn lại qua cơ chế tool-calling và trả lời đúng nguyên văn bằng nội dung đã được duyệt trước, ở cả chế độ văn bản lẫn giọng nói, thay vì để mô hình tự ứng biến; các câu hỏi gần giống nhau được trả lời từ bộ nhớ đệm dựa trên embedding thay vì gọi mô hình lại từ đầu.',
          'Tự động chuyển sang API key Gemini dự phòng khi key chính hết hạn mức, ẩn danh hóa thông tin cá nhân (PII) và tự động xóa nhật ký hội thoại sau 90 ngày, cùng cơ chế giới hạn theo origin/rate limit; triển khai trên Railway, có bộ test đầy đủ bằng pytest.',
        ],
        tech: ['Python', 'FastAPI', 'Google ADK', 'Gemini API', 'Gemini Live API', 'WebSockets', 'PostgreSQL', 'Railway', 'pytest'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/portfolio-voice-agent' }],
      },
      {
        title: 'FinTrack — Ứng dụng Quản lý Tài chính Cá nhân',
        dates: 'Th6 2026 – hiện tại',
        description: [
          'Kiến trúc sư kiêm product owner, chỉ đạo Claude Code qua các bounded context (tài khoản, giao dịch, ngân sách, phân tích).',
          'Frontend Next.js 14 (TypeScript, Tailwind) với REST API Java 21/Spring Boot 3.',
          'Xác thực JWT với rotating refresh token, cô lập dữ liệu theo từng người dùng, schema PostgreSQL quản lý bằng Flyway, lên lịch giao dịch định kỳ.',
          'Bảng phân tích với Recharts; kiểm thử với JUnit 5 + Mockito; Docker Compose + GitHub Actions cho CI/CD.',
        ],
        tech: ['Next.js', 'TypeScript', 'Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/personal-financial-management' },
          { label: 'Demo trực tiếp', url: 'https://fintrack-three-wine.vercel.app/' },
        ],
      },
      {
        title: 'Storyboard — Bảng quản lý dự án OpenSpec',
        dates: 'Th7 2026 – hiện tại',
        description: [
          'Dự án tự khởi xướng để học Go, đồng thời dùng để quản lý công việc phát triển của chính hệ thống này qua các proposal và task của OpenSpec theo kiểu Jira.',
          'Backend Go (net/http, fsnotify) phân tích các file markdown OpenSpec trên đĩa thành các cột board Draft/In Progress/Complete/Archived, chỉnh sửa nguyên vẹn từng byte và mang tính atomic.',
          'Ghi dữ liệu theo cơ chế optimistic concurrency, mang theo thời gian sửa đổi file + hash SHA-256; từ chối ghi đè nếu dữ liệu đã cũ thay vì âm thầm ghi đè công việc mới hơn.',
          'Frontend React/TypeScript/Vite/TanStack Query được nhúng vào file thực thi Go qua go:embed để phân phối dưới dạng một binary duy nhất trên Windows/Mac/Linux.',
        ],
        tech: ['Go', 'net/http', 'fsnotify', 'React', 'TypeScript', 'Vite', 'TanStack Query'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/Openspec-storyboard' }],
      },
      {
        title: 'Hootden — Không gian làm việc cá nhân có thể chia sẻ',
        dates: 'Th8 2026 – hiện tại',
        // TODO: native review
        description: [
          'Không gian làm việc cá nhân để ghi chú và lên kế hoạch, có thể mở thành không gian chung để cộng tác với người khác — tự khởi xướng để học Go trong một dự án có quy mô gần với production.',
          'Backend Go 1.26 tổ chức theo package-by-domain (auth, workspace, httpapi, migrations), với frontend Next.js/TypeScript và PostgreSQL qua pgx.',
          'Đăng nhập bằng email/mật khẩu và Google OAuth với session token dạng opaque, HttpOnly, bao gồm cookie theo COOKIE_DOMAIN được dùng chung giữa domain chính và subdomain API cho bản triển khai quản lý trên Railway + Vercel.',
          'Triển khai mọi tính năng dưới dạng đề xuất OpenSpec theo hướng đặc tả, thực thi bằng AI coding agent, kiểm chứng bằng bộ test Go và pipeline end-to-end trên GitHub Actions.',
        ],
        tech: ['Go', 'PostgreSQL', 'pgx', 'goose', 'OAuth2', 'Next.js', 'TypeScript', 'Docker', 'GitHub Actions'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/Hootden' }],
      },
      {
        title: 'Đồ án Thạc sĩ: Điều khiển Remote Desktop từ Ứng dụng SaaS',
        dates: 'Th2 – Th8 2021',
        // TODO: native review
        description: [
          'Hoàn thiện giải pháp điều khiển remote desktop qua nền web, truy cập được từ các trình duyệt phổ biến.',
          'Nâng cấp RemotePy, một dự án mã nguồn mở sẵn có viết bằng Python Flask để điều khiển từ xa, bổ sung khả năng điều khiển chuột, bàn phím, cảm ứng qua trình duyệt cùng streaming màn hình trực tiếp, chạy trên nền Werkzeug/Gunicorn với CLI tùy chỉnh để cấu hình số worker và thread.',
          'Thiết kế giao diện frontend phía trình duyệt bằng HTML, CSS và JavaScript để xử lý tương tác điều khiển từ xa theo thời gian thực.',
          'Xác thực dựa trên MySQL; đóng gói container hóa môi trường server với Docker và Apache.',
        ],
        tech: ['Python', 'Flask', 'Werkzeug', 'Gunicorn', 'HTML', 'CSS', 'JavaScript', 'Docker', 'MySQL'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/Master-Thesis' },
          { label: 'Module RemotePy', url: 'https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy' },
        ],
      },
      {
        title: 'Udacity: Intro to Machine Learning with TensorFlow',
        dates: '2020',
        // TODO: native review
        description: [
          'Xây dựng và so sánh ba mô hình phân loại học có giám sát (Random Forest, Gaussian Naive Bayes, AdaBoost) trên dữ liệu điều tra dân số Hoa Kỳ (45.000 bản ghi), áp dụng log-transform, chuẩn hóa MinMax và one-hot encoding, so sánh với baseline ngẫu nhiên.',
          'Phân tích phân khúc khách hàng trên dữ liệu nhân khẩu học thực tế của Đức (Arvato/AZ Direct, khoảng 891.000 bản ghi, 85 đặc trưng), áp dụng PCA (28 thành phần, giải thích khoảng 87% phương sai) và phân cụm K-Means để xác định các phân khúc được đại diện quá mức hoặc thiếu.',
          'Xây dựng mô hình phân loại ảnh bằng TensorFlow/Keras sử dụng transfer learning (MobileNet) để nhận diện 102 loài hoa (bộ dữ liệu Oxford Flowers), đạt độ chính xác kiểm thử 71%, đóng gói thành công cụ dòng lệnh Python để suy luận.',
        ],
        tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'TensorFlow Hub', 'Matplotlib', 'Seaborn'],
        links: [
          { label: 'Finding Donors for CharityML', url: 'https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML' },
          {
            label: 'Creating Customer Segments with Arvato',
            url: 'https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato',
          },
          { label: 'Image Classifier with Deep Learning', url: 'https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow' },
          { label: 'Xác nhận hoàn thành', url: 'https://confirm.udacity.com/G9GHDGQU' },
        ],
      },
    ],
  },
  certificates: {
    heading: 'ls certificates/',
    entries: [
      { title: 'Software AG Leadership Essentials Professional', date: 'Th11 2023' },
      { title: 'AWS Certified Developer – Associate', date: 'Th8 2023', issuer: 'AWS' },
      { title: 'AWS Certified Cloud Practitioner', date: 'Th8 2023', issuer: 'AWS' },
      { title: 'Lean Six Sigma White Belt', date: 'Th3 2022' },
      { title: 'Building Scalable Java Microservices with Spring Boot & Spring Cloud', date: 'Th9 2021', issuer: 'Coursera' },
      { title: 'Intro to Machine Learning with TensorFlow', date: 'Th6 2020', issuer: 'Udacity Nanodegree Program' },
    ],
  },
  languages: {
    heading: 'locale -a',
    entries: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Thành thạo (C1)' },
      // TODO: native review
      { name: 'Tiếng Đức', level: 'Trung cấp (B1)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Tập luyện thể thao', 'Du lịch & leo núi', 'Nấu ăn', 'Chơi game hoặc đi chơi với bạn bè'],
  },
};
