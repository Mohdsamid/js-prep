        // let promise = new Promise((res,reject)=>{
        //     res()
        // })
        // promise.then(()=>{
        //     console.log("doneeee");
        // }).catch(()=>{
        //     console.log("errorr")
        // })
        // console.log("bhaaosiosajsk");
        // let h2 = document.querySelector("h2")


        // fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
        //     return data.json()
        // }).then((val)=>{
        //     console.log(val);

        //     val.forEach((item)=>{
        //     h2.innerHTML += item.title + "<br> <br/>";

        //     })
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
        const arr =[
            'https://i.pinimg.com/736x/83/61/8f/83618f38a393a700278411af297cb243.jpg',
            // 'https://i.pinimg.com/736x/64/d2/51/64d251e8d1a9dc544cefe64b51b6b4c3.jpg',
            // 'https://i.pinimg.com/736x/cc/58/75/cc587557c7bcad6b96ebb4e6a602335e.jpg',
            // 'https://i.pinimg.com/736x/d8/8b/17/d88b17d88988ef201fd8ee2672a4ccb6.jpg',
            'https://i.pinimg.com/1200x/ec/13/44/ec1344b1184b3277a71299f244feed89.jpg',
            'https://i.pinimg.com/736x/e9/d0/5a/e9d05a6dd00295450eb9ed33b8d4cf65.jpg',
            'https://i.pinimg.com/1200x/fc/03/15/fc03154334d6469e1c3c4f6b1a826fda.jpg',
            'https://i.pinimg.com/736x/e9/a0/42/e9a0423f92146bca91f672311f983b7a.jpg'
        ]
        let div = document.querySelector("div")
        const image = document.querySelector('img');
        let num = 0;
        setInterval(function(){
            image.setAttribute('src',arr[num]);
            num = (num+1) % arr.length;
        },2000);