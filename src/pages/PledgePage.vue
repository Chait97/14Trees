<template>
    <Layout>
        <div class="container full-page-generic">
            <h1 class="title-text"> Pledge Now</h1>
            <div class="mx-4 md:pt-16">
              <payment-form/>
            </div>
        </div>
    </Layout>
</template>


<script>
import PaymentForm from "~/components/Partials/PaymentForm.vue";

export default {
  components: {
    PaymentForm,
  },
  metaInfo() {
    return {
      title: "PledgePage" 
    };
  },
  mounted() {
  }
};
</script>