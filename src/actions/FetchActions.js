import Config from '../Config';

const isEmpty = (data) => {
    for (var key in data) {
        if (data.hasOwnProperty(key))
            return false;
    }
    return true;
}

const parseJSON = (response) => {
    return new Promise((resolve, reject) => {
        if (response === undefined || response === null)
            resolve(null);
        else {
            try {
                resolve(response.json());
            }
            catch (e) {
                resolve(null);
            }
        }
    });
}

const get = (route) => {
    var response = null;
    var reponseData = null;
    try {
        console.log("Request Url:: " + Config.BBC_URL + route);
        return fetch(Config.BBC_URL + route, {
            credentials: 'omit',
            method: 'GET'
        })
            .then((_response) => { response = _response; return parseJSON(response); })
            .then((_reponseData) => {
                reponseData = _reponseData;
                if (response.status >= 200 && response.status < 300)
                    return new Promise((resolve, reject) => resolve(reponseData));
                else
                    return new Promise((resolve, reject) => reject(reponseData));
            })
            .catch((errorObject) => {
                if (isEmpty(errorObject))
                    errorObject = [{ message: 'communication error' }];
                else
                    return new Promise((resolve, reject) => reject(errorObject));
            });
    }
    catch (e) {
        alert('exception caught');
    }

}

const post = (route, submitData) => {
    var response = null;
    var reponseData = null;
    try {
        return fetch("", {
            credentials: 'omit',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(submitData)
        })
            .then((_response) => { response = _response; return parseJSON(response); })
            .then((_reponseData) => {
                reponseData = _reponseData;

                if (response.status >= 200 && response.status < 300)
                    return new Promise((resolve, reject) => resolve(reponseData));
                else
                    return new Promise((resolve, reject) => reject(reponseData));
            })
            .catch((errorObject) => {
                if (isEmpty(errorObject))
                    errorObject = [{ message: 'communication error' }];
                else
                    return new Promise((resolve, reject) => reject(errorObject));
            });
    }
    catch (e) {
        alert('exception caught');
    }

}

const put = (route, submitData) => {
    var response = null;
    var reponseData = null;
    try {
        return fetch("" + route, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(submitData)
        })
            .then((_response) => { response = _response; return parseJSON(response); })
            .then((_reponseData) => {
                reponseData = _reponseData;
                if (response.status >= 200 && response.status < 300)
                    return new Promise((resolve, reject) => resolve(reponseData));
                else
                    return new Promise((resolve, reject) => reject(reponseData));
            })
            .catch((errorObject) => {
                if (isEmpty(errorObject))
                    errorObject = [{ message: 'communication error' }];
                else
                    return new Promise((resolve, reject) => reject(errorObject));
            });
    }
    catch (e) {
        alert('exception caught');
    }

}

const FetchActions = {
    get,
    post,
    put
}

export default FetchActions;