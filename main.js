var imagenes=["https://www.topdoctors.mx/files/Doctor/profile/prof_12701_20220503131925.png","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var nombres=["Pedro López Sanabria","Adriana López Ramirez","Adriana Paola López López"];

var i=0;
function siguiente(){
	i++;
	var integrantes=2;
	if(  i>integrantes){
		i=0;
	}
	var img=imagenes[i];
	var name=nombres[i];
	document.getElementById("familia").src=img;
	document.getElementById("nombre").innerHTML=name;
}