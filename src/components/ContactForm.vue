<template>
  <section>
    <form v-on:submit.prevent="sendForm">  
      <b-field label="Name">
          <b-input v-model="form.name"></b-input>
      </b-field>

      <b-field label="Email">
          <b-input type="email"
              maxlength="30"
              v-model="form.email">
          </b-input>
      </b-field>

      <b-field label="Message">
          <b-input maxlength="200" 
            type="textarea"
            v-model="form.message"></b-input>
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
      errors: [],
      form: {
        name: '',
        email: '',
        message: ''
      }, 
      url: 'https://verynathan.com/verynathan/wp-json/wp/v2/contact',
      sendFormResponse: ''
    }
  },
  methods: {
    showToast: function () {
      const toastOptions = {
        duration: 5000,
        message: this.errors,
        position: 'is-bottom',
        type: 'is-secondary'
      }

      if(this.errors) {
      this.$toast.open(toastOptions);
      }
      this.errors = [];
    },
    sendForm: function() {
      this.axios.post(this.url, this.form)
        .then((response) => {
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
          this.sendFormResponse = response.data;

          const toastOptions = {
            duration: 5000,
            message: this.sendFormResponse,
            position: 'is-bottom',
            type: 'is-primary'
          }

          this.$toast.open(toastOptions);
          this.sendFormResponse = '';
        
        })
        .catch((error) => {
          this.errors = error.response.data.message;
          console.log(this.errors);
          this.showToast();
        });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
