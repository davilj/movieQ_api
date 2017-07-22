'use strict';
const p2016={"p16_3517": "Me Before You", "p16_11115": "sausage", "p16_21429": "Ice Age 5", "p16_15683": "Bridget Jones's Baby", "p16_27571": "Term Life", "p16_7243": "Midnight Special", "p16_10183": "I Saw The Light", "p16_27367": "The Little Prince", "p16_15204": "Suicide Squad", "p16_14929": "Moana", "p16_18850": "Angry Birds", "p16_10150": "Rams", "p16_27209": "Demolition", "p16_18242": "Sing Street", "p16_11859": "The Shallows", "p16_11607": "Neighbors 2", "p16_23641": "The Invitation", "p16_25412": "Jason Bourne", "p16_3749": "Hello My Name Is Doris", "p16_2911": "Zootopia", "p16_6712": "Hardcore Henry", "p16_27055": "Loving", "p16_18928": "The Founder", "p16_31117": "X Men Apocalypse", "p16_21989": "Free State Of Jones", "p16_8993": "Florence Foster Jenkins", "p16_30402": "The First Monday In May", "p16_3200": "Finding Dory", "p16_9291": "The Nice Guys", "p16_23020": "Compadres", "p16_1537": "Gods Of Egypt", "p16_8858": "Now You See Me 2", "p16_29860": "Popstar Never Stop Never Stopping", "p16_15167": "la la land ver3", "p16_458": "Kicks", "p16_20098": "Barbershop 3", "p16_20816": "Batman vs Superman", "p16_22800": "Ben Hur 2016", "p16_7794": "Knight Of Cups", "p16_18379": "Doctor Strange 2016", "p16_28854": "Mother's Day", "p16_22750": "Alice In Wonderland 2", "p16_13425": "Cartels", "p16_25394": "Kubo And The Two Strings", "p16_14575": "Eye In The Sky", "p16_11057": "Miles Ahead", "p16_1730": "Crouching Tiger Hidden Dragon 2", "p16_16982": "Assassin's Creed", "p16_11743": "A Beautiful Planet", "p16_27309": "Keeping Up With The Joneses", "p16_31225": "Zoolander 2", "p16_19706": "Magnificent 7 2016", "p16_30866": "SING", "p16_23630": "The Other Side Of The Door", "p16_16465": "The Huntsman", "p16_14102": "10 Cloverfield Lane", "p16_22742": "Christ The Lord", "p16_1445": "Papa Hemingway In Cuba", "p16_6174": "The Choice", "p16_11169": "Rio I Love You Poster", "p16_4578": "Colonia", "p16_21084": "Regression", "p16_28300": "The BFG", "p16_6422": "Almost Christmas", "p16_11539": "The Girl On The Train", "p16_11437": "City Of Gold", "p16_5799": "Catfight 2016", "p16_10927": "How To Be Single", "p16_9575": "Miss Peregrine's Home For Peculiar Children", "p16_1101": "Man Down", "p16_1456": "Nine Lives", "p16_28384": "Captain America 3", "p16_15744": "Inferno", "p16_3041": "London Has Fallen", "p16_16311": "Our Last Tango Poster", "p16_23594": "Grimsby", "p16_7610": "Lights Out", "p16_21467": "Silence Martin Scorsese", "p16_1967": "Captain Fantastic", "p16_7453": "Snowden", "p16_2523": "The Secret Life Of Pets", "p16_21188": "Ouija 2", "p16_7518": "Everybody Wants Some", "p16_6021": "Bad Moms", "p16_22084": "Money Monster", "p16_1440": "The Witch 2016", "p16_7515": "Rogue One Trailer", "p16_22471": "Absolutely Fabulous The Movie", "p16_31571": "Triple 9", "p16_9276": "Warcraft", "p16_18890": "Trolls", "p16_21072": "The Fast And The Furious", "p16_18321": "When The Bough Breaks", "p16_24563": "Edge Of Seventeen 2016", "p16_8312": "Billy Lynn's Long Halftime Walk", "p16_10542": "Race", "p16_28473": "Whiskey Tango Foxtrot", "p16_4295": "Green Room", "p16_15317": "Risen", "p16_29578": "light between oceans", "p16_11144": "My Big Fat Greek Wedding 2", "p16_25854": "A Monster Calls", "p16_15965": "Keanu", "p16_19453": "Ghostbusters 2016", "p16_26126": "Bleed For This", "p16_7729": "Equals", "p16_6336": "Allegiant", "p16_18880": "iIndependence Day 2", "p16_19591": "Tarzan 2016", "p16_19610": "Fantastic Beasts And Where To Find Them", "p16_7938": "Live By Night", "p16_23464": "Family Fang", "p16_13977": "Accountant", "p16_14030": "Pete's Dragon", "p16_8014": "Deadpool", "p16_17944": "The Purge 3", "p16_6747": "Birth Of A Nation 2016", "p16_11388": "The Boss", "p16_6648": "Eddie The Eagle", "p16_5198": "Kevin Hart What Now", "p16_31513": "Disappointments Room", "p16_3087": "Teenage Mutant Ninja Turtles 2", "p16_10476": "Star Trek Beyond Trailer", "p16_4219": "Deepwater Horizon", "p16_4078": "Wedding Doll", "p16_18305": "Storks", "p16_30292": "Marguerite", "p16_12287": "Patriot's Day", "p16_4192": "Puerto Ricans In Paris", "p16_5610": "Snowtime", "p16_13152": "Already Tomorrow In Hong Kong", "p16_12308": "Conjuring 2", "p16_28971": "God's Not Dead 2", "p16_12783": "Disney's The Jungle Book 2016", "p16_5916": "The Bronze", "p16_9880": "Central Intelligence", "p16_1419": "Cell", "p16_4454": "Pee Wee's Big Holiday", "p16_18556": "A Weekend With The Family", "p16_16059": "Kill Your Friends", "p16_10001": "Mike And Dave Need Wedding Dates", "p16_8034": "Criminal", "p16_7039": "Mr Right", "p16_10522": "Ratchet And Clank", "p16_23954": "War Dogs", "p16_3984": "moonlight ver2", "p16_17697": "Wiener Dog", "p16_6722": "Max Steel", "p16_26353": "Get A Job", "p16_28501": "Elvis And Nixon"};

const sc_p16={"p16_3517": 0, "p16_11115": 0, "p16_21429": 0, "p16_15683": 0, "p16_27571": 0, "p16_7243": 0, "p16_10183": 0, "p16_27367": 0, "p16_15204": 0, "p16_14929": 0, "p16_18850": 0, "p16_10150": 0, "p16_27209": 0, "p16_18242": 0, "p16_11859": 0, "p16_11607": 0, "p16_23641": 0, "p16_25412": 0, "p16_3749": 0, "p16_2911": 0, "p16_6712": 0, "p16_27055": 0, "p16_18928": 0, "p16_31117": 0, "p16_21989": 0, "p16_8993": 0, "p16_30402": 0, "p16_3200": 0, "p16_9291": 0, "p16_23020": 0, "p16_1537": 0, "p16_8858": 0, "p16_29860": 0, "p16_15167": 0, "p16_458": 0, "p16_20098": 0, "p16_20816": 0, "p16_22800": 0, "p16_7794": 0, "p16_18379": 0, "p16_28854": 0, "p16_22750": 0, "p16_13425": 0, "p16_25394": 0, "p16_14575": 0, "p16_11057": 0, "p16_1730": 0, "p16_16982": 0, "p16_11743": 0, "p16_27309": 0, "p16_31225": 0, "p16_19706": 0, "p16_30866": 0, "p16_23630": 0, "p16_16465": 0, "p16_14102": 0, "p16_22742": 0, "p16_1445": 0, "p16_6174": 0, "p16_11169": 0, "p16_4578": 0, "p16_21084": 0, "p16_28300": 0, "p16_6422": 0, "p16_11539": 0, "p16_11437": 0, "p16_5799": 0, "p16_10927": 0, "p16_9575": 0, "p16_1101": 0, "p16_1456": 0, "p16_28384": 0, "p16_15744": 0, "p16_3041": 0, "p16_16311": 0, "p16_23594": 0, "p16_7610": 0, "p16_21467": 0, "p16_1967": 0, "p16_7453": 0, "p16_2523": 0, "p16_21188": 0, "p16_7518": 0, "p16_6021": 0, "p16_22084": 0, "p16_1440": 0, "p16_7515": 0, "p16_22471": 0, "p16_31571": 0, "p16_9276": 0, "p16_18890": 0, "p16_21072": 0, "p16_18321": 0, "p16_24563": 0, "p16_8312": 0, "p16_10542": 0, "p16_28473": 0, "p16_4295": 0, "p16_15317": 0, "p16_29578": 0, "p16_11144": 0, "p16_25854": 0, "p16_15965": 0, "p16_19453": 0, "p16_26126": 0, "p16_7729": 0, "p16_6336": 0, "p16_18880": 0, "p16_19591": 0, "p16_19610": 0, "p16_7938": 0, "p16_23464": 0, "p16_13977": 0, "p16_14030": 0, "p16_8014": 0, "p16_17944": 0, "p16_6747": 0, "p16_11388": 0, "p16_6648": 0, "p16_5198": 0, "p16_31513": 0, "p16_3087": 0, "p16_10476": 0, "p16_4219": 0, "p16_4078": 0, "p16_18305": 0, "p16_30292": 0, "p16_12287": 0, "p16_4192": 0, "p16_5610": 0, "p16_13152": 0, "p16_12308": 0, "p16_28971": 0, "p16_12783": 0, "p16_5916": 0, "p16_9880": 0, "p16_1419": 0, "p16_4454": 0, "p16_18556": 0, "p16_16059": 0, "p16_10001": 0, "p16_8034": 0, "p16_7039": 0, "p16_10522": 0, "p16_23954": 0, "p16_3984": 0, "p16_17697": 0, "p16_6722": 0, "p16_26353": 0, "p16_28501": 0};

module.exports.posters = (event, context, callback) => {
  console.log(event);
  console.log("handling posters");
  var year = event.pathParameters['year'];
  if (year) {
    console.log("year: " + year);
  } else {
    console.log("no year");
    year = new Date().getFullYear();
  }
  //var eventStr = JSON.stringify(event);


  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      'year':year,
      'index':0,
      'posters' : sc_p16

    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.poster = (event, context, callback) => {
  var options = [];
  var values=[];
  for (var key in p2016) {
    values.push(p2016[key])
  }

  var n=0;
  var numberOfMovies = values.length;
  var numberOfOpt = 15

  for (n;n<numberOfOpt;n++){
    var index = Math.floor((Math.random() * numberOfMovies) + 1);
      options.push(values[index]);
  }


  console.log(event);
  console.log("handling poster");
  var id = event.pathParameters['id'];
  if (id) {
    console.log("id: " + id);
    var movieName = p2016[id]
    const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: JSON.stringify({
        'name':movieName,
        'options' : options
      }),
    }
    callback(null, response);
  } else {
    const response = {
      statusCode: 501,
      headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: {}
    }
    callback(null, response);
  }
};
