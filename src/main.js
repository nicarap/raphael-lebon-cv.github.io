import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBurger,
    faCertificate,
    faChevronDown,
    faChevronLeft, faChevronRight,
    faChevronUp,
    faCode,
    faEnvelope,
    faLocationDot,
    faPhone,
    faUserGraduate,
    faUserTie
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faLinkedinIn, faPhone, faEnvelope, faLocationDot, faLinkedin, faUserGraduate, faCode, faUserTie, faBurger, faCertificate)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
