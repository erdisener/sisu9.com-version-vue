<template>
 
<Lang />
<Header />
<Banner />
<About />
<Services /> 
<Referances /> 
<Contact /> 
</template>

<script>



import Lang from './components/Lang.vue'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Referances from './components/Referances.vue'
import Contact from './components/Contact.vue'



export default {
  name: 'App',
  data() {
        return {
            lang: "en"
        }
    },
    
  components: {
    Lang,
    Header,
    Banner,
    About,
    Services,
    Referances,
    Contact,
  }
}





</script>