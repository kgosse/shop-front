<template>
    <el-card :body-style="{ padding: '0px' }" class="card">
      <img :src="image" class="image">
      <div style="padding: 14px;">
        <div class="card__title">Yummy hamburger</div>
        <div class="card__description">Lorem ipsum, dolor sit amet consectetur </div>
        <div class="card__info">
          <div class="card__info__stars">
            <el-rate
              v-model="rate"
              disabled
            >
            </el-rate>
            <div>{{reviews}} reviews</div>
          </div>
          <div class="card__info__price">{{price}}€</div>
        </div>
        <div class="card__bottom">
          <div>
            <el-button type="success" plain>Add to card</el-button>
            <el-button icon="el-icon-star-off" circle></el-button>
          </div>
            <el-select v-model="quantity">
              <el-option
                v-for="item in 20"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
  </el-select>
        </div>
      </div>
    </el-card>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      image: "https://picsum.photos/350/250?image=" + Math.ceil(Math.random() * 100),
      rate: Math.ceil((Math.random() * 10)) % 6,
      reviews: Math.ceil((Math.random() * 100)),
      price: Math.ceil((Math.random() * 100)),
      quantity: 1
    };
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.card {
  &__title {
    font-weight: bold;
    margin-bottom: 1em;
  }

  .card__info__price {
    font-weight: bold;
    font-size: 1.5em;
  }

  &__description {
    margin-bottom: 1em;
    color: #757763;
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    border-top: 1px solid #ccc;
    margin-top: 1em;

    .el-select {
      width: 5em;
    }
  }
}

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>