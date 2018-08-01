import React, {Component} from 'react';


class HomePage extends Component {

  componentDidMount(){

      document.getElementById('homepageCenterButton').onmouseover =function(){
        var imgHolder = document.getElementById('imgHolder')
        var imgs = document.getElementsByClassName('homepage_container_centerImageHolder_image')
        var i =0
        imgHolder.classList.toggle("slow");
        for(i=0; i<imgs.length; i++){

          let index =i
          let k=imgs[index].width
          {/*setInterval(()=>{
            if(k<800){
              k+=100
              imgs[index].style.width = `${k}px`
              imgs[index].style.height = `${k}px`
            }
          },100)*/}
          imgs[index].style.width = '800px';

          }
            imgHolder.classList.toggle("fast");
        }
      document.getElementById('homepageCenterButton').onmouseout = function(){
        var imgHolder = document.getElementById('imgHolder')
        var imgs = document.getElementsByClassName('homepage_container_centerImageHolder_image')
        var i =0
        imgHolder.classList.toggle("fast");
        for(i=0; i<imgs.length; i++){

          let index =i
          let k=imgs[index].width
          {/*setInterval(()=>{
            if(k>400){
              k-=100
              imgs[index].style.width = `${k}px`
              imgs[index].style.height = `${k}px`
            }
          },100)*/}
          imgs[index].style.width = '400px';

          }
          imgHolder.classList.toggle("slow");
        }
      }

  render(){
    return(
      <div className="homepage_container">
        <div id="imgHolder" className="slow homepage_container_centerImageHolder">
          <img id='img1' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-red-semi-085b4e44d49b2ffe935cc1b2b3094ce8.svg" alt="Index portal red semi"/>
          <img id='img2' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-red-be5d1b8a52c13bf286560aba3e4c8c30.svg" alt="Index portal red"/>
          <img id='img3' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-orange-semi-d2010f0f8e41e03dbf2b5c52166abe4b.svg" alt="Index portal orange semi"/>
          <img id='img4' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-orange-b3bddfb758b91d22f43d0e14ed8e29da.svg" alt="Index portal orange"/>
          <img id='img5' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-yellow-semi-545681fe77ff01659d472bd379a9f38b.svg" alt="Index portal yellow semi"/>
          <img id='img6' className="homepage_container_centerImageHolder_image" src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-yellow-ff207a58ad4f450ea9ac0e17224b39f1.svg" alt="Index portal yellow"/>
          <img id='img7' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-green-semi-2d5bc571ee90e710d93f7ae7ddd06e85.svg" alt="Index portal green semi"/>
          <img id='img8' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-green-6ab85a1e7343a232273868031b242806.svg" alt="Index portal green"/>
          <img id='img9' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-blue-semi-7333f1323549be50644411b691b173dd.svg" alt="Index portal blue semi"/>
          <img id='img10' className="homepage_container_centerImageHolder_image " src="https://github-atom-io-herokuapp-com.global.ssl.fastly.net/assets/index-portal-blue-92fc2c151190795bd0147c03d4fb8352.svg" alt="Index portal blue"/>
        </div>
        <div className="homepage_container_buttonHolder">
          <button id='homepageCenterButton'>Take me to the Game</button>
        </div>
      </div>
    )
  }
}

export default HomePage;
