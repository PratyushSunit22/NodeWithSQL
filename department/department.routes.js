const DepartmentRepository = require('./department.repository');
const dbContext = require('../model/database/dbcontext');

module.exports = function (router) {
const departmentRepository = DepartmentRepository(dbContext);
    router.route('/departments')
        .get(departmentRepository.getDepartments);
}