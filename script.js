/**
 * 
 */
$().ready(function(){
	
const content = "저는 창의적이고 문제 해결에 열정적인 개발자로서,\n\n	항상 새로운 도전을 즐기며 성장하고자 노력합니다. 프로젝트를 통해 쌓은 경험과\n\n	팀원들과의 협업으로부터 배운 것들은 제게 항상 새로운 시각과 아이디어를 제공해주었습니다.\n\n 코드뿐만 아니라 소통과 협업의 중요성을 강조하며, 사용자 중심의 솔루션을 창출하는 데에 관심을 가지고 있습니다.\n\n	끊임없는 자기개발을 통해 최고의 결과물을 만들어내고, IT 산업의 미래를 함께 만들어나가고 싶습니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    i++;
    }
}
setInterval(typing, 40)
})