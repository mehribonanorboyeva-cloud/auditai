// Fake database 😄
let user = {
    username: "admin",
    password: "1234"
};

function login(){
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if(u === user.username && p === user.password){
        msg.innerHTML = "Muvaffaqiyatli login!";
        document.getElementById("authBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }else{
        msg.innerHTML = "Username yoki parol xato!";
        msg.style.color="red";
    }
}

function analyze(){
    let file = document.getElementById("fileInput").files[0];
    let result = document.getElementById("result");

    if(!file){
        result.innerHTML = "Iltimos fayl yuklang!";
        return;
    }

    result.innerHTML = "AI analiz qilmoqda...";

    setTimeout(()=>{
        result.innerHTML = `
        <div class="card" style="margin:auto;">
            <h3>Audit Natijasi</h3>
            <p>⚠ 3 ta xato topildi</p>
            <p>✔ Risk darajasi: O‘rtacha</p>
            <p>💡 Tavsiya: Xarajatlarni tekshirish</p>
        </div>
        `;
    },2000);
}
<script>
const files = [
  {id:'file1', name:'https://example.com', date:'2026-02-05', details:'Xatolar: 2, Tavsiyalar: 3, Aniqlik: 95%'},
  {id:'file2', name:'https://test.com', date:'2026-02-06', details:'Xatolar: 1, Tavsiyalar: 2, Aniqlik: 97%'},
];

// Search
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  files.filter(f => f.name.toLowerCase().includes(query)).forEach(f => {
    const div = document.createElement('div');
    div.className = 'result-card';
    div.innerHTML = `<h4>${f.name}</h4><p>Audit sanasi: ${f.date}</p>`;
    div.onclick = () => showDetails(f.id);
    searchResults.appendChild(div);
  });
});

// Modal
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');

function showDetails(id){
  const file = files.find(f=>f.id===id);
  modalTitle.textContent = file.name;
  modalDetails.textContent = file.details;
  modal.style.display = 'flex';
}

function closeModal(){
  modal.style.display = 'none';
}
</script>
// Audit qilingan fayllar
const files = [
  {id:'file1', name:'https://example.com', date:'2026-02-05', cyber:'Ha', problems:'2 xato, 3 tavsiya', stats:'95% aniqlik, 2s javob', level:'Yuqori', details:'Fayl muvaffaqiyatli audit qilindi.'},
  {id:'file2', name:'https://test.com', date:'2026-02-06', cyber:'Yo‘q', problems:'5 xato, 2 tavsiya', stats:'90% aniqlik, 3s javob', level:'O‘rta', details:'Faylda xatolar mavjud, tavsiyalar kiritildi.'},
  {id:'file3', name:'https://sample.org', date:'2026-02-07', cyber:'Ha', problems:'1 xato, 1 tavsiya', stats:'98% aniqlik, 1.5s javob', level:'Yuqori', details:'Fayl mukammal auditdan o‘tdi.'},
  {id:'file4', name:'https://demo.net', date:'2026-02-08', cyber:'Yo‘q', problems:'3 xato, 4 tavsiya', stats:'88% aniqlik, 3.2s javob', level:'Past', details:'Ba’zi muammolar mavjud, takomillashtirish kerak.'}
];

// Qidiruv
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  
  // Maksimal 3 ta natija
  files.filter(f => f.name.toLowerCase().includes(query))
       .slice(0,3)
       .forEach(f => {
         const div = document.createElement('div');
         div.className = 'result-card';
         div.innerHTML = `<h4>${f.name}</h4><p>Audit sanasi: ${f.date}</p>`;
         div.onclick = () => showDetails(f.id);
         searchResults.appendChild(div);
       });
});

// Modal
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');
const modalCyber = document.getElementById('modalCyber');
const modalProblems = document.getElementById('modalProblems');
const modalStats = document.getElementById('modalStats');
const modalLevel = document.getElementById('modalLevel');

function showDetails(id){
  const file = files.find(f=>f.id===id);
  modalTitle.textContent = file.name;
  modalDetails.textContent = file.details;
  modalCyber.textContent = `Kiberxavfsizlik: ${file.cyber}`;
  modalProblems.textContent = `Muammolar: ${file.problems}`;
  modalStats.textContent = `Aniqlik & Javob vaqti: ${file.stats}`;
  modalLevel.textContent = `Xavfsizlik darajasi: ${file.level}`;
  modal.style.display = 'flex';
}

function closeModal(){
  modal.style.display = 'none';
}
<section id="mvp">
  <h2 class="section-title">MVP – Minimal Ishlaydigan Mahsulot</h2>

  <!-- 1. MVP kartochkalari -->
  <div class="mvp-grid">
    <!-- 1,2,3,4,5 kartochkalar shu yerga -->
  </div>

  <!-- 2. Qidiruv bo'limi -->
  <div class="search-section">
    <h3>Audit qilingan fayllarni qidirish</h3>
    <input type="text" id="searchInput" placeholder="Fayl yoki URL kiriting..." />
  </div>

  <div class="search-results" id="searchResults"></div>

  <!-- 3. Modal -->
  <div id="fileModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h3 id="modalTitle"></h3>
      <p id="modalDetails"></p>
      <p id="modalCyber"></p>
      <p id="modalProblems"></p>
      <p id="modalStats"></p>
      <p id="modalLevel"></p>
    </div>
  </div>
</section>
const modal = document.getElementById('fileModal');
const cyberBar = document.getElementById('cyberBar');

function showDetails(){
  modal.style.display = 'flex';
  // Kiberxavfsizlik foizini animatsion ko'rsatish
  setTimeout(()=>{ cyberBar.style.width = '85%'; }, 100);
}

function closeModal(){
  modal.style.display = 'none';
  cyberBar.style.width = '0';
}
// Sahifa yuklanganda animatsion progress bar
window.addEventListener('load', () => {
  document.querySelectorAll('.stats-fill').forEach(bar => {
    const width = bar.textContent.includes('%') ? bar.textContent : bar.style.width;
    bar.style.width = width;
  });
});
function toggleChat(){
  const chat=document.getElementById("chatWindow");
  chat.style.display = chat.style.display==="flex"?"none":"flex";
}

function quickQuestion(text){
  document.getElementById("userInput").value=text;
  sendMessage();
}

function sendMessage(){
  const input=document.getElementById("userInput");
  const msg=input.value.toLowerCase();
  addMessage("Siz",input.value);

  let reply="Rahmat! 😊";

  if(msg.includes("auditai"))
    reply="AuditAI — fayllarni AI yordamida kiberxavfsizlik tekshiruv tizimi.";
  else if(msg.includes("qanday ishlaydi"))
    reply="Fayl yuklanadi → AI tekshiradi → risk va tavsiyalar chiqariladi.";
  else if(msg.includes("mvp"))
    reply="MVP — ishlaydigan minimal versiya. Bizda fayl audit tizimi ishlaydi.";
  else if(msg.includes("daromad"))
    reply="Biz kompaniyalarga obuna asosida xizmat ko‘rsatamiz.";
  else if(msg.includes("jamoa"))
    reply="Biz 4 nafar SDTU talabalari jamoasimiz.";

  setTimeout(()=>addMessage("Bot",reply),500);
  input.value="";
}

function addMessage(sender,text){
  const chat=document.getElementById("chatMessages");
  chat.innerHTML+=`<p><b>${sender}:</b> ${text}</p>`;
}
function startScan(){
    document.getElementById("uploadBox").classList.add("hidden");
    document.getElementById("loadingBox").classList.remove("hidden");

    // Fake AI scanning ⏳
    setTimeout(()=>{
        document.getElementById("loadingBox").classList.add("hidden");
        document.getElementById("successBox").classList.remove("hidden");
    }, 3000);
}

function showReport(){
    window.location.href="report.html";
}
