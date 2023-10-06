import { _decorator, Collider, Collider2D, Component, Contact2DType, Details, EventTouch, Input, input, Node, Quat, quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    private speedTurun:number = 150;
    start() {
        input.on(Input.EventType.TOUCH_START,this.onInputReceived,this);
        this.node.getComponent(Collider2D).on(Contact2DType.BEGIN_CONTACT,this.onColide,this);;
    }

    onInputReceived(event:EventTouch){
        this.speedTurun = 150;
    }

    onColide(){
        alert("Game Over!");
    }   

    update(deltaTime: number) {
        let currPosition= this.node.getPosition();
        this.speedTurun -= 200*deltaTime;
        currPosition.y += this.speedTurun*deltaTime;
        if(currPosition.y<= -244){
            currPosition.y = -244;
            this.onColide();
        }   
        if(currPosition.y>= 244){
            currPosition.y = 244;
            this.onColide();
        }
        this.node.setPosition(currPosition);

        var angle = this.speedTurun;
        if (angle >= 30) {
            angle = 30;
        }
        if(angle <= -90){
            angle = -90;
        }
        this.node.setRotationFromEuler(0,0,angle);
    }
}


