/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Alexander Wells",
				Photo: "Alexander.jpg",
				Quote: "La vida esta para vivirla",
				Age: 20,
				Occupation: "Estudiante de Erasmus",
				Family: "Soltero",
				Location: "Granada, C/Camino de ronda, 100",
				Character: "Le gusta experimnetar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Aprender mas español", "Hacer cuantos mas amigos mejor ", "Disfrutar su dia a dia"],
				Frustrations: ["Le gustaria poder ver a su familia mas seguido ", "No sabe cocinar, no le importaria aprender "],
				Bio: "Es de Alemania, vino a Granada por una beca erasmus para seguir estudiando su Carrera de Traduccion. Como buen amante de la lengua española le gusta relacionarse con el idioma para poder aprender mas de él, por eso, siempre que puede busca ambientes en los que pueda relacionarse y disfrutar de su estancia en España ",
				Tech: [
					{ Name: "TIC/Internet", Value:3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Quiere planificar su proxima quedada con amigos en un sitio nuevo",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4.5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Laura Martínez ",
				Photo: "Laura.jpg",
				Quote: "Tripa vacía, sin alegría",
				Age: 31,
				Occupation: "Terminado máster de cocina",
				Family: "Con pareja",
				Location: "Avenida Andalucía, 15",
				Character: "Pasión por la cocina",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Abrir su propio restuaurante", "Probar nuevos sabores", "Buscar inspiración"],
				Frustrations: ["No sabe que ambiente inspirar en su restaurante", "No sabe como innovar"],
				Bio: "Ha vivido en Granada durante toda su vida y terminó hace un año su máster de cocina. Actualmente viaja por toda españa visitando los restaurantes más innovadores con su pareja para conseguir inspiración. Le encanta probar nuevos platos y adora a los animales.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3.5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Busca inspiración para sus platos y la temática del restaurante." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])