/**
 * Central Dynamic Configuration for Navitha & Shahin's Wedding
 */
export const DEFAULT_WEDDING_DATA = {
  bride: "Navitha",
  groom: "Shahin",
  brideParents: "Gopinathan NL & Vidhya Gopinathan",
  groomParents: "Maya CS",
  groomResidence: "Changanazhipadam House, Aroor, Alappuzha",
  brideResidence: "Nambi House, Thambankadavu p.o",
  
  // Date & Auspicious Timings
  weddingDateDisplay: "November 16, 2026, Monday",
  malayalamDate: "Thulam 30, 1201",
  muhurtham: "9:30 – 9:45 AM",
  countdownTargetISO: "2026-11-16T09:30:00+05:30", // Nov 16, 2026 09:30 AM IST
  
  // Ceremony Venues
  thalikettuVenueTitle: "Guruvayur Krishna Temple",
  thalikettuVenueSub: "Guruvayur",
  auditoriumVenueTitle: "King Auditorium",
  auditoriumVenueSub: "Thalikulam",

  // Contacts & RSVPs
  contactPhone: "+917594950818",
  contactPhoneDisplay: "75 94 95 08 18",
  whatsappNumber: "917594950818",
  
  // Maps Links
  templeMapUrl: "https://www.google.com/maps/search/?api=1&query=Guruvayur+Krishna+Temple",
  auditoriumMapUrl: "https://www.google.com/maps/search/?api=1&query=King+Auditorium+Thalikulam",

  // Google Forms Integration
  googleForms: {
    enabled: true,
    formId: "1FAIpQLSfrru9B5x92EeycBjP5THQyaqbe1zUoUhBmUWrUR1YNTZFyJQ",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfrru9B5x92EeycBjP5THQyaqbe1zUoUhBmUWrUR1YNTZFyJQ/viewform",
    entryIds: {
      name: "entry.1832097074",       // Full Name
      attendance: "entry.849214101",   // Attendance
      guests: "entry.358153546",       // Number of Guests
      blessing: "entry.1705551293"     // Blessings & Message
    }
  }
};
