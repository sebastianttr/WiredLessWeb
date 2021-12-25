<template>
    <p :style="paragraphStyle">
        {{titleProcessed}}
    </p>
</template>
<script>

const randomCharacters = [
    "$","%",">","-","#","+","~","!","?","@"
]

const maxIter = 5;


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

export default {
    props:{
        title: {
            type: String,
            required: true,
        },
        fontSize: {
            type: String,
            required: true,
        },
        start:{
            type:Boolean,
            required:true
        },
        color: {
            type: String,
            required:true
        }
    },
    data(){
        return {
            titleProcessed: "",
            paragraphStyle: {}
        }
    },
    beforeMount(){
        // set the styling
        this.paragraphStyle = {
            'font-size':this.$props.fontSize,
            'color':this.$props.color
        }

        // set the default text -> a string of text with the length of the title prop
        this.$props.title.split('').forEach((char,i) => {
            this.titleProcessed += randomCharacters[i%randomCharacters.length];
        });
    
    },
    methods:{
        delay(t) {
            return new Promise(resolve => {
                setTimeout(() => resolve(), t);
            })
        },
        minmax(value, min, max){
            if(value <= min)
                return min;
            else if(value >= max){
                return max;
            }
            else return value
        },
        async runAnimation(){
            let receivedCharsIndex = [];
            let title = this.$props.title;
            let newString = this.titleProcessed;
    
            
            while(newString !== title){
                //random index
                let randomIndex = Math.floor(Math.random()*newString.length);
                if(receivedCharsIndex.includes(randomIndex)){
                    continue;
                }    

                // decide randomly if the char gets it character
                let getsChar = !!Math.round(Math.random());
                if(getsChar){
                    receivedCharsIndex.push(randomIndex);
                    newString = newString.replaceAt(
                        randomIndex,
                        title.charAt(randomIndex)
                    );
                    //console.log(newString)
                    await this.delay(50);
                } 
                else {
                    newString = newString.replaceAt(
                        randomIndex,
                        randomCharacters[Math.floor(Math.random() * randomCharacters.length)]
                    );
                    //console.log(newString)
                    await this.delay(50);
                }

                this.titleProcessed = newString;
            }
            
            console.log("Length reached!")
        }
    },
    watch: {
        start(newVal){
            if(newVal === true){
                this.runAnimation();
            }
        }
    }
}
</script>
<style>

</style>