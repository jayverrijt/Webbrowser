// --- 1. CUSTOM UI & THEME ENGINE ---
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// Native OS integratie (wordt genegeerd op platformen waar niet van toepassing)
user_pref("widget.macos.native-context-menus", true);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);
user_pref("browser.theme.native-theme", true);
user_pref("ui.useOverlayScrollbars", 1);

// Verberg standaard Firefox clutter (Pocket, Firefox View, lege AI-knoppen)
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// --- 2. WEBRENDER & GPU PERFORMANCE (Voor 60+ fps blur & animaties) ---
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("layers.acceleration.force-enabled", true);

// --- 3. TRANSPORT SECURITY & HTTPS ---
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.version.min", 3); // Minimaal TLS 1.2
user_pref("security.OCSP.enabled", 1);

// --- 4. PRIVACY, TRACKING & FINGERPRINTING BESCHERMING ---
// Total Cookie Protection (dFPI) + Container isolatie voor Sidebery groepen
user_pref("network.cookie.cookieBehavior", 5);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.query_stripping.enabled", true);

// Referrer headers beperken zonder login-flows te breken
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// WebRTC IP-leak bescherming
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

// --- 5. TELEMETRY & DATA COLLECTION UITSCHAKELEN ---
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
