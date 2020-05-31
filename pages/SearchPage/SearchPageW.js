import styled from 'styled-components'
export const SearchPageWrap = styled.div`
   padding-top:4em;
`
export const TopbarWrap = styled.div`
    background-color: #f7f7f7;
    height: 4em;
    width: 100%;
    position: fixed;
    top: 0;
    text-align: center;
    z-index: 90;
    border-bottom: 1px solid #e6e6e6;
    .goback{
      position: absolute;
      left: 0;
      width: 3.4em;
      top: 0;
      height: 3.4em;
      align-items: center;
      justify-content: center;
      display: flex;
    img{
      margin-top:.08rem;
      display: block;
      height: 82%;
    }
  }
  .searchbox{
    width: 79%;
    padding: .1rem .13rem;
    position: absolute;
    z-index: 1;
    left: 10%;
    background-color: #f7f7f7;
    transition: all .3s ease;
    box-sizing: border-box;
    #searchform{
      background:#fff;
      .search{
        background-position: .24rem center;
        border-radius: .13333rem;
        overflow: hidden;
        font-size: 1.1em;
        border: 0 none;
        color: #666;
        border-radius: 5px;
        background: #e8e8e8 url('http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png') 9px center no-repeat;
        background-size: 1em;
        .input{
          width: 100%;
          border: 0;
          background: 0 0;
          color: #666;
          font-size: 1em;
          height: 32px;
          outline: 0;
          text-align: left;
          padding: 0 10% 0 13%;
          float: left;
          box-sizing: border-box;
        }
        }
      }
  
    }
    .icon-list{
    position: absolute;
    right: 0;
    top: 0;
    width: 3.4em;
    height: 3.4em;
    align-items: center;
    justify-content: center;
    display: flex;
    img{
      height: 82%;
    }
    }
`
export const SelectWrap = styled.div `
    position: absolute;
    width: 100%;
    height: .4rem;
    z-index: 9;
    background:#fff;
    ul{
      background: #fff;
      display: flex;
      height: .4rem;
      border-bottom: 1px solid #e6e6e6;
      z-index: 89;
      position: relative;
      li{
        width: 25%;
        line-height: .4rem;
        text-align: center;
        font-size: .12rem;
        position: relative;
        &:before{
          content: "";
          display: block;
          width: 1px;
          height: .3rem;
          position: absolute;
          right: -1px;
          top: .08rem;
          background-color: #f0f0f0;
        }
      }
      .active{
        color:#FF4338;
        &::after{
          position: absolute;
          content: "";
          display: block;
          width: 80%;
          bottom: 0;
          left: 10%;
          height: 1px;
          background: #FF4338;
        }
      }
    }
`
  export const PageWrap = styled.div `
    position: relative;
    height: 100%;
    .searchList {
      padding: .4rem 0;
      background: #f0f3f5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .con{
        .searchNum{
          background: #f0f3f5;
          height: .3rem;
          line-height: .3rem;
          font-size: .12rem;
          color: #333;
          padding: 0 .13rem;
          img{
            width: .1rem;
            height: .1rem;
            display: inline-block;
            vertical-align: middle;
            margin-right: .05rem
          }
        }
        .prolist{
          margin-bottom: .1rem;
          background: #fff;
          ul{
            padding-left: .13rem;
            li{
              padding: .13rem;
              padding-left: 0;
              border-bottom: 1px solid #f0f0f0;
              display: flex;
              color:#444;
              .imgs{
                width: 30%;
                float: left;
                position: relative;
                .get_imgs{
                  display:block;
                  img{
                    width:100%;
                  }
                }
              }
              .details_box{
                width: 66%;
                position: relative;
                margin-left: .13rem;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                h2{
                  font-size: .13rem;
                  color: #333;
                  font-weight: 700;
                  line-height: .25rem;
                  max-height: .25rem;
                  overflow: hidden;
                  >span{
                    color: #FF4338;
                    font-weight: normal;
                  }
                }
                .desc{
                  font-size: .12rem;
                  color: #999;
                }
                .btm{
                  color: #999;
                  font-size: .12rem;
                  width: 100%;
                  .price{
                    float: left;
                    color: #999;
                    font-size: .12rem;
                    span{
                      color: #FF4338;
                      font-size: .13rem;
                      padding-right: .03rem;
                    }
                  }
                  .guanzhu{
                    float: right;
                    text-align: left;
                  }
                }
              }
            }
          }
          
        }
        .picblock{
          margin-bottom: .13rem;
          background: #fff;
         
          .img_block{
            border-bottom: 1px solid #f0f0f0;
            width: 100%;
            overflow: hidden;
            padding: .03rem;
            display: flex;
            >div{
              display: block;
              flex: 1;
              padding: .03rem;
              img{
                width: 100%;
              }
            }
          }
        }
      }
    }
    .linkMore{
            text-align: center;
            padding: .1rem 0;
            border-bottom: 1px solid #f0f0f0;
            font-size: .1rem;
            color: #278ccf;
            img{
              margin-left: .05rem;
              width: .05rem;
            }
          }
    .tit{
      height: .4rem;
      line-height: .4rem;
      font-size: .13rem;
      color: #333;
      padding-left: .13rem;
      border-bottom: 1px solid #f0f0f0;
      >span{
        color:#FF4338;
      }
    }
  `