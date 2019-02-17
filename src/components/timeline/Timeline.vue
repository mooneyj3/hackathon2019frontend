<template>
    <v-timeline>
        <v-timeline-item
                v-for="(year, i) in myHistory"
                :key="i"
                :color="year.color"
                small
        >
      <span
              slot="opposite"
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.datetime"
      ></span>
            <div class="py-3">
                <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
                <div>
                    {{year.story}}
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name : "Timeline",
        props: {
            myHistory: {
                type: Array,
                required: true}}
        // data: () => ({
        //     years: [
        //         {
        //             color: 'cyan',
        //             year: '1960'
        //         },
        //         {
        //             color: 'green',
        //             year: '1970'
        //         },
        //         {
        //             color: 'pink',
        //             year: '1980'
        //         },
        //         {
        //             color: 'amber',
        //             year: '1990'
        //         },
        //         {
        //             color: 'orange',
        //             year: '2000'
        //         }
        //     ]
        // })
    }
</script>

<style scoped>

</style>
