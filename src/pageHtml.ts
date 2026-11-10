import { ARTICLES, Article, getArticleBySlug } from './data/articles';

export const MINDFLOW_LOGO_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 174 67\" fill=\"none\" class=\"nav-logo_svg\">\n  <path d=\"M 44.27 33.23 L 44.49 34.80 Q 42.62 37.12 41.28 38.57 Q 39.95 40.02 38.58 41.22 Q 37.22 42.42 36.29 42.98 Q 35.36 43.54 34.66 43.64 Q 32.98 43.88 31.73 42.78 Q 30.49 41.68 30.21 39.70 Q 29.89 37.43 30.50 35.07 Q 31.11 32.71 32.48 30.10 Q 33.85 27.49 36.00 24.17 Q 37.60 21.72 37.57 21.45 Q 37.54 21.29 37.41 21.19 Q 37.28 21.09 37.15 21.11 Q 36.72 21.17 34.76 23.40 Q 32.80 25.62 29.83 29.81 Q 26.86 34.01 23.54 39.69 Q 23.35 39.99 22.35 41.74 Q 21.36 43.49 20.93 44.04 Q 20.49 44.59 20.13 44.64 Q 19.49 44.73 18.85 43.51 Q 18.20 42.29 18.00 40.84 Q 17.87 39.95 18.31 38.85 Q 18.74 37.74 20.32 34.82 Q 21.89 31.90 22.90 29.90 Q 23.92 27.91 25.08 25.10 Q 25.89 23.16 26.26 22.02 Q 26.62 20.88 26.50 20.06 Q 26.40 19.36 25.99 19.41 Q 25.13 19.53 23.07 22.18 Q 21.01 24.82 18.13 29.86 Q 15.26 34.90 12.28 41.41 Q 11.32 43.63 10.90 44.41 Q 10.47 45.19 9.84 45.28 Q 9.04 45.39 8.11 43.79 Q 7.18 42.20 7.03 41.15 Q 6.99 40.81 7.20 40.36 Q 9.64 35.94 11.18 32.87 Q 12.72 29.81 13.86 27.09 Q 15.01 24.36 15.46 22.64 Q 15.92 20.92 15.79 19.99 Q 15.65 19.01 14.76 19.14 Q 14.04 19.24 12.42 20.42 Q 10.80 21.59 8.35 23.58 Q 5.91 25.57 4.42 26.65 Q 2.92 27.73 2.13 27.84 Q 1.38 27.95 1.26 27.11 Q 1.19 26.63 1.27 24.87 Q 1.35 23.11 1.59 22.36 Q 1.94 21.38 3.69 19.60 Q 5.45 17.83 5.65 17.80 Q 5.83 17.77 5.86 17.93 Q 5.87 18.02 5.71 18.23 Q 4.89 19.11 4.50 19.65 Q 4.11 20.19 4.08 20.78 Q 7.89 17.69 10.99 15.93 Q 14.09 14.16 15.36 13.98 Q 15.99 13.89 16.68 14.66 Q 17.37 15.43 17.93 16.50 Q 18.48 17.57 18.53 17.89 Q 18.69 19.05 18.32 20.71 Q 17.95 22.37 17.23 24.61 Q 16.52 26.84 15.46 30.19 Q 16.43 28.50 17.31 27.05 Q 18.20 25.61 19.08 24.23 Q 19.97 22.86 20.88 21.45 Q 22.12 19.54 23.74 17.72 Q 25.36 15.91 26.83 14.70 Q 28.29 13.48 28.86 13.40 Q 29.65 13.29 30.40 14.08 Q 31.15 14.86 31.29 15.86 Q 31.38 16.52 30.78 18.51 Q 30.18 20.49 28.93 23.64 Q 27.68 26.78 25.60 31.75 Q 27.80 28.64 30.19 25.34 Q 32.57 22.03 33.75 20.50 Q 34.92 18.97 35.73 18.14 Q 36.85 17.01 37.96 15.73 Q 39.06 14.45 39.70 13.71 Q 40.34 12.97 40.86 12.55 Q 41.38 12.13 41.86 12.06 Q 42.45 11.98 43.54 13.22 Q 44.63 14.45 44.68 14.84 Q 44.75 15.32 44.31 16.05 Q 43.86 16.79 42.43 18.82 Q 39.81 22.57 38.01 26.26 Q 36.21 29.96 35.43 32.91 Q 34.65 35.85 34.88 37.47 Q 35.02 38.47 35.46 38.87 Q 35.90 39.27 36.70 39.16 Q 37.42 39.06 38.01 38.70 Q 38.60 38.34 39.29 37.73 Q 39.98 37.12 40.60 36.57 Q 41.47 35.87 42.30 35.09 Q 43.13 34.32 43.59 33.87 Q 44.05 33.42 44.27 33.23 Z M 50.08 22.15 Q 49.51 22.23 48.94 21.87 Q 48.37 21.51 48.27 20.85 Q 48.13 19.85 48.92 18.49 Q 49.70 17.12 50.72 16.98 Q 51.40 16.88 51.92 17.24 Q 52.43 17.60 52.54 18.39 Q 52.68 19.37 51.91 20.68 Q 51.15 22.00 50.08 22.15 Z M 53.05 32.09 L 53.29 33.75 Q 51.48 36.90 49.77 38.61 Q 48.07 40.32 46.73 40.51 Q 44.86 40.77 43.68 38.94 Q 42.50 37.12 42.17 34.80 Q 42.05 33.91 42.11 33.08 Q 42.18 32.25 42.36 31.69 Q 42.54 31.13 43.06 29.92 Q 45.58 24.45 48.26 24.07 Q 49.65 23.87 49.80 24.94 Q 49.90 25.67 49.22 27.34 Q 48.54 29.01 47.93 29.77 Q 46.22 31.96 45.72 32.79 Q 45.23 33.63 45.36 34.58 Q 45.48 35.40 46.17 35.86 Q 46.86 36.32 47.83 36.18 Q 48.90 36.03 50.08 35.07 Q 51.25 34.10 53.05 32.09 Z M 67.05 25.92 Q 63.68 30.94 63.93 32.69 Q 64.06 33.67 64.86 33.56 Q 65.52 33.46 66.48 32.62 Q 67.44 31.78 69.44 29.69 L 69.66 31.26 Q 66.88 34.89 65.35 36.55 Q 63.82 38.20 62.73 38.35 Q 60.87 38.61 60.52 36.16 Q 60.42 35.43 60.55 34.70 Q 60.67 33.96 60.97 33.14 Q 61.26 32.32 61.87 30.79 Q 62.49 29.25 63.31 27.31 Q 62.11 28.15 60.43 30.38 Q 59.33 31.78 58.59 33.01 Q 57.86 34.24 57.04 35.73 Q 56.22 37.23 55.82 37.76 Q 55.42 38.29 54.94 38.36 Q 54.22 38.46 53.39 37.02 Q 52.56 35.59 52.28 33.56 Q 52.10 32.31 52.29 31.57 Q 52.47 30.82 53.13 29.41 Q 54.36 26.78 55.34 25.50 Q 56.32 24.21 57.36 24.07 Q 58.09 23.96 58.57 24.15 Q 59.04 24.34 59.12 24.86 Q 59.15 25.09 59.05 25.36 Q 58.95 25.63 58.81 25.86 Q 58.66 26.08 58.20 26.75 Q 55.17 31.23 55.34 32.42 Q 55.43 33.07 55.86 33.01 Q 56.13 32.98 56.79 31.99 Q 57.46 31.00 58.49 29.41 Q 59.53 27.82 61.01 26.03 Q 62.48 24.25 64.44 22.51 Q 65.53 21.50 66.32 21.39 Q 66.69 21.34 67.18 22.29 Q 67.67 23.24 67.82 24.26 Q 67.89 24.76 67.05 25.92 Z M 78.86 28.51 Q 77.18 31.06 75.82 32.87 Q 74.46 34.69 73.59 35.61 Q 72.71 36.53 72.34 36.58 Q 71.75 36.67 70.88 35.82 Q 70.01 34.97 69.28 33.56 Q 68.55 32.16 68.33 30.63 Q 68.02 28.43 69.84 25.89 Q 71.67 23.35 74.19 21.49 Q 76.70 19.63 78.07 19.44 Q 79.18 19.28 80.45 20.54 Q 81.68 16.64 82.86 13.58 Q 84.04 10.51 84.92 8.98 Q 85.79 7.44 86.25 7.38 Q 86.75 7.31 87.23 7.74 Q 87.72 8.16 87.81 8.78 Q 87.98 9.96 86.65 13.08 Q 85.33 16.20 84.03 19.16 Q 82.73 22.12 81.90 24.94 Q 81.07 27.76 81.38 30.01 Q 81.67 32.05 82.99 31.87 Q 83.79 31.75 84.86 30.69 Q 85.94 29.62 87.87 27.19 L 88.10 28.85 Q 84.09 35.88 81.43 36.26 Q 80.36 36.41 79.78 35.65 Q 79.20 34.90 78.97 33.29 Q 78.67 31.11 78.86 28.51 Z M 79.76 22.73 Q 77.83 23.69 75.32 25.59 Q 72.80 27.48 72.31 28.13 Q 71.88 28.65 71.67 29.96 Q 71.46 31.26 71.55 31.90 Q 71.60 32.28 71.86 32.50 Q 72.12 32.72 72.47 32.67 Q 72.78 32.63 73.15 32.30 Q 73.53 31.97 74.31 31.05 Q 75.10 30.12 75.34 29.86 Q 75.68 29.46 76.85 28.15 Q 78.02 26.84 78.54 26.12 Q 79.07 25.40 79.39 24.55 Q 79.71 23.71 79.76 22.73 Z M 99.56 25.55 L 99.78 27.12 Q 98.61 28.67 97.99 29.39 Q 97.37 30.10 96.23 30.91 Q 96.52 32.98 96.52 34.46 Q 96.52 35.94 96.04 37.64 Q 95.57 39.35 94.36 41.46 Q 93.17 43.55 91.90 44.76 Q 90.63 45.97 89.84 46.08 Q 88.95 46.21 88.00 44.86 Q 87.04 43.51 86.74 41.35 Q 86.45 39.28 86.83 36.89 Q 87.21 34.49 88.18 30.65 Q 86.86 29.35 86.66 27.92 Q 86.50 26.76 87.00 26.06 Q 87.51 25.37 88.53 24.71 Q 89.15 23.35 89.74 22.38 Q 90.33 21.40 91.36 19.77 Q 92.90 13.62 95.30 7.63 Q 95.97 5.96 96.28 5.37 Q 96.60 4.79 97.03 4.73 Q 97.41 4.67 97.79 5.20 Q 98.16 5.72 98.29 6.63 Q 98.45 7.75 98.34 8.71 Q 98.23 9.68 97.92 10.68 Q 97.61 11.69 97.01 13.12 Q 96.41 14.54 96.28 14.89 Q 95.42 17.05 94.33 19.68 Q 93.24 22.31 92.61 23.84 Q 91.98 25.37 91.71 26.12 Q 93.09 27.02 93.92 27.69 Q 94.74 28.36 95.41 29.36 Q 96.14 28.95 96.72 28.45 Q 97.30 27.95 98.06 27.12 Q 98.83 26.28 99.56 25.55 Z M 93.62 32.60 L 93.51 32.13 Q 92.88 32.28 92.49 32.30 Q 92.10 32.32 91.57 32.24 Q 91.03 32.15 90.73 32.05 Q 90.43 31.96 90.07 31.87 Q 88.93 36.34 89.32 39.13 Q 89.52 40.52 90.08 41.44 Q 90.64 42.36 91.20 42.28 Q 91.79 42.19 92.55 41.02 Q 93.30 39.85 93.67 37.71 Q 94.04 35.57 93.62 32.60 Z M 109.71 23.87 L 109.95 25.55 Q 106.08 32.51 103.11 32.93 Q 101.49 33.16 100.32 31.53 Q 99.16 29.90 98.75 27.03 Q 98.43 24.71 99.07 21.37 Q 99.71 18.02 101.08 14.48 Q 102.45 10.94 104.07 8.22 Q 105.69 5.50 107.24 4.29 Q 107.86 3.78 108.25 3.73 Q 108.73 3.66 108.94 4.06 Q 109.16 4.46 109.31 5.48 Q 109.75 8.64 107.83 13.60 Q 105.91 18.56 101.99 24.00 Q 101.93 25.22 102.02 25.85 Q 102.22 27.31 102.98 28.13 Q 103.73 28.95 104.84 28.79 Q 105.41 28.71 106.01 28.18 Q 106.60 27.64 107.24 26.88 Q 107.87 26.12 109.71 23.87 Z M 102.34 20.73 Q 103.36 19.41 104.25 17.78 Q 105.15 16.14 105.89 14.33 Q 106.63 12.51 107.00 11.09 Q 107.37 9.67 107.27 8.99 Q 107.20 8.46 106.84 8.51 Q 106.70 8.53 106.35 8.84 Q 105.12 10.17 103.86 13.72 Q 102.60 17.27 102.34 20.73 Z M 123.62 22.12 L 123.83 23.65 Q 122.52 25.22 121.68 25.80 Q 120.83 26.39 119.11 26.53 Q 116.65 30.45 114.40 30.77 Q 113.13 30.94 111.97 30.25 Q 110.80 29.56 109.97 28.19 Q 109.14 26.82 108.89 25.03 Q 108.69 23.57 109.40 21.66 Q 110.12 19.76 111.44 18.01 Q 112.76 16.26 114.37 15.07 Q 115.99 13.88 117.49 13.67 Q 118.56 13.52 119.22 13.76 Q 119.88 14.00 119.96 14.60 Q 120.03 15.05 119.59 15.71 Q 120.48 15.77 120.85 16.15 Q 121.23 16.53 121.39 17.64 Q 121.54 18.73 121.26 20.46 Q 120.98 22.19 120.30 23.77 L 120.77 24.12 L 121.11 24.08 Q 121.50 24.02 121.84 23.78 Q 122.19 23.53 122.46 23.27 Q 122.72 23.01 123.62 22.12 Z M 118.09 16.80 Q 116.37 18.21 115.16 19.32 Q 113.94 20.42 113.15 21.50 Q 112.35 22.57 112.16 23.57 Q 111.95 26.20 111.98 26.40 Q 112.19 27.90 114.28 27.61 Q 115.26 27.47 117.32 25.47 Q 116.78 24.45 116.64 23.47 Q 116.44 22.04 116.82 20.47 Q 117.21 18.90 118.09 16.80 Z M 135.11 23.29 Q 135.25 24.31 136.03 24.20 Q 137.03 24.06 139.05 20.33 Q 138.87 19.70 138.84 19.50 Q 138.67 18.27 139.40 16.36 Q 140.13 14.45 141.21 12.95 Q 142.30 11.46 142.96 11.36 Q 143.75 11.25 144.02 13.16 Q 144.24 14.73 143.79 16.35 Q 143.33 17.96 142.28 19.73 Q 142.51 19.91 142.80 20.09 Q 143.08 20.27 143.38 20.38 Q 143.69 20.49 144.00 20.44 Q 144.75 20.34 145.74 18.97 L 145.97 20.58 Q 144.44 22.70 143.12 22.88 Q 142.35 22.99 141.88 22.86 Q 141.40 22.73 140.65 22.32 Q 137.18 27.94 135.00 28.24 Q 134.15 28.36 133.58 27.80 Q 133.00 27.25 132.85 26.13 Q 132.77 25.59 132.72 21.98 Q 131.98 23.13 131.00 24.68 Q 130.01 26.23 129.38 27.07 Q 128.76 27.91 128.19 28.41 Q 127.63 28.91 126.99 29.00 Q 126.38 29.08 125.42 28.43 Q 124.46 27.78 123.68 26.58 Q 122.91 25.37 122.70 23.90 Q 122.50 22.47 122.77 21.39 Q 123.03 20.31 124.20 18.06 Q 125.26 16.05 126.12 14.75 Q 126.98 13.45 127.72 12.69 Q 128.46 11.94 128.99 11.87 Q 129.30 11.82 129.84 11.90 Q 130.37 11.97 130.80 12.17 Q 131.23 12.36 131.27 12.64 Q 131.39 13.50 130.82 14.92 Q 130.24 16.35 128.97 18.20 Q 127.70 20.04 126.01 22.02 Q 125.71 23.66 125.84 24.64 Q 125.89 24.96 126.12 25.21 Q 126.36 25.47 126.63 25.43 Q 127.56 25.30 129.80 22.02 Q 132.04 18.74 135.55 12.22 Q 135.68 11.97 136.20 11.90 Q 136.77 11.82 137.27 12.00 Q 137.77 12.19 137.83 12.62 Q 137.86 12.87 137.01 15.44 Q 136.15 18.02 135.56 20.16 Q 134.97 22.29 135.11 23.29 Z M 14 58.5 C 52 48.2, 114 38.8, 168 33.5 C 171 33.2, 171.8 36.2, 168.2 36.9 C 118 42.8, 56 52.5, 12 62.2 C 9.5 62.7, 10.5 59.3, 14 58.5 Z\" fill=\"currentColor\"></path>\n</svg>";

const NAV_BUTTON_STYLE = `
                  :root {
  --button-093-color: #131313;
  --button-093-color-background: #fff;
  --button-093-color-focus: #131313;
  --button-093-dot-size: 0.5em;
  --button-093-dot-border-radius: 50%;
  --button-093-dot-color: var(--_colors---swatch--blue);
  --button-093-first-dot-color: var(--_colors---swatch--pink);
  --button-093-second-dot-color: var(--_colors---swatch--blue);
  --button-093-third-dot-color: var(--_colors---swatch--pink);;
  --button-093-padding: 0.75em 1em 0.75em 0.75em;
  --button-093-gap: 0.375em;
  --button-093-border-radius: 0em;
  --button-093-focus-inset: -0.125em;
  --button-093-ease-hover: cubic-bezier(0.32, 0.72, 0, 1);
  --button-093-ease-focus: cubic-bezier(0.32, 0.72, 0, 1);
}

.button-093 {
  -webkit-tap-highlight-color: transparent;
  transition: scale 0.45s var(--button-093-ease-hover);
  will-change: transform;
}

.button-093:is(:hover, :focus-visible) .button-093__text,
[data-hover]:is(:hover, :focus-visible) .button-093 .button-093__text {
  transition-delay: 0.05s;
}

.button-093:is(:focus-visible)::after {
  box-shadow: 0 0 0 0.125em var(--button-093-color-focus);
}

.button-093::after {
  content: '';
  display: block;
  position: absolute;
  inset: var(--button-093-focus-inset);
  border-radius: var(--button-093-border-radius);
  transition: box-shadow 0.3s var(--button-093-ease-focus);
  pointer-events: none;
  z-index: 1;
}

.button-093__text {
  transform-origin: left center;
  transition: translate 0.45s var(--button-093-ease-hover), rotate 0.45s var(--button-093-ease-hover);
}

.button-093__text.is--hover {
  rotate: 75deg;
  translate: -0.75em 2em 0;
}

.button-093__dot {
  transform-origin: calc((100% + 0.25em) * -1) 50%;
  transition: rotate 0.45s var(--button-093-ease-hover), scale 0.45s var(--button-093-ease-hover);
  transition-delay: calc(var(--index, 0) * 0.032s);
}

.button-093__dot.is--first {
  box-shadow: 0 0 0 0.1px var(--button-093-dot-color);
}

.button-093__dot.is--first,
.button-093__dot.is--second,
.button-093__dot.is--third {
  rotate: 120deg;
  scale: 0;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .button-093:is(:hover, :focus-visible),
  [data-hover]:is(:hover, :focus-visible) .button-093 {
    scale: var(--button-093-scale-x) var(--button-093-scale-y);
    transition: scale 0.45s 0.05s var(--button-093-ease-hover);
  }

  .button-093:is(:hover, :focus-visible) .button-093__text.is--default,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__text.is--default {
    rotate: -75deg;
    translate: -0.75em -2em 0;
  }

  .button-093:is(:hover, :focus-visible) .button-093__text.is--hover,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__text.is--hover {
    rotate: 0deg;
    translate: 0 0 0;
  }

  .button-093:is(:hover, :focus-visible) .button-093__dot,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__dot {
    rotate: -120deg;
    scale: 0;
    transition-delay: calc(var(--index, 0) * 0.032s + 0.05s);
  }

  .button-093:is(:hover, :focus-visible) .button-093__dot.is--first,
  .button-093:is(:hover, :focus-visible) .button-093__dot.is--second,
  .button-093:is(:hover, :focus-visible) .button-093__dot.is--third,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__dot.is--first,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__dot.is--second,
  [data-hover]:is(:hover, :focus-visible) .button-093 .button-093__dot.is--third {
    rotate: 0deg;
    scale: 1;
  }
}
`;

function renderNavbar(activePage: 'home' | 'work'): string {
  const homeCurrent = activePage === 'home' ? ' aria-current="page" class="nav-logo w-inline-block w--current"' : ' class="nav-logo w-inline-block"';
  const homeLinkClass = activePage === 'home' ? ' aria-current="page" class="nav-link w-inline-block w--current"' : ' class="nav-link w-inline-block"';
  const workLinkClass = activePage === 'work' ? ' aria-current="page" class="nav-link w-inline-block w--current"' : ' class="nav-link w-inline-block"';

  return `        <div data-nav="" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav w-nav">
          <div class="container-col-12 w-container">
            <div class="nav-inner">
              <a${homeCurrent} href="/">${MINDFLOW_LOGO_SVG}</a>
              <link rel="prefetch" href="/" />
              <div data-nav-bg="" class="nav-menu-bg">
              </div>
              <div data-nav-menu="" class="nav-links">
                <a${homeLinkClass} data-draw-line="" data-draw-line-persist="" href="/">
                  <span class="text-draw__span">Home</span>
                  <div data-draw-line-box="" class="text-draw__box is-menu"></div>
                </a>
                <link rel="prefetch" href="/" />
                <a${workLinkClass} data-draw-line="" data-draw-line-persist="" href="/werk">
                  <span class="text-draw__span">Articles</span>
                  <div data-draw-line-box="" class="text-draw__box is-menu"></div>
                </a>
                <link rel="prefetch" href="/werk" />
                <a class="nav-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/wat-we-doen">
                  <span class="text-draw__span">Pillars</span>
                  <div data-draw-line-box="" class="text-draw__box is-menu"></div>
                </a>
                <a class="nav-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                  <span class="text-draw__span">Pinterest</span>
                  <div data-draw-line-box="" class="text-draw__box is-menu"></div>
                </a>
                <div class="button-contact_mobile">
                  <a class="button-093 w-inline-block" data-button-093="" data-button-093-height-increase="6" data-button-093-width-increase="12" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                    <span class="button-093__bg"></span>
                    <span class="button-093__inner">
                      <span class="button-093__dot-wrap">
                        <span class="button-093__dot"></span>
                        <span style="--index: 0;" class="button-093__dot is--first"></span>
                        <span style="--index: 1;" class="button-093__dot is--second"></span>
                        <span style="--index: 2;" class="button-093__dot is--third"></span>
                      </span>
                      <span class="button-093__text-wrap">
                        <span class="button-093__text is--default">@mindflowroutines</span>
                        <span aria-hidden="true" class="button-093__text is--hover">@mindflowroutines</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="hide-mobile">
                <a class="button-093 w-inline-block" data-button-093="" data-button-093-height-increase="6" data-button-093-width-increase="12" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                  <span class="button-093__bg"></span>
                  <span class="button-093__inner">
                    <span class="button-093__dot-wrap">
                      <span class="button-093__dot"></span>
                      <span style="--index: 0;" class="button-093__dot is--first"></span>
                      <span style="--index: 1;" class="button-093__dot is--second"></span>
                      <span style="--index: 2;" class="button-093__dot is--third"></span>
                    </span>
                    <span class="button-093__text-wrap">
                      <span class="button-093__text is--default">@mindflowroutines</span>
                      <span aria-hidden="true" class="button-093__text is--hover">@mindflowroutines</span>
                    </span>
                  </span>
                </a>
              </div>
              <button data-nav-toggle="" class="menu-button">
                <div class="btn-icon-link">
                  <div class="btn-icon-content is-menu">
                    <div data-nav-icon="top" class="btn-icon_menu-div is-top"></div>
                    <div data-nav-icon="bottom" class="btn-icon_menu-div is-bottom"></div>
                  </div>
                </div>
              </button>
              <div class="css-embed w-embed">
                <style>${NAV_BUTTON_STYLE}</style>
              </div>
            </div>
          </div>
        </div>`;
}

function renderFooter(isHome = false): string {
  const logoClass = isHome ? ' aria-current="page" class="footer-logo w-inline-block w--current"' : ' class="footer-logo w-inline-block"';
  return `        <footer data-nav-theme="dark" data-wf--footer--variant="base" class="footer theme-dark">
          <div class="padding-global">
            <div class="container-col-12">
              <div class="footer_wrapper">
                <div data-image-trail-spacing="" data-image-trail="" class="footer-cta">
                  <div data-scroll-reveal-group="" class="footer-cta_wrap">
                    <h2 data-scroll-reveal="" data-font-weight-hover="" data-weight-rest="700" data-weight-near="200" data-radius="400" class="heading-xl">
                      Ready to elevate your
                      <br />
                      ‍
                      <span data-radius="400" data-font-weight-hover="" data-weight-rest="300" data-weight-near="800" class="heading-alt">daily mindset?</span>
                    </h2>
                    <p data-scroll-reveal="" class="paragraph-m opacity-75">
                      Daily visual reminders and intentional reads for your life, mindset, money, and mood.
                    </p>
                    <div data-scroll-reveal="element" class="button-wrap">
                      <a class="button-052 w-inline-block" data-button-052="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                        <span class="button-052__icon-wrap is--default">
                          <span class="button-052__icon-bg"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                            <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span class="button-052__text-wrap">
                          <span class="button-052__text">Follow @mindflowroutines</span>
                        </span>
                        <span class="button-052__icon-wrap is--hover">
                          <span class="button-052__icon-bg"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                            <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="img-trail-medias">
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4bc2a20fd25a7e8ac0_anti-meuk.svg" class="img-trail-media" />
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4bca6cca8cfe7ed064_fire.svg" class="img-trail-media" />
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4b977de19f46ae1a4e_vliegensvlug.svg" class="img-trail-media" />
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4bf0f9829c5376aa67_jij-bent-aan-de-bird.svg" class="img-trail-media" />
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82c663977de19f46b249ff_ef.svg" class="img-trail-media" />
                    <img data-image-trail-media="" loading="lazy" alt="" src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a82bf4bc7479729d0d12a28_geen-praatjes.svg" class="img-trail-media" />
                  </div>
                  <div class="css-embed w-embed">
                    <style>
                      [data-image-trail] { position: relative; overflow: hidden; }
                      [data-image-trail-media] {
                        position: absolute;
                        width: 1px; height: 1px;
                        opacity: 0;
                        pointer-events: none;
                      }
                      [data-image-trail] .created-img {
                        position: absolute;
                        top: 0; left: 0;
                        width: 12em;
                        max-height: 10em;
                        pointer-events: none;
                        will-change: transform;
                      }
                    </style>
                  </div>
                </div>
                <div class="footer-main">
                  <div class="footer-main_logo">
                    <a${logoClass} href="/">${MINDFLOW_LOGO_SVG}</a>
                    <link rel="prefetch" href="/" />
                  </div>
                  <div class="footer-main_cols">
                    <div class="footer-main_col">
                      <h3 class="heading-xxs">Navigation</h3>
                      <div class="footer-main_links">
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/">
                          <span class="text-draw__span">Home</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <link rel="prefetch" href="/" />
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/werk">
                          <span class="text-draw__span">Articles</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <link rel="prefetch" href="/werk" />
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/wat-we-doen">
                          <span class="text-draw__span">Pillars</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                          <span class="text-draw__span">Pinterest</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                      </div>
                    </div>
                    <div class="footer-main_col">
                      <h3 class="heading-xxs">Editorial</h3>
                      <div class="footer-main_links is-contact">
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://mindflow-routines.vercel.app" target="_blank" rel="noopener noreferrer">
                          <p class="text-draw__span is-address">
                            Daily Clarity for
                            <br />
                            Mindset, Money,
                            <br />
                            Mood &amp; Life
                          </p>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://mindflow-routines.vercel.app" target="_blank" rel="noopener noreferrer">
                          <span class="text-draw__span">mindflow-routines.vercel.app</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                          <span class="text-draw__span">@mindflowroutines</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                      </div>
                    </div>
                    <div class="footer-main_col is-socials">
                      <h3 class="heading-xxs">Connect</h3>
                      <div class="footer-main_links">
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                          <span class="text-draw__span">Pinterest</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/werk">
                          <span class="text-draw__span">Daily Reads</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                        <a class="footer-link w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://mindflow-routines.vercel.app" target="_blank" rel="noopener noreferrer">
                          <span class="text-draw__span">Web Platform</span>
                          <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                        </a>
                      </div>
                    </div>
                    <button data-scroll-top="" class="scroll-top-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="scroll-top-icon">
                        <path d="M6.0918 15.6626L6.0918 3.92772C5.13426 4.92285 3.91431 5.51506 2.26334 5.51506L1.00018 5.51506L1.00018 3.28561L2.26334 3.28561C4.54463 3.28561 6.0918 1.66253 6.0918 -0.337402L8.35262 -0.337402C8.35262 1.66253 9.8998 3.28561 12.1811 3.28561L13.4442 3.28561L13.4442 5.51506L12.1811 5.51506C10.5301 5.51506 9.31017 4.92285 8.35262 3.92772L8.35262 15.6626L6.0918 15.6626Z" fill="currentColor"></path>
                      </svg>
                      <div class="scroll-top-btn_bg"></div>
                    </button>
                    <div class="css-embed w-embed">
                      <style>
                        .scroll-top-btn:hover .scroll-top-icon { color: black; }
                        .scroll-top-btn:hover .scroll-top-btn_bg { transform: translate(0px, 0%); }
                      </style>
                    </div>
                  </div>
                </div>
                <div class="footer-bottom">
                  <div href="#" class="footer-bottom_link is-left">
                    <div>
                      © <span data-current-year="" class="current-year">2026</span> MindFlow Routines
                    </div>
                  </div>
                  <div class="footer-bottom_legals">
                    <a class="footer-bottom_link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/werk/always-grateful-mindset">
                      <span class="text-draw__span">Mindset &amp; Gratitude</span>
                      <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                    </a>
                    <a class="footer-bottom_link w-inline-block" data-draw-line="" data-draw-line-persist="" href="/werk/money-clarity-routines">
                      <span class="text-draw__span">Money &amp; Clarity</span>
                      <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                    </a>
                  </div>
                  <a class="footer-bottom_link is-right w-inline-block" data-draw-line="" data-draw-line-persist="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                    <span class="text-draw__span">@mindflowroutines on Pinterest</span>
                    <div data-draw-line-box="" class="text-draw__box is-footer-link"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>`;
}

function renderWorkCard(article: Article, sizesAttr = '100vw'): string {
  return `                    <div role="listitem" class="work-item w-dyn-item">
                      <a aria-label="${article.title}" class="work-card w-inline-block" data-cursor-marquee-text="Read article →" data-player-update-size="cover" data-video-on-hover="not-active" data-video-src="" href="/werk/${article.slug}">
                        <div class="work-card_media">
                          <img loading="lazy" src="${article.quoteImage}" alt="${article.title}" sizes="${sizesAttr}" class="video-card-visual__img" />
                          <video muted="" loop="" webkit-playsinline="" playsinline="" src="" class="video-card-visual__video"></video>
                        </div>
                        <div class="work-card_title">
                          <h2 class="heading-s">${article.title}</h2>
                          <div class="eyebrow-m">${article.category} · ${article.readTime}</div>
                        </div>
                      </a>
                      <link rel="prefetch" href="/werk/${article.slug}" />
                    </div>`;
}

const featuredSlidesHtml = ARTICLES.slice(0, 4)
  .map(
    (article) => `                <div data-featured-stack-slide="" role="listitem" class="featured_slide w-dyn-item">
                  <a aria-label="${article.title}" class="featured-card w-inline-block" data-cursor-marquee-text="Read article →" data-featured-stack-content="" href="/werk/${article.slug}" style="background-color:${article.accentColor}">
                    <div class="featured-card_img">
                      <img loading="lazy" src="${article.featuredImage}" alt="${article.title}" sizes="100vw" class="image" />
                      <div class="featured-card_overlay" style="display:none"></div>
                    </div>
                    <div class="featured-card_title" style="display:none">
                      <h3 class="featured-card_h"></h3>
                    </div>
                  </a>
                </div>`
  )
  .join('\n');

const pinterestGalleryImages = [
  { src: '/images/pinterest/download.jpg', alt: 'Always Grateful' },
  { src: '/images/pinterest/Be%20gentle%20with%20Yourself.jpg', alt: 'Be Gentle With Yourself' },
  { src: '/images/pinterest/download%20(1).jpg', alt: 'Too Sexy For This Stress' },
  { src: '/images/pinterest/download%20(2).jpg', alt: 'Stop Wishing, Start Doing' },
  { src: '/images/pinterest/download%20(3).jpg', alt: 'Discipline' },
  { src: '/images/pinterest/download%20(4).jpg', alt: 'You Become What You Repeat' }
];

const teamGalleryHtml = pinterestGalleryImages
  .map(
    (img) => `                      <div data-team-parallax-item="" data-momentum-hover-element="" role="listitem" class="team_item w-dyn-item">
                        <div data-momentum-hover-target="" class="team_card">
                          <div class="team_img">
                            <img src="${img.src}" loading="lazy" alt="${img.alt}" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" class="image" />
                          </div>
                        </div>
                      </div>`
  )
  .join('\n');

export const HOME_MAIN_HTML = `      <main data-barba="container" class="main-wrapper">
${renderNavbar('home')}
        <header data-cursor-cards-threshold="300" data-cursor-cards="" class="section_hero">
          <div class="hero_wrapper is-home">
            <div class="css-embed w-embed">
              <style>
                .cursor-card_media {
                  visibility: hidden;
                }
                .cursor-card_media.on {
                  visibility: visible;
                }
                @media screen and (max-width: 991px) {
                  .cursor-card_media {
                    visibility: visible;
                  }
                }
              </style>
            </div>
            <div class="section-padding-128px">
              <div class="padding-global">
                <div class="w-layout-blockcontainer container-col-12 w-container">
                  <div data-cursor-cards-card="" class="cursor-card is-home w-dyn-list">
                    <div data-cursor-cards-medias="" role="list" class="cursor-card_medias w-dyn-items">
                      <div data-cursor-cards-media="" role="listitem" class="cursor-card_media w-dyn-item">
                        <div class="bunny-bg">
                          <img width="Auto" loading="lazy" alt="Always Grateful" src="/images/pinterest/download.jpg" style="opacity:1;width:100%;height:100%;object-fit:cover;" class="bunny-bg__placeholder" />
                        </div>
                      </div>
                      <div data-cursor-cards-media="" role="listitem" class="cursor-card_media w-dyn-item">
                        <div class="bunny-bg">
                          <img width="Auto" loading="lazy" alt="Stop Wishing Start Doing" src="/images/pinterest/download%20(2).jpg" style="opacity:1;width:100%;height:100%;object-fit:cover;" class="bunny-bg__placeholder" />
                        </div>
                      </div>
                      <div data-cursor-cards-media="" role="listitem" class="cursor-card_media w-dyn-item">
                        <div class="bunny-bg">
                          <img width="Auto" loading="lazy" alt="Discipline" src="/images/pinterest/download%20(3).jpg" style="opacity:1;width:100%;height:100%;object-fit:cover;" class="bunny-bg__placeholder" />
                        </div>
                      </div>
                      <div data-cursor-cards-media="" role="listitem" class="cursor-card_media w-dyn-item">
                        <div class="bunny-bg">
                          <img width="Auto" loading="lazy" alt="Be Gentle With Yourself" src="/images/pinterest/Be%20gentle%20with%20Yourself.jpg" style="opacity:1;width:100%;height:100%;object-fit:cover;" class="bunny-bg__placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-text-reveal-group="" class="hero_content">
                    <div class="hero_subtitle">
                      <div data-text-reveal="lines" class="eyebrow-l">
                        Daily articles, mindset
                        <br />
                        money &amp; mood routines
                      </div>
                    </div>
                    <h1 data-text-reveal="chars" data-font-weight-hover="" data-weight-rest="700" data-weight-near="200" data-radius="400" class="heading-xxl">
                      Bring your mind
                      <br />
                      in
                      <span data-radius="400" data-font-weight-hover="" data-weight-rest="300" data-weight-near="800" class="heading-alt">routines</span>
                    </h1>
                    <a class="btn-link w-inline-block" data-draw-line="" data-draw-line-always="" href="#intro">
                      <div class="btn-link_inner">
                        <div class="text-wrap">
                          <span class="text-draw__span">Explore Daily Clarity</span>
                          <div data-draw-line-box="" class="text-draw__box is-btn-link"></div>
                        </div>
                        <button data-scroll-top="" class="btn-link_arrow">
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hero_clients">
              <div data-marquee-duplicate="2" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="10" class="marquee-advanced">
                <div data-marquee-scroll-target="" class="marquee-advanced__scroll w-dyn-list">
                  <div data-marquee-collection-target="" role="list" class="marquee-advanced__collection w-dyn-items">
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-mindset.svg" loading="lazy" alt="Mindset &amp; Gratitude" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-money.svg" loading="lazy" alt="Wealth &amp; Clarity" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-mood.svg" loading="lazy" alt="Calm &amp; Balance" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-routines.svg" loading="lazy" alt="Daily Routines" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-focus.svg" loading="lazy" alt="Deep Focus" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-stoic.svg" loading="lazy" alt="Stoic Resilience" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-vision.svg" loading="lazy" alt="Vision &amp; Purpose" class="image" />
                    </div>
                    <div role="listitem" class="marquee-advanced__item-width w-dyn-item">
                      <img src="/images/badges/marquee-pinterest.svg" loading="lazy" alt="@mindflowroutines" class="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="intro" class="section_intro">
          <div class="section-padding-128px">
            <div class="padding-global">
              <div class="w-layout-blockcontainer container-col-12 w-container">
                <div class="intro_wrapper">
                  <div data-interactive-collage-init="" class="intro_col is-media">
                    <div data-interactive-collage-list="" class="intro-media">
                      <div data-interactive-collage-item="" class="intro-media-l">
                        <div data-interactive-collage-item-inner="" class="intro-media_inner">
                          <div class="intro-media-l_card">
                            <div class="intro-media-l_img">
                              <img loading="lazy" src="/images/pinterest/download.jpg" alt="Always Grateful Mindset" class="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-interactive-collage-item="" class="intro-media-m">
                        <div data-interactive-collage-item-inner="" class="intro-media_inner">
                          <div class="intro-media-m_card">
                            <div class="intro-media-m_img">
                              <img loading="lazy" src="/images/pinterest/Be%20gentle%20with%20Yourself.jpg" alt="Be Gentle With Yourself" class="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-interactive-collage-item="" class="intro-media-s">
                        <div data-interactive-collage-item-inner="" class="intro-media_inner">
                          <div class="intr-media-s_wrap">
                            <img loading="lazy" src="/images/badges/sticker-club.svg" alt="MindFlow Daily Club" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="intro_col">
                    <div data-scroll-reveal-group="" class="intro-content">
                      <div data-scroll-reveal="" class="eyebrow-m">
                        Our Philosophy
                      </div>
                      <h2 data-scroll-reveal="" class="heading-l">
                        Daily Clarity for a
                        <span class="heading-alt">Intentional Life</span>
                      </h2>
                      <div class="max-width-448px">
                        <p data-scroll-reveal="" class="paragraph-m">
                          MindFlow Routines combines visual Pinterest inspiration from @mindflowroutines with deep, practical daily reads. We turn timeless principles on mindset, money, mood, and daily habits into calm rituals you can actually live by.
                        </p>
                      </div>
                      <div data-scroll-reveal="element" class="button-wrap">
                        <a class="button-052 w-inline-block" data-button-052="" href="/werk">
                          <span class="button-052__icon-wrap is--default">
                            <span class="button-052__icon-bg"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                              <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          <span class="button-052__text-wrap">
                            <span class="button-052__text">Explore All Articles</span>
                          </span>
                          <span class="button-052__icon-wrap is--hover">
                            <span class="button-052__icon-bg"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                              <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                            </svg>
                          </span>
                        </a>
                        <link rel="prefetch" href="/werk" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-nav-theme="dark" data-featured-stack-scroll="1.2" data-featured-stack="" class="section_featured theme-dark">
          <div data-featured-stack-pin="" class="featured_pin">
            <div data-scroll-reveal-group="" class="featured_title">
              <div class="featured_subtitle">
                <div data-scroll-reveal="" class="eyebrow-s">
                  Visual reminders &amp; deep reads to anchor your day. Curated from our core pillars.
                </div>
              </div>
              <h2 data-scroll-reveal="chars" class="heading-xl">
                Featured
                <span class="heading-alt">Articles</span>
              </h2>
            </div>
            <div class="featured_collection w-dyn-list">
              <div data-featured-stack-root="" role="list" class="featured_list w-dyn-items">
${featuredSlidesHtml}
              </div>
            </div>
            <div class="featured_btn">
              <a class="button-052 w-inline-block" data-button-052="" href="/werk">
                <span class="button-052__icon-wrap is--default">
                  <span class="button-052__icon-bg"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                    <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                  </svg>
                </span>
                <span class="button-052__text-wrap">
                  <span class="button-052__text">Explore All Articles</span>
                </span>
                <span class="button-052__icon-wrap is--hover">
                  <span class="button-052__icon-bg"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="button-052__icon">
                    <path d="M12.9016 5.02268C11.0079 5.20742 9.48829 3.68808 9.67311 1.79427L9.82561 0.231445L8.24844 0.0775509C8.0154 2.46583 8.95858 4.21218 10.6788 5.45193L0.5625 4.46482L0.292373 7.23318L10.4098 8.2204C8.47738 9.10665 7.21942 10.6258 6.98638 13.014L8.56355 13.1679L8.71604 11.6051C8.90086 9.7113 10.6844 8.52605 12.5782 8.71087L13.3563 8.7868L13.6805 5.46411L12.9016 5.02268Z" fill="currentColor"></path>
                  </svg>
                </span>
              </a>
              <link rel="prefetch" href="/werk" />
            </div>
            <div data-featured-stack-badge="" class="featured_scroll-svg">
              <img src="https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a8483d32bc0835ce2cd96c5_scroll.svg" loading="lazy" alt="Scroll" class="image" />
            </div>
          </div>
          <div class="css-embed w-embed">
            <style>
              [data-featured-stack-root] {
                position: relative;
                perspective: 1400px;
                transform-style: preserve-3d;
              }
              [data-featured-stack-slide] {
                transform-style: preserve-3d;
                will-change: transform;
              }
              @media screen and (max-width: 991px) {
                [data-featured-stack-pin] {
                  height: auto;
                  overflow: visible;
                }
                [data-featured-stack-slide] {
                  position: relative;
                  inset: auto;
                  margin-bottom: 2em;
                }
              }
              @media screen and (max-width: 479px) {
                [data-featured-stack-slide] {
                  margin-bottom: 1em;
                }
              }
            </style>
          </div>
        </section>
        <section id="pillars" data-services-Section="" class="section_services">
          <div class="section-padding-128px">
            <div class="padding-global">
              <div class="w-layout-blockcontainer container-col-12 w-container">
                <div class="services_wrapper">
                  <div class="css-embed w-embed">
                    <style>
                      @media screen and (min-width: 992px) {
                        [data-video-on-hover="active"] video { opacity: 1; }
                        .services-cards_list .services-card {
                          width: 21.5em;
                        }
                        .services-cards_item:nth-child(1) {
                          transform: translateY(3.5em) rotate(-4deg);
                        }
                        .services-cards_item:nth-child(2) {
                          transform: translateY(0.5em) rotate(-1.5deg);
                        }
                        .services-cards_item:nth-child(3) {
                          transform: translateY(1.25em) rotate(2deg);
                        }
                        .services-cards_item:nth-child(4) {
                          transform: translateY(3.25em) rotate(4.5deg);
                        }
                      }
                      @media screen and (min-width: 480px) and (max-width: 991px) {
                        .services-cards_item:first-child {
                          transform: translateY(2em) rotate(-3deg);
                        }
                        .services-cards_item:last-child {
                          transform: translateY(1em) rotate(3deg);
                        }
                      }
                      @media screen and (max-width: 479px) {
                        .services-cards_item:nth-child(odd) {
                          transform: translateX(-2em) rotate(-2deg);
                        }
                        .services-cards_item:nth-child(even) {
                          transform: translateX(2em) rotate(2deg);
                        }
                      }
                    </style>
                  </div>
                  <div data-scroll-reveal-group="" class="services_title">
                    <div data-scroll-reveal="" class="eyebrow-m">
                      Core Pillars
                    </div>
                    <h2 data-scroll-reveal="" class="heading-xl">
                      Four Pillars of
                      <span class="heading-alt">MindFlow</span>
                    </h2>
                  </div>
                  <div data-interactive-collage-init="" class="services-cards_collection w-dyn-list">
                    <div data-interactive-collage-list="" role="list" class="services-cards_list w-dyn-items">
                      <div data-interactive-collage-item="" role="listitem" class="services-cards_item w-dyn-item">
                        <div data-video-src="" data-video-on-hover="not-active" class="services-card">
                          <div data-interactive-collage-item-inner="" class="services-card_inner">
                            <div style="background-color:#1f4e29" class="services-card_wrap">
                              <div class="services-card_media">
                                <img alt="Mindset &amp; Stoicism" loading="lazy" src="/images/pinterest/download%20(5).jpg" class="video-card-visual__img" />
                                <video muted="" loop="" webkit-playsinline="" playsinline="" src="" class="video-card-visual__video"></video>
                              </div>
                              <div class="services-card_content">
                                <h3 class="heading-m">Mindset &amp; Stoicism</h3>
                                <div class="eyebrow-s">Rewiring daily thoughts &amp; self-belief</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-interactive-collage-item="" role="listitem" class="services-cards_item w-dyn-item">
                        <div data-video-src="" data-video-on-hover="not-active" class="services-card">
                          <div data-interactive-collage-item-inner="" class="services-card_inner">
                            <div style="background-color:#0038ff" class="services-card_wrap">
                              <div class="services-card_media">
                                <img alt="Money &amp; Abundance" loading="lazy" src="/images/pinterest/download%20(2).jpg" class="video-card-visual__img" />
                                <video muted="" loop="" webkit-playsinline="" playsinline="" src="" class="video-card-visual__video"></video>
                              </div>
                              <div class="services-card_content">
                                <h3 class="heading-m">Money &amp; Abundance</h3>
                                <div class="eyebrow-s">Financial habits, clarity &amp; intentional wealth</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-interactive-collage-item="" role="listitem" class="services-cards_item w-dyn-item">
                        <div data-video-src="" data-video-on-hover="not-active" class="services-card">
                          <div data-interactive-collage-item-inner="" class="services-card_inner">
                            <div style="background-color:#ff77cd" class="services-card_wrap">
                              <div class="services-card_media">
                                <img alt="Mood &amp; Emotional Balance" loading="lazy" src="/images/pinterest/download%20(1).jpg" class="video-card-visual__img" />
                                <video muted="" loop="" webkit-playsinline="" playsinline="" src="" class="video-card-visual__video"></video>
                              </div>
                              <div class="services-card_content">
                                <h3 class="heading-m">Mood &amp; Balance</h3>
                                <div class="eyebrow-s">Nervous system resets, gratitude &amp; peace</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-interactive-collage-item="" role="listitem" class="services-cards_item w-dyn-item">
                        <div data-video-src="" data-video-on-hover="not-active" class="services-card">
                          <div data-interactive-collage-item-inner="" class="services-card_inner">
                            <div style="background-color:#ff5f04" class="services-card_wrap">
                              <div class="services-card_media">
                                <img alt="Life &amp; Daily Routines" loading="lazy" src="/images/pinterest/download%20(4).jpg" class="video-card-visual__img" />
                                <video muted="" loop="" webkit-playsinline="" playsinline="" src="" class="video-card-visual__video"></video>
                              </div>
                              <div class="services-card_content">
                                <h3 class="heading-m">Life &amp; Routines</h3>
                                <div class="eyebrow-s">Morning rituals, deep focus &amp; consistency</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="services_btn">
                    <a class="btn-link w-inline-block" data-draw-line="" data-draw-line-always="" href="/werk">
                      <div class="btn-link_inner">
                        <div class="text-wrap">
                          <span class="text-draw__span">Explore All Articles</span>
                          <div data-draw-line-box="" class="text-draw__box is-btn-link"></div>
                        </div>
                        <button data-scroll-top="" class="btn-link_arrow rotation-270">
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section_team">
          <div class="section-padding-128px">
            <div class="padding-global">
              <div class="w-layout-blockcontainer container-col-12 w-container">
                <div data-momentum-hover-init="" class="team_wrapper">
                  <div class="css-embed w-embed">
                    <style>
                      /* ---- Rijen: expliciet per item, per set van 4 drie rijen opschuiven ---- */
                      /* Set 1 */
                      .team_item:nth-child(1)  { grid-row: 1; }
                      .team_item:nth-child(2)  { grid-row: 2; }
                      .team_item:nth-child(3)  { grid-row: 2; }
                      .team_item:nth-child(4)  { grid-row: 3; }
                      /* Set 2 */
                      .team_item:nth-child(5)  { grid-row: 4; }
                      .team_item:nth-child(6)  { grid-row: 5; }
                      .team_item:nth-child(7)  { grid-row: 5; }
                      .team_item:nth-child(8)  { grid-row: 6; }
                      /* Set 3 */
                      .team_item:nth-child(9)  { grid-row: 7; }
                      .team_item:nth-child(10) { grid-row: 8; }
                      .team_item:nth-child(11) { grid-row: 8; }
                      .team_item:nth-child(12) { grid-row: 9; }
                      /* Set 4 */
                      .team_item:nth-child(13) { grid-row: 10; }
                      .team_item:nth-child(14) { grid-row: 11; }
                      .team_item:nth-child(15) { grid-row: 11; }
                      .team_item:nth-child(16) { grid-row: 12; }

                      @media screen and (min-width: 992px) {
                        .team_list {
                          display: grid;
                          grid-template-columns: repeat(4, 1fr);
                          gap: 2em;
                          align-items: start;
                        }
                        .team_item:nth-child(4n + 1) {
                          grid-column: 3;
                          margin-top: 0;
                          transform: translateX(16em);
                        }
                        .team_item:nth-child(4n + 2) {
                          grid-column: 1;
                          margin-top: 0;
                          transform: translateY(-8em) translateX(8em);
                        }
                        .team_item:nth-child(4n + 3) {
                          grid-column: 3;
                          margin-top: 8em;
                          margin-bottom: -8em;
                          transform: translateY(8em);
                        }
                        .team_item:nth-child(4n + 4) {
                          grid-column: 1;
                          margin-top: 0;
                          margin-bottom: -8em;
                          transform: translateY(8em) translateX(2em);
                        }
                      }

                      @media screen and (min-width: 480px) and (max-width: 991px) {
                        .team_list {
                          display: grid;
                          grid-template-columns: repeat(4, 1fr);
                          gap: 1em;
                          align-items: start;
                        }
                        .team_item:nth-child(4n + 1) {
                          grid-column: 3;
                          margin-top: 0;
                          transform: translateX(4em);
                        }
                        .team_item:nth-child(4n + 2) {
                          grid-column: 1;
                          margin-top: 0;
                          transform: translateY(-4em) translateX(2em);
                        }
                        .team_item:nth-child(4n + 3) {
                          grid-column: 3;
                          margin-top: 4em;
                          margin-bottom: -4em;
                          transform: translateY(4em);
                        }
                        .team_item:nth-child(4n + 4) {
                          grid-column: 1;
                          margin-top: 0;
                          margin-bottom: -4em;
                          transform: translateY(8em) translateX(2em);
                        }
                      }

                      @media screen and (max-width: 479px) {
                        .team_list {
                          display: grid;
                          grid-template-columns: repeat(4, 1fr);
                          gap: 1em;
                          align-items: start;
                        }
                        .team_item:nth-child(4n + 1) {
                          grid-column: 3;
                          margin-top: 0;
                          transform: translateX(1em);
                        }
                        .team_item:nth-child(4n + 2) {
                          grid-column: 1;
                          margin-top: 0;
                          transform: translateY(-2em) translateX(0em);
                        }
                        .team_item:nth-child(4n + 3) {
                          grid-column: 3;
                          margin-top: 2em;
                          margin-bottom: -2em;
                          transform: translateY(2em);
                        }
                        .team_item:nth-child(4n + 4) {
                          grid-column: 1;
                          margin-top: 0;
                          margin-bottom: -2em;
                          transform: translateX(0em);
                        }
                      }
                    </style>
                  </div>
                  <div data-scroll-reveal-group="" class="team_title">
                    <div data-scroll-reveal="" class="eyebrow-m">
                      Visual Quote Art · @mindflowroutines
                    </div>
                    <h2 data-scroll-reveal="chars" data-font-weight-hover="" data-weight-rest="700" data-weight-near="200" data-radius="400" class="heading-xl">
                      <span data-radius="400" data-font-weight-hover="" data-weight-rest="300" data-weight-near="800" class="heading-alt">Daily</span>
                      Visual
                      <br />
                      <span data-radius="400" data-font-weight-hover="" data-weight-rest="300" data-weight-near="800" class="heading-alt">Reminders</span>
                    </h2>
                    <div data-momentum-hover-element="" class="team-sticker is-01">
                      <img src="/images/badges/sticker-grateful.svg" loading="lazy" data-momentum-hover-target="" alt="Always Grateful" />
                    </div>
                  </div>
                  <div class="team_collection w-dyn-list">
                    <div data-team-parallax-distance="200" data-team-parallax="" role="list" class="team_list w-dyn-items">
${teamGalleryHtml}
                    </div>
                  </div>
                  <div data-momentum-hover-element="" class="team-sticker is-02">
                    <img src="/images/badges/sticker-vision.svg" loading="lazy" data-momentum-hover-target="" alt="Hold The Vision" />
                  </div>
                  <div data-momentum-hover-element="" class="team-sticker is-03">
                    <img src="/images/badges/sticker-peace.svg" loading="lazy" data-momentum-hover-target="" alt="Protect Your Peace" />
                  </div>
                  <div class="team_btn">
                    <a class="btn-link w-inline-block" data-draw-line="" data-draw-line-always="" href="https://www.pinterest.com/mindflowroutines/" target="_blank" rel="noopener noreferrer">
                      <div class="btn-link_inner">
                        <div class="text-wrap">
                          <span class="text-draw__span">Follow @mindflowroutines on Pinterest</span>
                          <div data-draw-line-box="" class="text-draw__box is-btn-link"></div>
                        </div>
                        <button data-scroll-top="" class="btn-link_arrow rotation-270">
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                          <div class="btn-link_arrow-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="btn-link_arrow-svg rotation-180">
                              <path d="M6.31445 16L6.31445 4.26512C5.35691 5.26025 4.13696 5.85247 2.48599 5.85247L1.22284 5.85247L1.22284 3.62301L2.48599 3.62301C4.76729 3.62301 6.31445 1.99993 6.31445 -6.09188e-07L8.57528 -4.98067e-07C8.57528 1.99993 10.1224 3.62301 12.4037 3.62301L13.6669 3.62301L13.6669 5.85247L12.4037 5.85247C10.7528 5.85247 9.53282 5.26025 8.57528 4.26512L8.57528 16L6.31445 16Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
${renderFooter(true)}
      </main>`;

const workGridItemsHtml = ARTICLES.map((article) => renderWorkCard(article, '100vw')).join('\n');

export const WORK_MAIN_HTML = `      <main data-barba="container" class="main-wrapper">
${renderNavbar('work')}
        <header id="section_hero" data-cursor-cards="" data-cursor-cards-threshold="300" class="section_work">
          <div class="padding-global">
            <div class="w-layout-blockcontainer container-col-11 w-container">
              <div class="work_wrapper">
                <div data-text-reveal-group="" class="work_title">
                  <div data-text-reveal="lines" class="eyebrow-l">
                    Daily Articles for Life, Money, Mindset &amp; Mood
                  </div>
                  <h1 data-text-reveal="lines" class="heading-xl">
                    Daily
                    <span class="heading-alt">Reads</span>
                  </h1>
                </div>
                <div class="work-collection w-dyn-list">
                  <div data-work-grid="" role="list" class="work-grid w-dyn-items">
${workGridItemsHtml}
                  </div>
                </div>
                <div class="css-embed w-embed">
                  <style>
                    [data-video-on-hover="active"] video { opacity: 1; }
                    .work-grid {
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      gap: 2em;
                      align-items: start;
                    }
                    .work-grid > *:nth-child(3n+2) {
                      margin-top: -8em;
                    }
                    @media (max-width: 991px) {
                      .work-grid { grid-template-columns: repeat(2, 1fr); }
                      .work-grid > *:nth-child(3n+2) { margin-top: 0; }
                      .work-grid > *:nth-child(2n) { margin-top: -4em; }
                    }
                    @media (max-width: 767px) {
                      .work-grid { gap: 1em; grid-template-columns: 1fr; }
                      .work-grid > * { margin-top: 0 !important; }
                    }
                  </style>
                </div>
              </div>
            </div>
          </div>
        </header>
${renderFooter(false)}
      </main>`;

export function getCaseMainHtml(slug: string): string {
  const article = getArticleBySlug(slug);
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const titleWords = article.title.trim().split(/\s+/);
  const midWord = Math.ceil(titleWords.length / 2);
  const maxHalfLen = Math.max(
    titleWords.slice(0, midWord).join(' ').length,
    titleWords.slice(midWord).join(' ').length,
    1
  );
  const heroHeadingEm = maxHalfLen > 8 ? +(13 * (8 / maxHalfLen)).toFixed(2) : 13;

  const stepsHtml = article.steps
    .map((step) => {
      const paragraphsHtml = step.paragraphs.map((p) => `                      <p>${p}</p>`).join('\n');
      return `                <div data-sticky-steps-item-status="after" data-sticky-steps-item="" class="case-section">
                  <div data-sticky-steps-anchor="" class="case-section_text">
                    <div data-richtext-clean="" class="rich-text-regular w-richtext">
                      <h2>
                        ${step.stepTitle}
                        <em>${step.stepAccent}</em>
                      </h2>
${paragraphsHtml}
                    </div>
                  </div>
                  <div class="case-section_media">
                    <div class="case-section_sticky">
                      <div style="background-color:${article.accentColor}" class="case-section_visual">
                        <div data-ratio="4-5" class="case-section_visual-wrap">
                          <img loading="lazy" alt="${step.stepTitle} ${step.stepAccent}" src="${step.visualImage}" style="object-fit: cover; width: 100%; height: 100%; display: block;" class="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
    })
    .join('\n');

  const relatedHtml = relatedArticles
    .map((rel) => renderWorkCard(rel, '(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px'))
    .join('\n');

  return `      <main data-barba="container" class="main-wrapper">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="nav w-nav">
          <div class="container-col-12 w-container">
            <div class="nav-inner">
              <a aria-label="Home link" class="nav-logo w-inline-block" href="/">${MINDFLOW_LOGO_SVG}</a>
              <link rel="prefetch" href="/" />
              <a aria-label="Back to articles" class="nav-close w-inline-block" href="/werk">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 14 13" fill="none" class="arrow-back">
                  <path d="M5.73664 11.4628C5.93221 9.57012 4.42162 8.04194 2.5289 8.21593L0.966963 8.35951L0.822093 6.78148C3.21167 6.56182 4.95264 7.5147 6.18287 9.24178L7.16998 -0.874516L9.93834 -0.604388L8.95112 9.51303C9.84821 7.58551 11.3744 6.33603 13.7639 6.11637L13.9088 7.6944L12.3469 7.83798C10.4541 8.01197 9.259 9.78898 9.43299 11.6817L9.50455 12.4602L6.18007 12.7658L5.73664 11.4628Z" fill="currentColor"></path>
                </svg>
              </a>
              <link rel="prefetch" href="/werk" />
            </div>
          </div>
        </div>
        <section class="section_case-steps">
          <div class="case_container">
            <div data-sticky-steps-init="" class="case_wrapper">
              <div class="case_list">
                <div data-sticky-steps-item-status="active" data-sticky-steps-item="" class="case-section is-hero">
                  <div data-heading-fit-box="" data-sticky-steps-anchor="" data-text-reveal-group="" class="case-section_text">
                    <div class="case-section_eyebrow">
                      <div data-text-reveal="lines" class="eyebrow-s">
                        ${article.category} · ${article.readTime}
                      </div>
                    </div>
                    <div class="case-section_title">
                      <h1 data-heading-fit="" data-text-reveal="lines" class="heading-xxl">
                        ${article.title}
                      </h1>
                      <div class="max-width-640px">
                        <p data-text-reveal="lines" class="eyebrow-m">
                          ${article.featuredQuote}
                        </p>
                      </div>
                    </div>
                    <div class="case-section_p">
                      <p data-text-reveal="lines" class="paragraph-m">
                        ${article.summary}
                      </p>
                    </div>
                  </div>
                  <div style="background-color:${article.accentColor}" class="case-section_media">
                    <div class="case-section_sticky">
                      <div style="background-color:${article.accentColor}" class="case-section_visual">
                        <div data-ratio="4-5" class="case-section_visual-wrap">
                          <img loading="lazy" alt="${article.title}" src="${article.quoteImage}" style="object-fit: cover; width: 100%; height: 100%; display: block;" class="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
${stepsHtml}
              </div>
            </div>
          </div>
          <div class="css-embed w-embed">
            <style>
              @media screen and (min-width: 992px) {
                .case-section.is-hero .case-section_title .heading-xxl {
                  font-size: ${heroHeadingEm}em;
                }
                [data-sticky-steps-item-status] .case-section_visual {
                  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                  opacity: 0;
                  visibility: hidden;
                }
                [data-sticky-steps-item-status="before"] .case-section_visual,
                [data-sticky-steps-item-status="active"] .case-section_visual {
                  opacity: 1;
                  visibility: visible;
                }
                [data-sticky-steps-item-status] .case-section_text {
                  transition: opacity 0.5s ease-in-out;
                  opacity: 0.25;
                }
                [data-sticky-steps-item-status="active"] .case-section_text {
                  opacity: 1;
                }
                .case-section_visual[data-ratio="9-16"] {
                  max-width: 40em;
                }
              }
              [data-ratio="4-5"]  { aspect-ratio: 4 / 5; }
              [data-ratio="1-1"]  { aspect-ratio: 1 / 1; }
              [data-ratio="9-16"] { aspect-ratio: 9 / 16; }
              .case-section_visual-wrap:not([data-ratio]),
              .case-section_visual-wrap[data-ratio=""] {
                aspect-ratio: 4 / 5;
              }
              .case-section_visual-wrap {
                height: auto;
                margin-inline: auto;
                width: min(100%, calc(90svh * 4 / 5));
              }
              .case-section_visual-wrap[data-ratio="1-1"] {
                width: min(100%, 90svh);
              }
              .case-section_visual-wrap[data-ratio="9-16"] {
                width: min(100%, calc(90svh * 9 / 16));
              }
            </style>
          </div>
        </section>
        <section class="section_case-end">
          <div class="padding-global">
            <div class="container-col-11">
              <div class="case-end_wrapper">
                <div data-ratio="16-9" class="case-end_media" style="position: relative; overflow: hidden; border-radius: 1.5em;">
                  <img loading="lazy" alt="${article.title}" src="${article.featuredImage}" style="width: 100%; height: 100%; object-fit: cover; display: block;" class="image" />
                </div>
                <div class="css-embed w-embed">
                  <style>
                    .case-end_media[data-ratio="16-9"] { aspect-ratio: 16 / 9; }
                    .case-end_media[data-ratio="4-5"]  { aspect-ratio: 4 / 5; }
                    .case-end_media[data-ratio="1-1"]  { aspect-ratio: 1 / 1; }
                    .case-end_media[data-ratio="9-16"] { aspect-ratio: 9 / 16; }
                    .case-end_media:not([data-ratio]),
                    .case-end_media[data-ratio=""] {
                      aspect-ratio: 16 / 9;
                    }
                    .case-end_media {
                      width: 100%;
                      height: auto;
                      margin-inline: auto;
                    }
                  </style>
                </div>
              </div>
            </div>
          </div>
        </section>
        <header id="section_hero" data-cursor-cards="" data-cursor-cards-threshold="300" class="section_more-work">
          <div class="padding-global">
            <div class="w-layout-blockcontainer container-col-11 w-container">
              <div class="work_wrapper">
                <div class="work_title">
                  <h2 data-scroll-reveal="" class="heading-xl">
                    More
                    <span class="heading-alt">Daily Reads</span>
                  </h2>
                </div>
                <div class="work-collection w-dyn-list">
                  <div data-work-grid="" role="list" class="work-grid is-more-work w-dyn-items">
${relatedHtml}
                  </div>
                </div>
                <div class="css-embed w-embed">
                  <style>
                    [data-video-on-hover="active"] video { opacity: 1; }
                    .work-grid {
                      display: grid;
                      grid-template-columns: repeat(3, 1fr);
                      gap: 2em;
                      align-items: start;
                    }
                    .work-grid > *:nth-child(3n+2) {
                      margin-top: -8em;
                    }
                    @media (max-width: 991px) {
                      .work-grid { grid-template-columns: repeat(2, 1fr); }
                      .work-grid > *:nth-child(3n+2) { margin-top: 0; }
                      .work-grid > *:nth-child(2n) { margin-top: -4em; }
                    }
                    @media (max-width: 767px) {
                      .work-grid { gap: 1em; grid-template-columns: 1fr; }
                      .work-grid > * { margin-top: 0 !important; }
                    }
                  </style>
                </div>
              </div>
            </div>
          </div>
        </header>
${renderFooter(false)}
      </main>`;
}

export const CASE_MAIN_HTML = getCaseMainHtml(ARTICLES[0].slug);

export const PAGE_WRAPPER_PREFIX = "      <div rd-cookieflow=\"wrapper\" class=\"rd-cookieflow_component\">\n        <div rd-cookieflow-scroll=\"disabled\" rd-cookieflow=\"settings\" class=\"rd-cookie-prefs_component w-form theme-white\">\n          <form id=\"wf-form-Privacy Policy\" name=\"wf-form-Privacy Policy\" data-name=\"Privacy Policy\" method=\"get\" class=\"rd-cookie-prefs_form\" data-wf-page-id=\"6a7eba014f1644e9f15be500\" data-wf-element-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7dd6\" data-turnstile-sitekey=\"0x4AAAAAAAQTptj2So4dx43e\">\n            <button rd-cookieflow=\"close\" type=\"button\" aria-label=\"close\" class=\"rd-close_component\">\n              <div class=\"icon-embed-small w-embed\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 33 33\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\">\n                  <path d=\"M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z\" fill=\"currentColor\">\n                  </path>\n                </svg>\n              </div>\n            </button>\n            <div class=\"rd-cookie-prefs_content\">\n              <div class=\"rd-cookie-prefs_content-top\">\n                <div class=\"rd-cookie-banner_top-content\">\n                  <div class=\"rd-cookie-banner_top-element\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z\" fill=\"currentColor\">\n                      </path>\n                    </svg>\n                    <div class=\"paragraph-s-2\">\n                      Zone 3\n                    </div>\n                  </div>\n                  <div class=\"re-vertical-separator\">\n                  </div>\n                  <div class=\"rd-cookie-banner_top-element\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                      <path d=\"M10.243 16.314L6 12.07L7.414 10.656L10.243 13.484L15.899 7.82703L17.314 9.24203L10.243 16.314Z\" fill=\"currentColor\">\n                      </path>\n                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z\" fill=\"currentColor\">\n                      </path>\n                    </svg>\n                    <div class=\"paragraph-s-2\">\n                      GDPR-Compliant\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"rd-cookie-prefs_content-middle\">\n                <div class=\"rd-cookie-prefs_title-wrap\">\n                  <div class=\"rd-cookie-prefs_heading-wrapper\">\n                    <h2 class=\"heading-s\">\n                      Privacy Settings\n                    </h2>\n                    <div class=\"rd-cookie-prefs_legal-buttons-wrapper-left\">\n                      <a class=\"btn-icon-link w-inline-block theme-default\" href=\"/privacyverklaring\">                      <div class=\"btn-icon-content-2 is-secondary\">\n                        <div class=\"btn-icon-content__mask\">\n                          <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                          Privacy Policy\n</span>\n                        </div>\n                        <div data-button-anim-target=\"\" class=\"btn-icon-content__bg is-secondary\">\n                        </div>\n                      </div>\n</a>\n                      <link rel=\"prefetch\" href=\"/privacyverklaring\" />\n                    </div>\n                  </div>\n                  <div class=\"paragraph-s-2\">\n                    We use cookies and similar technologies in the categories below. Toggle any category to accept or decline the corresponding data collection.\n                  </div>\n                </div>\n                <div class=\"rd-cookie-prefs_list\">\n                  <div class=\"rd-cookie-prefs_category\">\n                    <div class=\"rd-cookie-prefs_toggle\">\n                      <div class=\"rd-cookie-prefs_toggle-text\">\n                        Required\n                      </div>\n                      <div class=\"rd-toggle_checkbox is-essential\">\n                        <div class=\"rd-toggle_track is-required\">\n                        </div>\n                        <div class=\"rd-toggle_dot is-required\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"rd-cookie-prefs_wrapper\">\n                      <div class=\"rd-cookie-prefs_item\">\n                        <div class=\"rd-cookie-prefs_item-title\">\n                          <div class=\"rd-cookie-prefs_item-title-wrap\">\n                            <div rd-tooltipx=\"wrapper\" class=\"rd-tooltip_component\">\n                              <div rd-tooltipx=\"for\" class=\"paragraph-regular-3\">\n                                Essential\n                              </div>\n                              <div rd-tooltipx=\"icon\" tabindex=\"0\" class=\"rd-tooltip-icon is-mobile\">\n                                <div class=\"icon-18px w-embed\">\n                                  <svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.00303298 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9945 5.64519 13.2552 3.86793 11.9436 2.55637C10.6321 1.24482 8.85481 0.50554 7 0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52191 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2458 8.89111 11.6914 10.2241 10.7077 11.2077C9.72406 12.1914 8.39111 12.7458 7 12.75Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7.4375 6.625H6.5625C6.32088 6.625 6.125 6.82088 6.125 7.0625V10.5625C6.125 10.8041 6.32088 11 6.5625 11H7.4375C7.67912 11 7.875 10.8041 7.875 10.5625V7.0625C7.875 6.82088 7.67912 6.625 7.4375 6.625Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7 5.75C7.48325 5.75 7.875 5.35825 7.875 4.875C7.875 4.39175 7.48325 4 7 4C6.51675 4 6.125 4.39175 6.125 4.875C6.125 5.35825 6.51675 5.75 7 5.75Z\" fill=\"currentColor\">\n                                    </path>\n                                  </svg>\n                                </div>\n                                <div rd-tooltipx=\"tooltip\" class=\"rd-tooltip-box\">\n                                  <div class=\"paragraph-regular-2\">\n                                    Necessary for basic website functionality.\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"paragraph-xs-2 opacity-40\">\n                          Necessary for core website functionality.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"rd-cookie-prefs_category\">\n                    <div class=\"rd-cookie-prefs_toggle\">\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-large\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox\">\n                        <span class=\"rd-toggle_label no-label\">                        Marketing Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"marketing-checkbox\" name=\"marketing\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                    <div class=\"rd-cookie-prefs_wrapper\">\n                      <div class=\"rd-cookie-prefs_item\">\n                        <div class=\"rd-cookie-prefs_item-title\">\n                          <div class=\"rd-cookie-prefs_item-title-wrap\">\n                            <div rd-tooltipx=\"wrapper\" class=\"rd-tooltip_component\">\n                              <div rd-tooltipx=\"for\" class=\"paragraph-regular-3\">\n                                Marketing\n                              </div>\n                              <div rd-tooltipx=\"icon\" tabindex=\"0\" class=\"rd-tooltip-icon is-mobile\">\n                                <div class=\"icon-embed-xxxsmall w-embed\">\n                                  <svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.00303298 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9945 5.64519 13.2552 3.86793 11.9436 2.55637C10.6321 1.24482 8.85481 0.50554 7 0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52191 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2458 8.89111 11.6914 10.2241 10.7077 11.2077C9.72406 12.1914 8.39111 12.7458 7 12.75Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7.4375 6.625H6.5625C6.32088 6.625 6.125 6.82088 6.125 7.0625V10.5625C6.125 10.8041 6.32088 11 6.5625 11H7.4375C7.67912 11 7.875 10.8041 7.875 10.5625V7.0625C7.875 6.82088 7.67912 6.625 7.4375 6.625Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7 5.75C7.48325 5.75 7.875 5.35825 7.875 4.875C7.875 4.39175 7.48325 4 7 4C6.51675 4 6.125 4.39175 6.125 4.875C6.125 5.35825 6.51675 5.75 7 5.75Z\" fill=\"currentColor\">\n                                    </path>\n                                  </svg>\n                                </div>\n                                <div rd-tooltipx=\"tooltip\" class=\"rd-tooltip-box\">\n                                  <div>\n                                    Helps deliver targeted ads that are relevant to you.\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"paragraph-xs-2 opacity-40\">\n                          Helps deliver relevant content and inspiration tailored to you.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"rd-cookie-prefs_category\">\n                    <div class=\"rd-cookie-prefs_toggle\">\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-large\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox\">\n                        <span class=\"rd-toggle_label no-label\">                        Analytics Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"analytics-checkbox\" name=\"analytics\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                    <div class=\"rd-cookie-prefs_wrapper\">\n                      <div class=\"rd-cookie-prefs_item\">\n                        <div class=\"rd-cookie-prefs_item-title\">\n                          <div class=\"rd-cookie-prefs_item-title-wrap\">\n                            <div rd-tooltipx=\"wrapper\" class=\"rd-tooltip_component\">\n                              <div rd-tooltipx=\"for\" class=\"paragraph-regular-3\">\n                                Analytics\n                              </div>\n                              <div rd-tooltipx=\"icon\" tabindex=\"0\" class=\"rd-tooltip-icon is-mobile\">\n                                <div class=\"icon-embed-xxxsmall w-embed\">\n                                  <svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.00303298 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9945 5.64519 13.2552 3.86793 11.9436 2.55637C10.6321 1.24482 8.85481 0.50554 7 0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52191 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2458 8.89111 11.6914 10.2241 10.7077 11.2077C9.72406 12.1914 8.39111 12.7458 7 12.75Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7.4375 6.625H6.5625C6.32088 6.625 6.125 6.82088 6.125 7.0625V10.5625C6.125 10.8041 6.32088 11 6.5625 11H7.4375C7.67912 11 7.875 10.8041 7.875 10.5625V7.0625C7.875 6.82088 7.67912 6.625 7.4375 6.625Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7 5.75C7.48325 5.75 7.875 5.35825 7.875 4.875C7.875 4.39175 7.48325 4 7 4C6.51675 4 6.125 4.39175 6.125 4.875C6.125 5.35825 6.51675 5.75 7 5.75Z\" fill=\"currentColor\">\n                                    </path>\n                                  </svg>\n                                </div>\n                                <div rd-tooltipx=\"tooltip\" class=\"rd-tooltip-box\">\n                                  <div>\n                                    Provides insights on your usage and site interaction.\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"paragraph-xs-2 opacity-40\">\n                          Provides anonymous insights into how readers interact with our articles.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"rd-cookie-prefs_category is-last\">\n                    <div class=\"rd-cookie-prefs_toggle\">\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot\">\n                      </div>\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-large\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox\">\n                        <span class=\"rd-toggle_label no-label\">                        Personalization Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"personalization-checkbox\" name=\"personalization\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                    <div class=\"rd-cookie-prefs_wrapper\">\n                      <div class=\"rd-cookie-prefs_item\">\n                        <div class=\"rd-cookie-prefs_item-title\">\n                          <div class=\"rd-cookie-prefs_item-title-wrap\">\n                            <div rd-tooltipx=\"wrapper\" class=\"rd-tooltip_component\">\n                              <div rd-tooltipx=\"for\" class=\"paragraph-regular-3\">\n                                Personalization\n                              </div>\n                              <div rd-tooltipx=\"icon\" tabindex=\"0\" class=\"rd-tooltip-icon is-mobile\">\n                                <div class=\"icon-embed-xxxsmall w-embed\">\n                                  <svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <path d=\"M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.00303298 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9945 5.64519 13.2552 3.86793 11.9436 2.55637C10.6321 1.24482 8.85481 0.50554 7 0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52191 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2458 8.89111 11.6914 10.2241 10.7077 11.2077C9.72406 12.1914 8.39111 12.7458 7 12.75Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7.4375 6.625H6.5625C6.32088 6.625 6.125 6.82088 6.125 7.0625V10.5625C6.125 10.8041 6.32088 11 6.5625 11H7.4375C7.67912 11 7.875 10.8041 7.875 10.5625V7.0625C7.875 6.82088 7.67912 6.625 7.4375 6.625Z\" fill=\"currentColor\">\n                                    </path>\n                                    <path d=\"M7 5.75C7.48325 5.75 7.875 5.35825 7.875 4.875C7.875 4.39175 7.48325 4 7 4C6.51675 4 6.125 4.39175 6.125 4.875C6.125 5.35825 6.51675 5.75 7 5.75Z\" fill=\"currentColor\">\n                                    </path>\n                                  </svg>\n                                </div>\n                                <div rd-tooltipx=\"tooltip\" class=\"rd-tooltip-box\">\n                                  <div>\n                                    Tailors your experience by remembering your settings.\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"paragraph-xs-2 opacity-40\">\n                          Tailors your reading experience by remembering your preferences.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"rd-cookie-prefs_buttons-wrapper\">\n                <div class=\"rd-cookie-prefs_buttons-wrapper-left\">\n                  <a class=\"btn-icon-link is-outline w-inline-block\" href=\"/legals/privacy-policy\" rd-cookieflow=\"reject\" typ=\"button\">                  <div class=\"btn-icon-content-2 is-outline\">\n                    <div class=\"btn-icon-content__mask\">\n                      <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                      Decline All\n</span>\n                    </div>\n                    <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                    </div>\n                  </div>\n</a>\n                  <a class=\"btn-icon-link w-inline-block theme-default\" href=\"#\" rd-cookieflow=\"accept\" typ=\"button\">                  <div class=\"btn-icon-content-2 is-secondary\">\n                    <div class=\"btn-icon-content__mask\">\n                      <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                      Accept All\n</span>\n                    </div>\n                    <div data-button-anim-target=\"\" class=\"btn-icon-content__bg is-secondary\">\n                    </div>\n                  </div>\n</a>\n                </div>\n                <a aria-label=\"Contact link\" class=\"btn-icon-link w-inline-block\" href=\"#\" rd-cookieflow=\"accept-selected\" typ=\"button\">                <div class=\"btn-icon-content-2\">\n                  <div class=\"btn-icon-content__mask\">\n                    <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                    Accept\n</span>\n                  </div>\n                  <div data-icon-size=\"normal\" class=\"btn-icon-icon\">\n                    <div data-button-anim-target=\"\" class=\"btn-icon-icon__bg\">\n                    </div>\n                    <div class=\"btn-icon-icon__wrap\">\n                      <div class=\"btn-icon-icon__list\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                      </div>\n                    </div>\n                  </div>\n                  <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                  </div>\n                </div>\n</a>\n              </div>\n            </div>\n          </form>\n          <div class=\"w-form-done\">\n          </div>\n          <div class=\"w-form-fail\">\n          </div>\n          <div rd-cookieflow=\"close\" class=\"rd-cookie-prefs_overlay\">\n          </div>\n          <div rd-cookieflow=\"preferences-interaction\" data-w-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7e99\" class=\"rd-cookie-prefs_trigger\">\n          </div>\n        </div>\n        <div rd-cookieflow=\"consent-banner\" class=\"rd-cookie-consent_component theme-white\">\n          <div class=\"rd-cookie-consent_content\">\n            <div class=\"rd-cookie-consent_content-top\">\n              <div class=\"rd-cookie-banner_top-content\">\n                <div class=\"rd-cookie-banner_top-element\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z\" fill=\"currentColor\">\n                    </path>\n                  </svg>\n                  <div class=\"paragraph-xs-2\">\n                    Zone 3\n                  </div>\n                </div>\n                <div class=\"re-vertical-separator\">\n                </div>\n                <div class=\"rd-cookie-banner_top-element\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                    <path d=\"M10.243 16.314L6 12.07L7.414 10.656L10.243 13.484L15.899 7.82703L17.314 9.24203L10.243 16.314Z\" fill=\"currentColor\">\n                    </path>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z\" fill=\"currentColor\">\n                    </path>\n                  </svg>\n                  <div class=\"paragraph-xs-2\">\n                    Opt-In / GDPR\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"rd-cookie-consent_content-middle\">\n              <div class=\"rd-cookie-consent_title-wrap\">\n                <div class=\"paragraph-s-2\">\n                  Existing Privacy Preferences Found\n                </div>\n              </div>\n              <div class=\"rd-cookie-consent_list\">\n                <div class=\"rd-cookie-consent_category\">\n                  <div class=\"paragraph-xs-2\">\n                    Submitted on\n                  </div>\n                  <div rd-cookieflow=\"consent-date\" class=\"paragraph-xs-2 opacity-40\">\n                    Mar 26, 2025 – 14:37:22 UTC\n                  </div>\n                </div>\n                <div class=\"rd-cookie-consent_category\">\n                  <div rd-tooltipx=\"wrapper\" class=\"rd-tooltip_component\">\n                    <div rd-tooltipx=\"for\" class=\"paragraph-xs-2\">\n                      Your Consent ID\n                    </div>\n                    <div role=\"tooltip\" tabindex=\"0\" rd-tooltipx=\"icon\" class=\"rd-tooltip-icon\">\n                      <div class=\"icon-embed-xxxsmall w-embed\">\n                        <svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path d=\"M7 0.5C5.61553 0.5 4.26216 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82122C0.00303298 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05026 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67879 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C13.9945 5.64519 13.2552 3.86793 11.9436 2.55637C10.6321 1.24482 8.85481 0.50554 7 0.5ZM7 12.75C5.96165 12.75 4.94662 12.4421 4.08326 11.8652C3.2199 11.2883 2.547 10.4684 2.14964 9.50909C1.75228 8.54978 1.64831 7.49418 1.85088 6.47578C2.05345 5.45738 2.55347 4.52191 3.28769 3.78769C4.02192 3.05346 4.95738 2.55345 5.97578 2.35088C6.99418 2.1483 8.04978 2.25227 9.00909 2.64963C9.9684 3.04699 10.7883 3.7199 11.3652 4.58326C11.9421 5.44661 12.25 6.46165 12.25 7.5C12.2458 8.89111 11.6914 10.2241 10.7077 11.2077C9.72406 12.1914 8.39111 12.7458 7 12.75Z\" fill=\"currentColor\">\n                          </path>\n                          <path d=\"M7.4375 6.625H6.5625C6.32088 6.625 6.125 6.82088 6.125 7.0625V10.5625C6.125 10.8041 6.32088 11 6.5625 11H7.4375C7.67912 11 7.875 10.8041 7.875 10.5625V7.0625C7.875 6.82088 7.67912 6.625 7.4375 6.625Z\" fill=\"currentColor\">\n                          </path>\n                          <path d=\"M7 5.75C7.48325 5.75 7.875 5.35825 7.875 4.875C7.875 4.39175 7.48325 4 7 4C6.51675 4 6.125 4.39175 6.125 4.875C6.125 5.35825 6.51675 5.75 7 5.75Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                      </div>\n                      <div rd-tooltipx=\"tooltip\" class=\"rd-tooltip-box\">\n                        <div>\n                          This ID lets you retrieve or verify your consent settings. It stays saved for\n                          <span rd-consent-expiry=\"number\">                          {0}\n</span>\n                          months or until you clear cookies — keep a copy in case you need to reference it.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"component-scripts w-embed w-script\">\n                      <!-- TooltipX by Reform Digital® -->\n                      <script defer=\"\" src=\"https://cdn.jsdelivr.net/npm/@reform-digital/embed-script@1.0.3/prod/index.js\" rd-component-name=\"rd-tooltipx\" rd-component-src=\"https://cdn.jsdelivr.net/npm/@reform-digital/tooltip-x@1.1.0/prod/index.js\">\n                      </script>\n                    </div>\n                  </div>\n                  <div rd-cookieflow=\"consent-id\" class=\"paragraph-xs-2 opacity-40\">\n                    AMC89MQ329407NSADRFA09MA7SD\n                  </div>\n                </div>\n                <div class=\"rd-cookie-consent_category\">\n                  <div class=\"rd-cookie-prefs_toggle is-not-interactive\">\n                    <div class=\"paragraph-xs-2 opacity-40\">\n                      Required\n                    </div>\n                    <div class=\"rd-toggle_checkbox is-tiny\">\n                      <div class=\"rd-toggle_track is-required\">\n                      </div>\n                      <div class=\"rd-toggle_dot is-tiny is-essential\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"paragraph-xs-2\">\n                    Essential Consent\n                  </div>\n                </div>\n                <div class=\"rd-cookie-consent_category\">\n                  <div class=\"rd-cookie-prefs_toggle\">\n                    <div rd-cookieflow=\"marketing-state-off\" class=\"paragraph-xs-2 opacity-40\">\n                      Uit\n                    </div>\n                    <div rd-cookieflow=\"marketing-state-on\" class=\"rd-cookie-consent_text is-on\">\n                      Aan\n                    </div>\n                    <div class=\"rd-cookie-consent_toggle is-not-interactive\">\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot is-tiny\">\n                      </div>\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-small\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox is-tiny\">\n                        <span class=\"rd-toggle_label no-label\">                        Marketing Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"marketing-checkbox\" disabled=\"\" name=\"marketing-consent\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"paragraph-xs-2\">\n                    Marketing Consent\n                  </div>\n                </div>\n                <div class=\"rd-cookie-consent_category\">\n                  <div class=\"rd-cookie-prefs_toggle\">\n                    <div rd-cookieflow=\"analytics-state-off\" class=\"paragraph-xs-2 opacity-40\">\n                      Uit\n                    </div>\n                    <div rd-cookieflow=\"analytics-state-on\" class=\"rd-cookie-consent_text is-on\">\n                      Aan\n                    </div>\n                    <div class=\"rd-cookie-consent_toggle is-not-interactive\">\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot is-tiny\">\n                      </div>\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-small\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox is-tiny\">\n                        <span class=\"rd-toggle_label no-label\">                        Analytics Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"analytics-checkbox\" disabled=\"\" name=\"analytics-consent\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"paragraph-xs-2\">\n                    Analytics Consent\n                  </div>\n                </div>\n                <div class=\"rd-cookie-consent_category is-last\">\n                  <div class=\"rd-cookie-prefs_toggle\">\n                    <div rd-cookieflow=\"personalization-state-off\" class=\"paragraph-xs-2 opacity-40\">\n                      Uit\n                    </div>\n                    <div rd-cookieflow=\"personalization-state-on\" class=\"rd-cookie-consent_text is-on\">\n                      Aan\n                    </div>\n                    <div class=\"rd-cookie-consent_toggle is-not-interactive\">\n                      <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                      </div>\n                      <div aria-hidden=\"true\" class=\"rd-toggle_dot is-tiny\">\n                      </div>\n                      <div aria-hidden=\"true\" rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-small\">\n                      </div>\n                      <label class=\"rd-toggle_checkbox is-tiny\">\n                        <span class=\"rd-toggle_label no-label\">                        Personalization Consent\n</span>\n                        <input type=\"checkbox\" rd-cookieflow=\"personalization-checkbox\" disabled=\"\" name=\"personalization-consent\" class=\"rd-toggle_input\" />\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"paragraph-xs-2\">\n                    Personalization Consent\n                  </div>\n                </div>\n              </div>\n              <a aria-label=\"Contact link\" class=\"btn-icon-link w-inline-block\" href=\"#\" rd-cookieflow=\"open-settings\">              <div class=\"btn-icon-content-2\">\n                <div class=\"btn-icon-content__mask\">\n                  <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                  Edit Preferences\n</span>\n                </div>\n                <div data-icon-size=\"normal\" class=\"btn-icon-icon\">\n                  <div data-button-anim-target=\"\" class=\"btn-icon-icon__bg\">\n                  </div>\n                  <div class=\"btn-icon-icon__wrap\">\n                    <div class=\"btn-icon-icon__list\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n                <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                </div>\n              </div>\n</a>\n            </div>\n          </div>\n          <button rd-cookieflow=\"close\" type=\"button\" aria-label=\"close\" class=\"rd-close_component\">\n            <div class=\"icon-embed-small w-embed\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 33 33\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\">\n                <path d=\"M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z\" fill=\"currentColor\">\n                </path>\n              </svg>\n            </div>\n          </button>\n          <div rd-cookieflow=\"consent-interaction\" data-w-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7f0e\" class=\"rd-cookie-consent_trigger\">\n          </div>\n        </div>\n        <div rd-cookieflow=\"banner-zone-three\" class=\"rd-cookie-banner_component is-zone-3 theme-white\">\n          <div class=\"rd-cookie-banner_content\">\n            <div class=\"rd-cookie-banner_content-middle\">\n              <div class=\"cookies-title\">\n                Mindful Cookies 🍪\n              </div>\n              <div class=\"paragraph-s\">\n                MindFlow Routines uses functional and analytical cookies to understand how readers explore our daily articles and improve your experience.\n              </div>\n            </div>\n            <div class=\"rd-cookie-banner_buttons-wrapper\">\n              <a class=\"btn-icon-link is-outline w-inline-block theme-default\" href=\"#\" rd-cookieflow=\"open-settings\">              <div class=\"btn-icon-content-2 is-outline\">\n                <div class=\"btn-icon-content__mask\">\n                  <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                  Settings\n</span>\n                </div>\n                <div data-button-anim-target=\"\" class=\"btn-icon-content__bg is-white\">\n                </div>\n              </div>\n</a>\n              <div class=\"rd-cookie-prefs_buttons-wrapper-left\">\n                <a class=\"btn-icon-link is-secondary w-inline-block theme-default\" href=\"#\" rd-cookieflow=\"reject\">                <div class=\"btn-icon-content-2 is-secondary\">\n                  <div class=\"btn-icon-content__mask\">\n                    <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                    Decline\n</span>\n                  </div>\n                  <div data-button-anim-target=\"\" class=\"btn-icon-content__bg is-secondary\">\n                  </div>\n                </div>\n</a>\n                <a aria-label=\"Contact link\" class=\"btn-icon-link w-inline-block\" href=\"#\" rd-cookieflow=\"accept\">                <div class=\"btn-icon-content-2\">\n                  <div class=\"btn-icon-content__mask\">\n                    <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                    Accept\n</span>\n                  </div>\n                  <div data-icon-size=\"normal\" class=\"btn-icon-icon\">\n                    <div data-button-anim-target=\"\" class=\"btn-icon-icon__bg\">\n                    </div>\n                    <div class=\"btn-icon-icon__wrap\">\n                      <div class=\"btn-icon-icon__list\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                      </div>\n                    </div>\n                  </div>\n                  <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                  </div>\n                </div>\n</a>\n              </div>\n            </div>\n          </div>\n          <div rd-cookieflow=\"banner-interaction\" data-w-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7f66\" class=\"rd-cookie-banner_trigger\">\n          </div>\n          <button rd-cookieflow=\"close\" type=\"button\" aria-label=\"close\" class=\"rd-close_component\">\n            <div class=\"icon-embed-small w-embed\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 33 33\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\">\n                <path d=\"M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z\" fill=\"currentColor\">\n                </path>\n              </svg>\n            </div>\n          </button>\n        </div>\n        <div rd-cookieflow=\"banner-zone-two\" class=\"rd-cookie-banner_component is-zone-2 w-form theme-white\">\n          <form id=\"email-form-2\" name=\"email-form-2\" data-name=\"Email Form 2\" method=\"get\" class=\"rd-cookie-banner_us-form\" data-wf-page-id=\"6a7eba014f1644e9f15be500\" data-wf-element-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7f68\" data-turnstile-sitekey=\"0x4AAAAAAAQTptj2So4dx43e\">\n            <div class=\"rd-cookie-banner_content\">\n              <div class=\"rd-cookie-banner_content-top\">\n                <div class=\"rd-cookie-banner_top-content\">\n                  <div class=\"rd-cookie-banner_top-element\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z\" fill=\"currentColor\">\n                      </path>\n                    </svg>\n                    <div class=\"paragraph-s-3\">\n                      Zone 2\n                    </div>\n                  </div>\n                  <div class=\"re-vertical-separator\">\n                  </div>\n                  <div class=\"rd-cookie-banner_top-element\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                      <path d=\"M10.243 16.314L6 12.07L7.414 10.656L10.243 13.484L15.899 7.82703L17.314 9.24203L10.243 16.314Z\" fill=\"currentColor\">\n                      </path>\n                      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z\" fill=\"currentColor\">\n                      </path>\n                    </svg>\n                    <div class=\"paragraph-s-3\">\n                      Opt-Out / CCPA\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"rd-cookie-banner_content-middle\">\n                <div class=\"paragraph-xs-2\">\n                  MindFlow Routines uses cookies and similar technologies to enhance your reading experience and analyze site traffic.\n                </div>\n                <div class=\"rd-cookie-banner_us-consent-wrapper\">\n                  <div class=\"paragraph-xs-2\">\n                    Do not sell or share my personal information.\n                  </div>\n                  <div class=\"rd-cookie-us_toggle\">\n                    <div aria-hidden=\"true\" class=\"rd-toggle_background\">\n                    </div>\n                    <div rd-cookieflow=\"toggle-interaction\" class=\"rd-toggle_interaction is-large\">\n                    </div>\n                    <div aria-hidden=\"true\" class=\"rd-toggle_dot\">\n                    </div>\n                    <label class=\"rd-toggle_checkbox\">\n                      <span class=\"rd-toggle_label no-label\">                      Do not sell or share my personal information Consent\n</span>\n                      <input type=\"checkbox\" rd-cookieflow=\"donotsell-checkbox\" name=\"do-not-sell\" class=\"rd-toggle_input\" />\n                    </label>\n                  </div>\n                </div>\n                <div class=\"paragraph-xs-2\">\n                  <span class=\"text-style-muted\">                  View our\n</span>\n                  <a class=\"rd-banner-link\" href=\"#\">                  Privacy Policy\n</a>\n                  <span class=\"text-style-muted\">                  for more details.\n</span>\n                </div>\n              </div>\n              <div class=\"rd-cookie-banner_buttons-wrapper\">\n                <a class=\"btn-icon-link w-inline-block theme-default\" href=\"#\" rd-cookieflow=\"close\">                <div class=\"btn-icon-content-2 is-secondary\">\n                  <div class=\"btn-icon-content__mask\">\n                    <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                    Decline\n</span>\n                  </div>\n                  <div data-button-anim-target=\"\" class=\"btn-icon-content__bg is-secondary\">\n                  </div>\n                </div>\n</a>\n                <a aria-label=\"Contact link\" class=\"btn-icon-link w-inline-block\" href=\"#\" rd-cookieflow=\"accept-selected\">                <div class=\"btn-icon-content-2\">\n                  <div class=\"btn-icon-content__mask\">\n                    <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                    Save Preferences\n</span>\n                  </div>\n                  <div data-icon-size=\"normal\" class=\"btn-icon-icon\">\n                    <div data-button-anim-target=\"\" class=\"btn-icon-icon__bg\">\n                    </div>\n                    <div class=\"btn-icon-icon__wrap\">\n                      <div class=\"btn-icon-icon__list\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                          <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                          </path>\n                        </svg>\n                      </div>\n                    </div>\n                  </div>\n                  <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                  </div>\n                </div>\n</a>\n              </div>\n            </div>\n            <button rd-cookieflow=\"close\" type=\"button\" aria-label=\"close\" class=\"rd-close_component\">\n              <div class=\"icon-embed-small w-embed\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 33 33\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\">\n                  <path d=\"M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z\" fill=\"currentColor\">\n                  </path>\n                </svg>\n              </div>\n            </button>\n          </form>\n          <div rd-cookieflow=\"banner-interaction\" data-w-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7fb2\" class=\"rd-cookie-banner_trigger\">\n          </div>\n          <div class=\"w-form-done\">\n            <div>\n              Thank you! Your submission has been received!\n            </div>\n          </div>\n          <div class=\"w-form-fail\">\n            <div>\n              Oops! Something went wrong while submitting the form.\n            </div>\n          </div>\n        </div>\n        <div rd-cookieflow=\"banner-zone-one\" class=\"rd-cookie-banner_component is-zone-1 theme-white\">\n          <div class=\"rd-cookie-banner_content\">\n            <div class=\"rd-cookie-banner_content-top\">\n              <div class=\"rd-cookie-banner_top-content\">\n                <div class=\"rd-cookie-banner_top-element\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z\" fill=\"currentColor\">\n                    </path>\n                  </svg>\n                  <div class=\"paragraph-s-3\">\n                    Zone 1\n                  </div>\n                </div>\n                <div class=\"re-vertical-separator\">\n                </div>\n                <div class=\"rd-cookie-banner_top-element\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"icon-18px\">\n                    <path d=\"M10.243 16.314L6 12.07L7.414 10.656L10.243 13.484L15.899 7.82703L17.314 9.24203L10.243 16.314Z\" fill=\"currentColor\">\n                    </path>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12ZM12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21Z\" fill=\"currentColor\">\n                    </path>\n                  </svg>\n                  <div class=\"paragraph-s-3\">\n                    Notice\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"rd-cookie-banner_content-middle\">\n              <div class=\"paragraph-xs-2\">\n                MindFlow Routines uses cookies and similar technologies to enhance your reading experience and analyze site traffic.\n              </div>\n              <a aria-label=\"Contact link\" class=\"btn-icon-link w-inline-block\" href=\"#\" rd-cookieflow=\"accept\">              <div class=\"btn-icon-content-2\">\n                <div class=\"btn-icon-content__mask\">\n                  <span data-button-anim-target=\"\" class=\"btn-icon-content__text\">                  Accept\n</span>\n                </div>\n                <div data-icon-size=\"normal\" class=\"btn-icon-icon\">\n                  <div data-button-anim-target=\"\" class=\"btn-icon-icon__bg\">\n                  </div>\n                  <div class=\"btn-icon-icon__wrap\">\n                    <div class=\"btn-icon-icon__list\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 12 12\" fill=\"none\" data-button-anim-target=\"\" class=\"btn-icon-icon__arrow\">\n                        <path d=\"M-2.29154e-07 6.75758L-2.95383e-07 5.24242L9.09091 5.24242L4.92424 1.07576L6 -2.63424e-07L12 6L6 12L4.92424 10.9242L9.09091 6.75758L-2.29154e-07 6.75758Z\" fill=\"currentColor\">\n                        </path>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n                <div data-button-anim-target=\"\" class=\"btn-icon-content__bg\">\n                </div>\n              </div>\n</a>\n            </div>\n          </div>\n          <button rd-cookieflow=\"close\" type=\"button\" aria-label=\"close\" class=\"rd-close_component\">\n            <div class=\"icon-embed-small w-embed\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 33 33\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\">\n                <path d=\"M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z\" fill=\"currentColor\">\n                </path>\n              </svg>\n            </div>\n          </button>\n          <div rd-cookieflow=\"banner-interaction\" data-w-id=\"fbd19c59-d5b4-6908-9a84-df2747ff7fde\" class=\"rd-cookie-banner_trigger\">\n          </div>\n        </div>\n      </div>\n      <div class=\"global-styles\">\n        <div class=\"button-css w-embed\">\n          <style>\n            @media (hover: hover) and (pointer: fine) {\n  .btn-link:hover .btn-link_arrow-wrap {\n    transform: translateY(100%);\n  }\n}\n  \n  :root {\n  --button-052-color: #131313;\n  --button-052-color-background: #fff;\n  --button-052-color-focus: #000;\n  --button-052-height: 3em;\n  --button-052-padding-x: 1em;\n  --button-052-focus-inset: -0.125em;\n  --button-052-ease-hover: linear(0, 0.5737 7.6%, 0.8382 11.87%, 0.9463 14.19%, 1.0292 16.54%, 1.0886 18.97%, 1.1258 21.53%, 1.137 22.97%, 1.1424 24.48%, 1.1423 26.1%, 1.1366 27.86%, 1.1165 31.01%, 1.0507 38.62%, 1.0219 42.57%, 0.9995 46.99%, 0.9872 51.63%, 0.9842 58.77%, 1.0011 81.26%, 1);\n  --button-052-ease-soft-overshoot: cubic-bezier(0.59, 1, 0.88, 1.01);\n  --button-052-ease-bounce: cubic-bezier(0.34, 2.27, 0.64, 1);\n  --button-052-ease-focus: cubic-bezier(0.32, 0.72, 0, 1);\n}\n\n.button-052 {\n  -webkit-tap-highlight-color: transparent;\n}\n\n.button-052:is(:focus-visible)::after {\n  box-shadow: 0 0 0 0.125em var(--button-052-color-focus);\n}\n\n.button-052::after {\n  content: &#39;&#39;;\n  display: block;\n  position: absolute;\n  inset: var(--button-052-focus-inset);\n  border-radius: var(--button-052-border-radius);\n  transition: box-shadow 0.3s var(--button-052-ease-focus);\n  pointer-events: none;\n  z-index: 1;\n}\n\n.button-052__text-wrap {\n  will-change: transform;\n  transition: translate 0.8s var(--button-052-ease-hover), rotate 0.8s var(--button-052-ease-hover), scale 0.15s var(--button-052-ease-soft-overshoot), transform 0.15s var(--button-052-ease-soft-overshoot);\n}\n\n.button-052__icon-wrap.is--default {\n  transition: scale 0.75s var(--button-052-ease-hover), opacity 0.15s ease-out;\n}\n\n.button-052__icon-wrap.is--hover {\n  scale: 0;\n  opacity: 0;\n  transition: scale 0.75s var(--button-052-ease-hover), opacity 0.15s 0.1s ease-out;\n}\n\n@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {\n  .button-052:is(:hover, :focus-visible) .button-052__text-wrap,\n  [data-hover]:is(:hover, :focus-visible) .button-052 .button-052__text-wrap {\n    translate: calc(var(--button-052-height) * -1) -0.325em 0;\n    rotate: -3deg;\n    scale: 0.935 0.905;\n    transform: scale(1.0695187166, 1.1049723757);\n    transition: translate 0.8s 0.05s var(--button-052-ease-hover), rotate 0.8s 0.05s var(--button-052-ease-hover), scale 0.15s 0.05s var(--button-052-ease-soft-overshoot), transform 0.45s 0.2s var(--button-052-ease-bounce);\n  }\n\n  .button-052:is(:hover, :focus-visible) .button-052__icon-wrap.is--default,\n  [data-hover]:is(:hover, :focus-visible) .button-052 .button-052__icon-wrap.is--default {\n    scale: 0;\n    opacity: 0;\n    transition: scale 0.75s 0.05s var(--button-052-ease-hover), opacity 0.15s 0.2s ease-out;\n  }\n\n  .button-052:is(:hover, :focus-visible) .button-052__icon-wrap.is--hover,\n  [data-hover]:is(:hover, :focus-visible) .button-052 .button-052__icon-wrap.is--hover {\n    scale: 1;\n    opacity: 1;\n    transition: scale 0.75s 0.1s var(--button-052-ease-hover), opacity 0.15s ease-out;\n  }\n}\n          </style>\n        </div>\n        <div class=\"bunny-bg-css w-embed\">\n          <style>\n            /* Animation */\n[data-bunny-background-init] :is(.bunny-bg__placeholder, .bunny-bg__loading) {\n  transition: opacity 0.3s linear, visibility 0.3s linear;\n}\n\n/* Placeholder */\n[data-bunny-background-init][data-player-status=&#34;playing&#34;] .bunny-bg__placeholder,\n[data-bunny-background-init][data-player-status=&#34;paused&#34;] .bunny-bg__placeholder,\n[data-bunny-background-init][data-player-activated=&#34;true&#34;][data-player-status=&#34;ready&#34;] .bunny-bg__placeholder {\n  opacity: 0;\n  visibility: hidden;\n}\n\n/* Play/Pause */\n[data-bunny-background-init][data-player-status=&#34;playing&#34;] .bunny-bg__play-svg,\n[data-bunny-background-init][data-player-status=&#34;loading&#34;] .bunny-bg__play-svg {\n  display: none;\n}\n\n[data-bunny-background-init][data-player-status=&#34;playing&#34;] .bunny-bg__pause-svg,\n[data-bunny-background-init][data-player-status=&#34;loading&#34;] .bunny-bg__pause-svg{\n  display: block;\n}\n\n/* Loading */\n[data-bunny-background-init][data-player-status=&#34;loading&#34;] .bunny-bg__loading {\n  opacity: 1;\n  visibility: visible;\n}\n          </style>\n        </div>\n        <div class=\"bunny-player-css w-embed\">\n          <style>\n            /* Animation */\n[data-bunny-player-init] :is(.bunny-player__placeholder, .bunny-player__dark, .bunny-player__playpause, .bunny-player__loading) {\n  transition: opacity 0.3s linear, visibility 0.3s linear;\n}\n\n/* Placeholder */\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__placeholder,\n[data-bunny-player-init][data-player-status=&#34;paused&#34;] .bunny-player__placeholder,\n[data-bunny-player-init][data-player-activated=&#34;true&#34;][data-player-status=&#34;ready&#34;] .bunny-player__placeholder {\n  opacity: 0;\n  visibility: hidden;\n}\n\n/* Dark Overlay */\n[data-bunny-player-init][data-player-status=&#34;paused&#34;] .bunny-player__dark,\n[data-bunny-player-init][data-player-status=&#34;playing&#34;][data-player-hover=&#34;active&#34;] .bunny-player__dark{\n  opacity: 0.3;\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__dark {\n  opacity: 0;\n}\n\n/* Play/Pause */\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__playpause,\n[data-bunny-player-init][data-player-status=&#34;loading&#34;] .bunny-player__playpause {\n  opacity: 0;\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;][data-player-hover=&#34;active&#34;] .bunny-player__playpause {\n  opacity: 1;\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__play-svg,\n[data-bunny-player-init][data-player-status=&#34;loading&#34;] .bunny-player__play-svg {\n  display: none;\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__pause-svg,\n[data-bunny-player-init][data-player-status=&#34;loading&#34;] .bunny-player__pause-svg{\n  display: block;\n}\n\n/* Loading */\n[data-bunny-player-init][data-player-status=&#34;loading&#34;] .bunny-player__loading {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Interface */\n.bunny-player__interface {\n  transition: all 0.6s cubic-bezier(0.625, 0.05, 0, 1);\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;] .bunny-player__interface,\n[data-bunny-player-init][data-player-status=&#34;loading&#34;] .bunny-player__interface{\n  opacity: 0;\n  transform: translateY(1em) rotate(0.001deg);\n}\n\n[data-bunny-player-init][data-player-status=&#34;playing&#34;][data-player-hover=&#34;active&#34;] .bunny-player__interface,\n[data-bunny-player-init][data-player-status=&#34;loading&#34;][data-player-hover=&#34;active&#34;] .bunny-player__interface {\n  opacity: 1;\n  transform: translateY(0em) rotate(0.001deg);\n}\n\n/* Timeline */\n[data-bunny-player-init][data-player-status=&#34;idle&#34;][data-player-activated=&#34;false&#34;] .bunny-player__timeline,\n[data-bunny-player-init][data-player-status=&#34;ready&#34;][data-player-activated=&#34;false&#34;] .bunny-player__timeline {\n  pointer-events: none;\n}\n\n/* Timeline Handle */\n[data-bunny-player-init] .bunny-player__timeline-handle {\n  transition: transform 0.15s ease-in-out;\n}\n\n[data-bunny-player-init][data-timeline-drag=&#34;true&#34;] .bunny-player__timeline-handle {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n/* Fullscreen */\n[data-bunny-player-init][data-player-fullscreen=&#34;true&#34;] .bunny-player__fullscreen-shrink-svg {\n  display: block;\n}\n\n[data-bunny-player-init][data-player-fullscreen=&#34;true&#34;] .bunny-player__fullscreen-scale-svg {\n  display: none;\n}\n\n/* Mute */\n[data-bunny-player-init][data-player-muted=&#34;true&#34;] .bunny-player__volume-mute-svg {\n  display: block;\n}\n\n[data-bunny-player-init][data-player-muted=&#34;true&#34;] .bunny-player__volume-up-svg {\n  display: none;\n}\n\n/* Cover Mode */\n[data-bunny-player-init][data-player-update-size=&#34;cover&#34;] {\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n[data-bunny-player-init][data-player-update-size=&#34;cover&#34;] [data-player-before] {\n  display: none;\n}\n\n[data-bunny-player-init][data-player-update-size=&#34;cover&#34;][data-player-fullscreen=&#34;false&#34;] .bunny-player__video {\n  object-fit: cover;\n}\n          </style>\n        </div>\n        <div class=\"custom-cursor w-embed\">\n          <style>\n            /* Cursor &#34;default&#34; */\nbody,\nbody :is([data-cursor=&#34;default&#34;], [data-cursor=&#34;default&#34;] *),\nbody * {\n  cursor: url(&#34;https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a7efd2a38121cbf2072df25_6bd10a5e7dff3afb845ff5b8fd083d78_cursor-default.svg&#34;) 3 0, auto;\n}\n\n/* Cursor &#34;text&#34; */\nbody :is([data-cursor=&#34;text&#34;], [data-cursor=&#34;text&#34;] *),\nbody :is(p, h1, h2, h3, h4, h5, h6, input[type=&#34;text&#34;], textarea) {\n  cursor: url(&#34;https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a7efdaa0b6336d15ded23e1_2666cf554f4582822b5b4a4ac14c675e_cursor-text.svg&#34;) 14 29, text;\n}\n\n/* Cursor &#34;pointer&#34; (Hover) */\nbody :is([data-cursor=&#34;pointer&#34;], [data-cursor=&#34;pointer&#34;] *),\nbody :is(a, a *, a p, button, button *, select, input[type=&#34;submit&#34;], input[type=&#34;button&#34;], input[type=&#34;radio&#34;], input[type=&#34;checkbox&#34;]) {\n  cursor: url(&#34;https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a7efd2a1b7a0864f5feade5_f6011f382277fbdc8617d2ad8731c99b_cursor-pointer.svg&#34;) 18 0, pointer;\n}\n\n/* Cursor &#34;grab&#34; */\nbody :is([data-cursor=&#34;grab&#34;], [data-cursor=&#34;grab&#34;] *) {\n  cursor: url(&#34;https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a7eff42062aed245090a1ac_c598ce8b65d00a775485663f39a4fb22_cursor-grab.svg&#34;) 18 6, grab;\n}\n\n/* Cursor &#34;grabbing&#34; */\nbody :is([data-cursor=&#34;grabbing&#34;], [data-cursor=&#34;grabbing&#34;] *) {\n  cursor: url(&#34;https://cdn.prod.website-files.com/6a7eba014f1644e9f15be52d/6a7eff42797f1c668357135d_4b415d8ef14cf6f8b4587f59dd479df5_cursor-grabbing.svg&#34;) 18 0, grabbing;\n}\n          </style>\n        </div>\n        <div class=\"cursor-marquee-css w-embed\">\n          <style>\n            .cursor-marquee__card {\n  transition: all 0.4s cubic-bezier(.75, 0, .25, 1);\n  transform: translateY(0%) rotate(0.001deg);\n  clip-path: inset(calc(50% - 0.25em) round 50em);\n  will-change: clip-path;\n  opacity: 0;\n}\n\n[data-cursor-marquee-status=&#34;active&#34;] .cursor-marquee__card {\n  clip-path: inset(0 round 50em);\n  transform: translateY(-25%) rotate(0.001deg);\n}\n\n/* Show cursor dot when script loaded */\n[data-cursor-marquee-status=&#34;active&#34;] .cursor-marquee__card{\n  opacity: 1;\n}\n\n/* CSS Keyframe Animation */\n@keyframes translateXCursor { \n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.cursor-marquee__text-span {\n  animation: translateXCursor 10s linear infinite paused;\n  transition: opacity 0.15s ease-in-out 0.25s;\n  opacity: 0;\n}\n\n[data-cursor-marquee-status=&#34;active&#34;] .cursor-marquee__text-span {\n  transition: opacity 0.15s ease-in-out 0s;\n  opacity: 1;\n}\n          </style>\n        </div>\n        <div class=\"draw-line w-embed\">\n          <style>\n            [data-draw-line-box] svg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: visible !important;\n}\n\n  .footer-link.w--current{\n    opacity: 100% !important;\n  }\n.btn-link .text-draw__box svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n          </style>\n        </div>\n        <div class=\"heading-fit w-embed\">\n          <style>\n            [data-heading-fit] {\n  overflow-wrap: normal;\n  word-break: normal;\n  hyphens: none;\n}\n          </style>\n        </div>\n        <div class=\"nav-css w-embed\">\n          <style>\n            /* Basis: instant — dit is wat de scroll-theme trigger gebruikt */\n  .nav-logo {\n    color: var(--_colors---swatch--blue);\n    transition: color 0s;\n  }\n\n  [data-nav-theme-active=&#34;dark&#34;] .nav-logo,\n  [data-nav-logo=&#34;light&#34;] .nav-logo {\n    color: #fff;\n  }\n  \n  @media screen and (max-width: 479px) {\n    [data-nav-status=&#34;open&#34;] .nav-links,\n    [data-nav-status=&#34;open&#34;] .nav-menu-bg {\n      pointer-events: auto;\n    }\n\n        /* Menu dicht: zachte overgang terug, na de 350ms uit de JS */\n      [data-nav-status=&#34;open&#34;] .nav-logo,\n    [data-nav-status=&#34;closed&#34;] .nav-logo {\n      transition: color 0.3s ease;\n    }\n  }\n          </style>\n        </div>\n        <div class=\"text-reveal w-embed\">\n          <style>\n            .line-mask {\n  padding-bottom: 0.2em;\n  margin-bottom: -0.2em;\n  padding-right: 0.2em;\n  margin-right: -0.2em;\n}\n  \n  [data-text-reveal] {\n  visibility: hidden;\n}\n\nhtml.wf-design-mode [data-text-reveal] {\n  visibility: visible;\n}\n\n  [data-scroll-reveal] {\n  visibility: hidden;\n}\n\nhtml.wf-design-mode [data-scroll-reveal] {\n  visibility: visible;\n}\n          </style>\n        </div>\n        <div class=\"transition-css w-embed\">\n          <style>\n            [data-transition-wrap] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n  background-color: var(--_colors---swatch--blue);\n}\n\n[data-transition-wrap][data-transition-ready] {\n  background-color: transparent;\n}\n\nhtml:not([data-page-ready]) [data-barba=&#34;container&#34;] {\n  visibility: hidden;\n}\n\n/* Designer: geen preloader-staat */\nhtml.wf-design-mode [data-transition-wrap] {\n  background-color: transparent;\n}\n\nhtml.wf-design-mode [data-barba=&#34;container&#34;] {\n  visibility: visible !important;\n}\n          </style>\n        </div>\n        <div class=\"adaptive-scaling w-embed\">\n          <style>\n            /* ------------------------- Scaling system -------------------------------------------------- */\n \n/* Desktop */\n:root {\n  --size-unit: 16;\n  /* Body font-size in design — no px */\n \n  --size-container-ideal: 1920;\n  /* Screen width in design — no px */\n \n  --size-container-min: 992px;\n  --size-container-max: 3840px;\n  /* Absolute maximum container width */\n \n  --size-container-fluid: 100dvw;\n \n  --size-container: clamp(var(--size-container-min),\n      var(--size-container-fluid),\n      var(--size-container-max));\n \n  --size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));\n \n  /* Container scale factors */\n  --container-medium-scale: 0.85;\n  --container-small-scale: 0.7;\n \n  --vh: 1vh;\n  /* Fallback before JS runs */\n \n  --near-screen-height: 80dvh;\n  --full-screen-height: 100dvh;\n  --over-screen-height: 120dvh;\n  --double-screen-height: 200dvh;\n  --xxl-screen-height: 250dvh;\n}\n \n/*\n  Ultrawide desktop viewports only.\n \n  11 / 5 = 2.2:1 activation threshold.\n  Once activated, the design canvas is capped to 16:9\n  based on the available viewport height.\n*/\n@media screen and (min-width: 992px) and (min-aspect-ratio: 11/5) {\n  :root {\n    --size-container-fluid: min(100dvw,\n        calc(100dvh * 16 / 9));\n  }\n}\n \n/* Tablet */\n@media screen and (max-width: 991px) {\n  :root {\n    --size-container-ideal: 991;\n    /* Screen width in design — no px */\n \n    --size-container-min: 768px;\n    --size-container-max: 991px;\n    --size-container-fluid: 100dvw;\n \n    --container-medium-scale: 0.9;\n    --container-small-scale: 0.8;\n \n    --near-screen-height: calc(var(--vh) * 80);\n    --full-screen-height: calc(var(--vh) * 100);\n    --over-screen-height: calc(var(--vh) * 120);\n    --double-screen-height: calc(var(--vh) * 200);\n    --xxl-screen-height: calc(var(--vh) * 250);\n  }\n}\n \n/* Mobile Landscape */\n@media screen and (max-width: 767px) {\n  :root {\n    --size-container-ideal: 767;\n    /* Screen width in design — no px */\n \n    --size-container-min: 480px;\n    --size-container-max: 767px;\n \n    --container-medium-scale: 1;\n    --container-small-scale: 1;\n  }\n}\n \n/* Mobile Portrait */\n@media screen and (max-width: 479px) {\n  :root {\n    --size-container-ideal: 479;\n    /* Screen width in design — no px */\n \n    --size-container-min: 320px;\n    --size-container-max: 479px;\n \n    --container-medium-scale: 1;\n    --container-small-scale: 1;\n  }\n}\n \nbody {\n  font-size: var(--size-font);\n}\n          </style>\n        </div>\n        <div class=\"cms-behavior w-embed\">\n          <style>\n            /* Hide element with attribute when CMS doesn&#39;t contain items */\n [data-cms-section]:not(:has(.w-dyn-item)) {\n display: none;\n }\n          </style>\n        </div>\n        <div class=\"container-alignment w-embed\">\n          <style>\n            /* Make sure containers never lose their center alignment */\n  .container-col-12,\n  .container-col-11,\n  .container-col-10,\n  .container-col-09,\n  .container-col-08,\n  .container-col-07,\n  .container-col-06 {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n          </style>\n        </div>\n        <div class=\"current-state-styling w-embed\">\n          <style>\n            /* Navigation Page Links */\n.navlink.is-page.w-inline-block.w--current .navlink-bg_fill.is-current {\n    display: block;\n}\n.navlink.is-page.w-inline-block.w--current .navlink-text.is-mask {\n    display: none;\n}\n          </style>\n        </div>\n        <div class=\"cursor-selection-color w-embed\">\n          <style>\n            /* Cursor Selection */\n  ::selection {\n    background: var(--_theme---cursor-select-bg);\n    color: var(--_theme---cursor-select-text);\n  }\n\n  ::-moz-selection { /* Code for Firefox */\n    background: var(--_theme---cursor-select-bg);\n    color: var(--_theme---cursor-select-text);\n  }\n          </style>\n        </div>\n        <div class=\"display-settings w-embed\">\n          <style>\n            /* These classes are never overwritten */\n.hide {\n  display: none !important;\n}\n\n@media screen and (min-width: 992px) {\n    .hide, .hide-desktop {\n        display: none !important;\n    }\n}\n\n@media screen and (min-width: 480px) {\n    .hide, .hide-desktop-tablet {\n        display: none !important;\n    }\n}\n\n@media screen and (max-width: 991px) {\n    .hide, .hide-tablet-mobile {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .hide-mobile{\n      display: none !important;\n    }\n}\n          </style>\n        </div>\n        <div class=\"div-dimensions w-embed\">\n          <style>\n            /* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.div-square::after {\n\tcontent: &#34;&#34;;\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n          </style>\n        </div>\n        <div class=\"focus-state w-embed\">\n          <style>\n            /* Focus state style for keyboard navigation for the focusable elements */\n  *[tabindex]:focus-visible,\n  input[type=&#34;file&#34;]:focus-visible {\n   outline: 0.125rem solid var(--color-mode-default--focus-state);\n   outline-offset: 0.125rem;\n}\n          </style>\n        </div>\n        <div class=\"lottie-style-override w-embed\">\n          <style>\n            .lottie path {\n\tstroke: currentColor;\n  fill: currentColor;\n}\n          </style>\n        </div>\n        <div class=\"rich-text-reset w-embed\">\n          <style>\n            /* Get rid of top margin on first element in any rich text element */\n  .w-richtext &gt; :not(div):first-child,\n  .w-richtext &gt; div:first-child &gt; :first-child {\n    margin-top: 0 !important;\n  }\n    /* Get rid of bottom margin on last element in any rich text element */\n  .w-richtext&gt;:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n    margin-bottom: 0;\n  }\n          </style>\n        </div>\n        <div class=\"scrollbar-style w-embed\">\n          <style>\n            /* Hide scrollbar for Chrome, Safari and Opera */\n::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for Internet Explorer, Edge and Firefox */\nbody {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}\n          </style>\n        </div>\n        <div class=\"spacing w-embed\">\n          <style>\n            /* These classes are never overwritten */\n  .margin-0 {\n    margin: 0rem !important;\n  }\n  .padding-0 {\n    padding: 0rem !important;\n  }\n  .margin-top {\n    margin-right: 0rem !important;\n    margin-bottom: 0rem !important;\n    margin-left: 0rem !important;\n  }\n  .padding-top {\n    padding-right: 0rem !important;\n    padding-bottom: 0rem !important;\n    padding-left: 0rem !important;\n  }\n  .margin-right {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n    margin-left: 0rem !important;\n  }\n  .padding-right {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n    padding-left: 0rem !important;\n  }\n  .margin-bottom {\n    margin-top: 0rem !important;\n    margin-right: 0rem !important;\n    margin-left: 0rem !important;\n  }\n  .padding-bottom {\n    padding-top: 0rem !important;\n    padding-right: 0rem !important;\n    padding-left: 0rem !important;\n  }\n  .margin-left {\n    margin-top: 0rem !important;\n    margin-right: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .padding-left {\n    padding-top: 0rem !important;\n    padding-right: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .margin-horizontal {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important;\n  }\n  .padding-horizontal {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important;\n  }\n  .margin-vertical {\n    margin-right: 0rem !important;\n    margin-left: 0rem !important;\n  }\n  .padding-vertical {\n    padding-right: 0rem !important;\n    padding-left: 0rem !important;\n  }\n          </style>\n        </div>\n        <div class=\"tap-select-prevention w-embed\">\n          <style>\n            /* Remove all highlights when tapping links on mobile */\n  body {-webkit-tap-highlight-color: transparent;}\n  :focus {outline: 0;}\n          </style>\n        </div>\n        <div class=\"text-clarity w-embed\">\n          <style>\n            /* Make text look crisper and more legible in all browsers */\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n  }\n          </style>\n        </div>\n        <div class=\"text-line-clamp w-embed\">\n          <!-- Text Line Clamp -->\n          <style>\n            /*Apply &#34;...&#34; after 1 line of text */\n.text-clamp-line-01 {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 1;\n\t-webkit-box-orient: vertical;\n}\n\n/*Apply &#34;...&#34; after 2 lines of text */\n.text-clamp-line-02 {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n\n/*Apply &#34;...&#34; after 3 lines of text */\n.text-clamp-line-03 {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n\n/*Apply &#34;...&#34; after 4 lines of text */\n.text-clamp-line-04 {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 4;\n\t-webkit-box-orient: vertical;\n}\n          </style>\n        </div>\n        <div class=\"text-split w-embed\">\n          <!-- Text Split -->\n          <style>\n            .word {\n\toverflow: hidden;\n}\n          </style>\n        </div>\n        <div class=\"variable-fontfamily w-embed\">\n          <!-- \n<style>\n/* Variables: Automatically set all headings to the variable heading font */\nh1, h2, h3, h4, h5, h6 {\n  font-family: var(--typography--heading-style);\n  font-weight: 500 !important;\n  color: \tvar(--color-mode-default--heading);\n  line-height: 1;\n  letter-spacing: -0.06em;\n}\n/* Variables: Auto change all classes with 'heading-style' */\n[class*=\"heading-style-\"] {\n  font-family: var(--typography--heading-style) !important;\n  font-weight: 500 !important;\n\tcolor: \tvar(--color-mode-default--heading);\n\tline-height: 1;\n  letter-spacing: -0.06em;\n}\n</style></div><div class=\"_w-button-override w-embed\"><!-- Button Override -->\n          <style>\n            button {\n  all: unset;\n  cursor: pointer;\n  pointer-events: auto;\n}\n\nbutton:focus {\n  outline: revert;\n}\n          </style>\n        </div>\n        <div class=\"_w-style-override w-embed\">\n          <style>\n            /* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example &#34;All Links&#34; in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n\n\n/* Remove the default Webflow icons from Input- Select and Text Area fields */\ninput,select,textarea {\n    -webkit-appearance: none!important;\n    -moz-appearance: none!important;\n    appearance: none!important\n}\n\n/* Dropdown Toggle */\n.w-dropdown-toggle, .w-dropdown-toggle.w--open {\n    margin: 0;\n    border: none;\n    background: none;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n}\n          </style>\n        </div>\n        <div class=\"zoom-disable w-embed\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />\n        </div>\n      </div>\n      <div data-transition-wrap=\"\" class=\"transition\">\n        <div class=\"transition__shape\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 1000 1000\" fill=\"none\" preserveAspectRatio=\"none\" class=\"transition__svg\">\n            <path d=\"M43 259C296 11.5688 994 -3 922.994 498.259C851.988 999.517 281.229 1004.28 123 767C-35.2287 529.721 179 259 472 259C765 259 792 498.259 659 654C526 809.741 319 755 285 669.001C251 583.001 299 452 496 452C693 452 876.073 639.171 935 937.001\" stroke=\"currentColor\" stroke-width=\"0\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            </path>\n          </svg>\n        </div>\n      </div>\n      <div data-cursor-marquee-status=\"not-active\" class=\"cursor-marquee\">\n        <div class=\"cursor-marquee__card\">\n          <span data-cursor-marquee-text-target=\"\" class=\"cursor-marquee__text-span\">          Hello world\n</span>\n          <span data-cursor-marquee-text-target=\"\" class=\"cursor-marquee__text-span is--duplicate\">          Hello world\n</span>\n        </div>\n      </div>\n";

export const PAGE_WRAPPER_INNER_HTML = PAGE_WRAPPER_PREFIX + HOME_MAIN_HTML;
