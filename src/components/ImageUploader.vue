<template>
  <div className="p-2">
    <input
      type="file"
      :accept="accept"
      id="uploader"
      ref="uploader"
      class="hidden"
      @change="uploadPreviewImage"
    />
    <button
      className="w-32 h-12 border rounded-md capitalize flex justify-center items-center gap-2"
      @click="openUploader"
    >
      Upload Image
    </button>
  </div>
</template>

<script>

export default {
  props: {
    accept: {
      type: String,
      default: "",
    },
  },
  methods: {
    openUploader() {
      this.$refs.uploader.click();
    },
    uploadPreviewImage() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.$emit("uploadedPreview", reader.result);
      });
      reader.readAsDataURL(this.$refs.uploader.files[0]);
    },
  },
};
</script>