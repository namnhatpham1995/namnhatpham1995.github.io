# Portfolio writing guide

Keep the network map, sections, and visual identity. Make the content inside each window easy to skim.

## Evidence behind the edit

- [Harvard MCS: impactful résumés and cover letters](https://careerservices.fas.harvard.edu/resources/hes-create-impactful-resumes-and-cover-letters/) recommends specific, active, factual, direct language, demonstrated results, and consistent emphasis.
- [Nielsen Norman Group: How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) supports concise, scannable, objective text with highlighted keywords and the conclusion first. This is web-usability research, not a claim about how many seconds every recruiter spends on a CV.
- [Official German spelling rules, §55](https://grammis.ids-mannheim.de/rechtschreibung/6193) require capitalization of nouns. Display labels follow German spelling; code identifiers, URLs, command flags, and official library names retain their exact case.

## Editorial rules

1. Lead with a concrete contribution and supported result. Example: “Built microservice-deployer in Bash; adopted across teams as an official Cumulocity deployment tool.”
2. Use one idea per bullet. Avoid generic claims such as “passionate,” “results-driven,” or “leveraged cutting-edge technologies.” Name the actual tool, action, and scope instead.
3. Show up to three bullets per role and two per project. Keep additional facts and the full stack in a native, keyboard-accessible Technical details disclosure.
4. Show the short introduction in full immediately. Do not make a reader wait for typing to finish.
5. Bold a few proof points. Use italics for project-role context. Underline real links, so emphasis does not masquerade as a link. Existing section icons and disclosure chevrons support navigation; decorative achievement icons are unnecessary.
6. Keep facts qualified: “nearly half” stays “nearly half”; pre-production is not production; company-wide tool adoption does not imply sole ownership of a team migration. Do not invent percentages or performance improvements.
7. Keep AI-assisted implementation and the architect/product-owner role explicit. Natural writing comes from precise, honest claims, not concealing the tools used or promising an AI-detector score.
8. Apply equivalent meaning across English, German, and Vietnamese. Keep employment dates, institutions, certificates, links, work-location conditions, and all named technologies intact.

## Content and rendering

CV facts remain plain text in `src/i18n/content/{en,de,vi}.ts` and remain in the exported assistant biography, including collapsed technical details. Optional `emphasis` phrases are escaped and rendered as semantic `<strong>` elements; no raw HTML is accepted in the copy. `roleNote` describes a project's ownership or learning context.
