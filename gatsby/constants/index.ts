export const constants = {
  CI: "CI", // from CI
  NODE_ENV: "NODE_ENV", // from Gatsby
  NODE_VERSION: "NODE_VERSION", // from Netlify
  NPM_VERSION: "NPM_VERSION", // from Netlify
  YARN_VERSION: "YARN_VERSION", // from Netlify

  GTM_ID: "GTM_ID", // Manually
  SENTRY_DSN: "SENTRY_DSN", // Manually

  CONTENTFUL_SPACE_ID: "CONTENTFUL_SPACE_ID", // Manually
  CONTENTFUL_DELIVERY_ACCESS_TOKEN: "CONTENTFUL_DELIVERY_ACCESS_TOKEN", // Manually

  NETLIFY_BUILD_ID: "BUILD_ID", // from Netlify
  NETLIFY_CONTEXT: "CONTEXT", // from Netlify
  NETLIFY_DEPLOY_ID: "DEPLOY_ID", // from Netlify

  GIT_REPO_URL: "REPOSITORY_URL", // from Netlify
  GIT_BRANCH: "BRANCH", // from Netlify
  GIT_COMMIT_HASH: "COMMIT_REF", // from Netlify
  GIT_PREVIOUS_COMMIT_HASH: "CACHED_COMMIT_REF", // from Netlify
  GIT_PR_ID: "REVIEW_ID", // from Netlify
}
