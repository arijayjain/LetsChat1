
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCEdBTFqfudUi-EbTIa_j8JIOJi-sWwO2c",
      authDomain: "social-website-c574e.firebaseapp.com",
      projectId: "social-website-c574e",
      storageBucket: "social-website-c574e.appspot.com",
      messagingSenderId: "530694629411",
      appId: "1:530694629411:web:a439e3aaf5b0a5ba002996",
      measurementId: "G-F5MEGH520D"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
