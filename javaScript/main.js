const factText = document.getElementById("factText");

        document.getElementById("elephant").addEventListener("click", function() {
            factText.textContent = "Elephants are the largest land animals in the world.";
            factText.style.color = "aqua";
            activeButton();
        });

        document.getElementById("tiger").addEventListener("click", function() {
            factText.textContent = "Tigers are the largest cat species in the world.";
            factText.style.color = "orange";

            tiger.classList.add("pressed");
            setTimeout(function(){
                tiger.classList.remove("pressed")
            }, 500);

        });

        document.getElementById("giraffe").addEventListener("click", function() {
            factText.textContent = "Giraffes have long necks to reach leaves high up in trees.";
            factText.style.color = "blue";

            giraffe.classList.add("pressed");
            setTimeout(function(){
                giraffe.classList.remove("pressed")
            }, 500);
        });

        document.getElementById("bat").addEventListener("click", function() {
            factText.textContent = "Bats are the only mammals capable of sustained flight.";
            factText.style.color = "red";

            bat.classList.add("pressed");
            setTimeout(function(){
                bat.classList.remove("pressed")
            }, 500);
        });

        document.getElementById("owl").addEventListener("click", function() {
            factText.textContent = "Owls don't have eyeballs.";
            factText.style.color = "orange";

            owl.classList.add("pressed");
            setTimeout(function(){
                owl.classList.remove("pressed")
            }, 500);
        });

        document.getElementById("jellyfish").addEventListener("click", function() {
            factText.textContent = "Jellyfish can sink a boat.";
            factText.style.color = "aqua";

            jellyfish.classList.add("pressed");
            setTimeout(function(){
                jellyfish.classList.remove("pressed")
            }, 500);
        });

        document.getElementById("octopus").addEventListener("click", function() {
            factText.textContent = "Octopus have three hearts.";
            factText.style.color = "red";

            octopus.classList.add("pressed");
            setTimeout(function(){
                octopus.classList.remove("pressed")
            }, 500);
        });

        document.getElementById("crow").addEventListener("click", function() {
            factText.textContent = "Crows can remember faces 💀.";
            factText.style.color = "yellow";

            crow.classList.add("pressed");
            setTimeout(function(){
                crow.classList.remove("pressed")
            }, 500);
        });

        document.querySelector(".animal").addEventListener("click", function(){
            elephant.classList.add("pressed");
            setTimeout(function(){
                elephant.classList.remove("pressed")
            }, 500);
        });