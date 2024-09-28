import q1 from '../assets/q1.png'
import q2 from '../assets/q2.png'
import q3 from '../assets/q3.png'
import q4 from '../assets/q4.png'
import q5 from '../assets/q5.png'
import q6 from '../assets/q6.png'
import q7 from '../assets/q7.png'
import q8 from '../assets/q8.png'
import q9 from '../assets/q9.png'
import q10 from '../assets/q10.png'
import q11 from '../assets/q11.png'
import q12 from '../assets/q12.png'
import q13 from '../assets/q13.png'
import q14 from '../assets/q14.png'
import q15 from '../assets/q15.png'
import q16 from '../assets/q16.png'
import q17 from '../assets/q17.png'
import q18 from '../assets/q18.png'
import q19 from '../assets/q19.png'
import q20 from '../assets/q20.png'


const quizzes = [
    {
        no: 1,
        question: `순서에 <span>맞게</span> 쓴 것을<br class="brMob"> 고르세요.`,
        questionImg: q1,
        options: ["A", "B"],
        correctAnswer: "A",
        gridType: 1
    },
    {
        no: 2,
        question: `순서에 <span>맞게</span> 쓴 것을<br class="brMob"> 고르세요.`,
        questionImg: q2,
        options: ["A", "B"],
        correctAnswer: "B",
        gridType: 1
    },
    {
        no: 3,
        question: `그림을 보고 빈칸에<br class="brMob"> <span>알맞은 말</span>을 고르세요.`,
        questionImg: q3,
        options: ["미", "중", "일", "국"],
        correctAnswer: "국",
        gridType: 1
    },
    {
        no: 4,
        question: `그림을 보고 빈칸에<br class="brMob"> <span>알맞은 말</span>을 고르세요.`,
        questionImg: q4,
        options: ["김", "치", "개", "게"],
        correctAnswer: "개",
        gridType: 1
    },
    {
        no: 5,
        question: `그림을 보고 <span>알맞은 단어</span>를 고르세요.`,
        questionImg: q5,
        options: ["치마", "바지", "셔츠", "재킷"],
        correctAnswer: "치마",
        gridType: 1
    },
    {
        no: 6,
        question: `그림을 보고 <span>알맞은 단어</span>를 고르세요.`,
        questionImg: q6,
        options: ["물", "주스", "녹차", "커피"],
        correctAnswer: "커피",
        gridType: 1
    },
    {
        no: 7,
        question: `그림을 보고 <span>알맞은 단어</span>를 고르세요.`,
        questionImg: q7,
        options: ["오이", "양파", "당근", "양상추"],
        correctAnswer: "양파",
        gridType: 1
    },
    {
        no: 8,
        question: `(<Fragment>&ensp;&ensp;&ensp;&ensp;&ensp;</Fragment>)에 들어갈 말로<br class="brPc"> 가장 <span>알맞은</span> 것을 고르십시오.`,
        questionImg: q8,
        options: ["시장", "공항", "병원", "회사"],
        correctAnswer: "회사",
        gridType: 1
    },
    {
        no: 9,
        question: `(<Fragment>&ensp;&ensp;&ensp;&ensp;&ensp;</Fragment>)에 들어갈 말로<br class="brPc"> 가장 <span>알맞은</span> 것을 고르십시오.`,
        questionImg: q9,
        options: ["극장", "은행", "학교", "공원"],
        correctAnswer: "극장",
        gridType: 1
    },
    {
        no: 10,
        question: `(<Fragment>&ensp;&ensp;&ensp;&ensp;&ensp;</Fragment>)에 들어갈 말로<br class="brPc"> 가장 <span>알맞은</span> 것을 고르십시오.`,
        questionImg: q10,
        options: ["아픕니다", "고픕니다", "덥습니다", "예쁩니다"],
        correctAnswer: "고픕니다",
        gridType: 1
    },
    {
        no: 11,
        question: `(<Fragment>&ensp;&ensp;&ensp;&ensp;&ensp;</Fragment>)에 들어갈 말로<br class="brPc"> 가장 <span>알맞은</span> 것을 고르십시오.`,
        questionImg: q11,
        options: ["뺐습니다", "입습니다", "썼습니다", "꼈습니다"],
        correctAnswer: "꼈습니다",
        gridType: 1
    },
    {
        no: 12,
        question: `(<Fragment>&ensp;&ensp;&ensp;&ensp;&ensp;</Fragment>)에 들어갈 말로<br class="brPc"> 가장 <span>알맞은</span> 것을 고르십시오.`,
        questionImg: q12,
        options: ["별로", "매우", "빨리", "아직"],
        correctAnswer: "매우",
        gridType: 1
    },
    {
        no: 13,
        question: `다음은 무엇에 대한<br class="brMob"> 내용입니까?`,
        questionImg: q13,
        options: ["나이", "직업", "취미", "약속"],
        correctAnswer: "직업",
        gridType: 1
    },
    {
        no: 14,
        question: `다음은 무엇에 대한<br class="brMob"> 내용입니까?`,
        questionImg: q14,
        options: ["학교", "서점", "도서관", "백화점"],
        correctAnswer: "도서관",
        gridType: 1
    },
    {
        no: 15,
        question: `다음은 무엇에 대한<br class="brMob"> 내용입니까?`,
        questionImg: q15,
        options: ["시간", "약속", "운동", "요일"],
        correctAnswer: "운동",
        gridType: 1
    },
    {
        no: 16,
        question: `다음을 읽고 이어지는 말을 고르십시오.`,
        questionImg: q16,
        options: ["네, 알겠습니다.", "네, 고맙습니다.", "네, 괜찮습니다.", "네, 처음 뵙겠습니다."],
        correctAnswer: "네, 처음 뵙겠습니다.",
        gridType: 2
    },
    {
        no: 17,
        question: `다음을 읽고 이어지는 말을 고르십시오.`,
        questionImg: q17,
        options: ["반갑습니다.", "실례합니다.", "잘 먹었습니다", "잘 먹겠습니다."],
        correctAnswer: "잘 먹겠습니다.",
        gridType: 2
    },
    {
        no: 18,
        question: `다음을 읽고 이어지는 말을 고르십시오.`,
        questionImg: q18,
        options: ["아니에요.", "고마워요.", "미안합니다.", "오랜만이에요."],
        correctAnswer: "아니에요.",
        gridType: 2
    },
    {
        no: 19,
        question: `다음을 읽고 물음에<br class="brMob"> <span>알맞은</span> 말을 고르세요.`,
        questionImg: q19,
        options: ["작년에 왔어요.", "작년에 올 거예요.", "내년에 왔어요.", "내년에 올 거예요."],
        correctAnswer: "작년에 왔어요.",
        gridType: 2
    },
    {
        no: 20,
        question: `다음을 읽고 물음에<br class="brMob"> <span>알맞은</span> 말을 고르세요.`,
        questionImg: q20,
        options: ["나중에 먹을 거예요.", "집에서 먹을 거예요.", "내년에 왔어요.", "친구하고 먹을 거예요."],
        correctAnswer: "집에서 먹을 거예요.",
        gridType: 2
    },
]

export default quizzes