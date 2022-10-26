// 이메일, 닉네임, 비밀번호, 비밀번호 확인을 입력하는 signup-form
const signupForm = document.querySelector('#signup-form');
const signup_emailInput = document.querySelector('#signup_email');
const signup_nicknameInput = document.querySelector('#signup_nickname');
const signup_passwordInput = document.querySelector('#signup_password');
const signup_passwordCheckInput = document.querySelector('#signup_password-check');

let signup_email = '';
let signup_nickname = '';
let signup_password = '';
let signup_passwordCheck = '';

// key값
const InfoList = 'InfoLists';
// value값
const InfoListsObj = [];

// 회원가입 버튼 클릭 시 실행
function onSignupSubmit(e) {
  // 이벤트 방지
  e.preventDefault();

  // signup_emailInput에 입력된 값을 찾아와 signup_email에 대입
  signup_email = signup_emailInput.value;
  // signup_nicknameInput에 입력된 값을 찾아와 signup_nickname에 대입
  signup_nickname = signup_nicknameInput.value;
  // signup_passwordInput에 입력된 값을 찾아와 signup_password에 대입
  signup_password = signup_passwordInput.value;
  // signup_passwordCheckInput에 입력된 값을 찾아와 signup_passwordCheck에 대입
  signup_passwordCheck = signup_passwordCheckInput.value;

  // 로컬스토리지 InfoList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(InfoList));
  // 만약 lists가 false면(=비어있다면)
  if (!lists) {
    // objArr라는 빈 배열을 생성하여
    const objArr = [];
    // 값 대입
    objArr.push({
      // 이메일
      signup_email: `${signup_email}`,
      // 닉네임
      signup_nickname: `${signup_nickname}`,
      // 비밀번호
      signup_password: `${signup_password}`,
    });

    // 생성된 배열의 내용을 InfoList(key)에 json 형태의 데이터로 저장
    localStorage.setItem(InfoList, JSON.stringify(objArr));
    // 한번 lists가 생성되어 데이터가 저장된 후
  } else {
    // lists에 입력된 값들 대입
    lists.push({
      // 이메일
      signup_email: `${signup_email}`,
      // 닉네임
      signup_nickname: `${signup_nickname}`,
      // 비밀번호
      signup_password: `${signup_password}`,
    });

    // 생성된 배열의 내용을 InfoList(key)에 json 형태의 데이터로 저장
    localStorage.setItem(InfoList, JSON.stringify(lists));
  }

  if(!$('.error_signup_nickname').hasClass('off') && !$('.error_signup_password').hasClass('off')) {
    // input값 초기화
    signup_emailInput.value = '';
    signup_nicknameInput.value = '';
    signup_passwordInput.value = '';
    signup_passwordCheckInput.value = '';
    
    document.querySelector('.signup_complete').classList.add('on');
    document.querySelector('.signup_container').classList.add('off');
    document.querySelector('.login_container').classList.add('on');
  }
}

// 닉네임을 누를 때 실행
signup_nicknameInput.addEventListener('keyup', function () {
  // signup_nicknameInput에 입력된 값을 찾아와 signup_nickname에 대입
  signup_nickname = signup_nicknameInput.value;
  // 닉네임칸이 비어있지 않을 경우 에러창 off
  if(signup_nickname !== '') {
    document.querySelector('.error_signup_nickname').classList.add('off');
  } else {
    document.querySelector('.error_signup_nickname').classList.remove('off');
  }
});

// 비밀번호 일치 여부 확인 함수
function signup_passwordCheckFn() {
  if (signup_password !== signup_passwordCheck) {
    document.querySelector('.error_signup_password').classList.remove('off');
  } else {
    document.querySelector('.error_signup_password').classList.add('off');
  }
}

// 비밀번호를 누를 때 실행
signup_passwordInput.addEventListener('keyup', function () {
  // signup_passwordInput에 입력된 값을 찾아와 signup_password에 대입
  signup_password = signup_passwordInput.value;
  // signup_passwordCheckInput에 입력된 값을 찾아와 signup_passwordCheck에 대입
  signup_passwordCheck = signup_passwordCheckInput.value;

  signup_passwordCheckFn();
});

// 비밀번호 확인을 누를 때 실행
signup_passwordCheckInput.addEventListener('keyup', function () {
  // signup_passwordInput에 입력된 값을 찾아와 signup_password에 대입
  signup_password = signup_passwordInput.value;
  // signup_passwordCheckInput에 입력된 값을 찾아와 signup_passwordCheck에 대입
  signup_passwordCheck = signup_passwordCheckInput.value;

  signup_passwordCheckFn();
});

// form이 제출되었을 때 onSignupSubmit 실행
signupForm.addEventListener('submit', onSignupSubmit);

// 로그인=======================================================================================================
// 이메일, 비밀번호를 입력하는 login-form
const loginForm = document.querySelector('#login-form');
const login_emailInput = document.querySelector('#login_email');
const login_passwordInput = document.querySelector('#login_password');

let emailIndex = 0;
let index = 0;

// 로그인 버튼 클릭 시 실행
function onLoginSubmit(e) {
  // 이벤트 방지
  e.preventDefault();

  // login_emailInput에 입력된 값을 찾아와 login_email에 대입
  login_email = login_emailInput.value;
  // login_passwordInput에 입력된 값을 찾아와 login_password에 대입
  login_password = login_passwordInput.value;

    // input값 초기화
    signup_emailInput.value = '';
    signup_nicknameInput.value = '';

  // 로컬스토리지 InfoList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(InfoList));
  console.log(lists)
  // lists의 길이만큼 반복문을 돌림
  for(var i = 0; i <= lists.length; i++) {
    if(login_email === lists[i].signup_email) {
      // 해당 index 저장
      emailIndex = i;
      if(login_password === lists[emailIndex].signup_password) {
        index = emailIndex;

        document.querySelector('.login_container').classList.remove('on');
        // 환영 인사 페이지 on
        document.querySelector('.welcome_container').classList.add('on');
        document.querySelector('.welcome_container p .welcome_nickname').textContent = lists[emailIndex].signup_nickname;
      }
    }
  }
}

loginForm.addEventListener('submit', onLoginSubmit);