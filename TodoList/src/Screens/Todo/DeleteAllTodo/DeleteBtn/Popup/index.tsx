import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Styled from 'styled-components/native';

const StyledModalContainer = Styled.View`
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 220px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
`;
const StyledModalButton = Styled.TouchableOpacity`
  /* Modal Button들의 모달창 내의 높이를 균일하게 하기 위하여 flex를 줌 */
  flex: 1;
  width: 320px;
  justify-content: center;
`;
const StyledModalText = Styled.Text`
  align-self: center;
  color: blue;
  font-size: 15px;
`;

interface Props {
    modalVisible:boolean;
    setModalVisible:(val:boolean)=>void;
}

const Popup = ({modalVisible, setModalVisible}:Props)=>{
    const [modalOutput, setModalOutput] = useState<string>("Open Modal");

    return(
        <StyledModalContainer>
            <Modal isVisible={modalVisible}         
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <StyledModalContainer>
                <StyledModalButton
                    onPress={() => {
                    setModalOutput("예");
                    setModalVisible(false);
                    }}
                >
                    <StyledModalText>선택 2</StyledModalText>
                </StyledModalButton>
                <StyledModalButton
                    onPress={() => {
                    setModalOutput("아니오");
                    setModalVisible(false);
                    }}
                >
                    <StyledModalText>선택 2</StyledModalText>
                </StyledModalButton>
                </StyledModalContainer>
            </Modal>
        </StyledModalContainer>    
    );
};

export default Popup;