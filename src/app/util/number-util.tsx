export function CapNumberLabel(value: number, fixed: number = 1): Array<string> {
    const incrementUnit = ['', 'K', 'M', 'B', 'T'];
    let incrementUnitIndex: number = 0;
    let num = value;

    const retVal: Array<string> = [];
    if (value >= 1000)
    {
        for (let i:number = 0; i < incrementUnit.length; ++i)
        {
            const reducedCount = value / Math.pow(1000, i);
            if (reducedCount < 1000)
            {
                incrementUnitIndex = i;
    
                num = reducedCount;
                break;
            }
        }
    }

    retVal.push((num % 1 !== 0) ? num.toFixed(fixed) : num.toString());
    retVal.push(incrementUnit[incrementUnitIndex]);
    return retVal;
}