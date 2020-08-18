export function parseUploadMaxSize (str) {
  if (typeof str === 'number') return (str * 1024) + ''
  if (str.toLowerCase().indexOf('kb') != -1) {
    return Number(str.toLowerCase().replace('kb', '')) * 1024
  }
}
export function getFileTypeString (files) {
  var result = ''
  files.forEach(item => {
    result += '.' + item +'，'
  }); 
  return result.substring(0, result.length-1)
}