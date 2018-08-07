import React, {Component} from 'react';3

import PlayerArea from './Mainpage/playerArea';

class MainPage extends Component {

  render(){

    return(
      <div className='mainpage_container BG'>

        {/*All of the player info boxes, including the chips*/}

        <PlayerArea
          playerImgSource={require("../assets/SpriteResources/waa.jpeg")}
          cardImgSource={require("../assets/SpriteResources/420.jpeg")}
          chip1ImgSource={require("../assets/SpriteResources/104.png")}
          chip2ImgSource={require("../assets/SpriteResources/59.png")}
          chip3ImgSource={require("../assets/SpriteResources/51.png")}
          imageHolderAlign={''}
          nameHolderAlign={''}
          chipAlign={'bottom'}
          playerImgAlign={``}
          playerNumber={1}
          playerName={"Player 1"}
        />
        <PlayerArea
          playerImgSource={require("../assets/SpriteResources/waa.jpeg")}
          cardImgSource={require("../assets/SpriteResources/420.jpeg")}
          chip1ImgSource={require("../assets/SpriteResources/90.png")}
          chip2ImgSource={require("../assets/SpriteResources/72.png")}
          chip3ImgSource={require("../assets/SpriteResources/9.png")}
          imageHolderAlign={'right'}
          nameHolderAlign={''}
          chipAlign={'top'}
          playerImgAlign={``}
          playerNumber={2}
          playerName={"Player 2"}
        />
        <PlayerArea
          playerImgSource={require("../assets/SpriteResources/waa.jpeg")}
          cardImgSource={require("../assets/SpriteResources/420.jpeg")}
          chip1ImgSource={require("../assets/SpriteResources/95.png")}
          chip2ImgSource={require("../assets/SpriteResources/57.png")}
          chip3ImgSource={require("../assets/SpriteResources/123.png")}
          imageHolderAlign={'bottom lower'}
          nameHolderAlign={'right'}
          chipAlign={'bottom'}
          playerImgAlign={`right`}
          playerNumber={3}
          playerName={"Player 3"}
        />
        <PlayerArea
          playerImgSource={require("../assets/SpriteResources/waa.jpeg")}
          cardImgSource={require("../assets/SpriteResources/420.jpeg")}
          chip1ImgSource={require("../assets/SpriteResources/78.png")}
          chip2ImgSource={require("../assets/SpriteResources/35.png")}
          chip3ImgSource={require("../assets/SpriteResources/52.png")}
          imageHolderAlign={'right lower bottom'}
          nameHolderAlign={'right'}
          chipAlign={'top'}
          playerImgAlign={`right`}
          playerNumber={4}
          playerName={"Player 4"}
        />

      {/*Everything in the middle*/}
      <div className='mainpage_container_middle'>
        <div className='roulette'>
          <div className='roulette_image_holder'>
            <img className='roulette_image_holder_image' src={"https://placecage.com/1300/1200"}/>
          </div>
          <div className='roulette_type_holder'>
            <button>Roll</button>
            <select id="gameMode">
              {/*{this.props.GetGameOptions}*/}
              <option value="default">Select One</option>
              <option value="ffa">Free For All</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  )
  }
}

export default MainPage;



        {/*}<div className='mainpage_container_1'>
          <div className='playerArea'>
            <div className='playerArea_imageHolder'>
              <PlayerImage
              type='file'
              playerID = '1'
              imageUrl = 'https://placecage.com/200/200'
              />
              < img className = 'cardImage'
              src = {require("../assets/SpriteResources/1.png")}
              />
            </div>
            <div className='playerArea_nameHolder' id='player1Name'>
              <div className='playerArea_nameHolder_name'>Test</div>

              <div className='chipArea'>
                <div className='chip'>
                  <img  id='p1Chip1' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip'>
                  <img  id='p1Chip2' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip'>
                  <img  id='p1Chip3' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mainpage_container_2'>
          <div className='playerArea'>
            <div className='playerArea_imageHolder right'>
              <PlayerImage
              type='file'
              playerID = '2'
              imageUrl = 'https://placecage.com/100/100'
              />
              <img className='cardImage' src={"https://placecage.com/700/800"}/>
            </div>
            <div className='playerArea_nameHolder left' id='player2Name'>
              <div className='playerArea_nameHolder_name'>Test</div>

              <div className='chipArea'>
                <div className='chip'>
                  <img  id='p2Chip1' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip'>
                  <img  id='p2Chip2' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip'>
                  <img  id='p2Chip3' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mainpage_container_3'>
          <div className='playerArea'>
            <div className='playerArea_imageHolder lower'>
              <PlayerImage
              type='file'
              playerID = '3'
              imageUrl = 'https://placecage.com/300/300'
              />
              <img className='cardImage' src={"https://placecage.com/700/800"}/>
            </div>
            <div className='playerArea_nameHolder' id='player3Name'>
              <div className='playerArea_nameHolder_name right'>Test</div>

              <div className='chipArea'>
                <div className='chip bottom'>
                  <img  id='p3Chip1' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip bottom'>
                  <img  id='p3Chip2' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip bottom'>
                  <img  id='p3Chip3' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className='mainpage_container_4'>
          <div className='playerArea'>
            <div className='playerArea_imageHolder right lower '>
              <PlayerImage
              type='file'
              playerID = '4'
              imageUrl = 'https://placecage.com/500/800'
              />
            <img className='cardImage' src={"https://placecage.com/700/800"}/>
            </div>
            <div className='playerArea_nameHolder' id='player4Name'>
              <div className='playerArea_nameHolder_name right'>Test</div>

              <div className='chipArea bottom'>
                <div className='chip bottom'>
                  <img  id='p4Chip1' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip bottom'>
                  <img  id='p4Chip2' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
                <div className='chip bottom'>
                  <img  id='p4Chip3' src={"https://placecage.com/700/800"}/>
                  <button>Roll</button>
                </div>
              </div>
            </div>
          </div>
      </div>*/}
