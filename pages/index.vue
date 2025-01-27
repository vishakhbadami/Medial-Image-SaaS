<template>
  <div class="container">
    <div class="box">
      <div class="header">
        <h1>Medical Image Viewer</h1>
        <p class="subtitle">Easily upload and manipulate medical images</p>
      </div>
      <div class="grid">
        <!-- Image Manipulation Card -->
        <div class="card">
          <h3>Image Manipulation</h3>
          <p>Manipulate images with zoom, crop, brightness, and contrast.</p>
          <ImageManipulation />
        </div>
        <!-- DICOM Viewer Card -->
        <div class="card">
          <h3>DICOM Viewer</h3>
          <p>Upload and view DICOM images with metadata.</p>
          <DicomViewer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageManipulation from '~/components/ImageManipulation.vue';
import DicomViewer from '~/components/DicomViewer.vue';
</script>

<style scoped>
/* Apply futuristic animated background to the whole page */
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: radial-gradient(circle, rgba(85, 39, 150, 0.8), rgba(255, 77, 124, 0.7), rgba(0, 255, 255, 0.6), rgba(0, 212, 255, 0.4));
  animation: moveBackground 10s ease infinite, glowEffect 4s infinite alternate;
  filter: blur(8px);
  position: fixed;
  width: 100%;
}

/* Container Styling */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  position: relative;
  z-index: 1;
}

/* Box Styling */
.box {
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent background for futuristic feel */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

/* Header Styling */
.header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 16px;
}

/* Grid for Cards */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Card Styling */
.card {
  padding: 20px;
  border-radius: 16px;
  background-color: #1c1c1c; /* Dark background for a modern look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
  cursor: pointer;
}

.card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  background-color: rgba(255, 77, 124, 0.1); /* Glow effect on hover */
}

.card h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #ffffff;
}

.card p {
  font-size: 1rem;
  color: #ddd;
}

/* Keyframes for Background Animation */
@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 300% 300%;
  }
}

@keyframes glowEffect {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}
</style>
