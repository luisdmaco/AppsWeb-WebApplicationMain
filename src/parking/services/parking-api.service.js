import http from '../../core/services/http-common';

export class ParkingApiService {
    getAll() {
        return http.get('/parking');
    }

    getById(id) {
        return http.get(`/parking/${id}`);
    }

    create(data) {
        return http.post('/parking', data);
    }

    update(id, data) {
        return http.put(`/parking/${id}`, data);
    }

    delete(id) {
        return http.delete(`/parking/${id}`);
    }

    findByTitle(title) {
        return http.get(`/parking?title=${title}`);
    }
}