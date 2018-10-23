var app = new Vue({
  el: '#app',
  data: {
    firstName: "Anait",
    lastName: "Miridzhanian",
    description: "Je suis étudiante en journalisme à Sciences Po Paris.",
    photo: "./image.jpeg",
    twitter: "Anahitik",
    github: "anaitmiridzhanian",
    mail: "anait.miridzhanian@sciencespo.fr",
    experiences: [{
      dateBegin: "Mai 2018",
      dateEnd: "Juillet 2018",
      name: "Agence France Presse",
      title: "Stage journaliste agencier",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dc/M_le_Magazine_du_Monde_logo_2016.svg/1280px-M_le_Magazine_du_Monde_logo_2016.svg.png",
      description: "Rédaction et traduction de dépêches"
    }, {
      dateBegin: "Été 2013",
      dateEnd: false,
      name: "Le Monde.fr",
      title: "Data-journalist",
      description: false
    }, {
      dateBegin: "2012",
      dateEnd: "2013",
      name: "Le Dauphiné Libéré",
      title: "Stagiaire et correspondant de presse",
      description: false
    }],
    formations: [{
      dateBegin: "2012",
      dateEnd: "2014",
      name: "Master Journalisme",
      university: "Sciences Po Grenoble"
    }, {
      dateBegin: "2009",
      dateEnd: "2012",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Grenoble",
      logo:"grenoble.png"
    }],
    languages: ["Anglais"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})