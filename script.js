const WHATSAPP_NUMBER = "255767066380";
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
    image: "https://i.pinimg.com/736x/2b/f3/70/2bf370d7578e941cf1ef3d60e46aad37.jpg",
    description: "Elegant sendoff cakes prepared to honour transitions and new adventures."
  },
  {
    key: "kitchen-party",
    name: "Kitchen Party Cakes",
    intro: "Festive cakes that feel celebratory, welcoming, and full of personality.",
    image: "https://i.pinimg.com/1200x/2a/66/a1/2a66a10fceba6f296a843f925f4689d8.jpg",
    description: "Decorative cakes for kitchen parties, bridal showers, and joyful gatherings."
  },
  {
    key: "graduation",
    name: "Graduation Cakes",
    intro: "Celebrate milestones with confident, uplifting cake designs that feel proud and polished.",
    image: "https://i.pinimg.com/1200x/b5/35/2a/b5352a6fd1e242d946864347b3982937.jpg",
    description: "Bold, elegant cakes for academic achievements and proud accomplishments."
  },
  {
    key: "desserts",
    name: "Desserts",
    intro: "Sweet indulgences and bite-sized treats for a delightful finishing touch.",
    image: "https://i.pinimg.com/736x/f0/85/b5/f085b5f1cc2481e1862f7bb43b3c5ad0.jpg",
    description: "Mini desserts, cheesecakes, brownies, and crowd-pleasing sweet bites."
  },
  {
    key: "gift-cakes",
    name: "Gift Cakes",
    intro: "Perfect for thoughtful surprises, romantic gestures, and ready-to-gift moments.",
    image: "https://i.pinimg.com/736x/e0/a3/aa/e0a3aaf56cc0f85a9ff9ef82b7f6db66.jpg",
    description: "Gift-ready cakes with soft finishing touches and a warm personal feel."
  },
  {
    key: "muffins",
    name: "Muffins",
    intro: "Simple favourites with comforting flavours and a lovely everyday charm.",
    image: "https://i.pinimg.com/1200x/06/11/9d/06119d9c096f0ff6ff8305998695fc50.jpg",
    description: "Fresh, flavourful muffins for brunches, gifting, and quick sweet treats."
  },

  {
    key: "Kids cartoon cake",
    name: "Kids cartoon cake",
    intro: "Simple favourites with comforting flavours and a lovely everyday charm.",
    image: "https://i.pinimg.com/736x/2b/d7/c7/2bd7c7e258f978f25df05936367abddc.jpg",
    description: "Fresh, flavourful muffins for brunches, gifting, and quick sweet treats."
  }
];

const flavorPhoto = (url) => url
  // `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;

const flavorGroups = [
  {
    id: "classic",
    name: "Classic Cake Flavors",
    flavors: [
      { name: "Vanilla", image: flavorPhoto("https://i.pinimg.com/1200x/89/bb/de/89bbde5e5a80f0ca2856f9699fb0d80a.jpg"), description: "A timeless, smooth, and delicate classic." },
      { name: "Chocolate", image: flavorPhoto("https://i.pinimg.com/1200x/ea/d3/c0/ead3c0c9c21016659bc8729f22f8e0a1.jpg"), description: "Rich chocolate flavour for chocolate lovers." },
      { name: "Marble", image: flavorPhoto("https://i.pinimg.com/1200x/a5/5b/10/a55b109cbd1df70e4b333eb784cf2ee6.jpg"), description: "A beautiful blend of vanilla and chocolate." },
      { name: "Red Velvet", image: flavorPhoto("https://i.pinimg.com/736x/9d/d4/14/9dd414f05b9d0d519a64717474524512.jpg"), description: "A soft cake with a distinctive red colour and rich flavour." },
      { name: "White Velvet", image: flavorPhoto("https://i.pinimg.com/1200x/0d/63/a8/0d63a82da83f64befdbd27f9d6672080.jpg"), description: "A delicate, elegant cake with a soft, smooth taste." },
      { name: "Lemon", image: flavorPhoto("https://i.pinimg.com/736x/80/0c/82/800c822747b1b1a5199430e31ad6d731.jpg"), description: "A refreshing citrus-inspired flavour." },
      { name: "Orange", image: flavorPhoto("https://i.pinimg.com/736x/7b/af/2d/7baf2d92a57afd4a9bc0654f9a713039.jpg"), description: "A bright, fragrant citrus flavour." },
      { name: "Strawberry", image: flavorPhoto("https://i.pinimg.com/1200x/4f/63/86/4f638650de3b3d8e25a97e30ea61c744.jpg"), description: "A sweet, fruity flavour with a lovely strawberry character." },
      { name: "Banana", image: flavorPhoto("https://i.pinimg.com/1200x/ce/5e/2b/ce5e2b379dd9ddfdbfe172ad9473536c.jpg"), description: "A soft cake with a comforting banana flavour." },
      { name: "Coconut", image: flavorPhoto("https://i.pinimg.com/736x/97/c1/25/97c125f5b6b485bd7a694dc6f33a7b1b.jpg"), description: "A tropical flavour with a delicate coconut taste." }
    ]
  },
  {
    id: "chocolate-lovers",
    name: "Chocolate Lovers",
    flavors: [
      { name: "Chocolate Fudge", image: flavorPhoto("https://i.pinimg.com/236x/7f/27/d9/7f27d9a39e4bc16a97be0ff4a2a2a28f.jpg"), description: "Deep chocolate cake with a smooth, fudgy finish." },
      { name: "Chocolate Mocha", image: flavorPhoto("https://i.pinimg.com/1200x/e7/34/41/e7344102c300629561c629bf9a0bb607.jpg"), description: "Chocolate with a mellow coffee-inspired note." },
      { name: "Chocolate Caramel", image: flavorPhoto("https://i.pinimg.com/236x/38/97/8f/38978f62b07b7cbb72a7320358b724f4.jpg"), description: "Rich chocolate paired with buttery caramel sweetness." },
      { name: "Chocolate Oreo", image: flavorPhoto("https://i.pinimg.com/1200x/1e/a7/a2/1ea7a22022f3a2959d9034f612e5d9fa.jpg"), description: "Chocolate cake with a cookies-and-cream inspired finish." },
      { name: "Chocolate Hazelnut", image: flavorPhoto("https://i.pinimg.com/1200x/a0/c3/99/a0c399dd27104bcf57166b9a6a443a32.jpg"), description: "A smooth chocolate and toasted-nut inspired pairing." },
      { name: "Chocolate Mint", image: flavorPhoto("https://i.pinimg.com/736x/bc/92/f7/bc92f771c44143e4ca83d5cd496a4f51.jpg"), description: "Chocolate with a cool, refreshing mint-inspired finish." },
      { name: "Double Chocolate", image: flavorPhoto("https://i.pinimg.com/736x/6d/80/72/6d8072dd730798a96e7c283a2f978557.jpg"), description: "A generous, extra-rich chocolate experience." },
      { name: "Chocolate Peanut Butter", image: flavorPhoto("https://i.pinimg.com/736x/6f/b8/c3/6fb8c3e1acc53b83d4f2a627e171adaf.jpg"), description: "Chocolate paired with a creamy, nutty flavour." }
    ]
  },
  {
    id: "fruity",
    name: "Fruity Cake Flavors",
    flavors: [
      { name: "Strawberry Cream", image: flavorPhoto("https://i.pinimg.com/736x/60/29/9b/60299be5c5d4f69916f49fdfa89de1c7.jpg"), description: "Sweet strawberry flavour with a soft, creamy character." },
      { name: "Blueberry", image: flavorPhoto("https://i.pinimg.com/1200x/f6/95/7c/f6957c571d4eaaa29dfd54a1644c4788.jpg"), description: "A gentle cake flavour inspired by fresh blueberries." },
      { name: "Raspberry", image: flavorPhoto("https://i.pinimg.com/736x/39/3d/41/393d4142e2916b6e2da739066e64f59f.jpg"), description: "A bright berry flavour with a pleasantly tangy edge." },
      { name: "Pineapple cake", image: flavorPhoto("https://i.pinimg.com/236x/60/66/1c/60661cc8d2c55832fd9c22ef9a1b2d34.jpg"), description: "A sunny tropical flavour with a sweet, bright finish." },
      { name: "Mango", image: flavorPhoto("https://i.pinimg.com/1200x/96/f7/f5/96f7f5258a0b5944c280d2b6a9a48a23.jpg"), description: "A smooth, tropical mango-inspired cake flavour." },
      { name: "Passion Fruit", image: flavorPhoto("https://i.pinimg.com/736x/38/6d/60/386d604c0fd55ba2bdbd52efdbcd908e.jpg"), description: "A lively tropical flavour with a fragrant tang." },
      { name: "Lemon Blueberry", image: flavorPhoto("https://i.pinimg.com/1200x/09/52/be/0952be1bd40d15ea57a58d1fccccc2fb.jpg"), description: "Fresh citrus and berry notes in one bright combination." },
      { name: "Banana Caramel", image: flavorPhoto("https://i.pinimg.com/736x/46/b9/76/46b9760109d158980074c618e5210cae.jpg"), description: "Comforting banana flavour with a caramel-inspired finish." }
    ]
  },
  {
    id: "premium",
    name: "Premium & Luxury Flavors",
    flavors: [
      { name: "Black Forest", image: flavorPhoto("https://i.pinimg.com/1200x/6f/97/ba/6f97babfe635d4a4db90cf89ff22f3fa.jpg"), description: "A rich chocolate-and-cherry inspired classic." },
      { name: "White Forest", image: flavorPhoto("https://i.pinimg.com/1200x/77/20/82/772082e37096730f5c3a6f50ecc97bce.jpg"), description: "A delicate white chocolate and cherry-inspired pairing." },
      { name: "Red Velvet Cream Cheese", image: flavorPhoto("https://i.pinimg.com/1200x/97/fa/7e/97fa7e796acf53171746314b4542f3f6.jpg"), description: "Red velvet with a smooth cream-cheese inspired flavour." },
      { name: "Cookies and Cream (Oreo)", image: flavorPhoto("https://i.pinimg.com/1200x/6d/d3/f4/6dd3f426534070096400f54cd7a8f731.jpg"), description: "Creamy vanilla cake with a chocolate-cookie inspired taste." },
      { name: "Salted Caramel", image: flavorPhoto("https://i.pinimg.com/1200x/35/81/25/3581251c0395323ce12975b1f5c92e20.jpg"), description: "Sweet caramel balanced with a delicate touch of salt." },
      { name: "Vanilla Bean", image: flavorPhoto("https://i.pinimg.com/1200x/de/7c/c2/de7cc26014074224210924ddc1dacacc.jpg"), description: "An elegant vanilla flavour with a fragrant, rounded finish." },
      { name: "Chocolate Truffle", image: flavorPhoto("https://i.pinimg.com/236x/eb/39/22/eb3922cd05f12e82ae23bbbc79cf29f1.jpg"), description: "A decadent, smooth chocolate-forward cake flavour." },
      { name: "Ferrero Rocher", image: flavorPhoto("https://i.pinimg.com/236x/82/e8/92/82e892df22b1faff6fafd69697fc8fa9.jpg"), description: "A luxurious chocolate and hazelnut-inspired combination." },
      { name: "Tiramisu", image: flavorPhoto("https://i.pinimg.com/1200x/d1/47/ef/d147ef5596818d35787959b86732253f.jpg"), description: "A coffee-and-cream inspired flavour with a gentle cocoa finish." },
      { name: "Coffee Walnut", image: flavorPhoto("https://i.pinimg.com/736x/f1/83/97/f18397163a46bcd9ab2e5e31433c7d68.jpg"), description: "A mellow coffee flavour with a nutty walnut-inspired note." },
      { name: "Pistachio", image: flavorPhoto("https://i.pinimg.com/736x/d4/4b/98/d44b98b9f66cc0b74b11915c769e53b4.jpg"), description: "A delicate, nutty flavour inspired by pistachio." },
      { name: "Lotus Biscoff", image: flavorPhoto("https://i.pinimg.com/736x/6e/0b/37/6e0b373eb7e7088d000fa1ddbc00cce2.jpg"), description: "A warmly spiced caramel-cookie inspired cake flavour." },
      { name: "Almond", image: flavorPhoto("https://i.pinimg.com/1200x/f0/47/e8/f047e86f68b1df9a30c930c4e7ad66a1.jpg"), description: "A soft cake flavour with a gentle almond-inspired aroma." },
      { name: "White Chocolate Raspberry", image: flavorPhoto("https://i.pinimg.com/1200x/71/cd/73/71cd739e2fbb13fab986df291461b180.jpg"), description: "Sweet white chocolate paired with bright raspberry notes." }
    ]
  },
  {
    id: "combinations",
    name: "Special Cake Combinations",
    flavors: [
      { name: "Chocolate and Vanilla", image: flavorPhoto("https://i.pinimg.com/736x/47/2b/33/472b3357167f394565bbbf3b7836b8e0.jpg"), description: "A familiar pairing of rich chocolate and smooth vanilla." },
      { name: "Chocolate and Strawberry", image: flavorPhoto("https://i.pinimg.com/736x/39/70/80/397080a71869754e4923165f96aec93f.jpg"), description: "Chocolate cake with a sweet, fruity strawberry note." },
      { name: "Vanilla and Caramel", image: flavorPhoto("https://i.pinimg.com/736x/1c/a0/f9/1ca0f9329dd2e9ceca16e1d1e397d485.jpg"), description: "Classic vanilla with a warm caramel-inspired finish." },
      { name: "Red Velvet and Chocolate", image: flavorPhoto("https://i.pinimg.com/1200x/86/bd/77/86bd772a490e3b51fa66ec2522b97fb7.jpg"), description: "A rich blend of red velvet character and chocolate flavour." },
      { name: "Lemon and Raspberry", image: flavorPhoto("https://i.pinimg.com/1200x/89/2e/4e/892e4eea97e9c1c339ad5fdb3358ef6b.jpg"), description: "Bright lemon paired with a lively raspberry note." },
      { name: "Chocolate and Oreo", image: flavorPhoto("https://i.pinimg.com/736x/d2/4b/f5/d24bf5b934e65b709d6fb7b12cf6760e.jpg"), description: "A chocolate-forward pairing with cookie-inspired richness." },
      { name: "Vanilla and Passion Fruit", image: flavorPhoto("https://i.pinimg.com/736x/e3/82/27/e3822772e829e27b2fef38c04af0590a.jpg"), description: "Smooth vanilla balanced with fragrant tropical passion fruit." },
      { name: "Chocolate and Salted Caramel", image: flavorPhoto("https://i.pinimg.com/736x/7f/e5/18/7fe518ae464ed632736904f233bc3370.jpg"), description: "Deep chocolate with a sweet-and-salty caramel finish." },
      { name: "Strawberry and White Chocolate", image: flavorPhoto("https://i.pinimg.com/736x/cb/47/1f/cb471f42cde3f3bd840b4215d3db1769.jpg"), description: "Sweet strawberry paired with delicate white chocolate." },
      { name: "Marble with Chocolate Ganache", image: flavorPhoto("https://i.pinimg.com/736x/33/d1/51/33d1510225ed39a0e494e20bfce12a85.jpg"), description: "Vanilla-and-chocolate marble cake with a ganache-inspired finish." }
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
    image: "https://i.pinimg.com/1200x/fa/15/5c/fa155ca3e251211fe8f4c711ccb8e68d.jpg",
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
    image: "https://i.pinimg.com/736x/95/1b/d7/951bd70772cd97196a73a57a14908788.jpg",
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
    image: "https://i.pinimg.com/736x/bd/48/73/bd4873d03296b7fa34d5e2c5e9b33326.jpg",
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
    image: "https://i.pinimg.com/1200x/b3/28/e7/b328e7db3331038ad078a01d7762d35a.jpg",
    description: "Soft blush tones and romantic decoration for cosy, personal birthday moments.",
    // price: "TSh 36,000",
    flavours: ["Vanilla", "White Velvet", "Strawberry"],
    fullDescription: "A sweet and intimate birthday cake with a soft floral feel, perfect for close-knit celebrations."
  },
  // {
  //   id: "wedding-ivory-tier",
  //   name: "Ivory Tier Cake",
  //   category: "Wedding Cakes",
  //   categoryKey: "wedding",
  //   image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  //   description: "Timeless ivory tiers with romantic floral styling for a classic wedding day.",
  //   // price: "TSh 120,000",
  //   flavours: ["Vanilla", "White Velvet", "Coconut"],
  //   fullDescription: "An elegant wedding cake with soft layers and refined floral details for a polished celebration."
  // },
  {
    id: "wedding-blush-romance",
    name: "Blush Romance Cake",
    category: "Wedding Cakes",
    categoryKey: "wedding",
    image: "https://i.pinimg.com/1200x/fb/1a/e9/fb1ae9931907512f3cf82477abe4fd39.jpg",
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
    image: "https://i.pinimg.com/1200x/de/75/e9/de75e9e84756826bc6d5607ec0c61a57.jpg",
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
    image: "https://i.pinimg.com/1200x/c3/78/c0/c378c07a63506a097a7a7463196b8255.jpg",
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
    image: "https://i.pinimg.com/1200x/65/48/b2/6548b2b24e5bb53abf099b7520371192.jpg",
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
    image: "https://i.pinimg.com/1200x/5b/a4/67/5ba467886c00878db0780f78f1896050.jpg",
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
    image: "https://i.pinimg.com/736x/56/ab/0f/56ab0f411d272560a1a066f88e33c8a0.jpg",
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
    image: "https://i.pinimg.com/1200x/59/a2/7c/59a27c9e05ec36128c698b6e6bbd8620.jpg",
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
    image: "https://i.pinimg.com/1200x/3c/d8/cf/3cd8cfccebe04ca34312b902333d7d99.jpg",
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
    image: "https://i.pinimg.com/1200x/5e/b4/5e/5eb45eefa9c6b1ae04477eb1a9c08c3e.jpg",
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
    image: "https://i.pinimg.com/1200x/1a/bd/86/1abd86a7b28837b5e73bca48ad2b4143.jpg",
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
    image: "https://i.pinimg.com/1200x/96/25/bb/9625bb2576e32e314d3ee60dd752206c.jpg",
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
    image: "https://i.pinimg.com/1200x/06/d4/59/06d459e414d242ef6697df3141c9605e.jpg",
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
    image: "https://i.pinimg.com/1200x/8f/11/41/8f114133f0d3c09fdfd9827c7d779765.jpg",
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
    image: "https://i.pinimg.com/1200x/de/c1/40/dec140f3b973070e3e4d8c501a6562ce.jpg",
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
    image: "https://i.pinimg.com/736x/44/88/1e/44881e3a596d22df4f75b6e846ae8093.jpg",
    description: "Luxury-inspired style with gold detailing for a proud and polished graduate moment.",
    // price: "TSh 54,000",
    flavours: ["Vanilla", "Marble", "Strawberry"],
    fullDescription: "An elegant cake with luxe touches and a refined finish that feels worthy of a major accomplishment."
  },
  
  {
    id: "dessert-brownie-bites",
    name: "Brownie Bites",
    category: "Desserts",
    categoryKey: "desserts",
    image: "https://i.pinimg.com/736x/da/df/c4/dadfc451f6cc0f59ce2a270d0166505d.jpg",
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
    image: "https://i.pinimg.com/736x/03/b6/55/03b655ac2ac62ec02c8fd615114f60d0.jpg",
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
    image: "https://i.pinimg.com/1200x/f3/c0/5e/f3c05e22208e0246cdbee04bf4ec6ee1.jpg",
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
    image: "https://i.pinimg.com/736x/3f/de/db/3fdedb611918443d4707bf46ece473c4.jpg",
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
    image: "https://i.pinimg.com/1200x/36/79/c2/3679c27ddebe949dc573e75d0b5f4aca.jpg",
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
    image: "https://i.pinimg.com/1200x/73/64/59/7364593c6ed53e3ba4e230d9759122a1.jpg",
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
    image: "https://i.pinimg.com/736x/41/ef/36/41ef36c8533391b8ceb708e6393ab12a.jpg",
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
    image: "https://i.pinimg.com/736x/d2/9d/4c/d29d4cae5e92173d81ae32a8e6bf8a3d.jpg",
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
    image: "https://i.pinimg.com/736x/70/6b/2a/706b2ac8adecef9dbd9027c98c3c43e3.jpg",
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
    image: "https://i.pinimg.com/1200x/c2/e8/db/c2e8dbb9f292b726c449b3b71e6027ee.jpg",
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
    image: "https://i.pinimg.com/736x/13/f0/c2/13f0c2ae7e765b08afe2713d69a0481a.jpg",
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
