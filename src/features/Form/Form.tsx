import s from "./Form.module.css";
interface FormProps { };
export const Form = ({ }: FormProps) => {
  return (
    <form className={s.form} action="#" method="">
      <input type="text" placeholder="Name" />
      <div className={s.contacts}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>
      <textarea name="" id=""></textarea>
      <input type="button" value="Send" />
    </form>
  );
};