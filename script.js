function paleta(){
   a = document.getElementById("liczba").value;
   main = document.getElementById("main_color");
   dwa = document.getElementById("D_color");
   trzy = document.getElementById("T_color");
   cztery = document.getElementById("C_color");
   piec = document.getElementById("P_color");
   main.style.backgroundColor = `hsl(${a}, 100%, 50%)`;
   dwa.style.backgroundColor = `hsl(${a}, 80%, 50%)`;
   trzy.style.backgroundColor = `hsl(${a}, 60%, 50%)`;
   cztery.style.backgroundColor = `hsl(${a}, 40%, 50%)`;
   piec.style.backgroundColor = `hsl(${a}, 20%, 50%)`;
//    document.getElementById("main_color").style = hsl;


}