/**
 * 
 */
//google section
var auth2 = {};
var helper = (function() {
  return {
    /**
     * Hides the sign in button and starts the post-authorization operations.
     *
     * @param {Object} authResult An Object which contains the access token and
     *   other authentication information.
     */
    onSignInCallback: function(authResult) {
      $('#authResult').html('Auth Result:<br/>');
      for (var field in authResult) {
        $('#authResult').append(' ' + field + ': ' +
            authResult[field] + '<br/>');
      }
      if (authResult.isSignedIn.get()) {
    	  helper.profile();
    	  profile.style.display = 'block';
  		  myBtn.style.display ='none';
  		  modal.style.display='none';
  		  fbname.style.display='none';
  		  fbphoto.style.display='none';
	    

      } else {
          if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {          
          }
          	
      }
    },

    /**
     * Calls the OAuth2 endpoint to disconnect the app for the user.
     */
    disconnect: function() {
      // Revoke the access token.
      auth2.disconnect();
    },
    
    ggsignout: function(){
    	   auth2.disconnect();
    	document.location.reload();
    },
    /**
     * Gets and renders the currently signed in user's profile data.
     */
    profile: function(){
      gapi.client.plus.people.get({
        'userId': 'me'
      }).then(function(res) {
        var profile = res.result;
        $('#profile').empty();
    
         $('#profile').append(
                $('<li class="ggphoto"><img style="border-radius:100%" src=\"' + profile.image.url + '\"></li>').addClass('scale-to-small'));
       
        $('#profile').after(
           $('<li class="ggname dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">' + profile.displayName +
        		   '<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Manage</a></li><li><a href="#" onclick="helper.ggsignout();">Sign Out</a></li> </ul></li></li>' ));
        
      }, function(err) {
        var error = err.result;
        $('#profile').empty();
        $('#profile').append(error.message);
      });
    }
  };
})();

/**
 * Handler for when the sign-in state changes.
 *
 * @param {boolean} isSignedIn The new signed in state.
 */
var updateSignIn = function() {
 
  if (auth2.isSignedIn.get()) {
	  
    helper.onSignInCallback(gapi.auth2.getAuthInstance());
  }else{

    helper.onSignInCallback(gapi.auth2.getAuthInstance());
  }
}

/**
 * This method sets up the sign-in listener after the client library loads.
 */
function startApp() {
  gapi.load('auth2', function() {
    gapi.client.load('plus','v1').then(function() {
      gapi.signin2.render('signin-button', {
          scope: 'https://www.googleapis.com/auth/plus.login',
          fetch_basic_profile: true,
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark'       
          });
      gapi.auth2.init({fetch_basic_profile: false,
          scope:'https://www.googleapis.com/auth/plus.login'}).then(
            function (){
              auth2 = gapi.auth2.getAuthInstance();
              auth2.isSignedIn.listen(updateSignIn);
              auth2.then(updateSignIn);
            });
    });
  });
}


//facebook section
function statusChangeCallback(response) {
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status == 'connected') {
      // Logged into your app and Facebook.
      showProfile();
    } 
    else {
    
      		
    	//do nothing
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
function fbLogout() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            	FB.logout(function(response) {
            	statusChangeCallback(response);	
                document.location.reload();
            });
        }
    });
}

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '556420511197612',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.6' // use graph api version 2.6
  });
  FB.Event.subscribe('auth.login', function() {
	  checkLoginState();
	  	
 });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  
  
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function showProfile() {
	  	profile.style.display='none';
  		myBtn.style.display ="none";
  		myModal.style.display="none";
  		fbname.style.display="block";
  		fbphoto.style.display="block";
      FB.api('/me',{fields: "id,name,picture"}, function(response) {
      document.getElementById('fbname').innerHTML ='<a class="fbname dropdown-toggle" data-toggle="dropdown" href="#">' + response.name + '<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Manage</a></li><li onClick="fbLogout();" ><a href >Sign Out</a></li> </ul>';
      document.getElementById('fbphoto').innerHTML = '<li class="fbphoto"><img style=" margin-top:8px; margin-left:8px; border-radius:100%" src="http://graph.facebook.com/' + response.id + '/picture?width=25&height=25" /></li>';	
    });
 
  }
