/* =========================================================
   ملف JavaScript الرئيسي لموقع دليل فعاليات الجامعة الافتراضية
   كل البيانات هنا مؤقتة/تجريبية، ويمكن تعديلها بسهولة.
   ========================================================= */

/* -------------------------
   بيانات الفعاليات
   ------------------------- */
const events = [
  {
    id: 1,
    title: "معرض الكتاب الجامعي",
    category: "ثقافة",
    date: "2026-11-09",
    time: "10:00",
    endTime: "16:00",
    location: "مركز دمشق",
    image: "assets/img/book-fair.jpg",
    short: "معرض يضم أحدث الإصدارات الجامعية والكتب الثقافية، مع جلسات توقيع.",
    description:
      "ينظم دليل فعاليات الجامعة الافتراضية معرض الكتاب الجامعي بمشاركة عدد من دور النشر المحلية. يضم المعرض أجنحة للكتب الأكاديمية والثقافية، وجلسات توقيع، ومساحة هادئة للقراءة.||الدعوة عامة لجميع طلاب الجامعة وعائلاتهم، والدخول مجاني. يمكن للزوار المشاركة في ورشة صغيرة عن اختيار الكتاب المناسب، تقام الساعة الواحدة بعد الظهر.",
    featured: true,
    gallery: ["assets/img/book-fair.jpg", "assets/img/library.jpg", "assets/img/art2.jpg"]
  },
  {
    id: 2,
    title: "حفل موسيقي للطلاب",
    category: "موسيقى",
    date: "2026-11-10",
    time: "18:00",
    endTime: "20:00",
    location: "قاعة افتراضية",
    image: "assets/img/music-night.jpg",
    short: "أمسية موسيقية يقدمها طلاب الجامعة بمشاركة فرقة SVU.",
    description:
      "حفل موسيقي يجمع مواهب طلاب الجامعة الافتراضية في عرض مباشر عبر القاعة الافتراضية. يتضمن الحفل فقرات غنائية وعزفاً منفرداً، ويشارك فيه عدد من الطلاب من برامج مختلفة.||الدخول مجاني لمن سجل عبر نموذج الحجز، وسيتم إرسال رابط البث قبل الحفل بساعة.",
    featured: true,
    gallery: ["assets/img/music-night.jpg", "assets/img/classical-music.jpg", "assets/img/hero.jpg"]
  },
  {
    id: 3,
    title: "ماراثون SVU الرياضي",
    category: "رياضة",
    date: "2026-11-12",
    time: "08:00",
    endTime: "11:00",
    location: "حديقة تشرين، دمشق",
    image: "assets/img/marathon.jpg",
    short: "ماراثون طلابي بمسار 5 كم، مع جوائز للمراكز الأولى.",
    description:
      "ينطلق ماراثون SVU الرياضي من حديقة تشرين بمسار طوله 5 كم. يشارك فيه طلاب الجامعة وأعضاء الهيئة الإدارية، وتُمنح جوائز للمراكز الثلاثة الأولى.||توجد مسارات للمشي لمن لا يرغب بالجري، وفريق إسعاف موزع على طول المسار. يرجى الحضور قبل الساعة 7:30 صباحاً للتسجيل.",
    featured: true,
    gallery: ["assets/img/marathon.jpg", "assets/img/family-sports.jpg", "assets/img/basketball.jpg"]
  },
  {
    id: 4,
    title: "يوم عائلي في الجامعة",
    category: "عائلي",
    date: "2026-11-14",
    time: "11:00",
    endTime: "16:00",
    location: "مركز حلب",
    image: "assets/img/family-day.jpg",
    short: "أنشطة للأطفال وألعاب تفاعلية ومساحات للعائلات.",
    description:
      "يوم مفتوح للعائلات في مركز حلب، يتضمن ألعاباً للأطفال، وورش رسم، ومسرح عرائس، ومنطقة طعام.||الفعالية مجانية لطلاب الجامعة وعائلاتهم، وتوجد مساحة مخصصة للأطفال الصغار. لا حاجة لتسجيل مسبق.",
    featured: false,
    gallery: ["assets/img/family-day.jpg", "assets/img/family-sports.jpg", "assets/img/workshop2.jpg"]
  },
  {
    id: 5,
    title: "ورشة الذكاء الاصطناعي",
    category: "تقنية",
    date: "2026-11-15",
    time: "17:00",
    endTime: "19:00",
    location: "قاعة افتراضية",
    image: "assets/img/ai-workshop.jpg",
    short: "ورشة تطبيقية حول أساسيات الذكاء الاصطناعي وتوليد النصوص.",
    description:
      "ورشة تدريبية عبر الإنترنت تشرح مفاهيم الذكاء الاصطناعي وتطبيقاته في التعليم. تتضمن تطبيقاً عملياً على أدوات توليد النصوص وتحليل البيانات.||مطلوب حاسوب واتصال جيد بالإنترنت. سيتم إرسال رابط الورشة للمسجلين قبل الموعد بيوم واحد.",
    featured: false,
    gallery: ["assets/img/ai-workshop.jpg", "assets/img/coding-contest.jpg", "assets/img/workshop2.jpg"]
  },
  {
    id: 6,
    title: "مسابقة البرمجة",
    category: "تقنية",
    date: "2026-11-18",
    time: "09:00",
    endTime: "14:00",
    location: "مركز حمص",
    image: "assets/img/coding-contest.jpg",
    short: "مسابقة برمجة فردية بحل مسائل خلال 5 ساعات.",
    description:
      "مسابقة برمجة تنظمها الجامعة لطلابها، تتضمن مسائل خوارزمية متنوعة. يمكن المشاركة بلغة Python أو Java أو C++.||تُعلن النتائج في نهاية اليوم، وتُمنح جوائز للفائزين الخمسة الأوائل. يرجى إحضار حاسوب شخصي أو استخدام أجهزة المركز بعد التسجيل.",
    featured: false,
    gallery: ["assets/img/coding-contest.jpg", "assets/img/ai-workshop.jpg", "assets/img/workshop2.jpg"]
  },
  {
    id: 7,
    title: "أمسية شعرية",
    category: "ثقافة",
    date: "2026-11-20",
    time: "19:00",
    endTime: "21:00",
    location: "مركز اللاذقية",
    image: "assets/img/poetry-night.jpg",
    short: "أمسية شعرية بمشاركة طلاب الجامعة وشعراء ضيوف.",
    description:
      "أمسية شعرية تحتفي باللغة العربية، يقرأ فيها طلاب الجامعة قصائدهم، ويشاركهم شعراء ضيوف.||تتضمن الأمسية فقرة موسيقية هادئة بين القراءات، ومساحة مفتوحة لمن يرغب بالمشاركة. الدخول مجاني.",
    featured: false,
    gallery: ["assets/img/poetry-night.jpg", "assets/img/library.jpg", "assets/img/book-fair.jpg"]
  },
  {
    id: 8,
    title: "بطولة كرة السلة",
    category: "رياضة",
    date: "2026-11-22",
    time: "16:00",
    endTime: "19:00",
    location: "مركز طرطوس",
    image: "assets/img/basketball.jpg",
    short: "بطولة ودية بين فرق طلابية من مختلف البرامج.",
    description:
      "بطولة كرة سلة ودية تجمع فرقاً من برامج الجامعة المختلفة. تقام المباريات على مدى يوم واحد، وتُمنح كأس للفريق الفائز.||يمكن للطلاب الحضور للتشجيع مجاناً، وتوجد مساحة مخصصة للجمهور. التسجيل للفرق المشاركة مغلق حالياً.",
    featured: false,
    gallery: ["assets/img/basketball.jpg", "assets/img/marathon.jpg", "assets/img/family-sports.jpg"]
  },
  {
    id: 9,
    title: "حفل تخرج",
    category: "عائلي",
    date: "2026-11-25",
    time: "18:00",
    endTime: "21:00",
    location: "مركز دمشق",
    image: "assets/img/graduation.jpg",
    short: "حفل تخرج طلاب الدفعة الجديدة بحضور الأهل والأصدقاء.",
    description:
      "حفل تخرج رسمي لطلاب الجامعة الافتراضية، يتضمن كلمات وتهاني وتوزيع شهادات.||يُسمح بحضور الأهل والأصدقاء بعد التسجيل، وسيكون هناك مصور خاص للحفل. يرجى الحضور قبل الموعد بنصف ساعة.",
    featured: false,
    gallery: ["assets/img/graduation.jpg", "assets/img/hero.jpg", "assets/img/family-day.jpg"]
  },
  {
    id: 10,
    title: "معرض الفنون التشكيلية",
    category: "ثقافة",
    date: "2026-11-28",
    time: "10:00",
    endTime: "18:00",
    location: "مركز حلب",
    image: "assets/img/art-exhibition.jpg",
    short: "معرض لوحات وأعمال فنية من إبداع طلاب الجامعة.",
    description:
      "معرض فني يعرض لوحات تشكيلية وأعمالاً يدوية من إنتاج طلاب الجامعة.||يفتتح المعرض بكلمة قصيرة من الفنانين المشاركين، ويستمر طوال اليوم. الدخول مجاني، وهناك مساحة للرسم المفتوح للزوار.",
    featured: false,
    gallery: ["assets/img/art-exhibition.jpg", "assets/img/art2.jpg", "assets/img/library.jpg"]
  },
  {
    id: 11,
    title: "حفلة موسيقية كلاسيكية",
    category: "موسيقى",
    date: "2026-12-01",
    time: "20:00",
    endTime: "22:00",
    location: "قاعة افتراضية",
    image: "assets/img/classical-music.jpg",
    short: "عزف كلاسيكي مباشر بمشاركة عازفين من طلاب الجامعة.",
    description:
      "أمسية موسيقية كلاسيكية عبر القاعة الافتراضية، يقدمها عازفون من طلاب الجامعة.||تتضمن مقطوعات لبيتهوفن وموتسارت، مع تعليق قصير عن كل مقطوعة. الرابط يُرسل للمسجلين قبل الموعد.",
    featured: false,
    gallery: ["assets/img/classical-music.jpg", "assets/img/music-night.jpg", "assets/img/hero.jpg"]
  },
  {
    id: 12,
    title: "يوم رياضي عائلي",
    category: "عائلي",
    date: "2026-12-05",
    time: "09:00",
    endTime: "13:00",
    location: "مركز دمشق",
    image: "assets/img/family-sports.jpg",
    short: "ألعاب رياضية خفيفة للعائلات والأطفال في الهواء الطلق.",
    description:
      "يوم رياضي عائلي يتضمن سباقات صغيرة، وألعاباً جماعية، ومساحة للرسم.||مخصص لطلاب الجامعة وعائلاتهم، مع فريق تنظيم متطوع. يرجى إحضار ماء وقبعة، وتوجد منطقة ظل للجلوس.",
    featured: false,
    gallery: ["assets/img/family-sports.jpg", "assets/img/family-day.jpg", "assets/img/marathon.jpg"]
  }
];

/* -------------------------
   بيانات الفريق
   ------------------------- */
const team = [
  {
    name: "دانيا نبيل الحريري",
    id: "dania_324789",
    className: "C6",
    role: "HTML/CSS والتصميم",
    avatar: "assets/img/avatar-dania.svg"
  },
  {
    name: "عبد الله عمر الحاج علي",
    id: "Abd_ullah_296750",
    className: "C6",
    role: "JavaScript والتفاعل",
    avatar: "assets/img/avatar-abdullah.svg"
  },
  {
    name: "صفية رياض محمد",
    id: "Safeyah_211625",
    className: "C8",
    role: "المحتوى والتنسيق",
    avatar: "assets/img/avatar-safeyah.svg"
  }
];

/* أسماء الأشهر بالعربية */
const arabicMonths = [
  "كانون الثاني",
  "شباط",
  "آذار",
  "نيسان",
  "أيار",
  "حزيران",
  "تموز",
  "آب",
  "أيلول",
  "تشرين الأول",
  "تشرين الثاني",
  "كانون الأول"
];

/* كلاس الشارة حسب التصنيف */
const categoryClasses = {
  "ثقافة": "badge-culture",
  "رياضة": "badge-sport",
  "موسيقى": "badge-music",
  "عائلي": "badge-family",
  "تقنية": "badge-tech"
};

/* -------------------------
   دوال مساعدة
   ------------------------- */

function formatDate(dateString) {
  const d = new Date(dateString + "T00:00:00");
  return d.getDate() + " " + arabicMonths[d.getMonth()] + " " + d.getFullYear();
}

function getCategoryClass(category) {
  return categoryClasses[category] || "badge-culture";
}

/* كرت فعالية واحد */
function eventCard(e) {
  return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="event-card card">
        <img src="${e.image}" alt="${e.title}" class="card-img-top">
        <div class="event-body card-body">
          <span class="badge cat-badge ${getCategoryClass(e.category)}">${e.category}</span>
          <h5>${e.title}</h5>
          <p class="event-meta"><i class="bi bi-calendar3"></i> ${formatDate(e.date)}</p>
          <p class="event-meta"><i class="bi bi-geo-alt"></i> ${e.location}</p>
          <p class="event-short">${e.short}</p>
          <a href="event.html?id=${e.id}" class="btn btn-main btn-sm-main">التفاصيل</a>
        </div>
      </div>
    </div>
  `;
}

/* -------------------------
   الصفحة الرئيسية
   ------------------------- */

function renderFeatured() {
  const inner = document.getElementById("featuredInner");
  if (!inner) return;

  const featured = events.filter(function (e) {
    return e.featured === true;
  });

  inner.innerHTML = featured
    .map(function (e, index) {
      return `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${e.image}" class="d-block w-100 featured-img" alt="${e.title}">
          <div class="carousel-caption">
            <span class="badge cat-badge ${getCategoryClass(e.category)}">${e.category}</span>
            <h3>${e.title}</h3>
            <p>${e.short}</p>
            <a href="event.html?id=${e.id}" class="btn btn-main">التفاصيل</a>
          </div>
        </div>
      `;
    })
    .join("");

  const indicators = document.getElementById("featuredIndicators");
  if (indicators) {
    indicators.innerHTML = featured
      .map(function (e, index) {
        return `<button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}" aria-label="الفعالية ${index + 1}"></button>`;
      })
      .join("");
  }
}

function renderLatest() {
  const grid = document.getElementById("latestEvents");
  if (!grid) return;

  const latest = events
    .slice()
    .sort(function (a, b) {
      return a.date.localeCompare(b.date);
    })
    .slice(0, 6);

  grid.innerHTML = latest.map(eventCard).join("");
}

function renderTeam() {
  const grid = document.getElementById("teamGrid");
  if (!grid) return;

  grid.innerHTML = team
    .map(function (m, index) {
      // إذا كان عدد الفريق فردياً، آخر بطاقة تأخذ عرض بطاقتين على التابلت
      const isWide = team.length % 2 === 1 && index === team.length - 1;
      const colClass = isWide
        ? "col-12 col-md-12 col-lg-4"
        : "col-12 col-md-6 col-lg-4";
      const cardClass = isWide
        ? "team-card card team-card-wide"
        : "team-card card";

      return `
        <div class="${colClass}">
          <div class="${cardClass}">
            <img src="${m.avatar}" alt="${m.name}" class="team-avatar">
            <div class="team-info">
              <h5>${m.name}</h5>
              <span class="team-id">${m.id}</span>
              <div><span class="class-badge">الصف: ${m.className}</span></div>
              <p class="mt-2 mb-0"><small>${m.role}</small></p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

/* -------------------------
   صفحة كل الفعاليات + الفلترة
   ------------------------- */

function initEventsPage() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const locationFilter = document.getElementById("locationFilter");
  const dateFilter = document.getElementById("dateFilter");
  const resetBtn = document.getElementById("resetFilters");
  const countBox = document.getElementById("resultsCount");
  const emptyBox = document.getElementById("noResults");

  // تعبئة قوائم التصنيف والموقع
  const categories = [];
  const locations = [];

  events.forEach(function (e) {
    if (categories.indexOf(e.category) === -1) categories.push(e.category);
    if (locations.indexOf(e.location) === -1) locations.push(e.location);
  });

  categoryFilter.innerHTML =
    '<option value="">كل التصنيفات</option>' +
    categories.map(function (c) {
      return `<option value="${c}">${c}</option>`;
    }).join("");

  locationFilter.innerHTML =
    '<option value="">كل المواقع</option>' +
    locations.map(function (l) {
      return `<option value="${l}">${l}</option>`;
    }).join("");

  // إذا جاء المستخدم من رابط تصنيف
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get("category");
  const savedCategory = localStorage.getItem("svuCategory");

  if (urlCategory) {
    categoryFilter.value = urlCategory;
  } else if (savedCategory) {
    categoryFilter.value = savedCategory;
  }

  function applyFilters() {
    const q = searchInput.value.trim();
    const cat = categoryFilter.value;
    const loc = locationFilter.value;
    const date = dateFilter.value;

    const filtered = events.filter(function (e) {
      const matchSearch =
        e.title.indexOf(q) !== -1 ||
        e.short.indexOf(q) !== -1 ||
        e.location.indexOf(q) !== -1 ||
        e.category.indexOf(q) !== -1;

      const matchCategory = cat === "" || e.category === cat;
      const matchLocation = loc === "" || e.location === loc;
      const matchDate = date === "" || e.date === date;

      return matchSearch && matchCategory && matchLocation && matchDate;
    });

    grid.innerHTML = filtered.map(eventCard).join("");

    if (countBox) {
      countBox.textContent = "عدد النتائج: " + filtered.length;
    }

    if (emptyBox) {
      emptyBox.style.display = filtered.length === 0 ? "block" : "none";
    }
  }

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", function () {
    localStorage.setItem("svuCategory", categoryFilter.value);
    applyFilters();
  });
  locationFilter.addEventListener("change", applyFilters);
  dateFilter.addEventListener("change", applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      searchInput.value = "";
      categoryFilter.value = "";
      locationFilter.value = "";
      dateFilter.value = "";
      localStorage.removeItem("svuCategory");
      history.replaceState(null, "", "events.html");
      applyFilters();
    });
  }

  // أول عرض
  applyFilters();
}

/* -------------------------
   صفحة تفاصيل الفعالية
   ------------------------- */

function renderEventDetail() {
  const container = document.getElementById("eventDetails");
  if (!container) return;

  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const e = events.find(function (item) {
    return item.id === id;
  });

  if (!e) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-exclamation-circle"></i>
        <h4>الفعالية غير موجودة</h4>
        <p>ربما تم حذف الفعالية أو أن الرابط غير صحيح.</p>
        <a href="events.html" class="btn btn-main mt-2">العودة إلى كل الفعاليات</a>
      </div>
    `;
    return;
  }

  document.title = e.title + " | دليل فعاليات الجامعة الافتراضية";

  const paragraphs = e.description
    .split("||")
    .map(function (p) {
      return `<p>${p}</p>`;
    })
    .join("");

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-7">
        <img src="${e.image}" alt="${e.title}" class="detail-img">
        <span class="badge cat-badge ${getCategoryClass(e.category)} mt-4">${e.category}</span>
        <h1 class="detail-title">${e.title}</h1>
        <div class="mb-3">${paragraphs}</div>

        <h4 class="mt-4 mb-3">صور من الفعالية</h4>
        <div class="row g-2">
          ${e.gallery.map(function (img) {
            return `<div class="col-4"><img src="${img}" alt="${e.title}" class="gallery-img"></div>`;
          }).join("")}
        </div>
      </div>

      <div class="col-lg-5">
        <div class="info-box">
          <h4>معلومات الفعالية</h4>
          <div class="info-row"><i class="bi bi-calendar3"></i><span>${formatDate(e.date)}</span></div>
          <div class="info-row"><i class="bi bi-clock"></i><span>${e.time} - ${e.endTime}</span></div>
          <div class="info-row"><i class="bi bi-geo-alt"></i><span>${e.location}</span></div>

          <button class="btn btn-main w-100 mt-2" id="addCalendarBtn" data-event-id="${e.id}">
            <i class="bi bi-calendar-plus"></i> أضف للتقويم
          </button>
          <button class="btn btn-outline-main w-100 mt-2" id="shareBtn">
            <i class="bi bi-share"></i> شارك الفعالية
          </button>
          <button class="btn btn-outline-secondary w-100 mt-2" data-bs-toggle="modal" data-bs-target="#bookingModal" data-event-id="${e.id}" data-event-title="${e.title}">
            <i class="bi bi-ticket-perforated"></i> احجز مكانك
          </button>
        </div>

        <div class="map-box mt-4">
          <img src="assets/img/map.svg" alt="خريطة موقع الفعالية">
          <p class="text-center mt-2 mb-0"><small>موقع تقريبي - ${e.location}</small></p>
        </div>
      </div>
    </div>
  `;

  renderRelated(e);
  initDetailButtons(e);
}

function renderRelated(currentEvent) {
  const box = document.getElementById("relatedEvents");
  if (!box) return;

  let related = events.filter(function (e) {
    return e.category === currentEvent.category && e.id !== currentEvent.id;
  });

  if (related.length === 0) {
    related = events.filter(function (e) {
      return e.id !== currentEvent.id;
    });
  }

  box.innerHTML = related.slice(0, 3).map(eventCard).join("");
}

function initDetailButtons(e) {
  const calendarBtn = document.getElementById("addCalendarBtn");
  const shareBtn = document.getElementById("shareBtn");

  if (calendarBtn) {
    calendarBtn.addEventListener("click", function () {
      downloadICS(e);
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      shareEvent(e);
    });
  }
}

/* ملف تقويم ICS بسيط */
function toICSDate(dateString, timeString) {
  return dateString.replace(/-/g, "") + "T" + timeString.replace(":", "") + "00";
}

function downloadICS(e) {
  const start = toICSDate(e.date, e.time);
  const end = toICSDate(e.date, e.endTime);
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SVU Events//AR",
    "BEGIN:VEVENT",
    "UID:svu-event-" + e.id + "@svu-events",
    "DTSTAMP:" + stamp,
    "DTSTART:" + start,
    "DTEND:" + end,
    "SUMMARY:" + e.title,
    "LOCATION:" + e.location,
    "DESCRIPTION:" + e.short,
    "END:VEVENT",
    "END:VCALENDAR"
  ];

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "svu-event-" + e.id + ".ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function shareEvent(e) {
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: e.title,
      text: e.short,
      url: url
    }).catch(function () {
      // المستخدم أغلق نافذة المشاركة
    });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function () {
      alert("تم نسخ رابط الفعالية");
    }).catch(function () {
      prompt("انسخ رابط الفعالية:", url);
    });
  } else {
    prompt("انسخ رابط الفعالية:", url);
  }
}

/* -------------------------
   نموذج اتصل بنا
   ------------------------- */

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const alertBox = document.getElementById("formAlert");

    function showAlert(text, type) {
      alertBox.className = "alert alert-" + type;
      alertBox.textContent = text;
      alertBox.classList.remove("d-none");
    }

    if (name.length < 3) {
      showAlert("الرجاء كتابة الاسم الكامل (3 أحرف على الأقل).", "danger");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert("الرجاء كتابة بريد إلكتروني صحيح.", "danger");
      return;
    }

    if (message.length < 10) {
      showAlert("الرسالة قصيرة جداً، اكتب 10 أحرف على الأقل.", "danger");
      return;
    }

    showAlert("تم التحقق من البيانات بنجاح. هذا نموذج تجريبي ولا يرسل الرسالة فعلياً.", "success");
    form.reset();
  });
}

/* -------------------------
   حجز مكان (تجريبي)
   ------------------------- */

function initBookingForm() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const alertBox = document.getElementById("bookingAlert");
    alertBox.className = "alert alert-success";
    alertBox.textContent = "تم تسجيل حجزك التجريبي بنجاح! (هذا الموقع تجريبي)";
    form.reset();
  });
}

/* تغيير اسم الفعالية داخل المودال */
document.addEventListener("click", function (event) {
  const btn = event.target.closest("[data-bs-target='#bookingModal']");
  if (!btn) return;

  const title = btn.getAttribute("data-event-title");
  const nameBox = document.getElementById("bookingEventName");
  const alertBox = document.getElementById("bookingAlert");

  if (nameBox && title) {
    nameBox.textContent = title;
  }

  if (alertBox) {
    alertBox.className = "alert d-none";
    alertBox.textContent = "";
  }
});

/* -------------------------
   الوضع الليلي
   ------------------------- */

function initDarkMode() {
  const btn = document.getElementById("darkModeBtn");
  if (!btn) return;

  const icon = btn.querySelector("i");

  function applyMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      if (icon) icon.className = "bi bi-sun";
    } else {
      document.body.classList.remove("dark-mode");
      if (icon) icon.className = "bi bi-moon";
    }
  }

  applyMode(localStorage.getItem("svuDark") === "1");

  btn.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark-mode");
    applyMode(isDark);
    localStorage.setItem("svuDark", isDark ? "1" : "0");
  });
}

/* -------------------------
   زر الرجوع للأعلى
   ------------------------- */

function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* -------------------------
   تشغيل الدوال عند تحميل الصفحة
   ------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  renderFeatured();
  renderLatest();
  renderTeam();
  initEventsPage();
  renderEventDetail();
  initContactForm();
  initBookingForm();
  initDarkMode();
  initScrollTop();
});

