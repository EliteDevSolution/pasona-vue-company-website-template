<template>
    <div>
        <Banner></Banner>
        <Partner></Partner>
        <Solutions></Solutions>
        <About></About>
        <Services></Services>
        <Funfacts></Funfacts>
        <Projects></Projects>
        <Pricing></Pricing>
        <Feedback></Feedback>
        <Blog></Blog>
        <Trial></Trial>
    </div>
</template>

<script>
import Banner from './ai-machine-learning/Banner';
import Partner from './ai-machine-learning/Partner';
import Solutions from './ai-machine-learning/Solutions';
import About from './ai-machine-learning/About';
import Services from './ai-machine-learning/Services';
import Funfacts from './ai-machine-learning/Funfacts';
import Projects from './ai-machine-learning/Projects';
import Pricing from './ai-machine-learning/Pricing';
import Feedback from './ai-machine-learning/Feedback';
import Blog from './ai-machine-learning/Blog';
import Trial from './ai-machine-learning/Trial';
export default {
    name: 'AiMachineLearning',
    components: {
        Banner,
        Partner,
        Solutions,
        About,
        Services,
        Funfacts,
        Projects,
        Pricing,
        Feedback,
        Blog,
        Trial
    }
}
</script>