<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <h3 class="text-xl font-bold text-center mb-3">Base64 Preview Image</h3>
      <div class="mx-10 rounded-md border w-72 h-64">
        <img :src="image" alt="" class="object-contain w-72 h-64" v-if="image" />
      </div>
      <div class="flex justify-center mt-3">
        <image-uploader @uploadedPreview="uploadedPreview" />
      </div>
    </div>
    <div class="flex items-center">
       <button
          class="w-36 h-12 border rounded-md capitalize flex justify-center items-center gap-2"
          @click="uploadToServer"
          :class="{ 'bg-green-400 text-white' :!!uploadedImage}"
          :disabled="!!uploadedImage"
        >
          {{uploadedImage ? "Uploaded": "Upload" }} to server
        </button>
    </div>
    <div>
      <h3 class="text-xl font-bold text-center mb-3">response image</h3>
      <div class="mx-10 rounded-md border w-72 h-64">
        <img :src="responseImage" alt="" class="object-contain w-72 h-64" v-if="responseImage"/>
      </div>
      <div class="flex justify-center mt-3">
        <button
          class="w-36 h-12 border rounded-md capitalize flex justify-center items-center gap-2"
          @click="retreiveImageFromServer"
          :class="{ 'bg-green-400 text-white' :!!responseImage}"
          :disabled="!!responseImage"
        >
          {{responseImage ? "Retrieved": "Retrieve" }} image from server
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploader from "./components/ImageUploader.vue";

export default {
  name: "App",
  components: {
    ImageUploader,
  },
  inject: ["$axios"],
  data() {
    return {
      uploadedImage:"",
      image: "",
      responseImage: "",
    };
  },
  methods: {
    async uploadedPreview(base64) {
      this.image = base64; //preview base64 image on client side
    },
    async uploadToServer() {
      const res = await this.$axios.post("/api/upload", {
        base64: this.image,
      });
      this.uploadedImage=res.data//store the response server image
    },
    retreiveImageFromServer(){
      this.responseImage=this.uploadedImage//show the retrieve Image on client
    }
  },
};
</script>
