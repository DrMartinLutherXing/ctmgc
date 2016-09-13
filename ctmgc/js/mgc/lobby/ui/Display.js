mgc.lobby.ui.Display = CT.Class({
	"CLASSNAME": "mgc.lobby.ui.Display",
	"_say": function(msg) {
		if (core.config.ctmgc.botheads)
			CT.dom.getDoc(this.iframe).postMessage(msg, "*");
	},
	"leave": function(user) {
		this._say(user + " leaves the room");
	},
	"join": function(user) {
		this._say(user + " joins the room");
	},
	"update": function(d) {
		var data = d.message.data;
		if (d.message.action == "newgame")
			this._say("new game: " + data);
		else if (d.message.action == "oldgame")
			this._say("game removed: " + data);
	},
	"init": function(obj) {
		this.log("init", obj);
		if (core.config.ctmgc.botheads) {
			this.iframe = CT.dom.iframe("http://45.79.138.63:8082/game0.html",
				"lobbybot");
			this.view.appendChild(this.iframe);
		}
		core.config.ctmgc.games.forEach(function(gtype) {
			this.view.appendChild(CT.dom.button(gtype, function() {
				mgc.core.actor.create(gtype);
			}));
		});
		this.chat.open();
	}
}, mgc.core.UI);