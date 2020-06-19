<template>
  <div class="container">
    <client-only>
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
