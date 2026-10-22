const WHATSAPP_NUMBER = "255769660790";
const CATEGORY_DEFAULT = "all";

const categories = [
  {
    key: "birthday",
    name: "Birthday Cakes",
    intro: "Celebrate special birthdays with a cake that feels joyful, personal, and truly picture-worthy.",
    image: "https://i.pinimg.com/736x/40/ad/7f/40ad7fe003fefa4d45daa27d5e95c5a4.jpg",
    description: "Colourful, elegant, and playful cakes for unforgettable birthday moments."
  },
  {
    key: "wedding",
    name: "Wedding Cakes",
    intro: "Romantic and refined cakes designed for saying forever in style and sweetness.",
    image: "https://i.pinimg.com/736x/18/58/4e/18584e39676266ac93d65590e922106f.jpg",
    description: "Classic and modern wedding cakes with a luxurious, soft aesthetic."
  },
  {
    key: "sendoff",
    name: "Sendoff Cakes",
    intro: "A thoughtful sweet gesture for farewells, new beginnings, and memorable goodbyes.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    description: "Elegant sendoff cakes prepared to honour transitions and new adventures."
  },
  {
    key: "kitchen-party",
    name: "Kitchen Party Cakes",
    intro: "Festive cakes that feel celebratory, welcoming, and full of personality.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    description: "Decorative cakes for kitchen parties, bridal showers, and joyful gatherings."
  },
  {
    key: "graduation",
    name: "Graduation Cakes",
    intro: "Celebrate milestones with confident, uplifting cake designs that feel proud and polished.",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=900&q=80",
    description: "Bold, elegant cakes for academic achievements and proud accomplishments."
  },
  {
    key: "desserts",
    name: "Desserts",
    intro: "Sweet indulgences and bite-sized treats for a delightful finishing touch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    description: "Mini desserts, cheesecakes, brownies, and crowd-pleasing sweet bites."
  },
  {
    key: "gift-cakes",
    name: "Gift Cakes",
    intro: "Perfect for thoughtful surprises, romantic gestures, and ready-to-gift moments.",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80",
    description: "Gift-ready cakes with soft finishing touches and a warm personal feel."
  },
  {
    key: "muffins",
    name: "Muffins",
    intro: "Simple favourites with comforting flavours and a lovely everyday charm.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    description: "Fresh, flavourful muffins for brunches, gifting, and quick sweet treats."
  }
];

const flavorPhoto = (photoId) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;

const flavorGroups = [
  {
    id: "classic",
    name: "Classic Cake Flavors",
    flavors: [
      { name: "Vanilla", image: flavorPhoto("1486427944299-d1955d23e34d"), description: "A timeless, smooth, and delicate classic." },
      { name: "Chocolate", image: flavorPhoto("1606313564200-e75d5e30476c"), description: "Rich chocolate flavour for chocolate lovers." },
      { name: "Marble", image: flavorPhoto("1562440499-64c9a111f713"), description: "A beautiful blend of vanilla and chocolate." },
      { name: "Red Velvet", image: flavorPhoto("1558301211-0d8c8ddee6ec"), description: "A soft cake with a distinctive red colour and rich flavour." },
      { name: "White Velvet", image: flavorPhoto("1576618148400-f54bed99fcfd"), description: "A delicate, elegant cake with a soft, smooth taste." },
      { name: "Lemon", image: flavorPhoto("1582979512210-99b6a53386f9"), description: "A refreshing citrus-inspired flavour." },
      { name: "Orange", image: flavorPhoto("1547514701-42782101795e"), description: "A bright, fragrant citrus flavour." },
      { name: "Strawberry", image: flavorPhoto("1464965911861-746a04b4bca6"), description: "A sweet, fruity flavour with a lovely strawberry character." },
      { name: "Banana", image: flavorPhoto("1528825871115-3581a5387919"), description: "A soft cake with a comforting banana flavour." },
      { name: "Coconut", image: flavorPhoto("1546554137-f86b9593a222"), description: "A tropical flavour with a delicate coconut taste." }
    ]
  },
  {
    id: "chocolate-lovers",
    name: "Chocolate Lovers",
    flavors: [
      { name: "Chocolate Fudge", image: flavorPhoto("1578985545062-69928b1d9587"), description: "Deep chocolate cake with a smooth, fudgy finish." },
      { name: "Chocolate Mocha", image: flavorPhoto("1602351447937-745cb720612f"), description: "Chocolate with a mellow coffee-inspired note." },
      { name: "Chocolate Caramel", image: flavorPhoto("1557925923-cd4648e211a0"), description: "Rich chocolate paired with buttery caramel sweetness." },
      { name: "Chocolate Oreo", image: flavorPhoto("1603532648955-039310d9ed75"), description: "Chocolate cake with a cookies-and-cream inspired finish." },
      { name: "Chocolate Hazelnut", image: flavorPhoto("1586985289688-ca3cf47d3e6e"), description: "A smooth chocolate and toasted-nut inspired pairing." },
      { name: "Chocolate Mint", image: flavorPhoto("1588195538326-c5b1e9f80a1b"), description: "Chocolate with a cool, refreshing mint-inspired finish." },
      { name: "Double Chocolate", image: flavorPhoto("1621303837174-89787a7d4729"), description: "A generous, extra-rich chocolate experience." },
      { name: "Chocolate Peanut Butter", image: flavorPhoto("1551879400-111a9087cd86"), description: "Chocolate paired with a creamy, nutty flavour." }
    ]
  },
  {
    id: "fruity",
    name: "Fruity Cake Flavors",
    flavors: [
      { name: "Strawberry Cream", image: flavorPhoto("1490474418585-ba9bad8fd0ea"), description: "Sweet strawberry flavour with a soft, creamy character." },
      { name: "Blueberry", image: flavorPhoto("1587049352846-4a222e784d38"), description: "A gentle cake flavour inspired by fresh blueberries." },
      { name: "Raspberry", image: flavorPhoto("1464349095431-e9a21285b5f3"), description: "A bright berry flavour with a pleasantly tangy edge." },
      { name: "Pineapple", image: flavorPhoto("1505253716362-afaea1d3d1af"), description: "A sunny tropical flavour with a sweet, bright finish." },
      { name: "Mango", image: flavorPhoto("1543528176-61b239494933"), description: "A smooth, tropical mango-inspired cake flavour." },
      { name: "Passion Fruit", image: flavorPhoto("1559620192-032c4bc4674e"), description: "A lively tropical flavour with a fragrant tang." },
      { name: "Lemon Blueberry", image: flavorPhoto("1565958011703-44f9829ba187"), description: "Fresh citrus and berry notes in one bright combination." },
      { name: "Banana Caramel", image: flavorPhoto("1571771894821-ce9b6c11b08e"), description: "Comforting banana flavour with a caramel-inspired finish." }
    ]
  },
  {
    id: "premium",
    name: "Premium & Luxury Flavors",
    flavors: [
      { name: "Black Forest", image: flavorPhoto("1574085733277-851d9d856a3a"), description: "A rich chocolate-and-cherry inspired classic." },
      { name: "White Forest", image: flavorPhoto("1583338917451-face2751d8d5"), description: "A delicate white chocolate and cherry-inspired pairing." },
      { name: "Red Velvet Cream Cheese", image: flavorPhoto("1563729784474-d77dbb933a9e"), description: "Red velvet with a smooth cream-cheese inspired flavour." },
      { name: "Cookies and Cream (Oreo)", image: flavorPhoto("1488477181946-6428a0291777"), description: "Creamy vanilla cake with a chocolate-cookie inspired taste." },
      { name: "Salted Caramel", image: flavorPhoto("1551024601-bec78aea704b"), description: "Sweet caramel balanced with a delicate touch of salt." },
      { name: "Vanilla Bean", image: flavorPhoto("1557979619-445218f326b9"), description: "An elegant vanilla flavour with a fragrant, rounded finish." },
      { name: "Chocolate Truffle", image: flavorPhoto("1607958996333-41aef7caefaa"), description: "A decadent, smooth chocolate-forward cake flavour." },
      { name: "Ferrero Rocher", image: flavorPhoto("1509440159596-0249088772ff"), description: "A luxurious chocolate and hazelnut-inspired combination." },
      { name: "Tiramisu", image: flavorPhoto("1563805042-7684c019e1cb"), description: "A coffee-and-cream inspired flavour with a gentle cocoa finish." },
      { name: "Coffee Walnut", image: flavorPhoto("1517433670267-08bbd4be890f"), description: "A mellow coffee flavour with a nutty walnut-inspired note." },
      { name: "Pistachio", image: flavorPhoto("1497034825429-c343d7c6a68f"), description: "A delicate, nutty flavour inspired by pistachio." },
      { name: "Lotus Biscoff", image: flavorPhoto("1606890737304-57a1ca8a5b62"), description: "A warmly spiced caramel-cookie inspired cake flavour." },
      { name: "Almond", image: flavorPhoto("1571115177098-24ec42ed204d"), description: "A soft cake flavour with a gentle almond-inspired aroma." },
      { name: "White Chocolate Raspberry", image: flavorPhoto("1464195244916-405fa0a82545"), description: "Sweet white chocolate paired with bright raspberry notes." }
    ]
  },
  {
    id: "combinations",
    name: "Special Cake Combinations",
    flavors: [
      { name: "Chocolate and Vanilla", image: flavorPhoto("1535141192574-5d4897c12636"), description: "A familiar pairing of rich chocolate and smooth vanilla." },
      { name: "Chocolate and Strawberry", image: flavorPhoto("1557308536-ee471ef2c390"), description: "Chocolate cake with a sweet, fruity strawberry note." },
      { name: "Vanilla and Caramel", image: flavorPhoto("1521305916504-4a1121188589"), description: "Classic vanilla with a warm caramel-inspired finish." },
      { name: "Red Velvet and Chocolate", image: flavorPhoto("1599785209707-a456fc1337bb"), description: "A rich blend of red velvet character and chocolate flavour." },
      { name: "Lemon and Raspberry", image: flavorPhoto("1614707267537-b85aaf00c4b7"), description: "Bright lemon paired with a lively raspberry note." },
      { name: "Chocolate and Oreo", image: flavorPhoto("1483695028939-5bb13f8648b0"), description: "A chocolate-forward pairing with cookie-inspired richness." },
      { name: "Vanilla and Passion Fruit", image: flavorPhoto("1524351199678-941a58a3df50"), description: "Smooth vanilla balanced with fragrant tropical passion fruit." },
      { name: "Chocolate and Salted Caramel", image: flavorPhoto("1519869325930-281384150729"), description: "Deep chocolate with a sweet-and-salty caramel finish." },
      { name: "Strawberry and White Chocolate", image: flavorPhoto("1533134242443-d4fd215305ad"), description: "Sweet strawberry paired with delicate white chocolate." },
      { name: "Marble with Chocolate Ganache", image: flavorPhoto("1542826438-bd32f43d626f"), description: "Vanilla-and-chocolate marble cake with a ganache-inspired finish." }
    ]
  }
];

const classicFlavours = flavorGroups[0].flavors;

const products = [
  {
    id: "birthday-rose-gold",
    name: "Rose Gold Celebration Cake",
    category: "Birthday Cakes",
    categoryKey: "birthday",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1200&q=80",
    description: "Elegant soft-pink frosting with gold accents and a celebratory finish for adult birthdays.",
    // price: "TSh 48,000",
    flavours: ["Vanilla", "Strawberry", "White Velvet"],
    fullDescription: "A graceful celebration cake with a smooth finish, elegant floral detailing, and a refined birthday look."
  },
  {
    id: "birthday-candy-pop",
    name: "Candy Pop Birthday Cake",
    category: "Birthday Cakes",
    categoryKey: "birthday",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80",
    description: "A joyful, colourful cake with playful decoration and a happy party mood.",
    // price: "TSh 42,000",
    flavours: ["Vanilla", "Chocolate", "Strawberry"],
    fullDescription: "A bright and cheerful cake designed for lively birthday gatherings and colourful celebrations."
  },
  {
    id: "birthday-number-30",
    name: "Number 30 Birthday Cake",
    category: "Birthday Cakes",
    categoryKey: "birthday",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=80",
    description: "Statement number cake for milestone birthdays with a modern, festive finish.",
    // price: "TSh 55,000",
    flavours: ["Vanilla", "Marble", "Chocolate"],
    fullDescription: "A dramatic centerpiece cake with a signature number design, ideal for milestone birthdays and special family dinners."
  },
  {
    id: "birthday-mini-rose",
    name: "Mini Rose Birthday Cake",
    category: "Birthday Cakes",
    categoryKey: "birthday",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    description: "Soft blush tones and romantic decoration for cosy, personal birthday moments.",
    // price: "TSh 36,000",
    flavours: ["Vanilla", "White Velvet", "Strawberry"],
    fullDescription: "A sweet and intimate birthday cake with a soft floral feel, perfect for close-knit celebrations."
  },
  {
    id: "wedding-ivory-tier",
    name: "Ivory Tier Cake",
    category: "Wedding Cakes",
    categoryKey: "wedding",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    description: "Timeless ivory tiers with romantic floral styling for a classic wedding day.",
    // price: "TSh 120,000",
    flavours: ["Vanilla", "White Velvet", "Coconut"],
    fullDescription: "An elegant wedding cake with soft layers and refined floral details for a polished celebration."
  },
  {
    id: "wedding-blush-romance",
    name: "Blush Romance Cake",
    category: "Wedding Cakes",
    categoryKey: "wedding",
    image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=900&q=80",
    description: "Soft blush shades and delicate textures for romantic wedding themes.",
    // price: "TSh 130,000",
    flavours: ["Vanilla", "Strawberry", "White Velvet"],
    fullDescription: "A romantic wedding cake with gentle blush tones, graceful accents, and a warm sophisticated finish."
  },
  {
    id: "wedding-sage-gold",
    name: "Sage & Gold Wedding Cake",
    category: "Wedding Cakes",
    categoryKey: "wedding",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=900&q=80",
    description: "A refined combination of soft sage and champagne gold for modern wedding elegance.",
    // price: "TSh 140,000",
    flavours: ["Vanilla", "Lemon", "Coconut"],
    fullDescription: "A modern design with calm green tones and golden detail for a wedding that feels graceful and current."
  },
  {
    id: "wedding-minimal-tier",
    name: "Minimalist White Wedding Cake",
    category: "Wedding Cakes",
    categoryKey: "wedding",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=80",
    description: "Minimal lines and polished finishing for a clean, elegant statement cake.",
    // price: "TSh 118,000",
    flavours: ["White Velvet", "Vanilla", "Red Velvet"],
    fullDescription: "A crisp white cake with refined simplicity and a timeless design for a modern wedding."
  },
  {
    id: "sendoff-sunrise",
    name: "Sunrise Sendoff Cake",
    category: "Sendoff Cakes",
    categoryKey: "sendoff",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    description: "Bright, uplifting design ideal for farewell parties and celebratory goodbyes.",
    // price: "TSh 38,000",
    flavours: ["Orange", "Vanilla", "Banana"],
    fullDescription: "A warm and uplifting sendoff cake with a welcoming colour palette and a lively celebratory mood."
  },
  {
    id: "sendoff-travel",
    name: "Travel Farewell Cake",
    category: "Sendoff Cakes",
    categoryKey: "sendoff",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80",
    description: "A thoughtful cake for trips, new adventures, and warm sendoff gatherings.",
    // price: "TSh 40,000",
    flavours: ["Chocolate", "Vanilla", "Orange"],
    fullDescription: "A travel-inspired sendoff cake with extra personality and a polished finish for memorable goodbyes."
  },
  {
    id: "sendoff-workplace",
    name: "Workplace Farewell Cake",
    category: "Sendoff Cakes",
    categoryKey: "sendoff",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    description: "A graceful cake for office sendoffs and milestone transitions.",
    // price: "TSh 35,000",
    flavours: ["Chocolate", "Marble", "Vanilla"],
    fullDescription: "A tasteful and elegant farewell cake that suits professional celebrations and warm goodbyes."
  },
  {
    id: "sendoff-heartfelt",
    name: "Heartfelt Goodbye Cake",
    category: "Sendoff Cakes",
    categoryKey: "sendoff",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=900&q=80",
    description: "A soft, personalised cake for emotional goodbyes and heartfelt celebration.",
    // price: "TSh 41,000",
    flavours: ["Strawberry", "Vanilla", "White Velvet"],
    fullDescription: "A warm and sentimental sendoff cake with delicate details designed for meaningful moments."
  },
  {
    id: "kitchen-party-blush",
    name: "Blush Floral Cake",
    category: "Kitchen Party Cakes",
    categoryKey: "kitchen-party",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80",
    description: "Floral details and soft blush colours for a welcoming kitchen party environment.",
    // price: "TSh 46,000",
    flavours: ["Vanilla", "Strawberry", "White Velvet"],
    fullDescription: "A beautifully styled floral cake that feels intimate, elegant, and celebratory for kitchen party occasions."
  },
  {
    id: "kitchen-party-bridal",
    name: "Bridal Shower Cake",
    category: "Kitchen Party Cakes",
    categoryKey: "kitchen-party",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
    description: "Soft pastel textures designed for bridal shower moments and joyful gatherings.",
    // price: "TSh 47,000",
    flavours: ["Vanilla", "White Velvet", "Coconut"],
    fullDescription: "A graceful cake for bridal showers with a soft, airy look and an intimate mood of celebration."
  },
  {
    id: "kitchen-party-coral",
    name: "Coral Celebration Cake",
    category: "Kitchen Party Cakes",
    categoryKey: "kitchen-party",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80",
    description: "Warm coral tones and decorative details to celebrate joyful intimate events.",
    // price: "TSh 44,000",
    flavours: ["Coconut", "Orange", "Vanilla"],
    fullDescription: "A charming celebration cake with warm terracotta colours and a playful, modern finish."
  },
  {
    id: "kitchen-party-cream-lily",
    name: "Cream Lily Cake",
    category: "Kitchen Party Cakes",
    categoryKey: "kitchen-party",
    image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=900&q=80",
    description: "Soft cream tones with floral detail for formal yet inviting kitchen party moments.",
    // price: "TSh 43,000",
    flavours: ["Vanilla", "White Velvet", "Lemon"],
    fullDescription: "A classic style cake with gentle floral accents, ideal for an elegant but relaxed celebration."
  },
  {
    id: "grad-cap-cake",
    name: "Graduation Cap Cake",
    category: "Graduation Cakes",
    categoryKey: "graduation",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=900&q=80",
    description: "A proud cap-and-diploma celebration cake for graduates and their proud families.",
    // price: "TSh 52,000",
    flavours: ["Chocolate", "Vanilla", "Marble"],
    fullDescription: "Decorative, cheerful, and celebratory, this cake is made for proud graduation moments and family gatherings."
  },
  {
    id: "grad-diploma",
    name: "Diploma Delight Cake",
    category: "Graduation Cakes",
    categoryKey: "graduation",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    description: "A polished cake with academic-inspired detail and a celebratory, confident look.",
    // price: "TSh 48,000",
    flavours: ["White Velvet", "Vanilla", "Chocolate"],
    fullDescription: "A smart and stylish cake that captures the warmth and achievement of graduation day."
  },
  {
    id: "grad-royal-blue",
    name: "University Blue Cake",
    category: "Graduation Cakes",
    categoryKey: "graduation",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
    description: "A striking blue cake for university pride, school spirit, and milestone celebrations.",
    // price: "TSh 50,000",
    flavours: ["Vanilla", "Chocolate", "Lemon"],
    fullDescription: "A bold and memorable cake that adds school pride to graduation moments and event tables."
  },
  {
    id: "grad-gold-crest",
    name: "Gold Crest Cake",
    category: "Graduation Cakes",
    categoryKey: "graduation",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    description: "Luxury-inspired style with gold detailing for a proud and polished graduate moment.",
    // price: "TSh 54,000",
    flavours: ["Vanilla", "Marble", "Strawberry"],
    fullDescription: "An elegant cake with luxe touches and a refined finish that feels worthy of a major accomplishment."
  },
  {
    id: "dessert-cheesecake-slice",
    name: "Classic Cheesecake Slice",
    category: "Desserts",
    categoryKey: "desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
    description: "Creamy, rich cheesecake styling for dessert lovers and elegant event tables.",
    // price: "TSh 15,000",
    flavours: ["Vanilla", "Strawberry", "Coconut"],
    fullDescription: "A rich dessert offering with a silky texture and a refined dessert table appeal."
  },
  {
    id: "dessert-brownie-bites",
    name: "Brownie Bites",
    category: "Desserts",
    categoryKey: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    description: "Chunky brownie bites with indulgent chocolate richness and a classic sweet finish.",
    // price: "TSh 12,000",
    flavours: ["Chocolate", "Marble", "Banana"],
    fullDescription: "A decadent dessert platter favourite for gifting, parties, and dessert tables."
  },
  {
    id: "dessert-cup-delight",
    name: "Berry Dessert Cup",
    category: "Desserts",
    categoryKey: "desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    description: "A polished, delicious dessert cup that adds a stylish finish to any event.",
    // price: "TSh 13,000",
    flavours: ["Strawberry", "Vanilla", "Coconut"],
    fullDescription: "A luxurious layered cup dessert combining flavour with a neat presentation for modern dessert tables."
  },
  {
    id: "dessert-mini-treats",
    name: "Mini Dessert Assortment",
    category: "Desserts",
    categoryKey: "desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    description: "A mix of sweet bites for guests who like variety and special little finishes.",
    // price: "TSh 18,000",
    flavours: ["Chocolate", "Lemon", "Strawberry"],
    fullDescription: "A curated dessert assortment for sharing, gifting, or adding a tasteful finish to a celebration."
  },
  {
    id: "gift-heart-cake",
    name: "Heart Gift Cake",
    category: "Gift Cakes",
    categoryKey: "gift-cakes",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80",
    description: "A sweet symbol of love and celebration, ready to give with warmth and charm.",
    // price: "TSh 37,000",
    flavours: ["Strawberry", "White Velvet", "Vanilla"],
    fullDescription: "A thoughtful, romantic cake that feels personal and ready for gifting on special occasions."
  },
  {
    id: "gift-message-cake",
    name: "Personalised Message Cake",
    category: "Gift Cakes",
    categoryKey: "gift-cakes",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=900&q=80",
    description: "A gift-ready cake for heartfelt notes, warm wishes, and sentimental celebrations.",
    // price: "TSh 45,000",
    flavours: ["Vanilla", "Marble", "Strawberry"],
    fullDescription: "Personalised and elegant, this cake adds a meaningful message to your special surprise."
  },
  {
    id: "gift-mini-rose",
    name: "Mini Romantic Cake",
    category: "Gift Cakes",
    categoryKey: "gift-cakes",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1200&q=80",
    description: "Small, charming, and beautifully wrapped for a sweet and thoughtful gift.",
    // price: "TSh 30,000",
    flavours: ["Vanilla", "Strawberry", "Coconut"],
    fullDescription: "A petite gift cake with soft romantic detailing and a polished presentation."
  },
  {
    id: "gift-pastry-box",
    name: "Gift Box Cake Set",
    category: "Gift Cakes",
    categoryKey: "gift-cakes",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    description: "A charming set of sweet indulgences designed to delight and surprise.",
    // price: "TSh 34,000",
    flavours: ["Chocolate", "Vanilla", "Strawberry"],
    fullDescription: "A shareable gifting option with a polished look and a joyful, celebratory feel."
  },
  {
    id: "muffin-chocolate",
    name: "Chocolate Muffins",
    category: "Muffins",
    categoryKey: "muffins",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    description: "Rich and comforting chocolate muffins with a soft, fluffy crumb.",
    // price: "TSh 10,000",
    flavours: ["Chocolate", "Marble", "Vanilla"],
    fullDescription: "A classic bakery-style muffin that feels comforting, rich, and easy to enjoy any day."
  },
  {
    id: "muffin-vanilla",
    name: "Vanilla Muffins",
    category: "Muffins",
    categoryKey: "muffins",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80",
    description: "A classic vanilla muffin with a gentle crumb and a soft bakery finish.",
    // price: "TSh 9,000",
    flavours: ["Vanilla", "Coconut", "Strawberry"],
    fullDescription: "A simple classic muffin with a comforting texture and a warm, familiar flavour."
  },
  {
    id: "muffin-blueberry",
    name: "Blueberry Muffins",
    category: "Muffins",
    categoryKey: "muffins",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
    description: "Soft muffins with fruit-forward flavour and a cheerful bakery feel.",
    // price: "TSh 11,000",
    flavours: ["Vanilla", "Banana", "Strawberry"],
    fullDescription: "Soft, fruity muffins with a crowd-pleasing taste and a gently sweet finish."
  },
  {
    id: "muffin-banana",
    name: "Banana Muffins",
    category: "Muffins",
    categoryKey: "muffins",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=900&q=80",
    description: "Soft banana muffins for a light, comforting, and naturally sweet bite.",
    // price: "TSh 10,000",
    flavours: ["Banana", "Vanilla", "Coconut"],
    fullDescription: "A homely muffin option with a comforting, mellow sweetness that pairs well with tea or brunch."
  }
];

let selectedCategory = CATEGORY_DEFAULT;
let selectedFlavour = "Vanilla";
let selectedFlavorGroup = "classic";
let activeProduct = null;

const categoryGrid = document.getElementById("categoryGrid");
const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");
const categoryIntro = document.getElementById("categoryIntro");
const flavourGroupsElement = document.getElementById("flavourGroups");
const flavourCards = document.getElementById("flavourCards");
const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const showAllBtn = document.getElementById("showAllBtn");
const yearElement = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("primary-nav");

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getSelectedCategoryDetail() {
  return categories.find((category) => category.key === selectedCategory) || null;
}

function renderCategories() {
  categoryGrid.innerHTML = "";

  categories.forEach((category) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `category-card ${selectedCategory === category.key ? "active" : ""}`;
    card.setAttribute("aria-pressed", String(selectedCategory === category.key));

    const image = document.createElement("img");
    image.src = category.image;
    image.alt = `${category.name} cake collection`;
    image.loading = "lazy";
    image.onerror = () => {
      image.onerror = null;
      image.src = createFallbackImage(category.name);
    };

    const body = document.createElement("div");
    body.className = "category-card-body";

    const title = document.createElement("h3");
    title.textContent = category.name;

    const desc = document.createElement("p");
    desc.textContent = category.description;

    body.append(title, desc);
    card.append(image, body);
    card.addEventListener("click", () => setSelectedCategory(category.key));
    categoryGrid.appendChild(card);
  });
}

function renderCategoryIntro() {
  const category = getSelectedCategoryDetail();

  if (!category) {
    selectedCategoryTitle.textContent = "All Cakes";
    categoryIntro.innerHTML = "<p>Explore our signature selection of premium cakes, desserts, and sweet favourites across every celebration.</p>";
    return;
  }

  selectedCategoryTitle.textContent = category.name;
  categoryIntro.innerHTML = `<p>${category.intro}</p>`;
}

function renderFlavours() {
  flavourGroupsElement.innerHTML = "";

  flavorGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `flavour-chip ${selectedFlavorGroup === group.id ? "active" : ""}`;
    button.textContent = `${group.name} (${group.flavors.length})`;
    button.setAttribute("aria-pressed", String(selectedFlavorGroup === group.id));
    button.setAttribute("aria-controls", "flavourCards");
    button.addEventListener("click", () => {
      selectedFlavorGroup = group.id;
      renderFlavours();
    });
    flavourGroupsElement.appendChild(button);
  });

  const selectedGroup = flavorGroups.find((group) => group.id === selectedFlavorGroup);
  flavourCards.replaceChildren();

  if (!selectedGroup) {
    return;
  }

  selectedGroup.flavors.forEach((flavour) => {
    const card = document.createElement("article");
    card.className = `flavour-card ${selectedFlavour === flavour.name ? "selected" : ""}`;

    const image = document.createElement("img");
    image.src = flavour.image;
    image.alt = `${flavour.name} cake flavour`;
    image.loading = "lazy";
    image.onerror = () => {
      image.onerror = null;
      image.src = flavorPhoto("1578985545062-69928b1d9587");
    };

    const body = document.createElement("div");
    body.className = "flavour-card-body";

    const heading = document.createElement("h4");
    heading.textContent = flavour.name;

    const description = document.createElement("p");
    description.textContent = flavour.description;

    const actions = document.createElement("div");
    actions.className = "flavour-card-actions";

    const selectButton = document.createElement("button");
    selectButton.type = "button";
    selectButton.className = "flavour-select-button";
    selectButton.textContent = selectedFlavour === flavour.name ? "Selected" : "Select flavour";
    selectButton.setAttribute("aria-pressed", String(selectedFlavour === flavour.name));
    selectButton.addEventListener("click", () => {
      selectedFlavour = flavour.name;
      renderFlavours();
      if (activeProduct) {
        renderModalContent(activeProduct);
      }
    });

    const orderButton = document.createElement("button");
    orderButton.type = "button";
    orderButton.className = "order-button flavour-order-button";
    orderButton.textContent = "Order Now";
    orderButton.addEventListener("click", () => handleFlavourOrder(flavour, selectedGroup.name));

    actions.append(selectButton, orderButton);
    body.append(heading, description, actions);
    card.append(image, body);
    flavourCards.appendChild(card);
  });
}

function renderProducts() {
  productGrid.innerHTML = "";

  const visibleProducts = selectedCategory === CATEGORY_DEFAULT
    ? products
    : products.filter((product) => product.categoryKey === selectedCategory);

  visibleProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = `${product.name} cake`;
    image.loading = "lazy";
    image.onerror = () => {
      image.onerror = null;
      image.src = createFallbackImage(product.name);
    };

    const body = document.createElement("div");
    body.className = "product-card-body";

    const topRow = document.createElement("div");
    topRow.className = "product-card-top";

    const heading = document.createElement("h3");
    heading.textContent = product.name;

    const priceEl = document.createElement("span");
    priceEl.className = "product-price";
    priceEl.textContent = product.price;

    const categoryPill = document.createElement("span");
    categoryPill.className = "product-category";
    categoryPill.textContent = product.category;

    const desc = document.createElement("p");
    desc.textContent = product.description;

    const actions = document.createElement("div");
    actions.className = "product-actions";

    const detailsButton = document.createElement("button");
    detailsButton.type = "button";
    detailsButton.className = "link-button";
    detailsButton.textContent = "View details";
    detailsButton.addEventListener("click", () => openProductModal(product.id));

    const orderButton = document.createElement("button");
    orderButton.type = "button";
    orderButton.className = "order-button";
    orderButton.textContent = "Order Now";
    orderButton.addEventListener("click", () => handleProductOrder(product));

    topRow.append(heading, priceEl);
    actions.append(detailsButton, orderButton);
    body.append(topRow, categoryPill, desc, actions);
    card.append(image, body);
    productGrid.appendChild(card);
  });
}

function setSelectedCategory(categoryKey) {
  selectedCategory = categoryKey;
  renderCategories();
  renderCategoryIntro();
  renderProducts();
}

function createFallbackImage(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#f5ebdd"/>
      <circle cx="640" cy="120" r="70" fill="#e8b8c4" opacity="0.7"/>
      <circle cx="140" cy="120" r="90" fill="#c6a46a" opacity="0.2"/>
      <rect x="220" y="240" width="360" height="170" rx="32" fill="#77384e"/>
      <rect x="255" y="205" width="290" height="70" rx="26" fill="#b96f82"/>
      <rect x="290" y="150" width="220" height="82" rx="25" fill="#fff9f3"/>
      <text x="400" y="305" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" font-weight="700" fill="#fff9f3">${escapeHtml(label)}</text>
      <text x="400" y="365" text-anchor="middle" font-size="26" font-family="Arial, sans-serif" fill="#f5ebdd">Dallifa Luxe</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  activeProduct = product;
  renderModalContent(product);
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeButton = productModal.querySelector(".modal-close");
  closeButton.focus();
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeProduct = null;
}

function renderModalContent(product) {
  const modalFlavours = [...new Set(classicFlavours.map((flavour) => flavour.name).filter((name) => (product.flavours || []).includes(name) || true))];

  const productFlavourOptions = product.flavours && product.flavours.length
    ? product.flavours
    : classicFlavours.map((flavour) => flavour.name);

  const flavourButtons = productFlavourOptions
    .map((flavourName) => {
      const isActive = selectedFlavour === flavourName;
      return `<button type="button" class="modal-flavour ${isActive ? "active" : ""}" data-flavour="${flavourName}" aria-pressed="${isActive}">${flavourName}</button>`;
    })
    .join("");

  const modalHtml = `
    <img
      class="modal-image"
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      onerror="this.onerror=null;this.src='${createFallbackImage(product.name)}';"
    />
    <div class="modal-head">
      <div>
        <span class="modal-category">${product.category}</span>
        <h3 id="modalTitle">${product.name}</h3>
      </div>
      <div class="modal-meta">
        <span class="modal-price">${product.price}</span>
      </div>
    </div>
    <p class="modal-copy">${product.fullDescription}</p>
    <div class="modal-flavour-wrap">
      <strong>Available flavours</strong>
      <div class="modal-flavours">${flavourButtons}</div>
    </div>
    <div class="modal-actions">
      <button type="button" class="button button-primary" data-order-product="${product.id}">Order Now on WhatsApp</button>
      <button type="button" class="button button-secondary" data-close-modal="true">Close</button>
    </div>
    <p class="modal-note">Bei zinaweza kutofautiana kulingana na ukubwa, flavour na mapambo. Tafadhali thibitisha bei kupitia WhatsApp.</p>
  `;

  modalContent.innerHTML = modalHtml;

  modalContent.querySelectorAll(".modal-flavour").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFlavour = button.dataset.flavour;
      renderFlavours();
      renderModalContent(product);
    });
  });

  modalContent.querySelector('[data-order-product]').addEventListener("click", () => {
    handleProductOrder(product);
  });

  modalContent.querySelector('[data-close-modal="true"]').addEventListener("click", closeProductModal);
}

function handleProductOrder(product) {
  const flavourText = selectedFlavour ? `Flavour: ${selectedFlavour}` : "Flavour: Not selected yet";
  const message = `Habari Dallifa Luxe, ningependa kuagiza keki hii:\n\nJina la keki: ${product.name}\nCategory: ${product.category}\n${flavourText}\nBei iliyoonyeshwa: ${product.price}\n\nNaomba kuthibitishiwa bei halisi, ukubwa unaopatikana, na maelezo ya oda yangu. Asante.`;
  const orderUrl = buildWhatsAppLink(message);
  window.open(orderUrl, "_blank", "noopener,noreferrer");
  if (productModal.classList.contains("open")) {
    closeProductModal();
  }
}

function handleFlavourOrder(flavour, groupName) {
  selectedFlavour = flavour.name;
  const message = `Habari Dallifa Luxe, ningependa kuagiza keki ya flavour hii:\n\nFlavour: ${flavour.name}\nFlavour group: ${groupName}\n\nNaomba kuthibitishiwa bei halisi, ukubwa unaopatikana, na maelezo ya oda yangu. Asante.`;
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  renderFlavours();
}

function attachFaqEvents() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("open", !expanded);
    });
  });
}

function attachModalEvents() {
  productModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal='true']") || event.target === productModal) {
      closeProductModal();
    }
  });

  productModal.querySelector(".modal-close").addEventListener("click", closeProductModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productModal.classList.contains("open")) {
      closeProductModal();
    }
  });
}

function attachNavigationEvents() {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function initRevealObserver() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll);
}

function updateYear() {
  yearElement.textContent = new Date().getFullYear();
}

showAllBtn.addEventListener("click", () => {
  setSelectedCategory(CATEGORY_DEFAULT);
});

attachNavigationEvents();
attachFaqEvents();
attachModalEvents();
initRevealObserver();
initHeaderScroll();
updateYear();
renderCategories();
renderCategoryIntro();
renderFlavours();
renderProducts();
