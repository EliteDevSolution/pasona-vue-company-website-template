<template>
    <div class="col-lg-6 col-md-12">
        <div class="billing-details">
            <h3 class="title">Billing Details</h3>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                    <label>
                        Country <span class="required">*</span>
                    </label>
                        <div class="select-box">
                            <select class="form-control">
                                <option value="5">United Arab Emirates</option>
                                <option value="1">China</option>
                                <option value="2">United Kingdom</option>
                                <option value="0">Germany</option>
                                <option value="3">France</option>
                                <option value="4">Japan</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>First Name <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>Last Name <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                        <label>Address <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                        <label>Town / City <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>State / County <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>Postcode / Zip <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>Email Address <span class="required">*</span></label>
                        <input type="email" class="form-control">
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                        <label>Phone <span class="required">*</span></label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="create-an-account">
                        <label class="form-check-label" for="create-an-account">Create an account?</label>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="ship-different-address">
                        <label class="form-check-label" for="ship-different-address">Ship to a different address?</label>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" class="form-control"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderForm'
}
</script>