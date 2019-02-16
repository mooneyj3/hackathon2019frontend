<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div>
                            <i class="material-icons" style="color:darkred">location_on</i>
                                Origin: Washington
                                Last seen: Portland
                        </div>
                        <div>#pass : </div>
                        <ul style="list-style-type:disc;">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </v-card-title>

                <!--<v-card-actions>-->
                    <!--<v-btn flat color="orange">Share</v-btn>-->
                    <!--<v-btn flat color="orange">Explore</v-btn>-->
                <!--</v-card-actions>-->
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name : "Card",
        data () {
            return {
                card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
            }
        }
    }
</script>
