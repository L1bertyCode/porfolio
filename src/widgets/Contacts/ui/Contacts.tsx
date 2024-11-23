import { Form } from "@/features/Form/Form";
import s from "./Contacts.module.css";
import { Text } from "@/shared/ui/Text/Text";
interface ContactsProps { };
export const Contacts = ({ }: ContactsProps) => {
  return (
    <div className={s.contacts}>
      <Text
        text={"For any questins"}
        header="h2"
      />
      <Form />
    </div>
  );
};