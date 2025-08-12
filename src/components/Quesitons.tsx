import {useState} from "react";
type props = {
  question: string;
  answer: string;
};
export function Quesitons({ question, answer }: props) {
    const [isShowMore, setShowMore] = useState(false);
    const [isMinus, setMinus] = useState<null | string>("-");

    function handleClick(){
        if(isShowMore){
            setMinus("-");
        }
        else{
            setMinus("+");
        }
        setShowMore(!isShowMore);
        
    }
  return (
    <article className="question-section">
      <div className="question-header">
        <h4>{question}</h4>
        <button className="show-more" onClick={handleClick}>{isMinus}</button>
      </div>
      <p className={isShowMore ? "answerActive" : "inActive"}>{answer}</p>
    </article>
  );
}
