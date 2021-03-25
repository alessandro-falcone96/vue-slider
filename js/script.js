var app = new Vue(
  {
    el: '#slider',
    data: {
      images: [
        'img/foto-1.jpg',
        'img/foto-2.jpg',
        'img/foto-3.jpg',
        'img/foto-4.jpg',
        'img/foto-5.jpg'
      ],
      imagesIndex: 0
    },
    methods: {
      clickNext: function() {
        this.imagesIndex == (this.images.length - 1) ? this.imagesIndex = 0 : this.imagesIndex++
      },
      clickPrev: function() {
        this.imagesIndex == 0 ? this.imagesIndex = (this.images.length - 1) : this.imagesIndex--
      }
    }
  }
);
