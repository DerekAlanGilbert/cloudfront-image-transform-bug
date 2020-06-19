<template>
  <div class="container">
    <client-only>
      <!-- this requests two images. (sometimes?) -->
      <cloudfront-image
        public-id="development/s0amh1pzkxzzeg5nhdnk"
        alt="Cloudinary image"
        class="cursor-pointer"
      >
        <cloudfront-transformation
          height="259"
          width="460"
          crop="fill"
          fetch_format="auto"
          quality="auto:best"
          dpr="auto"
        />
      </cloudfront-image>

      <!--
        This ones works as expected.
        <cloudfront-image
        public-id="development/s0amh1pzkxzzeg5nhdnk"
        height="259"
        width="460"
        crop="fill"
        fetch_format="auto"
        quality="auto:best"
        dpr="auto"
        alt="Cloudinary image"
        class="cursor-pointer"
      >
      </cloudfront-image> -->
    </client-only>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
