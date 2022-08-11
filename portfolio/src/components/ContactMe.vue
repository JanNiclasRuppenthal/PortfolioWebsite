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