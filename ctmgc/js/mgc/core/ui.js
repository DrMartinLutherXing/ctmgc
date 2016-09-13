mgc.core.UI = CT.Class({
	"CLASSNAME": "mgc.core.UI",
	"init": function(obj, name) {
		this.view = CT.dom.div("", "fullscreen");
		if (!obj.isPlayerNode) {
			this.chat = new mgc.core.Chat(name, obj);
			this.view.appendChild(this.chat.node);
			this.view.appendChild(this.chat.button);
		}
	}
}, mgc.core.Base);

mgc.core.ui = {
	"_uis": {},
	"_ui": null,
	"view": null,
	"platform": CT.info.mobile || CT.align.width() < 720 ? "Mobile" : "Display",
	"setView": function(view) {
		mgc.core.ui.view = view;
	},
	"join": function(channel, user) {
		CT.log("mgc.core.ui.join " + channel + " " + user);
		mgc.core.ui._uis[channel].chat.join(user);
		mgc.core.ui._uis[channel].join(user);
	},
	"leave": function(channel, user) {
		CT.log("mgc.core.ui.leave " + channel + " " + user);
		mgc.core.ui._uis[channel].chat.leave(user);
		mgc.core.ui._uis[channel].leave(user);
	},
	"update": function(d) {
		mgc.core.ui._uis[d.channel].chat.update(d);
		mgc.core.ui._uis[d.channel].update(d);
	},
	"load": function(gamename, obj) {
		if (!(gamename in mgc.core.ui._uis)) {
			var is_lobby = gamename == "lobby",
				pf = mgc.core.ui.platform,
				gametype = gamename.split("_")[0],
				req_base = is_lobby ? "mgc.lobby" : ("games." + gametype);
			mgc.core.ui.view.innerHTML = "";
			CT.require(req_base + ".ui." + pf, true);
			mgc.core.ui._uis[gamename] = new (is_lobby ? mgc.lobby
				: games[gametype]).ui[pf](obj, gamename);
		}
		mgc.core.ui._ui = mgc.core.ui._uis[gamename];
		mgc.core.ui.view.appendChild(mgc.core.ui._ui.view);
	}
};
