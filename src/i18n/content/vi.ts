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
    location: 'Stuttgart, Đức',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    // Updated to match the 2026 general CV summary
    summary: [
      { text: 'Kỹ sư phần mềm với ' },
      { text: 'hơn 5 năm', strong: true },
      {
        text: ' phát triển dịch vụ backend production, REST API và microservice trên nền tảng IoT doanh nghiệp kết nối hàng triệu tài sản và thiết bị. ',
      },
      {
        text: 'Đưa microservice-deployer từ nhu cầu của một nhóm trở thành sản phẩm nội bộ được chính thức áp dụng',
        strong: true,
      },
      {
        text: ', hiện được nhiều nhóm trong công ty sử dụng để chuẩn hóa quy trình triển khai Cumulocity; đồng thời chuyển chức năng OEE từ Python sang microservice Java Spring Boot trong quá trình hiện đại hóa nền tảng. Thế mạnh về ',
      },
      { text: 'Java và Spring Boot', strong: true },
      {
        text: ', cùng kinh nghiệm production với Python và TypeScript, chứng chỉ AWS, và kinh nghiệm thực tế về Docker, Kubernetes, CI/CD và kiểm thử tích hợp.',
      },
    ],
  },
  skills: {
    heading: 'ls skills/',
    // Expanded from 4 to 6 groups per 2026 CV
    groups: [
      { title: 'Ngôn ngữ lập trình', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Next.js', 'Flask'],
      },
      // TODO: native review — bổ sung Helm theo CV đã cập nhật
      { title: 'Cloud, DevOps & Công cụ', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Chef'] },
      { title: 'Kiểm thử', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress'] },
      { title: 'Cơ sở dữ liệu', items: ['PostgreSQL', 'MySQL'] },
      { title: 'Phương pháp làm việc', items: ['Agile/Scrum', 'CI/CD'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    // Dates and bullets updated to match 2026 CV (Cumulocity: Oct 2022–Jul 2026,
    // Software AG: Oct 2021–Oct 2022; legacy translations.js had different dates/role split)
    entries: [
      {
        role: 'Kỹ sư phần mềm tại bộ phận R&D',
        company: 'Cumulocity GmbH (trước đây là Software AG) — Đội Digital Twin Management',
        dates: 'Th10 2022 – Th7 2026',
        bullets: [
          'Triển khai các tính năng Digital Twin Management (DTM) trên nền tảng Cumulocity IoT phục vụ hàng triệu thiết bị kết nối.',
          'Sử dụng các công cụ lập trình AI (GitHub Copilot, Claude Code) trong suốt vòng đời ticket, giúp tăng đáng kể hiệu suất xử lý ticket hàng tuần.',
          'Tái cấu trúc microservice DTM để giảm độ phức tạp của các lớp và cải thiện khả năng bảo trì lâu dài.',
          'Dẫn dắt việc chuyển bộ kiểm thử tích hợp sang Cypress, cải thiện tốc độ chạy test và chu kỳ phản hồi CI.',
          'Chuyển đổi microservice OEE viết bằng Python sang microservice Java Spring Boot.',
          'Viết các kịch bản mô phỏng bằng Python để kiểm thử tải và kiểm thử tích hợp.',
          'Xây dựng và bảo trì các pipeline CI/CD bằng GitHub Actions cho ứng dụng và microservice.',
          'Thiết kế công cụ hỗ trợ triển khai bằng Bash, giúp giảm thời gian gỡ lỗi giữa các đội.',
        ],
      },
      {
        role: 'Kỹ sư phần mềm tại bộ phận R&D',
        company: 'Software AG — Đội Cumulocity Platform Core',
        dates: 'Th10 2021 – Th10 2022',
        bullets: [
          // TODO: native review — cập nhật theo kinh nghiệm Cumulocity Platform Core đã mở rộng trong cv.md
          'Điều tra các lỗi cụm Kubernetes trong quá trình khởi tạo và vận hành, phân tích nguyên nhân gốc rễ và hỗ trợ khắc phục.',
          'Duy trì và cải tiến Chef cookbooks cùng quy trình tự động hóa cụm Kubernetes dựa trên Helm để triển khai và vận hành các môi trường Cumulocity.',
          'Xác định các điểm nghẽn trong quá trình tạo cụm và đóng góp các bản sửa lỗi cùng cải tiến để việc cấp phát nhanh và ổn định hơn.',
          'Tự động hóa việc cấp phát AWS bằng Bash và AWS CLI, giảm đáng kể thời gian thiết lập.',
        ],
      },
      {
        role: 'Lập trình viên phần mềm / Trưởng nhóm',
        company: 'Câu lạc bộ Forex Đại học Việt-Đức (VGU)',
        dates: 'Th4 2018 – Th3 2019',
        bullets: [
          'Chuyển các chiến lược giao dịch thủ công thành Expert Advisor theo quy tắc và các chỉ báo tùy chỉnh cho MetaTrader 4/5.',
          'Backtest và tối ưu hóa chiến lược dựa trên dữ liệu thị trường lịch sử.',
          // TODO: native review — added to match the new mentoring/delegation bullets in cv.md
          'Hướng dẫn (mentor) các thành viên mới về phát triển MetaTrader và triển khai chiến lược giao dịch, giúp họ làm quen với quy trình giao dịch tự động của nhóm.',
          'Đảm nhận vai trò trưởng nhóm, phân công công việc phát triển cho các thành viên và giám sát tiến độ để đảm bảo tiến độ bàn giao.',
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
