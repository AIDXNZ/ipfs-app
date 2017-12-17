const IPFS = require('ipfs')
const ipfs = new IPFS({
  EXPERIMENTAL: {
    pubsub: true,
    dht: true
  }
})

ipfs.once('ready', () => ipfs.id((err, info) =>{
  if (err) {throw err}
  console.log('IPFS node is ready')
}))

function repo () {
  return 'ipfs/ipfs-app/' + Math.random()
}
