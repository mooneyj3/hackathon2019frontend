<template>
    <div>
        <!-- Card for form -->
        <v-card v-if="show_form" max-width="600" min-width="400" >
            <v-card-title primary-title >
                <div >
                    <h3 class="headline mb-0">Share Your Experience</h3>
                    <StoryForm></StoryForm>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>

        <!-- Card for failed search -->
        <v-card v-if="show_search">
            <v-card-title primary-title>
                <div >
                    <h3 class="headline mb-0">Search for a card</h3>
                    <div v-if="show_not_found">Uh oh, not found</div>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import StoryForm from "../forms/StoryForm";
    export default {
        name: "TellStory.vue",
        components: {StoryForm},
        data() {
            return {
                query: this.$route.query,
                show_form: false,
                show_not_found: false,
                show_search: false,
                card_name: "",
                card: "",
            }
        },
        mounted: {},
        computed: {},
        methods: {
            getCard() {
                let self = this;

                // check for query in url
                if (!('name' in this.query)) {
                    this.show_form = true;
                }
                else {
                    axios.get(this.$searchAPI, {
                        params: {
                            cardName: self.query.name,
                            oneOnly: true,
                        }
                    })
                        .then(function(response) {
                            if (response.data.length !== 1) {
                                self.show_not_found = true;
                            }
                            self.show_form = true;
                            self.card_name = self.query.name;
                        })
                        .catch(function(error) {
                            self.show_not_found = true;
                        })
                }

            }
        },
        beforeMount(){
            this.getCard();
        }
    }
</script>

<style scoped>

</style>