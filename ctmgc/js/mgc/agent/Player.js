mgc.agent.Player = CT.Class({
	"CLASSNAME": "mgc.agent.Player",
	"init": function() {
		this.log("init");
		this.setCbs({
			"join": mgc.core.ui.join,
			"leave": mgc.core.ui.leave,
			"message": mgc.core.ui.update,
			"pm": this.onPm,
			"subscribe": this.onSubscribe
		});
		this.name = prompt("name?");
		CT.pubsub.subscribe("lobby");
	},
	"_pmUpdate": function(user, channel, action, data) {
		mgc.core.ui.update({
			"user": user,
			"channel": channel,
			"message": {
				"action": action,
				"data": data
			}
		});
	},
	"onSubscribe": function(data) {
		if (data.channel == "lobby") {
			this.lobbydata = data;
			this.joinLobby();
		} else
			mgc.core.ui.load(data.channel, data);
	},
	"onPm": function(data, user) {
		this.log("onPm", data, user);
		if (user == "Concierge") { // system messages
			if (data.action == "list") {
				this.gamelist = data.data;
				this.joinLobby();
			}
			else
				throw "unimplemented lobby private message!";
		} else if (user.split("_")[0] == "host") {
			if (data.action == "deal") {
				this._pmUpdate(user, data.data.channel,
					"deal", data.data.card);
			} else
				this.log("UNIMPLEMENTED PM!", data.action);
		} else // regular private message
			this.log("wassup? pm from whom?");
	},
	"joinLobby": function() {
		this.log("joinLobby", this.lobbydata, this.gamelist);
		if (this.lobbydata && this.gamelist)
			mgc.core.ui.load("lobby", CT.merge(this.lobbydata, {
				"gamelist": this.gamelist
			}));
	}
}, mgc.agent.Actor);