import { apiInstance } from "./index.js";

const api = apiInstance();

function apiSidoList(success, fail) { 
    api.get(`/map/sido`).then(success).catch(fail);
}

function apiGugunList(params, success, fail) { 
    api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
}

function apiDongList(params, success, fail) { 
    api.get(`/map/dong`, { params: params }).then(success).catch(fail);
}

export { apiSidoList , apiGugunList,apiDongList };