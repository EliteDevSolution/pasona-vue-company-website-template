<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom navbar-style-three', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/img/logo.png" alt="logo" />
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav">
                            <li class="nav-item">
                                <a href="#" class="nav-link active">
                                    Home <feather type="chevron-down"></feather>
                                </a>

                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">IT Startup</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/developer" class="nav-link">Developers</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/web-hosting" class="nav-link">Web Hosting</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/repair-center" class="nav-link">Repair Center</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/iot" class="nav-link">IoT</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/ai-machine-learning" class="nav-link">AI & Machine Learning</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/machine-learning" class="nav-link">Machine Learning</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/digital-agency" class="nav-link">Digital Agency</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">About <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/about-style-one" class="nav-link">About Style 1</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/about-style-two" class="nav-link">About Style 2</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/about-style-three" class="nav-link">About Style 3</router-link>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#" class="nav-link">Pages <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Features</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/features" class="nav-link">Features</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/feature-details" class="nav-link">Features Details</router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Services</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/service-style-one" class="nav-link">Services Style 1</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-style-two" class="nav-link">Services Style 2</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-style-three" class="nav-link">Services Style 3</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/service-style-four" class="nav-link">Services Style 4</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/service-style-five" class="nav-link">Services Style 5</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-details" class="nav-link">Services Details</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li class="nav-item"><a href="#" class="nav-link">Project</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/project-style-one" class="nav-link">Project Style 1</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/project-style-two" class="nav-link">Project Style 2</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/project-details" class="nav-link">Project Details</router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">Team</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/pricing" class="nav-link">Pricing</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">FAQ</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/coming-soon" class="nav-link">Coming Soon</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/not-found" class="nav-link">404 Error</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Blog <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/blog-grid" class="nav-link">Blog Grid</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar" class="nav-link">Blog Right Sidebar</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-grid-two" class="nav-link">Blog Grid 2</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar-two" class="nav-link">Blog Right Sidebar 2</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-grid-three" class="nav-link">Blog Grid 3</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar-three" class="nav-link">Blog Right Sidebar 3</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/blog-details" class="nav-link">Blog Details</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="/contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <router-link to="/cart" class="cart-wrapper-btn">
                            <feather type="shopping-cart"></feather>
                            <span>{{shoppingCart.length}}</span>
                        </router-link>
                        <router-link to="/contact" class="btn btn-gradient">Contact Us</router-link>
                    </div>

                </nav>
            </div> 
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
export default {
    name: 'HeaderFour',
    data(){
        return {
            isSticky: false
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 300){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },

    computed: {
        shoppingCart(){
            return this.$store.state.cart;
        }
    }
}
</script>