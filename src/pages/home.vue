<template>
    <div :id="mq.s ? 'home-s':'home'">
        <div class="content-left">
            <span>So, you want to travel to <br> <h1>space</h1></span> 
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p> 
        </div>
        <div class="content-right">
            <div class="explore">
                <span> explore</span> 
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        inject:["mq"],
    }
</script>

<style lang="scss" scoped>
#home{
    display:flex;
    align-items: center;
    align-self: center;
    justify-content: space-around;
    padding: 200px 0 0 100px;
    .content-left{
    width: 50%;
    max-width: 450px;

        span{
            font-size: 1.9vw;
            text-transform: uppercase;
            color: #D0D6F9;
            letter-spacing: 4px;
            h1{
                font-size : 9.5vw;
                font-family: 'Bellefair', serif;
                font-weight: 400;
                line-height:1.4em;
            }
        }
        p{
            color: #D0D6F9;
            line-height:1.8em;
            letter-spacing: 1px;
        }
    }
    .content-right{
        width: 50%;
        position:relative;
        display: flex;
        justify-content: center;
        margin-left:150px;
        
        .explore{
            
            height:17vw;
            width:17vw;
            border-radius: 50%;
            background-color: #fff;
            text-align: center;
            position: relative;
            margin-top:100px;
            cursor: pointer;
            &:hover{
                &:before{
                    content:'';
                    position:absolute;
                    top:-4vw;
                    left:-4vw;
                    border-radius: 50%;
                    height:25vw;
                    width:25vw;
                    background-color: rgba(255, 255, 255, 0.5); 
                    z-index: 8;
                    transition: all 2s ease;
                }
                
            }
            span{
            
            color:black;
            text-transform: uppercase;
            font-family: 'Bellefair', serif;
            font-size: 2vw;
            padding:auto;
            line-height: 17vw;
            z-index: 10;
            
            }
        }
    }
}
// MQ S

#home-s{
    display: flex;
    flex-direction: column;
    .content-left{
        max-width:80vw;
        margin: 50px auto 0;
        text-align: center;
        span{
            font-size: .8rem;
            text-transform: uppercase;
            color: #D0D6F9;
            letter-spacing: 4px;
            h1{
                font-size : 5rem;
                font-family: 'Bellefair', serif;
                font-weight: 400;
                line-height:8rem;
            }
        }
        p{
            color: #D0D6F9;
            line-height:1.6rem;
            letter-spacing: 1px;
        }
    }
    .content-right{
        .explore{
                    margin: 0 auto 100px;
                    height:40vw;
                    width:40vw;
                    border-radius: 50%;
                    background-color: #fff;
                    text-align: center;
                    position: relative;
                    margin-top:100px;
                    cursor: pointer;

                    span{
                    color:black;
                    text-transform: uppercase;
                    font-family: 'Bellefair', serif;
                    font-size: 5vw;
                    padding:auto;
                    line-height: 40vw;
                    z-index: 10;
                    }
                }
            }
        }

</style>