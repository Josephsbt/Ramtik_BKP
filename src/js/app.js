/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('CodetziPortabilidad', [
	'ui.router',
    'home',
	'angular.filter', 
	'daterangepicker',
	'datePicker',  
	'ui.knob',
	'chart.js',
	'CodetziPortabilidad.services',   
	'CodetziPortabilidad.factories',
	'CodetziPortabilidad.directives',
	'CodetziPortabilidad.filters',
	'CodetziPortabilidad.constant',
	'login',
	'ui.bootstrap',   
	'ngFileUpload',
	'datatables',
    'ngCookies',
    'ngAnimate',          
    'toaster',
    'frapontillo.bootstrap-switch',
    'ngStorage',
    'ngDropdowns',
	'ui.date',
	'tmh.dynamicLocale'
])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'CONSTANTS',
	function($stateProvider, $urlRouterProvider, $httpProvider, CONSTANTS) {

		//setup http header
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

		$httpProvider.defaults.withCredentials = false;

		// $httpProvider.interceptors.push('AuthInterceptor');

		//setup default route
		$urlRouterProvider.otherwise('/login');
	}
])

.controller('MainController', ['$scope',
	function($scope){
		console.log('Main Controller');
	}
])


//store the current user info in the rootscope
.run(['$rootScope', 'CONSTANTS', '$state', 'AuthService', '$timeout', 'modalFactory', '$q', '$localStorage', '$sessionStorage', 'General',
	function($rootScope, CONSTANTS, $state, AuthService,  $timeout, modalFactory, $q, $localStorage, $sessionStorage, General) {
		moment.locale("es") 
		$rootScope.SOLICITUD = ''; 
		$rootScope.IdProcesoActual = "0";
		$rootScope.IdSubProcesoActual = "0";
		$rootScope.IdSubProcesoIDSiguiente = "0";
		$rootScope.SubProceso = false;
		$rootScope.currencySign = CONSTANTS.CURRENCY_SIGN;
		$rootScope.imagePath = CONSTANTS.IMAGE_PATH;	
		$rootScope.imagePathDoc = CONSTANTS.PATH_DOC_DECISION;	 
		$rootScope.producto="";
		$rootScope.tema="";
		$rootScope.detalle="";
		$rootScope.mostrar3Play=0;
		$rootScope.mostrarTab1="";
		$rootScope.mostrarTab2="";
		$rootScope.mostrarTab3="";
		$rootScope.mostrarTab4="";
		$rootScope.mostrarTab5="";
		$rootScope.mostrarTab6="";
		$rootScope.mostrarTab7="";
		$rootScope.mostrarTab8="";
		$rootScope.mostrarTab9="";
		$rootScope.mostrarTab10="";
		$rootScope.mostrarTab1id="";
		$rootScope.mostrarTab2id="";
		$rootScope.mostrarTab3id="";
		$rootScope.mostrarTab4id="";
		$rootScope.mostrarTab5id="";
		$rootScope.mostrarTab6id="";
		$rootScope.mostrarTab7id="";
		$rootScope.mostrarTab8id="";
		$rootScope.mostrarTab9id="";
		$rootScope.mostrarTab10id="";
		$rootScope.Observaciones="";
		$rootScope.conClase1="";	
		$rootScope.ticket1="";	
		$rootScope.ticket2="";
		$rootScope.ticket3="";
		$rootScope.ticket4="";
		$rootScope.ticket5="";
		$rootScope.ticket6="";
		$rootScope.ticket7="";
		$rootScope.ticket8="";
		$rootScope.ticket9="";
		$rootScope.ticket10="";

		//Validaciones pasos
		$rootScope.cleanAll = function(){
		$rootScope.IdSubProcesoActual = "0";  
		$rootScope.DataProceso = [];
		$rootScope.DataGlosaOV = [];
		$rootScope.DataGlosaOG = []; 
		$rootScope.DataGlosaValidacionOV = [];
		$rootScope.DataGlosaValidacionOG = [];
		$rootScope.arrayforma0 = [];
		$rootScope.arrayforma1 = [];
		$rootScope.arrayforma2 = [];
		$rootScope.arrayforma3 = [];
		$rootScope.arrayforma4 = [];
		$rootScope.arrayforma5 = [];
		$rootScope.arrayforma6 = [];
		$rootScope.arrayforma7 = [];
		$rootScope.arrayforma8 = [];
		$rootScope.arrayforma9 = [];
		$rootScope.arrayforma10 = [];
		$rootScope.arrayforma11 = [];
		$rootScope.arrayforma12 = [];
		$rootScope.arrayforma13 = [];
		$rootScope.arrayforma14 = [];
		$rootScope.arrayforma15 = [];
		$rootScope.arrayforma16 = [];
		$rootScope.arrayforma17 = [];
		$rootScope.arrayforma18 = [];
		$rootScope.arrayforma19 = [];
		$rootScope.arrayforma20 = [];
		$rootScope.arrayforma21 = [];
		$rootScope.arrayforma22 = [];
		$rootScope.arrayforma23 = [];
		$rootScope.arraydecision0 = [];
		$rootScope.arraydecision1 = [];
		$rootScope.arraydecision2 = [];
		$rootScope.arraydecision3 = [];
		$rootScope.arraydecision4 = [];
		$rootScope.arraydecision5 = [];
		$rootScope.arraydecision6 = [];
		$rootScope.arraydecision7 = [];
		$rootScope.arraydecision8 = [];
		$rootScope.arraydecision9 = [];
		$rootScope.arraydecision10 = [];
		$rootScope.arraydecision11 = [];
		$rootScope.arraydecision12 = [];
		$rootScope.arraydecision13 = [];
		$rootScope.arraydecision14 = [];
		$rootScope.arraydecision15 = [];
		$rootScope.arraydecision16 = [];
		$rootScope.arraydecision17 = [];
		$rootScope.arraydecision18 = [];
		$rootScope.arraydecision19 = [];
		$rootScope.arraydecision20 = [];
		$rootScope.arraydecision21 = [];
		$rootScope.arraydecision22 = [];
		$rootScope.arraydecision23 = [];
		$rootScope.valida0 = false;
		$rootScope.valida1 = false;
		$rootScope.valida2 = false;
		$rootScope.valida3 = false;
		$rootScope.valida4 = false;
		$rootScope.valida5 = false;
		$rootScope.valida6 = false;
		$rootScope.valida7 = false;
		$rootScope.valida8 = false;
		$rootScope.valida9 = false;
		$rootScope.valida10 = false;
		$rootScope.valida11 = false;
		$rootScope.valida12 = false;
		$rootScope.valida13 = false;
		$rootScope.valida14 = false;
		$rootScope.valida15 = false;
		$rootScope.valida16 = false;
		$rootScope.valida17 = false;
		$rootScope.valida18 = false;
		$rootScope.valida19 = false;
		$rootScope.valida20 = false;
		$rootScope.valida21 = false;
		$rootScope.valida22 = false;
		$rootScope.valida23 = false;
		$rootScope.Observaciones="";
		$rootScope.conClase1="";	
		$rootScope.ticket1="";	
		$rootScope.ticket2="";
		$rootScope.ticket3="";
		$rootScope.ticket4="";
		$rootScope.ticket5="";
		$rootScope.ticket6="";
		$rootScope.ticket7="";
		$rootScope.ticket8="";
		$rootScope.ticket9="";
		$rootScope.ticket10="";
		}
		$rootScope.cleanAll();
		//
		$rootScope.validadecision1="";
		$rootScope.validadecision2="";
		$rootScope.validadecision3="";
		$rootScope.validadecision4="";
		$rootScope.validadecision5="";
		//App configuration
		$rootScope.imagePath = CONSTANTS.IMAGE_PATH;         
		$rootScope.isSelected = true;
		$localStorage.filter = {
			'start' : moment({day: 1}),
			'end' : moment(),
		};
		$rootScope.$on('logout', function(){
			AuthService.logout();
			$state.go('login');
		})

		$rootScope.login_isok=AuthService.isAuthenticated();
		$rootScope.current_state=$state.current.name   
		//App configuration
		$rootScope.imagePath = CONSTANTS.IMAGE_PATH;
		$rootScope.includePath = CONSTANTS.INCLUDE_PATH;


		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			$rootScope.current_state=$state.current.name
			//console.log("AuthService.isAuthenticated() ::", AuthService.isAuthenticated() )
			$rootScope.login_isok=AuthService.isAuthenticated();
			if (!AuthService.isAuthenticated()) {
				if (toState.name != 'login'){
					event.preventDefault();
					$state.go('login');

				}
			}else{
				if (toState.name == 'login'){
					event.preventDefault();
					$state.go('home.dashboard');

				}
			}
		});

		$rootScope.time = new Date();
		$rootScope.fecha = moment().format("dddd");
		$rootScope.$watch('time', function () {
		    $timeout(function () {
		        $rootScope.time = new Date();
		    }, 1000);
		});

		$rootScope.Menu="1";
		
		$rootScope.cambiaMenu = function(Op){
			$rootScope.Menu=Op; 
		}

		$rootScope.goOut = function(){
			AuthService.logout();
		}

		$rootScope.estadoLogConexion = "FUERA DE LINEA";

		$rootScope.obtieneLogConexion = function(){
			General.obtieneLogConexion().then(function(r){    
				if(r.data.success==true){
					$rootScope.dataLogConexion = r.data.data;  
					$rootScope.estadoLogConexion = $rootScope.dataLogConexion[0].ESTADO; 
					//console.log('dataLogConexion :::', $rootScope.dataLogConexion);  
				}
				else{
					$rootScope.estadoLogConexion = "FUERA DE LINEA";
					//console.log('obtieneLogConexion Nok 1 :::'+r.data.mensaje);  
				}
			},
			function (error){
				$rootScope.estadoLogConexion = "FUERA DE LINEA"; 
				//console.log('obtieneLogConexion Nok 2', error);  
			});
		}

		$rootScope.obtieneLogConexion();


		$rootScope.grabalogConexion = function(ESTADO){
			General.grabalogConexion(ESTADO).then(function(r){  
				if(r.data.success==true){
					$rootScope.obtieneLogConexion();
					$rootScope.counter = 0;
					console.log('grabalogConexion :::', r.data); 
				}
				else{
					$rootScope.obtieneLogConexion();
					$rootScope.counter = 0;
					console.log('grabalogConexion Nok 1 :::'+r.data.mensaje);  
				}
			},
			function (error){
				$rootScope.obtieneLogConexion();
				$rootScope.counter = 0;
				console.log('grabalogConexion Nok 2', error);    
			});
		}

		$rootScope.AlbumCtrl = function() {
			$rootScope.counter = 0;
			$rootScope.onTimeout = function(){
				$rootScope.counter++;
				mytimeout = $timeout($rootScope.onTimeout,1000);
			}
			var mytimeout = $timeout($rootScope.onTimeout,1000);
		
			$rootScope.stop = function(){ 
				$timeout.cancel(mytimeout);
			}
		}

		$rootScope.AlbumCtrl();


		$rootScope.Warning = '';
		
		$rootScope.obtieneWarning = function(){
			General.obtieneWarning().then(function(r){  
				if(r.data.success==true){
					$rootScope.dataWarning = r.data.data;  
					$rootScope.Warning = $rootScope.dataWarning[0].WARNING;  
					//console.log('obtieneWarning OK :::', $rootScope.dataWarning);  
				}
				else{
					$rootScope.Warning = "";
					//console.log('obtieneWarning Nok 1 :::'+r.data.mensaje);  
				} 
			},
			function (error){
				$rootScope.Warning = ""; 
				//console.log('obtieneWarning Nok 2', error);    
			});
		}


		$rootScope.obtieneWarning();


		let identificadorIntervaloDeTiempo;

		function repetirCadaSegundo() {
		identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 20000);
		}

		function mandarMensaje() {
			console.log("Ha pasado 20 segundos."); 
			General.obtieneWarning().then(function(r){  
				if(r.data.success==true){
					$rootScope.dataWarning = r.data.data;  
					$rootScope.Warning = $rootScope.dataWarning[0].WARNING;  
					//console.log('obtieneWarning OK :::', $rootScope.dataWarning);  
				}
				else{
					$rootScope.Warning = "";
					//console.log('obtieneWarning Nok 1 :::'+r.data.mensaje);  
				} 
			},
			function (error){
				$rootScope.Warning = "";  
				//console.log('obtieneWarning Nok 2', error);    
			});

		}

		repetirCadaSegundo();

	
    //#GENERADOR DE MODALES
	$rootScope.openModalBitacora = function(value, id) {
	var data = {
		};
	var ctrl = 'ModalInstanceCtrl'; 
	var size = '';
	var callM = false;
	var params = data;
	switch (value) {
		//# 1 : MODAL BUSCAR SEGUIMIENTO
		case 1:
		//$scope.isCargando = true;
		var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/modal-bitacora.tpl.html';
		//console.log('Envio problema a segumiento:'+idproblema)
		//var promiseSeg = loadDetalles.detalle($rootScope.currentUser.user_id, 'seguimientoMisAgendamientos');
		var size = 'lg';
		callM = true;  
		break;
		default:

	}
	if (callM == true){   
		//#Factory Modales 2,3,4,6,7
		//console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');    
		modalFactory.open(template, ctrl, size, params).result.then(
		function (responseNote) {
			//console.log("modal::: ", responseNote)

			if (responseNote.is_edit) { }  
		});
	}else{
		//#PROMESA SEGUIMIENTO
		//console.log("promiseSeg::: ", promiseSeg)
		promiseSeg.then(
		function (result) {
			$scope.isCargando = false;
			var data = {
			result: result,
			idproblema:idproblema
			};
			var params = data;
			//# Factory Modal 1
			modalFactory.open(template, ctrl, size, params).result.then(
				function (responseNote) {
				//console.log("modal::: ", responseNote)
				if (responseNote.is_edit) { }
			});
		},
		function (r) {
			$scope.err_msg = r;
			$scope.isError = 1;
			$scope.isCargando = false;
			sweetAlert("Lo Siento =(!", "El usuario no tiene agendamientos asociados", "warning");
		}
		);
	}
	};
    $rootScope.openModalComo = function(value, id, sub, acceso, aplicaciones, tipousuario, idproceso, OBSERVACION_VALIDACION, GL_PROCESO, video) { 
			var data = {
				'DOC':id,
				'APL':aplicaciones,
				'SUB':sub,
				'acceso':acceso,
				'tipousuario':tipousuario,
				'idproceso':idproceso,
				'video':video
			 };
			 $rootScope.OBSERVACION_VALIDACION = OBSERVACION_VALIDACION;
			 $rootScope.GL_PROCESO = GL_PROCESO;
			var ctrl = 'ModalInstanceComoCtrl';   
			var size = '';
			var callM = false;
			var params = data;
			switch (value) {
				//# 1 : MODAL BUSCAR SEGUIMIENTO
				case 1:
				//$scope.isCargando = true;
				var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/modal-como.html';
				//console.log('Envio problema a segumiento:'+idproblema)
				//var promiseSeg = loadDetalles.detalle($rootScope.currentUser.user_id, 'seguimientoMisAgendamientos');
				var size = 'lg';
				callM = true;  
				break;
				default:
		
			}
			if (callM == true){   
				//#Factory Modales 2,3,4,6,7
				//console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');    
				modalFactory.open(template, ctrl, size, params).result.then(
				function (responseNote) {
					//console.log("modal::: ", responseNote)
		
					if (responseNote.is_edit) { }  
				});
			}else{
				//#PROMESA SEGUIMIENTO
				//console.log("promiseSeg::: ", promiseSeg)
				promiseSeg.then(
				function (result) {
					$scope.isCargando = false;
					var data = {
					result: result,
					idproblema:idproblema
					};
					var params = data;
					//# Factory Modal 1
					modalFactory.open(template, ctrl, size, params).result.then(
						function (responseNote) {
						//console.log("modal::: ", responseNote)
						if (responseNote.is_edit) { }
					});
				},
				function (r) {
					$scope.err_msg = r;
					$scope.isError = 1;
					$scope.isCargando = false;
					sweetAlert("Lo Siento =(!", "El usuario no tiene agendamientos asociados", "warning");
				}
				);
			}
	}; 
    $rootScope.openModalComoSub = function(value, id, sub, acceso, aplicaciones, tipousuario, idproceso) {
		var data = {
			'DOC':id,
			'APL':aplicaciones,
			'SUB':sub,
			'acceso':acceso,
			'tipousuario':tipousuario,
			'idproceso':idproceso
		 };
		var ctrl = 'ModalInstanceComoSubCtrl'; 
		var size = '';
		var callM = false;
		var params = data;
		switch (value) {
			//# 1 : MODAL BUSCAR SEGUIMIENTO
			case 1:
			//$scope.isCargando = true;
			var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/modal-comoSub.html';
			//console.log('Envio problema a segumiento:'+idproblema)
			//var promiseSeg = loadDetalles.detalle($rootScope.currentUser.user_id, 'seguimientoMisAgendamientos');
			var size = 'lg';
			callM = true;  
			break;
			default:
	
		}
		if (callM == true){   
			//#Factory Modales 2,3,4,6,7
			//console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');    
			modalFactory.open(template, ctrl, size, params).result.then(
			function (responseNote) {
				//console.log("modal::: ", responseNote)
	
				if (responseNote.is_edit) { }  
			});
		}else{
			//#PROMESA SEGUIMIENTO
			//console.log("promiseSeg::: ", promiseSeg)
			promiseSeg.then(
			function (result) {
				$scope.isCargando = false;
				var data = {
				result: result,
				idproblema:idproblema
				};
				var params = data;
				//# Factory Modal 1
				modalFactory.open(template, ctrl, size, params).result.then(
					function (responseNote) {
					//console.log("modal::: ", responseNote)
					if (responseNote.is_edit) { }
				});
			},  
			function (r) {
				$scope.err_msg = r;
				$scope.isError = 1;
				$scope.isCargando = false;
				sweetAlert("Lo Siento =(!", "El usuario no tiene agendamientos asociados", "warning");
			}
			);
		}
}; 	
	$rootScope.openModalDonde = function(value, id) {
			var data = {
				};
			var ctrl = 'ModalInstanceCtrl'; 
			var size = '';
			var callM = false;
			var params = data;
			switch (value) {
				//# 1 : MODAL BUSCAR SEGUIMIENTO
				case 1:
				//$scope.isCargando = true;
				var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/modal-donde.html';
				//console.log('Envio problema a segumiento:'+idproblema)
				//var promiseSeg = loadDetalles.detalle($rootScope.currentUser.user_id, 'seguimientoMisAgendamientos');
				var size = 'lg';
				callM = true;  
				break;
				default:
		
			}
			if (callM == true){   
				//#Factory Modales 2,3,4,6,7
				//console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');    
				modalFactory.open(template, ctrl, size, params).result.then(
				function (responseNote) {
					//console.log("modal::: ", responseNote)
		
					if (responseNote.is_edit) { }  
				});
			}else{
				//#PROMESA SEGUIMIENTO
				//console.log("promiseSeg::: ", promiseSeg)
				promiseSeg.then(
				function (result) {
					$scope.isCargando = false;
					var data = {
					result: result,
					idproblema:idproblema
					};
					var params = data;
					//# Factory Modal 1
					modalFactory.open(template, ctrl, size, params).result.then(
						function (responseNote) {
						//console.log("modal::: ", responseNote)
						if (responseNote.is_edit) { }
					});
				},
				function (r) {
					$scope.err_msg = r;
					$scope.isError = 1;
					$scope.isCargando = false;
					sweetAlert("Lo Siento =(!", "El usuario no tiene agendamientos asociados", "warning");
				}
				);
			}
	}; 
	$rootScope.changevalida11 = function(valor){
		$rootScope.valida11=valor;
	}
	$rootScope.changevalida12 = function(valor){
		$rootScope.valida12=valor;
	}
	$rootScope.changevalida13 = function(valor){
		$rootScope.valida13=valor;
	}
	$rootScope.changevalida14 = function(valor){
		$rootScope.valida14=valor;
	}
	$rootScope.changevalida15 = function(valor){
		$rootScope.valida15=valor;
	}
	$rootScope.changevalida16 = function(valor){
		$rootScope.valida16=valor;
	}

	$rootScope.changePlataforma = function(IdProcesoActual, NombreProcesoActual){
		$rootScope.cleanAll();
		$rootScope.CargandoGral = true;
		$rootScope.mostrar3Play=3;
		$rootScope.IdProcesoActual=IdProcesoActual;
		$rootScope.IdSubProcesoActual = "0";
		$rootScope.IdSubProcesoIDSiguiente = "0";
		$rootScope.SubProceso = false;
		//console.log('Id proceso actual:::'+$rootScope.IdProcesoActual+' Nombre actual:::'+NombreProcesoActual);
		if($rootScope.IdProcesoActual !="0" && NombreProcesoActual =="")
		{
		   $rootScope.ObtieneNombreFlujo($rootScope.IdProcesoActual);
	    }
		else	if(NombreProcesoActual !="")
			{
				if($rootScope.mostrarTab1==''){
					$rootScope.mostrarTab1=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab1id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab2==''){
					$rootScope.mostrarTab2=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab2id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab3==''){
					$rootScope.mostrarTab3=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab3id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab4==''){
					$rootScope.mostrarTab4=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab4id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab5==''){
					$rootScope.mostrarTab5=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab5id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab6==''){
					$rootScope.mostrarTab6=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab6id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab7==''){
					$rootScope.mostrarTab7=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab7id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab8==''){
					$rootScope.mostrarTab8=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab8id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab9==''){
					$rootScope.mostrarTab9=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab9id=$rootScope.IdProcesoActual;
					}else if($rootScope.mostrarTab10==''){
					$rootScope.mostrarTab10=NombreProcesoActual + ' (' + $rootScope.IdProcesoActual + ')';
					$rootScope.mostrarTab10id=$rootScope.IdProcesoActual;
					}
			}
		
	}

	$rootScope.ObtieneNombreFlujo = function(ID){

        //console.log('ID Primera búsqueda:::['+ID+']');

        General.ObtieneNombreFlujo(ID).then(function(r){   
 
						if(r.data.success==true){ 
   					if($rootScope.mostrarTab1==''){
						$rootScope.mostrarTab1=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab1id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab2==''){
						$rootScope.mostrarTab2=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab2id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab3==''){
						$rootScope.mostrarTab3=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab3id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab4==''){
						$rootScope.mostrarTab4=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab4id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab5==''){
						$rootScope.mostrarTab5=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab5id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab6==''){
						$rootScope.mostrarTab6=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab6id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab7==''){
						$rootScope.mostrarTab7=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab7id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab8==''){
						$rootScope.mostrarTab8=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab8id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab9==''){
						$rootScope.mostrarTab9=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab9id=r.data.data[0].ID_FLUJO;
						}else if($rootScope.mostrarTab10==''){
						$rootScope.mostrarTab10=r.data.data[0].GL_FLUJO + ' (' + r.data.data[0].ID_FLUJO + ')';
						$rootScope.mostrarTab10id=r.data.data[0].ID_FLUJO;
						}
						
          }
          else{
            console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          console.log('Trae datos Nok 2');
        });

    }

	$rootScope.ObtieneProductos = function(){
		$rootScope.dataTemas = [];
		$rootScope.dataDetalles = [];
		$rootScope.dataProcesos = [];
		$rootScope.producto="";
		$rootScope.tema="";
		$rootScope.detalle="";
		General.ObtieneProductos().then(function(r){  
			if(r.data.success==true){
				$rootScope.dataProductos = r.data.data;  
				//console.log($rootScope.dataProductos);
			}
			else{
				console.log('Trae datos productos Nok 1 :::'+r.data.mensaje);  
			}
		},
		function (error){
			console.log('Trae datos productos Nok 2');
		});
	}

	$rootScope.ObtieneProductos();

	$rootScope.ObtieneTemas = function(Producto){
		$rootScope.dataTemas = [];
		$rootScope.dataDetalles = [];
		$rootScope.dataProcesos = [];
		$rootScope.tema="";
		$rootScope.detalle="";
		General.ObtieneTemas(Producto).then(function(r){  
			if(r.data.success==true){
				$rootScope.dataTemas = r.data.data;  
				//console.log($rootScope.dataTemas);
			}
			else{
				console.log('Trae datos tema Nok 1 :::'+r.data.mensaje);  
			}
		},
		function (error){
			console.log('Trae datos tema Nok 2');
		});
	}

	//$rootScope.ObtieneTemas();

	$rootScope.ObtieneDetalle = function(Producto, Tema){
		$rootScope.dataDetalles = [];
		$rootScope.dataProcesos = [];
		$rootScope.detalle="";
		General.ObtieneDetalle(Producto, Tema).then(function(r){  
			if(r.data.success==true){
				$rootScope.dataDetalles = r.data.data;  
				//console.log($rootScope.dataDetalles);
			}
			else{
				console.log('Trae datos detalles Nok 1 :::'+r.data.mensaje);  
			}
		},
		function (error){
			console.log('Trae datos detalles Nok 2');
		});
	}
	$rootScope.ObtieneFlujo = function(Tipificacion){
		$rootScope.dataProcesos = [];
		General.ObtieneFlujo(Tipificacion).then(function(r){  
			if(r.data.success==true){
				$rootScope.dataProcesos = r.data.data;
				console.log($rootScope.dataProcesos[0].ID_FLUJO);
				$rootScope.IdProcesoActual = $rootScope.dataProcesos[0].ID_FLUJO;
				$rootScope.changePlataforma($rootScope.IdProcesoActual, $rootScope.dataProcesos[0].GL_FLUJO);
			}
			else{
				console.log('Trae datos procesos Nok 1 :::'+r.data.mensaje);  
			}
		},
		function (error){
			console.log('Trae datos procesos Nok 2');
		});
	}

	$rootScope.closeSelected = function(){
        $rootScope.mostrar3Play=0;  
      };
 

	}


]);




 //------------------------------------------------------- 

/**
 * @author Mauricio Llanten Leyton <mllantenll@ramservicios.cl>
 */
angular.module('CodetziPortabilidad.constant', [])

.constant('CONSTANTS', (function() {
  // Define Environment
  var debug = false;
  var debugBase = false;   

  if(debugBase){
    endpoint = 'http://localhost/ApiBKPMAU_DASH/';  //Desarrollo  
  }
  else{      
    endpoint = 'https://apis.ramtik.com/ApiBKPMAU_DASH/'; //Producción Amazon         
  }
  
  var endsrc = "";

  // Use the variable in your constants
  return {
    ENVIROMENT_DEBUG_SESS: debug,
    ENDPOINT_URI: endpoint,
    ENDPOINT_JS: endsrc + "src/", //TODO PUEDE QUEDAR EL DE ENDPOINT SI ESTAN EN EL MISMO SERVER
    ENDPOINT_LOGIN: endsrc + "index.html", //TODO PUEDE QUEDAR EL DE ENDPOINT SI ESTAN EN EL MISMO SERVER
    DIR_PATH: endsrc + '../',
    DIRECTIVE_PATH: endsrc + 'app/common/directives/',
    ICON_PATH: endsrc + './assets/imageIcons/',
    IMAGE_PATH: endsrc + './assets/',
    CURRENCY_SIGN: '$',  
    INCLUDE_PATH: '../app/home/',
    INCLUDE_PATH_1: '../app/home/dashboard/',
    PATH_DOC_ticket: 'https://entel.ramtik.com/Imagenes/',
    PATH_DOC_DECISION: 'https://entel.ramtik.com/Imagenes_BKP/',
    PAGINATION_MAX_NUMBER: 25,  
    AUTH_EVENTS: {
      notAuthenticated: 'auth-not-authenticated'  
    }

  };
})());


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('accountControlDirectives', [])

.directive('accountControls',['CONSTANTS', function (CONSTANTS) {
	return {
		restrict: 'E',
		scope: { 
	      controls: '=',
	      sel: '&'
	    },
		templateUrl: CONSTANTS.DIRECTIVE_PATH + 'accountControls/accountControls.tlp.html',
		link: function(scope, elem, attrs) {
			scope.fullwidth = false;
			scope.fullwidth = scope.$eval(attrs.fullwidth);
		}
	};
}])


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('checkboxDirectives', [])

.directive('checkBox',['CONSTANTS', function (CONSTANTS) {
	return {
		restrict: 'E',
		templateUrl: CONSTANTS.DIRECTIVE_PATH + 'checkbox/checkbox.tlp.html',
		scope: { 
	      toggles: '=',
	      selItem: '&'
	    },
		link: function(scope, elem, attrs) {
			scope.text = attrs.text;
		}
	};
}]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('dateSelectionDirectives', [])

.directive('dateSelection', ['CONSTANTS', function (CONSTANTS) {
	return {
		restrict: 'E',
		templateUrl: CONSTANTS.DIRECTIVE_PATH + 'dateSelection/dateSelection.tlp.html',
		scope: { 
	      daterange: '='
	    },
		link: function(scope, elem, attrs) {
			scope.dateTextMapping = {
				"Last 24 Hours": 1,
				"Last 7 Days": 7,
				"Last 30 Days": 30,
				"Last 3 Months": 90,
				"This Year": 365
			};

			//init datestring upon page load
			mapRangeToString();
			function mapRangeToString(){
				angular.forEach(scope.dateTextMapping, function(value, key) {
					if(value == scope.daterange){
						scope.datestring = key;
					}
				});
			}

			//update datestring and daterange on dropdown change
			scope.updateDateRange = function(daterange){
				scope.daterange = daterange;
				mapRangeToString();
				angular.element(elem[0].querySelectorAll(".dropdown-content")).toggleClass("active");
			};

			// Anything that gets to the document will hide the dropdown
			$(document).click(function(){
				angular.element(elem[0].querySelectorAll(".dropdown-content")).removeClass('active');
			});

			// Close dropdown or block document click from closing the dropdown when clicking inside of the element
			scope.toggleDateMenu = function(event){
				event.preventDefault();
				event.stopPropagation();
				angular.element(elem[0].querySelectorAll(".dropdown-content")).toggleClass("active");
			};


		}
	};
}]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('graficosDirectives', [])
.directive('graphPie', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: {{width}}px; height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            // plotBackgroundColor: '#0154A0',
                            plotBackgroundImage: 'null',
                            backgroundColor: 'transparent',
                            //borderColor: "#335cad",
                            //borderRadius: 35,
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: 0,
                            marginTop: 0,
                            height:  scope.height,
                            type: 'pie'
                          },
                          data: {
                            decimalPoint: "."
                          },
                          exporting: {
                              enabled: false
                          },
                          credits: { enabled: false },
                          title: {
                              text: ''
                          },
                          title: {
                              text: ''
                          },
                          // legend: {
                          //     align: 'right',
                          //     layout: 'vertical',
                          //     verticalAlign: 'center',
                          //     x: 10,
                          //     //y: 0
                          // },
                          tooltip: {
                              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                          },
                          plotOptions: {
                              pie: {
                                  allowPointSelect: true,
                                  cursor: 'pointer',
                                  dataLabels: {
                                      enabled: false
                                  },
                                  showInLegend: true
                              }
                          },
                          series: [{
                              name: 'Confirmación',
                              colorByPoint: true,
                              data: datos
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('series', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphPoint', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: 200px; height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            // plotBackgroundColor: '#0154A0',
                            plotBackgroundImage: 'null',
                            backgroundColor: 'transparent',
                            //borderColor: "#335cad",
                            //borderRadius: 35,
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: 20,
                            height: 150,
                            type: 'spline'
                          },
                          data: {
                            decimalPoint: "."
                          },
                          exporting: {
                              enabled: false
                          },
                          credits: { enabled: false },
                          title: {
                              text: ''
                          },
                           xAxis: {
                             lineWidth: 0,
                               minorGridLineWidth: 0,
                               minorGridLineColor: 'transparent',
                               minorTickInterval: 'auto',
                               lineColor: 'transparent',

                               minorTickLength: 0,
                               tickLength: 0,
                              type: 'datetime',
                              dateTimeLabelFormats: { // don't display the dummy year
                                  month: '%e. %b',
                                  year: '%b'
                              },
                              title: {
                                  text: 'Date'
                              }
                          },
                          yAxis: {
                            lineWidth: 0,
                              minorGridLineWidth: 0,
                              minorGridLineColor: 'transparent',
                              minorTickInterval: 'auto',
                              lineColor: 'transparent',

                              minorTickLength: 0,
                              tickLength: 0,
                              title: {
                                  text: ''
                              },
                              min: 0
                          },
                          tooltip: {
                              headerFormat: '<b>{series.name}</b><br>',
                              pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
                          },

                          plotOptions: {
                              spline: {
                                  marker: {
                                      enabled: true
                                  }
                              }
                          },

                          series: [{
                              name: 'Winter 2012-2013',
                              // Define the data points. All series have a dummy year
                              // of 1970/71 in order to be compared on the same x axis. Note
                              // that in JavaScript, months start at 0 for January, 1 for February etc.
                              data: [
                                  [Date.UTC(1970, 9, 21), 0],
                                  [Date.UTC(1970, 10, 4), 0.28],
                                  [Date.UTC(1970, 10, 9), 0.25],
                                  [Date.UTC(1970, 10, 27), 0.2],
                                  [Date.UTC(1970, 11, 2), 0.28],
                                  [Date.UTC(1970, 11, 26), 0.28],
                                  [Date.UTC(1970, 11, 29), 0.47],
                                  [Date.UTC(1971, 0, 11), 0.79],
                                  [Date.UTC(1971, 0, 26), 0.72],
                                  [Date.UTC(1971, 1, 3), 1.02],
                                  [Date.UTC(1971, 1, 11), 1.12],
                                  [Date.UTC(1971, 1, 25), 1.2],
                                  [Date.UTC(1971, 2, 11), 1.18],
                                  [Date.UTC(1971, 3, 11), 1.19],
                                  [Date.UTC(1971, 4, 1), 1.85],
                                  [Date.UTC(1971, 4, 5), 2.22],
                                  [Date.UTC(1971, 4, 19), 1.15],
                                  [Date.UTC(1971, 5, 3), 0]
                              ]
                          }, {
                              name: 'Winter 2013-2014',
                              data: [
                                  [Date.UTC(1970, 9, 29), 0],
                                  [Date.UTC(1970, 10, 9), 0.4],
                                  [Date.UTC(1970, 11, 1), 0.25],
                                  [Date.UTC(1971, 0, 1), 1.66],
                                  [Date.UTC(1971, 0, 10), 1.8],
                                  [Date.UTC(1971, 1, 19), 1.76],
                                  [Date.UTC(1971, 2, 25), 2.62],
                                  [Date.UTC(1971, 3, 19), 2.41],
                                  [Date.UTC(1971, 3, 30), 2.05],
                                  [Date.UTC(1971, 4, 14), 1.7],
                                  [Date.UTC(1971, 4, 24), 1.1],
                                  [Date.UTC(1971, 5, 10), 0]
                              ]
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphArea', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: 80%; height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            // plotBackgroundColor: '#0154A0',
                            plotBackgroundImage: 'null',
                            backgroundColor: 'transparent',
                            //borderColor: "#335cad",
                            //borderRadius: 35,
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: 20,
                            marginTop: 20,
                            height: scope.height,
                            type: 'area'
                          },
                          data: {
                            decimalPoint: "."
                          },
                          exporting: {
                              enabled: false
                          },
                          credits: { enabled: false },
                          title: {
                              text: ''
                          },
                          xAxis: {
                            lineWidth: 0,
                              minorGridLineWidth: 0,
                              minorGridLineColor: 'transparent',
                              minorTickInterval: 'auto',
                              lineColor: 'transparent',

                              minorTickLength: 0,
                              tickLength: 0,
                              allowDecimals: false,
                              labels: {
                                  formatter: function () {
                                      return this.value; // clean, unformatted number for year
                                  }
                              }
                          },
                          yAxis: {
                            minorGridLineColor: 'transparent',
                            minorTickInterval: 'auto',
                            gridLineColor: 'transparent',
                              title: {
                                  text: ''
                              },
                              labels: {
                                  formatter: function () {
                                      return this.value / 1000 + 'k';
                                  }
                              }
                          },
                          tooltip: {
                              pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                          },
                          plotOptions: {
                              area: {
                                  pointStart: 1940,
                                  marker: {
                                      enabled: false,
                                      symbol: 'circle',
                                      radius: 2,
                                      states: {
                                          hover: {
                                              enabled: true
                                          }
                                      }
                                  }
                              }
                          },
                          series: [{
                              name: 'USA',
                              data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                                  1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                                  27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                                  26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                                  24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                                  22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                                  10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                          }, {
                              name: 'USSR/Russia',
                              data: [null, null, null, null, null, null, null, null, null, null,
                                  5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                                  4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                                  15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                                  33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                                  35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                                  21000, 20000, 19000, 18000, 18000, 17000, 16000]
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphCircular', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: {{width}}px; height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            // plotBackgroundColor: '#0154A0',
                            plotBackgroundImage: null,
                            backgroundColor: 'transparent',
                            //borderColor: "#335cad",
                            //borderRadius: 35,
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: 0,
                            marginTop: 0,
                            height: scope.height,
                            type: 'solidgauge'
                          },
                          data: {
                            decimalPoint: "."
                          },
                          exporting: {
                              enabled: false
                          },
                          credits: { enabled: false },

                          title: {
                              text: 'Global',
                              style: {
                                  fontSize: '24px'
                              }
                          },
                          pane: {
                              center: ['50%', '50%'],
                              size: '100%',
                              startAngle: 0,
                              endAngle: 360,
                              background: [{ // Track for Stand
                                  outerRadius: '62%',
                                  innerRadius: '38%',
                                  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                                  borderWidth: 0
                              }]
                          },

                          yAxis: {
                              min: 0,
                              max: 100,
                              lineWidth: 0,
                              tickPositions: []
                          },

                          plotOptions: {
                              solidgauge: {
                                  dataLabels: {
                                      enabled: false
                                  },
                                  linecap: 'round',
                                  stickyTracking: false,
                                  rounded: true
                              }
                          },

                          series: [{
                              name: 'Stand',
                              borderColor: Highcharts.getOptions().colors[2],
                              dataLabels: {
                                enabled:true,
                                y: -10,
                                borderWidth: 0,
                                //inside: true,
                                  format: '<div style="text-align:center"><span style="font-size:16px;color:'
                                  //+ ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black')
                                  + '#000">{y:.1f}</span><br/>' +
                                         '</div>'
                              },
                              data: [{
                                  color: Highcharts.getOptions().colors[2],
                                  radius: '62%',
                                  innerRadius: '38%',
                                  y: 67
                              }]
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphSpeed', ['CONSTANTS', '$timeout', function (CONSTANTS, $timeout) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}" style="max-width: 100%;height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "="
        },
        link: {
            post: function (scope, elem, attrs) {

                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                        _loadchart = new Highcharts.Chart({
                          chart: {
                              renderTo : scope.idcmp,
                              type: 'gauge',
                              plotBackgroundColor: '#fff',
                              plotBackgroundImage: null,
                              backgroundColor: 'transparent',
                              borderColor: "#335cad",
                              //borderRadius: 35,
                              borderWidth: 0,
                              plotBorderWidth: 0,
                              plotShadow: false,
                              marginBottom: 0
                          },
                          exporting: {
                              enabled: false
                          },
                          title: {
                              text: null
                          },

                          pane: {
                              startAngle: -150,
                              endAngle: 150,
                              background: [{
                                  backgroundColor: {
                                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                      stops: [
                                          [0, '#FFF'],
                                          [1, '#333']
                                      ]
                                  },
                                  borderWidth: 0,
                                  outerRadius: '109%'
                              }, {
                                  backgroundColor: {
                                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                      stops: [
                                          [0, '#333'],
                                          [1, '#FFF']
                                      ]
                                  },
                                  borderWidth: 1,
                                  outerRadius: '107%'
                              }, {
                                  // default background
                              }, {
                                  backgroundColor: '#DDD',
                                  borderWidth: 0,
                                  outerRadius: '105%',
                                  innerRadius: '103%'
                              }]
                          },

                          // the value axis
                          yAxis: {
                              min: 0,
                              max: 100,

                              minorTickInterval: 'auto',
                              minorTickWidth: 1,
                              minorTickLength: 10,
                              minorTickPosition: 'inside',
                              minorTickColor: '#666',

                              tickPixelInterval: 30,
                              tickWidth: 2,
                              tickPosition: 'inside',
                              tickLength: 10,
                              tickColor: '#666',
                              labels: {
                                  step: 2,
                                  rotation: 'auto'
                              },
                              title: {
                                  text: 'Contactados Instala'
                              },
                              plotBands: [{
                                  from: 0,
                                  to: 65,
                                  color: '#DF5353' // green
                              }, {
                                  from: 65,
                                  to: 85,
                                  color: '#DDDF0D' // yellow
                              }, {
                                  from: 85,
                                  to: 100,
                                  color: '#55BF3B' // red
                              }]
                          },
                          credits: { enabled: false },
                          series: [{
                              name: 'Speed',
                              data: [80],
                              tooltip: {
                                  valueSuffix: ' km/h'
                              }
                          }]
                        });



                    })
                }
                _load();

                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])

.directive('graphSpeedTwo', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: 190px ;height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            plotBackgroundColor: '#0154A0',
                            plotBackgroundImage: null,
                            backgroundColor: 'transparent',
                            //borderColor: "#335cad",
                            //borderRadius: 35,
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: -50,
                            marginTop: 0,
                            height: 150,
                            type: 'solidgauge'
                          },
                          data: {
                            decimalPoint: "."
                          },
                          exporting: {
                              enabled: false
                          },
                          credits: { enabled: false },

                          title: 'Información',

                          pane: {
                              center: ['50%', '60%'],
                              size: '100%',
                              startAngle: -90,
                              endAngle: 90,
                              background: {
                                  backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                                  innerRadius: '60%',
                                  outerRadius: '100%',
                                  shape: 'arc'
                              }
                          },

                          tooltip: {
                              enabled: false
                          },

                          // the value axis
                          yAxis: {
                            min: 0,
                            max: scope.rmax,
                            //minColor: '#DF5353',
                            //maxColor: '#55BF3B',

                              stops: scope.rformat == 'Hrs' ? [
                                  [0.0, '#55BF3B'], // red
                                  [parseFloat(scope.maxmark) , '#55BF3B'], // red
                                  [parseFloat(scope.minmark), '#DF5353'], // yellow
                                  [1, '#DF5353'] // green
                              ] : [
                                  [0.0, '#DF5353'], // red
                                  [(scope.maxmark)? parseFloat(scope.maxmark) : 0.94, '#DF5353'], // red
                                  [(scope.minmark)? parseFloat(scope.minmark) : 0.95, '#55BF3B'], // yellow
                                  [1, '#55BF3B'] // green
                              ],
                              lineWidth: 0,
                              minorTickInterval: null,
                              //minorTickColor: '#ff0000',
                              tickColor:  '#c0c0c0',
                              tickAmount: 2,
                              title: {
                                //text: scope.title,
                                text: '',
                                style:{
                                  "fontSize": "14px",
                                },
                                  y: -100
                              },
                              labels: {
                                  y: 100
                              }
                          },

                          plotOptions: {
                              solidgauge: {
                                  dataLabels: {
                                      y: -30,
                                      borderWidth: 0,
                                      useHTML: true
                                  }
                              }
                          },
                          series: [{
                              name: 'Speed',
                              data: [parseFloat(scope.value)],
                              dataLabels: {
                                  format: '<div style="text-align:center"><span style="font-size:22px;color:'
                                  //+ ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black')
                                  + '#fff">{y:.1f}'+scope.rformat+'</span><br/>' +
                                         '</div>'
                              },
                              tooltip: {
                                  valueSuffix: ' km/h'
                              }
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphSpeedThree', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: 190px ;height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      //console.log(scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            plotBackgroundImage: null,
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: -10,
                            marginTop: 10,
                            height: scope.height,
                            type: 'gauge'
                          },
                          data: {
                            decimalPoint: "."
                          },

                          title: {
                              text: scope.title,
                              style:{
                                "fontSize": "12px",
                              },
                          },
                          credits: { enabled: false },
                          exporting: { enabled: false },
                          pane: {

                              startAngle: -90,
                              endAngle: 90,
                              background: [{
                                  className: 'middle-pane',
                                  outerRadius: '100%',
                                  shape: 'arc'
                              }]
                          },

                          // the value axis
                          yAxis: {
                              min: 0,
                              max: 32,

                              labels: {
                                  step: 2,
                                  rotation: 'auto'
                              },
                              title: {
                                  text: ''
                              },
                              plotBands: [{
                                  from: 0,
                                  to: 7.2,
                                  color: '#55BF3B',
                                  className: 'green-band'
                              }, {
                                  from: 7.2,
                                  to: 7.4,
                                  color: '#DDDF0D',
                                  className: 'yellow-band'
                              }, {
                                  from: 7.4,
                                  to: 32,
                                  color: '#DF5353',
                                  className: 'red-band'
                              }]
                          },

                          series: [{
                              name: 'Información',
                              data: [parseFloat(scope.value)],
                              tooltip: {
                                  valueSuffix: ' %'
                              }
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 3 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphSpeedFour', ['CONSTANTS', '$timeout','$rootScope', function (CONSTANTS, $timeout, $rootScope) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}"  style="width: 190px ;height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "=",
            value:'@',
            rmax:'@',
            rformat: '@',
            maxmark: '@',
            minmark: '@',
        },
        controller: function ($rootScope) {
          $rootScope.loadGraph = true;
          //console.log("controller graph")

        },
        link: {
            post: function (scope, elem, attrs) {
                //$rootScope.loadGraph = true;
                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                      //console.log('roy')
                      console.log("ROY: "+scope.value)
                        _loadchart = new Highcharts.Chart({
                          chart: {
                            renderTo : scope.idcmp,
                            plotBackgroundImage: null,
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            marginBottom: -30,
                            marginTop: 40,
                            height: scope.height,
                            type: 'gauge'
                          },
                          data: {
                            decimalPoint: "."
                          },

                          title: {
                              text: scope.title,
                              style:{
                                "fontSize": "12px",
                              },
                          },
                          credits: { enabled: false },
                          exporting: { enabled: false },
                          pane: {

                              startAngle: -90,
                              endAngle: 90,
                              background: [{
                                  className: 'middle-pane',
                                  outerRadius: '100%',
                                  shape: 'arc'
                              }]
                          },

                          // the value axis
                          yAxis: {
                              min: 0,
                              max: 100,

                              labels: {
                                  step: 2,
                                  rotation: 'auto'
                              },
                              title: {
                                  text: ''
                              },
                              plotBands: [{
                                  from: 0,
                                  to: scope.maxmark,
                                  color: '#DF5353',
                                  className: 'green-band'
                              }, {
                                  from: scope.maxmark,
                                  to: 100,
                                  color: '#55BF3B',
                                  className: 'red-band'
                              }]
                          },

                          series: [{
                              name: 'Información',
                              data: [parseInt(scope.value)],
                              tooltip: {
                                  valueSuffix: ' Hrs'
                              }
                          }]
                        });



                    })
                }
                _load();
                scope.$watch('value', function(newValue, oldValue) {
                  $rootScope.loadGraph = false;
                    if(newValue != oldValue && newValue){
                        console.log("newValue 4 :: ", newValue)
                        _load(newValue);

                    }
                });
                /*
                * on page change

                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
                */

            }
        }


    };
}])
.directive('graphColumn1', ['CONSTANTS', '$timeout', function (CONSTANTS, $timeout) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}" style="width:500px;height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "="
        },
        link: {
            post: function (scope, elem, attrs) {

                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                        _loadchart = new Highcharts.Chart({
                            chart: {
                                renderTo : scope.idcmp,
                                type: 'column'
                            },
                            colors: scope.colors,
                            credits: { enabled: false },
                            title: {
                                text: scope.title
                            },
                            subtitle: {
                                text: " "
                            },
                            xAxis: {
                                type: 'category',
                                labels: {
                                    rotation: -45,
                                    style: {
                                        fontSize: '13px',
                                        fontFamily: 'Verdana, sans-serif'
                                    }
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Q'
                                }
                            },
                            legend: {
                                enabled: false
                            },
                            tooltip: {
                                pointFormat: 'Q: <b>{point.y:.2f}</b>'
                            },
                            series: [{
                                name: 'Population',
                                colorByPoint: true,
                                data: datos,
                                dataLabels: {
                                    enabled: true,
                                    color: '#FFFFFF',
                                    format: '{point.y:.1f} Q',
                                    style: {
                                        fontSize: '8px'
                                    }
                                }
                            }]
                        });



                    })
                }
                _load();

                /*
                * on page change
                */
                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                // scope.$watch('stitle', function(newValue, oldValue) {
                //     if(newValue != oldValue && newValue){
                //         _loadchart.setTitle(null, {text:newValue});
                //     }
                // });

            }
        }


    };
}])

.directive('graphColumn', ['CONSTANTS', '$timeout', function (CONSTANTS, $timeout) {
    return {
        restrict: 'E',
        template: '<div id="{{idcmp}}" class="{{cls}}" style="max-width: {{width}}px !important;height: {{height}}px;"></div>',
        scope: {
            cls: '@',
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            categories: '=',
            colors: "=",
            total: "="
        },
        link: {
            post: function (scope, elem, attrs) {

                var _loadchart;
                var _load = function(datos){
                    if(!datos){
                        datos=[];
                    }
                    $timeout(function () {
                        _loadchart = new Highcharts.Chart({
                            chart: {
                                renderTo : scope.idcmp,
                                //plotBackgroundColor: '#0154A0',
                                backgroundColor: 'transparent',
                                type: 'column',
                                //backgroundColor: "#fff",
                                borderWidth: 0,

                                //color:"#ffffff"
                            },
                            colors: scope.colors,
                            credits: { enabled: false },
                            title: {
                                text: scope.title
                            },
                            subtitle: {
                                text: " "
                            },
                            xAxis: {
                                type: 'category',
                                gridLineColor: null,

                                labels: {
                                    enabled: false,

                                    rotation: -45,
                                    style: {
                                        fontSize: '15px',
                                        fontFamily: 'Verdana, sans-serif'
                                    }
                                }

                            },
                            yAxis: {
                                min: 0,
                                max: 100,
                                align: 'right',
                                minorGridLineWidth: 0,
                                title: {
                                    text: null
                                },
                                labels: {
                                  enabled: false,
                                }
                            },

                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'middle',
                                borderWidth: 0,
                                enabled: false

                            },
                            tooltip: {
                                pointFormat: '%: <b>{point.y:.2f}</b>',
                                crosshairs: [true]
                            },
                            exporting: {
                                enabled: false
                            },
                            series: [{
                                name: 'Population',
                                colorByPoint: true,
                                data: datos,
                                dataLabels: {
                                    enabled: true,
                                    color: '#FFFFFF',
                                    format: '{point.y:.1f} %',
                                    style: {
                                        fontSize: '8px'
                                    }
                                }
                            }]
                        });



                    })
                }
                _load();

                /*
                * on page change
                */
                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){


                        console.log("newValue 2 :: ", newValue)
                        _load(newValue);


                        //_loadchart.series[0].data = newValue;
                        //_loadchart.redraw();
                    }
                });
                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue+" dfg"});
                    }
                });

            }
        }


    };
}])

.directive('graphPieChart', ['CONSTANTS', '$timeout', function (CONSTANTS, $timeout) {
    return {
        restrict: 'E',
        template: '<div><div id="{{idcmp}}" style="min-width: {{width}}%; height: {{height}}px; margin: 0 auto"></div></div>',
        scope: {
            idcmp: '@',
            width: '@',
            height: '@',
            title: '@',
            stitle: '=',
            yaxistext: '@',
            series: '=',
            colors: '='
        },
        link: {
            post: function (scope, elem, attrs) {
                var _loadchart;
                var _load = function(){
                    $timeout(function () {
                        _loadchart = new Highcharts.Chart({
                            renderTo : scope.idcmp,
                            colors: scope.colors,
                            chart: {
                                renderTo : scope.idcmp,
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie'
                            },
                            credits: { enabled: false },
                            title: {
                                text: scope.title
                            },
                            subtitle: {
                                text: " "
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.y}</b>'
                            },
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    showInLegend: true,
                                    dataLabels: {
                                        enabled: false,
                                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                        style: {
                                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                        }
                                    }
                                }
                            },
                            series: [{
                                name: scope.title,
                                colorByPoint: true,
                                data: []
                            }]
                        });
                    })
                }
                _load();
                /*
                * on page change
                */
                scope.$watch('series', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        /*var seriesLength = _loadchart.series.length;
                        for(var i = seriesLength - 1; i > -1; i--) {
                            _loadchart.series[i].remove();
                        } */

                        console.log("newValue :: ", newValue)
                        _loadchart.series[0].setData(newValue);


                        //_loadchart.series[0].data = newValue;
                       // _loadchart.redraw();
                    }
                });

                scope.$watch('stitle', function(newValue, oldValue) {
                    if(newValue != oldValue && newValue){
                        _loadchart.setTitle(null, {text:newValue});
                    }
                });
            }
        }


    };
}]);


 //------------------------------------------------------- 

angular.module('CodetziPortabilidad.directives', [
	// 'employeeTabHeaderDirectives',
	// 'sideBarDirectives',
	'checkboxDirectives',
	'accountControlDirectives',
	'dateSelectionDirectives',
    'graficosDirectives'
])

.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
})

.directive('ngEnter', function () { //a directive to 'enter key press' in elements with the "ng-enter" attribute

    return function (scope, element, attrs) {

        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
})

.directive('icheck', function($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function(scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];
				var stype =$attrs['stype']=="square"? 'icheckbox_minimal-blue': 'iradio_square-blue'
				console.log(1, stype)
                scope.$watch($attrs['ngModel'], function(newValue){
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: stype,
                    radioClass: 'iradio_flat-blue'

                }).on('ifChanged', function(event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        scope.$apply(function() {
                            return ngModel.$setViewValue(event.target.checked);
                        });
                    }
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return scope.$apply(function() {
                            return ngModel.$setViewValue(value);
                        });
                    }
                });
            });
        }
    };
})

.directive("wrapper", [ 'sbaseproject', '$timeout', '$rootScope', '$timeout',
    function(sbaseproject, $timeout, $rootScope, $timeout) {
        return {
            restrict: "C",
            link: function(scope, elem, attrs) {

                scope.$on('$stateChangeSuccess', function (scope, next, current) {
                    if (next.url == '/login'){
                        $('body').addClass('close-bars fix-login sidebar-collapse');
                        $('body .content-wrapper').css('min-height', 965);
												console.log(true, '$stateChangeSuccess')

                    }else{
                        $('body').removeClass('close-bars fix-login');
                        $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
												console.log(false, '$stateChangeSuccess')

                        $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                    }
                    fix();
                    fixSidebar();
                });

                $(window, ".wrapper").resize(function () {
                    fix();
                    fixSidebar();
                });

                var fix = function () {
                    //Get window height and the wrapper height
                    var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
                    var window_height = $(window).height();
                    var sidebar_height = $(".sidebar").height();
                    //Set the min-height of the content and sidebar based on the
                    //the height of the document.
                    if ($("body").hasClass("fixed")) {
                        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
                    } else {
                        var postSetWidth;
                        if (window_height >= sidebar_height) {
                            $(".content-wrapper, .right-side").css('min-height', window_height - neg);
                            postSetWidth = window_height - neg;
                        } else {
                            $(".content-wrapper, .right-side").css('min-height', sidebar_height);
                            postSetWidth = sidebar_height;
                        }

                        //Fix for the control sidebar height
                        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                        if (typeof controlSidebar !== "undefined") {
                            if (controlSidebar.height() > postSetWidth)
                            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
                        }
                    }
                };

                var fixSidebar = function () {
                    //Make sure the body tag has the .fixed class
                    if (!$("body").hasClass("fixed")) {
                        if (typeof $.fn.slimScroll != 'undefined') {
                            $(".sidebar").slimScroll({destroy: true}).height("auto");
                        }
                        return;
                    } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
                        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
                    }
                    //Enable slimscroll for fixed layout
                    if ($.AdminLTE.options.sidebarSlimScroll) {
                        if (typeof $.fn.slimScroll != 'undefined') {
                            //Destroy if it exists
                            $(".sidebar").slimScroll({destroy: true}).height("auto");
                            //Add slimscroll
                            $(".sidebar").slimscroll({
                                height: ($(window).height() - $(".main-header").height()) + "px",
                                color: "rgba(0,0,0,0.2)",
                                size: "3px"
                            });
                        }
                    }
                };
            }
        }
    }
])

.directive("mainSidebar", [ 'sbaseproject',
    function(sbaseproject) {
        return {
            restrict: "C",
            link: function(scope, elem, attrs) {
                if (sbaseproject.options.enableControlSidebar){
                    //Get the screen sizes
                    var screenSizes = sbaseproject.options.screenSizes;
                    //Enable sidebar toggle
                    $('.sidebar-toggle').on('click', function(e){
                        e.preventDefault();

                        //Enable sidebar push menu
                        if ($(window).width() > (screenSizes.sm - 1)) {
                            if ($("body").hasClass('sidebar-collapse')) {
                                 $("body").removeClass('sidebar-mini').trigger('expanded.pushMenu');
                                $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                                $("body").addClass('sidebar-open').trigger('collapsed.pushMenu');
																console.log(true, 'Enable sidebar push menu')
                            } else {
															console.log(false, 'Enable sidebar push menu')
                                $("body").removeClass('sidebar-open').trigger('expanded.pushMenu');
                                $("body").addClass('sidebar-mini').trigger('collapsed.pushMenu');
                                $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                            }
                        }

                        //Handle sidebar push menu for small screens
                        else {
                            if ($("body").hasClass('sidebar-open')) {
															console.log(true, 'Handle sidebar push menu for small screens')

                                $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                            } else {
															console.log(false, 'Handle sidebar push menu for small screens')

                                $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                            }
                        }


                        // $(".content-wrapper").click(function () {
                        //     //Enable hide menu when clicking on the content-wrapper on small screens
                        //     if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
                        //         $("body").removeClass('sidebar-open');
                        //     }
                        // });

                        // //Enable expand on hover for sidebar mini
                        // if ($.sbaseproject.options.sidebarExpandOnHover || ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini'))) {
                        //     this.expandOnHover();
                        // }
                    })

                }
            }
        }
    }
])

// .directive('myTable', ['sbaseproject', '$timeout', 'Test', '$q',
//     function(sbaseproject, $timeout, $q){
//         return {
//             restrict: "A",
//             scope: {
//                 nextPage: '&',
//                 aoColumnDefs: '=',
//                 list: '=',
//                 total: '='
//             },
//             link: function(scope, elem, attrs) {
//                 $timeout(function(){
//                     var options = {};

//                     if (scope.list.length > 0) {
//                         options.serverSide = true;
//                         options.deferLoading = scope.total;
//                         options.data = scope.list;
//                         // options.ajax = scope.nextPage();
//                     } else {
//                         options = {
//                             // "bStateSave": true,
//                             // "iCookieDuration": 2419200, /* 1 month */
//                             // "bJQueryUI": true,
//                             // "bPaginate": false,
//                             // "bLengthChange": false,
//                             // "bFilter": false,
//                             // "bInfo": false,
//                             // "bDestroy": true
//                         };
//                     }


//                     // aoColumnDefs is dataTables way of providing fine control over column config
//                     if (scope.aoColumnDefs) {
//                         options["columns"] = scope.aoColumnDefs;
//                     }

//                     // apply the plugin
//                     var dataTable = elem.dataTable(options);

//                     var flag = false;

//                     // watch for any changes to our data, rebuild the DataTable
//                     scope.$watch('list', function(newval, oldval) {
//                         var val = newval || null;
//                         if (val) {
//                             if (flag){
//                                 dataTable.fnClearTable();
//                                 dataTable.fnAddData(scope.list);
//                             }
//                             flag = true;

//                         }
//                     });

//                 }, 200);

//             }
//         }
//     }
// ])

.directive('toggleBalance', ['sbaseproject', '$timeout',
    function(sbaseproject, $timeout){
        return {
            restrict: "C",
            link: function(scope, elem, attrs) {

                elem.on('click', function(){
                    $(".balance-option").stop().slideToggle(200);
                });

            }
        }
    }
])

/* ControlSidebar
* ==============
* Adds functionality to the right sidebar
*
* @type Object
* @usage class = control-sidebar
*/
.directive('controlSidebar', ['sbaseproject', '$timeout',
    function(sbaseproject, $timeout){
        return {
            restrict: "C",
            link: function(scope, elem, attr){

                //using timeout to run the function after DOM is ready
                $timeout(function(){
                    //Update options
                    var o = sbaseproject.options.controlSidebarOptions;

                    //Get the sidebar
                    var sidebar = $(o.selector);

                    //The toggle button
                    var btn = $(o.toggleBtnSelector);

                    //If the body has a boxed layout, fix the sidebar bg position
                    var bg = $(".control-sidebar-bg");
                    scope.fix(bg);

                    //If the body has a fixed layout, make the control sidebar fixed
                    if ($('body').hasClass('fixed')) {
                        scope.fixForFixed(sidebar);
                    } else {
                        //If the content height is less than the sidebar's height, force max height
                        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
                            scope.fixForContent(sidebar);
                        }
                    }

                    //Listen to the click event
                    btn.on('click', function (e) {
                        e.preventDefault();
                        //If the sidebar is not open
                        if (!sidebar.hasClass('control-sidebar-open') && !$('body').hasClass('control-sidebar-open')) {
                            //Open the sidebar
                            scope.open(sidebar, o.slide);
                        } else {
                            scope.close(sidebar, o.slide);
                        }
                    });

                    scope.setup();
                });


                //Open the control sidebar
                scope.open = function (sidebar, slide) {
                    //Slide over content
                    if (slide) {
                        sidebar.addClass('control-sidebar-open');
                    } else {
                        //Push the content by adding the open class to the body instead
                        //of the sidebar itself
                        $('body').addClass('control-sidebar-open');
                    }
                }

                //Close the control sidebar
                scope.close = function (sidebar, slide) {
                    if (slide) {
                        sidebar.removeClass('control-sidebar-open');
                    } else {
                        $('body').removeClass('control-sidebar-open');
                    }
                }

                scope.fix = function (sidebar) {
                     if ($("body").hasClass('layout-boxed')) {
                        sidebar.css('position', 'absolute');
                        sidebar.height($(".wrapper").height());
                        $(window).resize(function () {
                            scope.fix(sidebar);
                        });
                    } else {
                        sidebar.css({
                            'position': 'fixed',
                            'height': 'auto'
                        });
                    }
                }

                scope.fixForFixed = function (sidebar) {
                    sidebar.css({
                        'position': 'fixed',
                        'max-height': '100%',
                        'overflow': 'auto',
                        'padding-bottom': '50px'
                    });
                }

                scope.fixForContent = function (sidebar) {
                    $(".content-wrapper, .right-side").css('min-height', sidebar.height());
                }

                /**
                * Toggles layout classes
                *
                * @param String cls the layout class to toggle
                * @returns void
                */
                scope.change_layout = function(cls) {
                    $("body").toggleClass(cls);
                    //sbaseproject.layout.fixSidebar();
                    //Fix the problem with right sidebar and layout boxed
                    if (cls == "layout-boxed")
                      scope.fix($(".control-sidebar-bg"));
                    if ($('body').hasClass('fixed') && cls == 'fixed') {
                      sbaseproject.pushMenu.expandOnHover();
                      //sbaseproject.layout.activate();
                    }
                    scope.fix($(".control-sidebar-bg"));
                    scope.fix($(".control-sidebar"));
                }

                /**
                * Replaces the old skin with the new skin
                * @param String cls the new skin class
                * @returns Boolean false to prevent link's default action
                */
                scope.change_skin = function(cls) {
                    $.each(sbaseproject.options.skins, function (i) {
                        $("body").removeClass(sbaseproject.options.skins[i]);
                    });

                    $("body").addClass(cls);
                    scope.store('skin', cls);
                    return false;
                }

                /**
                * Store a new settings in the browser
                *
                * @param String name Name of the setting
                * @param String val Value of the setting
                * @returns void
                */
                scope.store = function(name, val) {
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem(name, val);
                    } else {
                        window.alert('Please use a modern browser to properly view this template!');
                    }
                }

                /**
                * Get a prestored setting
                *
                * @param String name Name of of the setting
                * @returns String The value of the setting | null
                */
                scope.get = function(name) {
                    if (typeof (Storage) !== "undefined") {
                        return localStorage.getItem(name);
                    } else {
                        window.alert('Please use a modern browser to properly view this template!');
                    }
                }

                /**
                * Retrieve default settings and apply them to the template
                *
                * @returns void
                */
                scope.setup = function() {
                    var tmp = scope.get('skin');
                    if (tmp && $.inArray(tmp, sbaseproject.options.my_skins))
                        scope.change_skin(tmp);

                    //Add the change skin listener
                    $("[data-skin]").on('click', function (e) {
                        e.preventDefault();
                        scope.change_skin($(this).data('skin'));
                    });

                    //Add the layout manager
                    $("[data-layout]").on('click', function () {
                        scope.change_layout($(this).data('layout'));
                    });

                    $("[data-controlsidebar]").on('click', function () {
                        scope.change_layout($(this).data('controlsidebar'));
                        var slide = !sbaseproject.options.controlSidebarOptions.slide;
                        sbaseproject.options.controlSidebarOptions.slide = slide;
                        if (!slide)
                            $('.control-sidebar').removeClass('control-sidebar-open');
                    });

                    $("[data-sidebarskin='toggle']").on('click', function () {
                        var sidebar = $(".control-sidebar");
                        if (sidebar.hasClass("control-sidebar-dark")) {
                            sidebar.removeClass("control-sidebar-dark")
                            sidebar.addClass("control-sidebar-light")
                        } else {
                            sidebar.removeClass("control-sidebar-light")
                            sidebar.addClass("control-sidebar-dark")
                        }
                    });

                    $("[data-enable='expandOnHover']").on('click', function () {
                        $(this).attr('disabled', true);
                        sbaseproject.pushMenu.expandOnHover();
                        if (!$('body').hasClass('sidebar-collapse'))
                            $("[data-layout='sidebar-collapse']").click();
                    });

                    // Reset options
                    if ($('body').hasClass('fixed')) {
                        $("[data-layout='fixed']").attr('checked', 'checked');
                    }
                    if ($('body').hasClass('layout-boxed')) {
                        $("[data-layout='layout-boxed']").attr('checked', 'checked');
                    }
                    if ($('body').hasClass('sidebar-collapse')) {
                        $("[data-layout='sidebar-collapse']").attr('checked', 'checked');
                    }
                }
            }
        }
    }
])

.directive("responsiveTable", ['$compile', '$filter', function($compile, $filter) {

    return {
        restrict: "A",
        scope:false,
        compile: function(elem, attrs) {

            attrs.$addClass("responsive");
            var headerHtmlList = '';
            //add sort icons to each of the headers
            angular.forEach(elem.find("th"), function(value, key) {
                var eachHeader = angular.element(value);
                var eachHeaderTitle = eachHeader.html();
                var sortCol = eachHeader.data('sort');
                if(sortCol){
                    headerHtmlList += '<li data-sort="' + sortCol + '" ng-click="sortByColumn($event);updateText($event)">' + eachHeader[0].innerText + '</li>';
                    eachHeader.html('<div class="header-wrapper sort">' + eachHeaderTitle + '&nbsp;<i class="fa fa-sort"></i><i class="fa fa-sort-asc"></i><i class="fa fa-sort-desc"></i></div>');
                }
            });

            //build mobile sort template
            var sortDropDown = '<div class="filter-wrapper"> ';
            sortDropDown += '<div ng-click="toggleDropdown($event)" class="filter-dropdown-current btn btn-primary btn-round">Sort By: <b><span class="current-col-text">{{sortColText}}</span><b> <i class="fa fa-caret-down"></i></div>';
            sortDropDown += '<ul class="filter-dropdown">';
            sortDropDown += headerHtmlList;
            sortDropDown += '</ul>';
            sortDropDown += '</div>';

            //append the template before the table
            var table = elem.find("table");
            table.before(sortDropDown);

        },
        controller: function($scope, $element){
            // table header animation
            $element.find("[data-sort]").click(function(){
                if($scope.sort == $(this).data("sort")){
                    $scope.direction = $scope.direction == "DESC" ? "ASC" : "DESC";
                    var directionClass = $scope.direction == "DESC" ? "desc" : "asc";
                    $(this).find(".header-wrapper").attr('class', 'header-wrapper').addClass(directionClass);
                }
                else{
                    $scope.direction = "DESC";
                    $element.find(".header-wrapper").attr('class', 'header-wrapper sort');
                    $(this).find(".header-wrapper").attr('class', 'header-wrapper').addClass("desc");
                }
                $scope.sort = $(this).data("sort");
                $(".filter-dropdown").removeClass('active');
            });

            //toggles the dropdown menu for the mobile sort template
            $scope.toggleDropdown = function (event) {
                var dropdown = $(event.target).parent().find('.filter-dropdown');
                dropdown.toggleClass('active');
            };

            $scope.updateText = function(event){
                $scope.sortColText=event.currentTarget.innerText;
            };
        }

    };

}]).directive("customDropDown", [ function() {

    return {
        restrict: "E",
        scope: {
        	list: '=',
        	elem: '=',
        	title: '@',
        	size: '@',
        	label: '@'
        },
        template: '<div class="dropdownmenu-wrapper">' +
					'<div class="dropdownmenu ng-binding" ng-click="toggleTabMenu($event)">{{title}}</div>' +
						'<ul class="dropdown-content">' +
							'<li ng-repeat="item in list" ng-click="itemSelected($index)">{{item[label]}}</li>' +
						'</ul>' +
				  	'</div>' +
				  '</div>',
        link: function(scope, elem, attrs) {

        	scope.element = elem;

			scope.itemSelected = function(idx){
				scope.element.find('.dropdown-content').removeClass("active");
				scope.element.find('.dropdownmenu').html(scope.list[idx][scope.label]);
				scope.elem = scope.list[idx];
			};

			//if you set elem, that value will show as default
			if (scope.elem){
				angular.forEach(scope.list, function(value, key){
					if (angular.equals(scope.elem, value)){
						scope.itemSelected(key);
					}
				});
			}

			scope.$watch('list', function(newval, oldval){
				if (!angular.equals(newval, oldval)){
					scope.element.find('.dropdownmenu').html(scope.title);
					scope.elem = undefined;
				}
			});

            // Anything that gets to the document will hide the dropdown
            $(document).click(function(){
                scope.element.find(".dropdown-content").removeClass("active");
            });

            // Close dropdown or block document click from closing the dropdown when clicking inside of the element
			scope.toggleTabMenu = function(event){
                event.preventDefault();
                event.stopPropagation();
				scope.element.find(".dropdown-content").toggleClass("active");
			};

			if (scope.size == 'small'){
				elem.find('.dropdownmenu-wrapper').addClass('dropdownmenu-sm');
			}
        }
    };
}])

.directive("iconTag", [ function() {
	return {
		restrict: "A",
		link: function(scope, elem, attr) {
			if (scope.$eval(attr.iconTag))
				elem.addClass('active');
			else
				elem.removeClass('active');
		}
	};

}])

.directive('triggerPopoverClose',[ function () {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			elem.on('click', function(event){
				angular.element('#'+attrs.triggerPopoverClose).trigger('click')
			});
		}
	};
}])


.directive('msgResponseStatus',[ function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			msg: "@",
			title: "@",
			isOk: "@"
		},
		template: "<div class=\"{{isOk=='true'?'text-kwsave':'text-red'}} text-center\">\
			<i class=\"fa {{isOk=='true'?'fa-check-circle':'fa-times-circle'}} fa-title-response\"></i>\
			<h1 class='fa-title-response.text'>{{title}}!</h1>\
			<h1>{{msg}}.</h1>\
		</div>"
	};
}]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('sideBarDirectives', [])

.directive('sideBar', ['$location', 'CONSTANTS', '$rootScope', function ($location, CONSTANTS, $rootScope) {
	return {
		restrict: 'E',
		templateUrl: CONSTANTS.DIRECTIVE_PATH + 'sidebar/sidebar.tlp.html',
		link: function(scope, elem, attrs) {

			//hide control panel when not in account page
			$rootScope.$on("$routeChangeStart", function(args){
				$("#toggle-control").hide();
				var tab = $location.url().replace("/","");
				if(tab == "account"){
					$("#toggle-control").show();
				}
			})

			//menu toggle
			$("#menu-control").click(function(){
				$("#mainNav").toggleClass("left-panel-active");
				$("#mainNavMobile").toggleClass("left-panel-active");
				$("#main-panel").toggleClass("left-panel-active");
			});

			//control toggle
			$("#toggle-control").click(function(){
				$("#controlNav").toggleClass("right-panel-active");
				$("#mainNavMobile").toggleClass("right-panel-active");
				$("#main-panel").toggleClass("right-panel-active");
			});

			$(document).click(function(e) {
				var target = e.target;

				if (!$(target).is('#menu-control') && !$(target).is('#mainNav') && !$(target).parents().is('#mainNav') && !$(target).is('#toggle-control') && !$(target).is('#controlNav') && !$(target).parents().is('#controlNav')) {
					$("#mainNav").removeClass("left-panel-active");
					$("#mainNavMobile").removeClass("left-panel-active");
					$("#main-panel").removeClass("left-panel-active");
					$("#controlNav").removeClass("right-panel-active");
					$("#mainNavMobile").removeClass("right-panel-active");
					$("#main-panel").removeClass("right-panel-active");
				}
			});
		}
	};
}]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('CodetziPortabilidad.filters', []) 

/** 
 * Capitalize Filter
 */
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
})
/**
* Truncar Filter
*/
.filter('slice', function() {
  return function(input) {
    return input.slice(0,30)+"...";
  };
})
/**
* TimeSplit Filter
*/
.filter('timeSplit', function() {
  return function(input, splitChar, splitIndex) {
    return !input ? 'No hay registro' : input.split(splitChar)[splitIndex];
  };
})
/**
* Format Date Filter
*/
.filter('dateMoment', function() {
  return function(input, splitChar, splitIndex) {
    if(input){
      var res = input.split("(");
      var res2 = res[1].split(")");
    }
    //return moment(res2[0]).format("DD MMM YYYY hh:mm a");
    return !res2 ? 'Sin Información' : moment(parseInt(res2[0])).format("YYYY-MM-DD");
  };
})
.filter('dateLine', function() {
  return function(input, splitChar, splitIndex) {
    if(input){
      var res = input.split("(");
      var res2 = res[1].split(")");
    }
    //return moment(res2[0]).format("DD MMM YYYY hh:mm a");
    return !res2 ? 'Sin Información' : moment(parseInt(res2[0])).format("DD-MM-YYYY");
  };
})
.filter('dateLineTimeRoy', function(){
return function(input, splitChar, splitIndex) {
  if(input)
  var res = input.split("-");
  //return moment(res2[0]).format("DD MMM YYYY hh:mm a");
  return !res ? 'Sin Información' : res[2]+"/"+res[1]+"/"+res[0];
};
})
.filter('dateChat', function() {
  return function(input, splitChar, splitIndex) {
    //return moment(res2[0]).format("DD MMM YYYY hh:mm a");
    return !input ? 'No hay registros' : moment(input).format("DD MMM hh:mm a");
  };
})
.filter('dateUserChat', function() {
  return function(input, splitChar, splitIndex) {
    //return moment(res2[0]).format("DD MMM YYYY hh:mm a");
    return !input ? 'No hay registros' : moment(input).format("DD/MM/YYYY");
  };
})
/**
* No Value Filter
*/
.filter('dateTruncate', function() {
  return function(input) {
    return !input ? 'No hay registros' : input.slice(0,10);
  };
  })
  .filter('round', function() {
  return function(input) {
    return !input ? 'No hay registros' : Math.round(input);
  };
  })
  .filter('dateTruncateAndOrder', function() {
  return function(input) {
    if(input){
      if (input.search("-") != -1){
        res = input.slice(0,10).split("-");
        return res[2]+"-"+res[1]+"-"+res[0];
  
      }else if (input.search("/") != -1){
        res = input.slice(0,10).split("/");
        return res[2]+"-"+res[1]+"-"+res[0];
  
      }else{
        return 'No se puede tratar la información';
  
      }
  
    }else{
      return 'No existe esta información';
  
    }
  };  
  })
  
  .filter('dateMinus', function(){
  return function(input) {
      var formatted = moment(input, "YYYY-MM-DD").diff(moment().format("YYYY-MM-DD"), 'days');
      if(formatted <= 0){
        formatted = 0;
  
        //formatted = "No quedan días";
      }else{
        formatted = formatted;
      }
    return !input ? 0 : parseInt(formatted);
  };
  
  
  })
  
.filter('novalue', function() {
    return function(input) {
      return !input ? 'N/A' : input;
    };
})

.filter('noselection', function() {
    return function(input) {
      return !input ? 'Sin Selección' : input;
    };
})

.filter('activo', function() {
    return function(input) {
      return input==true ? 'Inactivo' : 'Activo';
    };
})

.filter('cleandots', function() {
    return function(input) {
      return input.replace(/\./g,'');
    };
})
.filter("msdate", function() {
    var re = /\/Date\(([0-9]*)\)\//;
    return function(x) {
        var m = x.match(re);
        if( m ) return new Date(parseInt(m[1]));
        else return null;
    };
})
.filter('replace', [function () {

    return function (input, from, to) {
      
      if(input === undefined) {
        return;
      }
  
      var regex = new RegExp(from, 'g');
      return input.replace(regex, to); 
       
    };


}])

;


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('CodetziPortabilidad.factories', [])

.factory('Excel', function($window){
	template='"<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">';
	template = template + '<head><!--[if gte mso 9]>';
	template = template + '<xml version="1.0" encoding="utf-8" standalone="yes"><x:ExcelWorkbook>';
	template = template + '<x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name>';
	template = template + '<x:WorksheetOptions>';
	template = template + '<x:DisplayGridlines/>';  
	template = template + '</x:WorksheetOptions>';
	template = template + '</x:ExcelWorksheet></x:ExcelWorksheets>';
	template = template + '</x:ExcelWorkbook></xml><![endif]-->';
	template = template + '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><style type="text/css">body p {	font-size: 12px;	color:#96C;	font-family:Arial, Helvetica, sans-serif;	}.Negrita {	font-weight: bold;}.Estilo1 {font-size: 9px}.Estilo4 {font-size: 9px; color: #FFFFFF; }.Estilo5 {font-size: 9px; font-weight: bold; }</style>';
	template = template + '</head><body><table>{table}</table></body></html>';

	  var uri='data:application/vnd.ms-excel;base64,', template,
		  base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
		  format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
	  return {
		  tableToExcel:function(tableId,worksheetName){
			  var table=$(tableId),
				  ctx={worksheet:worksheetName,table:table.html()},
				  href=uri+base64(format(template,ctx));
			  return href;
		  }
	  };
  })   

.factory('modalFactory', function($uibModal) {
	var enableAnimation = true;
	return { 
		open: function(template,controller,size,params) {
			return $uibModal.open({
				backdrop: 'static',
				keyboard :false,
				animation: enableAnimation,
				// templateUrl: '../app/common/factories/confirmPromote.tpl.html',
				templateUrl: template, 
				controller: controller,
				size: size,
				resolve: {
					params: function() {
						return params;
					}
				}
			});
		}
	};
})


.controller('ModalConfirmPromptInstanceCtrl', ['$scope', '$uibModalInstance', 'params',
	function($scope, $uibModalInstance, params) {

	$scope.title = params.title;
	$scope.body = params.body;

	$scope.confirm = function() {
		$uibModalInstance.close(true);
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
}]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('CodetziPortabilidad.services', [])


/**
 * Service for all AJAX calls  
 */
.service('AJAX', ['$http', 'CONSTANTS', '$state', '$rootScope', '$localStorage', '$q',
    function($http, CONSTANTS, $state, $rootScope, $localStorage, $q) {
        var _error = function(result) {
            if (result.data.success == false) {
                console.log("DELETE STORAGE FALSE")  
                 delete $localStorage.portabilidadDash;
                 window.location = CONSTANTS.ENDPOINT_JS
            }
        }
        this.genParams = function(command) {
            return CONSTANTS.ENDPOINT_URI + command;
        }
        this.genParams3Play = function(command) {
            return CONSTANTS.ENDPOINT_URI_3PLAY + command;
        }
        this.post = function(params, op) {
            $rootScope.gloading = "whirl whirl-min duo no-overlay";
            this.endpoint = this.genParams(params.command);
            var defer = $q.defer();
            var promise = $http.post(this.endpoint, $.param(params)).then(
                function(result) {
                    $rootScope.gloading = "";
                    if (result.data.sesionError === true) {
                        _error(result);
                    }
                    if( Object.prototype.toString.call( result.data ) === '[object Array]' ) {
                        console.log( 'Array!' );
                        if(result.data.length<=0 && op!==false){
                            swal("Sin información!")
                        }
                    }

                    return defer.resolve(result);
                }, function(err){
                    //TODO Error login GNRL

                    $rootScope.gloading = "";
                    return defer.reject(err);
                }
            )
            return defer.promise;
        };
        this.post3Play = function(params, op) {
            $rootScope.gloading = "whirl whirl-min duo no-overlay";
            this.endpoint = this.genParams3Play(params.command);
            var defer = $q.defer();
            var promise = $http.post(this.endpoint, $.param(params)).then(
                function(result) {
                    $rootScope.gloading = "";
                    if (result.data.sesionError === true) {
                        _error(result);
                    }
                    if( Object.prototype.toString.call( result.data ) === '[object Array]' ) {
                        console.log( 'Array!' );
                        if(result.data.length<=0 && op!==false){
                            swal("Sin información!")
                        }
                    }

                    return defer.resolve(result);
                }, function(err){
                    //TODO Error login GNRL

                    $rootScope.gloading = "";
                    return defer.reject(err);
                }
            )
            return defer.promise;
        };

    }
])

/**
 * Session parameter
 */
.service('SessionParams', ['$localStorage',
    function($localStorage) {
        this.get = function() {
            if ($localStorage.portabilidadDash) {
                var params = {};
                params.token = $localStorage.portabilidadDash.token;
                params.is_ok = $localStorage.portabilidadDash.is_ok;
                return params;
            } else {
                return false;
            }
        };
    }
])

/**
 * Build a basic API object to append in every request
 */
.service('BasicAPIObject', ['SessionParams', 
    function(SessionParams) {
        this.get = function(command, model) {
            var params = {
                command: command,
                model: model,
                ver: '4'
            };

            angular.extend(params, SessionParams.get());
            return params;
        };
    }
])
.service('sharedProperties', ['$localStorage', function ($localStorage) {
        //var start = moment({day: 1});
        //var end = moment();


        return {
            getStart: function () {
                //console.log('getStart:::'+$localStorage.filter.start)
                return $localStorage.filter.start;
            },
            setStart: function(value) {
              $localStorage.filter.start = value;
              start = $localStorage.filter.start;
            },
            getEnd: function () {
                return $localStorage.filter.end;
            },
            setEnd: function(value) {
              $localStorage.filter.end = value;
              end = $localStorage.filter.end;
            }
        };
    }
  ])

.service('General', ['AJAX', 'BasicAPIObject', '$cookies', 'CONSTANTS', '$rootScope', 'sharedProperties',
    function(AJAX, BasicAPIObject, $cookies, CONSTANTS, $rootScope, sharedProperties) {
        var MODEL = 'General';

        this.guardaIngresosxEtapas = function(TICKET, ETAPA, ESTADO) { 
            var params = BasicAPIObject.get(MODEL+'/guardaIngresosxEtapas', MODEL); 
            params.TICKET = TICKET;  
            params.ETAPA = ETAPA;
            params.ESTADO = ESTADO;  
            params.USUARIO = $rootScope.currentUser.user_id;
            console.log('params guardaIngresosxEtapas:::', params);    
            return AJAX.post(params);
        };        

        
        this.buscaPUNTO_CONTACTO = function(){
            var params = BasicAPIObject.get('General/buscaPUNTO_CONTACTO', MODEL);
            params.USUARIO = $rootScope.currentUser.user_id;  
            return AJAX.post(params);  
        };

        this.guardaEvaluacionTecnico = function(TICKET_TIPI, NOMBRE_SOLICITANTE, EVALUACION_POSITIVA, EVALUACION_NEGATIVA, observacion) { 
            var params = BasicAPIObject.get(MODEL+'/IngresaEvaluacionTecnicos', MODEL); 
            params.ID_TICKET = TICKET_TIPI; 
            params.TECNICO = NOMBRE_SOLICITANTE;
            params.EVALUACION_POSITIVA = EVALUACION_POSITIVA;  
            params.EVALUACION_NEGATIVA = EVALUACION_NEGATIVA;  
            params.Observacion = observacion; 
            params.USUARIO = $rootScope.currentUser.user_id;

            return AJAX.post(params);
        };        

        this.ObtieneDatosDashBoardChatBot = function(FechaDesde, FechaHasta, Servicio) { 
            var params = BasicAPIObject.get(MODEL+'/ObtieneDatosDashBoardChatBot', MODEL);
            params.Usuario = $rootScope.currentUser.user_id;  
            params.FechaDesde = FechaDesde;  
            params.FechaHasta = FechaHasta; 
            params.Servicio = Servicio;  
            //console.log('params ObtieneDatosDashBoardChatBot:::', params);   
            return AJAX.post(params);
        };

        this.getObservacionEtapaBOT = function(ID) { 
            var params = BasicAPIObject.get('General/obtieneObservacionesEtapaBOT', MODEL);
            params.NumeroOXT = ID;
            return AJAX.post(params);  
        };

        this.obtienePlataforma = function() { 
            var params = BasicAPIObject.get(MODEL+'/obtienePlataforma', MODEL);
            params.USUARIO = $rootScope.currentUser.user_id;
            return AJAX.post(params);
        };


        this.ActualizaAtencion = function(ID_ATENCION, TIPO_LLAMADO, SOLICITUD, RESULTADO, ACCION, SOLUCION, NUMERO_OXT, COD_GRABACION, COD_SERVICIO, TIPO_SERVICIO, OBSERVACION) { 
            var params = BasicAPIObject.get(MODEL+'/ActualizaAtencion', MODEL);


            params.ID_ATENCION = ID_ATENCION;
            params.TIPO_LLAMADO = TIPO_LLAMADO;
            params.SOLICITUD = SOLICITUD;
            params.RESULTADO = RESULTADO;
            params.ACCION = ACCION;
            params.SOLUCION = SOLUCION;
            params.NUMERO_OXT = NUMERO_OXT;
            params.COD_GRABACION = COD_GRABACION;
            params.COD_SERVICIO = COD_SERVICIO;
            params.TIPO_SERVICIO = TIPO_SERVICIO; 
            params.OBSERVACION = OBSERVACION; 
            params.USUARIO = $rootScope.currentUser.user_id;

            return AJAX.post(params);
        };

        this.BuscarTicketsDetalle = function(ID_ATENCION) {
            var params = BasicAPIObject.get(MODEL+'/BuscarTicketsDetalle', MODEL);
            params.ID_ATENCION = ID_ATENCION;
            return AJAX.post(params);
        };

        this.BuscarTickets = function(FechaDesde, FechaHasta, TIPO_BUSQUEDA, VALOR) {  
            var params = BasicAPIObject.get(MODEL+'/BuscarTickets', MODEL);
            params.FechaDesde = FechaDesde;
            params.FechaHasta = FechaHasta;   
            params.TIPO_BUSQUEDA = TIPO_BUSQUEDA;
            params.VALOR = VALOR; 
            params.USUARIO = $rootScope.currentUser.user_id;
 
            return AJAX.post(params);  
        };        

        this.BuscarAgentes = function() {  
            var params = BasicAPIObject.get(MODEL+'/BuscarAgentes', MODEL);
            params.Usuario = $rootScope.currentUser.user_id; 
            return AJAX.post(params);  
        };        


        this.grabaWarning = function(NOMBRE_WARNING, GLOSA_WARNING, FECHA_INICIO, FECHA_TERMINO, ESTADO) {
            var params = BasicAPIObject.get('General/grabaWarning', MODEL); 
            params.NOMBRE_WARNING = NOMBRE_WARNING;
            params.GLOSA_WARNING = GLOSA_WARNING;
            params.FECHA_INICIO = FECHA_INICIO;
            params.FECHA_TERMINO = FECHA_TERMINO; 
            params.ESTADO = 'A'; 
            params.Usuario = $rootScope.currentUser.user_id;
            console.log('grabaWarning:::',params);   
            return AJAX.post(params);
        };

        this.obtieneWarning = function() {
            var params = BasicAPIObject.get('General/obtieneWarning', MODEL);
            params.Usuario = $rootScope.currentUser.user_id;
            //console.log('obtieneWarning:::',params); 
            return AJAX.post(params);
        };

        this.obtieneLogConexion = function() {
            var params = BasicAPIObject.get('General/obtieneLogConexion', MODEL);
            params.Usuario = $rootScope.currentUser.user_id;
            //console.log('obtieneLogConexion:::',params);   
            return AJAX.post(params);
        };

        this.grabalogConexion = function(ESTADO) {
            var params = BasicAPIObject.get('General/grabalogConexion', MODEL);
            params.ESTADO = ESTADO;
            params.Usuario = $rootScope.currentUser.user_id;
            console.log('grabalogConexion:::',params);  
            return AJAX.post(params);
        };

        this.grabaAuditoria = function(ID, NOMBRE, ORDEN, RUT, RECIBE, DIRECCION, TIPO, PERMISOS, V_PLAN, SERVICIO_COMPANIA, VELOCIDAD, DECOS, AGREGA_DECOS, EXTENSORES, CABLEADO, DURACION, FECHA_HORA, PRODUCTOS, EPA, HablaCCI, MotivoLlamada, ExplicaTV, AgregarAudioBox, PlanEntelTV, EspaciosWIFI, ServicioCompania, Resumen, AppEntel, Despide, Pisos_Domicilio, CAE_TERRENO, MOTIVO_CAIDA, USUARIO_EVALUACION) {
            var params = BasicAPIObject.get('General/grabaAuditoria', MODEL);
            //console.log('Servicio Graba Imagen ');

            params.ID = ID;
            params.NOMBRE = NOMBRE;
            params.ORDEN = ORDEN;
            params.RUT = RUT;
            params.RECIBE = RECIBE;
            params.DIRECCION = DIRECCION;
            params.TIPO = TIPO;
            params.PERMISOS = PERMISOS;
            params.V_PLAN = V_PLAN;
            params.SERVICIO_COMPANIA = SERVICIO_COMPANIA; 
            params.VELOCIDAD = VELOCIDAD;
            params.DECOS = DECOS;
            params.AGREGA_DECOS = AGREGA_DECOS;
            params.EXTENSORES = EXTENSORES;
            params.CABLEADO = CABLEADO;
            params.DURACION = DURACION;
            params.FECHA_HORA = FECHA_HORA;
            params.PRODUCTOS = PRODUCTOS;
            params.EPA = EPA;
            params.HablaCCI = HablaCCI;
            params.MotivoLlamada = MotivoLlamada;
            params.ExplicaTV = ExplicaTV;
            params.AgregarAudioBox = AgregarAudioBox; 
            params.PlanEntelTV = PlanEntelTV;
            params.EspaciosWIFI = EspaciosWIFI;
            params.ServicioCompania = ServicioCompania;
            params.Resumen = Resumen;
            params.AppEntel = AppEntel;
            params.Despide = Despide; 
            params.Pisos_Domicilio = Pisos_Domicilio; 
            params.CAE_TERRENO = CAE_TERRENO;
            params.MOTIVO_CAIDA = MOTIVO_CAIDA;
            params.USUARIO_EVALUACION = USUARIO_EVALUACION; 
            //console.log('grabaAuditoria:::',params); 
            return AJAX.post(params);
        };


        this.getObservacionEtapa = function(oxt) {
            var params = BasicAPIObject.get('General/obtieneObservacionesEtapa', MODEL);
            params.NumeroOXT = oxt;
            return AJAX.post(params);  
        };

        this.setObservacionEtapa = function(id, observacion){
            var params = BasicAPIObject.get('General/GuardaObservacionesEtapa', MODEL);
            params.NumeroOXT = id;
            params.Usuario = $rootScope.currentUser.user_id;
            params.Observacion = observacion;
            //console.log('Enviado a observaciones etapa');
            //console.log(params);
            return AJAX.post(params);
        };

        this.BuscaOrdenesEvaluar = function(FechaDesde, FechaHasta, Agente, OTT) {
            var params = BasicAPIObject.get('General/BuscaOrdenesEvaluar', MODEL);
            params.FechaDesde = FechaDesde;
            params.FechaHasta = FechaHasta;  
            params.Rut = Agente;
            params.Oxt = OTT;
            return AJAX.post(params);
        };

        this.BuscaListadoAgentes = function() {
            var params = BasicAPIObject.get('General/BuscaListadoAgentes', MODEL);
            return AJAX.post(params);
        };
        /*************************************************************** */
        this.buscaID = function(){
            var params = BasicAPIObject.get('General/buscaID', MODEL);
            return AJAX.post(params);
        };

        this.GuardarTicketCetificacion = function(NUMERO_OXT, COD_SERVICIO, WO, SERVER_PROFILE, RANGOS_TR069, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, OBSERVACION) { 
            
            var params = BasicAPIObject.get(MODEL+'/GuardarTicketCetificacion', MODEL);

            params.NUMERO_OXT = NUMERO_OXT;
            params.COD_SERVICIO = COD_SERVICIO;
            params.WO = WO;
            params.SERVER_PROFILE = SERVER_PROFILE;
            params.RANGOS_TR069 = RANGOS_TR069;
            params.LAST_DOWN_CORRECTA = LAST_DOWN_CORRECTA;
            params.USERNAME = USERNAME;    
            params.PASSWORD = PASSWORD;
            params.OBSERVACION = OBSERVACION;
            params.USUARIO = $rootScope.currentUser.user_id;

            //console.log('params GuardarTicketCetificacion', params);    
            return AJAX.post(params);
        };

        this.ObtieneDatosDashBoardSupervisor = function(FechaDesde, FechaHasta) {  
            var params = BasicAPIObject.get(MODEL+'/ObtieneDatosDashBoardSupervisor', MODEL);
            params.FechaDesde = FechaDesde;
            params.FechaHasta = FechaHasta;   
            params.Usuario = $rootScope.currentUser.user_id;
            //console.log('params ObtieneDatosDashBoardSupervisor:::', params); 
            return AJAX.post(params);
        };

        this.ObtieneDatosDashBoardInicio = function() {
            var params = BasicAPIObject.get(MODEL+'/ObtieneDatosDashBoardInicio', MODEL);
            params.Usuario = $rootScope.currentUser.user_id;
            //console.log('params ObtieneDatosDashBoardInicio:::', params);
            return AJAX.post(params);
        };

        this.BuscarAtencionesAgente = function(FechaDesde, FechaHasta) { 
            var params = BasicAPIObject.get(MODEL+'/BuscarAtencionesAgente', MODEL);
            params.FechaDesde = FechaDesde;
            params.FechaHasta = FechaHasta;   
            params.USUARIO = $rootScope.currentUser.user_id;
            //console.log('params BuscarAtencionesAgente', params);  
            return AJAX.post(params);  
        };        

        this.CambiaEstadoBKP = function(ID, ESTADO, Observacion) { 
            var params = BasicAPIObject.get(MODEL+'/CambiaEstadoBKP', MODEL);
            params.TICKET = ID;  
            params.ESTADO = ESTADO;
            params.USUARIO = $rootScope.currentUser.user_id;
            params.Observacion = Observacion;
            return AJAX.post(params);
        };        

        this.BuscarSeguimientoBKP = function (ID){
            var params  = BasicAPIObject.get('General/BuscarSeguimientoBKP',MODEL);   
            params.ID = ID; 
            return AJAX.post(params)
        }

        this.ObtieneDetalleTickets = function(TICKET) {  
            var params = BasicAPIObject.get(MODEL+'/ObtieneDetalleTickets', MODEL);  
            params.TICKET = TICKET;  
            //console.log('params ObtieneDetalleTickets', params); 
            return AJAX.post(params); 
        };

        this.ObtieneTickets = function() {  
            var params = BasicAPIObject.get(MODEL+'/ObtieneTickets', MODEL); 
            params.USUARIO = $rootScope.currentUser.user_id;  
            //console.log('params ObtieneTickets', params);  
            return AJAX.post(params);
        };

        this.getGuardaImagen = function(save) {
            var params = BasicAPIObject.get('General/GuardaImagen', MODEL);
            //console.log('Servicio Graba Imagen ');
            params.ID = save.ID;
            params.TIPO = save.TIPO;
            params.IMAGEN = save.IMAGEN;
            params.USUARIO = save.USUARIO;
            params.Extencion = save.EXTENCION;
            //console.log('getGuardaImagen',params);
            return AJAX.post(params);
        };

        this.GuardarTicket = function(NUMERO_OXT, COD_SERVICIO, RESULTADO_PROVISION, WO, RESULTADO_CERTIFICACION, CODIGO_PADRE, VALIDACION_PROFILE_TR069, COLOR_ACTIVIDAD, RANGOS_TR069, IP, REINICIO_WAN, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, OBSERVACION) { 
            var params = BasicAPIObject.get(MODEL+'/GuardarTicket', MODEL);

            params.NUMERO_OXT = NUMERO_OXT;
            params.COD_SERVICIO = COD_SERVICIO;
            params.RESULTADO_PROVISION = RESULTADO_PROVISION;
            params.WO = WO;
            params.RESULTADO_CERTIFICACION = RESULTADO_CERTIFICACION;
            params.CODIGO_PADRE = CODIGO_PADRE;
            params.VALIDACION_PROFILE_TR069 = VALIDACION_PROFILE_TR069;
            params.COLOR_ACTIVIDAD = COLOR_ACTIVIDAD;
            params.RANGOS_TR069 = RANGOS_TR069;
            params.IP = IP;
            params.REINICIO_WAN = REINICIO_WAN;
            params.LAST_DOWN_CORRECTA = LAST_DOWN_CORRECTA;
            params.USERNAME = USERNAME;
            params.PASSWORD = PASSWORD;
            params.OBSERVACION = OBSERVACION;
            params.USUARIO = $rootScope.currentUser.user_id;

            //console.log('params GuardarTicket', params);   
            return AJAX.post(params);
        };

        this.ObtieneDatosOTT = function(NUMERO_OXT) { 
            var params = BasicAPIObject.get(MODEL+'/ObtieneDatosOTT', MODEL);
            params.NUMERO_OXT = NUMERO_OXT;  
            //console.log('params ObtieneDatosOTT', params); 
            return AJAX.post(params);
        };

        this.ObtieneGlosasBKP = function(TIPO_DATO) { 

            var params = BasicAPIObject.get(MODEL+'/ObtieneGlosasBKP', MODEL);
            params.TIPO_DATO = TIPO_DATO; 
            //console.log('params ObtieneGlosasBKP', params);  
            return AJAX.post(params);
        };

        this.GuardarAtencion = function(NUMERO_OXT, COD_SERVICIO, TIPO_SERVICIO, WO, TIPO_TRABAJO, SEGMENTO, RAZON_SOCIAL, PLANTILLA, EXTREMO_A, EXTREMO_B, NOMBRE_SOLICITANTE, TELEFONO_SOLICITANTE, AREA_SOLICITANTE, UNIDAD_SOLICITANTE, TIPO_LLAMADO, SOLICITUD, RESULTADO, HUELLA, SOLUCION, PROBLEMA_REPORTADO, APLICA_LLAMADA_CESOP, MOTIVO_LLAMADO, RESOLVIO_AUTOMATICAMENTE, REQUIERE_ESCALAMIENTO, A_QUIEN_ESCALO, TICKET_ESCALAMIENTO, REQUERIMIENTO_ONNET, ACCION, RESPONSABLE, TICKET, COD_GRABACION, OBSERVACION, MOTIVO_RESPONSABLE, NECESITA_FOCAL, FOCAL, PLATAFORMA) { 
            var params = BasicAPIObject.get(MODEL+'/GuardarAtencion', MODEL);

            params.NUMERO_OXT = NUMERO_OXT;
            params.COD_SERVICIO = COD_SERVICIO;
            params.TIPO_SERVICIO = TIPO_SERVICIO;
            params.WO = WO;
            params.TIPO_TRABAJO = TIPO_TRABAJO; 
            params.SEGMENTO = SEGMENTO;
            params.RAZON_SOCIAL = RAZON_SOCIAL;
            params.PLANTILLA = PLANTILLA;
            params.EXTREMO_A = EXTREMO_A;
            params.EXTREMO_B = EXTREMO_B;
            params.NOMBRE_SOLICITANTE = NOMBRE_SOLICITANTE;
            params.TELEFONO_SOLICITANTE = TELEFONO_SOLICITANTE;
            params.AREA_SOLICITANTE = AREA_SOLICITANTE;
            params.UNIDAD_SOLICITANTE = UNIDAD_SOLICITANTE;
            params.TIPO_LLAMADO = TIPO_LLAMADO;
            params.SOLICITUD = SOLICITUD;
            params.RESULTADO = RESULTADO;
            params.HUELLA = HUELLA;
            params.SOLUCION = SOLUCION;
            params.PROBLEMA_REPORTADO = PROBLEMA_REPORTADO;
            params.APLICA_LLAMADA_CESOP = APLICA_LLAMADA_CESOP;
            params.MOTIVO_LLAMADO = MOTIVO_LLAMADO;
            params.RESOLVIO_AUTOMATICAMENTE = RESOLVIO_AUTOMATICAMENTE; 
            params.REQUIERE_ESCALAMIENTO = REQUIERE_ESCALAMIENTO;
            params.A_QUIEN_ESCALO = A_QUIEN_ESCALO;
            params.TICKET_ESCALAMIENTO = TICKET_ESCALAMIENTO;
            params.REQUERIMIENTO_ONNET = REQUERIMIENTO_ONNET;
            params.ACCION = ACCION;
            params.RESPONSABLE = RESPONSABLE;
            params.TICKET = TICKET;
            params.COD_GRABACION = COD_GRABACION;
            params.OBSERVACION = OBSERVACION;
            params.MOTIVO_RESPONSABLE = MOTIVO_RESPONSABLE;
            params.USUARIO = $rootScope.currentUser.user_id;
            params.NECESITA_FOCAL = NECESITA_FOCAL;
            params.FOCAL = FOCAL;
            params.PLATAFORMA = PLATAFORMA;
            //console.log('params GuardarAtencion', params);   
            return AJAX.post(params);
        };
        this.ObtieneAccion = function(PLATAFORMA, TipoLlamado, Solicitud, Resultado) { 
            var params = BasicAPIObject.get(MODEL+'/ObtieneAccion', MODEL);
            params.PLATAFORMA = PLATAFORMA; 
            params.TipoLlamado = TipoLlamado; 
            params.Solicitud = Solicitud;
            params.Resultado = Resultado;
            params.USUARIO = $rootScope.currentUser.user_id;
            //console.log('params ObtieneAccion', params);  
            return AJAX.post(params);
        };
        this.ObtieneResultado = function(PLATAFORMA, TipoLlamado, Solicitud) { 
            var params = BasicAPIObject.get(MODEL+'/ObtieneResultado', MODEL);
            params.PLATAFORMA = PLATAFORMA; 
            params.TipoLlamado = TipoLlamado; 
            params.Solicitud = Solicitud;
            params.USUARIO = $rootScope.currentUser.user_id;
            //console.log('params ObtieneResultado', params); 
            return AJAX.post(params);
        };
        this.ObtieneSolicitud = function(PLATAFORMA, TipoLlamado) { 
            var params = BasicAPIObject.get(MODEL+'/ObtieneSolicitud', MODEL);
            params.PLATAFORMA = PLATAFORMA; 
            params.TipoLlamado = TipoLlamado; 
            params.USUARIO = $rootScope.currentUser.user_id;
            //console.log('params ObtieneSolicitud', params);
            return AJAX.post(params);
        };
        this.ObtieneTipoLlamado = function(PLATAFORMA) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneTipoLlamado', MODEL);
            params.PLATAFORMA = PLATAFORMA; 
            params.USUARIO = $rootScope.currentUser.user_id;
            console.log('params ObtieneTipoLlamado', params);
            return AJAX.post(params);
        };

        this.ObtieneMaterialApoyo = function(ID) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneMaterialApoyo', MODEL);
            params.ID = ID;
            //console.log('params ObtieneMaterialApoyo', params);
            return AJAX.post(params);
        };

        this.obtieneComentariosValoracionDetalle = function(id_func) {  
            var params = BasicAPIObject.get(MODEL+'/ObtieneComentariosValoracionDetalle', MODEL);
            params.ID_FLUJO  = id_func;
            return AJAX.post(params);
        };

        this.obtieneComentariosValoracion = function(id_func,Valoracion) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneComentariosValoracion', MODEL);
            params.Usuario          = $rootScope.currentUser.user_id;
            params.FechaDesde       = sharedProperties.getStart().format('YYYYMM');
            params.FechaHasta       = sharedProperties.getEnd().format('YYYYMM');
            params.ID_FLUJO  = id_func;
            params.VALORACION = Valoracion;
            return AJAX.post(params);
        };

        this.obtieneComentariosDashBoard = function(id_func) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneComentariosDashBoard', MODEL);
            params.Usuario          = $rootScope.currentUser.user_id;
            params.FechaDesde       = sharedProperties.getStart().format('YYYYMM');
            params.FechaHasta       = sharedProperties.getEnd().format('YYYYMM');
            params.IdFuncionalidad  = id_func;
            return AJAX.post(params);
        };

        this.guardaComentariosDashBoard = function(msg, id_func, mod) {
            var params = BasicAPIObject.get(MODEL+'/GuardaComentariosDashBoard', MODEL);
            params.USUARIO            = $rootScope.currentUser.user_id;
            params.FECHA_FILTRO_DESDE = sharedProperties.getStart().format('YYYYMMDD');
            params.FECHA_FILTRO_HASTA = sharedProperties.getEnd().format('YYYYMMDD');
            params.TIPO_COMENTARIO    = mod;
            params.ID_FUNCIONALIDAD   = id_func;
            params.COMENTARIO         =  msg;
            return AJAX.post(params);
        };

        this.ObtieneResumenDashBoard = function(fechad, fechah, tramo) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneResumenDashBoard', MODEL);
            params.FechaDesde = fechad;
            params.FechaHasta = fechah;
            params.Tipo = "";
            params.Tramo = 'PM';
            return AJAX.post(params);
        };

        this.ObtieneDashboardEvaluacion = function(Fecha, IdPregunta) {
            var params = BasicAPIObject.get(MODEL+'/obtieneDashboardEvaluacion', MODEL);
            params.Fecha = Fecha;
            params.IdPregunta = IdPregunta;
            return AJAX.post(params);   
        };

        this.ObtieneResumenGrafico = function(fechad, Segmento) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneResumenGrafico', MODEL);
            params.Segmento = Segmento;
            return AJAX.post(params);
        };
        /****************************************** */
        this.ObtieneDatosDashBoard = function(FechaDesde, FechaHasta, Servicio) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneDatosDashBoard', MODEL);
            params.Usuario = $rootScope.currentUser.user_id;  
            params.FechaDesde = FechaDesde; 
            params.FechaHasta = FechaHasta; 
            params.Servicio = Servicio;  
            //console.log('params ObtieneDatosDashBoard:::', params);  
            return AJAX.post(params);
        };
        this.ObtieneNombreFlujo = function(IdFlujo) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneNombreFlujo', MODEL);
            params.IdFlujo = IdFlujo;
            return AJAX.post(params);
        };

        this.ObtieneFlujo = function(Tipificacion) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneFlujoBkp', MODEL);
            params.Tipificacion = Tipificacion;
            return AJAX.post(params);
        };

        this.ObtieneDetalle = function(Producto, Tema) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneDetalles', MODEL);
            params.Producto = Producto;
            params.Tema = Tema;
            return AJAX.post(params);
        };

        this.ObtieneTemas = function(Producto) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneTemas', MODEL);
            params.Producto = Producto;
            return AJAX.post(params);
        };

        this.ObtieneProductos = function() {
            var params = BasicAPIObject.get(MODEL+'/ObtieneProductosBkp', MODEL);
            return AJAX.post(params);
        };

        this.ObtieneProcedimientosRecurrentes = function() {
            var params = BasicAPIObject.get(MODEL+'/ObtieneProcedimientosRecurrentes', MODEL);
            return AJAX.post(params);
        };
        this.ObtieneSiguienteProceso = function(IdFlujo, IdProceso, SOLICITANTE, SOLICITUD_PARA, TIPO) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneSiguienteProceso', MODEL);
            params.IdFlujo = IdFlujo;
            params.IdProceso = IdProceso;
            params.SOLICITANTE = SOLICITANTE;
            params.SOLICITUD_PARA = SOLICITUD_PARA;    
            params.TIPO = TIPO;
            params.USUARIO = $rootScope.currentUser.user_id;
            //console.log('params ObtieneSiguienteProceso:::', params);   
            return AJAX.post(params);  
        };
        this.getGrabaAtencion = function(USUARIO, ID_FLUJO, ticket1) {
            var params = BasicAPIObject.get('General/IngresaAtencion', MODEL);
            params.ID_FLUJO = ID_FLUJO; 
            params.USUARIO = USUARIO;
            params.TICKET = ticket1;
            return AJAX.post(params);
        };
        this.getGrabaEvaluacion = function(ID_FLUJO, USUARIO, VALORACION, OBSERVACION) {
            var params = BasicAPIObject.get('General/IngresaEvaluacion', MODEL);
            params.ID_FLUJO = ID_FLUJO;
            params.USUARIO = USUARIO;  
            params.VALORACION = VALORACION;
            params.OBSERVACION = OBSERVACION;
            return AJAX.post(params);
        };
        this.ObtieneGlosas = function(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO){
            var params = BasicAPIObject.get(MODEL+'/ObtieneGlosas', MODEL);
            params.ID_FLUJO = ID_FLUJO;
            params.SOLICITANTE = SOLICITANTE;
            params.SOLICITUD_PARA = SOLICITUD_PARA;
            params.TIPO = TIPO;
            return AJAX.post(params);
        };

        this.ObtieneEvaluacion = function(fechad, IdPregunta) {
            var params = BasicAPIObject.get(MODEL+'/ObtieneEvaluacion', MODEL);
            params.Fecha = fechad;
            params.IdPregunta = IdPregunta;
            console.log(params);
            return AJAX.post(params);
        };
        this.ObtieneEvaluacionUp = function(fechad, IdPregunta) {   
            var params = BasicAPIObject.get(MODEL+'/ObtieneEvaluacionUp', MODEL);
            params.Fecha = fechad;
            params.IdPregunta = IdPregunta;
            console.log(params);
            return AJAX.post(params);
        };
        
        this.ObtienePreguntas = function(fechad, Segmento) {
            var params = BasicAPIObject.get(MODEL+'/ObtienePreguntas', MODEL);
            params.Segmento = Segmento;
            return AJAX.post(params);
        };

        this.ObtieneReclamos = function() {
            var params = BasicAPIObject.get(MODEL+'/obtieneReclamos', MODEL);
            return AJAX.post(params);
        };

        this.ObtieneCausaReclamos = function(Reclamo) {
            var params = BasicAPIObject.get(MODEL+'/obtieneCausaReclamos', MODEL);
            params.Reclamo = Reclamo;
            return AJAX.post(params);
        };
        this.grabaResultado = function(data) {
            var params = BasicAPIObject.get(MODEL+'/GuardaResultado', MODEL);
            params.NumeroOXT = data.NumeroOXT;
            params.FechaEncuesta = data.FechaEncuesta;   
            params.Nota = data.Nota;
            params.DetalleReclamo = data.DetalleReclamo;
            params.ClienteReclama = data.ClienteReclama;
            params.Causa = data.Causa;
            return AJAX.post(params);  
        };
        this.grabaAnalisis = function(data) {
            var params = BasicAPIObject.get(MODEL+'/GuardaAnalisis', MODEL);
            params.NumeroOXT = data.NUMERO_OXT;
            params.FechaEncuesta = data.FECHA_ENCUESTA;   
            params.Analisis = data.ANALISIS;
            return AJAX.post(params);  
        };

    }
])

.service('GeneralConfirmacion', ['AJAX', 'BasicAPIObject', '$cookies', 'CONSTANTS',
    function(AJAX, BasicAPIObject, $cookies, CONSTANTS) {
        var MODEL = 'General';

        this.obtieneDetalleFEI = function(ID) {
            var params = BasicAPIObject.get(MODEL+'/obtieneDetalleFEI', MODEL);
            params.NumeroOxt = ID;
            return AJAX.post(params);
        };
        this.obtieneDetalleAtts = function(ID) {
            var params = BasicAPIObject.get(MODEL+'/obtieneEncuestas_ATTS', MODEL);
            params.oTT = ID;
            return AJAX.post(params);
        };
        
        this.obtieneDetalleBoletas = function(ID) {
            var params = BasicAPIObject.get(MODEL+'/obtieneEncuestas_Boletas', MODEL);
            params.oTT = ID;
            return AJAX.post(params);
        };        

        this.obtieneDetalleDerivaciones = function(ID) {
            var params = BasicAPIObject.get(MODEL+'/obtieneEncuestas_Derivaciones', MODEL);
            params.oTT = ID;
            return AJAX.post(params);
        };        
        
    }
])


.service('Admin', ['AJAX', 'BasicAPIObject', 'CONSTANTS',
    function(AJAX, BasicAPIObject, CONSTANTS) {

        var MODEL = 'Account';
        //login
        this.login = function(run, password) {
            var params = BasicAPIObject.get(MODEL+'/Ingresar', MODEL);
            params.User = run;
            params.Pass = password;

            return AJAX.post(params);
        }

    }
])

.service('AuthService', ['$q', '$http', 'CONSTANTS', '$localStorage', 'Admin', '$rootScope', '$sessionStorage',

    function($q, $http, CONSTANTS, $localStorage, Admin, $rootScope, $sessionStorage) {
        var isAuthenticated = false;
        var authToken;
        $rootScope.currentUser = {};

        var login = function(user) {
            return $q(function(resolve, reject) {
                if(CONSTANTS.ENVIROMENT_DEBUG_SESS==false){
                    var lo = Admin.login(user.run,user.password);   
                    lo.then(
                        function(result) {
                            if (result.data.success == true) {
                                var portabilidadDash = {
                                    is_ok: true,
                                    token: "xxyyyyy",
                                    Id: result.data.data.user_id,
                                    Nombre: result.data.data.user_name,
                                    profile: result.data.data.profile,
                                }
                                console.log('--------------------');
                                console.log(result.data.data.profile);
                                console.log('--------------------');

                                storeUserCredentials(portabilidadDash);  
                                loadUserCredentials();
                                resolve(result.data);
                            } else {
                                reject(result.data); 
                            }
                        },
                        function(r) {
                            var data = {  
                                mensaje: r.data.mensaje
                            }
                        reject(data);
                        }
                    );
                }
                else{
                    var portabilidadDash = {
                        is_ok: true,
                        token: "xxyyyyy",
                        Id: 110000,
                        Nombre: "Cristian Valenzuela"
                    }

                    storeUserCredentials(portabilidadDash);
                    loadUserCredentials();
                    resolve(portabilidadDash);

                }
            });
        };

        var logout = function() {
            destroyUserCredentials();
        };

        function loadUserCredentials() {
            var data = $localStorage.portabilidadDash;

            var token = data ? data.token : '';

            if ($localStorage.portabilidadDash) {
                $rootScope.currentUser = {};
                $rootScope.currentUser.user_id = $localStorage.portabilidadDash.Id;
                $rootScope.currentUser.user_name = $localStorage.portabilidadDash.Nombre;
                $rootScope.currentUser.token = $localStorage.portabilidadDash.token;
                $rootScope.currentUser.profile = $localStorage.portabilidadDash.profile;

                //console.log("$rootScope.currentUser.profile:: ",$rootScope.currentUser.profile)
            }

            if (token) {
                useCredentials(token);
            }
        }

        function storeUserCredentials(portabilidadDash) {
            $localStorage.portabilidadDash = portabilidadDash;
            useCredentials(portabilidadDash.token);
        }

        function useCredentials(token) {
            isAuthenticated = true;
            authToken = token;

            // Set the token as header for your requests!
            // $http.defaults.headers.common.Authorization = authToken;
        }

        function destroyUserCredentials() {
            authToken = undefined;
            isAuthenticated = false;
            $http.defaults.headers.common.Authorization = undefined;
            delete $localStorage.portabilidadDash;
            console.log('entro de nuevo?')
            $sessionStorage.$reset();
            window.location = CONSTANTS.ENDPOINT_LOGIN
        }



        loadUserCredentials();

        return {
            login: login,
            // register: register,
            logout: logout,
            isAuthenticated: function() {
                return isAuthenticated;
            }
        };
    }
])

.factory('AuthInterceptor', ['$rootScope', '$q', 'CONSTANTS',
    function($rootScope, $q, CONSTANTS) {
        return {
            responseError: function(response) {
                $rootScope.$broadcast({
                    401: CONSTANTS.AUTH_EVENTS.notAuthenticated,
                }[response.status], response);
                return $q.reject(response);
            }
        }
    }
])




.service('sweetService', ['CONSTANTS',
    function(CONSTANTS) {

        //RUT
        this.error = function (list) {
            var _tmp="<center><div class='' style='text-align: left;width:200px'>";
            for(var i=0;i<list.length;i++){
                _tmp += "<br /><li style='color:red'>Verfique: "+list[i];
            }
            _tmp += "</div></center>";
            swal({
                title: "Error!",
                text: ""+_tmp,
                type: "error",
                html: true,
                confirmButtonText: "CERRAR"
            });
        }
    }
])




/****************************************************
 *  Servicios validadores
 ***************************************************/

.service('formatValidateService', ['CONSTANTS',
    function(CONSTANTS) {
        var _dv  = function(T){
            var M=0,S=1;
            for(;T;T=Math.floor(T/10))
                S=(S+T%10*(9-M++%6))%11;
            return S?S-1:'k';
        }

        //RUT
        this.rut = function (prut) {
            console.log("rut::"+prut)
            prut = prut.replace(/\./g,'');
            if (!/^[0-9]+-[0-9kK]{1}$/.test( prut ))
                return false;
            var tmp 	= prut.split('-');
            var digv	= tmp[1];
            var rut 	= tmp[0];
            if ( digv == 'K' ) digv = 'k' ;
            return (_dv(rut) == digv );
        }
        //MAIL
        this.mail = function (valor) {
            console.log("MAIL:"+valor)
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(valor);
        }
    }
])

.service('formatService', ['CONSTANTS',
    function(CONSTANTS) {
        this.ucfirst = function (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : ''
        }
        this.msformat = function (x) {
            var _re = /\/Date\(([0-9]*)\)\//;
            var m = x.match(_re);
            if( m ) return new Date(parseInt(m[1]));
            else return null;
        }
    }
])


.service('validateFormService', ['CONSTANTS', 'formatService',
    function(CONSTANTS, format) {
        this.generateCombo = function (form, key) {
            var _list = {};
            for (var name in form) {
                if(typeof form[name] === 'object'){
                    _list[name] = [];
                    _list[name] = [
                            {
                                id: 0
                            }
                    ];
                    _list[name][0][key] = 'Seleccione ' + format.ucfirst(name)
                    form[name] = _list[name][0];
                }

		    }
            return _list;
        }

        this.getObjectCombo = function(codigo, list){
            for (var i=0;i<list.length;i++) {
                var it = list[i];
                if(it.Codigo == codigo || it.Id == codigo){
                    return it;
                }
            }
            return {};
        }

        this.validateNull = function(form, validfields, exceptions){
            var _listError = [];
            var _exceptions = exceptions||[];
            for (var name in validfields) {
                if(_exceptions.indexOf(name) == -1){

                    if(typeof form[name] === 'object'){
                        if(form[name] && form[name].id==0){
                            _listError.push(format.ucfirst(name));
                        }
                    }else{
                        console.log("name --- "+name+' --- ',form[name])
                        if(!form[name] || form[name]==""){
                            _listError.push(format.ucfirst(name));
                        }
                    }

                }
            }
            return _listError;
        }
    }
])

/****************************************************
 *  Servicios propios del dashbaord
 ***************************************************/


.service('sbaseproject', [
    function() {

        var options = {

            //Add slimscroll to navbar menus
            //This requires you to load the slimscroll plugin
            //in every page before app.js
            navbarMenuSlimscroll: true,
            navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
            navbarMenuHeight: "200px", //The height of the inner menu
            //General animation speed for JS animated elements such as box collapse/expand and
            //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
            //'fast', 'normal', or 'slow'
            animationSpeed: 500,
            //Sidebar push menu toggle button selector
            sidebarToggleSelector: "[data-toggle='offcanvas']",
            //Activate sidebar push menu
            sidebarPushMenu: false,
            //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
            sidebarSlimScroll: true,
            //Enable sidebar expand on hover effect for sidebar mini
            //This option is forced to true if both the fixed layout and sidebar mini
            //are used together
            sidebarExpandOnHover: false,
            //BoxRefresh Plugin
            enableBoxRefresh: true,
            //Bootstrap.js tooltip
            enableBSToppltip: true,
            BSTooltipSelector: "[data-toggle='tooltip']",
            //Enable Fast Click. Fastclick.js creates a more
            //native touch experience with touch devices. If you
            //choose to enable the plugin, make sure you load the script
            //before AdminLTE's app.js
            enableFastclick: true,
            //Control Sidebar Options
            enableControlSidebar: true,
            controlSidebarOptions: {
                //Which button should trigger the open/close event
                toggleBtnSelector: "[data-toggle='control-sidebar']",
                //The sidebar selector
                selector: ".control-sidebar",
                //Enable slide over content
                slide: true
            },
            //Box Widget Plugin. Enable this plugin
            //to allow boxes to be collapsed and/or removed
            enableBoxWidget: true,
            //Box Widget plugin options
            boxWidgetOptions: {
                boxWidgetIcons: {
                    //Collapse icon
                    collapse: 'fa-minus',
                    //Open icon
                    open: 'fa-plus',
                    //Remove icon
                    remove: 'fa-times'
                },
                boxWidgetSelectors: {
                    //Remove button selector
                    remove: '[data-widget="remove"]',
                    //Collapse button selector
                    collapse: '[data-widget="collapse"]'
                }
            },
            //Direct Chat plugin options
            directChat: {
                //Enable direct chat by default
                enable: true,
                //The button to open and close the chat contacts pane
                contactToggleSelector: '[data-widget="chat-pane-toggle"]'
            },
            //Define the set of colors to use globally around the website
            colors: {
                lightBlue: "#3c8dbc",
                red: "#f56954",
                green: "#00a65a",
                aqua: "#00c0ef",
                yellow: "#f39c12",
                blue: "#0073b7",
                navy: "#001F3F",
                teal: "#39CCCC",
                olive: "#3D9970",
                lime: "#01FF70",
                orange: "#FF851B",
                fuchsia: "#F012BE",
                purple: "#8E24AA",
                maroon: "#D81B60",
                black: "#222222",
                gray: "#d2d6de"
            },
            //The standard screen sizes that bootstrap uses.
            //If you change these in the variables.less file, change
            //them here too.
            screenSizes: {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200
            },
            //skins available
            skins: [
                "skin-blue",
                "skin-black",
                "skin-red",
                "skin-yellow",
                "skin-purple",
                "skin-green",
                "skin-blue-light",
                "skin-black-light",
                "skin-red-light",
                "skin-yellow-light",
                "skin-purple-light",
                "skin-green-light"
            ]
        }

        var pushMenu = {
            activate: function(toggleBtn) {
                //Get the screen sizes
                var screenSizes = options.screenSizes;

                //Enable sidebar toggle
                $(toggleBtn).on('click', function(e) {
                    e.preventDefault();

                    //Enable sidebar push menu
                    if ($(window).width() > (screenSizes.sm - 1)) {
                        if ($("body").hasClass('sidebar-collapse')) {
                            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                        } else {
                            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                        }
                    }
                    //Handle sidebar push menu for small screens
                    else {
                        if ($("body").hasClass('sidebar-open')) {
                            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                        } else {
                            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                        }
                    }
                });

                $(".content-wrapper").click(function() {
                    //Enable hide menu when clicking on the content-wrapper on small screens
                    if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
                        $("body").removeClass('sidebar-open');
                    }
                });

                //Enable expand on hover for sidebar mini
                if (options.sidebarExpandOnHover ||
                    ($('body').hasClass('fixed') &&
                        $('body').hasClass('sidebar-mini'))) {
                    this.expandOnHover();
                }
            },

            expandOnHover: function() {
                var _this = this;
                var screenWidth = options.screenSizes.sm - 1;
                //Expand sidebar on hover
                $('.main-sidebar').hover(function() {
                    if ($('body').hasClass('sidebar-mini') &&
                        $("body").hasClass('sidebar-collapse') &&
                        $(window).width() > screenWidth) {
                        _this.expand();
                    }
                }, function() {
                    if ($('body').hasClass('sidebar-mini') &&
                        $('body').hasClass('sidebar-expanded-on-hover') &&
                        $(window).width() > screenWidth) {
                        _this.collapse();
                    }
                });
            },

            expand: function() {
                $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
            },

            collapse: function() {
                if ($('body').hasClass('sidebar-expanded-on-hover')) {
                    $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
                }
            }
        }

        return {
            options: options,
            pushMenu: pushMenu
                //layout: layout,
        }
    }
])


/**
 * Tools in common for the whole site
 */
.service('Tools', function(toaster, CONSTANTS) {

    /************************************
     *	Format time string
     ***********************************/

    /**
     * convert sec to min
     */
    this.secondToMinutes = function(timeInSeconds) {
        var minutes = parseInt(timeInSeconds / 60);
        return minutes;
    };

    /**
     * get the date of {input} days ago
     */
    this.getPastDate = function(days) {
        return moment().subtract(days, 'days').format('YYYY/MM/DD hh:mm');
    };

    /************************************
     *	Format currency
     ***********************************/

    /**
     * convert cents to dollar without prefixing the currency symbol
     */
    this.centsToDollars = function(cents) {
        var dollars;
        cents = parseInt(cents);
        dollars = parseFloat(cents / 100).toFixed(2);
        return dollars;
    };

    /**
     * convert dollar to cent without prefixing the currency symbol
     */
    this.dollarsToCents = function(dollars) {
        var cents;
        dollars = parseFloat(dollars);
        cents = parseInt(dollars * 100);
        return cents;
    };

    /**
     * format dollar to 2 decimals without prefixing the currency symbol
     */
    this.dollarFormated = function(dollars) {
        dollars = parseFloat(dollars).toFixed(2);
        return dollars;
    };

    /************************************
     *	Format phone number
     ***********************************/

    /**
     * Format phone number
     */
    this.phoneNumberFormat = function(phoneNumber) {
        return phoneNumber.replace(/(\d{1,3})(\d{3})(\d{3})(\d{4})/, '+$1 $2-$3-$4');
    };

    /************************************
     *	Format data usage string
     ***********************************/

    /**
     * convert byte number to either kb or mb
     */
    this.getBytesString = function(bytes) {
        var bytes;
        if (bytes < 1024) {
            return bytes + " bytes";
        } else if (bytes < 1048576) {
            bytes /= 1024;
            bytes = parseInt(bytes);
            return bytes + " KB";
        } else {
            bytes /= 1048576;
            bytes = parseInt(bytes);
            return bytes + " MB";
        }
    };

    /**
     * convert byte number to icon flag
     * output will be 'high', 'medium', or 'low'
     * to use these flags, refer to:
     * <div class="image-icons data-low" ng-if="data.icon=='low'"></div>
     */
    this.getBytesUsageIconFlag = function(bytes) {
        //first benchmark at 5mb
        var benchmark1 = 1024 * 1024 * 5;
        //second benchmark at 10mb
        var benchmark2 = 1024 * 1024 * 10;
        if (bytes <= benchmark1) {
            return "low";
        } else if (bytes > benchmark1 && bytes <= benchmark2) {
            return "medium";
        } else {
            return "high";
        }
    };

    /************************************
     *	Format url encoded string
     ***********************************/

    /**
     * decode url encoded string and replace + with space
     */
    this.getNumbersFromString = function(str) {
        return str.match(/\d+/);
    };

    this.decodeFields = function(obj) {
        var newObj = {};
        angular.forEach(obj, function(value, key) {
            if (typeof value == 'string') {
                value = decodeURIComponent(value.replace(/\+/g, ' '));
            }
            this[key] = value;

        }, newObj);
        return newObj;
    };

    /************************************
     *	pagination helpers
     ***********************************/

    /**
     * calculate starting position
     */
    this.getPaginationStartPosition = function(currentPage) {
        return currentPage == 1 ? 0 : (currentPage - 1) * CONSTANTS.PAGINATION_MAX_NUMBER;
    };

    /************************************
     *	Show notifications
     ***********************************/

    /**
     * show notifications
     * type can be:
     */
    this.showNotification = function(type, message) {
        switch (type) {
            case 'success':
                toaster.success({
                    title: "Success",
                    body: message,
                    showCloseButton: true
                });
                break;
            case 'error':
                toaster.error({
                    title: "Error",
                    body: message,
                    showCloseButton: true
                });
                break;
            default:
                alert("Please define a notification type");
        }
    };

    // take count of how many connection error has been triggered.
    // if more than 1, then just show one toaster
    var connectionErrorCount = 0;

    this.showConnectionDownNotification = function() {
        if (connectionErrorCount < 1) {
            toaster.error({
                title: "Error",
                body: "Cannot communicate to the API service.",
                showCloseButton: true,
                onShowCallback: function() {
                    connectionErrorCount++;
                },
                onHideCallback: function() {
                    connectionErrorCount--;
                }
            });
        }
    };
})

/**
 * Date Tools
 */
.service('DateTools', function() {

    this.formatDate = function(date, format) {
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var year = date.getFullYear();
        var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        if (format == 'yyyy/mm/dd hh:mm:ss') {
            return year + '/' + month + '/' + day + ' ' + time;
        }
    };
})


;


 //------------------------------------------------------- 

/**
 * Modal Personal Information
 */
angular.module('view-detail-modal', [])         

.controller('viewEvaluacionTecnico', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'General', 'CONSTANTS', 
function ($scope, $timeout, $rootScope, $uibModalInstance, params, modalFactory, General, CONSTANTS) {
	$scope.data = params;

    $scope.EVALUACION_POSITIVA='';
	$scope.EVALUACION_NEGATIVA=''; 

	$scope.guardaEvaluacionTecnico=function(NOMBRE_SOLICITANTE, EVALUACION_POSITIVA, EVALUACION_NEGATIVA, observacion) {

	  
		if (NOMBRE_SOLICITANTE==undefined || NOMBRE_SOLICITANTE==''){  
	
		  sweetAlert("Atención", 'Debes ingresar técnico a evaluar', "warning");
			return; 
	
        }else { 
	  
		General.guardaEvaluacionTecnico($rootScope.TICKET_TIPI, NOMBRE_SOLICITANTE, EVALUACION_POSITIVA, EVALUACION_NEGATIVA, observacion).then(  
		function(result){  
	  //console.log('Resultado de cambioa estad RAM:::['+result.data.success+']['+result.data.mensaje+']');
			  if(result.data.success == true){
				//Mensaje de ingreso existoso
				swal({
				  title: "Excelente!", 
				  text: result.data.mensaje, 
				  type: "success",
				  showCancelButton: false,
				  confirmButtonColor: "#A5DC86",
				  //confirmButtonText: "Aceptar",
				  confirmButtonText: "Aceptar",
				  //cancelButtonText: "No por ahora",
				  closeOnConfirm: true,
				  closeOnCancel: true
				  
				},
				  function(isConfirm){  
					  if (isConfirm) {   
						$scope.cancel();
						  $rootScope.CargandoGral = false;    
					  } else {
						$rootScope.CargandoGral = false;
						$scope.cancel();
					  }
				  });
	  
			  }else{
				sweetAlert("Excelente", result.data.mensaje, "success");
			  }
			},
			function(r){ 
			  sweetAlert("Lo Siento =(!", "Error  en insertar datos:", "error");
			}
			)
		  }
    }


	$scope.cancel = function () {
	$uibModalInstance.dismiss();
};


}
])

.controller('productosController', ['$scope', '$uibModalInstance', 'params', '$rootScope', 'CONSTANTS', '$filter', 'General', 
function($scope, $uibModalInstance, params, $rootScope, CONSTANTS, $filter, General){  

$scope.imagen = CONSTANTS.IMAGE_PATH;  
console.log ('$rootScope.ID_BOT: ', $rootScope.ID_BOT);

//$rootScope.ID_BOT = '3298121';  

var vm = this;  
//$scope.ID = "1223818";
$scope.err_msg = ""; 
$scope.isError = 0;
$scope.isCargando = false;     
$scope.validacion = false;
$scope.isConsulta = false;
$scope.isConsultaFiltro = true;     
$scope.Nombre = ''; 
$scope.Email = ''; 
$scope.Contacto = '';
$scope.TelefonoContacto = '';
$scope.Mensaje = '';
$scope.NUMERO_OXT = '';
$scope.ESTADO_RAM = '';
$scope.TIPO_CONFIRMACION = ''; 
$scope.PRODUCTO = '';

$scope.Op1 = '';  
$scope.Op2 = '';
$scope.Op3 = '';
$scope.Op4 = '';
$scope.Op5 = '';
$scope.Op6 = '';
$scope.Op7 = '';
$scope.Op8 = '';
$scope.Op9 = ''; 
$scope.Op10 = '';
$scope.imagePath = './assets/';      


$scope.obtieneObservacionesOXT = function () { 
	console.log('$rootScope.ID_BOT:::'+$rootScope.ID_BOT);   
	General.getObservacionEtapaBOT($rootScope.ID_BOT).then(    
		function (ficha) {
			//console.log('Consulta existosa Observación');
			//console.log(ficha.data)
			if (ficha.data.success == true) {
				$scope.dataObs = ficha.data.data;
			}
		},
		function (r) {
			//console.log('Consulta NO existosa Observación');

			$rootScope.CargandoGral = false;
		}
	);
}


$scope.obtieneObservacionesOXT();

//# Fn cerrar Modal
$scope.cancel = function () {
	$uibModalInstance.dismiss('cancel');       
};
}
])

.controller('ContrllerImagen', ['$scope','Excel','$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'General', 'CONSTANTS', 
function ($scope, Excel,$timeout, $rootScope, $uibModalInstance, params, modalFactory,  General, CONSTANTS) {
 
	console.log('$rootScope.Imagen :::', $rootScope.Imagen);   

 
$scope.cancel = function () {
	$uibModalInstance.dismiss();
};


}
])

.controller('ModalInstanceObservacionesCtrl', ['$scope', '$uibModalInstance', 'params', '$rootScope', 'General', 'CONSTANTS', '$filter',
function ($scope, $uibModalInstance, params, $rootScope, General, CONSTANTS, $filter) {
	$scope.showField = false;

	$scope.data = params;
	//console.log(params)
	console.log('$rootScope.REQUERIMIENTOID::: ', $rootScope.REQUERIMIENTOID)

	//# Fn cerrar Modal
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	//# Fn guardar acción
	$scope.saveObservacionEtapa = function (ID, Observacion) {

		//Observacion = Observacion.toString().replace("\r\n","-br/-").replace("\n\r","-br/-").replace("\r","-br/-").replace("\n","-br/-").replace("\n","-br/-").replace("\n","-br/-").replace("\n","-br/-");

		console.log('ID:::' + ID + ' Observacion:::' + Observacion);
		$rootScope.CargandoGral = true;
		// # Servicio Guardar accion, observacion
		var promiseAccion = General.setObservacionEtapa($rootScope.REQUERIMIENTOID, Observacion); 
		$scope.Observacion = "";

		promiseAccion.then( 
			function (result) {
				$rootScope.CargandoGral = false;
				if (result.data.success == false) {
					sweetAlert("Lo Siento =(!", "La operación no pudo llevarse a cabo!:", result.data.mensaje, "warning");
				} else {
					$scope.obtieneObservacionesOXT();
					sweetAlert("Exito!", "La observacíon se ha guardado exitosamente!", "success");
				}
				//sweetAlert("Lo Siento =(!", "La operación no pudo llevarse a cabo!:"+result.mensaje, "error");
			},
			function (r) {
				$scope.err_msg = r;
				$scope.isError = 1;
				$rootScope.CargandoGral = false;
				sweetAlert("Lo Siento =(!", "La operación no pudo llevarse a cabo!", result.data.mensaje, "warning");
			}
		);

	};

	$scope.obtieneObservacionesOXT = function () {
		////console.log('$scope.data.NUMERO_OXT:::'+$scope.data.NUMERO_OXT);
		General.getObservacionEtapa($rootScope.REQUERIMIENTOID).then(
			function (ficha) {
				//console.log('Consulta existosa Observación');
				//console.log(ficha.data)
				if (ficha.data.success == true) {
					$scope.dataObs = ficha.data.data;
				}
			},
			function (r) {
				//console.log('Consulta NO existosa Observación');

				$rootScope.CargandoGral = false;
			}
		);
	}
	$scope.obtieneObservacionesOXT();


}
])

.controller('ContrllerFormularioCambiaEstado', ['$scope','Excel','$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'General', 'CONSTANTS', 
function ($scope, Excel,$timeout, $rootScope, $uibModalInstance, params, modalFactory,  General, CONSTANTS) {
 
	//console.log('$rootScope.NUMERO_OXT',$rootScope.NUMERO_OXT);   


	$scope.ObtieneGlosas = function(TIPO_DATO){    


	General.ObtieneGlosasBKP(TIPO_DATO).then(function(r){   
		if(r.data.success==true){
			$rootScope.EstadoRam = r.data.data;  
		}
		else{
			$rootScope.EstadoRam = [];  
		}
	},
	function (error){
		$rootScope.EstadoRam = [];   
	});
	}

	$scope.ObtieneGlosas('ESTADO_TICKET'); 


	$scope.CambiaEstadoBKP=function(ID, Estado, Observacion) {
		$rootScope.ID =ID;
		$rootScope.Estado =Estado;
	
	  
		if ($rootScope.Estado==undefined || $rootScope.Estado=='0'){
	
		  sweetAlert("Atención", 'Debes de Indicar un estado para continuar', "warning");
			return; 
	
        }else { 
	  
	//console.log('ACTUALIZAR ESTADO: ['+$rootScope.NumeroOXT+']['+$rootScope.EstadoRam+']['+$rootScope.USUARIO+']');
		General.CambiaEstadoBKP($rootScope.ID, $rootScope.Estado, Observacion).then(  
		function(result){  
	  //console.log('Resultado  de cambioa estad RAM:::['+result.data.success+']['+result.data.mensaje+']');
			  if(result.data.success == true){
				$rootScope.LoadListaGrilla();
				//Mensaje de ingreso existoso
				swal({
				  title: "Excelente!", 
				  text: result.data.mensaje,
				  type: "success",
				  showCancelButton: false,
				  confirmButtonColor: "#A5DC86",
				  //confirmButtonText: "Aceptar",
				  confirmButtonText: "Aceptar",
				  //cancelButtonText: "No por ahora",
				  closeOnConfirm: true,
				  closeOnCancel: true
				  
				},
				  function(isConfirm){  
					  if (isConfirm) {   
						$rootScope.LoadListaGrilla();
						$scope.cancel();
						  $rootScope.CargandoGral = false;    
					  } else {
						$rootScope.CargandoGral = false;
						$rootScope.LoadListaGrilla();
						$scope.cancel();

					  }
				  });
	  
			  }else{
				sweetAlert("Excelente", result.data.mensaje, "success");
				$rootScope.LoadListaGrilla();
			  }
			},
			function(r){ 
			  sweetAlert("Lo Siento =(!", "Error  en insertar datos:", "error");
			}
			)
		  }
    }

 
$scope.cancel = function () {
	$uibModalInstance.dismiss();
};


}
])

.controller('ModalInstanceCtrlSeguimiento', ['$scope', '$uibModalInstance', 'params', '$rootScope', 'General', 'CONSTANTS', '$filter', '$timeout', 'tmhDynamicLocale','Excel',
function ($scope, $uibModalInstance, params, $rootScope, General, CONSTANTS, $filter, $timeout, tmhDynamicLocale, Excel) { 
	
	$scope.showField = false;   
	$scope.data = params; 

	console.log('$rootScope.ID:::', $rootScope.ID);    


	General.BuscarSeguimientoBKP($rootScope.ID).then(  
		function (result) {
	        console.log('result :::', result);
			if (result.data.success == true) {
				$rootScope.Seguimiento = result.data.data;
			} else {
				$rootScope.Seguimiento = [];
			}

		},
		function (result) {
			$rootScope.Seguimiento = [];
		}
	);

		//# Fn cerrar Modal
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };


}
])

.controller('viewDetalleNotas', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'GeneralConfirmacion', 'CONSTANTS', 
function ($scope, $timeout, $rootScope, $uibModalInstance, params, modalFactory, GeneralConfirmacion, CONSTANTS) {
	$scope.data = params;
	$scope.dataNOTA = $scope.data;
	//console.log('pasooo');   
	//console.log($scope.dataNOTA);

	/*GeneralConfirmacion.obtieneDetalleFEI($scope.data.NUMERO_OXT).then(function(result){
	  $rootScope.CargandoGral = true;
	  console.log(result.data.success);
		if(result.data.success ==true)
		  {   
			  $scope.dataFei = result.data.data;
		  }
		  else
		  {
			sweetAlert("Lo Siento!", "No existen datos para la consulta!:"+result.data.mensaje, "error");
		  }
	
		},
		function(r){
			$rootScope.CargandoGral = false;
			sweetAlert("Lo Siento!", "No existen datos para la consulta!:"+r.data.mensaje, "error");
		})  
*/
//Exportacion a Excel po loco!!! :D

/*
$scope.exportToExcel=function(tableId){ // ex: '#my-table'
	  $scope.exportHref=Excel.tableToExcel(tableId,'Reporte Incidencias');
	  $timeout(function(){
		location.href=$scope.exportHref;

		var isIE = /*@cc_on!@*false || !!document.documentMode;
		var isEdge = !isIE && !!window.StyleMedia;

		if(isEdge || isIE){
		  var blobObject = new Blob(location.href);
		  window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.xlsx');
		}


	  },100); // trigger download
}

*/
$scope.cancel = function () {
	$uibModalInstance.dismiss();
};


}
])

.controller('ModalInstanceComoCtrl', ['$scope', '$rootScope', '$window', '$interval', '$uibModalInstance', 'params', '$rootScope', 'General', 'CONSTANTS', '$filter', 
	function ($scope, $rootScope, $window, $interval, $uibModalInstance, params, $rootScope, General, CONSTANTS, $filter) {
		console.log('entro aca la wea o no??')
		$scope.showField = false;
		$scope.pathdoc = CONSTANTS.PATH_DOC_DECISION;
		$scope.data = params;
		$scope.SubfuncionesNombre=[];
		$scope.IdProcesoActual="0";
		$scope.IdSubProcesoActual="0";
		$scope.IdSubProcesoIDSiguiente="0";
		$scope.SubProceso = false;
		$scope.mostrarTab1="";
		$scope.mostrarTab2="";
		$scope.mostrarTab3="";
		$scope.mostrarTab4="";
		$scope.mostrarTab5="";
		$scope.mostrarTab6="";
		$scope.mostrarTab7="";
		$scope.mostrarTab8="";
		$scope.mostrarTab9="";
		$scope.mostrarTab10="";
		$scope.mostrarTab1id="";
		$scope.mostrarTab2id="";
		$scope.mostrarTab3id="";
		$scope.mostrarTab4id="";
		$scope.mostrarTab5id="";
		$scope.mostrarTab6id="";
		$scope.mostrarTab7id="";
		$scope.mostrarTab8id="";
		$scope.mostrarTab9id="";
		$scope.mostrarTab10id="";

		//Validaciones pasos
		$scope.cleanAll = function(){
		$scope.DataProceso = [];
		$scope.DataGlosaOV = [];
		$scope.DataGlosaOG = []; 
		$scope.DataGlosaValidacionOV = [];
		$scope.DataGlosaValidacionOG = [];
		$scope.arrayforma0 = [];
		$scope.arrayforma1 = [];
		$scope.arrayforma2 = [];
		$scope.arrayforma3 = [];
		$scope.arrayforma4 = [];
		$scope.arrayforma5 = [];
		$scope.arrayforma6 = [];
		$scope.arrayforma7 = [];
		$scope.arrayforma8 = [];
		$scope.arrayforma9 = [];
		$scope.arrayforma10 = [];
		$scope.arrayforma11 = [];
		$scope.arrayforma12 = [];
		$scope.arrayforma13 = [];
		$scope.arrayforma14 = [];
		$scope.arrayforma15 = [];
		$scope.arraydecision0 = [];
		$scope.arraydecision1 = [];
		$scope.arraydecision2 = [];
		$scope.arraydecision3 = [];
		$scope.arraydecision4 = [];
		$scope.arraydecision5 = [];
		$scope.arraydecision6 = [];
		$scope.arraydecision7 = [];
		$scope.arraydecision8 = [];
		$scope.arraydecision9 = [];
		$scope.arraydecision10 = [];
		$scope.arraydecision11 = [];
		$scope.arraydecision12 = [];
		$scope.arraydecision13 = [];
		$scope.arraydecision14 = [];
		$scope.arraydecision15 = [];
		$scope.valida0 = false;
		$scope.valida1 = false;
		$scope.valida2 = false;
		$scope.valida3 = false;
		$scope.valida4 = false;
		$scope.valida5 = false;
		$scope.valida6 = false;
		$scope.valida7 = false;
		$scope.valida8 = false;
		$scope.valida9 = false;
		$scope.valida10 = false;
		$scope.valida11 = false;
		$scope.valida12 = false;
		$scope.valida13 = false;
		$scope.valida14 = false;
		$scope.valida15 = false;
		}
		$scope.cleanAll();
		//


		console.log('ID:::'+$rootScope.IdProcesoActual);
		console.log('DOC:::'+$scope.data.DOC);
		console.log('SUB:::'+$scope.data.SUB);
		console.log('APL:::'+$scope.data.APL);
		console.log('acceso:::'+$scope.data.acceso);
		console.log('tipousuario :::'+$scope.data.tipousuario);
		console.log('idproceso :::'+$scope.data.idproceso);
		console.log('video :::'+$scope.data.video); 

		$rootScope.ObtieneNombreFlujoSub = function(ID){

			General.ObtieneNombreFlujo(ID).then(function(r){   
			if(r.data.success==true){
				console.log('ID:::['+ID+'] Nombre:::['+r.data.data[0].PRO_OBTIENE_NOMBRE_FLUJO+']');
        //Flujo 22 se agrego una linea pero hay que mejorar eso.
				if($rootScope.IdProcesoActual =='2'){

					if(ID==22){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAP' && ID==14){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='EnteraT' ||$scope.Acceso=='Enterat') && ID==3){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos') && ID==10){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='VPN' && ID==15){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==16){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==20){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
		

				}
				else if($rootScope.IdProcesoActual =='7'){

					if(($scope.Acceso=='EnteraT' ||$scope.Acceso=='Enterat') && ID==5){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos') && ID==29){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==31){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==32){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='VPN' && ID==33){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAP' && ID==30){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
				}
                else if($rootScope.IdProcesoActual =='8'){
						if(ID==19 && $scope.data.idproceso==1000){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}  
						if(ID==4 && $scope.data.idproceso==800){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}  
						
						if(($scope.Acceso=='AD' ||$scope.Acceso=='Enterat' ||$scope.Acceso=='EnteraT' ||$scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos' ||$scope.Acceso=='VPN') && ID==9){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}
						if($scope.Acceso=='SGA' && ID==12){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}
						if($scope.Acceso=='SAP' && ID==13){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}
						if($scope.Acceso=='SAU' && ID==19){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}

				}
				else if($rootScope.IdProcesoActual =='23'){

					if($scope.Acceso=='SAP' && ID==24){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==25){   
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==26){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
				
				}
				else{
					$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
				}
  

			  } 
			},
			function (error){   
			});
		}		
		
		if($scope.data.acceso ==undefined)$scope.data.acceso='';
		if($scope.data.tipousuario ==undefined)$scope.data.tipousuario='';

		if($scope.data.DOC !=undefined){
		  $scope.Documentos = $scope.data.DOC.split(',');
		}
		if($scope.data.SUB !=undefined){
		  $scope.Subfunciones = $scope.data.SUB.split(',');
		  
		  angular.forEach($scope.Subfunciones, function(value) {
			$rootScope.ObtieneNombreFlujoSub(value);
		  });
		}
		if($scope.data.video !=undefined){
			$scope.video = $scope.data.video.split(',');
		  }
  
		if($scope.data.acceso !=''){
			$scope.Acceso = $scope.data.acceso;

			if($rootScope.IdProcesoActual =='5'){

				if($scope.Acceso=='PERSONA'){
					$scope.Documentos = ["EnteraT_formato_Personas.xlsx"];
				}
				if($scope.Acceso=='EMPRESA'){
					$scope.Documentos = ["EnteraT_formato_Empresas.xlsx"];
				}
				if($scope.Acceso=='OPERACIONES'){
					$scope.Documentos = ["Formulario Unico_EnteraT Excelencia Formativa ENTERAT Operaciones_V1.xlsm"];
				}

			}
			else{
					if($scope.Acceso=='Personas'){
						$scope.Documentos = ["EnteraT_formato_Personas.xlsx"];
					}
					if($scope.Acceso=='Empresa'){
						$scope.Documentos = ["EnteraT_formato_Empresas.xlsx"];
					}
					if($scope.Acceso=='Operaciones-Redes'){
						$scope.Documentos = ["Formulario Unico_EnteraT Excelencia Formativa ENTERAT Operaciones_V1.xlsm"];
					}
   		}

		}
		if($scope.data.APL !=undefined){
		  $scope.Aplicaciones = $scope.data.APL.split(',');
		}

		if($scope.data.tipousuario !=''){

			if($scope.data.tipousuario =='Exclusivo'){
				$scope.SubfuncionesNombre = [{"ID":"9","NOMBRE":"Restablecer Contraseña AD"}];
			}
			if($scope.data.tipousuario =='No exclusivo'){
				$scope.SubfuncionesNombre = [{"ID":"19","NOMBRE":"Restablecer Contraseña SAU"}];
			}

		}  
		console.log($scope.Documentos);
		console.log($scope.Subfunciones);
		console.log($scope.SubfuncionesNombre);
		console.log($scope.Acceso);
		console.log($scope.Aplicaciones);

		$scope.doSomethingElse = function($event) {
			// do something else
			//$event.stopPropagation();
			$event.preventDefault();
		};

		//# Fn cerrar Modal
		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel'); 
		};

		


//*******************************************/

      $scope.ObtieneSiguienteProceso = function(ID, IDSiguiente, index, SubFuncion, SubProceso, TIPO_FORMA, SOLICITANTE, SOLICITUD_PARA, TIPO){
        $scope.DataGlosaValidacionOV=[];
        $scope.DataGlosaValidacionOG=[];
        console.log('Siguiente ID 1:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
        if(SubProceso == true &&TIPO_FORMA =='Finalizado'){
          $scope.IdSubProcesoActual = "0";
          $scope.SubProceso = false;
        }
        if(IDSiguiente==0){
          //console.log('paso 1');
          $scope.IdProcesoActual=ID;
          $scope.cleanAll();
        } else{$scope.DataGlosaOG = [];$scope.DataGlosaOV = [];}

        if(SubFuncion !="0" &&SubFuncion !=0){
          //console.log('paso 2');
          $scope.IdSubProcesoActual=SubFuncion;
          ID = $scope.IdSubProcesoActual;
          $scope.IdSub = ID;
          $scope.IdSubProcesoIDSiguiente = IDSiguiente;
          $scope.SubProceso = true;
          IDSiguiente = "0";
        }

        if($scope.IdSubProcesoActual !="0"){
          //console.log('paso 3');
          ID = $scope.IdSubProcesoActual;    
        }

        console.log('Siguiente ID 2:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
 
        General.ObtieneSiguienteProceso(ID, IDSiguiente, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){
          if(r.data.success==true){
          $scope.DataProceso[index] = r.data.data;
          //console.log($scope.DataProceso[index]);
          //console.log('Tipo Etapa:::['+$scope.DataProceso[index][0].TIPO_FORMA+']');
          if($scope.DataProceso[index][0].OBSERVACION_VALIDACION==null)$scope.DataProceso[index][0].OBSERVACION_VALIDACION='';
          if($scope.DataProceso[index][0].OBSERVACION_GENERAL==null)$scope.DataProceso[index][0].OBSERVACION_GENERAL='';

          var OV = $scope.DataProceso[index][0].OBSERVACION_VALIDACION.split('<br>');
          var OG = $scope.DataProceso[index][0].OBSERVACION_GENERAL.split('<br>');

          angular.forEach(OV, function (value, key) {
            $scope.DataGlosaOV.push({'OBSERVACION_VALIDACION': value});
            })
          angular.forEach(OG, function (value, key) {
            $scope.DataGlosaOG.push({'OBSERVACION_GENERAL': value});
            })
            //console.log($scope.DataGlosaOV);
            //console.log($scope.DataGlosaOG);
  
            if($scope.DataProceso[index][0].TIPO_FORMA =='Datos'){
              $scope.testdata = $scope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
              if(index ==0){$scope.arrayforma0=[];}
              if(index ==1){$scope.arrayforma1=[];}
              if(index ==2){$scope.arrayforma2=[];}
              if(index ==3){$scope.arrayforma3=[];}
              if(index ==4){$scope.arrayforma4=[];}
              if(index ==5){$scope.arrayforma5=[];}
              if(index ==6){$scope.arrayforma6=[];}
              if(index ==7){$scope.arrayforma7=[];}
              if(index ==8){$scope.arrayforma8=[];}
              if(index ==9){$scope.arrayforma9=[];}
              if(index ==10){$scope.arrayforma10=[];}
              if(index ==11){$scope.arrayforma11=[];}
              if(index ==12){$scope.arrayforma12=[];}
              if(index ==13){$scope.arrayforma13=[];}
              if(index ==14){$scope.arrayforma14=[];}
              if(index ==15){$scope.arrayforma15=[];}
              angular.forEach($scope.testdata, function (value, key) {
                //console.log('Value:::'+value+' index:::'+index);
                if(index ==0){$scope.arrayforma0.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==1){$scope.arrayforma1.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==2){$scope.arrayforma2.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==3){$scope.arrayforma3.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==4){$scope.arrayforma4.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==5){$scope.arrayforma5.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==6){$scope.arrayforma6.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==7){$scope.arrayforma7.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==8){$scope.arrayforma8.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==9){$scope.arrayforma9.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==10){$scope.arrayforma10.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==11){$scope.arrayforma11.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==12){$scope.arrayforma12.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==13){$scope.arrayforma13.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==14){$scope.arrayforma14.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==15){$scope.arrayforma15.push({ 'ETIQUETA_CONECTOR': value});}
              });
            }
            if($scope.DataProceso[index][0].TIPO_FORMA =='Decisión'){
              $scope.testdata1 = $scope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
              $scope.testdata2 = $scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE.split(',');
              var Largo = $scope.testdata1.length;
              if(index ==0){$scope.arraydecision0=[];}
              if(index ==1){$scope.arraydecision1=[];}
              if(index ==2){$scope.arraydecision2=[];}
              if(index ==3){$scope.arraydecision3=[];}
              if(index ==4){$scope.arraydecision4=[];}
              if(index ==5){$scope.arraydecision5=[];}
              if(index ==6){$scope.arraydecision6=[];}
              if(index ==7){$scope.arraydecision7=[];}
              if(index ==8){$scope.arraydecision8=[];}
              if(index ==9){$scope.arraydecision9=[];}
              if(index ==10){$scope.arraydecision10=[];}
              if(index ==11){$scope.arraydecision11=[];}
              if(index ==12){$scope.arraydecision12=[];}
              if(index ==13){$scope.arraydecision13=[];}
              if(index ==14){$scope.arraydecision14=[];}
              if(index ==15){$scope.arraydecision15=[];}
              for (var i=0; i<Largo; i++) {
                //console.log('Test 1 :::'+$scope.testdata1[i]+' Test 2:::'+$scope.testdata2[i]);
                if($scope.DataProceso[index][0].GL_PROCESO =='El resultado de la validación es exitoso?'){

                  //console.log('$scope.APLICA::'+$scope.APLICA);
                  if($scope.APLICA !=undefined && $scope.testdata1[i] ==$scope.APLICA)
                  {
                    //console.log('entro a la wea');  
                    if(index ==4)$scope.decision4 = $scope.testdata2[i];
                    if(index ==5)$scope.decision5 = $scope.testdata2[i];
                    if(index ==6)$scope.decision6 = $scope.testdata2[i];
                    if(index ==7)$scope.decision7 = $scope.testdata2[i];
                    if(index ==8)$scope.decision8 = $scope.testdata2[i];                       
                    //$scope.ID_PROCESO_SIGUIENTE = '';
                    //$scope.APLICA=undefined;
                  }

                }
                console.log('Seleccion ::'+$scope.motivocsop0);
                if(index ==0){$scope.arraydecision0.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==1){$scope.arraydecision1.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==2){$scope.arraydecision2.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==3){$scope.arraydecision3.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==4){$scope.arraydecision4.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==5){$scope.arraydecision5.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==6){$scope.arraydecision6.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==7){$scope.arraydecision7.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==8){$scope.arraydecision8.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==9){$scope.arraydecision9.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==10){$scope.arraydecision10.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==11){$scope.arraydecision11.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==12){$scope.arraydecision12.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==13){$scope.arraydecision13.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==14){$scope.arraydecision14.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
                if(index ==15){$scope.arraydecision15.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}

              }

            }
            if($scope.DataProceso[index][0].TIPO_FORMA =='Finalizado'){

              if($scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='0'){
                $scope.APLICA='OK';
              }

              if($scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='1'){
                $scope.APLICA='NOK';
              }                

            }
            
            //$scope.DataProceso[index+1]=undefined;$scope.DataProceso[index+2]=undefined;$scope.DataProceso[index+3]=undefined;$scope.DataProceso[index+4]=undefined;$scope.DataProceso[index+5]=undefined;$scope.DataProceso[index+6]=undefined;$scope.DataProceso[index+7]=undefined;$scope.DataProceso[index+8]=undefined;$scope.DataProceso[index+9]=undefined;
          }
          else{
            console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          console.log('Trae datos Nok 2');
        });

      }

  $scope.changevalida0 = function(Valor){
	$scope.valida0 = Valor;
  } 
  $scope.changevalida1 = function(Valor){
	$scope.valida1 = Valor;
  } 
  $scope.changevalida2 = function(Valor){
	$scope.valida2 = Valor;
  } 
  $scope.changevalida3 = function(Valor){
	$scope.valida3 = Valor;
  } 
  $scope.changevalida4 = function(Valor){
	$scope.valida4 = Valor;
  } 
  $scope.changevalida5 = function(Valor){
	$scope.valida5 = Valor;
  } 
  $scope.changevalida6 = function(Valor){
	$scope.valida6 = Valor;
  } 
  $scope.changevalida7 = function(Valor){
	$scope.valida7 = Valor;
  } 
  $scope.changevalida8 = function(Valor){
	$scope.valida8 = Valor;
  } 
  $scope.changevalida9 = function(Valor){
	$scope.valida9 = Valor;
  } 
  $scope.changevalida10 = function(Valor){
	$scope.valida10 = Valor;
  } 
  $scope.changevalida11 = function(Valor){
	$scope.valida11 = Valor;
  } 
  $scope.changevalida12 = function(Valor){
	$scope.valida12 = Valor;
  } 
  $scope.changevalida13 = function(Valor){
	$scope.valida13 = Valor;
  } 
  $scope.changevalida14 = function(Valor){
	$scope.valida14 = Valor;
  } 
  $scope.changevalida15 = function(Valor){
	$scope.valida15 = Valor;
  } 

	$scope.ValidaDecision = function(Op, Valor, Siguiente){
		console.log('Op:::'+Op+' Valor:::'+Valor+' Siguiente:::'+Siguiente);
		if(Op==1){
			if(Valor=='NOK'){
				//$scope.decision7='400';
				$scope.decision7=Siguiente;
			}
			if(Valor=='OK'){
				//$scope.decision7='600';
				$scope.decision7=Siguiente;
			}
		}
		if(Op==7){
			if(Valor=='NOK'){
				//$scope.decision7='400';
				$scope.decision7=Siguiente;
			}
			if(Valor=='OK'){
				//$scope.decision7='500';
				$scope.decision7=Siguiente;
			}
		}
		if(Op==8){
			if(Valor=='NOK'){
				//$scope.decision7='400';
				$scope.decision7=Siguiente;
			}
			if(Valor=='OK'){
				//$scope.decision7='500';
				$scope.decision7=Siguiente;
			}
		}
	}

	$scope.ObtieneGlosas = function(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO){
			$scope.DataGlosaValidacionOV=[];
			$scope.DataGlosaValidacionOG=[];
			$scope.APLICA=undefined;
		if(ID_FLUJO=="0" &&ID_FLUJO==0) ID_FLUJO=$scope.IdSubProcesoActual;

		console.log('ObtieneGlosas Validación:  ID_FLUJO:::::::['+ID_FLUJO+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');

		General.ObtieneGlosas(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){

			if(r.data.success==true){
				//$scope.DataGlosaValidacion = r.data.data;
				if(r.data.data[0].OBSERVACION_VALIDACION==null)r.data.data[0].OBSERVACION_VALIDACION='';
				if(r.data.data[0].OBSERVACION_GENERAL==null)r.data.data[0].OBSERVACION_GENERAL='';

				var OV1 = r.data.data[0].OBSERVACION_VALIDACION;
				var OG1 = r.data.data[0].OBSERVACION_GENERAL;
				//console.log(OV1);
				//console.log(OG1);
				if(OV1==null)OV1='';
				if(OG1==null)OG1='';
				var OV = OV1.split('<br>');
				var OG = OG1.split('<br>');

				angular.forEach(OV, function (value, key) {
					$scope.DataGlosaValidacionOV.push({ 'OBSERVACION_VALIDACION': value});
					})
				angular.forEach(OG, function (value, key) {
					$scope.DataGlosaValidacionOG.push({ 'OBSERVACION_GENERAL': value});
					})

				console.log($scope.DataGlosaValidacionOV);
				console.log($scope.DataGlosaValidacionOG);

				$scope.APLICA = r.data.data[0].APLICA;
				$scope.ID_PROCESO_SIGUIENTE = r.data.data[0].ID_PROCESO_SIGUIENTE;

				//console.log('Flujo para decision:::'+ID_FLUJO);
				//console.log('ID_PROCESO_SIGUIENTE:::'+$scope.ID_PROCESO_SIGUIENTE);
				//$scope.ValidaDecision(ID_FLUJO, $scope.APLICA, $scope.ID_PROCESO_SIGUIENTE);
			}
			else{     
				console.log('Trae glosas Nok 1 :::'+r.data.mensaje);  
			}
		},
		function (error){
			console.log('Trae glosas Nok 2');
		});

	}    


  $scope.changePlataforma = function(IdProcesoActual, NombreProcesoActual){
	$scope.cleanAll();
	$rootScope.CargandoGral = true;
	$rootScope.mostrar3Play=3;
	$scope.IdProcesoActual=IdProcesoActual;
	$scope.IdSubProcesoActual = "0";
	$scope.IdSubProcesoIDSiguiente = "0";
	$scope.SubProceso = false;
	console.log('Id proceso actual Modal:::'+$scope.IdProcesoActual+' Nombre actual:::'+NombreProcesoActual);
	if($scope.IdProcesoActual !="0" && NombreProcesoActual =="")  
	{
	   $scope.ObtieneNombreFlujo($scope.IdProcesoActual);
	}
	else if(NombreProcesoActual !="")
		{
		if($scope.mostrarTab1==''){
			$scope.mostrarTab1=NombreProcesoActual;
			$scope.mostrarTab1id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab2==''){
			$scope.mostrarTab2=NombreProcesoActual;
			$scope.mostrarTab2id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab3==''){
			$scope.mostrarTab3=NombreProcesoActual;
			$scope.mostrarTab3id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab4==''){
			$scope.mostrarTab4=NombreProcesoActual;
			$scope.mostrarTab4id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab5==''){
			$scope.mostrarTab5=NombreProcesoActual;
			$scope.mostrarTab5id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab6==''){
			$scope.mostrarTab6=NombreProcesoActual;
			$scope.mostrarTab6id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab7==''){
			$scope.mostrarTab7=NombreProcesoActual;
			$scope.mostrarTab7id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab8==''){
			$scope.mostrarTab8=NombreProcesoActual;
			$scope.mostrarTab8id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab9==''){
			$scope.mostrarTab9=NombreProcesoActual;
			$scope.mostrarTab9id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab10==''){
			$scope.mostrarTab10=NombreProcesoActual;
			$scope.mostrarTab10id=$scope.IdProcesoActual;
			}
		}
	
}


}
])

.controller('ModalInstanceComoSubCtrl', ['$scope', '$rootScope', '$window', '$interval', '$uibModalInstance', 'params', '$rootScope', 'General', 'CONSTANTS', '$filter', 
	function ($scope, $rootScope, $window, $interval, $uibModalInstance, params, $rootScope, General, CONSTANTS, $filter) {
		$scope.showField = false;
		$scope.pathdoc = CONSTANTS.PATH_DOC_DECISION;
		$scope.data = params;
		$scope.SubfuncionesNombreSub=[];



		console.log('ID:::'+$rootScope.IdProcesoActual);
		console.log('DOC:::'+$scope.data.DOC);
		console.log('SUB:::'+$scope.data.SUB);
		console.log('APL:::'+$scope.data.APL);
		console.log('acceso:::'+$scope.data.acceso);
		console.log('tipousuario :::'+$scope.data.tipousuario);
		console.log('idproceso :::'+$scope.data.idproceso);

		$rootScope.ObtieneNombreFlujoSub = function(ID){

			General.ObtieneNombreFlujo(ID).then(function(r){   
			if(r.data.success==true){
				console.log('ID:::['+ID+'] Nombre:::['+r.data.data[0].GL_FLUJO+']');
        //Flujo 22 se agrego una linea pero hay que mejorar eso.
				if($rootScope.IdProcesoActual =='2'){

					if(ID==22){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAP' && ID==14){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='EnteraT' ||$scope.Acceso=='Enterat') && ID==3){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos') && ID==10){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='VPN' && ID==15){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==16){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==20){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
		

				}
				else if($rootScope.IdProcesoActual =='7'){

					if(($scope.Acceso=='EnteraT' ||$scope.Acceso=='Enterat') && ID==5){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if(($scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos') && ID==29){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==31){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==32){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='VPN' && ID==33){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAP' && ID==30){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
				}
                else if($rootScope.IdProcesoActual =='8'){
						if(ID==19 && $scope.data.idproceso==1000){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}  
						if(ID==4 && $scope.data.idproceso==800){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}  
						
						if(($scope.Acceso=='AD' ||$scope.Acceso=='Enterat' ||$scope.Acceso=='EnteraT' ||$scope.Acceso=='Geopos' ||$scope.Acceso=='GeoPos' ||$scope.Acceso=='VPN') && ID==9){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}  
						if($scope.Acceso=='SGA' && ID==12){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}
						if($scope.Acceso=='SAP' && ID==13){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}
						if($scope.Acceso=='SAU' && ID==19){
							$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
						}

				}
				else if($rootScope.IdProcesoActual =='23'){

					if($scope.Acceso=='SAP' && ID==24){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SGA' && ID==25){   
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
					if($scope.Acceso=='SAU' && ID==26){
						$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
					}
				
				}
				else{
					$scope.SubfuncionesNombre.push({'ID':ID,'NOMBRE':r.data.data[0].GL_FLUJO});
				}
  

			  } 
			},
			function (error){
			});
		}		
		
		if($scope.data.acceso ==undefined)$scope.data.acceso='';
		if($scope.data.tipousuario ==undefined)$scope.data.tipousuario='';

		if($scope.data.DOC !=undefined){
		  $scope.Documentos = $scope.data.DOC.split(',');
		}
		if($scope.data.SUB !=undefined){
		  $scope.Subfunciones = $scope.data.SUB.split(',');
		  
		  angular.forEach($scope.Subfunciones, function(value) {
			$rootScope.ObtieneNombreFlujoSub(value);
		  });
		}
		if($scope.data.acceso !=''){
			$scope.Acceso = $scope.data.acceso;

			if($rootScope.IdProcesoActual =='5'){

				if($scope.Acceso=='PERSONA'){
					$scope.Documentos = ["EnteraT_formato_Personas.xlsx"];
				}
				if($scope.Acceso=='EMPRESA'){
					$scope.Documentos = ["EnteraT_formato_Empresas.xlsx"];
				}
				if($scope.Acceso=='OPERACIONES'){
					$scope.Documentos = ["Formulario Unico_EnteraT Excelencia Formativa ENTERAT Operaciones_V1.xlsm"];
				}

			}
			else{
					if($scope.Acceso=='Personas'){
						$scope.Documentos = ["EnteraT_formato_Personas.xlsx"];
					}
					if($scope.Acceso=='Empresa'){
						$scope.Documentos = ["EnteraT_formato_Empresas.xlsx"];
					}
					if($scope.Acceso=='Operaciones-Redes'){
						$scope.Documentos = ["Formulario Unico_EnteraT Excelencia Formativa ENTERAT Operaciones_V1.xlsm"];
					}
   		}

		}
		if($scope.data.APL !=undefined){
		  $scope.Aplicaciones = $scope.data.APL.split(',');
		}

		if($scope.data.tipousuario !=''){

			if($scope.data.tipousuario =='Exclusivo'){
				$scope.SubfuncionesNombre = [{"ID":"9","NOMBRE":"Restablecer Contraseña AD"}];
			}
			if($scope.data.tipousuario =='No exclusivo'){
				$scope.SubfuncionesNombre = [{"ID":"19","NOMBRE":"Restablecer Contraseña SAU"}];
			}

		}  
		console.log($scope.Documentos);
		console.log($scope.Subfunciones);
		console.log($scope.SubfuncionesNombre);
		console.log($scope.Acceso);
		console.log($scope.Aplicaciones);

		$scope.doSomethingElse = function($event) {
			// do something else
			//$event.stopPropagation();
			$event.preventDefault();
		};

		//# Fn cerrar Modal
		$scope.cancelsub = function () {
		  $uibModalInstance.dismiss('cancelsub');
		};


//*******************************************/
$scope.ObtieneSiguienteProceso = function(ID, IDSiguiente, index, SubFuncion, SubProceso, TIPO_FORMA, SOLICITANTE, SOLICITUD_PARA, TIPO){
	$scope.DataGlosaValidacionOV=[];
	$scope.DataGlosaValidacionOG=[];
	console.log('Siguiente ID 1:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
	if(SubProceso == true &&TIPO_FORMA =='Finalizado'){
		$scope.IdSubProcesoActual = "0";
		$scope.SubProceso = false;
	}
	if(IDSiguiente==0){
		//console.log('paso 1');
		$scope.IdProcesoActual=ID;
		$scope.cleanAll();
	} else{$scope.DataGlosaOG = [];$scope.DataGlosaOV = [];}

	if(SubFuncion !="0" &&SubFuncion !=0){
		//console.log('paso 2');
		$scope.IdSubProcesoActual=SubFuncion;
		ID = $scope.IdSubProcesoActual;
		$scope.IdSub = ID;
		$scope.IdSubProcesoIDSiguiente = IDSiguiente;
		$scope.SubProceso = true;
		IDSiguiente = "0";
	}

	if($scope.IdSubProcesoActual !="0"){
		//console.log('paso 3');
		ID = $scope.IdSubProcesoActual;    
	}

	console.log('Siguiente ID 2:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');

	General.ObtieneSiguienteProceso(ID, IDSiguiente, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){
		if(r.data.success==true){
		$scope.DataProceso[index] = r.data.data;
		//console.log($scope.DataProceso[index]);
		//console.log('Tipo Etapa:::['+$scope.DataProceso[index][0].TIPO_FORMA+']');
		if($scope.DataProceso[index][0].OBSERVACION_VALIDACION==null)$scope.DataProceso[index][0].OBSERVACION_VALIDACION='';
		if($scope.DataProceso[index][0].OBSERVACION_GENERAL==null)$scope.DataProceso[index][0].OBSERVACION_GENERAL='';

		var OV = $scope.DataProceso[index][0].OBSERVACION_VALIDACION.split('<br>');
		var OG = $scope.DataProceso[index][0].OBSERVACION_GENERAL.split('<br>');

		angular.forEach(OV, function (value, key) {
			$scope.DataGlosaOV.push({'OBSERVACION_VALIDACION': value});
			})
		angular.forEach(OG, function (value, key) {
			$scope.DataGlosaOG.push({'OBSERVACION_GENERAL': value});
			})
			//console.log($scope.DataGlosaOV);
			//console.log($scope.DataGlosaOG);

			if($scope.DataProceso[index][0].TIPO_FORMA =='Datos'){
				$scope.testdata = $scope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
				if(index ==0){$scope.arrayforma0=[];}
				if(index ==1){$scope.arrayforma1=[];}
				if(index ==2){$scope.arrayforma2=[];}
				if(index ==3){$scope.arrayforma3=[];}
				if(index ==4){$scope.arrayforma4=[];}
				if(index ==5){$scope.arrayforma5=[];}
				if(index ==6){$scope.arrayforma6=[];}
				if(index ==7){$scope.arrayforma7=[];}
				if(index ==8){$scope.arrayforma8=[];}
				if(index ==9){$scope.arrayforma9=[];}
				if(index ==10){$scope.arrayforma10=[];}
				if(index ==11){$scope.arrayforma11=[];}
				if(index ==12){$scope.arrayforma12=[];}
				if(index ==13){$scope.arrayforma13=[];}
				if(index ==14){$scope.arrayforma14=[];}
				if(index ==15){$scope.arrayforma15=[];}
				angular.forEach($scope.testdata, function (value, key) {
					//console.log('Value:::'+value+' index:::'+index);
					if(index ==0){$scope.arrayforma0.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==1){$scope.arrayforma1.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==2){$scope.arrayforma2.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==3){$scope.arrayforma3.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==4){$scope.arrayforma4.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==5){$scope.arrayforma5.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==6){$scope.arrayforma6.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==7){$scope.arrayforma7.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==8){$scope.arrayforma8.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==9){$scope.arrayforma9.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==10){$scope.arrayforma10.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==11){$scope.arrayforma11.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==12){$scope.arrayforma12.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==13){$scope.arrayforma13.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==14){$scope.arrayforma14.push({ 'ETIQUETA_CONECTOR': value});}
					if(index ==15){$scope.arrayforma15.push({ 'ETIQUETA_CONECTOR': value});}
				});
			}
			if($scope.DataProceso[index][0].TIPO_FORMA =='Decisión'){
				$scope.testdata1 = $scope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
				$scope.testdata2 = $scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE.split(',');
				var Largo = $scope.testdata1.length;
				if(index ==0){$scope.arraydecision0=[];}
				if(index ==1){$scope.arraydecision1=[];}
				if(index ==2){$scope.arraydecision2=[];}
				if(index ==3){$scope.arraydecision3=[];}
				if(index ==4){$scope.arraydecision4=[];}
				if(index ==5){$scope.arraydecision5=[];}
				if(index ==6){$scope.arraydecision6=[];}
				if(index ==7){$scope.arraydecision7=[];}
				if(index ==8){$scope.arraydecision8=[];}
				if(index ==9){$scope.arraydecision9=[];}
				if(index ==10){$scope.arraydecision10=[];}
				if(index ==11){$scope.arraydecision11=[];}
				if(index ==12){$scope.arraydecision12=[];}
				if(index ==13){$scope.arraydecision13=[];}
				if(index ==14){$scope.arraydecision14=[];}
				if(index ==15){$scope.arraydecision15=[];}
				for (var i=0; i<Largo; i++) {
					//console.log('Test 1 :::'+$scope.testdata1[i]+' Test 2:::'+$scope.testdata2[i]);
					if($scope.DataProceso[index][0].GL_PROCESO =='El resultado de la validación es exitoso?'){

						//console.log('$scope.APLICA::'+$scope.APLICA);
						if($scope.APLICA !=undefined && $scope.testdata1[i] ==$scope.APLICA)
						{
							//console.log('entro a la wea');  
							if(index ==4)$scope.decision4 = $scope.testdata2[i];
							if(index ==5)$scope.decision5 = $scope.testdata2[i];
							if(index ==6)$scope.decision6 = $scope.testdata2[i];
							if(index ==7)$scope.decision7 = $scope.testdata2[i];
							if(index ==8)$scope.decision8 = $scope.testdata2[i];                       
							//$scope.ID_PROCESO_SIGUIENTE = '';
							//$scope.APLICA=undefined;
						}

					}
					console.log('Seleccion ::'+$scope.motivocsop0);
					if(index ==0){$scope.arraydecision0.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==1){$scope.arraydecision1.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==2){$scope.arraydecision2.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==3){$scope.arraydecision3.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==4){$scope.arraydecision4.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==5){$scope.arraydecision5.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==6){$scope.arraydecision6.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==7){$scope.arraydecision7.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==8){$scope.arraydecision8.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==9){$scope.arraydecision9.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==10){$scope.arraydecision10.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==11){$scope.arraydecision11.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==12){$scope.arraydecision12.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==13){$scope.arraydecision13.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==14){$scope.arraydecision14.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}
					if(index ==15){$scope.arraydecision15.push({ 'ID_PROCESO_SIGUIENTE': $scope.testdata2[i], 'ETIQUETA_CONECTOR': $scope.testdata1[i]});}

				}

			}
			if($scope.DataProceso[index][0].TIPO_FORMA =='Finalizado'){

				if($scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='0'){
					$scope.APLICA='OK';
				}

				if($scope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='1'){
					$scope.APLICA='NOK';
				}                

			}
			
			//$scope.DataProceso[index+1]=undefined;$scope.DataProceso[index+2]=undefined;$scope.DataProceso[index+3]=undefined;$scope.DataProceso[index+4]=undefined;$scope.DataProceso[index+5]=undefined;$scope.DataProceso[index+6]=undefined;$scope.DataProceso[index+7]=undefined;$scope.DataProceso[index+8]=undefined;$scope.DataProceso[index+9]=undefined;
		}
		else{
			console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
		}
	},
	function (error){
		console.log('Trae datos Nok 2');
	});

}

$scope.changevalida0 = function(Valor){
$scope.valida0 = Valor;
} 
$scope.changevalida1 = function(Valor){
$scope.valida1 = Valor;
} 
$scope.changevalida2 = function(Valor){
$scope.valida2 = Valor;
} 
$scope.changevalida3 = function(Valor){
$scope.valida3 = Valor;
} 
$scope.changevalida4 = function(Valor){
$scope.valida4 = Valor;
} 
$scope.changevalida5 = function(Valor){
$scope.valida5 = Valor;
} 
$scope.changevalida6 = function(Valor){
$scope.valida6 = Valor;
} 
$scope.changevalida7 = function(Valor){
$scope.valida7 = Valor;
} 
$scope.changevalida8 = function(Valor){
$scope.valida8 = Valor;
} 
$scope.changevalida9 = function(Valor){
$scope.valida9 = Valor;
} 
$scope.changevalida10 = function(Valor){
$scope.valida10 = Valor;
} 
$scope.changevalida11 = function(Valor){
$scope.valida11 = Valor;
} 
$scope.changevalida12 = function(Valor){
$scope.valida12 = Valor;
} 
$scope.changevalida13 = function(Valor){
$scope.valida13 = Valor;
} 
$scope.changevalida14 = function(Valor){
$scope.valida14 = Valor;
} 
$scope.changevalida15 = function(Valor){
$scope.valida15 = Valor;
} 

$scope.ValidaDecision = function(Op, Valor, Siguiente){
console.log('Op:::'+Op+' Valor:::'+Valor+' Siguiente:::'+Siguiente);
if(Op==1){
if(Valor=='NOK'){
	//$scope.decision7='400';
	$scope.decision7=Siguiente;
}
if(Valor=='OK'){
	//$scope.decision7='600';
	$scope.decision7=Siguiente;
}
}
if(Op==7){
if(Valor=='NOK'){
	//$scope.decision7='400';
	$scope.decision7=Siguiente;
}
if(Valor=='OK'){
	//$scope.decision7='500';
	$scope.decision7=Siguiente;
}
}
if(Op==8){
if(Valor=='NOK'){
	//$scope.decision7='400';
	$scope.decision7=Siguiente;
}
if(Valor=='OK'){
	//$scope.decision7='500';
	$scope.decision7=Siguiente;
}
}
}

$scope.ObtieneGlosas = function(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO){
$scope.DataGlosaValidacionOV=[];
$scope.DataGlosaValidacionOG=[];
$scope.APLICA=undefined;
if(ID_FLUJO=="0" &&ID_FLUJO==0) ID_FLUJO=$scope.IdSubProcesoActual;

console.log('ObtieneGlosas Validación:  ID_FLUJO:::::::['+ID_FLUJO+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');

General.ObtieneGlosas(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){

if(r.data.success==true){
	//$scope.DataGlosaValidacion = r.data.data;
	if(r.data.data[0].OBSERVACION_VALIDACION==null)r.data.data[0].OBSERVACION_VALIDACION='';
	if(r.data.data[0].OBSERVACION_GENERAL==null)r.data.data[0].OBSERVACION_GENERAL='';

	var OV1 = r.data.data[0].OBSERVACION_VALIDACION;
	var OG1 = r.data.data[0].OBSERVACION_GENERAL;
	//console.log(OV1);
	//console.log(OG1);
	if(OV1==null)OV1='';
	if(OG1==null)OG1='';
	var OV = OV1.split('<br>');
	var OG = OG1.split('<br>');

	angular.forEach(OV, function (value, key) {
		$scope.DataGlosaValidacionOV.push({ 'OBSERVACION_VALIDACION': value});
		})
	angular.forEach(OG, function (value, key) {
		$scope.DataGlosaValidacionOG.push({ 'OBSERVACION_GENERAL': value});
		})

	console.log($scope.DataGlosaValidacionOV);
	console.log($scope.DataGlosaValidacionOG);

	$scope.APLICA = r.data.data[0].APLICA;
	$scope.ID_PROCESO_SIGUIENTE = r.data.data[0].ID_PROCESO_SIGUIENTE;

	//console.log('Flujo para decision:::'+ID_FLUJO);
	//console.log('ID_PROCESO_SIGUIENTE:::'+$scope.ID_PROCESO_SIGUIENTE);
	//$scope.ValidaDecision(ID_FLUJO, $scope.APLICA, $scope.ID_PROCESO_SIGUIENTE);
}
else{     
	console.log('Trae glosas Nok 1 :::'+r.data.mensaje);  
}
},
function (error){
console.log('Trae glosas Nok 2');
});

}    



$scope.changePlataforma = function(IdProcesoActual, NombreProcesoActual){
	$scope.cleanAll();
	$rootScope.CargandoGral = true;
	$rootScope.mostrar3Play=3;
	$scope.IdProcesoActual=IdProcesoActual;
	$scope.IdSubProcesoActual = "0";
	$scope.IdSubProcesoIDSiguiente = "0";
	$scope.SubProceso = false;
	console.log('Id proceso actual Modal:::'+$scope.IdProcesoActual+' Nombre actual:::'+NombreProcesoActual);
	if($scope.IdProcesoActual !="0" && NombreProcesoActual =="")  
	{
	   $scope.ObtieneNombreFlujo($scope.IdProcesoActual);
	}
	else if(NombreProcesoActual !="")
		{
		if($scope.mostrarTab1==''){
			$scope.mostrarTab1=NombreProcesoActual;
			$scope.mostrarTab1id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab2==''){
			$scope.mostrarTab2=NombreProcesoActual;
			$scope.mostrarTab2id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab3==''){
			$scope.mostrarTab3=NombreProcesoActual;
			$scope.mostrarTab3id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab4==''){
			$scope.mostrarTab4=NombreProcesoActual;
			$scope.mostrarTab4id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab5==''){
			$scope.mostrarTab5=NombreProcesoActual;
			$scope.mostrarTab5id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab6==''){
			$scope.mostrarTab6=NombreProcesoActual;
			$scope.mostrarTab6id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab7==''){
			$scope.mostrarTab7=NombreProcesoActual;
			$scope.mostrarTab7id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab8==''){
			$scope.mostrarTab8=NombreProcesoActual;
			$scope.mostrarTab8id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab9==''){
			$scope.mostrarTab9=NombreProcesoActual;
			$scope.mostrarTab9id=$scope.IdProcesoActual;
			}else if($scope.mostrarTab10==''){
			$scope.mostrarTab10=NombreProcesoActual;
			$scope.mostrarTab10id=$scope.IdProcesoActual;
			}
		}
	
}

 
}
])

.controller('ModalInstanceCtrl', ['$scope', '$rootScope', '$window', '$interval', '$uibModalInstance', 'params', '$rootScope', 'General', 'CONSTANTS', '$filter', 
	function ($scope, $rootScope, $window, $interval, $uibModalInstance, params, $rootScope, General, CONSTANTS, $filter) {
		$scope.showField = false;

		$scope.data = params;
		$scope.paso = CONSTANTS.IMAGE_PATH + '/AD_1.creación_externos.pdf';
		console.log('Ruta:::'+$scope.paso);
	
		$scope.doSomethingElse = function($event) {
			// do something else
			//$event.stopPropagation();
			$event.preventDefault();
		};

		//# Fn cerrar Modal
		$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
		};

		if($scope.observacion ==undefined ||$scope.observacion =="")
		{
			if($scope.data.ANALISIS !=undefined &&$scope.data.ANALISIS !=""){
				$scope.observacion=$scope.data.ANALISIS;
			}
		}

		//# Fn guardar acción prioridades
    $scope.saveObservacion = function (val) {
			$rootScope.CargandoGral = true;

			$scope.DataAnalisis = {  
				NUMERO_OXT: val.NUMERO_OXT,   
				FECHA_ENCUESTA: val.Fecha_encuesta,
				ANALISIS: $scope.observacion  
			};

			var promisePrio = General.grabaAnalisis($scope.DataAnalisis);
				promisePrio.then(
					function (result) {
						sweetAlert("Exito!", "El ticket ha cambiado su analisis!", "success");
						General.ObtieneEvaluacion($rootScope.fecha_desde_satis, $rootScope.IdPregunta).then(function(r){
							$rootScope.Evaluacion = r.data.data;
							//console.log($rootScope.Evaluacion);
							if($rootScope.Evaluacion==undefined){
								$rootScope.Evaluacion = [];
							}
						},
						function (error){
						});						
					},
					function (r) {
							$scope.err_msg = r;
							$scope.isError = 1;
							sweetAlert("Lo Siento =(!", "La operación no pudo llevarse a cabo!: "+$scope.err_msg, "error");
					}
				);
      $rootScope.CargandoGral = false;
     // $uibModalInstance.dismiss('cancel');
    };		 



}
])

.controller('viewDetalleReclamoCtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'GeneralConfirmacion', 'CONSTANTS', 
function ($scope, $timeout, $rootScope, $uibModalInstance, params, modalFactory, GeneralConfirmacion, CONSTANTS) {
	$scope.data = params;

	$scope.cancel = function () {
		$uibModalInstance.dismiss();
	};


}
])

.controller('viewDetalleObservacionCtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'GeneralConfirmacion', 'CONSTANTS', 
function ($scope, $timeout, $rootScope, $uibModalInstance, params, modalFactory, GeneralConfirmacion, CONSTANTS) {
	$scope.data = params;

	$scope.cancel = function () {
		$uibModalInstance.dismiss();
	};


}
])


.controller('viewDetalleFEICtrl', ['$scope', '$timeout', '$rootScope', '$uibModalInstance', 'params', 'modalFactory', 'GeneralConfirmacion', 'CONSTANTS', 
function ($scope, $timeout, $rootScope, $uibModalInstance, params, modalFactory, GeneralConfirmacion, CONSTANTS) {
	$scope.data = params;
	$scope.dataFei = [];

	GeneralConfirmacion.obtieneDetalleFEI($scope.data.NUMERO_OXT).then(function(result){
	  $rootScope.CargandoGral = true;
	  console.log(result.data.success);
		if(result.data.success ==true)
		  {
			  $scope.dataFei = result.data.data;
		  }
		  else
		  {
			sweetAlert("Lo Siento!", "No existen datos para la consulta!:"+result.data.mensaje, "error");
		  }
	
		},
		function(r){
			$rootScope.CargandoGral = false;
			sweetAlert("Lo Siento!", "No existen datos para la consulta!:"+r.data.mensaje, "error");
		})  
		
//Exportacion a Excel po loco!!! :D

/*
$scope.exportToExcel=function(tableId){ // ex: '#my-table'
	  $scope.exportHref=Excel.tableToExcel(tableId,'Reporte Incidencias');
	  $timeout(function(){
		location.href=$scope.exportHref;

		var isIE = /*@cc_on!@*false || !!document.documentMode;
		var isEdge = !isIE && !!window.StyleMedia;

		if(isEdge || isIE){
		  var blobObject = new Blob(location.href);
		  window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.xlsx');
		}


	  },100); // trigger download
}

*/
$scope.cancel = function () {
	$uibModalInstance.dismiss();
};


}
])

.controller('viewDetailModalInstanceCtrl', ['$scope', '$uibModalInstance', 'params',
	function ($scope, $uibModalInstance, params) {
        $scope.sdata = params;

		$scope.save = function () {
			$uibModalInstance.close();
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss();
		};
	}
]);



 //------------------------------------------------------- 

/**
 * @author Mauricio Llanten <mllantenll@ramservicios.cl>
 */
angular.module('home', [
    'CodetziPortabilidad.constant',
    'view-detail-modal',
])

.config(['$stateProvider', 'CONSTANTS',

	function ($stateProvider, CONSTANTS) {  
		$stateProvider

			.state('home', {
				abstract: true,
				url: '/home',
		    	template: '<ui-view/>',
		    	resolve: {
            cciInfo: function(){

            }  
		    	}
		    })
      .state('home.dashboard', {
          url: '/dashboard',
          templateUrl: '../app/home/dashboard/home-dashboard.tpl.html',
          controller: 'DashboardController'
      })
      .state('home.dashboardup', {
          url: '/dashboardup',
          templateUrl: '../app/home/dashboard/home-dashboardup.tpl.html',
          controller: 'DashboardUpController'
      })

      .state('tickets', { 
        url: '/tickets',    
        templateUrl: '../app/home/dashboard/home-tickets.tpl.html', 
        controller: 'ControllerTickets'
      })  

      .state('atenciones', {  
        url: '/atenciones',     
        templateUrl: '../app/home/dashboard/home-atenciones.tpl.html',  
        controller: 'ControllerAtenciones'
      })  
      .state('calidad', { 
        url: '/calidad', 
        templateUrl: '../app/home/dashboard/home-calidad.tpl.html', 
        controller: 'calidadController'
      })

      .state('warning', {
        url: '/warning',
        templateUrl: '../app/home/dashboard/home-warning.tpl.html',   
        controller: 'warningController' 
    })
      
      .state('home.contruccion', {
        url: '/contruccion',
        templateUrl: '../app/home/dashboard/enconstrucion.tpl.html',    
        controller: 'construccionController'
    })

    .state('busquedatickets', { 
      url: '/busquedatickets',      
      templateUrl: '../app/home/dashboard/home-busquedatickets.tpl.html',  
      controller: 'ControllerBusquedaAtenciones' 
    })  


	}
])

.controller('DashboardController', ['$scope','$rootScope', '$state', 'General', '$timeout', '$uibModal', 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale',
	function($scope, $rootScope, $state, General, $timeout, $uibModal, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale){
    $rootScope.satisLoad = false;  
    $scope.pathdoc = CONSTANTS.PATH_DOC_DECISION;   
    $scope.PATH_DOC_ticket = CONSTANTS.PATH_DOC_ticket;   
    $rootScope.includePath = CONSTANTS.INCLUDE_PATH;    
    //console.log('$rootScope.includePath:::', $rootScope.includePath);
    $rootScope.DataProceso = [];
    $scope.PreguntasEvaluacion = [];  
    $scope.ID_PROCESO_SIGUIENTE = '';
    $scope.Reclamos = [];  
    $scope.Causas = [];  
    $scope.tabActive = 0;
    $scope.tabActiveSub = 0;
    if($rootScope.currentUser.profile==0 ||$rootScope.currentUser.profile==1)$scope.tabActive=-1;  //Si el perfil es supervisor se habilita el tab dashboard
    $scope.motivocsop2 = "";
    $scope.motivocsop3 = "";
    $scope.motivocsop4 = ""; 
    $rootScope.ListaGeneralHistorial = [];
    $rootScope.resaltadoindex = -1;
    $rootScope.Finalizado = false;
		$rootScope.Observaciones="";
		$rootScope.conClase1="";	
		$rootScope.ticket1="";	
		$rootScope.ticket2="";
		$rootScope.ticket3="";
		$rootScope.ticket4="";
		$rootScope.ticket5="";
		$rootScope.ticket6="";
		$rootScope.ticket7="";
		$rootScope.ticket8="";
		$rootScope.ticket9="";
		$rootScope.ticket10="";

    
    // # Date Picker
//*************************************************************************************************    
$scope.dt = new Date();
$scope.dtt = new Date();
tmhDynamicLocale.set('es');
$scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy'];
$scope.format = $scope.formats[0];
$scope.altInputFormats = ['d!/M!/yyyy'];
$scope.dateOptions = {
  formatYear: 'yy',
  startingDay: 1,
  //minMode: 'month'
};

 
$scope.open1 = function() {
  $scope.popup1.opened = true;
};
$scope.open2 = function() {
  $scope.popup2.opened = true;
};
$scope.setDate = function(year, month, day) {
  $scope.dt = new Date(year, month, day);
  $scope.dtt = new Date(year, month, day);
};
$scope.popup1 = {
   opened: false
 };
$scope.changeHandler = function () {
    //$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
  }		 
$scope.popup2 = {
   opened: false  
 };
$scope.changeHandler2 = function () {
    //$scope.dateForm.dtt.$setValidity('$valid', $scope.dtt.getTime() >= $scope.minDate.getTime());
  }		 
 // # Date Picker

//**************************************************************************************************  

$rootScope.buscaID = function(){
  $rootScope.TICKET_TIPI = "0";  

  General.buscaID().then( 
    function (ficha) {
    $rootScope.satisLoad = false;
    if(ficha.data.success == true){
      $rootScope.TICKET_TIPI = ficha.data.TICKET; 
      document.getElementById("userForm").reset(); 
      }
      else{
      $rootScope.TICKET_TIPI = ficha.data.TICKET; 
      }
    },
      function (error){
      $rootScope.TICKET_TIPI = "0";   
      }); 

  }     

  
  //$rootScope.buscaID(); 


  $scope.ETAPA = '';
  $scope.ESTADO = '';

  $scope.ConfiguracionCapa2_OK = true;
  $scope.ConfiguracionCapa2_NOK = true;

  $scope.ConfiguracionCapa3_OK = false;
  $scope.ConfiguracionCapa3_NOK = false;

  $scope.ConfiguracionEquipoAlcanzable_OK = false;
  $scope.ConfiguracionEquipoAlcanzable_NOK = false;

  $scope.ActivacionAddons_OK = false;
  $scope.ActivacionAddons_NOK = false;

  
  $scope.ConfiguracionCapa2_Tiempo = "";
  $scope.ConfiguracionCapa3_Tiempo = "";
  $scope.ConfiguracionEquipoAlcanzable_Tiempo = "";
  $scope.ActivacionAddons_Tiempo = "";  


	$scope.guardaIngresosxEtapas=function(ETAPA, ESTADO) {  

    $scope.ETAPA = ETAPA;
    $scope.ESTADO = ESTADO;

    /*
		if (NOMBRE_SOLICITANTE==undefined || NOMBRE_SOLICITANTE==''){  
	
		  sweetAlert("Atención", 'Debes ingresar técnico a evaluar', "warning");
			return; 
	
    }
    */
	  
		General.guardaIngresosxEtapas($rootScope.TICKET_TIPI, ETAPA, ESTADO).then(  
		function(result){  
	  //console.log('Resultado de cambioa estad RAM:::['+result.data.success+']['+result.data.mensaje+']');
			  if(result.data.success == true){
				//Mensaje de ingreso existoso
				swal({
				  title: "Excelente!", 
				  text: result.data.mensaje, 
				  type: "success",
				  showCancelButton: false,
				  confirmButtonColor: "#A5DC86",
				  //confirmButtonText: "Aceptar",
				  confirmButtonText: "Aceptar",
				  //cancelButtonText: "No por ahora",
				  closeOnConfirm: true,
				  closeOnCancel: true
				  
				},
				  function(isConfirm){  
					  if (isConfirm) {   
						//$scope.cancel();
						  $rootScope.CargandoGral = false;    

              if($scope.ETAPA=='Configuración Capa 2' &&$scope.ESTADO=='OK'){

                $scope.ConfiguracionCapa2_OK = false;
                $scope.ConfiguracionCapa2_NOK = false; 

                $scope.ConfiguracionCapa3_OK = true;
                $scope.ConfiguracionCapa3_NOK = true;

                $scope.ActivacionAddons_OK = true;
                $scope.ActivacionAddons_NOK = true; 

                $scope.ConfiguracionCapa2_Tiempo = result.data.TIEMPO;

              }
              if($scope.ETAPA=='Configuración Capa 2' &&$scope.ESTADO=='NOK'){

                $scope.ConfiguracionCapa2_OK = false;
                $scope.ConfiguracionCapa2_NOK = false; 

                $scope.ConfiguracionCapa3_OK = false;
                $scope.ConfiguracionCapa3_NOK = false;

                $scope.ActivacionAddons_OK = false;
                $scope.ActivacionAddons_NOK = false; 

                $scope.ConfiguracionCapa2_Tiempo = result.data.TIEMPO;

              }              
              if($scope.ETAPA=='Configuración Capa 3' &&$scope.ESTADO=='OK'){

                $scope.ConfiguracionCapa2_OK = false;
                $scope.ConfiguracionCapa2_NOK = false; 

                $scope.ConfiguracionCapa3_OK = false;
                $scope.ConfiguracionCapa3_NOK = false;

                $scope.ConfiguracionEquipoAlcanzable_OK = true;
                $scope.ConfiguracionEquipoAlcanzable_NOK = true; 

                $scope.ConfiguracionCapa3_Tiempo = result.data.TIEMPO;


              }
              if($scope.ETAPA=='Configuración Capa 3' &&$scope.ESTADO=='NOK'){

                $scope.ConfiguracionCapa3_OK = false;
                $scope.ConfiguracionCapa3_NOK = false;

                $scope.ConfiguracionEquipoAlcanzable_OK = false;
                $scope.ConfiguracionEquipoAlcanzable_NOK = false; 

                $scope.ActivacionAddons_OK = true;
                $scope.ActivacionAddons_NOK = true;  

                $scope.ConfiguracionCapa3_Tiempo = result.data.TIEMPO;
 
              }

              if($scope.ETAPA=='Configuración Equipo Alcanzable' &&$scope.ESTADO=='OK'){

                $scope.ConfiguracionCapa2_OK = false;
                $scope.ConfiguracionCapa2_NOK = false; 

                $scope.ConfiguracionCapa3_OK = false;
                $scope.ConfiguracionCapa3_NOK = false;

                $scope.ConfiguracionEquipoAlcanzable_OK = false;
                $scope.ConfiguracionEquipoAlcanzable_NOK = false; 

                $scope.ConfiguracionEquipoAlcanzable_Tiempo = result.data.TIEMPO;

              }
              if($scope.ETAPA=='Configuración Equipo Alcanzable' &&$scope.ESTADO=='NOK'){

                $scope.ConfiguracionCapa2_OK = false;
                $scope.ConfiguracionCapa2_NOK = false; 

                $scope.ConfiguracionCapa3_OK = false;
                $scope.ConfiguracionCapa3_NOK = false;

                $scope.ConfiguracionEquipoAlcanzable_OK = false;
                $scope.ConfiguracionEquipoAlcanzable_NOK = false; 

                $scope.ActivacionAddons_OK = true;
                $scope.ActivacionAddons_NOK = true; 

                $scope.ConfiguracionEquipoAlcanzable_Tiempo = result.data.TIEMPO;

              }

              if($scope.ETAPA=='Activación Addons'){

                $scope.ActivacionAddons_OK = false;
                $scope.ActivacionAddons_NOK = false; 

                $scope.ActivacionAddons_Tiempo = result.data.TIEMPO;

              }




					  } else {
						$rootScope.CargandoGral = false;
						//$scope.cancel();
					  }
				  });
	  
			  }else{
				sweetAlert("Excelente!", result.data.mensaje, "success");
			  }
			},
			function(r){ 
			  sweetAlert("Lo Siento =(!", "Error  en insertar datos:", "error");
			}
			)
		  
    }  


//************************************BUSCA PUNTO DE CONTACTO**************************************************************  

  $rootScope.buscaPUNTO_CONTACTO = function(){
  $rootScope.PUNTO_CONTACTO = '';  

  General.buscaPUNTO_CONTACTO().then( 
    function (ficha) {
    $rootScope.satisLoad = false;
    if(ficha.data.success == true){
      $rootScope.PUNTO_CONTACTO = ficha.data.PUNTO_CONTACTO; 
      //console.log('PUNTO_CONTACTO::: ', $rootScope.PUNTO_CONTACTO);
      }
      else{
      $rootScope.PUNTO_CONTACTO = ''; 
      //console.log('PUNTO_CONTACTO:::ERROR ');
      }
    },
      function (error){
      $rootScope.PUNTO_CONTACTO = "";   
      //console.log('PUNTO_CONTACTO:::ERROR '); 
      }); 

  }     

  $rootScope.buscaPUNTO_CONTACTO(); 


        $scope.openModalTecnicos = function(value, id) {
        var data = {  
        };
        var ctrl = 'viewEvaluacionTecnico'; 
        var size = '';
        var callM = false;
        var params = [];
        $scope.isCargando = true;
        $rootScope.NOMBRE_SOLICITANTE = id;
        console.log ('Paso por acá value: '+ value);
        console.log ('Paso por acá NOMBRE_SOLICITANTE : '+ id);  
        switch (value) {
          //# 1 : MODAL SEGUIMIENTO
          case 1:
            var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/view_formulario_ingreso_evaluacion.html';
            var size = 'md'; 
            //var size = 'lg';
            params = id;
            callM = true;
            break;
          default:
  
        }
        if (callM == true){   
          ////console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');   
          $scope.isCargando = false; 
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              //console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }  
          });
        }
        else{
          //#PROMESA SEGUIMIENTO
          //console.log("promiseSeg::: ", promiseSeg)
          promiseSeg.then(
            function (result) {
              $scope.isCargando = false;
              ////console.log('Respuesta busqueda imagenes:::'+result.data.success);
              var data = {
                result: result
              };
              var params = data;
              //# Factory Modal 1
                modalFactory.open(template, ctrl, size, params).result.then(
                  function (responseNote) {
                    //console.log("modal::: ", responseNote)
                    if (responseNote.is_edit) { }
                });
            },
            function (r) {
                $scope.err_msg = r;
                $scope.isError = 1;
                $scope.isCargando = false;
                $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
            }
          );
        }
      };


    //$rootScope.Evaluacion = [];
    $rootScope.IdPregunta = 2;
//********************DATOS PARA DONUTS***********************/
$rootScope.optionsPortaRojo = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#FF0000',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPortaAmarillo = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#FFFF00',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPortaVerde = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#5BC01E',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#5BC01E',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPortaF = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#FF0000',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPortaEAG = {
  min: 0,
  max: 100,
  size: 120,
  barCap: 17,
  barColor: '#0976A6',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta_medium = {
  min: 0,
  max: 100,
  size: 140,
  barCap: 9,
  barColor: '#0976A6',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 15,
  barWidth: 15,
  readOnly: true
};
$rootScope.optionsPorta_small_1 = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#3CA2A6',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta_small_2 = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#952345',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta_small_3 = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#D8712F',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta_small_4 = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#00a65a',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsPorta_small_no_meta = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#FF0000',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsResultado = {
  min: 0,
  max: 100,
  size: 140,
  barCap: 9,
  barColor: '#0976A6',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 15,
  barWidth: 15,
  readOnly: true
};
$rootScope.optionsVerde = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#00a65a',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsRojo = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#FF0000',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.satis = {
  "Q_TOTAL"          : 0,
  "Q_ATT"            : 0,  
  "POR_ATT"          : 0,
  "Q_ATT_PROVISION"  : 0,  
  "POR_ATT_PROVISION": 0,
  "Q_CLIENTE"        : 0,
  "POR_CLIENTE"      : 0,
  "Q_CLIENTE_PROVISION" : 0,
  "POR_CLIENTE_PROVISION" : 0,
  "Q_COMERCIAL"      : 0,
  "POR_COMERCIAL"    : 0,
  "Q_COMERCIAL_PROVISION_ATT" : 0,
  "POR_COMERCIAL_PROVISION_ATT" : 0,
  "Q_FUNCIONAMIENTO" : 0,
  "POR_FUNCIONAMIENTO" : 0,
}
//*******************************************/

      $scope.ObtieneSiguienteProceso = function(ID, IDSiguiente, index, SubFuncion, SubProceso, TIPO_FORMA, SOLICITANTE, SOLICITUD_PARA, TIPO){
        $rootScope.DataGlosaValidacionOV=[];
        $rootScope.DataGlosaValidacionOG=[];
        $rootScope.Finalizado = false;
        console.log('Siguiente ID 1:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
        if(SubProceso == true &&TIPO_FORMA =='Finalizado'){
          $rootScope.IdSubProcesoActual = "0";
          $rootScope.SubProceso = false;
        }
        if(IDSiguiente==0){
          //console.log('paso 1');
          $rootScope.IdProcesoActual=ID;
          $rootScope.cleanAll();
        } else{$rootScope.DataGlosaOG = [];$rootScope.DataGlosaOV = [];}

        if(SubFuncion !="0" &&SubFuncion !=0){
          //console.log('paso 2');
          $rootScope.IdSubProcesoActual=SubFuncion;
          ID = $rootScope.IdSubProcesoActual;
          $scope.IdSub = ID;
          $rootScope.IdSubProcesoIDSiguiente = IDSiguiente;  
          $rootScope.SubProceso = true;
          IDSiguiente = "0";
        }

        if($rootScope.IdSubProcesoActual !="0"){
          //console.log('paso 3');
          ID = $rootScope.IdSubProcesoActual;    
        }
  
        console.log('Siguiente ID 2:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
 
        General.ObtieneSiguienteProceso(ID, IDSiguiente, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){
          if(r.data.success==true){
          $rootScope.DataProceso[index] = r.data.data;
          console.log('r :::', r); 
          //console.log('Tipo Etapa:::['+$rootScope.DataProceso[index][0].TIPO_FORMA+']');
          if($rootScope.DataProceso[index][0].OBSERVACION_VALIDACION==null)$rootScope.DataProceso[index][0].OBSERVACION_VALIDACION='';
          if($rootScope.DataProceso[index][0].OBSERVACION_GENERAL==null)$rootScope.DataProceso[index][0].OBSERVACION_GENERAL='';

          var OV = $rootScope.DataProceso[index][0].OBSERVACION_VALIDACION.split('<br>');
          var OG = $rootScope.DataProceso[index][0].OBSERVACION_GENERAL.split('<br>');

          angular.forEach(OV, function (value, key) {
            $rootScope.DataGlosaOV.push({'OBSERVACION_VALIDACION': value});
            })
          angular.forEach(OG, function (value, key) {
            $rootScope.DataGlosaOG.push({'OBSERVACION_GENERAL': value});
            })
            //console.log($rootScope.DataGlosaOV);
            //console.log($rootScope.DataGlosaOG);
  
            if($rootScope.DataProceso[index][0].TIPO_FORMA =='Datos'){
              $rootScope.testdata = $rootScope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
              if(index ==0){$rootScope.arrayforma0=[];}
              if(index ==1){$rootScope.arrayforma1=[];}
              if(index ==2){$rootScope.arrayforma2=[];}
              if(index ==3){$rootScope.arrayforma3=[];}
              if(index ==4){$rootScope.arrayforma4=[];}
              if(index ==5){$rootScope.arrayforma5=[];}
              if(index ==6){$rootScope.arrayforma6=[];}
              if(index ==7){$rootScope.arrayforma7=[];}
              if(index ==8){$rootScope.arrayforma8=[];}
              if(index ==9){$rootScope.arrayforma9=[];}
              if(index ==10){$rootScope.arrayforma10=[];}
              if(index ==11){$rootScope.arrayforma11=[];}
              if(index ==12){$rootScope.arrayforma12=[];}
              if(index ==13){$rootScope.arrayforma13=[];}
              if(index ==14){$rootScope.arrayforma14=[];}
              if(index ==15){$rootScope.arrayforma15=[];}
              if(index ==16){$rootScope.arrayforma16=[];}
              if(index ==17){$rootScope.arrayforma17=[];}
              if(index ==18){$rootScope.arrayforma18=[];}
              if(index ==19){$rootScope.arrayforma19=[];}
              if(index ==20){$rootScope.arrayforma20=[];}
              if(index ==21){$rootScope.arrayforma21=[];}
              if(index ==22){$rootScope.arrayforma22=[];}
              if(index ==23){$rootScope.arrayforma23=[];}
              angular.forEach($rootScope.testdata, function (value, key) {
                //console.log('Value:::'+value+' index:::'+index);
                if(index ==0){$rootScope.arrayforma0.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==1){$rootScope.arrayforma1.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==2){$rootScope.arrayforma2.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==3){$rootScope.arrayforma3.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==4){$rootScope.arrayforma4.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==5){$rootScope.arrayforma5.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==6){$rootScope.arrayforma6.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==7){$rootScope.arrayforma7.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==8){$rootScope.arrayforma8.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==9){$rootScope.arrayforma9.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==10){$rootScope.arrayforma10.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==11){$rootScope.arrayforma11.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==12){$rootScope.arrayforma12.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==13){$rootScope.arrayforma13.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==14){$rootScope.arrayforma14.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==15){$rootScope.arrayforma15.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==16){$rootScope.arrayforma16.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==17){$rootScope.arrayforma17.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==18){$rootScope.arrayforma18.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==19){$rootScope.arrayforma19.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==20){$rootScope.arrayforma20.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==21){$rootScope.arrayforma21.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==22){$rootScope.arrayforma22.push({ 'ETIQUETA_CONECTOR': value});}
                if(index ==23){$rootScope.arrayforma23.push({ 'ETIQUETA_CONECTOR': value});}  
              });
            }
            if($rootScope.DataProceso[index][0].TIPO_FORMA =='Decisión'){
              $rootScope.testdata1 = $rootScope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
              $rootScope.testdata2 = $rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE.split(',');
              var Largo = $rootScope.testdata1.length;
              if(index ==0){$rootScope.arraydecision0=[];}
              if(index ==1){$rootScope.arraydecision1=[];}
              if(index ==2){$rootScope.arraydecision2=[];}
              if(index ==3){$rootScope.arraydecision3=[];}
              if(index ==4){$rootScope.arraydecision4=[];}
              if(index ==5){$rootScope.arraydecision5=[];}
              if(index ==6){$rootScope.arraydecision6=[];}
              if(index ==7){$rootScope.arraydecision7=[];}
              if(index ==8){$rootScope.arraydecision8=[];}
              if(index ==9){$rootScope.arraydecision9=[];}
              if(index ==10){$rootScope.arraydecision10=[];}
              if(index ==11){$rootScope.arraydecision11=[];}
              if(index ==12){$rootScope.arraydecision12=[];}
              if(index ==13){$rootScope.arraydecision13=[];}
              if(index ==14){$rootScope.arraydecision14=[];}
              if(index ==15){$rootScope.arraydecision15=[];}
              if(index ==16){$rootScope.arraydecision16=[];}
              if(index ==17){$rootScope.arraydecision17=[];}
              if(index ==18){$rootScope.arraydecision18=[];}
              if(index ==19){$rootScope.arraydecision19=[];}
              if(index ==20){$rootScope.arraydecision20=[];}
              if(index ==21){$rootScope.arraydecision21=[];}
              if(index ==22){$rootScope.arraydecision22=[];}
              if(index ==23){$rootScope.arraydecision23=[];}  
              for (var i=0; i<Largo; i++) {
                //console.log('Test 1 :::'+$rootScope.testdata1[i]+' Test 2:::'+$rootScope.testdata2[i]);
                if($rootScope.DataProceso[index][0].GL_PROCESO =='El resultado de la validación es exitoso?'){

                  //console.log('$scope.APLICA::'+$scope.APLICA);
                  if($scope.APLICA !=undefined && $rootScope.testdata1[i] ==$scope.APLICA)
                  {
                    //console.log('entro a la wea');  
                    if(index ==4)$scope.decision4 = $rootScope.testdata2[i];
                    if(index ==5)$scope.decision5 = $rootScope.testdata2[i];
                    if(index ==6)$scope.decision6 = $rootScope.testdata2[i];
                    if(index ==7)$scope.decision7 = $rootScope.testdata2[i];
                    if(index ==8)$scope.decision8 = $rootScope.testdata2[i];                       
                    //$scope.ID_PROCESO_SIGUIENTE = '';
                    //$scope.APLICA=undefined;
                  }

                }
                console.log('Seleccion ::'+$scope.motivocsop0);
                if(index ==0){$rootScope.arraydecision0.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==1){$rootScope.arraydecision1.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==2){$rootScope.arraydecision2.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==3){$rootScope.arraydecision3.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==4){$rootScope.arraydecision4.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==5){$rootScope.arraydecision5.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==6){$rootScope.arraydecision6.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==7){$rootScope.arraydecision7.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==8){$rootScope.arraydecision8.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==9){$rootScope.arraydecision9.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==10){$rootScope.arraydecision10.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==11){$rootScope.arraydecision11.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==12){$rootScope.arraydecision12.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==13){$rootScope.arraydecision13.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==14){$rootScope.arraydecision14.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==15){$rootScope.arraydecision15.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==16){$rootScope.arraydecision16.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==17){$rootScope.arraydecision17.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==18){$rootScope.arraydecision18.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==19){$rootScope.arraydecision19.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==20){$rootScope.arraydecision20.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==21){$rootScope.arraydecision21.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==22){$rootScope.arraydecision22.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
                if(index ==23){$rootScope.arraydecision23.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
 
              }

            }
            if($rootScope.DataProceso[index][0].TIPO_FORMA =='Finalizado'){
              $rootScope.Finalizado = true;
              if($rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='0'){
                $scope.APLICA='OK';
              }

              if($rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='1'){
                $scope.APLICA='NOK';
              }                

            }

            if($rootScope.DataProceso[index][0].TIPO_FORMA !='Finalizado' &&$rootScope.DataProceso[index][0].FLUJO_OBLIGATORIO =='NO'){

              //console.log('index FLUJO_OBLIGATORIO NO', index+1);    
              $scope.ObtieneSiguienteProceso($rootScope.IdProcesoActual, $rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE, index+1, ($rootScope.DataProceso[index][0].OBLIGATORIO =='SI' ? $rootScope.DataProceso[index][0].ID_FUNCION : '0'), $rootScope.SubProceso, $rootScope.DataProceso[index][0].TIPO_FORMA);

            }
            
            //$rootScope.DataProceso[index+1]=undefined;$rootScope.DataProceso[index+2]=undefined;$rootScope.DataProceso[index+3]=undefined;$rootScope.DataProceso[index+4]=undefined;$rootScope.DataProceso[index+5]=undefined;$rootScope.DataProceso[index+6]=undefined;$rootScope.DataProceso[index+7]=undefined;$rootScope.DataProceso[index+8]=undefined;$rootScope.DataProceso[index+9]=undefined;
          }
          else{
            console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          console.log('Trae datos Nok 2');
        });

      }

      $rootScope.ObtieneMaterialApoyo = function(){   
        General.ObtieneMaterialApoyo($rootScope.IdProcesoActual).then(function(r){
          if(r.data.success==true){
            $rootScope.DataMaterialApoyo = r.data.data;  
          }
          else{
            $rootScope.DataMaterialApoyo = [];
            console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          $rootScope.DataMaterialApoyo = []; 
          console.log('Trae datos Nok 2');
        });
      }


      $rootScope.ObtieneProcedimientosRecurrentes = function(){
        General.ObtieneProcedimientosRecurrentes().then(function(r){
          if(r.data.success==true){
            $rootScope.DataProcesoRecurrentes = r.data.data;  
            //console.log($rootScope.DataProcesoRecurrentes);
          }
          else{
            console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          console.log('Trae datos Nok 2');
        });
      }
      $rootScope.ObtieneProcedimientosRecurrentes();

      $rootScope.ValidaDecision = function(Op, Valor, Siguiente){
        console.log('Op:::'+Op+' Valor:::'+Valor+' Siguiente:::'+Siguiente);
        if(Op==1){
          if(Valor=='NOK'){
            //$scope.decision7='400';
            $scope.decision7=Siguiente;
          }
          if(Valor=='OK'){
            //$scope.decision7='600';
            $scope.decision7=Siguiente;
          }
        }
        if(Op==7){
          if(Valor=='NOK'){
            //$scope.decision7='400';
            $scope.decision7=Siguiente;
          }
          if(Valor=='OK'){
            //$scope.decision7='500';
            $scope.decision7=Siguiente;
          }
        }
        if(Op==8){
          if(Valor=='NOK'){
            //$scope.decision7='400';
            $scope.decision7=Siguiente;
          }
          if(Valor=='OK'){
            //$scope.decision7='500';
            $scope.decision7=Siguiente;
          }
        }
      }
  
      $scope.ObtieneGlosas = function(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO){
          $rootScope.DataGlosaValidacionOV=[];
          $rootScope.DataGlosaValidacionOG=[];
          $scope.APLICA=undefined;
        if(ID_FLUJO=="0" &&ID_FLUJO==0) ID_FLUJO=$rootScope.IdSubProcesoActual;

        console.log('ObtieneGlosas Validación:  ID_FLUJO:::::::['+ID_FLUJO+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');

        General.ObtieneGlosas(ID_FLUJO, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){

          if(r.data.success==true){
            //$rootScope.DataGlosaValidacion = r.data.data;
            if(r.data.data[0].OBSERVACION_VALIDACION==null)r.data.data[0].OBSERVACION_VALIDACION='';
            if(r.data.data[0].OBSERVACION_GENERAL==null)r.data.data[0].OBSERVACION_GENERAL='';
  
            var OV1 = r.data.data[0].OBSERVACION_VALIDACION;
            var OG1 = r.data.data[0].OBSERVACION_GENERAL;
            //console.log(OV1);
            //console.log(OG1);
            if(OV1==null)OV1='';
            if(OG1==null)OG1='';
            var OV = OV1.split('<br>');
            var OG = OG1.split('<br>');
  
            angular.forEach(OV, function (value, key) {
              $rootScope.DataGlosaValidacionOV.push({ 'OBSERVACION_VALIDACION': value});
              })
            angular.forEach(OG, function (value, key) {
              $rootScope.DataGlosaValidacionOG.push({ 'OBSERVACION_GENERAL': value});
              })

            console.log($rootScope.DataGlosaValidacionOV);
            console.log($rootScope.DataGlosaValidacionOG);
  
            $scope.APLICA = r.data.data[0].APLICA;
            $scope.ID_PROCESO_SIGUIENTE = r.data.data[0].ID_PROCESO_SIGUIENTE;

            //console.log('Flujo para decision:::'+ID_FLUJO);
            //console.log('ID_PROCESO_SIGUIENTE:::'+$scope.ID_PROCESO_SIGUIENTE);
            //$rootScope.ValidaDecision(ID_FLUJO, $scope.APLICA, $scope.ID_PROCESO_SIGUIENTE);
          }
          else{     
            console.log('Trae glosas Nok 1 :::'+r.data.mensaje);  
          }
        },
        function (error){
          console.log('Trae glosas Nok 2');
        });

      }      


      $rootScope.changeindextab = function(Valor){
        $scope.tabActive = Valor;
        console.log('Tabs:::'+$scope.tabActive);
      } 


      $rootScope.Historial = false;

      $rootScope.BuscarTickets = function(TIPO_BUSQUEDA, VALOR){ 
        $rootScope.ListaGeneralHistorial = [];
       var DATO = '';
        var Fecha_D = '20230205';//moment($scope.dt).format('YYYYMMDD'); 
        var Fecha_H = moment($scope.dt1).format('YYYYMMDD'); 
  
     
        console.log('Enviados a reporte ticket historial: [' + Fecha_D + '][' + Fecha_H + ']');   
      General.BuscarTickets(Fecha_D, Fecha_H, TIPO_BUSQUEDA, VALOR).then(   
        function(result){
          if(result.data.success == false){
            $rootScope.ListaGeneralHistorial = [];
            //sweetAlert("Lo Siento =(!", "Error en búsqueda reporte obtieneProactividad", "error");  
          }else{ 
            $rootScope.ListaGeneralHistorial = result.data.data;   
            
          }
        },  
        function(r){
          $rootScope.ListaGeneralHistorial = [];  
         }
      );
      
      }
  
//****************************VALIDACIONES************************************/

$scope.validaNUMERO_OXT = false;
$scope.validaCOD_SERVICIO = false;
$scope.validaWO = false;
$scope.validaSERVER_PROFILE = false;
$scope.validaRANGOS_TR069 = false;
$scope.validaUSERNAME = false;
$scope.validaPASSWORD = false;
$scope.validaLAST_DOWN_CORRECTA = false;
$scope.validaOBSERVACION1 = false;

$scope.validaDatos = function(TIPO_DATO, DATO){    

  console.log('TIPO_DATO :::', TIPO_DATO);   
  console.log('DATO :::', DATO);   

  var DATO = DATO;

  if(TIPO_DATO=='NUMERO_OXT'){
        console.log('DATO.length :::', DATO.length); 
      if(DATO>2000)  
        $scope.validaNUMERO_OXT = true;
      else
        $scope.validaNUMERO_OXT = false;
  }

  if(TIPO_DATO=='COD_SERVICIO'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaCOD_SERVICIO = true;
    else
      $scope.validaCOD_SERVICIO = false; 
  }

  if(TIPO_DATO=='WO'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaWO = true;
    else
      $scope.validaWO = false;
  }
  if(TIPO_DATO=='SERVER_PROFILE'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaSERVER_PROFILE = true;
    else
      $scope.validaSERVER_PROFILE = false;
  }
  if(TIPO_DATO=='RANGOS_TR069'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaRANGOS_TR069 = true;
    else
      $scope.validaRANGOS_TR069 = false;
  }
  if(TIPO_DATO=='USERNAME'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaUSERNAME = true;
    else
      $scope.validaUSERNAME = false;
  }
  if(TIPO_DATO=='PASSWORD'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaPASSWORD = true;
    else
      $scope.validaPASSWORD = false;
  }
  if(TIPO_DATO=='LAST_DOWN_CORRECTA'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaLAST_DOWN_CORRECTA = true;
    else
      $scope.validaLAST_DOWN_CORRECTA = false;
  }
  if(TIPO_DATO=='OBSERVACION1'){
    console.log('DATO.length :::', DATO.length); 
    if(DATO.length>2)  
      $scope.validaOBSERVACION1 = true;
    else
      $scope.validaOBSERVACION1 = false; 
  }



}

/*****************************************************************************/
/************************PESTAÑA INGRESO TICKET*******************************/
/*****************************************************************************/
$scope.NUMERO_OXT = '';  
$scope.COD_SERVICIO = '';
$scope.TIPO_SERVICIO = '';
$scope.RESULTADO_PROVISION = '';
$scope.WO = '';
$scope.RESULTADO_CERTIFICACION = '';
$scope.CODIGO_PADRE = '';
$scope.VALIDACION_PROFILE_TR069 = '';
$scope.COLOR_ACTIVIDAD = '';
$scope.RANGOS_TR069 = '';
$scope.IP = '';
$scope.REINICIO_WAN = '';
$scope.LAST_DOWN_CORRECTA = '';
$scope.USERNAME = '';
$scope.PASSWORD = '';
$scope.OBSERVACION = '';

$rootScope.GuardaImagen=function(ID, TIPO, reader, file, res){
  //console.log('paso 2 para guardar imagen',ID);
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      base64data = reader.result;
      res = base64data.split(",");
        var saveIMG = {
          'ID' : ID,
          'TIPO': TIPO,
          'IMAGEN' : res[1],//base64data
          'USUARIO' : $rootScope.currentUser.user_id,
          'EXTENCION' : file.name.substring(file.name.lastIndexOf(".")).toLowerCase()
        }
     //   console.log('saveIMG',saveIMG);
     General.getGuardaImagen(saveIMG).then(
      function(result){
    //    console.log('paso 3 para guardar imagen',ID);
            if(result.data.success == true){
             
              return 'Grabo imagen:'+file.name;
            }else{
              return 'No grabo imagen 1:'+file.name;
        }
      },
      function(r){
        return 'No grabo imagen 2:'+file.name;
      }
    );
    }
};

$scope.GuardarTicketCetificacion = function (blob, blob1, NUMERO_OXT, COD_SERVICIO, WO, SERVER_PROFILE, RANGOS_TR069, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, USUARIO, OBSERVACION) {

console.log('OBSERVACION :::', OBSERVACION); 
  console.log('blod ::::', blob);
  console.log('blod1 ::::', blob1); 

  swal({
    title: "Confirmación!",
    text: "¿Esta seguro de ingresar el ticket?",  
    type: "warning",
    showCancelButton: true, 
    confirmButtonColor: "#A5DC86", 
    cancelButtonColor: "#A5DC86", 
    focusConfirm: false,
    confirmButtonText: "Aceptar",
    cancelButtonText: "No",
    closeOnConfirm: true,
    closeOnCancel: true
  },
    function(isConfirm){  
        if (isConfirm) {   


          General.GuardarTicketCetificacion(NUMERO_OXT, COD_SERVICIO, WO, SERVER_PROFILE, RANGOS_TR069, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, OBSERVACION).then(  
          function(result){  
            $rootScope.CargandoGral = true; 
            console.log('Resultado GuardarTicket:::['+result.data.success+']['+result.data.mensaje+']');   
                if(result.data.success == true){

                  if(blob){
                    //Para grabar multiples imagenes
                    for (var i = 0; i < blob.length; i++) {
                      var res = "";  
                      var Resultado = $rootScope.GuardaImagen(result.data.IdTicket, 'Imagen Username', new window.FileReader(), blob[i], res);
                      }
                    }
                  if(blob1){
                    //Para grabar multiples imagenes
                    for (var i = 0; i < blob.length; i++) {
                      var res = "";  
                      var Resultado = $rootScope.GuardaImagen(result.data.IdTicket, 'Imagen Password', new window.FileReader(), blob1[i], res);  
                      }
                    }

                  //Mensaje de ingreso existoso
                  swal({
                    title: "Excelente!",   
                    text: "Se ha generado el ticket de forma de forma exitosa, Ticket Nro:["+result.data.IdTicket+"]", 
                    type: "success",
                    showCancelButton: false,
                    confirmButtonColor: "#A5DC86", 
                    //confirmButtonText: "Aceptar",
                    confirmButtonText: "Aceptar",
                    //cancelButtonText: "No por ahora",
                    closeOnConfirm: true,
                    closeOnCancel: true
                  },
                    function(isConfirm){  
                        if (isConfirm) {   
                            document.getElementById("userFormTicketCertificacion").reset();  
                            $scope.reset();
                            $rootScope.CargandoGral = false;    
                        } else {
                          $rootScope.CargandoGral = false;
                        }
                    });

                }else{
                  $rootScope.CargandoGral = false;
                  sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
                }
              },
              function(r){ 
                $rootScope.CargandoGral = false;
                sweetAlert("Lo Siento =(!", "Error en generación de evaluación:", "error");
              }
              )


        } else {
          $rootScope.CargandoGral = false;
        }
      });

}      
$scope.GuardarTicket = function (blob, blob1, NUMERO_OXT, COD_SERVICIO, RESULTADO_PROVISION, WO, RESULTADO_CERTIFICACION, CODIGO_PADRE, VALIDACION_PROFILE_TR069, COLOR_ACTIVIDAD, RANGOS_TR069, IP, REINICIO_WAN, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, OBSERVACION) {


  console.log('blod ::::', blob);
  console.log('blod1 ::::', blob1); 

General.GuardarTicket(NUMERO_OXT, COD_SERVICIO, RESULTADO_PROVISION, WO, RESULTADO_CERTIFICACION, CODIGO_PADRE, VALIDACION_PROFILE_TR069, COLOR_ACTIVIDAD, RANGOS_TR069, IP, REINICIO_WAN, LAST_DOWN_CORRECTA, USERNAME, PASSWORD, OBSERVACION).then(  
function(result){  
  $rootScope.CargandoGral = true; 
  console.log('Resultado GuardarTicket:::['+result.data.success+']['+result.data.mensaje+']'); 
      if(result.data.success == true){

        if(blob){
          //Para grabar multiples imagenes
          for (var i = 0; i < blob.length; i++) {
            var res = "";  
            var Resultado = $rootScope.GuardaImagen(result.data.IdTicket, 'Log APP DE CHAT', new window.FileReader(), blob[i], res);
            }
          }
        if(blob1){
          //Para grabar multiples imagenes
          for (var i = 0; i < blob.length; i++) {
            var res = "";  
            var Resultado = $rootScope.GuardaImagen(result.data.IdTicket, 'Log Configuración', new window.FileReader(), blob1[i], res); 
            }
          }

        //Mensaje de ingreso existoso
        swal({
          title: "Excelente!",   
          text: "Se ha generado el ticket de forma de forma exitosa, Ticket Nro:["+result.data.IdTicket+"]", 
          type: "success",
          showCancelButton: false,
          confirmButtonColor: "#A5DC86", 
          //confirmButtonText: "Aceptar",
          confirmButtonText: "Aceptar",
          //cancelButtonText: "No por ahora",
          closeOnConfirm: true,
          closeOnCancel: true
        },
          function(isConfirm){  
              if (isConfirm) {   
                  $scope.reset();
                  $rootScope.CargandoGral = false;    
              } else {
                $rootScope.CargandoGral = false;
              }
          });

      }else{
        $rootScope.CargandoGral = false;
        sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
      }
    },
    function(r){ 
      $rootScope.CargandoGral = false;
      sweetAlert("Lo Siento =(!", "Error en generación de evaluación:", "error");
    }
    )

}      

$scope.resetTicket = function() {

  console.log('entra por acá???');

  $scope.NUMERO_OXT = '';
  $scope.COD_SERVICIO = '';
  $scope.TIPO_SERVICIO = '';
  $scope.RESULTADO_PROVISION = '';
  $scope.WO = '';
  $scope.RESULTADO_CERTIFICACION = '';
  $scope.CODIGO_PADRE = '';
  $scope.VALIDACION_PROFILE_TR069 = '';
  $scope.COLOR_ACTIVIDAD = '';
  $scope.RANGOS_TR069 = '';
  $scope.IP = '';
  $scope.REINICIO_WAN = '';
  $scope.LAST_DOWN_CORRECTA = '';
  $scope.USERNAME = '';
  $scope.PASSWORD = '';
  $scope.OBSERVACION = '';
  };

/*****************************************************************************/
/************************PESTAÑA INGRESO ATENCION*****************************/
/*****************************************************************************/
$scope.COD_SERVICIO = '';
$scope.TIPO_SERVICIO = '';
$scope.WO = '';
$scope.TIPO_TRABAJO = '';
$scope.SEGMENTO = '';
$scope.RAZON_SOCIAL = '';
$scope.PLANTILLA = '';
$scope.EXTREMO_A = '';
$scope.EXTREMO_B = '';
$scope.NOMBRE_SOLICITANTE = '';
$scope.TELEFONO_SOLICITANTE = '';
$scope.AREA_SOLICITANTE = '';
$scope.UNIDAD_SOLICITANTE = '';
$scope.TIPO_LLAMADO = '';
$scope.SOLICITUD = '';
$scope.RESULTADO = '';
$scope.ACCION = '';
$scope.RESPONSABLE = '';
$scope.TICKET = '';
$scope.COD_GRABACION = '';
$scope.OBSERVACION = '';
$rootScope.DataTipoLlamado = [];
$rootScope.DataSolicitud = [];
$rootScope.DataResultado = [];
$rootScope.DataAccion = [];
$rootScope.VerTiemposxEtapa = false;


$scope.ObtieneDatosOTT = function(NUMERO_OXT){    

  $scope.COD_SERVICIO = '';
	$scope.TIPO_SERVICIO = '';  
	$scope.WO = '';
	$scope.TIPO_TRABAJO = '';
	$scope.SEGMENTO = '';
	$scope.RAZON_SOCIAL = '';
	$scope.PLANTILLA = '';
	$scope.EXTREMO_A = '';
	$scope.EXTREMO_B = '';
  $scope.NOMBRE_SOLICITANTE = '';
  $scope.TELEFONO_SOLICITANTE = '';
  $scope.AREA_SOLICITANTE = '';
  $scope.UNIDAD_SOLICITANTE = '';
  $scope.TIPO_LLAMADO = '';
  $scope.SOLICITUD = '';
  $scope.RESULTADO = '';
  $scope.ACCION = '';
  $scope.RESPONSABLE = '';
  $scope.TICKET = '';
  $scope.COD_GRABACION = '';
  $scope.OBSERVACION = '';

     if(NUMERO_OXT=='' ||NUMERO_OXT==undefined ||NUMERO_OXT==null ||NUMERO_OXT=='0'){
      sweetAlert("Lo Siento =(!", "Debe ingresar OTT a buscar", "warning");  
      return;
     }
  
    General.ObtieneDatosOTT(NUMERO_OXT).then(function(r){   
      console.log('r.data ObtieneDatosOTT:::', r.data); 
      if(r.data.success==true){
        //$rootScope.DataNumeroOTT = r.data.data;     
        console.log('r.data.data:::', r.data.data);
        $scope.COD_SERVICIO = r.data.data[0].COD_SERVICIO;
        $scope.TIPO_SERVICIO = r.data.data[0].TIPO_SERVICIO;
        $scope.WO = r.data.data[0].WO;
        $scope.TIPO_TRABAJO = r.data.data[0].TIPO_TRABAJO;
        $scope.SEGMENTO = r.data.data[0].SEGMENTO;
        $scope.RAZON_SOCIAL = r.data.data[0].RAZON_SOCIAL;
        $scope.PLANTILLA = r.data.data[0].PLANTILLA;
        $scope.EXTREMO_A = r.data.data[0].EXTREMO_A;
        $scope.EXTREMO_B = r.data.data[0].EXTREMO_B;  
        $scope.NOMBRE_SOLICITANTE = '';
        $scope.TELEFONO_SOLICITANTE = '';
        $scope.AREA_SOLICITANTE = '';
        $scope.UNIDAD_SOLICITANTE = '';
        $scope.TIPO_LLAMADO = '';
        $scope.SOLICITUD = '';
        $scope.RESULTADO = '';
        $scope.ACCION = '';
        $scope.RESPONSABLE = '';
        $scope.TICKET = '';
        $scope.COD_GRABACION = '';
        $scope.OBSERVACION = '';
      
      }
      else{
        //$rootScope.DataNumeroOTT = [];
      }
    },
    function (error){
      //$rootScope.DataNumeroOTT = [];    
    });
}


$scope.ObtieneGlosas = function(TIPO_DATO){    

  General.ObtieneGlosasBKP(TIPO_DATO).then(function(r){  
    
    if(r.data.success==true){

      if(TIPO_DATO=='TIPO_SERVICIO'){
        $rootScope.DataTIPO_SERVICIO = r.data.data;  
      }
      if(TIPO_DATO=='TIPO_TRABAJO'){
        $rootScope.DataTIPO_TRABAJO = r.data.data;  
      }
      if(TIPO_DATO=='AREA_SOLICITANTE'){
        $rootScope.DataAREA_SOLICITANTE = r.data.data;  
      }
      if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
        $rootScope.DataUNIDAD_SOLICITANTE = r.data.data;  
      }
      if(TIPO_DATO=='SEGMENTO'){  
        $rootScope.DataSEGMENTO = r.data.data;  
      }
      if(TIPO_DATO=='HUELLA'){  
        $rootScope.DataHUELLA = r.data.data;  
      }
      if(TIPO_DATO=='SOLUCION'){  
        $rootScope.DataSOLUCION = r.data.data;   
      }
      if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
        $rootScope.DataMOTIVO_CAUSA_LLAMADO = r.data.data;  
      }
      if(TIPO_DATO=='RESPONSABLE'){  
        $rootScope.DataRESPONSABLE = r.data.data;   
      }
      if(TIPO_DATO=='RESPONSABLE HOGAR'){  
        $rootScope.DataRESPONSABLE = r.data.data;   
      }
      if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
        $rootScope.DataPROBLEMA_REPORTADO = r.data.data;  
      }

      
    }
    else{
      if(TIPO_DATO=='TIPO_SERVICIO'){
        $rootScope.DataTIPO_SERVICIO = [];  
      }
      if(TIPO_DATO=='TIPO_TRABAJO'){
        $rootScope.DataTIPO_TRABAJO = [];  
      }
      if(TIPO_DATO=='AREA_SOLICITANTE'){
        $rootScope.DataAREA_SOLICITANTE = [];  
      }
      if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
        $rootScope.DataUNIDAD_SOLICITANTE = [];  
      }
      if(TIPO_DATO=='SEGMENTO'){  
        $rootScope.DataSEGMENTO = [];  
      }
      if(TIPO_DATO=='HUELLA'){  
        $rootScope.DataHUELLA = [];  
      }
      if(TIPO_DATO=='SOLUCION'){  
        $rootScope.DataSOLUCION = [];  
      }
      if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
        $rootScope.DataMOTIVO_CAUSA_LLAMADO = [];   
      }
      if(TIPO_DATO=='RESPONSABLE'){  
        $rootScope.DataRESPONSABLE = [];   
      }
      if(TIPO_DATO=='RESPONSABLE HOGAR'){  
        $rootScope.DataRESPONSABLE = r.data.data;   
      }
      if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
        $rootScope.DataPROBLEMA_REPORTADO = [];   
      }

    }
  },
  function (error){
    if(TIPO_DATO=='TIPO_SERVICIO'){
      $rootScope.DataTIPO_SERVICIO = [];  
    }
    if(TIPO_DATO=='TIPO_TRABAJO'){
      $rootScope.DataTIPO_TRABAJO = [];  
    }
    if(TIPO_DATO=='AREA_SOLICITANTE'){
      $rootScope.DataAREA_SOLICITANTE = [];  
    }
    if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
      $rootScope.DataUNIDAD_SOLICITANTE = [];  
    }
    if(TIPO_DATO=='SEGMENTO'){  
      $rootScope.DataSEGMENTO = [];  
    }
    if(TIPO_DATO=='HUELLA'){  
      $rootScope.DataHUELLA = [];   
    }
    if(TIPO_DATO=='SOLUCION'){  
      $rootScope.DataSOLUCION = [];  
    }
  if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
      $rootScope.DataMOTIVO_CAUSA_LLAMADO = [];
    }   
    if(TIPO_DATO=='RESPONSABLE'){  
      $rootScope.DataRESPONSABLE = [];   
    }
    if(TIPO_DATO=='RESPONSABLE HOGAR'){  
      $rootScope.DataRESPONSABLE = r.data.data;   
    }
    if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
      $rootScope.DataPROBLEMA_REPORTADO = [];    
    }

});

}

$scope.obtienePlataforma = function(){  

  $rootScope.DataTipoLlamado = [];
  $rootScope.DataSolicitud = [];
  $rootScope.DataResultado = [];
  $rootScope.DataAccion = [];
    
    General.obtienePlataforma().then(function(r){ 
      if(r.data.success==true){
        $rootScope.DataPlataforma = r.data.data;  
      }
      else{
        $rootScope.DataPlataforma = [];
      }
    },
    function (error){
      $rootScope.DataPlataforma = [];  
    });
  }
  
$scope.ObtieneTipoLlamado = function(PLATAFORMA){  

$rootScope.DataTipoLlamado = [];
$rootScope.DataSolicitud = [];
$rootScope.DataResultado = [];
$rootScope.DataAccion = [];
  
  General.ObtieneTipoLlamado(PLATAFORMA).then(function(r){ 
    if(r.data.success==true){
      $rootScope.DataTipoLlamado = r.data.data;  
    }
    else{
      $rootScope.DataTipoLlamado = [];
    }
  },
  function (error){
    $rootScope.DataTipoLlamado = []; 
  });
}
$scope.ObtieneSolicitud = function(PLATAFORMA, TipoLlamado){    

  $rootScope.DataSolicitud = [];
  $rootScope.DataResultado = [];
  $rootScope.DataAccion = [];

  General.ObtieneSolicitud(PLATAFORMA, TipoLlamado).then(function(r){  
    if(r.data.success==true){
      $rootScope.DataSolicitud = r.data.data;  
    }
    else{
      $rootScope.DataSolicitud = [];
    }
  },
  function (error){
    $rootScope.DataSolicitud = [];  
  });
}
$scope.ObtieneResultado = function(PLATAFORMA, TipoLlamado, Solicitud){    

  $rootScope.DataResultado = [];
  $rootScope.DataAccion = [];
  
  General.ObtieneResultado(PLATAFORMA, TipoLlamado, Solicitud).then(function(r){    
    if(r.data.success==true){
      $rootScope.DataResultado = r.data.data;  
    }
    else{
      $rootScope.DataResultado = [];
    }
  },
  function (error){
    $rootScope.DataResultado = [];   
  });
}
$scope.ObtieneAccion = function(PLATAFORMA, TipoLlamado, Solicitud, Resultado){    


  if((PLATAFORMA =='TELCO' &&TipoLlamado =='PROVISION' &&Solicitud =='GESTION TECNICA' &&Resultado =='Activacion ') || (PLATAFORMA =='CALIDAD' &&TipoLlamado =='VALIDACION' &&Solicitud =='GESTION TECNICA' &&(Resultado !='CONSULTA' &&Resultado !='MEDICION' &&Resultado !='MEDICION - EXCEPCION' &&Resultado !=''))){

     $rootScope.VerTiemposxEtapa = true;
  }
  else{
     $rootScope.VerTiemposxEtapa = false;
  }

  $rootScope.DataAccion = [];

  General.ObtieneAccion(PLATAFORMA, TipoLlamado, Solicitud, Resultado).then(function(r){     
    if(r.data.success==true){
      $rootScope.DataAccion = r.data.data;  
    }
    else{
      $rootScope.DataAccion = [];
    }
  },
  function (error){
    $rootScope.DataAccion = [];    
  });
}

$scope.obtienePlataforma();
//$scope.ObtieneTipoLlamado(); 
$scope.ObtieneGlosas('TIPO_SERVICIO');
$scope.ObtieneGlosas('TIPO_TRABAJO');
$scope.ObtieneGlosas('AREA_SOLICITANTE');
$scope.ObtieneGlosas('UNIDAD_SOLICITANTE');
$scope.ObtieneGlosas('SEGMENTO'); 
$scope.ObtieneGlosas('HUELLA');  
$scope.ObtieneGlosas('MOTIVO_CAUSA_LLAMADO');   
$scope.ObtieneGlosas('SOLUCION');   
//$scope.ObtieneGlosas('RESPONSABLE');    
//$scope.ObtieneGlosas('RESPONSABLE HOGAR');
$scope.ObtieneGlosas('PROBLEMA_REPORTADO');    

$scope.buscaResponsable = function (PLATAFORMA) {

  if(PLATAFORMA!='HOGAR'){
    $scope.ObtieneGlosas('RESPONSABLE');    
  }
  else
  {
    $scope.ObtieneGlosas('RESPONSABLE HOGAR'); 
  }

}

$scope.GuardarAtencion = function (blob, NUMERO_OXT, COD_SERVICIO, TIPO_SERVICIO, WO, TIPO_TRABAJO, SEGMENTO, RAZON_SOCIAL, PLANTILLA, EXTREMO_A, EXTREMO_B, NOMBRE_SOLICITANTE, TELEFONO_SOLICITANTE, AREA_SOLICITANTE, UNIDAD_SOLICITANTE, TIPO_LLAMADO, SOLICITUD, RESULTADO, HUELLA, SOLUCION, PROBLEMA_REPORTADO, APLICA_LLAMADA_CESOP, MOTIVO_LLAMADO, RESOLVIO_AUTOMATICAMENTE, REQUIERE_ESCALAMIENTO, A_QUIEN_ESCALO, TICKET_ESCALAMIENTO, REQUERIMIENTO_ONNET, ACCION, RESPONSABLE, TICKET, COD_GRABACION, OBSERVACION, MOTIVO_RESPONSABLE, PLATAFORMA, NECESITA_FOCAL, FOCAL) {

  $scope.OBSERVACION = OBSERVACION.replace('errorcode','').replace('</','').replace('>','').replace('>','').replace('<','').replace('<','').replace('<','"').replace('<','"'); 
   
  if(blob){
   if(blob[0].size>6000000){  
    sweetAlert("Atención!", "El archivo ingresado no puede superar los 6 MB de tamaño", "warning");      
    return;
   }
  }

  if(HUELLA=='OnNet' &&PLATAFORMA !='CALIDAD' &&PLATAFORMA !='TELCO - ITP'){

    if (PROBLEMA_REPORTADO==undefined || PROBLEMA_REPORTADO==null || PROBLEMA_REPORTADO=='' ){    
      sweetAlert("Atención!", "Debe ingresar problema reportado", "warning");
      return;
    }
  
    if (APLICA_LLAMADA_CESOP==undefined || APLICA_LLAMADA_CESOP==null || APLICA_LLAMADA_CESOP=='' ){ 
      sweetAlert("Atención!", "Debe ingresar aplica llamada Cesop", "warning");
      return;
    }
    if (MOTIVO_LLAMADO==undefined || MOTIVO_LLAMADO==null || MOTIVO_LLAMADO=='' ){ 
      sweetAlert("Atención!", "Debe ingresar motivo llamado", "warning");
      return;
    }
    if (RESOLVIO_AUTOMATICAMENTE==undefined || RESOLVIO_AUTOMATICAMENTE==null || RESOLVIO_AUTOMATICAMENTE=='' ){ 
      sweetAlert("Atención!", "Debe ingresar si resolvio automáticamente", "warning");
      return;
    }
    if (REQUIERE_ESCALAMIENTO==undefined || REQUIERE_ESCALAMIENTO==null || REQUIERE_ESCALAMIENTO=='' ){ 
      sweetAlert("Atención!", "Debe ingresar si requiere escalamiento solicitud", "warning");
      return;
    }
    if (A_QUIEN_ESCALO==undefined || A_QUIEN_ESCALO==null || A_QUIEN_ESCALO=='' ){ 
      sweetAlert("Atención!", "Debe ingresar a quien escaló", "warning"); 
      return;
    }
    if (TICKET_ESCALAMIENTO==undefined || TICKET_ESCALAMIENTO==null || TICKET_ESCALAMIENTO=='' ){ 
      sweetAlert("Atención!", "Debe ingresar ticket escalamiento", "warning"); 
      return;
    }
  
  
  }  
  else{

        PROBLEMA_REPORTADO = '';
        APLICA_LLAMADA_CESOP = '';  
        MOTIVO_LLAMADO = '';
        RESOLVIO_AUTOMATICAMENTE = '';
        REQUIERE_ESCALAMIENTO = '';
        A_QUIEN_ESCALO = '';
        TICKET_ESCALAMIENTO = '';
        REQUERIMIENTO_ONNET = '';  
  
  }

  swal({
    title: "Confirmación!",
    text: "¿Esta seguro de terminar la llamada?",  
    type: "warning",
    showCancelButton: true, 
    confirmButtonColor: "#A5DC86", 
    cancelButtonColor: "#A5DC86", 
    focusConfirm: false,
    confirmButtonText: "Aceptar",
    cancelButtonText: "No",
    closeOnConfirm: true,
    closeOnCancel: true
  },
    function(isConfirm){  
        if (isConfirm) {   

          General.GuardarAtencion(NUMERO_OXT, COD_SERVICIO, TIPO_SERVICIO, WO, TIPO_TRABAJO, SEGMENTO, RAZON_SOCIAL, PLANTILLA, EXTREMO_A, EXTREMO_B, NOMBRE_SOLICITANTE, TELEFONO_SOLICITANTE, AREA_SOLICITANTE, UNIDAD_SOLICITANTE, TIPO_LLAMADO, SOLICITUD, RESULTADO, HUELLA, SOLUCION, PROBLEMA_REPORTADO, APLICA_LLAMADA_CESOP, MOTIVO_LLAMADO, RESOLVIO_AUTOMATICAMENTE, REQUIERE_ESCALAMIENTO, A_QUIEN_ESCALO, TICKET_ESCALAMIENTO, REQUERIMIENTO_ONNET, ACCION, RESPONSABLE, TICKET, COD_GRABACION, $scope.OBSERVACION, MOTIVO_RESPONSABLE, NECESITA_FOCAL, FOCAL, PLATAFORMA).then(  
            function(result){  
              $rootScope.CargandoGral = true; 
              console.log('Resultado GuardarAtencion:::['+result.data.success+']['+result.data.mensaje+']');  
                  if(result.data.success == true){
          
                    if(blob){
                      //Para grabar multiples imagenes
                      for (var i = 0; i < blob.length; i++) {
                        var res = "";  
                        var Resultado = $rootScope.GuardaImagen(result.data.IdTicket, 'Tipificación y Cierre', new window.FileReader(), blob[i], res); 
                        }
                      }
            
                    //Mensaje de ingreso existoso
                    swal({
                      title: "Atención exitosa!",
                      text: "Se ha generado la atención de forma exitosa, Ticket Nro:["+$rootScope.TICKET_TIPI+"]",  
                      type: "success",
                      showCancelButton: false,
                      confirmButtonColor: "#A5DC86", 
                      //confirmButtonText: "Aceptar",
                      confirmButtonText: "Aceptar",
                      //cancelButtonText: "No por ahora",
                      closeOnConfirm: true,
                      closeOnCancel: true
                    },
                      function(isConfirm){  
                          if (isConfirm) {   
                              //$rootScope.buscaID();   
                              $rootScope.reset(); 
                              $rootScope.CargandoGral = false;    
                          } else {
                            $rootScope.CargandoGral = false;
                          }
                      });
          
                  }else{
                    $rootScope.CargandoGral = false;
                    sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
                  }
                },
                function(r){ 
                  $rootScope.CargandoGral = false;
                  console.log('ERROR :::', r);
                  sweetAlert("Lo Siento =(!", "Error en generación de ticket Tipificación y Cierre:", "error");
                }
                )
        } else {
          $rootScope.CargandoGral = false;
        }
    });

}

$rootScope.reset = function() {

  console.log('entra por acá???');
  $rootScope.ListaGeneralHistorial = []; 
  $rootScope.VerTiemposxEtapa = false;
  $scope.ConfiguracionCapa2_Tiempo = "";
  $scope.ConfiguracionCapa3_Tiempo = "";
  $scope.ConfiguracionEquipoAlcanzable_Tiempo = "";
  $scope.ActivacionAddons_Tiempo = "";  
  $rootScope.NUMERO_OXT = '';
  $rootScope.COD_SERVICIO = '';
  $rootScope.TIPO_SERVICIO = '';
  $rootScope.WO = '';
  $rootScope.TIPO_TRABAJO = '';
  $rootScope.SEGMENTO = '';
  $rootScope.RAZON_SOCIAL = '';
  $rootScope.PLANTILLA = '';
  $rootScope.EXTREMO_A = '';
  $rootScope.EXTREMO_B = '';
  $rootScope.NOMBRE_SOLICITANTE = '';
  $rootScope.TELEFONO_SOLICITANTE = '';
  $rootScope.AREA_SOLICITANTE = '';
  $rootScope.UNIDAD_SOLICITANTE = '';
  $rootScope.TIPO_LLAMADO = '';
  $rootScope.SOLICITUD = '';
  $rootScope.RESULTADO = '';
  $rootScope.ACCION = '';
  $rootScope.RESPONSABLE = '';
  $rootScope.TICKET = '';
  $rootScope.COD_GRABACION = '';  
  $rootScope.OBSERVACION = '';
  $scope.TIPO_LLAMADO = '';
  $scope.SOLICITUD = '';
  $scope.RESULTADO = ''; 
  $scope.ETAPA = '';
  $scope.ESTADO = '';
  $scope.ConfiguracionCapa2_OK = true;
  $scope.ConfiguracionCapa2_NOK = true;
  $scope.ConfiguracionCapa3_OK = false;
  $scope.ConfiguracionCapa3_NOK = false;  
  $scope.ConfiguracionEquipoAlcanzable_OK = false;
  $scope.ConfiguracionEquipoAlcanzable_NOK = false;
  $scope.ActivacionAddons_OK = false;
  $scope.ActivacionAddons_NOK = false; 
  $scope.tabActive = 0;   

};

/*****************************************************************************/  
/*****************************************************************************/
/*****************************************************************************/ 

//      loadComentariosValoracion(2);      
/**************************PARA COMENTARIOS (ACTIVIDAD)******************** */
$rootScope.satisComentLoad = true;

$scope.guardaComentarios = _guardaComentarios;
$scope.likeComentarios = _likeComentarios;
$scope.openShare = _openShare;

function _loadComentarios() {
  
  General.obtieneComentariosDashBoard(1).then(function(r){
    var _data = r.data.data;
    $rootScope.CountMegusta = r.data.CountMegusta;
    $rootScope.CountCompartir = r.data.CountCompartir;
    $rootScope.satisComentLoad = false;
    if(r.data.FlagMegusta == "0")   
      $rootScope.satisLike = false;
    else
      $rootScope.satisLike = true;

    $rootScope.historialSatis = _data
    //console.log("Respuesta ::", r)

  },
  function (error){
    //console.log("Respuesta error ::", error)
    $rootScope.satisComentLoad = false;
  });
}
_loadComentarios();
function _guardaComentarios(msg) {
  var id_func = 1;//1=SATISFACCION 2=CCI 3=3PLAY
  var mod = "GENERAL";//“ME GUSTA”, “GENERAL”
  General.guardaComentariosDashBoard(msg, id_func, mod).then(function(r){
    $scope.putComentarioSatis = '';
    //console.log("Respuesta ::", r)
    _loadComentarios();

  },
  function (error){

  });
}

function _likeComentarios() {
  var msg = $rootScope.currentUser.user_name + " ha dado me gusta a Satisfacción";
  var id_func = 1;//1=SATISFACCION 2=CCI 3=3PLAY
  var mod = "ME GUSTA";//“ME GUSTA”, “GENERAL”
  General.guardaComentariosDashBoard(msg, id_func, mod).then(function(r){
    var _data = r.data.data;
    $rootScope.satisComentLoad = false;
    //$rootScope.historial = _data
    //console.log("Respuesta ::", r)
    _loadComentarios();
  },
  function (error){
    $rootScope.satisComentLoad = false;
  });
}

function _openShare(){

  var data = {
    'rut': 1
  };
  var params = data;
  var ctrl = 'viewShareModalInstanceCtrl';
  var template = CONSTANTS.DIR_PATH + 'app/home/share/share.tpl.html';
  var size = 'md';

  modalFactory.open(template, ctrl, size, params).result.then(
    function (responseNote) {
      console.log("modal::: ", responseNote)
      if (responseNote) {
        $rootScope.ExistePaciente = true;

        $state.go('home.informes');
      }
  });

}
/********************************INGRESO OBSERVACION Y VALORACION*******************************************/
$scope.loadComentariosValoracionDetalle = function(ID_FLUJO){
  General.obtieneComentariosValoracionDetalle(ID_FLUJO).then(function(r){
    $rootScope.idValoracionActiva = ID_FLUJO; 
    $rootScope.historialValoracion = undefined; 
    $rootScope.resaltadoindex=-1;
    $rootScope.historialValoracionDetalle = r.data.data;
    //console.log("Respuesta Detalle ::", r)   

  },
  function (error){
   // console.log("Respuesta error ::", error)
    $rootScope.historialValoracion = undefined;
  });
}


$scope.loadComentariosValoracion = function(ID_FLUJO, VALORACION, index){
  General.obtieneComentariosValoracion(ID_FLUJO, VALORACION, index).then(function(r){
    $rootScope.idValoracionActiva = ID_FLUJO;
    $rootScope.resaltadoindex=index;
    $rootScope.historialValoracion = r.data.data;
   // console.log("Respuesta ::", r)   

  },
  function (error){
    //console.log("Respuesta error ::", error)
    $rootScope.historialValoracion = undefined;
  });
}

$scope.actualizadataEvaluacion = function(nota){
  $rootScope.conClase1 = nota;
}
$scope.grabaEvaluacion = function (Observaciones) {
  $scope.Observaciones = Observaciones;


  console.log('Envio a genera evaluación: ['+$rootScope.IdProcesoActual+']['+ $rootScope.currentUser.user_id+']['+$rootScope.conClase1+']['+$scope.Observaciones+']');
  General.getGrabaEvaluacion($rootScope.IdProcesoActual, $rootScope.currentUser.user_id, $rootScope.conClase1, $scope.Observaciones).then(  
  function(result){  
    console.log('Resultado generación evaluación:::['+result.data.success+']['+result.data.mensaje+']');
        if(result.data.success == true){
          //Mensaje de ingreso existoso
          swal({
            title: "Evaluación exitosa!",
            text: "Se ha generado la evaluación de forma exitosa",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            //confirmButtonText: "Aceptar",
            confirmButtonText: "Aceptar",
            //cancelButtonText: "No por ahora",
            closeOnConfirm: true,
            closeOnCancel: true
          },
            function(isConfirm){  
                if (isConfirm) {   
                    $rootScope.CargandoGral = false;    
                } else {
                  $rootScope.CargandoGral = false;
                }
            });

        }else{
          sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
        }
      },
      function(r){ 
        sweetAlert("Lo Siento =(!", "Error en generación de evaluación:", "error");
      }
      )

}

/***************************************************************************************************************/
/********************************INGRESO ATENCION AGENTE********************************************************/

$scope.levantaWarning = function () {
  sweetAlert("Lo Siento =(!", "Debe ingresar número de ticket", "warning");
}
$scope.grabaAtencion = function (idFlujo, index, ticket1) {

  console.log('Envio a genera atención 1: ['+ $rootScope.currentUser.user_id+']['+idFlujo+']['+ticket1+']');
  General.getGrabaAtencion($rootScope.currentUser.user_id, idFlujo, ticket1).then(  
  function(result){  
    console.log('Resultado generación atención:::['+result.data.success+']['+result.data.mensaje+']');
        if(result.data.success == true){
          if(index==1)$rootScope.mostrarTab1="";
          if(index==2)$rootScope.mostrarTab2="";
          if(index==3)$rootScope.mostrarTab3="";
          if(index==4)$rootScope.mostrarTab4="";
          if(index==5)$rootScope.mostrarTab5="";
          if(index==6)$rootScope.mostrarTab6="";
          if(index==7)$rootScope.mostrarTab7="";
          if(index==8)$rootScope.mostrarTab8="";
          if(index==9)$rootScope.mostrarTab9="";
          if(index==10)$rootScope.mostrarTab10="";
                  
          $scope.ETAPA = '';
          $scope.ESTADO = '';
          $scope.ConfiguracionCapa2_OK = true;
          $scope.ConfiguracionCapa2_NOK = true;
          $scope.ConfiguracionCapa3_OK = false;
          $scope.ConfiguracionCapa3_NOK = false;
          $scope.ConfiguracionEquipoAlcanzable_OK = false;
          $scope.ConfiguracionEquipoAlcanzable_NOK = false;
          $scope.ActivacionAddons_OK = false;
          $scope.ActivacionAddons_NOK = false; 

          if($rootScope.currentUser.profile==0 ||$rootScope.currentUser.profile==1){
            $scope.tabActive=-1;
            $scope.loadDatosDashBoard();
          }  
          else{
            $scope.tabActive = 0;
            $scope.ObtieneProcedimientosRecurrentes();
          }
          
          //Mensaje de ingreso existoso
          /*swal({
            title: "Evaluación exitosa!",
            text: "Se ha generado la evaluación de forma exitosa",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            //confirmButtonText: "Aceptar",
            confirmButtonText: "Aceptar",
            //cancelButtonText: "No por ahora",
            closeOnConfirm: true,
            closeOnCancel: true
          },
            function(isConfirm){  
                if (isConfirm) {   
                    $rootScope.CargandoGral = false;    
                } else {
                  $rootScope.CargandoGral = false;
                }
            });*/

        }else{
          //sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
        }
      },
      function(r){ 
        //sweetAlert("Lo Siento =(!", "Error en generación de evaluación:", "error");
      }
      )

}

$scope.Servicio = '0'; 

$scope.loadDatosDashBoardFront = function(dt, dtt, Servicio){ 

  $scope.Servicio = Servicio;   

  General.ObtieneDatosDashBoard(moment(dt).format('YYYYMMDD'), moment(dtt).format('YYYYMMDD'), Servicio).then(function(r){
    $rootScope.datosDashboard = r.data.data;
    // calculo de porcentaje para barra BI (sin modificar datos originales)
    if ($rootScope.datosDashboard && $rootScope.datosDashboard.length) {
      var _maxQ = 0;
      $rootScope.datosDashboard.forEach(function (_d) { if ((_d.CANT_ATENCIONES || 0) > _maxQ) _maxQ = _d.CANT_ATENCIONES; });
      $rootScope.datosDashboard.forEach(function (_d) { _d._pct = _maxQ > 0 ? Math.round((_d.CANT_ATENCIONES || 0) / _maxQ * 100) : 0; if (_d._pct < 35) _d._nivel = 'low'; else if (_d._pct < 75) _d._nivel = 'medium'; else _d._nivel = 'high'; _d._isLeader = (_maxQ > 0 && (_d.CANT_ATENCIONES || 0) === _maxQ); });
    }
    //console.log("Respuesta datos dashboard ::", r)   
  },
  function (error){
    //console.log("Respuesta error datos dashboard::", error)
    $rootScope.historialValoracion = undefined;
  });
}

$scope.loadDatosDashBoardChatBot = function(dt, dtt, Servicio){   

  $scope.Servicio = Servicio;   

  General.ObtieneDatosDashBoardChatBot(moment(dt).format('YYYYMMDD'), moment(dtt).format('YYYYMMDD'), Servicio).then(function(r){
    $rootScope.datosDashboard = r.data.data;
    // calculo de porcentaje para barra BI (sin modificar datos originales)
    if ($rootScope.datosDashboard && $rootScope.datosDashboard.length) {
      var _maxQ = 0;
      $rootScope.datosDashboard.forEach(function (_d) { if ((_d.CANT_ATENCIONES || 0) > _maxQ) _maxQ = _d.CANT_ATENCIONES; });
      $rootScope.datosDashboard.forEach(function (_d) { _d._pct = _maxQ > 0 ? Math.round((_d.CANT_ATENCIONES || 0) / _maxQ * 100) : 0; if (_d._pct < 35) _d._nivel = 'low'; else if (_d._pct < 75) _d._nivel = 'medium'; else _d._nivel = 'high'; _d._isLeader = (_maxQ > 0 && (_d.CANT_ATENCIONES || 0) === _maxQ); });
    }
    //console.log("Respuesta datos dashboard ::", r)   
  },
  function (error){
    //console.log("Respuesta error datos dashboard::", error)
    $rootScope.historialValoracion = undefined;
  });
}

$scope.loadDatosDashBoard = function(){
  General.ObtieneDatosDashBoard($rootScope.currentUser.user_id, sharedProperties.getEnd().format('YYYYMMDD'), sharedProperties.getEnd().format('YYYYMMDD')).then(function(r){
    $rootScope.datosDashboard = r.data.data;
    // calculo de porcentaje para barra BI (sin modificar datos originales)
    if ($rootScope.datosDashboard && $rootScope.datosDashboard.length) {
      var _maxQ = 0;
      $rootScope.datosDashboard.forEach(function (_d) { if ((_d.CANT_ATENCIONES || 0) > _maxQ) _maxQ = _d.CANT_ATENCIONES; });
      $rootScope.datosDashboard.forEach(function (_d) { _d._pct = _maxQ > 0 ? Math.round((_d.CANT_ATENCIONES || 0) / _maxQ * 100) : 0; if (_d._pct < 35) _d._nivel = 'low'; else if (_d._pct < 75) _d._nivel = 'medium'; else _d._nivel = 'high'; _d._isLeader = (_maxQ > 0 && (_d.CANT_ATENCIONES || 0) === _maxQ); });
    }
    //console.log("Respuesta datos dashboard ::", r)   
  },
  function (error){
    //console.log("Respuesta error datos dashboard::", error) 
    $rootScope.historialValoracion = undefined;
  });
}

$scope.loadDatosDashBoardInicio = function(){ 
  General.ObtieneDatosDashBoardInicio().then(function(r){
    $rootScope.datosDashboardInicio = r.data.data;
  },
  function (error){
    $rootScope.datosDashboardInicio = [];
  });
}
$scope.loadDatosDashBoardInicio();

$scope.ObtieneDatosDashBoardSupervisor = function(dt, dtt){ 
  General.ObtieneDatosDashBoardSupervisor(moment(dt).format('YYYYMMDD'), moment(dtt).format('YYYYMMDD')).then(function(r){ 
    $rootScope.datosDashboardSupervisor = r.data.data;
  },
  function (error){
    $rootScope.datosDashboardSupervisor = [];
  });
}
$scope.ObtieneDatosDashBoardSupervisor($scope.dt, $scope.dtt);  


if($rootScope.currentUser.user_id==1){ 
  $scope.loadDatosDashBoardFront($scope.dt, $scope.dtt, '0'); 
}
else
{   
  $scope.loadDatosDashBoard();
}


/***************************************************************************************************************/

$scope.formatNumber = function(i) {
  return Math.round(i * 100)/100; 
}


$rootScope.changevalida0 = function(Valor){
  $rootScope.valida0 = Valor;
} 
$rootScope.changevalida1 = function(Valor){
  $rootScope.valida1 = Valor;
} 
$rootScope.changevalida2 = function(Valor){
  $rootScope.valida2 = Valor;
} 
$rootScope.changevalida3 = function(Valor){
  $rootScope.valida3 = Valor;
} 
$rootScope.changevalida4 = function(Valor){
  $rootScope.valida4 = Valor;
} 
$rootScope.changevalida5 = function(Valor){
  $rootScope.valida5 = Valor;
} 
$rootScope.changevalida6 = function(Valor){
  $rootScope.valida6 = Valor;
} 
$rootScope.changevalida7 = function(Valor){
  $rootScope.valida7 = Valor;
} 
$rootScope.changevalida8 = function(Valor){
  $rootScope.valida8 = Valor;
} 
$rootScope.changevalida9 = function(Valor){
  $rootScope.valida9 = Valor;
} 
$rootScope.changevalida10 = function(Valor){
  $rootScope.valida10 = Valor;
} 
$rootScope.changevalida11 = function(Valor){
  $rootScope.valida11 = Valor;
} 
$rootScope.changevalida12 = function(Valor){
  $rootScope.valida12 = Valor;
} 
$rootScope.changevalida13 = function(Valor){
  $rootScope.valida13 = Valor;
} 
$rootScope.changevalida14 = function(Valor){
  $rootScope.valida14 = Valor;
} 
$rootScope.changevalida15 = function(Valor){
  $rootScope.valida15 = Valor;
} 

  }
])

.controller('ControllerBusquedaAtenciones', ['$window', '$scope', '$rootScope', '$state', 'General', '$timeout', '$uibModal', "$interval", 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale','Excel', '$filter',
function($window, $scope, $rootScope, $state, General, $timeout, $uibModal, $interval, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale, Excel, filter){ 
    
  //************************************************* */
  $rootScope.satisLoad = true; 
  $rootScope.TiendaLoad = true;
  $rootScope.satisGraficoLoad = true;  
  $rootScope.satisComentLoad = true; 
  $rootScope.idbarra = 1;
  $scope.FechaActual = formatDate(new Date());
  $scope.Tipo = "1";
  $scope.TipoOrden = "1";
  $rootScope.includePath = CONSTANTS.INCLUDE_PATH_1;
  $rootScope.PATH_DOC_ticket = CONSTANTS.PATH_DOC_ticket;   

  $rootScope.OTT = ''; 
  $rootScope.OTT_BUSCAR = '';
  $rootScope.FEI = '';
  $rootScope.EstadoCCI = '';
  $rootScope.Observacion = '';
  $rootScope.Posicion = 0;  

  $rootScope.ListaGeneralMotivo = [];
  $rootScope.ListaGeneralComuna = [];
  $scope.AgregarQuitaequipos = false; $scope.CambioPlan = false; $scope.ClientePostergaAgenda = false; $scope.DemoraInstalacion = false; $scope.Diferenciamontos = false; $scope.Errordireccion = false; $scope.errorplan = false; $scope.InformacionSTB = false; $scope.infraestructuradomicilio = false; $scope.Noentregamotivo = false; $scope.Nosolicitoservicio = false; $scope.Ofertacompetencia = false; $scope.Problemaagendamiento = false; $scope.ProblemasComerciales = false; $scope.Sinpermisosadministracion = false; $scope.SI = false;   
  $scope.AgregarQuitaequiposTotal = 0; $scope.CambioPlanTotal = 0; $scope.ClientePostergaAgendaTotal = 0; $scope.DemoraInstalacionTotal = 0; $scope.DiferenciamontosTotal = 0; $scope.ErrordireccionTotal = 0; $scope.errorplanTotal = 0; $scope.InformacionSTBTotal = 0; $scope.infraestructuradomicilioTotal = 0; $scope.NoentregamotivoTotal = 0; $scope.NosolicitoservicioTotal = 0; $scope.OfertacompetenciaTotal = 0; $scope.ProblemaagendamientoTotal = 0; $scope.ProblemasComercialesTotal = 0; $scope.SinpermisosadministracionTotal = 0; $scope.SITotal = 0;  
  
  $scope.TODOS = false; $scope.AFINIDAD = false; $scope.AGENTEFIBRA = false;  $scope.AGENTEMALL = false;  $scope.AGENTETERRENO = false;  $scope.CALLCENTER = false;  $scope.CANALPREFERENCIAL = false;  $scope.CENTROINSTALACIONES = false;  $scope.CHAT = false;  $scope.CLICKTOCALL = false;  $scope.DESCONOCID = false;  $scope.DIGITAL = false;  $scope.FONOCOMPRAS = false;  $scope.FONOCOMPRASWEB = false;  $scope.GGTT = false;  $scope.GRANDESTIENDASRETAIL = false;  $scope.IVR = false;  $scope.MARKETPLACE = false;  $scope.MAYORISTA = false;  $scope.OTROS = false;  $scope.OUTBOUNDCAPTURA = false;  $scope.RETENCION = false;   $scope.S2S = false;  $scope.S2SWHATSAPP = false;  $scope.SGCENTRO = false;  $scope.SGNORTE = false;  $scope.SGRM = false;  $scope.SGSUR = false;  $scope.SSTT = false;  $scope.TIENDASEXPRESS = false;  $scope.TIENDASFRANQUICIADAS = false;  $scope.TIENDASPROPIAS = false;  $scope.VENTASREMOTAS = false; 

  $scope.BUIN = false; $scope.CALAMA = false; $scope.CERRILLOS = false; $scope.COLINA = false; $scope.CONCEPCION = false; $scope.CONCON = false; $scope.COQUIMBO = false; $scope.EL_BOSQUE = false; $scope.ESTACION_CENTRAL = false; $scope.HUALPEN = false; $scope.HUECHURABA = false; $scope.INDEPENDENCIA = false; $scope.LA_CISTERNA = false; $scope.LA_FLORIDA = false; $scope.LA_GRANJA = false; $scope.LA_REINA = false; $scope.LA_SERENA = false; $scope.LAMPA = false; $scope.LAS_CONDES = false; $scope.LO_BARNECHEA = false; $scope.MACHALI = false; $scope.MACUL = false; $scope.MAIPU = false; $scope.CALAMANUNOA = false; $scope.OVALLE = false; $scope.PADRE_HURTADO = false; $scope.PAINE = false; $scope.PEDRO_AGUIRRE_CERDA = false; $scope.PENALOLEN = false;  $scope.PENCO = false; $scope.PROVIDENCIA = false; $scope.PUDAHUEL = false; $scope.PUENTE_ALTO = false; $scope.QUILICURA = false; $scope.QUILPUE = false; $scope.QUINTA_NORMAL = false; $scope.RANCAGUA = false; $scope.RECOLETA = false; $scope.SAN_BERNARDO = false; $scope.SAN_JOAQUIN = false; $scope.SAN_MIGUEL = false; $scope.SAN_PEDRO_DE_LA_PAZ = false; $scope.SANTIAGO = false; $scope.SIN_ZONA = false; $scope.TALCA = false; $scope.TALCAHUANO = false; $scope.TEMUCO = false; $scope.TOME = false; $scope.VALPARAISO = false;  $scope.VILLA_ALEMANA = false; $scope.VINA_DEL_MAR = false; $scope.VITACURA = false;
		// # Date Picker
    $scope.dtayer = new Date()
    //$scope.dt = new Date(($scope.dtayer.getMonth()+1).toString().padStart(2, '0') + '/01/' + $scope.dtayer.getFullYear().toString());

    //$rootScope.FechaSeleccionado = ($scope.dt.getMonth()+1).toString().padStart(2, '0') + '/' + $scope.dt.getDate().toString().padStart(2, '0')  + '/' + $scope.dt.getFullYear().toString();
    //$rootScope.FechaSeleccionadoHasta = ($scope.dt.getMonth()+1).toString().padStart(2, '0') + '/' + $scope.dt.getDate().toString().padStart(2, '0')  + '/' + $scope.dt.getFullYear().toString();

    //$rootScope.FechaSeleccionadoVista = $scope.dt.getDate().toString().padStart(2, '0') + '/' + ($scope.dt.getMonth()+1).toString().padStart(2, '0');
    //$rootScope.FechaSeleccionadoVistaH = $scope.dt.getDate().toString().padStart(2, '0') + '/' + ($scope.dt.getMonth()+1).toString().padStart(2, '0');

    $scope.dt = new Date(); 
    $scope.dt1 = new Date();
    $scope.dt2 = new Date(); 
    $scope.dt3 = new Date();  
    $scope.HoraActual = moment($scope.dt).format('HHMM')
    $scope.FechaA = moment($scope.dt2).format('YYYYMM'); 
    
    tmhDynamicLocale.set('es');
		$scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['d!/M!/yyyy'];
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      //minMode: 'month'
    };

		$scope.formats3 = ['MM-yyyy', 'MM/yyyy', 'MM.yyyy'];
	  $scope.format3 = $scope.formats3[0];
	  $scope.altInputFormats3 = ['M!/yyyy'];
    $scope.dateOptions3 = {
      //formatYear: 'yy',
      startingDay: 1,
      minMode: 'month'
    };
  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		$scope.open3 = function() {
			$scope.popup3.opened = true;
		};

		$scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
      $scope.dt1 = new Date(year, month, day);
      $scope.dt2 = new Date(year, month, day);
		};
		$scope.popup1 = {
			 opened: false
		 };
    $scope.popup2 = {
      opened: false
    };
    $scope.popup3 = {
      opened: false
    };

   $scope.changeHandler = function () {
				//$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
			}		 
 		// # Date Picker
		 
    function formatDate(date) {
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
      ];
      
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    function formatDateShort(date) {
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
      ];
      
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      
      return monthNames[monthIndex] + ' ' + year;
    }


    $rootScope.satisGraficoLoad = true;
    $rootScope.satisLoad = true;
    fecha_desde_satis = sharedProperties.getStart().format('YYYYMMDD');

    //********************************************************************************************************/

    //********************************DASHBOARD  CONSOLIDADO**************************************************/
  
    $rootScope.seriesChart = ['EFECTIVIDAD_ENTEL', 'EFECTIVIDAD_CCI']; 
    $rootScope.seriesChartCanal = ['EFECTIVIDAD_ENTEL', 'EFECTIVIDAD_CCI']; 
    $rootScope.colorsMesDentro = ["#36A2EB","#FF6384"];
    $rootScope.optionsChart = {
      tooltips:{
        enabled: true,
        callbacks: {
            label: function(tooltipItems, data) {
              if(tooltipItems.index == 0){
                return data.datasets[tooltipItems.datasetIndex].label +': :::' + tooltipItems.yLabel + ' | ' + $rootScope.seriesEditChart[tooltipItems.index];
              }else{
                return data.datasets[tooltipItems.datasetIndex].label +': ---' + tooltipItems.yLabel;

              }
            }
        }

      },
      scaleShowValues: true, 
      scales: {
        xAxes: [{
            gridLines: {
                display:false
            }, ticks: { 
              autoSkip: false 
              }
          }],
        yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            gridLines: {
                display:false
            },
            ticks: {
                  min: 0
              },
            position: 'left'
        }]
      }
    }; 

    $rootScope.optionsPortaVerde = {
      min: 0,
      max: 100, 
      size: 120,
      barCap: 17,
      barColor: '#5BC01E',
      trackColor: '#dedede',
      unit: '%',
      trackWidth: 9,
      barWidth: 10,
      readOnly: true
    }; 

    $rootScope.TIPO_BUSQUEDA = '0';
    $scope.POR_RECHAZADAS = 15;
    $rootScope.CANT_CARGADAS = 0;
    $rootScope.TipoCanal = 'TODOS'; 
    $rootScope.Servicio = ''; 
    $rootScope.Canal = 'TODOS';   
    $rootScope.Comuna = 'TODOS'; 
    $rootScope.Region = 'TODOS';  
    $rootScope.RegionSeleccionada = 'RM';  
    $rootScope.tipocanalesRechazos = [];
    $rootScope.canalesRechazos = [];

    $scope.orderByField = 'PROMEdIO';
    $scope.reverseSort = false;

    
    $rootScope.BuscarAgentes = function(){  
    
    General.BuscarAgentes().then( 
      function(result){
        if(result.data.success == false){
          $rootScope.ListaAgentes = [];
          //sweetAlert("Lo Siento =(!", "Error en búsqueda reporte obtieneProactividad", "error");  
        }else{ 
          $rootScope.ListaAgentes = result.data.data;   
          
        }
      },  
      function(r){
        $rootScope.ListaAgentes = []; 
       }
    );
    
    }

    $scope.obtienePlataforma = function(){  

      $rootScope.DataSolicitud = [];
      $rootScope.DataResultado = [];
      $rootScope.DataAccion = [];
        
        General.obtienePlataforma().then(function(r){ 
          if(r.data.success==true){
            $rootScope.DataPlataforma = r.data.data;  
          }
          else{
            $rootScope.DataPlataforma = [];
          }
        },
        function (error){
          $rootScope.DataPlataforma = [];  
        });
      }

    $scope.ObtieneTipoLlamado = function(PLATAFORMA){  

      $rootScope.DataTipoLlamado = [];
      $rootScope.DataSolicitud = [];
      $rootScope.DataResultado = [];
      $rootScope.DataAccion = [];
        
        General.ObtieneTipoLlamado(PLATAFORMA).then(function(r){ 
          if(r.data.success==true){
            $rootScope.DataTipoLlamado = r.data.data;  
          }
          else{
            $rootScope.DataTipoLlamado = [];
          }
        },
        function (error){
          $rootScope.DataTipoLlamado = []; 
        });
    }
    $scope.ObtieneSolicitud = function(PLATAFORMA, TipoLlamado){    
    
      $rootScope.DataSolicitud = [];
    $rootScope.DataResultado = [];
    $rootScope.DataAccion = [];
    
      General.ObtieneSolicitud(PLATAFORMA, TipoLlamado).then(function(r){  
        if(r.data.success==true){
          $rootScope.DataSolicitud = r.data.data;  
        }
        else{
          $rootScope.DataSolicitud = [];
        }
      },
      function (error){
        $rootScope.DataSolicitud = [];  
      });
    }
    $scope.ObtieneResultado = function(PLATAFORMA, TipoLlamado, Solicitud){    
    
      $rootScope.DataResultado = [];
      $rootScope.DataAccion = [];
      
      General.ObtieneResultado(PLATAFORMA, TipoLlamado, Solicitud).then(function(r){    
        if(r.data.success==true){
          $rootScope.DataResultado = r.data.data;  
        }
        else{
          $rootScope.DataResultado = [];
        }
      },
      function (error){
        $rootScope.DataResultado = [];   
      });
    }
    $scope.ObtieneAccion = function(PLATAFORMA, TipoLlamado, Solicitud, Resultado){    

      $rootScope.DataAccion = [];
      
      General.ObtieneAccion(PLATAFORMA, TipoLlamado, Solicitud, Resultado).then(function(r){     
        if(r.data.success==true){
          $rootScope.DataAccion = r.data.data;  
        }
        else{
          $rootScope.DataAccion = [];
        }
      },
      function (error){
        $rootScope.DataAccion = [];    
      });
    }

    $scope.ObtieneGlosas = function(TIPO_DATO){    


      General.ObtieneGlosasBKP(TIPO_DATO).then(function(r){  
        
        if(r.data.success==true){
    
          if(TIPO_DATO=='TIPO_SERVICIO'){
            $rootScope.DataTIPO_SERVICIO = r.data.data;  
          }
          if(TIPO_DATO=='TIPO_TRABAJO'){
            $rootScope.DataTIPO_TRABAJO = r.data.data;  
          }
          if(TIPO_DATO=='AREA_SOLICITANTE'){
            $rootScope.DataAREA_SOLICITANTE = r.data.data;  
          }
          if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
            $rootScope.DataUNIDAD_SOLICITANTE = r.data.data;  
          }
          if(TIPO_DATO=='SEGMENTO'){  
            $rootScope.DataSEGMENTO = r.data.data;  
          }
          if(TIPO_DATO=='HUELLA'){  
            $rootScope.DataHUELLA = r.data.data;  
          }
          if(TIPO_DATO=='SOLUCION'){  
            $rootScope.DataSOLUCION = r.data.data;   
          }
          if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
            $rootScope.DataMOTIVO_CAUSA_LLAMADO = r.data.data;  
          }
          if(TIPO_DATO=='RESPONSABLE'){  
            $rootScope.DataRESPONSABLE = r.data.data;   
          }
          if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
            $rootScope.DataPROBLEMA_REPORTADO = r.data.data;  
          }
    
          
        }
        else{
          if(TIPO_DATO=='TIPO_SERVICIO'){
            $rootScope.DataTIPO_SERVICIO = [];  
          }
          if(TIPO_DATO=='TIPO_TRABAJO'){
            $rootScope.DataTIPO_TRABAJO = [];  
          }
          if(TIPO_DATO=='AREA_SOLICITANTE'){
            $rootScope.DataAREA_SOLICITANTE = [];  
          }
          if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
            $rootScope.DataUNIDAD_SOLICITANTE = [];  
          }
          if(TIPO_DATO=='SEGMENTO'){  
            $rootScope.DataSEGMENTO = [];  
          }
          if(TIPO_DATO=='HUELLA'){  
            $rootScope.DataHUELLA = [];  
          }
          if(TIPO_DATO=='SOLUCION'){  
            $rootScope.DataSOLUCION = [];  
          }
          if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
            $rootScope.DataMOTIVO_CAUSA_LLAMADO = [];   
          }
          if(TIPO_DATO=='RESPONSABLE'){  
            $rootScope.DataRESPONSABLE = [];   
          }
          if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
            $rootScope.DataPROBLEMA_REPORTADO = [];   
          }
    
        }
      },
      function (error){
        if(TIPO_DATO=='TIPO_SERVICIO'){
          $rootScope.DataTIPO_SERVICIO = [];  
        }
        if(TIPO_DATO=='TIPO_TRABAJO'){
          $rootScope.DataTIPO_TRABAJO = [];  
        }
        if(TIPO_DATO=='AREA_SOLICITANTE'){
          $rootScope.DataAREA_SOLICITANTE = [];  
        }
        if(TIPO_DATO=='UNIDAD_SOLICITANTE'){  
          $rootScope.DataUNIDAD_SOLICITANTE = [];  
        }
        if(TIPO_DATO=='SEGMENTO'){  
          $rootScope.DataSEGMENTO = [];  
        }
        if(TIPO_DATO=='HUELLA'){  
          $rootScope.DataHUELLA = [];   
        }
        if(TIPO_DATO=='SOLUCION'){  
          $rootScope.DataSOLUCION = [];  
        }
      if(TIPO_DATO=='MOTIVO_CAUSA_LLAMADO'){  
          $rootScope.DataMOTIVO_CAUSA_LLAMADO = [];
        }   
        if(TIPO_DATO=='RESPONSABLE'){  
          $rootScope.DataRESPONSABLE = [];   
        }
        if(TIPO_DATO=='PROBLEMA_REPORTADO'){  
          $rootScope.DataPROBLEMA_REPORTADO = [];    
        }
    
    });
    }
    
    $rootScope.BuscarAgentes();      
    $scope.obtienePlataforma(); 
    //$scope.ObtieneTipoLlamado();       
    $scope.ObtieneGlosas('SOLUCION');   
    $scope.ObtieneGlosas('TIPO_SERVICIO');

    $rootScope.BuscarTickets = function(TIPO_BUSQUEDA, AGENTE, VALOR){ 
      $rootScope.ListaGeneral = [];  
     var DATO = '';
      var Fecha_D = moment($scope.dt).format('YYYYMMDD'); 
      var Fecha_H = moment($scope.dt1).format('YYYYMMDD'); 

      if(TIPO_BUSQUEDA=='3'){
        DATO = AGENTE;
      }else{
        DATO = VALOR;
      }
    
      //console.log('Enviados a reporte rechazados Excel: [' + Fecha_D + '][' + Fecha_H + ']');  
    General.BuscarTickets(Fecha_D, Fecha_H, TIPO_BUSQUEDA, DATO).then( 
      function(result){
        if(result.data.success == false){
          $rootScope.ListaGeneral = [];
          //sweetAlert("Lo Siento =(!", "Error en búsqueda reporte obtieneProactividad", "error");  
        }else{ 
          $rootScope.ListaGeneral = result.data.data;   
          
        }
      },  
      function(r){
        $rootScope.ListaGeneral = [];
       }
    );
    
    }

    $rootScope.BuscarTickets($rootScope.TIPO_BUSQUEDA, '','');   
    
    

    $scope.ActualizaAtencion = function (ID_ATENCION, TIPO_LLAMADO, SOLICITUD, RESULTADO, ACCION, SOLUCION, NUMERO_OXT, COD_GRABACION, COD_SERVICIO, TIPO_SERVICIO, OBSERVACION) {

       
   
        if (ID_ATENCION==undefined || ID_ATENCION==null || ID_ATENCION=='' ){   
          sweetAlert("Atención!", "No existe ID para actualizar", "warning");
          return; 
        }
      
        if (TIPO_LLAMADO==undefined || TIPO_LLAMADO==null || TIPO_LLAMADO=='' ){ 
          sweetAlert("Atención!", "Debe seleccionar tipo llamado", "warning");
          return;
        }
        if (SOLICITUD==undefined || SOLICITUD==null || SOLICITUD=='' ){ 
          sweetAlert("Atención!", "Debe seleccionar solicitud", "warning"); 
          return;
        }
        if (RESULTADO==undefined || RESULTADO==null || RESULTADO=='' ){  
          sweetAlert("Atención!", "Debe seleccionar resultado", "warning"); 
          return;
        }
        if (ACCION==undefined || ACCION==null || ACCION=='' ){ 
          sweetAlert("Atención!", "Debe seleccionar acción", "warning"); 
          return;
        }
        if (SOLUCION==undefined || SOLUCION==null || SOLUCION=='' ){ 
          sweetAlert("Atención!", "Debe seleccionar solución", "warning"); 
          return;
        }
      
        if (NUMERO_OXT==undefined || NUMERO_OXT==null || NUMERO_OXT=='' ){ 
          sweetAlert("Atención!", "Debe ingresar n+umero OXT", "warning"); 
          return;
        }
          
        if (COD_GRABACION==undefined || COD_GRABACION==null || COD_GRABACION=='' ){ 
          sweetAlert("Atención!", "Debe ingresar código grabación", "warning");  
          return;
        }
          
        if (COD_SERVICIO==undefined || COD_SERVICIO==null || COD_SERVICIO=='' ){  
          sweetAlert("Atención!", "Debe ingresar código servicio", "warning");  
          return;
        }
          
        if (TIPO_SERVICIO==undefined || TIPO_SERVICIO==null || TIPO_SERVICIO=='' ){  
          sweetAlert("Atención!", "Debe seleccionar tipo servicio", "warning");  
          return;
        }

      swal({
        title: "Confirmación!",
        text: "¿Esta seguro de actualizar la llamada?",  
        type: "warning", 
        showCancelButton: true, 
        confirmButtonColor: "#A5DC86", 
        cancelButtonColor: "#A5DC86", 
        focusConfirm: false,
        confirmButtonText: "Aceptar",
        cancelButtonText: "No",
        closeOnConfirm: true,
        closeOnCancel: true
      },
        function(isConfirm){  
            if (isConfirm) {   
    
              General.ActualizaAtencion(ID_ATENCION, TIPO_LLAMADO, SOLICITUD, RESULTADO, ACCION, SOLUCION, NUMERO_OXT, COD_GRABACION, COD_SERVICIO, TIPO_SERVICIO, OBSERVACION).then(  
                function(result){  
                  $rootScope.CargandoGral = true; 
                  console.log('Resultado ActualizaAtencion:::['+result.data.success+']['+result.data.mensaje+']');   
                      if(result.data.success == true){
              
                        //Mensaje de ingreso existoso
                        swal({
                          title: "Actualización exitosa!",
                          text: "Se ha actualizado la atención de forma exitosa, Ticket Nro:["+ID_ATENCION+"]",   
                          type: "success",
                          showCancelButton: false,
                          confirmButtonColor: "#A5DC86", 
                          //confirmButtonText: "Aceptar",
                          confirmButtonText: "Aceptar",
                          //cancelButtonText: "No por ahora",
                          closeOnConfirm: true,
                          closeOnCancel: true
                        },
                          function(isConfirm){  
                              if (isConfirm) {   
                                  //$rootScope.buscaID(); 
                                  //$rootScope.reset(); 
                                  //$scope.TIPO_LLAMADO = '';
                                  //$scope.SOLICITUD = '';
                                  //$scope.RESULTADO = '';
                                  //$scope.ACCION = '';
                                  //$scope.SOLUCION = ''; 
                                  $rootScope.CargandoGral = false;    
                              } else {
                                $rootScope.CargandoGral = false;
                              }
                          });
              
                      }else{
                        $rootScope.CargandoGral = false;
                        sweetAlert("Lo Siento =(!", result.data.mensaje, "warning");
                      }
                    },
                    function(r){ 
                      $rootScope.CargandoGral = false;
                      console.log('ERROR :::', r);
                      sweetAlert("Lo Siento =(!", "Error en actualización de ticket Tipificación y Cierre:", "error"); 
                    }
                    )
            } else {
              $rootScope.CargandoGral = false;
            }
        });
    
    }
    

//*******************************GRAFICOS******************************************** */
//# Reporte Contraste , Grafico
$scope.yContraste=[76, 52, 82, 99, 74];
$scope.xContraste=['AM', 'CONFIRMACION', 'MOCHILA', 'PM'];

$scope.seriesChart = [{
  name: 'Listas',
  //y: chartInfo.data.data
}];

$scope.activeTabIndex = 0;
$rootScope.tabs = [];

//# CERRAR PANTALLA DETALLE
$scope.closeSelected = function($index){
  $rootScope.tabs.splice($index, 1);
};

$scope.orderByField = 'NUMERO_OXT';
$scope.reverseSort = false;

$scope.mails = [];
$scope.mailsExcel = [];
// $scope.loading = false;
$scope.activeTabIndex = 0;
$rootScope.tabs = [];

//#setSelected = PREVIEW Ticket
$scope.setSelected = function() {
  $scope.selected = this.mail;
  $scope.openedSide = true;
  $scope.last = this.mail.ID_ATENCION;
};

//#openSelected = Abrir Ticket
$scope.openSelected = function(ID_ATENCION){
  $rootScope.ID_ATENCION = ID_ATENCION;
  $rootScope.SITE_NEGATIVO = false;

  $rootScope.CargandoGral = true;
  if(!$scope.selected.ID_ATENCION)
  $scope.selected = this.mail;
  sem = -1;
  for (var i = 0; i < $rootScope.tabs.length; i++) {
    if ($rootScope.tabs[i]['id'] == $scope.selected.ID_ATENCION) {
      sem = i;
    }
  }

  //#SERVICIO Trae Detalles Pintamos la nueva tab
  /*var promise = loadDetalles.detalle($scope.selected.FORMULARIOID, 'detalle');*/
  if(sem == -1) {

        var dataFicha = {
          'tipo': 1,
          'valor': ID_ATENCION//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
        } 
        General.BuscarTicketsDetalle(ID_ATENCION).then( 
          function(ficha){
            if (ficha.data.success == true) { 
              $scope.listaDetalleTicket = ficha.data.data[0];
              var newTab = { 'fichaComercial': ficha.data.data[0], id: $scope.selected.ID_ATENCION, title: 'TICKET: '+ ficha.data.data[0].TICKET, content:ficha.data[0]};
              $rootScope.tabs.push( newTab );
              $rootScope.CargandoGral = false;  
  
          } else {
            $scope.listaDetalleTicket = [];
            $rootScope.CargandoGral = false;
            swal("Lo Sentimos!", "No existe información para el ticket", "error");
          }
          },
          function (r) {
            $scope.listaDetalleTicket = [];
            $rootScope.CargandoGral = false;
            swal("Lo Sentimos!", "El detalle no se puede cargar", "error"); 
          }
        );


  }else{
    $rootScope.CargandoGral = false;
    // $rootScope.alerts.push({type: 'alert-warning' ,msg: CONSTANTS.OXT_ABIERTA});
    swal("Ojo!", "El ticket con ID: "+ID_ATENCION+" ya se encuentra abierto!", "warning"); 

  }

  $timeout(function(){
    $scope.openedSide = false;
  });
};


$scope.openModalBot = function(value, ID_BOT, TICKET) {

  $rootScope.ID_BOT = ID_BOT;
  $rootScope.TICKET = TICKET; 
  
  var data = {
  };
  var promiseSeg = '';
  var ctrl = 'productosController';   
  var size = 'lg'; 
  var callM = true;
  var params = data;
  switch (value) {
    case 1: 
        $scope.isCargando = true;
        var template = CONSTANTS.DIR_PATH + 'app/home/dashboard/view_formulario_bot.html';        
         params.result = ID_BOT; 
        break;
    default:
  
  }
  if (callM == true){   
    //#Factory Modales 1
    //console.log ('['+template+']['+ctrl+']['+size+']['+params.result+']');    
    modalFactory.open(template, ctrl, size, params).result.then(
      function (responseNote) {
        if (responseNote.is_edit) { }  
    });
  }else if (value ==1){
    //#MUESTRA IMAGENES
    //console.log("promiseSeg::: ", promiseSeg)
    promiseSeg.then(
      function (result) {
        $scope.isCargando = false;
        //console.log('Respuesta busqueda imagenes:::'+result.data.success);
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
        if(result.data.success == true){
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }
          });
        }else{   
          sweetAlert("Lo Siento =(!", "El ticket no tiene imagenes asociadas", "warning");
        }
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );        
  }
  else{
    //#PROMESA SEGUIMIENTO
    promiseSeg.then(
      function (result) {
        $scope.isCargando = false;
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
        modalFactory.open(template, ctrl, size, params).result.then(
          function (responseNote) {
            console.log("modal::: ", responseNote)
            if (responseNote.is_edit) { }
        });
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );
  }
  };  

$scope.BuscarTicketsDetalle = function(ID_ATENCION){

  $rootScope.DataSolicitud = [];
  $rootScope.DataResultado = [];
  $rootScope.DataAccion = [];


  General.BuscarTicketsDetalle(ID_ATENCION).then( 
    function(ficha){
      if (ficha.data.success == true) { 
        $scope.listaDetalleTicket = ficha.data.data[0];
        $scope.TIPO_LLAMADO = $scope.listaDetalleTicket.TIPO_LLAMADO;
        $scope.SOLICITUD = $scope.listaDetalleTicket.SOLICITUD;
        $scope.RESULTADO = $scope.listaDetalleTicket.RESULTADO;
        $scope.ACCION = $scope.listaDetalleTicket.ACCION; 
        $scope.SOLUCION = $scope.listaDetalleTicket.SOLUCION;
  
        $scope.NUMERO_OXT = $scope.listaDetalleTicket.NUMERO_OXT; 
        $scope.COD_GRABACION = $scope.listaDetalleTicket.COD_GRABACION; 
        $scope.COD_SERVICIO = $scope.listaDetalleTicket.COD_SERVICIO; 
        $scope.TIPO_SERVICIO = $scope.listaDetalleTicket.TIPO_SERVICIO;  
        $scope.OBSERVACION = $scope.listaDetalleTicket.OBSERVACION; 
        //var newTab = { 'fichaComercial': ficha.data.data[0], id: ID_ATENCION, title: 'TICKET: '+ ID_ATENCION, content:ficha.data[0]};
        //$rootScope.tabs.push( newTab );
        $rootScope.CargandoGral = false;  

    } else {
      $rootScope.CargandoGral = false;
      $scope.listaDetalleTicket = [];
      swal("Lo Sentimos!", "No existe información para el ticket", "error");
    }
    },
    function (r) {
      $rootScope.CargandoGral = false;
      $scope.listaDetalleTicket = [];  
      swal("Lo Sentimos!", "El detalle no se puede cargar", "error"); 
    }
  );
}

function getCleanedString(cadena){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos TODOS
  //for (var i = 0; i < specialChars.length; i++) {
      //cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  //}   

  // Lo queremos devolver limpio en minusculas
  //cadena = cadena.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  //cadena = cadena.replace(/ /g,"_");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");
  return cadena;
}
$scope.ExportToExcel1=function(tableid){ 
//function ExportToExcel1(tableid) { 
  var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
  var textRange; var j = 0;
  tab = document.getElementById(tableid);//.getElementsByTagName('table'); // id of table
  console.log('Nombre tabla:::'+tableid);
  if (tab==null) {
      return false;
  }
  if (tab.rows.length == 0) {
      return false;
  }

  for (j = 0 ; j < tab.rows.length ; j++) {
      tab_text = tab_text + getCleanedString(tab.rows[j].innerHTML) + "</tr>";
      //tab_text=tab_text+"</tr>";
  }
  tab_text = tab_text + "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
  tab_text = tab_text.replace("ó", "o"); // reomves tildes culiaos

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer  
  {
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      sa = txtArea1.document.execCommand("SaveAs", true, "reporte_ott.xls");
  }
  else                 //other browser not tested on IE 11
      //sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
      try {
          var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
          window.URL = window.URL || window.webkitURL;
          link = window.URL.createObjectURL(blob);
          a = document.createElement("a");
          if (document.getElementById("caption")!=null) {
              a.download=document.getElementById("caption").innerText;
          }
          else
          {
              a.download = 'download';
          }

          a.href = link;

          document.body.appendChild(a);

          a.click();

          document.body.removeChild(a);
      } catch (e) {
      }


  return false;
  //return (sa);
}

   
   }
   //}

])
.controller('warningController', ['$scope','$rootScope', '$state', 'General', '$timeout', '$uibModal', 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale',
  function($scope, $rootScope, $state, General, $timeout, $uibModal, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale){

    $scope.dt = new Date();
    $scope.dt1 = new Date();
    $scope.dt2 = new Date();
    $scope.HoraActual = moment($scope.dt).format('HHMM')
    tmhDynamicLocale.set('es');
		$scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['d!/M!/yyyy']; 
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      //minMode: 'month'
    };
		$scope.formats2 = ['MM-yyyy', 'MM/yyyy', 'MM.yyyy'];
	  $scope.format2 = $scope.formats2[0];
	  $scope.altInputFormats2 = ['M!/yyyy'];
    $scope.dateOptions2 = {
      formatYear: 'yy',
      startingDay: 1,
      minMode: 'month'
    };
  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		$scope.open3 = function() {
			$scope.popup2.opened = true;
		};
		$scope.setDate = function(year, month, day) {   
      $scope.dt = new Date(year, month, day);
      $scope.dt1 = new Date(year, month, day);
      $scope.dt2 = new Date(year, month, day);
		};
		$scope.popup1 = {
			 opened: false
		 };
    $scope.popup2 = {
      opened: false
    };
    $scope.popup3 = {
      opened: false
    };
   $scope.changeHandler = function () {
				//$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
			}		 
 		// # Date Picker

    $rootScope.GLOSA_WARNING = '';
		$rootScope.NOMBRE_WARNING = '';

		$rootScope.obtieneWarning = function(){
			General.obtieneWarning().then(function(r){  
				if(r.data.success==true){
					$rootScope.dataWarning = r.data.data;  
					$rootScope.GLOSA_WARNING = $rootScope.dataWarning[0].WARNING;  
          $rootScope.NOMBRE_WARNING = $rootScope.dataWarning[0].NOMBRE_WARNING;  
					//console.log('obtieneWarning OK :::', $rootScope.dataWarning);  
				}
				else{
					$rootScope.GLOSA_WARNING = "";
          $rootScope.NOMBRE_WARNING = '';
					//console.log('obtieneWarning Nok 1 :::'+r.data.mensaje);  
				} 
			},
			function (error){
				$rootScope.GLOSA_WARNING = "";  
        $rootScope.NOMBRE_WARNING = '';
				//console.log('obtieneWarning Nok 2', error);    
			});
		}


		$rootScope.obtieneWarning();


    $rootScope.grabaWarning = function(NOMBRE_WARNING, GLOSA_WARNING, FECHA_INICIO, FECHA_TERMINO, ESTADO){

      var Fecha_D = moment(FECHA_INICIO).format('MM/DD/YYYY'); 
      var Fecha_H = moment(FECHA_TERMINO).format('MM/DD/YYYY');   


			General.grabaWarning(NOMBRE_WARNING, GLOSA_WARNING, Fecha_D, Fecha_H, ESTADO).then(function(r){
        console.log('grabaWarning resultado', r);         
				if(r.data.success==true){
					$rootScope.obtieneWarning();
					console.log('grabaWarning :::', r.data); 
				}
				else{
					$rootScope.obtieneWarning();
				}
			},
			function (error){
        $rootScope.obtieneWarning(); 
			});
		}



  }
])

.controller('calidadController', ['$scope','$rootScope', '$state', 'General', '$timeout', '$uibModal', 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale',
	function($scope, $rootScope, $state, General, $timeout, $uibModal, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale){
    $rootScope.satisLoad = false;
    moment.locale("es");
    $rootScope.imgPath = CONSTANTS.IMAGE_PATH;
    $rootScope.datosVueltas = [];
    //$rootScope.IMAGEN = $rootScope.checkTplUrl($rootScope.imgPath + $rootScope.currentUser.user_id +'.jpg');
    var Hoy = new Date();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    $rootScope.Mes = meses[Hoy.getMonth()];  
    $rootScope.resaltadoindex = "";
    $rootScope.dataListaIngresos = [];
    $rootScope.dataRanking = [];
    $rootScope.dataIngresosHora = [];
    $rootScope.dataIngresosDia = [];
    $rootScope.MensajeError = '';
    //$rootScope.Servicio = ($rootScope.currentUser.perfil_name =='TODOS' ? 'DTH' : $rootScope.currentUser.perfil_name);  
    $scope.Tipo = ($rootScope.currentUser.user_id =='123' ? 'Reporte Envio SMS' : '');  
    $scope.TipoNombre = ($rootScope.currentUser.user_id =='123' ? 'Reporte Envío SMS' : '');  
    //console.log('$scope.Tipo:::', $scope.Tipo);
    $rootScope.checkTplUrl = function(url, index) { 
      //console.log('url:::',url);
      var http = new XMLHttpRequest();  
      http.open('HEAD', url, false); 
      http.send(); 
      //console.log('http.status:::',http.status);
      //console.log('index:::',index);
      return (http.status !== 404) ? url : $rootScope.imgPath + '1.jpg';  
    }; 
    
//*******************************************/

$scope.activeTabIndex = 0;
$rootScope.tabs = [];

//# CERRAR PANTALLA DETALLE
$scope.closeSelected = function($index){
  $rootScope.tabs.splice($index, 1);
};

 //#setSelected = PREVIEW Ticket
$scope.setSelected = function(NUMERO_OXT) {
  $scope.selected = {
    'tipo': 1,
    'valor': '',
    'NUMERO_OXT': NUMERO_OXT //NUMERO_OXT//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
  };
  $scope.openedSide = true;
  $scope.last = $rootScope.NUMERO_OXT;
};

//#openSelected = Abrir Ticket
$scope.openSelected = function(NUMERO_OXT){
  $rootScope.NUMERO_OXT = NUMERO_OXT;  

  $rootScope.CargandoGral = true;
  $rootScope.NUMERO_OXT = $scope.selected.NUMERO_OXT;
  if(!$scope.selected.NUMERO_OXT)
      $scope.selected = {
        'tipo': 1,
        'valor': '',
        'NUMERO_OXT': $rootScope.NUMERO_OXT //NUMERO_OXT//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
      };
  sem = -1;
  for (var i = 0; i < $rootScope.tabs.length; i++) {
    if ($rootScope.tabs[i]['id'] == $scope.selected.NUMERO_OXT) {
      sem = i;
    }
  }

  //#SERVICIO Trae Detalles Pintamos la nueva tab
  /*var promise = loadDetalles.detalle($scope.selected.FORMULARIOID, 'detalle');*/
  if(sem == -1) {
    
        var dataFicha = { 
          'tipo': 1,
          'valor': $rootScope.NUMERO_OXT //NUMERO_OXT//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
        }
            var newTab = { id: $scope.selected.NUMERO_OXT, title: 'Detalle  ' + $scope.selected.NUMERO_OXT};
            $rootScope.tabs.push( newTab );
            $rootScope.CargandoGral = false; 

  }else{
    $rootScope.CargandoGral = false;
    // $rootScope.alerts.push({type: 'alert-warning' ,msg: CONSTANTS.OXT_ABIERTA});
    swal("Ojo!", "El detalle de ott ya se encuentra abierto!", "warning"); 

  }

  $timeout(function(){
    $scope.openedSide = false;
  });
};

    $rootScope.option1 = '';  
    $rootScope.OTT_BUSCAR = '';  
    $rootScope.FechaCarga = '';
    $rootScope.TipoOren = ''; 
    $rootScope.RUTA_GRABACION = ''; 
    $rootScope.ID = '';
    $scope.CAE_TERRENO = 'NO'; 
    $scope.USUARIO_EVALUACION = '';  
    $scope.NOMBRE = 'NO';
    $scope.ORDEN = 'NO';
    $scope.RUT = 'NO';
    $scope.RECIBE = 'NO';
    $scope.DIRECCION = 'NO';
    $scope.TIPO = 'NO';
    $scope.PERMISOS = 'NO';
    $scope.V_PLAN = 'NO';
    $scope.SERVICIO_COMPANIA = 'NO';
    $scope.VELOCIDAD = 'NO';
    $scope.DECOS = 'NO';
    $scope.AGREGA_DECOS = 'NO';
    $scope.EXTENSORES = 'NO';
    $scope.CABLEADO = 'NO';
    $scope.DURACION = 'NO';
    $scope.FECHA_HORA = 'NO';
    $scope.PRODUCTOS = 'NO';
    $scope.EPA = 'NO';
    $scope.HablaCCI = 'NO';
    $scope.MotivoLlamada = 'NO';
    $scope.ExplicaTV = 'NO';
    $scope.AgregarAudioBox = 'NO';
    $scope.PlanEntelTV = 'NO';
    $scope.EspaciosWIFI = 'NO';
    $scope.ServicioCompania = 'NO';
    $scope.Resumen = 'NO';
    $scope.AppEntel = 'NO';
    $scope.Despide = 'NO';
    $scope.Pisos_Domicilio = 'NO';
          
		// # Date Picker
    $scope.dt = new Date();
    $scope.dt1 = new Date();
    $scope.dt2 = new Date();
    $scope.HoraActual = moment($scope.dt).format('HHMM')
    tmhDynamicLocale.set('es');
		$scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['d!/M!/yyyy']; 
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      //minMode: 'month'
    };
		$scope.formats2 = ['MM-yyyy', 'MM/yyyy', 'MM.yyyy'];
	  $scope.format2 = $scope.formats2[0];
	  $scope.altInputFormats2 = ['M!/yyyy'];
    $scope.dateOptions2 = {
      formatYear: 'yy',
      startingDay: 1,
      minMode: 'month'
    };
  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		$scope.open3 = function() {
			$scope.popup2.opened = true;
		};
		$scope.setDate = function(year, month, day) {   
      $scope.dt = new Date(year, month, day);
      $scope.dt1 = new Date(year, month, day);
      $scope.dt2 = new Date(year, month, day);
		};
		$scope.popup1 = {
			 opened: false
		 };
    $scope.popup2 = {
      opened: false
    };
    $scope.popup3 = {
      opened: false
    };
   $scope.changeHandler = function () {
				//$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
			}		 
 		// # Date Picker
     var log = [];

     $scope.seleccionaOTT = function(ID) {  
      $scope.ID_BUSCAR = ID; 
      console.log('$scope.ID_BUSCAR:::', $scope.ID_BUSCAR); 
      angular.forEach($rootScope.datosVueltas, function(value, key) {
        //this.push(key + ': ' + value);
        console.log('value[NUMERO_OXT]:::', value['NUMERO_OXT']); 
        if($scope.ID_BUSCAR == value['NUMERO_OXT']){  
         // ng-click="seleccionaOTT(datosVueltas.FORMULARIOID, datosVueltas.NUMERO_OXT, datosVueltas.FECHA_CARGA, datosVueltas.TIPO_ESTADO, datosVueltas.RUTA_GRABACION, 
         //datosVueltas.NOMBRE, datosVueltas.ORDEN, datosVueltas.RUT, datosVueltas.RECIBE, datosVueltas.DIRECCION, datosVueltas.TIPO, datosVueltas.PERMISOS, 
         //datosVueltas.V_PLAN, datosVueltas.SERVICIO_COMPANIA, datosVueltas.VELOCIDAD, datosVueltas.DECOS, datosVueltas.AGREGA_DECOS, datosVueltas.EXTENSORES, datosVueltas.CABLEADO, 
         //datosVueltas.DURACION, datosVueltas.FECHA_HORA, datosVueltas.PRODUCTOS, datosVueltas.EPA, datosVueltas.CAE_TERRENO, datosVueltas.MOTIVO_CAIDA, 
         //datosVueltas.RUT_AGENTE);"> 

          $rootScope.OTT_BUSCAR = value['NUMERO_OXT'];
          $rootScope.FechaCarga = value['FECHA_CARGA'];
          $rootScope.TipoOren = value['TIPO_ESTADO'];
          $rootScope.RUTA_GRABACION = value['RUTA_GRABACION'];  
          $rootScope.ID = value['FORMULARIOID'];
          $scope.NOMBRE = (value['NOMBRE'] =='' ? 'NO': value['NOMBRE']); 
          $scope.ORDEN = (value['ORDEN'] =='' ? 'NO': value['ORDEN']);
          $scope.RUT = (value['RUT'] =='' ? 'NO': value['RUT']); 
          $scope.RECIBE = (value['RECIBE'] =='' ? 'NO': value['RECIBE']); 
          $scope.DIRECCION = (value['DIRECCION'] =='' ? 'NO': value['DIRECCION']); 
          $scope.TIPO = (value['TIPO'] =='' ? 'NO': value['TIPO']); 
          $scope.PERMISOS = (value['PERMISOS'] =='' ? 'NO': value['PERMISOS']); 
          $scope.V_PLAN = (value['V_PLAN'] =='' ? 'NO': value['V_PLAN']); 
          $scope.SERVICIO_COMPANIA = (value['SERVICIO_COMPANIA'] =='' ? 'NO': value['SERVICIO_COMPANIA']); 
          $scope.VELOCIDAD = (value['VELOCIDAD'] =='' ? 'NO': value['VELOCIDAD']); 
          $scope.DECOS = (value['DECOS'] =='' ? 'NO': value['DECOS']); 
          $scope.AGREGA_DECOS = (value['AGREGA_DECOS'] =='' ? 'NO': value['AGREGA_DECOS']); 
          $scope.EXTENSORES = (value['EXTENSORES'] =='' ? 'NO': value['EXTENSORES']); 
          $scope.CABLEADO = (value['CABLEADO'] =='' ? 'NO': value['CABLEADO']); 
          $scope.DURACION = (value['DURACION'] =='' ? 'NO': value['DURACION']); 
          $scope.FECHA_HORA = (value['FECHA_HORA'] =='' ? 'NO': value['FECHA_HORA']); 
          $scope.PRODUCTOS = (value['PRODUCTOS'] =='' ? 'NO': value['PRODUCTOS']); 
          $scope.EPA = (value['EPA'] =='' ? 'NO': value['EPA']);  
          $scope.HablaCCI = (value['HablaCCI'] =='' ? 'NO': value['HablaCCI']);   
          $scope.MotivoLlamada = (value['MotivoLlamada'] =='' ? 'NO': value['MotivoLlamada']);  
          $scope.ExplicaTV = (value['ExplicaTV'] =='' ? 'NO': value['ExplicaTV']);  
          $scope.AgregarAudioBox = (value['AgregarAudioBox'] =='' ? 'NO': value['AgregarAudioBox']);  
          $scope.PlanEntelTV = (value['PlanEntelTV'] =='' ? 'NO': value['PlanEntelTV']);  
          $scope.EspaciosWIFI = (value['EspaciosWIFI'] =='' ? 'NO': value['EspaciosWIFI']);  
          $scope.ServicioCompania = (value['ServicioCompania'] =='' ? 'NO': value['ServicioCompania']);  
          $scope.Resumen = (value['Resumen'] =='' ? 'NO': value['Resumen']);  
          $scope.AppEntel = (value['AppEntel'] =='' ? 'NO': value['AppEntel']);  
          $scope.Despide = (value['Despide'] =='' ? 'NO': value['Despide']);  
          $scope.Pisos_Domicilio = (value['Pisos_Domicilio'] =='' ? 'NO': value['Pisos_Domicilio']);  
          $scope.CAE_TERRENO = (value['CAE_TERRENO'] =='' ? 'NO': value['CAE_TERRENO']);
          $scope.MOTIVO_CAIDA = value['MOTIVO_CAIDA']; 
          $scope.USUARIO_EVALUACION = value['RUT_AGENTE']; 

        }


      }, log);


    };

    


$rootScope.BuscaListadoAgentes = function(){
  $rootScope.satisLoad = true;
  $rootScope.datosAgentes = [];
  $rootScope.MensajeError = '';

General.BuscaListadoAgentes().then(
       
  function (ficha) {
    $rootScope.datosVueltas = [];
    console.log('ficha BuscaListadoAgentes:::', ficha);
    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosAgentes = ficha.data.data;
      }
      else{
        $rootScope.datosAgentes = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosAgentes = [];
       $rootScope.satisLoad = false;
     }); 

}     

$rootScope.BuscaListadoAgentes();


$scope.ObtieneSiguienteProceso = function(ID, IDSiguiente, index, SubFuncion, SubProceso, TIPO_FORMA, SOLICITANTE, SOLICITUD_PARA, TIPO){
  $rootScope.DataGlosaValidacionOV=[];
  $rootScope.DataGlosaValidacionOG=[];
  $rootScope.Finalizado = false;
  console.log('Siguiente ID 1:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');
  if(SubProceso == true &&TIPO_FORMA =='Finalizado'){
    $rootScope.IdSubProcesoActual = "0";
    $rootScope.SubProceso = false;
  }
  if(IDSiguiente==0){
    //console.log('paso 1');
    $rootScope.IdProcesoActual=ID;
    $rootScope.cleanAll();
  } else{$rootScope.DataGlosaOG = [];$rootScope.DataGlosaOV = [];}

  if(SubFuncion !="0" &&SubFuncion !=0){
    //console.log('paso 2');
    $rootScope.IdSubProcesoActual=SubFuncion;
    ID = $rootScope.IdSubProcesoActual;
    $scope.IdSub = ID;
    $rootScope.IdSubProcesoIDSiguiente = IDSiguiente;  
    $rootScope.SubProceso = true;
    IDSiguiente = "0";
  }

  if($rootScope.IdSubProcesoActual !="0"){
    //console.log('paso 3');
    ID = $rootScope.IdSubProcesoActual;    
  }

  console.log('Siguiente ID 2:::['+ID+'] IDSiguiente:::['+IDSiguiente+'] index:::['+index+'] SubFuncion:::['+SubFuncion+'] SubProceso:::['+SubProceso+'] TIPO_FORMA:::['+TIPO_FORMA+'] SOLICITANTE:::['+SOLICITANTE+'] SOLICITUD_PARA:::['+SOLICITUD_PARA+'] TIPO:::['+TIPO+']');

  General.ObtieneSiguienteProceso(ID, IDSiguiente, SOLICITANTE, SOLICITUD_PARA, TIPO).then(function(r){
    if(r.data.success==true){
    $rootScope.DataProceso[index] = r.data.data;
    console.log('r :::', r); 
    //console.log('Tipo Etapa:::['+$rootScope.DataProceso[index][0].TIPO_FORMA+']');
    if($rootScope.DataProceso[index][0].OBSERVACION_VALIDACION==null)$rootScope.DataProceso[index][0].OBSERVACION_VALIDACION='';
    if($rootScope.DataProceso[index][0].OBSERVACION_GENERAL==null)$rootScope.DataProceso[index][0].OBSERVACION_GENERAL='';

    var OV = $rootScope.DataProceso[index][0].OBSERVACION_VALIDACION.split('<br>');    
    var OG = $rootScope.DataProceso[index][0].OBSERVACION_GENERAL.split('<br>');

    angular.forEach(OV, function (value, key) {
      $rootScope.DataGlosaOV.push({'OBSERVACION_VALIDACION': value});
      })
    angular.forEach(OG, function (value, key) {
      $rootScope.DataGlosaOG.push({'OBSERVACION_GENERAL': value});
      })
      //console.log($rootScope.DataGlosaOV);
      //console.log($rootScope.DataGlosaOG);

      if($rootScope.DataProceso[index][0].TIPO_FORMA =='Datos'){
        $rootScope.testdata = $rootScope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
        if(index ==0){$rootScope.arrayforma0=[];}
        if(index ==1){$rootScope.arrayforma1=[];}
        if(index ==2){$rootScope.arrayforma2=[];}
        if(index ==3){$rootScope.arrayforma3=[];}
        if(index ==4){$rootScope.arrayforma4=[];}
        if(index ==5){$rootScope.arrayforma5=[];}
        if(index ==6){$rootScope.arrayforma6=[];}
        if(index ==7){$rootScope.arrayforma7=[];}
        if(index ==8){$rootScope.arrayforma8=[];}
        if(index ==9){$rootScope.arrayforma9=[];}
        if(index ==10){$rootScope.arrayforma10=[];}
        if(index ==11){$rootScope.arrayforma11=[];}
        if(index ==12){$rootScope.arrayforma12=[];}
        if(index ==13){$rootScope.arrayforma13=[];}
        if(index ==14){$rootScope.arrayforma14=[];}
        if(index ==15){$rootScope.arrayforma15=[];}
        if(index ==16){$rootScope.arrayforma16=[];}
        if(index ==17){$rootScope.arrayforma17=[];}
        if(index ==18){$rootScope.arrayforma18=[];}
        if(index ==19){$rootScope.arrayforma19=[];}
        if(index ==20){$rootScope.arrayforma20=[];}
        if(index ==21){$rootScope.arrayforma21=[];}
        if(index ==22){$rootScope.arrayforma22=[];}
        if(index ==23){$rootScope.arrayforma23=[];}
        angular.forEach($rootScope.testdata, function (value, key) {
          //console.log('Value:::'+value+' index:::'+index);
          if(index ==0){$rootScope.arrayforma0.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==1){$rootScope.arrayforma1.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==2){$rootScope.arrayforma2.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==3){$rootScope.arrayforma3.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==4){$rootScope.arrayforma4.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==5){$rootScope.arrayforma5.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==6){$rootScope.arrayforma6.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==7){$rootScope.arrayforma7.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==8){$rootScope.arrayforma8.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==9){$rootScope.arrayforma9.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==10){$rootScope.arrayforma10.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==11){$rootScope.arrayforma11.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==12){$rootScope.arrayforma12.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==13){$rootScope.arrayforma13.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==14){$rootScope.arrayforma14.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==15){$rootScope.arrayforma15.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==16){$rootScope.arrayforma16.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==17){$rootScope.arrayforma17.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==18){$rootScope.arrayforma18.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==19){$rootScope.arrayforma19.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==20){$rootScope.arrayforma20.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==21){$rootScope.arrayforma21.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==22){$rootScope.arrayforma22.push({ 'ETIQUETA_CONECTOR': value});}
          if(index ==23){$rootScope.arrayforma23.push({ 'ETIQUETA_CONECTOR': value});}  
        });
      }
      if($rootScope.DataProceso[index][0].TIPO_FORMA =='Decisión'){
        $rootScope.testdata1 = $rootScope.DataProceso[index][0].ETIQUETA_CONECTOR.split(',');
        $rootScope.testdata2 = $rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE.split(',');
        var Largo = $rootScope.testdata1.length;
        if(index ==0){$rootScope.arraydecision0=[];}
        if(index ==1){$rootScope.arraydecision1=[];}
        if(index ==2){$rootScope.arraydecision2=[];}
        if(index ==3){$rootScope.arraydecision3=[];}
        if(index ==4){$rootScope.arraydecision4=[];}
        if(index ==5){$rootScope.arraydecision5=[];}
        if(index ==6){$rootScope.arraydecision6=[];}
        if(index ==7){$rootScope.arraydecision7=[];}
        if(index ==8){$rootScope.arraydecision8=[];}
        if(index ==9){$rootScope.arraydecision9=[];}
        if(index ==10){$rootScope.arraydecision10=[];}
        if(index ==11){$rootScope.arraydecision11=[];}
        if(index ==12){$rootScope.arraydecision12=[];}
        if(index ==13){$rootScope.arraydecision13=[];}
        if(index ==14){$rootScope.arraydecision14=[];}
        if(index ==15){$rootScope.arraydecision15=[];}
        if(index ==16){$rootScope.arraydecision16=[];}
        if(index ==17){$rootScope.arraydecision17=[];}
        if(index ==18){$rootScope.arraydecision18=[];}
        if(index ==19){$rootScope.arraydecision19=[];}
        if(index ==20){$rootScope.arraydecision20=[];}
        if(index ==21){$rootScope.arraydecision21=[];}
        if(index ==22){$rootScope.arraydecision22=[];}
        if(index ==23){$rootScope.arraydecision23=[];}  
        for (var i=0; i<Largo; i++) {
          //console.log('Test 1 :::'+$rootScope.testdata1[i]+' Test 2:::'+$rootScope.testdata2[i]);
          if($rootScope.DataProceso[index][0].GL_PROCESO =='El resultado de la validación es exitoso?'){

            //console.log('$scope.APLICA::'+$scope.APLICA);
            if($scope.APLICA !=undefined && $rootScope.testdata1[i] ==$scope.APLICA)
            {
              //console.log('entro a la wea');  
              if(index ==4)$scope.decision4 = $rootScope.testdata2[i];
              if(index ==5)$scope.decision5 = $rootScope.testdata2[i];
              if(index ==6)$scope.decision6 = $rootScope.testdata2[i];
              if(index ==7)$scope.decision7 = $rootScope.testdata2[i];
              if(index ==8)$scope.decision8 = $rootScope.testdata2[i];                       
              //$scope.ID_PROCESO_SIGUIENTE = '';
              //$scope.APLICA=undefined;
            }

          }
          console.log('Seleccion ::'+$scope.motivocsop0);
          if(index ==0){$rootScope.arraydecision0.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==1){$rootScope.arraydecision1.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==2){$rootScope.arraydecision2.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==3){$rootScope.arraydecision3.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==4){$rootScope.arraydecision4.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==5){$rootScope.arraydecision5.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==6){$rootScope.arraydecision6.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==7){$rootScope.arraydecision7.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==8){$rootScope.arraydecision8.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==9){$rootScope.arraydecision9.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==10){$rootScope.arraydecision10.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==11){$rootScope.arraydecision11.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==12){$rootScope.arraydecision12.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==13){$rootScope.arraydecision13.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==14){$rootScope.arraydecision14.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==15){$rootScope.arraydecision15.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==16){$rootScope.arraydecision16.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==17){$rootScope.arraydecision17.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==18){$rootScope.arraydecision18.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==19){$rootScope.arraydecision19.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==20){$rootScope.arraydecision20.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==21){$rootScope.arraydecision21.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==22){$rootScope.arraydecision22.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}
          if(index ==23){$rootScope.arraydecision23.push({ 'ID_PROCESO_SIGUIENTE': $rootScope.testdata2[i], 'ETIQUETA_CONECTOR': $rootScope.testdata1[i]});}

        }

      }
      if($rootScope.DataProceso[index][0].TIPO_FORMA =='Finalizado'){
        $rootScope.Finalizado = true;
        if($rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='0'){
          $scope.APLICA='OK';
        }

        if($rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE =='1'){
          $scope.APLICA='NOK';
        }                

      }

      if($rootScope.DataProceso[index][0].TIPO_FORMA !='Finalizado' &&$rootScope.DataProceso[index][0].FLUJO_OBLIGATORIO =='NO'){

        //console.log('index FLUJO_OBLIGATORIO NO', index+1);    
        $scope.ObtieneSiguienteProceso($rootScope.IdProcesoActual, $rootScope.DataProceso[index][0].ID_PROCESO_SIGUIENTE, index+1, ($rootScope.DataProceso[index][0].OBLIGATORIO =='SI' ? $rootScope.DataProceso[index][0].ID_FUNCION : '0'), $rootScope.SubProceso, $rootScope.DataProceso[index][0].TIPO_FORMA);

      }
      
      //$rootScope.DataProceso[index+1]=undefined;$rootScope.DataProceso[index+2]=undefined;$rootScope.DataProceso[index+3]=undefined;$rootScope.DataProceso[index+4]=undefined;$rootScope.DataProceso[index+5]=undefined;$rootScope.DataProceso[index+6]=undefined;$rootScope.DataProceso[index+7]=undefined;$rootScope.DataProceso[index+8]=undefined;$rootScope.DataProceso[index+9]=undefined;
    }
    else{
      console.log('Trae datos Nok 1 :::'+r.data.mensaje);  
    }
  },
  function (error){
    console.log('Trae datos Nok 2');
  });

}

$rootScope.buscaOrdenesEvaluar = function(FechaDesde, FechaHasta, Agente, OTT){
  $rootScope.satisLoad = true;
  $scope.FechaDesde = FechaDesde;
  $scope.FechaHasta = FechaHasta;
  $scope.Agente = Agente;
  $scope.OTT = OTT; 

$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.BuscaOrdenesEvaluar(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), Agente, OTT).then(
       
  function (ficha) {

    $rootScope.datosVueltas = [];

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}     


$rootScope.GuardaImagen = function(ID, reader, file, res){
     
  reader.readAsDataURL(file);
  
  if(file.name.substring(file.name.lastIndexOf(".")).toLowerCase()=='.mp3' ||file.name.substring(file.name.lastIndexOf(".")).toLowerCase()=='.wav'){
    reader.onloadend = function () {
      base64data = reader.result;
      res = base64data.split(",");
        var saveIMG = {
          'ID' : ID,
          'IMAGEN' : res[1],//base64data
          'USUARIO' : $rootScope.currentUser.user_id,
          'EXTENCION' : file.name.substring(file.name.lastIndexOf(".")).toLowerCase()
        }
        
        General.getGuardaImagen(saveIMG).then( 
      function(result){
          console.log(result.data.success); 
           console.log(result.data.mensaje); 
            if(result.data.success == true){
            
              sweetAlert("OK =)!", "audio enviado exitosamente", "success");  

              return 'Grabo audio:'+file.name;
            }else{
              return 'No grabo audio 1:'+file.name;
            
          
        }
      },
      function(r){
        return 'No grabo audio 2:'+file.name;
      }
    );
    }
  
  }
  else{
    sweetAlert("Lo Siento", "Debe agregar un audio en formato .mp3", "warning"); 
  }




};

$rootScope.setVerificaImagenes =  function(blob, ID){
  console.log('blob:::',blob); 
  console.log('ID:::',ID);
     if(blob){
     //Para grabar multiples imagenes
     for (var i = 0; i < blob.length; i++) {
       var res = "";  
       var Resultado = $rootScope.GuardaImagen(ID, new window.FileReader(), blob[i], res);
       }
     }
     else{
       sweetAlert("Lo Siento", "Debe agregar a lo menos un audio para grabar", "warning");
     }
};


 
$rootScope.grabaAuditoria = function(ID, NOMBRE, ORDEN, RUT, RECIBE, DIRECCION, TIPO, PERMISOS, V_PLAN, SERVICIO_COMPANIA, VELOCIDAD, DECOS, AGREGA_DECOS, EXTENSORES, CABLEADO, DURACION, FECHA_HORA, PRODUCTOS, EPA, HablaCCI, MotivoLlamada, ExplicaTV, AgregarAudioBox, PlanEntelTV, EspaciosWIFI, ServicioCompania, Resumen, AppEntel, Despide, Pisos_Domicilio, CAE_TERRENO, MOTIVO_CAIDA, USUARIO_EVALUACION){
  $rootScope.satisLoad = true;

General.grabaAuditoria(ID, NOMBRE, ORDEN, RUT, RECIBE, DIRECCION, TIPO, PERMISOS, V_PLAN, SERVICIO_COMPANIA, VELOCIDAD, DECOS, AGREGA_DECOS, EXTENSORES, CABLEADO, DURACION, FECHA_HORA, PRODUCTOS, EPA, HablaCCI, MotivoLlamada, ExplicaTV, AgregarAudioBox, PlanEntelTV, EspaciosWIFI, ServicioCompania, Resumen, AppEntel, Despide, Pisos_Domicilio, CAE_TERRENO, MOTIVO_CAIDA, USUARIO_EVALUACION).then(
       
  function (ficha) {
    console.log('ficha grabaAuditoria:::', ficha);  
    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       sweetAlert("OK =)!", "Auditoria enviada exitosamente", "success"); 
       $rootScope.buscaOrdenesEvaluar($scope.FechaDesde, $scope.FechaHasta, $scope.Agente, $scope.OTT);$rootScope.limpiaVar(); 
      }
      else{
        sweetAlert("Lo siento =C!", "Auditoria no ha sido enviada 1", "warning");    
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      sweetAlert("Lo siento =C!", "Auditoria no ha sido enviada 2", "warning");
       $rootScope.satisLoad = false;
     }); 

}    

$rootScope.limpiaVar = function(){

  $rootScope.OTT_BUSCAR = '';
  $rootScope.FechaCarga = '';
  $rootScope.TipoOren = '';
  $rootScope.RUTA_GRABACION = '';
  $rootScope.ID = '';
  $scope.NOMBRE = 'NO';
  $scope.ORDEN = 'NO';
  $scope.RUT = 'NO';
  $scope.RECIBE = 'NO';
  $scope.DIRECCION = 'NO';
  $scope.TIPO = 'NO';
  $scope.PERMISOS = 'NO';
  $scope.V_PLAN = 'NO';
  $scope.SERVICIO_COMPANIA = 'NO';
  $scope.VELOCIDAD = 'NO';
  $scope.DECOS = 'NO';
  $scope.AGREGA_DECOS = 'NO';
  $scope.EXTENSORES = 'NO';
  $scope.CABLEADO = 'NO';
  $scope.DURACION = 'NO';
  $scope.FECHA_HORA = 'NO';
  $scope.PRODUCTOS = 'NO';
  $scope.EPA = 'NO';
  $scope.HablaCCI = 'NO';
  $scope.MotivoLlamada = 'NO';
  $scope.ExplicaTV = 'NO';
  $scope.AgregarAudioBox = 'NO';
  $scope.PlanEntelTV = 'NO';
  $scope.EspaciosWIFI = 'NO';
  $scope.ServicioCompania = 'NO';
  $scope.Resumen = 'NO';
  $scope.AppEntel = 'NO';
  $scope.Despide = 'NO';  
  $scope.Pisos_Domicilio = 'NO';  
  $scope.CAE_TERRENO = '';  
  $scope.MOTIVO_CAIDA = '';
  $scope.USUARIO_EVALUACION = '';        

}

$rootScope.limpiaVar();


$scope.openModalObservaciones = function(value, id) { 
  var data = {
 };

 console.log('id', id);

  var ctrl = 'ModalInstanceObservacionesCtrl'; 
  var size = '';
  var callM = false;
  var params = data;
  switch (value) {
    //# 1 : MODAL SEGUIMIENTO
    case 4:
      var template = CONSTANTS.DIR_PATH + '/app/home/dashboard/view-fast.tpl.html'; 
      callM = true;
      var size = 'lg';
      params = id;
      $rootScope.REQUERIMIENTOID = id;
      break;
    default:

  }
  if (callM == true){
    //#Factory Modales 2,3,4
    modalFactory.open(template, ctrl, size, params).result.then(
      function (responseNote) {
        console.log("modal::: ", responseNote)

        if (responseNote.is_edit) { }
    });
  }else{
    //#PROMESA SEGUIMIENTO
    promiseSeg.then(
      function (result) {
        $scope.isCargando = false;
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
        modalFactory.open(template, ctrl, size, params).result.then(
          function (responseNote) {
            console.log("modal::: ", responseNote)
            if (responseNote.is_edit) { }
        });
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );
  }
};

$rootScope.getBuscaPorAgendarTelco = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getBuscaPorAgendarTelco(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    console.log('Resultado consulta getBuscaPorAgendarTelco:::'+ficha.data.success);
    console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}    

$rootScope.getBuscaSabanaMarcasTelco = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getBuscaSabanaMarcasTelco(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    console.log('Resultado consulta getBuscaSabanaMarcasTelco:::'+ficha.data.success);
    console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;  
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}    

$rootScope.getBuscaConfirmacionTelco = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getBuscaConfirmacionTelco(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    //console.log('Resultado consulta getBuscaGestionBafiDTH:::'+ficha.data.success);
    //console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}  

$rootScope.getInformedeGestion = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getInformedeGestion(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    //console.log('Resultado consulta getBuscaGestionBafiDTH:::'+ficha.data.success);
    //console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}  

$rootScope.getBuscaGestionTelcoCierresBienvenida = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getBuscaGestionTelcoCierresBienvenida(moment(FechaDesde).format('YYYYMMDD'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    console.log('Resultado consulta getBuscaGestionTelcoCierresBienvenida:::'+ficha.data.success);
    console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}    

$rootScope.getBuscaEnvioSMS = function(FechaDesde, FechaHasta, Servicio){
  $rootScope.satisLoad = true;
$scope.FechaDesde = FechaDesde;
$scope.FechaHasta = FechaHasta;
$scope.Servicio = Servicio;
$rootScope.datosVueltas = [];
$rootScope.MensajeError = '';

General.getBuscaEnvioSMS(moment(FechaDesde).format('YYYYMM'), moment(FechaHasta).format('YYYYMMDD'), 'TODO').then(
       
  function (ficha) {
    console.log('Resultado consulta getBuscaEnvioSMS:::'+ficha.data.success);
    console.log(ficha.data)

    if(ficha.data.success == true){
       $rootScope.satisLoad = false;
       $rootScope.datosVueltas = ficha.data.data;
      }
      else{
        $rootScope.datosVueltas = [];
        $rootScope.MensajeError = ficha.data.mensaje;
       $rootScope.satisLoad = false; 
      }
  },
     function (error){
      $rootScope.datosVueltas = [];
       $rootScope.satisLoad = false;
     }); 

}    

$scope.getDia = function(index){
  var dia = new Array(7);
  dia[0] = "Domingo";
  dia[1] = "Lunes";
  dia[2] = "Martes";
  dia[3] = "Miércoles";
  dia[4] = "Jueves";
  dia[5] = "Viernes";
  dia[6] = "Sábado";
  return dia[index];
}

$scope.getNombreDia = function(dia){ 

  var FechaActual = new Date();

  //console.log('Año:::' + moment($scope.FechaDesde).format('YYYY') + ' Mes:::' + (parseInt(moment($scope.FechaDesde).format('MM'))-1) + ' Día:::' + dia);
  var d = new Date(moment($scope.FechaDesde).format('YYYY'), (parseInt(moment($scope.FechaDesde).format('MM'))-1), dia);
  //console.log('d:::', d);
  var n = $scope.getDia(d.getDay());

  //console.log('Dia :::', n);

  
  return n;

}

$scope.cambiaServicio = function(FechaDesde, FechaHasta, Tipo){
  
  $scope.Tipo = Tipo;

  //console.log('$scope.Tipo:::', $scope.Tipo);

  if(Tipo=='ReporteGestionAGD')
     $rootScope.getInformeGestionAGD(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Sabana Marcas TDE')
     $rootScope.getSabanaMarcasTDE(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Informe Confirma DTH-BAFI')
     $rootScope.getBuscaGestionBafiDTH(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Por agendar Telco')
     $rootScope.getBuscaPorAgendarTelco(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Sabana Marcas Telco')
     $rootScope.getBuscaSabanaMarcasTelco(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Confirmacion Telco')
     $rootScope.getBuscaConfirmacionTelco(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Informe de Gestion')
     $rootScope.getInformedeGestion(FechaDesde, FechaHasta, Tipo);

  if(Tipo=='Gestion Telco Cierres-Bienvenida')
     $rootScope.getBuscaGestionTelcoCierresBienvenida(FechaDesde, FechaHasta, Tipo); 

  if(Tipo=='Reporte Envio SMS')
     $rootScope.getBuscaEnvioSMS(FechaDesde, FechaHasta, Tipo); 


}


$scope.openModalDetalle = function(value, FechaDesde, FechaHasta, Usuario, NombreAgente) {
  var data = {
 };

 $rootScope.FechaDesde_Detalle = moment(FechaDesde).format('YYYYMMDD');
 $rootScope.FechaHasta_Detalle = moment(FechaHasta).format('YYYYMMDD');
 $rootScope.Usuario_Detalle = Usuario;
 $rootScope.NombreAgente = NombreAgente;

  var ctrl = 'viewDetalleNotas';
  var size = '';
  var callM = false;
  var params = data;
  switch (value) {
    case 1:
      var template = CONSTANTS.DIR_PATH + '../app/home/dashboard/modal-desempeno_detalle.tpl.html';
      callM = true;
      var size = 'lg';
      //params = id;
      break;
   
    default:

  }
  if (callM == true){
    //#Factory Modales 2,3,4
    modalFactory.open(template, ctrl, size, params).result.then(
      function (responseNote) {
        console.log("modal::: ", responseNote)

        if (responseNote.is_edit) { }
    });
  }else{
    //#PROMESA SEGUIMIENTO
    promiseSeg.then(
      function (result) {
        $scope.isCargando = false;
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
        modalFactory.open(template, ctrl, size, params).result.then(
          function (responseNote) {
            //console.log("modal::: ", responseNote)
            if (responseNote.is_edit) { }
        });
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );
  }
};

$scope.exportToExcel=function(tableId){ // ex: '#my-table'
			$scope.exportHref=Excel.tableToExcel(tableId,'Reporte');
			$timeout(function(){
        location.href=$scope.exportHref;

        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;

        if(isEdge || isIE){
          var blobObject = new Blob(location.href);
          window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.xlsx');
        }


      },100);
}    
function getCleanedString(cadena){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos todos
  //for (var i = 0; i < specialChars.length; i++) {
      //cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  //}   

  // Lo queremos devolver limpio en minusculas
  //cadena = cadena.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  //cadena = cadena.replace(/ /g,"_");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  //console.log('pasa or aca cadena:::',cadena);
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");
  return cadena;
}
$scope.ExportToExcel1=function(tableid){ 
//function ExportToExcel1(tableid) { 
  var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
  var textRange; var j = 0;
  tab = document.getElementById(tableid);//.getElementsByTagName('table'); // id of table
  //console.log('Nombre tabla:::'+tableid);
  if (tab==null) {
      return false;
  }
  if (tab.rows.length == 0) {
      return false;
  }

  for (j = 0 ; j < tab.rows.length ; j++) {
      tab_text = tab_text + getCleanedString(tab.rows[j].innerHTML) + "</tr>";
      //tab_text=tab_text+"</tr>";
  }
  tab_text = tab_text + "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
  tab_text = tab_text.replace("ó", "o"); // reomves tildes culiaos

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
  {
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      sa = txtArea1.document.execCommand("SaveAs", true, "reporte_ott.xls");
  }
  else                 //other browser not tested on IE 11
      //sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
      try {
          var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
          window.URL = window.URL || window.webkitURL;
          link = window.URL.createObjectURL(blob);
          a = document.createElement("a");
          if (document.getElementById("caption")!=null) {
              a.download=document.getElementById("caption").innerText;
          }
          else
          {
              a.download = 'download';
          }

          a.href = link;

          document.body.appendChild(a);

          a.click();

          document.body.removeChild(a);
      } catch (e) {
      }


  return false;
  //return (sa);
}

  }
])

.controller('ControllerAtenciones', ['$window', '$scope', '$rootScope', '$state', 'General', '$timeout', '$uibModal', "$interval", 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale','Excel', '$filter',
function($window, $scope, $rootScope, $state, General, $timeout, $uibModal, $interval, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale, Excel, filter){ 
   
  //************************************************* */
  $rootScope.satisLoad = true; 
  $rootScope.TiendaLoad = true;
  $rootScope.satisGraficoLoad = true;  
  $rootScope.satisComentLoad = true; 
  $rootScope.idbarra = 1;
  $scope.FechaActual = formatDate(new Date());
  $scope.Tipo = "1";
  $scope.TipoOrden = "1";

  $rootScope.OTT = ''; 
  $rootScope.OTT_BUSCAR = '';
  $rootScope.FEI = '';
  $rootScope.EstadoCCI = '';
  $rootScope.Observacion = '';
  $rootScope.Posicion = 0;  

  $rootScope.ListaGeneralMotivo = [];
  $rootScope.ListaGeneralComuna = [];
  $scope.AgregarQuitaequipos = false; $scope.CambioPlan = false; $scope.ClientePostergaAgenda = false; $scope.DemoraInstalacion = false; $scope.Diferenciamontos = false; $scope.Errordireccion = false; $scope.errorplan = false; $scope.InformacionSTB = false; $scope.infraestructuradomicilio = false; $scope.Noentregamotivo = false; $scope.Nosolicitoservicio = false; $scope.Ofertacompetencia = false; $scope.Problemaagendamiento = false; $scope.ProblemasComerciales = false; $scope.Sinpermisosadministracion = false; $scope.SI = false;   
  $scope.AgregarQuitaequiposTotal = 0; $scope.CambioPlanTotal = 0; $scope.ClientePostergaAgendaTotal = 0; $scope.DemoraInstalacionTotal = 0; $scope.DiferenciamontosTotal = 0; $scope.ErrordireccionTotal = 0; $scope.errorplanTotal = 0; $scope.InformacionSTBTotal = 0; $scope.infraestructuradomicilioTotal = 0; $scope.NoentregamotivoTotal = 0; $scope.NosolicitoservicioTotal = 0; $scope.OfertacompetenciaTotal = 0; $scope.ProblemaagendamientoTotal = 0; $scope.ProblemasComercialesTotal = 0; $scope.SinpermisosadministracionTotal = 0; $scope.SITotal = 0;  
  
  $scope.TODOS = false; $scope.AFINIDAD = false; $scope.AGENTEFIBRA = false;  $scope.AGENTEMALL = false;  $scope.AGENTETERRENO = false;  $scope.CALLCENTER = false;  $scope.CANALPREFERENCIAL = false;  $scope.CENTROINSTALACIONES = false;  $scope.CHAT = false;  $scope.CLICKTOCALL = false;  $scope.DESCONOCID = false;  $scope.DIGITAL = false;  $scope.FONOCOMPRAS = false;  $scope.FONOCOMPRASWEB = false;  $scope.GGTT = false;  $scope.GRANDESTIENDASRETAIL = false;  $scope.IVR = false;  $scope.MARKETPLACE = false;  $scope.MAYORISTA = false;  $scope.OTROS = false;  $scope.OUTBOUNDCAPTURA = false;  $scope.RETENCION = false;   $scope.S2S = false;  $scope.S2SWHATSAPP = false;  $scope.SGCENTRO = false;  $scope.SGNORTE = false;  $scope.SGRM = false;  $scope.SGSUR = false;  $scope.SSTT = false;  $scope.TIENDASEXPRESS = false;  $scope.TIENDASFRANQUICIADAS = false;  $scope.TIENDASPROPIAS = false;  $scope.VENTASREMOTAS = false; 

  $scope.BUIN = false; $scope.CALAMA = false; $scope.CERRILLOS = false; $scope.COLINA = false; $scope.CONCEPCION = false; $scope.CONCON = false; $scope.COQUIMBO = false; $scope.EL_BOSQUE = false; $scope.ESTACION_CENTRAL = false; $scope.HUALPEN = false; $scope.HUECHURABA = false; $scope.INDEPENDENCIA = false; $scope.LA_CISTERNA = false; $scope.LA_FLORIDA = false; $scope.LA_GRANJA = false; $scope.LA_REINA = false; $scope.LA_SERENA = false; $scope.LAMPA = false; $scope.LAS_CONDES = false; $scope.LO_BARNECHEA = false; $scope.MACHALI = false; $scope.MACUL = false; $scope.MAIPU = false; $scope.CALAMANUNOA = false; $scope.OVALLE = false; $scope.PADRE_HURTADO = false; $scope.PAINE = false; $scope.PEDRO_AGUIRRE_CERDA = false; $scope.PENALOLEN = false;  $scope.PENCO = false; $scope.PROVIDENCIA = false; $scope.PUDAHUEL = false; $scope.PUENTE_ALTO = false; $scope.QUILICURA = false; $scope.QUILPUE = false; $scope.QUINTA_NORMAL = false; $scope.RANCAGUA = false; $scope.RECOLETA = false; $scope.SAN_BERNARDO = false; $scope.SAN_JOAQUIN = false; $scope.SAN_MIGUEL = false; $scope.SAN_PEDRO_DE_LA_PAZ = false; $scope.SANTIAGO = false; $scope.SIN_ZONA = false; $scope.TALCA = false; $scope.TALCAHUANO = false; $scope.TEMUCO = false; $scope.TOME = false; $scope.VALPARAISO = false;  $scope.VILLA_ALEMANA = false; $scope.VINA_DEL_MAR = false; $scope.VITACURA = false;
		// # Date Picker
    $scope.dtayer = new Date()
    $scope.dt = new Date(($scope.dtayer.getMonth()+1).toString().padStart(2, '0') + '/01/' + $scope.dtayer.getFullYear().toString());

    $rootScope.FechaSeleccionado = ($scope.dt.getMonth()+1).toString().padStart(2, '0') + '/' + $scope.dt.getDate().toString().padStart(2, '0')  + '/' + $scope.dt.getFullYear().toString();
    $rootScope.FechaSeleccionadoHasta = ($scope.dt.getMonth()+1).toString().padStart(2, '0') + '/' + $scope.dt.getDate().toString().padStart(2, '0')  + '/' + $scope.dt.getFullYear().toString();

    $rootScope.FechaSeleccionadoVista = $scope.dt.getDate().toString().padStart(2, '0') + '/' + ($scope.dt.getMonth()+1).toString().padStart(2, '0');
    $rootScope.FechaSeleccionadoVistaH = $scope.dt.getDate().toString().padStart(2, '0') + '/' + ($scope.dt.getMonth()+1).toString().padStart(2, '0');

    $scope.dt1 = new Date();
    $scope.dt2 = new Date(); 
    $scope.dt3 = new Date();  
    $scope.HoraActual = moment($scope.dt).format('HHMM')
    $scope.FechaA = moment($scope.dt2).format('YYYYMM'); 
    
    tmhDynamicLocale.set('es');
		$scope.formats = ['dd-MM-yyyy', 'dd/MM/yyyy', 'dd.MM.yyyy'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['d!/M!/yyyy'];
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      //minMode: 'month'
    };

		$scope.formats3 = ['MM-yyyy', 'MM/yyyy', 'MM.yyyy'];
	  $scope.format3 = $scope.formats3[0];
	  $scope.altInputFormats3 = ['M!/yyyy'];
    $scope.dateOptions3 = {
      //formatYear: 'yy',
      startingDay: 1,
      minMode: 'month'
    };
  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		$scope.open3 = function() {
			$scope.popup3.opened = true;
		};

		$scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
      $scope.dt1 = new Date(year, month, day);
      $scope.dt2 = new Date(year, month, day);
		};
		$scope.popup1 = {
			 opened: false
		 };
    $scope.popup2 = {
      opened: false
    };
    $scope.popup3 = {
      opened: false
    };

   $scope.changeHandler = function () {
				//$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
			}		 
 		// # Date Picker
		 
    function formatDate(date) {
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
      ];
      
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    function formatDateShort(date) {
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
      ];
      
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      
      return monthNames[monthIndex] + ' ' + year;
    }


    $rootScope.satisGraficoLoad = true;
    $rootScope.satisLoad = true;
    fecha_desde_satis = sharedProperties.getStart().format('YYYYMMDD');

    //********************************************************************************************************/

    //********************************DASHBOARD  CONSOLIDADO**************************************************/
  
    $rootScope.seriesChart = ['EFECTIVIDAD_ENTEL', 'EFECTIVIDAD_CCI']; 
    $rootScope.seriesChartCanal = ['EFECTIVIDAD_ENTEL', 'EFECTIVIDAD_CCI']; 
    $rootScope.colorsMesDentro = ["#36A2EB","#FF6384"];
    $rootScope.optionsChart = {
      tooltips:{
        enabled: true,
        callbacks: {
            label: function(tooltipItems, data) {
              if(tooltipItems.index == 0){
                return data.datasets[tooltipItems.datasetIndex].label +': :::' + tooltipItems.yLabel + ' | ' + $rootScope.seriesEditChart[tooltipItems.index];
              }else{
                return data.datasets[tooltipItems.datasetIndex].label +': ---' + tooltipItems.yLabel;

              }
            }
        }

      },
      scaleShowValues: true, 
      scales: {
        xAxes: [{
            gridLines: {
                display:false
            }, ticks: { 
              autoSkip: false 
              }
          }],
        yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            gridLines: {
                display:false
            },
            ticks: {
                  min: 0
              },
            position: 'left'
        }]
      }
    }; 

    $rootScope.optionsPortaVerde = {
      min: 0,
      max: 100, 
      size: 120,
      barCap: 17,
      barColor: '#5BC01E',
      trackColor: '#dedede',
      unit: '%',
      trackWidth: 9,
      barWidth: 10,
      readOnly: true
    }; 

    $rootScope.CANT_RECHAZADAS = 0;
    $scope.POR_RECHAZADAS = 15;
    $rootScope.CANT_CARGADAS = 0;
    $rootScope.TipoCanal = 'TODOS'; 
    $rootScope.Canal = 'TODOS';   
    $rootScope.Comuna = 'TODOS'; 
    $rootScope.Region = 'TODOS';  
    $rootScope.RegionSeleccionada = 'RM';  
    $rootScope.tipocanalesRechazos = [];
    $rootScope.canalesRechazos = [];

    $scope.orderByField = 'PROMEdIO';
    $scope.reverseSort = false;


    $rootScope.BuscarAtencionesAgente = function(){ 
      //$rootScope.FechaSeleccionado = '';
    
      var Fecha_D = moment($scope.dt).format('YYYYMMDD'); 
      var Fecha_H = moment($scope.dt1).format('YYYYMMDD'); 
    
      //console.log('Enviados a reporte rechazados Excel: [' + Fecha_D + '][' + Fecha_H + ']');  
    General.BuscarAtencionesAgente(Fecha_D, Fecha_H).then( 
      function(result){
        console.log('result BuscarAtencionesAgente:::', result);  
        if(result.data.success == false){
          $rootScope.ListaGeneral = [];
          //sweetAlert("Lo Siento =(!", "Error en búsqueda reporte obtieneProactividad", "error");  
        }else{ 
          $rootScope.ListaGeneral = result.data.data;   
          
        }
      },  
      function(r){
        $rootScope.ListaGeneral = [];
       }
    );
    
    }

    $rootScope.BuscarAtencionesAgente();  

//*******************************GRAFICOS******************************************** */
//# Reporte Contraste , Grafico
$scope.yContraste=[76, 52, 82, 99, 74];
$scope.xContraste=['AM', 'CONFIRMACION', 'MOCHILA', 'PM'];

$scope.seriesChart = [{
  name: 'Listas',
  //y: chartInfo.data.data
}];
//$rootScope.DashbReporteResumenxRegion();  
//$rootScope.DashbReporteResumenxComuna($rootScope.RegionSeleccionada);
//$rootScope.DashbReporteResumenxExcel($rootScope.Canal);  
//$rootScope.obtieneTortaRechazos();
//$rootScope.obtieneIndicadoresRechazos($rootScope.Canal);

//$rootScope.obtieneCanalesRechazos($rootScope.TipoCanal);
//$rootScope.obtieneComunaRechazos($rootScope.Region); 

//$rootScope.obtieneEfectividadGeneralMotivo($rootScope.FechaSeleccionado, $rootScope.Region, $rootScope.Comuna);
//*******************************************/

$scope.activeTabIndex = 0;
$rootScope.tabs = [];

//# CERRAR PANTALLA DETALLE
$scope.closeSelected = function($index){
  $rootScope.tabs.splice($index, 1);
};

 //#setSelected = PREVIEW Ticket
$scope.setSelected = function() {
  $scope.selected = {
    'tipo': 1,
    'valor': '',
    'NUMERO_OXT': 'Detalle Confirmación ' +  $rootScope.NUMERO_OXT //NUMERO_OXT//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
  };
  $scope.openedSide = true;
  $scope.last = $rootScope.NUMERO_OXT;
};

function getCleanedString(cadena){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos TODOS
  //for (var i = 0; i < specialChars.length; i++) {
      //cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  //}   

  // Lo queremos devolver limpio en minusculas
  //cadena = cadena.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  //cadena = cadena.replace(/ /g,"_");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");
  return cadena;
}
$scope.ExportToExcel1=function(tableid){ 
//function ExportToExcel1(tableid) { 
  var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
  var textRange; var j = 0;
  tab = document.getElementById(tableid);//.getElementsByTagName('table'); // id of table
  console.log('Nombre tabla:::'+tableid);
  if (tab==null) {
      return false;
  }
  if (tab.rows.length == 0) {
      return false;
  }

  for (j = 0 ; j < tab.rows.length ; j++) {
      tab_text = tab_text + getCleanedString(tab.rows[j].innerHTML) + "</tr>";
      //tab_text=tab_text+"</tr>";
  }
  tab_text = tab_text + "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
  tab_text = tab_text.replace("ó", "o"); // reomves tildes culiaos

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
  {
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      sa = txtArea1.document.execCommand("SaveAs", true, "reporte_ott.xls");
  }
  else                 //other browser not tested on IE 11
      //sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
      try {
          var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
          window.URL = window.URL || window.webkitURL;
          link = window.URL.createObjectURL(blob);
          a = document.createElement("a");
          if (document.getElementById("caption")!=null) {
              a.download=document.getElementById("caption").innerText;
          }
          else
          {
              a.download = 'download';
          }

          a.href = link;

          document.body.appendChild(a);

          a.click();

          document.body.removeChild(a);
      } catch (e) {
      }


  return false;
  //return (sa);
}

   
   }
   //}

])

.controller('ControllerTickets', ['$scope', '$rootScope', '$state', 'General', '$stateParams', '$timeout', '$uibModal', '$interval', 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale', 'Excel',
function($scope, $rootScope, $state, General, $stateParams, $timeout, $uibModal, $interval, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale, Excel){ 
  $rootScope.CargandoGral = true;    
  $rootScope.satisLoad = true;
  $scope.pathdoc = CONSTANTS.PATH_DOC_DECISION;  
  $scope.PATH_DOC_ticket = CONSTANTS.PATH_DOC_ticket;     
  $rootScope.TiendaLoad = true;
  $rootScope.satisGraficoLoad = true;
  $rootScope.satisComentLoad = true;
  $rootScope.ListaGrilla = [];
  $scope.COD_SERVICIO = ''; 
  $scope.TIPO_SERVICIO = '';
  $scope.RESULTADO_PROVISION = '';
  $scope.WO = '';
  $scope.RESULTADO_CERTIFICACION = '';
  $scope.CODIGO_PADRE = '';
  $scope.VALIDACION_PROFILE_TR069 = '';
  $scope.COLOR_ACTIVIDAD = '';
  $scope.RANGOS_TR069 = '';
  $scope.IP = '';
  $scope.REINICIO_WAN = '';
  $scope.LAST_DOWN_CORRECTA = '';
  $scope.USERNAME = '';
  $scope.PASSWORD = '';
  $scope.OBSERVACION = '';

	$scope.doSomethingElse = function($event) { 
    // do something else
    //$event.stopPropagation();
    $event.preventDefault();
  };
  $rootScope.$watch("tabActive",function(newValue,oldValue) {
     
    if (newValue===oldValue) {
      return;
    }
   $scope.tabActive=$rootScope.tabActive;
   ////console.log("El nuevo valor es scope:::" + $scope.tabActive);
  });
  $scope.$watch("tabActive",function(newValue,oldValue) {
       
    if (newValue===oldValue) {
      return;
    }
   $rootScope.tabActive=$scope.tabActive;
   ////console.log("El nuevo valor es rootscope:::" + $scope.tabActive);
  });



  //*******************************************/

$scope.activeTabIndex = 0;
$rootScope.tabs = [];

//# CERRAR PANTALLA DETALLE
$scope.closeSelected = function($index){
  $rootScope.tabs.splice($index, 1);
};

//#setSelected = PREVIEW Ticket
$scope.setSelected = function() {
  $scope.selected = this.data;
  $scope.openedSide = true;
  $scope.last = this.data.TICKET;   
};

//#openSelected = Abrir Ticket
$scope.openSelected = function(TICKET, NUMERO_OXT){
  $rootScope.TICKET = TICKET;
  $rootScope.NUMERO_OXT = NUMERO_OXT;
  $rootScope.SITE_POSITIVO = false;
  $rootScope.SITE_NEGATIVO = false;

  $rootScope.CargandoGral = true;
  console.log('$rootScope.TICKET:::', $rootScope.TICKET);
  console.log('$rootScope.NUMERO_OXT:::', $rootScope.NUMERO_OXT);
  if(!$scope.selected.TICKET)
      $scope.selected = this.data;
  sem = -1;
  for (var i = 0; i < $rootScope.tabs.length; i++) {
    if ($rootScope.tabs[i]['id'] == $scope.selected.TICKET) {
      sem = i;
    }
  }

  //#SERVICIO Trae Detalles Pintamos la nueva tab
  /*var promise = loadDetalles.detalle($scope.selected.FORMULARIOID, 'detalle');*/
  if(sem == -1) {
    
        var dataFicha = {
          'tipo': 1,
          'valor': $rootScope.NUMERO_OXT //NUMERO_OXT//result.data[0].NUMERO_OXT//$scope.selected.RUT.slice(0,-2)
        }
            var newTab = { id: $scope.selected.TICKET, TICKET: $scope.selected.TICKET, title: 'TICKET: '+ $rootScope.TICKET}; 
            $rootScope.tabs.push( newTab );
            $rootScope.CargandoGral = false;

  }else{
    $rootScope.CargandoGral = false; 
    // $rootScope.alerts.push({type: 'alert-warning' ,msg: CONSTANTS.OXT_ABIERTA});
    swal("Ojo!", "El ticket "+$scope.selected.TICKET+" ya se encuentra abierta!", "warning");

  }

  $timeout(function(){
    $scope.openedSide = false;
  });
};

  

$rootScope.LoadBuscaDetalle = function(TICKET){ 

General.ObtieneDetalleTickets(TICKET).then( 
  function(result){
  
      console.log('result ObtieneDetalleTickets: ', result.data);   

        if(result.data.success == false){
          $rootScope.dataDetalleTicket = [];
        }else{
          $rootScope.dataDetalleTicket = result.data.data;

          $scope.COD_SERVICIO = result.data.data[0].COD_SERVICIO;
          $scope.TIPO_SERVICIO = result.data.data[0].TIPO_SERVICIO;
          $scope.WO = result.data.data[0].WO;
          $scope.SERVER_PROFILE = result.data.data[0].VALIDACION_PROFILE_TR069; 

          $scope.RESULTADO_CERTIFICACION = result.data.data[0].RESULTADO_CERTIFICACION;
          $scope.CODIGO_PADRE = result.data.data[0].CODIGO_PADRE;
          $scope.VALIDACION_PROFILE_TR069 = result.data.data[0].VALIDACION_PROFILE_TR069;
          $scope.COLOR_ACTIVIDAD = result.data.data[0].COLOR_ACTIVIDAD;
          $scope.RANGOS_TR069 = result.data.data[0].RANGOS_TR069;
          $scope.IP = result.data.data[0].IP;
          $scope.REINICIO_WAN = result.data.data[0].REINICIO_WAN;
          $scope.LAST_DOWN_CORRECTA = result.data.data[0].LAST_DOWN_CORRECTA;
          $scope.USERNAME = result.data.data[0].USERNAME;
          $scope.PASSWORD = result.data.data[0].PASSWORD;
          $scope.OBSERVACION = result.data.data[0].OBSERVACION; 
          $scope.IMAGEN_USERNAME = result.data.data[0].IMAGEN_USERNAME; 
          $scope.IMAGEN_PASWORD = result.data.data[0].IMAGEN_PASWORD;   
     
          
        }
  },  
  function(r){ 
    $rootScope.dataDetalleTicket = [];
  }
);
}

    
$rootScope.LoadListaGrilla = function(){

General.ObtieneTickets().then( 
  function(result){
  
     //console.log('result ObtieneTickets: ', result.data);   

        if(result.data.success == false){
          $rootScope.Lista_datos = result.data.data;
          $rootScope.Lista_datos = [];
       // sweetAlert("Lo Siento =(!", "Error en búsqueda de incidencias del ticket", "error");
        }else{
          $rootScope.Lista_datos = result.data.data;
       //   console.log('DATOS  interval Grilla::',result.data.data)
        }
  },  
  function(r){ }
);
}

$rootScope.LoadListaGrilla();


$scope.exportToExcelCesop=function(tableId){ // ex: '#my-table'
      $scope.exportHref=Excel.tableToExcel(tableId,'Reporte por Fecha');
      //$scope.exportHref=Excel.tableToExcel(tableId1,'Reporte por oitroro');
     // $scope.exportHref=Excel.tableToExcel1(tableId1,'Reporte por Mes');
      
      $timeout(function(){
      location.href=$scope.exportHref;
  
      var isIE = /*@cc_on!@*/ false || !!document.documentMode;
      var isEdge = !isIE && !!window.StyleMedia;
  
      if(isEdge || isIE){
        var blobObject = new Blob(location.href);
        window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.xlsx');
      }
  
  
      },100); // trigger download
}
function getCleanedString(cadena){
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos todos
  //for (var i = 0; i < specialChars.length; i++) {
      //cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
  //}   

  // Lo queremos devolver limpio en minusculas
  //cadena = cadena.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  //cadena = cadena.replace(/ /g,"_");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  //console.log('pasa or aca cadena:::',cadena);
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");
  return cadena;
}
$scope.ExportToExcel1=function(tableid){ 
//function ExportToExcel1(tableid) { 
  var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
  var textRange; var j = 0;
  tab = document.getElementById(tableid);//.getElementsByTagName('table'); // id of table
 // console.log('Nombre tabla:::'+tableid);
  if (tab==null) {
      return false;
  }
  if (tab.rows.length == 0) {
      return false;
  }

  for (j = 0 ; j < tab.rows.length ; j++) {
      tab_text = tab_text + getCleanedString(tab.rows[j].innerHTML) + "</tr>";
      //tab_text=tab_text+"</tr>";
  }
  tab_text = tab_text + "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
  tab_text = tab_text.replace("ó", "o"); // reomves tildes culiaos

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
  {
      txtArea1.document.open("txt/html", "replace");
      txtArea1.document.write(tab_text);
      txtArea1.document.close();
      txtArea1.focus();
      sa = txtArea1.document.execCommand("SaveAs", true, "reporte_ott.xls");
  }
  else                 //other browser not tested on IE 11
      //sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
      try {
          var blob = new Blob([tab_text], { type: "application/vnd.ms-excel" });
          window.URL = window.URL || window.webkitURL;
          link = window.URL.createObjectURL(blob);
          a = document.createElement("a");
          if (document.getElementById("caption")!=null) {
              a.download=document.getElementById("caption").innerText;
          }
          else
          {
              a.download = 'download';
          }

          a.href = link;

          document.body.appendChild(a);

          a.click();

          document.body.removeChild(a);
      } catch (e) {
      }


  return false;
  //return (sa);
}
    
/**************  modal historial de asignación  ************************* */

$scope.OpenModalEstado = function(value, Numero_oxt, ID, Estado, Usuario) {
var data = {};

$rootScope.Numero_oxt = Numero_oxt;
$rootScope.ID = ID;
$rootScope.Estado = Estado;
$rootScope.Usuario = Usuario;

var ctrl = 'ContrllerFormularioCambiaEstado';    
var size = ''; 
var callM = false;
//var params = [];  
$scope.isCargando = false;

// $rootScope.Tipo=Tipo;

switch (value) {
  //# 1 : MODAL SEGUIMIENTO
  case 1:
  //  var promiseSeg = '';
    var template = CONSTANTS.DIR_PATH + '/app/home/dashboard/view-ingresar-datosCambioEstado-modal.tpl.html'; 
    var size = 'md';
    //var size = 'lg';
    params = data;
    callM = true;
    //console.log('callM',callM);
    break;
  default:

}
if (callM == true){   
  /* console.log ('['+template+']['+ctrl+']['+size+']['+params+']');   */
  $scope.isCargando = false; 
  modalFactory.open(template, ctrl, size, params).result.then(
    function (responseNote) {
    /*  console.log("modal::: ", responseNote)*/
      if (responseNote.is_edit) { }  
  });
}

else{
  //#PROMESA SEGUIMIENTO
  //console.log("promiseSeg::: ", promiseSeg)
  promiseSeg.then(function (result) {
      $scope.isCargando = false;
      console.log('Respuesta busqueda imagenes:::'+result.data.success);
      var data = {
        result: result
      };
      var params = data;
      //# Factory Modal 1
        modalFactory.open(template, ctrl, size, params).result.then(
          function (responseNote) {
            //console.log("modal::: ", responseNote)
            if (responseNote.is_edit) { }
        });
    },
    function (r) {
        $scope.err_msg = r;
        $scope.isError = 1;
        $scope.isCargando = false;
        $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
    }
  );
}
};


$scope.openModalSeguimientoEscalado = function(value, ID) {
  var data = {
  };

  $rootScope.ID = ID; 

  var ctrl = 'ModalInstanceCtrlSeguimiento';    
  var size = '';
  var callM = false;
  var params = data;
  
  switch (value) {
    //# 1 : MODAL SEGUIMIENTO
    case 1:
    var template = CONSTANTS.DIR_PATH + '/app/home/dashboard/view-seguimiento-modal.tpl.html'; 
    console.log ('template:::'+ template);
    var size = 'md';
    //var size = 'lg';
    //params = id;
    callM = true;
    break;

    case 2:
    var template = CONSTANTS.DIR_PATH + '../app/home/dashboard/modal-observacion_cci.tpl.html';
    var size = 'lg';
    //var size = 'lg';
    params = id;
    callM = true;
    break;

    default:

  }
  if (callM == true){   
    //////console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');   
    $scope.isCargando = false; 
    modalFactory.open(template, ctrl, size, params).result.then(
      function (responseNote) {
        ////console.log("modal::: ", responseNote)
        if (responseNote.is_edit) { }  
    });
  }
  else{
    //#PROMESA SEGUIMIENTO
    ////console.log("promiseSeg::: ", promiseSeg)
    promiseSeg.then(
      function (result) {
        $scope.isCargando = false;
        //////console.log('Respuesta busqueda imagenes:::'+result.data.success);
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              ////console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }
          });
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );
  }
};
     

$scope.OpenModalImagen = function(value, ID, Tipo, Imagen) {
  var data = {}; 
  
  $rootScope.ID = ID;
  $rootScope.Tipo = Tipo; 
  $rootScope.Imagen = Imagen;
  
  var ctrl = 'ContrllerImagen';    
  var size = ''; 
  var callM = false;
  //var params = [];  
  $scope.isCargando = false;
  
  // $rootScope.Tipo=Tipo;
  
  switch (value) {
    //# 1 : MODAL SEGUIMIENTO
    case 1:
    //  var promiseSeg = '';
      var template = CONSTANTS.DIR_PATH + '/app/home/dashboard/view-imagen-modal.tpl.html'; 
      var size = 'lg'; 
      //var size = 'lg';
      params = data;
      callM = true;
      //console.log('callM',callM);
      break;
    default:
  
  }
  if (callM == true){   
    /* console.log ('['+template+']['+ctrl+']['+size+']['+params+']');   */
    $scope.isCargando = false; 
    modalFactory.open(template, ctrl, size, params).result.then(
      function (responseNote) {
      /*  console.log("modal::: ", responseNote)*/
        if (responseNote.is_edit) { }  
    });
  }
  
  else{
    //#PROMESA SEGUIMIENTO
    //console.log("promiseSeg::: ", promiseSeg)
    promiseSeg.then(function (result) {
        $scope.isCargando = false;
        console.log('Respuesta busqueda imagenes:::'+result.data.success);
        var data = {
          result: result
        };
        var params = data;
        //# Factory Modal 1
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              //console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }
          });
      },
      function (r) {
          $scope.err_msg = r;
          $scope.isError = 1;
          $scope.isCargando = false;
          $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
      }
    );
  }
  };

   } 
   //}

])

.controller('FilterController', ['$rootScope', 'sharedProperties', 'General', '$timeout', '$scope', 'modalFactory',
  function($rootScope, sharedProperties, General, $timeout,$scope, modalFactory){

    $scope.datenew = {
      'month': sharedProperties.getStart().format('MM'),
      'year': sharedProperties.getStart().format('YYYY'),
    }

  }
])

.controller('DashboardUpController', ['$scope','$rootScope', '$state', 'General', '$timeout', '$uibModal', 'modalFactory','CONSTANTS', 'sharedProperties', 'tmhDynamicLocale',
	function($scope, $rootScope, $state, General, $timeout, $uibModal, modalFactory, CONSTANTS, sharedProperties, tmhDynamicLocale){
    $rootScope.satisLoad = false;

    $scope.PreguntasEvaluacion = [];  
    $scope.Reclamos = [];  
    $scope.Causas = [];  

    //$rootScope.Evaluacion = [];
    $rootScope.IdPregunta = 2;
    //$rootScope.fecha_desde_satis = sharedProperties.getStart().format('YYYYMMDD');
		// # Date Picker
    $scope.dt = new Date();
    $scope.dtt = new Date();
    tmhDynamicLocale.set('es');
		$scope.formats = ['MM-yyyy', 'yyyy/MM', 'MM.yyyy'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['M!/yyyy'];
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      minMode: 'month'
    };
  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
		};
		$scope.open2 = function() {
			$scope.popup2.opened = true;
		};
		$scope.setDate = function(year, month, day) {
			$scope.dt = new Date(year, month, day);
			$scope.dtt = new Date(year, month, day);
		};
		$scope.popup1 = {
			 opened: false
		 };
		$scope.changeHandler = function () {
				//$scope.dateForm.dt.$setValidity('$valid', $scope.dt.getTime() >= $scope.minDate.getTime());
			}		 
		$scope.popup2 = {
			 opened: false  
		 };
		$scope.changeHandler2 = function () {
				//$scope.dateForm.dtt.$setValidity('$valid', $scope.dtt.getTime() >= $scope.minDate.getTime());
			}		 
 		// # Date Picker
  
  
//********************DATOS PARA PIE***********************/

//$scope.colorStates = ["#dd4b39","#ff851b","#F3E381","#00a65a","#00a45a"];

$scope.colorStates = ['#b8436d', '#00d9f9', '#a4c73c', '#a4add3'];
//    Dashboard.getDashBoardObtieneGraficoIncidenciasAbiertas($rootScope.fecha_desde_satis).then(function(r){
$rootScope.satisGraficoLoadPie = false;
$scope.labelsPie = ['1', '2', '3', '4', '5'];
//$scope.series = ['Critico'];
$scope.dataPie = [
  [20, 3, 15, 10, 10],   
  //backgroundColor= ["#FF6384","#36A2EB","#FFCE56","#36A2EB","#FFCE56"]
  //[r.data.data[0].Q_ASIGNADO_ALTA, r.data.data[0].Q_EN_PROCESO_ALTA, r.data.data[0].Q_PENDIENTE_ALTA],
  //[r.data.data[0].Q_ASIGNADO_MEDIA, r.data.data[0].Q_EN_PROCESO_MEDIA, r.data.data[0].Q_PENDIENTE_MEDIA],
  //[r.data.data[0].Q_ASIGNADO_BAJA, r.data.data[0].Q_EN_PROCESO_BAJA, r.data.data[0].Q_PENDIENTE_BAJA],
];
//},
//function (error){
//$rootScope.satisGraficoLoad = false;
//});
$scope.optionsPie = {
  labels: [
    'Red',
    'Yellow',
    'Blue'
  ],
  pieHole: 0.5,
  pieSliceTextStyle: {
    color: 'black',
  },
  legend: 'none',  
  backgroundColor:['red','#004411'],
  colors:['red','#004411'],
  slices: {
    0: { color: 'yellow' },
    1: { color: 'transparent' }
  },
  legend: {   
      display: false,       
  },

  // Chart.js options can go here.
};    

//*******************************************/

//********************DATOS PARA DONUTS***********************/

$rootScope.optionsResultado = {
  min: 0,
  max: 100,
  size: 140,
  barCap: 9,
  barColor: '#0976A6',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 15,
  barWidth: 15,
  readOnly: true
};
$rootScope.optionsVerde = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#00a65a',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.optionsRojo = {
  min: 0,
  max: 100,
  size: 80,
  barCap: 9,
  barColor: '#FF0000',
  trackColor: '#dedede',
  unit: '%',
  trackWidth: 9,
  barWidth: 9,
  readOnly: true
};
$rootScope.satis = {
  "Q_TOTAL"          : 0,
  "Q_ATT"            : 0,  
  "POR_ATT"          : 0,
  "Q_ATT_PROVISION"  : 0,  
  "POR_ATT_PROVISION": 0,
  "Q_CLIENTE"        : 0,
  "POR_CLIENTE"      : 0,
  "Q_CLIENTE_PROVISION" : 0,
  "POR_CLIENTE_PROVISION" : 0,
  "Q_COMERCIAL"      : 0,
  "POR_COMERCIAL"    : 0,
  "Q_COMERCIAL_PROVISION_ATT" : 0,
  "POR_COMERCIAL_PROVISION_ATT" : 0,
  "Q_FUNCIONAMIENTO" : 0,
  "POR_FUNCIONAMIENTO" : 0,
}
      /*$rootScope.datasetOverrideChart = [{ yAxisID: 'y-axis-1' }];
      $rootScope.optionsChart = {
        tooltips:{
          enabled: true,
          callbacks: {
              label: function(tooltipItems, data) {

                if(tooltipItems.index == 0){
                  return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + '% | ' + $rootScope.seriesEditChart[tooltipItems.index];

                }else{
                  return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel+ '% ';

                }
              }
          }

        },
        scales: {
          xAxes: [{
              gridLines: {
                  display:false
              }
            }],
          yAxes: [{
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              gridLines: {
                  display:false
              },
              ticks: {
                    max: 100,
                    min: 80,
                    stepSize: 10
                },
              position: 'left'
          }]
        }
      };
      $rootScope.optionsChartDerivadas = {
        tooltips:{
          enabled: true,
          callbacks: {
              label: function(tooltipItems, data) {

                return data.datasets[tooltipItems.datasetIndex].label +": "+$rootScope.dataPerChartDerivadas[tooltipItems.index][tooltipItems.datasetIndex]+"% - Q: "+tooltipItems.yLabel;
              }
          }

        },
        scales: {
          xAxes: [{
              gridLines: {
                  display:false
              }
            }],
          yAxes: [{
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              gridLines: {
                  display:false
              },
              position: 'left'
          }]
        }
      };
      $rootScope.satis = {
        "Q_PORTABILIDA"        : 0,
        "Q_DENTRO_PLAZO"       : 0,
        "POR_DENTRO_PLAZO"     : 0,
        "POR_DENTRO_PLAZO_MES_ACTUAL" : 0,
        "Q_DENTRO_PLAZO_MES_ACTUAL" : 0,
        "Q_DERIVADAS_TOTAL"    : 0,
        "POR_DERIVADAS_TOTAL"  : 0,
        "Q_DERIVADAS_DEUDA"    : 0,
        "POR_DERIVADAS_DEUDA"   : 0,
        "Q_DERIVADAS_NO_TITULAR"  : 0,
        "POR_DERIVADAS_NO_TITULAR" : 0,
        "Q_DERIVADAS_SIN_FECHA"  : 0,
        "POR_DERIVADAS_SIN_FECHA"  : 0,

        "POR_DENTRO_PLAZO_CORPORACION"  : 0,
        "POR_DENTRO_PLAZO_EMPRESA"  : 0,
        "POR_DENTRO_PLAZO_MES_ANTERIOR"  : 0,
        "POR_DENTRO_PLAZO_PERSONA"  : 0,
        "Q_DENTRO_PLAZO_CORPORACION"  : 0,
        "Q_DENTRO_PLAZO_EMPRESA"  : 0,
        "Q_DENTRO_PLAZO_PERSONA"  : 0,
        "Q_FUERA_PLAZO"  : 0,
        "Q_FUERA_PLAZO_CORPORACION"  : 0,
        "Q_FUERA_PLAZO_EMPRESA"  : 0,
        "Q_FUERA_PLAZO_PERSONA"  : 0,
        "Q_PORTABILIDAD_CORPORACION"  : 0,
        "Q_PORTABILIDAD_EMPRESA"  : 0,
        "Q_PORTABILIDAD_PERSONA"  : 0,
        "Q_DENTRO_PLAZO_MES_ANTERIOR": 0,
        "Q_FUERA_PLAZO_MES_ANTERIOR": 0,
        "POR_SEMANA1"  : 0,
        "POR_SEMANA2"  : 0,
        "POR_SEMANA3"  : 0,
        "POR_SEMANA4"  : 0,
        "POR_DERIVADAS_EAG5"  : 0,
        "Q_SEMANA1"  : 0,
        "Q_SEMANA2"  : 0,
        "Q_SEMANA3"  : 0,
        "Q_SEMANA4"  : 0,
        "Q_DERIVADAS_EAG5"  : 0,
        "SEMANA1"  : "",
        "SEMANA2"  : "",
        "SEMANA3"  : "",
        "SEMANA4"  : "",
      }
      $rootScope.optionsPortaRojo = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#FF0000',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPortaAmarillo = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#FFFF00',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPortaVerde = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#5BC01E',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPorta = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#5BC01E',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPortaF = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#FF0000',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPortaEAG = {
        min: 0,
        max: 100,
        size: 120,
        barCap: 17,
        barColor: '#0976A6',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPorta_small_1 = {
        min: 0,
        max: 100,
        size: 80,
        barCap: 9,
        barColor: '#3CA2A6',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPorta_small_2 = {
        min: 0,
        max: 100,
        size: 80,
        barCap: 9,
        barColor: '#952345',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
      $rootScope.optionsPorta_small_3 = {
        min: 0,
        max: 100,
        size: 80,
        barCap: 9,
        barColor: '#D8712F',
        trackColor: '#dedede',
        unit: '%',
        trackWidth: 9,
        barWidth: 9,
        readOnly: true
      };
*/
//*******************************************/


      $rootScope.fecha_desde_satis = sharedProperties.getStart().format('YYYYMM');

      console.log($rootScope.fecha_desde_satis)

      General.ObtienePreguntasEvaluacion().then(function(r){
        $scope.PreguntasEvaluacion = r.data.data;
        //console.log($scope.PreguntasEvaluacion);
      },
      function (r){
        sweetAlert("Lo Siento!", "Existen problemas al recuperar información", "error");
      });

      General.ObtieneReclamos().then(function(r){
        $scope.Reclamos = r.data.data;
        //console.log($scope.Reclamos);
      },
      function (error){
      });      

      $rootScope.ActualizaCausa = function(reclamo, index){

        console.log(reclamo);
        console.log(index);

        General.ObtieneCausaReclamos(reclamo).then(function(r){
          $scope.Causas[index] = r.data.data;
          console.log($scope.Causas[index]);
        },
        function (error){
        });

      }


      $rootScope.Actualiza = function(){
        $rootScope.satisLoad = true;
        $rootScope.fecha_desde_satis = moment($scope.dt).format('YYYYMM')

        General.ObtieneEvaluacionUp($rootScope.fecha_desde_satis, $rootScope.IdPregunta).then(function(r){
          $rootScope.Evaluacion = r.data.data;
          //console.log($rootScope.Evaluacion);
          $rootScope.satisLoad = false;
          if($rootScope.Evaluacion==undefined){
            $rootScope.Evaluacion = [];
            sweetAlert("Lo Siento =(!", "No se encontraron registros con los parámetros ingresados [Evaluación]", "warning");  
          }
        },
        function (error){
          $rootScope.satisLoad = false;
          sweetAlert("Lo Siento!", "No existen datos para la consulta!:"+r.data.mensaje, "error");
        });

        General.ObtieneDashboardEvaluacion($rootScope.fecha_desde_satis, $rootScope.IdPregunta).then(function(r){
          console.log(r.data);
          if(r.data.success==true){
          var _data = r.data.data[0];
          console.log(_data);
          $timeout(function(){
            $rootScope.satisLoad = false;
            $rootScope.satis = {
              "Q_TOTAL"          : _data.Q_TOTAL,
              "Q_ATT"            : _data.Q_ATT,  
              "POR_ATT"          : _data.POR_ATT,
              "Q_ATT_PROVISION"  : _data.Q_ATT_PROVISION,  
              "POR_ATT_PROVISION": _data.POR_ATT_PROVISION,
              "Q_CLIENTE"        : _data.Q_CLIENTE,
              "POR_CLIENTE"      : _data.POR_CLIENTE,
              "Q_CLIENTE_PROVISION" : _data.Q_CLIENTE_PROVISION,
              "POR_CLIENTE_PROVISION" : _data.POR_CLIENTE_PROVISION,
              "Q_COMERCIAL"      : _data.Q_COMERCIAL,
              "POR_COMERCIAL"    : _data.POR_COMERCIAL,
              "Q_COMERCIAL_PROVISION_ATT" : _data.Q_COMERCIAL_PROVISION_ATT,
              "POR_COMERCIAL_PROVISION_ATT" : _data.POR_COMERCIAL_PROVISION_ATT,
              "Q_FUNCIONAMIENTO" : _data.Q_FUNCIONAMIENTO,
              "POR_FUNCIONAMIENTO" : _data.POR_FUNCIONAMIENTO,
            }
            console.log($rootScope.satis);
            console.log($rootScope.satis['Q_TOTAL']);
          }, 1000);
        }
        else
        { 
          //sweetAlert("Lo Siento =(!", "No se encontraron datos con el filtro seleccionado [Dashboard]", "warning");
          $rootScope.satis = {
            "Q_TOTAL"          : 0,
            "Q_ATT"            : 0,  
            "POR_ATT"          : 0,
            "Q_ATT_PROVISION"  : 0,  
            "POR_ATT_PROVISION": 0,
            "Q_CLIENTE"        : 0,
            "POR_CLIENTE"      : 0,
            "Q_CLIENTE_PROVISION" : 0,
            "POR_CLIENTE_PROVISION" : 0,
            "Q_COMERCIAL"      : 0,
            "POR_COMERCIAL"    : 0,
            "Q_COMERCIAL_PROVISION_ATT" : 0,
            "POR_COMERCIAL_PROVISION_ATT" : 0,
            "Q_FUNCIONAMIENTO" : 0,
            "POR_FUNCIONAMIENTO" : 0,
          }
          $rootScope.satisLoad = false;
        }
        },
        function (error){
          $rootScope.satis = {
            "Q_TOTAL"          : 0,
            "Q_ATT"            : 0,  
            "POR_ATT"          : 0,
            "Q_ATT_PROVISION"  : 0,  
            "POR_ATT_PROVISION": 0,
            "Q_CLIENTE"        : 0,
            "POR_CLIENTE"      : 0,
            "Q_CLIENTE_PROVISION" : 0,
            "POR_CLIENTE_PROVISION" : 0,
            "Q_COMERCIAL"      : 0,
            "POR_COMERCIAL"    : 0,
            "Q_COMERCIAL_PROVISION_ATT" : 0,
            "POR_COMERCIAL_PROVISION_ATT" : 0,
            "Q_FUNCIONAMIENTO" : 0,
            "POR_FUNCIONAMIENTO" : 0,
          }
          $rootScope.satisLoad = false;
        });
          

      }

      $rootScope.Actualiza();


      $scope.Guardar = function (data, reclamo, causa) {
        $rootScope.CargandoGral = true;    
          //Genera data para envio a formulario de ingreso de resultado
          $scope.dataResultado = {
            NumeroOXT : data.NUMERO_OXT,
            FechaEncuesta : data.Fecha_encuesta,   //moment($scope.dt).format('YYYYMMDD'),
            Nota : data.NOTA,
            DetalleReclamo : data.RECLAMO_CLIENTE,
            ClienteReclama : reclamo,
            Causa : causa,
          };   
          
          console.log($scope.dataResultado);
                    
            General.grabaResultado($scope.dataResultado).then(  
            function(result){
              console.log('Resultado generación resultado:::['+result.data.success+']['+result.data.mensaje+']');
                  if(result.data.success == true){
                      //sweetAlert("Buena elección!", "Se ha generado la reserva con código: "+TicketReserva, "success");
                      //************************************************************ 

                      //Mensaje de ingreso existoso
                      swal({
                        title: "Excelente!",
                        text: "Se ha generado el resultado",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#A5DC86",
                        //confirmButtonText: "Aceptar",
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "No por ahora",
                        closeOnConfirm: true,
                        closeOnCancel: true  
                      },
                      function(isConfirm){  
                          if (isConfirm) {
                              $rootScope.CargandoGral = false;
                              $scope.Causas = [];
                              $rootScope.Actualiza();
                              //$state.go('home.ingreso');  
                            //swal("Deleted!", "Your imaginary file has been deleted.", "success");
                          } else {
                            $rootScope.CargandoGral = false;
                            //swal("Cancelled", "Your imaginary file is safe :)", "error");
                          }
                      });   

      
                  }else{
                    sweetAlert("Lo Siento =(!", "Error en generación de gasto:"+result.data.mensaje, "warning");
                    $rootScope.CargandoGral = false;
                  }
            },
            function(r){ 
              $rootScope.CargandoGral = false;
              sweetAlert("Lo Siento =(!", "Error en generación de gasto:"+r.data.mensaje, "error");
            }
            )



      };
      
      $scope.openModalFei = function(value, id) {
        var data = {  
        };
        var ctrl = 'viewDetalleFEICtrl';
        var size = '';
        var callM = false;
        var params = [];
        $scope.isCargando = true;
        //console.log ('Paso por aca, value: '+ value);
        //console.log ('Paso por aca dmnbsdasdjasgjgjg, id : '+ id);
        switch (value) {
          //# 1 : MODAL SEGUIMIENTO
          case 1:
            var template = CONSTANTS.DIR_PATH + '../app/home/dashboard/modal-fei.tpl.html';
            var size = 'lg';
            //var size = 'lg';
            params = id;
            callM = true;
            break;
          default:
  
        }
        if (callM == true){   
          ////console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');   
          $scope.isCargando = false; 
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              //console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }  
          });
        }
        else{
          //#PROMESA SEGUIMIENTO
          //console.log("promiseSeg::: ", promiseSeg)
          promiseSeg.then(
            function (result) {
              $scope.isCargando = false;
              ////console.log('Respuesta busqueda imagenes:::'+result.data.success);
              var data = {
                result: result
              };
              var params = data;
              //# Factory Modal 1
                modalFactory.open(template, ctrl, size, params).result.then(
                  function (responseNote) {
                    //console.log("modal::: ", responseNote)
                    if (responseNote.is_edit) { }
                });
            },
            function (r) {
                $scope.err_msg = r;
                $scope.isError = 1;
                $scope.isCargando = false;
                $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
            }
          );
        }
      };

      $scope.openModalObservacion = function(value, id) {
        var data = {
        };
        var ctrl = 'viewDetalleObservacionCtrl';
        var size = '';
        var callM = false;
        var params = data;
        //console.log ('Paso por aca, value: '+ value);
        //console.log ('Paso por aca dmnbsdasdjasgjgjg, id : '+ id);
        switch (value) {
          //# 1 : MODAL SEGUIMIENTO
          case 1:
          var template = CONSTANTS.DIR_PATH + '../app/home/dashboard/modal-observacion.tpl.html';
          var size = 'lg';
          //var size = 'lg';
          params = id;
          callM = true;
          break;
          default:
  
        }
        if (callM == true){   
          ////console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');   
          $scope.isCargando = false; 
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              //console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }  
          });
        }
        else{
          //#PROMESA SEGUIMIENTO
          //console.log("promiseSeg::: ", promiseSeg)
          promiseSeg.then(
            function (result) {
              $scope.isCargando = false;
              ////console.log('Respuesta busqueda imagenes:::'+result.data.success);
              var data = {
                result: result
              };
              var params = data;
              //# Factory Modal 1
                modalFactory.open(template, ctrl, size, params).result.then(
                  function (responseNote) {
                    //console.log("modal::: ", responseNote)
                    if (responseNote.is_edit) { }
                });
            },
            function (r) {
                $scope.err_msg = r;
                $scope.isError = 1;
                $scope.isCargando = false;
                $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
            }
          );
        }
      };

      $scope.openModalReclamo = function(value, id) {
        var data = {
        };
        var ctrl = 'viewDetalleReclamoCtrl';
        var size = '';
        var callM = false;
        var params = data;
        //console.log ('Paso por aca, value: '+ value);
        //console.log ('Paso por aca dmnbsdasdjasgjgjg, id : '+ id);
        switch (value) {
          //# 1 : MODAL SEGUIMIENTO
          case 1:
          var template = CONSTANTS.DIR_PATH + '../app/home/dashboard/modal-reclamo.tpl.html';
          var size = 'lg';
          //var size = 'lg';
          params = id;
          callM = true;
          break;
          default:
  
        }
        if (callM == true){   
          ////console.log ('['+template+']['+ctrl+']['+size+']['+params+']['+promiseSeg+']');   
          $scope.isCargando = false; 
          modalFactory.open(template, ctrl, size, params).result.then(
            function (responseNote) {
              //console.log("modal::: ", responseNote)
              if (responseNote.is_edit) { }  
          });
        }
        else{
          //#PROMESA SEGUIMIENTO
          //console.log("promiseSeg::: ", promiseSeg)
          promiseSeg.then(
            function (result) {
              $scope.isCargando = false;
              ////console.log('Respuesta busqueda imagenes:::'+result.data.success);
              var data = {
                result: result
              };
              var params = data;
              //# Factory Modal 1
                modalFactory.open(template, ctrl, size, params).result.then(
                  function (responseNote) {
                    //console.log("modal::: ", responseNote)
                    if (responseNote.is_edit) { }
                });
            },
            function (r) {
                $scope.err_msg = r;
                $scope.isError = 1;
                $scope.isCargando = false;
                $rootScope.alerts.push({type: 'alert-danger', msg: CONSTANTS.ERROR_CONEXION});
            }
          );
        }
      };      

     /* General.ObtieneResumenGrafico($rootScope.fecha_desde_satis,"CONSOLIDADO").then(function(r){
        $rootScope.satisGraficoLoad = false;
        $rootScope.graficoMensualSatisfaccion = r.data.data;
        console.log($rootScope.graficoMensualSatisfaccion);

        var porta = [], strLabel = [], meta = [];

        angular.forEach(r.data.dataResumen, function(value, key) {
          porta.push(value['POR_DENTRO_PLAZO']);
          meta.push(value['META']);
          $rootScope.seriesEditChart[key] = value['Q_DENTRO_PLAZO']+ ' de ' +value['Q_TOTAL'];
          $rootScope.labelsChart[key] = value['FECHA'];
        });
        $rootScope.dataChart.push(porta);
        $rootScope.dataChart.push(meta);


        var derDeuda = [], derNoTitular = [], derSinFecha = [], derTotal = [];
        var derEBCOM = [], derATT = [], der3Play= [];
        var perEBCOM = [], perATT = [], per3Play= [];




        angular.forEach(r.data.dataResumenDerivaciones, function(value, key) {

          $rootScope.labelsChartDerivadas[key] = value['FECHA'];
          derEBCOM.push(value['Q_EBCOM']);
          derATT.push(value['Q_ATT']);
          perEBCOM.push(value['POR_EBCOM']);
          perATT.push(value['POR_ATT']);
          $rootScope.dataPerChartDerivadas[key] = [];

          $rootScope.dataPerChartDerivadas[key][0] = value['POR_EBCOM'];
          $rootScope.dataPerChartDerivadas[key][1] = value['POR_ATT'];


        });


        $rootScope.dataChartDerivadas.push(derEBCOM);
        $rootScope.dataChartDerivadas.push(derATT);


      },
      function (error){
        $rootScope.satisGraficoLoad = false;
      });*/

      
  }
])

.controller('construccionController', ['$scope', '$timeout','$window','$rootScope','$state', '$stateParams', 'CONSTANTS', 
  function($scope, $timeout, $window, $rootScope, $state, $stateParams, CONSTANTS ){


  }
])

 //------------------------------------------------------- 

/**
 * Modal Share Information
 */
angular.module('view-share-modal', [])

.controller('viewShareModalInstanceCtrl', ['$scope', '$uibModalInstance', 'params', 'General',
	function ($scope, $uibModalInstance, params, General) {
  	$scope.paciente = params;

		var s_indica = document.getElementById("satisIndica");
		var s_share_img = document.getElementById("satisShareImg");
		console.log(s_share_img);
		html2canvas(s_indica).then(function(canvas) {
			var data = canvas.toDataURL();
			$scope.srcImg = data;
		});

		$scope.save = function () {

			General.guardaCompartir($scope.srcImg).then(function(r){
				console.log("Respuesta ::", r)

			},
			function (error){

			});
		};

		$scope.cancel = function () {
			$uibModalInstance.dismiss();
		};
	}
]);


 //------------------------------------------------------- 

/**
 * @author Roddy Vitali Astorga <roddicks@gmail.cl>
 */
angular.module('login', [
])

.config(['$stateProvider', 'CONSTANTS',

	function ($stateProvider, CONSTANTS) {
		$stateProvider
			.state('login', {
				url:'/login',
                templateUrl: '../app/login/login.tpl.html',
				//templateUrl: 'http://localhost/DashboardCCi/app/login/login.tpl.html',
				controller: 'LoginController'
			})
	}

])

.controller('LoginController', ['$scope', '$state', 'AuthService', 'CONSTANTS',
	function($scope, $state, AuthService, CONSTANTS){
	    $scope.err_msg = "";
	    $scope.isError = 0;
        $scope.isCargando = false;
		//setting user email and password in the template
		$scope.user = {
		    run: '',
		    password: ''
		};  

		$scope.login = function (user) {
		    $scope.isCargando = true;

			if(user.run=='' ||user.run==null ||user.run==undefined){  
				user.run= '0';
				user.password= '0'; 
			 }
 
            var promise = AuthService.login(user);
            promise.then(
        		function (result) {
					$scope.isCargando = false;   
					//console.log(result);
				  if(result.CdSalida =="0")
					  {
						  $state.go('home.dashboard');
					  }
				  else{
					  $scope.isError = 1;
					  $scope.err_msg = result.mensaje;
					  //AuthService.logout();    
					  }
        		},
                function (r) {
					//console.log(r.mensaje)
					$scope.err_msg = r.mensaje;
                    $scope.isError = 1;
                    $scope.isCargando = false;
                }
        	);

        }

		$scope.onBlurRun = function(){  
			/*
			try{
				var Usuario = $scope.user.run;
				console.log("Usuario : :"+Usuario)
				$scope.user.run = Usuario.replace(/\./g,'');
			}catch(e){
				console.log("without >>.<<",e)
			}
			*/

			$scope.user.run = parseInt($scope.user.run)

		}




	}
]);
