// lessons.js

let currentCategory = "";
let currentSortOrder = "default";

// Simulated dynamic progress update using localStorage.
// "completedLessons" is a comma-separated list of lesson IDs that the user has completed.
function updateProgress() {
  const progressBar = document.querySelector(".bg-blue-600");
  const currentLevelText = document.getElementById("currentLevelText");
  const lessonsCompletedText = document.getElementById("lessonsCompletedText");

  const completedStr = localStorage.getItem("completedLessons");
  let completedCount = 0;
  if (completedStr) {
    const completedArr = completedStr.split(",").filter(id => id.trim() !== "");
    completedCount = completedArr.length;
  }
  const totalLessons = lessons.length;
  const percentage = (completedCount / totalLessons) * 100;
  progressBar.style.width = percentage + "%";
  lessonsCompletedText.innerText = `${completedCount}/${totalLessons}`;

  let level = "Beginner";
  if (percentage >= 66) {
    level = "Advanced";
  } else if (percentage >= 33) {
    level = "Intermediate";
  }
  currentLevelText.innerText = level;
}

// Define lesson data.
const lessons = [
  // Fundamentals
  { id: "home-row", title: "Home Row Position", description: "Learn the basic finger positions on A, S, D, F, J, K, L, ;", category: "Fundamentals", level: "Required", unlocked: true, rating: 4.5 },
  { id: "home-row-test", title: "Home Row Test", description: "Test your accuracy and speed on the home row keys.", category: "Test", level: "Required", unlocked: false, rating: 4.0 },
  { id: "home-row-advanced", title: "Home Row Advanced", description: "Advance your home row techniques with additional drills.", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.2 },
  
  { id: "left-hand-row-1", title: "Left Hand: QWER", description: "Master the first set of left-hand letters (Q, W, E, R).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.1 },
  { id: "left-hand-row-2", title: "Left Hand: ZXCV", description: "Master the second set of left-hand letters (Z, X, C, V).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.1 },
  { id: "left-hand-test", title: "Left Hand Test", description: "Test your typing speed and accuracy with left-hand keys.", category: "Test", level: "Required", unlocked: false, rating: 4.0 },
  
  { id: "right-hand-row-1", title: "Right Hand: UIOP", description: "Master the first set of right-hand letters (U, I, O, P).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.1 },
  { id: "right-hand-row-2", title: "Right Hand: MNB", description: "Master the second set of right-hand letters (M, N, B).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.1 },
  { id: "right-hand-test", title: "Right Hand Test", description: "Test your typing accuracy with right-hand keys.", category: "Test", level: "Required", unlocked: false, rating: 4.0 },
  
  { id: "number-keys-1", title: "Number Row (1-5)", description: "Learn to type numbers 1 to 5 efficiently.", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.2 },
  { id: "number-keys-2", title: "Number Row (6-0)", description: "Learn to type numbers 6 to 0 efficiently.", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.2 },
  { id: "number-row-test", title: "Number Row Test", description: "Test your typing skills on the number row.", category: "Test", level: "Required", unlocked: false, rating: 4.0 },
  
  { id: "punctuation-1", title: "Basic Punctuation", description: "Learn to type common punctuation marks (.,?!).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.2 },
  { id: "punctuation-2", title: "Advanced Punctuation", description: "Learn more punctuation marks (;:'\"-).", category: "Fundamentals", level: "Required", unlocked: false, rating: 4.3 },
  { id: "punctuation-test", title: "Punctuation Test", description: "Test your punctuation typing accuracy.", category: "Test", level: "Required", unlocked: false, rating: 4.0 },
  
  // Programming Focus
  { id: "symbols-1", title: "Common Symbols ({}[])", description: "Learn to type curly and square brackets.", category: "Programming", level: "Intermediate", unlocked: false, rating: 4.0 },
  { id: "symbols-2", title: "Common Symbols (@#$%^&*)", description: "Master symbols commonly used in coding.", category: "Programming", level: "Intermediate", unlocked: false, rating: 4.0 },
  { id: "symbols-test", title: "Symbols Test", description: "Test your accuracy with programming symbols.", category: "Test", level: "Intermediate", unlocked: false, rating: 4.0 },
  
  { id: "js-syntax", title: "JavaScript Syntax", description: "Practice with real JavaScript code.", category: "Programming", level: "Intermediate", unlocked: false, rating: 4.1 },
  { id: "python-syntax", title: "Python Syntax", description: "Practice with real Python code.", category: "Programming", level: "Intermediate", unlocked: false, rating: 4.1 },
  { id: "sql-basics", title: "SQL Basics", description: "Learn the fundamentals of SQL queries.", category: "Programming", level: "Intermediate", unlocked: false, rating: 4.0 },
  { id: "programming-test", title: "Programming Typing Test", description: "Test your coding-related typing speed.", category: "Test", level: "Intermediate", unlocked: false, rating: 4.0 },
  
  // Advanced Techniques
  { id: "speed-techniques", title: "Speed Techniques", description: "Advanced typing speed optimization strategies.", category: "Advanced", level: "Expert", unlocked: false, rating: 4.3 },
  { id: "code-challenges", title: "Code Challenges", description: "Tackle real-world programming challenges to boost your typing speed.", category: "Advanced", level: "Expert", unlocked: false, rating: 4.4 },
  { id: "speed-test", title: "Speed Test", description: "Test your maximum typing speed with challenging drills.", category: "Advanced", level: "Expert", unlocked: false, rating: 4.3 },
  { id: "function-keys", title: "Function Keys", description: "Improve your efficiency by mastering function keys.", category: "Advanced", level: "Expert", unlocked: false, rating: 4.2 },
  { id: "shortcut-keys", title: "Shortcut Keys", description: "Learn common keyboard shortcuts to boost productivity.", category: "Advanced", level: "Expert", unlocked: false, rating: 4.2 }
];

// Reassign "Test" lessons to their main category.
lessons.forEach(lesson => {
  if (lesson.category === "Test") {
    if (lesson.id.includes("home-row") || lesson.id.includes("left-hand") || lesson.id.includes("right-hand") ||
        lesson.id.includes("number-row") || lesson.id.includes("punctuation")) {
      lesson.category = "Fundamentals";
    } else if (lesson.id.includes("symbols") || lesson.id.includes("programming")) {
      lesson.category = "Programming";
    }
  }
});

function groupLessonsByCategory(lessonsArray) {
  return lessonsArray.reduce((groups, lesson) => {
    if (!groups[lesson.category]) {
      groups[lesson.category] = [];
    }
    groups[lesson.category].push(lesson);
    return groups;
  }, {});
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// For autosuggest only.
function highlightText(text, query) {
  if (!query) return text;
  const escapedQuery = escapeRegExp(query);
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function renderSuggestions(query) {
  const suggestionContainer = document.getElementById("suggestions");
  suggestionContainer.innerHTML = "";
  if (!query) {
    suggestionContainer.classList.add("hidden");
    return;
  }
  const lowerQuery = query.toLowerCase();
  const suggestions = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(lowerQuery) ||
    lesson.description.toLowerCase().includes(lowerQuery) ||
    lesson.category.toLowerCase().includes(lowerQuery)
  ).slice(0, 5);
  
  suggestions.forEach(suggestion => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerHTML = highlightText(suggestion.title, query);
    div.addEventListener("click", () => {
      document.getElementById("lessonSearch").value = suggestion.title;
      renderLessons(suggestion.title);
      suggestionContainer.classList.add("hidden");
    });
    suggestionContainer.appendChild(div);
  });
  suggestionContainer.classList.remove("hidden");
}

function setupDropdown(dropdownId, callback) {
  const dropdown = document.getElementById(dropdownId);
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  dropdown.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const value = item.getAttribute("data-value");
      toggle.innerHTML = `${item.innerText} <i class="fas fa-chevron-down ml-2"></i>`;
      menu.classList.remove("show");
      callback(value);
    });
  });

  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
}

setupDropdown("categoryDropdown", (value) => {
  currentCategory = value;
  const searchVal = document.getElementById("lessonSearch").value.trim();
  renderLessons(searchVal);
  renderSuggestions(searchVal);
});
setupDropdown("sortDropdown", (value) => {
  currentSortOrder = value;
  const searchVal = document.getElementById("lessonSearch").value.trim();
  renderLessons(searchVal);
  renderSuggestions(searchVal);
});

function openModal(lesson) {
  const modal = document.getElementById("lessonModal");
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">${lesson.title}</h2>
    <p class="mb-4">${lesson.description}</p>
    <p class="mb-4 text-sm text-gray-400">Category: ${lesson.category} | Level: ${lesson.level} | Rating: ${lesson.rating} ★</p>
    <p class="mb-4">This is a preview of the lesson. Click "View Full Lesson" to continue.</p>
  `;
  modal.classList.add("active");
  document.getElementById("viewFullLesson").onclick = () => {
    window.location.href = `lesson-detail.html?lesson=${lesson.id}`;
  };
}

function closeModal() {
  document.getElementById("lessonModal").classList.remove("active");
}
document.querySelector("#lessonModal .close-modal").addEventListener("click", closeModal);
document.getElementById("lessonModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

function renderLessons(filter = "") {
  const container = document.getElementById("lessonsContainer");
  container.innerHTML = "";
  
  const searchTerm = filter.trim().toLowerCase();
  
  let filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm) ||
    lesson.description.toLowerCase().includes(searchTerm) ||
    lesson.category.toLowerCase().includes(searchTerm)
  );
  
  if (currentCategory) {
    filteredLessons = filteredLessons.filter(lesson => lesson.category.toLowerCase() === currentCategory.toLowerCase());
  }
  
  if (currentSortOrder === "alphabetical") {
    filteredLessons.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSortOrder === "rating") {
    filteredLessons.sort((a, b) => b.rating - a.rating);
  }
  
  if (filteredLessons.length === 0) {
    container.innerHTML = `<div class="flex flex-col items-center justify-center h-64">
                              <i class="fas fa-search text-5xl text-gray-400 mb-4"></i>
                              <p class="text-center text-gray-400 text-xl">No results found.</p>
                            </div>`;
    return;
  }
  
  const grouped = groupLessonsByCategory(filteredLessons);
  const categoryOrder = ["Fundamentals", "Programming", "Advanced"];
  
  categoryOrder.forEach(category => {
    const group = grouped[category];
    if (group && group.length > 0) {
      const header = document.createElement("h2");
      header.className = "text-2xl font-bold mt-8 mb-4";
      header.innerText = category;
      container.appendChild(header);
      
      const grid = document.createElement("div");
      grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8";
      
      group.forEach(lesson => {
        let labelClass = "";
        const level = lesson.level.toLowerCase();
        if (level === "required") {
          labelClass = "label-required";
        } else if (level === "intermediate") {
          labelClass = "label-intermediate";
        } else if (level === "expert") {
          labelClass = "label-expert";
        }
        
        let testBadge = "";
        if (lesson.id.includes("test")) {
          testBadge = `<span class="ml-2 px-2 py-1 text-xs font-bold text-green-300 border border-green-300 rounded">TEST</span>`;
        }
        
        const iconHTML = lesson.unlocked
          ? `<i class="fas fa-play text-blue-400"></i>`
          : `<i class="fas fa-lock text-gray-500"></i>`;
        
        const cardTitle = lesson.title;
        
        const card = document.createElement("div");
        card.className = "block lesson-card glass p-4 cursor-pointer";
        if (!lesson.unlocked) card.classList.add("opacity-75");
        if (lesson.id.includes("test")) card.classList.add("test-card");
        
        card.innerHTML = `
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold">${cardTitle}${testBadge}</h3>
            ${iconHTML}
          </div>
          <p class="text-sm text-gray-400">${lesson.description}</p>
          <div class="mt-2 flex items-center justify-between text-sm">
            <div class="${labelClass}">${lesson.level}</div>
            <div class="flex items-center text-yellow-400">
              ${"★".repeat(Math.round(lesson.rating))} 
              <span class="ml-1 text-gray-400 text-xs">(${lesson.rating})</span>
            </div>
          </div>
        `;
        
        const favIcon = document.createElement("span");
        favIcon.className = "ml-2 cursor-pointer text-gray-500";
        favIcon.innerHTML = "&#9734;";
        if (localStorage.getItem("fav_" + lesson.id) === "true") {
          favIcon.innerHTML = "&#9733;";
          favIcon.classList.remove("text-gray-500");
          favIcon.classList.add("text-yellow-400");
        }
        favIcon.addEventListener("click", (e) => {
          e.stopPropagation();
          if (localStorage.getItem("fav_" + lesson.id) === "true") {
            localStorage.removeItem("fav_" + lesson.id);
            favIcon.innerHTML = "&#9734;";
            favIcon.classList.remove("text-yellow-400");
            favIcon.classList.add("text-gray-500");
          } else {
            localStorage.setItem("fav_" + lesson.id, "true");
            favIcon.innerHTML = "&#9733;";
            favIcon.classList.remove("text-gray-500");
            favIcon.classList.add("text-yellow-400");
          }
        });
        card.querySelector("h3").appendChild(favIcon);
        
        card.addEventListener("click", () => {
          openModal(lesson);
        });
        grid.appendChild(card);
      });
      
      container.appendChild(grid);
    }
  });
  updateProgress();
}

renderLessons();

const searchInput = document.getElementById("lessonSearch");
searchInput.addEventListener("input", function () {
  const query = this.value;
  renderLessons(query);
  renderSuggestions(query);
});

// Dynamic progress update function.
function updateProgress() {
  const progressBar = document.querySelector(".bg-blue-600");
  const currentLevelText = document.getElementById("currentLevelText");
  const lessonsCompletedText = document.getElementById("lessonsCompletedText");

  const completedStr = localStorage.getItem("completedLessons");
  let completedCount = 0;
  if (completedStr) {
    const completedArr = completedStr.split(",").filter(id => id.trim() !== "");
    completedCount = completedArr.length;
  }
  const totalLessons = lessons.length;
  const percentage = (completedCount / totalLessons) * 100;
  progressBar.style.width = percentage + "%";
  lessonsCompletedText.innerText = `${completedCount}/${totalLessons}`;

  let level = "Beginner";
  if (percentage >= 66) {
    level = "Advanced";
  } else if (percentage >= 33) {
    level = "Intermediate";
  }
  currentLevelText.innerText = level;
}
