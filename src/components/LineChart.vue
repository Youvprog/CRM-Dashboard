<template>
    <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
</template>

<script setup>
    const options = {
        chart: {
            id: 'cuechart-example'
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    }
    const series = [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
</script>