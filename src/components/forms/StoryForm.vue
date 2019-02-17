<template>
    <div>
        <div v-if="submit_error">
            <v-alert :value="true" :v-if="submit_error" type="error">
                Oops, looks like something went wrong submitting to our server!  Sorry about that. (err: {{ post_response }})
            </v-alert>
        </div>
        <v-form >
            <p>Share the story of how you received this card</p>
            <v-checkbox v-model="made_day.is_checked"     value="1" :label="made_day.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="changed_life.is_checked" value="1" :label="changed_life.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="restored_faith.is_checked" value="1" :label="restored_faith.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="meh.is_checked"            value="1" :label="meh.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="kind_gesture.is_checked"   value="1" :label="kind_gesture.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="feel_loved.is_checked"     value="1" :label="feel_loved.desc" data-vv-name="checkbox" type="checkbox" />
            <v-divider></v-divider>
            <v-textarea
                    v-model="story"
                    :counter="500"
                    maxlength="500"
                    full-width
                    single-line
                    label="Tell your story..."></v-textarea>
            <v-divider></v-divider>
        </v-form>
        <v-card-actions>
            <v-btn flat color="green" v-on:click="submitForm">Share</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: "StoryForm",
        props: ['card_name'],
        data() {
            return {
                story: "",
                made_day: {key: "made_day", is_checked: false, desc: "Made my day", bin_value: 32},
                changed_life: {key: "changed_life", is_checked: false, desc: "Changed my life", bin_value: 16},
                restored_faith: {key: "restored_faith", is_checked: false, desc: "Restored my faith in humanity", bin_value: 8},
                meh: {key: "meh", is_checked: false, desc: "Meh", bin_value: 1},
                kind_gesture:  {key: "kind_gesture", is_checked: false, desc: "What a kind gesture", bin_value: 2},
                feel_loved: {key: "feel_loved", is_checked: false, desc: "Made me feel loved", bin_value: 4},
                post_response: "",
                submit_error: false,
            }
        },
        methods: {
            onCheckboxChange(e) {
                console.log(e.target.name);
                // console.log(oldValue);
                // this.title = 'VALUE: ' + (newValue ? 'TRUE' : 'FALSE');
            },
            computeSentiment () {
                let sentiment = 0;
                if (this.made_day.is_checked) sentiment += this.made_day.bin_value;
                if (this.changed_life.is_checked) sentiment += this.changed_life.bin_value;
                if (this.restored_faith.is_checked) sentiment += this.restored_faith.bin_value;
                if (this.meh.is_checked) sentiment += this.meh.bin_value;
                if (this.kind_gesture.is_checked) sentiment += this.kind_gesture.bin_value;
                if (this.feel_loved.is_checked) sentiment += this.feel_loved.bin_value;
                return sentiment;
            },
            submitForm () {
                let self = this;

                let new_history = {
                    location: "ip-address",
                    sentiment: this.computeSentiment(),
                    datetime: new Date(),
                    story: this.story
                };

                console.log(this.story);

                axios.post(this.$submitAPI, {
                    name: this.card_name,
                    history: JSON.stringify(new_history),
                })
                    .then(function (response) {
                        if (response.status !== 200) {
                            self.submit_error = true;
                            self.post_response = error;
                        }
                        else {
                            self.post_response = response.status;
                            self.$router.push("/card/" + self.card_name);
                        }
                    })
                    .catch(function (error) {
                        self.submit_error = true;
                        self.post_response = "server";
                    })

            }
        }

    }
</script>

<style scoped>

</style>