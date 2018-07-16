var pharmApp=angular.module('pharmApp',[]);

  pharmApp.controller('PharmaCtrl',function($scope){
  	$scope.medicaments=[{nom: 'Effralgant', prix:1800}];

 

  $scope.medicaments=[{nom: 'Paracetamole', prix:100},
                     {nom: 'Actifet', prix:1680},
                     {nom: 'Litacol', prix:250},
                     {nom: 'Doliprane', prix:1240}];
   
$scope.addmedic=function(medic){
	$scope.medicaments.push(medic);
	$scope.added=true;
	$scope.nomMedic = "";
	$scope;prixMedic = null;
}

});
pharmApp.filter('prixEnCfa',function(numberFilter){
	return function(prixBrut){
		var prixEntier=numberFilter(prixBrut,0);
		var prixEnFr=prixEntier.replace(/,/g," ");
		return prixEnFr+"F CFA";
	}
});