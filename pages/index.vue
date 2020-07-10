<template>
  <div>
    <client-only>
      <video-background 
        src="/coding.mp4"
        poster="/coding.png"
        style="max-height: calc(100vh); height: calc(100vh);"
        overlay="linear-gradient(to top right, rgba(0,0,0,.8), rgba(25,32,72,.7))" 
      >
        <v-container class="fill-height">
          <v-layout class="align-center justiry-center fill-height">
            <v-flex shrink>
              <v-card dark color="transparent" flat>
                <h1 class="text-h3 font-weight-black">
                  서버리스 아키텍처 기반
                </h1>
                <h1 class="text-h3 font-weight-black mt-4">
                  외주 개발 파트너
                </h1>
                <h4 class="text-h5 mt-5">운영비용 없이 플랫폼 유지하는 방법</h4>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex shrink>
              <v-btn width="200px" height="60px" class="" rounded color="primary" depressed large>문의하기</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </video-background>
    </client-only>
    <!-- <v-img
      src="/coding.png"
      gradient="to top right, rgba(0,0,0,.8), rgba(25,32,72,.7)"
      height="calc(100vh)"
    >
      
    </v-img> -->
    <v-card  color="grey darken-4" dark>
      <v-container class="text-center py-16">
        <div class="text-h4 font-weight-black">서버리스 아키텍처 란 무엇인가요?</div>
        <div class="mt-5">
          서버리스 아키텍처는 서버 인프라를 구축 및 관리할 필요 없이<br>
          애플리케이션과 서비스를 구축하고 실행하는 방식입니다.<br>
          단언컨데 구축 및 관리해야할 서버가 없으니 빠른 시간 내에 최소의 비용으로<br>
          플랫폼을 구축할 수 있으며, 서비스에서 가장 중요한 운영비용을 절감할 수 있습니다.
        </div>
        <v-btn class="mt-5" rounded color="primary" depressed>더 자세히 보기</v-btn>
      </v-container>
    </v-card>
    <v-card flat>
      <v-container class="text-center py-16">
        <div class="text-h4 font-weight-black">팀 오픈 서버리스와 함께 해야하는 이유?</div>
        <div class="mt-5">
          <div>창업 경험이 있는 10년차 CTO가 설계부터 개발까지 직접 참여합니다.</div>
          <div>팀 오픈 서버리스는 핵심멤버가 단 1개의 프로젝트만을 진행합니다.</div>
          <div>서버리스로 개발시 유지보수 쉽고, 운영비용을 최소화 할 수 있습니다.</div>
        </div>
        <v-btn class="mt-5">더 자세히 보기</v-btn>
      </v-container>
    </v-card>
    <v-card color="grey lighten-4" flat>
      <v-container class="text-center py-16">
        <div class="text-h4 font-weight-black">서버리스 개발 사례</div>
        <div class="text-h6 mt-1 font-weight-regular">스마트한 기업들이 서버리스 아키텍처를 선택하고 있습니다</div>
        <div class="mt-5">
          <div>창업 경험이 있는 10년차 CTO가 설계부터 개발까지 직접 참여합니다.</div>
          <div>팀 오픈 서버리스는 핵심멤버가 단 1개의 프로젝트만을 진행합니다.</div>
          <div>서버리스로 개발시 유지보수 쉽고, 운영비용을 최소화 할 수 있습니다.</div>
        </div>
      </v-container>
    </v-card>
    <v-card flat>
      <v-container class="text-center py-16">
        <div class="text-h4 font-weight-black">서버리스 관련 소식</div>
        <div class="text-h6 mt-1 font-weight-regular">서버리스 관련 기술, 발표 등의 소식을 모았습니다</div>
        <div class="mt-5">
          <div>창업 경험이 있는 10년차 CTO가 설계부터 개발까지 직접 참여합니다.</div>
          <div>팀 오픈 서버리스는 핵심멤버가 단 1개의 프로젝트만을 진행합니다.</div>
          <div>서버리스로 개발시 유지보수 쉽고, 운영비용을 최소화 할 수 있습니다.</div>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
  },
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
