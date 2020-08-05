const { zip } = require('zip-a-folder');
const fs = require('fs')
module.exports = async function(req, res, folder) {
     const zipped = await zipFolder(folder, folder + ".zip");
     await res.download(folder + ".zip");
     console.log('Download complete');
}
 
async function zipFolder(zipSRC, zipDST) {
     await zip(zipSRC, zipDST);
     console.log('Zip finished')
}