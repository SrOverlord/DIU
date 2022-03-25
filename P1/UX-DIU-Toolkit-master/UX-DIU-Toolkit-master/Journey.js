/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Alexander Wells",
                Photo: "Alexander.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar una quedada con sus amigos ",
                touch1: "Móvil(agenda)",
                feel1: "4",
                con1: "Encontrar un dia en el que puedan quedar todos ",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet nuevos sitios en los que comer y pasar la noche ",
                touch2: "Móvil(Internet)",
                feel2: "3",
                con2: "Hay varias opciones, pero son los tipicos sitios que ya ha visitado con sus amigos",
                ima2: "cartoon-PCtyping.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide publicar en instagram una historia preguntando: 'Sitio para comer y estar por la noche?'",
                touch3: "Móvil(Instagram)",
                feel3: "2",
                con3: "Recibe muchas respuestas de sitios para solor comer, que ya habia visitado",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Recibe una notificacion de un amigo diciendo de probar algun hostel",
                touch4: "Móvil(internet)",
                feel4: "3",
                con4: "No sabe lo que es un hostel y no sabe bien que hacer",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Mirando el significado de hostel, le sale de recomendacion el Lemon Rock y ve que ademas de la comida, el ambiente y tematica le parecen una pasada",
                touch5: "Móvil (Internet)",
                feel5: "3",
                con5: "Tiene que llamar a sus amigos para reservar un fin de semana que tiene como invitado a un grupo Pop que le gusta. Además, ve que no tienen disponible el servicio de alojamiento ",
                ima5: "cartoon-happy.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue hablar con su grupo y facilmente reservar ese día, Con ansias de que llegue el dia",
                touch6: "Ordenador",
                feel6: "4",
                con6: "Unos amigos vieron el sitio por internet y como querian mesa alta tuvo que cambiar el tipo de reserva. Les hubises gustado quedarse a dormir",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Laura Martínez ",
                Photo: "Laura.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere ir a un restaurante que esté cerca en granada",
                touch1: "Movil (Aplicaciones de opiniones)",
                feel1: "2",
                con1: "No encuentra ningún un restaurante que no haya visitado",
                ima1: "cartoon-looking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide preguntar en redes sociales",
                touch2: "Movil (Redes sociales)",
                feel2: "3",
                con2: "Le da pereza preguntar a bastantes personas para encontrar un lugar",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Un amigo le habla sobre el restaurante Lemon Rock",
                touch3: "Móvil (llamada)",
                feel3: "3",
                con3: "No le llama la atención el concepto de hostel",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Le da una oportunidad y visita la página web para observa la carta sorprendida",
                touch4: "Móvil (webapp)",
                feel4: "4",
                con4: "El precio de los platos le parece algo caro",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a traves de la página web una mesa para dos personas ",
                touch5: "Ordenador (webapp)",
                feel5: "4",
                con5: "No encuentra mesa para la hora que quería",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Visita el restaurante y le encanta la experiencia",
                touch6: "Servicio (Restaurante)",
                feel6: "5",
                con6: "Le costó un poco encontrar aparcamiento para",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



