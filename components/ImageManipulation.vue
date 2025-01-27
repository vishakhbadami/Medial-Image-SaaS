<template>
  <div class="image-manipulation">
    <h4 class="text-xl font-semibold mb-4">Upload and Manipulate Image</h4>

    <!-- Image Uploader -->
    <input
      type="file"
      accept="image/*"
      @change="handleImageUpload"
      class="mb-4"
    />

    <!-- Display Uploaded Image -->
    <div v-if="imageSrc" class="image-container mb-4">
      <img
        ref="image"
        :src="imageSrc"
        alt="Uploaded Image"
        class="image-preview"
        :style="imageStyle"
      />
    </div>

    <!-- Image Manipulation Controls -->
    <div v-if="imageSrc" class="image-controls">
      <button @click="zoomIn">Zoom In</button>
      <button @click="zoomOut">Zoom Out</button>
      <button @click="cropImage">Crop Image</button>
      <button @click="adjustBrightness">Adjust Brightness</button>
      <button @click="adjustContrast">Adjust Contrast</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const imageSrc = ref<string | null>(null); // Holds the uploaded image's source
const zoomLevel = ref(1); // Tracks the zoom level
const brightness = ref(100); // Default brightness value
const contrast = ref(100); // Default contrast value

// Handle Image Upload
const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    imageSrc.value = URL.createObjectURL(file); // Create a temporary URL for the uploaded image
  }
};

// Image Style Computation based on zoom, brightness, and contrast
const imageStyle = computed(() => ({
  transform: `scale(${zoomLevel.value})`,
  filter: `brightness(${brightness.value}%) contrast(${contrast.value}%)`,
}));

// Zoom In
const zoomIn = () => {
  if (zoomLevel.value < 3) { // Limiting the zoom level to 3x
    zoomLevel.value += 0.1;
  }
};

// Zoom Out
const zoomOut = () => {
  if (zoomLevel.value > 0.5) { // Limiting the zoom level to 0.5x
    zoomLevel.value -= 0.1;
  }
};

// Crop Image (Placeholder)
const cropImage = () => {
  // Cropping functionality can be added using canvas or a library like 'cropperjs'
  console.log('Crop Image');
};

// Adjust Brightness
const adjustBrightness = () => {
  brightness.value = brightness.value === 100 ? 120 : 100; // Toggle brightness
};

// Adjust Contrast
const adjustContrast = () => {
  contrast.value = contrast.value === 100 ? 120 : 100; // Toggle contrast
};
</script>

<style scoped>

.image-controls {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adds spacing between buttons */
  justify-content: center; /* Centers buttons horizontally */
  margin-top: 20px; /* Adds space above the button group */
}

.image-manipulation {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.image-container {
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
}

.image-preview {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.image-controls button {
  margin-right: 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.image-controls button:hover {
  background-color: #0056b3;
}
</style>
