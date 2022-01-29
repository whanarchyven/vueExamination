<template>
  <div class="about">
    <h1>О разработчиках</h1>
    <h2>Данное приложение было разработано студентами группы 201-327</h2>
    <CardContainer v-model:developers="developers"></CardContainer>
  </div>
</template>

<script>
import CardContainer from "@/components/CardContainer";
export default {
  name: "About",
  components: {CardContainer},
  data(){
    return{
      developers:[
        {id: 1, title:"Иван Забурдаев", text:"Кровью и потом делал структуру этого проекта, компоненты, связывание, методы",socialHref:'https://vk.com/powerfull1488',image:'https://e.mospolytech.ru/old/img/photos/upc_efe80248456c75c48623b4e06f1b5513_1642766010.jpg'},
        {id: 2, title:"Дарья Сёмина", text:"\"Вовремя\" его будила",socialHref: 'https://vk.com/daryassssss', image: 'https://i.ibb.co/HrvS2qX/210517333-1127756094418097-4867788845330133505-n.jpg'}
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>