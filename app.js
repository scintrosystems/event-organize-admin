// 1. HARDCODED GOOGLE SHEET CONFIGURATION
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw4PnVn44BmMAFUrZ34fVPAlKUYLKk2ztD6jCvFYxKjYgH5sVSio0fVYeGa-SFJAYrB/exec";

// 2. INITIAL EVENT AGENDA
const INITIAL_SCHEDULE = [
    { id: 'sc-1', section: 'schedule', date: 'Nov 19', time: '04:00 AM onwards', title: 'Arrival & Hotel Check-in (Sri Kaliswari)', location: 'Sri Kaliswari Le Archids, Sivakasi', transport: 'Marazzo / Taxi', person: 'Arunkumar', notes: 'Check room keys on arrival', status: 'Confirmed' },
    { id: 'sc-2', section: 'schedule', date: 'Nov 19', time: '05:30 PM – 07:00 PM', title: 'Jakkamma Kovil Pooja Visit & Family Blessings', location: 'Jakkamma Kovil, Sivakasi', transport: 'Mahindra Marazzo', person: 'Family', notes: 'Carry flowers & pooja basket', status: 'Scheduled' },
    { id: 'sc-3', section: 'schedule', date: 'Nov 20', time: '05:30 AM – 06:30 AM', title: 'Ganapathy Homam (Iyer Confirmed: Kalidass)', location: 'New House Pooja Hall, Sivakasi', transport: '—', person: 'Iyer Kalidass (Adv: ₹500, Tot: ₹6000)', notes: 'Samagri box ready by 5 AM', status: 'Confirmed' },
    { id: 'sc-4', section: 'schedule', date: 'Nov 20', time: '07:00 AM – 07:30 AM', title: 'Breakfast (Idiyappam, Idli, Pongal)', location: 'Dining Area, Sivakasi', transport: '—', person: 'Appans Hotel (60 Members)', notes: 'Hot filter coffee served', status: 'Confirmed' },
    { id: 'sc-5', section: 'schedule', date: 'Nov 20', time: '08:30 AM', title: 'Leave from Building using Force Urbania', location: 'New House Portico, Sivakasi', transport: 'Force Urbania (14 Seater)', person: 'All Family Members', notes: '14 seater vehicle departure', status: 'Confirmed' },
    { id: 'sc-6', section: 'schedule', date: 'Nov 20', time: '10:00 AM onwards', title: 'Cleaning & Final Event Decoration Work', location: 'New House, Sivakasi', transport: '—', person: 'Arunkumar & Family', notes: 'Stage and entrance floral check', status: 'Scheduled' },
    { id: 'sc-7', section: 'schedule', date: 'Nov 20', time: '12:00 PM – 02:30 PM', title: 'Grand Housewarming Feast Lunch (Full Meals)', location: 'Dining Hall, Sivakasi', transport: '—', person: 'Appans Hotel (40 Members)', notes: 'Traditional banana leaf spread', status: 'Confirmed' },
    { id: 'sc-8', section: 'schedule', date: 'Nov 20', time: '04:00 PM', title: 'Evening Snacks & Tea/Coffee (Watermelon Juice)', location: 'Dining Hall, Sivakasi', transport: '—', person: 'Appans Hotel (40 Members)', notes: 'Tea, coffee & fresh fruit juice', status: 'Confirmed' },
    { id: 'sc-9', section: 'schedule', date: 'Nov 20', time: '05:00 PM onwards', title: 'Evening Celebrations & Guest Reception Starts', location: 'New House Lawn & Hall, Sivakasi', transport: '—', person: 'Family Coordinators', notes: 'Thamboolam bags distribution', status: 'Scheduled' },
    { id: 'sc-10', section: 'schedule', date: 'Nov 20', time: '08:00 PM onwards', title: 'Traditional Dinner (Veg Fried Rice & Aappam)', location: 'Dining Area, Sivakasi', transport: '—', person: 'Appans Hotel (40 Members)', notes: 'Aappam with thenkaai paal & curry', status: 'Confirmed' },
    { id: 'sc-11', section: 'schedule', date: 'Nov 21', time: '09:00 AM – 11:30 AM', title: 'Kuladeivam Temple Visit', location: 'Family Temple', transport: 'Innova / Marazzo', person: 'Uncle Ramesh & Family', notes: 'Traditional coconut offering', status: 'Scheduled' },
    { id: 'sc-12', section: 'schedule', date: 'Nov 21', time: '10:00 AM onwards', title: 'Room Checkout (Sri Kaliswari & JB Sri Ram)', location: 'Sivakasi & Virudhunagar', transport: 'Dedicated Taxis', person: 'Arunkumar', notes: 'Verify room clearances and dues', status: 'Pending' }
];

// 3. INITIAL ROOMS
const INITIAL_ROOMS = [
    { id: 'rm-1', section: 'rooms', name: 'Sri Kaliswari Le Archids', location: 'Sri Kaliswari Le Archids, Sivakasi', phone: '8098615353', details: '3 Double Bedrooms • ₹2200+GST/room (2 Max) • Extra bed max 1 (₹650+GST)', timing: '19-Nov 4:00 AM to 21-Nov 10:00 AM', date: 'Nov 19', bookedBy: 'Arunkumar', notes: '3 Deluxe rooms on 1st floor', status: 'Confirmed' },
    { id: 'rm-2', section: 'rooms', name: 'JB Sri Ram Residency', location: 'JB Sri Ram Residency, Virudhunagar', phone: '7305153210', details: '1 Mini Suite • ₹5000+GST (2 Max) • Extra bed max 1 (₹1000+GST)', timing: '20-Nov 4:00 AM to 21-Nov 8:00 PM', date: 'Nov 20', bookedBy: 'Arunkumar', notes: 'Late checkout arranged till 8 PM', status: 'Confirmed' },
    { id: 'rm-3', section: 'rooms', name: 'JB Sri Ram Residency', location: 'JB Sri Ram Residency, Virudhunagar', phone: '7305153210', details: '1 Premium Suite • ₹8500+GST (4 Max) • Extra bed max 2', timing: '20-Nov 4:00 AM to 21-Nov 8:00 PM', date: 'Nov 20', bookedBy: 'Arunkumar', notes: 'Spacious suite for elders', status: 'Confirmed' }
];

// 4. INITIAL VEHICLES
const INITIAL_VEHICLES = [
    { id: 'vh-1', section: 'vehicles', name: 'Luxury Vacations (Mahindra Marazzo)', model: 'Mahindra Marazzo (7 Seater)', contactPerson: 'Viji', phone: '8489489383', location: 'Sivakasi', rate: '₹3000/day + ₹13/KM', timing: '18-Nov 4:00 AM to 22-Nov 10:00 AM', date: 'Nov 18', bookedBy: 'Arunkumar', notes: 'Driver is Sivakasi. Only concern about return to home timing.', status: 'Confirmed' },
    { id: 'vh-2', section: 'vehicles', name: 'Sri Annai Tours And Travels (Force Urbania)', model: 'Force Urbania (14 Seater)', contactPerson: 'Soundararajan K P', phone: '9360188819', location: 'Virudhunagar', rate: '₹7500/day + ₹25/KM', timing: '20-Nov 3:30 AM to 10:00 PM', date: 'Nov 20', bookedBy: 'Arunkumar', notes: 'Used for 8:30 AM group departure', status: 'Confirmed' },
    { id: 'vh-3', section: 'vehicles', name: 'Sri Annai Tours And Travels (Toyota Innova)', model: 'Toyota Innova (7 Seater)', contactPerson: 'Soundararajan K P', phone: '9360188819', location: 'Virudhunagar', rate: '₹3500/day + ₹15/KM', timing: '20-Nov 3:30 AM to 10:00 PM', date: 'Nov 20', bookedBy: 'Arunkumar', notes: 'Driver is Virudhunagar', status: 'Confirmed' },
    { id: 'vh-4', section: 'vehicles', name: 'Sri Annai Tours And Travels (Innova Crysta)', model: 'Toyota Innova Crysta (7 Seater)', contactPerson: 'Soundararajan K P', phone: '9360188819', location: 'Virudhunagar', rate: '₹4500/day + ₹17/KM', timing: '20-Nov 3:30 AM to 10:00 PM', date: 'Nov 20', bookedBy: 'Arunkumar', notes: 'Available on standby', status: 'Scheduled' }
];

// 5. INITIAL FOOD
const INITIAL_FOOD = [
    { id: 'fd-1', section: 'food', caterer: 'Appans Hotel', place: 'Appans Hotel, Sivakasi', contactPerson: 'Catering Lead', mealType: 'Morning Tiffen', menu: 'Idiyappam, Idli, Pongal', headcount: '60 Members (Relatives + Scintro)', price: '', date: 'Nov 20', time: '7:00 AM – 7:30 AM', bookedBy: 'Arunkumar', notes: 'Breakfast ready at 6:45 AM', status: 'Confirmed' },
    { id: 'fd-2', section: 'food', caterer: 'Appans Hotel', place: 'Appans Hotel, Sivakasi', contactPerson: 'Catering Lead', mealType: 'Lunch', menu: 'Full Meals with Banana Leaf', headcount: '40 Members (Relative: 20, Scintro: 20)', price: '', date: 'Nov 20', time: '12:00 PM', bookedBy: 'Arunkumar', notes: 'Banana leaves & servers arranged', status: 'Confirmed' },
    { id: 'fd-3', section: 'food', caterer: 'Appans Hotel', place: 'Appans Hotel, Sivakasi', contactPerson: 'Catering Lead', mealType: 'Evening Snack', menu: 'Watermelon Juice, Tea, Coffee', headcount: '40 Members (Relative: 40)', price: '', date: 'Nov 20', time: '4:00 PM', bookedBy: 'Arunkumar', notes: 'Keep extra cups & sugar ready', status: 'Confirmed' },
    { id: 'fd-4', section: 'food', caterer: 'Appans Hotel', place: 'Appans Hotel, Sivakasi', contactPerson: 'Catering Lead', mealType: 'Dinner', menu: 'Veg Fried Rice, Aappam with Thengai paal and Kadalai Kari', headcount: '40 Members (Relative: 40)', price: '', date: 'Nov 20', time: '8:00 PM', bookedBy: 'Arunkumar', notes: 'Live aappam counter in dining area', status: 'Confirmed' }
];

// 6. INITIAL POOJA LIST
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

// 7. INITIAL TO-DO TASKS
const INITIAL_TODO = [
    { id: 'td-1', section: 'todo', title: 'Iyer Kalidass Payment: Total ₹6000, Advance ₹500 paid. Balance ₹5500 envelope ready', date: 'Nov 20', time: 'Nov 20 - 9:00 AM', person: 'Arunkumar', notes: 'Give envelope after homam poornahuthi', status: 'In Progress' },
    { id: 'td-2', section: 'todo', title: 'Luxury Vacations (Marazzo - Viji): Confirm Nov 18 4:00 AM arrival and driver home return timing', date: 'Nov 18', time: 'Nov 18 - 4:00 AM', person: 'Arunkumar', notes: 'Confirm fuel & driver food allowance', status: 'Confirmed' },
    { id: 'td-3', section: 'todo', title: 'Sri Annai Travels: Confirm Force Urbania 3:30 AM arrival for 8:30 AM group departure', date: 'Nov 20', time: 'Nov 20 - 3:30 AM', person: 'Arunkumar', notes: 'Remind driver Soundararajan night before', status: 'Confirmed' },
    { id: 'td-4', section: 'todo', title: 'Bring Garden Items: Pack Seeniyavaraikkai Vaththal & Vendikkai Vaththal to house', date: 'Nov 19', time: 'Nov 19 - 6:00 PM', person: 'Family', notes: 'Pack in airtight containers', status: 'Completed' },
    { id: 'td-5', section: 'todo', title: 'Cleaning and Decoration check at 10:00 AM after breakfast', date: 'Nov 20', time: 'Nov 20 - 10:00 AM', person: 'Arunkumar', notes: 'Ensure flower waste is cleared promptly', status: 'Scheduled' }
];

// 8. INITIAL CONTACTS
const INITIAL_CONTACTS = [
    { id: 'ct-1', section: 'contacts', category: 'Hotel Manager', name: 'Sri Kaliswari Le Archids Manager', phone: '8098615353', location: 'Sri Kaliswari Le Archids, Sivakasi', service: '3 Double Bedrooms Booking (Nov 19-21)', notes: 'Front desk available 24/7' },
    { id: 'ct-2', section: 'contacts', category: 'Hotel Manager', name: 'JB Sri Ram Residency Manager', phone: '7305153210', location: 'JB Sri Ram Residency, Virudhunagar', service: 'Mini & Premium Suites Booking (Nov 20-21)', notes: 'Suite check-in assistance' },
    { id: 'ct-3', section: 'contacts', category: 'Driver / Travels', name: 'Viji (Luxury Vacations)', phone: '8489489383', location: 'Sivakasi', service: 'Mahindra Marazzo (7 Seater) Driver', notes: 'Local driver familiar with all temples' },
    { id: 'ct-4', section: 'contacts', category: 'Driver / Travels', name: 'Soundararajan K P (Sri Annai Travels)', phone: '9360188819', location: 'Virudhunagar', service: 'Force Urbania (14-Str) & Toyota Innova Booking', notes: 'Coordinates all Annai fleet vehicles' },
    { id: 'ct-5', section: 'contacts', category: 'Priest / Iyer', name: 'Iyer Kalidass', phone: '—', location: 'Pooja Hall, Sivakasi', service: 'Ganapathy Homam & All Ceremonies (Adv: ₹500, Tot: ₹6000)', notes: 'Arrives at 5:00 AM on Nov 20' },
    { id: 'ct-6', section: 'contacts', category: 'Catering Lead', name: 'Appans Hotel Catering Team', phone: '—', location: 'Appans Hotel, Sivakasi', service: 'Breakfast (60 Pax), Lunch, Snacks, Dinner', notes: 'Contact for live counter timing' },
    { id: 'ct-7', section: 'contacts', category: 'Coordinator Lead', name: 'Arunkumar', phone: '—', location: 'Family', service: 'Overall Bookings, Finances & Vendor Management', notes: 'Main point of contact for family' }
];

// STATE MANAGEMENT
let scheduleData = [];
let roomsData = [];
let vehiclesData = [];
let shoppingData = [];
let todoData = [];
let foodData = [];
let contactsData = [];
let customSections = [];
let customItemsData = [];

let activeTab = 'schedule';
let currentDayFilter = 'all';
let currentTimeSort = 'none';

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
            if (parsed.schedule && parsed.schedule.length > 0) {
                scheduleData = parsed.schedule;
                roomsData = parsed.rooms || [...INITIAL_ROOMS];
                vehiclesData = parsed.vehicles || [...INITIAL_VEHICLES];
                shoppingData = parsed.shopping || [...INITIAL_SHOPPING];
                todoData = parsed.todo || [...INITIAL_TODO];
                foodData = parsed.food || [...INITIAL_FOOD];
                contactsData = parsed.contacts || [...INITIAL_CONTACTS];
                customSections = parsed.customSections || [];
                customItemsData = parsed.customItemsData || [];
                return;
            }
        } catch (e) { console.error("Corrupt local storage", e); }
    }
    scheduleData = [...INITIAL_SCHEDULE];
    roomsData = [...INITIAL_ROOMS];
    vehiclesData = [...INITIAL_VEHICLES];
    shoppingData = [...INITIAL_SHOPPING];
    todoData = [...INITIAL_TODO];
    foodData = [...INITIAL_FOOD];
    contactsData = [...INITIAL_CONTACTS];
    customSections = [];
    customItemsData = [];
    saveLocalState();
    pushDataToGoogleSheet();
}

function saveLocalState() {
    localStorage.setItem('griha_pravesam_data_store', JSON.stringify({
        schedule: scheduleData,
        rooms: roomsData,
        vehicles: vehiclesData,
        shopping: shoppingData,
        todo: todoData,
        food: foodData,
        contacts: contactsData,
        customSections: customSections,
        customItemsData: customItemsData
    }));
    updateKPIs();
}

// UTILITY FUNCTIONS
function getStatusBadge(status, id, section) {
    const map = {
        'Completed': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300',
        'Confirmed': 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300',
        'In Progress': 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300',
        'Scheduled': 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300',
        'Pending': 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300'
    };
    const style = map[status] || 'bg-slate-100 text-slate-700 border-slate-300';
    return `<button onclick="cycleStatusBadge('${id}', '${section}')" title="Click to cycle status" class="px-2 py-0.5 text-[10px] font-bold rounded-full border transition hover:scale-105 active:scale-95 ${style}">
        ${status} <i class="fa-solid fa-arrows-rotate text-[9px] ml-0.5 opacity-60"></i>
    </button>`;
}

function highlightPhoneNumbers(text) {
    if (!text) return '—';
    return text.replace(/(\+?\d[\d\s-]{8,14}\d)/g, '<a href="tel:$1" class="text-amber-600 font-bold underline inline-flex items-center gap-1"><i class="fa-solid fa-phone text-[9px]"></i>$1</a>');
}

function extractPhone(text) {
    if (!text) return '';
    const match = text.match(/(\+?\d[\d\s-]{8,14}\d)/);
    return match ? match[0] : '';
}

function formatLocationLink(loc) {
    if (!loc || loc === '—') return '—';
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}`;
    return `<a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 font-semibold hover:underline inline-flex items-center gap-1 group" title="Open in Google Maps">
        <i class="fa-solid fa-location-dot text-rose-500 text-[10px] group-hover:scale-125 transition"></i>
        <span>${loc}</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-[8px] opacity-70"></i>
    </a>`;
}

// SMART DAY MATCHING HELPER
function matchesDay(item, targetDay) {
    if (!targetDay || targetDay === 'all') return true;

    const dayNum = targetDay.replace(/\D/g, '');
    if (!dayNum) return true;

    const pool = `${item.date || ''} ${item.timing || ''} ${item.time || ''} ${item.title || ''} ${item.details || ''} ${item.notes || ''}`.toLowerCase();

    if (pool.includes(`nov ${dayNum}`) ||
        pool.includes(`${dayNum}-nov`) ||
        pool.includes(`${dayNum} nov`) ||
        pool.includes(`nov${dayNum}`)) {
        return true;
    }

    if (pool.includes('19-nov') && pool.includes('21-nov')) {
        const num = parseInt(dayNum, 10);
        if (num >= 19 && num <= 21) return true;
    }
    if (pool.includes('20-nov') && pool.includes('21-nov')) {
        const num = parseInt(dayNum, 10);
        if (num >= 20 && num <= 21) return true;
    }
    if (pool.includes('18-nov') && pool.includes('22-nov')) {
        const num = parseInt(dayNum, 10);
        if (num >= 18 && num <= 22) return true;
    }

    return false;
}

function parseDateToScore(dateStr, timeStr) {
    const full = `${dateStr || ''} ${timeStr || ''}`.toLowerCase();
    let dayNum = 99;

    if (full.includes('nov 18') || full.includes('18-nov') || full.includes('18')) dayNum = 18;
    else if (full.includes('nov 19') || full.includes('19-nov') || full.includes('19')) dayNum = 19;
    else if (full.includes('nov 20') || full.includes('20-nov') || full.includes('20')) dayNum = 20;
    else if (full.includes('nov 21') || full.includes('21-nov') || full.includes('21')) dayNum = 21;
    else if (full.includes('nov 22') || full.includes('22-nov') || full.includes('22')) dayNum = 22;

    const timeMins = parseTimeToMinutes(timeStr || dateStr);
    return (dayNum * 10000) + timeMins;
}

function parseTimeToMinutes(timeStr) {
    if (!timeStr) return 9999;
    const s = String(timeStr).trim();

    if (s.toLowerCase().includes('morning') && !s.match(/\d:\d/)) return 480;
    if (s.toLowerCase().includes('afternoon') && !s.match(/\d:\d/)) return 780;
    if (s.toLowerCase().includes('evening') && !s.match(/\d:\d/)) return 1020;
    if (s.toLowerCase().includes('night') && !s.match(/\d:\d/)) return 1260;

    let match = s.match(/(?:^|[^\d])(\d{1,2})[:.](\d{2})\s*(AM|PM)?/i);
    if (!match) match = s.match(/(?:^|[^\d])(\d{1,2})\s*(AM|PM)/i);
    if (!match) return 9999;

    let hours = parseInt(match[1], 10);
    let minutes = match[2] && !isNaN(parseInt(match[2], 10)) ? parseInt(match[2], 10) : 0;
    let ampm = (match[3] || match[2] || '').toUpperCase();

    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    return hours * 60 + minutes;
}

function sortItemsChronologically(items) {
    return [...items].sort((a, b) => {
        const scoreA = parseDateToScore(a.date || a.timing || a.time, a.time || a.timing);
        const scoreB = parseDateToScore(b.date || b.timing || b.time, b.time || b.timing);
        if (currentTimeSort === 'desc') return scoreB - scoreA;
        return scoreA - scoreB;
    });
}

function filterByDay(day) {
    currentDayFilter = day;

    ['all', 'Nov 19', 'Nov 20', 'Nov 21'].forEach(d => {
        const btnId = 'btnDay-' + d.replace(/\s+/g, '');
        const btn = document.getElementById(btnId);
        if (!btn) return;
        if (d === day) {
            btn.className = 'px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-600 text-white shrink-0 shadow-sm transition';
        } else {
            btn.className = 'px-2 py-0.5 text-[11px] font-semibold rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100 shrink-0 transition';
        }
    });

    const lbl = document.getElementById('dayviewCurrentLabel');
    if (lbl) lbl.innerText = day === 'all' ? 'All Days' : day;

    renderAll();
}

function filterScheduleDay(day) {
    filterByDay(day);
}

function toggleTimeSort() {
    if (currentTimeSort === 'none') currentTimeSort = 'asc';
    else if (currentTimeSort === 'asc') currentTimeSort = 'desc';
    else currentTimeSort = 'none';

    updateTimeSortUI();
    renderAll();
}

function updateTimeSortUI() {
    const btn = document.getElementById('btnTimeSort');
    const lbl = document.getElementById('timeSortLabel');
    if (!btn || !lbl) return;

    if (currentTimeSort === 'asc') {
        lbl.innerText = 'Earliest ⬆';
        btn.className = 'px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-600 text-white shadow-sm flex items-center gap-1';
    } else if (currentTimeSort === 'desc') {
        lbl.innerText = 'Latest ⬇';
        btn.className = 'px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-600 text-white shadow-sm flex items-center gap-1';
    } else {
        lbl.innerText = 'Default';
        btn.className = 'px-2 py-0.5 text-[11px] font-semibold rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-amber-100 flex items-center gap-1';
    }
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
            roomsData = [...INITIAL_ROOMS];
            vehiclesData = [...INITIAL_VEHICLES];
            shoppingData = [...INITIAL_SHOPPING];
            todoData = [...INITIAL_TODO];
            foodData = [...INITIAL_FOOD];
            contactsData = [...INITIAL_CONTACTS];
            customSections = [];
            customItemsData = [];

            saveLocalState();
            renderAll();
            pushDataToGoogleSheet();
            localStorage.setItem('griha_pravesam_seeded', 'true');
            updateSyncUI('Seeded Defaults', 'emerald');
            return;
        }

        if (!Array.isArray(data) || data.length <= 1) {
            scheduleData = []; roomsData = []; vehiclesData = [];
            shoppingData = []; todoData = []; foodData = []; contactsData = [];
            customSections = []; customItemsData = [];
            saveLocalState();
            renderAll();
            updateSyncUI('Live Synced (Empty)', 'emerald');
            return;
        }

        const seenIds = new Set();
        let s = [], rm = [], vh = [], sh = [], td = [], fd = [], ct = [], custSec = [], custItems = [];

        for (let i = 1; i < data.length; i++) {
            const r = data[i];
            if (!r || !r[0]) continue;

            const id = String(r[0]).trim();
            if (seenIds.has(id)) continue;
            seenIds.add(id);

            const sec = String(r[1] || 'schedule').toLowerCase().trim();

            if (sec === 'meta_section') {
                custSec.push({ id: String(r[2]), name: r[4] });
            } else if (sec.startsWith('custom_')) {
                custItems.push({
                    id, section: sec, title: r[4] || '', date: r[2] || '', time: r[3] || '',
                    location: r[5] || '', transport: r[6] || '', person: r[7] || '', status: r[8] || 'Confirmed', notes: r[11] || r[9] || ''
                });
            } else if (sec === 'food') {
                fd.push({
                    id, section: 'food', date: cleanDate(r[2]) || 'Nov 20', time: cleanTime(r[3]), mealType: r[3] || 'Meal',
                    caterer: r[4] || 'Appans Hotel', place: r[5] || 'Sivakasi', bookedBy: r[6], contactPerson: r[7],
                    status: r[8] || 'Confirmed', menu: r[9], headcount: r[10] || '40 Max', notes: r[11] || ''
                });
            } else if (sec === 'rooms' || (sec === 'logistics' && String(r[2]).includes('Room'))) {
                rm.push({
                    id, section: 'rooms', name: r[4] || 'Hotel', location: r[5] || 'Sivakasi', phone: extractPhone(r[3]),
                    details: r[3] || '', timing: r[6] || '', date: cleanDate(r[2]) || 'Nov 19', bookedBy: r[7] || 'Arunkumar', status: r[8] || 'Confirmed', notes: r[9] || ''
                });
            } else if (sec === 'vehicles' || (sec === 'logistics' && String(r[2]).includes('Vehicle'))) {
                vh.push({
                    id, section: 'vehicles', name: r[4] || 'Travels', model: r[4], contactPerson: r[7] || '',
                    phone: extractPhone(r[3]), location: r[5] || '', rate: r[3] || '', timing: r[6] || '', date: cleanDate(r[2]) || 'Nov 20',
                    bookedBy: 'Arunkumar', status: r[8] || 'Confirmed', notes: r[9] || ''
                });
            } else if (sec === 'contacts') {
                ct.push({
                    id, section: 'contacts', category: r[2] || 'Coordinator', service: r[3] || '',
                    name: r[4] || '', location: r[5] || '', phone: r[7] || '—', notes: r[9] || ''
                });
            } else {
                const item = {
                    id, section: sec, date: cleanDate(r[2]) || r[2], category: r[2] || '',
                    time: cleanTime(r[3]) || r[3], details: r[3] || '', notes: r[9] || r[3] || '',
                    title: r[4] || '', name: r[4] || '', location: r[5] || '', transport: r[6] || '',
                    person: r[7] || '', status: r[8] || 'Scheduled'
                };
                if (sec === 'schedule') s.push(item);
                else if (sec === 'shopping') sh.push(item);
                else if (sec === 'todo') td.push(item);
            }
        }

        scheduleData = s;
        roomsData = rm.length ? rm : [...INITIAL_ROOMS];
        vehiclesData = vh.length ? vh : [...INITIAL_VEHICLES];
        shoppingData = sh;
        todoData = td;
        foodData = fd;
        contactsData = ct.length ? ct : [...INITIAL_CONTACTS];
        customSections = custSec;
        customItemsData = custItems;

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
        ...scheduleData.map(x => ({ ...x, section: 'schedule', notes: x.notes })),
        ...roomsData.map(x => ({ ...x, section: 'rooms', category: 'Room Stay', title: x.name, details: x.details, location: x.location, transport: x.timing, person: x.phone, notes: x.notes, status: x.status })),
        ...vehiclesData.map(x => ({ ...x, section: 'vehicles', category: 'Vehicle', title: x.name, details: x.rate, location: x.location, transport: x.timing, person: x.phone, notes: x.notes, status: x.status })),
        ...foodData.map(x => ({ ...x, section: 'food', notes: x.notes })),
        ...shoppingData.map(x => ({ ...x, section: 'shopping', notes: x.notes })),
        ...todoData.map(x => ({ ...x, section: 'todo', notes: x.notes })),
        ...contactsData.map(x => ({ ...x, section: 'contacts', category: x.category, details: x.service, title: x.name, location: x.location, person: x.phone, notes: x.notes, status: 'Confirmed' })),

        ...customSections.map(s => ({
            id: `meta_${s.id}`,
            section: 'meta_section',
            date: s.id,
            category: s.id,
            time: '',
            details: '',
            title: s.name,
            location: '',
            transport: '',
            person: '',
            status: 'Active',
            notes: '',
            price: ''
        })),

        ...customItemsData.map(x => ({
            id: x.id,
            section: x.section,
            date: x.date || '',
            category: x.date || '',
            time: x.time || '',
            details: x.time || '',
            title: x.title || '',
            location: x.location || '',
            transport: x.transport || '',
            person: x.person || '',
            status: x.status || 'Confirmed',
            menu: '',
            headcount: '',
            notes: x.notes || '',
            price: x.notes || ''
        }))
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
        badge.className = 'inline-flex items-center gap-1 font-semibold px-1.5 py-0.2 rounded-full bg-emerald-800/80 text-emerald-200 text-[9px]';
        dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse';
    } else {
        badge.className = 'inline-flex items-center gap-1 font-semibold px-1.5 py-0.2 rounded-full bg-amber-700/80 text-amber-100 text-[9px]';
        dot.className = 'w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse';
    }
}

function updateKPIs() {
    const totalSched = scheduleData.length;
    const doneSched = scheduleData.filter(i => i.status === 'Completed' || i.status === 'Confirmed').length;
    const pct = totalSched > 0 ? Math.round((doneSched / totalSched) * 100) : 0;

    const elReadiness = document.getElementById('kpiReadiness');
    const elReadinessSub = document.getElementById('kpiReadinessSub');
    if (elReadiness) elReadiness.innerText = pct + '%';
    if (elReadinessSub) elReadinessSub.innerText = `${doneSched} of ${totalSched} Ready`;

    const elLogistics = document.getElementById('kpiLogistics');
    const elLogisticsSub = document.getElementById('kpiLogisticsSub');
    if (elLogistics) elLogistics.innerText = (roomsData.length + vehiclesData.length);
    if (elLogisticsSub) elLogisticsSub.innerText = `${roomsData.length} Rooms, ${vehiclesData.length} Vehicles`;

    const pendingShop = shoppingData.filter(i => i.status !== 'Completed').length;
    const elShopping = document.getElementById('kpiShopping');
    const elShoppingSub = document.getElementById('kpiShoppingSub');
    if (elShopping) elShopping.innerText = shoppingData.length;
    if (elShoppingSub) elShoppingSub.innerText = `${pendingShop} Pending`;

    const pendingTodo = todoData.filter(i => i.status === 'Pending' || i.status === 'In Progress').length;
    const elTodo = document.getElementById('kpiTodo');
    const elTodoSub = document.getElementById('kpiTodoSub');
    if (elTodo) elTodo.innerText = pendingTodo;
    if (elTodoSub) elTodoSub.innerText = `${todoData.length} Total Tasks`;
}

function renderAll() {
    renderDynamicTabsAndSections();
    renderScheduleTable();
    renderFoodTable();
    renderRoomsTable();
    renderVehiclesTable();
    renderShoppingTable();
    renderTodoTable();
    renderContactsTable();
    renderDayOverview();
    updateKPIs();
    applyActiveTabVisibility();
}

function applyActiveTabVisibility() {
    const allTabIds = ['dayview', 'schedule', 'food', 'rooms', 'vehicles', 'shopping', 'todo', 'contacts', ...customSections.map(s => s.id)];

    allTabIds.forEach(t => {
        const secEl = document.getElementById('sec-' + t);
        const tabEl = document.getElementById('tab-' + t);
        if (secEl) {
            if (t === activeTab) secEl.classList.remove('hidden');
            else secEl.classList.add('hidden');
        }
        if (tabEl) {
            if (t === activeTab) {
                tabEl.classList.add('active', 'text-amber-600');
                tabEl.classList.remove('text-slate-600', 'dark:text-slate-300');
            } else {
                tabEl.classList.remove('active', 'text-amber-600');
                tabEl.classList.add('text-slate-600', 'dark:text-slate-300');
            }
        }
    });

    renderCurrentTab();
}

// DYNAMIC CUSTOM SECTIONS ENGINE
function openNewSectionModal() {
    document.getElementById('newSectionName').value = '';
    document.getElementById('newSectionModal').classList.remove('hidden');
}

function closeNewSectionModal() {
    document.getElementById('newSectionModal').classList.add('hidden');
}

function handleCreateSection(e) {
    e.preventDefault();
    const name = document.getElementById('newSectionName').value.trim();
    if (!name) return;

    const secId = 'custom_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);

    customSections.push({ id: secId, name: name });
    saveLocalState();
    closeNewSectionModal();
    renderAll();
    pushDataToGoogleSheet();
    switchTab(secId);
}

function deleteCustomSection(secId) {
    const sec = customSections.find(s => s.id === secId);
    const secName = sec ? sec.name : 'this tab';

    if (!confirm(`Are you sure you want to delete the "${secName}" tab and all items inside it?`)) return;

    customSections = customSections.filter(s => s.id !== secId);
    customItemsData = customItemsData.filter(i => i.section !== secId);

    saveLocalState();
    switchTab('schedule');
    renderAll();
    pushDataToGoogleSheet();
}

function renderDynamicTabsAndSections() {
    const btnContainer = document.getElementById('dynamicTabButtonsContainer');
    if (btnContainer) {
        btnContainer.innerHTML = customSections.map(sec => `
            <button onclick="switchTab('${sec.id}')" id="tab-${sec.id}" class="tab-btn px-2.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap transition">
                <i class="fa-solid fa-folder mr-1 text-amber-500"></i> ${sec.name}
            </button>
        `).join('');
    }

    const secContainer = document.getElementById('dynamicSectionsContainer');
    if (secContainer) {
        secContainer.innerHTML = customSections.map(sec => `
            <section id="sec-${sec.id}" class="${sec.id === activeTab ? '' : 'hidden'} space-y-3">
                <div class="glass-card rounded-xl border overflow-hidden shadow-sm">
                    <div class="p-2.5 bg-amber-50/70 dark:bg-slate-800/90 border-b flex justify-between items-center">
                        <div>
                            <h2 class="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-folder-open text-amber-600"></i> ${sec.name}
                            </h2>
                            <p class="text-[10px] text-slate-500">Custom target section</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <!-- Direct + Add button for this custom tab -->
                            <button onclick="openRecordModal('${sec.id}')" class="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-600 hover:bg-amber-500 text-white shadow-sm flex items-center gap-1">
                                <i class="fa-solid fa-plus text-[8px]"></i> Add Item
                            </button>
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900" id="count-${sec.id}">0 Items</span>
                            <button onclick="deleteCustomSection('${sec.id}')" class="text-rose-500 hover:text-rose-700 text-xs p-1" title="Delete this tab">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <div class="overflow-x-auto touch-scroll">
                        <table class="w-full text-left text-xs min-w-[560px]">
                            <thead>
                                <tr class="bg-slate-100 text-slate-500 uppercase text-[10px] tracking-wider border-b">
                                    <th class="p-2.5">Title / Item</th>
                                    <th class="p-2.5">Event Day</th>
                                    <th class="p-2.5">Details / Time</th>
                                    <th class="p-2.5">Location (Google Maps)</th>
                                    <th class="p-2.5">In-Charge</th>
                                    <th class="p-2.5">Status</th>
                                    <th class="p-2.5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="tbody-${sec.id}" class="divide-y divide-slate-200 dark:divide-slate-800"></tbody>
                        </table>
                    </div>
                </div>
            </section>
        `).join('');
    }

    // Refresh modal dropdown options
    const formSelect = document.getElementById('formSection');
    if (formSelect) {
        const baseOptions = `
            <option value="schedule">1. Event Agenda</option>
            <option value="food">2. Food & Catering (Appans Hotel)</option>
            <option value="rooms">3. Rooms (Sri Kaliswari / JB Sri Ram)</option>
            <option value="vehicles">4. Vehicles (Marazzo / Urbania / Innova)</option>
            <option value="shopping">5. Pooja List</option>
            <option value="todo">6. To-Do Tasks</option>
            <option value="contacts">7. Contact Directory</option>
        `;
        const customOptions = customSections.map((s, idx) => `
            <option value="${s.id}">${8 + idx}. ${s.name} (Custom Tab)</option>
        `).join('');
        formSelect.innerHTML = baseOptions + customOptions;
    }

    customSections.forEach(sec => renderCustomSectionTable(sec.id));
}

function renderCustomSectionTable(secId) {
    const tbody = document.getElementById(`tbody-${secId}`);
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = customItemsData.filter(i => i.section === secId && matchesDay(i, currentDayFilter));

    if (search) {
        rows = rows.filter(i => (i.title && i.title.toLowerCase().includes(search)) ||
            (i.person && i.person.toLowerCase().includes(search)) ||
            (i.location && i.location.toLowerCase().includes(search)) ||
            (i.notes && i.notes.toLowerCase().includes(search)));
    }

    rows = sortItemsChronologically(rows);

    const countBadge = document.getElementById(`count-${secId}`);
    if (countBadge) countBadge.innerText = `${rows.length} Items`;

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="7" class="p-4 text-center text-slate-400">No items found matching filter. Click "+ Add" to create one.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5">
                    <span class="font-bold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                    ${r.notes ? `<span class="text-[10px] text-slate-500 italic block mt-0.5"><i class="fa-regular fa-note-sticky text-amber-500 mr-1 text-[8px]"></i>${r.notes}</span>` : ''}
                </td>
                <td class="p-2.5"><span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-200 dark:bg-slate-700">${r.date || '—'}</span></td>
                <td class="p-2.5 text-[11px] text-slate-600 dark:text-slate-300">${r.time || '—'}</td>
                <td class="p-2.5">${formatLocationLink(r.location)}</td>
                <td class="p-2.5 font-medium text-slate-700 dark:text-slate-300">${r.person || '—'}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, r.section)}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', '${r.section}')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', '${r.section}')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

// STANDARD TABLES RENDERING
function renderScheduleTable() {
    const tbody = document.getElementById('scheduleTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = scheduleData.filter(item => matchesDay(item, currentDayFilter) &&
        (!search || item.title.toLowerCase().includes(search) || item.person.toLowerCase().includes(search)));

    rows = sortItemsChronologically(rows);

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="7" class="p-4 text-center text-slate-400">No events found matching filter.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5 whitespace-nowrap"><span class="font-bold text-amber-600 block">${r.date}</span><span class="text-[10px] text-slate-400 block">${r.time}</span></td>
                <td class="p-2.5">
                    <span class="font-semibold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                    ${r.notes ? `<span class="text-[10px] text-slate-500 italic block mt-0.5"><i class="fa-solid fa-note-sticky text-[8px] text-amber-500 mr-1"></i>${r.notes}</span>` : ''}
                </td>
                <td class="p-2.5">${formatLocationLink(r.location)}</td>
                <td class="p-2.5 text-slate-600 dark:text-slate-300">${r.transport}</td>
                <td class="p-2.5 font-medium text-slate-700 dark:text-slate-300">${r.person}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'schedule')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'schedule')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'schedule')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderFoodTable() {
    const tbody = document.getElementById('foodTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = foodData.filter(item => matchesDay(item, currentDayFilter) &&
        (!search || item.caterer.toLowerCase().includes(search) || item.mealType.toLowerCase().includes(search) || (item.menu && item.menu.toLowerCase().includes(search))));

    rows = sortItemsChronologically(rows);

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="7" class="p-4 text-center text-slate-400">No meals found for this day.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5 whitespace-nowrap"><span class="font-bold text-amber-600 block">${r.mealType || 'Meal'}</span><span class="text-[10px] text-slate-400 block">${r.time} • ${r.date}</span></td>
                <td class="p-2.5 font-bold">${r.caterer}<span class="text-[10px] text-slate-400 block">${formatLocationLink(r.place)}</span></td>
                <td class="p-2.5">
                    <div class="text-[11px] bg-amber-50/70 dark:bg-amber-950/40 p-1.5 rounded-lg border leading-tight">${(r.menu || 'Menu TBD').replace(/\n/g, '<br>')}</div>
                    ${r.notes ? `<span class="text-[10px] text-slate-500 italic block mt-0.5">${r.notes}</span>` : ''}
                </td>
                <td class="p-2.5 font-semibold">${r.headcount}</td>
                <td class="p-2.5 text-slate-600 dark:text-slate-300">${r.contactPerson || r.bookedBy || '—'}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'food')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'food')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'food')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderRoomsTable() {
    const tbody = document.getElementById('roomsTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = roomsData.filter(item => matchesDay(item, currentDayFilter) &&
        (!search || item.name.toLowerCase().includes(search) || item.details.toLowerCase().includes(search)));

    rows = sortItemsChronologically(rows);

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="7" class="p-4 text-center text-slate-400">No rooms found for this day.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5 font-bold text-slate-800 dark:text-slate-100">
                    ${r.name}
                    ${r.notes ? `<span class="text-[10px] text-slate-500 italic block font-normal">${r.notes}</span>` : ''}
                </td>
                <td class="p-2.5">${formatLocationLink(r.location)}</td>
                <td class="p-2.5 text-[11px] text-slate-600 dark:text-slate-300">${highlightPhoneNumbers(r.details)}</td>
                <td class="p-2.5 text-[11px] font-semibold text-amber-600">${r.timing}</td>
                <td class="p-2.5 text-slate-700 dark:text-slate-300">${r.bookedBy}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'rooms')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'rooms')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'rooms')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderVehiclesTable() {
    const tbody = document.getElementById('vehiclesTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = vehiclesData.filter(item => matchesDay(item, currentDayFilter) &&
        (!search || item.name.toLowerCase().includes(search) || item.model.toLowerCase().includes(search)));

    rows = sortItemsChronologically(rows);

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="7" class="p-4 text-center text-slate-400">No vehicles found for this day.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5 font-bold text-slate-800 dark:text-slate-100">${r.name}<span class="text-[10px] text-slate-400 block">${r.model}</span></td>
                <td class="p-2.5 text-slate-700 dark:text-slate-300">
                    <div class="font-semibold">${r.contactPerson}</div>
                    <div class="text-[10px]">${highlightPhoneNumbers(r.phone)}</div>
                </td>
                <td class="p-2.5">${formatLocationLink(r.location)}</td>
                <td class="p-2.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">${r.rate}</td>
                <td class="p-2.5 text-[11px] text-slate-600 dark:text-slate-300">
                    <div>${r.timing}</div>
                    ${r.notes ? `<div class="text-[10px] text-amber-600 italic">${r.notes}</div>` : ''}
                </td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'vehicles')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'vehicles')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'vehicles')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderShoppingTable() {
    const tbody = document.getElementById('shoppingTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();
    const rows = shoppingData.filter(item => !search || item.title.toLowerCase().includes(search));

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="6" class="p-4 text-center text-slate-400">No pooja items found.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5"><span class="px-1.5 py-0.5 text-[10px] font-bold rounded bg-indigo-100 text-indigo-700">${r.category}</span></td>
                <td class="p-2.5 font-semibold text-slate-800 dark:text-slate-100">${r.title}</td>
                <td class="p-2.5 text-[11px] text-slate-600 dark:text-slate-300">${r.notes || '—'}</td>
                <td class="p-2.5 text-slate-700 dark:text-slate-300">${r.person}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'shopping')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'shopping')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'shopping')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderTodoTable() {
    const tbody = document.getElementById('todoTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    let rows = todoData.filter(item => matchesDay(item, currentDayFilter) && (!search || item.title.toLowerCase().includes(search)));
    rows = sortItemsChronologically(rows);

    tbody.innerHTML = rows.length === 0 ? `<tr><td colspan="6" class="p-4 text-center text-slate-400">No to-do tasks found.</td></tr>` :
        rows.map(r => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5 font-semibold text-slate-800 dark:text-slate-100">${r.title}</td>
                <td class="p-2.5 text-[10px] text-slate-500 font-bold">${r.date || r.time}</td>
                <td class="p-2.5 text-[11px] text-slate-500 italic">${r.notes || '—'}</td>
                <td class="p-2.5 text-slate-700 dark:text-slate-300">${r.person}</td>
                <td class="p-2.5">${getStatusBadge(r.status, r.id, 'todo')}</td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${r.id}', 'todo')" class="text-amber-600 p-1 mr-1"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${r.id}', 'todo')" class="text-rose-500 p-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

function renderContactsTable() {
    const tbody = document.getElementById('contactsTableBody');
    if (!tbody) return;
    const search = (document.getElementById('searchInput').value || '').toLowerCase();

    const filtered = contactsData.filter(c => !search || c.name.toLowerCase().includes(search) || c.category.toLowerCase().includes(search) || c.location.toLowerCase().includes(search) || c.phone.includes(search));

    const countEl = document.getElementById('contactDirectoryCount');
    if (countEl) countEl.innerText = `${filtered.length} Contacts`;

    tbody.innerHTML = filtered.length === 0 ? `<tr><td colspan="6" class="p-4 text-center text-slate-400">No contacts found.</td></tr>` :
        filtered.map(c => `
            <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition">
                <td class="p-2.5"><span class="px-2 py-0.5 text-[10px] font-bold rounded-lg ${c.category.includes('Hotel') ? 'bg-blue-100 text-blue-800' : c.category.includes('Driver') ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">${c.category}</span></td>
                <td class="p-2.5 font-bold text-slate-800 dark:text-slate-100">${c.name}</td>
                <td class="p-2.5 font-semibold text-emerald-600 text-xs">${highlightPhoneNumbers(c.phone)}</td>
                <td class="p-2.5">${formatLocationLink(c.location)}</td>
                <td class="p-2.5 text-[11px] text-slate-600 dark:text-slate-300">
                    <div>${c.service}</div>
                    ${c.notes ? `<div class="text-[10px] text-slate-400 italic">${c.notes}</div>` : ''}
                </td>
                <td class="p-2.5 text-right whitespace-nowrap">
                    <button onclick="editRecord('${c.id}', 'contacts')" class="text-amber-600 p-1 mr-1" title="Edit Contact"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteRecord('${c.id}', 'contacts')" class="text-rose-500 p-1" title="Delete Contact"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');
}

// 0. DAY-BY-DAY MASTER OVERVIEW
function renderDayOverview() {
    let dayS = scheduleData.filter(i => matchesDay(i, currentDayFilter));
    dayS = sortItemsChronologically(dayS);

    document.getElementById('dayviewScheduleCount').innerText = `${dayS.length} Events`;
    document.getElementById('dayviewScheduleContainer').innerHTML = dayS.length === 0 ? `<p class="text-xs text-slate-400 py-2">No events scheduled for this day.</p>` :
        dayS.map(r => `
            <div class="py-1.5 flex items-start justify-between gap-1">
                <div>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                    <span class="text-[10px] text-amber-600 font-semibold block">${r.time} • ${formatLocationLink(r.location)}</span>
                </div>
                <div>${getStatusBadge(r.status, r.id, 'schedule')}</div>
            </div>
        `).join('');

    let dayF = foodData.filter(i => matchesDay(i, currentDayFilter));
    dayF = sortItemsChronologically(dayF);

    document.getElementById('dayviewFoodCount').innerText = `${dayF.length} Meals`;
    document.getElementById('dayviewFoodContainer').innerHTML = dayF.length === 0 ? `<p class="text-xs text-slate-400 py-2">No meals logged for this day.</p>` :
        dayF.map(r => {
            const mealDisplay = r.mealType && r.time && r.mealType !== r.time ? `${r.mealType} (${r.time})` : (r.mealType || r.time);
            return `
            <div class="py-1.5 flex items-start justify-between gap-1">
                <div>
                    <span class="text-xs font-bold text-amber-600 block">${mealDisplay}</span>
                    <span class="text-[10px] text-slate-700 dark:text-slate-300 font-medium block">${r.menu || 'Menu TBD'}</span>
                    <span class="text-[9px] text-slate-400">${r.caterer} • ${r.headcount}</span>
                </div>
                <div>${getStatusBadge(r.status, r.id, 'food')}</div>
            </div>
        `}).join('');

    let dayRm = roomsData.filter(i => matchesDay(i, currentDayFilter));
    dayRm = sortItemsChronologically(dayRm);

    document.getElementById('dayviewRoomsCount').innerText = `${dayRm.length} Bookings`;
    document.getElementById('dayviewRoomsContainer').innerHTML = dayRm.length === 0 ? `<p class="text-xs text-slate-400 py-2">No rooms booked for this day.</p>` :
        dayRm.map(r => `
            <div class="py-1.5 flex items-start justify-between gap-1">
                <div>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-100 block">${r.name}</span>
                    <span class="text-[10px] text-blue-600 font-semibold block">${highlightPhoneNumbers(r.phone)} • ${formatLocationLink(r.location)}</span>
                    <span class="text-[9px] text-slate-400 block">${r.timing}</span>
                </div>
                <div>${getStatusBadge(r.status, r.id, 'rooms')}</div>
            </div>
        `).join('');

    let dayVh = vehiclesData.filter(i => matchesDay(i, currentDayFilter));
    dayVh = sortItemsChronologically(dayVh);

    document.getElementById('dayviewVehiclesCount').innerText = `${dayVh.length} Vehicles`;
    document.getElementById('dayviewVehiclesContainer').innerHTML = dayVh.length === 0 ? `<p class="text-xs text-slate-400 py-2">No vehicles booked for this day.</p>` :
        dayVh.map(v => `
            <div class="py-1.5 flex items-start justify-between gap-1">
                <div>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-100 block">${v.name}</span>
                    <span class="text-[10px] text-emerald-600 font-semibold block">${highlightPhoneNumbers(v.phone)} • ${v.rate}</span>
                    <span class="text-[9px] text-slate-400 block">${v.timing}</span>
                </div>
                <div>${getStatusBadge(v.status, v.id, 'vehicles')}</div>
            </div>
        `).join('');

    let dayT = todoData.filter(i => matchesDay(i, currentDayFilter));
    dayT = sortItemsChronologically(dayT);

    document.getElementById('dayviewTodoCount').innerText = `${dayT.length} Tasks`;
    document.getElementById('dayviewTodoContainer').innerHTML = dayT.length === 0 ? `<p class="text-xs text-slate-400 py-2">No to-dos for this day.</p>` :
        dayT.map(r => `
            <div class="py-1.5 flex items-start justify-between gap-1">
                <div>
                    <span class="text-xs font-semibold text-slate-800 dark:text-slate-100 block">${r.title}</span>
                    <span class="text-[10px] text-slate-500">${r.time || r.date} • ${r.person}</span>
                </div>
                <div>${getStatusBadge(r.status, r.id, 'todo')}</div>
            </div>
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
    if (sec === 'rooms') return roomsData;
    if (sec === 'vehicles') return vehiclesData;
    if (sec === 'shopping') return shoppingData;
    if (sec === 'contacts') return contactsData;
    if (sec.startsWith('custom_')) return customItemsData;
    return todoData;
}

// SWITCH TAB FUNCTION
function switchTab(tabId) {
    activeTab = tabId;
    applyActiveTabVisibility();
}

function renderCurrentTab() {
    if (activeTab === 'dayview') renderDayOverview();
    else if (activeTab === 'schedule') renderScheduleTable();
    else if (activeTab === 'food') renderFoodTable();
    else if (activeTab === 'rooms') renderRoomsTable();
    else if (activeTab === 'vehicles') renderVehiclesTable();
    else if (activeTab === 'shopping') renderShoppingTable();
    else if (activeTab === 'todo') renderTodoTable();
    else if (activeTab === 'contacts') renderContactsTable();
    else if (activeTab.startsWith('custom_')) renderCustomSectionTable(activeTab);
}

// =========================================================================
// ✅ ADJUST FORM FIELDS (NOW WITH PROPER DAY DROPDOWN FOR CUSTOM TABS!)
// =========================================================================
function adjustFormFieldsBySection() {
    const sec = document.getElementById('formSection').value;
    const lblTitle = document.getElementById('lblTitle');
    const lblDateOrCat = document.getElementById('lblDateOrCategory');
    const dateWrapper = document.getElementById('dateOrCategoryInputWrapper');
    const lblTime = document.getElementById('lblTimeOrDetails');
    const colLoc = document.getElementById('colLocation');
    const colTrans = document.getElementById('colTransport');
    const colMenu = document.getElementById('colMenu');
    const lblPerson = document.getElementById('lblPerson');
    const colPerson = document.getElementById('colPerson');
    const colStatus = document.getElementById('colStatus');

    if (colMenu) colMenu.classList.add('hidden');
    if (colPerson) colPerson.classList.remove('hidden');
    if (colStatus) colStatus.classList.remove('hidden');

    if (sec.startsWith('custom_')) {
        // ✅ CUSTOM TAB NOW HAS THE PROPER DAY SELECTION DROPDOWN!
        const customSecObj = customSections.find(s => s.id === sec);
        lblTitle.innerText = `${customSecObj ? customSecObj.name : 'Item'} Title / Activity`;
        lblDateOrCat.innerText = 'Event Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 19">Nov 19 (Day 1)</option>
                <option value="Nov 20" selected>Nov 20 (Day 2)</option>
                <option value="Nov 21">Nov 21 (Day 3)</option>
                <option value="All Days">All Days / General</option>
            </select>`;
        lblTime.innerText = 'Time / Specifics / Rate';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Location (Google Maps)';
        document.getElementById('lblTransport').innerText = 'Category / Sub-Tag';
        lblPerson.innerText = 'In-Charge Person & Phone';
    } else if (sec === 'contacts') {
        lblTitle.innerText = 'Contact Name & Title';
        lblDateOrCat.innerText = 'Category / Role';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Hotel Manager">Hotel Manager</option>
                <option value="Driver / Travels">Driver / Travels</option>
                <option value="Priest / Iyer">Priest / Iyer</option>
                <option value="Catering Lead">Catering Lead</option>
                <option value="Coordinator Lead">Coordinator Lead</option>
                <option value="Family Coordinator">Family Coordinator</option>
                <option value="Vendor">Other Vendor</option>
            </select>`;
        lblTime.innerText = 'Service Details / Purpose';
        colLoc.classList.remove('hidden');
        colTrans.classList.add('hidden');
        document.getElementById('lblLocation').innerText = 'Location (Google Maps)';
        lblPerson.innerText = 'Phone Number (e.g. 98401 22334)';
        if (colStatus) colStatus.classList.add('hidden');
    } else if (sec === 'food') {
        if (colMenu) colMenu.classList.remove('hidden');
        lblTitle.innerText = 'Caterer / Hotel Name';
        lblDateOrCat.innerText = 'Event Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 19">Nov 19 (Day 1)</option>
                <option value="Nov 20" selected>Nov 20 (Day 2)</option>
                <option value="Nov 21">Nov 21 (Day 3)</option>
            </select>`;
        lblTime.innerText = 'Meal Type & Time (e.g. Lunch • 12:00 PM)';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Place / Location (Google Maps)';
        document.getElementById('lblTransport').innerText = 'Headcount (e.g. 40 Max)';
        lblPerson.innerText = 'Booked By / Contact';
    } else if (sec === 'rooms') {
        lblTitle.innerText = 'Hotel / Room Name';
        lblDateOrCat.innerText = 'Event Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 19">Nov 19 (Day 1)</option>
                <option value="Nov 20" selected>Nov 20 (Day 2)</option>
                <option value="Nov 21">Nov 21 (Day 3)</option>
            </select>`;
        lblTime.innerText = 'Room Tariff & Details (e.g. ₹2200+GST)';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Location (Google Maps)';
        document.getElementById('lblTransport').innerText = 'Check-in to Check-out Dates';
        lblPerson.innerText = 'Hotel Phone Number';
    } else if (sec === 'vehicles') {
        lblTitle.innerText = 'Travels & Vehicle Model';
        lblDateOrCat.innerText = 'Booking Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 18">Nov 18</option>
                <option value="Nov 19">Nov 19</option>
                <option value="Nov 20" selected>Nov 20</option>
                <option value="Nov 21">Nov 21</option>
            </select>`;
        lblTime.innerText = 'Rent & Rate (e.g. ₹3000/day + ₹13/KM)';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Location (Google Maps)';
        document.getElementById('lblTransport').innerText = 'Booking Dates & Timings';
        lblPerson.innerText = 'Driver Contact Phone';
    } else if (sec === 'schedule') {
        lblTitle.innerText = 'Event / Activity Title';
        lblDateOrCat.innerText = 'Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 19">Nov 19 (Day 1)</option>
                <option value="Nov 20" selected>Nov 20 (Day 2)</option>
                <option value="Nov 21">Nov 21 (Day 3)</option>
            </select>`;
        lblTime.innerText = 'Time Slot (e.g. 05:30 AM – 06:30 AM)';
        colLoc.classList.remove('hidden');
        colTrans.classList.remove('hidden');
        document.getElementById('lblLocation').innerText = 'Location (Google Maps)';
        document.getElementById('lblTransport').innerText = 'Transport Mode';
        lblPerson.innerText = 'In-Charge Person';
    } else if (sec === 'shopping') {
        lblTitle.innerText = 'Pooja Item Name';
        lblDateOrCat.innerText = 'Category';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Buying Items">Buying Items</option>
                <option value="From Garden">From Garden</option>
                <option value="Pooja Kit">Pooja Kit</option>
                <option value="Gifts">Gifts / Thamboolam</option>
            </select>`;
        lblTime.innerText = 'Quantity & Special Notes';
        colLoc.classList.add('hidden');
        colTrans.classList.add('hidden');
        lblPerson.innerText = 'Assigned Person';
    } else if (sec === 'todo') {
        lblTitle.innerText = 'Task Description';
        lblDateOrCat.innerText = 'Target Day';
        dateWrapper.innerHTML = `
            <select id="formDate" class="w-full p-2 bg-slate-100 dark:bg-slate-900 border rounded-lg outline-none font-medium">
                <option value="Nov 18">Nov 18</option>
                <option value="Nov 19">Nov 19</option>
                <option value="Nov 20" selected>Nov 20</option>
                <option value="Nov 21">Nov 21</option>
            </select>`;
        lblTime.innerText = 'Target Time';
        colLoc.classList.add('hidden');
        colTrans.classList.add('hidden');
        lblPerson.innerText = 'Responsible Person';
    }
}

// =========================================================================
// ✅ OPEN RECORD MODAL (LOCKS TO CURRENT TAB & DISPLAYS EXACT TARGET NAME)
// =========================================================================
function openRecordModal(sectionToPreselect) {
    document.getElementById('recordForm').reset();
    document.getElementById('formRecordId').value = '';
    if (document.getElementById('formMenu')) document.getElementById('formMenu').value = '';
    if (document.getElementById('formNotes')) document.getElementById('formNotes').value = '';

    // Determine target section accurately (Never silently defaults to schedule)
    let target = sectionToPreselect;
    if (!target) {
        if (activeTab === 'dayview') {
            target = 'schedule';
        } else {
            target = activeTab;
        }
    }

    const select = document.getElementById('formSection');
    if (select) {
        select.value = target;
        // If option was not found, fallback safely to first custom or schedule
        if (select.value !== target) {
            select.value = target;
        }
    }

    // Update modal title so you always see where the item is being added!
    const secNameMap = {
        'schedule': 'Event Agenda',
        'food': 'Food & Catering',
        'rooms': 'Rooms',
        'vehicles': 'Vehicles',
        'shopping': 'Pooja List',
        'todo': 'To-Do',
        'contacts': 'Contact Directory'
    };
    const customSec = customSections.find(s => s.id === target);
    const displayName = customSec ? customSec.name : (secNameMap[target] || 'Event Agenda');
    document.getElementById('recordModalTitle').innerText = `Add Record to: ${displayName}`;

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

    document.getElementById('formTimeOrDetails').value = item.mealType || item.time || item.details || item.rate || item.service || '';
    if (document.getElementById('formLocation')) document.getElementById('formLocation').value = item.location || item.phone || item.place || '';
    if (document.getElementById('formTransport')) document.getElementById('formTransport').value = item.transport || item.headcount || item.timing || '';
    if (document.getElementById('formMenu')) document.getElementById('formMenu').value = item.menu || '';
    if (document.getElementById('formNotes')) document.getElementById('formNotes').value = item.notes || '';
    if (document.getElementById('formPerson')) document.getElementById('formPerson').value = item.person || item.contactPerson || item.bookedBy || item.phone || '';
    if (document.getElementById('formStatus')) document.getElementById('formStatus').value = item.status || 'Confirmed';
}

function deleteRecord(id, sec) {
    if (!confirm('Are you sure you want to delete this record?')) return;
    if (sec === 'schedule') scheduleData = scheduleData.filter(x => x.id !== id);
    else if (sec === 'food') foodData = foodData.filter(x => x.id !== id);
    else if (sec === 'rooms') roomsData = roomsData.filter(x => x.id !== id);
    else if (sec === 'vehicles') vehiclesData = vehiclesData.filter(x => x.id !== id);
    else if (sec === 'shopping') shoppingData = shoppingData.filter(x => x.id !== id);
    else if (sec === 'contacts') contactsData = contactsData.filter(x => x.id !== id);
    else if (sec.startsWith('custom_')) customItemsData = customItemsData.filter(x => x.id !== id);
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
    const notes = document.getElementById('formNotes') ? document.getElementById('formNotes').value.trim() : '';
    const person = document.getElementById('formPerson') ? document.getElementById('formPerson').value.trim() : '';
    const status = document.getElementById('formStatus') ? document.getElementById('formStatus').value : 'Confirmed';

    let newObj = { id, section: sec, notes, status };

    if (sec.startsWith('custom_')) {
        newObj.title = title;
        newObj.date = dateOrCat; // Now correctly saves Nov 19, Nov 20, or Nov 21!
        newObj.time = timeOrDetails;
        newObj.location = location;
        newObj.transport = transport;
        newObj.person = person;
    } else if (sec === 'contacts') {
        newObj.name = title;
        newObj.category = dateOrCat;
        newObj.service = timeOrDetails;
        newObj.location = location;
        newObj.phone = person;
        newObj.status = 'Confirmed';
    } else if (sec === 'schedule') {
        newObj.title = title; newObj.date = dateOrCat; newObj.time = timeOrDetails;
        newObj.location = location; newObj.transport = transport; newObj.person = person;
    } else if (sec === 'food') {
        newObj.caterer = title; newObj.title = title; newObj.date = dateOrCat; newObj.mealType = timeOrDetails;
        newObj.time = timeOrDetails; newObj.place = location; newObj.headcount = transport;
        newObj.contactPerson = person; newObj.menu = menu || 'Custom Feast Menu';
    } else if (sec === 'rooms') {
        newObj.name = title; newObj.location = location; newObj.details = timeOrDetails;
        newObj.phone = person; newObj.timing = transport; newObj.date = dateOrCat; newObj.bookedBy = 'Arunkumar';
    } else if (sec === 'vehicles') {
        newObj.name = title; newObj.model = title; newObj.location = location; newObj.rate = timeOrDetails;
        newObj.phone = person; newObj.timing = transport; newObj.date = dateOrCat; newObj.contactPerson = person; newObj.bookedBy = 'Arunkumar';
    } else if (sec === 'shopping') {
        newObj.title = title; newObj.category = dateOrCat; newObj.notes = notes || timeOrDetails; newObj.person = person;
    } else if (sec === 'todo') {
        newObj.title = title; newObj.date = dateOrCat; newObj.time = timeOrDetails; newObj.person = person;
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