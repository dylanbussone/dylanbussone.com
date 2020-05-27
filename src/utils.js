import theme from './theme';
import { NAV_HEIGHT } from './components/header';

const isMobileWidth = () => window.outerWidth <= theme.breakpoints.sm;

const scrollToElement = selector => {
  const el = document.querySelector(selector);
  if (el) {
    let targetTop = el.offsetTop;
    if (!isMobileWidth()) {
      // Nav is fixed to top on non-mobile
      targetTop -= NAV_HEIGHT;
    }
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  }
};

export { scrollToElement };
