<template>
    <div>
        <div class="card-container">
            <Card></Card>
        </div>
        <div class="timeline-container">
            <Timeline></Timeline>
        </div>
        </div>
</template>

<script>
    import Timeline from "../timeline/Timeline";
    import Card from "../cards/Card";
    export default {
        name: "ViewCard",
        components: {Timeline, Card}
    }
</script>

<style scoped>
    .card-box{
        margin-top:3%;
    }
    .timeline-container{
        margin-left:5%;
        margin-right:5%;
    }

</style>
