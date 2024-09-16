var queryURL

var name = ["Butter Pecan", "Fat Free Chocolate", "French Chocolate", "French Vanilla", "Light Vanilla", "Mint Chocolate Chip", "No Sugar Chocolate Caramel", "Vanilla Fudge"]

var getQueryUrl = function() {
if (flavor === "Butter Pecan") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19880&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "Fat Free Chocolate") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19894&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "French Chocolate") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19880&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "French Vanilla") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19881&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "Light Vanilla") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19875&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "Mint Chocolate Chip") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19879&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "No Sugar Chocolate Caramel") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19895&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
} else if (flavor === "Vanilla Fudge") {
    var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=19883&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"
}
}


// Here we run our AJAX call to the API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Transfer content to object 
    var info = {
        water: "Water: " + response.report.food.nutrients[0].value + response.report.food.nutrients[0].unit,
        energy: "Energy: " + response.report.food.nutrients[1].value + response.report.food.nutrients[1].unit,
        protein: "Protein: " + response.report.food.nutrients[2].value + response.report.food.nutrients[2].unit,
        fat: "Fat: " + response.report.food.nutrients[3].value + response.report.food.nutrients[3].unit,
        carb: "Carbohydrate: " + response.report.food.nutrients[4].value + response.report.food.nutrients[4].unit,
        fiber: "Fiber: " + response.report.food.nutrients[5].value + response.report.food.nutrients[5].unit,
        sugar: "Sugar: " + response.report.food.nutrients[6].value + response.report.food.nutrients[6].unit,
        calcium: "Calcium: " + response.report.food.nutrients[7].value + response.report.food.nutrients[7].unit,
        iron: "Iron: " + response.report.food.nutrients[8].value + response.report.food.nutrients[8].unit,
        sodium: "Sodium: " + response.report.food.nutrients[9].value + response.report.food.nutrients[9].unit,
        vitaminC: "Vitamin C: " + response.report.food.nutrients[10].value + response.report.food.nutrients[10].unit,
        vitaminA: "Vitamin A: " + response.report.food.nutrients[11].value + response.report.food.nutrients[11].unit,
        fattyAcid: "Fatty Acid: " + response.report.food.nutrients[12].value + response.report.food.nutrients[12].unit,
        cholesterol: "Cholesterol: " + response.report.food.nutrients[13].value + response.report.food.nutrients[13].unit,
    }

    console.log(info);

});

$( document ).ready(function() {
    console.log("ready!")
});