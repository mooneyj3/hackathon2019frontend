<template>
    <v-form >
        <p>Share the story of how you received this card</p>
        <!--<v-checkbox v-for="item in impact"-->
                <!--v-model="checkbox"-->
                <!--v-validate="'required'"-->
                <!--:error-messages="errors.collect('checkbox')"-->
                <!--value="1"-->
                <!--label="item"-->
                <!--data-vv-name="checkbox"-->
                <!--type="checkbox"-->
                <!--required>-->
        <!--</v-checkbox>-->
        <v-textarea
                v-model="story"
                :error-messages="nameErrors"
                :counter="255"
                maxlength="255"
                full-width
                single-line
                label="Story"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-textarea>

    </v-form>
</template>

<script>
    export default {
        name: "StoryForm",
        data() {
            return {
                story: "",
                impact: {
                    made_day: "Made my day",
                    changed_life: "Changed my life",
                    restored_faith: "Restored my faith in humanity",
                    meh: "Meh",
                    kind_gesture: "What a kind gesture",
                    feel_loved: "Made me feel loved",
                },
                made_day: false,
                changed_life: false,
                restored_faith: false,
                meh: false,
                kind_gesture: false,
                feel_loved: false,
            }
        }
    }
</script>

<style scoped>

</style>