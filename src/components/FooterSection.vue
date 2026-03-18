<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Education -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.educationTitle') }}</h3>
          <p class="footer-text">{{ t('footer.education') }}</p>
        </div>

        <!-- Languages -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.languagesTitle') }}</h3>
          <div
            v-for="(item, index) in t('footer.languages')"
            :key="index"
            class="footer-lang-item"
          >
            <span class="footer-lang-name">{{ item.lang }}</span>
            <span class="footer-lang-level">{{ item.level }}</span>
          </div>
        </div>

        <!-- Contacts -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.contactsTitle') }}</h3>

          <a href="tel:+380676082262" class="footer-contact-item">
            <span class="footer-contact-icon">📞</span>
            <span>+38 067 608-22-62</span>
          </a>

          <a href="mailto:maksim.guk@gmail.com" class="footer-contact-item">
            <span class="footer-contact-icon">✉️</span>
            <span>maksim.guk@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/maksymhuk" target="_blank" rel="noopener" class="footer-contact-item">
            <span class="footer-contact-icon">🔗</span>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/maksymhuk" target="_blank" rel="noopener" class="footer-contact-item">
            <span class="footer-contact-icon">🐙</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        {{ t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../i18n.js'
</script>
