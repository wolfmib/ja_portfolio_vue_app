vue memoo


<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/johnny-hung-data-analytic-gaming-actuary" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/wolfmib" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/le_petit_johnny" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/johnny.hung.526" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
      </a>
    </div>
    <span>© 2025   JOHNNY-ALIN All Rights Reserved</span>
  </footer>
</template>



<script>
export default {
  name: 'SiteFooter'
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  /*position: fixed;*/
  bottom: 0;
  left:0;
  width: 100%;
}

.social-icons a {
  color: white;
  margin: 0 15px;
  font-size: 24px; /* Adjust size as needed */
}

.social-icons a:hover {
  color: #aaa; /* Change color on hover */
}
</style>
