const cars = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    price: '₹7.5 Lakh',
    range: '20 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/SUZUKI BALENO.jpeg',
    review: 'A reliable hatchback with great fuel efficiency and modern safety features.',
    score: 4.5,
  },
  {
    id: 2,
    brand: 'Maruti Suzuki',
    model: 'Swift',
    price: '₹6.0 Lakh',
    range: '21 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/SUZUKI SWIFT.jpeg',
    review: 'Popular hatchback with a sporty drive and excellent resale value.',
    score: 4.4,
  },
  {
    id: 3,
    brand: 'Maruti Suzuki',
    model: 'Brezza',
    price: '₹8.2 Lakh',
    range: '18 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'assets/cars/SUZUKI BREZZA.jpeg',
    review: 'Compact SUV with strong fuel efficiency, comfort and value.',
    score: 4.5,
  },
  {
    id: 4,
    brand: 'Tata',
    model: 'Nexon',
    price: '₹8.7 Lakh',
    range: '18 kmpl',
    engine: '1.2L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/TATA NEXON.jpeg',
    review: 'Premium SUV feel, strong build quality and excellent safety ratings.',
    score: 4.6,
  },
  {
    id: 5,
    brand: 'Tata',
    model: 'Harrier',
    price: '₹16.5 Lakh',
    range: '16 kmpl',
    engine: '2.0L Diesel',
    seating: '5 seats',
    image: 'assets/cars/TATA HARRIER.jpeg',
    review: 'Robust SUV with a premium cabin and refined ride comfort.',
    score: 4.5,
  },
  {
    id: 6,
    brand: 'Tata',
    model: 'Punch',
    price: '₹7.1 Lakh',
    range: '18 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/TATA PUNCH.jpeg',
    review: 'Compact SUV with bold styling and agile handling for cities.',
    score: 4.3,
  },
  {
    id: 7,
    brand: 'Mahindra',
    model: 'Thar',
    price: '₹13.5 Lakh',
    range: '15 kmpl',
    engine: '2.0L Petrol',
    seating: '4 seats',
    image: 'assets/cars/MAHINDRA THAR.jpeg',
    review: 'Iconic off-roader with rugged appeal and modern comfort features.',
    score: 4.7,
  },
  {
    id: 8,
    brand: 'Mahindra',
    model: 'XUV700',
    price: '₹17.9 Lakh',
    range: '14 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/MAHINDRA XUV700.jpeg',
    review: 'Feature-loaded SUV with strong performance and spacious cabin.',
    score: 4.6,
  },
  {
    id: 9,
    brand: 'Mahindra',
    model: 'Scorpio-N',
    price: '₹15.4 Lakh',
    range: '13 kmpl',
    engine: '2.2L Diesel',
    seating: '7 seats',
    image: 'assets/cars/MAHINDRA SCORPIO N.jpeg',
    review: 'Popular large SUV with rugged capability and modern tech features.',
    score: 4.4,
  },
  {
    id: 10,
    brand: 'Mahindra',
    model: 'BE.06',
    price: '₹16.9 Lakh',
    range: '370 km',
    engine: 'Electric Motor',
    seating: '5 seats',
    image: 'assets/cars/MAHINDRA BE 6E.jpeg',
    review: 'Electric SUV with modern design, strong range, and smart tech for premium urban driving.',
    score: 4.4,
  },
  {
    id: 11,
    brand: 'Mahindra',
    model: 'XUV.9E',
    price: '₹28.5 Lakh',
    range: '450 km',
    engine: 'Electric Motor',
    seating: '5 seats',
    image: 'assets/cars/MAHINDRA XEV9E.jpeg',
    review: 'Advanced electric flagship SUV with premium comfort, long-range capability, and futuristic features.',
    score: 4.6,
  },
  {
    id: 12,
    brand: 'Hyundai',
    model: 'Creta',
    price: '₹11.2 Lakh',
    range: '17 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'assets/cars/HYUNDAI CRETA.jpeg',
    review: 'Balanced SUV with premium cabin, technology and smooth drive.',
    score: 4.4,
  },
  {
    id: 13,
    brand: 'Hyundai',
    model: 'Venue',
    price: '₹8.5 Lakh',
    range: '18 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/HYUNDAI VENUE.jpeg',
    review: 'Compact SUV with strong safety ratings and modern connectivity.',
    score: 4.3,
  },
  {
    id: 14,
    brand: 'Hyundai',
    model: 'Verna',
    price: '₹10.8 Lakh',
    range: '15 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'assets/cars/HYUNDAI VERNA.jpeg',
    review: 'Sleek sedan with comfortable ride quality and refined engine.',
    score: 4.4,
  },
  {
    id: 15,
    brand: 'Toyota',
    model: 'Urban Cruiser',
    price: '₹9.3 Lakh',
    range: '19 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/TOYOTA URBAN CRUISER.jpeg',
    review: 'Efficient compact SUV with brand reliability and appealing styling.',
    score: 4.2,
  },
  {
    id: 16,
    brand: 'Toyota',
    model: 'Innova Crysta',
    price: '₹19.5 Lakh',
    range: '12 kmpl',
    engine: '2.4L Diesel',
    seating: '7 seats',
    image: 'assets/cars/YOYOTA INNOVA CRYSTA.jpeg',
    review: 'Comfortable MPV ideal for family travel with premium space.',
    score: 4.6,
  },
  {
    id: 17,
    brand: 'Toyota',
    model: 'Fortuner',
    price: '₹33.5 Lakh',
    range: '10 kmpl',
    engine: '2.7L Petrol',
    seating: '7 seats',
    image: 'assets/cars/TOYOTA FORTUNER.jpeg',
    review: 'Luxury SUV with strong off-road capability and premium comforts.',
    score: 4.7,
  },
  {
    id: 18,
    brand: 'Toyota',
    model: 'Land Cruiser 300',
    price: '₹2.35 Crore',
    range: '9 kmpl',
    engine: '3.5L Twin Turbo V6 Petrol',
    seating: '7 seats',
    image: 'assets/cars/TOYOTA LAND CRUISER 300.jpeg',
    review: 'Top-tier luxury off-roader with serious capability and premium comfort.',
    score: 4.8,
  },
  {
    id: 19,
    brand: 'Toyota',
    model: 'Vellfire',
    price: '₹66.5 Lakh',
    range: '11 kmpl',
    engine: '2.5L Petrol Hybrid',
    seating: '7 seats',
    image: 'assets/cars/TOYOTA VELLFIRE.jpeg',
    review: 'Luxury MPV with spacious interiors, premium amenities, and executive comfort.',
    score: 4.7,
  },
  {
    id: 20,
    brand: 'Kia',
    model: 'Seltos',
    price: '₹10.5 Lakh',
    range: '16 kmpl',
    engine: '1.5L Petrol',
    seating: '5 seats',
    image: 'assets/cars/KIA SELTOS.jpeg',
    review: 'Stylish and feature-rich mid-size SUV with a strong highway presence.',
    score: 4.5,
  },
  {
    id: 21,
    brand: 'Kia',
    model: 'Sonet',
    price: '₹8.7 Lakh',
    range: '17 kmpl',
    engine: '1.2L Petrol',
    seating: '5 seats',
    image: 'assets/cars/KIA SONET.jpeg',
    review: 'Compact SUV with bold looks and smart interior technology.',
    score: 4.3,
  },
  {
    id: 22,
    brand: 'Kia',
    model: 'Carnival',
    price: '₹33.4 Lakh',
    range: '11 kmpl',
    engine: '2.2L Diesel',
    seating: '7 seats',
    image: 'assets/cars/KIA CARNIVAL.jpeg',
    review: 'Premium MPV with spacious seating and advanced convenience features.',
    score: 4.4,
  },
  {
    id: 23,
    brand: 'Skoda',
    model: 'Octavia',
    price: '₹28.8 Lakh',
    range: '13 kmpl',
    engine: '2.0L Petrol',
    seating: '5 seats',
    image: 'assets/cars/SKODA OCTAVIA.jpeg',
    review: 'Premium sedan with a spacious cabin, refined drive and safety features.',
    score: 4.3,
  },
  {
    id: 24,
    brand: 'Skoda',
    model: 'Kushaq',
    price: '₹11.5 Lakh',
    range: '16 kmpl',
    engine: '1.5L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/skoda-kushaq.jpeg',
    review: 'Modern compact SUV with sharp handling and premium build quality.',
    score: 4.4,
  },
  {
    id: 25,
    brand: 'Skoda',
    model: 'Superb',
    price: '₹34.9 Lakh',
    range: '12 kmpl',
    engine: '2.0L Petrol',
    seating: '5 seats',
    image: 'assets/cars/SKODA SUPERB.jpeg',
    review: 'Executive sedan with a luxurious interior and powerful drive.',
    score: 4.5,
  },
  {
    id: 26,
    brand: 'BMW',
    model: '3 Series',
    price: '₹45.2 Lakh',
    range: '12 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/BMW 3-SERIES.jpeg',
    review: 'Luxury sport sedan with strong performance and elegant interior quality.',
    score: 4.8,
  },
  {
    id: 27,
    brand: 'BMW',
    model: 'X1',
    price: '₹44.9 Lakh',
    range: '13 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/BMW X1.jpeg',
    review: 'Premium compact SUV with excellent refinement and modern tech.',
    score: 4.6,
  },
  {
    id: 28,
    brand: 'BMW',
    model: '5 Series',
    price: '₹67.9 Lakh',
    range: '11 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/BMW 5-SERIES.jpeg',
    review: 'High-end executive sedan with exceptional comfort and performance.',
    score: 4.8,
  },
  {
    id: 29,
    brand: 'BMW',
    model: 'M4 Competition',
    price: '₹1.35 Crore',
    range: '10 kmpl',
    engine: '3.0L Twin Turbo Inline-6 Petrol',
    seating: '4 seats',
    image: 'assets/cars/BMW M4 COMPETION.jpeg',
    review: 'High-performance coupe with razor-sharp handling, aggressive styling and track-capable power.',
    score: 4.9,
  },
  {
    id: 30,
    brand: 'BMW',
    model: 'M2',
    price: '₹95.0 Lakh',
    range: '11 kmpl',
    engine: '3.0L Twin Turbo Inline-6 Petrol',
    seating: '4 seats',
    image: 'assets/cars/BMW M2.jpeg',
    review: 'Compact performance coupe delivering explosive acceleration and thrilling dynamics.',
    score: 4.8,
  },
  {
    id: 31,
    brand: 'BMW',
    model: 'Z4',
    price: '₹78.6 Lakh',
    range: '12 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '2 seats',
    image: 'assets/cars/BMW Z4.jpeg',
    review: 'Sporty roadster with pure open-top driving pleasure and a luxurious cockpit.',
    score: 4.7,
  },
  {
    id: 32,
    brand: 'Renault',
    model: 'Kiger',
    price: '₹7.1 Lakh',
    range: '20 kmpl',
    engine: '1.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/RENAULT KIGER.jpeg',
    review: 'Affordable compact SUV with modern styling and balanced efficiency.',
    score: 4.1,
  },
  {
    id: 33,
    brand: 'Renault',
    model: 'Triber',
    price: '₹6.3 Lakh',
    range: '18 kmpl',
    engine: '1.0L Petrol',
    seating: '7 seats',
    image: 'assets/cars/RENAULT TRIBER.jpeg',
    review: 'Flexible 7-seater MPV with smart storage and great affordability.',
    score: 4.0,
  },
  {
    id: 34,
    brand: 'Renault',
    model: 'Duster',
    price: '₹10.5 Lakh',
    range: '17 kmpl',
    engine: '1.5L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/RENAULT DUSTER.jpeg',
    review: 'Rugged SUV with a spacious cabin and comfortable long-distance ride.',
    score: 4.2,
  },
  {
    id: 35,
    brand: 'Jaguar Land Rover',
    model: 'Range Rover Evoque',
    price: '₹79.0 Lakh',
    range: '12 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/RANGER ROVER EVOQUE.jpeg',
    review: 'Stylish compact luxury SUV with premium interior and advanced off-road capability.',
    score: 4.6,
  },
  {
    id: 36,
    brand: 'Jaguar Land Rover',
    model: 'Discovery Sport',
    price: '₹76.5 Lakh',
    range: '13 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/DISCOVERY SPORTS.jpeg',
    review: 'Premium family SUV with spacious seating, elegant design and modern tech.',
    score: 4.5,
  },
  {
    id: 37,
    brand: 'Jaguar Land Rover',
    model: 'Defender',
    price: '₹1.05 Crore',
    range: '11 kmpl',
    engine: '3.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/DEFENDER.jpeg',
    review: 'Rugged luxury off-roader built for extreme capability and premium comfort.',
    score: 4.7,
  },
  {
    id: 38,
    brand: 'Jaguar Land Rover',
    model: 'Range Rover Velar',
    price: '₹92.0 Lakh',
    range: '12 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/RANGE ROVER VELAR.jpeg',
    review: 'Sleek mid-size luxury SUV with refined design and intelligent technology.',
    score: 4.6,
  },
  {
    id: 39,
    brand: 'Jaguar Land Rover',
    model: 'Range Rover',
    price: '₹2.10 Crore',
    range: '10 kmpl',
    engine: '3.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/RANGE ROVER.jpeg',
    review: 'Ultimate luxury SUV with unmatched comfort, capability and presence.',
    score: 4.8,
  },
  {
    id: 40,
    brand: 'Jaguar Land Rover',
    model: 'Jaguar F-Pace',
    price: '₹82.5 Lakh',
    range: '13 kmpl',
    engine: '2.0L Turbo Petrol',
    seating: '5 seats',
    image: 'assets/cars/JAGUAR F-PACE.jpeg',
    review: 'Sporty luxury SUV with sharp handling, refined cabins and dynamic performance.',
    score: 4.6,
  },
];

const reviews = [
  {
    author: 'Amit',
    model: 'Baleno',
    text: 'Excellent mileage and comfortable ride for city driving. Great value in its segment.',
    rating: 4.5,
  },
  {
    author: 'Priya',
    model: 'Nexon',
    text: 'Spacious interior, strong safety features and a smooth drive. Perfect for family use.',
    rating: 4.6,
  },
  {
    author: 'Rahul',
    model: 'Thar',
    text: 'A fun adventure car. Powerful and stylish, yet comfortable enough for daily drives.',
    rating: 4.7,
  },
];

const brands = [...new Set(cars.map((car) => car.brand))];

const brandLogoMap = {
  'Maruti Suzuki': 'assets/brands/SUZUKI.jpeg',
  Tata: 'assets/brands/tata.jpeg',
  Mahindra: 'assets/brands/mahindra.jpeg',
  Hyundai: 'assets/brands/hyundai.jpeg',
  Toyota: 'assets/brands/toyota.jpeg',
  Kia: 'assets/brands/kia.jpeg',
  Skoda: 'assets/brands/skoda.jpeg',
  BMW: 'assets/brands/bmw.jpeg',
  Renault: 'assets/brands/renault.jpeg',
  'Jaguar Land Rover': 'assets/brands/JAGUAR LAND ROVER.jpeg',
};

const brandWebsiteMap = {
  'Maruti Suzuki': 'https://www.marutisuzuki.com/',
  Tata: 'https://www.tatamotors.com/',
  Mahindra: 'https://www.mahindra.com/',
  Hyundai: 'https://www.hyundai.com/in/en',
  Toyota: 'https://www.toyotabharat.com/',
  Kia: 'https://www.kia.com/in/home.html',
  Skoda: 'https://www.skoda-auto.co.in/',
  BMW: 'https://www.bmw.in/en/index.html',
  Renault: 'https://www.renault.co.in/',
  'Jaguar Land Rover': 'https://www.jlr.com/',
};

const brandBookingMap = {
  'Maruti Suzuki': 'https://www.marutisuzuki.com/arena',
  Tata: 'https://www.tatamotors.com/',
  Mahindra: 'https://www.mahindra.com/',
  Hyundai: 'https://www.hyundai.com/in/en/find-a-car.html',
  Toyota: 'https://www.toyotabharat.com/',
  Kia: 'https://www.kia.com/in/home.html',
  Skoda: 'https://www.skoda-auto.co.in/',
  BMW: 'https://www.bmw.in/en/index.html',
  Renault: 'https://www.renault.co.in/',
  'Jaguar Land Rover': 'https://www.jlr.com/booking/',
};

function getBookingUrl(brand, model) {
  if (brandBookingMap[brand]) {
    return brandBookingMap[brand];
  }

  if (brandWebsiteMap[brand]) {
    return brandWebsiteMap[brand];
  }

  return `https://www.google.com/search?q=${encodeURIComponent(`${brand} ${model} booking`)}`;
}

const brandGrid = document.getElementById('brandGrid');
const brandFilter = document.getElementById('brandFilter');
const clearFilter = document.getElementById('clearFilter');
const carList = document.getElementById('carList');
const reviewList = document.getElementById('reviewList');
const compareOne = document.getElementById('compareOne');
const compareTwo = document.getElementById('compareTwo');
const compareResult = document.getElementById('compareResult');
const carSection = document.getElementById('cars');
const imageModal = document.getElementById('imageModal');
const imageModalClose = document.getElementById('imageModalClose');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalCaption = document.getElementById('imageModalCaption');

function renderBrands() {
  brands.forEach((brand) => {
    const card = document.createElement('button');
    card.className = 'brand-card';
    const logoSrc = brandLogoMap[brand] || '';
    card.innerHTML = `
      ${logoSrc ? `<img src="${logoSrc}" alt="${brand} logo">` : ''}
      <span>${brand}</span>
    `;
    card.addEventListener('click', () => {
      brandFilter.value = brand;
      renderCars();
      carSection.scrollIntoView({ behavior: 'smooth' });
    });
    brandGrid.appendChild(card);
  });
}

function renderBrandOptions() {
  brands.forEach((brand) => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function renderCars(highlightCarId = null) {
  const selectedBrand = brandFilter.value;
  carList.innerHTML = '';
  const filteredCars = selectedBrand === 'all' ? cars : cars.filter((car) => car.brand === selectedBrand);

  filteredCars.forEach((car) => {
    const card = document.createElement('article');
    card.id = `car-card-${car.id}`;
    card.className = 'car-card';
    const imageSrc = car.image || 'assets/cars/placeholder.svg';
    const brandWebsite = brandWebsiteMap[car.brand] || '#';

    card.innerHTML = `
      <img src="${imageSrc}" alt="${car.brand} ${car.model}" onerror="this.src='assets/cars/placeholder.svg'">
      <h3>${car.model}</h3>
      <div class="meta">Brand: ${car.brand}</div>
      <div class="price">${car.price}</div>
      <ul>
        <li>Engine: ${car.engine}</li>
        <li>Fuel Efficiency: ${car.range}</li>
        <li>Seating: ${car.seating}</li>
      </ul>
      <p>${car.review}</p>
      <div class="meta">Rating: ${car.score} / 5</div>
      <button class="btn btn-primary book-btn" data-brand="${car.brand}" data-model="${car.model}">Book Now</button>
    `;

    // Add event listener for the book button
    const bookBtn = card.querySelector('.book-btn');
    bookBtn.addEventListener('click', () => {
      brandFilter.value = car.brand;
      renderCars(car.id);
      carSection.scrollIntoView({ behavior: 'smooth' });
      const bookingUrl = getBookingUrl(car.brand, car.model);
      const newTab = window.open(bookingUrl, '_blank');
      if (newTab) {
        newTab.focus();
      }
    });

    const carImage = card.querySelector('img');
    carImage.addEventListener('click', () => {
      openCarImageModal(imageSrc, `${car.brand} ${car.model}`);
    });

    carList.appendChild(card);
  });

  if (highlightCarId) {
    const highlightedCard = document.getElementById(`car-card-${highlightCarId}`);
    if (highlightedCard) {
      highlightedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      highlightedCard.classList.add('highlighted');
      setTimeout(() => highlightedCard.classList.remove('highlighted'), 2500);
    }
  }
}

function renderReviews() {
  reviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review-card';
    card.innerHTML = `
      <h3>${review.model}</h3>
      <div class="meta">By ${review.author}</div>
      <p>${review.text}</p>
      <div class="rating">Rating: ${review.rating} / 5</div>
    `;
    reviewList.appendChild(card);
  });
}

function renderCompareOptions() {
  [compareOne, compareTwo].forEach((select) => {
    select.innerHTML = '<option value="0">Select a model</option>';
    cars.forEach((car) => {
      const option = document.createElement('option');
      option.value = car.id;
      option.textContent = `${car.brand} ${car.model}`;
      select.appendChild(option);
    });
  });
}

function renderComparison() {
  const idOne = parseInt(compareOne.value, 10);
  const idTwo = parseInt(compareTwo.value, 10);
  compareResult.innerHTML = '';

  if (!idOne || !idTwo || idOne === idTwo) {
    compareResult.innerHTML = '<div class="compare-card"><p>Select two different models to compare.</p></div>';
    return;
  }

  const firstCar = cars.find((car) => car.id === idOne);
  const secondCar = cars.find((car) => car.id === idTwo);

  [firstCar, secondCar].forEach((car) => {
    const card = document.createElement('article');
    card.className = 'compare-card';
    card.innerHTML = `
      <h3>${car.brand} ${car.model}</h3>
      <div class="meta">${car.price}</div>
      <ul>
        <li>Engine: ${car.engine}</li>
        <li>Fuel Efficiency: ${car.range}</li>
        <li>Seating: ${car.seating}</li>
        <li>Rating: ${car.score} / 5</li>
      </ul>
    `;
    compareResult.appendChild(card);
  });
}

function openCarImageModal(src, caption) {
  imageModalImg.src = src;
  imageModalImg.alt = caption;
  imageModalCaption.textContent = caption;
  imageModal.classList.add('open');
  imageModal.setAttribute('aria-hidden', 'false');
}

function closeCarImageModal() {
  imageModal.classList.remove('open');
  imageModal.setAttribute('aria-hidden', 'true');
  imageModalImg.src = '';
}

imageModalClose.addEventListener('click', closeCarImageModal);
imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) {
    closeCarImageModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCarImageModal();
  }
});

brandFilter.addEventListener('change', () => {
  renderCars();
  carSection.scrollIntoView({ behavior: 'smooth' });
});
clearFilter.addEventListener('click', () => {
  brandFilter.value = 'all';
  renderCars();
  carSection.scrollIntoView({ behavior: 'smooth' });
});
compareOne.addEventListener('change', renderComparison);
compareTwo.addEventListener('change', renderComparison);

// Navigation improvements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// Smooth scrolling for navigation links
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = item.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('open');
  });
});

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

renderBrands();
renderBrandOptions();
renderCars();
renderReviews();
renderCompareOptions();
renderComparison();
