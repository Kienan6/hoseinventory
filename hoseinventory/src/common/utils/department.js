
    export const sizes = [{label:'2"', value: 2}, 
    {label:'2 1/2"', value: 2.5}, 
    {label:'3"', value: 3}, 
    {label:'3 1/2"', value: 3.5}, 
    {label:'4"', value: 4}];

    export const departments = ["151","152","153","154","155"];

    export const units = ["C", "E", "TR", "LT"];

    export const designators = () => {
        var ret = [];
        units.forEach(u => {
            departments.forEach(d => {
                var x = u + "" + d;
                ret.push({ unit: x, department: d});
            })
        }
        );
        return ret;
    }

    export default {}
