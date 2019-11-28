const o = {
    name:'Julie',
    greetBackwards: function(){
        function getReverseName(){
            console.log('11',this);
            let nameBackwards=''
            for(let i=this.name.length-1;i>=0;i--){
                nameBackwards+=this.name[i];
            }
            return nameBackwards;
        }
        console.log(`${getReverseName()} si eman ym, olleh`);
    }
};
o.greetBackwards();
