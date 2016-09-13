mgc.core.Base = CT.Class({
	"CLASSNAME": "mgc.core.Base",
	"init": function(obj, name) {
		this.name = name;
	},

	// override
	"update": function() {},
	"leave": function() {},
	"join": function() {}
});