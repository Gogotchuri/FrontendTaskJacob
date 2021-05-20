<template>
  <div class="container">
    <div class="row text-center justify-content-center my-5">
      <div class="col col-2">
        <select v-model="country">
          <option value="Georgia">Georgia</option>
          <option value="Philippines">Philippines</option>
          <option value="India">India</option>
        </select>
      </div>
      <div>
        Today: {{today}}
      </div>
    </div>
    <div class="row text-center justify-content-center">
      <div class="col col-3">
        <validation-observer ref="observer" v-slot="{}">
          <validation-provider name="email" rules="required|email" v-slot="{errors}">
            <label>
              Email
              <input name="email" type="text" v-model="settings.email">
            </label>
            <div class="text-danger" v-for="e in errors" :key="e">
              {{e}}
            </div>
          </validation-provider>
          <validation-provider name="name" rules="required" v-slot="{errors}">
            <label>
              Name
              <input name="name" type="text" v-model="settings.name">
            </label>
            <div class="text-danger" v-for="e in errors" :key="e">
              {{e}}
            </div>
          </validation-provider>
          <validation-provider name="ID" rules="" v-slot="{errors}">
            <label>
              Personal ID
              <input name="ID" type="text" v-model="settings.personalID">
            </label>
            <div class="text-danger" v-for="e in errors" :key="e">
              {{e}}
            </div>
          </validation-provider>
          <validation-provider name="VAT" rules="" v-slot="{errors}">
            <label>
              VAT
              <select name="vat" v-model="settings.isVATPayer">
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </label>
            <div class="text-danger" v-for="e in errors" :key="e">
              {{e}}
            </div>
          </validation-provider>
          <validation-provider v-if="settings.isVATPayer" name="VAT amount" rules="" v-slot="{errors}">
            <label>
              VAT Amount
              <input type="number" v-model="settings.VATValue">
            </label>
            <div class="text-danger" v-for="e in errors" :key="e">
              {{e}}
            </div>
          </validation-provider>
          <br>
          <button @click="saveSettings">Submit</button>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
  name: 'Settings',
  data () {
    return {
      country: 'Georgia',
      today: '',
      settings: {
        email: '',
        name: '',
        personalID: '',
        isVATPayer: false,
        VATValue: 0
      }
    };
  },
  components: {
    ValidationObserver, ValidationProvider
  },
  mounted () {
    this.today = new Date();
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
