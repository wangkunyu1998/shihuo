import styled from 'styled-components'

export const BannerWrap = styled.div `
  height:1.28rem;
  background:url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png') top no-repeat;
  background-size:100% auto;
  padding-top:.56rem;
  display:flex;
  .userface{
    margin-top:-.05rem;
    margin-left:.2rem;
    width:.45rem;
    height:.45rem;
    box-shadow: 0 0 30px rgba(255,255,255,.5);
    border-radius:50%;
    overflow:hidden;  
    img{
      width:100%;
    }
  }
  .login{
    padding-left:.2rem;
    color:#fff;
    >span{
      font-size:.15rem;
      margin-right:.1rem;
    }
    >p{
      margin-top:.03rem;
      font-size:.12rem;
    }
  }
`
export const MenuWrap = styled.div `
    padding:.08rem;
   
    color:#333;
    .tit{
      background:#fff;
      background:url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png') left center repeat-x;
      background-size:.02rem;
      >span{
        padding: 0 .06rem;
        background:#fff;
        font-size:.14rem;
      }
    }
      background:#fff;
      ul{
     
      display:flex;
      align-items: center;
      height:.65rem;
      margin-bottom:.1rem;
      li{
        height:100%;
        font-size:.12rem;
        width:25%;
        padding :.08rem 0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:column;
        img{
          width:.38rem;
          height:.26rem;
        }
      }
    }
    
   
`