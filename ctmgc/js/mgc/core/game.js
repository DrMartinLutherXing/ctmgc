mgc.core.game = {
	"_id": null,
	"_game": null,
	"_games": {},
	"update": function(u) {
		CT.log("mgc.core.game.update: " + JSON.stringify(u));
		mgc.core.game._games[u.channel].update(u);
	},
	"join": function(channel, user) {
		CT.log("mgc.core.game.join: " + channel + " " + user);
		mgc.core.game._games[channel].join(user);
	},
	"leave": function(channel, user) {
		CT.log("mgc.core.game.leave: " + channel + " " + user);
		mgc.core.game._games[channel].leave(user);
	},
	"load": function(obj) {
		CT.log("mgc.core.game.load: " + JSON.stringify(obj));
		mgc.core.game._game.load(obj);
	},
	"start": function(s) {
		var g = mgc.core.game._game;
		g.start && g.start(s);
	},
	"init": function(i) {
		var game, channel = i.game_name,
			name = channel.split("_")[0];
		if (!(channel in mgc.core.game._games)) {
			CT.require('games.' + name + ".import", true);
			mgc.core.game._games[channel] =
				new games[name].game();
		}
		mgc.core.game._game = mgc.core.game._games[channel];
	}
};
