## git
* version: 의미 있는 변경 후 완료된 상태
* add
    * 버전관리를 시작한다는 뜻
    * 너무 많은 소스 변화가 생겨 commit 타이밍이 놓쳤을 경우를 대비하여 add라는 과정을 추가
    * add를 통해 선택된 파일만 commit 할 수 있으며 이것을 커밋 대기 상태(stage area)라고 한
    * stage area: 커밋 대기인 파일 즉 add 된 영
    * repository: 커밋 완료된 파일
* commit
    * add 상태를 거친 파일만 기록

* git log 
    * 깃 변화 과정을 알 수 있다
        * git log -p : 소스변경 내용을 알려줌    
        * git log : 조회된 아이디를 확인 한 후 git diff 를 이용해 버전별 차이를 알 수 있다  
        * git diff 
            1. 파일 수정 후 add 작업 전 이전 버전과 차이를 보여준다
            2. git add를 하면 아무것도 나타나지 않는
    * git 과거로 되돌리기
        * reset
            a. git reset id --hard 를 입력하면 이전 단계로 돌려준
            b. 실제로 삭제된 것이 아니라 우리 눈에 안보여준다 즉 복구 가능
            c. reset은 저장소에 올리기 전 로컬에서만 사용하는걸 추
        * revert
            a. 되돌리는 것이 아니라 과거 버전으로 새로운 버전을 만들
                  
* 가장 많이 쓰는 명령어
    * |command|google results|persent|
      |------|--------|-------|      
      |commit|528,000|7.981980075|
      |push	|523,000|7.906393143|
      |pull	|506,000|7.649397572|
      |clone	|489,000	|7.392402002|
      |checkout|	470,000	|7.105171658|
      |add	|446,000	|6.742354382|
      |branch|	439,000	|6.636532676|
      |log	|388,000	|5.865545964|
      |diff	|369,000	|5.578315621|
      |fetch	|355,000	|5.36667221|
      |merge	|354,000	|5.351554823|
      |init	|343,000	|5.185263572|
      |status|	286,000	|4.323572541|
      |reset	|267,000	|4.036342197|
      |tag	|246,000	|3.718877081|
      |rebase|	203,000	|3.068829461|
      |rm	|142,000		|2.146668884|
      |show	|104,000	|1.572208197|
      * git mannual 보는 법
        * git 명령어(commit, log ...) --help 후 스크롤
* git 의 원리를 통해 배우는 점
    * 이해를 통한 기억력 증대
    * 무언가를 만드는거에 대해 git에 많은 영감을 얻을 수 있다
    * git add 원리
        * 파일 이름이 달라도 파일의 내용이 같으면 동일한 오브젝트를 가르킨다 즉 중복을 최소화한    
            * sha1 hash 값과 유사하다 즉 어느유저가 'hi'문자를 암호화 하여도 값은 같다 즉 같은 곳을 가르키고 있
    * git commit 원리
        * tree -> parent(이전 커밋) -> tree ->parent(반복)
                * 즉 commit 시점의 소스를 snapshot(사진을 찍었) 처럼 모든 정보를 가지고 있 
            * parent: 이전 commit 값으로 이전 commit의 파일이름과 파일 내용을 가지고 있
        * 첫번째 commit과 두번째 commit의 tree 값은 다름
    * git status 원리
        * 저장소(commit)와 index(add)와 로컬 파일 내용을 비교해서 결과 값을 표출
        * index(add)와 tree(commit) 관계 
            * ![index tree working directory 관계](./images/gitStatus.png)
        * working directory - index, staging area , cache - repository

* git branch                  
    * 주로 공통기능이 있고 고객사의 추가요구 사항을 개별로 추가할 때 주로 사  
    * git branch : 현재 브랜치를 나타낸다
    * git branch 브랜치명 : 브랜치 생성
    * git checkout 브랜치명 : 현재 브랜치에서 chekout 후 브랜치명으로 체크인
    * github 원격 branch 추가 및 Push
        * git push --set-upstream origin exp
    * 모든 branch 로그 차이를 보는법
        * git log 는 현재 branch에 로그를 보여줌
        * git log --branches --decorate
            * 나오는 결과의 head는 현재 우리가 있는 branch를 나타남
        * git log --branches --decorate --graph 
        * git log --branches --decorate --graph --oneline
        * branch master와 exp차이를 보여줌
            * git log -p master..exp (master엔 없고 exp에 있는것을 보여)
    * branch history
        * git log --branches --graph --decorate --oneline
            
            
* git stash
    * ![git stash ](./images/git-stash-stashing-changes.png)              
* upstream 
    * git 로컬과 연결 저장되어있는 원격 저장소를 말함    
    
* 원격저장소 원리
    * 원격저장소를 연결
        * git remote add origin 주소
    * 로컬과 지역저장소가 어떤 commit을 가르키는 지는 git config 폴더 안에 기록되어 있      
        * git log 명령어를 통해 알 수 있다
            * ex) 로컬과 원격저장소는 같은 커밋을 바라보고 있다(HEAD->master, origin/master)