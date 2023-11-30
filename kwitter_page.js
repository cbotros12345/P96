//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBO3oFZnRAf6pRswPw38xLBP2Q6M6whHCs",
      authDomain: "kwitter-a3d0e.firebaseapp.com",
      databaseURL: "https://kwitter-a3d0e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3d0e",
      storageBucket: "kwitter-a3d0e.appspot.com",
      messagingSenderId: "558579545377",
      appId: "1:558579545377:web:3d720255fe1bab2da93a60"
    };
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
