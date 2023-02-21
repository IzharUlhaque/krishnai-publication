let videos = document.querySelectorAll('video');
let closeButtons = document.querySelectorAll('.btn-close');

closeButtons.forEach(function(btn, i){
	btn.addEventListener('click', function(e){
		videos[i].pause();
	})
})

// ======================updated
let user = {
		username:'admin',
		password:'8975741028'
	};


let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#authenticate')
let loginWIndow = document.querySelector('#loginWIndow');
let mainWindow =  document.querySelector('#mainWindow');

loginBtn.addEventListener('click', function(e){
	e.preventDefault();

	if(username.value === user.username){
		if(password.value === user.password ){
			// console.log('login success')
			window.location = './assets/class.html'
		}else{
			alert('Incorrect password!')
		}
	}else{
		alert('Incorrect username!')
	}

});
