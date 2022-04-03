import ora from 'ora'
import downloadRepoFrom from 'download-git-repo'

async function download(url, folder) {
  await new Promise(function (resolve, reject) {
    const spinner = ora('downloading...')
    spinner.start()
    downloadRepoFrom(`direct:${url}`, folder, { clone: true }, err => {
      spinner.stop()
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  }).catch(function (e) {
    throw new Error(e)
  })
}

export default download
