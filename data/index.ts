export const navbarData = {
  homeTitle: 'Anggi Blog',
}

export const footerData = {
  author: 'Anggi Nuraziz',
  aboutAuthor: 'Halo, saya Anggi, seorang Freelancer, Software Engineer sekaligus penggemar teknologi terbaru di bidang development dan lainnya.',
  authorInterest: 'Jika Anda punya ide menarik, baik open source atau berbayar, mari terhubung.',
  aboutTheSite: 'Blog ini dibangun dari template open source menggunakan Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon serta dihosting di Vercel.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Dapatkan informasi seputar Web Development, Teknologi Terbaru, serta Linux',
}

export const blogsPage = {
  title: 'All Blog',
  description: 'Di sini Anda akan menemukan semua posting blog yang saya tulis & publikasikan di situs ini.',
}

export const categoryPage = {
  title: 'Kategori',
  description: 'Kategori ini dihasilkan dari semua tag yang disebutkan dalam postingan blog yang berbeda',
}

export const aboutPage = {
  title: 'Anggi Nuraziz',
  description: 'Freelancer, Software Engineer',
  aboutMe: '"Perkenalkan, saya Anggi Nuraziz. Sebagai seorang software engineer dan profesional freelance, saya berfokus pada pengembangan web. Dengan pengalaman dan semangat kreatif saya, saya siap untuk membantu mewujudkan proyek-proyek Anda menjadi kenyataan."',
}
// Berisi data SEO yang ditampilkan
export const seoData = {
  description: 'Anggi Dev Blog menyediakan informasi seputar Web Development, Teknologi Terbaru, serta Ekosistem Linux ',
  ogTitle: 'Sharing Informasi seputar Web Development, Teknologi Terbaru, serta Ekosistem Linux',
  twitterDescription: 'Sharing Informasi seputar Web Development, Teknologi Terbaru, serta Ekosistem Linux',
  image: 'https://mega.nz/file/zmQURA7A#rIk_lkfmutkOO7ePy4mN6cC1gjoLQXxfcM99W7le3Kk',
  mySite: 'https://anggi.dev/',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: '@anggidev' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
