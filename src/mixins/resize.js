export default{
    data: () => ({
        small: false
        }),
        created() {
          window.addEventListener('resize', this.onResize);
          this.onResize();
        },
        destroyed() {
          window.removeEventListener('resize', this.onResize)
        },
        methods: {
          onResize() {
              this.small = window.innerWidth <= 991;
          }
        }
}