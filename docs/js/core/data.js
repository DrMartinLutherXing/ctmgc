core.data = [
    {
        "name": "ctmgc", 
        "children": [
            {
                "content": "# ctmgc\n# mobile-game-controller\n\nThe Mobile Game Controller (MGC) Framework provides a system of tools for building an application with multiple interfaces served according to device preference.\n\nAn application built using this framework can seamlessly serve different views to different devices that access the same collective information.\n\nMGC is currently built on top of a streaming pubsub server wherein a user enters a virtual lobby and creates a type of chat room that other users can join and communicate with.\n\nThere is currently a Texas Hold 'em game lobby that a user display (computer) can create by going to the port it is being served on. Other users on this network can then join the created lobby and play in a group game of Texas Hold 'em. The display serves as the table and individual mobile devices as the user's respective hands.\n\nMGC can be used to turn potentially any standard game into a group console experience. It can also be easily applied in a business/educational/VR setting:\n\n\t1. Video conferencing streams or gotomeeting style interfaces controllable by any person in the meeting with their phone\n\t2. Classroom style lecturing with students responding and participating in class with their phones\n\t3. A virtual world displayed on a larger monitor that uses the user's phone's camera to project a virtual representation of them into this world. The user's position and action in this world are naturally controlled by their interactions with their phone.\n", 
                "name": "about"
            }
        ]
    }, 
    {
        "children": [
            {
                "content": "import os\ndirs = [os.path.join(\"js\", \"games\")]\ncopies = {\n\t\"html\": [\"index.html\"]\n}\nsyms = {\n\t\".\": [\"bots\"],\n\t\"css\": [\"mgc.css\"],\n\t\"img\": [\"mgc\"],\n\t\"js\": [\"mgc\"]\n}", 
                "name": "init"
            }
        ], 
        "name": "Back (Init Config)"
    }, 
    {
        "children": [
            {
                "content": "## core.config.ctmgc\n### Import line: 'CT.require(\"core.config\");'\n{\n\t\"games\": [],\n\t\"botheads\": false,\n\t\"timeout\": 30,\n\t\"ws\": {\n\t\t\"host\": \"localhost\",\n\t\t\"port\": 8888,\n\t\t\"reconnect\": false\n\t}\n}", 
                "name": "config.js"
            }
        ], 
        "name": "Front (JS Config)"
    }
];