import styled from 'styled-components'
import border from '@/styled/border'
export const Searchwrap = styled.div `
        height:100%;
        background:#fff;
        .am-search {
          border-bottom: 1px solid #ddd;
          height:.38rem;
          background:rgb(247,247,247) !important;
          border:0;
        }
        .sub-title {
          color: #888;
          font-size: 14px;
          padding: 30px 0 18px 0;
        }
        .am-search-input{
          height:.28rem ;
          background:#EAEAEA 
        }
        .am-search-input .am-search-synthetic-ph-placeholder{
          font-size:.12rem;
          line-height:.25rem;
         
        }
        .am-search-value{
          margin-top:.02rem;
          height:.23rem !important;
          line-height:.23rem;
          font-size:.12rem !important;
          color:#666 !important;
        }
        .am-search-start{
          animation:none 0 ease 0 0 normal !important
        }
        .am-search-cancel{
          font-size:.12rem;
          color:#666
        }
        .am-search-synthetic-ph{
          padding-left:15px;
          width: 100% !important;
          text-align:left !important;
        }
        .searchList{
          background:#fff;
        }
        .searchWrapper{
          background:#fff;
          dl{
            padding:.13rem 0 0 .13rem;
            dt{
              font-size:.12rem;
              color:#999;
              margin-bottom:.1rem;
            }
            dd{
              margin-bottom:.04rem;
              span{
                display:inline-block;
                font-size:.1rem;
                color:#444;
                padding:.04rem;
                margin-right:.05rem;
                margin-bottom:.1rem;
                border:1px solid #ccc;
                border-radius:.03rem;
              }
            }
          }

        }
`
        export const SearchBorder = border(styled.li `
          padding-left:.13rem;
          height:.4rem;
          line-height:.4rem;
          list-style:none;
          color:#444;
          font-size:.13rem;
        `)