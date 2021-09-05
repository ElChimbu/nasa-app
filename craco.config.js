/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line global-require
        require("tailwindcss"),
        // eslint-disable-next-line global-require
        require("autoprefixer"),
      ],
    },
  },
};
