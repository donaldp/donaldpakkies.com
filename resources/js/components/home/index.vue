<template>
  <div>
    <div class="right-col-block blocks">
      <intro></intro>
      <portfolio></portfolio>
      <education></education>
      <interest></interest>

      <footer class="footer">
        <div class="copyright-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="copytext">
                  &copy; 2019 Donald Pakkies. All rights reserved | Powered By: <a href="https://modulusphp.com">Modulus</a>. Design By: <a href="https://themehippo.com">ThemeHippo</a>
                </div>
              </div>
            </div>
            <!--.row-->
          </div>
          <!-- .container-fluid -->
        </div>
        <!-- .copyright-section -->
      </footer>
      <!-- .footer -->
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Component mounted.');
    }
  }
</script>
