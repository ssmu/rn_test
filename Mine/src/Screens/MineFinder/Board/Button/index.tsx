import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {MineFinderContext} from '~/Context/MineFinderContext';

const Region = Styled.TouchableOpacity`
    flex:1;
    align-items:center;
    background-color:white;
`;
const Text = Styled.Text``;

interface Props {
    idx:number
    clicked:boolean
    onPress?:(index:number)=>void
}

const Button = ({idx, clicked, onPress}:Props)=>{
    const {minePosition} = useContext<IMineFinderContext>(
        MineFinderContext
    );
    const text = clicked ? minePosition.includes(idx)?"지뢰야":"눌렀어" : "아직 안눌렀어"
    
    return(
        <Region onPress={()=>onPress(idx)}>
            <Text>{text}</Text>
        </Region>
    )
}

export default Button;