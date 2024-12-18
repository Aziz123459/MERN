const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const IdDivisibleBy3 = pokemon.filter( p => p.id % 3 == 0 );
console.log(IdDivisibleBy3)
// **************************************************************************************
const fire = pokemon.filter( p => p.types.filter(type=> type === 'fire' ).length>0);
console.log(fire)
// **************************************************************************************
const types = pokemon.filter( p => p.types.filter(type=>type).length>=2   );
console.log(types)
// **************************************************************************************
const names = pokemon.map( p => p.name );
console.log(names)
// **************************************************************************************
const  great= pokemon.filter(p => p.id> 99).map(p=>p.name) ;
console.log(great)
// **************************************************************************************
const poison=pokemon.filter(p=>p.types.length===1).filter( p => p.types.filter(type=> type === 'poison' ).length>0).map(p=>p.name)
console.log(poison)
// **************************************************************************************
const flying=pokemon.filter( p => p.types[1]=='flying').map(p=>p.types[0])
console.log(flying)
// **************************************************************************************
const normalCount = pokemon.filter( p => p.types.filter(type=> type === 'normal' ).length>0).map(p=>p.types)
console.log(normalCount.length);
// **************************************************************************************
const except = pokemon.filter( p => p.id!=148)
console.log(except);
// **************************************************************************************
const fairy = pokemon.map(p => p.id === 35 ? { ...p, types: ["fairy"] }: p)
console.log(fairy)

