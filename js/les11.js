var app=angular.module("SampleApp",[]);
//Task2
app.controller("SampleAppCtrl", function ($scope) {
    $scope.items = { name: "Ivan", age: "18", city:"Kiev"};
});
//Task3,4
app.controller("tabCtrl", function ($scope) {
    $scope.list = [{ name: "Иван", age: "18"},
        { name: "Сергей", age: "27"},
        { name: "Олег", age: "38"},
        { name: "Павел", age: "49"}];
});
//Task5
app.controller("skLang",function ($scope) {
    $scope.skills=['driver license', 'punctuality', 'modesty'];
    $scope.languages=[{lang:"english",level:"low"},
        {lang:"deutsch",level:"low"},
        {lang:"russian",level:"middle"}];

    $scope.showSkills = function () {
        $scope.url = "skills.html";
    };

    $scope.showLang = function () {
        $scope.url = "lang.html";
    };
});
//Task6
app.controller("forTask5Ctrl",function ($scope) {
    $scope.showFirstDiv=false;
    $scope.showSecDiv=false;
    $scope.showThirdDiv=true;
    $scope.clickedFirst=function(){
        $scope.showFirstDiv=true;
    };
    $scope.clickedSec=function(){
        $scope.showSecDiv=true;
    };
    $scope.clickedThird=function(){
        $scope.showThirdDiv=false;
    };
});