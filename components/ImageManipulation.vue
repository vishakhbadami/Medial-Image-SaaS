<template>
  <div class="image-manipulation">
    <h4 class="text-xl font-semibold">Manipulate Image</h4>
    <div class="image-controls">
      <button @click="zoomIn">Zoom In</button>
      <button @click="zoomOut">Zoom Out</button>
      <button @click="cropImage">Crop Image</button>
      <button @click="adjustBrightness">Adjust Brightness</button>
      <button @click="adjustContrast">Adjust Contrast</button>
    </div>
    <div class="image-container">
      <img :src="imageSrc" alt="Manipulated Image" class="image-preview" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageSrc = ref('C:\Users\badam\my-saas-app\components\images\Responsive Phone.jpg');  // Path to your image

// Functions to handle image manipulation (for demonstration purposes)
const zoomIn = () => {
  console.log('Zoom In');
  // Implement zoom functionality
};

const zoomOut = () => {
  console.log('Zoom Out');
  // Implement zoom functionality
};

const cropImage = () => {
  console.log('Crop Image');
  // Implement crop functionality
};

const adjustBrightness = () => {
  console.log('Adjust Brightness');
  // Implement brightness adjustment
};

const adjustContrast = () => {
  console.log('Adjust Contrast');
  // Implement contrast adjustment
};
</script>

<style scoped>
.image-manipulation {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-controls {
  margin-bottom: 16px;
}

button {
  margin-right: 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.image-container {
  margin-top: 20px;
}

.image-preview {
  max-width: 100%;
  height: auto;
}
</style>
