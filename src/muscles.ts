// src/muscles.ts

// src/muscles.ts
export interface Exercise {
  name: string;
  gif: string; // just a relative path
  details: string;
}

export interface Muscle {
  name: string;
  coords: string;
  color: string;
  exercises: Exercise[];
}


export const muscles: Muscle[] = [
  {
    name: "Chest",
    coords: "335,210,320,198,303,202,282,214,257,233,239,249,251,253,264,268,282,278,305,280,326,268,335,251,340,264,362,280,381,279,404,268,425,249,410,228,383,209,350,201", // replace with your polygon coordinates
    color: "#FF6347",
    exercises: [
      { name : "Bench Press" , gif : "/exercises/benchpress.gif" , details : "The bench press is a fundamental exercise for building upper body strength and muscle mass, particularly in the chest-shoulders-triceps." },
      { name : "Dumbell-Fly" , gif : "/exercises/dumbellfly.gif", details : "Dumbbell flyes are an isolation exercise that primarily targets the pectoral muscles, helping to enhance chest definition and strength." },
      { name : "Machine Pec-Fly",   gif : "/exercises/pecfly.gif" , details : "The machine pec deck fly provides a safe and controlled way to isolate and build the chest muscles, reducing the need for stabilization and making it ideal for beginners or for high-rep training."}
    ],},
    
  {
    name: "Abs",
    coords: "335,275,320,273,306,279,297,294,300,307,302,329,302,360,306,391,313,417,322,431,333,439,346,435,364,401,367,368,370,328,370,305,373,290,351,275", // replace with your polygon coordinates
    color: "#1E90FF",
    exercises: [
      {name:"Leg Raises",gif:"/exercises/legraises.gif", details:"Leg raises are an effective exercise for targeting the lower abdominal muscles, helping to build core strength and improve overall stability."}, 
      {name:"Crunches",gif:"/exercises/abdomen.gif", details:"Crunches are a classic abdominal exercise that primarily targets the rectus abdominis, helping to strengthen and define the core muscles."}, 
      {name:"Plank",gif:"/exercises/plank.gif", details:"The plank is a highly effective isometric exercise that engages multiple core muscles, improving overall stability, endurance, and posture."},
      {name:"Russian-Twists",gif:"/exercises/russiantwists.gif", details:"Russian twists are a dynamic core exercise that targets the oblique muscles, helping to enhance rotational strength and improve overall abdominal definition."}],
  },
  {
    name: "Quadricep",
    coords: "291,410,281,403,270,397,261,436,256,469,251,520,253,558,261,594,276,594,285,611,296,614,311,594,319,548,317,507", // replace with your polygon coordinates
    color: "#32CD32",
    exercises: [

      {name:"Squats",gif:"/exercises/squats.gif" , details:"Squats are a fundamental compound exercise that primarily targets the quadriceps, hamstrings, glutes, and core muscles, promoting overall lower body strength and stability."}, 
      {name:"Lunges",gif:"/exercises/legextension.gif", details:"Lunges are a versatile lower body exercise that primarily targets the quadriceps, hamstrings, and glutes, helping to improve balance, coordination, and overall leg strength."}, 
      {name:"Leg Press",  gif:"/exercises/legpress.gif" , details:"The leg press is a compound exercise that primarily targets the quadriceps, hamstrings, and glutes, allowing for heavy loading to build lower body strength and muscle mass."},
      
    ],
  },
  {
    name: "Quadricep",
    coords: "399,402,385,408,369,439,359,478,354,505,354,547,362,575,371,608,379,617,389,612,399,595,410,595,419,565,422,505,412,453", // replace with your polygon coordinates
    color: "#32CD32",
     exercises: [
      {name:"Squats",gif:"/exercises/squats.gif",details:"Squats are a fundamental compound exercise that primarily targets the quadriceps, hamstrings, glutes, and core muscles, promoting overall lower body strength and stability." }, 
      {name:"Lunges",gif:"/exercises/legextension.gif" , details:"Lunges are a versatile lower body exercise that primarily targets the quadriceps, hamstrings, and glutes, helping to improve balance, coordination, and overall leg strength." }, 
      {name:"Leg Press",  gif:"/exercises/legpress.gif" , details:"The leg press is a compound exercise that primarily targets the quadriceps, hamstrings, and glutes, allowing for heavy loading to build lower body strength and muscle mass."},
      
    ],
  },
  {
    name: "Shoulder",
    coords: "304,199,268,196,240,204,229,219,221,237,216,261,241,247,268,220", // replace with your polygon coordinates
    color: "#FFD700",
    exercises: [ 
      {name:"Milatary-Press", gif:"/exercises/shoulderpress.gif" , details:"The military press is a fundamental compound exercise that primarily targets the deltoid muscles in the shoulders, helping to build upper body strength and muscle mass."}, 
       {name:"Lateral-Raises",gif:"/exercises/latralraise.gif" , details:"The dumbbell lateral raise is one of the most effective isolation exercises for targeting the lateral (side) deltoid muscle, which helps build wider, more defined shoulders."}, ],
   },
   
   {
    name: "Shoulder",
    coords: "364,202,402,198,428,205,439,218,448,240,453,259,432,251,397,219", // replace with your polygon coordinates
    color: "#FFD700",
    exercises: [ 
      {name:"Milatary-Press", gif:"/exercises/shoulderpress.gif" , details:"The military press is a fundamental compound exercise that primarily targets the deltoid muscles in the shoulders, helping to build upper body strength and muscle mass."}, 
      {name:"Lateral-Raise",gif:"/exercises/latralraise.gif" ,details:"The dumbbell lateral raise is one of the most effective isolation exercises for targeting the lateral side deltoid muscle, which helps build wider, more defined shoulders."}, ],
   },
  {
    name: "Back",
    coords: "875,151,863,176,843,188,821,198,829,209,844,217,824,239,806,249,805,268,810,278,810,298,820,321,830,346,827,371,823,400,838,392,856,391,870,397,888,414,908,395,928,391,945,397,955,401,951,368,952,328,965,306,967,280,975,249,948,233,932,219,946,208,957,201,931,191,911,172,902,149", // replace with your polygon coordinates
    color: "#4d7a3bff",
    exercises: [
      {name:"Bent-Over Row",gif:"/exercises/barbellrow.gif" , details:"The bent-over row is a compound exercise that primarily targets the muscles of the upper and middle back, including the latissimus dorsi, rhomboids, and trapezius, helping to build strength and muscle mass."}, 
      {name:"Dumbell-Row",gif:"/exercises/dumbellrows.gif" , details:"The dumbbell row is a versatile exercise that primarily targets the upper back muscles, including the latissimus dorsi, rhomboids, and trapezius, helping to improve posture and build strength."}, 
      {name:"Lat-PullDown",gif:"/exercises/latpulldown.gif" , details:"The lat pulldown is a strength training exercise that primarily targets the latissimus dorsi muscles in the back, helping to build upper body strength and improve posture."},

    {name:"Cabel-Row",gif:"/exercises/cabelrow.gif" , details:"The cable row is a versatile exercise that primarily targets the muscles of the upper and middle back, including the latissimus dorsi, rhomboids, and trapezius, helping to build strength and improve posture."}],
  },
  {
    name: "Glutes Maximus",
    coords: "832,396,833,421,825,447,826,465,835,479,851,487,870,487,886,480,909,488,929,484,944,475,952,451,945,426,943,397,920,393,900,401,887,419,872,396,852,390", // replace with your polygon coordinates
    color: "#a541a0ff",
    exercises: [
      {name:"Sumo-Squat",gif:"/exercises/sumosquat.gif" , details:"The sumo squat is a variation of the traditional squat that primarily targets the inner thighs, glutes, and quadriceps, helping to build lower body strength and improve hip mobility."},
      {name:"Hip-Thrust",gif:"/exercises/hip-thrust.gif" , details:"The hip thrust is a highly effective exercise for targeting the gluteal muscles, particularly the gluteus maximus, helping to build strength, power, and muscle mass in the hips and buttocks."},
      {name:"Hip-Abduction",gif:"/exercises/hipadductor.gif" , details:"Hip abduction exercises primarily target the gluteus medius and minimus muscles, which are essential for stabilizing the pelvis and improving overall hip strength and mobility."},
    {name:"Romanian-Deadlift",gif:"/exercises/dumbellrdl.gif",  details:"The Romanian deadlift is a highly effective exercise for strengthening the hamstrings, glutes, and lower back, promoting improved posterior chain development and flexibility. "} ],
  },
  {
    name: "Hamstring",
    coords: "908,488,907,511,911,541,916,573,920,598,926,624,931,635,935,611,939,580,949,597,953,609,963,617,956,586,956,552,953,516,944,495", // replace with your polygon coordinates
    color: "#449c21ff",
    exercises: [
   {name:"Leg-Curl",  gif:"/exercises/legcurl.gif", details:"The Romanian deadlift is a highly effective exercise for strengthening the hamstrings, glutes, and lower back, promoting improved posterior chain development and flexibility."},
    {name:"Seated Leg-Curl",  gif:"/exercises/legcurl2.gif", details:"The seated leg curl, on the other hand, trains the hamstrings in a more stretched, lengthened position, which has been shown to be superior for muscle hypertrophy."},
  ],
},

  {
    name: "Hamstring",
    coords: "867,487,844,491,829,499,822,514,822,532,822,561,820,586,816,605,809,622,830,597,837,580,840,612,847,636,855,596,869,517", // replace with your polygon coordinates
    
    color: "#449c21ff",
    exercises: [
    {name:"Lying Leg-Curl",  gif:"/exercises/legcurl.gif", details:"The Romanian deadlift is a highly effective exercise for strengthening the hamstrings, glutes, and lower back, promoting improved posterior chain development and flexibility."},
    {name:"Seated Leg-Curl",  gif:"/exercises/legcurl2.gif", details:"The seated leg curl, on the other hand, trains the hamstrings in a more stretched, lengthened position, which has been shown to be superior for muscle hypertrophy."},
  ],
},
  {
    name: "Trapezius",
    coords: "400,196,371,198,359,198,339,203,325,203,310,199,299,197,267,198,286,185,309,172,308,186,317,202,348,199,361,187,361,173,376,184", // replace with your polygon coordinates
    color: "#3c9fbdff",
    exercises: [
      {name:"Shrugs",gif:"/exercises/shrugs.gif" , details:"Shrugs are a simple yet effective exercise that primarily targets the trapezius muscles, helping to build upper back strength and improve posture."},

    ],
  },
  {
    name: "Calves",
    coords: "830,595,812,618,802,644,798,669,801,691,809,699,822,698,837,707,845,683,844,634", // replace with your polygon coordinates
    color: "#9bbd3cff",
    exercises: [
      {name:"Standing Calf-Raise",gif:"", details:"Standing calf raises are an effective exercise for targeting the gastrocnemius muscle, which is the larger and more prominent muscle of the calf, helping to build strength and definition."}, 
      {name:"Seated Calf-Raise",gif:"", details:"Seated calf raises primarily target the soleus muscle, which lies underneath the gastrocnemius, helping to build overall calf strength and endurance."},
    ],},
  
 {
    name: "Calves",
    coords: "945,595,937,622,928,657,928,682,935,708,955,699,971,701,978,682,976,647,956,617", // replace with your polygon coordinates
    color: "#9bbd3cff",
    exercises: [
      {name:"Standing Calf-Raise",gif:"", details:"Standing calf raises are an effective exercise for targeting the gastrocnemius muscle, which is the larger and more prominent muscle of the calf, helping to build strength and definition."}, 
      {name:"Seated Calf-Raise",gif:"", details:"Seated calf raises primarily target the soleus muscle, which lies underneath the gastrocnemius, helping to build overall calf strength and endurance."},
    ],},
  {
    name: "Tricep",
    coords: "802,249,770,259,752,290,746,312,744,334,752,343,760,353,784,318,801,302,811,279", // replace with your polygon coordinates
    color: "#0b9dd6ff",
    exercises: [
      {name:"Skull-Crushers",gif:"/exercises/skullcrusher.gif", details:"Skullcrushers are a highly effective exercise for isolating the long head of the triceps, promoting significant muscle growth and definition." }, 
      {name:"Cabel-Pushdown",gif:"/exercises/triceps.gif" , details:"Cable rope pushdowns are great for targeting the triceps from a slightly different angle and allow for a greater range of motion and a strong peak contraction, helping to develop the horseshoe shape of the muscle."},
    {name:"Cabel-Pushdown",gif:"/exercises/triceps.gif" , details:"Cable bar pushdowns are excellent for targeting the lateral and medial heads of the triceps, building overall triceps mass and strength with constant tension."}],
  },
  {
    name: "Tricep",
    coords: "973,249,971,278,973,292,987,306,995,320,1008,339,1015,350,1029,341,1036,332,1025,291,1008,261", // replace with your polygon coordinates
    color: "#0b9dd6ff",
    exercises: [
      {name:"Skull-Crushers",gif:"/exercises/skullcrusher.gif", details:"Skullcrushers are a highly effective exercise for isolating the long head of the triceps, promoting significant muscle growth and definition." }, 
      {name:"Cabel-Pushdown",gif:"/exercises/triceps.gif" , details:"Cable rope pushdowns are great for targeting the triceps from a slightly different angle and allow for a greater range of motion and a strong peak contraction, helping to develop the horseshoe shape of the muscle."},
    {name:"Cabel-Pushdown",gif:"/exercises/triceps.gif" , details:"Cable bar pushdowns are excellent for targeting the lateral and medial heads of the triceps, building overall triceps mass and strength with constant tension."}],
  },
  {
    name: "Biceps",
    coords: "240,249,214,261,198,296,192,315,197,336,210,334,224,327,241,300,255,285,254,258", // replace with your polygon coordinates
    color: "#0b9dd6ff",

    exercises: [
      {name:"Dumbell-curls",gif:"/exercises/biceps.gif", details:"Dumbbell curls are a fundamental exercise for building bicep strength and size, allowing for a greater range of motion and muscle activation compared to barbell curls."}, 
      {name:"Hammer-Curls",gif:"/exercises/curl.gif" , details:"Hammer curls are an effective exercise for targeting the brachialis muscle, which lies underneath the biceps, helping to increase overall arm thickness and strength."}],
  },
  {
    name: "Biceps",
    coords: "416,255,417,284,432,303,444,321,464,332,474,335,477,315,472,293,456,266,434,252", // replace with your polygon coordinates
    color: "#0b9dd6ff",

    exercises: [
      {name:"Dumbell-curls",gif:"/exercises/biceps.gif" , details:"Dumbbell curls are a fundamental exercise for building bicep strength and size, allowing for a greater range of motion and muscle activation compared to barbell curls."}, 
      {name:"Hammer-Curls",gif:"/exercises/curl.gif" , details:"Hammer curls are an effective exercise for targeting the brachialis muscle, which lies underneath the biceps, helping to increase overall arm thickness and strength."}],
  },
  {
    name: "Rear-Delt",
    coords: "819,199,793,209,779,229,770,263,792,250,809,248,827,235,842,216", // replace with your polygon coordinates
    color: "#bd6b3cff",
    exercises: [
      {name:"face-Pulls",gif:"" ,details:"Face pulls are an excellent exercise for targeting the rear deltoids and upper back muscles, helping to improve posture, shoulder health, and overall upper body strength."}, 
      {name:"reverse-Pec-Deck",gif:"" ,details:"The reverse pec deck is an effective exercise for isolating the rear deltoids and upper back muscles, promoting better posture and shoulder stability."},
      {name:"Dumbell-Fly",gif:"", details:""}],
   
  },
  {
    name: "Rear-Delt",
    coords: "934,217,959,199,983,207,995,223,1003,239,1006,261,988,251,972,248,951,235", // replace with your polygon coordinate
    color: "#bd6b3cff",
     exercises: [
      {name:"face-Pulls",gif:"" ,details:"Face pulls are an excellent exercise for targeting the rear deltoids and upper back muscles, helping to improve posture, shoulder health, and overall upper body strength."}, 
      {name:"reverse-Pec-Deck",gif:"" ,details:"The reverse pec deck is an effective exercise for isolating the rear deltoids and upper back muscles, promoting better posture and shoulder stability."},
      {name:"Dumbell-Fly",gif:"", details:""}],
   
  },
   
 
]

