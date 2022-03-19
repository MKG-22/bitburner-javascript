var servers = [
	"n00dles",
	"foodnstuff",
	"sigma-cosmetics",
	"nectar-net",
	"phantasy",
	"comptek",
	"catalyst",
	"I.I.I.I",
	"netlink",
	"crush-fitness",
	"omega-net",
	"the-hub",
	"zb-institute",
	"syscore",
	"CSEC",
	"joesguns",
	"hong-fang-tea",
	"max-hardware",
	"neo-net",
	"johnson-ortho",
	"summit-uni",
	"avmnite-02h",
	"rothman-uni",
	"silver-helix",
	"harakiri-sushi",
	"iron-gym",
	"zer0",
	"darkweb",
	"harakiri-sushi",
	"iron-gym",
	"shodan1",
	"node-1",
	"node-2",
	"CamTech-1",
	"CamTech-2",
	"Marvel-Movies.Net",
	"UbuntuCipher.xyZ",
	"SWAG-1",
	"Delta-7",
	"Delta-9",
	"Delta-X"
]

var serversFiltered = []

var target = ""
var file = "scvhost.js"
var me = ""

export async function main(ns) {
	ns.print("make sure to kill scripts on all targets before running.")
	await ns.clearLog()
	me = ns.getHostname()
	await ns.toast(me + ": infected")
	await install(ns)
}

async function install(ns) {
	await spread(ns)
}

async function spread(ns) {
	for (var k = 0; k < servers.length; ++k) {
		target = servers[k]
		await ns.print(target)
		if (ns.hasRootAccess(target)) {
			await ns.scp(file, me, target)
			await ns.sleep(1000)
			ns.print("------------------------------")
			var avRam = (ns.getServerMaxRam(target) - ns.getServerUsedRam(target))
			var scRam = ns.getScriptRam("scvhost.js", target)
			// if(ns.getServerMaxRam(target) / ns.getServerUsedRam(target) > 5.00){
			var threads = Math.floor(avRam / scRam)
			for (var i = 0; i < 20; ++i) {
				if (avRam >= scRam) {
					await ns.exec(file, target, threads, i)
					await ns.sleep(1000)
				}
				else {
					i = 20
				}
				await ns.sleep(1000)
			}
			await ns.sleep(2000)
		}
		await ns.sleep(3000)
	}
	await ns.sleep(10000)
	await attack(ns)
}

async function attack(ns,) {
	await ns.print("5:2")
	for (var a = 0; a < servers.length; ++a) {
		target = servers[a]

		// crack ports block
		if (ns.getServerNumPortsRequired > 0) {
			await ns.brutessh(target)
			await ns.ftpcrack(target)
			await ns.relaysmtp(target)
		}
		else if (ns.getServerNumPortsRequired = 0) {
			await ns.nuke(target)
		}
		if (ns.hasRootAccess(target)) {
			serversFiltered.push(target)
			if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
				await ns.weaken(target)
			}
			else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) * 0.20) {
				await ns.grow(target)
			}
			else if (ns.getServerRequiredHackingLevel(target) <= ns.getHackingLevel()) {
				await ns.hack(target)
			}
		}
	}
	servers = serversFiltered
	await ns.sleep(20000)
	await spread(ns)
}
