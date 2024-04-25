<script setup>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseRadioGroup from "@/components/BaseRadioGroup.vue";
</script>

<template>
  <div>
    <form @submit.prevent="sendForm">
      <h1>Create an event</h1>
      <fieldset>
        <legend>Type of the event</legend>
        <BaseSelect
            :options="categories"
            v-model="event.category"
            label="Select a Category"
            type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput
            v-model="event.title"
            label="Title"
            type="text"
        />
        <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Where is your event?</legend>
        <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
              v-model="event.pets"
              name="pets"
              :options="petOptions"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Extras</legend>
        <p>Choose your extras:</p>
        <BaseCheckbox
            v-model="event.extras.catering"
            label="Catering"
        />
        <BaseCheckbox
            v-model="event.extras.music"
            label="Live music"
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import axios  from "axios";
export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  methods: {
    sendForm (e) {
      axios.post(
          'https://my-json-server.typicode.com/gitniiise/json-server/events',
          this.event
      )
          .then(function (response) {
            console.log('Response', response)
          })
          .catch(function (err) {
            console.log('Error', err)
          })
    }
  }
}
</script>
<style>
form {
  width: 500px;
  margin: auto;
  padding-bottom: 30px;
}
form button {
  width: 30%;
}
fieldset {
  border: 1px solid #39495c;
  margin: 20px;
  text-align: left;
  padding: 20px;
  background-color: #39495c0d;
}
legend {
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0 10px;
}
div {
  margin-bottom: 10px;
}
div[type="text"] label {
  display: block;
  font-size: small;
  margin: 3px;
}
.errorMessage {
  color: red;
}
input[type="text"], select {
  width: -webkit-fill-available;
  padding: 10px 20px;
  border-radius: 35px;
  border: 0;
}
fieldset p {
  margin: 0 0 10px 0;
}

input[type="radio"]{
  margin-right: 5px;
}
div[type="radio"],
div[type="checkbox"] label,
span[type="radio"] label {
  cursor: pointer;
}
div[type="radio"]:hover label,
div[type="checkbox"] label:hover,
span[type="radio"] label:hover {
  color: #429c73;
}
select:focus-within,
select:focus-visible,
select:active,
select:focus,
select option:focus-within,
select option:focus-visible,
select option:focus,
select option:active,
select option:focus,
input:focus-within,
input:focus-visible,
input:active,
input:focus {
  outline-color: #429c73;
}
</style>
