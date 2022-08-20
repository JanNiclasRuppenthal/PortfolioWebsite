<template>
  <div class="root">
      <h1 class="contact">Contact Me</h1>
      <v-divider class="divider"/>

        <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      dark
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      dark
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="message"
      dark
      label="Message"
      requireMessage
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <br/>
    <br/>
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    formValid() {
      const { name, email, message } = this;
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        message.length > 0
      );
    },
  },
  methods: {
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify([]));
      }
      const messages = JSON.parse(localStorage.getItem("messages"));
      const { name, email, message } = this;
      messages.push({
        name,
        email,
        message,
      });
      localStorage.setItem("messages", JSON.stringify(messages));
    },
  },
};
</script>  



<style>
.contact {
  text-align: left;
}

.divider {
    border-color: aqua !important;
    margin-bottom: 10%;
}


</style>