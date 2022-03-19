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
	"darkweb"
]

var target = ""
var file = "scvhost.js"
var me = ""

export async function main(ns) {
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
		if (ns.hasRootAccess(target) && !ns.fileExists(file, target)) {
			await ns.scp(file, me, target)
			await ns.sleep(1000)
		}
		else if (ns.hasRootAccess(target) && ns.fileExists(file, target)) {
			for (var i = 0; i < 10; ++i) {
				ns.exec(file, target, 1, i)
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
			if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target)) {
				await ns.weaken(target)
			}

			if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) * 0.20) {
				await ns.grow(target)
			}

			if (ns.getServerSecurityLevel(target) <= ns.getServerMinSecurityLevel(target) &&
				ns.getServerMoneyAvailable(target) >= ns.getServerMaxMoney(target) * 0.20 &&
				ns.hasRootAccess(target) == true) {
				await ns.hack(target)
			}
		}
		else {
			var filtered = servers.filter(function(string) {
				servers.remove(target)
			})
		}
	}
	await ns.sleep(20000)
	await spread(ns)
}
