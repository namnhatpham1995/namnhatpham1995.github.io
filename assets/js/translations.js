/*
 * Translation dictionary for the portfolio.
 *
 * Key scheme: dot-namespaced by section, e.g. "nav.intro", "experience.body".
 * - Plain keys (nav.*, *.title, skills.g*) are applied with textContent.
 * - Elements marked `data-i18n-html` in index.html (the *.body keys and the
 *   intro paragraph) are applied with innerHTML, so values may contain markup.
 *
 * English ("en") is NOT stored here: the runtime (lang.js) captures it from the
 * original DOM content of index.html. That keeps English as the single source
 * of truth and the valid no-JS fallback. Only "de" and "vn" live below, and
 * they MUST cover the exact same set of keys that exist in the document.
 */
window.I18N = {
	de: {
		"hero.tagline": "Software-Ingenieur mit über 6 Jahren Erfahrung in skalierbaren Backend-Diensten und cloud-nativen Anwendungen",

		"nav.intro": "Einleitung",
		"nav.skills": "Fähigkeiten",
		"nav.experience": "Erfahrung",
		"nav.education": "Bildung",
		"nav.projects": "Projekte",
		"nav.certificates": "Zertifikate",
		"nav.languages": "Sprachen",
		"nav.hobbies": "Hobbys",

		"intro.title": "Einleitung",
		"skills.title": "Fähigkeiten",
		"education.title": "Bildung",
		"projects.title": "Projekte",
		"certificates.title": "Zertifikate",
		"experience.title": "Erfahrung",
		"languages.title": "Sprachen",
		"hobbies.title": "Hobbys",

		"skills.g1": "Programmiersprachen",
		"skills.g2": "Backend & Frameworks",
		"skills.g3": "Cloud, DevOps & Tools",
		"skills.g4": "Datenbanken",

		"intro.body": `
			Ich bin <b>Software-Ingenieur</b> mit über 6 Jahren Erfahrung im Entwurf und in der Bereitstellung skalierbarer Backend-Dienste und cloud-nativer Anwendungen.
			Derzeit arbeite ich in der Forschung und Entwicklung bei <a href="https://www.cumulocity.com/" target="_blank"><b>Cumulocity GmbH</b></a>, wo ich den Microservice <b>Digital Twin Management (DTM)</b> entwickle und modernisiere.<br><br>

			Ich verfüge über fundierte Kenntnisse in der <u>CI/CD-Automatisierung</u> und in der Migration monolithischer Architekturen zu wartbaren <b>Java/Spring-Boot</b>-Microservices.
			Als teamorientierter und <u>KI-nativer Entwickler</u> treibe ich moderne Engineering-Praktiken im Team voran &ndash; von der Anforderungsanalyse über die Implementierung bis hin zu automatisierten Tests und der Auslieferung.<br><br>

			Wenn Sie Fragen haben, kontaktieren Sie mich bitte gerne über meine E-Mail.`,

		"education.body": `
			<p style="text-align: justify">
				<b>Master of Science | High Integrity Systems</b> <br>
				(April 2019 - September 2021) <br>
				<i>Frankfurt University of Applied Sciences, Frankfurt, Deutschland.</i> <br>
				Spezialisierung auf das Management, den Entwurf und die Entwicklung komplexer softwaregesteuerter Systeme.
			</p>
			<p style="text-align: justify">
				<b>Bachelor of Engineering | Elektrotechnik und Informationstechnik (EEIT)</b> <br>
				(Oktober 2013 - Juli 2018) <br>
				<i>Frankfurt University of Applied Sciences &amp; Vietnamesisch-Deutsche Universität (VGU).</i> <br>
				Spezialisierung auf Softwareentwicklung und Hardwaredesign für Informations- und Kommunikationssysteme.
			</p>`,

		"projects.body": `
			<b>M.Sc. Thesis</b> (Februar 2021 – August 2021) <br>
			<b>Development and Implementation of a solution for
			remote control of desktops from Software as a service application</b> <br>
			<i>Frankfurt University of Applied Sciences.</i> <br>
			Zusammenarbeit mit <a href="https://www.christianbaun.de/" target="_blank">Prof. Dr. Christian Baun</a> zur Erstellung einer persönlichen Remote-Desktop-Steuerungslösung auf der Grundlage von Open-Source-Projekten:
			<ol>
				<li>Studie über Oneye, eine PHP-basierte Webanwendung, die ein Betriebssystem (Web OS) simuliert</li>
				<li>Vergleich von Oneye mit ähnlichen Lösungen.</li>
				<li>Code-Verbesserungen, damit Oneye mit den neuesten PHP 8-Revisionen funktioniert.</li>
				<li>Analyse und Vergleich von Software, die die Kontrolle über Remote-Desktops übernehmen kann.</li>
				<li>Entwicklung einer Anwendung in Oneye, um die Verbindung zum Remote-Desktop zu verwalten.</li>
				<li>Aktualisierung von RemotePy, einer auf Python basierenden Open-Source-Anwendung zur Fernsteuerung von Desktops, die im Flask-Framework entwickelt wurde:</li>
				<ol style="list-style-type: lower-latin">
					<li>Verbesserung der Benutzeroberfläche (UI) für ein besseres Benutzererlebnis (Bootstrap und Font Awesome).</li>
					<li>Entwicklung einer Datenaustauschfunktionalität.</li>
					<li>Entwicklung der Tastatureingabefunktion.</li>
					<li>Verbesserung der Mauseingabefunktion.</li>
					<li>Analyse und Vergleich der Möglichkeiten zur Verbesserung der Bildrate bei der gemeinsamen Nutzung von Bildschirmen.</li>
					<li>Entwicklung einer Authentifizierungsfunktion.</li>
					<li>Integration des SSL/TLS-Protokolls.</li>
				</ol>
			</ol>
			<p style="margin-top: -30px">
				Technologien: MySQL, Docker, PHP, Python (Flask framework), jQuery,
				AJAX, Bootstrap, Javascript, HTML, CSS, SSL/TLS, Git. <br>
				Quelle: <a href="https://github.com/namnhatpham1995/Master-Thesis" target="_blank">https://git.io/Ju7Eq</a>
			</p>

			<b>Udacity Nanodegree Program</b> (April 2020 – Juni 2020) <br>
			<b>Introduction to Machine Learning with TensorFlow</b> <br>
			<ul>
				<li>Entwicklung von Python-Programmen und -Anwendungen, um Daten zu filtern, bevor Datenanalysetechniken und die TensorFlow-Bibliothek angewendet werden, um die Daten zu analysieren und die Ergebnisse zu melden.</li>
				<li>Namen der Projekte (Übungen):
					<ol>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML" target="_blank">Donors for CharityML</a></li>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato" target="_blank">Creating Customer Segments with Arvato</a></li>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow" target="_blank">Image Classifier with Deep Learning</a></li>
					</ol>
				</li>
				<li style="margin-top: -30px">Zertifikat: <a href="https://confirm.udacity.com/G9GHDGQU" target="_blank">https://confirm.udacity.com/G9GHDGQU</a></li>
			</ul>
			<p style="margin-top: -30px">Technologien: Python, Jupyter Notebook, TensorFlow.</p>`,

		"certificates.body": `
			<p style="text-align: justify">
				<b>telc Deutsch B1</b> <br>
				(Juli 2024)
			</p>
			<p style="text-align: justify">
				<b>Software AG Leadership Essentials Professional</b> <br>
				(November 2023)
			</p>
			<p style="text-align: justify">
				<b>AWS Certified Developer &ndash; Associate</b> <br>
				(August 2023) <br>
				AWS
			</p>
			<p style="text-align: justify">
				<b>AWS Certified Cloud Practitioner</b> <br>
				(August 2023) <br>
				AWS
			</p>
			<p style="text-align: justify">
				<b>Lean Six Sigma White Belt Certification</b> <br>
				(März 2022)
			</p>
			<p style="text-align: justify">
				<b>Building Scalable Java Microservices with Spring Boot and Spring Cloud</b> <br>
				(September 2021) <br>
				Coursera
				<ul style="margin-top: -30px">
					<li>Aufbau von Microservices mit Spring Boot und Spring Cloud.</li>
					<li>Bereitstellung und Verwaltung von Microservices mit Google Cloud.</li>
				</ul>
			</p>
			<p style="text-align: justify">
				<b>Introduction to Machine Learning with TensorFlow</b> <br>
				(Juni 2020) <br>
				<i>Udacity Nanodegree Program</i> <br>
				Analyse und Verarbeitung von Daten und Anwendung von TensorFlow zum Trainieren von Computern.
			</p>
			<p style="text-align: justify">
				<b>IELTS 7.0</b> <br>
				(Oktober 2018)
			</p>`,

		"experience.body": `
			<p style="text-align: justify">
				<b>Software-Ingenieur in F&amp;E</b> <br>
				(November 2024 - September 2026) <br>
				<i><b>Cumulocity GmbH</b></i> <br>
				Entwicklung und Modernisierung des Microservice <b>Digital Twin Management (DTM)</b>:
				<ul style="margin-top: -30px">
					<li>Verantwortung für Implementierung und Tests über mehrere ausgelieferte Features im gesamten Entwicklungszyklus.</li>
					<li>Einsatz von KI-Coding-Tools (z.&nbsp;B. <b>GitHub Copilot</b>, <b>Claude Code</b>) über den gesamten Entwicklungszyklus, was den Durchsatz um geschätzte 20&ndash;30&nbsp;% pro Ticket steigerte &ndash; von der Anforderungsanalyse über die Implementierung und das Debugging bis hin zum Schreiben von Tests und der Auslieferung.</li>
					<li>Erstellung projektspezifischer KI-Anweisungen und Weitergabe von Prompt-Strategien im Team, was die Akzeptanz und messbare Produktivitätsgewinne förderte.</li>
					<li>Mitwirkung am Refactoring des DTM-Microservice zur Reduzierung der Klassenkomplexität und zur Verbesserung von Lesbarkeit und langfristiger Wartbarkeit.</li>
					<li>Mitarbeit an der Migration der Integrationstest-Suite zu <b>Cypress</b>, wodurch sich die Testausführung und die CI-Feedback-Zyklen beschleunigten.</li>
					<li>Iterative Auslieferung von Features im Rahmen von <b>Agile/Scrum</b>-Ritualen, inklusive Backlog-Pflege und Story-Schätzung.</li>
				</ul>
			</p>

			<p style="text-align: justify">
				<b>Software-Ingenieur in F&amp;E</b> <br>
				(Oktober 2021 - November 2024) <br>
				<i><b>Software AG</b></i> <br>
				Aufbau von Automatisierungs- und Deployment-Werkzeugen für Cumulocity IoT:
				<ul style="margin-top: -30px">
					<li>Modernisierung des OEE-Microservice durch Migration Python-basierter Funktionalität in den DTM-Microservice mit <b>Java Spring Boot</b>.</li>
					<li>Implementierung und Pflege von <b>GitHub Actions</b>-Workflows zur Automatisierung von Tests, Releases und Deployments für Anwendungen und Microservices.</li>
					<li>Entwurf eines <b>Bash</b>-basierten Deployment-Helfers um ein internes CLI-Tool zur Automatisierung des Cumulocity-Upload-Prozesses, mit automatisierter Prüfung von Paketstruktur, Versionskompatibilität und Namenskonventionen.</li>
					<li>Erstellung von <b>Python</b>-Simulationsskripten für Last- und Integrationstests der OEE-Anwendung.</li>
					<li>Unterstützung des Refactorings der Cumulocity-Kernplattform von einer monolithischen hin zu einer Microservice-basierten Architektur.</li>
					<li>Analyse von Pod- und Container-Logs zur Ursachenanalyse sowie Bash-Skripte zur Automatisierung der Bereitstellung neuer Cluster auf <b>AWS</b> (ca. 10&nbsp;% schnellere Einrichtung).</li>
				</ul>
			</p>

			<p style="text-align: justify">
				<b>Software-Entwickler</b> <br>
				(April 2018 - März 2019) <br>
				<i><b>Vietnamesisch-Deutsche Universität (VGU) Forex Club</b></i> <br>
				Entwicklung automatisierter Trading-Tools mit MetaTrader 4 &amp; 5:
				<ul style="margin-top: -30px">
					<li>Direkte Zusammenarbeit mit Forex-Tradern, um manuelle Strategien in regelbasierte automatisierte Systeme (Expert Advisors) und eigene Indikatoren umzusetzen.</li>
					<li>Backtesting von Handelsstrategien anhand historischer Marktdaten zur Bewertung von Profitabilität und Risiko.</li>
				</ul>
			</p>`,

		"languages.body": `
			<li><span class="lang-name">Vietnamesisch</span><span class="lang-level">Muttersprache</span></li>
			<li><span class="lang-name">Englisch</span><span class="lang-level">Fließend (B2)</span></li>
			<li><span class="lang-name">Deutsch</span><span class="lang-level">Mittelstufe (B1)</span></li>`,

		"hobbies.body": `
			<li>Workout</li>
			<li>Reisen &amp; Wandern</li>
			<li>Kochen</li>
			<li>Spielen oder mit Freunden ausgehen</li>`
	},

	vn: {
		"hero.tagline": "Kỹ sư phần mềm với hơn 6 năm kinh nghiệm xây dựng các dịch vụ backend mở rộng và ứng dụng cloud-native",

		"nav.intro": "Giới thiệu",
		"nav.skills": "Kỹ năng",
		"nav.experience": "Kinh nghiệm",
		"nav.education": "Giáo dục",
		"nav.projects": "Dự án",
		"nav.certificates": "Chứng nhận",
		"nav.languages": "Ngôn ngữ",
		"nav.hobbies": "Sở thích",

		"intro.title": "Giới thiệu",
		"skills.title": "Kỹ năng",
		"education.title": "Giáo dục",
		"projects.title": "Dự án",
		"certificates.title": "Chứng nhận",
		"experience.title": "Kinh nghiệm",
		"languages.title": "Ngôn ngữ",
		"hobbies.title": "Sở thích",

		"skills.g1": "Ngôn ngữ lập trình",
		"skills.g2": "Backend & Frameworks",
		"skills.g3": "Cloud, DevOps & Công cụ",
		"skills.g4": "Cơ sở dữ liệu",

		"intro.body": `
			Tôi là một <b>Kỹ sư phần mềm</b> với hơn 6 năm kinh nghiệm thiết kế và phát triển các dịch vụ backend có khả năng mở rộng cùng các ứng dụng cloud-native.
			Hiện tại tôi đang làm việc tại bộ phận R&amp;D của <a href="https://www.cumulocity.com/" target="_blank"><b>Cumulocity GmbH</b></a>, nơi tôi phát triển và hiện đại hóa microservice <b>Digital Twin Management (DTM)</b>.<br><br>

			Tôi có kỹ năng vững vàng trong <u>tự động hóa CI/CD</u> và trong việc chuyển đổi các kiến trúc nguyên khối (monolithic) thành các microservice <b>Java/Spring Boot</b> dễ bảo trì.
			Là một thành viên giàu tinh thần hợp tác và một <u>lập trình viên AI-native</u>, tôi thúc đẩy các phương pháp kỹ thuật hiện đại trong đội ngũ &ndash; từ phân tích yêu cầu, lập trình, đến kiểm thử tự động và bàn giao sản phẩm.<br><br>

			Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với tôi qua email.`,

		"education.body": `
			<p style="text-align: justify">
				<b>Thạc sĩ Khoa học | High Integrity Systems</b> <br>
				(Tháng 4 năm 2019 - Tháng 9 năm 2021) <br>
				<i>Đại học Khoa học Ứng dụng Frankfurt, Frankfurt, Đức.</i> <br>
				Chuyên môn hóa trong việc quản lý, thiết kế và phát triển các hệ thống điều khiển bằng phần mềm phức tạp.
			</p>
			<p style="text-align: justify">
				<b>Cử nhân Kỹ thuật | Kỹ thuật Điện và Công nghệ Thông tin</b> <br>
				(Tháng 10 năm 2013 - Tháng 7 năm 2018) <br>
				<i>Đại học Khoa học Ứng dụng Frankfurt &amp; Đại học Việt-Đức (VGU).</i> <br>
				Chuyên ngành phát triển phần mềm và thiết kế phần cứng cho hệ thống thông tin và truyền thông.
			</p>`,

		"projects.body": `
			<b>Đồ án Thạc sĩ</b> (Tháng 2 năm 2021 – Tháng 8 năm 2021) <br>
			<b>Development and Implementation of a solution for
			remote control of desktops from Software as a service application</b> <br>
			<i>Đại học Khoa học Ứng dụng Frankfurt.</i> <br>
			Làm việc với <a href="https://www.christianbaun.de/" target="_blank">GS. TS. Christian Baun</a> để tạo ra một giải pháp điều
			khiển máy tính từ xa dựa trên những ứng dụng mã nguồn mở:
			<ol>
				<li>Nghiên cứu Oneye, một ứng dụng web viết bằng ngôn ngữ PHP có thể chạy như một hệ điều hành (Web OS)</li>
				<li>So sánh Oneye với những giải pháp tương tự.</li>
				<li>Sửa lỗi và nâng cấp Oneye để có thể tương thích với PHP 8 mới nhất.</li>
				<li>Phân tích và so sánh những phần mềm có thể sử dụng để điều khiển máy tính từ xa.</li>
				<li>Phát triển một ứng dụng trong hệ điều hành Oneye để có thể liên kết tới phần mềm điều khiển máy tính từ xa.</li>
				<li>Nâng cấp RemotePy, một ứng dụng viết bằng ngôn ngữ Python và Flask framework giúp điều khiển máy tính từ xa:</li>
				<ol style="list-style-type: lower-latin">
					<li>Nâng cấp giao diện người dùng để giúp gia tăng trải nghiệm của người dùng (với thư viện Bootstrap và Font Awesome).</li>
					<li>Phát triển tính năng trao đổi dữ liệu.</li>
					<li>Phát triển tính năng truyền dữ liệu nhập từ bàn phím.</li>
					<li>Nâng cấp khả năng truyền dữ liệu từ chuột.</li>
					<li>Phân tích và so sánh những phương pháp để gia tăng khung hình được truyền đi.</li>
					<li>Phát triển tính năng xác thực danh tính.</li>
					<li>Áp dụng giao thức SSL/TLS vào ứng dụng.</li>
				</ol>
			</ol>
			<p style="margin-top: -30px">
				Công nghệ sử dụng: MySQL, Docker, PHP, Python (Flask framework), jQuery,
				AJAX, Bootstrap, Javascript, HTML, CSS, SSL/TLS, Git. <br>
				Nguồn: <a href="https://github.com/namnhatpham1995/Master-Thesis" target="_blank">https://git.io/Ju7Eq</a>
			</p>

			<b>Udacity Nanodegree Program</b> (Tháng 4 năm 2020 – Tháng 6 năm 2020) <br>
			<b>Introduction to Machine Learning with TensorFlow</b> <br>
			<ul>
				<li>Phát triển các chương trình và ứng dụng Python để xử lý dữ liệu, sau đó áp dụng các kỹ thuật phân tích dữ liệu và thư viện TensorFlow để phân tích dữ liệu và báo cáo kết quả.</li>
				<li>Tên các dự án (bài tập):
					<ol>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML" target="_blank">Donors for CharityML</a></li>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato" target="_blank">Creating Customer Segments with Arvato</a></li>
						<li><a href="https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow" target="_blank">Image Classifier with Deep Learning</a></li>
					</ol>
				</li>
				<li style="margin-top: -30px">Chứng chỉ: <a href="https://confirm.udacity.com/G9GHDGQU" target="_blank">https://confirm.udacity.com/G9GHDGQU</a></li>
			</ul>
			<p style="margin-top: -30px">Công nghệ sử dụng: Python, Jupyter Notebook, TensorFlow.</p>`,

		"certificates.body": `
			<p style="text-align: justify">
				<b>telc Deutsch B1</b> <br>
				(Tháng 7 năm 2024)
			</p>
			<p style="text-align: justify">
				<b>Software AG Leadership Essentials Professional</b> <br>
				(Tháng 11 năm 2023)
			</p>
			<p style="text-align: justify">
				<b>AWS Certified Developer &ndash; Associate</b> <br>
				(Tháng 8 năm 2023) <br>
				AWS
			</p>
			<p style="text-align: justify">
				<b>AWS Certified Cloud Practitioner</b> <br>
				(Tháng 8 năm 2023) <br>
				AWS
			</p>
			<p style="text-align: justify">
				<b>Lean Six Sigma White Belt Certification</b> <br>
				(Tháng 3 năm 2022)
			</p>
			<p style="text-align: justify">
				<b>Building Scalable Java Microservices with Spring Boot and Spring Cloud</b> <br>
				(Tháng 9 năm 2021) <br>
				Coursera
			</p>
			<p style="text-align: justify">
				<b>Introduction to Machine Learning with TensorFlow</b> <br>
				(Tháng 6 năm 2020) <br>
				<i>Udacity Nanodegree Program</i>
			</p>
			<p style="text-align: justify">
				<b>IELTS 7.0</b> <br>
				(Tháng 10 năm 2018)
			</p>`,

		"experience.body": `
			<p style="text-align: justify">
				<b>Kỹ sư phần mềm tại bộ phận R&amp;D</b> <br>
				(Tháng 11 năm 2024 - Tháng 9 năm 2026) <br>
				<i><b>Cumulocity GmbH</b></i> <br>
				Phát triển và hiện đại hóa microservice <b>Digital Twin Management (DTM)</b>:
				<ul style="margin-top: -30px">
					<li>Chịu trách nhiệm lập trình và kiểm thử cho nhiều tính năng được bàn giao trong toàn bộ vòng đời phát triển.</li>
					<li>Sử dụng các công cụ lập trình AI (ví dụ <b>GitHub Copilot</b>, <b>Claude Code</b>) trong suốt vòng đời phát triển, giúp tăng hiệu suất ước tính 20&ndash;30% mỗi ticket &ndash; bao gồm phân tích yêu cầu, lập trình, gỡ lỗi, viết test và bàn giao.</li>
					<li>Biên soạn các hướng dẫn AI riêng cho dự án và chia sẻ chiến lược prompt với đội ngũ, góp phần thúc đẩy việc áp dụng rộng rãi và tăng năng suất một cách rõ rệt.</li>
					<li>Tham gia tái cấu trúc (refactoring) microservice DTM, giảm độ phức tạp của các lớp và cải thiện khả năng đọc hiểu cũng như bảo trì lâu dài.</li>
					<li>Tham gia chuyển bộ kiểm thử tích hợp sang <b>Cypress</b>, cải thiện tốc độ chạy test và chu kỳ phản hồi CI.</li>
					<li>Bàn giao tính năng theo từng vòng lặp trong các nghi thức <b>Agile/Scrum</b>, đóng góp vào việc tinh chỉnh backlog và ước lượng công việc.</li>
				</ul>
			</p>

			<p style="text-align: justify">
				<b>Kỹ sư phần mềm tại bộ phận R&amp;D</b> <br>
				(Tháng 10 năm 2021 - Tháng 11 năm 2024) <br>
				<i><b>Software AG</b></i> <br>
				Xây dựng công cụ tự động hóa và triển khai cho Cumulocity IoT:
				<ul style="margin-top: -30px">
					<li>Hiện đại hóa microservice OEE bằng cách chuyển chức năng viết bằng Python sang microservice DTM sử dụng <b>Java Spring Boot</b>.</li>
					<li>Xây dựng và bảo trì các quy trình <b>GitHub Actions</b> để tự động hóa kiểm thử, phát hành và triển khai cho ứng dụng và microservice.</li>
					<li>Thiết kế công cụ hỗ trợ triển khai dựa trên <b>Bash</b> bao quanh một công cụ CLI nội bộ để tự động hóa quá trình tải lên Cumulocity, kèm kiểm tra tự động cấu trúc gói, tính tương thích phiên bản và quy ước đặt tên.</li>
					<li>Viết các kịch bản mô phỏng bằng <b>Python</b> để kiểm thử tải và kiểm thử tích hợp cho ứng dụng OEE.</li>
					<li>Hỗ trợ tái cấu trúc nền tảng lõi Cumulocity từ kiến trúc nguyên khối sang kiến trúc dựa trên microservice.</li>
					<li>Phân tích logs của pod và container để tìm nguyên nhân gốc rễ, đồng thời viết kịch bản Bash để tự động khởi tạo cụm (cluster) mới trên <b>AWS</b> (giảm khoảng 10% thời gian thiết lập).</li>
				</ul>
			</p>

			<p style="text-align: justify">
				<b>Lập trình viên phần mềm</b> <br>
				(Tháng 4 năm 2018 - Tháng 3 năm 2019) <br>
				<i><b>Câu lạc bộ Forex Đại học Việt-Đức (VGU)</b></i> <br>
				Phát triển các công cụ giao dịch tự động với MetaTrader 4 &amp; 5:
				<ul style="margin-top: -30px">
					<li>Làm việc trực tiếp với các trader forex để chuyển các chiến lược thủ công thành hệ thống tự động theo quy tắc (Expert Advisor) và các chỉ báo tùy chỉnh.</li>
					<li>Backtest các chiến lược giao dịch dựa trên dữ liệu thị trường lịch sử để đánh giá lợi nhuận và rủi ro.</li>
				</ul>
			</p>`,

		"languages.body": `
			<li><span class="lang-name">Tiếng Việt</span><span class="lang-level">Bản ngữ</span></li>
			<li><span class="lang-name">Tiếng Anh</span><span class="lang-level">Thành thạo (B2)</span></li>
			<li><span class="lang-name">Tiếng Đức</span><span class="lang-level">Trung cấp (B1)</span></li>`,

		"hobbies.body": `
			<li>Tập luyện thể thao</li>
			<li>Du lịch &amp; Leo núi</li>
			<li>Nấu ăn</li>
			<li>Chơi game hoặc đi chơi với bạn bè</li>`
	}
};
