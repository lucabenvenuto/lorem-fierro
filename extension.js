// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const TEXTO = ["Aquí me pongo a cantar\nal compás de la vigüela,\nque el hombre que lo desvela\nuna pena estrordinaria,\ncomo la ave solitaria,\ncon el cantar se consuela.\n",
		"Pido a los santos del cielo\nque ayuden mi pensamiento;\nles pido en este momento\nque voy a cantar mi historia\nme refresquen la memoria\ny aclaren mi entendimiento.\nVengan santos milagrosos,\nvengan todos en mi ayuda,\nque la lengua se me añuda\ny se me turba la vista;\npido a mi Dios que me asista\nen una ocasión tan ruda.\n",
		"Yo he visto muchos cantores,\ncon famas bien otenidas,\ny que después de alquiridas\nno las quieren sustentar:\nparece que sin largar\nse cansaron en partidas.\n",
		"Mas ande otro criollo pasa\nMartín Fierro ha de pasar;\nnada lo hace recular\nni las fantasmas lo espantan;\ny dende que todos cantan\nyo también quiero cantar.\n",
		"Cantando me he de morir,\ncantando me han de enterrar,\ny cantando he de llegar\nal pie del Eterno Padre:\ndende el vientre de mi madre\nvine a este mundo a cantar.\n",
		"Que no se trabe mi lengua\nni me falte la palabra.\nEl cantar mi gloria labra,\ny poniéndome a cantar,\ncantando me han de encontrar\naunque la tierra se abra.\n",
		"Me siento en el plan de un bajo\na cantar un argumento.\nComo si soplara el viento\nhago tiritar los pastos.\nCon oros, copas y bastos\njuega allí mi pensamiento.\n",
		"Yo no soy cantor letrao,\nmas si me pongo a cantar\nno tengo cuándo acabar\ny me envejezco cantando;\nlas coplas me van brotando\ncomo agua de manantial.\n",
		"Con la guitarra en la mano\nni las moscas se me arriman;\nnaides me pone el pie encima,\ny cuando el pecho se entona,\nhago gemir a la prima\ny llorar a la bordona.\n",
		"Yo soy toro en mi rodeo\ny toraso en rodeo ajeno;\nsiempre me tuve por güeno,\ny si me quieren probar,\nsalgan otros a cantar\ny veremos quién menos.\n",
		"No me hago al lao de la güeya\naunque vengan degollando;\ncon los blandos yo soy blando\ny soy duro con los duros,\ny ninguno, en un apuro,\nme ha visto andar tutubiando.\n",
		"En el peligro, ¡qué Cristos!,\nel corazón se me enancha\npues toda la tierra es cancha,\ny de esto naides se asombre:\nel que se tiene por hombre\ndonde quiera hace pata ancha.\n",
		"Soy gaucho, y entiendanló\ncomo mi lengua lo explica,\npara mí la tierra es chica\ny pudiera ser mayor.\nNi la víbora me pica\nni quema mi frente el sol.\n",
		"Nací como nace el peje,\nen el fondo de la mar;\nnaides me puede quitar\naquello que Dios me dio:\nlo que al mundo truge yo\ndel mundo lo he de llevar.\n",
		"Mi gloria es vivir tan libre\ncomo el pájaro del cielo;\nno hago nido en este suelo,\nande hay tanto que sufrir;\ny naides me ha de seguir\ncuando yo remonto el vuelo.\n",
		"Yo no tengo en el amor\nquien me venga con querella;\ncomo esas aves tan bellas\nque saltan de rama en rama;\nyo hago en el trébol mi cama\ny me cubren las estrellas.\n",
		"Y sepan cuantos escuchan\nde mis penas el relato,\nque nunca peleo ni mato\nsino por necesidá,\ny que a tanta adversidá\nsolo me arrojó el mal trato\n"];

	function getRandomText() {

		let numLines = TEXTO.length;

		return TEXTO[Math.floor(Math.random() * numLines)];
	}
	
	function enterText(text) {
		
		const editor = vscode.window.activeTextEditor;
		
		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(editor.selection.active, text);
			});
		}
	}

	let disposable = vscode.commands.registerCommand('loremfierro.loremFierro', function () {
		enterText(getRandomText());
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
