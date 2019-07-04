import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'login',
})
export default class Login extends Vue {
  public error: string = '';

  public loading: boolean = false;

  public login: string = '';

  public password: string = '';

  get env() {
    try {
      return process.env;
    } catch (e) {
      return {};
    }
  }

  public auth() {
    this.loading = true;

    setTimeout( () => this.goMain(), 10000);
  }

  private goMain() {
    const { login, password } = this;
    this.error = '';
    this.$store
      .dispatch('auth/AUTH_REQUEST', { login, password })
      .then((result: any) => {
        if (result.success) {
          this.$EventBus.$emit('UPDATE_VIEW');

          this.$store.dispatch('state/SET_DEFAULT_STATE').then(() => {
            this.$router.push({ name: 'main' });
          });
        } else {
          this.error = result.message;
        }

        this.loading = false;
      });
  }

}
