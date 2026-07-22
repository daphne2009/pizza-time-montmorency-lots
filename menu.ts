export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  popular?: boolean;
};

const productImage = (name: string) => `/images/plats/${name}.png`;

export const menu: MenuItem[] = [
  { name: "Menu pizza", description: "1 pizza junior et 1 boisson 33 cl", price: "8,50 €", category: "Menus", image: productImage("menu-pizza"), popular: true },
  { name: "Menu panini", description: "1 panini au choix, frites et 1 boisson 33 cl", price: "7,50 €", category: "Menus", image: productImage("menu-panini") },
  { name: "Menu Tex-Mex", description: "6 wings ou nuggets, frites et 1 boisson 33 cl", price: "7,90 €", category: "Menus", image: productImage("menu-texmex") },
  { name: "Menu sandwich", description: "1 sandwich au choix, frites et 1 boisson 33 cl", price: "7,50 €", category: "Menus", image: productImage("menu-sandwich") },
  { name: "Menu salade", description: "1 salade au choix et 1 boisson 33 cl", price: "7,50 €", category: "Menus", image: productImage("menu-salade") },
  { name: "Menu dessert", description: "1 dessert au choix et 1 boisson 33 cl", price: "5,50 €", category: "Menus", image: productImage("menu-dessert") },
  { name: "Margherita", description: "Tomate, fromage", price: "Junior 6,90 € · Méga 14,20 €", category: "Pizzas", image: productImage("margherita"), popular: true },
  { name: "Végétarienne", description: "Tomate, fromage, tomates fraîches, champignons, poivrons", price: "Junior 8,90 € · Méga 17,10 €", category: "Pizzas", image: productImage("vegetarienne") },
  { name: "Reine", description: "Tomate, fromage, jambon, œuf, champignons", price: "Junior 8,90 € · Méga 17,10 €", category: "Pizzas", image: productImage("reine"), popular: true },
  { name: "Sicilienne", description: "Tomate, fromage, thon, œuf, olives", price: "Junior 9,10 € · Méga 17,50 €", category: "Pizzas", image: productImage("sicilienne") },
  { name: "Calzone", description: "Tomate, fromage, viande hachée, champignons", price: "Junior 8,90 € · Méga 17,40 €", category: "Pizzas", image: productImage("calzone") },
  { name: "Regina", description: "Tomate, fromage, jambon, champignons, olives", price: "Junior 8,90 € · Méga 17,60 €", category: "Pizzas", image: productImage("regina") },
  { name: "Campione", description: "Tomate, fromage, viande hachée, œuf, champignons", price: "Junior 9,10 € · Méga 20,40 €", category: "Pizzas", image: productImage("campione") },
  { name: "4 Fromages", description: "Tomate, fromage, brie, parmesan, chèvre", price: "Junior 9,50 € · Méga 21,00 €", category: "Pizzas", image: productImage("quatre-fromages") },
  { name: "Pêcheur", description: "Tomate, fromage, thon, œuf, olives", price: "Junior 9,50 € · Méga 21,00 €", category: "Pizzas", image: productImage("pecheur") },
  { name: "4 Saisons", description: "Tomate, fromage, jambon, artichaut, champignons, olives", price: "Junior 9,50 € · Méga 21,00 €", category: "Pizzas", image: productImage("quatre-saisons") },
  { name: "Mexicaine", description: "Tomate, fromage, viande hachée, merguez, poivrons, olives", price: "Junior 9,50 € · Méga 21,90 €", category: "Pizzas", image: productImage("mexicaine"), popular: true },
  { name: "Spéciale", description: "Tomate, fromage, jambon, viande hachée, pepperoni, œuf", price: "Junior 9,50 € · Méga 20,90 €", category: "Pizzas", image: productImage("speciale") },
  { name: "Paysanne", description: "Crème fraîche, fromage, jambon, pommes de terre", price: "Junior 9,50 € · Méga 21,50 €", category: "Pizzas", image: productImage("paysanne") },
  { name: "Milano", description: "Crème fraîche, fromage, jambon de dinde, œuf", price: "Junior 9,50 € · Méga 21,50 €", category: "Pizzas", image: productImage("milano") },
  { name: "Chicken", description: "Crème fraîche, fromage, poulet fumé", price: "Junior 9,50 € · Méga 22,00 €", category: "Pizzas", image: productImage("chicken"), popular: true },
  { name: "Tartiflette", description: "Crème fraîche, fromage, viande de bœuf fumée, pommes de terre, oignons", price: "Junior 9,50 € · Méga 21,50 €", category: "Pizzas", image: productImage("tartiflette") },
  { name: "Chicago", description: "Crème fraîche, fromage, viande hachée, bacon, cheddar, œuf", price: "Junior 9,50 € · Méga 21,50 €", category: "Pizzas", image: productImage("chicago") },
  { name: "Kebab", description: "Sauce poivre, fromage, viande kebab, champignons", price: "Junior 9,50 € · Méga 21,50 €", category: "Pizzas", image: productImage("kebab") },
  { name: "Boursin", description: "Crème fraîche, fromage, viande hachée, poulet rôti, Boursin, pommes de terre", price: "Junior 11,00 € · Méga 25,00 €", category: "Pizzas", image: productImage("boursin") },
  { name: "Chèvre miel", description: "Crème fraîche, fromage, fromage de chèvre, miel, olives", price: "Junior 11,00 € · Méga 23,50 €", category: "Pizzas", image: productImage("chevre-miel") },
  { name: "Raclette", description: "Crème fraîche, fromage à raclette, pommes de terre", price: "Junior 11,00 € · Méga 25,00 €", category: "Pizzas", image: productImage("raclette") },
  { name: "Country", description: "Crème fraîche, fromage, viande hachée, pommes de terre, olives", price: "Junior 11,00 € · Méga 25,50 €", category: "Pizzas", image: productImage("country") },
  { name: "Buffalo", description: "Sauce barbecue, fromage, sauce tomate, viande, olives", price: "Junior 11,00 € · Méga 25,00 €", category: "Pizzas", image: productImage("buffalo") },
  { name: "Pizza Time", description: "Tomate, fromage, mélange de chèvre, poulet, pepperoni, quatre fromages", price: "Junior 11,00 € · Méga 23,80 €", category: "Pizzas", image: productImage("pizza-time"), popular: true },

  { name: "Mixte", description: "Salade verte, tomates, olives", price: "2,90 €", category: "Salades", image: productImage("salade-mixte") },
  { name: "Niçoise", description: "Salade verte, tomates, thon, œuf, olives", price: "8,50 €", category: "Salades", image: productImage("salade-nicoise") },
  { name: "Exotique", description: "Salade verte, tomates, carottes râpées, concombre, crevettes", price: "8,50 €", category: "Salades", image: productImage("salade-exotique") },
  { name: "Croquante", description: "Salade verte, tomates, jambon, emmental, croûtons grillés", price: "8,50 €", category: "Salades", image: productImage("salade-croquante") },
  { name: "Océane", description: "Salade verte, tomates, saumon fumé, concombre, olives", price: "8,90 €", category: "Salades", image: productImage("salade-oceane") },
  { name: "Provençale", description: "Salade verte, tomates, fromage de brebis, olives, concombre", price: "8,50 €", category: "Salades", image: productImage("salade-provencale") },
  { name: "Chèvre noix", description: "Salade verte, fromage de chèvre, noix, olives", price: "8,90 €", category: "Salades", image: productImage("salade-chevre-noix") },
  { name: "Surimi", description: "Salade verte, tomates, surimi, concombre, carottes râpées", price: "8,50 €", category: "Salades", image: productImage("salade-surimi") },

  { name: "Panini Time", description: "Fromage, tomates, viande hachée", price: "4,60 €", category: "Paninis", image: productImage("panini-time") },
  { name: "Venezia", description: "Fromage, tomates, jambon", price: "4,60 €", category: "Paninis", image: productImage("panini-venezia") },
  { name: "Milano", description: "Fromage, tomates, thon", price: "4,60 €", category: "Paninis", image: productImage("panini-milano") },
  { name: "Pacifico", description: "Crème fraîche, tomates, saumon fumé", price: "4,60 €", category: "Paninis", image: productImage("panini-pacifico") },
  { name: "Fermier", description: "Crème fraîche, tomates, poulet fumé", price: "4,60 €", category: "Paninis", image: productImage("panini-fermier") },
  { name: "3 Fromages", description: "Fromage bleu, fromage râpé", price: "4,60 €", category: "Paninis", image: productImage("panini-3-fromages") },
  { name: "Chèvre", description: "Crème fraîche, fromage, chèvre", price: "4,60 €", category: "Paninis", image: productImage("panini-chevre") },
  { name: "Kebab", description: "Sauce poivre, fromage, kebab", price: "4,60 €", category: "Paninis", image: productImage("panini-kebab") },
  { name: "Nutella", description: "Panini au Nutella", price: "3,50 €", category: "Paninis", image: productImage("panini-nutella") },

  { name: "Wings", description: "Ailes de poulet marinées", price: "6 pièces 5,60 € · 12 pièces 7,50 €", category: "Tex-Mex", image: productImage("wings") },
  { name: "Nuggets", description: "Bouchées de poulet pané", price: "8 pièces 5,60 € · 16 pièces 7,50 €", category: "Tex-Mex", image: productImage("nuggets") },
  { name: "Mozza sticks", description: "Bâtonnets de mozzarella panés", price: "5 pièces 4,60 €", category: "Tex-Mex", image: productImage("mozza-sticks") },
  { name: "Calamars frits", description: "Anneaux de calamars frits", price: "10 pièces 5,60 €", category: "Tex-Mex", image: productImage("calamars-frits") },
  { name: "Jalapeños", description: "Bouchées pimentées", price: "5 pièces 4,60 €", category: "Tex-Mex", image: productImage("jalapenos") },
  { name: "Onion rings", description: "Rondelles d’oignon panées", price: "10 pièces 5,00 €", category: "Tex-Mex", image: productImage("onion-rings") },
  { name: "Potatoes", description: "Pommes de terre épicées", price: "Petite 2,20 € · Grande 4,00 €", category: "Tex-Mex", image: productImage("potatoes") },
  { name: "Frites", description: "Frites dorées", price: "Petite 2,20 € · Grande 4,00 €", category: "Tex-Mex", image: productImage("frites") },

  { name: "Hamburger", description: "Steak, cheddar, salade, tomates, oignons, sauce", price: "6,50 €", category: "Burgers", image: productImage("hamburger") },
  { name: "Cheeseburger", description: "Steak, cheddar, salade, tomates, oignons, sauce", price: "7,00 €", category: "Burgers", image: productImage("cheeseburger") },
  { name: "Bacon burger", description: "Steak, cheddar, bacon, salade, tomates, oignons, sauce", price: "7,50 €", category: "Burgers", image: productImage("bacon-burger") },
  { name: "Chicken burger", description: "Poulet, cheddar, salade, tomates, oignons, sauce", price: "7,50 €", category: "Burgers", image: productImage("chicken-burger") },
  { name: "Double burger", description: "Deux steaks, cheddar, salade, tomates, oignons", price: "9,50 €", category: "Burgers", image: productImage("double-burger") },

  { name: "Jambon", description: "Jambon, beurre", price: "4,00 €", category: "Sandwichs", image: productImage("panini-venezia") },
  { name: "Poulet", description: "Poulet, mayonnaise, salade", price: "5,50 €", category: "Sandwichs", image: productImage("panini-fermier") },
  { name: "Poulet curry", description: "Poulet curry, mayonnaise, salade", price: "5,80 €", category: "Sandwichs", image: productImage("panini-time") },
  { name: "Thon", description: "Thon, mayonnaise, salade", price: "5,50 €", category: "Sandwichs", image: productImage("panini-milano") },
  { name: "Américain", description: "Steak haché, frites, sauce", price: "5,80 €", category: "Sandwichs", image: productImage("sandwich-americain") },

  { name: "Tiramisu", description: "Dessert italien crémeux", price: "3,50 €", category: "Desserts", image: productImage("tiramisu") },
  { name: "Mousse au chocolat", description: "Mousse au chocolat", price: "3,50 €", category: "Desserts", image: productImage("mousse-chocolat") },
  { name: "Panna cotta", description: "Dessert italien", price: "3,50 €", category: "Desserts", image: productImage("panna-cotta") },
  { name: "Tarte Daim", description: "Tarte au chocolat et caramel", price: "3,50 €", category: "Desserts", image: productImage("tarte-daim") },
  { name: "Glace 500 ml", description: "Parfum selon disponibilité", price: "5,50 €", category: "Desserts", image: productImage("glace") },

  { name: "Boisson 33 cl", description: "Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Oasis ou Ice Tea", price: "1,80 €", category: "Boissons", image: productImage("boisson-33") },
  { name: "Eau 50 cl", description: "Eau minérale", price: "1,20 €", category: "Boissons", image: productImage("eau-50") },
  { name: "Eau 1,5 L", description: "Grande bouteille d’eau", price: "2,00 €", category: "Boissons", image: productImage("eau-150") }
];

export const categories = ["Tout", ...Array.from(new Set(menu.map((item) => item.category)))];
