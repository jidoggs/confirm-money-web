import PageIntro from "../components/PageIntro";
import ConfamGrid from "../components/HowComfamMoneyWorks/ConfamGrid";
const HowComfamMoneyWorks = () => {
  return (
    <div className="mb-[7.333rem] md:mb-[4.938rem]">
      <PageIntro
        pageTitle
        title="How Confam Money Works"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      />

      <ConfamGrid />
    </div>
  );
};

export default HowComfamMoneyWorks;
