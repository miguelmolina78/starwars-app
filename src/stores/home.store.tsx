import { action, observable } from 'mobx';
import { Film } from '../interfaces/starwars-interface';

import * as starWarsApi from '../apis/star-wars_api';

export default class HomeStore {

    @observable films: Film[] = [];
    @observable film: Film | any = {};

    @action getFilms = async () => {
        try {
            const { data: films } = await starWarsApi.getFilms();
            this.films = films;
        } catch (error) {
            
        }
    }

    @action getFilmById = async (id:number) => {
        try {
            this.film = {};
            const { data: film } = await starWarsApi.getFilmsById(id);
            this.film = film;
        } catch (error) {
            
        }
    }

}
const homeStore = new HomeStore();

export { homeStore };
