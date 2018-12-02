<template>
  <section>
    <form v-on:submit.prevent="submitForm">  
      <b-field label="Name">
          <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Email">
          <b-input type="email"
              maxlength="30"
              v-model="email">
          </b-input>
      </b-field>

      <b-field label="Message">
          <b-input maxlength="200" 
            type="textarea"
            v-model="message"></b-input>
      </b-field>

      <b-field label=""><!-- Label left empty for spacing -->
        <p class="control">
          <button type="submit" class="button is-secondary">
            Send message
          </button>
        </p>
      </b-field>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      error: null,
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    showToast: function () {
      const toastOptions = {
        duration: 5000,
        message: this.error,
        position: 'is-bottom',
        type: 'is-secondary'
      }

      if(this.error) {
      this.$toast.open(toastOptions);
      }
      
      this.error = null;
    },
    submitForm: function() {

      if (this.name && this.email && this.message) {
        return true;
      }

      if (!this.name) {
        this.error = 'Name required.';
      }
      if (!this.email) {
        this.error = 'Email required.';
      }
      if (!this.message) {
        this.error = 'Message required.';
      }

      this.showToast();

      // this.errors = [];
      // this.name = null;
      // this.email = null;
      // this.message = null;

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
