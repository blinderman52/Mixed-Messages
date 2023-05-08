//Array of body parts
let bodyParts = ["Chest", "Shoulders", "Back", "Arms", "Legs", "Rest Day"];

//Array of rep ranges
let numOfReps = [8, 10, 12, 15];

// Used Fisher-Yates shuffle to randomize the order of each body part
const shuffle = (array) =>{
    //loop that iterates the array
    for(let j = 0; j < array.length; j++){
        //saves current item to a temporary variable
        let temp = array[j];
        //generate a random number in the range of the array
        let randomIndex = Math.floor(Math.random() * array.length);
        // get the item at the random index and replace the current item with random item
        array[j] = array[randomIndex];
        //replace random item with the current item
        array[randomIndex] = temp;

    }

    return array;

}


// create factory function to return object of workouts
const excercises = (duration) =>{
    return{
        //duration of workouts
        week: duration,
        bodyPart: shuffle(bodyParts),
        reps: shuffle(numOfReps),
        workOut(q){
            let tempArr = [];
            tempArr.push(`Week: ${q}:`)
            for(let i = 0; tempArr.length < 8; i++){
                switch(this.bodyPart[i]){
                    case "Chest": //chest
                       tempArr.push(`Day ${i + 1}: Bench Press x${this.reps[0]}, Incline Press x${this.reps[0]}, Cable/Machine Flys x${this.reps[0]}`);
                       break;
                    case "Shoulders": //Shoulders
                        tempArr.push(`Day ${i + 1}: Milatary Press x${this.reps[0]}, Side and Front Raises x${this.reps[0]}, Reverse Cable Flys x${this.reps[0]}`); 
                        break;
                    case "Back": //back
                        tempArr.push(`Day ${i + 1}: Lat Pulldown x${this.reps[0]}, Dumbbell Row x${this.reps[0]}, Straight Arm lat Pull Down x${this.reps[0]}, Dumbbell Shrugs x${this.reps[0]}`);
                        break;
                    case "Arms": //arms
                        tempArr.push(`Day ${i + 1}: Bicep Preacher Curl x${this.reps[0]}, Tricep Dip x${this.reps[0]}, Bicep Hammer Curl x${this.reps[0]}, Tricep Rope Extension x${this.reps[0]}, Bicep Concentration Curl x${this.reps[0]}, Tricep French Press x${this.reps[0]}`)
                        break;
                    case "Legs": // Legs
                       tempArr.push(`Day ${i + 1}: Sqaut x${this.reps[0]}, Deadlift x${this.reps[0]}, Leg Press x${this.reps[0]}, Leg Curl x${this.reps[0]}, Leg Extension x${this.reps[0]}, Calf Raises x${this.reps[0]}`);
                       break;
                    default:
                        tempArr.push(`Day ${i + 1}: Enjoy your rest day!`)
                        break;
                 }
            }
            return tempArr;         
        },
        lengthOfProgram(){
           let workoutPlan = []
           let q = 1;
           let tempNum = this.week;
            while(tempNum != 0){
               workoutPlan.push(excercises(1).workOut(q));
               --tempNum; 
               q++;              
            }
            return workoutPlan;
        }
    }
}
//output message for users
console.log(excercises(10).lengthOfProgram());


/*Possible future adds:
    --add something to allow for user to establish number of workout per week
    --add UI
    --Types of workouts
*/

