angular
.module('myApp')
.directive('EmpleadoDetail', EmpleadoDetail);

function empleadoDetail(){
	return{
		scope{},
		controler: function(DataService,$routeParams){
			//var that = this;
			this.empleado={};
			
			DataService.getEmpleado($routeParams.id)
			.then((data) =>{
				this.empleado = data;
			})
		},
		controlerAs: 'vm',
		
		template: [
		'<h2>{{vm.empleado.fullName}}</h2>' , '<img ng=src="{{ vm.empleado.pic }}" width="150" alt="">',
		'<ul>',
			'<li>Puesto: {{ vm.empleado.title}}</li>',
			'<li>Departamento: {{ vm.empleado.department}}</li>',
			'<li>Teléfono: {{ vm.empleado.cellPhone}}</li>',
			'<li>Email: <a ng-href="mailto:{{ vm.empleado.email}}">{{ vm.empleado.email}}</a></li>',
			'<li><strong>{{ vm.empleado.twitterId}}</strong></li>',
			'</ul>'
		].join(''),
	}
}
