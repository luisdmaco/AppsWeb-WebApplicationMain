import http from '../../core/services/http-common';
export class UserApiService{
    getAll(){
        return http.get('Users');
    }
    getById(id){
        return http.get(`/Users/${id}`);
    }
    create(data){
        return http.post('/Users/, data');
    }
    update(id, data) {
        return http.put(`/Users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/Users/${id}`);
    }

    findByName(name) {
        return http.get(`/Users?title=${name}`);
    }
}