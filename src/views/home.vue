<template>
    <div class="home">
        <h1>Welcome to My Portfolio Website</h1>
        <p>Explore my work and projects.</p>
        <router-link to="/skeleton">Go to Portfolio Page</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

a {
    font-size: 1.2em;
    color: #42b983;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>