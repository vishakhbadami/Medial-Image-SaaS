<template>
  <div class="dicom-viewer">
    <h4 class="text-xl font-semibold">View DICOM Image</h4>
    <input type="file" @change="handleFileUpload" accept=".dcm" />
    <div v-if="dicomImage" class="dicom-image-container">
      <img :src="dicomImage" alt="DICOM Image" class="dicom-image" />
      <div class="metadata">
        <p><strong>Patient Name:</strong> {{ metadata.patientName }}</p>
        <p><strong>Study Date:</strong> {{ metadata.studyDate }}</p>
        <p><strong>Modality:</strong> {{ metadata.modality }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// DICOM image and metadata
const dicomImage = ref<string | null>(null);
const metadata = ref({
  patientName: '',
  studyDate: '',
  modality: ''
});

// Function to handle file upload
const handleFileUpload = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput?.files ? fileInput.files[0] : null;

  if (file) {
    // Process DICOM file (this is an example, real DICOM parsing should be done here)
    // Here we assume that DICOM image is a PNG for simplicity
    dicomImage.value = URL.createObjectURL(file);
    metadata.value = {
      patientName: 'John Doe',
      studyDate: '2025-01-01',
      modality: 'CT'
    };
  }
};
</script>

<style scoped>
.dicom-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dicom-image-container {
  margin-top: 20px;
}

.dicom-image {
  max-width: 100%;
  height: auto;
}

.metadata {
  margin-top: 16px;
}

.metadata p {
  font-size: 14px;
}
</style>
