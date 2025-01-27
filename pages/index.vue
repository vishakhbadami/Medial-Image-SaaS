<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold">Medical Image Viewer</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div class="card p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold">Image Manipulation</h3>
        <p class="text-sm">Manipulate images with zoom, crop, brightness, and contrast.</p>
        <ImageManipulation />
      </div>
      <div class="card p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold">DICOM Viewer</h3>
        <p class="text-sm">Upload and view DICOM images with metadata.</p>
        <DicomViewer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageManipulation from '~/components/ImageManipulation.vue';
import DicomViewer from '~/components/DicomViewer.vue';
</script>

<style scoped>
.container {
  padding: 20px;
}

.card {
  background-color: #f8f8f8;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
