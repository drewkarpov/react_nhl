export function testAttribute(...values : string[]){
    return {'data-qa': values.join(" ")}
}