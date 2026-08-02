// Central business configuration.
// This is the file to edit first when reusing this template for a new client —
// name, contact details, hours, and social links all live here.

export const business = {
  name: "Artville",
  fullName: "Artville Art & Blood Art",
  tagline: "Art & Blood Art",
  description:
    "A women-owned customized gift studio in Bengaluru, creating handmade treasures that capture life's most precious moments.",
  story: "[Business story provided by client]",

  address: {
    line1: "205, 13th Main Road, Kothnur,",
    line2: "RBI Layout, JP Nagar 7th Phase,",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560078",
    country: "India",
    // Used for the Google Maps link on the Contact section
    mapsQuery:
      "205+13th+Main+Road+Kothnur+RBI+Layout+JP+Nagar+7th+Phase+Bengaluru",
  },

  phone: {
    display: "+91 97396 89598",
    tel: "+919739689598",
    whatsapp: "919739689598",
  },

  hours: "Open daily from 11:30 AM onwards",

  // TODO: placeholder — replace with real profile URLs when available
  social: {
    instagram: "#",
    facebook: "#",
    pinterest: "#",
  },
} as const;
