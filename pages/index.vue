<template>
  <div>
    <client-only>
      <video-background 
        src="/dev/coding.mp4"
        poster="/dev/coding.png"
        style="max-height: calc(100vh); height: calc(100vh);"
        overlay="linear-gradient(to top right, rgba(0,0,0,.9), rgba(25,32,72,.7))" 
      >
        <v-container class="fill-height text-center text-md-left">
          <v-row align="center" class="flex-wrap">
            <v-col>
              <v-card dark color="transparent" flat>
                <h1 class="text-h4 text-md-h3 font-weight-black">
                  <span class="yellow--text">서버리스 아키텍처</span> 기반
                </h1>
                <h1 class="text-h4 text-md-h3 font-weight-black mt-4">
                  외주 개발 팀
                </h1>
                <h4 class="text-subtitle-1 text-md-h5 mt-5 grey--text text--lighten-3">운영비용 없이 앱/웹 서비스 운영하는 방법</h4>
              </v-card>
            </v-col>
            <v-col cols="12" md="auto">
              <v-btn class="font-weight-black text-subtitle-1" width="200px" height="60px" rounded color="primary" depressed large target="_blank" :href="devLink">문의하기</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </video-background>
    </client-only>
    <v-btn href="/hello">Redirect hello</v-btn>
    <v-btn to="/hello">VueRouter hello</v-btn>
    <v-card class="py-16" flat rounded="0">
      <v-container class="text-center py-4">
        <div class="text-h4 text-md-h3 font-weight-black">어느 개발자의 일상</div>
        <div class="mt-10 text-left">
          <v-row no-gutters>
            <v-col cols="12" md="7">
              <v-row class="mb-3" align="center" no-gutters>
                <v-col cols="auto"><v-icon :size="50">mdi-account-arrow-right</v-icon></v-col>
                <v-col cols="auto" class="pl-2"><span :style="{ fontSize: '34px' }">고객</span></v-col>
              </v-row>
              <v-alert
                class="text-subtitle-1 text-md-h6 font-weight-light"
                border="left"
                color="grey lighten-4"
                icon="mdi-fire"
              >
                "웹 애플리케이션을 <span class="primary--text font-weight-black">적은 예산</span>으로 <span class="primary--text font-weight-black">빠르게</span> 개발해 주세요.
                이후에는 <span class="primary--text font-weight-black">확장 가능</span>하고 <span class="primary--text font-weight-black">관리</span>와 <span class="primary--text font-weight-black">운영</span>은 쉬우면 좋겠어요.<br>
                <span class="primary--text font-weight-black">혼자</span> 가능 하시겠어요?"
              </v-alert>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="7" class="text-right">
              <v-row class="mb-3" align="center" no-gutters>
                <v-spacer></v-spacer>
                <v-col cols="auto"><v-icon :size="50">mdi-account-arrow-left-outline</v-icon></v-col>
                <v-col cols="auto" class="pl-2"><span :style="{ fontSize: '34px' }">개발자</span></v-col>
              </v-row>
              <v-alert
                class="text-subtitle-1 text-md-h6 font-weight-light"
                border="right"
                color="grey lighten-4"
              >
                "문제 없습니다!<br>
                <span class="primary--text font-weight-black">서버리스</span>로 개발하면 됩니다"
              </v-alert>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
    <v-card class="py-16" color="#08004c" dark rounded="0">
      <v-container class="text-center">
        <div class="text-h4 text-md-h3 font-weight-black">서버리스 아키텍처란 무엇인가요?</div>
        <div class="mt-8 text-subtitle-1 text-md-h6 font-weight-bold">
          서버리스 아키텍처는 서버 인프라를 <span class="yellow--text">구축 및 관리할 필요 없이</span><br>
          애플리케이션과 서비스를 <span class="yellow--text">구축하고 운영</span>하는 방식입니다.<br>
          <br>
          즉, 관리 해야할 서버가 없으니 개발 및 운영 비용을 최소화할 수 있습니다.
        </div>
        <v-btn class="mt-10 font-weight-black text-subtitle-1" rounded outlined depressed :height="56" :width="180"  target="_blank" :href="devLink">
          개발 문의하기
        </v-btn>
      </v-container>
    </v-card>
    <v-card id="news" class="py-16" color="grey lighten-4" flat rounded="0">
      <v-container class="text-center py-4">
        <div class="text-h4 text-md-h3 font-weight-black">서버리스 관련 소식</div>
        <div class="text-h6 mt-1 font-weight-regular">서버리스 관련 기술, 발표 등의 소식을 모았습니다</div>
        <div class="mt-8 text-left">
          <v-row class="mb-6" align="center" justify="center">
            <v-col cols="auto">
              <v-chip-group
                v-model="chipGroup"
                class="text-center"
                column
                active-class="primary--text font-weight-black"
              >
                <v-chip large class="px-8" value="news">뉴스</v-chip>
                <v-chip large class="px-8" value="youtube">유튜브</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-row v-if="chipGroup === 'news'">
            <v-col
              v-for="(item, index) in news"
              :key="index"
              cols="12"
              sm="6"
            >
              <v-card target="_blank" :href="item.link">
                <v-row no-gutters>
                  <v-col cols="auto">
                    <v-img
                      width="160px"
                      aspect-ratio="1"
                      :src="item.image"
                    >
                    </v-img>
                  </v-col>
                  <v-col class="pa-4">
                    <div v-line-clamp="2" class="font-weight-black text-h6" >{{ item.title }}</div>
                    <div v-line-clamp="2" class="mt-1 grey--text text--darken-3">{{ item.description }}</div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              v-for="(item, index) in videos"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card target="_blank" :href="item.link">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="item.image"
                >
                </v-img>
                <v-card-title v-line-clamp="2" class="font-weight-black">{{ item.title }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
    <v-card class="py-16" color="rgb(4, 0, 43)" dark rounded="0">
      <v-container class="text-center py-4">
        <div class="text-h4 text-md-h3 font-weight-black">개발 문의하기</div>
        <div class="mt-5 text-subtitle-1 text-md-h6 font-weight-bold">
          <span class="yellow--text">창업 경험</span>이 있는 <span class="yellow--text">10년차 CTO개발자</span>가 직접<br>
          기획부터 개발까지 속! 시원~하게 상담해드립니다 :)
        </div>
        <v-btn class="mt-10 font-weight-black text-subtitle-1" rounded color="primary" depressed :height="56" :width="180" target="_blank" :href="devLink">
          문의하기
        </v-btn>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    devLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf2bjggCRVhqquaA8Czc3aqUuO_9Z3ai0V6X22tUTT4Az5_3g/viewform?usp=sf_link',
    chipGroup: 'news',
    cases: [
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
      { image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', title: '배달의민족', description: '배달의민족은 스팸필더를 이용하여' },
    ],
    news: [
      {
        image: 'https://wannabenews.com/wp-content/uploads/2020/06/serverless-architecture-780x405.jpeg',
        title: '서버리스 아키텍처 시장 2020: 미래 시나리오 및 성장 동인',
        description: '앱 개발 시장의 빠른 성장과 함께 Android 및 iOS와 같은 다양한 플랫폼에 유용한 애플리케이션에 대한 수요가 증가함에 따라 서버리스 아키텍처 시장의 성장이 가속화되었습니다.',
        link: 'https://wannabenews.com/%EC%84%9C%EB%B2%84%EB%A6%AC%EC%8A%A4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%8B%9C%EC%9E%A5-2020-%EB%AF%B8%EB%9E%98-%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4-%EB%B0%8F-%EC%84%B1%EC%9E%A5-%EB%8F%99/241701/'
      },
      {
        image: 'http://www.itworld.co.kr/files/itworld/2020/07_01/0703_31_client-serverless-01-100850529-orig.jpg',
        title: '4세대 애플리케이션 모델을 이끄는 클라이언트-서버리스 탐구',
        description: '클라이언트-서버 애플리케이션이 구축된 방식은 모놀리식 애플리케이션과는 매우 달랐다. 프레젠테이션 코드는 클라이언트 컴퓨터에서 실행되고 비즈니스 로직은 서버에 위치하며 일반적으로 SQL 저장 프로시저 내에 캡슐화됐다.',
        link: 'http://www.itworld.co.kr/insight/157112'
      },
      {
        image: 'http://www.itworld.co.kr/files/itworld/2020/02/EdgeServerless/GettyImages-870271354.jpg',
        title: '“FaaS를 넘어 엣지로” 차세대 엣지 서버리스 아키텍처의 현황과 전망',
        description: '서버리스 서비스는 어디에나 있다. 새로운 프로그래밍 방식을 향한 진화의 원동력인 서버리스 환경은 애플리케이션 호스팅 플랫폼, 서버리스 데이터베이스, CDN(Contents Delivery Network), 보안 솔루션 등등 모든 형태로 구현되고 있다.',
        link: 'http://www.itworld.co.kr/news/144224'
      },
      {
        image: 'https://slownews.kr/wp-content/uploads/2020/01/Cloud_computing_layers.png',
        title: '서버리스 컴퓨팅이 온다',
        description: '“사용자의 직접적이고 적극적인 관리가 필요 없는” 데에서 나오는 편리함과 각 사용자의 개별구축(on-premise) 대신에 클라우드 사업자를 통한 주문형(on-demand)으로 컴퓨터 시스템 자원의 가용성을 확보함에 따르는 효율성이라고 할 수 있다',
        link: 'https://slownews.kr/75067'
      },
      {
        image: 'http://www.hellot.net/admin/crosseditor_3.5.0.06/binary/images/000252/20200617103342340_1HBQQ0LZ.jpg',
        title: 'AI 최신 트렌드 세미나 개최…AI경량화, AI 서버리스 컴퓨팅, 비정형 데이타 처리 기술 공유',
        description: '\'AI 최신 트렌드 및 이슈 분석 세미나 - AGI, XAI, AI경량화, AI 서버리스 컴퓨팅, 비정형 데이타 처리/자동화, 뉴로모픽\'을 개최한다고 밝혔다.',
        link: 'http://www.hellot.net/new_hellot/magazine/magazine_read.html?code=202&sub=004&idx=52888'
      },
      {
        image: 'https://image.zdnet.co.kr/2019/12/15/imc_bumAUBa1YZX9pJs0.jpg',
        title: '"운영 덜고 개발 더하라"…구글 서버리스 컴퓨팅',
        description: '서버리스 제품 및 서비스는 개발자로부터 이런 부담을 없애 준다. 개발자가 본업에 주력해 코드의 품질과 완성도를 높일 수 있는 기반을 제공한다. 작은 조직의 개발자가 겪는 코딩 외에 인프라의 구성과 형상 관리를 떠맡아야 하는 부담, 큰 조직의 개발자에게 발생하는 개발 환경 선택의 제한과 작성한 코드를 테스트, 배포, 디버깅하는 단계 사이의 \'문턱\'을 제거한다.',
        link: 'https://zdnet.co.kr/view/?no=20191215134531'
      }
    ],
    videos: [
      {
        image: 'https://i.ytimg.com/vi/6GmnBkHf1Xo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAVAulm5245TaSgWsPrlVnEAAnfyw',
        title: '서버리스 웹 애플리케이션 구축 방법론 - 김현수 솔루션즈 아키텍트 (AWS)',
        link: 'https://www.youtube.com/watch?v=6GmnBkHf1Xo'
      },
      {
        image: 'https://i.ytimg.com/vi/sWxiL-egmnc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCy2hPa1c7mpma6LjR7rcNTf7TM8w',
        title: 'AWS 서버리스를 이용하여 IoT 수준의 메세지 폭풍을 처리하는 방법 - 김민성 솔루션즈 아키텍트(AWS)',
        link: 'https://www.youtube.com/watch?v=sWxiL-egmnc'
      },
      {
        image: 'https://i.ytimg.com/vi/-LZFJ6BpplE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD94Klu7h7EtV9tqMddfORMzKdbWA',
        title: '서버리스 기반 컨텐츠 추천 서비스 만들기 - 이상현(Vingle)',
        link: 'https://www.youtube.com/watch?v=-LZFJ6BpplE'
      },
      {
        image: 'https://i.ytimg.com/vi/SmXjjCHK77A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAtxgMXT8i7gOF3iOSOuTZP8upNSw',
        title: '서버리스 애플리케이션 구축 패턴 및 구축 사례 -김봉환 솔루션즈 아키텍트(AWS 코리아)',
        link: 'https://www.youtube.com/watch?v=SmXjjCHK77A'
      },
      {
        image: 'https://i.ytimg.com/vi/yqcSVTU890g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD4RLnA1T1jHcDUJvc_GtjBJGiKbA',
        title: 'AWS Builders 온라인 시리즈 | 쉽게 확장 가능한 서버리스 웹 어플리케이션 만들기 - 황윤상, AWS 솔루션즈 아키텍트',
        link: 'https://www.youtube.com/watch?v=yqcSVTU890g'
      },
      {
        image: 'https://i.ytimg.com/vi/3BwrxggOM-E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAt9KoW9As44VY_WI3su3MjhEkfHA',
        title: 'AWS Builders Online Series | 데이터베이스 운영, 서버리스로 걱정 끝! - 윤석찬, AWS 테크에반젤리스트',
        link: 'https://www.youtube.com/watch?v=3BwrxggOM-E'
      }
    ]
  })
}
</script>
<style>
#videoBg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #000000, #222222, #5e5e5e);
  opacity: .8;
  z-index: 0;
}
.VideoBg__content {
  z-index: 1;
}
</style>
