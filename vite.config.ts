import path from 'path'

module.exports = {
    base: "/",
    alias: {
        '/@/': path.resolve(__dirname, './src')
    },
    optimizeDeps: {
        include: ['lodash']
    },
    proxy: {}
}