import styled from 'styled-components'
export const FindWrap = styled.div `
    overflow:hidden;
  `
export const BlockWrap = styled.div `
      overflow:hidden;
      background:#fff;
      margin-bottom:.07rem;
      height:.6rem;
      ul{
        display:flex;
        height:100%;
        li{
          height:100%;
          flex:1;
          padding-top:.08rem;
          display:flex;
          flex-direction:column;
          justify-content:space-around;
          align-items:center;
          >div{
          width:.3rem;
          height:.2rem;
          img{
            width:100%;
          }
        }
        span{
          color:#666;
          font-size:.12rem;
        }
        }
      }
`
export const HotWrap = styled.div `
    padding-bottom:.25rem;
    margin-bottom:.07rem;
    background:#fff;
    padding-left:.1rem;
    .title{
      color:#222;
      padding:.1rem;
      padding-bottom:0;
    }
    .slide-container{
      padding-right:.1rem;
      height:.6rem;
      .slide-wrapper{
        display:inline-block;
        white-space: nowrap;
        .slide{
          display:inline-block;
          margin-right:.03rem;
          position: relative;
          width:1.2rem;
          height:.6rem;
          .imgs{
            width:100%;
            height:100%;
            overflow:hidden;
            img{
            width:100%;
          
            }
          }
          .text{
            white-space: normal;
            width:100%;
            height:100%;
            position:absolute;
            left:0;
            top:0;
            background-color: rgba(0,0,0,.2);
            color:#fff;
            font-size:.12rem;
            text-align:center;
            word-wrap: break-word
          }
        }
        .look-more{
          height:.6rem;
          font-size:.12rem;
          display:inline-block;
          padding:.06rem .2rem 0;
          color:#999;
          width:.15rem;
          white-space:normal;
        }
      }
    }
`
      export const TopWrap = styled.div `
          height:.4rem;
          background:#fff;
          ul{
            display:inline-block;
            white-space: nowrap;
            li{
              display:inline-block;
              line-height:.4rem;
              height:.4rem;
              margin:0 .1rem;
              font-size:.13rem;
            }
            .top-active{
              position:relative;
                  color:#FF4338;
                  &::before{
                    content:"";
                    width:50%;
                    display:block;
                    position:absolute;
                    bottom:0;
                    left:25%;
                    height:.02rem;
                    background:#FF4338;
                    border-radius:.02rem;
                  }
                }
          }
      `
      export const JPwrap  = styled.div `
          padding-left:.1rem;
          padding-bottom:.2rem;
          .jingxList{
            li{
              width:100%;
              display:flex;
              padding:.08rem .08rem .08rem 0;
              .user{
                padding-top:.05rem;
                margin-right:.08rem;
                height:.25rem;
                width:.25rem;
                img{
                width:.25rem;
                }
              }
              .author{
                flex:0 0 1;
                .name{
                  font-size:.19rem;
                  color:#444;
                }
                .time{
                  font-size:.18rem;
                  color:#999;
                }
                .tit{
                  width: 100%;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  word-break: break-all;
                }
                .imgs{
                  width:2.6rem;
                  height:1.1rem;
                  margin: .1rem 0;
                  img{
                    width:100%;
                  }
                }
                .tags{
                  height:.25rem;
                  font-size:.15rem;
                  .like{
                    background: url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png') left center no-repeat;
                    padding-left: .2rem;
                    background-size: .15rem auto;
                    height: .2rem;
                    display: inline-block;
                    color: #a4a4a4;
                    margin-right: .1rem;
                    line-height: .2rem;
                  }
                  .say{
                    background: url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png') left center no-repeat;
                    padding-left: .2rem;
                    background-size: .15rem auto;
                    line-height: .2rem;
                    height: .2rem;
                    color: #a4a4a4;
                  }
                }
              }
            }
          }
      `