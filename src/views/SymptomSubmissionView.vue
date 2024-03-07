<template>
  <div class="bg-blue-50 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between">
        <div class="w-1/2 p-4 bg-white rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Personal and Appointment Details</h2>
          <div class="mb-4">
            <label class="block mb-2" for="name">
              Your Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name" placeholder="Enter your name" v-model="formData.name" />
            <div data-lastpass-icon-root=""
              style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
            </div>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="gender">
              Gender
            </label>
            <select v-model="formData.gender" id="gender" class="flex bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="" className="hidden">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="dob">
              Date of Birth
            </label>
            <input
              class="block bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="date"
              v-model="formData.birth_date"
              placeholder="Enter text here" />
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="healthcard">
              Healthcard Number
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              v-model="formData.healthcardNumber" id="healthcard" placeholder="Enter your healthcard number" />
            <div data-lastpass-icon-root=""
              style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
            </div>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="appointment">
              Appointment Timings
            </label>
            <input
              class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="datetime-local" v-model="formData.appointmentTimings" id="appointment" placeholder="Enter preferred appointment timings" />
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="age">
              How old are you?
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              v-model="formData.age"
              placeholder="Enter your age" />
            <select aria-hidden="true" tabindex="-1"
              style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
              <option value=""></option>
              <option value="newborn">newborn 0-28 d</option>
              <option value="infant">infant 29d-1y</option>
              <option value="toddler">toddler 1-2y</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="symptoms">
              Describe symptoms in your own words and add your symptom, or select symptoms from the list:
            </label>
            <div class="flex items-center gap-2 mb-2">
              <div
                @click="addDefaultSymptom('fever')"
                class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                fever
              </div>
              <div
                @click="addDefaultSymptom('chest pain')"
                class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                chest pain
              </div>
              <button
                @click="addSymptoms"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="text-white">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="symptoms" placeholder="Enter your symptom e.g. chest pain" v-model="formData.symptom" />
          </div>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white"
            @click="submitForm">
            Thank you for submitting
          </button>
        </div>
        <div class="w-1/2 p-4 flex flex-col gap-4">
          <div class="mb-2">
            <h2 class="text-xl font-semibold mb-4">Enter symptoms in your own words OR start typing</h2>
            <ul class="list-disc pl-5 text-sm">
              <li>Enter your symptoms in normal, everyday language.</li>
              <li>Enter each symptom separately or put them all on one line but separated by commas.</li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h2 class="font-semibold">Upload your hand written symptoms Image</h2>
            <input type="file" @change="handleFileUpload" />
          </div>
          <img :src="imageUrl" v-if="imageUrl" style="max-width: 300px; max-height: 300px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue'

export default {

  data() {
    return {
      imageUrl: null,
      file: null
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file.');
        return;
      }
      this.file = file;
      this.imageUrl = URL.createObjectURL(file);
    }
  },

  setup() {

    const router = useRouter();
    const formData = ref({
      name: '',
      gender: '',
      dob: '', // Add default value or use a date picker component
      healthcardNumber: '',
      appointmentTimings: '',
      age: '',
      symptom:'',
      symptoms: []
    });

    async function submitForm() {

      console.log("Getting priority based on symptoms", symptoms.value)
      const response = await axios.get(`http://127.0.0.1:8000/getPriorityFromSymptoms/${symptoms.value}`);
      let priority = response.data.urgency;
      console.log("Priority:", priority)

      console.log("Getting possible diagnoses")
      const responseDiagnoses = await axios.get(`http://127.0.0.1:8000/getDiagnosesFromSymptoms/${symptoms.value}`);
      let diagnoses = responseDiagnoses.data.possible_diseases.join(', ');
      console.log("Diagnoses:", diagnoses)

      console.log("Adding Patient")

      const payload = {
        name: this.formData.name,
        gender: this.formData.gender,
        birth_date: this.formData.birth_date,
        healthcard_number: this.formData.healthcardNumber,
        appointment_timings: this.formData.appointmentTimings,
        age: this.formData.age,
        priority: "saad",
        symptoms: this.formData.symptoms,
        diagnoses: "check"
      };

      axios.post('http://127.0.0.1:8000/addPatient', payload)
        .then(response => {
          console.log(response.data); // Log the response data to the console

          router.push('/incoming-patients');
        })
        .catch(error => {
          console.error('Error:', error); // Log any errors to the console
        });
    }

    async function addSymptoms () {
      if ( this.formData.symptom != '') {
        this.formData.symptoms.push(this.formData.symptom)
        this.formData.symptom = ''
      }
    };

    async function addDefaultSymptom (symptom) {
      this.formData.symptoms.push(symptom)
    };

    return {
      submitForm,
      addSymptoms,
      addDefaultSymptom,
      formData
    }
  }
}

</script>




<style></style>