<template lang="pug">
  .wrapper-content
    header.header
      .header__info
        img.user__image
        p.user__name Матвеев Сергей
        h1.user__title Панель администрирования
      .header__exit
        a.header__btn-exit Выйти
    main.main
        nav.main-nav
          ul.main-nav__list
          - for (var i = 0; i < 2; i++)
            li.main-nav__item
              a.main-nav__link Обо мне
        .main-content
          section.about
            h2 Блок "Обо мне"
            .about__wrapper
              .about__new-group
</template>

<style lang="postcss" scoped>
  .header {
    width: 100%;
  }
</style>
