CT.require("mgc.core.game");

mgc.agent.Host = CT.Class({
	"CLASSNAME": "mgc.agent.Host",
	"init": function() {
		this.name = "host_" + Math.floor((Math.random() * 100000));
		this.setCbs({
			"subscribe": this.onSubscribe,
			"join": this.onJoin,
			"leave": this.onLeave,
			"message": this.onMessage
		});
		this.join("lobby");
	},
	"onMessage": function(msg) {
		this.log("onMessage", msg);
		mgc.core.ui.update(msg);
		if (msg.channel != "lobby")
			mgc.core.game.update(msg);
	},
	"onSubscribe": function(data) {
		this.log("onSubscribe", data.channel);
		this.channel = data.channel;
		if (data.channel != "lobby") {
			mgc.core.game.init({
				"game_name": data.channel
			});
			mgc.core.game.load(data);
		}
		mgc.core.ui.load(data.channel, data);
	},
	"onJoin": function(channel, user) {
		this.log("onJoin", channel, user);
		mgc.core.ui.join(channel, user);
		if (channel != "lobby")
			mgc.core.game.join(channel, user);
	},
	"onLeave": function(channel, user) {
		this.log("onLeave", channel, user);
		mgc.core.ui.leave(channel, user);
		if (channel != "lobby")
			mgc.core.game.leave(channel, user);
	},
	"turn": function(player) {
		this.log("turn", player);
		CT.pubsub.publish(this.channel, {
			"action": "turn",
			"data": player
		});
	},
	"flip": function(card) {
		this.log("flip", card);
		CT.pubsub.publish(this.channel, {
			"action": "flip",
			"data": card
		});
	},
	"deal": function(player, card) {
		this.log("deal", player, card);
		CT.pubsub.pm(player, {
			"action": "deal",
			"data": {
				"channel": this.channel,
				"card": card
			}
		});
	},
	"create": function(gametype) { // holdem...
		this.log("create", gametype);
		CT.pubsub.pm("Concierge", {
			"action": "create",
			"data": gametype
		});
	},
	"start": function(gamename) {
		this.log("start", gamename);
		CT.pubsub.pm("Concierge", {
			"action": "start",
			"data": gamename
		});
		CT.pubsub.publish(gamename, {
			"action": "start"
		});
	}
}, mgc.agent.Actor);