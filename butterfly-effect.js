// var servers = [
// 	"n00dles",
// 	"foodnstuff",
// 	"sigma-cosmetics",
// 	"nectar-net",
// 	"phantasy",
// 	"comptek",
// 	"catalyst",
// 	"I.I.I.I",
// 	"netlink",
// 	"crush-fitness",
// 	"omega-net",
// 	"the-hub",
// 	"zb-institute",
// "syscore",
// "CSEC",
// "joesguns",
// "hong-fang-tea",
// "max-hardware",
// "neo-net",
// "johnson-ortho",
// "summit-uni",
// 	"avmnite-02h",
// 	"rothman-uni",
// 	"silver-helix",
// 	"harakiri-sushi",
// 	"iron-gym",
// 	"zer0",
// 	"darkweb",
// 	"harakiri-sushi",
// 	"iron-gym",
// 	"shodan1",
// 	"node-1",
// 	"node-2",
// 	"CamTech-1",
// 	"CamTech-2",
// 	"Marvel-Movies.Net",
// 	"UbuntuCipher.xyZ",
// 	"SWAG-1",
// 	"Delta-7",
// 	"Delta-9",
// 	"Delta-X"
// ]

// Variables
var servers = [
	"n00dles",
	"foodnstuff",
	"sigma-cosmetics",
	"joesguns",
	"hong-fang-tea",
	"harakiri-sushi",
	"iron-gym"
]

var weakMessages = [
	"We beat them at arm wrestling",
	"Don't forget leg day",
	"Get back to the gym bro",
	"They got beat by a girl xD",
	"Get a period bro, maybe you be on my level",
	"Pussy.."
]

var growMessages = [
	"Is there something in your pants, or are you just happy to see me?",
	"Are you taller than me? AGAIN!?",
	"Did you eat magic beans?!",
	"DAYM isnt it cold up there?!?!!",
	"You're always the first to know when its raining.",
	"BONER!?"
]

var hackMessages = [
	"Have you not been paying attention to your messages?",
	"Do you like my hat? It's a nice color right? BLACK.",
	"I thought i should ask if i could use your porn hub account, too late i've got it.",
	"OMG is she fucking a horse!?",
	"Here comes the hatchet.",
	"Incoming Message from Anonymous."
]

var isLogging = true
var isFunny = true

var rootList = []
var blockList = []

var target = ""
var file = "scvhost.js"
var me = ""

var avRam = null
var scRam = null
var maxRam = null
var usedRam = null
var threads = null

var servSec = 0
var servMinSec = 0

var maxRam = 0
var usedRam = 0
var numPorts = 0

var servAvMoney = 0
var servMaxMoney = 0

var servReqHackLv = 0
var hackLv = 0
// Variables

export async function main(ns) {
	await ns.tail(file, "home")
	ns.clearLog
	await log(ns, file + ": Butterfly-Effect " + Date())
	await log(ns, "------------------------------------------------")
	me = ns.getHostname()
	await log(ns, "host: " + me + " infected")
	await ns.toast(me + ": infected")
	await log(ns, "\n")
	await install(ns)
}

async function install(ns) {
	await log(ns, file + ": " + me + ": Running Installation.")
	await log(ns, "\n")
	await spread(ns)
}

async function spread(ns) {
	await await log(ns, file + ": " + me + ": Running Spread.")
	for (var k = 0; k < servers.length; ++k) {
		// variables
		target = servers[k]

		servSec = ns.getServerSecurityLevel(target)
		servMinSec = ns.getServerMinSecurityLevel(target)

		maxRam = ns.getServerMaxRam(target)
		usedRam = ns.getServerUsedRam(target)
		numPorts = ns.getServerNumPortsRequired(target)

		servAvMoney = ns.getServerMoneyAvailable(target)
		servMaxMoney = ns.getServerMaxMoney(target)

		servReqHackLv = ns.getServerRequiredHackingLevel(target)
		hackLv = ns.getHackingLevel()

		avRam = (maxRam - usedRam)

		await await log(ns, file + ": " + me + ": " + target)
		await await log(ns, file + ": " + me + ": " + target + ": Max Ram: " + maxRam)
		await await log(ns, file + ": " + me + ": " + target + ": Ram Used: " + usedRam)
		await await log(ns, file + ": " + me + ": " + target + ": Available Ram: " + avRam)
		// variables

		if (ns.hasRootAccess(target)) {
			await log(ns, file + ": " + me + ": " + target + ": Root.Access: Accepted.")
			await ns.scp(file, me, target)
			await log(ns, file + ": " + me + ": " + target + ": File Attempted Copy.")
			await log(ns, file + ": " + me + ": " + target + ": Transfer: " + file + " | " + me + " | " + target)
			if (ns.fileExists(file, target)) {
				await log(ns, file + ": " + me + ": " + target + ": File Found.")
				scRam = ns.getScriptRam(file, target)
				await log(ns, file + ": " + me + ": " + target + ": Script-Ram Required : " + scRam)

				threads = Math.floor(avRam / scRam)
				await log(ns, file + ": " + me + ": " + target + ": Script-Possible-Threads: " + threads)
				for (var i = 0; i < 20; ++i) {
					if (avRam >= scRam) {
						await log(ns, file + ": " + me + ": " + target + ": Possible(Ram)")
						await log(ns, file + ": " + me + ": " + target + ": executing~" + file + " (threads: " + threads + ") [Butterfly-" + i + "]")
						await ns.exec(file, target, threads, "Butterfly-" + i)
						if (ns.isRunning(file, target)) {
							await log(ns, file + ": " + me + ": " + target + ": File Is Running.")
						}
					}
					else {
						await log(ns, file + ": " + me + ": " + target + ": Not Enough Ram To Execute More.")
						i = 20
					}
				}
			}
			else {
				await log(ns, file + ": " + me + ": " + target + ": File Not Found.")
				await log(ns, file + ": " + me + ": target: Aquiring New Target.")
			}
		}
		await log(ns, file + ": " + me + ": " + target + ": Root.Access: Denied[1].")
		await gainRoot(ns, target)
	}
	await attack(ns)
}


async function gainRoot(ns, target) {
	await log(ns, file + ": " + me + ": " + target + ": Running gainRoot.")
	if (numPorts > 0) {
		// await log(ns, file + ": " + me + ": " + target + ": Cracking Ports: " + numPorts)
		// await ns.brutessh(target)
		// await ns.ftpcrack(target)
		// await ns.relaysmtp(target)
		await log(ns, file + ": " + me + ": " + target + ": Require Stronger Cracks.")
	}
	else if (numPorts == 0) {
		await log(ns, file + ": " + me + ": " + target + ": Cracking Ports: " + numPorts)
		await ns.nuke(target)
	}
	if (ns.hasRootAccess(target)) {
		await log(ns, file + ": " + me + ": " + target + ": Root.Access: Accepted.")
		await log(ns, file + ": " + me + ": " + target + ": Adding to Root List.")
		rootList.push(target)
		await log(ns, rootList)
	}
	else {
		await log(ns, file + ": " + me + ": " + target + ": Root.Access: Denied[2].")
		await log(ns, file + ": " + me + ": " + target + ": Adding to Blocked List.")
		blockList.push(target)
		await log(ns, blockList)
	}
}

async function attack(ns) {
	// for (var i = 0; i < rootList.length; ++i) {
	for (var x of rootList) {
		var wm = Math.floor(Math.random() * weakMessages.length)
		var gm = Math.floor(Math.random() * growMessages.length)
		var hm = Math.floor(Math.random() * hackMessages.length)
		// var tar = rootList
		await log(ns, x)
		if (servSec > 0) { //servMinSec) {
			await log(ns, file + ": " + me + ": " + x + ": Security: Too High.")
			await ns.weaken(x)
			notify(ns, weakMessages[wm])

		}
		if (servAvMoney < servMaxMoney * 0.05) {//* 0.75) {
			await log(ns, file + ": " + me + ": " + x + ": Money Too Low.")
			await ns.grow(x)
			notify(ns, growMessages[gm])
		}
		if (servSec <= servMinSec && servAvMoneny >= (servMaxMoney * 0.05) && hackLv >= servReqHackLv) {
			await log(ns, file + ": " + me + ": " + x + ": Hacking.")
			await ns.hack(x)
			notify(ns, hackMessages[hm])
		}
	}
	await log(ns, file + ": " + me + ": Blocked List")
	await log(ns, file + ": " + me + ": " + blockList)
	await log(ns, file + ": " + me + ": Root List")
	await log(ns, file + ": " + me + ": " + rootList)
	await ns.sleep(600000)
	await attack(ns)
}

async function log(ns, msg) {
	if (isLogging == true) { await ns.print(msg) }
}

async function notify(ns, msg) {
	if (isFunny == true) { await ns.toast(msg) }
}
