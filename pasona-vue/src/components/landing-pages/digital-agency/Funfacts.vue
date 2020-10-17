<template>
    <!-- Start Fun Facts Area -->
    <section class="funfacts-area ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>We completed 1500+ Projects Yearly Successfully & counting</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-3 col-6 col-sm-3">
                    <div class="funfact">
                        <h3><span class="odometer">
                            <IOdometer
                                class="odometer"
                                :value="downloaded"
                                :duration="200"
                            />
                        </span>+</h3>
                        <p>Downloaded</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6 col-sm-3">
                    <div class="funfact">
                        <h3><span class="odometer">
                            <IOdometer
                                class="odometer"
                                :value="feedback"
                                :duration="200"
                            />    
                        </span>+</h3>
                        <p>Feedback</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6 col-sm-3">
                    <div class="funfact">
                        <h3><span class="odometer">
                            <IOdometer
                                class="odometer"
                                :value="workers"
                                :duration="200"
                            />    
                        </span>+</h3>
                        <p>Workers</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 col-6 col-sm-3">
                    <div class="funfact">
                        <h3><span class="odometer">
                            <IOdometer
                                class="odometer"
                                :value="contributors"
                                :duration="200"
                            />
                            </span>+</h3>
                        <p>Contributors</p>
                    </div>
                </div>
            </div>

            <div class="contact-cta-box">
                <h3>Have any question about us?</h3>
                <p>Don't hesitate to contact us</p>
                <a href="#" class="btn btn-primary">Contact Us</a>
            </div>

            <div class="map-bg">
                <img src="../../../assets/img/map.png" alt="map">
            </div>
        </div>
    </section>
    <!-- End Fun Facts Area -->
</template>

<script>
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';

export default {
    name: 'Funfacts',
    data() {
        return {
            contributors: 111,
            workers: 70,
            feedback: 8,
            downloaded: 10
        }
    },
    mounted() {
        const that = this;
        setInterval(function() {
            that.contributors += 1;
        }, 3000);
        setInterval(function() {
            that.workers += 1;
        }, 5000);
        setInterval(function() {
            that.feedback += 1;
        }, 2000);
        setInterval(function() {
            that.downloaded += 1;
        }, 1000);
    },
    components: {
        IOdometer
    }
}
</script>