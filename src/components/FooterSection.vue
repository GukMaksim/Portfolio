<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Education -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.educationTitle') }}</h3>
          <div class="footer-items">
            <div v-for="(item, index) in t('footer.education')" :key="index" class="footer-edu-item">
              <p class="footer-text">{{ item.edu }}</p>
              <a v-if="item.certificate" :href="item.certificate" target="_blank" rel="noopener" class="footer-certificate">
                {{ t('footer.certificate') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.languagesTitle') }}</h3>
          <div class="footer-items">
            <div
              v-for="(item, index) in t('footer.languages')"
              :key="index"
              class="footer-lang-item"
            >
              <span class="footer-lang-name">{{ item.lang }}</span>
              <span class="footer-lang-level">{{ item.level }}</span>
            </div>
          </div>
        </div>

        <!-- Contacts -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.contactsTitle') }}</h3>
          <div class="footer-items">
            <a href="tel:+380676082262" class="footer-contact-item">
              <span class="footer-contact-icon">
                <svg><use :href="`${iconSprite}#phone-icon`"></use></svg>
              </span>
              <span>+38 067 608-22-62</span>
            </a>

            <a href="mailto:maksim.guk@gmail.com" class="footer-contact-item">
              <span class="footer-contact-icon">
                <svg><use :href="`${iconSprite}#email-icon`"></use></svg>
              </span>
              <span>maksim.guk@gmail.com</span>
            </a>

            <div class="footer-socials">
              <a href="https://linkedin.com/in/maksymhuk" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">
                <svg><use :href="`${iconSprite}#linkedin-icon`"></use></svg>
              </a>

              <a href="https://github.com/GukMaksim" target="_blank" rel="noopener" class="footer-social-link" aria-label="GitHub">
                <svg><use :href="`${iconSprite}#github-icon`"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../i18n.js'
const iconSprite = `${import.meta.env.BASE_URL}icons.svg`
</script>

<style scoped>
.footer {
  font-family: var(--font-primary);
  background: var(--bg-secondary);
  border-top: 1px solid var(--card-border);
  padding: 80px 0 40px;
  transition: background var(--transition), border-color var(--transition);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 60px;
  margin-bottom: 60px;
}

.footer-col-title {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 24px;
}

.footer-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-edu-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-certificate {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.2s ease;
}

.footer-certificate:hover {
  color: var(--accent);
}

.footer-lang-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--card-border);
}

.footer-lang-name {
  font-weight: 600;
  color: var(--text-primary);
}

.footer-lang-level {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.footer-contact-item:hover {
  color: var(--accent);
  transform: translateX(4px);
}

.footer-contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  color: var(--accent);
  transition: background 0.2s ease;
}

.footer-contact-item:hover .footer-contact-icon {
  background: var(--accent-light);
}

.footer-contact-icon svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.footer-socials {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.footer-social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid transparent;
}

.footer-social-link:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px var(--accent-light);
}

:global(.theme-dev) .footer-social-link:hover {
  color: #000;
}

.footer-social-link svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.footer-bottom {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid var(--card-border);
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
