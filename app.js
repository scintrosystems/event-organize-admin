// 1. HARDCODED GOOGLE SHEET CONFIGURATION
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbywSddStVn2OJUglt7X9uAAtHgnrXu2Z-KjBrL1vIAqj6UtzuzWYSHFKeC707JvhMk/exec";

// 2. UPDATED INITIAL RITUAL & EVENT AGENDA
const INITIAL_SCHEDULE = [
    { id: 'sc-1', section: 'schedule', date: 'Nov 19', time: '04:00 AM onwards', title: 'Arrival & Hotel Check-in (Sri Kaliswari)', location: 'Sri Kaliswari Le Archids, Sivakasi', transport: 'Marazzo / Taxi', person: 'Arunkumar', status: 'Confirmed' },
    { id: 'sc-2', section: 'schedule', date: 'Nov 19', time: '05:30 PM – 07:00 PM', title: 'Jakkamma Kovil Pooja Visit & Family Blessings', location: 'Jakkamma Kovil', transport: 'Mahindra Marazzo', person: 'Family', status: 'Scheduled' },
    { id: 'sc-3', section: 'schedule', date: 'Nov 20', time: '05:30 AM – 06:30 AM', title: 'Ganapathy Homam (Iyer Confirmed: Kalidass)', location: 'New House Pooja Hall', transport: '—', person: 'Iyer Kalidass (Adv: ₹500, Tot: ₹6000)', status: 'Confirmed' },
    { id: 'sc-4', section: 'schedule', date: 'Nov 20', time: '07:00 AM – 07:30 AM', title: 'Breakfast (Idiyappam, Idli, Pongal)', location: 'Dining Area', transport: '—', person: 'Appans Hotel (60 Members)', status: 'Confirmed' },
    { id: 'sc-5', section: 'schedule', date: 'Nov 20', time: '08:30 AM', title: 'Leave from Building using Force Urbania', location: 'New House Portico', transport: 'Force Urbania (14 Seater)', person: 'All Family Members', status: 'Confirmed' },
    { id: 'sc-6', section: 'schedule', date: 'Nov 20', time: '10:00 AM onwards', title: 'Cleaning & Final Event Decoration Work', location: 'New House', transport: '—', person: 'Arunkumar & Family', status: 'Scheduled' },
    { id: 'sc-7', section: 'schedule', date: 'Nov 20', time: '12:00 PM – 02:30 PM', title: 'Grand Housewarming Feast Lunch (Full Meals)', location: 'Dining Hall', transport: '—', person: 'Appans Hotel (40 Members)', status: 'Confirmed' },
    { id: 'sc-8', section: 'schedule', date: 'Nov 20', time: '04:00 PM', title: 'Evening Snacks & Tea/Coffee (Watermelon Juice)', location: 'Dining Hall', transport: '—', person: 'Appans Hotel (40 Members)', status: 'Confirmed' },
    { id: 'sc-9', section: 'schedule', date: 'Nov 20', time: '05:00 PM onwards', title: 'Evening Celebrations & Guest Reception Starts', location: 'New House Lawn & Hall', transport: '—', person: 'Family Coordinators', status: 'Scheduled' },
    { id: 'sc-10', section: 'schedule', date: 'Nov 20', time: '08:00 PM onwards', title: 'Traditional Dinner (Veg Fried Rice & Aappam)', location: 'Dining Area', transport: '—', person: 'Appans Hotel (40 Members)', status: 'Confirmed' },
    { id: 'sc-11', section: 'schedule', date: 'Nov 21', time: '09:00 AM – 11:30 AM', title: 'Kuladeivam Temple Visit', location: 'Family Temple', transport: 'Innova / Marazzo', person: 'Uncle Ramesh & Family', status: 'Scheduled' },
    { id: 'sc-12', section: 'schedule', date: 'Nov 21', time: '10:00 AM onwards', title: 'Room Checkout (Sri Kaliswari & JB Sri Ram)', location: 'Sivakasi & Virudhunagar', transport: 'Dedicated Taxis', person: 'Arunkumar', status: 'Pending' }
];

// 3. UPDATED INITIAL ROOMS & VEHICLES (LOGISTICS) - ALL PAX REPLACED WITH MAX
const INITIAL_LOGISTICS = [
    { id: 'lg-1', section: 'logistics', category: 'Room Stay', name: 'Sri Kaliswari Le Archids (3 Double Bedrooms)', details: 'Ph: 8098615353. ₹2200+GST/room (2 Max). Extra bed max 1 (₹650+GST). Nov 19 4:00 AM to Nov 21 10:00 AM', location: 'Sivakasi', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-2', section: 'logistics', category: 'Room Stay', name: 'JB Sri Ram Residency (1 Mini Suite)', details: 'Ph: 7305153210. ₹5000+GST (2 Max). Extra bed max 1 (₹1000+GST). Nov 20 4:00 AM to Nov 21 8:00 PM', location: 'Virudhunagar', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-3', section: 'logistics', category: 'Room Stay', name: 'JB Sri Ram Residency (1 Premium Suite)', details: 'Ph: 7305153210. ₹8500+GST (4 Max). Extra bed max 2. Nov 20 4:00 AM to Nov 21 8:00 PM', location: 'Virudhunagar', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-4', section: 'logistics', category: 'Vehicle (7-Str)', name: 'Luxury Vacations - Mahindra Marazzo (7 Seater)', details: 'Driver Viji: 8489489383. Rent: ₹3000/day + ₹13/KM. Booking: Nov 18 4AM to Nov 22 10AM. (Driver is Sivakasi)', location: 'Sivakasi Local & Trips', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-5', section: 'logistics', category: 'Vehicle (14-Str)', name: 'Sri Annai Travels - Force Urbania (14 Seater)', details: 'Driver Soundararajan K P: 9360188819. Rent: ₹7500/day + ₹25/KM. Nov 20 (3:30 AM to 10:00 PM). Used for 8:30 AM Trip', location: 'Virudhunagar ↔ Sivakasi', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-6', section: 'logistics', category: 'Vehicle (7-Str)', name: 'Sri Annai Travels - Toyota Innova (7 Seater)', details: 'Contact Soundararajan K P: 9360188819. Rent: ₹3500/day + ₹15/KM. Timing: 3:30 AM to 10:00 PM. (Driver is Virudhunagar)', location: 'Virudhunagar ↔ Function', person: 'Booked: Arunkumar', status: 'Confirmed' },
    { id: 'lg-7', section: 'logistics', category: 'Vehicle (7-Str)', name: 'Sri Annai Travels - Toyota Innova Crysta (7 Seater)', details: 'Contact Soundararajan K P: 9360188819. Rent: ₹4500/day + ₹17/KM. Timing: 3:30 AM to 10:00 PM', location: 'Virudhunagar ↔ Function', person: 'Booked: Arunkumar', status: 'Confirmed' }
];

// 4. UPDATED INITIAL FOOD & CATERING (APPANS HOTEL)
const INITIAL_FOOD = [
    { id: 'fd-1', section: 'food', caterer: 'Appans Hotel', place: 'Sivakasi', contactPerson: '', mealType: 'Morning Tiffen', menu: 'Idiyappam, Idli, Pongal', headcount: '60 Members (Relatives + Scintro)', price: '', date: 'Nov 20', time: '7:00 AM – 7:30 AM', bookedBy: 'Arunkumar', status: 'Confirmed' },
    { id: 'fd-2', section: 'food', caterer: 'Appans Hotel', place: 'Sivakasi', contactPerson: '', mealType: 'Lunch', menu: 'Full Meals with Banana Leaf', headcount: '40 Members (Relative: 20, Scintro: 20)', price: '', date: 'Nov 20', time: '12:00 PM', bookedBy: 'Arunkumar', status: 'Confirmed' },
    { id: 'fd-3', section: 'food', caterer: 'Appans Hotel', place: 'Sivakasi', contactPerson: '', mealType: 'Evening Snack', menu: 'Watermelon Juice, Tea, Coffee', headcount: '40 Members (Relative: 40)', price: '', date: 'Nov 20', time: '4:00 PM', bookedBy: 'Arunkumar', status: 'Confirmed' },
    { id: 'fd-4', section: 'food', caterer: 'Appans Hotel', place: 'Sivakasi', contactPerson: '', mealType: 'Dinner', menu: 'Veg Fried Rice, Aappam with Thengai paal and Kadalai Kari', headcount: '40 Members (Relative: 40)', price: '', date: 'Nov 20', time: '8:00 PM', bookedBy: 'Arunkumar', status: 'Confirmed' }
];

// 5. UPDATED INITIAL POOJA LIST & SHOPPING
const INITIAL_SHOPPING = [
    { id: 'sh-1', section: 'shopping', category: 'Buying Items', title: 'Salt (Uppu Packet)', notes: 'New packet for Paal Kaachudhal ritual', person: 'Core Family', status: 'Pending' },
    { id: 'sh-2', section: 'shopping', category: 'Buying Items', title: 'Pulichchthanni', notes: 'Quantity: 150 ml (Keep ready for purification)', person: 'Core Family', status: 'Pending' },
    { id: 'sh-3', section: 'shopping', category: 'Buying Items', title: 'Komiyam (Gomatha Holy Water)', notes: 'Required for Homam & House Purifying', person: 'Iyer Kalidass', status: 'Confirmed' },
    { id: 'sh-4', section: 'shopping', category: 'Buying Items', title: 'Kuthu Vilakku (Ours - Big Size)', notes: 'Polished & ready with turmeric / kumkum', person: 'Family', status: 'Confirmed' },
    { id: 'sh-5', section: 'shopping', category: 'Buying Items', title: 'Vilakku Thiri (Wicks)', notes: 'Cotton wicks for all lamps', person: 'Core Family', status: 'Pending' },
    { id: 'sh-6', section: 'shopping', category: 'Buying Items', title: 'Oil for Vilakku (Deepam Oil)', notes: 'Quantity: 100 ml (Nallennai or Pancha Deepam Oil)', person: 'Core Family', status: 'Pending' },
    { id: 'sh-7', section: 'shopping', category: 'From Garden', title: 'Seeniyavaraikkai Vaththal', notes: 'Harvested from garden, dried & packed', person: 'Family Garden', status: 'Completed' },
    { id: 'sh-8', section: 'shopping', category: 'From Garden', title: 'Vendikkai Vaththal', notes: 'Harvested from garden, dried & packed', person: 'Family Garden', status: 'Completed' },
    { id: 'sh-9', section: 'shopping', category: 'Pooja Kit', title: 'Complete Homam Samagri Box', notes: 'Ghee 2kg, Navadhanyam, Dried Wood, Samithu', person: 'Iyer Kalidass', status: 'Confirmed' },
    { id: 'sh-10', section: 'shopping', category: 'Gifts', title: 'Return Gift Bags (Thamboolam Bags)', notes: '50 Bags with Coconuts, Betel leaves, Sweets', person: 'Family', status: 'Confirmed' }
];

// 6. UPDATED INITIAL TO-DO TASKS
const INITIAL_TODO = [
    { id: 'td-1', section: 'todo', title: 'Iyer Kalidass Payment: Total ₹6000, Advance ₹500 paid. Balance ₹5500 envelope ready', date: 'Nov 20', time: 'Nov 20 - Morning', person: 'Arunkumar', status: 'In Progress' },
    { id: 'td-2', section: 'todo', title: 'Luxury Vacations (Marazzo - Viji): Confirm Nov 18 4:00 AM arrival and driver home return timing', date: 'Nov 18', time: 'Nov 18 - 4:00 AM', person: 'Arunkumar', status: 'Confirmed' },
    { id: 'td-3', section: 'todo', title: 'Sri Annai Travels: Confirm Force Urbania 3:30 AM arrival for 8:30 AM group departure', date: 'Nov 20', time: 'Nov 20 - 3:30 AM', person: 'Arunkumar', status: 'Confirmed' },
    { id: 'td-4', section: 'todo', title: 'Bring Garden Items: Pack Seeniyavaraikkai Vaththal & Vendikkai Vaththal to house', date: 'Nov 19', time: 'Nov 19 - Evening', person: 'Family', status: 'Completed' },
    { id: 'td-5', section: 'todo', title: 'Cleaning and Decoration check at 10:00 AM after breakfast', date: 'Nov 20', time: 'Nov 20 - 10:00 AM', person: 'Arunkumar', status: 'Scheduled' }
];

// STATE MANAGEMENT
let scheduleData = [];
let logisticsData = [];
let shoppingData = [];
let todoData = [];
let foodData = [];
let activeTab = 'schedule';
let currentDayFilter = 'all';

// INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    loadStoredState();
    renderAll();

    if (GOOGLE_SHEET_URL && GOOGLE_SHEET_URL.startsWith("https://")) {
        updateSyncUI('Live Synced', 'emerald');
        syncFromGoogleSheets(true);
        setInterval(() => syncFromGoogleSheets(true), 20000);
    } else {
        updateSyncUI('Local Mode', 'amber');
    }
});

function loadStoredState() {
    const raw = localStorage.getItem('griha_pravesam_data_store');
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            scheduleData = parsed.schedule || [];
            logisticsData = parsed.logistics || [];
            shoppingData = parsed.shopping || [];
            todoData = parsed.todo || [];
            foodData = parsed.food || [];
            return;
        } catch (e) { console.error("Corrupt local storage", e); }
    }
    scheduleData = [...INITIAL_SCHEDULE];
    logisticsData = [...INITIAL_LOGISTICS];
    shoppingData = [...INITIAL_SHOPPING];
    todoData = [...INITIAL_TODO];
    foodData = [...INITIAL_FOOD];
    saveLocalState();
}

function saveLocalState() {
    localStorage.setItem('griha_pravesam_data_store', JSON.stringify({
        schedule: scheduleData,
        logistics: logisticsData,
        shopping: shoppingData,
        todo: todoData,
        food: foodData
    }));
    updateKPIs();
}

// FORCE OVERWRITE GOOGLE SHEET WITH NEW REAL VALUES
function forceResetDefaults() {
    if (!confirm("This will overwrite your current screen and Google Sheet with your real new details (Iyer Kalidass, Sri Kaliswari, JB Sri Ram, Appans Hotel, Marazzo, Urbania). Continue?")) return;

    scheduleData = [...INITIAL_SCHEDULE];
    logisticsData = [...INITIAL_LOGISTICS];
    shoppingData = [...INITIAL_SHOPPING];
    todoData = [...INITIAL_TODO];
    foodData = [...INITIAL_FOOD];

    saveLocalState();
    renderAll();
    pushDataToGoogleSheet();
    updateSyncUI('Defaults Pushed', 'emerald');
    alert("New details pushed to Google Sheet and synced!");
}

// KPI CALCULATION (RESTORED PERCENTAGES & ACCURATE WORK DONE COUNTS)
function updateKPIs() {
    // 1. Ritual Readiness
    const totalSched = scheduleData.length;
    const doneSched = scheduleData.filter(i => i.status === 'Completed' || i.status === 'Confirmed').length;
    const pct = totalSched > 0 ? Math.round((doneSched / totalSched) * 100) : 0;

    const elReadiness = document.getElementById('kpiReadiness');
    const elReadinessSub = document.getElementById('kpiReadinessSub');
    if (elReadiness) elReadiness.innerText = pct + '%';
    if (elReadinessSub) elReadinessSub.innerText = `${doneSched} of ${totalSched} Ready/Done`;

    // 2. Stay & Taxis
    const elLogistics = document.getElementById('kpiLogistics');
    const elLogisticsSub = document.getElementById('kpiLogisticsSub');
    if (elLogistics) elLogistics.innerText = logisticsData.length + ' Bookings';
    if (elLogisticsSub) elLogisticsSub.innerText = 'Rooms & Transit Booked';

    // 3. Pooja Items
    const pendingShop = shoppingData.filter(i => i.status !== 'Completed').length;
    const elShopping = document.getElementById('kpiShopping');
    const elShoppingSub = document.getElementById('kpiShoppingSub');
    if (elShopping) elShopping.innerText = shoppingData.length + ' Items';
    if (elShoppingSub) elShoppingSub.innerText = `${pendingShop} To Procure`;

    // 4. To-Do Tasks
    const pendingTodo = todoData.filter(i => i.status === 'Pending' || i.status === 'In Progress').length;
    const elTodo = document.getElementById('kpiTodo');
    const elTodoSub = document.getElementById('kpiTodoSub');
    if (elTodo) elTodo.innerText = pendingTodo + ' Pending';
    if (elTodoSub) elTodoSub.innerText = `${todoData.length} Total Tasks`;
}

function cleanDate(val) {
    if (!val) return '';
    const str = String(val).trim();
    if (/^\d{4}-\d{2}-\d{2}T/.test(str)) {
        try {
            const d = new Date(str);
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${months[d.getMonth()]} ${d.getDate()}`;
        } catch (e) { return str; }
    }
    if (str.includes('20-Nov') || str.includes('Nov 20')) return 'Nov 20';
    if (str.includes('19-Nov') || str.includes('Nov 19')) return 'Nov 19';
    if (str.includes('21-Nov') || str.includes('Nov 21')) return 'Nov 21';
    return str;
}

function cleanTime(val) {
    if (!val) return '';
    const str = String(val).trim();
    if (/^\d{4}-\d{2}-\d{2}T/.test(str)) {
        try {
            const d = new Date(str);
            let hours = d.getHours();
            const minutes = d.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            const minStr = minutes < 10 ? '0' + minutes : minutes;
            const hrStr = hours < 10 ? '0' + hours : hours;
            return `${hrStr}:${minStr} ${ampm}`;
        } catch (e) { return str; }
    }
    return str;
}

// GOOGLE SHEETS LIVE SYNC
async function syncFromGoogleSheets(silent = false) {
    if (!GOOGLE_SHEET_URL || !GOOGLE_SHEET_URL.startsWith("https://")) return;

    const spinner = document.getElementById('syncSpinner');
    if (!silent && spinner) spinner.classList.add('fa-spin');

    try {
        const res = await fetch(`${GOOGLE_SHEET_URL}?_t=${Date.now()}`);
        const data = await res.json();

        const isFirstTimeSetup = !localStorage.getItem('griha_pravesam_seeded');
        if ((!Array.isArray(data) || data.length <= 1) && isFirstTimeSetup) {
            scheduleData = [...INITIAL_SCHEDULE];
            logisticsData = [...INITIAL_LOGISTICS];
            shoppingData = [...INITIAL_SHOPPING];
            todoData = [...INITIAL_TODO];
            foodData = [...INITIAL_FOOD];

            saveLocalState();
            renderAll();
            pushDataToGoogleSheet();
            localStorage.setItem('griha_pravesam_seeded', 'true');
            updateSyncUI('Seeded Defaults', 'emerald');
            return;
        }

        if (!Array.isArray(data) || data.length <= 1) {
            scheduleData = [];
            logisticsData = [];
            shoppingData = [];
            todoData = [];
            foodData = [];
            saveLocalState();
            renderAll();
            updateSyncUI('Live Synced (Empty)', 'emerald');
            return;
        }

        const seenIds = new Set();
        let s = [], l = [], sh = [], td = [], fd = [];

        for (let i = 1; i < data.length; i++) {
            const r = data[i];
            if (!r || !r[0]) continue;

            const id = String(r[0]).trim();
            if (seenIds.has(id)) continue;
            seenIds.add(id);

            const sec = String(r[1] || 'schedule').toLowerCase().trim();

            if (sec === 'food') {
                fd.push({
                    id,
                    section: 'food',
                    date: cleanDate(r[2]) || 'Nov 20',
                    time: cleanTime(r[3]) || '',
                    mealType: r[3] || 'Meal',
                    caterer: r[4] || 'Appans Hotel',
                    title: r[4] || 'Appans Hotel',
                    place: r[5] || 'Sivakasi',
                    location: r[5] || 'Sivakasi',
                    bookedBy: r[6] || '',
                    transport: r[6] || '',
                    person: r[7] || '',
                    contactPerson: r[7] || '',
                    status: r[8] || 'Confirmed',
                    menu: r[9] || '',
                    headcount: r[10] || '40 Members',
                    price: r[11] || ''
                });
            } else {
                const item = {
                    id,
                    section: sec,
                    date: cleanDate(r[2]) || r[2],
                    category: r[2] || '',
                    time: cleanTime(r[3]) || r[3],
                    details: r[3] || '',
                    notes: r[3] || '',
                    title: r[4] || '',
                    name: r[4] || '',
                    location: r[5] || '',
                    transport: r[6] || '',
                    person: r[7] || '',
                    status: r[8] || 'Scheduled'
                };

                if (sec === 'schedule') s.push(item);
                else if (sec === 'logistics') l.push(item);
                else if (sec === 'shopping') sh.push(item);
                else if (sec === 'todo') td.push(item);
            }
        }

        scheduleData = s;
        logisticsData = l;
        shoppingData = sh;
        todoData = td;
        foodData = fd;

        localStorage.setItem('griha_pravesam_seeded', 'true');
        saveLocalState();
        renderAll();
        updateSyncUI('Live Synced', 'emerald');

    } catch (e) {
        console.warn("Sync error:", e);
        updateSyncUI('Sync Offline', 'amber');
    } finally {
        if (spinner) spinner.classList.remove('fa-spin');
    }
}

function pushDataToGoogleSheet() {
    if (!GOOGLE_SHEET_URL || !GOOGLE_SHEET_URL.startsWith("https://")) return;

    const payload = [
        ...scheduleData.map(x => ({ ...x, section: 'schedule' })),
        ...logisticsData.map(x => ({ ...x, section: 'logistics' })),
        ...foodData.map(x => ({ ...x, section: 'food' })),
        ...shoppingData.map(x => ({ ...x, section: 'shopping' })),
        ...todoData.map(x => ({ ...x, section: 'todo' }))
    ];

    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'saveAll', allData: payload })
    }).catch(err => console.error("Push failed:", err));
}

function updateSyncUI(msg, color) {
    const badge = document.getElementById('syncStatusBadge');
    const dot = document.getElementById('syncDot');
    const text = document.getElementById('syncText');
    if (!badge || !text || !dot) return;
    text.innerText = msg;
    if (color === 'emerald') {
        badge.className = 'inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 text-[10px]';
        dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse';
    } else {
        badge.className = 'inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-full bg-amber-700/80 text-amber-100 text-[10px]';
        dot.className = 'w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse';
    }
}

// RENDERING LOGIC
function renderAll() {
    renderScheduleTable();
    renderFoodTable();
    renderLogisticsTable();
    renderShoppingTable();
    renderTodoTable();
    renderDayOverview();
    updateKPIs();
}

function renderCurrentTab() {
    if (activeTab === 'dayview') renderDayOverview();
    else if (activeTab === 'schedule') renderScheduleTable();
    else if (activeTab === 'food') renderFoodTable();
    else if (activeTab === 'logistics') renderLogisticsTable();
    else if (activeTab === 'shopping') renderShoppingTable();
    else if (activeTab === 'todo') renderTodoTable();
}

function filterByDay(day) {
    currentDayFilter = day;

    ['all', 'Nov 19', 'Nov 20', 'Nov 21'].forEach(d => {
        const btnId = 'btnDay-' + d.replace(/\s+/g, '');
        const btn = document.getElementById(btnId);
        if (!btn) return;
        if (d === day) {
            btn.className = 'px-3 py-1 text-xs font-bold rounded-lg bg-amber-600 text-white shrink-0 shadow-sm transition';
        } else {
            btn.className = 'px-3 py-1 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100 shrink-0 transition';
        }
    });

    const lbl = document.getElementById('dayviewCurrentLabel');
    if (lbl) lbl.innerText = day === 'all' ? 'All Days Combined' : day;

    renderAll();
}
function filterScheduleDay(day) { filterByDay(day); }

function getStatusBadge(status, id, section) {
    const map = {
        'Completed': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300',
        'Confirmed': 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300',
        'In Progress': 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300',
        'Scheduled': 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300',
        'Pending': 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300'
    };
    const style = map[status] || 'bg-slate-100 text-slate-700 border-slate-300';
    return `<button onclick="cycleStatusBadge('${id}', '${section}')" title="Click to cycle status" class="px-2.5 py-1 text-[11px] font-bold rounded-full border transition hover:scale-105 active:scale-95 ${style}">
        ${status} <i class="fa-solid fa-arrows-rotate text-[10px] ml-1 opacity-60"></i>
    </button>`;
}

function highlightPhoneNumbers(text) {
    if (!text) return '—';
    return text.replace(/(\+?\d[\d\s-]{8,14}\d)/g, '<a href="tel:$1" class="text-amber-600 dark:text-amber-400 font-semibold underline inline-flex items-center gap-1"><i class="fa-solid fa-phone text-[10px]"></i>$1</a>');
}

// 0. RENDER COMBINED DAY-BY-DAY MASTER OVERVIEW
function renderDayOverview() {
    const day = currentDayFilter;
    const filterFn = item => day === 'all' || (item.date && item.date.includes(day)) || (item.time && item.time.includes(day));

    // 1. Rituals
    const dayS = scheduleData.filter(filterFn);
    const sContainer = document.getElementById('dayviewScheduleContainer');
    const sCount = document.getElementById('dayviewScheduleCount');
    if (sCount) sCount.innerText = `${dayS.length} Events`;
    if (sContainer) {
        sContainer.innerHTML = dayS.length === 0 ? `<p class="text-xs text-slate-400 py-2">No rituals scheduled for this day.</p>` :
            dayS.map(r => `
                <div class="py-2 flex items-start justify-between gap-2">
                    <div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                        <span class="text-[11px] text-amber-600 font-semibold"><i class="fa-regular fa-clock mr-1"></i>${r.time} • ${r.location}</span>
                    </div>
                    <div>${getStatusBadge(r.status, r.id, 'schedule')}</div>
                </div>
            `).join('');
    }

    // 2. Food (Appans Hotel)
    const dayF = foodData.filter(item => day === 'all' || (item.date && item.date.includes(day)));
    const fContainer = document.getElementById('dayviewFoodContainer');
    const fCount = document.getElementById('dayviewFoodCount');
    if (fCount) fCount.innerText = `${dayF.length} Meals`;
    if (fContainer) {
        fContainer.innerHTML = dayF.length === 0 ? `<p class="text-xs text-slate-400 py-2">No catering meals logged for this day.</p>` :
            dayF.map(r => {
                const mealDisplay = r.mealType && r.time && r.mealType !== r.time ? `${r.mealType} (${r.time})` : (r.mealType || r.time || 'Meal');
                return `
                <div class="py-2 flex items-start justify-between gap-2">
                    <div>
                        <span class="text-xs font-bold text-amber-600 block">${mealDisplay}</span>
                        <span class="text-[11px] text-slate-700 dark:text-slate-300 font-medium block">${r.menu || 'Menu TBD'}</span>
                        <span class="text-[10px] text-slate-400">${r.caterer || 'Appans Hotel'} • ${r.headcount}</span>
                    </div>
                    <div>${getStatusBadge(r.status, r.id, 'food')}</div>
                </div>
            `}).join('');
    }

    // 3. To-Do
    const dayT = todoData.filter(item => day === 'all' || (item.date && item.date.includes(day)) || (item.time && item.time.includes(day)) || (item.title && item.title.includes(day)));
    const tContainer = document.getElementById('dayviewTodoContainer');
    const tCount = document.getElementById('dayviewTodoCount');
    if (tCount) tCount.innerText = `${dayT.length} Tasks`;
    if (tContainer) {
        tContainer.innerHTML = dayT.length === 0 ? `<p class="text-xs text-slate-400 py-2">No pending to-dos for this day.</p>` :
            dayT.map(r => `
                <div class="py-2 flex items-start justify-between gap-2">
                    <div>
                        <span class="text-xs font-semibold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                        <span class="text-[10px] text-slate-500">${r.time || r.date} • Resp: ${r.person}</span>
                    </div>
                    <div>${getStatusBadge(r.status, r.id, 'todo')}</div>
                </div>
            `).join('');
    }

    // 4. Logistics
    const lContainer = document.getElementById('dayviewLogisticsContainer');
    if (lContainer) {
        lContainer.innerHTML = logisticsData.map(r => `
            <div class="py-1.5 flex items-center justify-between text-xs">
                <div>
                    <span class="font-bold text-slate-800 dark:text-slate-100 block">${r.name}</span>
                    <span class="text-[10px] text-slate-500">${highlightPhoneNumbers(r.details)}</span>
                </div>
                <div>${getStatusBadge(r.status, r.id, 'logistics')}</div>
            </div>
        `).join('');
    }
}

// 1. RENDER RITUAL & EVENT AGENDA
function renderScheduleTable() {
    const tbody = document.getElementById('scheduleTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const rows = scheduleData.filter(item => {
        const dayMatch = currentDayFilter === 'all' || (item.date && item.date.includes(currentDayFilter));
        const searchMatch = !search ||
            (item.title && item.title.toLowerCase().includes(search)) ||
            (item.person && item.person.toLowerCase().includes(search)) ||
            (item.location && item.location.toLowerCase().includes(search)) ||
            (item.time && item.time.toLowerCase().includes(search));
        return dayMatch && searchMatch;
    });

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">No rituals found matching filter.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(r => `
        <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
            <td class="p-3 sm:p-4 whitespace-nowrap">
                <span class="font-bold text-amber-600 dark:text-amber-400">${r.date}</span>
                <span class="text-xs text-slate-400 block">${r.time || '—'}</span>
            </td>
            <td class="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100">${r.title}</td>
            <td class="p-3 sm:p-4 text-slate-600 dark:text-slate-300"><i class="fa-solid fa-location-dot text-rose-500 mr-1 text-xs"></i>${r.location || '—'}</td>
            <td class="p-3 sm:p-4 text-slate-600 dark:text-slate-300">${r.transport || '—'}</td>
            <td class="p-3 sm:p-4 font-medium text-slate-700 dark:text-slate-300"><i class="fa-solid fa-user text-slate-400 mr-1 text-xs"></i>${r.person || '—'}</td>
            <td class="p-3 sm:p-4">${getStatusBadge(r.status, r.id, 'schedule')}</td>
            <td class="p-3 sm:p-4 text-right whitespace-nowrap">
                <button onclick="editRecord('${r.id}', 'schedule')" class="text-amber-600 hover:text-amber-700 p-1 mr-1" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteRecord('${r.id}', 'schedule')" class="text-rose-500 hover:text-rose-700 p-1" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// 2. RENDER FOOD & CATERING
function renderFoodTable() {
    const tbody = document.getElementById('foodTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const rows = foodData.filter(item => {
        const dayMatch = currentDayFilter === 'all' || (item.date && item.date.includes(currentDayFilter));
        const matchCaterer = (item.caterer || item.title || '').toLowerCase().includes(search);
        const matchMeal = (item.mealType || item.time || '').toLowerCase().includes(search);
        const matchMenu = (item.menu || '').toLowerCase().includes(search);
        const matchPlace = (item.place || item.location || '').toLowerCase().includes(search);
        return dayMatch && (!search || matchCaterer || matchMeal || matchMenu || matchPlace);
    });

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">No catering meals found for this day.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(r => `
        <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
            <td class="p-3 sm:p-4 whitespace-nowrap">
                <span class="font-bold text-amber-600 dark:text-amber-400 block">${r.mealType || 'Meal'}</span>
                <span class="text-xs text-slate-400 block">${r.time} • ${r.date}</span>
            </td>
            <td class="p-3 sm:p-4">
                <span class="font-bold text-slate-800 dark:text-slate-100 block">${r.caterer || 'Appans Hotel'}</span>
                <span class="text-xs text-slate-500"><i class="fa-solid fa-location-dot text-rose-500 mr-1 text-[10px]"></i>${r.place || 'Sivakasi'}</span>
            </td>
            <td class="p-3 sm:p-4">
                <div class="text-xs font-medium text-slate-700 dark:text-slate-200 bg-amber-50/70 dark:bg-amber-950/40 p-2 rounded-xl border border-amber-200/50 leading-relaxed max-w-xs">
                    ${(r.menu || 'Menu TBD').replace(/\n/g, '<br>')}
                </div>
            </td>
            <td class="p-3 sm:p-4">
                <span class="px-2 py-0.5 text-xs font-bold rounded-lg bg-emerald-100 text-emerald-800 block w-fit mb-0.5">
                    ${r.headcount ? r.headcount.split('(')[0].trim() : '40 Members'}
                </span>
                <span class="text-[11px] text-slate-500 block">
                    ${r.headcount && r.headcount.includes('(') ? r.headcount.substring(r.headcount.indexOf('(')) : ''}
                </span>
            </td>
            <td class="p-3 sm:p-4 text-xs text-slate-600 dark:text-slate-300">
                ${r.contactPerson || r.bookedBy || '—'}
            </td>
            <td class="p-3 sm:p-4">${getStatusBadge(r.status, r.id, 'food')}</td>
            <td class="p-3 sm:p-4 text-right whitespace-nowrap">
                <button onclick="editRecord('${r.id}', 'food')" class="text-amber-600 hover:text-amber-700 p-1 mr-1" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteRecord('${r.id}', 'food')" class="text-rose-500 hover:text-rose-700 p-1" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// 3. RENDER ROOMS & VEHICLES
function renderLogisticsTable() {
    const tbody = document.getElementById('logisticsTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const rows = logisticsData.filter(item => {
        if (!search) return true;
        const matchName = (item.name || item.title || '').toLowerCase().includes(search);
        const matchPerson = (item.person || '').toLowerCase().includes(search);
        const matchDetails = (item.details || item.time || '').toLowerCase().includes(search);
        const matchLoc = (item.location || '').toLowerCase().includes(search);
        return matchName || matchPerson || matchDetails || matchLoc;
    });

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">No rooms or transport entries found.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(r => `
        <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
            <td class="p-3 sm:p-4"><span class="px-2 py-0.5 text-xs font-bold rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">${r.category || 'Logistics'}</span></td>
            <td class="p-3 sm:p-4 font-bold text-slate-800 dark:text-slate-100">${r.name || r.title}</td>
            <td class="p-3 sm:p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${highlightPhoneNumbers(r.details || r.time)}</td>
            <td class="p-3 sm:p-4 text-slate-600 dark:text-slate-300">${r.location || '—'}</td>
            <td class="p-3 sm:p-4 font-medium text-slate-700 dark:text-slate-300"><i class="fa-solid fa-user-tag text-slate-400 mr-1 text-xs"></i>${r.person || '—'}</td>
            <td class="p-3 sm:p-4">${getStatusBadge(r.status, r.id, 'logistics')}</td>
            <td class="p-3 sm:p-4 text-right whitespace-nowrap">
                <button onclick="editRecord('${r.id}', 'logistics')" class="text-amber-600 hover:text-amber-700 p-1 mr-1" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteRecord('${r.id}', 'logistics')" class="text-rose-500 hover:text-rose-700 p-1" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// 4. RENDER POOJA LIST
function renderShoppingTable() {
    const tbody = document.getElementById('shoppingTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const rows = shoppingData.filter(item => {
        if (!search) return true;
        const matchTitle = (item.title || item.name || '').toLowerCase().includes(search);
        const matchNotes = (item.notes || item.time || '').toLowerCase().includes(search);
        const matchPerson = (item.person || '').toLowerCase().includes(search);
        return matchTitle || matchNotes || matchPerson;
    });

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">No pooja items found.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(r => `
        <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
            <td class="p-3 sm:p-4"><span class="px-2 py-0.5 text-xs font-bold rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">${r.category || 'General'}</span></td>
            <td class="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100">${r.title || r.name}</td>
            <td class="p-3 sm:p-4 text-xs text-slate-600 dark:text-slate-300">${r.notes || r.time || '—'}</td>
            <td class="p-3 sm:p-4 font-medium text-slate-700 dark:text-slate-300"><i class="fa-solid fa-basket-shopping text-slate-400 mr-1 text-xs"></i>${r.person || '—'}</td>
            <td class="p-3 sm:p-4">${getStatusBadge(r.status, r.id, 'shopping')}</td>
            <td class="p-3 sm:p-4 text-right whitespace-nowrap">
                <button onclick="editRecord('${r.id}', 'shopping')" class="text-amber-600 hover:text-amber-700 p-1 mr-1" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteRecord('${r.id}', 'shopping')" class="text-rose-500 hover:text-rose-700 p-1" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// 5. RENDER TO-DO
function renderTodoTable() {
    const tbody = document.getElementById('todoTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const rows = todoData.filter(item => {
        const dayMatch = currentDayFilter === 'all' ||
            (item.date && item.date.includes(currentDayFilter)) ||
            (item.time && item.time.includes(currentDayFilter)) ||
            (item.title && item.title.includes(currentDayFilter));
        const searchMatch = !search ||
            (item.title && item.title.toLowerCase().includes(search)) ||
            (item.person && item.person.toLowerCase().includes(search));
        return dayMatch && searchMatch;
    });

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-400">No to-do tasks found for this day.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(r => `
        <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
            <td class="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100">${r.title}</td>
            <td class="p-3 sm:p-4 text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-regular fa-clock mr-1 text-amber-500"></i>${r.date || r.time || 'Urgent'}</td>
            <td class="p-3 sm:p-4 font-medium text-slate-700 dark:text-slate-300"><i class="fa-solid fa-user-check text-slate-400 mr-1 text-xs"></i>${r.person || '—'}</td>
            <td class="p-3 sm:p-4">${getStatusBadge(r.status, r.id, 'todo')}</td>
            <td class="p-3 sm:p-4 text-right whitespace-nowrap">
                <button onclick="editRecord('${r.id}', 'todo')" class="text-amber-600 hover:text-amber-700 p-1 mr-1" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteRecord('${r.id}', 'todo')" class="text-rose-500 hover:text-rose-700 p-1" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// STATUS CYCLING
function cycleStatusBadge(id, section) {
    const flow = ['Scheduled', 'In Progress', 'Confirmed', 'Completed', 'Pending'];
    let arr = getSectionArray(section);
    let item = arr.find(x => x.id === id);
    if (!item) return;

    let idx = flow.indexOf(item.status);
    item.status = flow[(idx + 1) % flow.length];

    saveLocalState();
    renderAll();
    pushDataToGoogleSheet();
}

function getSectionArray(sec) {
    if (sec === 'schedule') return scheduleData;
    if (sec === 'food') return foodData;
    if (sec === 'logistics') return logisticsData;
    if (sec === 'shopping') return shoppingData;
    return todoData;
}

// SWITCH TAB FUNCTION
function switchTab(tabId) {
    activeTab = tabId;
    ['dayview', 'schedule', 'food', 'logistics', 'shopping', 'todo'].forEach(t => {
        const secEl = document.getElementById('sec-' + t);
        const tabEl = document.getElementById('tab-' + t);
        if (secEl) secEl.classList.add('hidden');
        if (tabEl) {
            tabEl.classList.remove('active', 'text-amber-600');
            tabEl.classList.add('text-slate-600', 'dark:text-slate-300');
        }
    });

    const activeSec = document.getElementById('sec-' + tabId);
    const activeTabEl = document.getElementById('tab-' + tabId);
    if (activeSec) activeSec.classList.remove('hidden');
    if (activeTabEl) {
        activeTabEl.classList.add('active', 'text-amber-600');
        activeTabEl.classList.remove('text-slate-600', 'dark:text-slate-300');
    }

    renderCurrentTab();
}

// MODAL ADD / EDIT LOGIC (WITH DEDICATED MENU HANDLING)
function adjustFormFieldsBySection() {
    const sec = document.getElementById('formSection').value;
    const lblTitle = document.getElementById('lblTitle');
    const lblDateOrCat = document.getElementById('lblDateOrCategory');
    const dateWrapper = document.getElementById('dateOrCategoryInputWrapper');
    const lblTime = document.getElementById('lblTimeOrDetails');
    const colLoc = document.getElementById('colLocation');
    const colTrans = document.getElementById('colTransport');
    const colMenu = document.getElementById('colMenu');

    if (sec === 'food') {
        if (colMenu) colMenu.classList.remove('hidden'); // Show Menu Box!
        lblTitle.innerText = 'Caterer / Hotel Name';
        lblDateOrCat.innerText = 'Event Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-xl outline-none font-medium">
                <option value="Nov 19">Nov 19 (Day 1 - Arrivals)</option>
                <option value="Nov 20" selected>Nov 20 (Day 2 - Main Ceremony)</option>
                <option value="Nov 21">Nov 21 (Day 3 - Farewell)</option>
            </select>`;
        lblTime.innerText = 'Meal Type & Time (e.g. Lunch • 12:00 PM)';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Place / Location';
        document.getElementById('lblTransport').innerText = 'Headcount (e.g. 40 Max)';
    } else {
        if (colMenu) colMenu.classList.add('hidden'); // Hide Menu Box for other sections!

        if (sec === 'schedule') {
            lblTitle.innerText = 'Ritual / Activity Title';
            lblDateOrCat.innerText = 'Day';
            dateWrapper.innerHTML = `
                <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-xl outline-none font-medium">
                    <option value="Nov 19">Nov 19 (Day 1 - Arrivals)</option>
                    <option value="Nov 20">Nov 20 (Day 2 - Main Pooja)</option>
                    <option value="Nov 21">Nov 21 (Day 3 - Farewell)</option>
                </select>`;
            lblTime.innerText = 'Time Slot (e.g. 05:00 AM – 06:30 AM)';
            colLoc.classList.remove('hidden');
            colTrans.classList.remove('hidden');
            document.getElementById('lblLocation').innerText = 'Location / Venue';
            document.getElementById('lblTransport').innerText = 'Transport Mode';
        } else if (sec === 'logistics') {
            lblTitle.innerText = 'Hotel Room Name or Driver / Taxi';
            lblDateOrCat.innerText = 'Category Type';
            dateWrapper.innerHTML = `
                <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-xl outline-none font-medium">
                    <option value="Room Stay">Room Stay (Hotel / Lodge)</option>
                    <option value="Vehicle (7-Str)">7-Seater Car / Taxi</option>
                    <option value="Vehicle (14-Str)">14-Seater Tempo Traveller / Urbania</option>
                </select>`;
            lblTime.innerText = 'Contact Phone & Specifics';
            colLoc.classList.remove('hidden');
            colTrans.classList.add('hidden');
        } else if (sec === 'shopping') {
            lblTitle.innerText = 'Pooja Item or Purchase Description';
            lblDateOrCat.innerText = 'Category';
            dateWrapper.innerHTML = `
                <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-xl outline-none font-medium">
                    <option value="Buying Items">Buying Items</option>
                    <option value="From Garden">From Garden</option>
                    <option value="Pooja Kit">Pooja Kit</option>
                    <option value="Gifts">Gifts / Thamboolam</option>
                </select>`;
            lblTime.innerText = 'Quantity & Special Notes';
            colLoc.classList.add('hidden');
            colTrans.classList.add('hidden');
        } else if (sec === 'todo') {
            lblTitle.innerText = 'Action Item / Task Description';
            lblDateOrCat.innerText = 'Target Day';
            dateWrapper.innerHTML = `
                <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-xl outline-none font-medium">
                    <option value="Nov 18">Nov 18</option>
                    <option value="Nov 19">Nov 19</option>
                    <option value="Nov 20" selected>Nov 20</option>
                    <option value="Nov 21">Nov 21</option>
                </select>`;
            lblTime.innerText = 'Specific Target Time';
            colLoc.classList.add('hidden');
            colTrans.classList.add('hidden');
        }
    }
}

function openRecordModal(sectionToPreselect) {
    document.getElementById('recordForm').reset();
    document.getElementById('formRecordId').value = '';
    if (document.getElementById('formMenu')) document.getElementById('formMenu').value = '';
    document.getElementById('recordModalTitle').innerText = 'Add Record';

    if (sectionToPreselect) {
        document.getElementById('formSection').value = sectionToPreselect;
    } else {
        document.getElementById('formSection').value = activeTab === 'dayview' ? 'schedule' : activeTab;
    }

    adjustFormFieldsBySection();
    document.getElementById('recordModal').classList.remove('hidden');
}

function closeRecordModal() {
    document.getElementById('recordModal').classList.add('hidden');
}

function editRecord(id, sec) {
    const arr = getSectionArray(sec);
    const item = arr.find(x => x.id === id);
    if (!item) return;

    openRecordModal(sec);
    document.getElementById('recordModalTitle').innerText = 'Edit Record';
    document.getElementById('formRecordId').value = item.id;
    document.getElementById('formSection').value = sec;
    adjustFormFieldsBySection();

    document.getElementById('formTitle').value = item.title || item.name || item.caterer || '';
    const dateEl = document.getElementById('formDate');
    if (dateEl) dateEl.value = item.date || item.category || 'Nov 20';

    document.getElementById('formTimeOrDetails').value = item.mealType || item.time || item.details || item.notes || '';
    if (document.getElementById('formLocation')) document.getElementById('formLocation').value = item.location || item.place || '';
    if (document.getElementById('formTransport')) document.getElementById('formTransport').value = item.transport || item.headcount || '';
    if (document.getElementById('formMenu')) document.getElementById('formMenu').value = item.menu || '';
    document.getElementById('formPerson').value = item.person || item.contactPerson || '';
    document.getElementById('formStatus').value = item.status || 'Confirmed';
}

function deleteRecord(id, sec) {
    if (!confirm('Are you sure you want to delete this record?')) return;
    if (sec === 'schedule') scheduleData = scheduleData.filter(x => x.id !== id);
    else if (sec === 'food') foodData = foodData.filter(x => x.id !== id);
    else if (sec === 'logistics') logisticsData = logisticsData.filter(x => x.id !== id);
    else if (sec === 'shopping') shoppingData = shoppingData.filter(x => x.id !== id);
    else todoData = todoData.filter(x => x.id !== id);

    saveLocalState();
    renderAll();
    pushDataToGoogleSheet();
}

function handleSaveRecord(e) {
    e.preventDefault();
    const editId = document.getElementById('formRecordId').value;
    const sec = document.getElementById('formSection').value;
    const id = editId || ('rec-' + Date.now().toString());

    const title = document.getElementById('formTitle').value.trim();
    const dateOrCat = document.getElementById('formDate') ? document.getElementById('formDate').value : 'Nov 20';
    const timeOrDetails = document.getElementById('formTimeOrDetails').value.trim();
    const location = document.getElementById('formLocation') ? document.getElementById('formLocation').value.trim() : '';
    const transport = document.getElementById('formTransport') ? document.getElementById('formTransport').value.trim() : '';
    const menu = document.getElementById('formMenu') ? document.getElementById('formMenu').value.trim() : '';
    const person = document.getElementById('formPerson').value.trim();
    const status = document.getElementById('formStatus').value;

    let newObj = {
        id,
        section: sec,
        title,
        name: title,
        date: dateOrCat,
        category: dateOrCat,
        time: timeOrDetails,
        details: timeOrDetails,
        notes: timeOrDetails,
        location,
        transport,
        person,
        status
    };

    if (sec === 'food') {
        newObj.caterer = title;
        newObj.place = location;
        newObj.mealType = timeOrDetails;
        newObj.headcount = transport;
        newObj.contactPerson = person;
        newObj.menu = menu || (editId && foodData.find(x => x.id === editId)?.menu) || 'Custom Feast Menu';
    }

    let arr = getSectionArray(sec);
    if (editId) {
        const idx = arr.findIndex(x => x.id === editId);
        if (idx !== -1) arr[idx] = { ...arr[idx], ...newObj };
    } else {
        arr.push(newObj);
    }

    closeRecordModal();
    saveLocalState();
    renderAll();
    pushDataToGoogleSheet();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('themeIcon');
    icon.className = document.body.classList.contains('dark') ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon';
}