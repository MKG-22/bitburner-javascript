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
// 	"syscore",
// 	"CSEC",
// 	"joesguns",
// 	"hong-fang-tea",
// 	"max-hardware",
// 	"neo-net",
// 	"johnson-ortho",
// 	"summit-uni",
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
	"Get a period bro, maybe you be on my level"
]

var growMessages = [
	"Is there something in your pants, or are you just happy to see me?",
	"Are you taller than me? AGAIN!?",
	""
]

var serversFiltered = []

var target = ""

var file = "scvhost.js"

var me = ""

var avRam = null
var scRam = null 
var maxRam = null 
var usedRam = null 
var threads = null 

export async function main(ns) {
	await ns.clearLog()
	log(ns, "svchost.js: Butterfly-Effect " + Date())
	log(ns, "------------------------------------------------")
	me = ns.getHostname()
	log(ns,"host: " +  me + " infected")
	await ns.toast(me + ": infected")
	await install(ns)
}

async function install(ns) {
	log(ns, "svchost.js: " + me + ": Running Installation.")
	await spread(ns)
}

async function spread(ns) {
	log(ns, "svchost.js: " + me + ": Running Spread.")
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
		
		log(ns, "svchost.js: " + me + ": target: " + target)
		log(ns, "svchost.js: " + me + ": target: " + target + ": Max Ram: " + maxRam)
		log(ns, "svchost.js: " + me + ": target: " + target + ": Ram Used: " + usedRam)
		log(ns, "svchost.js: " + me + ": target: " + target + ": Available Ram: " + avRam)
		// variables

		if (ns.hasRootAccess(target)) {
			log(ns, "svchost.js: " + me + ": target: " + target + ": Root.Access: Accepted.")
			await ns.scp(file, me, target)
			log(ns, "svchost.js: " + me + ": target: " + target + ": File Attempted Copy.")
			if(ns.fileExists("svchost.js", target)){
				log(ns, "svchost.js: " + me + ": target: " + target + ": File Found.")
				scRam = ns.getScriptRam("scvhost.js", target)
				log(ns, "svchost.js: " + me + ": target: " + target + ": Script Required : " + scRam)
			}
			else{
				log(ns, "svchost.js: " + me + ": target: " + target + ": File Not Found.")
				log(ns, "svchost.js: " + me + ": target: Aquiring New Target.")
				return end
			}
			await ns.sleep(1000)
			// if(ns.getServerMaxRam(target) / ns.getServerUsedRam(target) > 5.00){
			threads = Math.floor(avRam / scRam)
			log(ns, "svchost.js: " + me + ": target: " + target + ": Script-Possible-Threads: " + threads)
			for (var i = 0; i < 20; ++i) {
				if (avRam >= scRam) {
					log(ns, "svchost.js: " + me + ": target: " + target + ": Possible(Ram)")
					log(ns, "svchost.js: " + me + ": target: " + target + ": executing~" + file + " (threads: " + threads + ") [Butterfly-" + i + "]")
					await ns.exec(file, target, threads, "Butterfly-"+i)
					if(ns.isRunning(file, target)){
						log(ns, "svchost.js: " + me + ": target: " + target + ": File Is Running.")
					}
					await ns.sleep(1000)
				}
				else {
					log(ns, "svchost.js: " + me + ": target: " + target + ": Not Enough Ram To Execute More.")
					i = 20
				}
				await ns.sleep(1000)
			}
			await ns.sleep(2000)
		}
		await ns.sleep(3000)
		log(ns, "svchost.js: " + me + ": target: " + target + ": Root.Access: Denied[1].")
		gainRoot(ns, target)
		await ns.sleep(3000)
	}
	await ns.sleep(10000)
	await attack(ns, target)
}


async function gainRoot(ns, target){
	if (numPorts > 0) {
		log(ns, "svchost.js: " + me + ": target: " + target + ": Cracking Ports: " + numPorts)
		await ns.brutessh(target)
		await ns.ftpcrack(target)
		await ns.relaysmtp(target)
	}
	else if (numPorts = 0) {
		log(ns, "svchost.js: " + me + ": target: " + target + ": Cracking Ports: " + numPorts)
		await ns.nuke(target)
	}
	if (ns.hasRootAccess(target)) {
		log(ns, "svchost.js: " + me + ": target: " + target + ": Root.Access: Accepted.")
		serversFiltered.push(target)
	}
	else{
		log(ns, "svchost.js: " + me + ": target: " + target + ": Root.Access: Denied[2].")
	}
}

async function attack(ns) {
	for(var i=0;i<serversFiltered.length;++i){
		var tar = serversFiltered[i]
		log(ns, "svchost.js: " + me + ": target: " + target + ": Root.Access: Denied[2].")
		if (servSec > 0 ) { //servMinSec) {
			log(ns, "svchost.js: " + me + ": target: " + target + ": Security: Too High.")
		await ns.weaken(serversFiltered[i])
		}
		if (servAvMoney < servMaxMoney * 0.75) {//* 0.75) {
			log(ns, "svchost.js: " + me + ": target: " + target + ": Money Too Low.")
			await ns.grow(target)
		}
		if (servSec <= 0 && servAvMoeny >= servMaxMoney && hackLv >= servReqHackLv) {
			log(ns, "svchost.js: " + me + ": target: " + target + ": Hacking.")
			await ns.hack(target)
		}
		await ns.sleep(20000)
		log(ns, "svchost.js: " + me + ": target: " + target + ": Re-Runnig Spread.")
		await spread(ns)
	}
}

async function log(ns, msg){
	ns.print(msg)
}

async function dl(ns, func){
	ns.disableLog(func)
}
