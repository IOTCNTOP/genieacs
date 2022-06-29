const util = require('util')
const exec = util.promisify(require('child_process').exec);

const ping = async (host) => {
  const {stdout, stderr} = await exec(`ping -c 1 ${host}`);
  console.log(stdout);
  console.log(stderr);
}

ping('vpce-01e07473be3ac0737-uakr9eao.vpce-svc-02125550f04ddfda6.us-east-1.vpce.amazonaws.com'); 