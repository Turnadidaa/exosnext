// Array of quote objects
let quotes = [
  { id: 0, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.', likes: 0 },
  { id: 1, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.', likes: 0 },
  { id: 2, author: 'Yoda', quote: 'Do, or do not. There is no try.', likes: 0 },
  { id: 3, author: 'Steve Jobs', quote: 'Stay hungry, stay foolish.', likes: 0 },
  { id: 4, author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', likes: 0 }
];

let lastQuoteId = null;
let currentQuoteIndex = null;
let filteredQuotes = [];
let filteredIndex = 0;

const quoteSection = document.getElementById('quoteSection');
const generateBtn = document.getElementById('generateBtn');
const charWithSpacesBtn = document.getElementById('charWithSpacesBtn');
const charNoSpacesBtn = document.getElementById('charNoSpacesBtn');
const wordCountBtn = document.getElementById('wordCountBtn');
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const addQuoteForm = document.getElementById('addQuoteForm');
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteAuthor = document.getElementById('newQuoteAuthor');
const filterForm = document.getElementById('filterForm');
const filterAuthor = document.getElementById('filterAuthor');
const navBtns = document.getElementById('navBtns');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayQuote(quoteObj) {
  quoteSection.innerHTML = `<div>"${quoteObj.quote}"</div><div class="author">- ${quoteObj.author}</div>`;
  likeCount.textContent = quoteObj.likes;
  currentQuoteIndex = quoteObj.id;
  // Animation fadeIn
  quoteSection.style.animation = 'none';
  void quoteSection.offsetWidth; // trigger reflow
  quoteSection.style.animation = null;
}

function getRandomQuote() {
  if (quotes.length === 0) return null;
  let idx;
  do {
    idx = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && quotes[idx].id === lastQuoteId);
  lastQuoteId = quotes[idx].id;
  return quotes[idx];
}

generateBtn.addEventListener('click', () => {
  navBtns.style.display = 'none';
  const quoteObj = getRandomQuote();
  if (quoteObj) displayQuote(quoteObj);
});

charWithSpacesBtn.addEventListener('click', () => {
  if (currentQuoteIndex !== null) {
    alert(`Characters (with spaces): ${quotes[currentQuoteIndex].quote.length}`);
  }
});

charNoSpacesBtn.addEventListener('click', () => {
  if (currentQuoteIndex !== null) {
    const count = quotes[currentQuoteIndex].quote.replace(/\s/g, '').length;
    alert(`Characters (no spaces): ${count}`);
  }
});

wordCountBtn.addEventListener('click', () => {
  if (currentQuoteIndex !== null) {
    const count = quotes[currentQuoteIndex].quote.trim().split(/\s+/).length;
    alert(`Word count: ${count}`);
  }
});

likeBtn.addEventListener('click', () => {
  if (currentQuoteIndex !== null) {
    quotes[currentQuoteIndex].likes++;
    likeCount.textContent = quotes[currentQuoteIndex].likes;
    likeBtn.classList.add('liked');
    setTimeout(() => likeBtn.classList.remove('liked'), 400);
  }
});

addQuoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = newQuoteText.value.trim();
  const author = newQuoteAuthor.value.trim();
  if (text && author) {
    const newId = quotes.length;
    quotes.push({ id: newId, author, quote: text, likes: 0 });
    newQuoteText.value = '';
    newQuoteAuthor.value = '';
    alert('Quote added!');
  }
});

filterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = filterAuthor.value.trim().toLowerCase();
  filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
  filteredIndex = 0;
  if (filteredQuotes.length > 0) {
    displayQuote(filteredQuotes[filteredIndex]);
    navBtns.style.display = filteredQuotes.length > 1 ? 'flex' : 'none';
  } else {
    quoteSection.innerHTML = '<div>No quotes found for this author.</div>';
    navBtns.style.display = 'none';
  }
});

prevBtn.addEventListener('click', () => {
  if (filteredQuotes.length > 0) {
    filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[filteredIndex]);
  }
});

nextBtn.addEventListener('click', () => {
  if (filteredQuotes.length > 0) {
    filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
    displayQuote(filteredQuotes[filteredIndex]);
  }
});

// Display a random quote on load
document.addEventListener('DOMContentLoaded', () => {
  const quoteObj = getRandomQuote();
  if (quoteObj) displayQuote(quoteObj);
}); 