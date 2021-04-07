/*
const Realm = {
	addMessage: function(message) {
		var results = document.getElementById("action_window");
		results.innerHTML = "<p>You are performing: " + message + "</p>";
	},
	attackMessage: function(monster_name) {
		var results = document.getElementById("combat_window");
		const combatErrorMessage = new Array("you trip and fall face-first into the mud!", "you wildly swing your sword in panic and the " + monster_name + " escapes!", "you're struck from behind and the " + monster_name + " escapes!");
		var msg = combatErrorMessage[Math.floor(Math.random() * combatErrorMessage.length)];
		results.innerHTML = "<p>You rush into battle against the " + monster_name + " but " + msg + "</p>";
	},
	move: function(direction) {
		var results = document.getElementById("action_window");
		results.innerHTML = "<p>You are now moving " + direction + "!</p>";
	}
}
*/
const Realm = {
	addMessage(message) {
		const results = document.getElementById("action_window");
		results.innerHTML = `<p>You are performing: ${message}</p>`;
	},
	attackMessage(monster_name) {
		const results = document.getElementById("combat_window");
		const combatErrorMessage = new Array("you trip and fall face-first into the mud!", `you wildly swing your sword in panic and the ${monster_name} escapes!`, `you're struck from behind and the ${monster_name} escapes!`);
		const msg = combatErrorMessage[Math.floor(Math.random() * combatErrorMessage.length)];
		results.innerHTML = `<p>You rush into battle against the ${monster_name} but ${msg}</p>`;
	},
	move(direction) {
		const results = document.getElementById("action_window");
		results.innerHTML = `<p>You are now moving ${direction}!</p>`;
	}
}
