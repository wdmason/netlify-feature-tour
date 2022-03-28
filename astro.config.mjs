export default {
  buildOptions: {
    sitemap: true,
    function: preact ('@astrojs/preact'),
  },
  integrations: [preact ()],
};
