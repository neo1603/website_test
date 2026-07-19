import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav_portfolio: 'Portfolio',
    nav_calculator: 'EMI Calculator',
    nav_events: 'Events',
    nav_about: 'About',
    nav_contact: 'Contact',

    hero_eyebrow: 'Mathura–Vrindavan · since 2008',
    hero_title_1: 'Find your',
    hero_title_accent: 'dream property',
    hero_title_2: 'today',
    hero_subtitle: "Premium residential plots, luxury villas, and commercial properties across Mathura Vrindavan region. Established in 2008, we've delivered 1000+ happy families with transparent dealings and quality construction.",
    hero_view_projects: 'View Projects',
    hero_call_now: 'Call Now',
    hero_whatsapp: 'WhatsApp',
    stat_families: 'Happy Families',
    stat_projects: 'Projects',
    stat_years: 'Years Experience',
    hero_ghat: '15 min to Vishram Ghat →',
    hero_photo_tag: 'Ongoing · Kvaan Tower',
    hero_photo_title: 'Krishna Nagar, Mathura',
    hero_photo_sub: 'Showrooms + flats, ready to move',

    portfolio_title: 'Our Portfolio',
    portfolio_count: (n) => `${n} projects across Mathura–Vrindavan`,
    portfolio_subtitle: 'Residential plots, villas, flats and commercial properties — ongoing, upcoming, and completed.',
    view_map: 'View Map',
    details: 'Details',

    calc_title: 'EMI Calculator',
    calc_subtitle: 'Get a quick estimate of your monthly instalment before you talk to us about financing.',
    calc_amount: 'Loan amount',
    calc_rate: 'Interest rate',
    calc_tenure: 'Loan tenure',
    calc_years: 'years',
    calc_monthly_emi: 'Monthly EMI',
    calc_principal: 'Principal',
    calc_total_interest: 'Total interest',
    calc_total_payment: 'Total payment',
    calc_disclaimer: "Estimate only — actual EMI depends on the lender's terms. Speak to our team for financing partners.",

    events_title: 'Events & Celebrations',
    events_subtitle: 'Moments from our journey with the families and partners who make DreamsBhoomi what it is.',

    about_title: 'About DreamsBhoomi',
    about_p1: 'Established in 2008, DreamsBhoomi Developers is a real estate and construction business based in the Mathura–Vrindavan region, dealing in residential plots, flats, villas, and commercial properties.',
    about_p2: 'Our current flagship project, Kvaan Tower, sits opposite Hotel Madhuvan in Krishna Nagar, Mathura — a gated, MVDA-approved development with showrooms on the ground and first floors and flats above. Alongside it, we handle commercial listings across the region, including high-visibility properties like our Goverdhan Chauraha shop.',
    about_p3: 'With over 15 years of experience and 1,000+ families served, we deal in real estate in the most ethical way we know how, to help our customers in Shri Dham Vrindavan find land, homes, and commercial space they can trust.',
    stat_founded: 'Founded',
    stat_brij_years: 'Years in Brij',

    contact_title: 'Contact Us',
  },
  hi: {
    nav_portfolio: 'परियोजनाएं',
    nav_calculator: 'ईएमआई कैलकुलेटर',
    nav_events: 'आयोजन',
    nav_about: 'हमारे बारे में',
    nav_contact: 'संपर्क करें',

    hero_eyebrow: 'मथुरा–वृंदावन · 2008 से',
    hero_title_1: 'अपनी',
    hero_title_accent: 'सपनों की संपत्ति',
    hero_title_2: 'आज ही पाएं',
    hero_subtitle: 'मथुरा वृंदावन क्षेत्र में प्रीमियम आवासीय प्लॉट, लक्जरी विला और व्यावसायिक संपत्तियां। 2008 में स्थापित, हमने पारदर्शी व्यवहार और गुणवत्तापूर्ण निर्माण के साथ 1000+ परिवारों को खुशहाल घर दिए हैं।',
    hero_view_projects: 'परियोजनाएं देखें',
    hero_call_now: 'अभी कॉल करें',
    hero_whatsapp: 'व्हाट्सएप',
    stat_families: 'खुशहाल परिवार',
    stat_projects: 'परियोजनाएं',
    stat_years: 'वर्षों का अनुभव',
    hero_ghat: 'विश्राम घाट से 15 मिनट →',
    hero_photo_tag: 'निर्माणाधीन · क्वान टावर',
    hero_photo_title: 'कृष्णा नगर, मथुरा',
    hero_photo_sub: 'शोरूम + फ्लैट्स, रहने के लिए तैयार',

    portfolio_title: 'हमारी परियोजनाएं',
    portfolio_count: (n) => `मथुरा–वृंदावन में ${n} परियोजनाएं`,
    portfolio_subtitle: 'आवासीय प्लॉट, विला, फ्लैट और व्यावसायिक संपत्तियां — निर्माणाधीन, आगामी और पूर्ण।',
    view_map: 'मानचित्र देखें',
    details: 'विवरण',

    calc_title: 'ईएमआई कैलकुलेटर',
    calc_subtitle: 'वित्तपोषण के बारे में हमसे बात करने से पहले अपनी मासिक किस्त का त्वरित अनुमान लगाएं।',
    calc_amount: 'ऋण राशि',
    calc_rate: 'ब्याज दर',
    calc_tenure: 'ऋण अवधि',
    calc_years: 'वर्ष',
    calc_monthly_emi: 'मासिक ईएमआई',
    calc_principal: 'मूल राशि',
    calc_total_interest: 'कुल ब्याज',
    calc_total_payment: 'कुल भुगतान',
    calc_disclaimer: 'यह केवल अनुमान है — वास्तविक ईएमआई ऋणदाता की शर्तों पर निर्भर करती है। वित्तपोषण भागीदारों के लिए हमारी टीम से बात करें।',

    events_title: 'आयोजन और उत्सव',
    events_subtitle: 'उन परिवारों और भागीदारों के साथ हमारी यात्रा के पल, जो ड्रीम्सभूमि को बनाते हैं जो यह है।',

    about_title: 'ड्रीम्सभूमि के बारे में',
    about_p1: '2008 में स्थापित, ड्रीम्सभूमि डेवलपर्स मथुरा–वृंदावन क्षेत्र में स्थित एक रियल एस्टेट और निर्माण व्यवसाय है, जो आवासीय प्लॉट, फ्लैट, विला और व्यावसायिक संपत्तियों का काम करता है।',
    about_p2: 'हमारी वर्तमान प्रमुख परियोजना, क्वान टावर, कृष्णा नगर, मथुरा में होटल मधुवन के सामने स्थित है — एक गेटेड, एमवीडीए-अनुमोदित विकास जिसमें ग्राउंड और पहली मंजिल पर शोरूम और ऊपर फ्लैट हैं। इसके साथ ही, हम पूरे क्षेत्र में व्यावसायिक संपत्तियां भी संभालते हैं, जिसमें गोवर्धन चौराहा स्थित हमारी दुकान जैसी उच्च-दृश्यता वाली संपत्तियां शामिल हैं।',
    about_p3: '15 से अधिक वर्षों के अनुभव और 1,000+ परिवारों की सेवा के साथ, हम श्री धाम वृंदावन में अपने ग्राहकों को भरोसेमंद जमीन, घर और व्यावसायिक स्थान खोजने में मदद करने के लिए सबसे नैतिक तरीके से रियल एस्टेट का काम करते हैं।',
    stat_founded: 'स्थापना',
    stat_brij_years: 'ब्रज में वर्ष',

    contact_title: 'संपर्क करें',
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = (key, ...args) => {
    const value = translations[lang][key] ?? translations.en[key] ?? key;
    return typeof value === 'function' ? value(...args) : value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
