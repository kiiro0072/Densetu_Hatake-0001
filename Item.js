class Item{
    static addList(type,List) {
        let i = 0;
        while (!(List[i]== 'n' || List[i] == 0)) {
            i++;
        }
         List[i] = type
         
    }
}