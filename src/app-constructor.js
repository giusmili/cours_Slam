/*main function*/
document.addEventListener('DOMContentLoaded', (event)=>{
	event.preventDefault();
	console.log("chargé");
	/*objet et constructeur*/
	const parent = document.querySelector("main")

	let lang = {

			init: function(nom,date){ //constructeur
				this.nom = nom;
				this.date = date;
			},
			printOut(){
				const desc = this.nom+' '+this.date;
				return desc;
			},
			
			el:document.createElement("ul")
			
			}
	

	
	let lang_1 = Object.create(lang);
	lang_1.init("HTML",1990);

	let lang_2 = Object.create(lang);
	lang_2.init("CSS",1998);


	let lang_3 = Object.create(lang);
	lang_3.init("Javascript",1995);

	let lang_4 = new lang.init("Php", 1994);
	console.log("New "+lang_4.nom+' '+lang_4.date)
	
	
	/*stock*/
	let stock=[]//itérer un peu plus bas
	stock.push(lang_1,lang_2,lang_3);
	localStorage.setItem("lang", JSON.stringify(stock));
	//méthode pour afficher dans localStorage chaque objet
	//console.log("lang", JSON.stringify(stock))
	let data=localStorage.getItem("lang")
	let donnees = JSON.parse(data);
		console.log(`Parser ${data}`)

		console.log(`Nom ${donnees[0].nom}`)
	for(let i=0; i<donnees.length; i++){
   
		console.log(donnees[i].nom+' '+donnees[i].date)
	}

	/*itération*/
	parent.appendChild(lang.el);//ajouter l'élément ul contenu dans l'objet

	stock.forEach((index)=>{
		console.log(index.printOut())
		lang.el.innerHTML+=`<li> ${index.printOut()} </li>`

	})
	/*fin du test*/
	console.log("type "+JSON.stringify(stock))
	//Json format de donnée : clé et valeur derivant de javascript




})