const _employeeRepository = require('./employee.repository');
const dbContext = require('../../model/database/dbcontext');

module.exports = function (router) {
    const employeeRepository = _employeeRepository(dbContext);

    router.route('/employees')
        .get(employeeRepository.getAll)
        .post(employeeRepository.post);
        
    router.route('/employees/department')
    .get(employeeRepository.getMulti);

    router.use('/employees/:employeeId', employeeRepository.intercept);

    router.route('/employees/:employeeId')
        .get(employeeRepository.get)
        .put(employeeRepository.put)
        .delete(employeeRepository.delete);

}