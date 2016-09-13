CT.require("CT.all");
CT.require("core");
CT.require("mgc.core.Base");
CT.require("mgc.core.Chat");
CT.require("mgc.core.ui");
CT.require("mgc.agent.Actor");

onload = function() {
	var agents = { "Mobile": "Player", "Display": "Host" },
		aname = agents[mgc.core.ui.platform],
		gamename = "holdem";

	mgc.core.ui.setView(CT.dom.id("view"));
	CT.require("mgc.agent." + aname, true);
	actor = new mgc.agent[aname]();
};
