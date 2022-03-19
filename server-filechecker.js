var codeblackservers = [
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

var files = []

var trigger = 0
var me = getHostname()

while(trigger==0){
	log("\ncodeblack-file-checker: executed.")
	log("==================================")
	codeblackservers.forEach(function(string) {
		log("\n -" + string)
        log(ls(string))
		files.push(string + ":" + "\n" + ls(string) + "\n\n")
    })
	write("files.txt", files, "w")
	trigger=1
}

function log(msg) {
	print(msg)
	// use log("what you want printed in the script console.")
}
