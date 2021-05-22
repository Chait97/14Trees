<template>
    <Layout>
        <div class="container full-page-generic">
            <h1 class="title-text"> Pledge Now</h1>
            <div class="mx-4 md:pt-16">
              <payment-form/>
            </div>
            <span>Users: </span>{{users}}
        </div>
    </Layout>
</template>


<script>
import PaymentForm from "~/components/Partials/PaymentForm.vue";
import Repository from "~/repository/RepositoryFactory";

export default {
  components: {
    PaymentForm,
  },
  data() {
    let users = []
    return { 
      users
    }
  },
  metaInfo() {
    return {
      title: "Pledge" 
    };
  },
  async mounted() {
    const userRepository = Repository.get("user");
    this.users = await userRepository.getUserFromEmail('chai.bhagwat@gmail.com');
  }
};
</script>