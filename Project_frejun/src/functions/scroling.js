const ITEM_HEIGHT = 85;

const onScroll = (event, setVisibleIndex) => {
  let num = 1;
  const offsetY = event.nativeEvent.contentOffset.y;
  const index = Math.floor(offsetY / ITEM_HEIGHT);
  if (index >= -1 && index <= 9) {
    setVisibleIndex(1);
  } else if (index >= 10 && index <= 19) {
    setVisibleIndex(2);
  } else if (index >= 20 && index <= 29) {
    setVisibleIndex(3);
  } else if (index >= 30 && index <= 39) {
    setVisibleIndex(4);
  } else if (index >= 40 && index <= 49) {
    setVisibleIndex(5);
  } else if (index >= 50 && index <= 59) {
    setVisibleIndex(6);
  } else if (index >= 60 && index <= 69) {
    setVisibleIndex(7);
  } else if (index >= 70 && index <= 79) {
    setVisibleIndex(8);
  } else if (index >= 80 && index <= 89) {
    setVisibleIndex(9);
  } else if (index >= 90 && index <= 99) {
    setVisibleIndex(10);
  }
};

export default onScroll;
