<template>
    <div class="container">
        <div class="header">
            <h1>Grid's work</h1>
            <v-breadcrumbs :items="['Dashboard', 'Calendars', 'Grids Work']"></v-breadcrumbs>
        </div>
        <div class="calendar">
            <DxScheduler
                time-zone="America/Los_Angeles"
                :data-source="dataSource"
                :current-date="currentDate"
                :views="views"
                :height="580"
                :cell-duration="30"
                :start-day-hour="6"
                :end-day-hour="24"
                :groups="groups"
                :first-day-of-week="0"
                current-view="timelineDay"
            >
                <DxResource
                    :allow-multiple="true"
                    :data-source="resourcesData"
                    :use-color-as-default="true"
                    field-expr="ownerId"
                    label="Owner"
                />
                <DxResource
                :allow-multiple="false"
                :data-source="priorityData"
                field-expr="priority"
                label="Priority"
                />
            </DxScheduler>
        </div>
    </div>
</template>


<script setup> 
import { DxScheduler, DxResource } from 'devextreme-vue/scheduler';
import { data, priorityData, resourcesData } from '../Data/data.js';


const views = ['timelineDay', 'timelineWeek', 'timelineWorkWeek', 'timelineMonth']
const groups = ['priority']
const dataSource = data
const currentDate = new Date()

</script>


<style scoped>
    .container {
        padding: 1rem;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
    .calendar {
        padding: 2rem 0 0 0;
    }
</style>