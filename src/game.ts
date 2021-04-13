import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(27.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.818033456802368, 1.1388640403747559, 1)
})
invisibleWall3.addComponentOrReplace(transform6)

const colliders2 = new Entity('colliders2')
engine.addEntity(colliders2)
colliders2.setParent(_scene)
const gltfShape2 = new GLTFShape("models/Colliders3.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
colliders2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.544215977191925, 1, 0.5174932479858398)
})
colliders2.addComponentOrReplace(transform7)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(26.5, 0, 16.80545997619629),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3040648698806763, 1.1632766723632812, 14.365148544311523)
})
invisibleWall.addComponentOrReplace(transform8)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(30.216167449951172, 7.033280372619629, 12.655868530273438),
  rotation: new Quaternion(-0.0030453060753643513, 0.7059366703033447, -0.002978621982038021, 0.7082621455192566),
  scale: new Vector3(9.98273754119873, 8.018240928649902, 1.0280693769454956)
})
nft.addComponentOrReplace(transform9)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/43637")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(30.212846755981445, 7.029627799987793, 19.157127380371094),
  rotation: new Quaternion(6.348516174835717e-16, 0.7062504887580872, -8.419161900974359e-8, 0.707962155342102),
  scale: new Vector3(9.250590324401855, 8.13200855255127, 1.021410346031189)
})
nft2.addComponentOrReplace(transform10)
const nftShape2 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/43562")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.9036835432052612, 6.5, 13.350695610046387),
  rotation: new Quaternion(-1.5546405656213986e-15, 0.7021238803863525, -8.369968185206744e-8, -0.7120548486709595),
  scale: new Vector3(9.704912185668945, 7.338303565979004, 0.10216044634580612)
})
nft3.addComponentOrReplace(transform11)
const nftShape3 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/95766")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape3)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(1.1853585243225098, 6.494617938995361, 18.509811401367188),
  rotation: new Quaternion(4.274595814032084e-15, -0.7053505778312683, 8.408432705664382e-8, 0.7088587284088135),
  scale: new Vector3(8.86340045928955, 7.083348274230957, 1.004826307296753)
})
nft4.addComponentOrReplace(transform12)
const nftShape4 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/95763")
nftShape4.withCollisions = true
nftShape4.isPointerBlocker = true
nftShape4.visible = true
nftShape4.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape4)

const nft5 = new Entity('nft5')
engine.addEntity(nft5)
nft5.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(15.771795272827148, 6.768292427062988, 30.344554901123047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.9685640335083, 9.724706649780273, 1.0000005960464478)
})
nft5.addComponentOrReplace(transform13)
const nftShape5 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/335212")
nftShape5.withCollisions = true
nftShape5.isPointerBlocker = true
nftShape5.visible = true
nftShape5.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft5.addComponentOrReplace(nftShape5)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(6.291314125061035, 6.747357368469238, 29.751718521118164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.303902626037598, 5.081795692443848, 1)
})
nft6.addComponentOrReplace(transform14)
const nftShape6 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/5477229367732358692118855793166249820776828061100578181914691630972840968492")
nftShape6.withCollisions = true
nftShape6.isPointerBlocker = true
nftShape6.visible = true
nftShape6.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape6)

const nft7 = new Entity('nft7')
engine.addEntity(nft7)
nft7.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(25.475595474243164, 6.713336944580078, 29.70183753967285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.74537992477417, 5.168398857116699, 0.3288334906101227)
})
nft7.addComponentOrReplace(transform15)
const nftShape7 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/5477229367732358692118855793166249820776828061100578181914691629873329340566")
nftShape7.withCollisions = true
nftShape7.isPointerBlocker = true
nftShape7.visible = true
nftShape7.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft7.addComponentOrReplace(nftShape7)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(8.5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.33015775680542, 1, 10.014813423156738)
})
invisibleWall2.addComponentOrReplace(transform16)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(17.504165649414062, 0, 16.04048728942871),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall4.addComponentOrReplace(transform17)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(17.133020401000977, 0, 10.36177921295166),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall5.addComponentOrReplace(transform18)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(21.746021270751953, 0, 7.992308616638184),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall6.addComponentOrReplace(transform19)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(21.464279174804688, 0, 13.827605247497559),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall7.addComponentOrReplace(transform20)

const invisibleWall8 = new Entity('invisibleWall8')
engine.addEntity(invisibleWall8)
invisibleWall8.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(22, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall8.addComponentOrReplace(transform21)

const invisibleWall9 = new Entity('invisibleWall9')
engine.addEntity(invisibleWall9)
invisibleWall9.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(16.995513916015625, 0, 22.876327514648438),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall9.addComponentOrReplace(transform22)

const invisibleWall10 = new Entity('invisibleWall10')
engine.addEntity(invisibleWall10)
invisibleWall10.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(18.09654998779297, 0, 24.284439086914062),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall10.addComponentOrReplace(transform23)

const invisibleWall11 = new Entity('invisibleWall11')
engine.addEntity(invisibleWall11)
invisibleWall11.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(12.45756721496582, 0, 24.293638229370117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall11.addComponentOrReplace(transform24)

const invisibleWall12 = new Entity('invisibleWall12')
engine.addEntity(invisibleWall12)
invisibleWall12.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(6.24350643157959, 0, 24.309720993041992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall12.addComponentOrReplace(transform25)

const invisibleWall13 = new Entity('invisibleWall13')
engine.addEntity(invisibleWall13)
invisibleWall13.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(6.1886091232299805, 0, 18.861337661743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall13.addComponentOrReplace(transform26)

const invisibleWall14 = new Entity('invisibleWall14')
engine.addEntity(invisibleWall14)
invisibleWall14.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(6.1838555335998535, 0, 13.478036880493164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall14.addComponentOrReplace(transform27)

const invisibleWall15 = new Entity('invisibleWall15')
engine.addEntity(invisibleWall15)
invisibleWall15.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(6.15615701675415, 0, 7.9670000076293945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall15.addComponentOrReplace(transform28)

const invisibleWall16 = new Entity('invisibleWall16')
engine.addEntity(invisibleWall16)
invisibleWall16.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(24.451858520507812, 0, 7.68324089050293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall16.addComponentOrReplace(transform29)

const invisibleWall17 = new Entity('invisibleWall17')
engine.addEntity(invisibleWall17)
invisibleWall17.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(24.385774612426758, 0, 13.472614288330078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall17.addComponentOrReplace(transform30)

const invisibleWall18 = new Entity('invisibleWall18')
engine.addEntity(invisibleWall18)
invisibleWall18.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(24.365964889526367, 0, 18.834760665893555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall18.addComponentOrReplace(transform31)

const invisibleWall19 = new Entity('invisibleWall19')
engine.addEntity(invisibleWall19)
invisibleWall19.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(24.32007598876953, 0, 24.31821632385254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.606132984161377, 3.91698956489563, 0.5025489330291748)
})
invisibleWall19.addComponentOrReplace(transform32)

const invisibleWall20 = new Entity('invisibleWall20')
engine.addEntity(invisibleWall20)
invisibleWall20.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(20.952341079711914, 0, 26.760501861572266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2306265830993652, 1)
})
invisibleWall20.addComponentOrReplace(transform33)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script1.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script1.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script1.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script1.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script1.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script1.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))
script1.spawn(invisibleWall8, {"enabled":true}, createChannel(channelId, invisibleWall8, channelBus))
script1.spawn(invisibleWall9, {"enabled":true}, createChannel(channelId, invisibleWall9, channelBus))
script1.spawn(invisibleWall10, {"enabled":true}, createChannel(channelId, invisibleWall10, channelBus))
script1.spawn(invisibleWall11, {"enabled":true}, createChannel(channelId, invisibleWall11, channelBus))
script1.spawn(invisibleWall12, {"enabled":true}, createChannel(channelId, invisibleWall12, channelBus))
script1.spawn(invisibleWall13, {"enabled":true}, createChannel(channelId, invisibleWall13, channelBus))
script1.spawn(invisibleWall14, {"enabled":true}, createChannel(channelId, invisibleWall14, channelBus))
script1.spawn(invisibleWall15, {"enabled":true}, createChannel(channelId, invisibleWall15, channelBus))
script1.spawn(invisibleWall16, {"enabled":true}, createChannel(channelId, invisibleWall16, channelBus))
script1.spawn(invisibleWall17, {"enabled":true}, createChannel(channelId, invisibleWall17, channelBus))
script1.spawn(invisibleWall18, {"enabled":true}, createChannel(channelId, invisibleWall18, channelBus))
script1.spawn(invisibleWall19, {"enabled":true}, createChannel(channelId, invisibleWall19, channelBus))
script1.spawn(invisibleWall20, {"enabled":true}, createChannel(channelId, invisibleWall20, channelBus))