<template>
    <!-- Start Domain Search Area -->
    <section class="domain-search-area ptb-80">
        <div class="container">
            <div class="domain-search-content">
                <h2>Find Your Best Domain Name</h2>
                <form>
                    <input type="text" class="form-control" name="domain-search" id="domain-search" placeholder="Search domain name here">

                    <div class="domain-select">
                        <select class="form-control">
                            <option>.com</option>
                            <option>.net</option>
                            <option>.xyz</option>
                            <option>.tech</option>
                            <option>.club</option>
                            <option>.space</option>
                            <option>.global</option>
                            <option>.edu</option>
                        </select>
                    </div>

                    <button type="submit">Search</button>
                </form>

                <ul class="domain-price">
                    <li>.com<br>$ 9.88</li>
                    <li>.net<br>$ 7.88</li>
                    <li>.xyz<br>$ 3.88</li>
                    <li>.tech<br>$ 5.28</li>
                    <li>.club<br>$ 2.38</li>
                    <li>.space<br>$ 4.98</li>
                    <li>.global<br>$ 8.99</li>
                    <li>.edu<br>$ 6.88</li>
                </ul>
            </div>
        </div>
    </section>
    <!-- End Domain Search Area -->
</template>

<script>
export default {
    name: 'DomainSearch'
}
</script>