import { IFaqDataItem, IFaqProps } from "../../../../utils/interfaces";
import FaqQuestion from "./FaqQuestion/FaqQustion";

function Faq(props: IFaqProps) {
  return (
    <section className="faq" id={"faq"}>
      <h1 className="faq__title">Часто задаваемые вопросы</h1>
      <p className="faq__subtitle">Ответы на ваши часто задаваемые вопросы</p>
      <div className="faq__content">
        <div className="faq__content-items">
          <div className="faq__questions-wrapper">
            <ul className="faq__questions">
              {props.questionsDataList.map(
                (questionData: IFaqDataItem, index: number) => {
                  return (
                    <FaqQuestion questionData={questionData} key={index} />
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
