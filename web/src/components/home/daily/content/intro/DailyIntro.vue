<template>
    <div class="daily-intro d-flex flex-column">
        <intro-title :introTitleContent="dailyIntroContent.introTitle"></intro-title>
        <intro-info :introInfoContent="dailyIntroContent.introInfo"></intro-info>
        <intro-button :introButtonContent="dailyIntroContent.introButton"></intro-button>
    </div>
</template>

<script>
// components
import introTitle from './content/IntroTitle'
import introInfo from './content/IntroInfo'
import introButton from './content/IntroButton'

export default {
    props:["dailyIntroContent"],
    data() {
        return {
            
        }
    },
    components: {
        "intro-title":introTitle,
        "intro-info":introInfo,
        "intro-button":introButton,
    }
}
</script>

<style lang="scss" scoped>
</style>