<template>
  <div >
  <div class="bg-image"></div>
    <v-row no-gutters class="mt-12 tag">
      <v-col cols="1"></v-col>
      <v-col cols="4">
        <v-form ref="form" class="ml-1 mr-1 mt-12 mb-1">
          <v-text-field
            v-model="results.location"
            label="Location"
            :disabled="disabled"
            required
          >
          </v-text-field>
          <v-checkbox
            v-model="results.location"
            value="current location"
            label="Use current location"
            @click="disabled = !disabled"
            required
          >
          </v-checkbox>
          <v-select
            v-model="item_selected"
            @change="item_select"
            :items="items"
            label="Type of office space"
          >
          </v-select>

          <!-- selected row -->
          <v-row>
            <div class="selected" v-for="type in results.type" :key="type">
              <v-col
                ><p @click="delete_items(type)">{{ type }}</p></v-col
              >
            </div>
          </v-row>
          <br />
          <!-- end of selected row -->

          <v-select
            v-model="utility_selected"
            @change="utility_select"
            :items="supplies"
            label="Office utilities"
            required
          >
          </v-select>

          <!-- selected row -->
          <v-row>
            <div
              class="selected"
              v-for="utility in results.utilities"
              :key="utility"
            >
              <v-col
                ><p @click="delete_utility(utility)">{{ utility }}</p></v-col
              >
            </div>
          </v-row>
          <br />
          <!-- end of selected row -->

          <v-btn color="red darken-3" class="mx-auto" @click="submit" dark>
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      results: {
        location: "",
        type: [],
        utilities: [],
      },
      items: ["cubical", "conference room", "covered room", "open space"],
      supplies: [
        "noise cancelling",
        "white board",
        "projector",
        "TV monitor",
        "Extra computer monitor",
      ],
      checkbox: false,
      item_selected: null,
      utility_selected: null,
      disabled: false,
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.results));
    },
    item_select() {
      this.results.type.push(this.item_selected);
    },
    utility_select() {
      this.results.utilities.push(this.utility_selected);
    },
    delete_utility(a) {
      this.results.utilities.splice(this.results.utilities.indexOf(a), 1);
    },
    delete_items(a) {
      this.results.type.splice(this.results.type.indexOf(a), 1);
    },
  },
};
</script>

<style scoped>
.v-form {
  padding: 20px;
  margin: 150px 500px;
  border: solid #888888 1px;
  border-radius: 10px;
  box-shadow: 5px 10px #888888;
  background-color: white;
}
.bg-image {
  background-image: url("../assets/pexels-andrew-neel-8960464.jpg");
  height: 60vh;
  width: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 5%;
}
.selected p {
  background-color: #c62828;
  border-radius: 20px;
  padding: 5px;
  color: white;
  cursor: pointer;
}

.tag {
  position: relative;
}

</style>
