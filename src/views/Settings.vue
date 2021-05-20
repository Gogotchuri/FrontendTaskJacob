<template>
  <div>
    <validation-observer ref="observer" v-slot="{}">
      <validation-provider name="email" rules="required|email" v-slot="{errors}">
        <label>
          Email
          <input name="email" type="text" v-model="settings.email">
        </label>
        <div v-for="e in errors" :key="e">
          {{e}}
        </div>
      </validation-provider>
      <button @click="saveSettings">Submit</button>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
  name: 'Settings',
  data () {
    return {
      settings: {
        email: ''
      }
    };
  },
  components: {
    ValidationObserver, ValidationProvider
  },
  methods: {
    async saveSettings () {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        window.alert('validation failed');
        return;
      }
      console.log(this.settings);
      window.alert('saved');
    }
  }
};
</script>

<style scoped>

</style>
