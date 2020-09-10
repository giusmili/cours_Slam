document.addEventListener("DOMContentLoaded", event => {
	event.preventDefault();
	//version access


	//objet produit
	console.log("chargé");
	let machine = {
		el: document.querySelector("figure > figcaption"),
		print_image: document.querySelector("figure"),
		marque: "Laden",
		capacite: "25kg",
		consommation: 100,
		prix: 300,
		image: "./asset/images.jpg",
		printOut() {

			console.log(`
						marque : ${this.marque}
						capacité : ${this.capacite}
						consommation : ${this.consommation} KW
						prix : ${this.prix} euros
						image : ${this.image}
						`);

			this.el.innerHTML += `

								<ul>
									<li>Marque : ${this.marque}</li>
									<li>Capacité : ${this.capacite}</li>
									<li>Consommation : ${this.consommation} KW</li>
									<li>Prix : ${this.prix} &euro;</li>
								</ul>`;
			this.print_image.innerHTML += ` <img src="${this.image}" alt="machine laden">`;
			//légende

		}

	};

	machine.printOut();

	console.log(machine.print_image);

	let access;
	let btn;
	btn = document.querySelector("header>h1");
	access = document.querySelector("body");

	btn.addEventListener('click', e => {
		console.log(btn);
		access.classList.toggle("access");
		e.stopPropagation();
	});
});