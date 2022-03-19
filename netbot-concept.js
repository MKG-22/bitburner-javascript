// control script =========================================================================================================================

// var servers = [
// 	{ host: "n00dles", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "foodnstuff", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "sigma-cosmetics", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "joesguns", rootaccess: false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "hong-fang-tea", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "harakiri-sushi", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// 	{ host: "iron-gym", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
// ]

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

var serversfile = "netbot-servers.txt"
var start = 0
var listen = 0
var me = getHostname()

function log(msg) {
	print(msg)
}

function notify(msg) {
	toast(msg)
	log("server-msg: " + msg)
}

// function fileLoad() {
// 	log("\nnetbot: loading server file..")
// 	log("==================================\n")
// 	servers = read(serversfile)
// 	log("netbot: fileLoad: loaded.")
// 	log("fileLoad: " + serversfile)
// 	globalScan()
// 	// dScan()
// }

// function fileCheck() {
// 	log("\nnetbot: looking for server file..")
// 	log("==================================\n")
// 	var file = fileExists(serversfile, me)
// 	log("netbot: fileCheck: file = " + serversfile)
// 	if (file == true) {
// 		log("netbot: file found.")
// 		fileLoad()
// 	}
// 	else {
// 		log("netbot: file not found.")
// 		// servers.forEach.filter((value, i) => globalScan(value))
// 		globalScan()
// 		// servers.forEach(function(i, arr) {
// 		// 	forEach(function(i, name) {
// 		// 		log(fb + ":" + i)
// 		// 		globalScan()
// 		// 	})
//     	// });
// 	}
// 	log("netbot: fileCheck: complete.")
// }

function inject(k) {
	log("\nnetbot: injecting..")
	log("==================================\n")
	log("netbot: current target: " + k)
	killall(k)
	scp("netbot.script", k)
	for (i = 0; i < 7; ++i) {
		exec("netbot.script", k, 1, i)
	}
	listen=1
}

function serverscheck() {
	log("\nnetbot: servers check.")
	log("==================================\n")
	servers.forEach(function(string) {
		inject(string.host)
	})
}

// function convert(obj) {
//     var result = "{";
//     for (var key in obj) {
//       if (typeof obj[key] === "string")
//         result = result + key + ': "' + obj[key] + '",';
//       else
//         result = result + key + ": " + obj[key] + ",";
//     }
//     if (result !== "{")
//         result = result.substring(0, result.length-1);
//   result = result + "}"
//   return result;
// }

function savefile() {
	log("\nnetbot: saving server file..")
	log("==================================\n")
	log("netbot: saving servers.")
	write(serversfile, servers, "w")
	log("netbot: servers saved.")
	serverscheck()
}

function globalScan() {
	log("\nnetbot: starting global scan..")
	log("==================================\n")
	// servers.forEach(function(string) {
	// 	log( string.host )
	// })

	servers.forEach(function(string, boolean, number) {
		string.rootaccess = hasRootAccess(string.host)
		log("\nnetbot: root-access updated for " + string.host)
		string.ports = getServerNumPortsRequired(string.host)
		log("\nnetbot: ports updated for " + string.host)
		string.maxmoney = getServerMaxMoney(string.host)
		log("\nnetbot: max-money updated for " + string.host)
		string.avmoney = getServerMoneyAvailable(string.host)
		log("\nnetbot: available-money updated for " + string.host)
		string.firewall = getServerBaseSecurityLevel(string.host)
		log("\nnetbot: firewall updated for " + string.host)
		string.exploit = getServerMinSecurityLevel(string.host)
		log("\nnetbot: firewall-exploit updated for " + string.host)
		string.version += 1

		// servers.forEach.filter((value, i) => globalScan(value))
		// globalScan()
		// servers.forEach(function(i, arr) {
		// 	forEach(function(i, name) {
		// 		log(fb + ":" + i)
		// 		globalScan()
		// 	})
    	// });
	})
	savefile()
}

// function dScan(item, index, arr){
// 	// servers.filter(name).forEach(name => {
// 	// 	log(":")
// 	// })
// 	servers.forEach(function() {
// 		log(":")
// 	})
// }

function netbotrecv(msg) {
	// log("\nnetbot: incoming date.")
	// log("==================================\n")
	// log(servers.filter( (name) ))
	// servers.filter(name).forEach(globalScan(element))
	// savefile()
	notify(msg)
	log("netbot-message: " + msg)
}

function netbotmsg(item, msg) {
	if (msg.substr(1) == item.host) {
		log("netbot: host found in servers: " + item.host)
		var tlabel = msg.substr(2)
		log("netbot: id: " + tlabel)
		var tvalue = msg.substr(3)
		log("netbot: value: " + tvalue)
		servers.item.tlabel = tvalue
		servers.item.version += 1
		log("netbot: servers updated.")
		log("netbot: saving to file..")
		savefile()
		log("netbot: saved servers file.")
	}
}

while(start == 0) {
	clearLog()
	// servers.forEach(function(string) {
	// 	log( string.host )
	// })
	start=1
	fileCheck()
}
	// listen = 1
	// start = 1
	// log("\nserv-config-loaded:")
	// log("==================================\n")
	// log("listen: " + listen)
	// log("start: " + start)
	// fileCheck()

while (listen = 1) {
	var clmsg = readPort(17)
	if (clmsg == "NULL PORT DATA") {

	}
	else {
		notify(clmsg)
		log("netbot-message: " + clmsg)
		netbotrecv(clmsg)
	}
}

// client script =========================================================================================================================
var servers = [
	{ host: "n00dles", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "foodnstuff", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "sigma-cosmetics", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "joesguns", rootaccess: false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "hong-fang-tea", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "harakiri-sushi", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
	{ host: "iron-gym", rootaccess:false, ports:0, maxmoney:0, avmoney:0, firewall:0, exploit:0, version:0 },
]

var start = 0

function securitycheck() {
	servers.forEach(function(string, boolean, number) {
		log("netbot-security-check: " + string.host)
		check(string, boolean, number)
		log("netbot-security-check: pen: " + string.host)
		pen(string)
	})
	securitycheck()
}

function check(s, b, n) {
	log("\nnetbot-seccheck: running..")
	log("==================================")
	b.rootaccess = hasRootAccess(s.host)
	log("netbot-seccheck: result: " + s.host + ": " + ":" + b.rootaccess)
	n.ports = getServerNumPortsRequired(s.host)
	log("netbot-seccheck: result: " + s.host + ": " + ":" + n.ports)
	n.maxmoney = getServerMaxMoney(s.host)
	log("netbot-seccheck: result: " + s.host + ": " + ":" + n.maxmoney)
	n.firewall = getServerSecurityLevel(s.host)
	log("netbot-seccheck: result: " + s.host + ": " + ":" + n.firewall)
	n.exploit = getServerMinSecurityLevel(s.host)
	log("netbot-seccheck: sending: " + s.host + ": " + ":" + n.exploit)
	writePort(17, s.host + " " + "root-access" + " " + b.rootaccess)
	log("netbot-seccheck: sending: " + s.host + ": " + ":" + b.rootaccess)
	writePort(17, s.host + " " + "ports" + " " +n.ports)
	log("netbot-seccheck: sending: " + s.host + ": " + ":" + n.ports)
	writePort(17, s.host + " " + "max-monney" + " " + n.maxmoney)
	log("netbot-seccheck: sending: " + s.host + ": " + ":" + n.maxmoney)
	writePort(17, s.host + " " + "firewall" + " " + n.firewall)
	log("netbot-seccheck: sending: " + s.host + ": " + ":" + n.firewall)
	writePort(17, s.host + " " + "exploit" + " " + n.exploit)
}

function pen(tar) {
	log("\nnetbot-pen: running..")
	log("==================================")
	if (tar.ports == 0){
		if(tar.rootaccess==true){
			log("netbot-pen: have root access." + tar.host)
		}
		else{
			nuke(tar.host)
			log("netbot-pen: ports 0, nuking." + tar.host)
		}
	}
	if(tar.ports >= 1){
			log("netbot-pen: ports > 1, need more software." + tar.host)
		}
	if (tar.firewall > tar.exploit) { 
		log("netbot-pen: firewall, weaken." + tar.host)
		weaken(tar.host)
	}
	if (tar.avmoney < tar.maxmoney) {
		log("netbot-pen: money, grow." + tar.host)
		grow(tar.host)
	}
	if (tar.firewall <= tar.exploit & tar.avmoney > tar.maxmoney * 0.10) {
		log("netbot-pen: hacking." + tar.host)
		hack(tar.host)
	}
}

// start
while (start == 0) {
	start = 1
	log("\nclient-config-loaded:")
	log("==================================\n")
	log("start: " + start)
	securitycheck()
}

function log(msg) {
	print(msg)
}
