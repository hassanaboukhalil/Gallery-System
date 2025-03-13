import Header from "../components/layout/Header";
import Section from "../components/layout/Section";
import Button from "../components/others/Button";

const Index = () => {
  return (
    <>
      <Header />
      <Section classes={"hero bg-white text-black"}>
        <h1 className="font-bold h1">
          <span className="text-primary">Golry</span> Is The Best Gallery System
          that You May Find
        </h1>
        <p className="body2">
          Manage your photos effortlessly with our secure and user-friendly
          gallery system. Upload update, and delete photos
        </p>
        <Button
          text={"Get Started"}
          path={"/Signup"}
          link_classes={"text-white"}
        />
      </Section>
    </>
  );
};
export default Index;
