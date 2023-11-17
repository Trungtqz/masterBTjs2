// bai1
document.getElementById("sorted").addEventListener("click", function() {
   const number1 = parseFloat(document.getElementById("number1").value);
   const number2 = parseFloat(document.getElementById("number2").value);
   const number3 = parseFloat(document.getElementById("number3").value);

   const numbers = [number1, number2, number3];
   numbers.sort(function(a, b) {
      return a - b;
   });

   document.getElementById("result1").textContent = "sorted: " + numbers.join(",");
})



// bai 2
document.getElementById("greet").addEventListener("click", function() {
   const who = document.getElementById("member").value.toUpperCase();
   let greeting = "";
 
   switch (who) {
     case "B":
       greeting = "Chào bố!";
       break;
     case "M":
       greeting = "Chào mẹ!";
       break;
     case "A":
       greeting = "Chào anh trai!";
       break;
     case "E":
       greeting = "Chào em gái!";
       break;
     default:
       greeting = "Xin lỗi, không nhận diện được thành viên.";
   }
 
   document.getElementById("result2").innerText = greeting;
});




// bài3
document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("countButton").addEventListener("click", countOddEven);
});

function countOddEven() {
   const number11 = parseInt(document.getElementById("number11").value);
   const number22 = parseInt(document.getElementById("number22").value);
   const number33 = parseInt(document.getElementById("number33").value);

   let evenCount = 0;
   let oddCount = 0;

   if (!isNaN(number11) && !isNaN(number22) && !isNaN(number33)) {
      function checkNumber(number) {
         if (number % 2 === 0) {
            evenCount++;
         } else {
            oddCount++;
         }
      }
      checkNumber(number11);
      checkNumber(number22);
      checkNumber(number33);

      document.getElementById("result3").innerHTML = "Odd numbers: " + oddCount + "<br>Even numbers: " + evenCount;
   } else {
      document.getElementById("result3").innerHTML = "Vui lòng nhập số hợp lệ."
   }

};



// bai4
document.getElementById("checkButton").addEventListener("click", check);
function check() {
   const a = parseFloat(document.getElementById("sideA").value);
   const b = parseFloat(document.getElementById("sideB").value);
   const c = parseFloat(document.getElementById("sideC").value);

   if (a + b > c && b + c > a && a + c > b) {
      if (a === b && b === c) {
         document.getElementById("result4").innerHTML = "tam giac deu";
      } else if (a === b || b === c || a === c) {
         document.getElementById("result4").innerHTML = "tam giac can";
      } else if (a*a + b*b === c*c || a*a + c*c === b*b || b*b + c*c === a*a) {
         document.getElementById("result4").innerHTML = "tam giac vuong";
      } else {
         document.getElementById("result4").innerHTML = "tam giac thuong";
      }
   } else {
      document.getElementById("result4").innerHTML = "khong phai hinh tam giac";
   }
};
