const translations = {
  en: {
    title: "Bridging Cultures · Connecting Hearts",
    logo: "Pali Connect",
    tab_about: "About Us",
    tab_courses: "Courses",
    tab_subscribe: "Subscription",
    tab_faq: "FAQ",
    slogan_main: "“Where Language Becomes Friendship”",
    hero_desc: "Our mission is to cross cultures through language, building real understanding and shared value.",
    feature_1: "🎯 Immersive Bilingual Classes",
    feature_2: "🌏 Global Cultural Exchange",
    feature_3: "📚 Professional Instructors & Engaging Materials",
    about_title: "🌱 More Than A Language Platform",
    about_slogan: "“Connecting worlds with language, bridging gaps with understanding.”",
    about_p1: "We believe language is more than words; through immersive learning and cultural exchange, we create a warm, safe, and inspiring space.",
    about_li1: "🇹🇼 Taiwanese students eager to explore English and the world.",
    about_li2: "🇺🇸 American teachers and families passionate about learning Chinese and Taiwanese culture.",
    about_p2: "Our mission is to build a true cultural bridge, where students and teachers learn and share together.",
    about_p3: "No matter your background, we hope you find joy and belonging here.",
    teachers_title: "👩‍🏫 Meet Our Teachers",
    teacher_1_desc: "Experienced bilingual instructor passionate about cultural exchange.",
    teacher_2_desc: "Native English speaker with 10+ years teaching Mandarin to kids.",
    teacher_3_desc: "Dedicated to creating fun and immersive learning experiences.",
    feedback_title: "🧡 Student Feedback",
    feedback_1: "“My child started speaking English voluntarily and looks forward to every class!” — Xiaomei's Mom",
    feedback_2: "\"My daughter not only learned Chinese, but made a best friend in Taiwan!\" — Sarah, CA",
    by_numbers_title: "🔢 Key Figures",
    stats_years: "Years of Teaching Experience",
    stats_schools: "Partner Schools",
    stats_classrooms: "Remote Classrooms Set Up",
    footer_line1: "🐾 Pali Connect – Connecting Worlds Through Language",
  },
  zh: {
    title: "橋接文化．連結心靈",
    logo: "Pali Connect",
    tab_about: "關於我們",
    tab_courses: "課程介紹",
    tab_subscribe: "訂閱方案",
    tab_faq: "常見問題",
    slogan_main: "「語言即是友誼的橋梁」",
    hero_desc: "我們的使命是跨越文化，透過語言建立真正的理解與共享的價值。",
    feature_1: "🎯 沉浸式雙語課程",
    feature_2: "🌏 全球文化交流",
    feature_3: "📚 專業師資與生動教材",
    about_title: "🌱 更多於語言平台",
    about_slogan: "「用語言連結世界，用理解化解距離。」",
    about_p1: "我們相信語言不只是文字；透過沉浸式學習與跨文化交流，創造溫暖、安全而富啟發性的空間。",
    about_li1: "🇹🇼 台灣學生熱衷於探索英語與世界。",
    about_li2: "🇺🇸 美國老師與家庭熱愛學習中文與台灣文化。",
    about_p2: "我們的使命是打造真正雙向的文化橋梁，讓學生與老師彼此學習、分享。",
    about_p3: "無論你的背景，我們都希望你在這裡找到學習樂趣與文化歸屬感。",
    teachers_title: "👩‍🏫 認識我們的師資",
    teacher_1_desc: "經驗豐富的雙語教師，熱愛文化交流。",
    teacher_2_desc: "英語母語者，擁有10年以上教授兒童中文經驗。",
    teacher_3_desc: "致力於打造有趣且沉浸式的學習體驗。",
    feedback_title: "🧡 學員回饋",
    feedback_1: "「孩子第一次主動說英語，而且期待每週的課！」— 小美媽媽",
    feedback_2: "「我的女兒不只學會中文，還在台灣交到了好朋友！」— Sarah, CA",
    by_numbers_title: "🔢 關鍵數據",
    stats_years: "年教學經驗",
    stats_schools: "合作學校",
    stats_classrooms: "遠距教室配置",
    footer_line1: "🐾 Pali Connect – 用語言連結世界",
  }
};



function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Toggle active button styling
  document.querySelectorAll(".language-switcher button").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase().includes(lang));
  });

  // Set page lang attribute
  document.documentElement.lang = lang;
}




// Default language
setLanguage("en");
