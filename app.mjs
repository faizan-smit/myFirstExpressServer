
import express from 'express'
const app = express()
const port = 3000

let theDate = new Date()
let currentDate  = theDate.toLocaleString()

app.get('/', (req, res) => {
  res.send(` 




  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Faizan's Server 👨‍💻</title>

    <style>

        body{
            min-height: 100vh;
            background-color: slateblue;
            background-image: url('./mypattern.png');
            background-image: linear-gradient(225deg, rgb(63, 160, 250), rgb(153, 0, 255));
            background-repeat: repeat;
        }

        .mainDiv{

            min-width: 50vw;
            height: auto;
            min-height: 30vh;
            /* background-image: linear-gradient(diagonally,red,yellow); */
            /* background-color: blue; */
            background-image: linear-gradient(45deg, rgb(63, 160, 250), rgb(153, 0, 255));
            align-items: center;

        }

        .bottomright{


            font-size: 12px;

        }

        .secondDiv{
            min-width: 50vw;
            height: auto;

        }

        .forTop{

            position: relative;
            top: -25px;
        
        }


    </style>


</head>
<body class="d-flex flex-column align-items-center justify-content-center">


    <div class="mainDiv d-flex flex-column align-items-center justify-content-center text-white">


        <div>
    
    
    
        <h2>Faizan's Express Server</h2>

        <br>
        

        <h5 class="text-center">

            Hello
            <br>
            Welcome to my server


        </h5>

        </div>


       



    </div>



    <div class="d-flex text-white justify-content-end secondDiv forTop">
    <h6 class="bottomright">

        Server accessed at ${currentDate}

    </h6>
    </div>
     <div class="d-flex text-white justify-content-end secondDiv">
    <h6 class="bottomright">

        Copyrights &copy; &nbsp; Muhammad Faizan Alam

    </h6>
    </div>


    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
   
</body>
</html>

    
  `)
})

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`)
})
