/* --------------------------------------------------------------------------------

Author: Jaime Olmo

Description: Collections of "I love you" phrases in different languages. 
This script generate an random phrase every time the functions 
show_me_the_love() is executed. This script was created as a gift to my wife 
on our first married San Valentine's day. The script is live on 
www.jaimeolmo.com/yo-amo-a-dielimar/

-------------------------------------------------------------------------------- */
function show_me_the_love() {

	var phrase = [
		"Ek het jou liefo",
		"Te dua",
		"Ana behibek",
		"Yes kez sirumem",
		"M’bi fe",
		"Ami tomake bhalobashi",
		"Ya tabe kahayu",
		"Nahigugma ako kanimo",
		"Obicham te",
		"Soro lahn nhee ah",
		"T’estimo",
		"Tsi ge yu i",
		"Ne mohotatse",
		"Ndimakukonda",
		"Ngo oiy ney a",
		"Wo ai ni",
		"U kamakutu nu",
		"Kisakihitin",
		"Mi aime jou",
		"Volim te",
		"Miluji te",
		"Jeg Elsker Dig",
		"Ik hou van jou",
		"Amin mela lle",
		"I love you ",
		"Mi amas vin",
		"Ma armastan sind",
		"Afgreki’",
		"Eg elski teg",
		"Doset daram",
		"Mahal kita",
		"Mina rakastan sinua",
		"Je t’aime",
		"Ik hald fan dy",
		"Ta gra agam ort",
		"Mikvarhar",
		"Ich liebe Dich",
		"S’agapo",
		"Hoo thunay prem karoo choo",
		"Palangga ko ikaw",
		"Aloha Au Ia`oe",
		"Ani ohev otach",
		"Guina higugma ko ikaw",
		"Hum Tumhe Pyar Karte hae",
		"Kuv hlub koj",
		"Nu’ umi unangwa’ta",
		"Szeretlek",
		"Eg elska tig",
		"Palangga ko ikaw",
		"Saya cinta padamu",
		"Negligevapse",
		"Taim i’ ngra leat",
		"Ti amo",
		"Aishiteru or Anata ga daisuki desu",
		"Naanu ninna preetisuttene",
		"Kaluguran daka",
		"Nakupenda",
		"Ego amo te",
		"Eu te amo"
	];


	var nationality = [
		"Afrikaans",
		"Albanian",
		"Arabic",
		"Armenian",
		"Bambara",
		"Bengali",
		"Belarusian",
		"Bisaya",
		"Bulgarian",
		"Cambodian",
		"Catalan",
		"Cherokee",
		"Cheyenne",
		"Chichewa",
		"Chinese Cantonese",
		"Chinese Mandarin",
		"Comanche",
		"Cree",
		"Creole",
		"Croatian",
		"Czech",
		"Danish",
		"Dutch",
		"Elvish",
		"English",
		"Esperanto",
		"Estonian",
		"Ethiopian",
		"Faroese",
		"Farsi",
		"Filipino",
		"Finnish",
		"French",
		"Frisian",
		"Gaelic",
		"Georgian",
		"German",
		"Greek",
		"Gujarati",
		"Hiligaynon",
		"Hawaiian",
		"Hebrew",
		"Hiligaynon",
		"Hindi",
		"Hmong",
		"Hopi",
		"Hungarian",
		"Icelandic",
		"Ilonggo",
		"Indonesian",
		"Inuit",
		"Irish",
		"Italian",
		"Japanese",
		"Kannada",
		"Kapampangan",
		"Kiswahili",
		"Latin",
		"Portuguese"
	];

	var the_phrase = document.getElementById("phrase");
	var the_nationality = document.getElementById("nationality");
	var i = Math.floor((Math.random() * (phrase.length-1) + 1));

	the_phrase.innerHTML = phrase[i].toString();
	the_nationality.innerHTML = nationality[i].toString();
};