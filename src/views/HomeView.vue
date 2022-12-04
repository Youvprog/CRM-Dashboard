<script setup>
import CardInfo from '../components/CardInfo.vue';
import LineChart from '../components/LineChart.vue';
import AreaChart from '../components/AreaChart.vue';
import DonutChar from '../components/DonutChart.vue';
import ColumnChart from '../components/ColumnChart.vue';



const infos = [{name: 'Total Leads',numbers: 10000,},{name: 'New Leads',numbers: 5000,}, 
                {name: 'Leads Won',numbers: 3500,},{name: 'Leads Lost',numbers: 500}]



</script>

<template>
    <div class="container">
        <div class="card-container">
            <CardInfo v-for="data in infos" :data="data"/>
        </div>

        <div class="chart-container">
            <div class="charts">
                <LineChart/>
            </div>
            <div class="charts">
                <AreaChart/>
            </div>
            <div class="charts">
                <DonutChar/>
            </div>
            <div class="charts">
                <ColumnChart/>
            </div>
            
        </div>

    </div>
</template>

<style scoped>
     .container {
        padding: 2rem 3rem;
    }
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        place-items: center;
        gap: 2rem;
    }
    .chart-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    .charts {
        display: flex;
        justify-content: center;
        margin: 2rem 0 0 0;
        background-color: #fff;
        border-radius: 5px;
        padding: 2rem 0 2rem 0;
    }
</style>
