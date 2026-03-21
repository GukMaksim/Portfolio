<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Education -->
        <div class="footer-col">
          <h3 class="footer-col-title">{{ t('footer.educationTitle') }}</h3>
          <div v-for="(item, index) in t('footer.education')" :key="index">
            <p class="footer-text">{{ item.edu }}</p>
            <a v-if="item.certificate" :href="item.certificate" target="_blank" rel="noopener" class="footer-certificate">Сертифікат</a>
          </div>
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

          <a href="https://linkedin.com/in/maksymhuk" target="_blank" rel="noopener" class="footer-contact-item">
            <span class="footer-contact-icon">
              <svg><use :href="`${iconSprite}#linkedin-icon`"></use></svg>
            </span>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/maksymhuk" target="_blank" rel="noopener" class="footer-contact-item">
            <span class="footer-contact-icon">
              <svg><use :href="`${iconSprite}#github-icon`"></use></svg>
            </span>
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
const iconSprite = `${import.meta.env.BASE_URL}icons.svg`
</script>

<style scoped>
/* ============================================
   FOOTER
   ============================================ */
.footer {
	font-family: var(--font-secondary);
	background: var(--bg-secondary);
	border-top: 1px solid var(--card-border);
	padding: 80px 0 40px;
	transition:
		background var(--transition),
		border-color var(--transition);
}

.footer-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 48px;
	margin-bottom: 48px;
}

.footer-col-title {
	/* font-family: var(--font-heading); */
	font-size: 0.85rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: var(--accent);
	margin-bottom: 20px;
	transition: color var(--transition);
}

.footer-text {
	font-family: var(--font-secondary);
	font-size: 0.95rem;
	color: var(--text-secondary);
  margin-top: 20px;
	line-height: 1.8;
	transition: color var(--transition);
}

.footer-certificate {
	font-size: 0.95rem;
  font-weight: 600;
  text-decoration: underline;
	color: var(--text-primary);
	transition: color var(--transition);
}

.footer-lang-item {
	display: flex;
	justify-content: space-between;
	padding: 8px 0;
	border-bottom: 1px solid var(--card-border);
	transition: border-color var(--transition);
}

.footer-lang-name {
	font-weight: 600;
	color: var(--text-primary);
	transition: color var(--transition);
}

.footer-lang-level {
	color: var(--text-muted);
	font-size: 0.9rem;
	transition: color var(--transition);
}

.footer-contact-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 0;
	color: var(--text-secondary);
	font-size: 0.95rem;
	transition: color 0.3s ease;
}

.footer-contact-item:hover {
	color: var(--accent);
}

.footer-contact-icon {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--accent-light);
	color: var(--accent);
	font-size: 16px;
	flex-shrink: 0;
	transition:
		background var(--transition),
		color var(--transition);
}

.footer-contact-icon svg {
	width: 20px;
	height: 20px;
	fill: currentColor;
}

.footer-bottom {
	font-family: var(--font-secondary);
	text-align: center;
	padding-top: 32px;
	border-top: 1px solid var(--card-border);
	color: var(--text-muted);
	font-size: 0.85rem;
	transition:
		color var(--transition),
		border-color var(--transition);
}

@media (max-width: 768px) {
	.footer-grid {
		grid-template-columns: 1fr;
		gap: 32px;
	}
}
</style>
