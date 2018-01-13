import Raven from 'raven-js';

// Sentry error reporting
if (process.env.REACT_APP_SENTRY_URL) {
  Raven.config(process.env.REACT_APP_SENTRY_URL, {
    release: process.env.REACT_APP_VERSION,
    environment: process.env.REACT_APP_ENV,
    tags: {
      git_commit: process.env.REACT_APP_COMMIT_SHA,
    },
  }).install();
}
