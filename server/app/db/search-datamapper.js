const client = require("./index");

const benchmarkQueryTime = async query => {
  
  const repeats = 1000; // Number of requests

  let avgTime = 0;
  let diff;
  let start;
  let end;

  // If any error while trying one request, return error.
  try {
    await client.query(query);
  } catch (error) {
    console.log(error)
    return error;
  }

  // Launch requests
  for (i = 0; i < repeats; i++) {
    start = new Date().getTime();
    await client.query(query);
    end = new Date().getTime();

    diff = end - start;
    avgTime += diff;
  }
  
  // Format result and return
  const result = (avgTime / 1000) + " seconds";
  console.log(`Average time for ${repeats} request: `, result);
  return result;
}

module.exports = {
  /**
   * Search users and records matching with given expression
   * @param {String} expression - expression to query
   * @returns {Array} - Objects of results
   */
  findAll: async expression => {

    const query = {
      name: "search-users-irecords",
      text: "SELECT * FROM find_users_records($1)",
      values: [expression]
    };

    const result = await client.query(query);
    return result.rows;

  },
  
  /**
   * Search users matching with given expression
   * @param {String} expression - expression to query
   * @returns {Array} - Objects of results
   */
  findUsers: async expression => {

    const query = {
      name: "search-users",
      text: "SELECT * FROM find_users($1)",
      values: [expression]
    };
    
    // return await benchmarkQueryTime(query);
    const result = await client.query(query);
    return result.rows;

  },

  /**
   * Search records matching with given expression
   * @param {String} expression - expression to query
   * @returns {Array} - Objects of results
   */
  findRecords: async expression => {

    const query = {
      name: "search-records",
      text: "SELECT * FROM find_records($1)",
      values: [expression]
    };

    // return await benchmarkQueryTime(query);
    const result = await client.query(query);
    return result.rows;
  },

};
