<template>
  <div class="dicom-viewer">
    <h4 class="text-xl font-semibold mb-4">View DICOM Image</h4>

    <!-- File Input -->
    <input
      type="file"
      @change="handleFileUpload"
      accept=".dcm"
      class="mb-4"
    />

    <!-- DICOM Image & Metadata -->
    <div v-if="dicomImage" class="dicom-image-container">
      <img :src="dicomImage" alt="DICOM Image" class="dicom-image" />
      <div class="metadata mt-4">
        <p><strong>Patient Name:</strong> {{ metadata.patientName || "N/A" }}</p>
        <p><strong>Study Date:</strong> {{ metadata.studyDate || "N/A" }}</p>
        <p><strong>Modality:</strong> {{ metadata.modality || "N/A" }}</p>
      </div>
    </div>

    <!-- Error Message -->
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State variables
const dicomImage = ref<string | null>(null); // For displaying the image
const metadata = ref({
  patientName: '',
  studyDate: '',
  modality: ''
}); // Metadata placeholder
const error = ref<string | null>(null); // Error message

// Handle DICOM file upload
const handleFileUpload = async (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput?.files ? fileInput.files[0] : null;

  if (file) {
    try {
      error.value = null;

      // Simulate DICOM processing
      const isDicomFile = file.name.endsWith('.dcm'); // Check if the file extension is .dcm
      if (!isDicomFile) {
        throw new Error('Invalid file format. Please upload a valid DICOM (.dcm) file.');
      }

      // Display the image (assuming it's a PNG image extracted from the DICOM file)
      dicomImage.value = URL.createObjectURL(file);

      // Populate metadata (mocked for now)
      metadata.value = {
        patientName: 'John Doe', // Replace with actual parsed data
        studyDate: '2025-01-01', // Replace with actual parsed data
        modality: 'CT' // Replace with actual parsed data
      };
    } catch (err) {

      dicomImage.value = null;
      metadata.value = {
        patientName: '',
        studyDate: '',
        modality: ''
      };
    }
  }
};
</script>

<style scoped>
.dicom-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.dicom-image-container {
  max-width: 100%;
  margin-top: 20px;
}

.dicom-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.metadata {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.metadata p {
  margin: 0;
}

input[type="file"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.text-red-500 {
  color: #e53e3e;
}
</style>
