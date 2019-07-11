import Vue from 'vue';

const buttons = {
  template: '#slider-buttons',
  props: {
    isDisabledNext: Boolean,
    isDisabledPrev: Boolean,
    projects: Array,
    currentIndex: Number
  }
}

const thumbs = {
  template: '#slider-thumbs',
  props: {
    projects: Array,
    currentSlide: Object
  }
}

const display = {
  template: '#slider-display',
  props: {
    projects: Array,
    currentSlide: Object,
    isDisabledNext: Boolean,
    isDisabledPrev: Boolean
  },
  components: {
    thumbs,
    buttons
  }
}

const tags = {
  template: '#slider-tags'
}

const info = {
  template: '#slider-info',
  props: {
    currentSlide: Object
  },
  components: {
    tags
  }
}


new Vue({
  el: '#slider-component',
  template: '#slider-container',
  components: {
    display,
    info
  },
  data() {
    return {
      projects: [],
      currentIndex: 0,
      isDisabledNext: false,
      isDisabledPrev: true
    }
  },
  watch: {
    currentIndex(value) {
      if (value > 0) {
        this.isDisabledPrev = false;
      } else {
        this.isDisabledPrev = true;
      }

      if (value == this.projects.length - 1) {
        this.isDisabledNext = true
      } else {
        this.isDisabledNext = false
      }
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
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require('../data/porjects.json');

    this.projects = this.makeRequireImagesPath(data);

    this.currentSlide = this.projects[this.currentIndex];
  }
});