import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import type { LandingPage } from '$lib/data/landingPages';

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  twq?: (...args: unknown[]) => void;
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
};

let trackingInitialized = false;

const getPublicEnv = (key: string) => env[key]?.trim() ?? '';

const injectScript = (id: string, source: string) => {
  if (!browser || document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = source;
  document.head.appendChild(script);
};

const initializeGoogle = (trackingWindow: TrackingWindow) => {
  const gtmId = getPublicEnv('PUBLIC_GTM_ID');
  const gaId = getPublicEnv('PUBLIC_GA_ID');

  if (gtmId) {
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    injectScript('f10-gtm', `https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
  }

  if (gaId) {
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.gtag = trackingWindow.gtag ?? ((...args: unknown[]) => trackingWindow.dataLayer?.push(args));
    injectScript('f10-gtag', `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
    trackingWindow.gtag('js', new Date());
    trackingWindow.gtag('config', gaId, { send_page_view: false });
  }
};

const initializeMeta = (trackingWindow: TrackingWindow) => {
  const pixelId = getPublicEnv('PUBLIC_META_PIXEL_ID');

  if (!pixelId) {
    return;
  }

  trackingWindow.fbq = trackingWindow.fbq ?? ((...args: unknown[]) => {
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({ event: 'meta_pixel_queue', args });
  });

  injectScript('f10-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
  trackingWindow.fbq('init', pixelId);
};

const initializeLinkedIn = (trackingWindow: TrackingWindow) => {
  const partnerId = getPublicEnv('PUBLIC_LINKEDIN_PARTNER_ID');

  if (!partnerId) {
    return;
  }

  trackingWindow._linkedin_partner_id = partnerId;
  trackingWindow._linkedin_data_partner_ids = [partnerId];
  injectScript('f10-linkedin-insight', 'https://snap.licdn.com/li.lms-analytics/insight.min.js');
};

const initializeX = (trackingWindow: TrackingWindow) => {
  const pixelId = getPublicEnv('PUBLIC_X_PIXEL_ID');

  if (!pixelId) {
    return;
  }

  trackingWindow.twq = trackingWindow.twq ?? ((...args: unknown[]) => {
    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({ event: 'x_pixel_queue', args });
  });

  injectScript('f10-x-pixel', 'https://static.ads-twitter.com/uwt.js');
  trackingWindow.twq('config', pixelId);
};

const initializeTracking = () => {
  if (!browser || trackingInitialized) {
    return;
  }

  const trackingWindow = window as TrackingWindow;
  initializeGoogle(trackingWindow);
  initializeMeta(trackingWindow);
  initializeLinkedIn(trackingWindow);
  initializeX(trackingWindow);
  trackingInitialized = true;
};

const buildEventPayload = (eventName: string, page: LandingPage) => ({
  event: eventName,
  page_slug: page.slug,
  product_name: page.productName,
  test_name: page.testName,
  variant: page.variant
});

export const trackConversionEvent = (eventName: string, page: LandingPage) => {
  if (!browser) {
    return;
  }

  initializeTracking();

  const trackingWindow = window as TrackingWindow;
  const payload = buildEventPayload(eventName, page);

  trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
  trackingWindow.dataLayer.push(payload);
  trackingWindow.gtag?.('event', eventName, payload);

  if (eventName === 'lead_form_submit' || eventName === 'primary_cta_click') {
    trackingWindow.fbq?.('track', 'Lead', payload);
    trackingWindow.twq?.('event', getPublicEnv('PUBLIC_X_PIXEL_ID'), payload);
  }
};

export const scheduleTracking = (page: LandingPage) => {
  if (!browser) {
    return;
  }

  const trackingWindow = window as TrackingWindow;
  const run = () => {
    initializeTracking();
    trackConversionEvent('landing_view', page);
  };

  const clearListeners = () => {
    window.removeEventListener('pointerdown', runOnce);
    window.removeEventListener('keydown', runOnce);
    window.removeEventListener('scroll', runOnce);
  };

  const runOnce = () => {
    clearListeners();
    run();
  };

  window.addEventListener('pointerdown', runOnce, { once: true, passive: true });
  window.addEventListener('keydown', runOnce, { once: true });
  window.addEventListener('scroll', runOnce, { once: true, passive: true });

  if (trackingWindow.requestIdleCallback) {
    trackingWindow.requestIdleCallback(runOnce, { timeout: 2800 });
    return;
  }

  window.setTimeout(runOnce, 1800);
};
