// Complete Arabic and English translations for all pages
// Spiritually accurate theological terminology

const translations = {
  en: {
    // === NAVIGATION ===
    homeTitle: "Catholic Faith Guardian",
    home: "Home",
    christology: "Christology",
    ecumenical: "Ecumenical Councils",
    doctrines: "Catholic Doctrines",
    history: "Church History",
    language: "Language",
    englishLang: "English",
    arabicLang: "العربية",

    // === INDEX PAGE ===
    indexHeroTitle: "Welcome to the Catholic Faith",
    indexHeroSubtitle: "Discover the rich theological heritage and wisdom of the Catholic Church through centuries of faith",
    exploreTopics: "Explore Topics",
    featuredTopics: "Featured Topics",
    featuredSubtitle: "Dive deep into the core theological pillars that shape our understanding of faith",
    
    christologyCardTitle: "Christology",
    christologyCardDesc: "The study of Jesus Christ, examining his nature, divinity, humanity, and his central role in Christian salvation and redemption.",
    ecumenicalCardTitle: "Ecumenical Councils",
    ecumenicalCardDesc: "Assemblies of bishops from around the world that have shaped Catholic doctrine and practice through centuries of theological discernment.",
    doctrinesCardTitle: "Catholic Doctrines",
    doctrinesCardDesc: "The official teachings of the Roman Catholic Church covering faith, morals, sacraments, and the foundations of Catholic belief and practice.",
    historyCardTitle: "Church History",
    historyCardDesc: "The fascinating story of the Catholic Church from its apostolic origins through two thousand years, exploring its major periods, figures, and events.",
    
    learnMore: "Learn More →",
    whyStudyTitle: "Why Study Catholic Theology?",
    whyStudyText: "Understanding Catholic theology provides insight into one of the world's largest and oldest religious traditions. Through the study of Christology, the wisdom of ecumenical councils, and foundational doctrines, we deepen our faith, strengthen our spiritual practice, and connect with the universal Church across time and culture. This educational resource is designed to make these profound teachings accessible to all seekers of truth.",
    beginJourney: "Begin Your Journey",
    
    quickLinks: "Quick Links",
    topics: "Topics",
    about: "An educational resource for exploring Catholic theology and faith.",
    copyright: "© 2026 Catholic Faith Guardian. All rights reserved.",

    // === CHRISTOLOGY PAGE ===
    christologyTitle: "Christology",
    christologySubtitle: "The theological study of Jesus Christ, exploring his nature, divinity, humanity, and redemptive mission",
    
    whatIsChristology: "What is Christology?",
    whatChristologyP1: "Christology is the systematic theological study of Jesus Christ and his significance in Christian faith and practice. The term comes from the Greek words \"Christos\" (Christ) and \"logos\" (study or discourse). This foundational discipline examines who Jesus is, what he accomplished, and how we understand his relationship to God the Father and the Holy Spirit.",
    whatChristologyP2: "Christology seeks to reconcile and explain the fundamental paradox at the heart of Christianity: that Jesus of Nazareth is both fully human and fully divine. This mysterious union of two natures in one person has been the subject of deep theological reflection throughout Christian history and remains central to Catholic faith and doctrine.",
    keyFocus: "Key Focus:",
    keyFocusText: "Christology addresses the core question: \"Who is Jesus Christ?\" and examines how understanding his divine nature and human nature informs our faith, salvation, and relationship with God.",
    
    divinityOfChrist: "The Divinity of Christ",
    divinityP1: "The divinity of Christ is one of the most essential doctrines of Catholic faith. Jesus Christ is understood as the eternal Son of God, the second person of the Trinity, who existed before time and participated in the creation of the universe. His divinity is not something he assumed or acquired; rather, it is fundamental to his eternal nature.",
    divinityP2: "Throughout the Gospels, Jesus demonstrates his divine authority through miracles, his power to forgive sins, his resurrection from the dead, and his claim to be \"one with the Father.\" The Council of Nicaea (325 AD) formally affirmed that Christ is \"consubstantial\" (homoousios) with the Father.",
    divinityP3: "Catholic theology teaches that Christ's divinity is not diminished by his humanity. Rather, his divine nature fully interpenetrates his human nature, enabling him to bridge the infinite gap between God and humanity, and making possible our redemption and salvation.",
    nicaeaHighlight: "Council of Nicaea (325 AD):",
    nicaeaQuote: "Declared that the Son is \"light from light, true God from true God, begotten, not made, consubstantial with the Father.\"",
    
    humanityOfChrist: "The Humanity of Christ",
    humanityP1: "The full humanity of Jesus Christ is equally essential to Catholic Christology. Jesus was truly human: born of the Virgin Mary, he experienced growth, hunger, thirst, fatigue, pain, and all the circumstances of human life—except sin. His humanity was not a disguise or illusion but a complete and authentic human nature.",
    humanityP2: "Christ's humanity makes him the perfect mediator between God and humanity. Through his human experiences, he understands and shares in our struggles. Through his perfect obedience to the Father and his willing acceptance of suffering and death, he redeemed humanity from within our condition.",
    humanityP3: "The Council of Chalcedon (451 AD) solemnly defined that Christ possesses \"two natures without confusion, without change, without division, without separation.\" His humanity is fully real, yet united with his divinity in the one person of Jesus Christ.",
    hypostaticUnion: "The Hypostatic Union:",
    hypostaticUnionText: "The complete and permanent union of Jesus's divine and human natures in one divine person, perfectly preserved and expressed through his entire earthly life, passion, death, and resurrection.",
    
    salvationInChrist: "The Importance of Christ in Salvation",
    salvationP1: "Central to all Christology is the understanding that Jesus Christ is humanity's savior. Through his incarnation, life, passion, death, and resurrection, Christ accomplished our redemption. He is the way, the truth, and the life.",
    salvationP2: "Christ's redemptive work operates on multiple levels: his sacrifice on the cross atones for our sins; his resurrection conquers death and opens the pathway to eternal life; his ascension to the right hand of the Father establishes his ongoing intercessory role.",
    salvationP3: "For Catholics, Christ's saving work is not merely a past event but an ongoing reality, made present in the sacraments—especially the Eucharist. Through our participation in Christ's life, death, and resurrection in the sacraments and through prayer, we become sharers in his divine life.",
    redemptionHighlight: "Redemption in Christ:",
    redemptionText: "Through Jesus Christ, God offers humanity forgiveness of sins, healing, transformation, and the promise of eternal life in communion with the Trinity and the saints.",
    
    connectRelated: "Connect with Related Topics",
    connectText: "Understanding Christology deepens our appreciation of the broader theological landscape of the Catholic faith. Many of the major Ecumenical Councils were convened specifically to clarify and defend Christological doctrine.",
    exploreChristology: "→ Explore Christology",
    exploreEcumenical: "→ Explore Ecumenical Councils",
    learnDoctrines: "→ Learn Catholic Doctrines",

    // === ECUMENICAL COUNCILS PAGE ===
    ecumenicalTitle: "Ecumenical Councils",
    ecumenicalSubtitle: "The gatherings of bishops that shaped Catholic doctrine and guided the Church through centuries",
    
    overviewChurch: "Overview: The Voice of the Church",
    overviewP1: "Throughout the twenty centuries of the Church's existence, ecumenical councils have gathered bishops from across the world to address doctrinal questions, settle theological disputes, and provide authoritative guidance to the faithful. These councils represent the exercise of the Church's teaching authority—the magisterium—united under the leadership of the Pope.",
    overviewP2: "Ecumenical councils are extraordinary events, convened rarely but with profound significance when the Church faces major challenges or needs to clarify essential truths. The decisions of these councils, approved by the Pope, carry the authority of the entire universal Church.",
    councilHighlight: "The Authority of Councils:",
    councilHighlightText: "Ecumenical councils represent the Church's highest teaching authority. Their decisions preserve apostolic faith while addressing contemporary errors and modern challenges to Christian truth.",
    
    nicaea: "Council of Nicaea (325 AD)",
    nicaeaDesc: "Affirmed the divinity of Christ and condemned Arianism. Declared Christ to be \"consubstantial\" with the Father.",
    
    constantinople: "Council of Constantinople (381 AD)",
    constantinopleDesc: "Completed the doctrine of the Trinity. Affirmed the full divinity of the Holy Spirit and refined Christological definitions.",
    
    ephesus: "Council of Ephesus (431 AD)",
    ephesusDesc: "Defended Mary as \"Theotokos\" (Mother of God). Condemned Nestorianism which denied Christ's unified person.",
    
    chalcedon: "Council of Chalcedon (451 AD)",
    chalcedonDesc: "Defined the two natures of Christ in one person. Established the hypostatic union as orthodox doctrine.",
    
    lateran: "Lateran Council V (1512-1517 AD)",
    lateranDesc: "Addressed philosophical questions and condemned rationalism. Reformed Church discipline and clerical conduct.",
    
    trent: "Council of Trent (1545-1563 AD)",
    trentDesc: "The Counter-Reformation council. Clarified sacramental theology, reformed clergy, and reaffirmed papal authority.",
    
    vatican1: "Vatican I (1869-1870 AD)",
    vatican1Desc: "Defined papal infallibility and primacy. Addressed challenges of modernism and scientific advancement.",
    
    vatican2: "Vatican II (1962-1965 AD)",
    vatican2Desc: "Opened the Church to the modern world. Reformed liturgy, emphasized Scripture, and promoted dialogue.",

    // === DOCTRINES PAGE ===
    doctrinesTitle: "Catholic Doctrines",
    doctrinesSubtitle: "The essential truths of the Catholic faith developed through Scripture, Tradition, and the Church's magisterium",
    
    depositOfFaith: "Overview: The Deposit of Faith",
    depositP1: "Catholic doctrines are the essential truths of our faith, revealed by God through Scripture and Sacred Tradition, and authoritatively interpreted and guarded by the Church's magisterium. These doctrines form the foundation of Catholic belief and practice.",
    depositP2: "The doctrines presented here represent core Catholic teachings that have been refined and clarified throughout two millennia. They address fundamental questions about God, Christ, the Church, the sacraments, and humanity's relationship with the divine.",
    
    trinity: "The Trinity",
    trinityDesc: "The central mystery of Christian faith: God exists as three persons—Father, Son, and Holy Spirit—in one divine substance. This unity and distinction defines Catholic understanding of God's nature.",
    
    incarnation: "The Incarnation",
    incarnationDesc: "The mystery that God became human in Jesus Christ. God's eternal Word assumed human nature to accomplish our salvation and reveal divine love.",
    
    resurrection: "The Resurrection",
    resurrectionDesc: "Christ's rising from death on the third day. The foundation of Christian faith and the guarantee of eternal life for all believers through him.",
    
    sacraments: "The Sacraments",
    sacramentDesc: "Seven sacred signs instituted by Christ that communicate grace. They unite us to Christ's redemptive work through visible signs and invisible grace.",
    
    marianDevotion: "Marian Devotion",
    marianDesc: "Special veneration of Mary, the Mother of God. She is honored as the greatest of saints, present in prayer and intercessory grace.",
    
    purgatory: "Purgatory and the Communion of Saints",
    purgatoryDesc: "The belief in purification after death and the communion between the living and deceased. Saints in heaven intercede for the Church on earth.",

    // === CHURCH HISTORY PAGE ===
    historyTitle: "Church History",
    historySubtitle: "Two thousand years of faith, struggle, and grace from the apostolic age to the modern era",
    
    overviewHistory: "Overview: The Church Through the Ages",
    overviewHistoryP1: "The history of the Catholic Church spans two thousand years of profound spiritual, intellectual, and social significance. From a small group of followers gathered in Jerusalem to a global communion of over one billion believers, the Church has shaped civilizations and borne witness to the transformative power of Christ's Gospel.",
    overviewHistoryP2: "Understanding Church history helps us appreciate the deep roots of our faith, recognize how the Holy Spirit has guided the Church through trials and triumphs, and grasp the Church's ongoing mission to proclaim Christ and serve humanity.",
    
    earlyChurch: "The Early Church: Apostolic Age and Persecution",
    earlyChurchP1: "The Early Church period, spanning from Pentecost in 33 AD through approximately the fifth century, witnessed the explosive spread of Christianity despite fierce opposition. Beginning with the apostles' proclamation of the Risen Christ in Jerusalem, the Gospel rapidly spread throughout the Mediterranean world.",
    earlyChurchP2: "For nearly three centuries, Christians faced systematic persecution under Roman emperors. Thousands of believers, including many apostles and their successors, sealed their faith with their blood as martyrs. Yet paradoxically, persecution strengthened rather than weakened the Church.",
    earlyChurchHighlight: "Key Figures of the Early Church:",
    earlyChurchHighlightText: "The apostles (Peter, Paul, John, James); martyrs like Ignatius, Polycarp, and Perpetua; Church Fathers like Augustine, John Chrysostom, and Jerome.",
    
    medievalChurch: "Medieval Church: Faith, Learning, and Authority",
    medievalChurchP1: "The medieval period (roughly the fifth through fifteenth centuries) saw the Church become the dominant spiritual and intellectual force in Western civilization. With the collapse of the Roman Empire in the West, the Catholic Church provided spiritual guidance and moral authority across Europe.",
    medievalChurchP2: "Monasticism became the spiritual heart of the medieval Church. Monastic communities preserved classical texts, maintained human learning, pioneered agricultural innovations, established hospitals and schools, and evangelized previously pagan regions of Europe.",
    medievalChurchHighlight: "Medieval Achievements:",
    medievalChurchHighlightText: "Preservation of classical learning, development of universities and scholastic theology, creation of magnificent art and architecture, and the expansion of Christianity throughout Europe.",
    
    reformation: "The Reformation and Counter-Reformation",
    reformationP1: "The Protestant Reformation, sparked by Martin Luther's publication of his Ninety-Five Theses in 1517, challenged papal authority and Church practices. While Luther's initial intent was reform rather than schism, theological disputes led to the permanent division of Western Christianity.",
    reformationP2: "Rather than decline, the challenge of Protestantism prompted the Catholic Church to undertake genuine internal renewal. The Council of Trent (1545-1563) was the Church's reforming response, addressing clerical corruption through seminary formation and clarifying sacramental theology.",
    reformationHighlight: "Counter-Reformation Impact:",
    reformationHighlightText: "Seminary formation of clergy, clarification of seven sacraments, reaffirmation of papal primacy, missionary expansion to five continents, and spiritual renewal through saints and mystics.",
    
    modernChurch: "The Modern Church: Vatican I and Vatican II",
    modernChurchP1: "The eighteenth and nineteenth centuries saw the Church navigating unprecedented challenges from Enlightenment rationalism, scientific advancement, and revolutionary political ideologies. Popes responded with nuanced engagement.",
    modernChurchP2: "Vatican I (1869-1870) defined papal infallibility and primacy. Vatican II (1962-1965), was the most significant Church council in centuries, opening the Church to the modern world with a spirit of renewal and dialogue.",
    modernChurchHighlight: "Vatican II's Legacy:",
    modernChurchHighlightText: "Liturgical renewal, emphasis on Scripture and Tradition, theological development of collegiality, recognition of the laity's active role in the Church's mission, and a more positive approach to the modern world.",
    
    contemporary: "The Contemporary Church and Future Horizon",
    contemporaryP1: "From 1978 onward, the Church has been led by prophetic popes who championed human rights, religious freedom, and evangelical witness. Pope John Paul II's role in Poland's Solidarity movement demonstrated the Church's moral authority. Pope Benedict XVI emphasized faith seeking understanding.",
    contemporaryP2: "Pope Francis (2013-present) has emphasized mercy, service to the poor, care for creation, and return to the Church's evangelical mission. The contemporary Church faces real challenges yet remains a global community of over one billion believers with particular vitality in Africa, Asia, and Latin America.",
    contemporaryHighlight: "The Church's Ongoing Mission:",
    contemporaryHighlightText: "To make Christ present to every age, to defend human dignity and freedom, to work for justice and peace, to preserve revealed truth while engaging authentically with contemporary culture.",
    
    // === ADDITIONAL DOCTRINES CONTENT ===
    developmentOfDoctrine: "The Development of Doctrine",
    developmentP1: "Catholic doctrine is not static but develops and unfolds through time. The Second Vatican Council taught that doctrine develops \"while retaining always the same sense and the same intention.\" Under the guidance of the Holy Spirit, the Church's understanding of revealed truth deepens as pastors and theologians reflect on Scripture, Tradition, and the signs of the times.",
    developmentP2: "This development is organic, like a tree growing from a seed. Doctrines defined centuries after Christ's time represent the Church's growing clarity about truths implicit in apostolic Tradition. The Magisterium ensures that development remains faithful to the apostolic deposit and serves the faith of the Church.",
    
    livingDoctrine: "Living the Doctrines",
    livingP1: "Catholic doctrines are not abstract propositions but living truths meant to transform believers. To profess the Trinity is to enter into communion with God's Trinitarian life. To accept the Incarnation is to honor the dignity of human nature. To receive the sacraments is to encounter Christ sacramentally. To believe in salvation is to commit to ongoing conversion and holiness.",
    livingP2: "These doctrines form a coherent whole, each illuminating and supporting the others. Together they provide a comprehensive vision of God, humanity, salvation, and the Church's mission. Understanding them deeply enriches our faith and motivates us to live according to Gospel values."
  },

  ar: {
    // === NAVIGATION ===
    homeTitle: "حارس الإيمان الكاثوليكي",
    home: "الرئيسية",
    christology: "كريستولوجيا",
    ecumenical: "المجالس المسكونية",
    doctrines: "العقائد الكاثوليكية",
    history: "تاريخ الكنيسة",
    language: "اللغة",
    englishLang: "English",
    arabicLang: "العربية",

    // === INDEX PAGE ===
    indexHeroTitle: "مرحباً بك في الإيمان الكاثوليكي",
    indexHeroSubtitle: "اكتشف الإرث اللاهوتي الغني وحكمة الكنيسة الكاثوليكية عبر قرون من الإيمان",
    exploreTopics: "استكشف المواضيع",
    featuredTopics: "المواضيع المميزة",
    featuredSubtitle: "تعمق في الأعمدة اللاهوتية الأساسية التي تشكل فهمنا للإيمان",
    
    christologyCardTitle: "كريستولوجيا",
    christologyCardDesc: "دراسة يسوع المسيح، فحص طبيعته وألوهيته وإنسانيته ودوره المركزي في الخلاص والفداء المسيحي.",
    ecumenicalCardTitle: "المجالس المسكونية",
    ecumenicalCardDesc: "تجمعات الأساقفة من جميع أنحاء العالم التي شكلت العقيدة الكاثوليكية والممارسة عبر قرون من التمييز اللاهوتي.",
    doctrinesCardTitle: "العقائد الكاثوليكية",
    doctrinesCardDesc: "التعاليم الرسمية للكنيسة الكاثوليكية الرومانية التي تغطي الإيمان والأخلاق والأسرار والأساس القيم للإيمان والممارسة الكاثوليكية.",
    historyCardTitle: "تاريخ الكنيسة",
    historyCardDesc: "القصة الرائعة للكنيسة الكاثوليكية من أصولها الرسولية عبر ألفي سنة، تستكشف فتراتها الرئيسية والشخصيات والأحداث.",
    
    learnMore: "اعرف المزيد ←",
    whyStudyTitle: "لماذا ندرس اللاهوت الكاثوليكي؟",
    whyStudyText: "يوفر فهم اللاهوت الكاثوليكي رؤية عميقة لإحدى أكبر وأقدم التقاليد الدينية في العالم. من خلال دراسة الكريستولوجيا وحكمة المجالس المسكونية والعقائد الأساسية، نعمق إيماننا.",
    beginJourney: "ابدأ رحلتك",
    
    quickLinks: "الروابط السريعة",
    topics: "المواضيع",
    about: "مورد تعليمي لاستكشاف اللاهوت والإيمان الكاثوليكي.",
    copyright: "© 2026 حارس الإيمان الكاثوليكي. جميع الحقوق محفوظة.",

    // === CHRISTOLOGY PAGE ===
    christologyTitle: "كريستولوجيا",
    christologySubtitle: "الدراسة اللاهوتية ليسوع المسيح، استكشاف طبيعته وألوهيته وإنسانيته ورسالة الفداء",
    
    whatIsChristology: "ما هي الكريستولوجيا؟",
    whatChristologyP1: "الكريستولوجيا هي الدراسة اللاهوتية المنهجية ليسوع المسيح وأهميته في الإيمان والممارسة المسيحية. يأتي المصطلح من الكلمات اليونانية \"كريستوس\" (المسيح) و\"لوغوس\" (الدراسة أو الخطاب).",
    whatChristologyP2: "تسعى الكريستولوجيا إلى التوفيق بين وشرح المفارقة الأساسية في قلب المسيحية: أن يسوع الناصري هو الإنسان الكامل والإله الكامل معاً. كانت هذه الوحدة الغامضة موضوع تأمل لاهوتي عميق.",
    keyFocus: "التركيز الرئيسي:",
    keyFocusText: "تعالج الكريستولوجيا السؤال الأساسي: \"من هو يسوع المسيح؟\" وتفحص كيف يؤثر فهم طبيعته الإلهية والبشرية على إيماننا.",
    
    divinityOfChrist: "ألوهية المسيح",
    divinityP1: "ألوهية المسيح هي من أهم العقائد في الإيمان الكاثوليكي. يُفهم يسوع المسيح على أنه الابن الأزلي لله، الشخص الثاني من الثالوث، الذي كان موجوداً قبل الزمن وشارك في خلق الكون.",
    divinityP2: "عبر كل الأناجيل، يظهر يسوع سلطانه الإلهي من خلال المعجزات وسلطته على مغفرة الخطايا وقيامته من بين الأموات. أكد مجمع نيقية (325 م) رسمياً أن المسيح \"من نفس الجوهر\" مع الآب.",
    divinityP3: "يعلم اللاهوت الكاثوليكي أن ألوهية المسيح لا تتناقص ولا تتعارض مع إنسانيته. بل إن طبيعته الإلهية تخترق بالكامل طبيعته البشرية.",
    nicaeaHighlight: "مجمع نيقية (325 م):",
    nicaeaQuote: "أعلن أن الابن هو \"النور من النور، الإله الحقيقي من الإله الحقيقي، مولود وليس مخلوق، من نفس جوهر الآب.\"",
    
    humanityOfChrist: "إنسانية المسيح",
    humanityP1: "إنسانية يسوع المسيح الكاملة ضرورية بالتساوي للكريستولوجيا الكاثوليكية. كان يسوع إنساناً حقيقياً: وُلد من العذراء مريم، وعاش الجوع والعطش والتعب والألم.",
    humanityP2: "تجعل إنسانية المسيح منه الوسيط الكامل بين الله والبشرية. من خلال تجاربه البشرية، يفهم ويشاركنا في كفاحنا. من خلال طاعته الكاملة للآب وقبوله الطوعي للمعاناة والموت.",
    humanityP3: "عرّف مجمع خلقيدونية (451 م) بصرامة أن المسيح يمتلك \"طبيعتين بدون اختلاط، بدون تغيير، بدون انقسام، بدون فصل.\" إنسانيته حقيقية بالكامل.",
    hypostaticUnion: "الاتحاد الأقنومي:",
    hypostaticUnionText: "الاتحاد الكامل والدائم للطبيعتين الإلهية والبشرية ليسوع في شخص إلهي واحد، المحفوظ والمعبر عنه بالكامل عبر حياته الأرضية والآلام والموت والقيامة.",
    
    salvationInChrist: "أهمية المسيح في الخلاص",
    salvationP1: "أساس كل كريستولوجيا هو فهم أن يسوع المسيح هو مخلص البشرية. من خلال تجسده وحياته وآلامه وموته وقيامته، حقق المسيح فدائنا. إنه الطريق والحق والحياة.",
    salvationP2: "يعمل عمل الفداء في المسيح على عدة مستويات: ذبيحته على الصليب تكفر عن خطايانا؛ قيامته تغلب الموت وتفتح طريق الحياة الأبدية.",
    salvationP3: "بالنسبة للكاثوليكيين، فإن عمل خلاص المسيح ليس حدثاً ماضياً بل واقع جارٍ يتحقق في الأسرار المقدسة - خاصة الإفخارستيا. من خلال مشاركتنا في حياة المسيح وموته وقيامته.",
    redemptionHighlight: "الفداء في المسيح:",
    redemptionText: "من خلال يسوع المسيح، يقدم الله للبشرية مغفرة الخطايا والشفاء والتحول والوعد بالحياة الأبدية في شركة مع الثالوث والقديسين.",
    
    connectRelated: "التواصل مع المواضيع ذات الصلة",
    connectText: "يعمق فهم الكريستولوجيا تقديرنا للمشهد اللاهوتي الأوسع للإيمان الكاثوليكي. تم استدعاء العديد من المجالس المسكونية الكبرى خصيصاً لتوضيح والدفاع عن العقيدة الكريستولوجية.",
    exploreChristology: "→ استكشف الكريستولوجيا",
    exploreEcumenical: "→ استكشف المجالس المسكونية",
    learnDoctrines: "→ تعلم العقائد الكاثوليكية",

    // === ECUMENICAL COUNCILS PAGE ===
    ecumenicalTitle: "المجالس المسكونية",
    ecumenicalSubtitle: "تجمعات الأساقفة التي شكلت العقيدة الكاثوليكية وأرشدت الكنيسة عبر القرون",
    
    overviewChurch: "نظرة عامة: صوت الكنيسة",
    overviewP1: "طوال عشرين قرناً من وجود الكنيسة، اجتمعت المجالس المسكونية الأساقفة من حول العالم لمعالجة الأسئلة العقائدية وتسوية النزاعات اللاهوتية. تمثل هذه المجالس ممارسة سلطة التعليم في الكنيسة - السلطة التعليمية - الموحدة تحت قيادة البابا.",
    overviewP2: "المجالس المسكونية أحداث استثنائية، تُستدعى نادراً لكن بأهمية عميقة عندما تواجه الكنيسة تحديات كبرى. قرارات هذه المجالس، الموافق عليها من البابا، تحمل سلطة الكنيسة الجامعة بأكملها وتلزم ضمائر جميع الكاثوليكيين.",
    councilHighlight: "سلطة المجالس:",
    councilHighlightText: "تمثل المجالس المسكونية أعلى سلطة تعليمية في الكنيسة. تحافظ قراراتها على الإيمان الرسولي بينما تعالج الأخطاء المعاصرة.",
    
    nicaea: "مجمع نيقية (325 م)",
    nicaeaDesc: "أكد ألوهية المسيح وأدان الهرطقة الآرية. أعلن أن المسيح \"من نفس الجوهر\" مع الآب.",
    
    constantinople: "مجمع القسطنطينية (381 م)",
    constantinopleDesc: "أكمل عقيدة الثالوث. أكد الألوهية الكاملة للروح القدس ورقق التعاريف الكريستولوجية.",
    
    ephesus: "مجمع أفسس (431 م)",
    ephesusDesc: "دافع عن مريم باعتبارها \"والدة الإله\". أدان هرطقة نسطوريوس التي نكرت شخص المسيح الموحد.",
    
    chalcedon: "مجمع خلقيدونية (451 م)",
    chalcedonDesc: "عرّف طبيعتي المسيح في شخص واحد. أرسى الاتحاد الأقنومي كعقيدة أرثوذكسية.",
    
    lateran: "مجمع لاتيران الخامس (1512-1517 م)",
    lateranDesc: "عالج الأسئلة الفلسفية وأدان العقلانية. أصلح انضباط الكنيسة والسلوك الكهنوتي.",
    
    trent: "مجمع ترينت (1545-1563 م)",
    trentDesc: "مجمع الإصلاح المضاد. وضح اللاهوت السري، وأصلح الكهنوت، وأكد السلطة البابوية.",
    
    vatican1: "الفاتيكان الأول (1869-1870 م)",
    vatican1Desc: "عرّف عصمة البابا من الخطأ وأولويته. عالج تحديات الحداثة والتقدم العلمي.",
    
    vatican2: "الفاتيكان الثاني (1962-1965 م)",
    vatican2Desc: "فتح الكنيسة للعالم الحديث. أصلح الطقس، وأكد على الكتاب المقدس، وعزز الحوار.",

    // === DOCTRINES PAGE ===
    doctrinesTitle: "العقائد الكاثوليكية",
    doctrinesSubtitle: "الحقائق الأساسية للإيمان الكاثوليكي المطورة من خلال الكتاب المقدس والتقليد والسلطة التعليمية",
    
    depositOfFaith: "نظرة عامة: كنز الإيمان",
    depositP1: "العقائد الكاثوليكية هي الحقائق الأساسية لإيماننا، التي أعلنها الله من خلال الكتاب المقدس والتقليد المقدس، ويفسرها السلطة التعليمية للكنيسة. تشكل هذه العقائد أساس الإيمان والممارسة الكاثوليكية.",
    depositP2: "تمثل العقائد المقدمة هنا التعاليم الكاثوليكية الأساسية التي تم تحسينها على مدى ألفي سنة. تعالج الأسئلة الأساسية حول الله والمسيح والكنيسة والأسرار والعلاقة البشرية مع الإلهي.",
    
    trinity: "الثالوث",
    trinityDesc: "السر المركزي للإيمان المسيحي: الله موجود كثلاثة أشخاص - الآب والابن والروح القدس - في جوهر إلهي واحد.",
    
    incarnation: "التجسد",
    incarnationDesc: "السر الذي أصبح الله إنساناً في يسوع المسيح. الكلمة الأزلية لله افترضت الطبيعة البشرية لتحقيق خلاصنا.",
    
    resurrection: "القيامة",
    resurrectionDesc: "قيام المسيح من الموت في اليوم الثالث. أساس الإيمان المسيحي وضمان الحياة الأبدية لجميع المؤمنين فيه.",
    
    sacraments: "الأسرار المقدسة",
    sacramentDesc: "سبع علامات مقدسة أسسها المسيح تنقل النعمة. توحدنا مع عمل فداء المسيح من خلال علامات مرئية ونعمة غير مرئية.",
    
    marianDevotion: "تكريم مريم",
    marianDesc: "تكريم خاص لمريم، والدة الإله. يتم احترامها باعتبارها أعظم القديسين، الحاضرة في الصلاة والنعمة الشفاعية.",
    
    purgatory: "الطهارة والشركة مع القديسين",
    purgatoryDesc: "الإيمان بالتطهير بعد الموت والشركة بين الأحياء والمتوفين. القديسون في السماء يشفعون من أجل الكنيسة على الأرض.",

    // === CHURCH HISTORY PAGE ===
    historyTitle: "تاريخ الكنيسة",
    historySubtitle: "ألفا سنة من الإيمان والكفاح والنعمة من العصر الرسولي إلى العصر الحديث",
    
    overviewHistory: "نظرة عامة: الكنيسة عبر العصور",
    overviewHistoryP1: "يمتد تاريخ الكنيسة الكاثوليكية إلى ألفي سنة من الأهمية الروحية والفكرية والاجتماعية العميقة. من مجموعة صغيرة من المتابعين المجتمعين في أورشليم إلى شركة عالمية من أكثر من مليار مؤمن.",
    overviewHistoryP2: "يساعدنا فهم تاريخ الكنيسة على تقدير جذور إيماننا العميقة، والتعرف على كيفية إرشاد الروح القدس للكنيسة عبر المحن والانتصارات.",
    
    earlyChurch: "الكنيسة الأولى: العصر الرسولي والاضطهاد",
    earlyChurchP1: "شهدت فترة الكنيسة الأولى، من العنصرة في سنة 33 م إلى حوالي القرن الخامس، انتشاراً متفجراً للمسيحية رغم المعارضة الشرسة. بدءاً من إعلان الرسل للمسيح القائم في أورشليم.",
    earlyChurchP2: "لمدة ثلاثة قرون تقريباً، واجه المسيحيون الاضطهاد المنهجي تحت الأباطرة الرومان. لكن الاضطهاد لم يضعف الكنيسة بل قواها. شهادة هؤلاء الشهداء أثرت بعمق على المراقبين.",
    earlyChurchHighlight: "الشخصيات الرئيسية في الكنيسة الأولى:",
    earlyChurchHighlightText: "الرسل (بطرس وبولس ويوحنا ويعقوب)؛ شهداء مثل إغناطيوس وبوليكاربس وبيرتوا؛ آباء الكنيسة.",
    
    medievalChurch: "الكنيسة العصور الوسطى: الإيمان والعلم والسلطة",
    medievalChurchP1: "شهد العصر الوسيط (تقريباً من القرن الخامس إلى القرن الخامس عشر) أن الكنيسة أصبحت القوة الروحية والفكرية المسيطرة في الحضارة الغربية. وفرت الكنيسة الكاثوليكية المبدأ الموحد لمسيحية العالم.",
    medievalChurchP2: "أصبحت الرهبانية قلب الكنيسة الروحي في العصور الوسطى. جماعات رهبانية تتبع قاعدة القديس بندكتس انسحبت إلى حياة تأملية لكنها شكلت الحضارة بعمق.",
    medievalChurchHighlight: "الإنجازات الوسيطة:",
    medievalChurchHighlightText: "الحفاظ على المعرفة الكلاسيكية، تطوير الجامعات واللاهوت الدراسي، خلق فن وعمارة رائعة.",
    
    reformation: "الإصلاح والإصلاح المضاد",
    reformationP1: "انطلقت حركة الإصلاح البروتستانتي من نشر مارتن لوثر لـ \"95 رسالة\" في سنة 1517، وطعن في السلطة البابوية. بينما كانت نية لوثر الأولية هي الإصلاح.",
    reformationP2: "بدلاً من الانحدار، دفع تحدي البروتستانتية الكنيسة الكاثوليكية للقيام بتجديد داخلي حقيقي. كان مجمع ترينت (1545-1563) هو رد الكنيسة الإصلاحي.",
    reformationHighlight: "تأثير الإصلاح المضاد:",
    reformationHighlightText: "تكوين الكهنة، توضيح السبعة أسرار، إعادة تأكيد البابوية، التوسع التبشيري إلى خمس قارات.",
    
    modernChurch: "الكنيسة الحديثة: الفاتيكان الأول والثاني",
    modernChurchP1: "شهد القرنان الثامن عشر والتاسع عشر الكنيسة وهي تتنقل بين تحديات غير مسبوقة. استجابت الباباوات بانخراط دقيق، لا رفض الحداثة بكلياتها.",
    modernChurchP2: "عقد مجمع الفاتيكان الأول (1869-1870) عقيدتين رئيسيتين: عصمة البابا من الخطأ وأولويته. عقد مجمع الفاتيكان الثاني (1962-1965) كان أهم مجمع كنسي.",
    modernChurchHighlight: "إرث الفاتيكان الثاني:",
    modernChurchHighlightText: "التجديد الطقسي، التركيز على الكتاب المقدس والتقليد، الاعتراف بدور العلمانيين النشط.",
    
    contemporary: "الكنيسة المعاصرة والآفاق المستقبلية",
    contemporaryP1: "منذ سنة 1978 فصاعداً، قادت الكنيسة باباوات نبويون ادعموا حقوق الإنسان والحرية الدينية. أظهرت دور البابا يوحنا بولس الثاني في حركة التضامن البولندية السلطة الأخلاقية للكنيسة.",
    contemporaryP2: "يؤكد البابا فرانسيس (2013 إلى الآن) على الرحمة وخدمة الفقراء والعناية بالخلقة. تواجه الكنيسة المعاصرة تحديات حقيقية لكنها تبقى جماعة عالمية من أكثر من مليار مؤمن.",
    contemporaryHighlight: "رسالة الكنيسة المستمرة:",
    contemporaryHighlightText: "جعل المسيح حاضراً في كل عصر، الدفاع عن كرامة الإنسان والحرية، العمل من أجل العدالة والسلام.",
    
    // === ADDITIONAL DOCTRINES CONTENT ===
    developmentOfDoctrine: "تطور العقيدة",
    developmentP1: "العقيدة الكاثوليكية ليست جامدة بل تتطور وتتكشف عبر الزمن. علمت المجمع الفاتيكاني الثاني أن العقيدة تتطور \"مع الحفاظ دائماً على نفس المعنى والنية.\" تحت هدى الروح القدس، يتعمق فهم الكنيسة للحقيقة المعلنة.",
    developmentP2: "هذا التطور عضوي، مثل شجرة تنمو من بذرة. العقائد المحددة قروناً بعد وقت المسيح تمثل وضوح الكنيسة المتنامي حول الحقائق الضمنية في التقليد الرسولي. تضمن السلطة التعليمية أن التطور يبقى أميناً للكنز الرسولي.",
    
    livingDoctrine: "العيش بالعقائد",
    livingP1: "العقائد الكاثوليكية ليست افتراضات مجردة بل حقائق حية يقصد بها تحويل المؤمنين. الاعتراف بالثالوث يعني الدخول في شركة مع الحياة الثالوثية. قبول التجسد يعني احترام كرامة الطبيعة البشرية. استقبال الأسرار يعني اللقاء مع المسيح سرياً.",
    livingP2: "تشكل هذه العقائد كلاً متماسكاً، كل منها يضيء ويدعم الآخرين. معاً توفر رؤية شاملة عن الله والبشرية والخلاص ورسالة الكنيسة. فهمها بعمق يثري إيماننا ويحفزنا على العيش وفقاً لقيم الإنجيل."
  }
};
