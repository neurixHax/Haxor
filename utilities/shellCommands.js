import { exec } from  'child_process';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
export async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
export const commands = {
  'multimon': 'multimon-ng -a DTMF -t wav',
}
export async function main(cmd) {
  let { stdout } = await sh(cmd);
  const arr = []
  for (let line of stdout.split('\n')) {
    arr.push(line)
  }
  return arr
}

