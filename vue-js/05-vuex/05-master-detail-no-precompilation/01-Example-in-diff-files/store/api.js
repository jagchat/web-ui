app.api = {
    getEmployeesAsync: function () {
        app.store.commit("DATA_PENDING");
        return jQuery.get({
            url: 'http://localhost:8000/api/Employees',
            cache: false
        }).done(function (data) {
            app.store.commit("DATA_SUCCESS");
            return data;
        }).fail(function (xhr) {
            app.store.commit("DATA_FAILURE");
            console.error(xhr);
        }).always(function () {});
    },

    getEmployeeAsync: function (empno) {
        app.store.commit("DATA_PENDING");
        return jQuery.get({
            url: 'http://localhost:8000/api/Employees/' + empno,
            cache: false
        }).done(function (data) {
            app.store.commit("DATA_SUCCESS");
            return data;
        }).fail(function (xhr) {
            app.store.commit("DATA_FAILURE");
            console.error(xhr);
        }).always(function () {});
    }

};