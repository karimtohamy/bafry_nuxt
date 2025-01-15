<template>
    <div id="map"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, defineProps } from 'vue';
  
  const props = defineProps({
      lat: Number,
      long: Number,
      add: String
  });
  
  let mapInstance = null;
  let marker = null;
  
  const zoom = ref(window.outerWidth <= 768 ? 10 : 13);
  
  onMounted(() => {
      if (process.client) {
          // Dynamically import Leaflet to ensure it only runs on the client side
          import('leaflet').then(L => {
              // Initialize map and add OpenStreetMap tiles
              mapInstance = L.map('map').setView([props.lat, props.long], zoom.value);
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 19,
              }).addTo(mapInstance);
  
              // Add the marker and popup
              marker = L.marker([props.lat, props.long]).addTo(mapInstance)
                  .bindPopup(props.add)
                  .openPopup();
          });
      }
  });
  </script>
  
  <style scoped>
  #map {
      aspect-ratio: 1/1;
      z-index: 1;
  }
  </style>
  