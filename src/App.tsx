/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { getArticleBySlug } from './data/articles';
import {
  getCaseMainHtml,
  HOME_MAIN_HTML,
  PAGE_WRAPPER_INNER_HTML,
  WORK_MAIN_HTML,
} from './pageHtml';

declare global {
  interface Window {
    lenis?: {
      scrollTo: (
        target: number | string | HTMLElement,
        options?: { offset?: number; duration?: number; immediate?: boolean }
      ) => void;
      start: () => void;
      stop: () => void;
      resize: () => void;
    };
    gsap?: unknown;
    ScrollTrigger?: {
      refresh: () => void;
    };
    odynTransitionTo?: (
      nextMainHtml: string,
      onBeforeMount?: (nextContainer: Element) => void
    ) => Promise<boolean>;
  }
}

const HOME_TITLE =
  'MindFlow Routines | Daily Mindset, Money, Mood & Wellness Articles';
const WORK_TITLE = 'Daily Reads | MindFlow Routines';

const STATIC_HTML = { __html: PAGE_WRAPPER_INNER_HTML };

function sanitizeContainer(container: Element | Document) {
  container
    .querySelectorAll('a .btn-link_arrow[data-scroll-top]')
    .forEach((btn) => {
      btn.removeAttribute('data-scroll-top');
    });
}

function getPageHtmlAndTitle(route: string): { html: string; title: string } {
  if (route.startsWith('/werk/') || route.startsWith('/articles/')) {
    const slug = route.replace(/^\/(werk|articles)\//, '');
    const article = getArticleBySlug(slug);
    return {
      html: getCaseMainHtml(slug),
      title: `${article.title} | MindFlow Routines`,
    };
  }
  if (route === '/werk' || route === '/articles') {
    return { html: WORK_MAIN_HTML, title: WORK_TITLE };
  }
  return { html: HOME_MAIN_HTML, title: HOME_TITLE };
}

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentRouteRef = useRef<string>('/');

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // If loaded directly on /werk or /werk/..., swap initial container before bundle.js initializes
    const initialPath = window.location.pathname;
    if (
      initialPath === '/werk' ||
      initialPath === '/articles' ||
      initialPath.startsWith('/werk/') ||
      initialPath.startsWith('/articles/')
    ) {
      const initialMain = wrapper.querySelector('[data-barba="container"]');
      if (initialMain) {
        const { html, title } = getPageHtmlAndTitle(initialPath);
        const tpl = document.createElement('template');
        tpl.innerHTML = html.trim();
        const nextMain = tpl.content.firstElementChild;
        if (nextMain) {
          initialMain.replaceWith(nextMain);
          currentRouteRef.current = initialPath;
          document.title = title;
        }
      }
    } else {
      document.title = HOME_TITLE;
    }

    sanitizeContainer(wrapper);

    // Inject OdynCode bundle.js once the exact Webflow DOM is mounted
    if (!document.querySelector('script[data-odyn-bundle="true"]')) {
      const script = document.createElement('script');
      script.src = '/bundle.js';
      script.async = false;
      script.setAttribute('data-odyn-bundle', 'true');
      document.body.appendChild(script);
    }

    // Fallback safety timer so the page never stays hidden if fonts or Barba take too long
    const fallbackTimer = window.setTimeout(() => {
      if (!document.documentElement.hasAttribute('data-page-ready')) {
        document.documentElement.setAttribute('data-page-ready', '');
        const transitionWrap = document.querySelector('[data-transition-wrap]');
        transitionWrap?.setAttribute('data-transition-ready', '');
        const container = document.querySelector<HTMLElement>(
          '[data-barba="container"]'
        );
        if (container) {
          container.style.opacity = '1';
          container.style.visibility = 'visible';
        }
      }
    }, 3500);

    const smoothScrollTo = (scrollTarget: number | HTMLElement | null) => {
      if (scrollTarget === null) return;
      if (window.lenis) {
        window.lenis.scrollTo(scrollTarget, { duration: 1.2 });
      } else if (typeof scrollTarget === 'number') {
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      } else {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navigateToRoute = async (
      targetRoute: string,
      pushHistory = true,
      postScrollSelector?: string,
      forceTransition = false
    ) => {
      if (!forceTransition && currentRouteRef.current === targetRoute) {
        if (postScrollSelector) {
          smoothScrollTo(wrapper.querySelector<HTMLElement>(postScrollSelector));
        } else {
          smoothScrollTo(0);
        }
        return;
      }

      const { html: nextHtml, title: nextTitle } =
        getPageHtmlAndTitle(targetRoute);

      if (window.odynTransitionTo) {
        const transitioned = await window.odynTransitionTo(
          nextHtml,
          sanitizeContainer
        );
        if (transitioned) {
          currentRouteRef.current = targetRoute;
          document.title = nextTitle;
          if (pushHistory) {
            try {
              window.history.pushState({ route: targetRoute }, '', targetRoute);
            } catch {
              // Ignore history errors in restricted sandboxed iframes
            }
          }
          if (postScrollSelector) {
            window.setTimeout(() => {
              smoothScrollTo(
                wrapper.querySelector<HTMLElement>(postScrollSelector)
              );
            }, 100);
          }
        }
      }
    };

    const handlePopState = () => {
      const path = window.location.pathname;
      const targetRoute =
        path === '/werk' ||
        path === '/articles' ||
        path.startsWith('/werk/') ||
        path.startsWith('/articles/')
          ? path
          : '/';
      void navigateToRoute(targetRoute, false);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#') || href.startsWith('/')) {
        e.preventDefault();

        // Transition to Articles overview page (/werk or /articles)
        if (href === '/werk' || href === '/articles') {
          void navigateToRoute('/werk', true);
          return;
        }

        // Transition to Article Detail read view (/werk/... or /articles/...)
        if (href.startsWith('/werk/') || href.startsWith('/articles/')) {
          const normalizedHref = href.replace(/^\/articles\//, '/werk/');
          void navigateToRoute(normalizedHref, true, undefined, true);
          return;
        }

        // Transition to Home page (/)
        if (href === '/') {
          void navigateToRoute('/', true);
          return;
        }

        if (href === '#') {
          smoothScrollTo(0);
          return;
        }

        if (href.startsWith('#')) {
          smoothScrollTo(wrapper.querySelector<HTMLElement>(href));
          return;
        }

        if (href === '/wat-we-doen' || href === '/pillars' || href === '/faq') {
          if (currentRouteRef.current !== '/') {
            void navigateToRoute('/', true, '.section_services');
          } else {
            smoothScrollTo(
              wrapper.querySelector<HTMLElement>('.section_services')
            );
          }
          return;
        }

        if (href === '/over') {
          if (currentRouteRef.current !== '/') {
            void navigateToRoute('/', true, '.section_team');
          } else {
            smoothScrollTo(wrapper.querySelector<HTMLElement>('.section_team'));
          }
          return;
        }

        if (
          href === '/contact' ||
          href === '/privacyverklaring' ||
          href === '/algemene-voorwaarden'
        ) {
          smoothScrollTo(wrapper.querySelector<HTMLElement>('.footer'));
        }
      }
    };

    wrapper.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.clearTimeout(fallbackTimer);
      wrapper.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="page-wrapper"
      dangerouslySetInnerHTML={STATIC_HTML}
    />
  );
}


