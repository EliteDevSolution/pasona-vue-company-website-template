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
import Banner from './machine-learning/Banner';
import Partner from './machine-learning/Partner';
import Solutions from './machine-learning/Solutions';
import About from './machine-learning/About';
import Services from './machine-learning/Services';
import Funfacts from './machine-learning/Funfacts';
import Projects from './machine-learning/Projects';
import Pricing from './machine-learning/Pricing';
import Feedback from './machine-learning/Feedback';
import Blog from './machine-learning/Blog';
import Trial from './machine-learning/Trial';
export default {
    name: 'MachineLearning',
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