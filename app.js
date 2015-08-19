var app = angular.module('twitterApp', []);

app.controller("MyController", function($scope, NounService, ThingService, RandomNumberService){

    $scope.noun = NounService.noun;
    $scope.thing = ThingService.thing;
    $scope.twitterHandleList = [];
    $scope.list = [];


    for(var iterator = 0; iterator < 10; iterator++) {
        var randomNounIndex = RandomNumberService.randomNumber(0, NounService.nouns.length - 1);
        var randomThingIndex = RandomNumberService.randomNumber(0, ThingService.things.length - 1);
        var fullWord = NounService.noun(randomNounIndex) + 's' + ThingService.thing(randomThingIndex);
        $scope.twitterHandleList.push(fullWord);
    };

    $scope.number = 10;
    $scope.getNumber = function(num) {
        return new Array(num);
    }
});

app.factory("RandomNumberService", function(){
    ////private
    //var randomNumber = function(min, max){
    //    return Math.floor(Math.random() * (1 + max - min) + min);
    //};
    //public
    var publicApi = {
        //randomNumber: randomNumber()
        randomNumber: function(min, max){
            var myReturn = Math.floor(Math.random() * (1 + max - min) + min);
            console.log(myReturn);
            return myReturn;
        }
    };
    return publicApi;
});

app.factory("NounService", ["RandomNumberService", function(RandomNumberService){
    //private
    var nouns = ["Harry", "Ron", "Harmione", "Snape", "Dumbledore", "Hagrid", "HeWhoShallNotBeNamed", "McGonagall", "Bellatrix", "Sirius", "Luna", "LongBottom"];

    var randomNoun = function(index){
        //var nouns = ["Harry", "Ron", "Harmione", "Snape", "Dumbledore", "Hagrid", "HeWhoShallNotBeNamed", "McGonagall", "Bellatrix", "Sirius", "Luna", "LongBottom"];
        return nouns[index];
    };
    //public
    var publicApi = {
        noun: function(index){
            return randomNoun(index);
        },
        nouns: nouns
    };
    return publicApi;
}]);

app.factory("ThingService", ["RandomNumberService", function(RandomNumberService){
    //private
    var things = ["Wand", "Broom", "Snitch", "Owl", "Scarf", "Marauder'sMap", "LovePotion", "PolyjuicePotion", "Patronus", "Cauldron", "Platform9-3/4", "ButterBeer", "Horcrux", "Goblin", "Pheonix", "ChamberOfSecrets", "Nagini", "HouseElf", "EveryFlavorBeans", "DarkMark"];
    var randomThing = function(index){
        //var things = ["Wand", "Broom", "Snitch", "Owl", "Scarf", "Marauder'sMap", "LovePotion", "PolyjuicePotion", "Patronus", "Cauldron", "Platform9-3/4", "ButterBeer", "Horcrux", "Goblin", "Pheonix", "ChamberOfSecrets", "Nagini", "HouseElf", "EveryFlavorBeans", "DarkMark"];
        return things[index];
    };
    //public
    var publicApi = {
        thing: function(index) {
            return randomThing(index);
        },
        things: things
    };
    return publicApi;
}]);


