var firebaseConfig = {
      apiKey: "AIzaSyD1B21IiGnamSbyT9HnDOIiZfG1hRfgMmw",
      authDomain: "kwitter-70011.firebaseapp.com",
      projectId: "kwitter-70011",
      storageBucket: "kwitter-70011.appspot.com",
      messagingSenderId: "910767866687",
      appId: "1:910767866687:web:76d772865f27e5c804098a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    User_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+User_name+" !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
