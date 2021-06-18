/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
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
		$scope.Grupo_ID ="DIU1.Aguacate";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Isella Sorní",
                Photo: "isella2.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ve en la tele un anuncio de Lambus y le anima a probarlo para organizar las \
                vacaciones a Oslo que tenían previstas su pareja y él",
                touch1: "Televisión",
                feel1: "4",
                con1: "Es la primera vez que oye hablar de una aplicación del estilo y no sabe hasta \
                qué punto podría empeorar la experiencia de sus vacaciones si no funciona correctamente",
				ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/ 
                goal2: "Va a la Play Store de Google a descargar la aplicación",
                touch2: "Móvil (Play store)",
                feel2: "4",
                con2: "Mirando opiniones de la aplicación, ve la de un usuario descontento que ha tenido \
                una mala experiencia con ella en el pasado lo cual le hace dudar sobre si terminar usando \
                Lambus. Justo después, ve una respuesta del desarrollador comunicando que el problema que \
                tuvo el usuario descontento ha sido solucionado, así que Isella se anima a descargar la \
                aplicación porque además, la aplicación en general tiene muy buenas valoraciones",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Abre la aplicación, se registra con su cuenta de google y es bienvenida con una \
                pantalla que resume las distintas funciones de la aplicación",
                touch3: "Móvil (App de Lambus)",
                feel3: "3",
                con3: "La pantalla de bienvenida dice al final que Lambus no comparte datos del cliente \
                con terceros pero no dice nada sobre como tratan ellos los datos",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Isella empieza a observar y navegar por la aplicación, su objetivo es crear un \
                nuevo viaje para empezar a planificarlo",
                touch4: "Móvil (App de Lambus)",
                feel4: "2",
                con4: "La aplicación no le ofrece un tour sobre qué hacen los botones y  las distintas \
                pestañas de la aplicación, así que tras tocar distintos botones del menú, encuentra que \
                para añadir un viaje hay que utilizar el botón "+" de la pantalla principal",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empieza a rellenar información básica sobre el viaje como nombre, fecha, duración \
                o acompañantes, con un procedimiento sencillo e intuitivo. Al terminar, puede añadir paradas \
                al viaje, guardar documentos, notas, fotos o registrar gastos",
                touch5: "Móvil (App de Lambus)",
                feel5: "3",
                con5: "No se fía de utilizar el almacén de fotos y documentos para guardar documentos con información \
                personal como reservas e identificaciones o fotos de personales",
                ima5: "cartoon-deciding.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Termina de organizar el itinerario del viaje tras haber añadido los distintos puntos de \
                parada en su fecha correspondiente",
                touch6: "Móvil (App de Lambus)",
                feel6: "3",
                con6: "La aplicación no permitía especificar hora para las distintas paradas, solo la fecha, así \
                que las ha añadido en las notas sobre la parada",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Onesífero de los Ríos",
                Photo: "onesifero.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Uxía (su esposa) le propone hacer un viaje familiar a Ferrol(La Coruña) con su hija pequeña para descansar del trabajo \
                 y muestra ilusión por ello",
                touch1: "Persona (su esposa)",
                feel1: "4",
                con1: "No sabe por dónde empezar a planificar",
                ima1: "cartoon-speaking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Le pregunta a su hija y ésta le aconseja buscar un gestor de planificación a través de Google. Aunque duda un poco le hace caso y\
                con su ayuda encuentran una página web de una aplicación llamada Lambus. Tras leer las funcionalidades, le surgen más dudas acerca de la \
                utilidad de un gestor de planificación y cree que una agencia de viajes sería el método más fácil y rápido. No obstante acaba haciendo caso \
                a su hija a regañadientes.",
                touch2: "Ordenador",
                feel2: "2",
                con2: "Se encuentra confuso y perdido a cerca de lo que es un gestor de planificación y cree que puede ser de poca utilidad ",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Procede a realizar el proceso de registro con su email, tras esto se le muestra la pantalla de inicio de la aplicación",
                touch3: "Móvil (App de Lambus)",
                feel3: "2",
                con3: " Debido a que la aplicación no ofrece un tour por\
                sus funcionalidades se vuelve a encontrar bastante perdido, \
                no le es muy intuitiva",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide probar el icono de la brújula que le da la opción de escoger distintos lugares que visitar. Escribe Ferrol, pero\
                no aparecen resultados. Tras esto, encuentra un mapamundi en el que se le indica que ahí se encuentran las paradas de su viaje,\
                pero le tiene que volver a pedir ayuda a su hija pues en ningún sitio se le indica dónde puede añadir como destino Ferrol. ",
                touch4: "Móvil (App de Lambus)",
                feel4: "2",
                con4: "Siente que esto es una pérdida de tiempo y le frustra no entender el funcionamiento de la aplicación",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras descubrir cómo crear un viaje, Onesífero junto a su hija crean uno con destino a Ferrol con el presupuesto acordado con Uxía y le indican \
                a la aplicación qué tipo de lugares están interesados en visitar ",
                touch5: "Móvil (App de Lambus)",
                feel5: "3",
                con5: "Le fastidia no haber encontrado una opción para buscar hoteles u hostales",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Estructura el viaje con Uxía y su hija indicando las paradas que realizará y en qué fechas cada una",
                touch6: "Móvil (App de Lambus)",
                feel6: "3",
                con6: "Piensa que podría haber utilizado otro medio más tradicional (como una agencia de viajes) \
                que le hubiera facilitado mucho más la planificación del viaje  ",
                ima6: "cartoon-KO.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



