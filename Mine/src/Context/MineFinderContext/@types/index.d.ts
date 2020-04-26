interface IMineFinderContext {
    board:Array<boolean>,
    minePosition:Array<number>,
    clickButton:(index:number)=>void;
}