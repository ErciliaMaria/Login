<script setup>

//import Login from './views/Login.vue'

</script>

<template>
        <h1>Hello!</h1>

        <nav>
                <RouterLink to="login"> Go to login</RouterLink>
                <RouterLink to="table"> Go to table</RouterLink>
        </nav>

        <main>
        <RouterView />
        </main>
</template>
<script>
       
</script>





