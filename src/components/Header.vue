<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
     <header class="header  d-flex flex-column align-items-center justify-content-center">
            <nav class="d-flex flex-row align-item-center justify-content-between ">
                <div class="nav-logo">
                    <img src="/src/assets/icons/graffiti png 1.png" alt="">
                </div>

                <div class="nav-links d-flex align-items-center justify-content-center">
                   <RouterLink class="nav-link" to="/portfolio" exact-active-class="active-class">Portfolio</RouterLink>
                   <RouterLink class="nav-link" to="/case-studies" exact-active-class="active-class">Case Studies</RouterLink>
                   <RouterLink class="nav-link" to="/graphics" exact-active-class="active-class">Graphics </RouterLink>
                </div>

                <div class="nav-button d-flex align-items-center">
                    <RouterLink class="nav-link" to="/contact">
                    <button>
                    Contact
                </button>
                </RouterLink>
                </div>
            </nav>


            <div class="trusted-companies d-flex flex-column align-items-center ">
                <h3>Trusted by</h3>
                <img src="/src/assets/img/companies-cluster.png" alt="">
            </div>
        </header>
</template>