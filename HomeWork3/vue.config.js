
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088/list.aspx',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};