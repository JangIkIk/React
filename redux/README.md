- 내용참고: https://react.vlpt.us/redux/01-keywords.html
- 리덕스 개발자 도구: https://www.npmjs.com/package/@redux-devtools/extension?activeTab=readme
Ducks 패턴(리듀서와 액션관련코드를 하나의 파일에 작성)


# redux 키워드
액션생성함수(Action Creator): 액션을 만드는 함수

액션(action): 상태를 변화시키는 객체

리듀서(reducer): 현재의 상태와 새로운값을 받아 새로운 상태값을 반환하여 변화를 일으키는 함수, 두가지 파라미터를 받는다(state, action )

저장소(store): 현재의 앱상태와 리듀서가 들어가 있고, 추가적으로 몇가지 내장함수이며 하나의 저장소만 존재한다.

디스패치(dispatch): 스토어의 내장함수중 하나로 액션을 발생시키면, 스토어는 리듀서 함수를 실행시켜 해당액션을 참고하여 새로운 상태를 만든다.

구독(subscribe): 스토어의 내장함수중 하나로 함수 형태의 값을 파라미터로 받으며, subscribe함수에 특정함수를 전달하면 액션이 디스패치 되었을때마다 전달해준 함수가 호출된다.


# redux 3가지 규칙
1. 하나의 스토어만 존재해야 한다.
2. 상태는 읽기전용
3. 변화를 일으키는 함수, 리듀서는 순순함수 여야한다.


# 메서드 

## 1.redux 패키지

[getState]
애플리케이션의 현재 상태 트리를 반환하며,
저장소의 리듀서가 마지막으로 반환한 값과 동일

[dispatch]
액션을보내 상태변경을 일으키는 함수

[subscribe]
store의 상태를 감지하고, 상태가 변경될때 등록된 콜백함수를 호출하는 역할
* unsubscribe 함수를 다시호출하면 메모리상에서 구독을 해지한다.

## 2.react-redux 패키지

[useSelector]
Redux의 상태를 읽을수 있으며, 특정컴포넌트가 Redux의 상태를 구독하고,
상태가 변경될 때 해당 컴포넌트를 리렌더링 할 수 있다.

[useDispatch]
React에서 사용되는 메서드로 ContextAPI를 활용하여 Redux 스토어에 접근하므로 간단하게 접근이 가능, Redux에 직접 의존하지않음,


1. [counter.ts]
   액션타입, 액션생성함수를 통한 액션객체생성, 리듀서함수
2. [counter.tsx]
   props로 받아 렌더링할 프리젠테이셔널 컴포넌트

3. [CounterContainer.tsx]
   store의 counter.state를 불러온다.
   디스패치에 액션객체를 담아 변수에 할당.
   프리젠테이셔널 컴포넌트로 Props로전달


---- 할일목록 구현대기



