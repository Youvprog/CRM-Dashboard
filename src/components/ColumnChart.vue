<template>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
</template>

<script setup>
    const series = [{
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }]

    const options = {
        // dataLabels: {
        //   enabled: false
        // },
        xaxis:{
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
        },
        legend: {
          show: false
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            distributed: true,
          }
        },

    }
</script>