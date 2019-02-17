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
              :class="`headline font-weight-bold grey--text`"
              v-text="moment(year.datetime).format('YYYY-MM-DD')">

      ></span>
            <div class="py-3">
                <h4 :class="`headline font-weight-light mb-3 ${year.color}--text`">
                    <i class="material-icons" style="color:grey">location_on</i>
                    {{year.location}}
                </h4>
                <p style="color:transparent">This is a dummy line that is needed to be removed. The problem with width </p>
                <h3>
                    {{year.story}}
                </h3>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name : "Timeline",
        props: ['myHistory'],
        computed: {
            sortedItems: function () {
                this.myHistory.sort((a, b) => {
                    return new Date(a.datetime) - new Date(b.datetime);
                });
                return this.myHistory;
            }
        }
            // sentiment: function () {
            //     var sentiment = "";
            //     sent = {
            //         'num_made_my_day' : 'Made my day',
            //         'num_what_a_kind_jesture' : 'Kind gesture',
            //         'num_made_me_feel_loved' : 'Made me feel loved',
            //         'num_restored_my_faith_in_humanity' :'Restored my faith',
            //         'num_changed_my_life' : 'Changed my life',
            //         'num_meh ' : 'Meh'}
            //
            //     if ((rate & 0x1) === 0x1) {
            //         sentiment =  sent["num_meh"];
            //     }
            //     if ((rate & 0x2) === 0x2) {
            //         sentiment =  sent["num_what_a_kind_jesture"];
            //     }
            //     if ((rate & 0x4) === 0x4) {
            //         sentiment = sent["num_made_me_feel_loved"];
            //     }
            //     if ((rate & 0x8) === 0x8) {
            //         sentiment =  sent["num_restored_my_faith_in_humanity"];
            //     }
            //     if ((rate & 0x8) === 0x8) {
            //         sentiment =  sent["num_changed_my_life"];
            //     }
            //     if ((rate & 0x10) === 0x10) {
            //         sentiment =  sent["num_made_my_day"];
            //     }
            //
            //     return sentiment;
            // }
    }
</script>

<style scoped>

</style>
