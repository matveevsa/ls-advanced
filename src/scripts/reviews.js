import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#review__slider-wrapper',
  template: '#review__slider',
  components: {
    Flickity
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false,
        groupCells: true,
        wrapAround: false
      },
      clickBtnCount: 1,
      isDisabledPrev: true,
      isDisabledNext: false
    }
  },
  methods: {
    makeRequireImagesPath(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);

        item.photo = requirePic;

        return item;
      });
    },
    slide(direction) {
      switch(direction) {
        case 'next':
          this.$refs.flickity.next();
          this.clickBtnCount++;
          if (this.clickBtnCount >= this.reviews.length / 2) {
            this.isDisabledNext = true;
          }
          this.isDisabledPrev = false;
          break
        case 'prev':
          this.$refs.flickity.previous();
          this.clickBtnCount--;
          if (this.clickBtnCount <= 1) {
            this.isDisabledPrev = true;
          }
          this.isDisabledNext = false;
          break;
      }
    }
  },
  created() {
    const data = require('../data/reviews.json');
    this.reviews = this.makeRequireImagesPath(data);
  }
});