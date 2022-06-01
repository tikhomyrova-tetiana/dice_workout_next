const exercises = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "45° side bend",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
    id: "0003",
    name: "air bike",
    target: "abs",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id: "1512",
    name: "all fours squad stretch",
    target: "quads",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
    id: "0006",
    name: "alternate heel touchers",
    target: "abs",
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    id: "1368",
    name: "ankle circles",
    target: "calves",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
    id: "3294",
    name: "archer push up",
    target: "pectorals",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2355.gif",
    id: "2355",
    name: "arm slingers hanging bent knee legs",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2333.gif",
    id: "2333",
    name: "arm slingers hanging straight legs",
    target: "abs",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3214.gif",
    id: "3214",
    name: "arms apart circular toe touch (male)",
    target: "glutes",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3204.gif",
    id: "3204",
    name: "arms overhead full sit-up (male)",
    target: "abs",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
    id: "3220",
    name: "astride jumps (male)",
    target: "cardiovascular system",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
    id: "3672",
    name: "back and forth step",
    target: "cardiovascular system",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3297.gif",
    id: "3297",
    name: "back lever",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1405.gif",
    id: "1405",
    name: "back pec stretch",
    target: "lats",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1473.gif",
    id: "1473",
    name: "backward jump",
    target: "quads",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0020.gif",
    id: "0020",
    name: "balance board",
    target: "quads",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3212.gif",
    id: "3212",
    name: "basic toe touch (male)",
    target: "glutes",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3360.gif",
    id: "3360",
    name: "bear crawl",
    target: "cardiovascular system",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0129.gif",
    id: "0129",
    name: "bench dip (knees bent)",
    target: "triceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1399.gif",
    id: "1399",
    name: "bench dip on floor",
    target: "triceps",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0130.gif",
    id: "0130",
    name: "bench hip extension",
    target: "glutes",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3019.gif",
    id: "3019",
    name: "bench pull-ups",
    target: "lats",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3639.gif",
    id: "3639",
    name: "bent knee lying twist (male)",
    target: "glutes",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1770.gif",
    id: "1770",
    name: "biceps leg concentration curl",
    target: "biceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0139.gif",
    id: "0139",
    name: "biceps narrow pull-ups",
    target: "biceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0140.gif",
    id: "0140",
    name: "biceps pull-up",
    target: "biceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0137.gif",
    id: "0137",
    name: "body-up",
    target: "triceps",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3543.gif",
    id: "3543",
    name: "bodyweight drop jump squat",
    target: "glutes",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3544.gif",
    id: "3544",
    name: "bodyweight incline side plank",
    target: "abs",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1771.gif",
    id: "1771",
    name: "bodyweight kneeling triceps extension",
    target: "triceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1769.gif",
    id: "1769",
    name: "bodyweight side lying biceps curl",
    target: "biceps",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3168.gif",
    id: "3168",
    name: "bodyweight squatting row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3167.gif",
    id: "3167",
    name: "bodyweight squatting row (with towel)",
    target: "upper back",
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1373.gif",
    id: "1373",
    name: "bodyweight standing calf raise",
    target: "calves",
  },
  // 36:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3156.gif"
  // "id":"3156"
  // "name":"bodyweight standing close-grip one arm row"
  // "target":"upper back"
  // },
  // 37:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3158.gif"
  // "id":"3158"
  // "name":"bodyweight standing close-grip row"
  // "target":"upper back"
  // },
  // 38:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3162.gif"
  // "id":"3162"
  // "name":"bodyweight standing one arm row"
  // "target":"upper back"
  // },
  // 39:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3161.gif"
  // "id":"3161"
  // "name":"bodyweight standing one arm row (with towel)"
  // "target":"upper back"
  // },
  // 40:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3166.gif"
  // "id":"3166"
  // "name":"bodyweight standing row"
  // "target":"upper back"
  // },
  // 41:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3165.gif"
  // "id":"3165"
  // "name":"bodyweight standing row (with towel)"
  // "target":"upper back"
  // },
  // 42:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0138.gif"
  // "id":"0138"
  // "name":"bottoms-up"
  // "target":"abs"
  // },
  // 43:{
  // "bodyPart":"lower legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1374.gif"
  // "id":"1374"
  // "name":"box jump down with one leg stabilization"
  // "target":"calves"
  // },
  // 44:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/2466.gif"
  // "id":"2466"
  // "name":"bridge - mountain climber (cross body)"
  // "target":"abs"
  // },
  // 45:{
  // "bodyPart":"cardio"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1160.gif"
  // "id":"1160"
  // "name":"burpee"
  // "target":"cardiovascular system"
  // },
  // 46:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0870.gif"
  // "id":"0870"
  // "name":"butt-ups"
  // "target":"abs"
  // },
  // 47:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1494.gif"
  // "id":"1494"
  // "name":"butterfly yoga pose"
  // "target":"adductors"
  // },
  // 48:{
  // "bodyPart":"lower legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1407.gif"
  // "id":"1407"
  // "name":"calf push stretch with hands against wall"
  // "target":"calves"
  // },
  // 49:{
  // "bodyPart":"lower legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1377.gif"
  // "id":"1377"
  // "name":"calf stretch with hands against wall"
  // "target":"calves"
  // },
  // 50:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/2963.gif"
  // "id":"2963"
  // "name":"captains chair straight leg raise"
  // "target":"abs"
  // },
  // 51:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1548.gif"
  // "id":"1548"
  // "name":"chair leg extended stretch"
  // "target":"quads"
  // },
  // 52:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1271.gif"
  // "id":"1271"
  // "name":"chest and front of shoulder stretch"
  // "target":"pectorals"
  // },
  // 53:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0251.gif"
  // "id":"0251"
  // "name":"chest dip"
  // "target":"pectorals"
  // },
  // 54:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1430.gif"
  // "id":"1430"
  // "name":"chest dip (on dip-pull-up cage)"
  // "target":"pectorals"
  // },
  // 55:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/2462.gif"
  // "id":"2462"
  // "name":"chest dip on straight bar"
  // "target":"pectorals"
  // },
  // 56:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3216.gif"
  // "id":"3216"
  // "name":"chest tap push-up (male)"
  // "target":"pectorals"
  // },
  // 57:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1326.gif"
  // "id":"1326"
  // "name":"chin-up"
  // "target":"lats"
  // },
  // 58:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0253.gif"
  // "id":"0253"
  // "name":"chin-ups (narrow parallel grip)"
  // "target":"upper back"
  // },
  // 59:{
  // "bodyPart":"lower legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0257.gif"
  // "id":"0257"
  // "name":"circles knee stretch"
  // "target":"calves"
  // },
  // 60:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1273.gif"
  // "id":"1273"
  // "name":"clap push up"
  // "target":"pectorals"
  // },
  // 61:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0258.gif"
  // "id":"0258"
  // "name":"clock push-up"
  // "target":"pectorals"
  // },
  // 62:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1327.gif"
  // "id":"1327"
  // "name":"close grip chin-up"
  // "target":"lats"
  // },
  // 63:{
  // "bodyPart":"upper arms"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0259.gif"
  // "id":"0259"
  // "name":"close-grip push-up"
  // "target":"triceps"
  // },
  // 64:{
  // "bodyPart":"upper arms"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/2398.gif"
  // "id":"2398"
  // "name":"close-grip push-up (on knees)"
  // "target":"triceps"
  // },
  // 65:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0260.gif"
  // "id":"0260"
  // "name":"cocoons"
  // "target":"abs"
  // },
  // 66:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1468.gif"
  // "id":"1468"
  // "name":"crab twist toe touch"
  // "target":"abs"
  // },
  // 67:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0262.gif"
  // "id":"0262"
  // "name":"cross body crunch"
  // "target":"abs"
  // },
  // 68:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0267.gif"
  // "id":"0267"
  // "name":"crunch (hands overhead)"
  // "target":"abs"
  // },
  // 69:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0274.gif"
  // "id":"0274"
  // "name":"crunch floor"
  // "target":"abs"
  // },
  // 70:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3016.gif"
  // "id":"3016"
  // "name":"curl-up"
  // "target":"abs"
  // },
  // 71:{
  // "bodyPart":"upper legs",
  // "equipment":"body weight",
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3769.gif"
  // "id":"3769"
  // "name":"curtsey squat"
  // "target":"glutes"
  // },
  // 72:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0276.gif"
  // "id":"0276"
  // "name":"dead bug"
  // "target":"abs"
  // },
  // 73:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0277.gif"
  // "id":"0277"
  // "name":"decline crunch"
  // "target":"abs"
  // },
  // 74:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0279.gif"
  // "id":"0279"
  // "name":"decline push-up"
  // "target":"pectorals"
  // },
  // 75:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0282.gif"
  // "id":"0282"
  // "name":"decline sit-up"
  // "target":"abs"
  // },
  // 76:{
  // "bodyPart":"upper arms"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0283.gif"
  // "id":"0283"
  // "name":"diamond push-up"
  // "target":"triceps"
  // },
  // 77:{
  // "bodyPart":"lower legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0284.gif"
  // "id":"0284"
  // "name":"donkey calf raise"
  // "target":"calves"
  // },
  // 78:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1275.gif"
  // "id":"1275"
  // "name":"drop push up"
  // "target":"pectorals"
  // },
  // 79:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1167.gif"
  // "id":"1167"
  // "name":"dynamic chest stretch (male)"
  // "target":"pectorals"
  // },
  // 80:{
  // "bodyPart":"upper arms"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3287.gif"
  // "id":"3287"
  // "name":"elbow dips"
  // "target":"triceps"
  // },
  // 81:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1772.gif"
  // "id":"1772"
  // "name":"elbow lift - reverse push-up"
  // "target":"upper back"
  // },
  // 82:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0443.gif"
  // "id":"0443"
  // "name":"elbow-to-knee"
  // "target":"abs"
  // },
  // 83:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3292.gif"
  // "id":"3292"
  // "name":"elevator"
  // "target":"upper back"
  // },
  // 84:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3303.gif"
  // "id":"3303"
  // "name":"flag"
  // "target":"abs"
  // },
  // 85:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0456.gif"
  // "id":"0456"
  // "name":"flexion leg sit up (bent knee)"
  // "target":"abs"
  // },
  // 86:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0457.gif"
  // "id":"0457"
  // "name":"flexion leg sit up (straight arm)"
  // "target":"abs"
  // },
  // 87:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0459.gif"
  // "id":"0459"
  // "name":"flutter kicks"
  // "target":"glutes"
  // },
  // 88:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1472.gif"
  // "id":"1472"
  // "name":"forward jump"
  // "target":"quads"
  // },
  // 89:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3470.gif"
  // "id":"3470"
  // "name":"forward lunge (male)"
  // "target":"glutes"
  // },
  // 90:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/2429.gif"
  // "id":"2429"
  // "name":"frog crunch"
  // "target":"abs"
  // },
  // 91:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3301.gif"
  // "id":"3301"
  // "name":"frog planche"
  // "target":"abs"
  // },
  // 92:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3296.gif"
  // "id":"3296"
  // "name":"front lever"
  // "target":"abs"
  // },
  // 93:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3295.gif"
  // "id":"3295"
  // "name":"front lever reps"
  // "target":"upper back"
  // },
  // 94:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0464.gif"
  // "id":"0464"
  // "name":"front plank with twist"
  // "target":"abs"
  // },
  // 95:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3315.gif"
  // "id":"3315"
  // "name":"full maltese"
  // "target":"abs"
  // },
  // 96:{
  // "bodyPart":"waist"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3299.gif"
  // "id":"3299"
  // "name":"full planche"
  // "target":"abs"
  // },
  // 97:{
  // "bodyPart":"chest"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3327.gif"
  // "id":"3327"
  // "name":"full planche push-up"
  // "target":"pectorals"
  // },
  // 98:{
  // "bodyPart":"back"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0466.gif"
  // "id":"0466"
  // "name":"gironda sternum chin"
  // "target":"lats"
  // },
  // 99:{
  // "bodyPart":"upper legs"
  // "equipment":"body weight"
  // "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3561.gif"
  // "id":"3561"
  // "name":"glute bridge march"
  // "target":"glutes"
  // }
];
