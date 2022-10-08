const {getDefaultConfig} = require('metro-config')

module.exports = (async()=>{
    const defaultConfig = await getDefaultConfig();
    const {assetExts} = defaultConfig.resolver;
    return{
        assetExts: [...assetExts,'bin']
    }
})();