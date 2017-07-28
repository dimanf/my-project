<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <a class="nav-item is-active">
                Home
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <div class="container">
      <section class="section">
       <div class="container">
         <h1 class="title">Section</h1>
         <h2 class="subtitle">
           A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
         </h2>
       </div>
      </section>

      <section class="section">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input class="input is-large" type="text" placeholder="Find a movie" v-model="searchInput" v-on:keyup.13="fetchMovies()">
          </div>
          <div class="control">
            <a class="button is-primary is-large" v-bind:class="{ 'is-loading': isLoading }" v-on:click="fetchMovies()">
              Search
            </a>
          </div>
        </div>
      </section>

      <div class="columns is-desktop is-multiline">
        <div class="column is-one-quarter-desktop" v-for="movie in getMovies">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="`${movie.Poster}`" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ movie.Title }}</p>
                  <p class="subtitle is-6">{{ movie.Year }}</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a>#css</a> <a>#responsive</a>
                <br>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      searchInput: '',
      loading: false
    }
  },
  computed: {
    getMovies () {
      this.loading = false
      return this.$store.getters.getMovies
    },
    isLoading () {
      return this.loading
    }
  },
  methods: {
    fetchMovies () {
      this.loading = true
      const search = this.searchInput
      this.$store.dispatch('fetchMovies', { search })
    }
  }
}
</script>

<style>

</style>
