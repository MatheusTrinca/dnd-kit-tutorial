import MyCard from "./my-card";
import MyCardContainer from "./my-card-container";

export default function BasicDragDrop() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <MyCard className="absolute top-5 left-5 cursor-grab">ID 1</MyCard>
      <MyCardContainer className="absolute top-20 right-20"></MyCardContainer>
    </div>
  );
}
