<template>
  <v-card :loading="loading" class="my-4" width="80%">
    <v-row :align="align" no-gutters class="pa-2">
      <v-col
      md="6"
      sm="12"
      >
        <v-card-title>{{ office.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="office.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ office.rating }}&nbsp;({{ office.reviewCount }})
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
              <span  v-for="type in office.types" :key="type.id">
                  {{type.name}} 
                  <span v-if="type.id != Object.keys(office.types).length"> • </span>
              </span>
          </div>

          <div>
            {{ office.description }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="red darken-3 white--text"
            column
          >
            <v-chip v-for="time in office.time" :key="time.id">{{time.name}}</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="red lighten-2" text @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col
      md="6">
        <v-img
          height="100%"
          :src= office.img
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: "OfficeCard",
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: {
    office: {
      name: String,
      id: String,
      rating: Number,
      reviewCount: Number,
    },
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>