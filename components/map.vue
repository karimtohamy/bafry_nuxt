<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, ref, watch, defineProps } from 'vue';

const props = defineProps({
  lat: Number,
  long: Number,
  add: String,
});

let mapInstance = null;
let marker = null;

const zoom = ref(window.outerWidth <= 768 ? 10 : 13);

onMounted(() => {
  if (process.client) {
    import('leaflet').then((L) => {
      // Set up default icon paths to use the images from the public folder
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png', // Adjust if you saved a retina version
        iconUrl: '/marker-icon-2x.png',
        shadowUrl: '/marker-shadow.png',
      });

      // Initialize the map
      mapInstance = L.map('map').setView([props.lat, props.long], zoom.value);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapInstance);

      // Add the marker
      marker = L.marker([props.lat, props.long]).addTo(mapInstance)
        .bindPopup(props.add)
        .openPopup();
    });
  }

});

// Watch for prop changes and update the map and marker
watch(
  () => [props.lat, props.long, props.add],
  ([newLat, newLong, newAdd]) => {
    if (mapInstance && marker) {
      mapInstance.setView([newLat, newLong], zoom.value); // Update the map view
      marker.setLatLng([newLat, newLong]); // Update the marker position
      marker.setPopupContent(newAdd); // Update the popup content
    }
  }
);
</script>

<style scoped>
#map {

  aspect-ratio: 1 / 1;
  z-index: 1;
}
</style>