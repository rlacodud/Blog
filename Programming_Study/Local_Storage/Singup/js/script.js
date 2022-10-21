// 게시물 목록을 담을 boardBody
const boardBody = document.querySelector('#board-body');
// 게시물 내용을 담을 contentsContainer
const contentsContainer = document.querySelector('.contents_container');
// 제목과 내용을 입력하는 editor-form
const editorForm = document.querySelector('#editor-form');
const titleInput = document.querySelector('#editor-title-input');
const contentInput = document.querySelector('#editor-content-input');

// key값
const BoardList = 'boardLists';
// value값
const BoardListsObj = [];
// index
let num = 0;
// 저자
let author = 'Chaeng';
// 작성 일시
let date = new Date();
// 조회수 - 랜덤값 부여
let views = Math.floor(Math.random() * 99) + 1;

// 작성 버튼 클릭 시 실행
function onEditorFormSubmit(e) {
  // 이벤트 방지
  e.preventDefault();

  // titleInput에 입력된 값을 찾아와 title에 대입
  const title = titleInput.value;
  // contentInput에 입력된 값을 찾아와 content에 대입
  const content = contentInput.value;

  // 로컬스토리지 BoardList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(BoardList));
  // 만약 lists가 false면(=비어있다면)
  if (!lists) {
    // objArr라는 빈 배열을 생성하여
    const objArr = [];
    // 값 대입
    objArr.push({
      // 1씩 증가
      num: `${num++}`,
      // 제목에 입력된 값
      title: `${title}`,
      // 기본 저자
      author: `${author}`,
      // 년.월.일 형태로 변형
      date: `${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()}.`,
      // 조회수+1
      views: `${views++}`,
      // 내용에 입력된 값
      content: `${content}`,
    });

    // 생성된 배열의 내용을 BoardList(key)에 json 형태의 데이터로 저장
    localStorage.setItem(BoardList, JSON.stringify(objArr));
  // 한번 lists가 생성되어 데이터가 저장된 후
  } else {
    // lists에 입력된 값들 대입
    lists.push({
      num: `${num++}`,
      title: `${title}`,
      author: `${author}`,
      date: `${date.getFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()}.`,
      views: `${views++}`,
      content: `${content}`,
    });

    // 생성된 배열의 내용을 BoardList(key)에 json 형태의 데이터로 저장
    localStorage.setItem(BoardList, JSON.stringify(lists));
  }

  // input값 초기화
  titleInput.value = '';
  contentInput.value = '';
  // 찾아보기
  window.location.reload();
}

// 게시물 제목 클릭 시 실행
function onTitleClick(e) {
  // contentsContainer의 내용 초기화
  contentsContainer.textContent = ''
  // 로컬스토리지 BoardList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(BoardList));
  console.log(e.target.parentNode)
  // 해당 타이틀의 a 링크의 id값을 받아와 정규표현식을 통해 index 숫자만으로 replace하여 index에 대입
  const index = e.target.parentNode.id.replace(/[a-z|-]/gi, '');

  // 게시글의 Header
  const contentsHeader = document.createElement('div');
  contentsHeader.classList.add('contents_Header');
  // 게시글의 Header Title
  const contentsHeaderTitle = document.createElement('div');
  contentsHeaderTitle.classList.add('contents_title');
  // 게시글의 제목
  const contentsTitle = document.createElement('div');
  // 받아온 데이터 중 클릭한(해당하는) 데이터의 title을 받아와 입력
  contentsTitle.textContent = lists[index].title;

  // contents_Header > column >author, date, views
  const contentsHeaderInfo = document.createElement('div');
  contentsHeaderInfo.classList.add('contents_header-info');
  // 게시글의 저자
  const contentsAuthor = document.createElement('div');
  contentsAuthor.classList.add('contents_author');
  // 받아온 데이터 중 클릭한(해당하는) 데이터의 author를 받아와 입력
  contentsAuthor.textContent = lists[index].author;
  // 게시글의 게시 일시
  const contentsDate = document.createElement('div');
  contentsDate.classList.add('contents_date');
  // 받아온 데이터 중 클릭한(해당하는) 데이터의 date를 받아와 입력
  contentsDate.textContent = lists[index].date;
  // 게시글의 조회수
  const contentsViews = document.createElement('div');
  contentsViews.classList.add('contents_views');
  // 받아온 데이터 중 클릭한(해당하는) 데이터의 views를 받아와 입력
  contentsViews.textContent = lists[index].views;
  // 게시글의 내용
  const contentsContent = document.createElement('div');
  contentsContent.classList.add('contents_content');
  // 받아온 데이터 중 클릭한(해당하는) 데이터의 content를 받아와 입력
  contentsContent.textContent = lists[index].content;

  // contentsHeaderTitle의 자식으로 contentsTitle 삽입
  contentsHeaderTitle.appendChild(contentsTitle);
  // contentsHeaderInfo의 자식으로 저자, 작성일, 조회수 삽입
  contentsHeaderInfo.appendChild(contentsAuthor);
  contentsHeaderInfo.appendChild(contentsDate);
  contentsHeaderInfo.appendChild(contentsViews);

  // contentsHeader의 자식으로 contentsHeaderTitle과 contentsHeaderInfo 삽입
  contentsHeader.appendChild(contentsHeaderTitle);
  contentsHeader.appendChild(contentsHeaderInfo);

  // contentsContainer의 자식으로 contentsHeader와 contentsContent 삽입
  contentsContainer.appendChild(contentsHeader);
  contentsContainer.appendChild(contentsContent);
}

// load 시 실행
function assignIndex() {
  // 로컬스토리지 BoardList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(BoardList));
  // lists가 false이면(비어있으면)
  if (!lists) {
    // num 0으로 대입
    num = 0;
  // 한번 lists가 생성되어 데이터가 저장된 후
  } else {
    // index값으로 계산해야 하므로 총 list의 길이 -1 을 한 index의 numb값을 받아와 int로 변형 후 +1하여 num에 대입
    console.log(lists[lists.length - 1].num);
    num = parseInt(lists[lists.length - 1].num) + 1;
  }
}

// load 시 실행
function showBoardLists() {
  // 로컬스토리지 BoardList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(BoardList));

  lists.forEach((list, index) => {
    // index가 10보다 작은 경우
    if (index < 10) {
      // 각 게시물 콘텐츠를 담을 boardContent
      const boardContent = document.createElement('li');
      boardContent.classList.add('board_content');

      // index
      const contentNum = document.createElement('div');
      contentNum.classList.add('contentNum');
      // 해당 콘텐츠의 index 입력
      contentNum.textContent = list.num;
      // 클릭 시 내용을 보여주는 aTitle
      const aTitle = document.createElement('a');
      aTitle.href = '#';
      aTitle.id = `link-to-content${index}`;
      // 제목
      const contentTitle = document.createElement('div');
      contentTitle.classList.add('contentTitle');
      // 해당 콘텐츠의 제목 입력
      contentTitle.textContent = list.title;
      // aTitle의 자식으로 contentTitle 삽입
      aTitle.appendChild(contentTitle);
      // 작성자
      const contentAuthor = document.createElement('div');
      contentAuthor.classList.add('contentAuthor');
      // 해당 콘텐츠의 작성자 입력
      contentAuthor.textContent = list.author;
      // 작성일
      const contentDate = document.createElement('div');
      contentDate.classList.add('contentDate');
      // 해당 콘텐츠의 작성일 입력
      contentDate.textContent = list.date;
      // 조회수
      const contentViews = document.createElement('div');
      contentViews.classList.add('contentViews');
      // 해당 콘텐츠의 조회수 입력
      contentViews.textContent = list.views;

      // 각 boardContent의 자식으로 콘텐츠 내용 삽입
      boardContent.appendChild(contentNum);
      boardContent.appendChild(aTitle);
      boardContent.appendChild(contentAuthor);
      boardContent.appendChild(contentDate);
      boardContent.appendChild(contentViews);

      // boardBody의 자식으로 boardContent(ul) 삽입
      boardBody.appendChild(boardContent);

      // linkToContent 요소를 찾아
      const linkToContent = document.querySelector(
        `#link-to-content${index}`
      );
      // linkToContent가 클릭되었을 때 onTitleClick 실행
      linkToContent.addEventListener('click', onTitleClick);
    // 10일 때
    } else if (index === 10) {
      // 콘텐츠의 길이를 10로 나눈 뒤 이를 반올림하여 제한값으로 지정
      const boardIndexMax = Math.ceil(lists.length / 10);
      for (let i = 0; i < boardIndexMax; i++) {
        // indexContainer를 찾고
        const indexContainer = document.querySelector('#index-container');
        // a tag로 aIndex 생성
        const aIndex = document.createElement('a');
        aIndex.classList.add('board_index-link');
        // span tag로 spanIndexText 생성
        const spanIndexText = document.createElement('span');
        spanIndexText.classList.add('board_index');
        // board index값 입력
        spanIndexText.textContent = i + 1;
        // aIndex의 자식으로 spanIndexText 삽입
        aIndex.appendChild(spanIndexText);
        // indexContainer의 자식으로 aIndex 삽입
        indexContainer.appendChild(aIndex);
        
        // aIndex 클릭 시
        aIndex.addEventListener('click', () => {
          // showBoardListsNewPage 실행
          showBoardListsNewPage(i);
        });
      }
    }
  });
}

// aIndex 클릭 시 새 보드리스트를 보여줌 | pageIndex == i
function showBoardListsNewPage(pageIndex) {
  // boardBody 내용 초기화
  boardBody.textContent = '';
  // 로컬스토리지 BoardList에 저장되어있는 값을 불러와 json형태로 변형 후 lists에 대입
  const lists = JSON.parse(localStorage.getItem(BoardList));
  // 페이지 한계값으로 현재 선택한 index * 10까지만 보이도록
  // ex) 2*10 => 20번째 게시물까지만 보이게
  const limitPage = pageIndex * 10;

  lists.forEach((list, index) => {
    // 게시물 번호가 limitPage보다 크거나 같고(20번째부터 시작하기 때문) limitPage + 10보단 작을 때
    if (index >= limitPage && index < limitPage + 10) {
      // 각 게시물 콘텐츠를 담을 boardContent
      const boardContent = document.createElement('li');
      boardContent.classList.add('board_content');

      // index
      const contentNum = document.createElement('div');
      contentNum.classList.add('contentNum');
      // 해당 콘텐츠의 index 입력
      contentNum.textContent = list.num;
      // 클릭 시 내용을 보여주는 aTitle
      const aTitle = document.createElement('a');
      aTitle.href = '#';
      aTitle.id = `link-to-content${index}`;
      // 제목
      const contentTitle = document.createElement('div');
      contentTitle.classList.add('contentTitle');
      // 해당 콘텐츠의 제목 입력
      contentTitle.textContent = list.title;
      // aTitle의 자식으로 contentTitle 삽입
      aTitle.appendChild(contentTitle);
      // 작성자
      const contentAuthor = document.createElement('div');
      contentAuthor.classList.add('contentAuthor');
      // 해당 콘텐츠의 작성자 입력
      contentAuthor.textContent = list.author;
      // 작성일
      const contentDate = document.createElement('div');
      contentDate.classList.add('contentDate');
      // 해당 콘텐츠의 작성일 입력
      contentDate.textContent = list.date;
      // 조회수
      const contentViews = document.createElement('div');
      contentViews.classList.add('contentViews');
      // 해당 콘텐츠의 조회수 입력
      contentViews.textContent = list.views;

      // 각 boardContent의 자식으로 콘텐츠 내용 삽입
      boardContent.appendChild(contentNum);
      boardContent.appendChild(aTitle);
      boardContent.appendChild(contentAuthor);
      boardContent.appendChild(contentDate);
      boardContent.appendChild(contentViews);

      // boardBody의 자식으로 boardContent(ul) 삽입
      boardBody.appendChild(boardContent);

      // linkToContent 요소를 찾아
      const linkToContent = document.querySelector(
        `#link-to-content${index}`
      );
      // linkToContent가 클릭되었을 때 onTitleClick 실행
      linkToContent.addEventListener('click', onTitleClick);
    }
  });
}

// form이 제출되었을 때 onEditorFormSubmit 실행
editorForm.addEventListener('submit', onEditorFormSubmit);

// load 시 실행
if (boardBody) {
  assignIndex();
  showBoardLists();
}