let X = 0
let Y = 0
basic.forever(function () {
	
if (input.acceleration(Dimension.X) < -500){
X = 0}
else if (input.acceleration(Dimension.X) > 500) {
X = 4}
else X = 2

if (input.acceleration(Dimension.Y) < -500) {
     Y = 0
    }
   else if (input.acceleration(Dimension.Y) > 500) {
        Y = 4
    }
    else Y = 2
basic.clearScreen()
led.plot(X,Y)
})
