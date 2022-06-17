const promessa = new Promise((resolve, reject) => {
    return resolve('certo')
})

promessa
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log('FINALIZADA'))


async function start () {
   const url = 'http://localhost:80';
   const user = await fetch(url).then(r => r.json());
   console.log(user);
}

start().catch( e => console.error(e))
