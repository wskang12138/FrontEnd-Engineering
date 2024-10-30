const download=require('download-git-repo')
download('github:wskang12138/vue-js-frame', 'test', function (err) {
  console.log(err ? 'Error' : 'Success')
})
