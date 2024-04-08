import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';
import CalcProvider from './context/CaclContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button 
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
