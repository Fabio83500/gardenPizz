export const RESTAURANTS = [
  {
    id: "six-fours",
    name: "Garden Pizz Six-Fours",
    city: "Six-Fours-les-Plages",
    shortName: "Six-Fours",
    phone: "07 68 78 18 26",
    address: { street: "55 rue de l’Artisanat", postalCode: "83140", locality: "Six-Fours-les-Plages" },
    // jours au format schema.org, horaires du soir uniquement (pas d'ouverture le midi pour l'instant)
    hours: [
      { label: "Lundi au jeudi", days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "18:00", closes: "22:00" },
      { label: "Vendredi au dimanche", days: ["Friday", "Saturday", "Sunday"], opens: "18:00", closes: "22:30" },
    ],
    tel: "+33768781826",
    geo: { latitude: 43.11452378710338, longitude: 5.842617276532981 },
    delivery: ["Six-Fours-les-Plages", "Sanary-sur-Mer", "Ollioules", "La Seyne-sur-Mer"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.523691430775!2d5.842617276532981!3d43.11452378710338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90545bc6616a1%3A0xb1c82c8b92889c3!2sGarden%20Pizz!5e0!3m2!1sfr!2sfr!4v1740067112604!5m2!1sfr!2sfr",
    directions: "https://www.google.com/maps/search/?api=1&query=Garden+Pizz+55+rue+de+l%27Artisanat+83140+Six-Fours-les-Plages",
  },
  {
    id: "mar-vivo",
    name: "Garden Pizz Mar Vivo",
    city: "Mar Vivo, La Seyne-sur-Mer",
    shortName: "Mar Vivo",
    phone: "07 69 48 48 33",
    address: { street: "121 avenue Pablo Neruda", postalCode: "83500", locality: "La Seyne-sur-Mer" },
    hours: [
      { label: "Mardi au dimanche", days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "18:00", closes: "21:30" },
      { label: "Lundi", days: [], closed: true },
    ],
    tel: "+33769484833",
    geo: { latitude: 43.08176368920171, longitude: 5.880852476337553 },
    delivery: ["Les Sablettes", "Saint-Mandrier", "Pin Rolland"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.0823657784235!2d5.880852476337553!3d43.08176368920171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c903473da047cd%3A0x8d2751db225754b0!2sGarden%20Pizz%20Mar%20vivo!5e0!3m2!1sfr!2sfr!4v1771342649320!5m2!1sfr!2sfr",
    directions: "https://www.google.com/maps/search/?api=1&query=Garden+Pizz+121+avenue+Pablo+Neruda+83500+La+Seyne-sur-Mer",
  },
];
