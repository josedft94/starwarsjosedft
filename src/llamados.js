$(document).ready(function () {
    $.ajax({
        url: "https://swapi.co/api/people/",
        dataType: "json",
        success: function (data) {
            $("#personajes").empty();
            personajes = data.results;
            for (var i = 0; i < personajes.length; i++) {
                $("#personajes").append("<li>" + personajes[i].name + "</li>")
            }
        },
        error: function (err) {
            alert(err);
        }
    });
 
    $(".page1").on("click", function () {
        $.ajax({
            type:"GET",
            url: "https://swapi.co/api/people/?page=1",
            dataType: "json",
            success: function (data) {
                $("#personajes").empty();
                personajes = data.results;
                for (var i = 0; i < personajes.length; i++) {
                    $("#personajes").append("<li>" + personajes[i].name + "</li>")
                }
            },
            error: function (err) {
                alert(err);
            }
 
        });
    });
 
    $(".page2").on("click", function () {
        $.ajax({
            type:"GET",
            url: "https://swapi.co/api/people/?page=2",
            dataType: "json",
            success: function (data) {
                $("#personajes").empty();
                personajes = data.results;
                for (var i = 0; i < personajes.length; i++) {
                    $("#personajes").append("<li>" + personajes[i].name + "</li>")
                }
            },
            error: function (err) {
                alert(err);
            }
 
        });
    });
 
    $(".page3").on("click", function () {
        $.ajax({
            type:"GET",
            url: "https://swapi.co/api/people/?page=3",
            dataType: "json",
            success: function (data) {
                $("#personajes").empty();
                personajes = data.results;
                for (var i = 0; i < personajes.length; i++) {
                    $("#personajes").append("<li>" + personajes[i].name + "</li>")
                }
            },
            error: function (err) {
                alert(err);
            }
 
        });
    });
 });