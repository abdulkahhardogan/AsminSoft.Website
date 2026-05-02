export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export const defaultLang = 'tr';

export type Lang = keyof typeof languages;

const basePath = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export function stripBasePath(path: string): string {
  if (!basePath) return path;
  if (path === basePath) return '/';
  if (path.startsWith(`${basePath}/`)) return path.slice(basePath.length);
  return path;
}

export function withBasePath(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (!basePath) return clean;
  return clean === '/' ? `${basePath}/` : `${basePath}${clean}`;
}

export const ui = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.contractorpass': 'ContractorPass',
    'nav.shiftlog': 'ShiftLog',
    'nav.portops': 'PortOps',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',

    'hero.badge': 'Kurumsal Yazılım Çözümleri',
    'hero.title': 'Operasyonel Süreçlerinizi Dijitalleştirin',
    'hero.subtitle': 'AsminTech, yüklenici kart başvuru süreçleri, dijital vardiya takibi ve liman operasyonları için kurumsal yazılım çözümleri geliştirir.',
    'hero.cta.primary': 'Ürünleri İncele',
    'hero.cta.secondary': 'Demo Talep Et',

    'products.title': 'Ürünlerimiz',
    'products.subtitle': 'Sektörünüze özel geliştirilmiş, pratik ve güçlü çözümler',

    'cp.name': 'ContractorPass',
    'cp.tagline': 'Yüklenici Kart Başvuru Sistemi',
    'cp.short': 'Şantiye ve tesislere yüklenici firma personelinin güvenli girişini yöneten uçtan uca dijital başvuru ve onay platformu.',

    'sl.name': 'ShiftLog',
    'sl.tagline': 'Vardiya Defteri',
    'sl.short': 'Vardiya geçişlerini, olay kayıtlarını ve personel devir teslimini dijital ortamda takip eden modern vardiya yönetim sistemi.',

    'po.name': 'PortOps',
    'po.tagline': 'Liman Operasyonları Yönetim Sistemi',
    'po.short': 'Liman ve terminal operasyonlarını — gemi, yük, vardiya, survey — tek platformda entegre eden operasyon yönetim yazılımı.',

    'card.learnmore': 'Detaylı İncele',

    'why.title': 'Neden AsminTech?',
    'why.1.title': 'Sektöre Özel',
    'why.1.desc': 'İnşaat, enerji, liman ve endüstriyel tesislerin gerçek süreçleri üzerine inşa edildi.',
    'why.2.title': 'Uçtan Uca Dijital',
    'why.2.desc': 'Evrak, imza, onay, arşiv — tüm süreç kağıtsız ve izlenebilir.',
    'why.3.title': 'Hızlı Kurulum',
    'why.3.desc': 'Mevcut sistemlerinize entegre olur, kısa sürede devreye girer.',
    'why.4.title': 'Yerli ve Kurumsal Destek',
    'why.4.desc': 'Türkiye\'de geliştirilmiş, Türkçe destek, kurumsal SLA.',

    'cta.title': 'Operasyonunuzu bir adım öne taşımaya hazır mısınız?',
    'cta.subtitle': 'Ürünlerimizi yakından tanımak için demo talep edin.',
    'cta.button': 'Demo Talep Et',

    'footer.tagline': 'Kurumsal operasyon yazılımları',
    'footer.products': 'Ürünler',
    'footer.company': 'Şirket',
    'footer.contact': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',

    // ContractorPass page
    'cp.hero.title': 'Yüklenici Kart Başvuru Sürecini Dijitalleştirin',
    'cp.hero.subtitle': 'Yüklenici çalışan başına 10–14 evrak, KVKK kapsamında farklı onay ekipleri, süresi dolan belgeler... Sistem olmadan bu süreci yasalara uygun ve verimli yönetmek artık mümkün. ContractorPass, Türkiye\'nin en kurumsal şirketleri tarafından kullanılan uçtan uca dijital kart başvuru platformudur.',
    'cp.problem.title': 'Bu Sorunları Yaşıyor Musunuz?',
    'cp.problem.1': 'Çalışan başına 10–14 evrakın toplanması, ilgili şirkete iletilmesi ve fiziksel takibi',
    'cp.problem.2': 'Farklı ekiplerin KVKK kapsamında ayrı evrakları incelemesi ve sürecin koordinasyonu',
    'cp.problem.3': 'Eksik ya da hatalı evrakların tekrar iletilip tekrar onaylanmasıyla uzayan süreçler',
    'cp.problem.4': 'Süresi dolan evrakların takibi ve çalışma süresi boyunca güncel tutulması yükümlülüğü',
    'cp.problem.5': 'Sistemsiz süreçte KVKK, İSG ve diğer yasal yükümlülüklerin yerine getirilmesinin güçlüğü',
    'cp.solution.title': 'ContractorPass Ne Sunar?',
    'cp.features.title': 'Şirketinize Sağladıkları',
    'cp.f1.title': 'İşe Geç Başlama Sorunu Ortadan Kalkar',
    'cp.f1.desc': 'Evrak eksikliği ya da gecikmesi nedeniyle yüklenici çalışanların işe geç başlaması önlenir; maddi kayıpların önüne geçilir.',
    'cp.f2.title': 'Zaman ve İş Gücü Tasarrufu',
    'cp.f2.desc': 'Evrakları kontrol eden ekiplerin iş yükü azalır; süreç dijital ortamda hızlı ve izlenebilir biçimde yürütülür.',
    'cp.f3.title': 'KVKK ve Yasal Uyumluluk',
    'cp.f3.desc': 'Her ekip yalnızca sorumlu olduğu evrakları görür. KVKK başta olmak üzere tüm yasal yükümlülüklerin yerine getirilmesine katkı sağlar.',
    'cp.f4.title': 'Denetim Anında Hazır Erişim',
    'cp.f4.desc': 'Denetim ve ISG gereklilikleri için tüm evraklara anında ve eksiksiz ulaşılır; dağınık kayıt dönemi biter.',
    'cp.f5.title': 'Kurumsal Raporlama',
    'cp.f5.desc': 'Yüklenici personel sayısı, evrak durumları ve kart geçerlilikleri için anlık ve kurumsal raporlar alınır.',
    'cp.f6.title': 'Tam Dijital Dönüşüm',
    'cp.f6.desc': 'Kağıt ve e-posta yerine online platform; şirket ve yüklenici tarafında memnuniyet, süreçte şeffaflık sağlanır.',
    'cp.f7.title': 'Daha Az Personelle Daha Fazla Kontrol',
    'cp.f7.desc': 'Sistem, tekrarlayan evrak takibini otomatikleştirerek daha az personelle daha fazla yüklenici çalışanının kontrolünü mümkün kılar ve doğrudan maddi kazanç sağlar.',
    'cp.who.title': 'Kimler İçin?',
    'cp.who.list': 'İnşaat sahaları, enerji santralleri, rafineriler, limanlar, endüstriyel tesisler, organize sanayi bölgeleri ve yüklenici firma yoğun tüm kurumsal işletmeler için.',

    // ShiftLog page
    'sl.hero.title': 'Dijital Vardiya Defteri ile Devir Teslimlerinizi Güvenceye Alın',
    'sl.hero.subtitle': 'ShiftLog, klasik vardiya defterini dijitalleştirir; olayları, teslim notlarını ve ekip iletişimini izlenebilir ve aranabilir hale getirir.',
    'sl.problem.title': 'Bu Sorunları Yaşıyor Musunuz?',
    'sl.problem.1': 'Kağıt vardiya defterlerinde kayıtların kaybolması veya okunamaması',
    'sl.problem.2': 'Vardiya devir tesliminde önemli bilgilerin atlanması',
    'sl.problem.3': 'Geçmiş olayları aramanın/bulmanın imkansızlığı',
    'sl.problem.4': 'Yönetimin saha durumundan anlık haberdar olamaması',
    'sl.problem.5': 'Denetimlerde kayıtların eksik veya düzensiz olması',
    'sl.solution.title': 'ShiftLog Ne Sunar?',
    'sl.features.title': 'Temel Özellikler',
    'sl.f1.title': 'Dijital Devir Teslim',
    'sl.f1.desc': 'Vardiya başlangıç ve bitişinde yapılandırılmış devir teslim formu; atlanan alan kalmaz.',
    'sl.f2.title': 'Olay ve Arıza Kayıtları',
    'sl.f2.desc': 'Olaylar kategorilenmiş olarak anlık kaydedilir, fotoğraf ve belge eklenebilir.',
    'sl.f3.title': 'Anlık Bildirimler',
    'sl.f3.desc': 'Kritik olaylar yönetim ve ilgili ekiplere anında bildirilir.',
    'sl.f4.title': 'Gelişmiş Arama',
    'sl.f4.desc': 'Tarih, kategori, ekipman veya anahtar kelimeye göre tüm geçmiş kayıtlara saniyeler içinde ulaşın.',
    'sl.f5.title': 'Ekip ve Rol Yönetimi',
    'sl.f5.desc': 'Vardiya ekipleri, sorumluluklar ve yetki seviyeleri merkezi yönetilir.',
    'sl.f6.title': 'Raporlama ve Analiz',
    'sl.f6.desc': 'Olay sıklığı, duruş süreleri, vardiya performansı gibi yönetsel raporlar.',
    'sl.who.title': 'Kimler İçin?',
    'sl.who.list': 'Üretim tesisleri, enerji santralleri, rafineriler, limanlar, hastane ve güvenlik operasyonları — 7/24 vardiyalı çalışan tüm işletmeler.',

    // PortOps page
    'po.hero.title': 'Liman Operasyonlarınızı Tek Platformda Yönetin',
    'po.hero.subtitle': 'PortOps, gemi kabul, yük planlama, vardiya, survey ve raporlama süreçlerini entegre eden kapsamlı bir liman operasyon yönetim sistemidir.',
    'po.problem.title': 'Bu Sorunları Yaşıyor Musunuz?',
    'po.problem.1': 'Operasyon süreçlerinin farklı Excel dosyaları ve programlarda parçalı yönetilmesi',
    'po.problem.2': 'Gemi, yük, vardiya ve survey bilgilerinin entegre olmaması',
    'po.problem.3': 'Operasyon raporlarının elle hazırlanması ve geç üretilmesi',
    'po.problem.4': 'Planlama ve kaynak kullanımının optimize edilememesi',
    'po.problem.5': 'Müşteri ve acentelere bilgi akışının yavaş olması',
    'po.solution.title': 'PortOps Ne Sunar?',
    'po.features.title': 'Temel Özellikler',
    'po.f1.title': 'Gemi ve Sefer Yönetimi',
    'po.f1.desc': 'Yanaşma, ayrılma, sefer bilgileri, acente ve müşteri verileri tek yerde.',
    'po.f2.title': 'Yük Operasyonları',
    'po.f2.desc': 'Yükleme, boşaltma, elleçleme ve stok hareketlerinin canlı takibi.',
    'po.f3.title': 'Vardiya Defteri ve Operasyon Notları',
    'po.f3.desc': 'Vardiya bazlı gemi ve operasyon notları, devir teslim kayıtları ve saha gözlemlerinin dijital ortamda tutulması.',
    'po.f4.title': 'Surve Yönetimi',
    'po.f4.desc': 'Draft survey, miktar survey ve kondisyon survey kayıtları; survey raporlarının dijital ortamda tutulması ve arşivlenmesi.',
    'po.f5.title': 'Operasyon Raporları',
    'po.f5.desc': 'Gemi performansı, tonage raporu, vardiya verimliliği ve yönetim panoları.',
    'po.f6.title': 'Demuraj Hesaplama',
    'po.f6.desc': 'Serbest süre, bekleme süresi ve demuraj/despatch tutarlarının otomatik hesaplanması ve raporlanması.',
    'po.who.title': 'Kimler İçin?',
    'po.who.list': 'Konteyner limanları, genel kargo terminalleri, kuru yük limanları, sıvı yük terminalleri ve liman işletme şirketleri.',

    // About
    'about.title': 'Hakkımızda',
    'about.lead': 'AsminTech, endüstriyel tesisler ve operasyonel yoğun sektörler için kurumsal yazılım çözümleri geliştirir.',
    'about.p1': 'Yıllardır saha ve operasyon süreçlerinin içinde yer alarak edindiğimiz deneyimi, modern yazılım teknolojileriyle birleştiriyoruz. Ürünlerimiz laboratuvar koşullarında değil, gerçek operasyonların içinde doğdu.',
    'about.p2': 'Amacımız, büyük ölçekli kurumsal yazılımların karmaşıklığından uzak, sahada çalışan insanlar için pratik ve güçlü araçlar sunmak.',
    'about.values.title': 'Değerlerimiz',
    'about.v1.title': 'Sahaya Yakınlık',
    'about.v1.desc': 'Kullanıcılarımızın günlük işini anlamadan yazılım yazmayız.',
    'about.v2.title': 'Sadelik',
    'about.v2.desc': 'Karmaşık süreçleri basit arayüzlere indirgeriz.',
    'about.v3.title': 'Güvenilirlik',
    'about.v3.desc': 'Operasyonun durmaması için dayanıklı yazılım yazarız.',

    // Contact
    'contact.title': 'İletişim',
    'contact.lead': 'Demo talebi, soru veya iş birliği için bize yazın.',
    'contact.form.name': 'Ad Soyad',
    'contact.form.company': 'Firma',
    'contact.form.email': 'E-posta',
    'contact.form.phone': 'Telefon',
    'contact.form.product': 'İlgilendiğiniz Ürün',
    'contact.form.product.any': 'Genel bilgi',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.email.label': 'E-posta',
    'contact.phone.label': 'Telefon',
    'contact.location.label': 'Konum',
    'contact.location.value': 'Türkiye',
  },
  en: {
    'nav.home': 'Home',
    'nav.contractorpass': 'ContractorPass',
    'nav.shiftlog': 'ShiftLog',
    'nav.portops': 'PortOps',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.badge': 'Enterprise Software Solutions',
    'hero.title': 'Digitize Your Operational Processes',
    'hero.subtitle': 'AsminTech builds enterprise software solutions for contractor access card application workflows, digital shift tracking, and port operations.',
    'hero.cta.primary': 'Explore Products',
    'hero.cta.secondary': 'Request a Demo',

    'products.title': 'Our Products',
    'products.subtitle': 'Practical and powerful solutions built for your industry',

    'cp.name': 'ContractorPass',
    'cp.tagline': 'Contractor Access Card Management',
    'cp.short': 'End-to-end digital application and approval platform for managing contractor personnel access to construction sites and industrial facilities.',

    'sl.name': 'ShiftLog',
    'sl.tagline': 'Digital Shift Logbook',
    'sl.short': 'A modern shift management system that digitizes shift handovers, incident logs, and team communication.',

    'po.name': 'PortOps',
    'po.tagline': 'Port Operations Management System',
    'po.short': 'Operations management software integrating vessel, cargo, shift, and surveyy processes of ports and terminals on a single platform.',

    'card.learnmore': 'Learn More',

    'why.title': 'Why AsminTech?',
    'why.1.title': 'Industry-Specific',
    'why.1.desc': 'Built on the real processes of construction, energy, ports and industrial facilities.',
    'why.2.title': 'End-to-End Digital',
    'why.2.desc': 'Documents, signatures, approvals, archives — paperless and traceable throughout.',
    'why.3.title': 'Fast Deployment',
    'why.3.desc': 'Integrates with your existing systems and goes live quickly.',
    'why.4.title': 'Enterprise Support',
    'why.4.desc': 'Locally developed with enterprise-grade SLAs and dedicated support.',

    'cta.title': 'Ready to take your operation to the next level?',
    'cta.subtitle': 'Request a demo to see our products in action.',
    'cta.button': 'Request a Demo',

    'footer.tagline': 'Enterprise operations software',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    // ContractorPass
    'cp.hero.title': 'Digitize Your Contractor Access Card Process',
    'cp.hero.subtitle': '10–14 documents per contractor employee, multiple review teams operating under data-privacy regulations, expiring certificates... Managing this compliantly and efficiently without a system is nearly impossible. ContractorPass is the end-to-end digital access card platform trusted by Turkey\'s most established corporations.',
    'cp.problem.title': 'Do You Face These Issues?',
    'cp.problem.1': 'Collecting, submitting and manually tracking 10–14 documents per contractor employee',
    'cp.problem.2': 'Different teams reviewing different documents under data-privacy regulations — no centralized coordination',
    'cp.problem.3': 'Incomplete or incorrect documents requiring repeated submission and re-review, extending timelines',
    'cp.problem.4': 'Tracking document expiry dates and keeping records current throughout employment',
    'cp.problem.5': 'Difficulty meeting legal obligations (data privacy, HSE) without a centralized system',
    'cp.solution.title': 'What ContractorPass Delivers',
    'cp.features.title': 'What It Does for Your Company',
    'cp.f1.title': 'No More Late Starts',
    'cp.f1.desc': 'Contractor employees start on time — document delays no longer hold up work or cause financial losses.',
    'cp.f2.title': 'Time Savings for Review Teams',
    'cp.f2.desc': 'Document reviewers work faster with a centralized digital workflow — less back-and-forth, more efficiency.',
    'cp.f3.title': 'Data Privacy & Legal Compliance',
    'cp.f3.desc': 'Each team sees only the documents they are authorized to view. Data-privacy and HSE obligations are met systematically.',
    'cp.f4.title': 'Instant Audit Readiness',
    'cp.f4.desc': 'All documents are instantly accessible when audits occur — no more scrambling through scattered records.',
    'cp.f5.title': 'Corporate Reporting',
    'cp.f5.desc': 'Real-time reports on contractor headcount, document status and card validity — ready for management.',
    'cp.f6.title': 'Full Digital Transformation',
    'cp.f6.desc': 'Replace paper and email with an online platform. Satisfaction increases on both the company and contractor side.',
    'cp.f7.title': 'More Control with Fewer Staff',
    'cp.f7.desc': 'By automating repetitive document tracking, the system lets fewer people manage more contractor employees — delivering direct financial gains.',
    'cp.who.title': 'Who Is It For?',
    'cp.who.list': 'Construction sites, power plants, refineries, ports, industrial facilities, organized industrial zones, and any corporation with significant contractor workforce presence.',

    // ShiftLog
    'sl.hero.title': 'Secure Shift Handovers with a Digital Logbook',
    'sl.hero.subtitle': 'ShiftLog replaces the classic paper shift logbook — making incidents, handover notes and team communication traceable and searchable.',
    'sl.problem.title': 'Do You Face These Issues?',
    'sl.problem.1': 'Records lost or illegible in paper shift logbooks',
    'sl.problem.2': 'Critical information missed during shift handovers',
    'sl.problem.3': 'Impossible to search or find historical incidents',
    'sl.problem.4': 'Management has no real-time visibility into field conditions',
    'sl.problem.5': 'Incomplete or disorganized records during audits',
    'sl.solution.title': 'What ShiftLog Delivers',
    'sl.features.title': 'Key Features',
    'sl.f1.title': 'Digital Handover',
    'sl.f1.desc': 'Structured handover forms at shift start and end — nothing gets skipped.',
    'sl.f2.title': 'Incident & Failure Logs',
    'sl.f2.desc': 'Incidents are logged in real time with categories, photos and documents.',
    'sl.f3.title': 'Real-Time Notifications',
    'sl.f3.desc': 'Critical incidents are instantly pushed to management and relevant teams.',
    'sl.f4.title': 'Advanced Search',
    'sl.f4.desc': 'Find any historical record in seconds — by date, category, equipment or keyword.',
    'sl.f5.title': 'Team & Role Management',
    'sl.f5.desc': 'Shift teams, responsibilities and authorization levels managed centrally.',
    'sl.f6.title': 'Reporting & Analytics',
    'sl.f6.desc': 'Management dashboards for incident frequency, downtime and shift performance.',
    'sl.who.title': 'Who Is It For?',
    'sl.who.list': 'Manufacturing plants, power plants, refineries, ports, hospital and security operations — any 24/7 shift-based operation.',

    // PortOps
    'po.hero.title': 'Manage Port Operations on a Single Platform',
    'po.hero.subtitle': 'PortOps is a comprehensive port operations management system integrating vessel calls, cargo planning, shifts, surveyys and reporting.',
    'po.problem.title': 'Do You Face These Issues?',
    'po.problem.1': 'Operations fragmented across different Excel files and tools',
    'po.problem.2': 'Vessel, cargo, shift and surveyy data not integrated',
    'po.problem.3': 'Operations reports prepared manually and delivered late',
    'po.problem.4': 'Planning and resource utilization not optimized',
    'po.problem.5': 'Slow information flow to customers and agents',
    'po.solution.title': 'What PortOps Delivers',
    'po.features.title': 'Key Features',
    'po.f1.title': 'Vessel & Voyage Management',
    'po.f1.desc': 'Berthing, departure, voyage data, agency and customer info — all in one place.',
    'po.f2.title': 'Cargo Operations',
    'po.f2.desc': 'Live tracking of loading, discharge, handling and inventory movements.',
    'po.f3.title': 'Shift Log & Operations Notes',
    'po.f3.desc': 'Shift-based vessel and operations notes, handover records and field observations kept digitally.',
    'po.f4.title': 'Survey Management',
    'po.f4.desc': 'Draft surveyy, quantity surveyy and condition surveyy records; digital management and archiving of surveyy reports.',
    'po.f5.title': 'Operations Reporting',
    'po.f5.desc': 'Vessel performance, tonnage reports, shift efficiency and management dashboards.',
    'po.f6.title': 'Demurrage Calculation',
    'po.f6.desc': 'Automatic calculation and reporting of laytime, waiting time and demurrage/despatch amounts.',
    'po.who.title': 'Who Is It For?',
    'po.who.list': 'Container ports, general cargo terminals, dry bulk ports, liquid cargo terminals and port operating companies.',

    // About
    'about.title': 'About Us',
    'about.lead': 'AsminTech builds enterprise software for industrial facilities and operations-heavy industries.',
    'about.p1': 'We combine years of hands-on experience in field and operations processes with modern software technologies. Our products were born inside real operations, not in a lab.',
    'about.p2': 'Our goal is to provide practical and powerful tools for the people working on the ground — free from the complexity of bloated enterprise software.',
    'about.values.title': 'Our Values',
    'about.v1.title': 'Close to the Field',
    'about.v1.desc': 'We don\'t write software without first understanding our users\' daily work.',
    'about.v2.title': 'Simplicity',
    'about.v2.desc': 'We reduce complex processes to simple interfaces.',
    'about.v3.title': 'Reliability',
    'about.v3.desc': 'We build durable software so that operations never stop.',

    // Contact
    'contact.title': 'Contact',
    'contact.lead': 'Write to us for a demo request, a question or partnership.',
    'contact.form.name': 'Full Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.product': 'Product of Interest',
    'contact.form.product.any': 'General inquiry',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.value': 'Türkiye',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['tr']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = stripBasePath(url.pathname).split('/');
  if (first in languages) return first as Lang;
  return defaultLang;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localized = lang === defaultLang ? (clean === '/' ? '/' : clean) : `/${lang}${clean === '/' ? '' : clean}`;
  return withBasePath(localized);
}
