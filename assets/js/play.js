d3.csv("data.csv").then(function (data) {
    var heros = data;
    var button = d3.select('#button');
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);


    // Defining the function
function runEnter() {
        // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select('tbody').html("") 
        // This code is needed to prevent the page from reloading
        d3.event.preventDefault(); 
        // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variablevar 
        inputValue = d3.select("#user-input").property("value");
        
        // This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
        
        var filteredCODENAME = 
        heros.filter(sheros => sheros.CODENAME.includes(inputValue));
        // This was the easiest approach I found to sort the results by a different column in descending order. I had to include a new script in my head to use the _.sortBy This is the script:  
        console.log(filteredCODENAME)
        var output = filteredCODENAME

        
        // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
        for (var i = 0; i < filteredCODENAME.length; i++) 
        {
            d3.select("tbody").insert("tr").html(
            "<td>" + [i+1] + "</td>" +
            "<td>" + (output[i]['CODENAME'])+"</a>"+"</td>" + 
            "<td>" + (output[i]['GENDER'])+"</td>" +
            "<td>" + (output[i]['BIRTHPLACE'])+"</td>" +
            "<td>" + (output[i]['EXPERIENCE'])+"</td>" +
            "<td>" + (output[i]['RELATIONSHIP STATUS'])+"</td>") }
            };
});