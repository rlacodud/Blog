## __7. 예제 블로그__
### __(1) URL 구조 설정__
![wp_address][wp_address]

[wp_address]: ./img/wp_address.png "wp_address" 
#### [설정-고유주소] 메뉴는 사이트의 URL 구조를 설정하는 기능을 갖고 있다.
#### 일반적으로 사용하는 글 이름으로 설정한 뒤 하단에 변경사항 저장을 눌러 적용시키자.

<br>

### __(2) 블로그 테마 설치__
#### 테마를 설치하기 위해 [외모-테마] 메뉴를 클릭하면 상단에 [새로 추가] 버튼이 보인다.
#### 이를 클릭하면 WordPress.org에서 제공하는 무료 WordPress 테마를 선택할 수 있는 화면이 뜬다.
>#### __참고__
>#### 테마 설치 파일을 zip 파일 형태로 다운로드한 경우에는 상단의 [테마 업로드] 버튼을 클릭하며 테마 파일을 직접 업로드하여 설치할 수 있다.

<br>

#### 검색창에 `GeneratePress`를 검색하고 클릭하면 이 테마가 적용된 화면을 미리 볼 수 있는 화면으로 이동된다.
![wp_detail][wp_detail]

[wp_detail]: ./img/wp_detail.png "wp_detail" 
#### [설치] 버튼을 클릭하여 설치를 진행하고 완료되면 [활성화] 버튼으로 변경된다.
![wp_theme_activate][wp_theme_activate]

[wp_theme_activate]: ./img/wp_theme_activate.png "wp_theme_activate" 
#### 이 [활성화] 버튼을 클릭하면 테마가 이 테마로 바뀌는데 우리의 사이트를 새로고침해보면 방금 설치 및 활성화한 테마가 적용되어 있는 걸 확인할 수 있다.

<br>

### __(3) 블로그 테마 편집__
#### 테마를 편집하기 위해 [외모-사용자 정의하기] 메뉴로 들어간다.
![wp_edit][wp_edit]

[wp_edit]: ./img/wp_edit.png "wp_edit" 
#### __(3-1) 사이트 제목 변경__
#### 좌측 메뉴 중 사이트 아이덴티티를 누르고 사이트 제목을 입력할 수 있는 input이 보인다.
#### 여기에 원하는 사이트 제목을 입력하고 만약 부가적인 사이트 정보를 전달하고 싶으면 태그라인 내용을 수정해준 뒤 `Hide site tagline` 체크를 비활성화해주면 된다.

<br>

#### 만약 기존에 준비된 로고 또는 사이트 아이콘이 있다면 [로고 선택] | [사이트 아이콘 선택]을 클릭한 뒤 로고 이미지를 선택하여 적용시킬 수 있다.
#### 로고는 헤더에 보여지게 될 아이콘이며 사이트 아이콘은 브라우저 탭, 북마크 바, WordPress 모바일 앱에 표시되는 아이콘이다.

<br>

![wp_title][wp_title]

[wp_title]: ./img/wp_title.png "wp_title" 

<br>

#### __(3-2) Colors__
#### 위와 같이 설정이 완료되었다면 뒤로가기 버튼을 클릭하고 [Colors] 메뉴를 클릭한다.
#### 보면 사이트에 적용된 색상을 부분멸로 확인할 수 있는데 우선 부분별로 어디를 의미하는지 알아보자.

<br>

>#### __- Body__
>![wp_body][wp_body]

[wp_body]: ./img/wp_body.png "wp_body" 
>#### `Body`는 사이트의 `Header`와 `Footer`를 제외한 전체 영역을 의미한다.

<br>

>#### __- Header__
>![wp_header][wp_header]

[wp_header]: ./img/wp_header.png "wp_header" 
>#### `Header`는 상단에 위치한 부분을 의미한다.

<br>

>#### __- Primary Navigation__
>#### 현재 화면상에 설정되어 있지 않지만 `Header` 영역 우측에 포함되어 있는 내비게이션을 의미한다.

<br>

>#### __- Buttons__
>####  `Button` 또한 현재 설정되어 있지 않지만 말 그대로 `Button` 색상을 지정할 수 있다.

<br>

>#### __- Content__
>![wp_content][wp_content]

[wp_content]: ./img/wp_content.png "wp_content" 
>#### `Content`는 글 콘텐츠 영역을 의미하며
>![wp_content2][wp_content2]

[wp_content2]: ./img/wp_content2.png "wp_content2" 
>#### 글을 클릭했을 때 나오게 되는 부분 또한 `Content`에 속한다.

<br>

>#### __- Forms__
>![wp_forms][wp_forms]

[wp_forms]: ./img/wp_forms.png "wp_forms" 
>#### `Forms`는 검색 기능과 같이 입력할 수 있는 부분을 의미한다.

<br>

>#### __- Sidebar Widgets__
>![wp_sidebarWidgets][wp_sidebarWidgets]

[wp_sidebarWidgets]: ./img/wp_sidebarWidgets.png "wp_sidebarWidgets" 
>#### `Sidebar Widgets`은 sidebar 부분에 나온 widget들을 의미한다.

<br>

>#### __- Footer Widgets__
>![wp_footerWidgets][wp_footerWidgets]

[wp_footerWidgets]: ./img/wp_footerWidgets.png "wp_footerWidgets"
>#### `Footer Widgets`도 현재 설정되어 있지 않지만 추후에 `Footer` 부분에 widget을 추가할 경우 이에 대한 설정을 하는 부분이다.

<br>

>#### __- Footer Bar__
>![wp_footerBar][wp_footerBar]

[wp_footerBar]: ./img/wp_footerBar.png "wp_footerBar"
>#### `Footer Bar`는 가장 하단 부분을 의미한다.

<br>

#### 이렇게 각 영역에 대해 알아봤고 이제 본인이 원하는 스타일대로 색상들을 하나하나 변경해보자.

<br>

#### __(3-3) Typography__
#### 메뉴를 보면 `Font Manager`와 `Typography Manager` 설정이 가능한데
>![wp_fontManager][wp_fontManager]

[wp_fontManager]: ./img/wp_fontManager.png "wp_fontManager"
#### `Font Manager`의 [Add Font]를 클릭하여 본인이 원하는 Font를 선택하면 글자 스타일을 편집할 때 추가되어있는 Font들을 적용할 수 있게 된다.
#### 만약 Font를 사용하고 싶지 않다면 휴지통 메뉴를 클릭하면 간단히 삭제된다.

<br>

#### `Typography Manager`는 사이트에서 글자 스타일을 편집하기 원하는 부분을 추가해서 부분별로 원하는 Font를 적용하여 편집할 수 있도록 제공한다.
#### [Add Typography]를 클릭하여 [Target Element]에 편집하기 원하는 부분을 선택하면 되는데 부분이 세부적으로 나뉘어져 있으므로 헷갈리는 부분에 대해 간략하게 짚고 넘어가겠다.
>#### __- Body__
>####  `Body`는 앞서 말했듯 전체 본문 영역을 의미하지만 다른 부분의 설정이 중복되며 실제로 적용되는 건 글의 본문 부분이다.
>#### __- Single Content Title(H1)__
>#### 글 제목 부분을 의미한다.
>#### __- Heading2(H2)__
>#### Heading2(H2)를 설정하면 Widget Titles 또한 변경된다.
>#### __- Archive Content Title(H2)__
>#### 사이트 메인 페이지에서 글 리스트 목록이 나올 때 각 글의 제목을 의미한다.

<br>

#### 이제 본인이 원하는대로 각 영역의 Font를 적용하고 스타일을 편집해보자.

<br>

#### __(3-4) 위젯__
#### 뒤로가서 [위젯] 메뉴로 들어와보면 현재 적용되어 있는 Right Sidebar가 보일 것이다.
![wp_rightSidebar][wp_rightSidebar]

[wp_rightSidebar]: ./img/wp_rightSidebar.png "wp_rightSidebar"
#### 검색창 설정 중 버튼에 대해 [버튼 위치-안쪽 버튼] / [아이콘이 있는 버튼 사용]으로 설정해준다.

<br>

#### 그리고 [최신 글] 부분의 제목을 [최근 글]로 변경하고 H2를 H3로 변경하자.
#### 이어서 글 밑에 나오는 댓글 부분은 불필요하다고 생각되어 제거를 진행한다.

<br>

![wp_plusWidget][wp_plusWidget]

[wp_plusWidget]: ./img/wp_plusWidget.png "wp_plusWidget"
#### 위젯 추가는 단순히 아래에 나와있는 [+] 버튼을 누르고 [모두 찾아보기] 버튼을 클릭해보면 해당 부분에 추가할 수 있는 모든 종류의 위젯에 대해 보여준다.
#### 우리는 위젯 중 카테고리를 추가할텐데 이렇게 하면 나중에 카테고리가 추가되었을 때 자동으로 우측 위젯 메뉴에 추가되게 된다.
![wp_categoryTitle][wp_categoryTitle]

[wp_categoryTitle]: ./img/wp_categoryTitle.png "wp_categoryTitle"
#### 카테고리 제목을 추가하려면 카테고리 위젯 위에 나오는 [+] 버튼을 클릭하고 [제목] 요소를 클릭하면 된다.
#### 제목을 [카테고리]로 변경하고 H2에서 H3로 변경하자.
#### 결과를 보면 카테고리 제목과 리스트가 블록으로 나뉘어져 있으므로 그룹화 진행을 하자.
![wp_group][wp_group]

[wp_group]: ./img/wp_group.gif "wp_group"
#### 두 블록을 드래그하여 한번에 잡고 [블록 형식 변경]에서 [그룹]메뉴를 누름으로써 그룹화를 시킨다.
#### 그럼 카테고리 제목과 리스트가 하나의 블록으로 묶인 걸 확인할 수 있다.

<br>

#### 이번엔 이미지를 위젯으로 추가해볼텐데 [+] 버튼을 누르고 [이미지] 요소를 선택한다.
#### 그 후 [미디어 라이브러리] 메뉴에 원하는 이미지를 업로드한 뒤 추가할 수 있는데 추가하여 보면 우측 위젯에 추가된 걸 확인할 수 있다.
![wp_imageLink][wp_imageLink]

[wp_imageLink]: ./img/wp_imageLink.png "wp_imageLink"
#### 여기서 클릭 시 이동되도록 하고 싶은 주소가 있다면 이미지 메뉴 중 [링크 삽입] 메뉴를 클릭하고 원하는 주소를 입력하여 연결시켜줄 수 있다.
#### 이 방법은 이미지에 추가하는 방법이며 실제로 사이트에 광고를 추가할 때에는 위젯 추가 시 [사용자 정의 HTML]로 선택하여 광고 코드를 삽입하면 된다.

<br>

#### 이렇게 여러 위젯에 대해 알아봤고 변경한 사항들을 저장하고 적용시키고 싶다면 상단 [공개] 버튼을 클릭하면 된다.

<br>

### __(4) 글 작성하기__
#### 테마 편집이 어느정도 완료되었으니 이제 글을 작성해보기 위해 상단 [X]버튼을 클릭하여 테마 편집에서 나가보자.
>#### __글과 페이지의 차이점__
>#### WordPress에는 포스트(글)와 페이지로 콘텐츠를 만들 수 있다.
>#### 이 두가지는 비슷해보이지만 가장 큰 차이점으로 시간애 구애받는지 여부를 갖고 있다.
> ---
>#### __- 포스트__
>#### 티스토리 블로그나 네이버 블로그에서 작성하는 블로그 글과 유사하고 보통 최신 날짜를 기준으로 정렬되어 표시되며 카테고리와 태그를 가질 수 있다.
> ---
>#### __- 페이지__
>#### 시간애 구애받지 않고 정적이며 '회사 소개', '문의' 페이지와 같이 사이트에 항상 표시되는 콘텐츠는 포스트보다는 페이지를 사용하는 것이 더 적합하다.
>#### 또한 페이지는 계층적인 구조를 가질 수 있는데 한 페이지를 상위 페이지로, 다른 페이지를 하위 페이지로 지정이 가능하여 페이지를 그룹화할 수 있다.
>#### 이 경우, URL 구조에도 영향을 미치게 된다.

<br>

#### 글을 작성하기 위해 [글] 메뉴를 클릭한 뒤 상단 [새로 추가] 버튼을 클릭해보자.
![wp_newPost][wp_newPost]

[wp_newPost]: ./img/wp_newPost.png "wp_newPost"
#### 그럼 위와 같은 화면이 나오는데 각 항목에 내용을 입력하면 된다.

<br>

#### 여기서 만약 글의 부제목이나 이미지 등을 추가하고 싶다면 상단 [+] 버튼을 눌러 원하는 요소를 선택하면 된다.

#### 상단 [임시 글로 저장] 메뉴를 통해 저장을 해두고 우측 메뉴들을 좀 더 자세히 보자.
#### [글-고유주소]는 이 글을 발행할 때 등록될 이 글의 주소이며 원하는 주소명으로 변경 가능하다.
#### [글-특성이미지]는 이 글의 썸네일을 의미한다.

<br>

#### [공개]를 통해 글을 발행하고 사이트에 들어가보면 글이 게시되어 있는 것을 볼 수 있다.

<br>

### __(5) 메뉴 편집__
#### 메뉴를 편집하기 위해 [외모-메뉴]를 선택하고 새로운 메뉴를 추가하기 위해 메뉴 이름 입력창에 'Main Menu'라고 입력 후 [메뉴 생성] 버튼을 눌러 생성해보자.
![wp_menu][wp_menu]

[wp_menu]: ./img/wp_menu.png "wp_menu"
#### 그리고 [메뉴 추가] 항목에서 카테고리로 모든 카테고리를 선택하고 [메뉴에 추가]로 추가시켜준다.
#### 카테고리의 순서를 변경하려면 단순히 드래그로 원하는 순서로 배치하면 되고 [메뉴 설정] 중 [보이는 위치-Primary Menu]의 체크를 활성화함으로써 사이트의 상단 Header에 보여지도록 한다.
![wp_menu_active][wp_menu_active]

[wp_menu_active]: ./img/wp_menu_active.png "wp_menu_active"
#### 설정이 완료되면 [메뉴 저장]으로 설정을 저장하고 사이트를 새로고침하면 위와 같이 적용된 걸 확인할 수 있다.

<br>

#### 이렇게 간단한 블로그를 만들어보며 WordPress에 대해 대략적으로 알아봤다.
#### 이번에는 홈페이지를 만들어보며 페이지의 생성/수정/제거에 대해 알아보자.