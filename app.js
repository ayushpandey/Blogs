/**
 * Created by Ayush Pandey on 6/23/2016.
 */
var app=angular.module("app",[]);



app.controller('userController',function($scope)
{
    $scope.newuser={name:'',email:'',age:'',dob:''};


    $scope.createuser =function()
    {
        var birthday = $scope.newuser.dob;
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age= Math.abs(ageDate.getUTCFullYear() - 1970);

        $scope.newuser.age=age;
        sessionStorage.setItem('name',$scope.newuser.name);
        sessionStorage.setItem('email',$scope.newuser.email);
        sessionStorage.setItem('age',$scope.newuser.age);
        sessionStorage.setItem('dob',$scope.newuser.dob);

        $scope.name=sessionStorage.getItem('name');
        $scope.email=sessionStorage.getItem('email');
        $scope.dob=sessionStorage.getItem('dob');

    };
    $scope.calculateAge = function calculateAge() {
        var birthday = $scope.newuser.dob;
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age= Math.abs(ageDate.getUTCFullYear() - 1970);
        $scope.ages=age;
    };



    





});


app.controller('postctrl',function($scope)
{
        var n=sessionStorage.getItem('name');
        $scope.name=n;


        $scope.posts=[];
        $scope.newPost={created_By:'',title:'',description:'' ,created_at:''};



        $scope.post= function()
        {
            $scope.newPost.created_at=Date.now();
            $scope.posts.push($scope.newPost);
            $scope.newPost={created_By:' ',title:"",description:'' ,created_at:''}
        };

    $scope.newField = {};
    $scope.editing = false;

    $scope.edit = function(field) {
        $scope.editing = $scope.posts.indexOf(field);
        $scope.newField = angular.copy(field);
    }

    $scope.saveField = function(index) {
        if ($scope.editing !== false) {
            $scope.posts[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }
    };

    $scope.cancel = function(index) {
        if ($scope.editing !== false) {
            $scope.posts[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }
    };



});
