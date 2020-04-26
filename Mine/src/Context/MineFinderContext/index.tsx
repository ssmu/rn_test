import React, {createContext, useState, useEffect} from 'react';
import { parseSync } from '@babel/core';
// import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    children : JSX.Element | Array<JSX.Element>
}

//@types 안쪽에 셋팅해놓은 interface를 그대로 가져옴.
const MineFinderContext = createContext<IMineFinderContext>({
    board:[],
    minePosition:[],
    clickButton:(index:number):void=>{},
})

const MineFinderContextProvider = ({children}:Props)=>{
    const [board, setboard] = useState<Array<boolean>>([]);
    const [minePosition, setminePosition] = useState<Array<number>>([]);
    const clickButton = (index:number):void=>{
        if(minePosition.includes(index)){
            
        }else{
            const newBoard = board
            newBoard[index]=true
            setboard(newBoard);
        }
    };

    const initBoard = async ()=>{
        try{
            const boardsize = 16;
            const n_mine = 1;
            const board = Array<false>(boardsize);
            const minePosition = getRandomNumberList(n_mine, 0, boardsize)
            
            setminePosition(minePosition);
            setboard(board);
        }catch(e){
            console.log(e)
        }
    };

    // same for componentDidMount
    useEffect(()=>{
        initBoard()
    },[])

    return(
        <MineFinderContext.Provider
            value={{
                board, minePosition, clickButton,
            }}
        >
            {children}
        </MineFinderContext.Provider>
    );
}

const getRandomNumberList = (n:number, min:number, max:number) => {
    const res = Array<number>(n);
    let i=0;
    while(i<n){
        let num = getRandomNumber(min, max)
        if(!res.includes(num)){
            res[i]=num
            i+=1
        }
    }
    return res.sort()
}

const getRandomNumber = (min:number, max:number)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export {MineFinderContextProvider, MineFinderContext};