/*задача: 2810/2: входа е един стринг от числа, разделени със запетайки, 
числата могат да са положителни и отрицателни, представляват колко метра изкачваш 
или слизаш докато се разхождаш в планината. Например "1,1,-2,3" означава че се изкачваш 
1 метър, после пак 1 метър, после слизаш 2 метра, после се изкачваш пак 3 метра.
 Започвайки от денивелация 0 метра, намери за така описания маршрут колко 
 е най високата и най-ниската точка през която минаваш на разходката си
 "2,2,2,2,-20", отговор: най-висока: 8, най-ниска: -12
 
 
 */

let input = ["-1,1,5,-9,-10,2,3,5,-15"]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split(",").map(Number)

let sum1=0
let sum2=0

  for (let i = 0; i < n.length; i++) {
      const el = +n[i];
      
      if (el>=0) {
        sum1+=el
      } else{        
        sum2+=el
        
      } 
  }
  print(`hmax=${sum1}`)//5
  print(`hmin=${sum2+sum1}`)//-15