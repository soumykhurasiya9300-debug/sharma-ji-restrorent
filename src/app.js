/* ============================================================
   HOUSE OF SHARMA JI — APPLICATION
   ============================================================ */
(function(){
'use strict';

const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- CONFIG ---------- */
const CFG = {
  wa: '917804077713',
  phone1: '7804077713',
  phone2: '8964932788'
};

/* ============================================================
   I18N
   ============================================================ */
const I18N = {
  en: {
    'announce':'Open today till 11:00 PM · <b>Family friendly</b> · Kitty parties · Birthday celebrations · Call 78040 77713',
    'nav.story':'Our Story','nav.signature':'Signature','nav.menu':'Menu','nav.gallery':'Gallery','nav.reviews':'Reviews','nav.visit':'Visit',
    'cta.reserve':'Reserve','cta.explore':'Explore the Menu','cta.whatsapp':'WhatsApp','cta.confirm':'Confirm Reservation',
    'cta.sendWa':'Send on WhatsApp','cta.another':'Book Another','cta.directions':'Get Directions','cta.chat':'Chat with us',
    'hero.reviews':'16 reviews','hero.hindi':'हाउस ऑफ शर्मा · जबलपुर',
    'hero.t1':'Where every','hero.t2':'meal feels like','hero.t3':'home.',
    'hero.sub':'A warm, family-friendly Indian kitchen in the heart of Jabalpur — serving slow-cooked curries, tandoor-kissed breads, hand-folded momos and the cold coffee everyone keeps coming back for.',
    'stat.rating':'Google Rating','stat.reviews':'Happy Reviews','stat.price':'Per Person','stat.open':'Open Till','scroll':'Scroll',
    'story.eyebrow':'Our Story','story.h1':'A kitchen built on','story.h2':'family recipes.','story.open':'Open Now',
    'story.p1':'House Of Sharma Ji began with a simple belief — that the best food is the food you\'d serve your own family. Every masala is ground in-house, every gravy is slow-simmered, and every guest walks in as a stranger and leaves as a regular.',
    'story.p2':'Tucked near Labour Chowk in Yadav Colony, our dining room is built for <b>long conversations</b> — kitty parties, birthday celebrations, get-togethers and quiet weekday dinners alike. Warm lights, comfortable seating, and a menu that spans North Indian classics to Indo-Chinese favourites.',
    'pillar1.t':'Family First','pillar1.d':'A genuinely family-friendly atmosphere with space for every generation.',
    'pillar2.t':'Fresh Daily','pillar2.d':'Prepped each morning. Nothing sits, nothing is reheated twice.',
    'pillar3.t':'Warm Service','pillar3.d':'Attentive, unhurried hospitality — the kind that remembers your order.',
    'story.connectTag':'✦ The Sharma Ji Heritage','story.connectTitle':'Slow-simmered gravies & tandoor breads','story.connectDesc':'Crafted fresh every morning in Yadav Colony for long, joyful family gatherings.',
    'sig.eyebrow':'Signature Plates','sig.h1':'The dishes people','sig.h2':'come back for.','sig.lead':'Hand-picked from our most-loved orders. Each one has a story — and a queue.',
    'menu.eyebrow':'The Full Menu','menu.h1':'Everything we','menu.h2':'cook & pour.','menu.lead':'Prices are indicative and may vary. Ask our team about today\'s specials.',
    'menu.veg':'Vegetarian','menu.nonveg':'Non-Vegetarian','menu.best':'Bestseller','menu.water':'RO purified water served',
    'gal.eyebrow':'The Vibe','gal.h1':'Warm lights,','gal.h2':'warmer plates.','gal.lead':'A glimpse of the room, the plates and the people who fill them.',
    'rev.eyebrow':'Guest Reviews','rev.h1':'16 reviews.','rev.h2':'One perfect score.','rev.based':'Based on 16 Google reviews',
    'res.eyebrow':'Reservations','res.h1':'Save your','res.h2':'seat at the table.',
    'res.lead':'Tell us when you\'re coming and how many. We\'ll confirm on WhatsApp within a few minutes during opening hours. For large groups and party bookings, call us directly.',
    'res.addrT':'Address','res.callT':'Call / WhatsApp','res.hoursT':'Opening Hours','res.hours':'Open daily · Closes 11:00 PM',
    'res.occT':'Occasions','res.occ':'Kitty parties · Birthdays · Get-togethers · Family dinners',
    'res.orCall':'or call us directly at','res.thanks':'Table request received!','res.thanksSub':'We\'ve saved your request. Our team will confirm shortly on WhatsApp.',
    'f.name':'Full Name','f.namePh':'e.g. Mukti Sharma','f.phone':'Phone','f.phonePh':'10-digit number',
    'f.date':'Date','f.time':'Time','f.guests':'Guests','f.select':'Select…','f.g9':'9+ (group booking)',
    'f.occasion':'Occasion','f.o1':'Casual dining','f.o2':'Birthday','f.o3':'Anniversary','f.o4':'Kitty party','f.o5':'Get-together','f.o6':'Business meal',
    'f.notes':'Special Requests','f.notesPh':'High chair needed, cake cutting, seating preference…',
    'visit.eyebrow':'Find Us','visit.h1':'Come sit with us','visit.h2':'in Yadav Colony.',
    'foot.about':'A family-friendly Indian restaurant in Jabalpur serving slow-cooked classics, tandoor breads, momos and cold coffee — with a 5.0 rating from our guests.',
    'foot.explore':'Explore','foot.contact':'Contact','foot.hours':'Opening Hours','foot.today':'Today',
    'foot.monfri':'Mon – Fri','foot.sat':'Saturday','foot.sun':'Sunday',
    'foot.addr':'Near MR-4 Rd, Labour Chowk, Yadav Colony, Jabalpur, MP 482002',
    'foot.rights':'All rights reserved.','foot.admin':'Admin',
    'err.required':'This field is required','err.phone':'Enter a valid 10-digit number',
    'err.name':'Please enter your name','err.past':'Please choose a future date',
    'wa.default':'Hello House Of Sharma Ji, I\'d like to know more.'
  },
  hi: {
    'announce':'आज रात 11:00 बजे तक खुला · <b>परिवार के अनुकूल</b> · किटी पार्टी · जन्मदिन · कॉल करें 78040 77713',
    'nav.story':'हमारी कहानी','nav.signature':'खास व्यंजन','nav.menu':'मेन्यू','nav.gallery':'गैलरी','nav.reviews':'समीक्षाएं','nav.visit':'पहुंचें',
    'cta.reserve':'बुक करें','cta.explore':'मेन्यू देखें','cta.whatsapp':'व्हाट्सएप','cta.confirm':'बुकिंग कन्फर्म करें',
    'cta.sendWa':'व्हाट्सएप पर भेजें','cta.another':'दूसरी बुकिंग','cta.directions':'रास्ता देखें','cta.chat':'हमसे बात करें',
    'hero.reviews':'16 समीक्षाएं','hero.hindi':'हाउस ऑफ शर्मा · जबलपुर',
    'hero.t1':'जहां हर','hero.t2':'भोजन घर जैसा','hero.t3':'लगता है।',
    'hero.sub':'जबलपुर के दिल में एक अपनापन भरा, परिवार-अनुकूल भारतीय रसोई — धीमी आंच की करी, तंदूर की रोटियां, हाथ से बने मोमोज और वो कोल्ड कॉफ़ी जिसके लिए लोग बार-बार लौटते हैं।',
    'stat.rating':'गूगल रेटिंग','stat.reviews':'खुश समीक्षाएं','stat.price':'प्रति व्यक्ति','stat.open':'बंद होता है','scroll':'स्क्रॉल',
    'story.eyebrow':'हमारी कहानी','story.h1':'घर के नुस्खों पर','story.h2':'बनी रसोई।','story.open':'अभी खुला है',
    'story.p1':'हाउस ऑफ शर्मा की शुरुआत एक साधारण विश्वास से हुई — सबसे अच्छा खाना वही है जो आप अपने परिवार को परोसें। हर मसाला यहीं पिसा जाता है, हर ग्रेवी धीमी आंच पर पकती है, और हर मेहमान अजनबी बनकर आता है और अपना बनकर जाता है।',
    'story.p2':'लेबर चौक के पास, यादव कॉलोनी में हमारा डाइनिंग रूम <b>लंबी बातचीत</b> के लिए बना है — किटी पार्टी, जन्मदिन, मिलन समारोह और शांत वीकडे डिनर। गर्म रोशनी, आरामदायक बैठक और उत्तर भारतीय से इंडो-चाइनीज़ तक फैला मेन्यू।',
    'pillar1.t':'परिवार पहले','pillar1.d':'हर पीढ़ी के लिए जगह वाला सच्चा पारिवारिक माहौल।',
    'pillar2.t':'रोज़ ताज़ा','pillar2.d':'हर सुबह तैयार। कुछ भी पुराना नहीं, कुछ भी दोबारा गरम नहीं।',
    'pillar3.t':'अपनी सेवा','pillar3.d':'ध्यान देने वाली, बिना जल्दबाज़ी की मेज़बानी।',
    'story.connectTag':'✦ शर्मा जी की विरासत','story.connectTitle':'धीमी आंच की ग्रेवी और ताज़ा तंदूरी रोटियां','story.connectDesc':'यादव कॉलोनी में हर सुबह ताज़ा तैयार, ताकि हर पारिवारिक मिलन यादगार बने।',
    'sig.eyebrow':'खास व्यंजन','sig.h1':'जिन व्यंजनों के लिए','sig.h2':'लोग लौटते हैं।','sig.lead':'हमारे सबसे पसंदीदा ऑर्डर में से चुने हुए। हर एक की अपनी कहानी है।',
    'menu.eyebrow':'पूरा मेन्यू','menu.h1':'जो कुछ हम','menu.h2':'पकाते और परोसते हैं।','menu.lead':'कीमतें सूचक हैं और बदल सकती हैं। आज के स्पेशल के लिए हमारी टीम से पूछें।',
    'menu.veg':'शाकाहारी','menu.nonveg':'मांसाहारी','menu.best':'सबसे लोकप्रिय','menu.water':'आरओ शुद्ध पानी परोसा जाता है',
    'gal.eyebrow':'माहौल','gal.h1':'गर्म रोशनी,','gal.h2':'गर्मजोशी भरी थालियां।','gal.lead':'कमरे, थालियों और उन्हें भरने वाले लोगों की एक झलक।',
    'rev.eyebrow':'मेहमानों की राय','rev.h1':'16 समीक्षाएं।','rev.h2':'एक पूरा स्कोर।','rev.based':'16 गूगल समीक्षाओं पर आधारित',
    'res.eyebrow':'बुकिंग','res.h1':'अपनी जगह','res.h2':'पहले से सुरक्षित करें।',
    'res.lead':'बताइए कब आ रहे हैं और कितने लोग। खुलने के समय में हम कुछ मिनटों में व्हाट्सएप पर पुष्टि करेंगे। बड़े समूह के लिए सीधे कॉल करें।',
    'res.addrT':'पता','res.callT':'कॉल / व्हाट्सएप','res.hoursT':'खुलने का समय','res.hours':'रोज़ खुला · रात 11:00 बजे बंद',
    'res.occT':'अवसर','res.occ':'किटी पार्टी · जन्मदिन · मिलन समारोह · पारिवारिक डिनर',
    'res.orCall':'या सीधे कॉल करें','res.thanks':'बुकिंग अनुरोध मिल गया!','res.thanksSub':'हमने आपका अनुरोध सुरक्षित कर लिया है। टीम जल्द ही व्हाट्सएप पर पुष्टि करेगी।',
    'f.name':'पूरा नाम','f.namePh':'जैसे मुक्ति शर्मा','f.phone':'फ़ोन','f.phonePh':'10 अंकों का नंबर',
    'f.date':'तारीख़','f.time':'समय','f.guests':'मेहमान','f.select':'चुनें…','f.g9':'9+ (समूह बुकिंग)',
    'f.occasion':'अवसर','f.o1':'सामान्य भोजन','f.o2':'जन्मदिन','f.o3':'सालगिरह','f.o4':'किटी पार्टी','f.o5':'मिलन समारोह','f.o6':'बिज़नेस मीटिंग',
    'f.notes':'विशेष अनुरोध','f.notesPh':'बेबी चेयर, केक काटना, बैठने की पसंद…',
    'visit.eyebrow':'हमें खोजें','visit.h1':'हमारे साथ बैठिए','visit.h2':'यादव कॉलोनी में।',
    'foot.about':'जबलपुर का एक पारिवारिक भारतीय रेस्टोरेंट — धीमी आंच के व्यंजन, तंदूर की रोटियां, मोमोज और कोल्ड कॉफ़ी — मेहमानों से 5.0 रेटिंग।',
    'foot.explore':'देखें','foot.contact':'संपर्क','foot.hours':'खुलने का समय','foot.today':'आज',
    'foot.monfri':'सोम – शुक्र','foot.sat':'शनिवार','foot.sun':'रविवार',
    'foot.addr':'नियर MR-4 रोड, लेबर चौक, यादव कॉलोनी, जबलपुर, मध्य प्रदेश 482002',
    'foot.rights':'सर्वाधिकार सुरक्षित।','foot.admin':'एडमिन',
    'err.required':'यह फ़ील्ड आवश्यक है','err.phone':'सही 10 अंकों का नंबर डालें',
    'err.name':'कृपया अपना नाम लिखें','err.past':'कृपया भविष्य की तारीख़ चुनें',
    'wa.default':'नमस्ते हाउस ऑफ शर्मा, मुझे और जानकारी चाहिए।'
  }
};

let LANG = localStorage.getItem('hosj_lang') || 'en';
const t = k => (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k]) || k;

/* ============================================================
   MENU DATA
   ============================================================ */
const MENU_SEED = [
  // MOMOS
  { id:'m1', cat:'momos', name:'Steamed Veg Momos', hi:'स्टीम्ड वेज मोमोज', price:90, veg:true, best:false, desc:'Eight hand-folded parcels, cabbage & carrot, steamed to order.' },
  { id:'m2', cat:'momos', name:'Paneer Momos', hi:'पनीर मोमोज', price:120, veg:true, best:false, desc:'Soft cottage cheese filling with cracked pepper and coriander.' },
  { id:'m3', cat:'momos', name:'Tandoori Momos', hi:'तंदूरी मोमोज', price:160, veg:true, best:true, desc:'Clay-oven charred, tossed in smoky tandoori masala. Our #1 order.' },
  { id:'m4', cat:'momos', name:'Cheese Corn Momos', hi:'चीज़ कॉर्न मोमोज', price:150, veg:true, best:false, desc:'Molten cheese and sweet corn, served with garlic aioli.' },
  { id:'m5', cat:'momos', name:'Chicken Momos', hi:'चिकन मोमोज', price:140, veg:false, best:false, desc:'Minced chicken, ginger and spring onion. Steamed or fried.' },

  // STARTERS
  { id:'s1', cat:'starters', name:'Crispy Corn', hi:'क्रिस्पी कॉर्न', price:150, veg:true, best:true, desc:'Golden sweet corn tossed with curry leaf, chilli and lime.' },
  { id:'s2', cat:'starters', name:'Paneer Tikka', hi:'पनीर टिक्का', price:220, veg:true, best:false, desc:'Yoghurt-marinated paneer, capsicum and onion from the tandoor.' },
  { id:'s3', cat:'starters', name:'Veg Manchurian', hi:'वेज मंचूरियन', price:160, veg:true, best:false, desc:'Crisp vegetable dumplings in a garlic-soy gravy.' },
  { id:'s4', cat:'starters', name:'Chilli Paneer', hi:'चिल्ली पनीर', price:200, veg:true, best:false, desc:'Wok-tossed paneer with bell peppers and a spicy Indo-Chinese glaze.' },
  { id:'s5', cat:'starters', name:'Chicken Tikka', hi:'चिकन टिक्का', price:250, veg:false, best:false, desc:'Char-grilled chicken thigh in a smoked red masala.' },
  { id:'s6', cat:'starters', name:'French Fries', hi:'फ्रेंच फ्राइज़', price:100, veg:true, best:false, desc:'Salted, crisp, served with tomato ketchup.' },

  // MAIN
  { id:'c1', cat:'main', name:'Dal Makhani', hi:'दाल मखनी', price:200, veg:true, best:true, desc:'Black urad simmered overnight with butter and cream.' },
  { id:'c2', cat:'main', name:'Paneer Butter Masala', hi:'पनीर बटर मसाला', price:230, veg:true, best:false, desc:'Silky tomato-cashew gravy, generous paneer cubes.' },
  { id:'c3', cat:'main', name:'Kadhai Paneer', hi:'कढ़ाई पनीर', price:230, veg:true, best:false, desc:'Semi-dry, cooked with crushed coriander and whole spices.' },
  { id:'c4', cat:'main', name:'Mix Veg', hi:'मिक्स वेज', price:180, veg:true, best:false, desc:'Seasonal vegetables in a light homestyle gravy.' },
  { id:'c5', cat:'main', name:'Butter Chicken', hi:'बटर चिकन', price:280, veg:false, best:true, desc:'Tandoori chicken in a rich, mildly sweet makhani gravy.' },
  { id:'c6', cat:'main', name:'Chicken Curry', hi:'चिकन करी', price:260, veg:false, best:false, desc:'Home-style onion-tomato curry, bone-in, slow cooked.' },

  // BREADS & RICE
  { id:'b1', cat:'breads', name:'Butter Naan', hi:'बटर नान', price:45, veg:true, best:false, desc:'Soft tandoor naan brushed with white butter.' },
  { id:'b2', cat:'breads', name:'Garlic Naan', hi:'गार्लिक नान', price:60, veg:true, best:true, desc:'Loaded with roasted garlic and coriander.' },
  { id:'b3', cat:'breads', name:'Tandoori Roti', hi:'तंदूरी रोटी', price:25, veg:true, best:false, desc:'Whole wheat, straight off the clay wall.' },
  { id:'b4', cat:'breads', name:'Jeera Rice', hi:'जीरा राइस', price:140, veg:true, best:false, desc:'Basmati tempered with cumin and ghee.' },
  { id:'b5', cat:'breads', name:'Veg Biryani', hi:'वेज बिरयानी', price:180, veg:true, best:false, desc:'Dum-cooked layered rice with seasonal vegetables.' },
  { id:'b6', cat:'breads', name:'Chicken Biryani', hi:'चिकन बिरयानी', price:240, veg:false, best:false, desc:'Long-grain basmati, marinated chicken, fried onion, mint.' },

  // BEVERAGES
  { id:'d1', cat:'bev', name:'Cold Coffee', hi:'कोल्ड कॉफ़ी', price:120, veg:true, best:true, desc:'Thick, frothy, chocolate-dusted. The one everyone orders twice.' },
  { id:'d2', cat:'bev', name:'Masala Chai', hi:'मसाला चाय', price:40, veg:true, best:false, desc:'Brewed with ginger, cardamom and clove.' },
  { id:'d3', cat:'bev', name:'Filter Coffee', hi:'फ़िल्टर कॉफ़ी', price:60, veg:true, best:false, desc:'Strong South-Indian style decoction with hot milk.' },
  { id:'d4', cat:'bev', name:'Oreo Shake', hi:'ओरियो शेक', price:140, veg:true, best:false, desc:'Blended cookies and cream, topped with crushed Oreo.' },
  { id:'d5', cat:'bev', name:'Butterscotch Shake', hi:'बटरस्कॉच शेक', price:130, veg:true, best:false, desc:'Caramel-sweet, thick and cold.' },
  { id:'d6', cat:'bev', name:'Fresh Lime Soda', hi:'फ्रेश लाइम सोडा', price:70, veg:true, best:false, desc:'Sweet or salted, your call.' },

  // DESSERTS
  { id:'e1', cat:'dessert', name:'Gulab Jamun', hi:'गुलाब जामुन', price:80, veg:true, best:false, desc:'Two warm jamuns in cardamom syrup.' },
  { id:'e2', cat:'dessert', name:'Brownie with Ice Cream', hi:'ब्राउनी विद आइसक्रीम', price:160, veg:true, best:true, desc:'Fudge brownie, vanilla scoop, chocolate sauce.' },
  { id:'e3', cat:'dessert', name:'Chocolate Lava Cake', hi:'चॉकलेट लावा केक', price:150, veg:true, best:false, desc:'Molten centre, served warm.' },
  { id:'e4', cat:'dessert', name:'Rabri', hi:'रबड़ी', price:90, veg:true, best:false, desc:'Slow-reduced milk, saffron and pistachio.' }
];

const MENU_CATS = [
  { key:'momos',    en:'Momos',        hi:'मोमोज' },
  { key:'starters', en:'Starters',     hi:'स्टार्टर' },
  { key:'main',     en:'Main Course',  hi:'मुख्य व्यंजन' },
  { key:'breads',   en:'Breads & Rice',hi:'रोटी और चावल' },
  { key:'bev',      en:'Beverages',    hi:'पेय' },
  { key:'dessert',  en:'Desserts',     hi:'मिठाई' }
];

/* Signature picks */
const SIG = [
  { id:'sg1', name:'Tandoori Momos', hi:'तंदूरी मोमोज', tag:'Most Loved', price:160,
    img:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80' },
  { id:'sg2', name:'Butter Chicken', hi:'बटर चिकन', tag:'Chef\'s Pick', price:280,
    img:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80' },
  { id:'sg3', name:'Crispy Corn', hi:'क्रिस्पी कॉर्न', tag:'Bestseller', price:150,
    img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80' },
  { id:'sg4', name:'Cold Coffee', hi:'कोल्ड कॉफ़ी', tag:'House Favourite', price:120,
    img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80' },
  { id:'sg5', name:'Paneer Tikka', hi:'पनीर टिक्का', tag:'From the Tandoor', price:220,
    img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80' },
  { id:'sg6', name:'Chicken Biryani', hi:'चिकन बिरयानी', tag:'Dum Cooked', price:240,
    img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80' }
];

/* Gallery */
const GAL = [
  { img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80', cap:'Dining Room', cls:'g-a' },
  { img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80', cap:'Slow Cooked', cls:'g-b' },
  { img:'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80', cap:'The Table', cls:'g-c' },
  { img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80', cap:'Plated', cls:'g-d' },
  { img:'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80', cap:'Thali', cls:'g-e' },
  { img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80', cap:'Sweet Finish', cls:'g-f' },
  { img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80', cap:'Coffee Bar', cls:'g-d' },
  { img:'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80', cap:'Warm Corners', cls:'g-b' }
];

/* Reviews — real */
const REVIEWS = [
  { name:'Mukti Sharma', n:'2 reviews', stars:5, when:'2 days ago',
    text:'Visiting House Of Sharma was a great experience. The quality of the food was very good and delightful, and the ambience was cozy. Friendly environment for kitty parties, birthday parties and get-togethers. Surely a must-visit place for everyone.' },
  { name:'Rishika Kapoor', n:'1 review', stars:5, when:'a week ago',
    text:'Family friendly atmosphere with perfect vibes and delicious food & drinks. Worth trying with friends.' },
  { name:'Aryan Verma', n:'4 reviews', stars:5, when:'6 days ago',
    text:'Very nice ambiance. Food: 5, Service: 5. Would happily recommend to anyone looking for a relaxed meal in Jabalpur.' }
];

/* ============================================================
   STORAGE HELPERS
   ============================================================ */
const DB = {
  get(k, fb){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }catch(e){ return fb; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};

const KEYS = {
  enq:'hosj_enquiries', menu:'hosj_menu', settings:'hosj_settings',
  session:'hosj_session', attempts:'hosj_attempts', log:'hosj_activity'
};

/* Seed menu */
if(!DB.get(KEYS.menu)) DB.set(KEYS.menu, MENU_SEED);

/* Seed settings */
if(!DB.get(KEYS.settings)){
  DB.set(KEYS.settings, {
    wa: CFG.wa,
    phone1: CFG.phone1,
    phone2: CFG.phone2,
    announce: I18N.en['announce'],
    floatWa: true,
    ig: 'https://instagram.com',
    fb: 'https://facebook.com'
  });
}

function getSettings(){ return DB.get(KEYS.settings, {}); }
function getMenu(){ return DB.get(KEYS.menu, MENU_SEED); }
function getEnq(){ return DB.get(KEYS.enq, []); }

function logActivity(action, target){
  const logs = DB.get(KEYS.log, []);
  logs.unshift({ user:'Admin', action, target, at: new Date().toISOString() });
  DB.set(KEYS.log, logs.slice(0, 300));
}

/* ============================================================
   TOASTS
   ============================================================ */
function toast(msg, type=''){
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateY(12px)'; el.style.transition='.4s'; }, 2600);
  setTimeout(()=> el.remove(), 3100);
}

/* ============================================================
   PRELOADER
   ============================================================ */
(function preloader(){
  const mark = $('#preMark'), bar = $('#preBar'), num = $('#preNum');
  if(!mark || !bar || !num) return;
  const word = 'House Of Sharma Ji';
  mark.innerHTML = word.split('').map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');

  let p = 0;
  const tick = setInterval(()=>{
    p += Math.random() * 14 + 6;
    if(p >= 100){ p = 100; clearInterval(tick); finish(); }
    num.textContent = String(Math.floor(p)).padStart(2,'0');
  }, 110);

  function finish(){
    if(window.gsap){
      gsap.timeline()
        .to('#preMark span', { y:0, duration:.9, stagger:.03, ease:'expo.out' }, 0)
        .to('#pre .pre-hi', { opacity:1, duration:.6 }, .3)
        .to(bar, { scaleX:1, duration:.9, ease:'power2.inOut' }, 0)
        .to('#pre', { opacity:0, duration:.7, delay:.5, ease:'power2.inOut', onComplete(){
          $('#pre').classList.add('done');
          setTimeout(()=> $('#pre').remove(), 200);
          document.body.classList.remove('lock');
          heroIntro();
        }});
    } else {
      $('#pre').classList.add('done');
      $('#pre').remove();
      document.body.classList.remove('lock');
    }
  }
  if(window.gsap){
    gsap.set('#preMark span', { y:'110%' });
    gsap.set(bar, { scaleX:0 });
  }
})();

/* ============================================================
   HERO INTRO
   ============================================================ */
function heroIntro(){
  if(!window.gsap) return;
  const tl = gsap.timeline({ defaults:{ ease:'expo.out' }});
  tl.to('.hero-title .ln > span', { y:0, duration:1.25, stagger:.1 })
    .from('.hero-hindi', { opacity:0, y:20, duration:.9 }, '-=.9')
    .from('.hero-sub', { opacity:0, y:26, duration:1 }, '-=.75')
    .from('.hero-cta .btn', { opacity:0, y:22, duration:.85, stagger:.09 }, '-=.7')
    .from('.hero-feature', { opacity:0, y:28, scale:.95, duration:1 }, '-=.7')
    .from('.hero-strip .hero-stat', { opacity:0, y:20, duration:.8, stagger:.07 }, '-=.65')
    .from('.hero-rating', { opacity:0, y:14, duration:.8 }, '-=.9')
    .from('.scroll-cue', { opacity:0, duration:.8 }, '-=.6')
    .from('#header', { y:-40, opacity:0, duration:.9 }, '-=1.1')
    .from('.announce', { y:-30, opacity:0, duration:.8 }, '-=1');
  if(RM) tl.progress(1);
  const heroVid = document.querySelector('.hero-video');
  if(heroVid){
    heroVid.play().catch(()=>{
      window.addEventListener('touchstart', ()=> heroVid.play().catch(()=>{}), { once:true });
      window.addEventListener('click', ()=> heroVid.play().catch(()=>{}), { once:true });
    });
  }
}

/* ============================================================
   LENIS SMOOTH SCROLL
   ============================================================ */
let lenis = null;
if(!RM && typeof Lenis !== 'undefined'){
  lenis = new Lenis({ duration:1.15, easing:x => Math.min(1, 1.001 - Math.pow(2, -10*x)), smoothWheel:true });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  if(window.ScrollTrigger && window.gsap){
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* Smooth anchor scrolling */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if(id === '#' || id.length < 2) return;
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    closeDrawer();
    if(lenis) lenis.scrollTo(el, { offset:-70, duration:1.3 });
    else el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block:'start' });
  });
});

/* ============================================================
   HEADER BEHAVIOUR
   ============================================================ */
let lastY = 0;
const header = $('#header');
function onScroll(){
  if(!header) return;
  const y = window.scrollY;
  header.classList.toggle('solid', y > 40);
  if(y > 400 && y > lastY && !$('#drawer').classList.contains('open')) header.classList.add('hide');
  else header.classList.remove('hide');
  lastY = y;
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* Drawer */
const burger = $('#burger'), drawer = $('#drawer');
function closeDrawer(){
  if(burger) burger.classList.remove('open');
  if(drawer) drawer.classList.remove('open');
  document.body.classList.remove('lock');
}
if(burger && drawer){
  burger.addEventListener('click', ()=>{
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
  });
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
(function cursor(){
  if(RM || window.matchMedia('(hover:none)').matches) return;
  const dot = $('#curDot'), ring = $('#curRing');
  if(!dot || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove', e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  });
  (function loop(){
    rx += (mx-rx)*.16; ry += (my-ry)*.16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e=>{
    const el = e.target.closest('a,button,.sig-card,.g-item,.m-item,input,select,textarea,[data-cursor]');
    if(el){
      const label = el.dataset.cursor || '';
      ring.classList.add('grow');
      ring.dataset.label = label;
    } else {
      ring.classList.remove('grow');
      ring.dataset.label = '';
    }
  });
})();

/* Magnetic buttons */
$$('[data-mag]').forEach(el=>{
  if(RM || !window.gsap) return;
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) * .18;
    const y = (e.clientY - r.top - r.height/2) * .3;
    gsap.to(el, { x, y, duration:.5, ease:'power3.out' });
  });
  el.addEventListener('mouseleave', ()=> gsap.to(el, { x:0, y:0, duration:.6, ease:'elastic.out(1,.5)' }));
});

/* ============================================================
   RENDER: MARQUEE
   ============================================================ */
(function(){
  const track = $('#mqTrack');
  if(!track) return;
  const words = ['Tandoori Momos','Butter Chicken','Crispy Corn','Cold Coffee','Dal Makhani','Garlic Naan','Chicken Biryani','Chocolate Lava Cake','Masala Chai','Paneer Tikka'];
  const html = words.map(w => `<span>${w}</span>`).join('');
  track.innerHTML = html + html;
})();

/* ============================================================
   RENDER: SIGNATURE
   ============================================================ */
(function(){
  const sig = $('#sigTrack');
  if(!sig) return;
  sig.innerHTML = SIG.map(s => `
    <article class="sig-card" data-cursor="Order">
      <div class="im" style="background-image:url('${s.img}')"></div>
      <div class="sig-info">
        <span class="tag">${s.tag}</span>
        <h3>${s.name}</h3>
        <div class="hi">${s.hi}</div>
        <div class="price">
          <b>₹${s.price}</b>
          <small>per plate</small>
        </div>
      </div>
    </article>
  `).join('');
})();

/* ============================================================
   RENDER: MENU
   ============================================================ */
let activeCat = 'momos';

function renderTabs(){
  const tabs = $('#menuTabs');
  if(!tabs) return;
  tabs.innerHTML = MENU_CATS.map(c => `
    <button class="mtab ${c.key===activeCat?'on':''}" data-cat="${c.key}">
      ${LANG === 'hi' ? c.hi : c.en}
    </button>
  `).join('');
  $$('#menuTabs .mtab').forEach(b => b.addEventListener('click', ()=>{
    activeCat = b.dataset.cat;
    renderTabs(); renderMenu();
  }));
}

function renderMenu(){
  const items = getMenu().filter(i => i.cat === activeCat && i.active !== false);
  const grid = $('#menuGrid');
  if(!grid) return;
  if(!items.length){
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1">
      <div class="ic">🍽️</div><h4>Nothing here yet</h4>
      <p>This category is being updated. Please check back shortly.</p></div>`;
    return;
  }
  grid.innerHTML = items.map(i => `
    <div class="m-item">
      <div class="m-dot ${i.veg ? '' : 'nv'}"></div>
      <div class="m-body">
        <div class="m-top">
          <h4>${i.name}${i.best ? '<span class="m-best">Best</span>' : ''}</h4>
          <span class="m-line"></span>
          <span class="m-price">₹${i.price}</span>
        </div>
        <div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap">
          <span class="hi" style="font-family:var(--f-hindi);font-size:.72rem;color:var(--faint)">${i.hi}</span>
        </div>
        <div class="m-desc" style="margin-top:5px">${i.desc}</div>
      </div>
    </div>
  `).join('');

  if(!RM && window.gsap){
    gsap.from('#menuGrid .m-item', {
      opacity:0, y:22, duration:.65, stagger:.035, ease:'power3.out', clearProps:'all'
    });
  }
}

/* ============================================================
   RENDER: GALLERY + LIGHTBOX
   ============================================================ */
(function(){
  const gal = $('#galGrid');
  if(!gal) return;
  gal.innerHTML = GAL.map((g,i) => `
    <div class="g-item ${g.cls}" data-i="${i}" data-cursor="View">
      <div class="im" style="background-image:url('${g.img}')"></div>
      <span class="cap">${g.cap}</span>
    </div>
  `).join('');

  const lb = $('#lb'), lbImg = $('#lbImg');
  if(!lb || !lbImg) return;
  let cur = 0;
  const open = i => { cur = i; lbImg.style.backgroundImage = `url('${GAL[i].img}')`; lb.classList.add('open'); document.body.classList.add('lock'); };
  const close = () => { lb.classList.remove('open'); document.body.classList.remove('lock'); };
  const nav = d => { cur = (cur + d + GAL.length) % GAL.length; if(window.gsap) gsap.fromTo(lbImg, {opacity:.3, scale:.97}, {opacity:1, scale:1, duration:.5, ease:'power2.out'}); lbImg.style.backgroundImage = `url('${GAL[cur].img}')`; };

  $$('#galGrid .g-item').forEach(el => el.addEventListener('click', ()=> open(+el.dataset.i)));
  $('#lbX').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', ()=> nav(-1));
  $('#lbNext').addEventListener('click', ()=> nav(1));
  lb.addEventListener('click', e => { if(e.target === lb) close(); });
  document.addEventListener('keydown', e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowLeft') nav(-1);
    if(e.key === 'ArrowRight') nav(1);
  });
})();

/* ============================================================
   RENDER: REVIEWS
   ============================================================ */
(function(){
  const rev = $('#revGrid');
  if(!rev) return;
  rev.innerHTML = REVIEWS.map((r,i) => `
    <article class="rev-card reveal">
      <div class="stars">${'★'.repeat(r.stars)}</div>
      <p>${r.text}</p>
      <div class="rev-who">
        <div class="rev-av">${r.name.charAt(0)}</div>
        <div>
          <b>${r.name}</b>
          <small>${r.n} · ${r.when}</small>
        </div>
      </div>
    </article>
  `).join('');
})();

/* ============================================================
   LANGUAGE
   ============================================================ */
function applyLang(){
  document.documentElement.lang = LANG;
  $$('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    const v = t(k);
    if(v !== undefined) el.innerHTML = v;
  });
  $$('[data-i18n-ph]').forEach(el=>{
    const v = t(el.dataset.i18nPh);
    if(v) el.placeholder = v;
  });
  // Announcement from settings if custom
  const s = getSettings();
  if(s.announce && LANG === 'en' && $('#announceBar')) {
    const sp = $('#announceBar').querySelector('span');
    if(sp) sp.innerHTML = s.announce;
  }
  // re-render dynamic
  renderTabs(); renderMenu(); renderFooterHours();
  // WhatsApp links
  const waMsg = encodeURIComponent(t('wa.default'));
  const s2 = getSettings();
  if($('#waFloat')) $('#waFloat').href = `https://wa.me/${s2.wa || CFG.wa}?text=${waMsg}`;
  if($('#drawerWa')) $('#drawerWa').href = `https://wa.me/${s2.wa || CFG.wa}?text=${waMsg}`;
  // lang pill
  const btns = $$('#lang button');
  const idx = LANG === 'hi' ? 1 : 0;
  btns.forEach((b,i)=> b.classList.toggle('on', i === idx));
  const pill = $('#langPill');
  const target = btns[idx];
  if(pill && target){
    pill.style.width = target.offsetWidth + 'px';
    pill.style.transform = `translateX(${target.offsetLeft - 3}px)`;
  }
}

$$('#lang button').forEach(b=>{
  b.addEventListener('click', ()=>{
    LANG = b.dataset.lang;
    localStorage.setItem('hosj_lang', LANG);
    applyLang();
  });
});

function renderFooterHours(){
  const el = $('#todayHours');
  if(!el) return;
  const now = new Date();
  const h = now.getHours();
  const open = h >= 11 && h < 23;
  el.textContent = open ? '11:00 – 23:00 · Open' : '11:00 – 23:00 · Closed';
  el.style.color = open ? '#25d366' : '#e08b86';
}

/* ============================================================
   RESERVATION FORM
   ============================================================ */
(function(){
  const form = $('#resForm');
  if(!form) return;
  const dateInput = form.querySelector('[name="date"]');
  const today = new Date().toISOString().split('T')[0];
  if(dateInput) dateInput.min = today;

  function setErr(field, msg){
    const wrap = field.closest('.f-field');
    if(!wrap) return;
    wrap.classList.toggle('err', !!msg);
    const errEl = wrap.querySelector('.f-err');
    if(errEl) errEl.textContent = msg || '';
  }

  form.addEventListener('submit', e=>{
    e.preventDefault();
    let ok = true;
    const data = Object.fromEntries(new FormData(form).entries());

    // Name
    const nameF = form.querySelector('[name="name"]');
    if(!data.name || data.name.trim().length < 2){ setErr(nameF, t('err.name')); ok = false; }
    else setErr(nameF, '');

    // Phone
    const phoneF = form.querySelector('[name="phone"]');
    const digits = (data.phone || '').replace(/\D/g,'');
    if(digits.length !== 10){ setErr(phoneF, t('err.phone')); ok = false; }
    else setErr(phoneF, '');

    // Date
    if(!data.date){ setErr(dateInput, t('err.required')); ok = false; }
    else if(data.date < today){ setErr(dateInput, t('err.past')); ok = false; }
    else setErr(dateInput, '');

    // Time
    const timeF = form.querySelector('[name="time"]');
    if(!data.time){ setErr(timeF, t('err.required')); ok = false; }
    else setErr(timeF, '');

    // Guests
    const guestF = form.querySelector('[name="guests"]');
    if(!data.guests){ setErr(guestF, t('err.required')); ok = false; }
    else setErr(guestF, '');

    if(!ok){
      if(window.gsap) gsap.fromTo(form, { x:-7 }, { x:0, duration:.5, ease:'elastic.out(1,.35)' });
      return;
    }

    // Build enquiry
    const ref = 'HOSJ-' + Date.now().toString().slice(-6);
    const entry = {
      id: ref,
      name: data.name.trim(),
      phone: digits,
      email: '',
      date: data.date,
      time: data.time,
      guests: data.guests,
      occasion: data.occasion || 'Casual',
      notes: data.notes || '',
      status: 'NEW',
      createdAt: new Date().toISOString()
    };

    const all = getEnq();
    all.unshift(entry);
    DB.set(KEYS.enq, all);
    logActivity('New reservation received', ref);
    updateBadge();

    // Success
    form.style.display = 'none';
    $('#resRef').textContent = ref;
    $('#resSuccess').classList.add('on');

    const msg = encodeURIComponent(
      `Hello House Of Sharma Ji! 🙏\n\nI'd like to reserve a table.\n\n` +
      `*Ref:* ${ref}\n*Name:* ${entry.name}\n*Phone:* ${entry.phone}\n` +
      `*Date:* ${entry.date}\n*Time:* ${entry.time}\n*Guests:* ${entry.guests}\n` +
      `*Occasion:* ${entry.occasion}\n` +
      (entry.notes ? `*Notes:* ${entry.notes}\n` : '') +
      `\nPlease confirm. Thank you!`
    );
    const s = getSettings();
    $('#resWa').href = `https://wa.me/${s.wa || CFG.wa}?text=${msg}`;

    toast('Reservation saved — ' + ref, 'ok');
  });

  const againBtn = $('#resAgain');
  if(againBtn){
    againBtn.addEventListener('click', ()=>{
      form.reset();
      form.style.display = '';
      $('#resSuccess').classList.remove('on');
      $$('.f-field').forEach(f => f.classList.remove('err'));
    });
  }
})();

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
if(window.ScrollTrigger && window.gsap && !RM){
  gsap.registerPlugin(ScrollTrigger);

  // Generic reveals
  $$('.reveal').forEach(el=>{
    ScrollTrigger.create({
      trigger: el, start:'top 88%', once:true,
      onEnter: ()=> el.classList.add('in')
    });
  });

  // Masked headings
  $$('.mask-line > span').forEach(el=>{
    gsap.to(el, {
      y:0, duration:1.15, ease:'expo.out',
      scrollTrigger:{ trigger: el, start:'top 88%', once:true }
    });
  });

  // Hero parallax
  gsap.to('#heroBg', {
    yPercent: 16, ease:'none',
    scrollTrigger:{ trigger:'#hero', start:'top top', end:'bottom top', scrub:true }
  });
  gsap.to('.hero .wrap', {
    yPercent: -12, opacity:0, ease:'none',
    scrollTrigger:{ trigger:'#hero', start:'top top', end:'bottom top', scrub:true }
  });

  // Story image parallax
  gsap.from('.story-media', {
    scale:.94, opacity:0, duration:1.2, ease:'expo.out',
    scrollTrigger:{ trigger:'.story-media', start:'top 85%', once:true }
  });

  // Review bars
  $$('.rev-bar .track i').forEach(el=>{
    ScrollTrigger.create({
      trigger: el, start:'top 92%', once:true,
      onEnter: ()=> el.style.width = el.dataset.w + '%'
    });
  });

  // Signature horizontal pin (desktop only)
  ScrollTrigger.matchMedia({
    '(min-width: 901px)': function(){
      const track = $('#sigTrack');
      if(!track) return;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease:'none',
        scrollTrigger:{
          trigger:'#signature',
          start:'top top',
          end: () => '+=' + (getScrollAmount() + window.innerHeight * .4),
          pin:true,
          scrub:1,
          invalidateOnRefresh:true,
          anticipatePin:1,
          onUpdate: self => {
            const p = $('#sigProg');
            if(p) p.style.width = (self.progress * 100) + '%';
          }
        }
      });
    }
  });

  // Section background transitions
  gsap.to('body', {
    backgroundColor:'#0b0908', ease:'none',
    scrollTrigger:{ trigger:'#menu', start:'top 70%', end:'top 20%', scrub:true }
  });

  // Marquee speed on scroll
  gsap.to('.mq-track', {
    xPercent:-6, ease:'none',
    scrollTrigger:{ trigger:'.marquee', start:'top bottom', end:'bottom top', scrub:true }
  });
}

/* Fallback reveals if reduced motion */
if(RM){ $$('.reveal').forEach(el => el.classList.add('in')); }

/* ============================================================
   MISC
   ============================================================ */
const yr = $('#year');
if(yr) yr.textContent = new Date().getFullYear();
renderFooterHours();
setInterval(renderFooterHours, 60000);
applyLang();

/* ============================================================
   ADMIN
   ============================================================ */
const ADM = {
  PASS_HASH: null,
  MAX_ATTEMPTS: 4,
  LOCK_MS: 5 * 60 * 1000
};

function weakHash(s){
  let h = 5381;
  for(let i=0;i<s.length;i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return (h >>> 0).toString(36);
}
ADM.PASS_HASH = weakHash('sharma9300');

function getAttempts(){ return DB.get(KEYS.attempts, { count:0, until:0 }); }
function setAttempts(a){ DB.set(KEYS.attempts, a); }

function lockRemaining(){
  const a = getAttempts();
  const rem = a.until - Date.now();
  return rem > 0 ? rem : 0;
}

const admEl = $('#adm');
const admLogin = $('#admLogin');
const admShell = $('#admShell');
const admMsg = $('#admMsg');
const admForm = $('#admForm');
const admBtn = $('#admBtn');

function openAdmin(){
  if(!admEl) return;
  admEl.classList.add('open');
  requestAnimationFrame(()=> admEl.classList.add('show'));
  document.body.classList.add('lock');
  if(DB.get(KEYS.session)){ showShell(); }
  else { admLogin.style.display = ''; admShell.classList.remove('on'); $('#admPass').focus(); }
}

function closeAdmin(){
  if(!admEl) return;
  admEl.classList.remove('show');
  document.body.classList.remove('lock');
  setTimeout(()=> admEl.classList.remove('open'), 400);
}

if($('#openAdmin')) $('#openAdmin').addEventListener('click', openAdmin);
if($('#admClose')) $('#admClose').addEventListener('click', closeAdmin);

document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && admEl && admEl.classList.contains('open')) closeAdmin();
});

function admMessage(text, type){
  if(!admMsg) return;
  admMsg.className = 'adm-msg show ' + type;
  admMsg.textContent = text;
}

let lockTimer = null;
function startLockCountdown(){
  clearInterval(lockTimer);
  const tick = ()=>{
    const rem = lockRemaining();
    if(rem <= 0){
      clearInterval(lockTimer);
      admMessage('You may try again now.', 'ok');
      if(admBtn){
        admBtn.disabled = false;
        admBtn.querySelector('span').textContent = 'Unlock Dashboard';
      }
      const a = getAttempts(); a.count = 0; a.until = 0; setAttempts(a);
      return;
    }
    const m = Math.floor(rem / 60000);
    const s = Math.floor((rem % 60000) / 1000);
    admMessage(`Too many failed attempts. Please try again in ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.`, 'error');
    if(admBtn){
      admBtn.disabled = true;
      admBtn.querySelector('span').textContent = `Locked · ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
  };
  tick();
  lockTimer = setInterval(tick, 1000);
}

if(admForm){
  admForm.addEventListener('submit', e=>{
    e.preventDefault();
    if(lockRemaining() > 0){ startLockCountdown(); return; }

    const val = $('#admPass').value;
    if(weakHash(val) === ADM.PASS_HASH){
      const a = { count:0, until:0 }; setAttempts(a);
      DB.set(KEYS.session, { at: Date.now() });
      logActivity('Admin signed in', 'session');
      admMessage('Access granted. Loading dashboard…', 'ok');
      setTimeout(()=>{ admLogin.style.display = 'none'; showShell(); }, 450);
    } else {
      const a = getAttempts();
      a.count = (a.count || 0) + 1;
      if(a.count >= ADM.MAX_ATTEMPTS){
        a.until = Date.now() + ADM.LOCK_MS;
        a.count = 0;
        setAttempts(a);
        startLockCountdown();
      } else {
        setAttempts(a);
        admMessage(`Incorrect password. ${ADM.MAX_ATTEMPTS - a.count} attempt(s) remaining before lockout.`, 'error');
      }
      admForm.reset();
      if(window.gsap) gsap.fromTo('.adm-box', { x:-9 }, { x:0, duration:.5, ease:'elastic.out(1,.35)' });
    }
  });
}

if(lockRemaining() > 0) startLockCountdown();

function showShell(){
  admLogin.style.display = 'none';
  admShell.classList.add('on');
  renderView('dash');
  updateBadge();
}

if($('#admLogout')){
  $('#admLogout').addEventListener('click', ()=>{
    localStorage.removeItem(KEYS.session);
    logActivity('Admin signed out', 'session');
    admShell.classList.remove('on');
    admLogin.style.display = '';
    admMsg.className = 'adm-msg';
    $('#admPass').value = '';
    toast('Signed out', 'ok');
  });
}

$$('.a-link').forEach(b=>{
  b.addEventListener('click', ()=>{
    $$('.a-link').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    renderView(b.dataset.view);
    $('#admSide').classList.remove('open');
  });
});

function updateBadge(){
  const n = getEnq().filter(e => e.status === 'NEW').length;
  const b = $('#badgeEnq');
  if(!b) return;
  b.textContent = n;
  b.style.display = n ? '' : 'none';
}

function renderView(v){
  const main = $('#admMain');
  if(!main) return;
  main.scrollTop = 0;
  if(v === 'dash')     main.innerHTML = viewDash();
  if(v === 'enq')      main.innerHTML = viewEnq();
  if(v === 'menu')     main.innerHTML = viewMenu();
  if(v === 'content')  main.innerHTML = viewContent();
  if(v === 'settings') main.innerHTML = viewSettings();
  if(v === 'security') main.innerHTML = viewSecurity();
  bindView(v);
  if(!RM && window.gsap) gsap.from('#admMain > *', { opacity:0, y:16, duration:.5, stagger:.06, ease:'power2.out' });
}

function viewDash(){
  const enq = getEnq();
  const menu = getMenu();
  const today = new Date().toISOString().split('T')[0];
  const todayEnq = enq.filter(e => (e.createdAt||'').startsWith(today));
  const newEnq = enq.filter(e => e.status === 'NEW');
  const confirmed = enq.filter(e => e.status === 'CONFIRMED');
  const guests = enq.reduce((s,e)=> s + (parseInt(e.guests) || 1), 0);
  const convRate = enq.length ? Math.round((confirmed.length / enq.length) * 100) : 0;

  const days = [];
  for(let i=6;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().split('T')[0];
    days.push({
      key,
      label: d.toLocaleDateString('en-IN', { weekday:'short' }),
      count: enq.filter(e => (e.createdAt||'').startsWith(key)).length
    });
  }
  const maxC = Math.max(1, ...days.map(d=>d.count));

  const catCount = {};
  MENU_CATS.forEach(c => catCount[c.key] = menu.filter(m => m.cat === c.key).length);
  const totalItems = Math.max(1, menu.length);
  const catLegend = MENU_CATS.map((c,i) => {
    const pct = Math.round((catCount[c.key]/totalItems)*100);
    const cols = ['#d9a441','#7b1f1f','#a8761f','#e0b66a','#5a3a1a','#c58a3a'];
    return { label: LANG==='hi'?c.hi:c.en, pct, color: cols[i%cols.length] };
  });

  let acc = 0;
  const stops = catLegend.map(l => {
    const from = acc; acc += l.pct;
    return `${l.color} ${from}% ${acc}%`;
  }).join(', ');

  const recent = enq.slice(0,5);

  return `
    <div class="adm-head">
      <div>
        <h2>Dashboard</h2>
        <p>Live overview of House Of Sharma Ji</p>
      </div>
      <button class="mini gold" onclick="window.__admGoto('enq')">View all enquiries →</button>
    </div>

    <div class="kpis">
      <div class="kpi"><small>New Enquiries</small><b>${newEnq.length}</b><div class="sub">Awaiting first contact</div></div>
      <div class="kpi"><small>Total Enquiries</small><b>${enq.length}</b><div class="sub">All time</div></div>
      <div class="kpi"><small>Today</small><b>${todayEnq.length}</b><div class="sub">Received today</div></div>
      <div class="kpi"><small>Confirmed</small><b>${confirmed.length}</b><div class="sub">${convRate}% conversion</div></div>
      <div class="kpi"><small>Total Guests</small><b>${guests}</b><div class="sub">Across bookings</div></div>
      <div class="kpi"><small>Menu Items</small><b>${menu.length}</b><div class="sub">${MENU_CATS.length} categories</div></div>
    </div>

    <div class="chart-row">
      <div class="panel">
        <div class="panel-head">
          <div><h3>Enquiries — Last 7 Days</h3><p>Reservation requests received per day</p></div>
        </div>
        <div class="chart">
          ${days.map(d => `<div class="bar" style="height:${Math.max(4,(d.count/maxC)*100)}%"><span>${d.count}</span></div>`).join('')}
        </div>
        <div class="chart-x">${days.map(d => `<span>${d.label}</span>`).join('')}</div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Menu Mix</h3><p>Items by category</p></div></div>
        <div class="donut-wrap">
          <div class="donut" style="background:conic-gradient(${stops || 'rgba(246,241,232,.07) 0deg'});">
            <b>${menu.length}</b>
          </div>
          <div class="legend">
            ${catLegend.map(l => `<div><i style="background:${l.color}"></i>${l.label} <span style="margin-left:auto;color:var(--faint)">${l.pct}%</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Recent Enquiries</h3><p>Latest reservation requests</p></div></div>
      ${recent.length ? `
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Ref</th><th>Guest</th><th>Phone</th><th>Date</th><th>Guests</th><th>Status</th></tr></thead>
          <tbody>
            ${recent.map(e => `
              <tr>
                <td><b>${e.id}</b></td>
                <td>${esc(e.name)}</td>
                <td>${esc(e.phone)}</td>
                <td>${esc(e.date)} ${esc(e.time)}</td>
                <td>${esc(e.guests)}</td>
                <td><span class="st ${e.status.toLowerCase()}">${e.status}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>` : emptyState('📩','No enquiries yet','Reservation requests from the website will appear here instantly.')}
    </div>
  `;
}

let enqFilter = 'ALL';
function viewEnq(){
  const all = getEnq();
  const list = enqFilter === 'ALL' ? all : all.filter(e => e.status === enqFilter);
  return `
    <div class="adm-head">
      <div><h2>Enquiries</h2><p>${all.length} total · ${all.filter(e=>e.status==='NEW').length} new</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="mini" onclick="window.__admExport()">⬇ Export CSV</button>
      </div>
    </div>

    <div class="panel">
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
        ${['ALL','NEW','CONTACTED','CONFIRMED','CANCELLED'].map(s => `
          <button class="mini ${enqFilter===s?'gold':''}" onclick="window.__admFilter('${s}')">${s}</button>
        `).join('')}
      </div>
      ${list.length ? `
      <div class="tbl-wrap">
        <table>
          <thead>
            <tr><th>Ref</th><th>Guest</th><th>Phone</th><th>Date & Time</th><th>Guests</th><th>Occasion</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            ${list.map(e => `
              <tr>
                <td><b>${e.id}</b><br><span style="font-size:.66rem;color:var(--faint)">${fmtDate(e.createdAt)}</span></td>
                <td><b>${esc(e.name)}</b>${e.notes?`<br><span style="font-size:.68rem;color:var(--faint)">${esc(e.notes).slice(0,40)}</span>`:''}</td>
                <td><a href="tel:${esc(e.phone)}" style="color:var(--gold)">${esc(e.phone)}</a></td>
                <td>${esc(e.date)}<br><span style="font-size:.7rem;color:var(--faint)">${esc(e.time)}</span></td>
                <td>${esc(e.guests)}</td>
                <td>${esc(e.occasion)}</td>
                <td><span class="st ${e.status.toLowerCase()}">${e.status}</span></td>
                <td>
                  <div style="display:flex;gap:6px;flex-wrap:wrap">
                    <button class="mini" onclick="window.__admStatus('${e.id}','CONTACTED')">Contacted</button>
                    <button class="mini" onclick="window.__admStatus('${e.id}','CONFIRMED')">Confirm</button>
                    <button class="mini danger" onclick="window.__admStatus('${e.id}','CANCELLED')">Cancel</button>
                  </div>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>` : emptyState('📭','No enquiries in this view','Try a different filter, or wait for new reservation requests.')}
    </div>
  `;
}

function viewMenu(){
  const menu = getMenu();
  return `
    <div class="adm-head">
      <div><h2>Menu Manager</h2><p>${menu.length} items across ${MENU_CATS.length} categories</p></div>
      <button class="mini gold" onclick="window.__admAddItem()">+ Add Item</button>
    </div>

    <div class="panel" id="addItemPanel" style="display:none">
      <div class="panel-head"><div><h3>Add / Edit Item</h3><p>Changes apply to the live website immediately</p></div></div>
      <form class="a-form" id="itemForm">
        <input type="hidden" name="id">
        <div><label>Name (English)</label><input name="name" required></div>
        <div><label>Name (हिंदी)</label><input name="hi"></div>
        <div><label>Price (₹)</label><input name="price" type="number" min="0" required></div>
        <div><label>Category</label>
          <select name="cat" required>
            ${MENU_CATS.map(c => `<option value="${c.key}">${c.en}</option>`).join('')}
          </select>
        </div>
        <div><label>Type</label>
          <select name="veg"><option value="true">Vegetarian</option><option value="false">Non-Vegetarian</option></select>
        </div>
        <div><label>Bestseller</label>
          <select name="best"><option value="false">No</option><option value="true">Yes</option></select>
        </div>
        <div class="full"><label>Description</label><textarea name="desc"></textarea></div>
        <div class="full" style="display:flex;gap:10px">
          <button type="submit" class="mini gold">Save Item</button>
          <button type="button" class="mini" onclick="window.__admHideForm()">Cancel</button>
        </div>
      </form>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>All Items</h3><p>Toggle availability or remove items</p></div></div>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Item</th><th>Category</th><th>Type</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${menu.map(i => `
              <tr>
                <td><b>${esc(i.name)}</b><br><span style="font-family:var(--f-hindi);font-size:.72rem;color:var(--faint)">${esc(i.hi||'')}</span>${i.best?' <span class="st new" style="font-size:.55rem">BEST</span>':''}</td>
                <td>${(MENU_CATS.find(c=>c.key===i.cat)||{}).en || i.cat}</td>
                <td><span class="st ${i.veg?'confirmed':'pending'}">${i.veg?'VEG':'NON-VEG'}</span></td>
                <td><b>₹${i.price}</b></td>
                <td><span class="st ${i.active===false?'closed':'confirmed'}">${i.active===false?'HIDDEN':'ACTIVE'}</span></td>
                <td>
                  <div style="display:flex;gap:6px;flex-wrap:wrap">
                    <button class="mini" onclick="window.__admEditItem('${i.id}')">Edit</button>
                    <button class="mini" onclick="window.__admToggleItem('${i.id}')">${i.active===false?'Show':'Hide'}</button>
                    <button class="mini danger" onclick="window.__admDelItem('${i.id}')">Delete</button>
                  </div>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function viewContent(){
  const s = getSettings();
  return `
    <div class="adm-head"><div><h2>Website Content</h2><p>Control what visitors see without touching code</p></div></div>

    <div class="panel">
      <div class="panel-head"><div><h3>Announcement Bar</h3><p>Shown at the very top of every page</p></div></div>
      <form class="a-form" id="contentForm">
        <div class="full">
          <label>Announcement Text (English)</label>
          <input name="announce" value="${esc(s.announce||'')}">
        </div>
        <div class="full" style="display:flex;gap:10px">
          <button type="submit" class="mini gold">Save Content</button>
        </div>
      </form>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Social Links</h3><p>Instagram & Facebook destinations</p></div></div>
      <div class="a-form">
        <div><label>Instagram URL</label><input id="igUrl" value="${esc(s.ig||'')}"></div>
        <div><label>Facebook URL</label><input id="fbUrl" value="${esc(s.fb||'')}"></div>
        <div class="full"><button class="mini gold" onclick="window.__admSaveSocial()">Save Social Links</button></div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Content Inventory</h3><p>Current live sections on the customer website</p></div></div>
      <div class="legend">
        <div><i style="background:#25d366"></i> Hero · Our Story · Signature Plates · Full Menu · Gallery · Reviews · Reservations · Map & Footer</div>
        <div style="color:var(--faint)">All sections are active. Section-level toggling can be enabled from Settings.</div>
      </div>
    </div>
  `;
}

function viewSettings(){
  const s = getSettings();
  return `
    <div class="adm-head"><div><h2>Settings</h2><p>Business contact & integration configuration</p></div></div>

    <div class="panel">
      <div class="panel-head"><div><h3>Contact & WhatsApp</h3><p>Used across all website buttons and enquiry messages</p></div></div>
      <form class="a-form" id="settingsForm">
        <div><label>WhatsApp Number (with country code)</label><input name="wa" value="${esc(s.wa||'')}" placeholder="917804077713"></div>
        <div><label>Primary Phone</label><input name="phone1" value="${esc(s.phone1||'')}"></div>
        <div><label>Secondary Phone</label><input name="phone2" value="${esc(s.phone2||'')}"></div>
        <div><label>Floating WhatsApp Button</label>
          <select name="floatWa">
            <option value="true" ${s.floatWa!==false?'selected':''}>Enabled</option>
            <option value="false" ${s.floatWa===false?'selected':''}>Disabled</option>
          </select>
        </div>
        <div class="full" style="display:flex;gap:10px">
          <button type="submit" class="mini gold">Save Settings</button>
          <button type="button" class="mini" onclick="window.__admReset()">Reset Demo Data</button>
        </div>
      </form>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Integration Status</h3><p>What is currently wired up</p></div></div>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Feature</th><th>Status</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><b>WhatsApp Deep Links</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Prefilled messages with booking details</td></tr>
            <tr><td><b>Google Maps Embed</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Live directions to Labour Chowk</td></tr>
            <tr><td><b>Reservation Storage</b></td><td><span class="st confirmed">ACTIVE</span></td><td>Stored in this browser's local database</td></tr>
            <tr><td><b>Instagram Live Feed API</b></td><td><span class="st pending">NOT CONFIGURED</span></td><td>Requires Instagram Graph API token</td></tr>
            <tr><td><b>Server Database Sync</b></td><td><span class="st pending">NOT CONFIGURED</span></td><td>Requires backend deployment</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function viewSecurity(){
  const logs = DB.get(KEYS.log, []);
  const a = getAttempts();
  return `
    <div class="adm-head"><div><h2>Security & Activity</h2><p>Recent administrative actions</p></div></div>

    <div class="kpis">
      <div class="kpi"><small>Failed Attempts</small><b>${a.count||0}</b><div class="sub">Since last success</div></div>
      <div class="kpi"><small>Lock Status</small><b>${lockRemaining()>0?'LOCKED':'CLEAR'}</b><div class="sub">Max ${ADM.MAX_ATTEMPTS} attempts</div></div>
      <div class="kpi"><small>Logged Actions</small><b>${logs.length}</b><div class="sub">Last 300 retained</div></div>
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Activity Log</h3><p>Searchable history of admin actions</p></div></div>
      ${logs.length ? `
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>When</th><th>User</th><th>Action</th><th>Target</th></tr></thead>
          <tbody>
            ${logs.slice(0,60).map(l => `
              <tr>
                <td>${fmtDate(l.at, true)}</td>
                <td><b>${esc(l.user)}</b></td>
                <td>${esc(l.action)}</td>
                <td style="color:var(--gold)">${esc(l.target)}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>` : emptyState('🔐','No activity recorded','Actions you take in this panel will be logged here.')}
    </div>

    <div class="panel">
      <div class="panel-head"><div><h3>Security Notes</h3><p>Important for production deployment</p></div></div>
      <div class="legend" style="gap:14px">
        <div>⚠️ This dashboard lock is <b style="color:var(--gold)">client-side only</b>. It protects the demo interface, not a real database.</div>
        <div>✅ For production: move authentication to a server, hash passwords with bcrypt/argon2, use httpOnly session cookies, and enforce the 4-attempt / 5-minute lockout on the server.</div>
        <div>✅ All admin write operations should be validated and authorised server-side per role.</div>
      </div>
    </div>
  `;
}

function bindView(v){
  if(v === 'menu'){
    const f = $('#itemForm');
    if(f) f.addEventListener('submit', e=>{
      e.preventDefault();
      const d = Object.fromEntries(new FormData(f).entries());
      const menu = getMenu();
      const item = {
        id: d.id || ('x' + Date.now()),
        cat: d.cat, name: d.name.trim(), hi: d.hi.trim() || d.name,
        price: parseInt(d.price) || 0,
        veg: d.veg === 'true', best: d.best === 'true',
        desc: d.desc.trim(), active: true
      };
      if(d.id){
        const i = menu.findIndex(m => m.id === d.id);
        if(i > -1) menu[i] = { ...menu[i], ...item };
        logActivity('Updated menu item', item.name);
      } else {
        menu.push(item);
        logActivity('Added menu item', item.name);
      }
      DB.set(KEYS.menu, menu);
      toast('Menu item saved', 'ok');
      renderView('menu'); renderMenu();
    });
  }

  if(v === 'content'){
    const f = $('#contentForm');
    if(f) f.addEventListener('submit', e=>{
      e.preventDefault();
      const s = getSettings();
      s.announce = new FormData(f).get('announce');
      DB.set(KEYS.settings, s);
      logActivity('Updated announcement bar', 'website');
      toast('Content saved', 'ok');
      applyLang();
    });
  }

  if(v === 'settings'){
    const f = $('#settingsForm');
    if(f) f.addEventListener('submit', e=>{
      e.preventDefault();
      const d = Object.fromEntries(new FormData(f).entries());
      const s = getSettings();
      s.wa = (d.wa||'').replace(/\D/g,'') || CFG.wa;
      s.phone1 = d.phone1 || CFG.phone1;
      s.phone2 = d.phone2 || CFG.phone2;
      s.floatWa = d.floatWa === 'true';
      DB.set(KEYS.settings, s);
      logActivity('Updated contact settings', 'settings');
      toast('Settings saved', 'ok');
      applyLang();
      if($('#waFloat')) $('#waFloat').style.display = s.floatWa ? '' : 'none';
    });
  }
}

window.__admGoto = v => {
  $$('.a-link').forEach(x => x.classList.toggle('on', x.dataset.view === v));
  renderView(v);
};
window.__admFilter = s => { enqFilter = s; renderView('enq'); };
window.__admStatus = (id, status) => {
  const all = getEnq();
  const e = all.find(x => x.id === id);
  if(!e) return;
  e.status = status;
  DB.set(KEYS.enq, all);
  logActivity('Changed enquiry status to ' + status, id);
  toast(`${id} → ${status}`, 'ok');
  renderView('enq'); updateBadge();
};
window.__admAddItem = () => {
  const p = $('#addItemPanel');
  if(!p) return;
  p.style.display = 'block';
  const f = $('#itemForm');
  f.reset(); f.querySelector('[name="id"]').value = '';
  p.scrollIntoView({ behavior:'smooth', block:'center' });
};
window.__admHideForm = () => {
  const p = $('#addItemPanel');
  if(p) p.style.display = 'none';
};
window.__admEditItem = id => {
  const item = getMenu().find(i => i.id === id);
  if(!item) return;
  const p = $('#addItemPanel');
  if(!p) return;
  p.style.display = 'block';
  const f = $('#itemForm');
  f.querySelector('[name="id"]').value = item.id;
  f.querySelector('[name="name"]').value = item.name;
  f.querySelector('[name="hi"]').value = item.hi || '';
  f.querySelector('[name="price"]').value = item.price;
  f.querySelector('[name="cat"]').value = item.cat;
  f.querySelector('[name="veg"]').value = String(item.veg);
  f.querySelector('[name="best"]').value = String(!!item.best);
  f.querySelector('[name="desc"]').value = item.desc || '';
  p.scrollIntoView({ behavior:'smooth', block:'center' });
};
window.__admToggleItem = id => {
  const menu = getMenu();
  const i = menu.find(m => m.id === id);
  if(!i) return;
  i.active = i.active === false ? true : false;
  DB.set(KEYS.menu, menu);
  logActivity(i.active ? 'Showed menu item' : 'Hid menu item', i.name);
  toast(`${i.name} ${i.active ? 'shown' : 'hidden'}`, 'ok');
  renderView('menu'); renderMenu();
};
window.__admDelItem = id => {
  const menu = getMenu();
  const i = menu.find(m => m.id === id);
  if(!i) return;
  if(!confirm(`Delete "${i.name}" permanently?`)) return;
  DB.set(KEYS.menu, menu.filter(m => m.id !== id));
  logActivity('Deleted menu item', i.name);
  toast('Item deleted', 'ok');
  renderView('menu'); renderMenu();
};
window.__admSaveSocial = () => {
  const s = getSettings();
  s.ig = $('#igUrl').value.trim();
  s.fb = $('#fbUrl').value.trim();
  DB.set(KEYS.settings, s);
  logActivity('Updated social links', 'website');
  toast('Social links saved', 'ok');
};
window.__admReset = () => {
  if(!confirm('Reset all demo data (menu, enquiries, settings) back to defaults?')) return;
  localStorage.removeItem(KEYS.menu);
  localStorage.removeItem(KEYS.enq);
  localStorage.removeItem(KEYS.settings);
  localStorage.removeItem(KEYS.log);
  DB.set(KEYS.menu, MENU_SEED);
  DB.set(KEYS.settings, { wa:CFG.wa, phone1:CFG.phone1, phone2:CFG.phone2, announce:I18N.en.announce, floatWa:true, ig:'https://instagram.com', fb:'https://facebook.com' });
  toast('Demo data reset', 'ok');
  renderView('settings'); renderMenu(); updateBadge(); applyLang();
};
window.__admExport = () => {
  const all = getEnq();
  if(!all.length){ toast('No enquiries to export', 'err'); return; }
  const headers = ['Ref','Name','Phone','Date','Time','Guests','Occasion','Notes','Status','Created At'];
  const rows = all.map(e => [e.id,e.name,e.phone,e.date,e.time,e.guests,e.occasion,e.notes||'',e.status,e.createdAt]);
  const csv = [headers, ...rows]
    .map(r => r.map(c => `"${String(c==null?'':c).replace(/"/g,'""')}"`).join(','))
    .join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `HouseOfSharmaJi_Enquiries_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  logActivity('Exported enquiries', `${all.length} rows`);
  toast(`Exported ${all.length} enquiries`, 'ok');
};

function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
function fmtDate(iso, withTime){
  if(!iso) return '—';
  const d = new Date(iso);
  if(isNaN(d)) return '—';
  const base = d.toLocaleDateString('en-IN', { day:'2-digit', month:'short' });
  return withTime ? base + ' · ' + d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }) : base;
}
function emptyState(icon, title, sub){
  return `<div class="empty"><div class="ic">${icon}</div><h4>${title}</h4><p>${sub}</p></div>`;
}

(function(){
  const side = $('#admSide');
  if(!side) return;
  const btn = document.createElement('button');
  btn.className = 'burger adm-burger';
  btn.style.cssText = 'display:none;position:fixed;left:16px;top:16px;z-index:61;background:var(--ink-2);';
  btn.innerHTML = '<i></i>';
  btn.setAttribute('aria-label','Toggle admin menu');
  document.body.appendChild(btn);
  btn.addEventListener('click', ()=> side.classList.toggle('open'));
})();

window.HOSJ = { getEnq, getMenu, getSettings, toast };

})();
