import { Form } from "@/features/Form/Form";
import s from "./Contacts.module.css";
interface ContactsProps { };
export const Contacts = ({ }: ContactsProps) => {
  return (
    <div className={s.contacts}>
      <h2>For any questins</h2>
      <Form />
    </div>
  );
};