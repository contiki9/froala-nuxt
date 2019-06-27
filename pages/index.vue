<template lang="pug">
    div.w-mv
        .bg-filter.d-flex.justify-content-center
             .w-mv-contents.align-self-center

                 .w-mv-contents-title-wrap.text-center.mb-4
                     .w-mv-contents-title
                         h1.title froala nuxt
                     .w-mv-contents-discription
                         p.lead.text-white froala nuxtを使えば簡単にLanding Pageが作れます。

                 .w-mv-contents-message.text-center.mb-5
                     p.text このサイトはfroala nuxtのドキュメントです<br>
                       | froala nuxtは「<a href='https://www.froala.com/design-blocks/' target='_blank'>froala designblocks</a>」を「<a href='https://ja.nuxtjs.org/' target='_blank'>nuxtjs</a>」に組み込んで瞬時に使えるようにしたテンプレートです。
                 .w-mv-contents-button.text-center
                     .w-mv-contents-link
                         a(href='https://github.com/contiki9/froala-nuxt',target='_blank').btn.btn-primary.btn-lg Download
                         a(href='https://fr-nuxt-component.cntlog.net',target='_blank').btn.btn-light.btn-lg StyleGuide

                     .w-mv-contents-sample.mt-10.text-center
                         nuxt-link(to='/sample/sample1').btn.btn-secondary Maked Page Sample1


</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .w-mv{
        width: 100%;
        height: 100vh;
        .bg-filter{
            width: 100%;
            height: 100vh;
            background: rgba(#000,.7);
            background: url('/images/home/mv-bg.jpg')no-repeat center center /cover;
        }
        .w-mv-contents{
            border: 3px solid rgba(#fff,.8);
            padding: 8*3px;
            background:rgba(#FFF,.1);
            .w-mv-contents-title{
                color: #FFF;
            }
            .w-mv-contents-message{
                .text{
                    color: rgba(#FFF,.6);
                }

            }
            .w-mv-contents-button{
                .w-mv-contents-link{
                    a:not(:last-child){
                        margin-right: 8*2px;
                    }
                }
                .w-mv-contents-sample{
                    margin-top: 8*4px;
                    a{
                        font-size: .8rem;
                    }
                }
            }
        }
    }
</style>
