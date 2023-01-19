<template>
  <div class="container">
    <profile v-bind="student" />
  </div>
</template>

<script>

import Profile from '../components/Profile.vue';
import { mapState } from "pinia";
import { useAuthStore } from "../stores/auth"
export default {
  components: { Profile },
  data: function () {
    return {
      student: null,
    }
  },

  async created() {
    try {
      const response = await fetch('https://run.mocky.io/v3/003dea97-71aa-4995-b2b6-71910de8b22d');
      const data = await response.json();
      this.student = data
      this.student = { ...data, name: this.username }
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    ...mapState(useAuthStore, ["username"]),
  },
}
</script>

