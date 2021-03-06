// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  return Object.values(obj);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  const prop = Object.keys(obj);
  const ties = Object.values(obj);
  const myObj = {};
  for (let i = 0; i < prop.length; i++) {
    myObj[prop[i]] = cb(ties[i]);
  }
  return myObj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  const prop = Object.keys(obj);
  const ties = Object.values(obj);
  const arr = [];
  for (let i = 0; i < prop.length; i++) {
    arr.push([prop[i], ties[i]]);
  }
  return arr;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const prop = Object.keys(obj);
  const ties = Object.values(obj);
  const myObj = {};
  for (let i = 0; i < prop.length; i++) {
    myObj[ties[i]] = (prop[i]);
  }
  return myObj;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const propDef = Object.keys(defaultProps);
  const tiesDef = Object.values(defaultProps);
  for (let i = 0; i < propDef.length; i++) {
    if (obj[propDef[i]] === undefined) {
      obj[propDef[i]] = tiesDef[i];
    }
  }
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.r
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
