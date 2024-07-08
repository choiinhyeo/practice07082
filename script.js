// 초기 성공 확률 설정 (1.0 = 100%)
let successProbability = 1.0;

// 감소할 확률 비율 설정
const decreaseRate = 0.05;

// 버튼 요소 가져오기
const playBtn = document.getElementById("playBtn");

// 결과를 출력할 p 요소 가져오기
const resultElement = document.getElementById("result");
const probabilityElement = document.getElementById("successProbability");

// 버튼 클릭 시 게임 진행
playBtn.addEventListener("click", function() {
    // 무작위 확률 생성 (0 이상 1 미만)
    const random = Math.random();

    // 성공 여부 결정
    if (random < successProbability) {
        // 성공
        resultElement.textContent = "성공! 폭탄을 피했습니다.";
        // 성공 확률 감소
        successProbability -= decreaseRate;
    } else {
        // 실패
        resultElement.textContent = "폭탄이 터졌습니다!";
        // 성공 확률 초기화
        successProbability = 1.0; // 실패 시 다시 초기 성공 확률로 설정
    }

    // 최소 성공 확률 제한 (0 이하로 떨어지지 않게)
    if (successProbability < 0) {
        successProbability = 0;
    }

    // 화면에 성공 확률 업데이트
    probabilityElement.textContent = `현재 성공 확률: ${(successProbability * 100).toFixed(2)}%`;
});
