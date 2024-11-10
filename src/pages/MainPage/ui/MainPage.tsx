import { Banner } from "@/widgets/Banner";
import { Contacts } from "@/widgets/Contacts";
import { ProjectsList } from "@/widgets/Projects";
import { Stack } from "@/widgets/Stack";

const MainPage = () => {
  return (
    <>
      <Banner />
      <Stack />
      <ProjectsList />
      <Contacts />
    </>
  );
};

export default MainPage;