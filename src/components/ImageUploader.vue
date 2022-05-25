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
      class="w-40 h-12 py-7 border rounded-md capitalize flex justify-center items-center gap-2"
      @click="openUploader"
      :class="{ 'bg-green-400 text-white': uploaded }"
      :disabled="uploaded"
    >
      {{uploaded?'Uploaded':'Upload'}} Image As Base64
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
  data() {
    return {
      uploaded: false,
    };
  },
  methods: {
    openUploader() {
      this.$refs.uploader.click();
    },
    uploadPreviewImage() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.$emit("uploadedPreview", reader.result);
        this.uploaded = true;
      });
      reader.readAsDataURL(this.$refs.uploader.files[0]);
    },
  },
};
</script>