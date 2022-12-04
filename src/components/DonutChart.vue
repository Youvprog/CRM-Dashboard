<template>
<apexchart width="500" type="donut" :options="options" :series="series"></apexchart>

</template>


<script setup>
    const options = {}
    const series = [44, 55, 41, 17, 15]
</script>