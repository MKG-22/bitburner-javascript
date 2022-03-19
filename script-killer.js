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

export async function main(ns) {
    for(var i=0;i<servers.length; ++i){
        var target = servers[i]
        ns.killall(target)
    }
}
