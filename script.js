const REGIONS = {
    "TP.HCM": { emoji: "🏙️" },
    "Vũng Tàu": { emoji: "🏖️" },
    "Hà Nội": { emoji: "🏛️" },
    "Đà Nẵng": { emoji: "⛰️" },
};

let foods = [
    { id: 1, name: "Mỳ cay Sasin", type: "Bún - Mỳ - Phở", price: "50-60k", emoji: "🍜", region: "TP.HCM", address: "18 Hậu Giang, P.Bình Tây" },
    { id: 2, name: "Nhà Bún Đậu", type: "Bún - Mỳ - Phở", price: "120-140k", emoji: "🦐", region: "TP.HCM", address: "335 Phạm Văn Chí, P.Bình Tiên" },
    { id: 3, name: "Jollibee", type: "Gà rán", price: "100-200k", emoji: "🍗", region: "TP.HCM", address: "704 Hậu Giang, P.Phú Lâm" },
    { id: 4, name: "Lotteria", type: "Gà rán", price: "100-200k", emoji: "🍗", region: "TP.HCM", address: "801 Hồng Bàng, P.Bình Tây" },
    { id: 5, name: "Ốc, Hàu nướng anh Phúc", type: "Hải sản", price: "200-300k", emoji: "🦪", region: "TP.HCM", address: "153 Nguyễn Văn Luông, P.Phú Lâm" },
    { id: 6, name: "Dooki", type: "Lẩu", price: "150-300k", emoji: "🥘", region: "TP.HCM", address: "Satramart Võ Văn Kiệt" },
    { id: 7, name: "Joseon", type: "Lẩu", price: "150-300k", emoji: "🥘", region: "TP.HCM", address: "BigC GO An Lạc" },
    { id: 8, name: "Lẩu bò chà bá", type: "Lẩu", price: "150-300k", emoji: "🥩", region: "TP.HCM", address: "Hẻm 178 Hậu Giang, P.Bình Tây" },
    { id: 9, name: "Buffet Minh cua", type: "Buffet", price: "300-600k", emoji: "🍝", region: "TP.HCM", address: "99 Kinh Dương Vương, P.Phú Lâm" },
    { id: 10, name: "TiQi Buffet cá viên", type: "Buffet", price: "90-180k", emoji: "🍢", region: "TP.HCM", address: "632 Lũy Bán Bích, P.Tân Phú" },
    { id: 11, name: "Buffet Sushi Kinimoto", type: "Buffet", price: "200-400k", emoji: "🍣", region: "TP.HCM", address: "302 Tên lửa, P.Bình Tân" },
    { id: 12, name: "Mỳ Udon Marukame", type: "Bún - Mỳ - Phở", price: "200-400k", emoji: "🍜", region: "TP.HCM", address: "Aeon Bình Tân" },
    { id: 13, name: "Pizza Domino", type: "Pizza", price: "200-400k", emoji: "🍕", region: "TP.HCM", address: "251 Hậu Giang, P.Bình Tây" },
    { id: 14, name: "Ăn vặt cô Thủy", type: "Ăn vặt", price: "100-200k", emoji: "🍥", region: "TP.HCM", address: "57 Lê Thúc Hoạch, P.Phú Thọ Hoà" },
    { id: 15, name: "Bánh khọt 56", type: "Ăn vặt", price: "80-160k", emoji: "🫕", region: "Vũng Tàu", address: "56 Lê Lợi, Vũng Tàu" },
    { id: 16, name: "Lẩu cá đuối", type: "Lẩu", price: "100-200k", emoji: "🥘", region: "Vũng Tàu", address: "169 Nam Kỳ Khởi Nghĩa, Vũng Tàu" },
    { id: 17, name: "Ốc nướng nhà Chang", type: "Hải sản", price: "40-200k", emoji: "🐚", region: "Vũng Tàu", address: "126 Nam Kỳ Khởi Nghĩa, Vũng Tàu" },
    { id: 18, name: "Bún riêu cô Hạnh", type: "Bún - Mỳ - Phở", price: "45-75k", emoji: "🍜", region: "Vũng Tàu", address: "115/10 Lê Lợi, Vũng Tàu" },
    { id: 19, name: "Hủ Tiếu Quán", type: "Bún - Mỳ - Phở", price: "50-100k", emoji: "🍜", region: "Vũng Tàu", address: "241 Lê Hồng Phong, Vũng Tàu" },
    { id: 20, name: "Quán cơm A Tố", type: "Khác", price: "30-60k", emoji: "🍛", region: "Vũng Tàu", address: "443 Trương Công Định, Vũng Tàu" },
    { id: 21, name: "Bánh bông lan Nguyễn Hoàng Bakery", type: "Ăn vặt", price: "50-100k", emoji: "🍰", region: "Vũng Tàu", address: "67 Nam Kỳ Khởi Nghĩa, Vũng Tàu" },
    { id: 22, name: "Cơm gà Thạch Lam", type: "Khác", price: "45-90k", emoji: "🍛", region: "TP.HCM", address: "277D Kênh Tân Hóa, P.Tân Phú" },
    { id: 23, name: "Gu Coffee", type: "Nước", price: "35-60k", emoji: "☕️", region: "Vũng Tàu", address: "103 Trần Phú, Vũng Tàu" },
    { id: 24, name: "The MayDay Tea", type: "Nước", price: "25-40k", emoji: "☕️", region: "TP.HCM", address: "320 Trịnh Đình Trọng, Tân Phú" },
    { id: 25, name: "Bột chiên", type: "Ăn vặt", price: "30-50k", emoji: "🍘", region: "TP.HCM", address: "Góc đường đối diện siêu thị Metro" },
    { id: 26, name: "Bánh tráng trộn siêu đông", type: "Ăn vặt", price: "20-30k", emoji: "🥢", region: "TP.HCM", address: "..." },
    { id: 27, name: "Bánh trứng cút nướng", type: "Ăn vặt", price: "20-50k", emoji: "🥚", region: "TP.HCM", address: "..." },
    { id: 28, name: "Lạp xưởng nướng đá", type: "Ăn vặt", price: "30-45k", emoji: "🌭", region: "TP.HCM", address: "..." },
    { id: 29, name: "Bắp xào", type: "Ăn vặt", price: "30-50k", emoji: "🌽", region: "TP.HCM", address: "..." },
    { id: 30, name: "Da gà chiên", type: "Ăn vặt", price: "30-50k", emoji: "🐥", region: "TP.HCM", address: "..." },
];

let nextId = 31;
let activeRegion = "all";
let activeType = "all";
let searchQuery = "";
let highlightedId = null;
let randomRegion = "all";

function loadData() {
    try {
        const saved = localStorage.getItem("an-gi-day-foods");
        if (saved) foods = JSON.parse(saved);
        const savedId = localStorage.getItem("an-gi-day-nextid");
        if (savedId) nextId = parseInt(savedId);
    } catch (e) { }
}

function saveData() {
    try {
        localStorage.setItem("an-gi-day-foods", JSON.stringify(foods));
        localStorage.setItem("an-gi-day-nextid", String(nextId));
    } catch (e) { }
}

function getFiltered() {
    return foods.filter(f => {
        const regionOk = activeRegion === "all" || f.region === activeRegion;
        const typeOk = activeType === "all" || f.type === activeType;
        const q = searchQuery.toLowerCase();
        const searchOk = !q || f.name.toLowerCase().includes(q) || f.type.toLowerCase().includes(q) || f.region.toLowerCase().includes(q) || (f.address || "").toLowerCase().includes(q);
        return regionOk && typeOk && searchOk;
    });
}

function getTypes() {
    const source = activeRegion === "all" ? foods : foods.filter(f => f.region === activeRegion);
    return [...new Set(source.map(f => f.type))].sort();
}

function renderTabs() {
    const el = document.getElementById("tabsScroll");
    const tabs = [
        { key: "all", label: "Tất cả", emoji: "🗺️" },
        ...Object.entries(REGIONS).map(([k, v]) => ({ key: k, label: k, emoji: v.emoji })),
    ];
    el.innerHTML = tabs.map(t => `
    <button class="tab ${activeRegion === t.key ? 'active' : ''}" onclick="selectRegion('${t.key}')">
      ${t.emoji} ${t.label}
    </button>
  `).join("");
}

function renderChips() {
    const el = document.getElementById("chipsScroll");
    const types = getTypes();
    el.innerHTML = `<button class="chip ${activeType === 'all' ? 'active' : ''}" onclick="selectType('all')">Tất cả</button>` +
        types.map(t => `<button class="chip ${activeType === t ? 'active' : ''}" onclick="selectType('${t}')">${t}</button>`).join("");
}

function renderContent() {
    const filtered = getFiltered();
    const el = document.getElementById("foodContent");
    const countEl = document.getElementById("sectionCount");
    const titleEl = document.getElementById("sectionTitle");

    countEl.textContent = `${filtered.length} món`;

    const regionInfo = REGIONS[activeRegion];
    if (activeRegion === "all") {
        titleEl.innerHTML = `🗺️ Tất cả`;
    } else {
        titleEl.innerHTML = `${regionInfo.emoji} ${activeRegion}`;
    }

    if (!filtered.length) {
        el.innerHTML = `<div class="food-grid"><div class="empty">
      <div class="empty-icon">🤔</div>
      <div class="empty-text">Không tìm thấy món nào</div>
      <div class="empty-sub">Thử thay đổi bộ lọc hoặc thêm món mới</div>
    </div></div>`;
        return;
    }

    // Group by region if "all"
    if (activeRegion === "all" && !searchQuery && activeType === "all") {
        const grouped = {};
        filtered.forEach(f => {
            if (!grouped[f.region]) grouped[f.region] = [];
            grouped[f.region].push(f);
        });

        el.innerHTML = Object.entries(grouped).map(([region, items]) => `
      <div class="region-section">
        <div class="region-heading">
          ${REGIONS[region]?.emoji || "📍"} ${region}
          <span style="font-size:12px;font-weight:400;color:var(--text3);margin-left:4px;">${items.length} món</span>
        </div>
        <div class="food-grid">
          ${items.map(f => cardHTML(f)).join("")}
        </div>
      </div>
    `).join("");
    } else {
        el.innerHTML = `<div class="food-grid">${filtered.map(f => cardHTML(f)).join("")}</div>`;
    }
}

function cardHTML(f) {
    const highlighted = highlightedId === f.id;
    return `
    <div class="food-card ${highlighted ? 'highlighted' : ''}" id="card-${f.id}" onclick="openDetail(${f.id})">
      <span class="food-emoji">${f.emoji || "🍽️"}</span>
      <div class="food-name">${f.name}</div>
      <div class="food-tags">
        <span class="food-tag">${f.type}</span>
        ${activeRegion === 'all' ? `<span class="food-tag region">${f.region}</span>` : ''}
      </div>
      ${f.address ? `<div class="food-address">📍 ${f.address}</div>` : ''}
      <div class="food-price">${f.price || ""}</div>
    </div>
  `;
}

function openDetail(id) {
    const f = foods.find(x => x.id === id);
    if (!f) return;
    const regionEmoji = REGIONS[f.region]?.emoji || "📍";
    document.getElementById("detailEmoji").textContent = f.emoji || "🍽️";
    document.getElementById("detailName").textContent = f.name;
    document.getElementById("detailTags").innerHTML = `
                <span class="food-tag">${f.type}</span>
                <span class="food-tag region">${regionEmoji} ${f.region}</span>
            `;
    const rows = [];
    if (f.address) rows.push(`<div class="detail-row"><span class="detail-row-icon">📍</span><div><div class="detail-row-label">Địa chỉ</div><div class="detail-row-value">${f.address}</div></div></div>`);
    if (f.price) rows.push(`<div class="detail-row"><span class="detail-row-icon">💰</span><div><div class="detail-row-label">Giá tham khảo</div><div class="detail-row-value" style="color:var(--coral);font-weight:700;">${f.price}</div></div></div>`);
    rows.push(`<div class="detail-row"><span class="detail-row-icon">🍽️</span><div><div class="detail-row-label">Loại món</div><div class="detail-row-value">${f.type}</div></div></div>`);
    document.getElementById("detailRows").innerHTML = rows.join("");
    document.getElementById("detailBackdrop").classList.add("open");
}

function closeDetail() {
    document.getElementById("detailBackdrop").classList.remove("open");
}

function closeDetailOutside(e) {
    if (e.target === document.getElementById("detailBackdrop")) closeDetail();
}

function render() {
    renderTabs();
    renderChips();
    renderContent();
}

function selectRegion(r) {
    activeRegion = r;
    activeType = "all";
    highlightedId = null;
    render();
}

function selectType(t) {
    activeType = t;
    highlightedId = null;
    render();
}

function updateRandomRegion(val) {
    randomRegion = val;
    document.getElementById("randomDishName").textContent = "Nhấn nút →";
    document.getElementById("randomDishMeta").textContent = "";
    document.getElementById("randomDishAddress").textContent = "";
    highlightedId = null;
    renderContent();
}

function randomFood() {
    const pool = randomRegion === "all"
        ? foods
        : foods.filter(f => f.region === randomRegion);
    if (!pool.length) return;

    const f = pool[Math.floor(Math.random() * pool.length)];
    highlightedId = f.id;

    const nameEl = document.getElementById("randomDishName");
    const metaEl = document.getElementById("randomDishMeta");
    const addrEl = document.getElementById("randomDishAddress");

    nameEl.className = "random-dish-name";
    void nameEl.offsetWidth;
    nameEl.className = "random-dish-name pop";
    nameEl.textContent = `${f.emoji || ""} ${f.name}`;
    metaEl.textContent = `${f.type} · ${f.price} · ${f.region}`;
    addrEl.textContent = f.address ? `📍 ${f.address}` : "";

    if (activeRegion !== "all" && activeRegion !== f.region) {
        activeRegion = "all";
        activeType = "all";
    }

    render();

    setTimeout(() => {
        const card = document.getElementById("card-" + f.id);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
}

document.getElementById("searchInput").addEventListener("input", function () {
    searchQuery = this.value.trim();
    highlightedId = null;
    renderContent();
    document.getElementById("sectionCount").textContent = `${getFiltered().length} món`;
});

function openModal() {
    document.getElementById("modalBackdrop").classList.add("open");
    document.getElementById("fName").focus();
}

function closeModal() {
    document.getElementById("modalBackdrop").classList.remove("open");
    document.getElementById("fName").value = "";
    document.getElementById("fEmoji").value = "";
    document.getElementById("fPrice").value = "";
    document.getElementById("fAddress").value = "";
}

function closeModalOutside(e) {
    if (e.target === document.getElementById("modalBackdrop")) closeModal();
}

function addFood() {
    const name = document.getElementById("fName").value.trim();
    if (!name) {
        document.getElementById("fName").focus();
        document.getElementById("fName").style.borderColor = "var(--coral)";
        return;
    }
    document.getElementById("fName").style.borderColor = "";

    const f = {
        id: nextId++,
        name,
        emoji: document.getElementById("fEmoji").value.trim() || "🍽️",
        type: document.getElementById("fType").value,
        region: document.getElementById("fRegion").value,
        address: document.getElementById("fAddress").value.trim() || "",
        price: document.getElementById("fPrice").value.trim() || "",
    };

    foods.push(f);
    saveData();
    closeModal();

    activeRegion = f.region;
    activeType = "all";
    highlightedId = f.id;
    render();

    setTimeout(() => {
        const card = document.getElementById("card-" + f.id);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
}

window.addEventListener("scroll", () => {
    const btn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) btn.classList.add("visible");
    else btn.classList.remove("visible");
});

loadData();
render();