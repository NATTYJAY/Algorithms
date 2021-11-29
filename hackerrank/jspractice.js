var shows = {
    "ShowA": 
                {   "Date"      : "November 3-5, 2011",
                    "Phone"     : "111-111-1111",
                    "Location"  : "some location",
                    "url"       : "http://www.showA.com",
                    "num"       : -2
                },

    "ShowB": 
                {   "Date"      : "January 15-18, 2012",
                    "Phone"     : "222-222-2222",
                    "Location"  : "another location",
                    "url"       : "http://www.showB.com",
                    "num"       : 7
                }
};


function loopthroughAnObject(){
    let result = null;
    for(let key in shows){
        // console.log('keyssssssss', key)
        if(shows.hasOwnProperty(key)){
            if (shows.hasOwnProperty(key)) {
                if(shows[key].num++ < 3){
                    continue;
                }else{
                    shows[key].num ++;
                    break;
                }
            }
        }
    }
    return shows;
}

console.log(loopthroughAnObject());

var obj = 
		{
		"Mike":{
			"Joshua":{
				"Chidi":{
					"age":2,
					"class":1,
					"sports":{
						"football":{
							"position":"striker"
						}
					}
				},
				"John":{
					"chi":42,
					"onyedika":1,
					"sports":{
						"football":{
							"position":"defence"
						},
						"curGroup":{
							"two":3
						}
					}
				},
				"Micheal":{
					"onyedika":45,
					"nonso":1,
					"sport":{
						"volleyball":{
							"position":"quarter-back",
							"score":"15"
						},
						"curGroup":{
							"five":9
						}
					}
				},
                "number_children": 6
			},
			
			
		},

	};

    function manipulate_function(change_position){
        for(let key in obj){
            let inner_object =  obj[key];
            for(let key2 in inner_object){
                let inner_inner_obj =  inner_object[key2];
                for(let key3 in inner_inner_obj){
                    let final_inner_obj = inner_inner_obj[key3];
                    if(final_inner_obj.hasOwnProperty('sports')){
                           final_inner_obj['sports']['football']['position'] = change_position;
                    }   
                }
            }
        }
        return obj;
    }




const getNumbersAndStrings = (array) => {
    
    /*
return an object with two keys 
- strings: the value should be a list containing all the strings in the array
- numbers: the value should be the sum of all the numbers in the array

getNumbersAndStrings([1, 2, "f"]) => {"numbers": 3, "strings": ["f"]}
getNumbersAndStrings([5, "4"]) => {"numbers": 5, "strings": ["4"]}
getNumbersAndStrings([]) => {"numbers": 0, "strings": []},
getNumbersAndStrings(["5"]) => {"numbers": 0, "strings": ["5"]}
getNumbersAndStrings([-5]) => {"numbers": -5, "strings": []}
getNumbersAndStrings([{}, [], -5]) => {"numbers": -5, "strings": []}
*/

let array_init = [];
let return_object = {};
let total = 0;

if(array.length == 0){
    return_object.numbers = 0;
    return_object.strings = [];
}

for(let i = 0; i<=array.length; i++){
    if(typeof(array[i]) == "string"){
        array_init.push(array[i]);
        if(array.length === 1){
            return_object.numbers = 0;
        }
        return_object.strings = array_init;
    }else if(typeof(array[i]) == "number"){
        total += array[i];
        if(array[i] < 0 ){
            return_object.numbers =total;
            return_object.strings = [];
        }
        return_object.numbers = total;
    }
}
    return return_object;
}
    
console.log(getNumbersAndStrings([{}, [], -5]) );

