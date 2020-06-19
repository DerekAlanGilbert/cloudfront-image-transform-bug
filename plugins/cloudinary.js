import Vue from 'vue'
import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'homie-inc-dev',
    secure: true,
    privateCdn: true,
    secureDistribution: `d1g8ttc205xk7v.cloudfront.net/homie-inc-dev/`,
  },

  components: {
    'cloudfront-transformation': CldTransformation,
    'cloudfront-image': CldImage,
  },
})
