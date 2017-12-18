const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  },
};

const ipfs = new IPFS(ipfsOptions);

ipfs.on('ready', () => {
  const orbitdb = new OrbitDB(ipfs);

  // Create / Open a database
  const db = await orbitdb.log('hello')
  await db.load()

  // Listen for updates from peers
  db.events.on('replicated', (address) => {
    console.log(db.iterator({ limit: -1 }).collect())
  })

  // Add an entry
  const hash = await db.add('world')
  console.log(hash)

  // Query
  const result = db.iterator({ limit: -1 }).collect()
  console.log(result)
});
