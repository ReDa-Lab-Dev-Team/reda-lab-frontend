<template>
  <div class="p-6 md:p-8 border-b border-gray-200 last:border-b-0">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Image Section -->
      <div class="md:w-1/3">
        <img
          :src="image"
          :alt="title"
          class="w-full h-48 md:h-64 object-cover rounded-lg"
        />
      </div>

      <!-- Content Section -->
      <div class="md:w-2/3 flex flex-col justify-between">
        <div>
          <p class="text-lg text-gray-800 mb-4 leading-relaxed">
            "{{ quote }}"
          </p>
          <hr class="my-4 border-gray-300" />

          <div class="space-y-2 text-gray-700">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h1v1a1 1 0 102 0v-1h1a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1zm2 6a2 2 0 012-2h1a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" clip-rule="evenodd" />
              </svg>
              <span><strong>Open Days:</strong> {{ openDays }}</span>
            </div>

            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 11-2 0 1 1 0 012 0zm-.1 5.894A1 1 0 0110 14.5a1 1 0 01-.9-1.406l1.2-3.6a1 1 0 011.406-.9.975.975 0 011.038.242 1 1 0 01.67 1.348l-1.2 3.6a1 1 0 01-1.406.9zm-3.5 3.5a1 1 0 11-2 0 1 1 0 012 0zm4.5 0a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
              </svg>
              <span><strong>Hours:</strong> {{ hours }}</span>
            </div>

            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 019.9-9.9l-4.95-4.95a7 7 0 01-9.9 9.9z" clip-rule="evenodd" />
              </svg>
              <span><strong>Location:</strong> {{ location }}</span>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="mt-6">
          <button
            class="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  quote: {
    type: String,
    required: true
  },
  openDays: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Visit our Clubs'
  }
});
</script>
