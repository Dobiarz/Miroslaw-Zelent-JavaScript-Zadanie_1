function oblicz()
{
	var a = document.getElementById("bok_a").value;
	var b = document.getElementById("bok_b").value;
	var c = document.getElementById("bok_c").value;
		a = parseFloat(a);
		b = parseFloat(b);
		c = parseFloat(c);
	var d = (a+b+c)*(a+b-c)*(a-b+c)*(-a+b+c);
	var pole = Math.sqrt(d)/4;
	
	if (a == "" || b == "" || c == "")
		document.getElementById("wynik").innerHTML = '<span style="color:red;">Podaj długości wszystkich boków</span>';
		else if ( d < 0 )
			document.getElementById("wynik").innerHTML = '<span style="color:red;">Z podanych boków nie sposób utworzyć trójkąta!</span>';
	else
		document.getElementById("wynik").innerHTML = "Pole trójkąta wynosi: " + pole;
}
