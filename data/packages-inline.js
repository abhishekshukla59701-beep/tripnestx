// ==================== FEATURES ====================
const features = [
  { icon: "fa-hand-holding-dollar", title: "Best Price Guarantee", desc: "We ensure the lowest prices. Found cheaper? We'll match it.", cls: "fi-1" },
  { icon: "fa-shield-halved", title: "100% Secure Booking", desc: "Your payments are encrypted and safe. Book with confidence.", cls: "fi-2" },
  { icon: "fa-headset", title: "24/7 Expert Support", desc: "Our travel experts are available round the clock.", cls: "fi-3" },
  { icon: "fa-star", title: "Handpicked Hotels", desc: "Every hotel is personally vetted for quality and comfort.", cls: "fi-4" }
];

// ==================== TESTIMONIALS ====================
const testimonials = [
  { name: "Priya & Rahul Sharma", initials: "PS", loc: "Mumbai", text: "Our Maldives honeymoon was magical! TripNestX handled everything — overwater villa to sunset cruise. Best trip ever!", stars: 5 },
  { name: "Amit Verma", initials: "AV", loc: "Delhi", text: "Kashmir package for family was breathtaking. Houseboat and Gulmarg Gondola were amazing. Kids loved it!", stars: 5 },
  { name: "Sneha Patel", initials: "SP", loc: "Ahmedabad", text: "Bali honeymoon was worth every penny. Nusa Penida tour was the highlight. Very responsive on WhatsApp!", stars: 5 },
  { name: "Rajesh Kumar", initials: "RK", loc: "Lucknow", text: "Dubai trip with family was fantastic. Desert safari thrilling, Burj Khalifa views unreal. Great value!", stars: 4 },
  { name: "Ananya Iyer", initials: "AI", loc: "Chennai", text: "Kerala backwaters houseboat was serene and Munnar tea gardens beautiful. Perfect planning!", stars: 5 },
  { name: "Vikram Singh", initials: "VS", loc: "Jaipur", text: "Ladakh trip was adventure of a lifetime! Pangong camping under stars — unforgettable. Amazing coordination.", stars: 5 }
];

// ==================== PACKAGES (loaded from JSON) ====================
let allPackages = [];

// Load packages from JSON then render
fetch('data/packages.json')
  .then(r => r.json())
  .then(data => {
    allPackages = data;
    renderPackageTabs();
    renderPackages();
  })
  .catch(e => console.error('Failed to load packages:', e));
