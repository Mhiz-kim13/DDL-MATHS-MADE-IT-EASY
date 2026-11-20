const topics = [
  { id: "number", icon: "÷", title: "Number & numeration", detail: "Integers, fractions, decimals, indices, standard form and rational numbers." },
  { id: "algebra", icon: "x", title: "Algebra", detail: "Expressions, substitution, equations, formulae and simple inequalities." },
  { id: "geometry", icon: "△", title: "Geometry & shapes", detail: "Angles, polygons, constructions, symmetry and properties of 2D shapes." },
  { id: "measurement", icon: "◱", title: "Measurement", detail: "Perimeter, area, volume, time, money and converting units." },
  { id: "ratio", icon: "⅔", title: "Ratio & proportion", detail: "Ratios, rates, percentages, scale, direct proportion and financial maths." },
  { id: "data", icon: "▥", title: "Statistics & probability", detail: "Tables, charts, averages, range and the chance of simple events." }
];

const topicQuestions = [
  { topic: "number", question: "Evaluate 3/4 + 2/5. Give your answer as a mixed number if needed.", answer: "The lowest common denominator of 4 and 5 is 20.\n3/4 = 15/20 and 2/5 = 8/20.\n15/20 + 8/20 = 23/20 = 1 3/20." },
  { topic: "number", question: "Write 0.00072 in standard form.", answer: "Move the decimal point 4 places to the right to make 7.2. Because the original number is less than 1, the power is negative.\n0.00072 = 7.2 × 10⁻⁴." },
  { topic: "algebra", question: "Simplify 4a + 3b − 2a + 5b.", answer: "Collect like terms: (4a − 2a) + (3b + 5b) = 2a + 8b." },
  { topic: "algebra", question: "Solve 5y − 4 = 21.", answer: "Add 4 to both sides: 5y = 25.\nDivide both sides by 5: y = 5." },
  { topic: "geometry", question: "Two angles in a triangle are 48° and 67°. Find the third angle.", answer: "Angles in a triangle add up to 180°.\nThird angle = 180° − 48° − 67° = 65°." },
  { topic: "geometry", question: "A straight line is split into angles of 124° and x°. Find x.", answer: "Angles on a straight line add up to 180°.\nx = 180° − 124° = 56°." },
  { topic: "measurement", question: "A rectangle is 9 cm long and 4 cm wide. Find its area and perimeter.", answer: "Area = length × width = 9 × 4 = 36 cm².\nPerimeter = 2 × (9 + 4) = 26 cm." },
  { topic: "measurement", question: "A cuboid measures 6 cm by 3 cm by 5 cm. Find its volume.", answer: "Volume of a cuboid = length × width × height.\n6 × 3 × 5 = 90 cm³." },
  { topic: "ratio", question: "Share GH₵72 in the ratio 5:3.", answer: "Total parts = 5 + 3 = 8. Each part = GH₵72 ÷ 8 = GH₵9.\nFirst share = 5 × 9 = GH₵45. Second share = 3 × 9 = GH₵27." },
  { topic: "ratio", question: "Find 12.5% of 160.", answer: "12.5% = 12.5 ÷ 100 = 0.125.\n0.125 × 160 = 20. So 12.5% of 160 is 20." },
  { topic: "data", question: "Find the mean of 4, 7, 9, 10 and 15.", answer: "Add the values: 4 + 7 + 9 + 10 + 15 = 45.\nThere are 5 values, so the mean is 45 ÷ 5 = 9." },
  { topic: "data", question: "A bag contains 4 green and 6 yellow counters. What is the probability of choosing a green counter?", answer: "There are 4 + 6 = 10 counters altogether.\nProbability of green = 4/10 = 2/5." }
];

const examSets = {
  2022: [
    { topic: "Ratio & proportion", question: "Calculate 15% of GH₵240.", answer: "15% = 15/100.\n(15/100) × 240 = 36.\nAnswer: GH₵36." },
    { topic: "Algebra", question: "Solve 3x + 7 = 25.", answer: "Subtract 7 from both sides: 3x = 18.\nDivide by 3: x = 6." },
    { topic: "Measurement", question: "A rectangular garden is 12 m long and 7 m wide. Find its area and perimeter.", answer: "Area = 12 × 7 = 84 m².\nPerimeter = 2(12 + 7) = 38 m." },
    { topic: "Statistics", question: "Find the mean of 6, 8, 10 and 12.", answer: "Sum = 6 + 8 + 10 + 12 = 36.\nMean = 36 ÷ 4 = 9." }
  ],
  2023: [
    { topic: "Number", question: "Evaluate 2/3 + 3/8. Give your answer as a mixed number.", answer: "The lowest common denominator is 24.\n2/3 = 16/24 and 3/8 = 9/24.\n16/24 + 9/24 = 25/24 = 1 1/24." },
    { topic: "Ratio & proportion", question: "Divide 64 in the ratio 3:5.", answer: "Total parts = 3 + 5 = 8; one part = 64 ÷ 8 = 8.\nShares: 3 × 8 = 24 and 5 × 8 = 40." },
    { topic: "Geometry", question: "Two angles of a triangle are 58° and 67°. Find the third angle.", answer: "The angles in a triangle sum to 180°.\n180° − 58° − 67° = 55°." },
    { topic: "Number", question: "Express 0.045 as a fraction in its simplest form.", answer: "0.045 = 45/1000.\nDivide numerator and denominator by 5: 9/200." }
  ],
  2024: [
    { topic: "Ratio & proportion", question: "A bag costs GH₵80. It is discounted by 10%. Find its sale price.", answer: "Discount = 10% of 80 = 0.10 × 80 = GH₵8.\nSale price = 80 − 8 = GH₵72." },
    { topic: "Algebra", question: "Solve 5(x − 2) = 20.", answer: "Divide both sides by 5: x − 2 = 4.\nAdd 2 to both sides: x = 6." },
    { topic: "Measurement", question: "Find the volume of a cuboid measuring 8 cm by 4 cm by 3 cm.", answer: "Volume = length × width × height.\n8 × 4 × 3 = 96 cm³." },
    { topic: "Statistics & probability", question: "A box has 3 red balls and 5 blue balls. What is the probability of picking a red ball?", answer: "Total balls = 3 + 5 = 8.\nProbability of red = 3/8." }
  ],
  2025: [
    { topic: "Number", question: "Find the lowest common multiple (LCM) of 12 and 18.", answer: "Multiples of 12: 12, 24, 36, ...\nMultiples of 18: 18, 36, ...\nThe first common multiple is 36, so LCM = 36." },
    { topic: "Measurement", question: "On a map with scale 1:50,000, two places are 3.2 cm apart. Find the actual distance in kilometres.", answer: "Actual distance = 3.2 × 50,000 = 160,000 cm.\n100,000 cm = 1 km, so 160,000 cm = 1.6 km." },
    { topic: "Ratio & proportion", question: "Find the simple interest on GH₵500 at 8% per annum for 2 years.", answer: "Simple interest = (principal × rate × time) ÷ 100.\n(500 × 8 × 2) ÷ 100 = GH₵80." },
    { topic: "Geometry", question: "Reflect the point (4, −3) in the x-axis. State the image coordinates.", answer: "Reflection in the x-axis keeps the x-coordinate and changes the sign of the y-coordinate.\n(4, −3) maps to (4, 3)." }
  ],
  2026: [
    { topic: "Number", question: "Find the square root of 2025.", answer: "45 × 45 = 2025.\nTherefore, √2025 = 45." },
    { topic: "Algebra", question: "Two-fifths of a number is 18. Find the number.", answer: "Let the number be n. (2/5)n = 18.\nMultiply both sides by 5/2: n = 18 × 5/2 = 45." },
    { topic: "Measurement", question: "Find the circumference of a circle with radius 7 cm. Use π = 22/7.", answer: "Circumference = 2πr.\n2 × (22/7) × 7 = 44 cm." },
    { topic: "Statistics", question: "Find the median of 3, 12, 5, 9 and 7.", answer: "Arrange the values in order: 3, 5, 7, 9, 12.\nThe middle value is 7, so the median is 7." }
  ]
};

const topicGrid = document.querySelector("#topicGrid");
const topicFilter = document.querySelector("#topicFilter");
const practiceList = document.querySelector("#topicQuestions");
const examList = document.querySelector("#examQuestions");
const searchInput = document.querySelector("#questionSearch");
const yearTabs = document.querySelector("#yearTabs");
let selectedYear = 2026;

function renderTopics() {
  topicGrid.innerHTML = topics.map((topic) => {
    const count = topicQuestions.filter((item) => item.topic === topic.id).length;
    return `<article class="topic-card">
      <div class="topic-card-top"><span class="topic-icon" aria-hidden="true">${topic.icon}</span><span class="topic-count">${count} practice questions</span></div>
      <h3>${topic.title}</h3><p>${topic.detail}</p>
      <a class="topic-link" href="#practice" data-topic-link="${topic.id}">Explore topic <span aria-hidden="true">→</span></a>
    </article>`;
  }).join("");
  topicFilter.insertAdjacentHTML("beforeend", topics.map((topic) => `<option value="${topic.id}">${topic.title}</option>`).join(""));
  topicGrid.addEventListener("click", (event) => {
    const link = event.target.closest("[data-topic-link]");
    if (!link) return;
    topicFilter.value = link.dataset.topicLink;
    renderTopicQuestions();
  });
}

function createQuestionCard(item, index, label) {
  const id = `${label}-${index}`;
  return `<article class="question-card">
    <div class="question-main">
      <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="question-content"><span class="question-topic">${item.topic}</span><p class="question-text">${item.question}</p></div>
      <button class="answer-toggle" type="button" aria-expanded="false" aria-controls="answer-${id}">Show answer <span aria-hidden="true">⌄</span></button>
    </div>
    <div class="answer-panel" id="answer-${id}"><p class="answer-label">Worked answer</p><p class="answer-text">${item.answer}</p></div>
  </article>`;
}

function renderTopicQuestions() {
  const filter = topicFilter.value;
  const term = searchInput.value.trim().toLowerCase();
  const matches = topicQuestions.filter((item) => {
    const topic = topics.find((entry) => entry.id === item.topic);
    const matchesTopic = filter === "all" || item.topic === filter;
    const matchesSearch = !term || `${topic.title} ${item.question} ${item.answer}`.toLowerCase().includes(term);
    return matchesTopic && matchesSearch;
  });
  practiceList.innerHTML = matches.map((item, index) => createQuestionCard(item, index, "topic")).join("");
  document.querySelector("#emptyPractice").hidden = matches.length > 0;
  wireAnswerButtons(practiceList);
}

function renderYears() {
  const years = Object.keys(examSets).map(Number);
  yearTabs.innerHTML = years.map((year) => `<button class="year-tab" type="button" role="tab" id="year-${year}" aria-selected="${year === selectedYear}" aria-controls="examQuestions" tabindex="${year === selectedYear ? "0" : "-1"}" data-year="${year}">${year}</button>`).join("");
  yearTabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-year]");
    if (!tab) return;
    selectedYear = Number(tab.dataset.year);
    updateExamQuestions();
  });
  yearTabs.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const currentIndex = years.indexOf(selectedYear);
    selectedYear = years[(currentIndex + direction + years.length) % years.length];
    updateExamQuestions();
    document.querySelector(`#year-${selectedYear}`).focus();
  });
  updateExamQuestions();
}

function updateExamQuestions() {
  yearTabs.querySelectorAll(".year-tab").forEach((tab) => {
    const active = Number(tab.dataset.year) === selectedYear;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  document.querySelector("#yearDescription").textContent = `${selectedYear} practice set · ${examSets[selectedYear].length} original revision questions with worked answers.`;
  examList.innerHTML = examSets[selectedYear].map((item, index) => createQuestionCard(item, index, `exam-${selectedYear}`)).join("");
  document.querySelector("#emptyExam").hidden = examSets[selectedYear].length > 0;
  wireAnswerButtons(examList);
}

function wireAnswerButtons(container) {
  container.querySelectorAll(".answer-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      button.innerHTML = isExpanded ? 'Show answer <span aria-hidden="true">⌄</span>' : 'Hide answer <span aria-hidden="true">⌃</span>';
      document.querySelector(`#${button.getAttribute("aria-controls")}`).classList.toggle("is-open", !isExpanded);
    });
  });
}

topicFilter.addEventListener("change", renderTopicQuestions);
searchInput.addEventListener("input", renderTopicQuestions);
renderTopics();
renderTopicQuestions();
renderYears();

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
});