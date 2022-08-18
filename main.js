 var input = document.getElementById("myInput");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
           var serch=input.value;
            if (serch.includes("movie:")) {
                serch=serch.replaceAll("movie:")
                serch=serch.replace(undefined,"")
                document.location.href="https://torrentgalaxy.to/torrents.php?c42=1&search="+serch+"#results"

            }
            }
                if (serch.includes("series:")){
                serch=serch.replaceAll("series:")
                serch=serch.replace(undefined,"")
                document.location.href="https://sdarot.buzz/search?term="+serch
            }
                if (serch.includes("app:")){
                serch=serch.replaceAll("app:")
                serch=serch.replace(undefined,"")
                document.location.href="https://allsoftwares.co/?s="+serch
                window.open("https://igetintopc.com/?s="+serch)
            }
        if (serch.includes("game:")){
            serch=serch.replaceAll("game:")
            serch=serch.replace(undefined,"")
            document.location.href="https://steamunlocked.net/?s="+serch
            window.open("https://www.gamestorrents.fm/?s="+serch)
            window.open("https://agfy.co/?s="+serch)
        }

        })
