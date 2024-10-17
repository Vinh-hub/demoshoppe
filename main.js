   var modal = document.getElementById('js-modal');
    var signUpSection = document.getElementById('signUpSection');
    var loginSection = document.getElementById('loginSection');

    function openModal(sectionToShow) {
        modal.style.display = 'flex'; 
        signUpSection.style.display = 'none'; 
        loginSection.style.display = 'none'; 
        
        if (sectionToShow === 'signUp') {
            signUpSection.style.display = 'block';
        } else if (sectionToShow === 'login') {
            loginSection.style.display = 'block';
        }
    }

    function closeModal() {
        modal.style.display = 'none'; 
    }

    modal.querySelector('.modal__overlay').addEventListener('click', closeModal);

    var btnSignUps = document.querySelectorAll('.showSignUp')
    for (const btnSignUp of btnSignUps){
        btnSignUp.addEventListener('click', function() {
            openModal('signUp');
        })
    }
    // document.querySelector('.showSignUp').addEventListener('click', function() {
    //     openModal('signUp');
    // });

    var btnLogins = document.querySelectorAll('.showLogin')
    for (const btnLogin of btnLogins){
        btnLogin.addEventListener('click', function() {
            openModal('login');
        })
    }
    // document.querySelector('.showLogin').addEventListener('click', function() {
    //     openModal('login');
    // });




