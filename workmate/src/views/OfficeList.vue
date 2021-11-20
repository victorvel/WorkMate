<template>
  <div>
    <div class="text-center my-4">
      <v-btn rounded color="red darken-3" dark>
        <v-icon>mdi-magnify</v-icon>
        &nbsp;&nbsp;
        Find an office &nbsp;
      </v-btn>
    </div>

    <v-row justify="center" v-for="office in offices" :key="office.id">
      <office-card :office="office" />
    </v-row>
  </div>
</template>

<script>
import OfficeCard from "../components/OfficeCard";

export default {
  name: "Home",

  data: () => ({
    form_results : [],
    offices: [
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      },
      {
        id: 1234,
        name: "Victor Inc.",
        rating: 4,
        reviewCount: 234,
        types: [
          { id: 1, name: "Covered Room" },
          { id: 1, name: "Open Space" },
          { id: 3, name: "Conference Room" },
        ],
        description: "Extra spaces, a little bit old but everything is great",
        time: [
          { id: 1, name: "4:30PM" },
          { id: 2, name: "5:00PM" },
          { id: 3, name: "5:30PM" },
          { id: 4, name: "6:30PM" },
          { id: 5, name: "7:30PM" },

        ],
        img:"https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?cs=srgb&dl=pexels-cadeau-maestro-1170412.jpg&fm=jpg"
      },
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      },
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }, 
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }, 
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }, 
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      },
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }, 
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }, 
      {
        id: 1,
        name: "Flask's Office",
        rating: 4.5,
        reviewCount: 12,
        types: [
          { id: 1, name: "Cubical" },
          { id: 2, name: "Conference Room" },
        ],
        description: "Cozy little space for people who wants a ecsape from home. Coffee and tea provided on site.",
        time: [
          { id: 1, name: "5:30PM" },
          { id: 2, name: "6:00PM" },
          { id: 3, name: "6:30PM" },
          { id: 4, name: "7:30PM" },
        ],
        img:"https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg"
      }
    ],
  }),

  components: {
    OfficeCard,
  },

  methods: {

  }, 
  beforeMount() {
    this.form_results = JSON.parse(this.$route.params.results);
  }

};
</script>
