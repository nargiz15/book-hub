const initialBooks = [
    {
        id: 1,
        title: 'Əli və Nino',
        author: 'Qurban Səid',
        img: 'https://static.insales-cdn.com/images/products/1/5847/626300631/Ali_ve_Nino_kapak_2022.png',
        price: 10,
        category: 'Roman',
        stock: 10,
        description: 'Azərbaycan ədəbiyyatının ən məşhur əsərlərindən biri',
        isFavorite: false
    },
    {
        id: 2,
        img: 'https://www.teaspress.az/storage/1983/conversions/kitabi-dede-qorqud-ve-qeyri-selis-mentiq-front-book.png',
        title: 'Dədə Qorqud',
        author: 'Xalq dastanı',
        price: 8,
        category: 'Dastan',
        stock: 15,
        description: 'Oğuz türklərinin qəhrəmanlıq dastanı',
        isFavorite: false
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow4Y3yprZRCs9o53PnlWGjGK94bMHUDfEZw&s',
        title: 'Riyaziyyat',
        author: 'Cahangir Həbiboğlu',
        price: 7,
        category: 'Dərslik',
        stock: 20,
        description: 'Orta məktəb şagirdləri üçün riyaziyyat dərsliyi',
        isFavorite: false
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbtloDW6LOfTSFlufL9ugpzAen6zDkRcWuA&s',
        title: 'Python',
        author: 'Əli Rzayev',
        price: 15,
        category: 'IT',
        stock: 8,
        description: 'Başlanğıc səviyyə proqramçılar üçün',
        isFavorite: false
    },
    {
        id: 5,
        img: 'https://imgv2-2-f.scribdassets.com/img/document/675084369/original/e6cd55b70a/1730563471?v=1',
        title: 'İtmiş Mədəniyyət',
        author: 'Fuad Qasımzadə',
        price: 5,
        category: 'Tarix',
        stock: 12,
        description: 'Qədim Azərbaycan mədəniyyəti haqqında',
        isFavorite: false
    },
    {
        id: 6,
        title: 'İncəsənət Tarixi',
        author: 'Rasim Əfəndi',
        img: 'https://lib.az/users/1/upload/images/inc.jpg',
        price: 8,
        category: 'Sənət',
        stock: 7,
        description: 'Azərbaycan incəsənətinin təkamül tarixi',
        isFavorite: false
    },
    {
        id: 7,
        title: 'Xəmsə',
        author: 'Nizami Gəncəvi',
        img: 'https://www.teaspress.az/storage/2307/conversions/xemse-front-book.jpg',
        price: 10,
        category: 'Klassik',
        stock: 5,
        description: 'Nizami Gəncəvinin beş məşhur poeması',
        isFavorite: false
    },
    {
        id: 8,
        title: 'Kimya',
        author: 'Validə Əliyeva',
        img: 'https://tap.azstatic.com/uploads/full/2024%2F07%2F22%2F13%2F00%2F06%2Ffbff4bd3-5aa7-4153-bf22-8019ac654869%2F73879_Llsf7HE7T9ZVmMOurKtMGQ.jpg',
        price: 12,
        category: 'Dərslik',
        stock: 15,
        description: 'Orta məktəb şagirdləri üçün kimya dərsliyi',
        isFavorite: false
    },
    {
        id: 9,
        title: 'Proqramlaşdırma',
        author: 'Rəşad Məmmədov',
        img: 'https://php.kitab.ilkaddimlar.com/img/photo/book_3.png',
        price: 14,
        category: 'IT',
        stock: 10,
        description: 'HTML, CSS və JavaScript əsasları',
        isFavorite: false
    },
    {
        id: 10,
        title: 'Azərbaycan Tarixi',
        author: 'Ziya Bünyadov',
        img: 'https://lib.az/users/1/upload/images/mehman.jpg',
        price: 11,
        category: 'Tarix',
        stock: 18,
        description: 'Qədim dövrlərdən müasirliyə qədər',
        isFavorite: false
    },
    {
        id: 11,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        img: 'https://m.media-amazon.com/images/I/7185IMvz88L._AC_UF894,1000_QL80_.jpg',
        price: 18,
        category: 'IT',
        stock: 20,
        description: 'JavaScript dilinin əsasları və ən yaxşı tətbiqləri haqqında ətraflı təlimat.',
        isFavorite: false
    },
    {
        id: 12,
        title: 'C++ Programming Language',
        author: 'Bjarne Stroustrup',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347400993i/112251.jpg',
        price: 25,
        category: 'IT',
        stock: 15,
        description: 'C++ dilini dərindən öyrənmək və effektiv istifadə etmək üçün mükəmməl resurs.',
        isFavorite: false
    },
    {
        id: 13,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        img: 'https://m.media-amazon.com/images/I/51E2055ZGUL.jpg',
        price: 30,
        category: 'IT',
        stock: 18,
        description: 'Proqram kodunun təmiz, oxunaqlı və səmərəli yazılması üçün təlimatlar.',
        isFavorite: false
    },
    {
        id: 14,
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
        img: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF894,1000_QL80_.jpg',
        price: 40,
        category: 'IT',
        stock: 8,
        description: 'Alqoritmaların təməl prinsipləri və tətbiqləri haqqında ətraflı təlimat.',
        isFavorite: false
    },
    {
        id: 15,
        title: 'Learning React',
        author: 'Alex Banks & Eve Porcello',
        img: 'https://m.media-amazon.com/images/I/91uFdkCJmAL._AC_UF1000,1000_QL80_.jpg',
        price: 22,
        category: 'IT',
        stock: 12,
        description: 'React.js ilə müasir veb tətbiqləri yaratmaq üçün başlanğıc kitabı.',
        isFavorite: false
    },
    {
        id: 16,
        title: 'Vue.js Up and Running',
        author: 'Callum Macrae',
        img: 'https://m.media-amazon.com/images/I/91leSpWmFVL.jpg',
        price: 18,
        category: 'IT',
        stock: 10,
        description: 'Vue.js ilə modern veb tətbiqləri hazırlamaq üçün təlimat.',
        isFavorite: false
    },
    {
        id: 17,
        title: 'Node.js: The Right Way',
        author: 'Jim R. Wilson',
        img: 'https://m.media-amazon.com/images/I/817QukxKtSL._AC_UF1000,1000_QL80_.jpg',
        price: 1,
        category: 'IT',
        stock: 14,
        description: 'Node.js ilə server tərəfi tətbiqlərini inkişaf etdirmək üçün mükəmməl bir resurs.',
        isFavorite: false
    },
    {
        id: 18,
        title: 'Machine Learning Yearning',
        author: 'Andrew Ng',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPQE4Fasfkbp_u00xeNjwEGVkM5pXbAC5-w&s',
        price: 27,
        category: 'IT',
        stock: 9,
        description: 'Maşın öyrənməsi metodları və tətbiqləri üzrə mükəmməl bir kitab.',
        isFavorite: false
    },
    {
        id: 19,
        title: 'Data Science from Scratch',
        author: 'Joel Grus',
        img: 'https://m.media-amazon.com/images/I/812I0mhF0DL._AC_UF350,350_QL50_.jpg',
        price: 28,
        category: 'IT',
        stock: 11,
        description: 'Data science-ə giriş və Python ilə verilənlər üzərində iş prinsipləri.',
        isFavorite: false
    },
    {
        id: 20,
        title: 'Deep Learning with Python',
        author: 'François Chollet',
        img: 'https://m.media-amazon.com/images/I/61rjPAVepOL._AC_UF1000,1000_QL80_.jpg',
        price: 35,
        category: 'IT',
        stock: 5,
        description: 'Süni intellekt və dərin öyrənmə ilə bağlı ən yaxşı təlimatlar.',
        isFavorite: false
    }
];

export default initialBooks;