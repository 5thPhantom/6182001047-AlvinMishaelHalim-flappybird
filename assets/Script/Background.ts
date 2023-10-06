import { _decorator, Component, instantiate, Node, Prefab, randomRangeInt, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Background')
export class Background extends Component {
    @property({type:Node})private parentBackground:Node;

    @property({type:Prefab})private prefabPipa:Prefab;
    private pipa:Node[] = [];
    start() {
        let pipaObj = instantiate(this.prefabPipa);
        pipaObj.setParent(this.node.parent);
        this.pipa.push(pipaObj);

        // pipaObj = instantiate(this.prefabPipa);
        // pipaObj.setParent(this.node.parent);
        // pipaObj.setPosition(new Vec3(288,0,0));
        // this.pipa.push(pipaObj);

    }
    update(deltaTime: number) {
        let currPosition = this.node.getPosition();
        currPosition.x-= (288)/3*deltaTime;
        if(currPosition.x <= -288){
            currPosition.x += 288;
        }
        this.node.setPosition(currPosition);
        for(let i =0; i < this.pipa.length; i++){
            let posisitionPipa = this.pipa[i].getPosition();
            posisitionPipa.x -= (288)/3*deltaTime;
            if(posisitionPipa.x <= -200){
                posisitionPipa.x += (288+56+56);
                posisitionPipa.y = randomRangeInt(-120, 120);
            }
            this.pipa[i].setPosition(posisitionPipa);
        }
        
    }
}


