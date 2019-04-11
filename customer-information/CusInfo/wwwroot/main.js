var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.count = 0;
  // DATA 
  $scope.staffs=[
                {
                  "_id": "5b9aa2dfbc0ee538e22dd7c7",
                  "index": 0,
                  "guid": "c7c4d547-1ec2-48c9-bcb4-bc6d11d7b340",
                  "isActive": true,
                  "balance": "$2,898.24",
                  "picture": "http://placehold.it/32x32",
                  "age": 24,
                  "eyeColor": "green",
                  "name": "Mccoy Gross",
                  "gender": "male",
                  "company": "DAISU",
                  "email": "mccoygross@daisu.com",
                  "phone": "+1 (861) 417-3344",
                  "address": "444 Wakeman Place, Caln, Arkansas, 5666",
                  "about": "Proident veniam sit eiusmod cupidatat nostrud ex ea est fugiat quis tempor sint. Enim dolore anim aute dolore laborum enim nulla. Duis aute est incididunt qui labore sunt sint enim commodo. Ex pariatur minim culpa consectetur anim voluptate ut labore dolore ut sit aliqua. Sit Lorem amet excepteur cillum sunt fugiat esse pariatur et irure est est voluptate adipisicing. Tempor exercitation aute ut voluptate id magna veniam tempor sunt ut aute aliqua eiusmod consectetur. Occaecat excepteur reprehenderit proident laboris ipsum amet incididunt exercitation aliquip.\r\n",
                  "registered": "2018-08-29T09:43:31 -07:00",
                  "latitude": -36.350142,
                  "longitude": 26.967151,
                  "tags": [
                    "cupidatat",
                    "quis",
                    "sint",
                    "sunt",
                    "duis",
                    "labore",
                    "occaecat"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Faulkner Douglas"
                    },
                    {
                      "id": 1,
                      "name": "Tanisha Wooten"
                    },
                    {
                      "id": 2,
                      "name": "Beasley Dejesus"
                    }
                  ],
                  "greeting": "Hello, Mccoy Gross! You have 4 unread messages.",
                  "favoriteFruit": "banana"
                },
                {
                  "_id": "5b9aa2df6f79ab30167daa5d",
                  "index": 1,
                  "guid": "323ad45e-7442-48b2-ab00-e1218fb71d1c",
                  "isActive": false,
                  "balance": "$2,818.32",
                  "picture": "http://placehold.it/32x32",
                  "age": 27,
                  "eyeColor": "blue",
                  "name": "Sellers Horton",
                  "gender": "male",
                  "company": "SPACEWAX",
                  "email": "sellershorton@spacewax.com",
                  "phone": "+1 (927) 547-3487",
                  "address": "134 Herzl Street, Sussex, North Dakota, 2937",
                  "about": "Incididunt tempor ea magna laboris aliqua anim. Nisi irure Lorem culpa veniam ea elit mollit. Magna Lorem qui aliqua eu laborum velit cillum sunt excepteur duis sunt nostrud deserunt. Nisi aliquip ea excepteur deserunt laboris.\r\n",
                  "registered": "2018-09-11T11:30:56 -07:00",
                  "latitude": -54.047602,
                  "longitude": 54.844069,
                  "tags": [
                    "nisi",
                    "ipsum",
                    "veniam",
                    "culpa",
                    "mollit",
                    "esse",
                    "voluptate"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Rebekah Martin"
                    },
                    {
                      "id": 1,
                      "name": "Avery Boone"
                    },
                    {
                      "id": 2,
                      "name": "Leblanc Paul"
                    }
                  ],
                  "greeting": "Hello, Sellers Horton! You have 5 unread messages.",
                  "favoriteFruit": "apple"
                },
                {
                  "_id": "5b9aa2dfc84ebc858c82408a",
                  "index": 2,
                  "guid": "e5fcde7a-54bc-4b12-86d7-9c2e0f2d21bd",
                  "isActive": false,
                  "balance": "$3,478.28",
                  "picture": "http://placehold.it/32x32",
                  "age": 34,
                  "eyeColor": "brown",
                  "name": "Jodie Nguyen",
                  "gender": "female",
                  "company": "EGYPTO",
                  "email": "jodienguyen@egypto.com",
                  "phone": "+1 (917) 478-2589",
                  "address": "844 Classon Avenue, Gilmore, Washington, 7728",
                  "about": "Laboris ex duis aliquip mollit nulla in eu cupidatat. Laboris deserunt labore consectetur duis est amet ea aliquip ut nisi. Aute deserunt do eu nostrud ut commodo labore proident id nostrud officia cillum aliquip tempor.\r\n",
                  "registered": "2016-09-13T06:02:46 -07:00",
                  "latitude": -23.371809,
                  "longitude": -143.210418,
                  "tags": [
                    "voluptate",
                    "officia",
                    "veniam",
                    "reprehenderit",
                    "ex",
                    "fugiat",
                    "fugiat"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Rowe Gentry"
                    },
                    {
                      "id": 1,
                      "name": "Marcie Wolfe"
                    },
                    {
                      "id": 2,
                      "name": "Michael Butler"
                    }
                  ],
                  "greeting": "Hello, Jodie Nguyen! You have 10 unread messages.",
                  "favoriteFruit": "banana"
                },
                {
                  "_id": "5b9aa2df01f28e1f751ee32a",
                  "index": 3,
                  "guid": "4a03136a-e46f-4039-81c6-29b4e9e02aec",
                  "isActive": true,
                  "balance": "$2,375.76",
                  "picture": "http://placehold.it/32x32",
                  "age": 21,
                  "eyeColor": "brown",
                  "name": "Dudley Wallace",
                  "gender": "male",
                  "company": "ARTIQ",
                  "email": "dudleywallace@artiq.com",
                  "phone": "+1 (802) 424-3939",
                  "address": "171 Merit Court, Marne, Puerto Rico, 7380",
                  "about": "Sit Lorem quis in occaecat ipsum adipisicing occaecat aliquip voluptate consectetur duis. Sint ad cillum in ad ex ut sit ipsum. In excepteur officia cupidatat est ea officia. Sit occaecat mollit quis aliquip. In enim proident laborum reprehenderit duis sunt.\r\n",
                  "registered": "2014-08-05T10:02:56 -07:00",
                  "latitude": 1.991083,
                  "longitude": -20.899389,
                  "tags": [
                    "ea",
                    "Lorem",
                    "sit",
                    "commodo",
                    "nisi",
                    "proident",
                    "labore"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Herrera Cohen"
                    },
                    {
                      "id": 1,
                      "name": "Bradshaw Avery"
                    },
                    {
                      "id": 2,
                      "name": "Della Lott"
                    }
                  ],
                  "greeting": "Hello, Dudley Wallace! You have 6 unread messages.",
                  "favoriteFruit": "apple"
                },
                {
                  "_id": "5b9aa2df4d153274a7af6790",
                  "index": 4,
                  "guid": "78caff90-02f4-47ce-a0a8-2fedc12aa9fd",
                  "isActive": false,
                  "balance": "$3,245.04",
                  "picture": "http://placehold.it/32x32",
                  "age": 36,
                  "eyeColor": "blue",
                  "name": "Aurora Hines",
                  "gender": "female",
                  "company": "VORTEXACO",
                  "email": "aurorahines@vortexaco.com",
                  "phone": "+1 (978) 473-3574",
                  "address": "346 Locust Avenue, Golconda, Kentucky, 467",
                  "about": "Nulla id eu nulla do labore culpa nulla aliqua sit aute laboris pariatur. Occaecat laborum proident et irure do dolor magna est. Excepteur cillum elit culpa eu cillum reprehenderit sunt ea ut qui.\r\n",
                  "registered": "2014-07-24T02:20:07 -07:00",
                  "latitude": -21.36826,
                  "longitude": -175.230787,
                  "tags": [
                    "eiusmod",
                    "fugiat",
                    "proident",
                    "voluptate",
                    "anim",
                    "deserunt",
                    "in"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Debora Byers"
                    },
                    {
                      "id": 1,
                      "name": "Jordan Ryan"
                    },
                    {
                      "id": 2,
                      "name": "Vance Pittman"
                    }
                  ],
                  "greeting": "Hello, Aurora Hines! You have 6 unread messages.",
                  "favoriteFruit": "apple"
                },
                {
                  "_id": "5b9aa2df35eec54a14430c7f",
                  "index": 5,
                  "guid": "c4ca5141-994e-4871-97b8-7a2d48d31ca2",
                  "isActive": true,
                  "balance": "$1,294.32",
                  "picture": "http://placehold.it/32x32",
                  "age": 25,
                  "eyeColor": "brown",
                  "name": "Angeline Garrett",
                  "gender": "female",
                  "company": "OMNIGOG",
                  "email": "angelinegarrett@omnigog.com",
                  "phone": "+1 (866) 438-2817",
                  "address": "660 Tapscott Avenue, Trona, Iowa, 1406",
                  "about": "Consectetur minim non cillum aliqua culpa reprehenderit ullamco commodo. Esse nisi Lorem ut elit ullamco. Minim officia id ad mollit laborum laboris non ea. Excepteur minim est nulla nostrud officia proident quis. Commodo laboris laboris incididunt velit Lorem consequat magna. Quis culpa ut duis cillum sunt.\r\n",
                  "registered": "2014-03-01T09:07:42 -07:00",
                  "latitude": 44.821521,
                  "longitude": 2.527227,
                  "tags": [
                    "pariatur",
                    "voluptate",
                    "eu",
                    "ut",
                    "ullamco",
                    "laborum",
                    "aute"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Gloria Burgess"
                    },
                    {
                      "id": 1,
                      "name": "Tracie Trujillo"
                    },
                    {
                      "id": 2,
                      "name": "Alisa Hess"
                    }
                  ],
                  "greeting": "Hello, Angeline Garrett! You have 2 unread messages.",
                  "favoriteFruit": "strawberry"
                },
                {
                  "_id": "5b9aa2df80a1e7ddb752acd1",
                  "index": 6,
                  "guid": "9e0b1866-6e4c-4233-aabc-cbb19ff93a2a",
                  "isActive": false,
                  "balance": "$1,272.60",
                  "picture": "http://placehold.it/32x32",
                  "age": 22,
                  "eyeColor": "brown",
                  "name": "Betsy Spence",
                  "gender": "female",
                  "company": "BRAINCLIP",
                  "email": "betsyspence@brainclip.com",
                  "phone": "+1 (877) 458-3449",
                  "address": "642 Beaver Street, Shelby, Kansas, 5725",
                  "about": "Mollit sint duis do dolore in do tempor ad commodo sunt id. Deserunt proident labore in voluptate nostrud. Duis ullamco laborum sint pariatur ut amet labore et aute quis. Ea enim dolor aliqua commodo amet. Duis voluptate eu ut adipisicing culpa reprehenderit.\r\n",
                  "registered": "2014-06-28T04:59:29 -07:00",
                  "latitude": 23.864051,
                  "longitude": -134.759475,
                  "tags": [
                    "et",
                    "voluptate",
                    "elit",
                    "laboris",
                    "pariatur",
                    "in",
                    "aute"
                  ],
                  "friends": [
                    {
                      "id": 0,
                      "name": "Slater Yang"
                    },
                    {
                      "id": 1,
                      "name": "Heath Carr"
                    },
                    {
                      "id": 2,
                      "name": "Larsen Haney"
                    }
                  ],
                  "greeting": "Hello, Betsy Spence! You have 7 unread messages.",
                  "favoriteFruit": "apple"
                }
              ]
  // ADD
  $scope.staffAdd = function(){
    $scope.staffs.push({
      "_id": '',
      "index": 0,
      "guid": '',
      "isActive": true,
      "balance": '',
      "picture": '',
      "age": '',
      "eyeColor": '',
      "name": $scope.sName,
      "gender": $scope.sGender,
      "company": '',
      "email": $scope.sGmail,
      "phone": '',
      "address": '',
      "about": '',
      "registered": '',
      "latitude": '',
      "longitude": '',
      "tags": [
      ],
      "friends": [
      ],
      "greeting": '',
      "favoriteFruit": ''
    })

    $scope.sName = "";
    $scope.sGender = "";
    $scope.sGmail = "";

  }
  // DEL   
  $scope.staffDel = function(item){
    //tim vi tri item
    vitri = $scope.staffs.indexOf(item);
    // xoa time = vitri splice
    $scope.staffs.splice(vitri,1);
  }   
});
    