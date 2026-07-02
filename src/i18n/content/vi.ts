import type { CvContent } from './types';

// Vietnamese strings ported from the legacy assets/js/translations.js dictionary (key "vn")
// where still valid; content covering the new CV (updated dates, FinTrack, skills) is newly
// translated and flagged below for native review.
export const vi: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Kỹ sư phần mềm',
    description:
      'Kỹ sư phần mềm tại Stuttgart, Đức — hơn 5 năm kinh nghiệm xây dựng dịch vụ backend có khả năng mở rộng và ứng dụng cloud-native với Java, Spring Boot và Python.',
  },
  nav: {
    intro: 'whoami',
    skills: 'skills',
    experience: 'experience',
    education: 'education',
    projects: 'projects',
    certificates: 'certificates',
    languages: 'languages',
    hobbies: 'hobbies',
  },
  hero: {
    name: 'Nam Nhat Pham',
    role: 'Kỹ sư phần mềm',
    location: 'Stuttgart, Đức',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    // Updated from "hơn 6 năm" (legacy site) to "hơn 5 năm" per 2026 CV
    summary:
      'Kỹ sư phần mềm với hơn 5 năm kinh nghiệm xây dựng dịch vụ backend có khả năng mở rộng và ứng dụng cloud-native trên các nền tảng production. Có kinh nghiệm với Python và TypeScript trong môi trường production, tự động hóa CI/CD, kiến trúc backend và phân rã microservice. Có chứng chỉ AWS.',
  },
  skills: {
    heading: 'ls skills/',
    // Expanded from 4 to 6 groups per 2026 CV
    groups: [
      { title: 'Ngôn ngữ lập trình', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'Next.js', 'Flask'],
      },
      { title: 'Cloud, DevOps & Công cụ', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Chef'] },
      { title: 'Kiểm thử', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress'] },
      { title: 'Cơ sở dữ liệu', items: ['PostgreSQL', 'MySQL'] },
      { title: 'Phương pháp làm việc', items: ['Agile/Scrum', 'CI/CD'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    // Dates and bullets updated to match 2026 CV (Cumulocity: Oct 2022–Sep 2026,
    // Software AG: Oct 2021–Oct 2022; legacy translations.js had different dates/role split)
    entries: [
      {
        role: 'Kỹ sư phần mềm tại bộ phận R&D',
        company: 'Cumulocity GmbH (trước đây là Software AG) — Đội Digital Twin Management',
        dates: 'Th10 2022 – Th9 2026',
        bullets: [
          'Triển khai các tính năng Digital Twin Management (DTM) trên nền tảng Cumulocity IoT phục vụ hàng triệu thiết bị kết nối.',
          'Sử dụng các công cụ lập trình AI (GitHub Copilot, Claude Code) trong suốt vòng đời ticket, giúp tăng hiệu suất từ 1-2 lên tới 3 ticket mỗi tuần.',
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
          'Gỡ lỗi nền tảng và phân tích nguyên nhân gốc rễ trên nền tảng lõi Cumulocity.',
          'Viết Chef cookbooks và thiết kế kiến trúc cụm Kubernetes.',
          'Tự động hóa việc cấp phát AWS bằng Bash và AWS CLI, giảm khoảng 10% thời gian thiết lập.',
        ],
      },
      {
        role: 'Lập trình viên phần mềm',
        company: 'Câu lạc bộ Forex Đại học Việt-Đức (VGU)',
        dates: 'Th4 2018 – Th3 2019',
        bullets: [
          'Chuyển các chiến lược giao dịch thủ công thành Expert Advisor theo quy tắc và các chỉ báo tùy chỉnh cho MetaTrader 4/5.',
          'Backtest và tối ưu hóa chiến lược dựa trên dữ liệu thị trường lịch sử.',
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
        dates: '2025 – hiện tại',
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
        title: 'Đồ án Thạc sĩ: Điều khiển Remote Desktop từ Ứng dụng SaaS',
        dates: 'Th2 – Th8 2021',
        description: [
          'Stack container hóa (Docker, MySQL, oneye OS, Apache) với backend Python Flask cho phép điều khiển remote desktop ở mức terminal qua trình duyệt.',
          'Xác thực dựa trên MySQL.',
        ],
        tech: ['Python', 'Flask', 'Docker', 'MySQL'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/Master-Thesis' }],
      },
      {
        title: 'Udacity: Intro to Machine Learning with TensorFlow',
        dates: '2020',
        description: ['Chương trình Nanodegree về phân tích dữ liệu và machine learning ứng dụng với TensorFlow.'],
        tech: ['Python', 'TensorFlow'],
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
      { title: 'telc Deutsch B1', date: 'Th7 2024' },
      { title: 'Software AG Leadership Essentials Professional', date: 'Th11 2023' },
      { title: 'AWS Certified Developer – Associate', date: 'Th8 2023', issuer: 'AWS' },
      { title: 'AWS Certified Cloud Practitioner', date: 'Th8 2023', issuer: 'AWS' },
      { title: 'Lean Six Sigma White Belt', date: 'Th3 2022' },
      { title: 'Building Scalable Java Microservices with Spring Boot & Spring Cloud', date: 'Th9 2021', issuer: 'Coursera' },
      { title: 'Intro to Machine Learning with TensorFlow', date: 'Th6 2020', issuer: 'Udacity Nanodegree Program' },
      { title: 'IELTS 7.0', date: 'Th10 2018' },
    ],
  },
  languages: {
    heading: 'locale -a',
    entries: [
      { name: 'Tiếng Việt', level: 'Bản ngữ' },
      { name: 'Tiếng Anh', level: 'Thành thạo (B2)' },
      { name: 'Tiếng Đức', level: 'Trung cấp (B1)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Tập luyện thể thao', 'Du lịch & leo núi', 'Nấu ăn', 'Chơi game hoặc đi chơi với bạn bè'],
  },
};
