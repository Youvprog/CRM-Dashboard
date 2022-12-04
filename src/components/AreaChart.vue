<template>
    <apexchart width="500" type="area" :options="options" :series="series"></apexchart>
</template>

<script setup>
    const series = [
        {
            name: 'series-2',
            data: [45, 52, 38, 45, 19, 23, 2]
        }
    ]
    const options = {
        dataLabels: {
            enabled: false
        },
        fill:  {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan"
            ]
        }
    }
</script>